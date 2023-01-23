let nome = document.getElementById("name")
let cognome = document.getElementById("surname")
let data = document.getElementById("dataNascita")
let loginButton = document.getElementById("loginButton")

let dati = (ev) => {
  let table = document.querySelector("table")
  table.innerHTML += `   <tr>
    <td>${nome.value + " " + cognome.value + " " + data.value}</td>
  </tr>
       `
}
