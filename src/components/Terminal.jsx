import React, { Component } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: black;
  display: flex;
  flex-direction: column;
  .current-server{
    padding: 10px;
    height: 20px;
    background-color: gray;
    color: white;
    padding-left: 20px;
  }
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
    connection: '',
    files: 'no files on system',

    commands: {
      ls: {
        message: 'checking files',
      },
      help: {
        message:
          'Local Commands: help, clr, ssh, status, logout, check '
      },
      clr: {
        message: 'clearing'
      },
      status: {
        message: 'Status: '
      },
      logout: {
        message: 'Logging Out: '
      },
      check: {
        message: 'Checking: '
      },
      ssh: {
        message: 'You must connect as following - ssh home '
      },
      'ssh home': {
        message: 'connected to Home',
        server: 'Home'
      },
      'ssh bank': {
        message: 'connected to Bank',
        server: 'Bank'
      },
      'ssh corp-server': {
        message: 'connected to corp-server',
        server: 'Corp'
      }
    }
  }

  handleChange = (e) => {
    this.setState({ initVal: e.target.value })
  }
  checkCommand = (command) => {
    const { commands, lastCom, initVal } = this.state
    if (command in commands) {
      this.doCommand(command)
      commands[command].server ? this.setState({ connection: commands[command].server }) : '';
    }
    if (command in commands === false) {
      this.setState({ lastCom: [...lastCom, 'unknown command'], initVal: '' })
    }
  }
  doCommand = (command) => {
    console.log('doin')
    const { commands, lastCom, initVal } = this.state
    this.setState({ lastCom: [...lastCom, commands[command].message], initVal: '' })
    switch (command) {
      case 'clr':
        this.clrCommand()
        break;
      case 'ls':
        this.showFiles()
        break;
      case 'logout':
        this.state.connection !== '' ? this.setState({ connection: '' }) : '';
        break;
      default:
        break;
    }
  }

  clrCommand = (command) => { //clear command
    const { commands, lastCom, initVal } = this.state
    this.setState({ lastCom: '', initVal: '' })
  }

  showFiles = () => { //ls command
    const { commands, lastCom, initVal } = this.state
    this.setState({ lastCom: [...lastCom, this.state.files], initVal: '' })
  }

  render() {
    const { initVal, lastCom } = this.state
    return (
      <Container>
        <div className="current-server">
          Connected to: {this.state.connection}
        </div>
        <div className='last-command'>
          {lastCom && lastCom.map(message => (
            <span key={message.index} className='com-item'>-- {message}</span>
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
        <div className='current-server'>
          player
        </div>

      </Container>
    );
  }
}

export default Terminal;
