import React from 'react';
//Below we are imoporting our portfolio file from our componets folder
import Portfolio from './componets/Portfolio';

// React apps typically have a single App component at the very top that can reference other React components.
// This component, `App`, is our main component that is importing `portfolio` and rendering it in the return method.


function App() {
    return <Portfolio />;
}

export default App;


