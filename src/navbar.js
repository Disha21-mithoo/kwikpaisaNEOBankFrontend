import React from 'react';
import Logo from './images/logo-img.png';
import './App.css';

const Navbar = () => {
    
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">
          <img src={Logo}></img>
        </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
      
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Banking
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href="#">KwikX Saving</a>
                <a className="dropdown-item" href="#">KwikX Saving + Salary</a>
                <a className="dropdown-item" href="#">KwikX Business</a>
                <a className="dropdown-item" href="#">KwikX Escrow+Account</a>
                <a className="dropdown-item" href="#">KwikX Global</a>
                <a className="dropdown-item" href="#">KwikX Forex</a>
                <a className="dropdown-item" href="#">KwikX Payouts(DMT)</a>
                <a className="dropdown-item" href="#">KwikX CMS & Payroll </a>
                
              </div>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle " href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Payment
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href="#">Payment Gateway</a>
                <a className="dropdown-item" href="#">Payment Links</a>
                <a className="dropdown-item" href="#">Payment Button</a>
                <a className="dropdown-item" href="#">UPI AutoPay</a>
                <a className="dropdown-item" href="#">Subscriptions</a>
                <a className="dropdown-item" href="#">Smart Collect</a>
                <a className="dropdown-item" href="#">Route (payment Split)</a>
                <a className="dropdown-item" href="#">Invoices (GST Compliant)</a>
                <a className="dropdown-item" href="#">International Payments</a>
              </div>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Cards
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href="#">Spending Card</a>
                <a className="dropdown-item" href="#">Gift Cards</a>
                <a className="dropdown-item" href="#">Virtual Credit Cards</a>
              </div>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">OonePe</a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Fintech APIs
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href="#">NEO Banking APIs</a>
                <a className="dropdown-item" href="#">Payment APIs</a>
                <a className="dropdown-item" href="#">Utility APIs</a>
                <a className="dropdown-item" href="#">Insurance APIs</a>
                <a className="dropdown-item" href="#">Investment APIs</a>
                <a className="dropdown-item" href="#">Travel APIs</a>
                <a className="dropdown-item" href="#">Lending APIs</a>
              </div>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Resources
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href="#">Developer Docs</a>
                <a className="dropdown-item" href="#">Blogs</a>
                <a className="dropdown-item" href="#">Customer Stories</a>
                <a className="dropdown-item" href="#">Whitepaper</a>
                <a className="dropdown-item" href="#">Knowledge Base</a>
                <a className="dropdown-item" href="#">Events</a>
              </div>
            </li>
          </ul>
      
          <button type="button" className="btn btn-outline-dark">Login/SignUp</button>
        </div>
      </nav>
    );
}

export default Navbar;