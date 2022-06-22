import React from 'react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  root: {
    fontFamily: 'sans-serif',
  },
});
function App() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      Name game
    </div>
  );
}

export default App;
