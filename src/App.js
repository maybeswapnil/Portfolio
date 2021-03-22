import './App.css';
import React from 'react';
import './App.css';

import logo from './../src/git.png';
import logo2 from './../src/linkLogo.png';
import Slideshow from './Slideshow';
import Pexel from './pexel';



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
        <div className="App">
          <div className="classNavbar">
            <nav id="nav-bar">
                <ul>
                  <li><a className="nav-link nav-link1" href="#home">HOME</a></li>
                  <li><a className="nav-link nav-link1" href="#description">ABOUT</a></li>
                  <li><a className="nav-link nav-link1" href="#work">WORK</a></li>
                  <li><a className="nav-link nav-link1" href="#work" onClick={this.changeViewContact}>CONTACT</a></li>
                </ul>
                <ul className="rightNav">
                  <li><a className="nav-link nav-link2" id="git" href = "https://github.com/chemotharepy"><img id="logo" src={logo} alt="logo" /></a></li>
                  <li><a className="nav-link nav-link2" id="git" href = "https://www.linkedin.com/in/swapnil5harma/"><img id="logo2" src={logo2} alt="logo" /></a></li>
                </ul>
            </nav>
          </div>
          <div className="classTitle" id="home">
            <h1 id="title">Called</h1>
            <h2 id="title">blend</h2>
          </div>

          <div id="description">
            <br id="space"/>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <p id="mainDes">Hi, my name is <span id="span">Swapnil.</span> I'm a <span>Front-End</span> Developer.</p>
            <p id="mainDes" className="work">I'm a stock photographer, freelance webdesigner, I can design cars, build and pilot fpv drones. I work as a <span id="work">Performance Tester.</span> Below are the <span>projects</span> I made and the <span>services</span> I provide</p>
            <br />
            <p id="secDes"></p>
          </div>
            <br id="container"/>
          <Pexel />
          <br />
          <br />
          <p id="mainDes" className="work" style={{fontSize:"50px", paddingRight:"800px"}}>Other <span>Projects</span></p>
          <br />
          <br />
          <Slideshow />
          <br />
          <br />
          <p id="mainDes">Thanks you for going through the page.</p>
            <p id="mainDes" className="work">It's a work in progress so check back often!</p>
          <br />
          <div id="footer">
            <footer>© 2021 COPYRIGHT hellochemo | Find me on the links provided. | Peace out.</footer>
          </div>
        </div>
      );
  }

}

export default App;
