import React, {Component,useState,useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'

function Sign_Up() {
  let navigate= useNavigate()
  let initial_values ={Username:'',Email_address:'',Password:'',Confirmed_password:''}
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
  }
  const validation=(values)=>{
    const errors ={};
    const regex_email=/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/
    if(!values.Username){
      errors.Username="Username is required to Sign up"
    }
    if(!values.Password){
      errors.Password="Password is required to Sign up"
    }
    if(!values.Email_address){
      errors.Email_address="Email address is required to Sign up"
    }else if(!regex_email.test(values.Email_address)){
      errors.Email_address='Inavlid type email address'
    }
    if(!values.Confirmed_password){
      errors.Confirmed_password='Confirmation of password is required to sign up'
    }
    if(values.Password!=values.Confirmed_password){
      errors.pass_match='Password do not match'
    }
    return errors;
  }
  useEffect(()=>{
    if((Object.keys(form_errors).length===0) & (issubmit)){
      navigate(-1)
    } 
  },[form_errors])
  return (
    <div>
        <div className="Login_background">
        <div className='container'>
     <form className="form" id="sign_up"onSubmit={handleSubmit}>
      <h1 className="form__title">Sign up</h1>
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
          type="text"
          className="form__input"
          autoFocus
          placeholder="Email address"
          name='Email_address'
          value={form_values.Email_address}
          onChange={handleChange}
        />
        <div className="form__input-error-message"></div>
      </div>
      <div className="form_error"  style={{color:'red',textAlign:'center'}}>{form_errors.Email_address}</div>
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
      <div className="form__input-group">
        <input
          type="password"
          className="form__input"
          autoFocus
          placeholder="Confirm your password"
          name='Confirmed_password'
          value={form_values.Confirmed_password}
          onChange={handleChange}
        />
        <div className="form__input-error-message"></div>
      </div>
      <div className="form_error" style={{color:'red',textAlign:'center'}}>{form_errors.Confirmed_password}</div>
      <div className="form_error" style={{color:'red',textAlign:'center'}}>{form_errors.pass_match}</div>
      <button className="form__button" type="submit">Continue</button>
      <p class="form__text">
        <Link className="form__link" to='/Forget_pass' id="linkCreateAccount"
          >Forgot your password? </Link>
      </p>
      <p className="form__text">
        <Link className="form__link" to='/' id="linkCreateAccount"
          >Already sign up? sign in </Link>
      </p>
    </form>
    </div>
        </div>
      </div>
  )
}

export default Sign_Up