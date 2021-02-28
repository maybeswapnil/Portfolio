import './App.css';
import React from 'react';
import logo from './../src/git.png';
import logo2 from './../src/linkLogo.png';
import Slideshow from './Slideshow';
import Pexel from './pexel';


class App extends React.Component {

  constructor() {
      super();

      this.state = {
        slideIndex: 1
      };

      this.plusSlides = this.plusSlides.bind(this);
      this.currentSlides = this.plusSlides.bind(this);
      this.showSlides = this.plusSlides.bind(this);
  }

  plusSlides(n) {
   
  }
  
  currentSlide(n) {
   
  }
  
  showSlides(n) {
    
  } 

  componentDidMount() {
    this.showSlides(this.slideIndex);
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
                  <li><a className="nav-link nav-link1" href="#abstract">CONTACT</a></li>
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
          <br />
          <br />
          <br />
          <Slideshow />
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
