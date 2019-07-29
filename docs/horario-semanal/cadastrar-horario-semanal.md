---
layout: doc
title: Cadastrar horário semanal
id: cadastrar-horario-semanal
order: 1
parent: horario-semanal
---

O sistema deve permitir o cadastro de horários semanais do colaborador.

## 1. Campos

Deve apresentar os campos:

- Início
- Fim
- Total semanal

Também deve apresentar o seguinte grupo:

##### 1.1 Horário semanal

Deve apresentar os seguintes campos:

- Dia da semana
- Entrada
- Saída
- Total diário

Deve apresentar também o botão **"Salvar"** e o botão **"Fechar"**.

## 2. Regras

- Os campos _"Início"_ e _"Fim"_ devem aceitar somente valores do tipo data no formato "dd/mm/yyyy".

- Os campos _"Dias da semana"_ devem conter os dias úteis da semana, e servem para separar em colunas as entradas e saídas referentes a cada dia.

- Os campos de _"Entrada"_ e _"Saída"_ devem aceitar somente valores do tipo hora no formato "hh:mm".

- Os campos de _"Entrada"_ e _"Saída"_ devem se auto-completar com "zeros" caso algum dígito seja informado e o cursor seja movido para outro campo.

- É necessário que ao menos um dia esteja com _"Entrada"_ e _"Saída"_ devidamente preenchidos.

- O campo _"Total diário"_ deve mostrar o somatório das horas realizadas em seus respectivos dias.

- O campo _"Total semanal"_ deve mostrar o somatório dos valores de todos os campos _"Total diário"_.

- Ao clicar em **"Fechar"**, o usuário deve ser redirecionado para a página {% link visualizar-horario-atual, title:"Visualizar horário atual" %}.

- Ao clicar em **"Salvar"**, deve:

  - Verificar se o campo _"Início"_ é menor ou igual ao campo _"Fim"_, caso contrário, deve apresentar a mensagem de {% link hint#campo-anterior, title:"campo anterior"%}.
  - Verificar se o campo _"Início"_ é menor ou igual a data atual, caso contrário, deve apresentar a mensagem de {% link hint#campo-menor-igual, title:"campo menor ou igual"%}.
  - Verificar se o campo _"Início"_ e o campo _"Fim"_ estão preenchidos, caso contrário, deve apresentar a mensagem de {% link hint#preenchimento-obg, title:"preenchimento obrigatório"%}.
  - Verificar se ao menos um intervalo diário está devidamente preenchido, do contrário, de apresentar a mensagem de {% link hint#intervalo-valido, title:"intervalo válido"%}.
  - Verificar se os campos de _"Entrada"_ são menores dos que os respectivos campos de _"Saída"_, caso contrário, deve apresentar a mensagem {% link hint#campo-anterior, title:"campo anterior"%}.
  - Verificar se os intervalos informados nos campos _"Entrada"_ e _"Saída"_, em um determinado dia, não se sobrepõem uns aos outros. Caso contrário, deve apresentar a mensagem {% link hint#registro-existente-intervalo, title:"registro existente no intervalo"%} nos intervalos sobrepostos.
  - Caso algum campo de entrada seja preenchido e o respectivo campo de saída permaneça vazio, ou vice-versa, deve apresentar a mensagem de {% link hint#preenchimento-obg, title:"preenchimento obrigatório"%} no campo não preenchido.
  - Ao salvar com sucesso, o usuário deve ser encaminhado para a página {% link visualizar-horario-atual, title:"Visualizar horário atual" %} e o horário semanal cadastrado deve ser mostrado, de acordo com seu tipo, na página:

        - {% link visualizar-horario-atual, title:"Visualizar horário atual" %}, caso seja um horário vigente.
        - {% link visualizar-horarios-anteriores, title:"Visualizar horários anteriores" %}, caso seja um horário antigo.

## 3. Dicionário de dados

| Nome Campo | Obrigatório | Tam Mínimo | Tam Máximo | Tipo    | Observações / Exemplo                                   |
| :--------- | :---------- | :--------- | :--------- | :------ | :------------------------------------------------------ |
| Início     | Sim         |            |            | Data    |                                                         |
| Fim        | Sim         | 00:00      | 23:59      | Horário |                                                         |
| Entrada    | Sim         | 00:00      | 23:59      | Horário | No mínimo 1 campo entrada e saída respectivo preenchido |
| Saída      | Sim         | 00:00      | 23:59      | Horário | No mínimo 1 campo entrada e saída respectivo preenchido |
