// Función para unificar y sumar los casos
export function unifyAndSum(arr1, arr2) {
  // Objeto para almacenar la suma de casos por nombre
  let sumCasesByName = {};

  // Función para sumar los casos para un nombre dado
  function sumCasesForName(name, cases) {
    if (!sumCasesByName[name]) {
      sumCasesByName[name] = { name: name, cases: 0 };
    }
    sumCasesByName[name].cases += cases;
  }

  // Iterar sobre los objetos del primer array y sumar los casos
  arr1.forEach(function (obj) {
    sumCasesForName(obj.name, obj.cases);
  });

  // Iterar sobre los objetos del segundo array y sumar los casos
  arr2.forEach(function (obj) {
    sumCasesForName(obj.name, obj.cases);
  });

  // Convertir el objeto de suma de casos de nuevo a un array
  const resultArray = Object.keys(sumCasesByName).map(function (key) {
    return sumCasesByName[key];
  });

  const casesSort = (a, b) => {
    return b.cases - a.cases;
  };

  const casesSoted = resultArray.sort(casesSort)


  return casesSoted;
}
