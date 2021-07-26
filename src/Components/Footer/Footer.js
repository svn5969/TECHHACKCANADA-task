import React from "react";
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faGooglePlusG } from '@fortawesome/free-brands-svg-icons';
import apple from '../../images/app store.png'
import playstore from '../../images/play store.png'
import micro from '../../images/micro.png'

const Footer = () => {
    return (
       
            <footer class="site-footer">
                <div class="container">
                    <div className=" d-flex">
                        <p className="px-1">Home</p>
                        <p className="px-2">|</p>
                        <p className="px-2">Terms & Condition</p>
                        <p className="px-2">|</p>
                        <p className="px-2">Privacy Policy</p>
                        <p className="px-2">|</p>
                        <p className="px-2">Collection Statement</p>
                        <p className="px-2">|</p>
                        <p className="px-2">Help</p>
                        <p className="px-2">|</p>
                        <p className="px-2">Manage Account</p>
                    </div>
                    <div>
                    <p class="copyright-text">
                                Copyright &copy; 2016 dEMO Streaming. All Rights Reserved by <a href="/"> Svn job Task </a>.</p>
                    </div>
                  
                    <hr />
                </div>
                <div class="container">
                    <div class="row">
                        <div class="col-md-8 col-sm-6 col-xs-12">
                            <img style={{width:'100px',height:'40px',borderRadius:'10px'}} src={apple} alt="" />
                            <img style={{width:'100px',height:'40px',marginLeft:'5px',borderRadius:'10px'}} src={playstore} alt="" />
                            <img style={{width:'100px',height:'40px',marginLeft:'5px',borderRadius:'10px'}} src={micro} alt="" />
                        </div>

                        <div class="col-md-4 col-sm-6 col-xs-12">
                            <ul class="social-icons">
                               

                                <li className="list-inline-item"><a href="//facebook.com"><FontAwesomeIcon className="icon active-icon" icon={faFacebookF} /></a></li>
                                <li className="list-inline-item"><a href="//google.com"><FontAwesomeIcon className="icon" icon={faGooglePlusG} /></a></li>
                                <li className="list-inline-item"><a href="//instagram.com"><FontAwesomeIcon className="icon" icon={faInstagram} /></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
       
    );
};

export default Footer;