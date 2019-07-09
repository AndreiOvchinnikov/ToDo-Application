import React, { Component } from 'react';
import './App.css';
import {connect} from 'react-redux';
import AddToDo from '../AddToDo/AddToDo';
import ToDoList from '../../components/ToDoList';

class AppComponent extends Component {
  render() {
    return (
      <div className="app">
        <h1 className="header">
          ToDo Application
        </h1>
        <AddToDo/>
        <ToDoList todos={this.props.todos}/>
      </div>
    );
  }
}

function mapStateToProps(state) {
    return {
        todos: state.todos,
    }
}

const App = connect(mapStateToProps, null)(AppComponent);

export default App;
