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
                                <div class="codeheader" id="codeheader_html">BackEnd Portfolio (Spring)</div>
                                <div id="codebox">
                                    <pre><code data-language="html" id="lolp">
                                        <div id="lolp">
                                    <p>&lt;skills&gt;<br/>
                                        &lt;Involved in various phases of Software Development Life Cycle using Agile Methodology and followed Scrum sessions. /&gt;
                                            <br/>
                                            &lt;Used Spring MVC with Hibernate framework to build the application on server side. /&gt;
                                            <br/>
                                            &lt;Performed Reverse Engineering to map POJO classes to database. /&gt;
                                            <br/>
                                            &lt;Created DAO interface, abstract class and concrete classes to interact with persistence entities. /&gt;
                                            <br/>
                                            &lt;Used Hibernate Criteria API to query the database and perform other CRUD operations. /&gt;
                                            <br/>
                                            &lt;Worked on server side validation using various web forms through annotation based approach. /&gt;
                                            <br/>
                                            &lt;Integrated Spring Security to validate the users. /&gt;
                                            <br/>
                                            &lt;Handed on Spring FTP Integration for transferring data to remote FTP server. /&gt;
                                            <br/>
                                            &lt;Used Java File/IO to generate documents. /&gt;
                                            <br/>
                                            &lt;Created various Advice (before, after) methods as required using Spring AOP such as Logging. /&gt;
                                            <br/>
                                            &lt;Configured the Dispatcher Servlet, setting up the View Resolver, Transaction Manager. /&gt;
                                            <br/>
                                            &lt;Involved in configuring JNDI for database Connection Pooling (Apache DBCP). /&gt;
                                            <br/>
                                            &lt;Applied jQuery, Bootstrap, CSS3, JSP, and JSTL to build interactive and dynamic UI. /&gt;
                                            <br/>
                                            &lt;Used AJAX calls for data updates in UI along with JSON data parsing. /&gt;
                                            <br/>
                                            &lt;Developed test cases and performed unit testing using JUnit classes. /&gt;
                                            <br />
                                            &lt;/skills&gt;
                                    </p>
                                    </div>
                                    </code></pre>
                                </div>
                        </div>
            );
        
        }
}
export default Phone;

