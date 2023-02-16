// const container = document.getElementById("container");
const form = document.getElementById("form");
const input = document.getElementById('input');
const select = document.getElementById('select');
const submitButton = document.getElementById('btn-submit');
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
  constructor({name}) {
    this.card = document.createElement("div");
    this.name = name;
    // this.render();
  }
  render() {
    this.card.classList.add("card");

    const cardName = document.createElement("h3");
    cardName.classList.add("card_name");
    cardName.innerHTML = this.name;

    const closeBtn = document.createElement("button");
    closeBtn.classList.add("close_button");
    closeBtn.innerHTML = "X";

    closeBtn.addEventListener("click", () => {
      this.remove()
    })

    this.card.append(cardName, closeBtn);
  }
  show() {
    document.body.append(this.card); // const container = document.body
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
    textModel.innerHTML = this.model;

    const textManufacturer = document.createElement("p");
    textManufacturer.innerHTML = this.manufacturer;

    const textMaxAtmSpeed = document.createElement("p");
    textMaxAtmSpeed.innerHTML = this.max_atmosphering_speed;

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
    textCostInCredits.innerHTML = this.cost_in_credits;

    const textCrew = document.createElement("p");
    textCrew.innerHTML = this.crew;

    const textPassengers = document.createElement("p");
    textPassengers.innerHTML = this.passengers;

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
    textClimate.innerHTML = this.climate;

    const textTerrain = document.createElement("p");
    textTerrain.innerHTML = this.terrain;

    const textPopulation = document.createElement("p");
    textPopulation.innerHTML = this.population;

    this.card.append(textClimate, textTerrain, textPopulation);
  }
}

class API {
  constructor() {
    this.BASE_URL = "https://swapi.dev/api";
  }

  findErrors = async (id) => {
    if (!response.ok) {
      const { details } = await response.json();
      throw new Error(details)
    }
    return response
  }

  getStarship = async (id) => {
    const starship = await fetch(`${this.BASE_URL}/starships/${id}`);
    return starship
  }

  getVehicle = async (id) => {
    const vehicle = await fetch(`${this.BASE_URL}/vehicles/${id}`);
    return vehicle
  }

  getPlanet = async (id) => {
    const planet = await fetch(`${this.BASE_URL}/planets/${id}`);
    return planet
  }

  sendRequest = async (url) => {
    const response = await this.findErrors(await fetch(url));
    const result = await response.json();
    console.log(result);
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
  errorMessage.innerHTML = "";

  if (!id) {
    errorMessage.innerHTML = "Данного id не существует или введен некорректный id";
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

    console.log(item);
    console.log(card);

  } catch (err) {
    alert(err.message);
    // showPreloader(false);
  }
})
