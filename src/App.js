import React from 'react';
import MainNavBar from './components/MainNavBar';
import Chatbot from './components/Chatbot';

class App extends React.Component {
  render(){
    return (
      <div>
          <MainNavBar/>
          <Chatbot/>
      </div>
    );
  }
}
export default App;
