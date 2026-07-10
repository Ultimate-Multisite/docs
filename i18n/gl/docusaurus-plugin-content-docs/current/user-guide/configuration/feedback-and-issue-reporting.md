---
title: Retroalimentación do cliente e notificación de problemas
sidebar_position: 25
_i18n_hash: b8cc1801782ca29dbdcddcf9db34fb48
---
# Feedback e Relatación de Problemas dos Clientes {#customer-feedback--issue-reporting}

Gratis AI Agent v1.5.0 introduce un sistema incorporado de feedback y reporte de problemas que permite aos usuarios finais marcar respostas que non sexan úteis e reportar problemas directamente desde a interfaz do chat. Este sistema inclui xestión de consentimento, un comando de reporte automatizado e triaxe axuda por IA no backend.

## Botón Thumbs-Down (Pulgar para Baixo) {#thumbs-down-button}

Cada mensaxe enviada polo asistente de IA mostra un botón **thumbs-down** (👎). Cando un usuario clica nele, pode marcar unha resposta como non útil ou incorrecta.

- O botón aparece ao pasar o rato (hover) ao lado de cada mensaxe do asistente.
- Ao clicar, abre o **Feedback Consent Modal**.
- O feedback está asociado co hilo da conversación e a mensaxe específica.

## Feedback Consent Modal {#feedback-consent-modal}

Cando un usuario clica no botón thumbs-down, aparece un modal de consentimento antes de que se envie calquera dato. O modal:

- Explica que información se recoñecerá (extracto da conversación, contexto do navegador).
- Pide ao usuario que confirme o seu consentemento para compartir estes datos.
- Proporciona un campo de texto libre para que o usuario describa o que estragou.
- Ofrece unha opción **Cancelar** para dispensar sen enviar nada.

Nen feedback se regista en án que o usuario confirme explícitamente.

## Banner de Feedback Automático (Auto-Prompt) {#auto-prompt-feedback-banner}

Ao final dunha conversación, o asistente pode mostrar un **auto-prompt feedback banner** — unha mensaxe non intrusiva que pregunta se a sesión foi útil.

Este banner aparece automáticamente en base ao tempo da conversación e nos criterios heurísticos do resultado. Linka ao mesmo flujo de feedback que o botón thumbs-down. Os usuarios poden dispensar o banner sen proporcionar feedback.

## Comando Slash /report-issue {#report-issue-slash-command}

Os usuarios poden activar directamente o fluxo de feedback escribindo `/report-issue` no campo de entrada do chat. Este comando:

- Abre o Modal de Consentimento de Feedback imediatamente.
- Preenche automaticamente o campo de descrição com contexto sobre a conversa atual.
- Permite que os utilizadores adicionem mais detalhes antes de enviar.

O comando `/report-issue` está disponível em todos os modos de chat (inline, widget flutuante, tela cheia).

## Triagem Assistida por IA {#ai-assisted-triage}

O feedback enviado é direcionado para uma camada de triagem de IA que:

- Categoriza o relatório (erro factual, resposta inútil, conteúdo inadequado, etc.).
- Anexa metadados relevantes da conversa.
- Encaminha o resumo da triagem ao **Feedback Endpoint** configurado (veja [Settings > Advanced](#settings-advanced)).

Isto reduz o tempo de revisão manual ao apresentar primeiro as questões mais críticas.

## Settings > Advanced {#settings-advanced}

Para ativar o backend de feedback, configure os seguintes campos em **Gratis AI Agent → Settings → Advanced**:

| Campo | Descrição |
|---|---|
| **Feedback Endpoint URL** | A URL que recebe requisições POST com payloads de feedback (JSON). |
| **Feedback API Key** | O token Bearer enviado no cabeçalho `Authorization` para autenticar os envios de feedback. |

Deixe ambos os campos em branco para desativar a recolha de feedback. Os botões de feedback individuais continuam visíveis aos utilizadores, mas os envios não serão encaminhados.

:::tip
O endpoint de feedback deve aceitar um corpo JSON com pelo menos os campos `message_id`, `conversation_id`, `feedback_text` e `triage_category`. Consulte a documentação do seu provedor de endpoint para o esquema esperado.
:::
