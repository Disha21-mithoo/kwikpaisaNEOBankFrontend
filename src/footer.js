import React from 'react';
import "./footer.css";
import imgs1 from './images/white-logo.png';
import loco from "./images/icons8-location-30.png"



const Foter = () => {
    
return(
        
<footer className=" foter">


<div className="">

  
  <div className="row">

    
    <div className="col-md-3 col-sm-6">

      
      

      
        
          <h5 className='fh5'>Company</h5>
        
        
          <a href="#" ><h6 className='fh6'>About Us</h6></a>
        
        
          <a href="#" ><h6 className='fh6'>Contact</h6></a>
        
        
          <a href="#" ><h6 className='fh6'>Careers</h6></a>
        
        
          <a href="#" ><h6 className='fh6'>Feature</h6></a>
        
        
          <a href="#" ><h6 className='fh6'>Awards</h6></a>
        
        
          <a href="#" ><h6 className='fh6'>Recognition</h6></a>
        
        
          <a href="#" ><h6 className='fh6'>Press & Media</h6></a>
        
        
          <a href="#" ><h6 className='fh6'>Term & Conditions</h6></a>
        
        
          <a href="#" ><h6 className='fh6'>Privacy & Policies</h6></a>
        
        
          <a href="#" ><h6 className='fh6'>Return & Refund Policies</h6></a>
        
        
          <a href="#" ><h6 className='fh6'>Responsible Disclosure</h6></a>
        
        
          <a href="#" ><h6 className='fh6'>Service Agreement</h6></a>
        
        
          <a href="#" ><h6 className='fh6'>Safety & Security</h6></a>
        
    
      

    </div>
    
    

    
    <div className="col-md-3 col-sm-h6">

      
      

      
        
          <h5 className='fh5'>Use Case</h5>
        
        
          <a href="#" ><h6 className='fh6'>Banking Use Case</h6></a>
        
        
          <a href="#" ><h6 className='fh6'>PG Use Case</h6></a>
        
        
          <a href="#" ><h6 className='fh6'>Lending & Credit Use Case</h6></a>
        
        
          <a href="#" ><h6 className='fh6'>Investment Use Case</h6></a>
        
        
          <a href="#" ><h6 className='fh6'>Other Use Case</h6></a>
        
        
          <a href="#" ><h6 className='fh6'>Developer Documentation</h6></a>
        
        
          <a href="#" ><h6 className='fh6'>Full API Reference</h6></a>
        
        
          <a href="#" ><h6 className='fh6'>Developer Support</h6></a>
        
      

    </div>
    

    

    
    <div className="col-md-3 col-sm-h6">

      
      

      
        
          <h5 className='fh5'>Products</h5>
        
        
          <a href="#" ><h6 className='fh6'>Payment Gateway</h6></a>
        
        
          <a href="#" ><h6 className='fh6'>Invoice & Accounting</h6></a>
        
        
          <a href="#" ><h6 className='fh6'>Capital & Lending</h6></a>
        
        
          <a href="#" ><h6 className='fh6'>Banking</h6></a>
        
        
          <a href="#" ><h6 className='fh6'>Card Cards</h6></a>
        
        
          <a href="#" ><h6 className='fh6'>Buy Now Pay Later</h6></a>
        
        
          <a href="#" ><h6 className='fh6'>Risk & Fraud</h6></a>
        
        
          <a href="#" ><h6 className='fh6'>Subscriptions</h6></a>
        
        
          <a href="#" ><h6 className='fh6'>Smart Collect</h6></a>
        
        
          <a href="#" ><h6 className='fh6'>Route Payment Split</h6></a>
        
        
          <a href="#" ><h6 className='fh6'>OonePe - Global App</h6></a>
        
        
          <a href="#" ><h6 className='fh6'>Customer Service Point</h6></a>
        
      

    </div>
    

    

    
    <div className="col-md-3 col-sm-6">

      
      

      
      
          <h5 className='fh5'>Resources</h5>
        
        
          <a href="#" ><h6 className='fh6'>Blogs</h6></a>
        
        
          <a href="#" ><h6 className='fh6'>Customer Stories</h6></a>
        
        
          <a href="#" ><h6 className='fh6'>Events</h6></a>
        
        
          <a href="#" ><h6 className='fh6'>Founders's Profile</h6></a>
        
        
          <a href="#" ><h6 className='fh6'>Startup Offers</h6></a>
        
        
          <a href="#" ><h6 className='fh6'>Chargeback Guide</h6></a>
        
        
          <a href="#" ><h6 className='fh6'>Settlements Guide</h6></a>
        
        
          <a href="#" ><h6 className='fh6'>Support System</h6></a>
        
        
          <a href="#" ><h6 className='fh6'>Knowledge Base</h6></a>
        
        
          <a href="#" ><h6 className='fh6'>Disclaimer</h6></a>
        
        
          <a href="#" ><h6 className='fh6'>Grievance Redressal</h6></a>
        
        
          <a href="#" ><h6 className='fh6'>Join Community</h6></a>
        
        
          <a href="#" ><h6 className='fh6'>Request Demo</h6></a>
        
      

    </div>
    

  </div>


</div>





<section className='footerEnd'>

<div className='row frow'>
    <div className='col-lg-6 col-md-12 col-sm-12 cc1'>
        <img src={imgs1} className='fimg'></img>
        
        <h2 className='fh2'>Banking solution that just makes sense</h2>
    </div>
    <div className='col-lg-6 col-md-12 col-sm-12 cc2'>
    <p className='imgline'><span><img src={loco} className='locicon'></img></span> 378-379, 2nd Floor, Electronic City - Udyog Vihar Phase 4, Gurugram
Haryana - 122015</p>
<br></br><br></br>
<p><span><img src={loco} className='locicon'></img></span>letstalk@kwikpaisa.com</p>
    </div>
</div>
<div className="footer-copyright text-center py-3 copyright"> Copyright © 2023 KwikPaisa NEO Bank. All Rights Reserved
</div>
</section>

</footer>



    );
}



export default Foter;