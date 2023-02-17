const form = document.getElementById("form");
const input = document.getElementById('input');
const select = document.getElementById('select');
const submitButton = document.getElementById('btn-submit');
const cardsContainer = document.getElementById("cards_container");
const errorMessage = document.getElementById('error_message');
const preloader = document.getElementById("preloader");

const showPreloader = (show) => {
  if (show) {
    preloader.style.display = "block";
  } else {
    preloader.style.display = "none";
  }
};

class Card {
  constructor({ name }) {
    this.card = document.createElement("div");
    this.name = name;
    // this.render();
  }
  render() {
    this.card.classList.add("card");

    const cardName = document.createElement("h3");
    cardName.classList.add("card_name");
    cardName.innerText = this.name;

    const closeBtn = document.createElement("button");
    closeBtn.classList.add("close_button");
    closeBtn.innerText = "X";

    closeBtn.addEventListener("click", () => {
      this.remove()
    })

    this.card.append(cardName, closeBtn);
  }
  show() {
    cardsContainer.append(this.card);
  }
  remove() {
    this.card.remove();
  }
}

class StarshipCard extends Card {
  constructor({ model, manufacturer, max_atmosphering_speed, ...rest }) {
    super(rest);
    this.model = model;
    this.manufacturer = manufacturer;
    this.max_atmosphering_speed = max_atmosphering_speed;
    this.render();
  }
  render() {
    super.render();

    const textModel = document.createElement("p");
    textModel.innerText = this.model;

    const textManufacturer = document.createElement("p");
    textManufacturer.innerText = this.manufacturer;

    const textMaxAtmSpeed = document.createElement("p");
    textMaxAtmSpeed.innerText = this.max_atmosphering_speed;

    this.card.append(textModel, textManufacturer, textMaxAtmSpeed);
  }
}


class VehicleCard extends Card {
  constructor({ cost_in_credits, crew, passengers, ...rest }) {
    super(rest);
    this.cost_in_credits = cost_in_credits;
    this.crew = crew;
    this.passengers = passengers;
    this.render();
  }
  render() {
    super.render();

    const textCostInCredits = document.createElement("p");
    textCostInCredits.innerText = this.cost_in_credits;

    const textCrew = document.createElement("p");
    textCrew.innerText = this.crew;

    const textPassengers = document.createElement("p");
    textPassengers.innerText = this.passengers;

    this.card.append(textCostInCredits, textCrew, textPassengers);
  }
}

class PlanetCard extends Card {
  constructor({ climate, terrain, population, ...rest }) {
    super(rest);
    this.climate = climate;
    this.terrain = terrain;
    this.population = population;
    this.render();
  }
  render() {
    super.render();

    const textClimate = document.createElement("p");
    textClimate.innerText = this.climate;

    const textTerrain = document.createElement("p");
    textTerrain.innerText = this.terrain;

    const textPopulation = document.createElement("p");
    textPopulation.innerText = this.population;

    this.card.append(textClimate, textTerrain, textPopulation);
  }
}

class API {
  constructor() {
    this.BASE_URL = "https://swapi.dev/api";
  }

  // findErrors = async (id) => {
  //   if (!response.ok) {
  //     const { details } = await response.json();
  //     throw new Error(details)
  //   }
  //   return response
  // }

  getStarship = async (id) => {
    const starship = await fetch(`${this.BASE_URL}/starships/${id}`);
    const result = await starship.json();
    return result
  }

  getVehicle = async (id) => {
    const vehicle = await fetch(`${this.BASE_URL}/vehicles/${id}`);
    const result = await vehicle.json();
    return result
  }

  getPlanet = async (id) => {
    const planet = await fetch(`${this.BASE_URL}/planets/${id}`);
    const result = await planet.json();
    return result
  }
}

const api = new API();

const CARD_MAP = {
  starship: StarshipCard,
  vehicle: VehicleCard,
  planet: PlanetCard,
}

const API_MAP = {
  starship: api.getStarship,
  vehicle: api.getVehicle,
  planet: api.getPlanet,
}

form.addEventListener("submit", async (event) => {
  event.preventDefault();

  const id = Number(input.value);
  const type = select.value;
  errorMessage.innerText = "";

  if (!id) {
    errorMessage.innerText = "Данного id не существует или введен некорректный id";
    input.value = "";
    return
  }

  switch (type) {
    case 'Starship':
      api.getStarship(id);
      break;

    case 'Vehicle':
      api.getVehicle(id);
      break;

    case 'Planet':
      api.getPlanet(id);
      break;
  }

  try {
    const item = await API_MAP[type](id);
    const card = new CARD_MAP[type](item);

    card.show();

  } catch (err) {
    alert(err.message);
    // showPreloader(false);
  }
})
