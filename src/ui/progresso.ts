import { terminal } from "terminal-kit"

export default class Progresso {
    private barra: any

    constructor(private qtdeTotal: number){
        this.barra = terminal.progressBar({
            width: 200,
            title: "progresso",
            eta: true,
            percent: true,
            syncMode: true,
            items: this.qtdeTotal
        })
        this.barra.update(0)
    }

    atualizar(qtde: number){
        this.barra.update(qtde/this.qtdeTotal)
    }
}
