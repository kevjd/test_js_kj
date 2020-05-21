let numberTag = 1;
let tag = "#";
let space = " ";
let space2 = "";

// nombre user
let number = prompt("Combien d'étages veux-tu à ta pyramide ?")
number = Number(number) // Convert ton number


while (number > 0) {

  let arrayTag = [];

  let numberSpace = number - 1;

  // création espace
  for (var i = 0; i < numberSpace; i++) {
   arrayTag.push(space);
  }

  // création #
  for (var i = 0; i < numberTag; i++) {
   arrayTag.push(tag);
  }

  // affichage console
  console.log(arrayTag.join(space2))

  numberTag += 1;
  number -= 1;

}
