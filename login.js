const nome = document.getElementById("name")
const cognome = document.getElementById("surname")
const data = document.getElementById("dataNascita")
const loginButton = document.getElementById("loginButton")

const dati = (ev) => {
  let table = document.querySelector("table")
  table.innerHTML += `   <tr onclick = "fatto(event)">
    <td>${
      nome.value + " " + cognome.value + " " + data.value
    } <i class="fa-solid fa-trash" ></i></td>
  </tr>
     `
}
const fatto = (e) => {
  e.target.remove()
}

// const Utente = function (nome, cognome) {
//   this.nome = nome
//   this.cognome = cognome
// }
// let fabri = new Utente("fabbrizio", "angelo")
// Utente.prototype.cibo = "mela"
// console.log(fabri)

// let gabri = new Utente("gabriele", "d'annunzio")
// Utente.prototype.cibo = "pera"
// console.log(gabri)
