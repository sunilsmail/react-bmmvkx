import React, { Component } from 'react';
import { render } from 'react-dom';
import ZipForm from './zipcode.component';
import './style.css';

class App extends Component {
constructor(props) {
  super(props);

  this.state = {
    zipcode: '',
  };
  this.onFormSubmit = this.onFormSubmit.bind(this);
}

  onFormSubmit(zipcode) {
    alert(zipcode)
    console.log(zipcode);
  this.setState({ zipcode });
}

  render() {
    return (
      <div>
        <ZipForm onSubmit={this.onFormSubmit} />
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
