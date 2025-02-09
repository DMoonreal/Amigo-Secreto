let amigos = [];
function agregarAmigo() {
  const amigo = document.getElementById("amigo").value;
  if (amigo == "") {
    alert("Introduce un amigo");
  } else {
    amigos.push(amigo);
    document.getElementById("amigo").value = "";
    crearLista();
  }
}
function crearLista() {
  let lista = document.getElementById("listaAmigos");
  lista.innerHTML = "";
  for (let i = 0; i < amigos.length; i++) {
    let nuevoAmigo = document.createElement("li");
    nuevoAmigo.textContent = amigos[i];
    lista.appendChild(nuevoAmigo);
  }
}

function sortearAmigo() {
  if (amigos.length === 0) return alert("Introduce a un amigo");
  const IndiceAmigo = Math.floor(Math.random() * amigos.length);
  document.getElementById("listaAmigos").innerText = "";
  document.getElementById("resultado").innerText =
    "El amigo secreto es: " + amigos[IndiceAmigo];
  amigos = [];
}
