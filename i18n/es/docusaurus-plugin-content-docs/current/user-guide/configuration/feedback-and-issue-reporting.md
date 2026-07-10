---
title: Comentarios de clientes e informes de problemas
sidebar_position: 25
_i18n_hash: b8cc1801782ca29dbdcddcf9db34fb48
---
# Comentarios de los Usuarios e Informes de Problemas {#customer-feedback--issue-reporting}

Gratis AI Agent v1.5.0 presenta un sistema integrado de comentarios e informes de problemas que permite a los usuarios finales marcar respuestas poco útiles e informar de problemas directamente desde la interfaz de chat. Este sistema incluye gestión de consentimiento, un comando de reporte automatizado y triaje asistido por IA en el backend.

## Botón de Pulgar Hacia Abajo {#thumbs-down-button}

Cada mensaje enviado por el asistente de IA muestra un botón de **pulgar hacia abajo** (👎). Cuando un usuario hace clic en él, puede marcar una respuesta como poco útil o incorrecta.

- El botón aparece al pasar el ratón por encima, junto a cada mensaje del asistente.
- Hacer clic en él abre el **Modal de Consentimiento de Comentarios**.
- El comentario se asocia con el hilo de conversación y el mensaje específico.

## Modal de Consentimiento de Comentarios {#feedback-consent-modal}

Cuando un usuario hace clic en el botón de pulgar hacia abajo, aparece un modal de consentimiento antes de que se envíen datos. El modal:

- Explica qué información se recopilará (fragmento de la conversación, contexto del navegador).
- Pide al usuario que confirme que da su consentimiento para compartir estos datos.
- Proporciona un campo de texto libre para que el usuario describa lo que salió mal.
- Ofrece una opción de **Cancelar** para descartar sin enviar.

No se registra ningún comentario hasta que el usuario confirma explícitamente.

## Banner de Comentarios de Auto-Prompt {#auto-prompt-feedback-banner}

Al final de una conversación, el asistente puede mostrar un **banner de comentarios de auto-prompt** —un mensaje no intrusivo que pregunta si la sesión fue útil.

Este banner aparece automáticamente basándose en la longitud y los resultados de la conversación (heurísticas). Enlaza al mismo flujo de comentarios que el botón de pulgar hacia abajo. Los usuarios pueden descartar el banner sin proporcionar comentarios.

## Comando Slash /report-issue {#report-issue-slash-command}

Los usuarios pueden activar el flujo de comentarios directamente escribiendo `/report-issue` en la entrada de chat. Este comando:

- Abre el Modal de Consentimiento de Comentarios inmediatamente.
- Rellena previamente el campo de descripción con contexto sobre la conversación actual.
- Permite a los usuarios añadir detalles adicionales antes de enviar.

El comando `/report-issue` está disponible en todos los modos de chat (en línea, widget flotante, pantalla completa).

## Triaje Asistido por IA {#ai-assisted-triage}

Los comentarios enviados se dirigen a una capa de triaje de IA que:

- Categoriza el reporte (error fáctico, respuesta poco útil, contenido inapropiado, etc.).
- Adjunta metadatos relevantes de la conversación.
- Reenvía el resumen de triaje al **Feedback Endpoint** configurado (consulte [Settings > Advanced](#settings-advanced)).

Esto reduce el tiempo de revisión manual al hacer visibles los problemas más críticos primero.

## Settings > Advanced {#settings-advanced}

Para habilitar el backend de comentarios, configure los siguientes campos en **Gratis AI Agent → Settings → Advanced**:

| Field | Description |
|---|---|
| **Feedback Endpoint URL** | La URL que recibe solicitudes POST con cargas útiles de comentarios (JSON). |
| **Feedback API Key** | Token Bearer enviado en el encabezado `Authorization` para autenticar los envíos de comentarios. |

Deje ambos campos en blanco para deshabilitar la recopilación de comentarios. Los botones de comentarios individuales siguen siendo visibles para los usuarios, pero los envíos no se reenviarán.

:::tip
El endpoint de comentarios debe aceptar un cuerpo JSON con al menos los campos `message_id`, `conversation_id`, `feedback_text` y `triage_category`. Consulte la documentación de su proveedor de endpoint para conocer el esquema esperado.
:::
