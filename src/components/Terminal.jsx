import React, { Component } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: black;
  display: flex;
  flex-direction: column;
  .last-command{
    flex-direction: column;
    display: flex;
    overflow: hidden;
    .com-item{
      flex: 1;
      color: greenyellow;
      padding-left: 20px;
    }
  }
  .terminal-use{
    flex: 1;
    color: white;
    background-color: black;
    font-size: 1rem;
    padding-left: 20px;
    .text-container{
      background: none;
      border: none;
      padding-left: 20px;
      color: greenyellow;
      font-size: 1rem;
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
  checkCommand = (command) => {
    const { lastCom, initVal } = this.state;
    switch (initVal) {
      case 'clr':
        this.setState({ lastCom: [...lastCom, 'clearing screen!'], initVal: '' })
        this.setState({ lastCom: [] })
        break;
      case 'ssh':
        this.sshCommand(initVal);
        break;

      case 'help':
        this.setState({
          lastCom: [...lastCom, 'commands: help, ssh (address), clr'], initVal: ''
        })
        break;

      default:
        break;
    }
  }

  sshCommand = (address) => {
    const { lastCom, initVal } = this.state;
    this.setState({ lastCom: [...lastCom, initVal], initVal: '' })
  }

  render() {
    const { initVal, lastCom } = this.state
    return (
      <Container>
        <div className='last-command'>
          {lastCom && lastCom.map(message => (
            <span className='com-item'>-- {message}</span>
          ))}
        </div>
        <div className='terminal-use'>
          ~/user/home/
          <input
            className="text-container"
            onChange={this.handleChange}
            onKeyPress={(e) => {
              if (e.key === 'Enter') {
                this.setState({ lastCom: [...lastCom, initVal], initVal: '' })
                this.checkCommand(initVal);
              }
            }
            }
            autoFocus='true'
            maxLength='20'
            value={initVal}
          />
        </div>


      </Container>
    );
  }
}

export default Terminal;
