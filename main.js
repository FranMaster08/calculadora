//#region Variables Globales
let accumulator = 0;
let currentOperator = "";
//#endregion

//#region Operaciones
const suma = () => {
  currentOperator = "+";
  const input = document.querySelector("input");
  if (input.value != "") {
    const nuevoValor = parseInt(input.value) + accumulator;
    accumulator = nuevoValor;
    input.value = "";
  }
};

const resultado = () => {
  if (currentOperator != "") {
    operations
      .find((operations) => operations.simbol === currentOperator)
      .operacion();
    const input = document.querySelector("input");
    input.value = accumulator;
    currentOperator = "";
  }
};
//#endregion

//#region Sources
const dataSource = [
  {
    value: "1",
  },
  {
    value: "2",
  },
  {
    value: "3",
  },
  {
    value: "4",
  },
  {
    value: "5",
  },
  {
    value: "6",
  },
  {
    value: "7",
  },
  {
    value: "8",
  },
  {
    value: "9",
  },
  {
    value: "0",
  },
];
const operations = [
  {
    simbol: "+",
    operacion: suma,
  },
  {
    simbol: "=",
    operacion: resultado,
  },
];
//#endregion

//#region Construccion de elementos Visuales
const buildGrid = () => {
  //crear numeros
  const buttons = document.querySelector(".numbers");

  dataSource.forEach(
    (item) =>
      (buttons.innerHTML += `<button onClick= "{ colocar(${item.value}) }">
          ${item.value}
      </button>`)
  );

  //crear operaciones
  const operaciones = document.querySelector(".operators");
  operations.forEach(
    (item) =>
      (buttons.innerHTML += `<button onClick= "{ ${item.operacion.name}() }">
          ${item.simbol}
      </button>`)
  );
};

const colocar = (number) => {
  const input = document.querySelector("input");
  input.value += number;
};
//#endregion

window.onload = () => buildGrid();
