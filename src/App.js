import './App.css';
import React from 'react';
import './App.css';

import Pexel from './Pexel';
import Phone from './Phone';



class App extends React.Component {

  constructor(props) {
      super(props);

      this.state = {
        view: 1,
        name: ""
      };
      this.changeViewHome = this.changeViewHome.bind();
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
  }

  changeViewContact = (props) => {
    props.history.push("/contact");
  }

  changeViewHome() {
    this.setState(state => ({
       view: 1
    }));
  }

  handleChange = e => {
    this.setState({
        name: e.target.value
    });
  }

  handleSubmit() {
    console.log(this.state.name);
    this.setState(state => ({
      view: 2
  }));
  }

  
  render() {
      return (
        <div className="App"><br />
        
        <script async defer src="https://buttons.github.io/buttons.js"></script>
        <br />
        <br />
          <div className="classTitle" id="home">
            <h1 id="title">Sharma</h1>
            <h2 id="title">Swapnil</h2>
            <br />
            <br />
            <br />
          </div>
          
          <iframe src="https://ghbtns.com/github-btn.html?user=chemotharepy&type=follow&count=true&size=large" id="github" frameborder="0" scrolling="0" width="250" height="30" title="GitHub"></iframe>
          <a href={require("./resume.pdf")} download="resume">
            <button id="resume" frameborder="0" scrolling="0" width="250" height="30" title="Download" ><img src="https://img.icons8.com/material-outlined/16/000000/desktop-download.png"/> Download Resume</button>
            </a>

          <div id="description">
          <Phone />
            <p id="mainDes">Hi, my name is <span id="span">Swapnil.</span> I'm a <span>Front-End</span> Developer.</p>
            <p id="mainDes" className="work">I'm a stock photographer, freelance webdesigner, I can design cars, build and pilot fpv drones. I work as a <span id="work">Performance Tester.</span> Below are the <span>projects</span> I made and the <span>services</span> I provide.</p>
            <br />
            <p id="secDes"></p>
          </div>
            <br id="container"/>
            
          <Pexel />
        
          <br />
          
         
          <br />
          <div id="footer">
            <footer>© 2021 COPYRIGHT hellochemo | Find me on the links provided. | Peace out.</footer>
          </div>
        </div>
      );
  }

}

export default App;
