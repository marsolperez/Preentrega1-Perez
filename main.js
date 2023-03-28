alert("Bienvenido al Club Andino Rio Grande");
let nombreUsuario= prompt("Ingrese su nombre");
let apellidoUsuario=prompt("Ingrese su apellido");
alert("Hola " + nombreUsuario + " " + apellidoUsuario);

let nivel = prompt("Ingrese el nivel de la experiencia: (principiante, intermedio, avanzado)");
let tiempo = prompt("Ingrese la duración de la suscripcion: (semana, quincena, mes)");
let cantidad = parseInt(prompt("Ingrese la cantidad de personas:"));

let costo = 0;

if (nivel == "principiante") {
  costo = 50;
} else if (nivel == "intermedio") {
  costo = 75;
} else if (nivel == "avanzado") {
  costo = 100;
}

let descuento = 0;

if (tiempo == "semana") {
  descuento = 0.1;
} else if (tiempo == "quincena") {
  descuento = 0.2;
} else if (tiempo == "mes") {
  descuento = 0.3;
}

let total = costo * cantidad;

if (cantidad >= 5) {
  total *= 0.9;
}

for (let i = 1; i <= cantidad; i++) {
  if (i >= 5) {
    total *= 0.9;
  }
}

total -= total * descuento;

alert("El costo total es: $" + total);
