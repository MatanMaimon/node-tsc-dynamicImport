import React, { ReactNode, FunctionComponent } from 'react';
import { map } from 'lodash';

interface initialState {
  name: {
    first: string;
    middle?: string;
    last: string;
  };
  render: ReactNode | FunctionComponent;
}

const initialState: initialState = {
  name: {
    first: 'Matan',
    middle: 'Boaz',
    last: 'Maimon',
  },
  render: () => {
    return <strong>Hello</strong>;
  },
};

export default initialState;
