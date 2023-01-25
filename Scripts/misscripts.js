function mostrarOcultar(divisor, button) {
    let x = divisor;
    let y = button;
    if (x.style.display == "block") {
        x.style.display = "none";
        y.className = "fa-solid fa-plus fa-fw fa-xl margen_derecho texto_grisosc";
    } else {
        x.style.display = "block";
        y.className = "fa-solid fa-minus fa-fw fa-xl margen_derecho texto_grisosc";
    }
}

function abrirPopup(cuerpo, popupH) {
    let popup = popupH;
    let body = cuerpo;

    popup.classList.add("abrir-popup");
    body.classList.add("overlay");
}
function cerrarPopup(cuerpo, popupH) {
    let popup = popupH;
    let body = cuerpo;

    popup.classList.remove("abrir-popup");
    body.classList.remove("overlay");
}

