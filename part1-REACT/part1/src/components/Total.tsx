import React from 'react';

function Total({ exercises }) {
  return (
    <div>
      <p>Number of exercises {exercises[0] + exercises[1] + exercises[2]}</p>
    </div>
  );
}

export default Total;
