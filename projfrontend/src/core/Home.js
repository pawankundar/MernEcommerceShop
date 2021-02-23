import React from 'react';
import "../styles.css";
import {API } from "../backend"
import Base from './Base';


const Home = ()=>{

    console.log('api is', API)
return(
    
    <Base Title="yayy" className="text-white" description ="decription from main component">
        <div className="row">
            <div className="col-2"><button className="btn btn-success">button 1</button></div>
            <div className="col-2"><button className="btn btn-success">button 2</button></div>
        </div>
    </Base>
)
}

export default Home