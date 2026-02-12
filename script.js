const verdeSlider = document.getElementById("verdeSlider");
const rojoSlider = document.getElementById("rojoSlider");

const verde = document.getElementById("verde");
const rojo = document.getElementById("rojo");

const verdeValor = document.getElementById("verdeValor");
const rojoValor = document.getElementById("rojoValor");

function actualizarColores() {

    const tonoVerde = parseInt(verdeSlider.value);

    // Ajustar rojo: convertir negativos a rango válido 0–360
    let tonoRojo = parseInt(rojoSlider.value);
    if (tonoRojo < 0) {
        tonoRojo = 360 + tonoRojo;
    }

    verde.style.backgroundColor = `hsl(${tonoVerde}, 70%, 35%)`;
    rojo.style.backgroundColor = `hsl(${tonoRojo}, 70%, 45%)`;

    verdeValor.textContent = `${tonoVerde}°`;
    rojoValor.textContent = `${tonoRojo}°`;
}

verdeSlider.addEventListener("input", actualizarColores);
rojoSlider.addEventListener("input", actualizarColores);
