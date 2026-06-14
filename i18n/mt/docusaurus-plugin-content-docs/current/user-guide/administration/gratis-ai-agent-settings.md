---
title: Settings tal-AI Agent Gratuiti
sidebar_position: 22
_i18n_hash: 7b593387e5e7b44903bfd6f0a1ff42ee
---
# Impostajs AI Agent Gratis

Il-skrin **Settings → Advanced** fil-Gratis AI Agent jipprovide konfigurazzjoni tal-administrator għall l-integrazzjonijiet ta' backend li tiddir b'versjoni v1.5.0. Hija dawk is-sigħa li jidokumenta l-field **Feedback Endpoint** u l-format attaratt.

## Aċċess għall-Settings

1. F'WordPress admin, għandu tmur għal **Gratis AI Agent → Settings**.
2. Klikka fuq l-tab **Advanced**.

## Konfigurazzjoni tal-Feedback Endpoint

Il-feedback endpoint jista' jista' jiffajti request POST mill-AI agent ogni volta li l-utenti jgħattu feedback b'attra w-button ta' thumbs-down, il-auto-prompt banner, jew il-komandu `/report-issue`.

| Field | Descrizzjoni |
|---|---|
| **Feedback Endpoint URL** | Il-URL li jiffajti l-feedback submissions b'request HTTP POST مع body JSON. |
| **Feedback API Key** | Bearer token li juttilja fil-header `Authorization` ta' ogni request ta feedback. Aħjar blaw se jgħid blaw jekk il-endpoint tiegħek ma għandux autentikazzjoni. |

### Payload JSON Attaratt

Il-feedback endpoint tiegħek għandu jipprovvidi body JSON b'aħha l-field ewlenin:

```json
{
  "message_id": "msg_abc123",
  "conversation_id": "conv_xyz789",
  "feedback_text": "Il-risposta kienet sħiħa dwar il-prezzijiet.",
  "triage_category": "factual_error"
}
```

Field ewlenin aktar jista' jkunu f'payload b'dependenza mill-kontekst tal-konversazzjoni.

### Valuri ta `triage_category`

Il-layer ta triage tal-AI jipprovvide waħda mill-valuri ewlenin li jgħid għal `triage_category` qabel ma jiffajti l-payload:

| Valur | Signifika |
|---|---|
| `factual_error` | L-assistenti fornì informazzjoni fattwali sħiħa. |
| `unhelpful_answer` | Ir-risposta kienet tekniku korretta iżda ma għandha tkun uffi. |
| `inappropriate_content` | Ir-risposta kienet kuntejnent li ma jista' jiġi mostru mill-utenti. |
| `other` | Il-feedback ma kienx jittlaq mal-kategoria magħrufija. |

### Autentikazzjoni

אם l-endpoint tiegħek jidreq autentikazzjoni, setti l-field **Feedback API Key** għall-bearer token tiegħek. L-agent jiffaċċja:

```
Authorization: Bearer <your-api-key>
```

Jekk il-field **Feedback API Key** huwa vuṭi, ma tiffaċċja xemx header `Authorization`.

### Disabilitjar tal-Kollezzjoni ta Feedback

Aħjar l-field **Feedback Endpoint URL** u **Feedback API Key** vuṭi. Il-button ta thumbs-down u l-UI ta feedback jifilħu b'aħha lil l-utenti, iżda il-submission ma tiffaċċja għal xogħol eksternal.

## Brave Search API Key

Mhumiex fl-tab **Advanced**, il-field **Brave Search API Key** jfilabbilizzja l-funzjonalità ta [Internet Search](../configuration/internet-search).

| Field | Deskrizzjoni |
|---|---|
| **Brave Search API Key** | Il-API key tiegħek mill-dashboard tal-developer ta Brave Search. Necessar għall-attivazzjoni tal-internet search fil-AI assistant. |

Il-etichet tagħha jinkludi link ankabbli għal missistenza ta Brave Search API. Aħjar vuṭi biex tixgħel l-internet search.

Vidi [Internet Search](../configuration/internet-search) għall-dokumentazzjoni tal-utenti dwar dan il-feature.

## Feature Flags

Mhumiex introdutt fatt fil-v1.9.0, il-tab **Settings → Feature Flags** joff toggle switches għall-funzjonalità opzjonali. Kulle flag huwa jew attivat jew disabilitat fuq l-netwerk; ma hemm override per siti f'dan l-istagħħar.

### Aċċess għall-Feature Flags

1. F'l-admin ta WordPress, għandi **Gratis AI Agent → Settings**.
2. Klikka fuq l-tab **Feature Flags**.

### Feature Flags tal-Kontroll tal-Aċċess

| Flag | Default | Descripċja |
|---|---|---|
| **Restrict to Administrators** | Off | Meta aktivar, meta jkun attivar, l-utenti b'roll `administrator` huma l-uni li jistgħu aġġustjaw il pannell chat tal-AI Agent. Kull l-altri rolli jorru "Kontatt il-appressali tatk". |
| **Restrict to Network Admins** | Off | Meta aktivar fuq network multisite, meta jkun attivar, l-Super Admins huma l-uni li jistgħu jikelmu l'agent. L-admins tal-site individuallin huma bloccati. Jista'rriq il-priorità għal "Restrict to Administrators" meta kien aktivar bl-oħra. |
| **Allow Subscriber Access** | Off | Meta aktivar, l-utenti b'roll `subscriber` jistgħu jikelmu l-interface chat iżda huma limitati għall-abilità ta qedra (m'għandhomx biex jagħmlu post jew jawmor xi impost. |
| **Disable for Non-Members** | Off | Jistabbilixxi mal-status tal-membership tal-Ultimate Multisite. Meta jkun aktivar, il-chat jkun nascosto għals siti li ma għandhomx membership attivo. |

### Branding Flags

| Flag | Default | Descripċja |
|---|---|---|
| **Hide "Powered by Gratis AI Agent" Footer** | Off | Jixejx l-linea ta branding li tistabbilixxi fl-post ta' fondo tal-chat widget. Raccomandat għall-deployments b'white-label. |
| **Custom Agent Name** | *(blank)* | Jistellix il-label default "Gratis AI Agent" f'header tal-chat u menu tal-admin b'isem proprju tiegħek. Aħjar it-blank biex tista' tista' l-default. |
| **Hide Agent Picker** | Off | Meta aktivar, l-utenti ma jistgħux jikelmu bejn il-agent għall-built-in. L-agent tal-qedra huwa fixxat għal meta huwa konfigurat bħala default f Settings → General. |
| **Use Site Icon as Chat Avatar** | Off | Jistellix l-ikon tal-site tal-WordPress fl-header tal-chat widget b'mod il-default tal-AI icon (jistabbilixxi taħt Appearance → Customize → Site Identity). |

### Applikazzjoni tal-Изżguri

Iċ클ik fuq **Save Settings** wara li tġib aktivar qabel jeddika flag. Il-cambjamenti jikelu l-effett immediat – ma għandux flush ta cache jew riattivazzjoni tal-plugin.
