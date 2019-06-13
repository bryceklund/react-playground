import React from 'react';
import './App.css';
import Messages from './Messages';
import TheDate from './state/TheDate';
import Counter from './state/Counter/Counter';



function App() {
  return (
    <div className="App">
      <Messages name="Messages" unread={0} />
      <Messages name="Notifications" unread={10} />
      <TheDate />
      <Counter count={123} />
    </div>
  );
}

export default App;
