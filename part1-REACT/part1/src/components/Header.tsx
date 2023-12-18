import React from 'react';

function Header({ course }) {
  console.log(`Header: ${course}`);
  return (
    <div>
      <h1>{course}</h1>
    </div>
  );
}

export default Header;
