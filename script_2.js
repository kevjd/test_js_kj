// Un prompt s'affiche avec la question suivante

var number = prompt("De quel nombre veux-tu calculer la factorielle ?")
number = Number(number)

function factorial(x) {
  if (x === 0) {
    return 1;

 } else {
   return x * factorial(x-1);
 }
}
  // On utilise la fonction
  let factNum = factorial(number);

  // On affiche
  console.log("Le résultat est : " + factNum);

