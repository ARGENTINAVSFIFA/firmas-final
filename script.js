import { initializeApp } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-app.js";
import {
  getFirestore,
  doc,
  getDoc,
  updateDoc,
  increment
} from "https://www.gstatic.com/firebasejs/11.10.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyCMuhiAgAlbJ45fNp4aCem54_FiYEhifrE",
  authDomain: "firmas-final.firebaseapp.com",
  projectId: "firmas-final",
  storageBucket: "firmas-final.firebasestorage.app",
  messagingSenderId: "15967494516",
  appId: "1:15967494516:web:48c805efda2c75470b0c21"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const meta = 500000;
const contadorRef = doc(db, "peticion", "contador");

async function cargarContador() {
  const snap = await getDoc(contadorRef);

  if (snap.exists()) {
    const firmas = snap.data().firmas || 0;

    document.getElementById("contador").textContent =
      firmas.toLocaleString("es-ES") +
      " / " +
      meta.toLocaleString("es-ES") +
      " firmas";

    document.getElementById("progreso").style.width =
      (firmas / meta) * 100 + "%";
  }
}

window.firmar = async function () {

  if (localStorage.getItem("yaFirmo")) {
    alert("❌ Ya has firmado esta petición.");
    return;
  }

  const nombre = prompt("Escribe tu nombre:");

  if (!nombre) return;

  await updateDoc(contadorRef, {
    firmas: increment(1)
  });

  localStorage.setItem("yaFirmo", "si");

  await cargarContador();

  alert("✅ ¡Gracias por firmar, " + nombre + "!");
};

cargarContador();
