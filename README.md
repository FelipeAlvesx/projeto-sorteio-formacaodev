# Sorteador de Membros 🎰

Este é um programa de linha de comando em TypeScript projetado para realizar sorteios de membros a partir de um arquivo CSV. Ele seleciona um ganhador removendo aleatoriamente um candidato por vez até que apenas um permaneça.

## Funcionalidades

*   **Leitura de CSV:** Processa um arquivo CSV contendo nomes e e-mails de membros.
*   **Sorteio Aleatório:** Implementa uma lógica de sorteio que remove um membro aleatório por iteração até que um único ganhador seja determinado.
*   **Execução em Terminal:** Desenvolvido para ser executado diretamente no terminal.

## Como Funciona

A lógica central do sorteio é baseada na remoção iterativa de membros. A cada passo, um membro é aleatoriamente "eliminado" da lista, e o processo se repete até que apenas um membro permaneça, sendo este o ganhador.

### Lógica do Sorteio

A função principal `sort` orquestra o processo, utilizando a função auxiliar `todosMenosUm` para remover um membro por vez.

### Execução

1.  **Clone o repositório:**
    ```bash
    git clone [LINK_DO_SEU_REPOSITORIO]
    cd nome-do-projeto
    ```
2.  **Instale as dependências:**
    ```bash
    npm install
    ```
3.  **Salve o Arquivo .csv:**
    ```bash
    Salve o Arquivo em src/data/data.csv
    ```
4.  **Rode o Projeto:**
    ```bash
    # Sintaxe: comando <caminho_do_arquivo>
    npx ts-node src/index.ts
    ```
