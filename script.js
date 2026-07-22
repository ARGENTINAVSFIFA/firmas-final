let firmas = localStorage.getItem("firmas") || 0;
const meta = 500000;

document.getElementById("contador").innerHTML =
    Number(firmas).toLocaleString("es-ES") +
    " / " +
    meta.toLocaleString("es-ES") +
    " firmas";

document.getElementById("progreso").style.width =
    (firmas / meta) * 100 + "%";

function firmar() {

    if (localStorage.getItem("yaFirmo")) {
        alert("❌ Ya has firmado esta petición.");
        return;
    }

    const nombre = prompt("Escribe tu nombre:");

    if (!nombre) return;

    firmas++;

    localStorage.setItem("firmas", firmas);
    localStorage.setItem("yaFirmo", "si");

    document.getElementById("contador").innerHTML =
        Number(firmas).toLocaleString("es-ES") +
        " / " +
        meta.toLocaleString("es-ES") +
        " firmas";

    document.getElementById("progreso").style.width =
        (firmas / meta) * 100 + "%";

    alert("✅ Gracias por firmar, " + nombre + "!");
}
