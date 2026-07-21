let firmas = 0;
const meta = 500000;

function firmar() {

    const nombre = prompt("Escribe tu nombre:");

    if (!nombre) return;

    firmas++;

    document.getElementById("contador").innerHTML =
        firmas.toLocaleString("es-ES") +
        " / " +
        meta.toLocaleString("es-ES") +
        " firmas";

    const porcentaje = (firmas / meta) * 100;

    document.getElementById("progreso").style.width = porcentaje + "%";

    alert("✅ Gracias por firmar, " + nombre + "!");
}
