import React from 'react';
import './App.css';
//import User from './components/User';
import HomeContainers from './containers/HomeContainers';
import HeaderContainer from './containers/HeaderContainer';
import Counter from './Udemy/counter/Counter';
import Expensify from './Udemy/Expensify/Expensify';
function App() {
  return (
    <div className="App">
      <HeaderContainer />
      <HomeContainers />
      <hr></hr>
      <Counter />
      <hr></hr>
    <Expensify />
    </div>
  );
}

export default App;
