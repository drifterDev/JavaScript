"use strict";

let n1 = parseInt(prompt("Introduce un valor", 0));
let n2 = parseInt(prompt("Introduce un valor", 0));

while (isNaN(n1) || isNaN(n2)) {
  n1 = parseInt(prompt("Introduce un valor", 0));
  n2 = parseInt(prompt("Introduce un valor", 0));
}

let mayor = n1 < n2 ? n2 : n1;
let menor = mayor == n1 ? n2 : n1;
for (let i = menor; i < mayor + 1; i++) {
  if (i % 2 != 0) {
    document.write("El impar esperado..." + i + "<br/>");
  }
}
