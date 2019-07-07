import React, { Component } from 'react';
import { render } from 'react-dom';
import Add from './Add';
import './style.css';
import Cities from './Cities'
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
        <Hello name={this.state.name} />
        <p>
          Start editing to see some magic happen :)
        </p>
      </div>
    );
  }
}

render(<Cities />, document.getElementById('root'));
