import React from 'react'
import  "../CSS/loginsignup.css"
const Loginsignup= ()=> {
  return (
    <div className='loginsign'>
      <div className="logcon">
        <h1>Sign Up</h1>
        <div className="logfil">
          <input type='text'placeholder='Your Name'/>
          <input type='email'placeholder='Your Email'/>
          <input type='password'placeholder='Your Password'/>
        <button>Continue</button>
 </div>
        
        <p className='log-log'>
Already have a account?<span>Login here</span>
        </p>
        <div className="log-agg">
          <input type="checkbox" />
          <p>By continuing, I agree to the terms of use and privacy policy.</p>
        </div>
      </div>
    </div>
  )
}

export default Loginsignup;