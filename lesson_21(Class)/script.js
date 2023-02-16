const container = document.getElementById("container");
const form = document.getElementById("form");
const input = document.getElementById('input');
const select = document.getElementById('select');
const submitButton = document.getElementById('btn-submit');
const errorMessage = document.getElementById('error_message')
const preloader = document.getElementById("preloader");

const showPreloader = (show) => {
  if (show) {
    preloader.style.display = "block";
  } else {
    preloader.style.display = "none";
  }
};

class Card {
  constructor(name) {
    this.name = name;
    this.card = document.createElement("div");
    this.render();
  }
  render() {
    const cardName = document.createElement("h3");
    const closeBtn = document.createElement("button");

    this.card.classList.add("card")
    cardName.classList.add("card_name");
    closeBtn.classList.add("close_button");
    closeBtn.innerText = "X";
    this.card.append(closeBtn, cardName);

    closeBtn.addEventListener("click", () => {
      this.remove()
    })
  }
  show() {
    document.body.append(this.card);
  }
  remove() {
    this.card.remove();
  }
}

class StarshipCard extends Card {
  constructor({ name, model, manufacturer, max_atmosphering_speed }) {
    this.name = name;
    this.model = model;
    this.manufacturer = manufacturer;
    this.max_atmosphering_speed = max_atmosphering_speed;
    this.render();
  }
  render() {
    super.render();
    const name = document.createElement("p");
    name.classList.add("object_name");
    name.innerText = this.name;
    this.card.append(name);

    const model = document.createElement("p");
    model.innerText = this.model;
    this.card.append(model);

    const manufacturer = document.createElement("p");
    manufacturer.innerText = this.manufacturer;
    this.card.append(manufacturer);

    const max_atmosphering_speed = document.createElement("p");
    max_atmosphering_speed.innerText = this.max_atmosphering_speed;
    this.card.append(max_atmosphering_speed);
  }
}

class VehicleCard extends Card {
  constructor({ name, cost_in_credits, crew, passengers }) {
    this.name = name;
    this.cost_in_credits = cost_in_credits;
    this.crew = crew;
    this.passengers = passengers;
    this.render();
  }
  render() {
    super.render();
    const name = document.createElement("p");
    name.classList.add("object_name");
    name.innerText = this.name;
    this.card.append(name);

    const cost_in_credits = document.createElement("p");
    cost_in_credits.innerText = this.cost_in_credits;
    this.card.append(cost_in_credits);

    const crew = document.createElement("p");
    crew.innerText = this.crew;
    this.card.append(crew);

    const passengers = document.createElement("p");
    passengers.innerText = this.passengers;
    this.card.append(passengers);
  }
}

class PlanetCard extends Card {
  constructor({ name, climate, terrain, population }) {
    this.name = name;
    this.climate = climate;
    this.terrain = terrain;
    this.population = population;
    this.render();
  }
  render() {
    super.render();
    const name = document.createElement("p");
    name.classList.add("object_name");
    name.innerText = this.name;
    this.card.append(name);

    const climate = document.createElement("p");
    climate.innerText = this.climate;
    this.card.append(climate);

    const terrain = document.createElement("p");
    terrain.innerText = this.terrain;
    this.card.append(terrain);

    const population = document.createElement("p");
    population.innerText = this.population;
    this.card.append(population);
  }
}

class API {
  constructor(id) {
    this.BASE_URL = "https://swapi.dev/api";
    this.id = id;
  }

  getObject = async () => {
    try {
      switch (objectType) {

        case 'starships':
          const starshipRes = await fetch(`${this.BASE_URL}/starships/${id}`);
          if (starshipRes.status === 200) {
            const starshipInfo = await starshipRes.json();
            const { name, model, manufacturer, max_atmosphering_speed } = starshipInfo;
            StarshipCard.render()
          } else {
            throw new Error(`Unable to get starship from server. Error status "${starshipRes.status}"`)
          }

        case 'vehicles':
          const vehicleRes = await fetch(`${this.BASE_URL}/vehicles/${id}`);
          if (vehicleRes.status === 200) {
            const vehicleInfo = await vehicleRes.json();
            const { name, cost_in_credits, crew, passengers } = vehicleInfo;
            VehicleCard.render()
          } else {
            throw new Error(`Unable to get vehicle from server. Error status "${vehicleRes.status}"`)
          }

        case 'planets':
          const planetRes = await fetch(`${this.BASE_URL}/planets/${id}`);
          if (planetRes.status === 200) {
            const planetInfo = await planetRes.json();
            const { name, climate, terrain, population } = planetInfo;

            PlanetCard.render()
          } else {
            throw new Error(`Unable to get planet from server. Error status "${planetRes.status}"`)
          }
      }
      card.show()
    } catch (err) {
      let errorText = err.message;
      alert(errorText);
      // showPreloader(false);
    }
  }
}

