import React, { Component,useState,useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Forget_Pass() {
    let navigate=useNavigate()
    const initial_values={Email_address:'',OTP:''}
    const [form_values, setform_values] = useState(initial_values)
    const [form_errors, setform_errors] = useState({})
    const [issubmit, setissubmit] = useState(false)
    const handleChange=(e)=>{
        const { name, value}=e.target
        setform_values({...form_values,[name]:value})
    }
    const handleSubmit=(e)=>{
        e.preventDefault()
        setform_errors(validation(form_values))
        setissubmit(true)
    }
    const validation=(values)=>{
        const errors={}
        const regex_email=/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/
        if(!values.Email_address){
            errors.Email_address='Email address is required'
        }else if(!regex_email.test(values.Email_address)){
          errors.Email_address='Inavlid type email address'
        }
        if(!values.OTP){
            errors.OTP='Fill your OTP'
        }
        return errors
    }
    useEffect(()=>{
        if((Object.keys(form_errors).length===0)&(issubmit)){
          navigate(-1)
        }
    })
  return (
    <div>
    <div className="Login_background">
    <div className="container">
    <form  id="createAccount" onSubmit={handleSubmit}>
      <h1 className="form__title">Forget Password</h1>
      <div className="form__message form__message--error"></div>
      <div className="form__input-group">
        <input
          type="text"
          className="form__input"
          autoFocus
          placeholder="Email Address"
          name='Email_address'
          value={form_values.Email_address}
          onChange={handleChange}
        />
        <div className="form__input-error-message"></div>
      </div>
      <div className="form_error_message" style={{color:'red', textAlign:'center'}}>{form_errors.Email_address}</div>
      <div className="form__input-group">
        <input
          type="password"
          className="form__input"
          autoFocus
          placeholder="OTP"
          name='OTP'
          value={form_values.OTP}
          onChange={handleChange}
        />
        <div className="form__input-error-message"></div>
      </div>
      <div className="form_error_message" style={{color:'red', textAlign:'center'}}>{form_errors.OTP}</div>
      <button className="form__button" type="submit">Continue</button>
      <p className="form__text">
        <Link className="form__link" to='/' id="linkLogin"
          >Already have an account? Sign in</Link>
      </p>
    </form>
    </div>
    </div>
  </div>
  )
}

export default Forget_Pass