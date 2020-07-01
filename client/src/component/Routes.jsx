import React, { useState } from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";
import UserList from "./UserList";
import UserDetail from "./UserDetail";
import Header from "./Header";

function Routes() {
    const [filter, setFilter] = useState("");

    return (
        <Router>
            <Header filter={filter} setFilter={setFilter} />
            <div className="container">
                <div className="row m-3">
                    <div className="col-md-4  d-none d-md-block">
                        <UserList filter={filter} />
                    </div>
                    <div className="col-md-8 col-sm-12 ">
                        <Route
                            exact
                            path="/user/:id"
                            render={() => <UserDetail filter={filter} />}
                        />
                    </div>
                </div>
            </div>
        </Router>
    );
}

export default Routes;
