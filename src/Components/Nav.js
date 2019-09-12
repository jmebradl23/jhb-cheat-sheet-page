import React from 'react';
// import './App.css';
import './Nav.css';
import {Link} from 'react-router-dom';

function Nav() {
    return (
      <div className="Nav" fixed='top'>
          <Link to='/'>
              <p>Home</p>
          </Link>
      </div>
    );
  }

export default Nav;