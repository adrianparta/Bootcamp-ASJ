function promedio(array, est){
    let lista= [];
    
    array.forEach(e => {
        let obj = []
        obj.nombreCompleto = e.nombre+" " + e.apellido
        let sum = 0
        e.notas.forEach(i => {
            sum += i
        });
        obj.promedio = sum/e.notas.length
        obj.estado = (obj.promedio>=6) ? "aprobado" : "desaprobado"

        lista.push(obj)
        
    });

    console.log(lista.filter((e) => e.estado == est));
}

let alumnos = [
    {
      nombre: "Mariano Damian",
      apellido: "Hernandez",
      notas: [8, 7, 9, 10, 6],
    },
    {
      nombre: "Ramiro",
      apellido: "Diaz",
      notas: [1, 3, 8, 2, 1],
    },
    {
      nombre: "Ana",
      apellido: "Armella",
      notas: [5, 7, 9, 4, 2],
    },
    {
      nombre: "Romina",
      apellido: "Almeda",
      notas: [10, 6, 7, 5, 9],
    },
    {
      nombre: "Denis",
      apellido: "Tolaba",
      notas: [10, 10, 9, 9, 10],
    },
    {
      nombre: "Hugo",
      apellido: "Castellano",
      notas: [2, 3, 3, 6, 1],
    },
    {
      nombre: "Analia Daiana",
      apellido: "Fonseca",
      notas: [4, 3, 4, 5, 2],
    },
    {
      nombre: "Francisco Daniel",
      apellido: "Samir",
      notas: [5, 5, 6, 4, 2],
    },
  ];
  promedio(alumnos, "desaprobado")
