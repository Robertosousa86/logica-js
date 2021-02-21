const bairros = ["colorado", "badra", "vila natal"];
// usando map sem arrow function
const euAmo = bairros.map(function (nome) {
  console.log(`Eu amo o bairro: ${nome}`);
});
// com arrow function
const love = bairros.map((bairro) => {
  return console.log(`Eu amo o bairro: ${bairro}`);
});
