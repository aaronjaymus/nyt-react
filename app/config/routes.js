// Include the React library
var React = require("react");

// Include the react-router module
var router = require("react-router");

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

import Main from "../components/Main";

import Search from "../components/children/Search"

import Results from "../components/children/Results";

import Saved from "../components/children/Saved";

// Export the Routes
module.exports = (

  // The high level component is the Router component
  <Router history={hashHistory}>
    <Route path="/" component={Main}>

      {/* If user selects Results or Saved show the appropriate component */}
      <Route path="search" component={Search} />
      <Route path="results" component={Results} />
      <Route path="saved" component={Saved} />

      
      {/*<IndexRoute component={Results} />*/}

    </Route>
   
  </Router>

);