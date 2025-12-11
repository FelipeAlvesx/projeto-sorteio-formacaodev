import loadMember from "./service/load-member";
import sort from "./service/sort";
import terminal from "./ui/terminal";

let message: string = "Hello World!!!!";

async function rodar(){
//  console.log(message);

const members = loadMember("./src/data/data.csv");

// members.forEach((member) => {
//     console.log(member.toString())
// })
const tempoEmSegundos = 20

const sorteado = await sort(members, tempoEmSegundos);
// console.log(sorteado);

terminal.clear();

terminal.white("\n\nO").brightRed(" AZARADO");
terminal.bold.brightGreen(" MAIS SORTUDO").white(" é: \n");
terminal.bold.brightYellow(sorteado.toString() + "\n\n");
terminal("🥳🥳🥳🥳🥳🥳🥳");
console.log();
}

rodar()