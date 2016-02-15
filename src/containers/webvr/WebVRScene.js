require('aframe-core');
import {Animation, Entity, Scene} from 'aframe-react';
import React, { Component, PropTypes } from 'react';

export default class WebVRScene extends Component {

  	render(){
        return(
                <div id='webvr'>
                  <Scene ref="scene">
                    <Entity geometry={{primitive: 'box'}} material="color: red" position="0 0 -5">
                      <Animation attribute="rotation" dur="5000" repeat="indefinite" to="0 360 360"/>
                    </Entity>
                  </Scene>
                </div>
        );
    }

  }
