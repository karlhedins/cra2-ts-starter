import * as React from 'react';

export interface ISFCCounterProps {
  label: string;
  count: number;
  onIncrement: () => any;
}

export const SFCCounter: React.SFC<ISFCCounterProps> = props => {
  const { label, count, onIncrement } = props;

  const handleIncrement = () => {
    onIncrement();
  };

  return (
    <div>
      <span>
        {label}: {count}{' '}
      </span>
      <button type="button" onClick={handleIncrement}>
        {`Increment`}
      </button>
    </div>
  );
};
