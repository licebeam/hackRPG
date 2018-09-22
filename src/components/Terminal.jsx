import React, { Component } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: black;
  display: flex;
  flex-direction: column;
  .terminal-use{
    display: flex;
    flex-direction: row;
    .terminal-talker{
      background: none;
      border: none;
      padding: 20px;
      color: white;
      font-size: 2rem;
    }
    .text-container{
      background: none;
      border: none;
      padding: 20px;
      color: greenyellow;
      font-size: 2rem;
      &:focus{
        outline:0;
      }
    }
  }

`
class Terminal extends Component {
  state = {
    initVal: '',
    lastCom: '',
  }

  handleChange = (e) => {
    this.setState({ initVal: e.target.value })
  }

  render() {
    const { initVal, lastCom } = this.state
    return (
      <Container>
        <div className='last-command'>
          {lastCom}
        </div>
        <div className='terminal-use'>
          <input
            className="text-container"
            onChange={this.handleChange}
            maxLength='16'
            value={initVal}
          />
        </div>


      </Container>
    );
  }
}

export default Terminal;
