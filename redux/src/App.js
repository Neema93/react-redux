import React from 'react';
import './App.css';
import User from './components/User';
import HomeContainers from './containers/HomeContainers';
import HeaderContainer from './containers/HeaderContainer';
import Counter from './counter/Counter'
function App() {
  return (
    <div className="App">
      <HeaderContainer />
      <HomeContainers />
      <hr></hr>
      <Counter />
    </div>
  );
}

export default App;
