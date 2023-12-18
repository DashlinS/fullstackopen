import React from 'react';

function Parts({ parts, exercises }) {
  return (
    <div>
      <p>
        {parts} {exercises}
      </p>
    </div>
  );
}

export default Parts;
