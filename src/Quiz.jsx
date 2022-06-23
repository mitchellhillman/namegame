/* eslint-disable react/prop-types */
import React, { useState } from 'react';

import { createUseStyles } from 'react-jss';
import Question from './Question';

const useStyles = createUseStyles({
  root: {
    fontFamily: 'sans-serif',
  },
  headshotGallery: {
    '&:after': {
      content: '" "',
      display: 'table',
      clear: 'both',
    },
  },
  headshot: {
    float: 'left',
    width: 120,
    '& img': {
      width: '100%',
    },
  },
});

export default function ({ names }) {
  const classes = useStyles();

  const [correct, setCorrect] = useState(0);

  const getRandom = (length) => Math.floor(Math.random() * length);

  const getPerson = () => {
    const person = names[getRandom(names.length)];
    if (person.headshot && person.headshot.url) {
      return person;
    }
    return getPerson();
  };

  const getQuestion = () => {
    const question = getPerson();

    const answers = [];
    // eslint-disable-next-line no-plusplus
    for (let step = 0; step < 5; step++) {
      answers.push(getPerson());
    }
    answers.splice(getRandom(answers.length), 0, question);

    // if(question is already in quiz)
    return { question, answers };
  };

  const handleHeadshotClick = (question, answer) => {
    if (question === answer) {
      setCorrect((prev) => prev + 1);
      console.log('CORRECT');
    } else {
      console.log('FALSE');
    }
  };

  const { question, answers } = getQuestion();
  return (
    <div className={classes.root}>
      <h1>The Name Game</h1>
      <p>Try matching the WillowTree employee to their photo.</p>
      <p><button type="button">Play!</button></p>

      <h1>Results:</h1>
      <p>
        <span>Correct: </span>
        <span>{correct}</span>
      </p>

      <Question
        onHeadshotClick={handleHeadshotClick}
        question={question}
        answers={answers}
      />
    </div>
  );
}
