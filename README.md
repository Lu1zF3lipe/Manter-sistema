# Manter Sistema

## projeto técnico desenvolvido para seleção da empresa Kingspan isoeste, api desenvolvida em node.js com framework nest.js

nesta API o usuário pode:

- [x]  criar registros de sistemas
- [x]  pesquisar pelos sistemas
- [x]  editar os sistemas

Todas as rotas da API foram documentadas com Open API e estão disponíveis no caminho /api

## Como utilizar esse repositório?

clone o repositório e instale as dependências

```bash
git clone https://github.com/Lu1zF3lipe/Manter-sistema.git
cd Manter-sistema
npm i
```

para criar o banco de dados:

```bash
npx prisma migrate deploy
```

para rodar a aplicação rode:

```bash
npm run start
```
