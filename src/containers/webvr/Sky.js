import {Entity} from 'aframe-react';
import React from 'react';
import sky_img_url from '../../../site/img/puydesancy5.jpg';

export default props => (
  <Entity geometry={{primitive: 'sphere', radius: 5000}}
          material={{color: props.color || 'white', shader: 'flat', src: `url(${sky_img_url})`}}
          scale="1 1 -1"/>
);
