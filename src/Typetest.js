import React, {useRef} from 'react';
import './App.css';
import Timer from 'react-compound-timer'



const sentences = [
    'Can we go to the park.',
    'Where is the orange cat?',
    'We can make the bird fly away.',
    'We can go down to the store.',
    'My big yellow cat ate the bird.',
    'I like to read my book at school.',
    'We are going to swim at the park.',
    'My big yellow cat ate the bird.',
    'I like to read my book at school.',
    'We can go down to the store.',
    'We are going to swim at the park.'
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
      if(this.state.value===this.state.final.substring(0, this.state.final.length-1)) {
          this.setState({
              win: true
            });
            
        } else {
           
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
    if(true) {
            return (
                <div className="type" id="type">
                        <div id="header2"  style={{color: 'white'}}>
                            <br />
                            <Timer initialTime={0} startImmediately={false} timeToUpdate={1}>
                                        {({ start, resume, pause, stop, reset, timerState }) => (
                                            <React.Fragment>
                                                <div>
                                                    <Timer.Seconds /> sec
                                                    <br />
                                                    <Timer.Milliseconds /> ms
                                                </div>
                                                    {this.state.count>0 ? start(): stop}
                                                    {this.state.win? stop() : start}
                                               
                                            </React.Fragment>
                                        )}
                            </Timer>
                        
                        </div>
                  

                    <div id = "maintest">
                        <h1 id="header">{g}Welcome to Typetest{l}</h1>
                        <div id="flexBox" className="middle5">
                            <h1 id={(this.state.value===this.state.final.substring(0, this.state.value.length))? 'colorGreen':'colorRed'}>{this.state.final.substring(0, this.state.value.length)}</h1> 
                            <h1 id="colorBlack">{this.state.final.substring(this.state.value.length, this.state.final.length)}</h1>
                        </div>
                        <div id="tbb">
                            <input className="bocClass" type="text" onChange={this.handleChange}/>
                        </div>
                        
                    </div>
                </div>
            ); 
    } else {
        return(
            <div>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <h1 id="header">{g}.................Your errors {this.state.count - this.state.final.length}{l}</h1>
            </div>
        );
    }
  }

}

export default Typetest;
 
