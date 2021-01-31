// React Libraries
import React from 'react';

// Custom Styles
import { styles } from './Jumbotron.styles';

const Jumbotron = () => {
  const styling = styles();

  return (
    <div style={styling.root}>
      <h1>One Word At a Time</h1>
    </div>
  );
}

export default Jumbotron;