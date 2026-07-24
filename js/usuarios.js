function ValidarDatos() {

    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;
    let tipoDocumento = document.getElementById("tipoDocumento").value;
    let numeroDocumento = document.getElementById("numeroDocumento").value;
    let telefono = document.getElementById("telefono").value;
    let correo = document.getElementById("correo").value;
    let genero = document.getElementById("genero").value;
    let cargo = document.getElementById("cargo").value;
    let fechaNacimiento = document.getElementById("fechaNacimiento").value;
    let password = document.getElementById("password").value;

    if (nombre == "") {
       Swal.fire({
  title: "Error",
  text: "Ingrese el nombre",
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

    if (apellido === "") {
        Swal.fire({
  title: "Error",
  text: "Ingrese el apellido",
  icon: "error"
});

        return;
    }

    if (!isNaN(apellido)) {
        Swal.fire({
  title: "Error",
  text: "El apellido solo debe contener letras",
  icon: "error"
});

        return;
    }

    if (tipoDocumento == "") {
        Swal.fire({
  title: "Error",
  text: "Seleccione el tipo de documento",
  icon: "error"
});

        return;
    }

    if (numeroDocumento == "") {
        Swal.fire({
  title: "Error",
  text: "Ingrese el número de documento",
  icon: "error"
});

        return;
    }

    if (isNaN(numeroDocumento)) {
        Swal.fire({
  title: "Error",
  text: "El número de documento solo debe contener números",
  icon: "error"
});

        return;
    }

    if (telefono == "") {
       Swal.fire({
  title: "Error",
  text: "Ingrese el teléfono",
  icon: "error"
});
        return;
    }

    if (isNaN(telefono)) {
        Swal.fire({
  title: "Error",
  text: "El teléfono solo debe contener números",
  icon: "error"
});

        return;
    }

    if (correo == "") {
       Swal.fire({
  title: "Error",
  text: "Ingrese el correo",
  icon: "error"
});
;
        return;
    }

    if (!correo.includes("@")) {
        Swal.fire({
  title: "Error",
  text: "Ingrese un correo válido",
  icon: "error"
});
        return;
    }

    if (genero == "") {
       Swal.fire({
  title: "Error",
  text: "Seleccione el género",
  icon: "error"
});

        return;
    }

    if (cargo == "") {
       Swal.fire({
  title: "Error",
  text: "Ingrese el cargo",
  icon: "error"
});
        return;
    }

    if (fechaNacimiento == "") {
       Swal.fire({
  title: "Error",
  text: "Seleccione la fecha de nacimiento",
  icon: "error"
});
        return;
    }

    if (password == "") {
        Swal.fire({
  title: "Error",
  text: "Ingrese la contraseña",
  icon: "error"
});
        return;
    }

   Swal.fire({
  title: "Correcto",
  text: "Usuario registrado correctamente",
  icon: "success"
});

    console.log("Nombre:", nombre);
    console.log("Apellido:", apellido);
    console.log("Tipo Documento:", tipoDocumento);
    console.log("Número Documento:", numeroDocumento);
    console.log("Teléfono:", telefono);
    console.log("Correo:", correo);
    console.log("Género:", genero);
    console.log("Cargo:", cargo);
    console.log("Fecha Nacimiento:", fechaNacimiento);
    console.log("Contraseña:", password);

}

document.getElementById("guardar3").onclick =ValidarDatos;