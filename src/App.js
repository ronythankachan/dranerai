import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Switch from 'react-router-dom/Switch';
import './App.css';

import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import BlogPage from './pages/BlogPage';
import ContactPage from './pages/ContactPage';
import ProjectsPage from './pages/ProjectsPage';
import MainNavBar from './components/MainNavBar';
import Chatbot from './components/Chatbot';

class App extends React.Component {

  constructor(props){
    super(props);
    this.state ={
      title:'draner',
      headerLinks:[
        {title: 'Home', path:'/'},
        {title: 'About', path:'/about'},
        {title: 'Blog', path:'/contact'},
        {title: 'Projects', path:'/projects'},
        {title: 'Contact', path:'/contact'}
      ]
    }

  }

  render(){
    return (
      <Router>
        <Container className="p-0" fluid={true}>
          <MainNavBar/>
          <Switch>
            <Route exact path="/" children={<HomePage />} />
            <Route path="/about" children={<AboutPage />} />
            <Route path="/blog" children={<BlogPage />} />
            <Route path="/projects" children={<ProjectsPage />} />
            <Route path="/contact" children={<ContactPage />} />
          </Switch>
          {/* <Footer/> */}
          <Chatbot/>
        </Container>
      </Router>
    );
  }
}

export default App;
