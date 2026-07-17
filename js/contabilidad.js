function ValidarDatos() {

    let ventas = document.getElementById("ventas").value;
    let fecha = document.getElementById("fecha").value;
    let ingresos = document.getElementById("ingresos").value;
    let egresos = document.getElementById("egresos").value;
    let concepto = document.getElementById("concepto").value;
    let valor = document.getElementById("valor").value;


   

    if (ventas == "") {
        Swal.fire("Error", "Ingrese las ventas", "error");
        return;
    }

    if (fecha == "") {
        Swal.fire("Error", "Ingrese la fecha", "error");
        return;
    }

    if (ingresos == "") {
        Swal.fire("Error", "Ingrese los ingresos", "error");
        return;
    }

    if (egresos == "") {
        Swal.fire("Error", "Ingrese los egresos", "error");
        return;
    }

    if (concepto == "") {
        Swal.fire("Error", "Ingrese el concepto", "error");
        return;
    }

    if (valor == "") {
        Swal.fire("Error", "Ingrese el valor", "error");
        return;
    }


    

    if (isNaN(ventas)) {
        Swal.fire("Error", "Ventas no debe contener letras", "error");
        return;
    }

    if (isNaN(ingresos)) {
        Swal.fire("Error", "Ingresos no debe contener letras", "error");
        return;
    }

    if (isNaN(egresos)) {
        Swal.fire("Error", "Egresos no debe contener letras", "error");
        return;
    }

    if (isNaN(valor)) {
        Swal.fire("Error", "El valor no debe contener letras", "error");
        return;
    }


    

    console.log("----- DATOS CONTABILIDAD -----");

    console.log("Ventas: " + ventas);
    console.log("Fecha: " + fecha);
    console.log("Ingresos: " + ingresos);
    console.log("Egresos: " + egresos);
    console.log("Concepto: " + concepto);
    console.log("Valor: " + valor);


    Swal.fire(
        "Correcto",
        "Los datos fueron registrados correctamente",
        "success"
    );

}