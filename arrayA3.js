
var alumnos = ["Josep", "Ana", "Elisabet", "Manel", "Jordi", "Marta"];

var notas = [7, 10, 9, 5, 3];
//Ejercicio 1
function ordenarModulos() {
    var modulosArray = [];
    $(".modulos li").each(function() {
        modulosArray.push($(this).text());
    });

    modulosArray.sort();
    $(".array").text(modulosArray.join(" - "));
}

$(document).ready(function() {
    ordenarModulos();
});

//Ejercicio 2
function mostrarAlumnos() {

    alumnos.sort();
    $(".lista").empty();
    for (var i = 0; i < alumnos.length; i++) {
        $(".lista").append("<li>" + alumnos[i] + "</li>");
    }
}

$(document).ready(function() {
    mostrarAlumnos();
});

//Ejercicio 3
function mostrarNotasOrdenadas() {
    var notasOrdenadas = [...notas].sort(function(a, b) {
        return b - a;
    });
    $(".orden").text(notasOrdenadas.join(", "));
}

$(document).ready(function() {
    mostrarNotasOrdenadas();
});

//Ejercicio 4
function filtrarAlumnos() {
    var con5 = alumnos.filter(function(alumno) {
        return alumno.length === 5;
    });

    var conJ = alumnos.filter(function(alumno) {
        return alumno.charAt(0) === "J";
    });

    var conA = alumnos.filter(function(alumno) {
        return alumno.charAt(alumno.length - 1) === "a";
    });

    $(".con5").html(con5.join("<br>"));
    $(".conJ").html(conJ.join("<br>"));
    $(".conA").html(conA.join("<br>"));
}

$(document).ready(function() {
    filtrarAlumnos();
});