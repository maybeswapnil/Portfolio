import './App.css';
import React from 'react';
import fire from './config';

class Form extends React.Component {

    constructor(props) {
        super(props);
  
        this.state = {
          value: ""
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange = e => {
        this.setState({
            value: e.target.value
        });
    }

    handleSubmit() {
        console.log(this.state.value);
        let messageRef = fire.database().ref('email').orderByKey().limitToLast(100);
        fire.database().ref('email').push(this.state.value);
    }

        render() {
            return(
                <div className="textBox">
                    <form>
                        <input type="email" size="40" height="400" onChange={this.handleChange}placeholder="Enter Your Email"/>
                        <br />
                        <input type="submit" onClick="submit" onClick={this.handleSubmit}size="10" value="Register"/>
                    </form>
                </div>
            );
        }
}
export default Form;

