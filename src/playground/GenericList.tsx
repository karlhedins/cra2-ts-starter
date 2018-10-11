import * as React from 'react';

export interface IGenericListProps<T> {
  items: T[];
  itemRenderer: (item: T) => JSX.Element;
}

export class GenericList<T> extends React.Component<IGenericListProps<T>, {}> {
  render() {
    const { items, itemRenderer } = this.props;

    return <div>{items.map(itemRenderer)}</div>;
  }
}

interface IUser {
  fullName: string;
  id: string;
}

// For testing
const users = [
  { fullName: 'Alice', id: 'a' },
  { fullName: 'Bob', id: 'b' },
  { fullName: 'Charlie', id: 'c' },
];

export class UserList extends GenericList<IUser> {}

export const TestGenericList = () => (
  <UserList
    items={users}
    itemRenderer={item => <div key={item.id}>{item.fullName}</div>}
  />
);
