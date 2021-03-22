import React, {useRef} from 'react';
import './App.css';
import Countdown from 'react-countdown';



const sentences = [
    'Can we go to the park',
    'Where is the orange cat?',
    'We can make the bird fly away',
    'We can go down to the store with the dog.',
    'My big yellow cat ate the black bird',
    'I like to read my book at school',
    'We are going to swim at the park',
    'My big yellow cat ate the black bird',
    'I like to read my book at school',
    'We can go down to the store with the dog.',
    'We are going to swim at the park'
];

const g = "<";
const l = " />";

class Typetest extends React.Component {

  constructor() {
      super();

      this.state = {
        value: "",
         count: 0,
         final: sentences[Math.floor(Math.random() * 10) + 1],
         mock: "",
         win: false,
      };

      this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
   
  }

  handleChange = e => {
      this.setState({
          value: e.target.value
      });
      if(this.state.value===this.state.final) {
          this.setState({
              win: true
            });
            
        } else {
            this.setState({
                win: false
            });
            this.setState({
                count: this.state.count+1
            });
        }
        console.log(this.state.count)
        console.log(this.state.value);
        console.log(this.state.final.substring(0, this.state.value.length));
        console.log(this.state.win);
  }

  componentDidMmount() {

  }

  render() {
    
      return (
        <div className="type" id="type">
            
            <div id = "maintest">
                <h1 id="header">{g}Welcome to Typetest{l}</h1>
                <div id="flexBox" className="middle">
                    <h1 id={(this.state.value===this.state.final.substring(0, this.state.value.length))? 'colorGreen':'colorRed'}>{this.state.final.substring(0, this.state.value.length)}</h1> 
                    <h1 id="colorBlack">{this.state.final.substring(this.state.value.length, this.state.final.length)}</h1>
                </div>
                <div id="tbb">
                    <input className="bocClass" type="text" onChange={this.handleChange}/>
                </div>
                <div id="header" style={{paddingLeft: '65px', color: '#7598A9'}}>
                    <br />
                    <Countdown
                        date={Date.now() + 6000}
                        intervalDelay={0}
                        precision={3}
                        renderer={props => <div>{props.total}</div>}
                    />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                </div>
            </div>
        </div>
    ); 
  }

}

export default Typetest;
 
