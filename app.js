//Objects
var customer = {
    name: "Alex",
    age: 44
};
//Arrays
var skills = ["Junior", "Senior", "Master"];
//Tuples
var file = ["Alex", "Loz", 44];
//Enum
var statuss;
(function (statuss) {
    statuss[statuss["abierto"] = 0] = "abierto";
    statuss[statuss["pendiente"] = 1] = "pendiente";
    statuss[statuss["cerrado"] = 2] = "cerrado";
})(statuss || (statuss = {}));
var valor = 10;
if (statuss.abierto == valor) {
    console.log(statuss.abierto);
}
//Unions
var vector = 10;
vector = false;
function nivel(difficulty) {
    console.log("algo");
}
nivel(4);
