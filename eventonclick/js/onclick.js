
function cambieNombre(elemento_boton){//recibimos el elemento_h1 = this
    console.log(elemento_boton);
    if(elemento_boton.innerText==="Login") {
        elemento_boton.innerText = "Log out";
    } else {
        elemento_boton.innerText = "Login"
    }
}

function over(){
    console.log("El mouse está sobre Log in");
}

function out() {
    console.log("El mouse está fuera de Log in");
}

function eliminar(elemento_boton){
    elemento_boton.remove();
}