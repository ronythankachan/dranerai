import React from 'react';

import Linkedin from '../images/linkedin.png';
import GitHub from '../images/github.png';
import Twitter from '../images/twitter.png';
import Instagram from '../images/instagram.png';

function Footer(){
    return (
        <footer className="main-footer">
            <div className="p-2">
                <div className="row">
                    <div className="column col-lg-4 ">
                        <a href="/" >
                            <h5 className="brand-font">draner.ai</h5>
                        </a>
                    </div>
                    <div className="column col-lg-4" >
                        <ul className="list-unstyled">
                            <li>
                                <a href="/projects">PROJECTS</a>
                            </li>
                            <li>
                                <a href="/blog">BLOG</a>
                            </li>            
                            <li>
                                <a href="/contact">CONTACT</a>
                            </li>                        
                        </ul>
                    </div>
                    <div className="column col-lg-4" >
                        <ul className="list-unstyled">
                            <li>
                                <a href="https://in.linkedin.com/in/ronythankachan">
                                    <img src={Linkedin} alt="LinkedIn"/>
                                </a>
                            </li>
                            <li>
                                <a href="https://github.com/ronythankachan">
                                    <img src={GitHub} alt="Github"/>
                                </a>
                            </li>
                            <li>
                                <a href="https://twitter.com/rony_draner">
                                    <img src={Twitter} alt="Twitter"/>
                                </a>
                            </li>
                            <li>
                            <a href="https://www.instagram.com/r_o_n_y_draner/">
                                <img src={Instagram} alt="Instagram"/>
                            </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
}
export default Footer;