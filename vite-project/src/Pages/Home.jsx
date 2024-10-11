import React from 'react';
import { Link} from 'react-router-dom'
function Home() {
  return (
    <>
    <div className='flex m-6'>
      <nav>
        <ul className='flex space-x-4'>
            <li><Link to="/live">Live</Link></li>
            <li><Link to="/push">Push</Link></li>
            <li><Link to="/move">Move</Link></li>
            <li><Link to="/note">Note</Link></li>
            <li><Link to="/link">Link</Link></li>
            <li><Link to="/shop">Shop</Link></li>
            <li><Link to="/packs">Packs</Link></li>
            <li><Link to="/help">Help</Link></li>
        </ul>
      </nav>
    </div>
    <div className='flex w-screen h-px bg-slate-200'></div>
    </>
  );
}

export default Home;
