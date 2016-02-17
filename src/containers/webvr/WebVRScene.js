import 'aframe-core';
import 'babel-polyfill';
import {Animation, Entity, Scene} from 'aframe-react';
import React, { Component, PropTypes } from 'react';
import Sky from './Sky';
import Model from './Model';
import Cup from './Cup';
import Light from './Light';
import Cursor from './Cursor';
import Camera from './Camera';

export default class WebVRScene extends Component {

    render(){

        return(
                <div id='webvr'>
                  <Scene>
                    <Camera><Cursor color="#aaa"/></Camera>

                    <Sky/>

                    <Light type="ambient" color="#888"/>
                    <Light type="directional" intensity="0.5" position="-1 1 0"/>
                    <Light type="directional" intensity="1" position="1 1 0"/>


                    <Model/>
                    <Cup/>
                  </Scene>
                </div>
        );
    }

  }
//-----------------------------------------------------
// import 'aframe-core';
// import 'babel-polyfill';
// import {Animation, Entity, Scene} from 'aframe-react';
// import React, { Component, PropTypes } from 'react';
// import Sky from './Sky';
// import Light from './Light';
// import Cursor from './Cursor';
// import Camera from './Camera';

// export default class WebVRScene extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       color: 'red'
//     }
//   }

//   changeColor = () => {
//     const colors = ['red', 'orange', 'yellow', 'green', 'blue'];
//     this.setState({
//       color: colors[Math.floor(Math.random() * colors.length)],
//     });
//   };
//     render(){
//         return(
//                 <div id='webvr'>
//                   <Scene>
//                     <Camera><Cursor color="#aaa"/></Camera>

//                     <Sky/>

//                     <Light type="ambient" color="#888"/>
//                     <Light type="directional" intensity="0.5" position="-1 1 0"/>
//                     <Light type="directional" intensity="1" position="1 1 0"/>

//                     <Entity geometry="primitive: box" material={{color: this.state.color}}
//                             onClick={this.changeColor} onMouseEnter={()=>{}} onMouseLeave={()=>{}}
//                             position="0 0 -5">
//                       <Animation attribute="rotation" dur="5000" repeat="indefinite" to="0 360 360"/>
//                     </Entity>
//                   </Scene>
//                 </div>
//         );
//     }

//   }

