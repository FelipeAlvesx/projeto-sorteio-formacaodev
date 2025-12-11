import loadMember from "./service/load-member";
import sort from "./service/sort";
import terminal from "./ui/terminal";

let message: string = "Hello World!!!!";

//  console.log(message);

const members = loadMember("./src/data/data.csv");

// members.forEach((member) => {
//     console.log(member.toString())
// })

const sorteado = sort(members);
// console.log(sorteado);

terminal.white("\n\nO").brightRed(" AZARADO");
terminal.bold.brightGreen(" MAIS SORTUDO").white(" é: \n");
terminal.bold.brightYellow(sorteado + "\n\n");
terminal("🥳🥳🥳🥳🥳🥳🥳");
console.log();