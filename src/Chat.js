import './App.css';
import React from 'react';
import fire from './config';

class Form extends React.Component {

    constructor(props) {
        super(props);
  
        this.state = {
          list: ['sameer','swapnil']
        };
        //this.handleChange = this.handleChange.bind(this);
        //this.handleSubmit = this.handleSubmit.bind(this);
        //this.getData = this.getData.bind(this);   
    }
    /*
    handleChange = e => {
        this.setState({
            value: e.target.value
        });
    }

    handleSubmit() {
        console.log(this.state.value);
        let messageRef = fire.database().ref('email').orderByKey().limitToLast(100);
        fire.database().ref('email').push(this.state.value);
        this.setState({
            view: false
        });
    }
    */
    componentDidMount() {
        let emailList = [];
        fire.database().ref('email').on('value', out => {
            out.forEach(e => emailList.push(e.val()));
        });
        this.setState({
            list: emailList
        });
        console.log(this.state.list)
      }

        render() {
                return(      
                        this.state.list.map(data => {return(
                            <div className="login">
                                <div className="top">
                                <p  style={{fontSize:"50px"}}>{data}</p>
                                </div>
                            </div>
                        );})
            );    
        }
}
export default Form;

