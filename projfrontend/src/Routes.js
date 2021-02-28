import React from 'react';
import {BrowserRouter,Route,Switch} from 'react-router-dom'

import Home from './core/Home'
import SignIn from './user/Signin';
import Signup from './user/Signup';

import PrivateRoute from './auth/helper/PrivateRoutes';
import userDashBoard from './user/UserDashBoard';
import adminDashBoard from './user/AdminDashBoard';



const Routes = ()=>{
    return(
        <BrowserRouter>
        <Switch>
            <Route path ='/' exact component ={Home} />
            <Route path = '/signup' exact component ={Signup}/>
            <Route path ='/signin' exact component ={SignIn}/>
            <PrivateRoute path ='/user/userdashboard' exact component = {userDashBoard}/>
            <PrivateRoute path='/admin/admindashboard'exact component ={adminDashBoard}/>
        </Switch>
        </BrowserRouter>
    )
}

export default Routes