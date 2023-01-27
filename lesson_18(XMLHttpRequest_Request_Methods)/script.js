const renderPostlist = (postList) => {
  for (let item of postList) {
    const postContainer = document.createElement("div");
    const titleElem = document.createElement("h2");
    const bodyElem = document.createElement("p");
    const button = document.createElement("button");

    titleElem.innerText = item.title;
    bodyElem.innerText = item.body;
    button.innerText = "Show comments";

    postContainer.append(titleElem, bodyElem, button);
    document.body.append(postContainer);

    document.body.style.fontFamily = 'Arial'
    document.body.style.fontSize = '16px'
    postContainer.style.width = '1000px';
    postContainer.style.paddingLeft = '25px';
    postContainer.style.paddingBottom = '25px';
    postContainer.style.marginBottom = '25px';
    postContainer.style.border = '1px solid';
    postContainer.style.borderRadius = '10px';
    titleElem.style.padding = '0px';
    button.style.width = '170px';
    button.style.padding = '5px';
    button.style.border = '2px solid';
    button.style.borderRadius = '5px';

    button.addEventListener("click", () => {
      if (button.innerText === "Show comments") {
        button.innerText = "Hide comments";
        getComments(postId, postContainer);

      } else if (button.innerText === "Hide comments") {
        button.innerText = "Show comments";
        // parent.lastElementChild = 'none'
        // parent.lastElementChild.style.display = 'none'
        // hideComments()
      }
    });
  }
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
      } else {
        reject({
          status,
        });
      }
    };

    postXhr.onerror = () => {
      reject({});
      const titleElem = document.createElement("h3");
      titleElem.innerText = 'Unable to load data from server!';
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
    console.log(`comments`, comments);

    for (let item of comments) {
      const commentsElem = document.createElement("div");
      const commentsText = document.createElement("p");
      commentsElem.append(commentsText);
      commentsElem.style.width = '850px';
      commentsText.innerText = item.body;
      commentsText.style.borderBottom = '2px solid grey'
      container.append(commentsElem);
      document.body.style.fontFamily = 'Arial'
      commentsElem.style.fontSize = '14px'
    }
  }
}

const hideComments = () => {
  container.style.display = 'none'
}



