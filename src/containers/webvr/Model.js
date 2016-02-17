import {Entity, Animation} from 'aframe-react';
import React, { Component } from 'react';

export default class Model extends Component {

	render(){
		return (

		    <Entity loader={{src: 'url(./dist/man/man.dae)', format: 'collada'}}
              scale="0.7 0.7 0.7"
              rotation="0 180 0"
              position="-0.5 -1 -2">
              <Animation attribute="rotation" from="0 -30 0" to="0 330 0" dur="15000" easing="linear" repeat="inifite"/>
			</Entity>
		      );

	}

}
