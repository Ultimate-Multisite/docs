---
title: Feedback do Cliente e Relatório de Problemas
sidebar_position: 25
_i18n_hash: b8cc1801782ca29dbdcddcf9db34fb48
---
# Feedback e Relatório de Problemas do Usuário

O Gratis AI Agent v1.5.0 introduz um sistema embutido de feedback e relatório de problemas que permite aos usuários finais sinalizar respostas pouco úteis e relatar problemas diretamente na interface de chat. Este sistema inclui gerenciamento de consentimento, um comando de relatório automatizado e triagem assistida por IA no backend.

## Botão de Polegar para Baixo {#thumbs-down-button}

Toda mensagem enviada pelo assistente de IA exibe um botão de **polegar para baixo** (👎). Quando um usuário clica nele, ele pode marcar uma resposta como pouco útil ou incorreta.

- O botão aparece ao passar o mouse ao lado de cada mensagem do assistente.
- Clicar nele abre o **Modal de Consentimento de Feedback**.
- O feedback é associado ao tópico de conversa e à mensagem específica.

## Modal de Consentimento de Feedback {#feedback-consent-modal}

Quando um usuário clica no botão de polegar para baixo, um modal de consentimento aparece antes que qualquer dado seja enviado. O modal:

- Explica quais informações serão coletadas (trecho da conversa, contexto do navegador).
- Pede ao usuário que confirme que ele concorda em compartilhar esses dados.
- Fornece um campo de texto livre para o usuário descrever o que deu errado.
- Oferece uma opção de **Cancelar** para fechar sem enviar.

Nenhum feedback é registrado até que o usuário confirme explicitamente.

## Banner de Feedback de Auto-Prompt {#auto-prompt-feedback-banner}

Ao final de uma conversa, o assistente pode exibir um **banner de feedback de auto-prompt** — uma mensagem não intrusiva perguntando se a sessão foi útil.

Este banner aparece automaticamente com base na duração e em heurísticas de resultado da conversa. Ele está ligado ao mesmo fluxo de feedback do botão de polegar para baixo. Os usuários podem fechar o banner sem fornecer feedback.

## Comando Slash /report-issue {#report-issue-slash-command}

Os usuários podem acionar o fluxo de feedback diretamente digitando `/report-issue` no campo de entrada do chat. Este comando:

- Abre o Modal de Consentimento de Feedback imediatamente.
- Preenche o campo de descrição com contexto sobre a conversa atual.
- Permite que os usuários adicionem detalhes adicionais antes de enviar.

O comando `/report-issue` está disponível em todos os modos de chat (inline, widget flutuante, tela cheia).

## Triagem Assistida por IA {#ai-assisted-triage}

O feedback enviado é encaminhado a uma camada de triagem por IA que:

- Categoriza o relatório (erro factual, resposta pouco útil, conteúdo inapropriado, etc.).
- Anexa metadados relevantes da conversa.
- Encaminha o resumo da triagem para o **Endpoint de Feedback** configurado (veja [Configurações > Avançado](#settings-advanced)).

Isso reduz o tempo de revisão manual ao destacar os problemas mais críticos primeiro.

## Configurações > Avançado {#settings-advanced}

Para ativar o backend de feedback, configure os seguintes campos em **Gratis AI Agent → Configurações → Avançado**:

| Campo | Descrição |
|---|---|
| **Feedback Endpoint URL** | A URL que recebe requisições POST com payloads de feedback (JSON). |
| **Feedback API Key** | Token Bearer enviado no cabeçalho `Authorization` para autenticar os envios de feedback. |

Deixe ambos os campos em branco para desativar a coleta de feedback. Os botões de feedback individuais permanecem visíveis para os usuários, mas os envios não serão encaminhados.

:::tip
O endpoint de feedback deve aceitar um corpo JSON com pelo menos os campos `message_id`, `conversation_id`, `feedback_text` e `triage_category`. Consulte a documentação do seu provedor de endpoint para o esquema esperado.
:::
