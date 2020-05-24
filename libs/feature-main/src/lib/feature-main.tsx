import React, {useState} from 'react';

import './feature-main.css';
import {ItemList} from '@myorg6/ui';

const ITEMS = [
  {
    code: 'blanket',
    description: 'weighted blanket',
  },
  {
    code: 'pillow',
    description: 'soft pillow',
  },
  {
    code: 'mattress',
    description: 'queen size firm mattress',
  },
]

export const FeatureMain = () => {
  const [cart, setCart] = useState([]);
  return (
    <>
      <div className="cart">{cart.length} items in the cart!!!</div>
      <div><ItemList items={ITEMS} addToCart={(code) => setCart([...cart, code])} /></div>
    </>
  );
};

export default FeatureMain;
