import React, { Component } from 'react';

export class SampleHeader extends Component {
  render() {
    return (
        <nav classNameName="navbar navbar-default">
        <div className="container-fluid">
          
          <ul className="nav navbar-nav">
            <li className="active"><a href="#">Home</a></li>
            
          </ul>
        </div>
      </nav>
    );
  }
}
