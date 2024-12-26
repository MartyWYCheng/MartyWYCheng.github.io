import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Bio } from './components/Resume/Bio';
import { SkillsList } from './components/Sidebar/SkillsList';

function App() {
  return (
    <Router>
      <div className="flex">
        <SkillsList />
        <div className="flex-1 pl-12 md:pl-0">
          <Switch>
            <Route path="/" exact component={Bio} />
            {/* Add other routes here */}
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;