import React from 'react'
import Base from '../core/Base'


const SignIn = ()=>{
    
    const signInForm = ()=>{
        return(
          <div className="row">
              <div className="col-md-6 offset-sm-3 text-left">
                <form>
                    <div className="form-group">
                        <label className="text-light"> E-Mail </label>
                        <input className="form-control" type="email"/>
                    </div>
                    <div className="form-group">
                        <label className="text-light"> Password </label>
                        <input className="form-control" type="password"/>
                    </div>
                    <button className="btn btn-success btn-block">SignIn</button>
    
                </form>
              </div>
          </div>
    
    
        )
    }

    return(
    <Base Title='SignIn Page' description='SignIn into your Account'>
    {signInForm()}
    </Base>
)}


export default SignIn