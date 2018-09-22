import React, { Component } from 'react';
import styled from 'styled-components';
import Terminal from './Terminal'

const Main = styled.div`
  background-color: pink;
  height: 100vh;
  width: 100vw;
  display: flex;
  .desk{
    flex: 3;
  }
  .terminal-container{ 
    flex: 1;
  }
`
class Desktop extends Component {
  render() {
    return (
      <Main>
        <div className="desk"></div>
        <div className="terminal-container">
          <Terminal />
        </div>
      </Main>
    );
  }
}

export default Desktop;
