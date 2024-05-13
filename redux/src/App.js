import React from 'react';
import './App.css';
import User from './components/User';
import HomeContainers from './containers/HomeContainers';
import HeaderContainer from './containers/HeaderContainer';
function App() {
  return (
    <div className="App">
      <HeaderContainer />
      <HomeContainers />
    </div>
  );
}

export default App;
