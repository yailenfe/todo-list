import React from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";
import UserList from "./UserList";
import UserDetail from "./UserDetail";

function Routes() {
  return (
    <Router>
      <div className="container">
        <div className="row m-3">
          <div className="col-md-4  d-none d-md-block">
            <UserList />
          </div>
          <div className="col-md-8 col-sm-12 ">
            <Route exact path="/user/:id" component={UserDetail} />
          </div>
        </div>
      </div>
    </Router>
  );
}

export default Routes;
