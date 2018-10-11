import * as React from 'react';

export interface ISFCSpreadAttributesProps {
  className?: string;
  style?: React.CSSProperties;
}

export const SFCSpreadAttributes: React.SFC<
  ISFCSpreadAttributesProps
> = props => {
  const { children, ...restProps } = props;

  return <div {...restProps}>{children}</div>;
};
