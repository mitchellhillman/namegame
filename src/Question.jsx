/* eslint-disable react/prop-types */
import React from 'react';

import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
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

export default function ({
  question, answers, onHeadshotClick, continueDisabled,
}) {
  const classes = useStyles();
  return (
    <div style={{ border: '1px solid black', margin: 20 }}>
      <p>Which one of these good looking photos is the real:</p>
      <p>{`${question.firstName} ${question.lastName}`}</p>
      <div className={classes.headshotGallery}>
        {answers.map(({ slug, headshot }) => (
          <div key={slug} className={classes.headshot}>
            <button type="button" onClick={() => onHeadshotClick(question.slug, slug)}>
              <img src={headshot.url} alt={headshot.alt} />
            </button>
          </div>
        ))}
      </div>
      <button
        type="button"
        disabled={continueDisabled}
      >
        Continue

      </button>
    </div>
  );
}
