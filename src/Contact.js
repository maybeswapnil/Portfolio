import './App.css';
import React from 'react';
import Main from './Main';
import Form from './Form';
import { withRouter } from 'react-router-dom';


const colors = ['#16a085',
                '#27ae60',
                '#2c3e50',
                '#f39c12',
                '#e74c3c',
                '#9b59b6',
                '#FB6964',
                '#342224',
                '#472E32',
                '#BDBB99',
                '#77B1A9',
                '#73A857'];

class Login extends React.Component {

  constructor(props) {
      super(props);

      this.state = {
        value: "",
         count: 0,
         final: "please provide the review",
         mock: ""
      };
      this.handleChange = this.handleChange.bind(this);
      this.random = this.random.bind(this);
      this.reload = this.reload.bind(this);
  }
  reload() {
    var c = Math.floor(Math.random()*10);
    this.setState(state => ({
        color: colors[c]
      }));
  }

  tick() {
    var rand = this.random();
    this.reload();
    this.setState(state => ({
      mock: this.state.value + rand
    }));
    if(this.state.final.charAt(this.state.count)===rand) {
        this.handleChange();
        this.setState(state => ({
          value: this.state.value + rand
        }));
        this.setState(state => ({
          mock: this.state.value
        }));
        this.setState(state => ({
          count: this.state.count+1
        }));
    }
  }

  componentDidMount() {
    this.interval = setInterval(() => this.tick(), 0.1);
  }


  handleChange() {
    if(this.state.count===24) {
      clearInterval(this.interval);
    }
  }

  random() {
    const alphabet = "abcdefhilmnopqrvstuw, ";
    return alphabet[Math.floor(Math.random() * alphabet.length)];
  }

  render() {
   
      return (
        <div className="login">
          <div className="top">
            <p  style={{fontSize:"90px"}}>{this.state.mock}</p>
          </div>
          <Form name={this.state.name}/>
        </div>
    );
    

  }

}

export default withRouter(Login);
