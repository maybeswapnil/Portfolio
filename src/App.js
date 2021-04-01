import './App.css';
import React from 'react';
import './App.css';

import Slideshow from './Slideshow';
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
        <br />
        <br />
          <div className="classTitle" id="home">
            <h1 id="title">chemo</h1>
            <h2 id="title">Hello!...</h2>
            <br />
            <br />
            <br />
          </div>
          <button id="github" onClick={() => window.open("https://github.com/chemotharepy")}>Github</button>
          <br />
          <br />
          <br />
          <button id="github" onClick={() => window.open("https://www.linkedin.com/in/swapnil5harma/")}>Linkedin</button>
          <div id="description">
            <p id="mainDes">Hi, my name is <span id="span">Swapnil.</span> I'm a <span>Front-End</span> Developer.</p>
            <p id="mainDes" className="work">I'm a stock photographer, freelance webdesigner, I can design cars, build and pilot fpv drones. I work as a <span id="work">Performance Tester.</span> Below are the <span>projects</span> I made and the <span>services</span> I provide.</p>
            <br />
            <p id="secDes"></p>
          </div>
            <br id="container"/>
            
          <Phone />
          <Pexel />
          <br />
          <br />
          <p id="mainDes" className="work dod" style={{fontSize:"50px", paddingRight:"800px"}}>Other <span>Projects</span></p>
          <br />
          <br />
          <Slideshow />
          <br />
          <br />
          <div id="mot">
              <p id="mainDes"><span>Thank you!!</span> for going through the page. It's a <span>work in progress</span> so check back often!</p>
              <p id="mainDes" className="work"></p>
          </div>
          <br />
          <div id="footer">
            <footer>© 2021 COPYRIGHT hellochemo | Find me on the links provided. | Peace out.</footer>
          </div>
        </div>
      );
  }

}

export default App;
