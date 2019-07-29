---
layout: doc
title: Banco de horas
id: relatorio-banco-horas
order: 0
parent: relatorios
---

Este relatório apresenta os dados dos bancos de horas dos colaboradores. Esta funcionalidade deve estar disponível somente para os perfis de **{% link perfis#lider, title:"Líder"%}** e **{% link perfis#administrativo, title:"Administrativo"%}**.

## 1. Filtros

O relatório deve exibir os seguintes filtros:

- Colaborador : filtro pelo nome do colaborador
- Saldo : filtro de saldo de horas pré-definidos:
  - Mais de 10 horas positivas
  - Mais de 10 horas negativas
  - Mais de 20 horas positivas
  - Mais de 20 horas negativas
  - Mais de 30 horas positivas
  - Mais de 30 horas negativas

## 2. Listagem

Deve apresentar a lista de saldo de horas, com os seguintes campos:

- Colaborador
- Saldo de horas

## 3. Regras

- Deve permitir ordenar a lista pelos campos citados a cima.
- Por padrão a lista deve vir ordenada pelo nome do colaborador.
- O saldo de horas deve ser contabilizado até o dia anterior ao atual.
- O filtro do colaborador é um campo de digitação livre, realizando a filtragem à medida da digitação.
