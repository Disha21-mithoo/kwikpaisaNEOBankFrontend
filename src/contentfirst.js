import React from 'react';
import imgs from './images/img12.png';
import './App.css';


const FContent = () => {
    
    return(
        <div className="card">
  
       <div className="card-body col-lg-12 col-md-12 col-sm-12">
       <div className="title-text">
       <h1 className="card-title">Experience the future of banking with KwikPaisa NEO Bank</h1>
       </div><br></br>
       <div className='abt-titletext'>
    <p className="card-text">
    Say Goodbye to Traditional Banking and Embrace the Era of Innovative Banking with Our User-Friendly Platform.
    </p></div>
    <div className='btn1'>
    <a href="#" className="btn btn-primary fbth-addons-btn"><span className='btname'>Get Started @</span></a>
    </div>
    <div className='lastline'>
        <h4>Embraced by a Global Network of Trust</h4>
    </div>
  </div>
  
  <img src={imgs} className="card-img-top crd-img" /></div>
    )
}

export default FContent;