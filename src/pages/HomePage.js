import React from 'react';
import HomeBlogCards from '../components/HomeBlogCards';
import HomeProjectCards from '../components/HomeProjectCards';
import Container from 'react-bootstrap/Container';
import HomeJumbotron from '../components/HomeJumbotron';
import HomeNewsLetter from '../components/HomeNewsLetter';

function HomePage(props){
    return(
        <Container>
            <HomeJumbotron/>
            <div> 
                <h1 className="section-heading">Projects</h1>
                <HomeProjectCards/>
            </div>
            <hr/>
            <div>
                <h1 className="section-heading">Blogs</h1>
                <HomeBlogCards/>
            </div>
            <hr/>
            <HomeNewsLetter/>
            
        </Container>
    );
}
export default HomePage;
