import {Entity, Animation} from 'aframe-react';
import React, { Component } from 'react';

export default class Cup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: 'red'
    }
  }

  changeColor = () => {
    const colors = ['red', 'orange', 'yellow', 'green', 'blue'];
    this.setState({
      color: colors[Math.floor(Math.random() * colors.length)],
    });
  };
	render(){
		return (

		    <Entity loader={{src: 'url(./dist/cup/cup.dae)', format: 'collada'}}
              scale="3 3 3"
              position="3 1.6 -5"
              material={{color: this.state.color}}
			  onClick={this.changeColor} onMouseEnter={()=>{}} onMouseLeave={()=>{}}
              >
              <Animation attribute="rotation" dur="5000" repeat="indefinite" to="0 360 360"/>
			</Entity>
		      );

	}

}