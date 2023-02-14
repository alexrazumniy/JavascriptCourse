function PublicService() {
  this.services = []; // [{key: 'service', volume: 100}, {}, {}]

  this.tariffs = {
    hotWater: 75,
    coldWater: 36,
    gas: 8,
    electricity: 1.44,
  }
}

PublicService.prototype.addMeterReadings = function (volume, serviceName) {
  if (!Object.keys(this.tariffs).includes(serviceName)) {
    throw new Error(`Service ${serviceName} is unavailable`)
  }

  if (this.services.some(({ key }) => key === serviceName)) {
    throw new Error(`Service "${serviceName}" is already included`)
  }

  this.services.push({ key: serviceName, volume })
}


PublicService.prototype.deleteMeterReadings = function (serviceName) {
  this.services = this.services.filter(({ key }) => key !== serviceName)
}

PublicService.prototype.getSum = function () {
  let sum = 0;
  this.services.forEach(({ key, volume }) => {
    sum += this.tariffs[key] * volume

    const serviceDiv = document.createElement('p');
    serviceDiv.innerText = `${key}:  ${volume} cub.m, (${this.tariffs[key]} UAH/cub.m), ${this.tariffs[key] * volume} UAH`;
    if (key === 'electricity') {
      serviceDiv.innerText = `${key}:  ${volume} kWh, (${this.tariffs[key]} UAH/kWh), ${this.tariffs[key] * volume} UAH`;
    }
    document.body.append(serviceDiv);
  })
  const sumDiv = document.createElement('p');
  sumDiv.innerText = `Total sum = ${sum} UAH`
  sumDiv.style.fontWeight = 'bold'
  document.body.append(sumDiv);

  console.log(sum);
  return sum
}

const service = new PublicService();

service.addMeterReadings(10, "hotWater");
service.addMeterReadings(20, "coldWater");
service.addMeterReadings(25, "gas");
service.addMeterReadings(150, "electricity");
// service.deleteMeterReadings("coldWater");

const res = service.getSum();
