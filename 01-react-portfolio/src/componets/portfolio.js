import React from 'react';

// React components are isolated parts of an application that help organize and isolate different parts of the program into smaller chunks
// We can pass data to these components and even render other components inside other components.
// The `portfolio` component is a child of our `App` component and is responsible for rendering the "Portfolio" header.


function portfolio() {
    const message = 'This is my fantastic portfolio! I am part of react';
 // The return statement contains something called "JSX"
  // JSX is a syntax extension to Javascript that allows us to write HTML inside Javascript
  // Expressions in JSX should be placed in curly braces {}


  return (
      <div className="container">
      <h2>{message}</h2>
      </div>
  );
}


export default portfolio;



