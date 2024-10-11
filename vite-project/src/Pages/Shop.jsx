import React from 'react';
import Home from './Home';

function Shop() {
  return (
    <div>
        <Home />
        <nav>
        <ul className='flex m-8 space-x-4'>
                <li>Overview</li>
                <li>Live</li>
                <li>Push</li>
                <li>Move</li>
                <li>Educational offers</li>
                <li>Max for Live</li>
                <li>Merchandise</li>
            </ul>
        </nav>
    </div>
  );
}

export default Shop;
