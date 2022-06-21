let aprovação = -8;

switch (aprovação) {
    case "aprovado":
        console.log("Parabéns, você foi aprovada(o)!");
        break;
    case "lista":
        console.log("Você está na nossa lista de espera");
        break;
    case "reprovado":
        console.log("Você foi reprovada(o)");
        break;

    default:
        console.log("Não se aplica.")



}

let nota = 80

switch (true) {
    case nota >= 80:
        console.log("Aprovado!");
        break;
    
    case nota >= 60 && nota <=79:
        console.log("Lista!");
        break;
    
    case nota <60 && nota > 0:
        console.log("Reprovado!");
        break

    default:
        console.log("Não se aplica!")
}