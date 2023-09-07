import React from 'react';
import "./contentsecond.css";
import img1 from "./images/shap.svg";
import img2 from "./images/content-shape8.svg";
import img3 from "./images/content-shape9.svg";
import img4 from "./images/cta-img1.png";
import img5 from "./images/cta-img2.png";



const SContent = () => {
    
    return(
        <div className='scontent'>
            <div class="row scrow scrow1">
  <div class="col-lg-6 col-sm-12">
    <img className="img1" src={img1}></img>
    <img className="img2" src={img2}></img>
    <img className="img3" src={img3}></img>
    <img className="img4" src={img4}></img>
    <img className="img5" src={img5}></img>
  </div>
  <div class="col-lg-6 col-sm-12">
    <div class="card sccard">
      <div class="card-body sccard-body">
        <div className='titlesc'>
        <h5 class="card-title sccard-title">Start global banking easy & fast with KwikPaisa NEO Bank.</h5></div>
        <div className='textsc'>
        <p class="card-text sccard-text">Unlock the Future of Banking with KwikPaisa NEO Bank: Simplify Your Finances, Accelerate Your Growth!</p>
        {/* <a href="#" class="btn btn-primary scbtn">Go somewhere</a> */}
      </div></div>
    </div>
  </div>
  <span className='btn2'>
    <a href="#" className="btn btn-primary fbth-addons-btn scbt"><span className='btname'>Contact Sales</span></a>
    </span>
</div>
        </div>
    );
}

export default SContent;