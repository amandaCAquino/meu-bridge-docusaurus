---
id: cadastrar-ferias
title: Cadastrar férias
sidebar_label: Cadastrar férias
---

O sistema deve permitir o cadastro de férias do colaborador.

## 1. Campos

Deve apresentar os campos:

- Início
- Fim
- Nº de dias

Deve apresentar também o botão **"Salvar"**.

Caso seja uma edição de registro deve apresentar o botão **"Remover"**.

## 2. Regras

- Ao preencher os campos de "Início" e "Fim" o campo "Nº de dias" deve ser calculado automaticamente.
- Ao modificar o campo "Nº de dias" o sistema deve alterar o campo "Fim" para que seja equivalente a data inicial somado com o "Nº de dias".
- Ao clicar em **"Salvar"** deve:

  - Verificar se a data fim é posterior a data de início, caso não seja deve apresentar a mensagem de {% link hint#campo-posterior-a-outro-campo, title:"campo posterior"%}.
  - Verificar se o colaborador possui um horário semanal registrado para o período das férias, caso não possua deve apresentar a mensagem _"É necessário ter um horário semanal registado para o período das férias”_.
  - Ao salvar deve atualizar o saldo de férias, além de atualizar a [Lista de férias](lista-ferias.md).

## 3. Dicionario de dados

| Nome Campo | Obrigatório | Tam Mínimo | Tam Máximo | Tipo     | Observações / Exemplo |
| :--------- | :---------- | :--------- | :--------- | :------- | :-------------------- |
| Início     | Sim         |            |            | Data     |                       |
| Fim        | Sim         |            |            | Data     |                       |
| Nº de dias | Sim         |            | 999        | Numérico |
