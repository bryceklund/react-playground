import React from 'react';
import Split from './composition/Split';
import './App.css'
import Tooltip from './composition/Tooltip';

const firstTooltip = (
  <Tooltip color="hotpink" message="tooltip message">Lorem ipsum</Tooltip>
);

const secondTooltip = (
  <Tooltip color='#126BCC' message="second tooltip message">Delores Ipsum</Tooltip>
);

function App() {
  return (
    <main className='App'>
      <Split className="left" flexBasis={1}>
        This is the content for the left `Split`. Lorem {firstTooltip} ipsum dolor sit amet consectetur, adipisicing elit. Incidunt ex velit suscipit facere officia?
        <Tooltip message="yet another tooltip">OH NO</Tooltip>
      </Split>
      <Split className="right">
        This is the content for the right `Split`. Inventore aliquid cupiditate suscipit repellat. Quaerat quis officiis quam fuga. Aliquid quo {secondTooltip} possimus id soluta aspernatur.
      </Split>
    </main>
  );
}

export default App;