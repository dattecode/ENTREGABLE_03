// funcion main para ejecutar la app
const main = () => {
  //alerta
  console.log("!Bienvenido a la app calculadora!");
  ExplicacionesDeLaApp();
  alert(
    "Bienvenido a la app calculadora, revise la consola del navegador para ver como usarla",
  );

  //ingreso de primer valor
  let valor1 = parseInt(prompt("Ingrese el primer valor"));
  valor1 = verificadorDeNumero(valor1);
  console.log(`primer valor ${valor1}`);

  //ingreso de segundo valor
  let valor2 = parseInt(prompt("Ingrese el segundo valor"));
  valor2 = verificadorDeNumero(valor2);
  console.log(`segundo valor ${valor2}`);

  //ingreso de calculo
  let calculo = prompt(
    "Ingrese el calculo que desea realizar: sum, rest, mult, div",
  );
  calculo = verificadorMatematico(calculo);

  //calculos
  calculosMatematicos(valor1, valor2, calculo);

  //Calculo Matematico
};

//funciones
const verificadorDeNumero = (numero) => {
  if (typeof numero !== "number" || isNaN(numero)) {
    console.log("El valor ingresado no es un número");
    const newValue = parseInt(prompt("INGRESE UN VALOR NUMERICO"));
    if (typeof newValue !== "number" || isNaN(newValue)) {
      verificadorDeNumero(newValue);
    } else {
      return newValue;
    }
  }
  return numero;
};

const ExplicacionesDeLaApp = () => {
  const explicaciones = [
    "Para usar La app tienes que ingresas 2 valores numericos solicitados",
    "Despues ingresas el calculo que deseas realizar",
    "El resultado se mostrara en la consola y en un alert",
    "-Los calculos disponibles son:",
    "--Suma: sum",
    "--Resta: rest",
    "--Multiplicacion: mult",
    "--Division: div",
    "-----una ves realizado el calculo se ejecutara de nuevo la app-----",
  ];

  explicaciones.forEach((explicacion) => {
    console.log(explicacion);
  });
};

const calculosMatematicos = (a, b, calculo) => {
  //calculos

  //suma
  if (calculo === "sum") {
    const resultado = a + b;
    console.log(
      "-----una ves realizado el calculo se ejecutara de nuevo la app-----",
    );
    console.log(`El Resultado de la suma de ${a} + ${b} es = ${resultado}`);
    alert(`El Resultado de la suma de ${a} + ${b} es = ${resultado}`);
    main();
    // resta
  } else if (calculo === "rest") {
    const resultado = a - b;
    console.log(
      "-----una ves realizado el calculo se ejecutara de nuevo la app-----",
    );
    console.log(`El Resultado de la resta de ${a} - ${b} es = ${resultado}`);
    alert(`El Resultado de la resta de ${a} - ${b} es = ${resultado}`);
    main();
    // multiplicacion
  } else if (calculo === "mult") {
    const resultado = a * b;
    console.log(
      "-----una ves realizado el calculo se ejecutara de nuevo la app-----",
    );
    console.log(
      `El Resultado de la multiplicacion de ${a} * ${b} es = ${resultado}`,
    );
    alert(`El Resultado de la multiplicacion de ${a} * ${b} es = ${resultado}`);
    main();
    // division
  } else if (calculo === "div") {
    const resultado = a / b;
    console.log(
      "-----una ves realizado el calculo se ejecutara de nuevo la app-----",
    );
    console.log(`El Resultado de la division de ${a} / ${b} es = ${resultado}`);
    alert(`El Resultado de la division de ${a} / ${b} es = ${resultado}`);
    main();
  }
};

//verificador del calculo matematico
const verificadorMatematico = (calculo) => {
  //primera verificacion del calculo si es null
  if (calculo === null) {
    console.log("El valor ingresado es nulo");
    return verificadorMatematico(
      prompt("INGRESE UN VALOR VALIDO:  sum, rest, mult, div"),
    );
  }
  // como no es  null se hace un lowercase
  calculo = calculo.toLowerCase();

  //segunda  verificacion su es un calculo valido
  if (
    calculo !== "sum" &&
    calculo !== "rest" &&
    calculo !== "mult" &&
    calculo !== "div"
  ) {
    console.log("valor ingresado incorrecto");
    const newValue = prompt("INGRESE UN VALOR VALIDO: sum, rest, mult, div");

    return verificadorMatematico(newValue);
  }

  return calculo;
};


