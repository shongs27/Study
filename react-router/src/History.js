import React, { useEffect } from "react";

function History({ history }) {
  const goBack = () => {
    history.goBack();
  };
  const onPush = () => {
    history.push("/");
  };
  const onReplace = () => {
    history.replace("/");
  };

  useEffect(() => {
    console.log(history);
    return () => {
      history.block("정말 떠나실건가요?");
    };
  }, [history]);
  return (
    <div>
      <button onClick={goBack}>GoBack</button>
      <button onClick={onPush}>Push</button>
      <button onClick={onReplace}>Replace</button>
    </div>
  );
}

export default History;
