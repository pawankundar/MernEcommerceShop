
import "../styles.css";
import {API } from "../backend"
import Base from './Base';


const Home = ()=>{

    console.log('api is', API)
return(
    
    <Base Title="Home Page" className="text-white" description ="This is the HomePage">
        <div className="row">
    
        </div>
    </Base>
)
}

export default Home