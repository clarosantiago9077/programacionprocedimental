function ValidarDatos() {

    let ventas = document.getElementById("ventas").value;
    let fecha = document.getElementById("fecha").value;
    let ingresos = document.getElementById("ingresos").value;
    let egresos = document.getElementById("egresos").value;
    let concepto = document.getElementById("concepto").value;
    let valor = document.getElementById("valor").value;




    if (ventas == "") {
        Swal.fire({
            title: "Error",
            text: "Ingrese las ventas",
            icon: "error"
        });

        return;
    }

    if (fecha == "") {
        Swal.fire({
            title: "Error",
            text: "Ingrese la fecha",
            icon: "error"
        });

        return;
    }

    if (ingresos == "") {
        Swal.fire({
            title: "Error",
            text: "Ingrese los ingresos",
            icon: "error"
        });

        return;
    }

    if (egresos == "") {
        Swal.fire({
            title: "Error",
            text: "Ingrese los egresos",
            icon: "error"
        });

        return;
    }

    if (concepto == "") {
        Swal.fire({
            title: "Error",
            text: "Ingrese el concepto",
            icon: "error"
        });

        return;
    }

    if (valor == "") {
        Swal.fire({
            title: "Error",
            text: "Ingrese el valor",
            icon: "error"
        });

        return;
    }




    if (isNaN(ventas)) {
        Swal.fire({
            title: "Error",
            text: "Ventas no debe contener letras",
            icon: "error"
        });

        return;
    }

    if (isNaN(ingresos)) {
        Swal.fire({
            title: "Error",
            text: "Ingresos no debe contener letras",
            icon: "error"
        });

        return;
    }

    if (isNaN(egresos)) {
        Swal.fire({
            title: "Error",
            text: "Egresos no debe contener letras",
            icon: "error"
        });

        return;
    }

    if (isNaN(valor)) {
        Swal.fire({
            title: "Error",
            text: "El valor no debe contener letras",
            icon: "error"
        });

        return;
    }




    console.log("----- DATOS CONTABILIDAD -----");

    console.log("Ventas: " + ventas);
    console.log("Fecha: " + fecha);
    console.log("Ingresos: " + ingresos);
    console.log("Egresos: " + egresos);
    console.log("Concepto: " + concepto);
    console.log("Valor: " + valor);


    Swal.fire({
        title: "Correcto",
        text: "Los datos fueron registrados correctamente",
        icon: "success"
    });


}


document.getElementById("guardar").onclick =ValidarDatos;