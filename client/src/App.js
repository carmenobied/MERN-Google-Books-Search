import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Books from "./pages/Books";
import Search from "./pages/search";
import Nav from "./components/Nav";

const App = () => (
  <Router>
    <div>
      <Nav />
        <Switch>
          <Route exact path={["/", "/books"]}>
            <Books />
          </Route>
          <Route exact path="/books/:id">
            <Detail />
          </Route>
           <Route exact path="/search">
            <Search />
          </Route>
        </Switch>
    </div>
  </Router>
);

export default App;
