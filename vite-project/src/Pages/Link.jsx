import React from 'react';
import { Link as RouterLink} from 'react-router-dom';
import Home from './Home';

function Link() {
  return (
    <div>
        <Home />
        <nav>
        <ul className='flex m-8 space-x-4'>
                <li>Live 12</li>
                <li>All new features</li>
                <li>What is Live?</li>
                <li>Max for Live</li>
                <li>Learn Live</li>
                <li>Integrated hardware</li>
                <li>Compare editions</li>
                <li>Buy now</li>
            </ul>
        </nav>
    </div>
  );
}

export default Link;
