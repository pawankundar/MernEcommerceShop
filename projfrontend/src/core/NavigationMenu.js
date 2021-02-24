import React from 'react';
import {Link,withRouter} from 'react-router-dom'


const currentTab =(history,path)=>{

  
 return history.location.pathname === path ?   {color : ' #E8BD0D'} :  {color : '#ffffff'}

}

const NavigationMenu =(history)=>(
    <div>
        <ul className="nav nav-tabs bg-dark">
            <li className="nav-item">
                <Link style={currentTab(history,'/')} className='nav-link' to='/'>
                    Home
                </Link>
            </li>
            <li className="nav-item">
                <Link style={currentTab(history,'/cart')} className='nav-link'>
                Cart
                </Link>
            </li>
            <li className="nav-item">
                <Link style={currentTab(history,'/dashboard')} className='nav-link'>
                    DashBoard
                </Link>
            </li>
            <li className="nav-item">
                <Link style={currentTab(history,'/admindashboard')}  className='nav-link'>
                    Admin DashBoard
                </Link>
            </li>
            <li className="nav-item">
                <Link style={currentTab(history,'/signup')} to='/signup' className='nav-link'>
                    Signup
                </Link>
            </li>
            <li className="nav-item">
                <Link style={currentTab(history,'/signin')} to='/signin'className='nav-link'>
                    Sign-In
                </Link>
            </li>
            <li className="nav-item">
                <Link style={currentTab(history,'/signout')} className='nav-link' to='signout'>
                    Sign-Out
                </Link>
            </li>
        </ul>

    </div>
)

export default withRouter(NavigationMenu)