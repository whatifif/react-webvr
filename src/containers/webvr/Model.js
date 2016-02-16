import {Entity} from 'aframe-react';
import React, { Component } from 'react';
// import model_url from '../../../site/img/man/man.dae';
// import model_url from '../../../site/img/man/man-color.jpg';

export default class Model extends Component {

	render(){
		return (
			<div>
		      <a-entity id="model" position="0 0 -2">
		        <a-model position="-.35 0 .55" rotation="0 -20 0" scale="1.5 1.5 1.5" src="./dist/man/man.dae"></a-model>
		      </a-entity>
		    </div>
		      );

	}

}
//--------------------------------------------
// import {Entity} from 'aframe-react';
// import React from 'react';
// // import model_url from '../../../site/img/man/man.dae';
// import model_url from '../../../site/img/man/man-color.jpg';

// export default props => (
//   <Entity geometry={{primitive: 'sphere', radius: 5000}}
//           material={{color: props.color || 'white', shader: 'flat', src: `url(${model_url})`}}
//           scale="1 1 -1"/>
// );
//--------------------------------------------

      // <!-- Model -->
      // <a-entity id="model" position="0 0 -2">
      //   <a-animation attribute="rotation" from="0 -30 0" to="0 330 0" dur="15000" easing="linear" repeat="inifite"></a-animation>
      //   <a-model position="-.35 0 .55" rotation="0 -20 0" scale="1.5 1.5 1.5" src="../_models/man/man.dae"></a-model>
      //   <a-image src="../_images/radial-shadow-2.png" rotation="-90 0 0" scale="0.5 0.5 0.5"></a-image>
      // </a-entity>
//--------------------------------------------
// import {Entity} from 'aframe-react';
// import React from 'react';
// import sky_img_url from '../../../site/img/puydesancy.jpg';

// export default props => (
//   <Entity geometry={{primitive: 'sphere', radius: 5000}}
//           material={{color: props.color || 'white', shader: 'flat', src: `url(${sky_img_url})`}}
//           scale="1 1 -1"/>
// );