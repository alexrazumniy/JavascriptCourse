const renderPost = (posts, container) => {
  const { title, body } = posts;

  for (let key of posts) {

    const postContainer = document.createElement("div");
    const titleElem = document.createElement("h2");
    const bodyElem = document.createElement("p");

    titleElem.innerText = key.title;
    bodyElem.innerText = key.body;

    postContainer.append(titleElem, bodyElem);
    container.append(postContainer);

    container.style.border = '1px solid'
  }
};

const BASE_URL = "https://jsonplaceholder.typicode.com";

const postXhr = new XMLHttpRequest();
postXhr.open("GET", `${BASE_URL}/posts`);
postXhr.responseType = "json";
postXhr.send();

postXhr.onload = () => {
  const { response: posts } = postXhr;
  console.log(`posts`, posts);
  renderPost(posts, document.body);
};




// postXhr.onreadystatechange = () => {
//   const { readyState } = postXhr;
//   console.log(`readyState`, readyState);
// };

// if (readyState = 4) {
//   ...innerText = "Hide comments"
// }
