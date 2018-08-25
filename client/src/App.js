import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Articles from "./pages/Books";
import SavedPage from "./pages/SavedPage";
const App = () => (
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={Articles} />
        <Route exact path="/saved" compontent={SavedPage}/>
        <Route  path="/*" component={Articles}/>
        

      </Switch>
    </div>
  </Router>
);

export default App;
