const sleep = (n) => new Promise((resolve) => setTimeout(resolve, n));

sleep(1000).then(() => console.log("헬로 월드"));

//가짜 posts
// {id, title, body}

const posts = [
  {
    id: 1,
    title: "리덕스 미들웨어를 배워봅시다",
    body: "리덕스 미들웨어 뻑",
  },
  {
    id: 2,
    title: "리덕스 thunk를 배워봅시다",
    body: "리덕스 thunk ㅜ셋",
  },
  {
    id: 3,
    title: "리덕스 saga를 배워봅시다",
    body: "리덕스 saga 쉿",
  },
];

export const getPosts = async () => {
  await sleep(500);
  return posts;
};

export const getPostById = async (id) => {
  await sleep(500);
  return posts.find((post) => post.id === id);
};
