import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Blog from './components/Blog';
import Gnb from './components/Gnb';
import Blog1 from './components/Blog1';
import Blog2 from './components/Blog2';

function App() {
  const [showGnb, setShowGnb] = useState(false);

  return (
    <Router>
      <div>
        <Switch>
          <Route
            path='/:otherPath'
            render={() => {
              // Gnb가 보일 때
              setShowGnb(true);
              return <Gnb />;
            }}
          />
        </Switch>
        <div className='app-container'>
          <div className={`${showGnb ? 'with-padding' : ''}`}>
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/blog' component={Blog} />
              <Route exact path='/blog1' component={Blog1} />
              <Route exact path='/blog2' component={Blog2} />
            </Switch>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
