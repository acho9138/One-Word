// React Libraries
import React from 'react';

// Custom Styles
import { styles } from './Navbar.styles';

const Navbar = () => {
  const styling = styles();

  return (
    <div style={styling.root}>
      <h1>One Word</h1>
    </div>
  );
}

export default Navbar;