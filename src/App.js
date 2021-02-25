import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="classNavbar">
        <nav id="nav-bar">
            <ul>
              <li><a className="nav-link" href = "#video">HOME</a></li>
              <li><a className="nav-link" href = "#contacts">ABOUT</a></li>
              <li><a className="nav-link" href = "#abstract">WORK</a></li>
              <li><a className="nav-link" href = "#abstract">CONTACT</a></li>
              <li><a className="nav-link" href = "#video">Github</a></li>
              <li><a className="nav-link" href = "#contacts">Twitter</a></li>
              <li><a className="nav-link" href = "#abstract">Facebook</a></li>

            </ul>
        </nav>
      </div>
      <div className="classTitle">
        <h1 id="title">Stand</h1>
        <h2 id="title">out</h2>
        <p id="small">Welcome to the page, I hope you are having a great day.</p>
      </div>

      <div id="description">
         <p>Hi, my name is <span id="span">Swapnil</span>. I'm a <span>Front-End</span> Developer. I work as a <span>Performance Tester</span>. Below are the <span>projects</span> I made and the <span>services</span> I provide.</p>
      </div>
      <div id="description">
         <p>........................</p>
      </div>
      <div id="description">
         <p>........................</p>
      </div>
      <div id="description">
         <p>........................</p>
      </div>
      <div id="description">
         <p>........................</p>
      </div>
      <div id="description">
         <p>........................</p>
      </div>
      <div id="description">
         <p>........................</p>
      </div>
    </div>
  );
}

export default App;
