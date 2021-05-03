import React from "react";
import qs from "qs";

function About({ match, location }) {
  const query = qs.parse(location.search, {
    ignoreQueryPrefix: true,
  });

  const renderResult = () => {
    if (query.detail === "false") {
      return <div>안 보여줄거지랑</div>;
    } else {
      return <div>{query.name}</div>;
    }
  };

  return (
    <>
      <div>
        <h2>About</h2>
        <p>안녕하세요~~</p>
      </div>
      <div>{renderResult()}</div>
    </>
  );
}

export default About;
