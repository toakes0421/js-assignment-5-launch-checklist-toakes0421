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
   } else if (isNaN(Number(testInput))) {
    return "Not a Number";
   } else {
    return "Is a Number";
   };
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {

   //form.addEventListener("submit", function(event) {
    if (validateInput(pilot) === "Empty" || validateInput(copilot) === "Empty" || validateInput(fuelLevel) === "Empty" || validateInput(cargoLevel) ==="Empty") {
        alert("All fields are required.");
        event.preventDefault();
    }

    else if (validateInput(pilot) === "Is a Number") {
        alert("Pilot name must be a string."); 
        event.preventDefault();
    } 
    else if (validateInput(copilot) === "Is a Number") {
        alert("Copilot name must be a string.");
        event.preventDefault(); 
    } 
    else if (validateInput(fuelLevel) === "Not a Number") {
        alert("Fuel Level must be a number.");
        event.preventDefault();
    } 
    else if (validateInput(cargoLevel) === "Not a Number") {
        alert("Cargo Level must be a number");
        event.preventDefault();
    }

   
    else{
  

   let launchStatus = document.getElementById("launchStatus");

   document.getElementById("pilotStatus").innerHTML = `Pilot ${pilot} is ready for launch`;
   document.getElementById("copilotStatus").innerHTML = `Copilot ${copilot} is ready for launch`;

   if (Number(fuelLevel) < 10000) {
 
    document.getElementById("fuelStatus").innerHTML = 'Not enough fuel for journey';
    launchStatus.style.color = "red";
    launchStatus.innerHTML = "Shuttle not ready for launch";
    list.style.visibility = "visible";
   }

   else if (Number(cargoLevel) > 10000) {

    document.getElementById("cargoStatus").innerHTML = "Too much mass for shuttle to take off";
    launchStatus.style.color = "red";
    launchStatus.innerHTML = "Shuttle not ready for launch";
    list.style.visibility = "visible";
   }

   else {
    
    launchStatus.style.color = "green";
    launchStatus.innerHTML = "Shuttle ready to launch"
    list.style.visibility = "visible";
   };
    
};
}

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
        return response.json();
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
