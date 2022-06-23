import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { createUseStyles } from 'react-jss';
import Quiz from './Quiz';

const useStyles = createUseStyles({
  root: {
    fontFamily: 'sans-serif',
  },
});
function App() {
  const classes = useStyles();
  const [names, setNames] = useState(undefined);

  useEffect(() => {
    axios.get('https://namegame.willowtreeapps.com/api/v1.0/profiles').then((res) => {
      setNames(res.data);
    });
  }, []);

  return (
    <div className={classes.root}>
      {names
        ? <Quiz names={names} />
        : 'Loading...'}
    </div>
  );
}

export default App;
