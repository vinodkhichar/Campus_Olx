require("dotenv").config();
const express = require('express');
const ejs = require('ejs');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const session = require("express-session");
const passport = require('passport');
const cors=require("cors");
const corsOptions ={
   origin:'*', 
   credentials:true,            //access-control-allow-credentials:true
   optionSuccessStatus:200,
}

app.use(cors(corsOptions)) 
const passportLocalMongoose = require('passport-local-mongoose');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const findOrCreate = require('mongoose-findorcreate');
const FacebookStrategy = require('passport-facebook').Strategy;
const MicrosoftStrategy = require('passport-microsoft').Strategy;

const app = express();

app.use(cors());
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(session({
  secret: "Our little secret.",
  resave: false,
  saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());

mongoose.connect("mongodb://localhost:27017/campus_olx_DB");

const userSchema = new mongoose.Schema({
  username: String,
  email: String,
  password: String,
  googleId: String,
  facebookId: String,
  microsoftId: String,
});

userSchema.plugin(passportLocalMongoose);
userSchema.plugin(findOrCreate);

const User = new mongoose.model("User", userSchema);

passport.use(User.createStrategy());

passport.serializeUser(function(user, done) {
  //user.id is not profile id. it is id that created by the database
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  User.findById(id, function(err, user) {
    done(err, user);
  });
});

passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: "http://localhost:5000/auth/google/secrets"
  },
  function(accessToken, refreshToken, profile, cb) {
    User.findOrCreate({
      googleId: profile.id
    }, function(err, user) {
      return cb(err, user);
    });
  }
));

passport.use(new FacebookStrategy({
    clientID: process.env.FACEBOOK_APP_ID,
    clientSecret: process.env.FACEBOOK_APP_SECRET,
    callbackURL: "http://localhost:5000/auth/facebook/secrets"
  },
  function(accessToken, refreshToken, profile, cb) {
    User.findOrCreate({
      facebookId: profile.id
    }, function(err, user) {
      return cb(err, user);
    });
  }
));

passport.use(new MicrosoftStrategy({
    // Standard OAuth2 options
    clientID: process.env.MICROSOFT_CLIENT_ID,
    clientSecret: process.env.MICROSOFT_CLIENT_SECRET,
    callbackURL: "http://localhost:5000/auth/microsoft/secrets",
    scope: ['user.read'],

    // Microsoft specific options

    // [Optional] The tenant for the application. Defaults to 'common'.
    // Used to construct the authorizationURL and tokenURL
    tenant: 'common',

    // [Optional] The authorization URL. Defaults to `https://login.microsoftonline.com/${tenant}/oauth2/v2.0/authorize`
    authorizationURL: 'https://login.microsoftonline.com/common/oauth2/v2.0/authorize',

    // [Optional] The token URL. Defaults to `https://login.microsoftonline.com/${tenant}/oauth2/v2.0/token`
    tokenURL: 'https://login.microsoftonline.com/common/oauth2/v2.0/token',
  },
  function(accessToken, refreshToken, profile, done) {
    User.findOrCreate({
      microsoftId: profile.id
    }, function(err, user) {
      return done(err, user);
    });
  }
));


// home page //
app.get("/", function(req, res) {
  res.render("home");
});




// authentication //
app.get("/auth/google",
  passport.authenticate("google", {
    scope: ["profile"],
    prompt: 'select_account'
  })
);

app.get("/auth/google/secrets",
  passport.authenticate("google", {
    failureRedirect: "/login"
  }),
  function(req, res) {
    // Successful authentication, redirect to secrets.
    res.redirect("/secrets");
  });

app.get('/auth/facebook',
  passport.authenticate('facebook')
);

app.get('/auth/facebook/secrets',
  passport.authenticate('facebook', {
    failureRedirect: '/login'
  }),
  function(req, res) {
    // Successful authentication, redirect home.
    res.redirect('/secrets');
  });

app.get('/auth/microsoft',
  passport.authenticate('microsoft', {
    // Optionally define any authentication parameters here
    // For example, the ones in https://docs.microsoft.com/en-us/azure/active-directory/develop/v2-oauth2-auth-code-flow

    prompt: 'select_account',
  }));

app.get('/auth/microsoft/secrets',
  passport.authenticate('microsoft', {
    failureRedirect: '/login'
  }),
  function(req, res) {
    // Successful authentication, redirect home.
    res.redirect('/secrets');
  });



// login page //
app.get("/login", function(req, res) {
  res.render("login");
});
app.post("/login", function(req, res) {
  const user = new User({
    username: req.body.username,
    password: req.body.password
  });

  req.login(user, function(err) {
    if (err) {
      console.log(err);
      // res.redirect('/register');
    } else {
      passport.authenticate("local")(req, res, function() {
        res.redirect("/secrets");
      });
    }
  });
});


// register page //
app.get("/register", function(req, res) {
  res.render("register");
});
app.post("/register", function(req, res) {
  User.register({
    username: req.body.username
  }, req.body.password, function(err, user) {
    if (err) {
      console.log(err);
      res.redirect("/register");
    } else {
      passport.authenticate("local")(req, res, function() {
        res.redirect("/secrets");
      });
    }
  });
});

// app.get("/submit", function(req, res) {
//   if (req.isAuthenticated()) {
//     res.render("submit");
//   } else {
//     res.redirect("/login");
//   }
// });
// app.post("/submit", function(req, res) {
//   const submittedSecret = req.body.secret;
//
//   User.findById(req.user.id, function(err, user) {
//     if (err) {
//       console.log(err);
//     } else {
//       if (user) {
//         user.secret = submittedSecret;
//         user.save(function() {
//           res.redirect("/secrets");
//         });
//       }
//     }
//   });
// });

app.get("/secrets", function(req, res) {
  User.find({
    "secret": {
      $ne: null
    }
  }, function(err, users) {
    if (err) {
      console.log(err);
    } else {
      if (users) {
        res.render("secrets", {
          usersWithSecrets: users
        });
      }
    }
  });
});

app.get("/logout", function(req, res) {
  req.logout(function(err) {
    if (err) {
      console.log(err);
    } else {
      res.redirect("/");
    }
  });

});



app.listen(process.env.PORT || 5000, function() {
  console.log('Server started on port 5000.');
});