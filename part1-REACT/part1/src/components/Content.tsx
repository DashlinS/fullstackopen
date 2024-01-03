import React from 'react';
import Parts from './Parts';

function Content({ course }) {
  return (
    <div>
      <Parts parts={course.parts[0]} />
      <Parts parts={course.parts[1]} />
      <Parts parts={course.parts[2]} />
    </div>
  );
}

export default Content;
