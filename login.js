const nome = document.getElementById("name")
const cognome = document.getElementById("surname")
const data = document.getElementById("dataNascita")
const loginButton = document.getElementById("loginButton")

const Utente = function (nome, cognome, data) {
  this.nome = nome
  this.cognome = cognome
  this.data = data
}

const dati = (ev) => {
  let table = document.querySelector("table")
  table.innerHTML += `   <tr >
    <td>${
      nome.value + " " + cognome.value + " " + data.value
    } <i class="fa-solid fa-trash" onclick = "fatto(event)" ></i></td>
  </tr>
     `
  const giova = new Utente(nome.value, cognome.value, data.value)
  console.log(giova)
}
const fatto = (e) => {
  e.stopPropagation()
  e.target.parentElement.parentElement.remove()
}
