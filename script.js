

// Ask the user if they want steak
var eatSteak = confirm("do you eat steak?");
//alert(eatSteak);


// Have one option if they choose steak, and another option if they choose no steak
if(eatSteak) {
    document.write("Here's a steak!");
} else {
    document.write("Here's a tofu stir fry!");
}

// Ask the user what year they were born
var year = prompt("What year were you born?");

// Tell them whether they can have sake or not!
if(year < 1995) {
    alert("Sake sake sake!");
} else if (year > 1995) {
    alert("No sake for you!");
} else {
    alert("You inched by! Sake sake sake!");
}



