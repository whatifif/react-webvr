import React, {Component, PropTypes} from 'react';

import {connect} from 'react-redux';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';

import { logout } from '../../actions/auth';
import { toggleWebVR } from '../../actions/webvr';
import './app.css';

class App extends Component {
  constructor(props) {
    super(props);
  }

  handleLogout() {
    const { user } = this.props;
    this.props.dispatch(logout(user));
    this.context.history.pushState(null, '/login');
  }

    handleToggleWebVR() {
        this.props.dispatch(toggleWebVR());

        if (this.props.vrMode) {
            document.getElementsByTagName('canvas')[0].style.display = 'none';
        } else if (document.getElementsByTagName('canvas')[0]) {
            document.getElementsByTagName('canvas')[0].style.display = 'block';
        }
    }



  render() {
    const { user } = this.props;
    return (
      <div className="container-fluid">

        <Header user={user} handleLogout={() => this.handleLogout()} toggleWebVR={()=>this.handleToggleWebVR()} vrMode={this.props.vrMode}/>
        <div className="appContent">
          {this.props.children}
        </div>
        <Footer/>
      </div>
    );
  }
}

App.propTypes = {
  user: PropTypes.string,
  children: PropTypes.node.isRequired,
  dispatch: PropTypes.func.isRequired,
  vrMode: PropTypes.bool
};

App.contextTypes = {
  history: PropTypes.object.isRequired,
  store: PropTypes.object.isRequired
};

const mapStateToProps = (state) => {
  const { auth, toggleWebVR } = state;
  return {
    user: auth ? auth.user : null,
    vrMode: toggleWebVR.vrMode
  };
};

export default connect(
  mapStateToProps
)(App);
