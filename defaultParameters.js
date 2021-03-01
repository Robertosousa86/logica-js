function hello(name = "Roberto", surname = "Sousa") {
  console.log(`Hello ${name} ${surname}`);
}

hello(); // saída: hello Roberto Sousa
hello("Juliana", "lima"); // saída: hello Juliana lima
hello("Juliana"); // saída: helllo Juliana Sousa
