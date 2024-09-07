import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
        <nav>
          {/* Add navigation menu items here */}
        </nav>

        <Switch>
          <Route exact path="/">
            <h1>Welcome to Exam Management System</h1>
          </Route>
          {/* Add more routes here */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;