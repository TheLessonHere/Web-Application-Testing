import React from 'react';

import Dashboard from './components/Dashboard';
import Display from './components/Display';

import styled from 'styled-components';

const StyledCounter = styled.div`
    height: 600px;
    width: 600px;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    margin-top: 20px;
    background: green;
    color: whitesmoke;
    border: 5px solid darkgrey;
    border-radius: 15px;
`;

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      balls: 0,
      strikes: 0
    };
  }

  ballSetter = (num) => {
    this.setState({balls: num})
  }

  strikeSetter = (num) => {
    this.setState({strikes: num})
  }

  render() {
    return (
      <StyledCounter>
        <Display strikes={this.state.strikes} balls={this.state.balls} />
        <Dashboard 
        strikeSetter={this.strikeSetter} 
        strikes={this.state.strikes} 
        ballSetter={this.ballSetter} 
        balls={this.state.balls} />
      </StyledCounter>
    );
  }
}

export default App;
