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
                                <div class="codeheader" id="codeheader_html">HTML</div>
                                <div id="codebox">
                                    <pre><code data-language="html">
                                    <p>&lt;VideoPlayer{'\n'}
                                        ref="videoplayer"{'\n'}
                                        preload={'{'}this.props.preload{'}\n'}
                                        classes={'{'}this.props.classes{'}\n'}
                                        videoID={'{'}this.props.videoID{'}\n'}
                                        controls="controls"{'\n'}
                                    /&gt;</p>
                                    </code></pre>
                                </div>
                        </div>
            );
        
        }
}
export default Phone;

