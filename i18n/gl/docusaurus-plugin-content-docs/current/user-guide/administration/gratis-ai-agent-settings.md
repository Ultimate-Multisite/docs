---
title: Configuración de Gratis AI Agent
sidebar_position: 22
_i18n_hash: 06c2f7052f5b1a44d525d8446a5403a7
---
# Configuración de Gratis AI Agent

A pantalla **Configuración → Avanzado** en Gratis AI Agent proporciona configuración de nivel administrador para integracións de backend. Esta páxina documenta o reenvío de feedback, as claves de provedores de busca, a configuración do servizo Superdav xestionado, os controis de Google Calendar, a configuración de SMS de TextBee e as marcas de funcionalidade para toda a rede.

## Acceder á configuración {#accessing-settings}

1. No administrador de WordPress, vai a **Gratis AI Agent → Configuración**.
2. Fai clic na lapela **Avanzado**.

## Configuración do endpoint de feedback {#feedback-endpoint-configuration}

O endpoint de feedback recibe solicitudes POST do AI agent sempre que un usuario envía feedback mediante o botón de polgar cara abaixo, o banner de aviso automático ou o comando `/report-issue`.

| Campo | Descrición |
|---|---|
| **URL do endpoint de feedback** | O URL que recibe os envíos de feedback como solicitudes HTTP POST cun corpo JSON. |
| **Feedback API Key** | Un bearer token enviado no `Authorization` header de cada solicitude de feedback. Déixao en branco se o teu endpoint non require autenticación. |

### Payload JSON esperado {#expected-json-payload}

O teu endpoint de feedback debe aceptar un corpo JSON con polo menos os seguintes campos:

```json
{
  "message_id": "msg_abc123",
  "conversation_id": "conv_xyz789",
  "feedback_text": "The answer was incorrect about pricing.",
  "triage_category": "factual_error"
}
```

Poden estar presentes campos adicionais no payload dependendo do contexto da conversa.

### Valores de `triage_category` {#triagecategory-values}

A capa de triaxe de AI asigna un dos seguintes valores a `triage_category` antes de reenviar o payload:

| Valor | Significado |
|---|---|
| `factual_error` | O asistente proporcionou información factual incorrecta. |
| `unhelpful_answer` | A resposta era tecnicamente correcta, pero non útil. |
| `inappropriate_content` | A resposta contiña contido que non debería mostrarse aos usuarios. |
| `other` | O feedback non coincidiu cunha categoría coñecida. |

### Autenticación {#authentication}

Se o teu endpoint require autenticación, define o campo **Feedback API Key** co teu bearer token. O axente envía:

```
Authorization: Bearer <your-api-key>
```

Se o campo **Feedback API Key** está baleiro, non se envía ningún `Authorization` header.

### Desactivar a recollida de feedback {#disabling-feedback-collection}

Deixa en branco os campos **URL do endpoint de feedback** e **Feedback API Key**. O botón de polgar cara abaixo e a interface de feedback seguen visibles para os usuarios, pero os envíos non se reenvían a ningún servizo externo.

## Brave Search API Key {#brave-search-api-key}

Tamén na lapela **Avanzado**, o campo **Brave Search API Key** activa a capacidade de [Busca en internet](../configuration/internet-search).

| Campo | Descrición |
|---|---|
| **Brave Search API Key** | A túa clave de API do dashboard de desenvolvedor de Brave Search. Necesaria para activar a busca en internet no asistente de AI. |

A etiqueta do campo inclúe unha ligazón premible á páxina de rexistro da API de Brave Search. Déixao en branco para desactivar a busca en internet.

Consulta [Busca en internet](../configuration/internet-search) para a documentación de usuario final sobre esta funcionalidade.

## Servizo Superdav xestionado {#managed-superdav-service}

Superdav AI Agent v1.18.0 engade endpoints de servizo Superdav xestionado e aprovisionamento automático de conexións para sitios compatibles. Usa estes controis cando o teu sitio deba conectarse ao provedor aloxado en lugar dun endpoint de servizo configurado manualmente.

| Campo | Descrición |
|---|---|
| **Servizo Superdav xestionado** | Activa a conexión co servizo Superdav aloxado para sitios compatibles. |
| **Aprovisionar conexión** | Inicia o aprovisionamento automático de endpoint e credenciais. Usa isto despois de confirmar que o sitio debe usar o provedor xestionado. |
| **Endpoint do servizo / Estado da conexión** | Mostra o endpoint actual ou o estado da conexión despois do aprovisionamento. |

Despois do aprovisionamento, garda a configuración e verifica o estado da conexión antes de confiar en fluxos de traballo de servizo xestionado. Se o aprovisionamento falla, revisa a guía de reintento mostrada e confirma que o sitio ten permiso para usar o provedor aloxado.

## Configuración de Google Calendar {#google-calendar-configuration}

Cando as funcionalidades de calendario de Superdav AI Agent v1.18.0 están activadas, o axente pode ler calendarios configurados e detalles de eventos. As ferramentas de calendario están orientadas á lectura e son útiles para recordatorios conscientes da axenda, seguimento de asistentes e correspondencia de contactos.

| Campo | Descrición |
|---|---|
| **Credenciais de Google Calendar** | Garda as credenciais ou a conexión de token necesarias para ler datos do calendario. |
| **Selección de calendario** | Limita que calendarios configurados pode inspeccionar o axente. |
| **Estado da conexión do calendario** | Confirma se as credenciais actuais poden ler calendarios e eventos. |

Mantén as credenciais de calendario limitadas aos calendarios que o axente necesita. Volve conectar ou rota as credenciais se o estado indica un token caducado.

## Notificacións SMS de TextBee {#textbee-sms-notifications}

Superdav AI Agent v1.18.0 engade TextBee como provedor de SMS para fluxos de traballo de notificación configurados. As notificacións SMS deberían combinarse con portas de aprobación humana para mensaxes sensibles ou dirixidas a usuarios.

| Campo | Descrición |
|---|---|
| **Clave de API de TextBee** | Autentica as solicitudes ao provedor de SMS TextBee. |
| **Dispositivo / Remitente de TextBee** | Selecciona o remitente ou dispositivo de TextBee usado para mensaxes saíntes, cando o provedor o require. |
| **Notificacións SMS activadas** | Permite que os fluxos de traballo aprobados envíen notificacións por mensaxe de texto. Déixao desactivado para impedir envíos de SMS. |

Envía unha mensaxe de proba só a un número propiedade dun administrador e, a continuación, confirma o comportamento da porta de aprobación antes de activar recordatorios programados ou dirixidos a asistentes.

## Marcas de funcionalidade {#feature-flags}

Tamén introducida na v1.9.0, a lapela **Configuración → Marcas de funcionalidade** proporciona interruptores de activación para funcionalidades opcionais. Cada marca está activada ou desactivada para toda a rede; neste momento non hai anulación por sitio.

### Acceder ás marcas de funcionalidade {#accessing-feature-flags}

1. No administrador de WordPress, vai a **Gratis AI Agent → Configuración**.
2. Fai clic na lapela **Marcas de funcionalidade**.

### Marcas de control de acceso {#access-control-flags}

| Bandeira | Predeterminado | Descrición |
|---|---|---|
| **Restrinxir a administradores** | Desactivado | Cando está activado, só os usuarios co rol `administrator` poden abrir o panel de chat do AI Agent. Todos os demais roles ven no seu lugar unha mensaxe de "Contacta co teu administrador". |
| **Restrinxir a Network Admins** | Desactivado | Cando está activado nunha rede multisite, só os Super Admins poden usar o axente. Os administradores de sitios individuais quedan bloqueados. Ten prioridade sobre "Restrinxir a administradores" se ambas opcións están activadas. |
| **Permitir acceso a subscritores** | Desactivado | Cando está activado, os usuarios co rol `subscriber` poden usar a interface de chat, pero están limitados a capacidades de só lectura (sen creación de entradas nin cambios de configuración). |
| **Desactivar para non membros** | Desactivado | Intégrase co estado de adhesión de Ultimate Multisite. Cando está activado, o chat ocúltase para os sitios que non teñen unha adhesión activa. |

### Bandeiras de marca {#branding-flags}

| Bandeira | Predeterminado | Descrición |
|---|---|---|
| **Ocultar o pé "Powered by Gratis AI Agent"** | Desactivado | Elimina a liña de atribución da marca que se mostra na parte inferior do widget de chat. Recomendado para despregamentos de marca branca. |
| **Nome de axente personalizado** | *(en branco)* | Substitúe a etiqueta predeterminada "Gratis AI Agent" na cabeceira do chat e no menú de administración polo nome do teu propio produto. Déixao en branco para usar o predeterminado. |
| **Ocultar selector de axente** | Desactivado | Cando está activado, os usuarios non poden alternar entre os cinco axentes integrados. O axente actual queda fixado ao que estea configurado como predeterminado en Configuración → Xeral. |
| **Usar a icona do sitio como avatar do chat** | Desactivado | Substitúe a icona de AI predeterminada na cabeceira do widget de chat pola icona do sitio WordPress (definida en Aparencia → Personalizar → Identidade do sitio). |

### Bandeiras de seguridade da automatización {#automation-safety-flags}

Superdav AI Agent v1.18.0 introduce portas de aprobación humana e rexistros de recordatorios para execucións de automatización máis seguras. Estes controis poden aparecer nas bandeiras de funcións ou na configuración avanzada de automatización, segundo o paquete instalado.

| Bandeira | Predeterminado | Descrición |
|---|---|---|
| **Requirir aprobación humana** | Recomendado activado | Pausa as automatizacións sensibles ata que un usuario autorizado revise e confirme a acción proposta. |
| **Deduplicación de recordatorios** | Activado | Rexistra os recordatorios enviados para que os reintentos ou as execucións programadas non envíen notificacións duplicadas. |
| **Activar ferramentas de calendario** | Desactivado ata que se configure | Permite ao axente ler calendarios e eventos de Google configurados. |
| **Activar notificacións SMS** | Desactivado ata que se configure | Permite aos fluxos de traballo aprobados enviar notificacións SMS de TextBee despois de gardar as credenciais. |

### Aplicación de cambios {#applying-changes}

Fai clic en **Gardar configuración** despois de activar ou desactivar calquera bandeira. Os cambios teñen efecto inmediatamente: non é necesario baleirar a caché nin reactivar o plugin.
