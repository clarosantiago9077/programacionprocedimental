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
        Swal.fire("Error", "Ingrese el nombre", "error");
        return;
    }

    if (!isNaN(nombre)) {
        Swal.fire("Error", "El nombre solo debe contener letras", "error");
        return;
    }

    if (apellido == "") {
        Swal.fire("Error", "Ingrese el apellido", "error");
        return;
    }

    if (!isNaN(apellido)) {
        Swal.fire("Error", "El apellido solo debe contener letras", "error");
        return;
    }

    if (tipoDocumento == "") {
        Swal.fire("Error", "Seleccione el tipo de documento", "error");
        return;
    }

    if (numeroDocumento == "") {
        Swal.fire("Error", "Ingrese el número de documento", "error");
        return;
    }

    if (isNaN(numeroDocumento)) {
        Swal.fire("Error", "El número de documento solo debe contener números", "error");
        return;
    }

    if (telefono == "") {
        Swal.fire("Error", "Ingrese el teléfono", "error");
        return;
    }

    if (isNaN(telefono)) {
        Swal.fire("Error", "El teléfono solo debe contener números", "error");
        return;
    }

    if (correo == "") {
        Swal.fire("Error", "Ingrese el correo", "error");
        return;
    }

    if (!correo.includes("@")) {
        Swal.fire("Error", "Ingrese un correo válido", "error");
        return;
    }

    if (genero == "") {
        Swal.fire("Error", "Seleccione el género", "error");
        return;
    }

    if (cargo == "") {
        Swal.fire("Error", "Ingrese el cargo", "error");
        return;
    }

    if (fechaNacimiento == "") {
        Swal.fire("Error", "Seleccione la fecha de nacimiento", "error");
        return;
    }

    if (password == "") {
        Swal.fire("Error", "Ingrese la contraseña", "error");
        return;
    }

    Swal.fire("Correcto", "Usuario registrado correctamente", "success");

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