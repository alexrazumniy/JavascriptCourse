function PublicService({index, tariff}) {
  this.index = index;
  this.tariff = tariff;
  console.log(this);
}

function addMeterReadings(index, value) {
  // const {index, value} = options;
  this.value = value;
  PublicService.call(this, value);
}
const meterReadings = new PublicService( 'hotWater', 7 );
console.log(meterReadings);
// meterReadings.addMeterReadings(7, 3)

PublicService.prototype.addMeterReadings = function (index, value) {

    // const {index: value} = options;
    for(option in tariffs) {
      const indicator = document.createElement('p');
      indicator.innerText = `${index} составляет ${value} куб.м`;
      document.body.append(indicator);
  
    }
    console.log(indicator);
  }



// const tariffs = {
//   hotWater: 7,
//   coldWater: 1,
//   gas: 0.3,
//   electricity: 1.6,
// }





// PublicService.prototype.addMeterReadings = function (index, value) {

//   const {index: value} = options;
//   for(option in tariffs) {
//     const indicator = document.createElement('p');
//     indicator.innerText = `${index} составляет ${value} куб.м`;
//     document.body.append(indicator);

//   // }
//   // console.log(indicator);
// }
// }
// const meterReadings = new PublicService({ tariffs });
// console.log(meterReadings);
// meterReadings.addMeterReadings({ tariffs })


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