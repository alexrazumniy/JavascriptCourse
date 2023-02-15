function PublicService() {
  this.services = []; // [{key: 'service', volume: 100}, {}, {}]

  this.tariffs = {
    hotWater: 86.32,
    coldWater: 24.52,
    gas: 7.96,
    electricity: 1.44,
    heatEnergy: 39.38,
  }
}

PublicService.prototype.addMeterReadings = function (volume, serviceName) {
  
  try {
    if (!Object.keys(this.tariffs).includes(serviceName)) {
      throw new Error(`Service ${serviceName} is unavailable`)
    } else if (this.services.some(({ key }) => key === serviceName)) {
      throw new Error(`Service ${serviceName} is already included`)
    } else {
      this.services.push({ key: serviceName, volume })
    }

  } catch (err) {
    let errorText = err.message;    
    alert(errorText)
  }
}

PublicService.prototype.deleteMeterReadings = function (serviceName) {
  this.services = this.services.filter(({ key }) => key !== serviceName)
}

PublicService.prototype.getSum = function () {
  let sum = 0;
  this.services.forEach(({ key, volume }) => {
    sum += this.tariffs[key] * volume;

    const serviceString = document.createElement('p');
    serviceString.innerText = `${key}: ${volume} cb.m, (${this.tariffs[key]} UAH/cb.m), ${(this.tariffs[key] * volume).toFixed(2)} UAH`;
    if (key === 'electricity') {
      serviceString.innerText = `${key}: ${volume} kWh, (${this.tariffs[key]} UAH/kWh), ${(this.tariffs[key] * volume).toFixed(2)} UAH`;
    }
    if (key === 'heatEnergy') {
      serviceString.innerText = `${key}: ${volume} sq.m, (${this.tariffs[key]} UAH/sq.m), ${(this.tariffs[key] * volume).toFixed(2)} UAH`;
    }
    document.body.append(serviceString);
  })

  const sumString = document.createElement('p');
  sumString.innerText = `Total: ${sum.toFixed(2)} UAH`
  sumString.style.fontWeight = 'bold'
  document.body.append(sumString);

  return sum
}

const service = new PublicService();

service.addMeterReadings(10, "hotWater");
service.addMeterReadings(20, "coldWater");
service.addMeterReadings(25, "gas");
service.addMeterReadings(150, "electricity");
service.addMeterReadings(45, "heatEnergy");
// service.deleteMeterReadings("gas");

const res = service.getSum();
