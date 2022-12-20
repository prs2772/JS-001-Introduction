//Functions

//Returns the nearest index next or previous
function near(list, indexList, next) {
  if (next) {
    return indexList + 1 < list.length ? indexList + 1 : 0;
  } else {
    return indexList - 1 >= 0 ? indexList - 1 : list.length - 1;
  }
}

//settings
var gameMode = 0;
var optionsPossible =
  gameMode === 0  
    ? "paper, scissors, stone"
    : "laser_gun, sword, the_force, escape";
var rounds = 1;
var possible = optionsPossible.split(", ");

//Inits
var computer_wins = 0;
var user_wins = 0;
var rules = "In this game the rules are:\n";

indx = 0;
while (indx < possible.length) {
  if (indx > 0) {
    rules +=
      "->" +
      possible[indx] +
      " wins against " +
      possible[indx - 1] +
      " but losses against ";
    rules +=
      indx + 1 == possible.length
        ? possible[0]
        : possible[indx + 1] + "\n";
  } else {
    rules +=
      "->" +
      possible[indx] +
      " wins against " +
      possible[-1] +
      " but losses against ";
    rules += possible[indx + 1] + "\n";
  }
  indx += 1;
}
rules += "\nOtherwise, is a tie";

exit = false;

//Along the game
while (!exit) {
  let print = "";
  print += rules;
  print += "\n**********************************************\n";
  print += `ROUND ${rounds} '. Figth!`;
  print += "\n**********************************************\n";
  alert(print);

  user_option = prompt(optionsPossible + " => ");
  user_option = user_option.toLowerCase();

  if (!possible.includes(user_option)) {
    alert("\n\n\nThat is not a valid option, it must be " + optionsPossible);
    continue;
  }
  computer_option = possible[Math.floor(Math.random() * possible.length)];

  print = ""
  print += `User option =>${user_option}\n`, 
  print += `Computer option =>${computer_option}\n`, 
  alert(print)

  // 0 losses against 1 but wins against 2, 1 losses against 2 but wins against the following (could be 0 or if an option is added, 3) otherwise, ties
  indxUsr = possible.indexOf(user_option);
  indxCom = possible.indexOf(computer_option);
  result = "";

  // Tie if both are equal or if none is near of the other
  tie =
    indxUsr == indxCom ||
    !(
      Math.abs(indxUsr - near(possible, indxCom, true)) == 0 ||
        Math.abs(indxUsr - near(possible, indxCom, false)) == 0
    );

  if (tie) {
    result = "\n---Tie!---\n";
  } else if (near(possible, indxCom, false) == indxUsr) {
    result = "You loose this one bud";
    computer_wins += 1;
  } else {
    result = "You won this one!";
    user_wins += 1;
  }
  result += `\nScoreboard (${rounds} rounds): Computer: ${computer_wins} You: ${user_wins}`;

  alert(result);

  if (prompt("Continue? (y/n)").toLowerCase() == "n") {
    exit = true;
  } else {
    rounds += 1;
  }
}
