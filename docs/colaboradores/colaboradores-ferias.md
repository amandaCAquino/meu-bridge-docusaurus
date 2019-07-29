---
layout: doc
title: Lista de férias
id: colaboradores-ferias
order: 2
parent: colaboradores
---

O sistema deve permitir visualizar as férias registradas dos colaboradores.

## 1. Campos

Deve apresentar uma lista com os registros dos colaboradores. Cada item deve apresentar:

- Nome
- Saldo de férias
- Lista de férias registradas com os campos:
  - Início
  - Fim
  - Nº de dias

Deve apresentar também para cada registro a opção de **"Visualizar"**

## 2. Regras

- A pesquisa somente deve ser feita após selecionar pelo menos um colaborador no filtro, caso nenhum colaborador tenha sido selecionado deve apresentar a mensagem {% link msg-sistema#selecione-colaboradores, title:"selecione colaboradores"%}.
- Caso o colaborador não possuir férias registradas deve apresentar a mensagem de {% link msg-sistema#sem-registro, title:"sem férias cadastradas"%}.
- O saldo de férias somente deve ser apresentados se o perfil do colaborador logado for "Administrativo" ou "Líder", e somente nos registros de colaboradores bolsistas.
- A opção de visualizar somente deve ser apresentada se o perfil do colaborador logado for "Administrativo" ou "Líder".
- Ao clicar em **"Visualizar"** deve ser apresentado a tela {% link visualizacao-colaborador %}.
