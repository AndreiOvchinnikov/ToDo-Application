import React, { Component } from 'react';
import './App.css';
import {connect} from 'react-redux';

class AppComponent extends Component {
  render() {
    return (
      <div className="App">
        <h1 className="App-header">
          ToDo Application
        </h1>
        
      </div>
    );
  }
}

const App = connect(
  state => ({
    state: state.state,
  }),
  () => ({})
)(AppComponent);

export default App;
