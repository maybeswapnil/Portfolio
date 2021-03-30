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
                        <div className="Phone">
                            <img  id="image" src={"https://images.pexels.com/photos/6064637/pexels-photo-6064637.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"}/>
                        </div>
            );
        
        }
}
export default Phone;

