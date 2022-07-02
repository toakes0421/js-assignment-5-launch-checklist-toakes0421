// Write your JavaScript code here!





window.addEventListener("load", function() {
    
    let forms = document.querySelector('form');
    let faultyItems = document.getElementById("faultyItems");
  


    forms.addEventListener("submit", function(event) {
        let pilot = document.querySelector("input[name=pilotName]").value;
        let copilot = document.querySelector("input[name=copilotName]").value;
        let fuelLevel = document.querySelector("input[name=fuelLevel]").value;
        let cargoMass = document.querySelector("input[name=cargoMass]").value;
        //let faultyItems = document.getElementById("faultyItems");
        formSubmission(document, faultyItems, pilot, copilot, fuelLevel, cargoMass);
        event.preventDefault();
    });


   let listedPlanets;
   let planet;
   // Set listedPlanetsResponse equal to the value returned by calling myFetch()
   let listedPlanetsResponse = myFetch();
   listedPlanetsResponse.then(function (result) {
       listedPlanets = result;
   }).then(function () {
       // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
       planet = pickPlanet(listedPlanets);
       addDestinationInfo(document, planet["name"], planet["diameter"], planet["star"], planet["distance"], planet["moons"], planet["image"]);
   })

   
});    

