import React from 'react';
import { render } from '@testing-library/react';

import ItemList from './item-list';

describe(' ItemList', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ItemList items={[]} addToCart={() => {}}/>);
    expect(baseElement).toBeTruthy();
  });
});
