---
layout: doc
title: Registros anteriores
id: registros-anteriores
parent: registro-diario
order: 2
---

O sistema deve permitir que o colaborador visualize e/ou edite os registros diários anteriores.

## <a name= "campos-registro-anterior"></a> 1. Campos

Deve apresentar os seguintes grupos:

##### 1.1 Registros do mês

Deve apresentar uma tabela contendo os dias do mês selecionado, separado em semanas, com as seguintes colunas e sem possibilidade de edição:

- Dia
- Três pares de Entrada/Saída
- Observação
- Justificativa
- Total
- Saldo
- Total semanal

Deve apresentar também a opção **"Editar"** e o filtro **"Calendário"**.

##### 1.2 Total mensal

Deve apresentar o total de horas trabalhadas do colaborador naquele mês, pela quantidade de horas mensal esperadas. Essa quantidade deve ter por base o {% link horario-semanal, title:"Horário semanal"%} do colaborador.

Deve apresentar também uma barra de progresso referente ao total.

##### 1.3 Banco de horas

Deve apresentar o total de horas adicionais, positivas ou negativas, que o colaborador possui com relação aos seus {% link horario-semanal, title:"Horários semanais"%}.

## 2. Regras

As seguintes regras devem ser respeitadas, de acordo com os grupos:

##### 2.1 Registros do mês

- Ao clicar no filtro **"Calendário"**, deve ser apresentado um modal para seleção do ano e do mês desejado. Ao selecionar um mês, deve atualizar as informações da página de acordo com o mês selecionado.

- Ao clicar em **"Editar"**, a opção **"Calendário"** deve ser escondida e só reaparecer quando as alterações forem salvas ou canceladas.

- O campo _"Total semanal"_ deve mostrar a soma dos campos _"Total"_ e _"Saldo"_.

- Os demais campos devem seguir as mesmas regras apresentadas em {% link semana-atual#semana-atual-2-2, title:"Semana atual"%}, no item 2.2.

##### 2.2 Total mensal

- Deve apresentar os totais de horas no seguinte formato: _"Total executado no mês" de "Total esperado no mês"_.

- A barra de progresso deve ser preenchida proporcionalmente à quantidade de horas apresentada no campo acima. Caso o _"Total executado no mês"_ seja superior ao _"Total esperado no mês"_, a barra deve permanecer completamente cheia, sem extrapolar os limites da mesma.

##### 2.3 Banco de horas

- Deve seguir as mesmas regras apresentadas em {% link semana-atual#semana-atual-2-4, title:"Semana atual"%}, no item 2.4.

## 3. Dicionário de dados

| Nome Campo | Obrigatório | Tam Mínimo | Tam Máximo | Tipo    | Observações / Exemplo |
| :--------- | :---------- | :--------- | :--------- | :------ | :-------------------- |
| Entrada    | Não         | 00:00      | 23:59      | Horário |                       |
| Saída      | Não         | 00:00      | 23:59      | Horário |                       |
