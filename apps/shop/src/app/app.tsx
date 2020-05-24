import React, {useState} from 'react';

import './app.css';

import { ReactComponent as Logo } from './logo.svg';
import {ItemList} from '@myorg6/ui';
import {Route, Link} from 'react-router-dom';
import { FeatureMain } from '@myorg6/feature-main';
import { FeatureAbout } from '@myorg6/feature-about';


/*const ITEMS = [
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
]*/


export const App = () => {
  // const [cart, setCart] = useState([]);

/*  const items = ITEMS.map((item) => (
    <div className="item">
      <p>{item.description}</p>
      <button
        item-code={item.code}
        onClick={() => setCart([...cart, item.code])}
      >
        Add to cart
      </button>
    </div>
  ));*/

  return (
    <div className="app">
      <header className="flex">
        <Logo width="75" height="75" />
        <h1>Welcome to shop!</h1>
        <Link to='/'> Cart </Link>
        <Link to='/about'> About </Link>
      </header>
      <main>
        <Route path='/' exact component={FeatureMain}/>
        <Route path='/about' exact component={FeatureAbout}/>
        {/*<div className="cart">{cart.length} items in the cart</div>*/}
        {/*<div>{items}</div>*/}
        {/*<div><ItemList items={ITEMS} addToCart={(code) => setCart([...cart, code])} /></div>*/}
      </main>
    </div>
  );
};

export default App;
