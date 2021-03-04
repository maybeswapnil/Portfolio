import './App.css';
import React from 'react';
import config from './config';


firebase.initializeApp(config);

class Form extends React.Component {
        render() {
            return(
                <div className="textBox">
                    <form>
                        <input type="email" size="40" height="400" placeholder="Enter Your Email"/>
                        <br />
                        <input type="submit" onClick="submit" size="10" value="Register"/>
                    </form>
                </div>
            );
        }
}
export default Form;

