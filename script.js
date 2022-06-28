// Write your JavaScript code here!





window.addEventListener("load", function() {
    
    let forms = document.querySelector('form');
  
    forms.addEventListener("submit", function(event) {
        let pilot = document.querySelector("input[name=pilotName]").value;
        let copilot = document.querySelector("input[name=copilotName]").value;
        let fuelLevel = document.querySelector("input[name=fuelLevel]").value;
        let cargoMass = document.querySelector("input[name=cargoMass]").value;
        let faultyItems = document.querySelector('.faultyItems');
        formSubmission(document, faultyItems, pilot, copilot, fuelLevel, cargoMass);
    });
    


   let listedPlanets;
   // Set listedPlanetsResponse equal to the value returned by calling myFetch()
   let listedPlanetsResponse = myFetch();
   listedPlanetsResponse.then(function (result) {
       listedPlanets = result;
       console.log(listedPlanets);
   }).then(function () {
       console.log(listedPlanets);
       // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
       let planet = pickPlanet(listedPlanets);
       addDestinationInfo(document, planet["name"], planet["diameter"], planet["star"], planet["distance"], planet["moons"], planet["image"]);
   })
   
});