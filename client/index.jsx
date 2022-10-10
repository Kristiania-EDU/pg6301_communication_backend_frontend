import React from 'react';
import ReactDOM  from 'react-dom';
import {createRoot} from "react-dom/client";

const element = document.getElementById('app');
const root = createRoot(element);


const App = () => {
  return(
    <div>
        <h1>Hello React</h1>
    </div>
  );
};

root.render(<App></App>);