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
            <h1 id="title">chemo</h1>
            <h2 id="title">Hello!...</h2>
            <br />
            <br />
            <br />
          </div>
          
          <iframe src="https://ghbtns.com/github-btn.html?user=chemotharepy&type=follow&count=true&size=large" id="github" frameborder="0" scrolling="0" width="250" height="30" title="GitHub"></iframe>
          <div id="description">
            <p id="mainDes">Hi, my name is <span id="span">Swapnil.</span> I'm a <span>Front-End</span> Developer.</p>
            <p id="mainDes" className="work">I'm a stock photographer, freelance webdesigner, I can design cars, build and pilot fpv drones. I work as a <span id="work">Performance Tester.</span> Below are the <span>projects</span> I made and the <span>services</span> I provide.</p>
            <br />
            <p id="secDes"></p>
          </div>
            <br id="container"/>
            
          <Pexel />
          
         
          
          <Phone />

          <div ng-app="MyApp" ng-controller="AppCtrl" id="widthapp">
                                <div class="codeheader" id="codeheader_html">Things Used</div>
                                <div id="codebox">
                                    <pre><code data-language="html">
                                    <p>&lt;React.js /&gt;
                                      <br />
                                    &lt;Spring Rest /&gt;
                                    <br />
                                    &lt;Spring JPA DATA /&gt;
                                    <br />
                                    &lt;Took around 1 week to build, pushed some updates on weekends. /&gt;
                                    <br />
                                    &lt;<a style={{color: 'white'}} href = "https://open.spotify.com/playlist/35579dVKvh2Cue5lyXAJso">My Spotify Playlist</a> to calm my head. /&gt;
                                    </p>
                                    </code></pre>
                                </div>
                        </div>
                        <div ng-app="MyApp" ng-controller="AppCtrl" id="widthapp">
                                <div class="codeheader" id="codeheader_html">Things I do as a Performance Tester</div>
                                <div id="codebox">
                                    <pre><code data-language="html">
                                    <p>&lt;Made and managed portals (React.js) to provide server logs in readable format. /&gt;
                                      <br />
                                    &lt;Made VuGen Scripts to replicate scenario. /&gt;
                                    <br />
                                    &lt;Worked with different middleware services, REST API and softwares like Vugen, Jmeter and Grafana. /&gt;
                                    <br />
                                    </p>
                                    </code></pre>
                                </div>
                        </div>
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
