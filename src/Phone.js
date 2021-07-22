import './App.css';
import React from 'react';

class Phone extends React.Component {

    constructor(props) {
        super(props);
  
        this.state = {
          value: "",
          message: "",
          view: true
        };
        

    }
        render() {
                    return(
                        <div ng-app="MyApp" ng-controller="AppCtrl" id="widthapp">
                                <div class="codeheader" id="codeheader_html">About</div>
                                <div id="codebox">
                                    <pre><code data-language="html" id="lolp">
                                        <div id="lolp">
                                    <p><span id="sumn">&lt;</span>info<span id="sumn">&gt;</span><br/>
                                        <span id="sumn">&lt;</span>Hi, my name is Swapnil<span id="sumn">&gt;</span><br />
                                        <span id="sumn">&lt;</span>I'm a Front-End Developer<span id="sumn">&gt;</span>
                                        <br />
                                        <span id="sumn">&lt;</span>I'm a stock photographer, 
                                        <br /> freelance webdesigner,
                                        <br /> I can design cars,
                                        <br /> build and pilot fpv drones<span id="sumn">&gt;</span>
                                        <br />
                                        <span id="sumn">&lt;</span>/info<span id="sumn">&gt;</span>
                                    </p>
                                    </div>
                                    </code></pre>
                                </div>
                        </div>
            );
        
        }
}
export default Phone;

