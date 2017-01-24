function calculateRemainingTime(enddate){

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

    //Get the element where the countdown is located
    var countdownElement = document.getElementById(countdownID);

    var weekSpan = document.getElementById(weeksID);
    var daySpan = document.getElementById(daysID);
    var hourSpan = document.getElementById(hoursID);
    var minuteSpan = document.getElementById(minutesID);
    var secondSpan = document.getElementById(secondsID);

    function updateCountdown(){

      var timeInformation = calculateRemainingTime(endtime);

      weekSpan.innerHTML = timeInformation.weeks;
      daySpan.innerHTML = timeInformation.days;
      hourSpan.innerHTML = ('0' + timeInformation.hours).slice(-2);
      minuteSpan.innerHTML = ('0' + timeInformation.minutes).slice(-2);
      secondSpan.innerHTML = ('0' + timeInformation.seconds).slice(-2);

      //If the end time has been reached, stop the countdown
      if( timeInformation.timeLeft <= 0){
        clearInterval(countdownInterval);
      }
    }

    //Start countdown
    updateCountdown();
    var countdownInterval = setInterval(updateCountdown, 1000);

}
