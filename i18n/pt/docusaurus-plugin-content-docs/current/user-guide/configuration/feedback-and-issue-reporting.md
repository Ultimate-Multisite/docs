---
title: Feedback do Cliente e Relatório de Problemas
sidebar_position: 25
_i18n_hash: b8cc1801782ca29dbdcddcf9db34fb48
---
# Feedback e Relatório de Problemas do Cliente

O Gratis AI Agent v1.5.0 introduz um sistema embutido de feedback e relatórios de problemas que permite aos usuários finais sinalizar respostas inúteis e reportar problemas diretamente da interface de chat. Este sistema inclui gerenciamento de consentimento, um comando de relatório automatizado e triagem assistida por IA no backend.

## Botão Polegar para Baixo (Thumbs-Down Button) {#thumbs-down-button}

Cada mensagem enviada pelo assistente de IA exibe um botão **polegar para baixo** (👎). Quando o usuário clica nele, pode marcar uma resposta como inútil ou incorreta.

- O botão aparece ao passar o mouse ao lado de cada mensagem do assistente.
- Ao clicar nele, abre o **Modal de Consentimento de Feedback**.
- O feedback é associado ao tópico da conversa e à mensagem específica.

## Modal de Consentimento de Feedback {#feedback-consent-modal}

Quando um usuário clica no botão polegar para baixo, um modal de consentimento aparece antes que qualquer dado seja enviado. O modal:

- Explica quais informações serão coletadas (trecho da conversa, contexto do navegador).
- Pede ao usuário para confirmar o consentimento para compartilhar esses dados.
- Fornece um campo de texto livre para que o usuário descreva o que deu errado.
- Oferece uma opção **Cancelar** para fechar sem enviar.

Nenhum feedback é registrado até que o usuário confirme explicitamente.

## Banner de Feedback Automático (Auto-Prompt) {#auto-prompt-feedback-banner}

No final de uma conversa, o assistente pode exibir um **banner de feedback automático** — uma mensagem não intrusiva perguntando se a sessão foi útil.

Este banner aparece automaticamente com base na duração e nos resultados da conversa. Ele linka para o mesmo fluxo de feedback que o botão polegar para baixo. Os usuários podem descartar o banner sem fornecer feedback.

## Comando Slash /report-issue {#report-issue-slash-command}

Os usuários podem acionar o fluxo de feedback diretamente digitando `/report-issue` na caixa de entrada do chat. Este comando:

- Abre o Modal de Consentimento de Feedback imediatamente.
- Preenche automaticamente o campo de descrição com contexto sobre a conversa atual.
- Permite que os usuários adicionem detalhes extras antes de enviar.

O comando `/report-issue` está disponível em todos os modos de chat (inline, widget flutuante, tela cheia).

## Triagem Assistida por IA {#ai-assisted-triage}

O feedback enviado é direcionado para uma camada de triagem de IA que:

- Categoriza o relatório (erro factual, resposta inútil, conteúdo inadequado, etc.).
- Anexa metadados relevantes da conversa.
- Encaminha o resumo da triagem para o **Feedback Endpoint** configurado (veja [Configurações > Avançado](#settings-advanced)).

Isso reduz o tempo de revisão manual ao destacar as questões mais críticas primeiro.

## Configurações > Avançado {#settings-advanced}

Para ativar o backend de feedback, configure os seguintes campos em **Agente Gratuito de IA → Configurações → Avançado**:

| Campo | Descrição |
|---|---|
| **Feedback Endpoint URL** | A URL que recebe requisições POST com payloads de feedback (JSON). |
| **Feedback API Key** | O token Bearer enviado no cabeçalho `Authorization` para autenticar o envio de feedbacks. |

Deixe ambos os campos em branco para desativar a coleta de feedback. Os botões de feedback individuais permanecem visíveis aos usuários, mas os envios não serão encaminhados.

:::tip
O endpoint de feedback deve aceitar um corpo JSON com pelo menos os campos `message_id`, `conversation_id`, `feedback_text` e `triage_category`. Consulte a documentação do seu provedor de endpoint para o esquema esperado.
:::
