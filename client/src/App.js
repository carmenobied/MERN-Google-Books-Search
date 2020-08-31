import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Books from "./pages/Books";
import Search from "./pages/Search";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";

const App = () => (
  <Router>
    <div>
      <Nav />
        <Switch>
          <Route exact path={["/", "/search"]}>
            <Books />
          </Route>
          <Route exact path="/api/books">
            <Books />
          </Route>
          <Route exact path="/books/:id">
            <Books />
          </Route>
           <Route exact path="/search">
            <Search />
          </Route>
          <Route>
            <NoMatch />
          </Route>
        </Switch>
    </div>
  </Router>
);

export default App;
