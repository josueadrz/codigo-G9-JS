
function callMenu() {
    let nro_ejercicio = parseInt(
        prompt("ingrese el numero de ejercicio que quiere ejecutar: \r\n 1.suma. \r\n 2.Promedio de Examanes \r\n 3. Calcular el area del rectangulo \r\n 4.Calcular el area del triangulo \r\n 5.calcular el area del Circulo \r\n 6. Calcular salario semanal \r\n 7. convertir pulgadas \r\n 8. cambiar a dolares")
    );
    if (isNaN(nro_ejercicio)) {
        alert("porfavor ingresa valores numericos");
    } else {
        MenuEjercicios(nro_ejercicio)
    }
}


function MenuEjercicios(nro_ejercicio) {
    switch (nro_ejercicio) {
        case 1:
            let valor1 = parseInt(prompt("ingrese el primer valor"));
            let valor2 = parseInt(prompt("ingrese el segundo valor"));
            alert(sumar(valor1, valor2));
            break;

        case 2:
            let nota1 = parseInt(prompt("ingresa la nota 1"));
            let nota2 = parseInt(prompt("ingresa la nota 2"));
            let nota3 = parseInt(prompt("ingresa la nota 3"));
            let nota4 = parseInt(prompt("ingresa la nota 4"));
            alert(promedio(nota1, nota2, nota3, nota4));
            break;

        case 3:
            let base = parseInt(prompt("ingresa la base del rectangulo"));
            let altura = parseInt(prompt("ingresa la altura del rectangulo"));
            alert(areaRectangulo(base, altura));
            break;

        case 4:
            let baseT = parseInt(prompt("ingresa la base del triangulo"));
            let alturaT = parseInt(prompt("ingresa la altura del triangulo"));
            alert(areaTriangulo(baseT, alturaT));
            break;

        case 5:
            let pi = parseInt(prompt("ingresa el valor de pi"));
            let radio = parseInt(prompt("ingresa el valor de radio"));
            alert(areaCirculo(pi, radio));
            break;
        
        case 6:
            let horas = parseInt(prompt("ingresa las horas trabajadas"));
            let valorHoras = parseInt(prompt("ingresa el valor de las horas"));
            alert(salarioSemanal(horas,valorHoras));
            break;

        case 7:
            let pulgadas = parseInt(prompt("ingresa las pulgadas"));
            alert(convertirPulgadas(pulgadas));
            break;

        case 8:
            let soles = parseInt(prompt("ingresa los soles"));
            alert(convertirDolares(soles));
            break;

        default:
            alert("porfavor ingresa valores numericos")
    }
}

function sumar(a, b) {
    if (isNaN(a) || isNaN(b)) {
        return "porfavor ingresa valores";
    } else {
        return a + b;
    }
}

function promedio(nota1, nota2, nota3, nota4) {
    if (isNaN(nota1) || isNaN(nota2) || isNaN(nota3) || isNaN(nota4)) {
        return "porfavor ingrese valores";
    } else {
        return (nota1 + nota2 + nota3 + nota4) / 4;
    }
}

function areaRectangulo(base, altura) {
    if (isNaN(base) || isNaN(altura)) {
        return "por favor ingrese valores"
    } else {
        return (base * altura);
    }
}

function areaTriangulo(baseT, alturaT) {
    if (isNaN(baseT) || isNaN(alturaT)) {
        return "por favor ingrese valores"
    } else {
        return (baseT * alturaT) / 2;
    }
}

function areaCirculo(pi, radio) {
    if (isNaN(pi) || isNaN(radio)) {
        return "porfavor ingrese valores"
    } else {
        return (pi * Math.pow(radio, 2))
    }
}

function salarioSemanal(horas, valorHoras) {
    if (isNaN(horas) || isNaN(valorHoras)) {
        return "porfavor ingrese valores"
    } else {
        return (horas * valorHoras)
    }
}

function convertirPulgadas(pulgadas) {
    if (isNaN(pulgadas)) {
        return "porfavor ingrese pulgadas"
    } else {
        return (pulgadas * 2.54)
    }
}

function convertirDolares(soles) {
    if (isNaN(soles)){
        return "profavor ingrese los soles"
    }else {
        return (soles / 3.90)  + " dolares"
    }
}