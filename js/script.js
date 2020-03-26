var vacationType = prompt("What type of vacation would you like to go on, Musical, Tropical or Adventurous?");
console.log(vacationType);

if (vacationType == "musical") {
  vacationLocation = "New Orleans";
} else if (vacationType == "tropical") {
  vacationLocation = "a Beach vacation in Mexico";
} else if (vacationType == "adventurous") {
  vacationLocation = "go whitewater rafting in the Grand Canyon";
} else {
  console.log("Please pick one of the options");
}

var groupSize = prompt("How many people will be in your party?");
console.log(groupSize)

if (groupSize === 1 || groupSize === 2) {
  groupTotal = ("take a First-class flight");
} else if (groupSize === 3 || groupSize === 4 || groupSize === 5) {
  groupTotal = ("take a helicopter");
} else {
  groupTotal = ("Charter a flight");
}

console.log(
  "Since you're a group of " +
    groupSize +
    " going on a " +
    vacationType +
    " vacation, you should " +
    groupTotal +
    " to " +
    vacationLocation +
    "."
);