import React from 'react';

function Parts({ parts }) {
  return (
    <div>
      <p>
        {parts.name} {parts.exercises}
      </p>
    </div>
  );
}

export default Parts;
