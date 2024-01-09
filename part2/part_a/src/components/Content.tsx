import React from 'react';
import Parts from './Parts';
import Total from './Total';

function Content({ content }) {
  const object = Object.values(content);

  return (
    <div>
      {content.map((item) => (
        <Parts key={item.id} parts={item} />
      ))}
      <Total items={object} />
    </div>
  );
}

export default Content;
