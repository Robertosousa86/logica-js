// variáveis com escopo

var animal = "cachorro";

{
  let animal = "gato"; // tipo let
  console.log(animal); // atribui uma outra string dentro deste bloco
}

console.log(animal); // está relacionado a variável fora do bloco
