const ladoA = 30;
const ladoB = 70;
const ladoC = 80;

if (ladoA <= 0 || ladoB <= 0 || ladoC <= 0){
    console.log("False");
}
else if (ladoA + ladoB + ladoC === 180){
    console.log("True");
}
else {
    console.log("False");
}