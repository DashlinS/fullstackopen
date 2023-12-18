import React from 'react';
import Parts from './Parts';

function Content({ exercises, parts }) {
  return (
    <div>
      <Parts exercises={exercises[0]} parts={parts[0]} />
      <Parts exercises={exercises[1]} parts={parts[1]} />
      <Parts exercises={exercises[2]} parts={parts[2]} />
    </div>
  );
}

export default Content;
