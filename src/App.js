import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './component/sampleheader'
import { SampleHeader } from './component/sampleheader';
import {Home} from './component/home';
class App extends Component {
  
  render() {
    let user={
      nationality: "Indian",
      hobbies : [1,2,3,4,5]
    }
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div className="container">
        <div className="row">
        <SampleHeader/>
        </div>
        <div className="row">
        <Home name="Srini" age="28" user={user}/>
        </div>
        </div>
      </div>
    );
  }
}

export default App;
