require('aframe-core');
import {Animation, Entity, Scene} from 'aframe-react';

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

// import User from '../../components/user/User';

// import { invalidateWebVRPage, selectWebVRPage, fetchTopUsersIfNeeded } from '../../actions/users';

class WebVRPage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { vrMode } = this.props;
    console.log(this.props);
    if(vrMode){
    return (
      <div id='webvr'>
        <Scene ref="scene">
          <Entity geometry={{primitive: 'box'}} material="color: red" position="0 0 -5">
            <Animation attribute="rotation" dur="5000" repeat="indefinite" to="0 360 360"/>
          </Entity>
        </Scene>
      </div>
    );
    }else{
    return (
      <div className="container">
        <h1 className="display-3">WebVR
        </h1> 
        <p>
          Thanks for checking this out. This project was created by
          <a href="https://twitter.com/yunjun_mu" target="_blank"> @yunjun_mu</a>,
          as a playground to learn and experiment some of the exciting technologies such as
          <a href="https://github.com/facebook/react" target="_blank"> React</a> and
          <a href="https://github.com/rackt/redux" target="_blank"> Redux</a>.
        </p>

        <p>
          I believe these two libraries can serve as cornerstones to build a modern web application on, each
          addressing an important aspect of web development: <a href="https://github.com/facebook/react" target="_blank">React </a>
          as the V (view), and <a href="https://github.com/rackt/redux" target="_blank"> Redux </a> as the
          predictable state container.
        </p>

        <p>
          Along with other great libraries, such as <a href="https://github.com/rackt/react-router" target="_blank"> React-Router</a> for routing,
          <a href="http://babeljs.io" target="_blank"> Babel </a> for next-gen Javascript, and
          <a href="http://webpack.github.io" target="_blank"> Webpack</a> for bundling and devtools,  web development has never been more fun
          and productive.
        </p>
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

//------------------------------------------------------------------
// require('aframe-core');
// import {Animation, Entity, Scene} from 'aframe-react';
// import React from 'react';

// const Webvr = (props) => {
//   console.log(props);
//   if(false){
//      return (
//         <Scene>
//           <Entity geometry={{primitive: 'box'}} material="color: red" position="0 0 -5">
//             <Animation attribute="rotation" dur="5000" repeat="indefinite" to="0 360 360"/>
//           </Entity>
//         </Scene>
//     ); 
//   }else{
//     return (
//       <div className="container">
//         <h1 className="display-3">WebVR
//         </h1> 
//         <p>
//           Thanks for checking this out. This project was created by
//           <a href="https://twitter.com/yunjun_mu" target="_blank"> @yunjun_mu</a>,
//           as a playground to learn and experiment some of the exciting technologies such as
//           <a href="https://github.com/facebook/react" target="_blank"> React</a> and
//           <a href="https://github.com/rackt/redux" target="_blank"> Redux</a>.
//         </p>

//         <p>
//           I believe these two libraries can serve as cornerstones to build a modern web application on, each
//           addressing an important aspect of web development: <a href="https://github.com/facebook/react" target="_blank">React </a>
//           as the V (view), and <a href="https://github.com/rackt/redux" target="_blank"> Redux </a> as the
//           predictable state container.
//         </p>

//         <p>
//           Along with other great libraries, such as <a href="https://github.com/rackt/react-router" target="_blank"> React-Router</a> for routing,
//           <a href="http://babeljs.io" target="_blank"> Babel </a> for next-gen Javascript, and
//           <a href="http://webpack.github.io" target="_blank"> Webpack</a> for bundling and devtools,  web development has never been more fun
//           and productive.
//         </p>
//       </div>
//     );
//   }

// };

// export default Webvr;
