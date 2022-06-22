const currentHour = 3;
var message = "";
if (currentHour >= 22){
    var message = "Não deveríamos comer nada, é hora de dormir"
    console.log(message)
}else if (currentHour >= 18 && currentHour < 22){
    var message = "Rango da noite, vamos jantar :D"
    console.log(message)
}else if (currentHour >= 14 && currentHour < 18){
    var message = "Vamos fazer um bolo pro café da tarde?"
    console.log(message)
}else if (currentHour > 11 && currentHour < 14){
    var message = "Hora do almoço!!!"
    console.log(message)
}else if (currentHour > 4 && currentHour <= 11){
    var message = "Hmmm, cheiro de café recém passado"
    console.log(message)
}else{}

var weekDay = "quarta-feira";
if (weekDay === "segunda-feira" || weekDay === "terça-feira" || weekDay === "quarta-feira" || weekDay === "quinta-feira" || weekDay === "sexta-feira"){
    console.log("Oba, mais um dia de aprendizado na Trybe >:D")
}else{
    console.log("FINALMENTE, descanso merecido UwU")

}

console.log((2 + 2) === 4);
console.log(!(2 + 2) === 4);

const squirtle = "melhor pokemon inicial";

console.log(!squirtle); // false