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
       Swal.fire({
  title: "Error",
  text: "Ingrese el código del producto",
  icon: "error"
});

        return;
    }

    if (isNaN(codigo)) {
       Swal.fire({
  title: "Error",
  text: "El código solo debe contener números",
  icon: "error"
});

        return;
    }

    if (nombre == "") {
        Swal.fire({
  title: "Error",
  text: "Ingrese el nombre del producto",
  icon: "error"
});

        return;
    }

    if (!isNaN(nombre)) {
        Swal.fire({
  title: "Error",
  text: "El nombre solo debe contener letras",
  icon: "error"
});

        return;
    }

    if (cantidad == "") {
       Swal.fire({
  title: "Error",
  text: "Ingrese la cantidad del producto",
  icon: "error"
});

        return;
    }

    if (isNaN(cantidad)) {
       Swal.fire({
  title: "Error",
  text: "La cantidad solo debe contener números",
  icon: "error"
});

        return;
    }

    if (descripcion == "") {
       Swal.fire({
  title: "Error",
  text: "Ingrese la descripción del producto",
  icon: "error"
});

        return;
    }

    if (marca == "") {
        Swal.fire({
  title: "Error",
  text: "Ingrese la marca",
  icon: "error"
});

        return;
    }

    if (!isNaN(marca)) {
       Swal.fire({
  title: "Error",
  text: "La marca solo debe contener letras",
  icon: "error"
});

        return;
    }

    if (valor == "") {
      Swal.fire({
  title: "Error",
  text: "Ingrese el valor del producto",
  icon: "error"
});

        return;
    }

    if (isNaN(valor)) {
        Swal.fire({
  title: "Error",
  text: "El valor solo debe contener números",
  icon: "error"
});

        return;
    }

    if (categoria == "") {
       Swal.fire({
  title: "Error",
  text: "Seleccione una categoría",
  icon: "error"
});

        return;
    }

    if (ubicacion == "") {
        Swal.fire({
  title: "Error",
  text: "Ingrese la ubicación del producto",
  icon: "error"
});

        return;
    }

   Swal.fire({
  title: "Correcto",
  text: "Producto registrado correctamente",
  icon: "success"
});


    console.log("Código:", codigo);
    console.log("Nombre:", nombre);
    console.log("Cantidad:", cantidad);
    console.log("Descripción:", descripcion);
    console.log("Marca:", marca);
    console.log("Valor:", valor);
    console.log("Categoría:", categoria);
    console.log("Ubicación:", ubicacion);

}

document.getElementById("guardar2").onclick =ValidarDatos;