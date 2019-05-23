import React from 'react';
import { Route } from 'react-router-dom';
import Assign1 from './components/assign1/assign1';
import Assign2 from './components/assign2/assign2';
import Navbar from './components/navbar/navbar';
import Assign from './components/assign/assign';

import './App.scss';

const App=()=>{

  return (
    <div className="App">
      <Navbar  />
      <Route path="/assign1" exact component={Assign1} />
      <Route path="/assign2" exact component={Assign2} />
      <Route path="/" exact component={Assign} />
    </div>
  );
}

export default App;
