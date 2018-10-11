import React, { Component } from 'react';
import styled from 'styled-components';

import HelloCC from './playground/HelloCC';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
`;

class App extends Component {
  render() {
    return (
      <Container>
        <section>
          Edit <code>src/App.js</code> and save to reload.
        </section>
        <section>
          <a
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </section>
        <HelloCC name="Typescript" />
      </Container>
    );
  }
}

export default App;
