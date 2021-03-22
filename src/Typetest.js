import React, {useRef} from 'react';
import './App.css';


const sentences = ['Hi how are you doing',
                'I hope you are doing ok',
                'He is getting better bit by bit'];

const g = "<";
const l = " />";

class Typetest extends React.Component {

  constructor() {
      super();

      this.state = {
        value: "",
         count: 0,
         final: sentences[0],
         mock: "",
         win: false
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
        }
        console.log(this.state.value);
        console.log(this.state.final.substring(0, this.state.value.length));
        console.log(this.state.win);
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
                <input className="bocClass" type="text" onChange={this.handleChange}/>
                <div >
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
                </div>
            </div>
        </div>
    ); 
  }

}

export default Typetest;
 
