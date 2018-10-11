import React, { Component } from 'react';
import styled from 'styled-components';

import HelloCC from './playground/HelloCC';
// import { StatefulCounter } from './playground/CC';

import { SFCCounter } from './playground/SFC';
import { SFCSpreadAttributes } from './playground/SFCSpread';

import { NameProvider } from './playground/RenderProp';

import { BrokenButtonWithBoundary } from './playground/HOCWithError';

import { TestGenericList } from './playground/GenericList';

import { AutoFocusTextInput } from './playground/refs/03-refs-on-class-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;

  * + * {
    margin: 1rem;
  }
`;

interface IState {
  count: number;
}

interface IProps {
  onReset: () => void;
}

class App extends Component<{}, IState> {
  state = {
    count: 3,
  };

  onIncrement = () => this.updateCounter(this.state.count + 1);
  updateCounter(count: number) {
    this.setState({ count });
  }

  render() {
    return (
      <Container>
        <HelloCC name="Typescript" />

        {/* <StatefulCounter label="cc test" /> */}

        <SFCCounter
          label="sfc test"
          count={this.state.count}
          onIncrement={this.onIncrement}
        />

        <SFCSpreadAttributes style={{ background: 'yellow' }}>
          <div>yellow background</div>
        </SFCSpreadAttributes>

        <NameProvider>{({ name }) => <div>{name}</div>}</NameProvider>

        <BrokenButtonWithBoundary />

        <TestGenericList />

        {/* <AutoFocusTextInput /> */}
      </Container>
    );
  }
}

export default App;
