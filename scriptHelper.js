// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {

  let missionTarget = document.getElementById("missionTarget");
  missionTarget.innerHTML = `<h2>Mission Destination</h2>
  <ol>
      <li>Name: ${name}</li>
      <li>Diameter: ${diameter}</li>
      <li>Star: ${star}</li>
      <li>Distance from Earth: ${distance}</li>
      <li>Number of Moons: ${moons}</li>
  </ol>
  <img src="${imageUrl}">`
}

function validateInput(testInput) {
   if (testInput === "") {
    return "Empty";
   } else if (Number.isNaN(testInput)) {
    return "Not a Number";
   } else {
    return "Is a Number";
   };
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
   let form = document.querySelector("form");
   form.addEventListener("submit", function(event) {
    if (validateInput(pilot.value) === "Empty" || validateInput(copilot.value) === "Empty" || validateInput(fuelLevel.value) === "Empty" || validateInput(cargoLevel.value) ==="Empty") {
        alert("All fields are required.");
        event.preventDefault();
    };

    if (validateInput(pilot.value) === "Is a Number") {
        alert("Pilot name must be a string."); 
        event.preventDefault();
    } 
    if (validateInput(copilot) === "Is a Number") {
        alert("Copilot name must be a string.");
        event.preventDefault(); 
    } 
    if (validateInput(fuelLevel) === "Not a Number") {
        alert("Fuel Level must be a number.");
        event.preventDefault();
    } 
    if (validateInput(cargoLevel) === "Not a Number") {
        alert("Cargo Level must be a number");
        event.preventDefault();
    }

   });

   let faultyItems = document.getElementById("faultyItems");
   let launchStatus = document.getElementById("launchStatus");

   document.getElementById("pilotStatus").innerHTML = `${pilot} ready`;
   document.getElementById("copilotStatus").innerHTML = `${copilot} ready`;

   if (fuelLevel < 10000) {
    faultyItems.style.visibility = "visible";
    document.getElementById("fuelStatus").innerHTML = 'Not enough fuel for journey';
    launchStatus.style.color = "red";
    launchStatus.innerHTML = "Shuttle not ready for launch";
   }

   if (cargoLevel > 10000) {
    faultyItems.style.visibility = "visible";
    document.getElementById("cargoStatus").innerHTML = "Too much mass for shuttle to take off";
    launchStatus.style.color = "red";
    launchStatus.innerHTML = "Shuttle not ready for launch";
   }

   if (faultyItems.style.visibility = "hidden") {
    launchStatus.style.color = "green";
    launchStatus.innerHTML = "Shuttle ready to launch"
   }

}

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
        response.json
        });

    return planetsReturned;
}

function pickPlanet(planets) {
    let planetIndex = Math.floor(Math.random() * 6);
    return planets[planetIndex];
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
