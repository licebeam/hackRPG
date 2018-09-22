import React, { Component } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  background-color: pink;
  height: 100vh;
  width: 100vw;
  display: flex;
`
class Base extends Component {
  render() {
    return (
      <Container>
      </Container>
    );
  }
}

export default Base;
