import React, { Component } from 'react';

export class Home extends Component {
  constructor(props){
    super(props);
    this.h_age=props.age
  }
  handleAge(){
    this.h_age += 3
    console.log(this)
  }
  render() {
      
    return (
        
        <div className="container">
        <div className="row">
            {this.props.name}
            </div>
            <div className="row">
            {this.props.user.nationality}
            </div>
            <div className="col12">
                Hobbies are
                <ul>
{this.props.user.hobbies.map((hobby,i)=> <li key={i}>{hobby}</li>)}
                    </ul>

            </div>
            <button classname="btn btn-primary" onClick={this.handleAge.bind(this)}>
            Increase age
            </button>
            </div>
    );
  }
}
