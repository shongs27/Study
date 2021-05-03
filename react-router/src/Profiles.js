import React from "react";
import { NavLink, Route } from "react-router-dom";
import Profile from "./Profile";

function Profiles() {
  return (
    <>
      <div>
        <ul>
          <li>
            <NavLink
              to="/profiles/velopart"
              activeStyle={{ backgroundColor: "gray" }}
            >
              좆밥퍼트
            </NavLink>
          </li>
          <li>
            <NavLink
              activeStyle={{ backgroundColor: "blue" }}
              to="/profiles/hongs"
            >
              홍쓰!
            </NavLink>
          </li>
        </ul>
      </div>
      <Route
        exact
        path="/profiles/"
        render={() => <div>사용자를 한명 고르시오</div>}
      />
      <Route path="/profiles/:username" component={Profile} />
    </>
  );
}

export default Profiles;
