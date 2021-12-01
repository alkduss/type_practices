//Objects
const customer: {
  name: string;
  age: number;
} = {
  name: "Alex",
  age: 44,
};
//Arrays
const skills: string[] = ["Junior", "Senior", "Master"];
//Tuples
let file: [string, string, number] = ["Alex", "Loz", 44];
//Enum
enum statuss {
  abierto,
  pendiente,
  cerrado,
}
let valor: number = 10;
if (statuss.abierto == valor) {
  console.log(statuss.abierto);
}
//Unions
let vector: boolean | number = 10;
vector = false;
//Literals
type level = 1 | 2 | 4 | 8;
function nivel(difficulty: level) {
  console.log("algo");
}
nivel(4);
