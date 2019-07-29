---
layout: doc
title: Cadastrar observação
id: observacao
parent: registro-diario
order: 3
---

O sistema deve permitir que o colaborador adicione "Observações" nos dias da semana, conforme necessário.

## 1. Campos

Deve apresentar o campo:

- Observação

Deve apresentar também os botões **"Salvar"**, **"Remover"** e **"Fechar"**.

## 2. Regras

- Apenas uma "Observação" pode ser cadastrada por dia.

- O botão **"Remover"** só deve ser apresentado caso seja uma edição de uma "Observação" cadastrada previamente. Ao ser clicado, deve remover a "Observação" do dia em questão.

- Ao clicar no botão **"Salvar"**, o botão da **"Observação"** deve ser mostrado na linha referente ao dia onde foi cadastrada.

- Ao clicar no botão **"Salvar"**, sendo que nenhum caracter for informado no campo, deve simplesmente fechar o Modal sem incluir nenhuma "Observação".

- O botão **"Fechar"** deve fechar o modal de "Observação", descartando as alterações realizadas.

## 3. Dicionário de dados

| Nome Campo | Obrigatório | Tam Mínimo | Tam Máximo | Tipo         | Observações / Exemplo |
| :--------- | :---------- | :--------- | :--------- | :----------- | :-------------------- |
| Observação | Não         |            | 255        | Alfanumérico |                       |
