import React from 'react';
import { ItemList, ItemListProps } from './item-list';
import { object } from '@storybook/addon-knobs';

export default {
  component: ItemList,
  title: 'ItemList'
};

export const primary = () => {
  /* eslint-disable-next-line */
  const props:ItemListProps = {
    items: object('items', [
      {
        code: 'blanket',
        description: 'fancy blanket'
      }
    ]),
    addToCart: () => {}
  };


  return <ItemList items={props.items} addToCart={props.addToCart} />;
};
