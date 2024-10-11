import React from 'react';
import Home from './Home';

function Push() {
  return (
    <div>
        <Home />
        <nav>
        <ul className='flex m-8 space-x-4'>
                <li>Overview</li>
                <li>Tech specs</li>
                <li>Learn Push</li>
                <li>Upgrade Kit</li>
                <li>Buy now</li>
            </ul>
        </nav>
    </div>
  );
}

export default Push;
