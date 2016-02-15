import {Entity} from 'aframe-react';
import React from 'react';
import sky_img_url from '../../../site/img/sky.png';
console.log('Sky15-sky_img_url', sky_img_url);

export default props => (
  <Entity geometry={{primitive: 'sphere', radius: 5000}}
          material={{color: props.color || 'white', shader: 'flat', src: sky_img_url}}
          scale="1 1 -1"/>
);
//---------------------------------------------
// import {Entity} from 'aframe-react';
// import React from 'react';
// import sky_img_url from '../../../site/img/sky.png';
// console.log('Sky15-sky_img_url', sky_img_url);

// export default props => (
//   <Entity geometry={{primitive: 'sphere', radius: 5000}}
//           material={{color: props.color || '#73CFF0', shader: 'flat', src: sky_img_url}}
//           scale="1 1 -1"/>
// );
//---------------------------------------------
// import {Entity} from 'aframe-react';
// import React from 'react';

// export default props => (
//   <Entity geometry={{primitive: 'sphere', radius: 5000}}
//           material={{color: props.color || '#73CFF0', shader: 'flat', src: '#sky'}}
//           scale="1 1 -1"/>
// );


