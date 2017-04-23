// Include the React library
import React from 'react';

// Include the react-router module
import router from 'react-router';

// Include the Route component for displaying individual routes
var Route = router.Route;

// Include the Router component to contain all our Routes
// Here where we can pass in some configuration as props
var Router = router.Router;

// Include the hashHistory prop to handle routing client side without a server
// https://github.com/ReactTraining/react-router/blob/master/docs/guides/Histories.md#hashhistory
var hashHistory = router.hashHistory;

// Include the IndexRoute (catch-all route)
var IndexRoute = router.IndexRoute;

//Reference the high level components
//var Main = require("../components/Main");
import Main from "../components/Main";
//var Results = require("../components/Results");
import Results from "../components/Results";
//var Saved = require("../components/Saved");
import Saved from "..components/Saved";

// Export the Routes
module.exports = (

  // The high level component is the Router component
  <Router history={hashHistory}>
    <Route path="/" component={Main}>

      {/* If user selects Results or Saved show the appropriate component */}
      <Route path="results" component={Results} />
      <Route path="saved" component={Saved} />

      {/* If user selects any other path... we get the Info Route */}
      <IndexRoute component={Main} />

    </Route>
  </Router>

);