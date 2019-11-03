import React, { Component } from 'react';
import './App.scss'

import Form from './components/Form'
import List from './components/List'

export default class App extends Component {
  render() {
    return (
        <div className="siimple-box siimple--bg-dark">
            <h1 className="siimple-box-title siimple--color-white">React Todo App</h1>
            <Form />
            <div className="siimple-rule"></div>
            <List/>
        </div>
    );
  }
}
