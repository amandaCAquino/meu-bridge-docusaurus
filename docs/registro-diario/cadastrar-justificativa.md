---
layout: doc
title: Cadastrar justificativa
id: justificativa
parent: registro-diario
order: 4
---

O sistema deve permitir que o colaborador registre justificativas nos dias da semana, conforme necessário.

## 1. Campos

Deve apresentar três justificativas para seleção:

- Atestado
- Ausência
- Hora abonada

Deve apresentar também os botões **"Salvar"**, **"Remover"** e **"Fechar"**.

## 2. Regras

- Cada tipo de justificativa possui um comportamento diferente:

  - **Atestado**: Deve ser usado quando o colaborador possuir um atestado que justifique a ausência. As horas de trabalho neste dia serão abonadas, logo, não descontarão do banco de horas do colaborador. O atestado ainda deve ser entregue manualmente ao setor administrativo.
  - **Ausência**: Deve ser usado para comunicar ausências. As horas de trabalho neste dia serão descontadas do banco de horas.
  - **Hora abonada**: Deve ser usado quando o colaborador, por algum motivo, terá suas horas do dia abonadas. Quando esta justificativa for selecionada, as horas diárias do colaborador serão abonadas e qualquer hora de trabalho realizada, será contabilizada como hora extra.

- Deve ser possível selecionar apenas uma das três justificativas possíveis.

- Apenas uma "Justificativa" pode ser cadastrada por dia.

- O botão **"Remover"** só deve ser apresentado caso seja uma edição de uma "Justificativa" cadastrada previamente. Ao ser clicado, deve remover a "Justificativa" do dia em questão.

- Ao clicar no botão **"Salvar"**, o botão da **"Justificativa"** deve ser mostrado na linha referente ao dia onde foi cadastrada. Caso esse novo botão seja clicado, deve mostrar um hint contendo a justificativa que foi selecionada no cadastro desta "Justificativa", e também o botão _"Fechar"_ para este hint.

- O botão **"Fechar"** deve fechar o modal de "Justificativa", descartando as alterações realizadas.
