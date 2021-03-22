import './App.css';
import React from 'react';
import fire from './config';

class Form extends React.Component {

    constructor(props) {
        super(props);
  
        this.state = {
          value: "",
          message: "",
          view: true
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChangeMessage = this.handleChangeMessage.bind(this);

    }

    handleChange = e => {
        this.setState({
            value: e.target.value
        });
    }

    handleChangeMessage = e => {
        this.setState({
            message: e.target.value
        });
    }

    handleSubmit() {
        console.log(this.state.value);
        let messageRef = fire.database().ref('email').orderByKey().limitToLast(100);
        var ary = [];
        ary.push(this.state.value);
        ary.push(this.state.message);

        fire.database().ref('email').push(ary);
        this.setState({
            view: false
        });
    }

        render() {
            if(this.state.view) {
                    return(
                        <div className="textBox">
                            <form>
                                <input type="text" id="boc" size="40" height="400" onChange={this.handleChange} placeholder="Enter Your Name" />
                                <br />
                                <br />
                                <input type="text" id="boc" classNmme="extra" size="40" height="900" onChange={this.handleChangeMessage} placeholder="Message" />
                                <br />
                                <br />
                                <input type="submit" onClick="submit" onClick={this.handleSubmit} size="10" value="Send"/>
                            </form>
                        </div>
            );
            } else {
                return(
                    <div className="login">
                    <div className="top">
                      <p  style={{fontSize:"50px"}}>Thanks for your feedback. Visit again!</p>
                    </div>
                  </div>    
                  );
            }
            
        }
}
export default Form;

