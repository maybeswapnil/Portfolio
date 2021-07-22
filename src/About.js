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
                                        &lt;Involved in various phases
                                        <br />
                                        of Software Development Life <br />
                                        Cycle using Agile Methodology 
                                        <br />and followed Scrum <br />sessions. /&gt;
                                            <br/>
                                            &lt;Used Spring MVC with <br />Hibernate framework to build <br />the application on 
                                            <br />server side. /&gt;
                                            <br/>
                                            &lt;Performed Reverse<br />Engineering to map POJO<br />classes to database. /&gt;
                                            <br/>
                                            &lt;Created DAO interface, <br />abstract class and concrete<br />classes to interact with <br />persistence entities. /&gt;
                                            <br/>
                                            &lt;Used Hibernate Criteria<br />API to query the database <br />and perform other CRUD <br />operations. /&gt;
                                            <br/>
                                            &lt;Worked on server side <br />validation using various web <br />forms through annotation <br />based approach. /&gt;
                                            <br/>
                                            &lt;Integrated Spring <br />Security to validate <br />the users. /&gt;
                                            <br/>
                                            &lt;Handed on Spring FTP <br />Integration for transferring <br />data to remote FTP server. /&gt;
                                            <br/>
                                            &lt;Used Java File/IO to <br />generate documents. /&gt;
                                            <br/>
                                            &lt;Created various Advice <br />(before, after) methods as <br />required using Spring <br />AOP suchas Logging. /&gt;
                                            <br/>
                                            &lt;Configured the <br />Dispatcher Servlet, setting <br />up the View Resolver, <br />Transaction Manager. /&gt;
                                            <br/>
                                            &lt;Involved in <br />configuring JNDI for <br />database Connection Pooling <br />(Apache DBCP). /&gt;
                                            <br/>
                                            &lt;Applied jQuery, <br />Bootstrap, CSS3, JSP, and <br />JSTL to build interactive <br />and dynamic UI. /&gt;
                                            <br/>
                                            &lt;Used AJAX calls <br />for data updates in UI <br />along with JSON data <br />parsing. /&gt;
                                            <br/>
                                            &lt;Developed test cases <br />and performed unit testing <br />using JUnit classes. /&gt;
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

