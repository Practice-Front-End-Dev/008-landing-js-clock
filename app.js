/* This project is based on "Creating a JavaScript Clock:" https://www.elated.com/creating-a-javascript-clock/ */

function updateClock (){
  /********** CREATE DATE OBJECTS **********/
    // Store the current time on the users device in this object
    let currentTime = new Date();

    // Extract day, hours, minutes, and seconds components from DATE object
    let currentDay = currentTime.getDay ();
    let currentHours = currentTime.getHours ();
    let currentMinutes = currentTime.getMinutes ();
    let currentSeconds = currentTime.getSeconds ();
    


    /********** FORMAT COMPENENTS **********/
    // GOAL: 'HH:MM:SS XX' (XX = AM/PM)

    // LOGIC: Add a leading zero to minutes/seconds when needed
    currentMinutes = (currentMinutes < 10 ? '0' : '') + currentMinutes;
    currentSeconds = (currentSeconds < 10 ? '0' : '') + currentSeconds;

    // CREATE: Determine AM/PM and store
    let timeOfDay = (currentHours < 12) ? 'AM' : 'PM';

    // LOGIC: Math updates "primative" to 12 hour format from military time (using ternary operator syntax)
    currentHours = (currentHours > 12) ? currentHours - 12 : currentHours;
    currentHours = (currentHours == 0) ? 12 : currentHours;

    //LOGIC: Day of week logic based on 0 ~ 6
    currentDay = (currentDay == 0) ? 'Sunday' : currentDay;
    currentDay = (currentDay == 1) ? 'Monday' : currentDay;
    currentDay = (currentDay == 2) ? 'Tuesday' : currentDay;
    currentDay = (currentDay == 3) ? 'Wednesday' : currentDay;
    currentDay = (currentDay == 4) ? 'Thursday' : currentDay;
    currentDay = (currentDay == 5) ? 'Friday' : currentDay;
    currentDay = (currentDay == 6) ? 'Saturday' : currentDay;



    /********** REALIZE DESIRED STRING(S) **********/
    let currentTimeString = currentHours + ':' + currentMinutes + ':' + currentSeconds;
    // RETRIEVE: Grab <span id="clock"> and populate its "nodeValue" with currentTimeString
    document.getElementById('clock').firstChild.nodeValue = currentTimeString;
    document.getElementById('amPm').lastChild.nodeValue = timeOfDay;
    document.getElementById('the-day').innerHTML = currentDay;
}