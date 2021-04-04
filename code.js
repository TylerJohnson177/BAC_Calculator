$(document).ready(function ()
{
  $("button").on("click",calculation);
})

function calculation()
{
    //Get Information from the user//
    let numBeers = parseInt( $("#numBeers").val() );
    let numWine = parseInt( $("#numWine").val() );
    let numShots = parseInt( $("#numShots").val() );
    let weight = parseInt( $("#weight").val() );
    let hours = parseInt( $("#hoursSinceFirstDrink").val() );

    //Calculate number of liquid ounces of alcohol//

    let beerOunces = numBeers * 0.54;
    let wineOunces = numWine * 0.6;
    let shotOunces = numShots * 0.6;
    let totalOunces = beerOunces + wineOunces + shotOunces;

    // Calculate the users Blood Alcohol Content//

    let absorptionRate = totalOunces * 7.5;
    let calculateHours = hours * 0.015;
    let BAC = (absorptionRate / weight) - calculateHours;

    //Print out the result//

    $("span#BAC").text(BAC.toFixed(3));

}