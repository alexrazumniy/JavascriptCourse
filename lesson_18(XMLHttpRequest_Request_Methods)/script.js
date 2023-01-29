const renderPostlist = (postList) => {
  // const posts = postList.map(post => {
  for (let post of postList) {
    const postContainer = document.createElement("div");
    const titleElem = document.createElement("h2");
    const bodyElem = document.createElement("p");
    const button = document.createElement("button");

    titleElem.innerText = post.title;
    titleElem.style.padding = '0px';
    bodyElem.innerText = post.body;
    postContainer.classList.add('postContainer')
    button.innerText = "Show comments";
    button.classList.add('button')

    postContainer.append(titleElem, bodyElem, button);
    document.body.append(postContainer);

    let postsId = post.id

    button.addEventListener("click", () => {
      if (button.innerText === "Show comments") {
        button.innerText = "Hide comments";
        getComments(postsId, postContainer);
      } else if (button.innerText === "Hide comments") {
        button.innerText = "Show comments";
        hideComments()
      }
    });
  };
};

const BASE_URL = "https://jsonplaceholder.typicode.com";

const getPostlist = () => {
  return new Promise((resolve, reject) => {
    const postXhr = new XMLHttpRequest();
    postXhr.open("GET", `${BASE_URL}/posts`);
    postXhr.responseType = "json";
    postXhr.send();

    postXhr.onload = () => {
      const { status, response: postList } = postXhr;
      if (status === 200 || status === 201) {
        resolve();
        renderPostlist(postList);
        console.log(postList);
      } else {
        reject({
          status,
        });
      }
    };

    postXhr.onerror = () => {
      reject({});
      const titleElem = document.createElement("h3");
      titleElem.innerText = `Unable to load data from server!`;
      document.body.append(titleElem);
    };
  })
}
getPostlist()


const getComments = (postId, container) => {
  const commentsXhr = new XMLHttpRequest();
  commentsXhr.open("GET", `${BASE_URL}/posts/${postId}/comments`);
  commentsXhr.responseType = "json";
  commentsXhr.send();
  console.log(commentsXhr);

  commentsXhr.onload = () => {
    const { response: comments } = commentsXhr;

    for (let item of comments) {
      const commentsElem = document.createElement("div");
      const commentsText = document.createElement("p");

      commentsElem.className = 'comments'
      commentsElem.append(commentsText);
      commentsElem.style.width = '850px';

      commentsText.innerText = item.body;
      commentsText.style.borderBottom = '2px solid grey';
      container.append(commentsElem);
      commentsElem.style.fontSize = '14px';
    }
  }
}

const hideComments = (comments) => {
  comments = document.querySelectorAll('.comments');
  for (let i = 0; i < comments.length; i++) {
    comments[i].remove();
  }
  console.log(comments);
}