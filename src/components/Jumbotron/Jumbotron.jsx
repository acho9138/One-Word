// React Libraries
import React from 'react';

// Custom Styles
import { styles } from './Jumbotron.styles';

const Jumbotron = (props) => {
  const styling = styles();

  return (
    <div style={styling.root}>
      <h1>{props.title}</h1>
    </div>
  );
}

export default Jumbotron;