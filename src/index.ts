import SanduicheBuilder from "./builders/SanduicheBuilder";
import Director from "./directors/Director";
import Sanduiche from "./products/Sanduiche";

const builder : SanduicheBuilder = new SanduicheBuilder();
const director : Director = new Director(builder);

director.constructHotDogSanduiche();
let hotdog : Sanduiche = builder.getSanduiche();
console.log("Criando um sanduiche do tipo: " + hotdog.sanduicheType);
console.log("Tipo do pao: " + hotdog.bread);
console.log("Tipo da carne: " + hotdog.protein);
console.log("Tipo da salada: " + hotdog.salad);
console.log("Molhos: " + hotdog.sauceTotal);
console.log("Molhos do tipo: " , hotdog.sauce);

builder.reset();

director.constructXsaladaSanduiche();
let XSalada : Sanduiche = builder.getSanduiche();
console.log("Criando um sanduiche do tipo: " + XSalada.sanduicheType);
console.log("Tipo do pao: " + XSalada.bread);
console.log("Tipo da carne: " + XSalada.protein);
console.log("Tipo da salada: " + XSalada.salad);
console.log("Molhos: " + XSalada.sauceTotal);
console.log("Molhos do tipo : " , XSalada.sauce);

