import React, { Component } from 'react';
import { connect } from 'react-redux';
import LandingPage from './pages/LandingPage/LandingPage.component'
import { getCurrentUser, signUserOut } from './actions/AuthActions';

import './App.css';

class App extends Component {
  componentDidMount() {
    this.props.getCurrentUser();
  }

  render() {
    if (this.props.currentUser) {
      return (
        <div className="dashboard">
          {this.props.currentUser.displayName}
          <button onClick={this.props.signUserOut}>Sign out</button>
        </div>
      );
    } else if (this.props.currentUser === false) {
      return (
        <div>
          <LandingPage />
        </div>
      )
    }

    return (
      <div className="loading">
        Loading...
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    currentUser: state.currentUser,
  };
}

export default connect(mapStateToProps, { getCurrentUser, signUserOut })(App);
