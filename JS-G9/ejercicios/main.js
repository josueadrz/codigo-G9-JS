
function callMenu() {
    let nro_ejercicio = parseInt(
        prompt("ingrese el numero de ejercicio que quiere ejecutar: \r\n 1.suma. \r\n 2.Promedio de Examanes \r\n 3. Calcular el area del rectangulo \r\n 4.Calcular el area del triangulo \r\n 5.calcular el area del Circulo \r\n 6. Calcular salario semanal \r\n 7. convertir pulgadas \r\n 8. cambiar a dolares \r\n 9. calcular la edad trabajadores \r\n 10. nombre y edad de la persona menor \r\n 11. bono por tiempo de antiguedad \r\n 12. salario profesor durante 6 años \r\n 13.calificaciones de los alumnos \r\n 14. focos de locores \r\n 15.personas que pueden votar")
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
            alert(salarioSemanal(horas, valorHoras));
            break;

        case 7:
            let pulgadas = parseInt(prompt("ingresa las pulgadas"));
            alert(convertirPulgadas(pulgadas));
            break;

        case 8:
            let soles = parseInt(prompt("ingresa los soles"));
            alert(convertirDolares(soles));
            break;

        case 9:
            let añoNacieron = parseInt(prompt("ingresa año que nacieron"));
            let añoActual = parseInt(prompt("ingresa año actual"));
            alert(edadPersonas(añoNacieron, añoActual));
            break;

        case 10:
            let nomb1 = prompt("ingresa nombre de la primera persona");
            let ed1 = parseInt(prompt("ingresa la edad de la primera perosna"));
            let nomb2 = prompt("ingresa nombre segunda persona");
            let ed2 = parseInt(prompt("ingresa edad segunda persona"));
            let nomb3 = prompt("ingresa nombre tercera persona");
            let ed3 = parseInt(prompt("ingresa edad tercera persona"));
            alert(nombreEdadMenor(nomb1, ed1, nomb2, ed2, nomb3, ed3));
            break;

        case 11:
            alert(bono())
            break;

        case 12:
            alert(salario())
            break;
        case 13:
            alert(aprobados())
            break;
        case 14:
            alert(focos())
            break;
        case 15:
            alert(elecciones())
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
    if (isNaN(soles)) {
        return "profavor ingrese los soles"
    } else {
        return (soles / 3.90) + " dolares"
    }
}

function edadPersonas(añoNacieron, añoActual) {
    if (isNaN(añoNacieron) || isNaN(añoActual)) {
        return "ingrese los años"
    } else {
        return (añoActual - añoNacieron) + " años"
    }
}

function nombreEdadMenor(nomb1, ed1, nomb2, ed2, nomb3, ed3) {
    if (isNaN(ed1) || isNaN(ed2) || isNaN(ed3)) {
        return " ingrese los valores correctos"
    } else {
        if (ed1 < ed2) {
            if (ed1 < ed3) {
                return `la persona de menor edad es: ${nomb1} y su edad es: ${ed1}`;
            }
            else {
                return `la persona de menor edad es: ${nomb3} y su edad es: ${ed3}`;
            }
        }
        else {
            if (ed2 < ed3) {
                return `la persona de menor edad es: ${nomb2} y su edad es: ${ed2}`;
            }
            else {
                return `la persona de menor edad es: ${nomb3} y su edad es: ${ed3}`;
            }
        }
    }

}


function bono() {
    let year = parseInt(prompt('Ingrese el año de ingreso del empleado'));
    let presentYear = new Date();
    let present = presentYear.getFullYear();
    let dif = present - year;
    if (dif <= 5) {
        return `El bono que le corresponde es: ${(dif * 100)}`;
    }
    else {
        return `El bono que le corresponde es: ${1000}`;
    }
}

function salario() {
    let salary = 1500;
    let salaries = new Array();
    for (var i = 0; i < 6; i++) {
        salary = salary + (salary * 0.1);
        salaries[i] = salary.toFixed(2)
    }
    let strSalary = salary.toFixed(2)
    return `El salario del profesor después de 6 años es: ${strSalary} y sus salarios anuales fueron: ${(salaries)}`;
}

function aprobados() {
    let total = 0;
    let approved = 0;
    let calif = parseInt(prompt("Ingrese la nota aprobatoria"));
    while (true) {
        let req = parseInt(prompt("Si desea agregar una nota presione 1, si desea ver la cantidad de aprobados y desaprobados ingrese 0"));
        if (req == 1) {
            let note = parseInt(prompt("Ingrese la nota del estudiante"));
            if (note >= calif) {
                approved++;
            }
            total++;
        }
        else {
            break;
        }
    }
    return `La cantidad de alumnos es: ${total} de los cuales ${approved} son los aprobados y ${(total - approved)} son los reprobados`
}

function focos() {
    let total = 0;
    let green = 0;
    let white = 0;
    let red = 0;
    while (true) {
        let req = parseInt(prompt("Si desea agregar un nuevo foco presione 1, si desea ver la cantidad de cada color de foco ingrese 0"));
        if (req == 1) {
            let enter = parseInt(prompt("Ingrese el color del foco: \n 1. Verde \n 2. Blanco \n 3. Rojo"));
            if (enter == 1) {
                green++;
            } else if (enter == 2) {
                white++;
            } else {
                red++;
            }
            total++;
        }
        else {
            break;
        }
    }
    return `La cantidad total de focos es: ${total} de los cuales ${green} son verdes, ${white} son blancos y ${red} son rojos`
}

function elecciones() {
    while (true) {
        let req = parseInt(prompt("Si desea consultar presione 1, si desea salir ingrese 0"));
        if (req == 1) {
            let enter = parseInt(prompt("Ingrese su edad"));
            if (enter >= 18) {
                alert("Usted si puede votar en estas elecciones")
            } else {
                alert("Usted  no puede votar en estas elecciones")
            }
        }
        else {
            break;
        }
    }
    return `Gracias por consultar`
}