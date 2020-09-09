import React from 'react';
import MainNavBar from './components/MainNavBar';
import Chatbot from './components/Chatbot';
import Footer from './components/Footer';


class App extends React.Component {
  render(){
    return (
      <div>
          <MainNavBar/>
          <Chatbot/>
          <Footer/>
      </div>
    );
  }
}
export default App;
