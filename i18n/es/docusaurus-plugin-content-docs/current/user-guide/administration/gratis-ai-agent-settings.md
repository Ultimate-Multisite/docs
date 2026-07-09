---
title: Configuración de Gratis AI Agent
sidebar_position: 22
_i18n_hash: 06c2f7052f5b1a44d525d8446a5403a7
---
# Configuración de Gratis AI Agent {#gratis-ai-agent-settings}

La pantalla **Settings → Advanced** en Gratis AI Agent proporciona configuración de nivel de administrador para integraciones de backend. Esta página documenta el reenvío de feedback, las claves de proveedores de búsqueda, la configuración del servicio gestionado Superdav, los controles de Google Calendar, la configuración de SMS de TextBee y los feature flags para toda la red.

## Acceder a Settings {#accessing-settings}

1. En el administrador de WordPress, ve a **Gratis AI Agent → Settings**.
2. Haz clic en la pestaña **Advanced**.

## Configuración del endpoint de feedback {#feedback-endpoint-configuration}

El endpoint de feedback recibe solicitudes POST del AI agent siempre que un usuario envía feedback mediante el botón de pulgar hacia abajo, el banner de aviso automático o el comando `/report-issue`.

| Campo | Descripción |
|---|---|
| **Feedback Endpoint URL** | La URL que recibe envíos de feedback como solicitudes HTTP POST con un cuerpo JSON. |
| **Feedback API Key** | Un bearer token enviado en el `Authorization` header de cada solicitud de feedback. Déjalo en blanco si tu endpoint no requiere autenticación. |

### Payload JSON esperado {#expected-json-payload}

Tu endpoint de feedback debe aceptar un cuerpo JSON con al menos los siguientes campos:

```json
{
  "message_id": "msg_abc123",
  "conversation_id": "conv_xyz789",
  "feedback_text": "The answer was incorrect about pricing.",
  "triage_category": "factual_error"
}
```

Pueden estar presentes campos adicionales en el payload según el contexto de la conversación.

### Valores de `triage_category` {#triagecategory-values}

La capa de clasificación de AI asigna uno de los siguientes valores a `triage_category` antes de reenviar el payload:

| Valor | Significado |
|---|---|
| `factual_error` | El asistente proporcionó información factual incorrecta. |
| `unhelpful_answer` | La respuesta era técnicamente correcta, pero no útil. |
| `inappropriate_content` | La respuesta contenía contenido que no debería mostrarse a los usuarios. |
| `other` | El feedback no coincidió con una categoría conocida. |

### Autenticación {#authentication}

Si tu endpoint requiere autenticación, establece el campo **Feedback API Key** con tu bearer token. El agent envía:

```
Authorization: Bearer <your-api-key>
```

Si el campo **Feedback API Key** está vacío, no se envía ningún `Authorization` header.

### Desactivar la recopilación de feedback {#disabling-feedback-collection}

Deja en blanco los campos **Feedback Endpoint URL** y **Feedback API Key**. El botón de pulgar hacia abajo y la UI de feedback permanecen visibles para los usuarios, pero los envíos no se reenvían a ningún servicio externo.

## Brave Search API Key {#brave-search-api-key}

También en la pestaña **Advanced**, el campo **Brave Search API Key** habilita la capacidad [Búsqueda en Internet](../configuration/internet-search).

| Campo | Descripción |
|---|---|
| **Brave Search API Key** | Tu clave de API del dashboard de desarrollador de Brave Search. Obligatoria para habilitar la búsqueda en Internet en el asistente de AI. |

La etiqueta del campo incluye un enlace clicable a la página de registro de la API de Brave Search. Déjalo en blanco para desactivar la búsqueda en Internet.

Consulta [Búsqueda en Internet](../configuration/internet-search) para ver la documentación de usuario final sobre esta función.

## Servicio gestionado Superdav {#managed-superdav-service}

Superdav AI Agent v1.18.0 añade endpoints de servicio gestionado Superdav y aprovisionamiento automático de conexión para sitios compatibles. Usa estos controles cuando tu sitio deba conectarse al proveedor alojado en lugar de a un endpoint de servicio configurado manualmente.

| Campo | Descripción |
|---|---|
| **Managed Superdav Service** | Habilita la conexión al servicio Superdav alojado para sitios compatibles. |
| **Provision Connection** | Inicia el aprovisionamiento automático de endpoint y credenciales. Usa esto después de confirmar que el sitio debe usar el proveedor gestionado. |
| **Service Endpoint / Connection Status** | Muestra el endpoint actual o el estado de conexión después del aprovisionamiento. |

Después del aprovisionamiento, guarda la configuración y verifica el estado de la conexión antes de depender de flujos de trabajo de servicio gestionado. Si el aprovisionamiento falla, revisa las indicaciones de reintento mostradas y confirma que el sitio tenga permiso para usar el proveedor alojado.

## Configuración de Google Calendar {#google-calendar-configuration}

Cuando las funciones de calendario de Superdav AI Agent v1.18.0 están habilitadas, el agent puede leer calendarios configurados y detalles de eventos. Las herramientas de calendario están orientadas a lectura y son útiles para recordatorios conscientes del horario, seguimiento de asistentes y coincidencia de contactos.

| Campo | Descripción |
|---|---|
| **Google Calendar Credentials** | Almacena las credenciales o la conexión de token requerida para leer datos del calendario. |
| **Calendar Selection** | Limita qué calendarios configurados puede inspeccionar el agent. |
| **Calendar Connection Status** | Confirma si las credenciales actuales pueden leer calendarios y eventos. |

Mantén las credenciales de calendario limitadas a los calendarios que el agent necesita. Vuelve a conectar o rota las credenciales si el estado indica un token caducado.

## Notificaciones SMS de TextBee {#textbee-sms-notifications}

Superdav AI Agent v1.18.0 añade TextBee como proveedor de SMS para flujos de trabajo de notificación configurados. Las notificaciones SMS deben combinarse con puertas de aprobación humana para mensajes sensibles o dirigidos a usuarios.

| Campo | Descripción |
|---|---|
| **TextBee API Key** | Autentica solicitudes al proveedor de SMS TextBee. |
| **TextBee Device / Sender** | Selecciona el remitente o dispositivo de TextBee usado para mensajes salientes, cuando el proveedor lo requiere. |
| **SMS Notifications Enabled** | Permite que los flujos de trabajo aprobados envíen notificaciones por mensaje de texto. Déjalo desactivado para impedir envíos de SMS. |

Envía un mensaje de prueba solo a un número propiedad de un administrador y luego confirma el comportamiento de la puerta de aprobación antes de habilitar recordatorios programados o dirigidos a asistentes.

## Feature Flags {#feature-flags}

También introducida en v1.9.0, la pestaña **Settings → Feature Flags** proporciona interruptores para funcionalidad opcional. Cada flag está habilitado o deshabilitado en toda la red; actualmente no hay anulación por sitio.

### Acceder a Feature Flags {#accessing-feature-flags}

1. En el administrador de WordPress, ve a **Gratis AI Agent → Settings**.
2. Haz clic en la pestaña **Feature Flags**.

### Flags de control de acceso {#access-control-flags}

| Indicador | Predeterminado | Descripción |
|---|---|---|
| **Restringir a administradores** | Desactivado | Cuando está activado, solo los usuarios con el rol `administrator` pueden abrir el panel de chat del AI Agent. Todos los demás roles ven en su lugar un mensaje de "Contacta con tu administrador". |
| **Restringir a Network Admins** | Desactivado | Cuando está activado en una red multisitio, solo los Super Admins pueden usar el agente. Los administradores de sitios individuales quedan bloqueados. Tiene prioridad sobre "Restringir a administradores" si ambos están activados. |
| **Permitir acceso a suscriptores** | Desactivado | Cuando está activado, los usuarios con el rol `subscriber` pueden usar la interfaz de chat, pero están limitados a capacidades de solo lectura (sin creación de entradas ni cambios de ajustes). |
| **Desactivar para no miembros** | Desactivado | Se integra con el estado de membresía de Ultimate Multisite. Cuando está activado, el chat se oculta para los sitios que no tienen una membresía activa. |

### Indicadores de marca {#branding-flags}

| Indicador | Predeterminado | Descripción |
|---|---|---|
| **Ocultar el pie de página "Powered by Gratis AI Agent"** | Desactivado | Elimina la línea de atribución de marca que se muestra en la parte inferior del widget de chat. Recomendado para implementaciones de marca blanca. |
| **Nombre personalizado del agente** | *(en blanco)* | Sustituye la etiqueta predeterminada "Gratis AI Agent" en el encabezado del chat y el menú de administración por el nombre de tu propio producto. Déjalo en blanco para usar el valor predeterminado. |
| **Ocultar selector de agente** | Desactivado | Cuando está activado, los usuarios no pueden cambiar entre los cinco agentes integrados. El agente actual queda fijado a lo que esté configurado como predeterminado en Ajustes → General. |
| **Usar icono del sitio como avatar del chat** | Desactivado | Sustituye el icono de AI predeterminado en el encabezado del widget de chat por el icono del sitio de WordPress (configurado en Apariencia → Personalizar → Identidad del sitio). |

### Indicadores de seguridad de automatización {#automation-safety-flags}

Superdav AI Agent v1.18.0 introduce puertas de aprobación humana y registros de recordatorios para ejecuciones de automatización más seguras. Estos controles pueden aparecer en los indicadores de funciones o en los ajustes avanzados de automatización, según el paquete instalado.

| Indicador | Predeterminado | Descripción |
|---|---|---|
| **Requerir aprobación humana** | Recomendado activado | Pausa las automatizaciones sensibles hasta que un usuario autorizado revise y confirme la acción propuesta. |
| **Deduplicación de recordatorios** | Activado | Registra los recordatorios enviados para que los reintentos o las ejecuciones programadas no envíen notificaciones duplicadas. |
| **Activar herramientas de calendario** | Desactivado hasta que se configure | Permite al agente leer calendarios y eventos de Google configurados. |
| **Activar notificaciones SMS** | Desactivado hasta que se configure | Permite que los flujos de trabajo aprobados envíen notificaciones SMS de TextBee después de guardar las credenciales. |

### Aplicar cambios {#applying-changes}

Haz clic en **Guardar ajustes** después de cambiar cualquier indicador. Los cambios surten efecto inmediatamente: no se requiere vaciar la caché ni reactivar el plugin.
