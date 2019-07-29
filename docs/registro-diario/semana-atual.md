---
layout: doc
title: Semana atual
id: semana-atual
---

O sistema deve permitir que o usuário logado registre suas horas de entrada e saída para a semana atual.

## 1. Campos

Deve apresentar os seguintes grupos:

##### 1.1 Dia atual

Deve apresentar três intervalos dos seguintes campos:

- Entrada
- Saída

Deve apresentar também:

- Data e dia atual
- Botão **"Cheguei!"** ou **"Tô saindo"**
- Botão **"Observação"**
- Botão **"Justificativa"**
- Contador de horas diário

##### 1.2 Semana

Deve apresentar uma tabela contendo os dias da semana corrente com as seguintes colunas, sem possibilidade de edição:

- Dia
- Três pares de Entrada/Saída
- Observação
- Justificativa
- Total
- Saldo

Deve apresentar também a opção **"Editar"**.

##### 1.3 Total Semanal

Deve apresentar o total de horas trabalhadas do colaborador na semana atual, pela quantidade de horas semanais esperadas de acordo com o {% link horario-semanal, title:"Horário semanal"%}.

Deve apresentar também uma barra de progresso referente ao total.

##### 1.4 Banco de horas

Deve apresentar o total de horas adicionais, positivas ou negativas, que o colaborador possui com relação aos seus {% link horario-semanal, title:"Horários semanais"%}.

## 2. Regras

As seguintes regras devem ser respeitadas, de acordo com os grupos:

##### 2.1 Dia atual

- O campo _"Data e dia atual"_ deve mostrar a data e qual o dia atual da semana.

- O botão **"Cheguei"** deve estar disponível quando o primeiro campo não preenchido, da esquerda para a direita, for um campo _"Entrada"_. Ao ser clicado, o primeiro campo _"Entrada"_ disponível deve ser preenchido com o horário atual.

- O botão **"Tô saindo"** deve estar disponível quando o primeiro campo não preenchido, da esquerda para a direita, for um campo _"Saída"_. Ao ser clicado, o primeiro campo _"Saída"_ disponível deve ser preenchido com o horário atual.

- Os campos _"Entrada"_ e _"Saída"_, devem aceitar somente valores correspondentes a horários no formato _"hh:mm"_, utilizando o sistema de 24 horas.

- Ao preencher um campo de _"Entrada"_, o valor preenchido deve ser automaticamente inserido no primeiro campo _"Entrada"_ disponível no dia correspondente na "Semana atual".

- Ao preencher um campo _"Saída"_, o valor preenchido deve ser automaticamente inserido no seu respectivo dia na "Semana atual" somente se o campo _"Entrada"_ correspondente estiver preenchido. Caso contrário deve ser apresentada a mensagem de {% link hint#preenchimento-obg, title:"preenchimento obrigatório"%} no campo _"Entrada"_ faltante.

- O horário de _"Entrada"_ deve ser anterior ao horário de _"Saída"_. Caso contrário, deve apresentar a mensagem de {% link hint#campo-anterior, title:"campo anterior"%}.

- Ao clicar em **"Observação"**, o modal de adição/edição de uma observação deve ser apresentado, conforme {% link observacao, title:"Cadastrar observação"%}.

- Ao clicar em **"Justificativa"**, o modal de adição/edição de uma justificativa deve ser apresentado, conforme {% link justificativa, title:"Cadastrar justificativa"%}.

- O campo _"Contador de horas diário"_ deve mostrar o somatório das horas trabalhadas pelo colaborador no dia atual, pela quantidade de horas esperadas para aquele dia, de acordo com o seu {% link horario-semanal, title:"Horário semanal"%}. Deve ser apresentado no formato _"hh:mm de hh:mm"_.

<h5 id="semana-atual-2-2">2.2 Semana</h5>

- O campo _"Dia"_, deve mostrar a data e o dia da semana abreviado, para cada dia da semana atual.

- Os três pares de colunas de _"Entrada"_ e _"Saída"_, devem mostrar os horários de entrada e saída registrados em cada dia da semana atual.

- Os campos _"Observação"_ e _"Justificativa"_ somente devem ser apresentados caso exista alguma "Observação" e/ou "Justificativa" cadastrada para algum determinado dia.

- Ao clicar sobre o campo _"Observação"_, deve mostrar um hint contendo o texto que foi escrito no cadastro da observação, e também o botão _"Fechar"_ para este hint.

- Ao clicar sobre o campo _"Justificativa"_, deve mostrar um hint contendo o tipo de justificativa que foi selecionada no cadastro da justificativa, e também o botão _"Fechar"_ para este hint.

- O campo _"Total"_ deve apresentar a quantidade total de horas trabalhadas pelo colaborador naquele dia.

- O campo _"Saldo"_ deve apresentar a diferença entre o valor do campo _"Total"_ e a quantidade de horas esperadas para aquele dia de acordo com o seu {% link horario-semanal, title:"Horário semanal"%}.

- Ao clicar no botão **"Editar"**:

  - Todos os três pares de colunas _"Entrada"_ e _"Saída"_ devem se tornar editáveis.
  - Os botões **"Observação"** e **"Justificativa"** devem ser mostrados para cada dia da semana, possibilitando a adição/edição destes registros conforme {% link observacao, title:"Cadastrar observação"%} e {% link justificativa, title:"Cadastrar justificativa"%} respectivamente.
  - Os botões **"Cancelar"** e **"Salvar"** devem ser mostrados no lugar do botão **"Editar"**, permitindo cancelar ou salvar as alterações realizadas. As alterações feitas somente entrarão em vigor após clicar em **"Salvar"**.
  - Todos os campos do grupo "Dia atual" devem ser bloqueados para edição, até as alterações serem salvas ou canceladas.

##### 2.3 Total semanal

- Deve apresentar os totais de horas no seguinte formato: _"Total executado na semana" de "Total esperado na semana"_.

- A barra de progresso deve ser preenchida proporcionalmente à quantidade de horas apresentada no campo acima. Caso o _"Total executado na semana"_ seja superior ao _"Total esperado na semana"_, a barra deve permanecer completamente cheia, sem extrapolar os limites da mesma.

<h5 id="semana-atual-2-4">2.4 Banco de horas</h5>

- O cálculo do banco de horas deve levar em conta todos os {% link horario-semanal, title: "Horários semanais"%} do colaborador e deve ser calculado da seguinte forma: _Quantidade de horas trabalhadas em todos os horários semanais_ - _Quantidade de horas que deveriam ter sido trabalhadas_.

- Caso o valor do banco de horas seja positivo, o valor deve ser apresentado na cor azul, com o símbolo "+" à frente.

- Caso o valor do banco de horas seja negativo, o valor deve ser apresentado na cor vermelha, com o símbolo "-" à frente.

## 3. Dicionário de dados

| Nome Campo | Obrigatório | Tam Mínimo | Tam Máximo | Tipo    | Observações / Exemplo |
| :--------- | :---------- | :--------- | :--------- | :------ | :-------------------- |
| Entrada    | Não         | 00:00      | 23:59      | Horário |                       |
| Saída      | Não         | 00:00      | 23:59      | Horário |                       |
