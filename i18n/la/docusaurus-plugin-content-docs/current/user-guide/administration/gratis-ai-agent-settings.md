---
title: Imago AI Agent Configuratio Gratuita
sidebar_position: 22
_i18n_hash: 7b593387e5e7b44903bfd6f0a1ff42ee
---
# Gratis AI Agent Impugna Settings

La schermata **Impostazioni → Avanzate** in Gratis AI Agent offre la configurazione di livello amministrativo per le integrazioni di backend introdotte nella v1.5.0. Questa pagina documenta i campi del **Feedback Endpoint** e il loro formato atteso.

## Accesso alle Impostazioni

1. Nell'admin di WordPress, vai su **Gratis AI Agent → Impostazioni**.
2. Clicca sulla scheda **Avanzate**.

## Configurazione Feedback Endpoint

Il feedback endpoint riceve richieste POST dall'AI agent ogni volta che un utente invia un feedback tramite il pulsante pollice in giù, la barra auto-prompt o il comando `/report-issue`.

| Campo | Descrizione |
|---|---|
| **Feedback Endpoint URL** | L'URL che riceve le invii di feedback come richieste HTTP POST con un corpo JSON. |
| **Feedback API Key** | Un bearer token inviato nell'header `Authorization` di ogni richiesta di feedback. Lascia vuoto se il tuo endpoint non richiede autenticazione. |

### Payload JSON Atteso

Il tuo feedback endpoint deve accettare un corpo JSON con almeno i seguenti campi:

```json
{
  "message_id": "msg_abc123",
  "conversation_id": "conv_xyz789",
  "feedback_text": "La risposta era errata riguardo ai prezzi.",
  "triage_category": "factual_error"
}
```

Possono essere presenti campi aggiuntivi nel payload a seconda del contesto della conversazione.

### Valori di `triage_category`

Lo strato di triage dell'AI assegna uno dei seguenti valori a `triage_category` prima di inoltrare il payload:

| Valore | Significato |
|---|---|
| `factual_error` | L'assistente ha fornito informazioni fattuali errate. |
| `unhelpful_answer` | La risposta era tecnicamente corretta ma non utile. |
| `inappropriate_content` | La risposta conteneva contenuti che non dovrebbero essere mostrati agli utenti. |
| `other` | Il feedback non corrisponde a una categoria nota. |

### Autenticazione

Si tu punto final requiere autenticación, pon el campo **Feedback API Key** con tu token de bearer. El agente envía:

```
Authorization: Bearer <tu-api-key>
```

Si el campo **Feedback API Key** está vacío, no se envía ninguna cabecera `Authorization`.

### Deshabilitar la Recolección de Feedback

Deja tanto los campos **Feedback Endpoint URL** como **Feedback API Key** en blanco. El botón de pulgar hacia abajo y la interfaz de feedback siguen siendo visibles para los usuarios, pero las envíos no se reenvían a ningún servicio externo.

## Brave Search API Key

También en la pestaña **Advanced**, el campo **Brave Search API Key** habilita la capacidad de [Internet Search](../configuration/internet-search).

| Campo | Descripción |
|---|---|
| **Brave Search API Key** | Tu clave de API desde el panel de desarrollador de Brave Search. Requerida para habilitar la búsqueda en internet en el asistente de IA. |

La etiqueta del campo incluye un enlace clicable a la página de registro de la API de Brave Search. Déjalo en blanco para deshabilitar la búsqueda en internet.

Consulta [Internet Search](../configuration/internet-search) para la documentación del usuario final sobre esta característica.

## Feature Flags (Banderas de Funcionalidad)

También introducido en v1.9.0, la pestaña **Settings → Feature Flags** proporciona interruptores para funcionalidades opcionales. Cada bandera está habilitada o deshabilitada a nivel de red; por ahora no hay anulación por sitio.

### Acceder a las Feature Flags

1. En el administrador de WordPress, ve a **Gratis AI Agent → Settings**.
2. Haz clic en la pestaña **Feature Flags**.

### Feature Flags de Control de Acceso

| Bandera | Default | Descripciós |
|---|---|---|
| **Restringere ad Administratorum** | Off | Cum activum est, solum utentium cum ruolo `administrator` possunt aperire panel chatu AI Agent. Omnes alii ruoli vident nuntium "Contacta tuum administratorum". |
| **Restringere ad Network Admins** | Off | Cum activum in network multisite, solum Super Admini possunt utentur agentem. Individuali admini situm sunt bloccati. Hoc habet praeferendam super "Restrict to Administrators" si duo activa sint. |
| **Permittere Access Subscriptorum** | Off | Cum activum est, utentia cum ruolo `subscriber` possunt uticium interfaciei chatu sed ad potestates lecti solum sunt limitatae (sine creationem postuum aut mutationibus parametrorum). |
| **Disponere pro Non-Membres** | Off | Integrare secum status membrorum Ultimate Multisite. Cum activum est, chat est occultus sitis quae non habent membrinium activum. |

### Bandera Brandium (Branding Flags)

| Bandera | Default | Descripciós |
|---|---|---|
| **Occultare Footer "Powered by Gratis AI Agent"** | Off | Removet lineam attributionem brandendi ostendendam in fundamentis widget chatu. Recomandatum ad deployment white-label. |
| **Nomen Agentis Custom** | *(vacuus)* | Substituit label default "Gratis AI Agent" in capite chatu et menu admin tuo nomen producti. Vacuus reliquit ut defaultum utiatur. |
| **Occultare Selector Agentis** | Off | Cum activum est, utentia non potest inter agentes quinque integratos mutare. Agentis currentis est fixus in quod quolibet est configuratum ut defaultum in Settings → General. |
| **Usare Iconam Sitii ut Avatar Chatu** | Off | Substituit iconem AI default in capite widget chatu per iconem sitii WordPress (configurata sub Appearance → Customize → Site Identity). |

### Applicatio Mutatorum

Clicca in **Save Settings** post toggling quamvis banderam. Mutatio immediata effectus habet — nullus flush cache aut reactivatio pluginis requiritur.
