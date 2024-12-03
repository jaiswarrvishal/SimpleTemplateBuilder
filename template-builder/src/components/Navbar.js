import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav>
    <Link to="/">Templates List</Link> | <Link to="/editor">Create Template</Link>
  </nav>
);

export default Navbar;
