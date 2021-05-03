import React from "react";
import { Link, Route, Switch } from "react-router-dom";
import Home from "./Home";
import about from "./About";
import Profiles from "./Profiles";
import History from "./History";

function App() {
  return (
    <>
      <div>
        <ul>
          <li>
            <Link to="/">홈</Link>
          </li>
          <li>
            <Link to="/about">소개</Link>
          </li>
          <li>
            <Link to="/profiles/">프로필</Link>
          </li>
          <li>
            <Link to="/history/">History</Link>
          </li>
        </ul>
      </div>
      <hr />
      <Switch>
        <Route exact path="/" component={Home} />
        {/* qs String에 대해서  */}
        <Route path="/about" component={about} />
        {/* URL params에 대해서  */}
        <Route path="/profiles/" component={Profiles} />
        <Route path="/history/" component={History} />

        <Route render={() => <div>그런 페이지 또 없습니다~</div>} />
      </Switch>
    </>
  );
}

export default App;
