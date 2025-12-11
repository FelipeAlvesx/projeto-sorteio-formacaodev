import loadMember from "./service/load-member";
import sort from "./service/sort";

let message: string = "Hello World!!!!";

console.log(message);

const members = loadMember("./src/data/data.csv");

// members.forEach((member) => {
//     console.log(member.toString())
// })

const sorteado = sort(members);
console.log(sorteado);
