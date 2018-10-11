import * as React from 'react';

interface INameProviderProps {
  children: (state: INameProviderState) => React.ReactNode;
}

interface INameProviderState {
  readonly name: string;
}

export class NameProvider extends React.Component<
  INameProviderProps,
  INameProviderState
> {
  readonly state: INameProviderState = { name: 'Piotr' };

  render() {
    return this.props.children(this.state);
  }
}
