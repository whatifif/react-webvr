// require('aframe-core');
// import {Animation, Entity, Scene} from 'aframe-react';

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import img_url from '../../../site/img/coffee.png';
import WebVRScene from './WebVRScene';

class WebVRPage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { vrMode } = this.props;
    // console.log('img_url', img_url);
   const style = {position: 'relative', perspective: '800px'};
   const styleFlip = { transformStyle: 'preserve-3d', transition: 'transform 1s'};

    if(vrMode){
     

        return (
          <div>
            <WebVRScene />
            <div className="container" >
              <div className="col-md-8">
                <div style={{position:"relative", zIndex:"1"}}>
                  <h1 className="display-3">WebVR</h1> 
                  <p>
                    Welcome to WebVR page.<br/>
                  </p>
                  <p>
                     Click the "Into WebVR" button above to enter the WebVR 3D space.<br/>
                  </p>
                  <p>
                     Click the button again to exit the WebVR 3D space and return to 2D page.<br/>
                  </p>
                </div>
                <p>
                  <a href="/about" style={{position:"relative", zIndex:"1"}}>this is test link.</a> 
                </p>
              </div>
              <div className="col-md-4" style={{position:"relative", zIndex:"1"}}>
                <img src={img_url} style={{width:"300px", height:"300px"}}/>
              </div>
            </div>
          </div>
        );
    }else{
      return (
        <div className="container">
          <div className="col-md-8" style={style}>
            <h1 className="display-3" style={styleFlip}>WebVR</h1> 
            <p>
              Welcome to WebVR page. <br/>
            </p>
            <p>
               Click the "Into WebVR" button above to enter the WebVR 3D space.<br/>
            </p>
            <p>
               Click the button again to exit the WebVR 3D space and return to 2D page.<br/>
            </p>
            <p>
              <a href="/about">this is test link.</a> 
            </p>          </div>
          <div className="col-md-4">
            <img src={img_url} style={{width:"300px", height:"300px"}}/>
          </div>
        </div>
      );      
    }

  }
}

WebVRPage.propTypes = {
  vrMode: PropTypes.bool
};

function mapStateToProps(state) {
  const { toggleWebVR } = state;

  return {
    vrMode: toggleWebVR.vrMode
  };
}

export default connect(mapStateToProps)(WebVRPage);

//---------------------------------------------
// require('aframe-core');
// import {Animation, Entity, Scene} from 'aframe-react';

// import React, { Component, PropTypes } from 'react';
// import { connect } from 'react-redux';

// import img_url from '../../../site/img/coffee.png';

// class WebVRPage extends Component {
//   constructor(props) {
//     super(props);
//   }

//   render() {
//     const { vrMode } = this.props;
//     console.log('img_url', img_url);

//     if(vrMode){
//         return (
//           <div id='webvr'>
//             <Scene ref="scene">
//               <Entity geometry={{primitive: 'box'}} material="color: red" position="0 0 -5">
//                 <Animation attribute="rotation" dur="5000" repeat="indefinite" to="0 360 360"/>
//               </Entity>
//             </Scene>
//           </div>
//         );
//     }else{
//       return (
//         <div className="container">
//           <div className="col-md-8">
//             <h1 className="display-3">WebVR</h1> 
//             <p>
//               Welcome to WebVR page. <br/>
//             </p>
//             <p>
//                Click the "Into WebVR" button above to enter the WebVR 3D space.<br/>
//             </p>
//             <p>
//                Click the button again to exit the WebVR 3D space and return to 2D page.<br/>
//             </p>
//           </div>
//           <div className="col-md-4">
//             <img src={img_url} style={{width:"300px", height:"300px"}}/>
//           </div>
//         </div>
//       );      
//     }

//   }
// }

// WebVRPage.propTypes = {
//   vrMode: PropTypes.bool
// };

// function mapStateToProps(state) {
//   const { toggleWebVR } = state;

//   return {
//     vrMode: toggleWebVR.vrMode
//   };
// }

// export default connect(mapStateToProps)(WebVRPage);
