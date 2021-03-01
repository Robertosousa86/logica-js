let text = "lorem ipsum dolor sit amet";

console.log(text.startsWith("lorem")); // inicia com lorem? true
console.log(text.startsWith("ipsum")); // inicia com ispum? false
console.log(text.startsWith("rem", 2)); // inicia a partir da posição 2 da string, resultado true

console.log(text.endsWith("amet")); // termina com amet? true
console.log(text.endsWith("ame", 25)); // termina com ame? true

console.log("lorem ".repeat(10)); // repete 10 vezes a frase

console.log(text.includes("lol")); // retorna false
console.log(text.includes("lorem")); // retorna true
