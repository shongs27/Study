import React from "react";

const userList = {
  velopart: {
    name: "김민준",
    content: "그는 강사이다. 실력은 hongs보다는 좀 덜함",
  },
  hongs: {
    name: "홍원배",
    content: "그는 십고수 위대한 개발자이다 ",
  },
};

function Profile({ match }) {
  const target = match.params.username;
  const realTarget = userList[target];

  if (!realTarget) {
    return <div>그런 사람 또 없습니다 ~</div>;
  }

  return (
    <>
      <div>{realTarget.name}</div>
      <p>{realTarget.content}</p>
    </>
  );
}

export default Profile;
