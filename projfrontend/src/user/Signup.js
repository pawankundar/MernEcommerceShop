import React from 'react'
import Base from '../core/Base'

const Signup = ()=>{

const signUpForm = ()=>{
    return(
      <div className="row">
          <div className="col-md-6 offset-sm-3 text-left">
            <form>
                <div className="form-group">
                    <label className="text-light"> Name </label>
                    <input className="form-control" type="text"/>
                </div>
                <div className="form-group">
                    <label className="text-light"> E-Mail </label>
                    <input className="form-control" type="email"/>
                </div>
                <div className="form-group">
                    <label className="text-light"> Password </label>
                    <input className="form-control" type="password"/>
                </div>
                <button className="btn btn-success btn-block">SignUp</button>

            </form>
          </div>
      </div>


    )
}
return(
<Base Title="SignUp Page" description="SignUp to create an Account">
{signUpForm()}
</Base>)
}

export default Signup
