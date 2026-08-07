const temperature = 90;
const timeOfDay = "morning";
let soilMoisture = 30;

function wateringControl() {
  if (temperature > 80) {
    console.log("Watering on");
  } else {
    console.log("Watering off");
  }
}

  function gardenLightsControl() {
    if (timeOfDay == "evening" || timeOfDay == "night") {
      console.log("Lights on");
    } else {
      console.log("Lights off");
    }
  }

  function soilMoistureAdjustment() {
    while (soilMoisture < 40) {
        soilMoisture += 5
        console.log(soilMoisture)
    }
  }


wateringControl()
gardenLightsControl()
soilMoistureAdjustment()
