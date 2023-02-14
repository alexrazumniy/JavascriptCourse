const SWAPI_URL = "https://swapi.dev/api";

const container = document.getElementById("container");
const form = document.getElementById("form");
const input = document.getElementById('input');
const submitButton = document.getElementById('btn-submit');
// const errorMessage = document.getElementById('error_message')
const preloader = document.getElementById("preloader");

const showPreloader = (show) => {
  if (show) {
    preloader.style.display = "block";
  } else {
    preloader.style.display = "none";
  }
};

class Card {
  constructor() {
    this.title = title;
    this.text = text;
    this.card = document.createElement("div");
    this.render();
  }

  render() {
    const cardContainer = document.createElement("div");
    const closeCard = document.createElement("p");

    cardContainer.classList.add("card_container");
    closeCard.classList.add("close_card");

    console.log(closeCard);
    closeCard.innerText = "X";

    this.card.append(cardContainer);
  }

  show() {
    document.body.append(this.card);
  }

  hide() {
    this.card.remove();
  }
}

class PlanetCard extends Card {
  render() {
    super.render();
    const objectName = document.createElement("p");
    objectName.classList.add("object_name");

    // objectName.innerText = 
  }
}


class API extends Card {
  render() {
    // const requestFilms
  }
}