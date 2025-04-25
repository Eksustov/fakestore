import React from 'react';
import Star from '../../components/Star/Star.jsx';

function Rating({ value }) {
  // Round to nearest 0.5 for half-stars if needed later
  const fullStars = Math.floor(value);
  const stars = [];

  for (let i = 0; i < 5; i++) {
    stars.push(<Star key={i} filled={i < fullStars} />);
  }

  return <div className="rating">{stars}</div>;
}

export default Rating;