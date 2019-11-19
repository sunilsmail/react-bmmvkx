import React, { Component } from 'react';
import { render } from 'react-dom';
import ZipForm from './zipcode.component';
import './style.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <div>
        <ZipForm />
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
