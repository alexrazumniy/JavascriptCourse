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
showPreloader(false);

class Card {
  constructor({ name }) {
    this.card = document.createElement("div");
    this.name = name;
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
      this.remove();
    })

    this.card.append(cardName, closeBtn);
  }

  show() {
    cardsContainer.append(this.card);
    showPreloader(false);
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
    const textManufacturer = document.createElement("p");
    const textMaxAtmSpeed = document.createElement("p");

    textModel.innerText = this.model;
    textManufacturer.innerText = this.manufacturer;
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
    const textCrew = document.createElement("p");
    const textPassengers = document.createElement("p");

    textCostInCredits.innerText = this.cost_in_credits;
    textCrew.innerText = this.crew;
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
    const textTerrain = document.createElement("p");
    const textPopulation = document.createElement("p");

    textClimate.innerText = this.climate;
    textTerrain.innerText = this.terrain;
    textPopulation.innerText = this.population;

    this.card.append(textClimate, textTerrain, textPopulation);
  }
}

class API {
  constructor() {
    this.BASE_URL = "https://swapi.dev/api";
  }

  findErrors = async (response) => {
    if (!response.ok) {
      const { options } = await response.json();
      throw new Error(options)
    }
    return response
  }

  getStarship = async (id) => {
    const starship = await this.sendRequest(`${this.BASE_URL}/starships/${id}`);
    return starship
  }

  getVehicle = async (id) => {
    const vehicle = await this.sendRequest(`${this.BASE_URL}/vehicles/${id}`);
    return vehicle
  }

  getPlanet = async (id) => {
    const planet = await this.sendRequest(`${this.BASE_URL}/planets/${id}`);
    return planet
  }

  sendRequest = async (url) => {
    const response = await this.findErrors(await fetch(url));
    const result = await response.json();
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
    errorMessage.innerText = "Некорректный id";
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
    showPreloader(true);

    const item = await API_MAP[type](id);
    const card = new CARD_MAP[type](item);

    card.show();
    errorMessage.innerText = "";
    input.value = "";

  } catch (err) {
    err.message = "Объекта с таким id не существует";
    errorMessage.innerText = err.message;

    input.value = "";
    showPreloader(false);
  }
})