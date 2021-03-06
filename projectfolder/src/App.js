import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

import Upload from "./upload";
import Display from "./display";
import Main from "./main";
import exampleAPI from "./exampleAPI";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand" href="https://codingthesmartway.com" target="_blank">
            </a>
            <Link to="/" className="navbar-brand">Welcome!</Link>
            <div className="collpase navbar-collapse">
              <ul className="navbar-nav mr-auto">
                <li className="navbar-item">
                  <Link to="/display" className="nav-link">Display</Link>
                </li>
                <li className="navbar-item">
                  <Link to="/upload" className="nav-link">Upload</Link>
                </li>
                <li className="navbar-item">
                  <Link to="/apiCall" className="nav-link">COVID API</Link>
                </li>
              </ul>
            </div>
          </nav>
          <br/>
        <Route path="/" exact component={Main} />
        <Route path="/display" component={Display} />
        <Route path="/upload" component={Upload} />
        <Route path = "/apiCall" component = {exampleAPI}/>
        </div>
      </Router>
    );
  }
}
export default App;
