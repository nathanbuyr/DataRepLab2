import React from 'react';

{/* Content Function*/}
const Content = () => {
  return (
    <div>
      <h1>Hello World!</h1>
      {/* Uses Date function to retrieve current local time */}
      <h2>It is {new Date().toLocaleTimeString()}.</h2>
    </div>
  );
}

export default Content;