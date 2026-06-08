---
title: Configuración de Agente IA Gratis
sidebar_position: 22
_i18n_hash: 7b593387e5e7b44903bfd6f0a1ff42ee
---
# Configuración del Agente Gratis AI

La pantalla **Configuración → Avanzado** en Gratis AI Agent proporciona una configuración de nivel administrador para las integraciones de backend introducidas en la v1.5.0. Esta página documenta los campos del **Endpoint de Feedback** y su formato esperado.

## Acceso a la Configuración

1. En el administrador de WordPress, ve a **Gratis AI Agent → Configuración**.
2. Haz clic en la pestaña **Avanzado**.

## Configuración del Endpoint de Feedback

El endpoint de feedback recibe solicitudes POST del agente de IA cada vez que un usuario envía comentarios a través del botón de pulgar hacia abajo, el banner de auto-prompt o el comando `/report-issue`.

| Campo | Descripción |
|---|---|
| **Feedback Endpoint URL** | La URL que recibe los envíos de feedback como solicitudes HTTP POST con un cuerpo JSON. |
| **Feedback API Key** | Un token de portador (bearer token) enviado en la cabecera `Authorization` de cada solicitud de feedback. Déjalo en blanco si su endpoint no requiere autenticación. |

### Carga Útil JSON Esperada

Su endpoint de feedback debe aceptar un cuerpo JSON con al menos los siguientes campos:

```json
{
  "message_id": "msg_abc123",
  "conversation_id": "conv_xyz789",
  "feedback_text": "La respuesta fue incorrecta sobre precios.",
  "triage_category": "factual_error"
}
```

Pueden estar presentes campos adicionales en la carga útil dependiendo del contexto de la conversación.

### Valores de `triage_category`

La capa de triaje de IA asigna uno de los siguientes valores a `triage_category` antes de reenviar la carga útil:

| Valor | Significado |
|---|---|
| `factual_error` | El asistente proporcionó información fáctica incorrecta. |
| `unhelpful_answer` | La respuesta fue técnicamente correcta pero no útil. |
| `inappropriate_content` | La respuesta contenía contenido que no debe mostrarse a los usuarios. |
| `other` | El feedback no coincidió con una categoría conocida. |

### Autenticación

Si su endpoint requiere autenticación, configure el campo **Feedback API Key** con su token de portador. El agente envía:

```
Authorization: Bearer <su-api-key>
```

Si el campo **Feedback API Key** está vacío, no se envía ninguna cabecera `Authorization`.

### Desactivación de la Recolección de Feedback

Deje los campos **Feedback Endpoint URL** y **Feedback API Key** en blanco. El botón de pulgar hacia abajo y la interfaz de usuario de feedback siguen siendo visibles para los usuarios, pero los envíos no se reenvían a ningún servicio externo.

## Brave Search API Key

También en la pestaña **Avanzado**, el campo **Brave Search API Key** habilita la capacidad de [Búsqueda en Internet](../configuration/internet-search).

| Campo | Descripción |
|---|---|
| **Brave Search API Key** | Su clave API del panel de desarrollador de Brave Search. Es necesaria para habilitar la búsqueda en Internet en el asistente de IA. |

La etiqueta del campo incluye un enlace clicable a la página de registro de la API de Brave Search. Déjelo en blanco para desactivar la búsqueda en Internet.

Consulte [Búsqueda en Internet](../configuration/internet-search) para la documentación de usuario final sobre esta función.

## Flags de Funcionalidad (Feature Flags)

También introducida en la v1.9.0, la pestaña **Configuración → Flags de Funcionalidad** proporciona interruptores para funcionalidades opcionales. Cada flag está habilitado o deshabilitado a nivel de red; por ahora no hay anulación por sitio.

### Acceso a los Flags de Funcionalidad

1. En el administrador de WordPress, ve a **Gratis AI Agent → Configuración**.
2. Haz clic en la pestaña **Flags de Funcionalidad**.

### Flags de Control de Acceso

| Flag | Por Defecto | Descripción |
|---|---|---|
| **Restrict to Administrators** | Desactivado | Cuando está activado, solo los usuarios con el rol `administrator` pueden abrir el panel de chat del Agente de IA. Todos los demás roles verán un mensaje de "Contacte a su administrador". |
| **Restrict to Network Admins** | Desactivado | Cuando está activado en una red multisite, solo los Super Administradores pueden usar el agente. Los administradores de sitios individuales están bloqueados. Tiene prioridad sobre "Restrict to Administrators" si ambos están activados. |
| **Allow Subscriber Access** | Desactivado | Cuando está activado, los usuarios con el rol `subscriber` pueden usar la interfaz de chat, pero están limitados a capacidades de solo lectura (sin creación de publicaciones ni cambios de configuración). |
| **Disable for Non-Members** | Desactivado | Se integra con el estado de membresía de Ultimate Multisite. Cuando está activado, el chat se oculta para los sitios que no tienen una membresía activa. |

### Flags de Branding

| Flag | Por Defecto | Descripción |
|---|---|---|
| **Hide "Powered by Gratis AI Agent" Footer** | Desactivado | Elimina la línea de atribución de marca que se muestra en la parte inferior del widget de chat. Recomendado para implementaciones white-label. |
| **Custom Agent Name** | *(vacío)* | Reemplaza la etiqueta predeterminada "Gratis AI Agent" en el encabezado del chat y el menú de administración con el nombre de su producto. Déjelo en blanco para usar el predeterminado. |
| **Hide Agent Picker** | Desactivado | Cuando está activado, los usuarios no pueden cambiar entre los cinco agentes integrados. El agente actual se fija a lo que se configura como predeterminado en Configuración → General. |
| **Use Site Icon as Chat Avatar** | Desactivado | Reemplaza el icono de IA predeterminado en el encabezado del widget de chat con el icono del sitio de WordPress (establecido en Apariencia → Personalizar → Identidad del sitio). |

### Aplicar Cambios

Haga clic en **Guardar Configuración** después de cambiar cualquier flag. Los cambios surten efecto inmediatamente; no es necesario vaciar la caché ni reactivar el plugin.
