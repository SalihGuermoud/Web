console.log("Hello World !");

a = 6;

if(a == 5) {
    console.log("a vaut 5");
} else {
    console.log("a est différent de 5");
}

switch(a) {
    case 1 : console.log("1");
    break;
    
    case 2 : console.log("2");
    break;

    default : console.log("Chui fatigué de compter");
}

for(let i = 0; i < 10; i++) { 
    console.log(i);
}

console.log("--------------------");

let i;

for(i = 0, j = 0, k = 12; i < 10; i++, j--, k = i + j) {
    console.log(`i vaut ${i}, j vaut ${j}, et k vaut ${k}`);
}

console.log("--------------------");

i = 11;

while(i < 20) {
    console.log(i);
    i++;
} 

function separation() {
    console.log("--------------------");
}

i = 20;

do {
    console.log(i);
    i++;
} while(i < 30);

let tab = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"];

console.log(tab.length);

for(let i = 0; i < tab.length; i++) {
    console.log(`à l'indice ${i} le tableau contient la valeur ${tab[i]}`);
}

separation();

for(let value of tab) { //parcours des valeurs de l'itérable (depuis ES6)
    console.log(value);
}

separation();

for(let indice of tab) { //parcours des indices (ou clés) de l'itération
    console.log(indice);
}

separation();

let tab2 = ["k", "l", "m", "n", "o", "p"];

function parcoursTableau(tab) {
    for(let value of tab) {
        console.log(value);
    }
    k = "toto";
}
console.log(k);
parcoursTableau(tab2);
console.log(k);

const pr = console.log; //En JS, presque tout est object, les fonctions y compris donc je peux faire ça 

pr("coucou");
const sep = separation();

sep

function somme() {
    for(let arg of arguments) {
        pr(arg);
    }

//Ou alors on créer un tableau contenant les arguments
const args = Array.from(arguments);
for(let arg of args) {
    pr(arg);
}

sep

//Ou alors on utilise le "spread operator"
const spread = [...arguments];
for(let arg of args) {
    pr(arg);
}
}
somme(1, "a", false);

sep

function creerFonctionMultiplicatrice(multiplicateur) {
    //Afficher le multiplicateur
    pr("Création d'une fonction de multiplication par " + multiplicateur);
    const maFonction = function multByX(multiplicande) {
        return multiplicande * multiplicateur;
    }
    //Retour de cette fonction qui prend un paramètre
    return maFonction;
}


const multPar10 = creerFonctionMultiplicatrice(10); //Crée une fonction qui multiplie
pr(multPar10(5)); //Doit afficher 50

/* Mais d'où la fonction multPar10 connait la valeur 10 ? Elle a disparu avec la fermeture du contexte de créerFonctionMultiplicatrice...
*/ 