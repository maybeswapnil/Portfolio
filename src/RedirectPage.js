import './App.css';
import React from 'react';

class RedirectPage extends React.Component {
    componentDidMount(){
      window.location.replace('https://competent-agnesi-97b92f.netlify.app/')
    }  render(){
      return null;
    }
  
}

  export default RedirectPage;