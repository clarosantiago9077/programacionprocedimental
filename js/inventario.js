function ValidarDatos() {

    let codigo = document.getElementById("codigo").value;
    let nombre = document.getElementById("nombre").value;
    let cantidad = document.getElementById("cantidad").value;
    let descripcion = document.getElementById("descripcion").value;
    let marca = document.getElementById("marca").value;
    let valor = document.getElementById("valor").value;
    let categoria = document.getElementById("categoria").value;
    let ubicacion = document.getElementById("ubicacion").value;

    if (codigo == "") {
        Swal.fire("Error", "Ingrese el código del producto", "error");
        return;
    }

    if (isNaN(codigo)) {
        Swal.fire("Error", "El código solo debe contener números", "error");
        return;
    }

    if (nombre == "") {
        Swal.fire("Error", "Ingrese el nombre del producto", "error");
        return;
    }

    if (!isNaN(nombre)) {
        Swal.fire("Error", "El nombre solo debe contener letras", "error");
        return;
    }

    if (cantidad == "") {
        Swal.fire("Error", "Ingrese la cantidad del producto", "error");
        return;
    }

    if (isNaN(cantidad)) {
        Swal.fire("Error", "La cantidad solo debe contener números", "error");
        return;
    }

    if (descripcion == "") {
        Swal.fire("Error", "Ingrese la descripción del producto", "error");
        return;
    }

    if (marca == "") {
        Swal.fire("Error", "Ingrese la marca", "error");
        return;
    }

    if (!isNaN(marca)) {
        Swal.fire("Error", "La marca solo debe contener letras", "error");
        return;
    }

    if (valor == "") {
        Swal.fire("Error", "Ingrese el valor del producto", "error");
        return;
    }

    if (isNaN(valor)) {
        Swal.fire("Error", "El valor solo debe contener números", "error");
        return;
    }

    if (categoria == "") {
        Swal.fire("Error", "Seleccione una categoría", "error");
        return;
    }

    if (ubicacion == "") {
        Swal.fire("Error", "Ingrese la ubicación del producto", "error");
        return;
    }

    Swal.fire("Correcto", "Producto registrado correctamente", "success");

    console.log("Código:", codigo);
    console.log("Nombre:", nombre);
    console.log("Cantidad:", cantidad);
    console.log("Descripción:", descripcion);
    console.log("Marca:", marca);
    console.log("Valor:", valor);
    console.log("Categoría:", categoria);
    console.log("Ubicación:", ubicacion);

}