const firstName = "Roberto";
const surname = "Sousa";
const age = 34;

const person = {
  firstName,
  surname,
  age,

  hello() {
    console.log("Hello", person.firstName);
    console.log(`hello ${person.firstName} ${person.surname}`);
  },
};

console.log(person);
person.hello();
