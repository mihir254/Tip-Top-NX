import React from 'react';
import { Switch, Route } from 'react-router';
import Login from './containers/Login/Login';
import Home from './containers/Home';
import ProtectedRoute from './components/ProtectedRoute';
import Drawer from './components/Drawer';

function App() {
  
  return (
    <Switch>
      <ProtectedRoute path="/admin" component={() => 
          <Drawer>
            <Route exact path="/admin" component={Home} />
          </Drawer>
        } />
      <Route path="/" component={Login} />
    </Switch>
  );
}

export default App;
