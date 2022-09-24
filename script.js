class Club {
    constructor(name, number, natoinality, position) {
        this.name = name
        this.number = number
        this.nationality = natoinality
        this.position = position
    }
    run() { }
}

var player1 = new Club(" Courtois", "1", "Belgian", "Gk")
var player2 = new Club(" Militao", "3", "Brazilian", "RB")
var player3 = new Club("Carvajal ", "2", "Spanish", "CB")
var player4 = new Club(" Kroos", "8", "German", "CB")
var player5 = new Club(" Nacho", "6", "Spanish", "RB")
var player6 = new Club(" Modric", "10", "Croatian", "CM")
var player7 = new Club("Valverde", "15", "Uruguayan", "CM")
var player8 = new Club("Vinicius", "20", "Brazilian", "LW")
var player9 = new Club(" Camavinga ", "25", "France", "AM")
var player10 = new Club("Asensio", "11", "Spanish", "RW")
var player11 = new Club(" Benzema", "9", " France", "CF")

console.log(player1)

gk.innerHTML = `<p>${player1.name} <br> <br> ${player1.number}  <br> <br> ${player1.position}  </p> <div id="country" class="mx-auto text-center bg-danger">${player1.nationality}</div> `
rb.innerHTML = `<p>${player2.name} <br> <br> ${player2.number}  <br> <br> ${player2.position}  </p> <div id="country" class="mx-auto text-center bg-danger">${player2.nationality}</div> `
cbb.innerHTML = `<p>${player3.name} <br> <br> ${player3.number}  <br> <br> ${player3.position}  </p> <div id="country" class="mx-auto text-center bg-danger">${player3.nationality}</div> `
rbb.innerHTML = `<p>${player4.name} <br> <br> ${player4.number}  <br> <br> ${player4.position}  </p> <div id="country" class="mx-auto text-center bg-danger">${player4.nationality}</div> `
cb.innerHTML = `<p>${player5.name} <br> <br> ${player5.number}  <br> <br> ${player5.position}  </p> <div id="country" class="mx-auto text-center bg-danger">${player5.nationality}</div> `
cmm.innerHTML = `<p>${player6.name} <br> <br> ${player6.number}  <br> <br> ${player6.position}  </p> <div id="country" class="mx-auto text-center bg-danger">${player6.nationality}</div> `
lw.innerHTML = `<p>${player7.name} <br> <br> ${player7.number}  <br> <br> ${player7.position}  </p> <div id="country" class="mx-auto text-center bg-danger">${player7.nationality}</div> `
cf.innerHTML = `<p>${player8.name} <br> <br> ${player8.number}  <br> <br> ${player8.position}  </p> <div id="country" class="mx-auto text-center bg-danger">${player8.nationality}</div> `
cm.innerHTML = `<p>${player9.name} <br> <br> ${player9.number}  <br> <br> ${player9.position}  </p> <div id="country" class="mx-auto text-center bg-danger">${player9.nationality}</div> `
am.innerHTML = `<p>${player10.name} <br> <br> ${player10.number}  <br> <br> ${player10.position}  </p> <div id="country" class="mx-auto text-center bg-danger">${player10.nationality}</div> `
rw.innerHTML = `<p>${player11.name} <br> <br> ${player11.number}  <br> <br> ${player11.position}  </p> <div id="country" class="mx-auto text-center bg-danger">${player11.nationality}</div> `


// class Truck extends Car{
   
// }
// console.log(Car)
// var Courtois = new player  ("Goalkeeper","1")
// console.log(Courtois)
// var Militao = new player  ("Right back","3")
// console.log(Militao)
// var Nacho = new player  ("Left back","6")
// console.log(Nacho)
// var Carvajal = new player  ("Center back","2")
// console.log(Carvajal)
// var Alaba = new player  ("Center back","4")
// console.log(Alaba)
// var Kroos = new player  ("Central back","8")
// console.log(Kroos)
// var Valverde = new player  ("Central midfielder","15")
// console.log(Valverde)
// var Camavinga = new player  ("Attacking midfielder","25")
// console.log(Camavinga)
// var Modric = new player  ("Defensive Midfielder","10")
// console.log(Modric)
// var Asensio = new player  ("Right Wing Forward","11")
// console.log(Asensio)
// var Vinicius = new player  ("Left Wing Forward","20")
// console.log(Vinicius)
// var Benzema = new player  ("Striker","9")
// console.log(Benzema)
