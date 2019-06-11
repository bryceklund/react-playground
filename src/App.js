import React from 'react';
import logo from './logo.svg';
import './App.css';
import Messages from './Messages';



function App() {
  return (
    <div className="App">
      <Messages name="Messages" unread={0} />
      <Messages name="Notifications" unread={10} />
    </div>
  );
}

export default App;
