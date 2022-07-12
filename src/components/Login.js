import React, {Component,useState,useEffect} from 'react'
import { useNavigate} from 'react-router-dom'
import { Link } from 'react-router-dom'
import  axios from 'axios' 

function Login() {
  let navigate= useNavigate()
  let initial_values ={Username:'',Password:''}
  const [form_values, setform_values] = useState(initial_values)
  const [form_errors, setform_errors] = useState({})
  const [issubmit, setissubmit] = useState(false)
  const handleChange=(e)=>{
    const { name, value } =e.target
    setform_values({...form_values,[name]:value})
  }
  const handleSubmit=(e)=>{
    e.preventDefault()
    setform_errors(validation(form_values))  
    setissubmit(true)
   const { Username, Password } = form_values;
    const user = {
      Username: Username,
      Password: Password
    }
    axios.post('http://localhost:5000/login', user)
      .then((res) => console.log('Login Successful.'))
      .catch(err => {
        console.log(err);
      });
  }
  const validation=(values)=>{
    const errors ={};
    if(!values.Username){
      errors.Username="Username is required to login"
    }
    if(!values.Password){
      errors.Password="Password is required to login"
    }
    return errors;
  }
//   useEffect(()=>{
//     if((Object.keys(form_errors).length===0) & (issubmit)){
//       navigate('/user')
//     } 
//   },[form_errors])
  return (
    <div>
        <div className="Login_background">
        <div className='container'>
     <form className="form" id="login"onSubmit={handleSubmit}>
      <h1 className="form__title">Login</h1>
      <div className="form__message form__message--error"></div>
      <div className="form__input-group">
        <input
          type="text"
          className="form__input"
          autoFocus
          placeholder="Username or email"
          name='Username'
          value={form_values.Username}
          onChange={handleChange}
        />
        <div className="form__input-error-message"></div>
      </div>
      <div className="form_error"  style={{color:'red',textAlign:'center'}}>{form_errors.Username}</div>
      <div className="form__input-group">
        <input
          type="password"
          className="form__input"
          autoFocus
          placeholder="Password"
          name='Password'
          value={form_values.Password}
          onChange={handleChange}
        />
        <div className="form__input-error-message"></div>
      </div>
      <div className="form_error" style={{color:'red',textAlign:'center'}}>{form_errors.Password}</div>
      <button className="form__button" type="submit">Continue</button>
      <p class="form__text">
        <Link className="form__link" to='/Forget_pass' id="linkCreateAccount"
          >Forgot your password? </Link>
      </p>
      <p className="form__text">
        <Link className="form__link" to='/Sign_Up' id="linkCreateAccount"
          >Don't have an account? Sign Up </Link>
      </p>
    </form>
    </div>
        </div>
      </div>
  )
}

export default Login
