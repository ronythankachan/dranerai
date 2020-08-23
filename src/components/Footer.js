import React from 'react';
import Container from 'react-bootstrap/Container';

import '../App.css';
import Info from '../images/info.jpg';
import Blog from '../images/blog.png';
import Projects from '../images/projects.jpeg';


function Footer(){
    return (
        <Container>
		    <footer className= "footer-extended">
                <h3 className="brand-font light-text ">
                    <a href="/" >draner.ai</a>
                </h3>
               <span className="footer-links">
                    <a href="/about" >About</a>
                    <a href="/blog" >Blog</a>
                    <a href="/projects" >Projects</a>
                    <a href="/contact" >Contact</a>
                </span> 
            </footer>
        </Container>


    );
}
export default Footer;