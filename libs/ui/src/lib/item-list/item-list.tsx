import React from 'react';

import './item-list.css';

/* eslint-disable-next-line */
export interface ItemListProps {
  items: {code: string; description: string;}[];
  addToCart: (code: string) => void
}

export const ItemList = (props: ItemListProps) => {
  return (
    <>
      {
        props.items.map((item) => (
          <div className="item">
            <p>{item.description}</p>
            <button
              item-code={item.code}
              onClick={() => props.addToCart(item.code)}
            >
              Add to cart
            </button>
          </div>
        ))
      }
    </>
  );
};

export default ItemList;
