import { ,  } from '@storybook/addon-knobs';
import React from 'react';
import { ItemList, ItemListProps  } from './item-list';

export default {
  component: ItemList,
  title: 'ItemList'
};

export const primary = () => {
  
  
  const props:ItemListProps = {
    items: ('items', ),
    addToCart: ('addToCart', ),
  };
  

  return <ItemList items = {props.items} addToCart = {props.addToCart}  />;
};
