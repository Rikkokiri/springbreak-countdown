function calculateRemainingTime(enddate){

    var today = new Date().toUTCString();
    var parsedDate = Date.parse(today);
    var time = Date.parse(enddate);

    // Difference between the two days in milliseconds
    var timeLeft = Date.parse(enddate) - Date.parse(new Date().toUTCString());

    var weeks = Math.floor( (timeLeft) / (1000 * 60 * 60 * 24 * 7));
    var days = Math.floor( (timeLeft / (1000 * 60 * 60 * 24)) % 7); //milliseconds * seconds * minutes * hours
    var hours = Math.floor( (timeLeft / (1000 * 60 * 60)) % 24);
    var minutes = Math.floor( (timeLeft / (1000 * 60)) % 60);
    var seconds = Math.floor( (timeLeft / 1000) % 60 );

    //Return the values as an object
    return {
      'timeLeft' : timeLeft,
      'weeks' : weeks,
      'days' : days,
      'hours' : hours,
      'minutes' : minutes,
      'seconds' : seconds
    };
}


function startCountdown(endtime, countdownID, weeksID, daysID, hoursID, minutesID, secondsID) {

    function updateCountdown(){

      var timeInformation = calculateRemainingTime(endtime);

      $("#" + weeksID).text(timeInformation.weeks);
      $("#" + daysID).text(timeInformation.days);
      $("#" + hoursID).text(("0" + timeInformation.hours).slice(-2));
      $("#" + minutesID).text(("0" + timeInformation.minutes).slice(-2));
      $("#" + secondsID).text(("0" + timeInformation.seconds).slice(-2));

      //If the end time has been reached, stop the countdown
      if( timeInformation.timeLeft <= 0){
        clearInterval(countdownInterval);
        $("#" + weeksID).text("0");
        $("#" + daysID).text("0");
        $("#" + hoursID).text("0");
        $("#" + minutesID).text("0");
        $("#" + secondsID).text("0");
      }
    }

    //Start countdown
    updateCountdown();
    var countdownInterval = setInterval(updateCountdown, 1000);

}
