import React, { Component } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: black;
  display: flex;
  flex-direction: column;
  .last-command{
    flex: 4;
    flex-direction: column;
    display: flex;
    overflow: hidden;
    .com-item{
      color: greenyellow;
      padding-left: 20px;
    }
  }
  .terminal-use{
    flex: 1;
    color: white;
    background-color: grey;
    font-size: 2rem;
    .text-container{
      background: none;
      border: none;
      padding-left: 20px;
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
    lastCom: [],
  }

  handleChange = (e) => {
    this.setState({ initVal: e.target.value })
  }

  render() {
    const { initVal, lastCom } = this.state
    return (
      <Container>
        <div className='last-command'>
          {lastCom && lastCom.map(message => (
            <span className='com-item'>{message}</span>
          ))}
        </div>
        <div className='terminal-use'>
          <input
            className="text-container"
            onChange={this.handleChange}
            onKeyPress={(e) => {
              if (e.key === 'Enter') {
                this.setState({ lastCom: [...lastCom, e.target.value] })
              }
            }
            }
            autoFocus='true'
            maxLength='16'
            value={initVal}
          />
        </div>


      </Container>
    );
  }
}

export default Terminal;
