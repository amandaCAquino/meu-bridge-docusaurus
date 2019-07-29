---
layout: doc
title: Férias
id: relatorio-ferias
order: 0
parent: relatorios
---

Este relatório apresenta os dados de férias registradas dos colaboradores.
Esta funcionalidade deve estar disponível somente para os perfis **{% link perfis#lider, title:"Líder"%}** e **{% link perfis#administrativo, title:"Administrativo"%}**.

## 1. Filtros

O relatório deve exibir os seguintes filtros:

- Colaborador : filtro pelo nome do colaborador
- Período: filtro pela data de início e fim das férias
- Saldo : filtro de saldo de dias pré-definidos:
  - Mais de 10 dias positivos
  - Mais de 10 dias negativos
  - Mais de 20 dias positivos
  - Mais de 20 dias negativas
  - Mais de 30 dias positivos
  - Mais de 30 dias negativas

## 2. Listagem

Deve apresentar a lista de saldo de férias, com os seguintes campos:

- Colaborador
- Período agendado
- Dias agendados
- Saldo

## 3. Regras

- Deve permitir ordenar a lista pelos campos citados a cima.
- Por padrão a lista deve vir ordenada pelo colaborador.
- Os dias agendados deve ser um somatório dos dias das férias agendadas.
- O saldo deve apresentar o saldo de férias atual do colaborador.
- Caso o filtro "Período" não seja selecionado deve trazer somente as férias futuras, e caso tenha sido preenchido deve trazer os resultados de acordo com o período especificado.
- O filtro "Período" deve abranger todas as férias cadastradas dentro, que inciam ou terminando dentro do período especificado.
