let formulario = document.getElementById("formPedido");

let codigoProducto = document.getElementById("codigoProducto");
let nombreUsuario = document.getElementById("nombreUsuario");
let nombreProducto = document.getElementById("nombreProducto");
let cantidad = document.getElementById("cantidad");
let direccion = document.getElementById("direccion");
let telefono = document.getElementById("telefono");
let metodoPago = document.getElementById("metodoPago");
let valorCancelar = document.getElementById("valorCancelar");


formulario.addEventListener("submit", function(event){

    event.preventDefault();


    if(isNaN(codigoProducto.value)){
        alert("El código del producto debe contener solo números");
        return;
    }


    if(/\d/.test(nombreUsuario.value)){
        alert("El nombre del usuario no debe contener números");
        return;
    }


    if(/\d/.test(nombreProducto.value)){
        alert("El nombre del producto no debe contener números");
        return;
    }


    if(isNaN(cantidad.value)){
        alert("La cantidad debe contener solo números");
        return;
    }


    if(isNaN(telefono.value)){
        alert("El teléfono debe contener solo números");
        return;
    }


    if(metodoPago.value == ""){
        alert("Seleccione un método de pago");
        return;
    }


    if(isNaN(valorCancelar.value)){
        alert("El valor a cancelar debe contener solo números");
        return;
    }


    alert("Pedido realizado correctamente");


    formulario.reset();

});