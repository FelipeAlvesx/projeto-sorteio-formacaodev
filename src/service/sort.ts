import Member from "../model/Member";

export default function sort(members: Member[]): string {
    let restantes = [...members]
    for(let i = 0; i < members.length; i++){
        restantes = todosMenosUm(restantes);
    }

    return restantes[0].toString();
}

function todosMenosUm(members: Member[]): Member[] {
    if(members.length === 1) return members;
    const sorteado = Math.floor(Math.random() * members.length);
    return members.splice(sorteado, 1);
}