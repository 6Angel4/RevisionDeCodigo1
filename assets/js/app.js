const baseEndpoint = "https://api.github.com";
const usersEndpoint = `${baseEndpoint}/users`;
const $n = document.querySelector(".name"); // se coloca . , para llamar a las clases
const $b = document.querySelector(".blog"); // se coloca . , para llamar a las clases
const $l = document.querySelector(".location"); // se coloca . , para llamar a las clases

//Se agrego async, porque se esta utilizando await
async function displayUser(username) {
  $n.textContent = "Cargando...";

  //Se agrego el bloque ded try...catch para el manejo de errores
  try {
    const response = await fetch(`${usersEndpoint}/${username}`);
    const data = await response.json();
    //Cambio en de backticks por comillas
    $n.textContent = data.name || "Nombre no disponible";
    $b.textContent = data.blog || "Blog no disponible";
    $l.textContent = data.location || "Ubicación no disponible";
  } catch (err) {
    handleError(err);
  }
}

function handleError(err) {
  console.log("OH NO!");
  console.error(err);
  $n.textContent = `Algo salió mal: ${err}`;
}

displayUser("stolinski");
