// Write your JavaScript code here!



console.log("hello");

window.addEventListener("load", function() {
    
    let forms = this.document.querySelectorAll('.formField');
    //console.log(forms[0].innerHTML);
    formSubmission(this.document, forms, forms[0], forms[1], forms[2], forms[3]);

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