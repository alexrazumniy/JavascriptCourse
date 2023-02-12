function PublicService(service) {
  const { serviceIndex, value } = service;
  this.serviceIndex = serviceIndex;
  this.value = value;
}

PublicService.prototype.addMeterReadings = function (tariff) {
  this.tariff = tariff;

  const servicePay = this.value * this.tariff
  console.log(servicePay);

  const serviceName = document.createElement('p');
  serviceName.innerText = `${this.serviceIndex}:  ${this.value}, tariff = ${this.tariff}, pay = ${servicePay}`
  document.body.append(serviceName);
}


// if (this.serviceIndex) {
//   throw new Error(`Service ${this.serviceIndex} is unavailable`);
// }


PublicService.prototype.deleteMeterReadings = function (serviceIndex) {
  console.log(serviceIndex);
}

const service1 = new PublicService({ serviceIndex: 'hotWater', value: 100 });
service1.addMeterReadings(7)
console.log(service1);
const service2 = new PublicService({ serviceIndex: 'coldWater', value: 200 });
service2.addMeterReadings(1)
const service3 = new PublicService({ serviceIndex: 'coldWater', value: 200 });
service2.addMeterReadings(1)
console.log(service2);








//   this.getSum = function (consumptionVolume, tariff) {
//     this.consumptionVolume = consumptionVolume;
//     this.tariff = tariff;
//     const payment = consumptionVolume * tariff;
//     console.log(payment);
// }

// const calcHotWater = new PublicService();
// calcHotWater.addMeterReadings('Объем горячей воды', '100');
// console.log(calcHotWater);

// const calcColdWater = new PublicService();
// calcColdWater.addMeterReadings('Объем холодной воды', '300')
// console.log(calcColdWater);



// const service = new PublicService();

// service.addMeterReadings(100, "hotWater");
// service.addMeterReadings(200, "coldWater");
// service.deleteMeterReadings("coldWater");
// service.addMeterReadings(300, "electricity");

// const res = service.getSum();