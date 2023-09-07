import React, { Component } from 'react';
import Lottery from './Lottery';

class App extends Component {
  render() {
    return (
      <div className="flex flex-col justify-center items-center h-screen">
        <Lottery numBall={6} maxNum={40} />
      </div>
    );
  }
}

export default App;
