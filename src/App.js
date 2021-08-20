import React, { useState, useEffect} from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import Confirm from "./Components/confirm";
import Pizza from "./Components/pizza";
import Home from "./Components/homepage";



const App = () => {












  return (
    <>
    <nav>
      <h1 className='header-title'>Lambda Eats</h1>
      <div className='header-links'>
        <Link to='/' style={{textDecoration:'none'}}> Home </Link>
        
        <Link to='/pizza' style={{textDecoration:'none'}}> Order Pizza </Link>
      </div>
    </nav>
      
    <Switch>
        <Route path='/confirm'>
          <Confirm />
        </Route>
        <Route path='/pizza'>
          <Pizza/>
        </Route>
        <Route path='/'>
          <Home />
        </Route>
    </Switch> 

    </>
  );
};
export default App;
