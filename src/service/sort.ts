import Member from "../model/Member";
import Progresso from "../ui/progresso";

export default async function sort(members: Member[], duracaoEmSegundos: number): Promise<Member> {
    let restantes = [...members]
    const progresso = new Progresso(members.length)
    const tempoEspera = (duracaoEmSegundos / members.length) * 100
    for(let i = 0; i < members.length; i++){
        restantes = todosMenosUm(restantes);
        await esperar(tempoEspera)
        progresso.atualizar(i+1);
    }

        return restantes[0];
}

function todosMenosUm(members: Member[]): Member[] {
    if(members.length === 1) return members;
    const sorteado = Math.floor(Math.random() * members.length);
    members.splice(sorteado, 1);
    return members;
}

function esperar(ms: number): Promise<void>{
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve()
        }, ms)
    })
}