---
title: Gratis AI Agent Instellings
sidebar_position: 22
_i18n_hash: 7b593387e5e7b44903bfd6f0a1ff42ee
---
# Gratis AI Agent Instellings

Die **Instellings → Advanced** skerm in Gratis AI Agent bied administrateur-vlak konfigurasie vir backend-integrasies wat in v1.5.0 bekendgestel is. Hierdie bladsy dokumenteer die velde vir die **Feedback Endpoint** en hul verwagte formaat.

## Toegang tot Instellings

1. Gaan in die WordPress admin na **Gratis AI Agent → Settings**.
2. Klik op die **Advanced** tab.

## Feedback Endpoint Konfigurasie

Die feedback endpoint ontvang POST-versoeke van die AI agent wanneer 'n gebruiker terugvoer indien via die duim-na-knoppie, die auto-prompt banner, of die `/report-issue` commando.

| Veld | Beskrywing |
|---|---|
| **Feedback Endpoint URL** | Die URL wat feedback-indings ontvang as HTTP POST-versoeke met 'n JSON-liggaam. |
| **Feedback API Key** | 'n Bearer token wat in die `Authorization` header van elke feedback-versoek gestuur word. Laat dit leeg indien jou endpoint nie outentisering vereis nie. |

### Verwagte JSON Payload

Jou feedback endpoint moet 'n JSON-liggaam aanvaar met ten minste die volgende velde:

```json
{
  "message_id": "msg_abc123",
  "conversation_id": "conv_xyz789",
  "feedback_text": "Die antwoord was onjuur oor pryse.",
  "triage_category": "factual_error"
}
```

Bykomende velde kan in die payload teenwoordig wees afhangende van die gesprekkonteks.

### `triage_category` Waardes

Die AI triage-laag skakel een van die volgende waardes vir `triage_category` toe voordat dit die payload deurstuur:

| Waarde | Betekenis |
|---|---|
| `factual_error` | Die assistent het onjuiste feitelike inligting verskaf. |
| `unhelpful_answer` | Die antwoord was tegnies korrek maar nie nuttig nie. |
| `inappropriate_content` | Die antwoord het inhoud bevat wat nie aan gebruikers getoon moet word nie. |
| `other` | Die terugvoer het nie by 'n bekende kategorie pas nie. |

### Outentisering

Indien jou endpoint outentisering vereis, stel die **Feedback API Key** veld in met jou bearer token. Die agent stuur:

```
Authorization: Bearer <your-api-key>
```

Indien die **Feedback API Key** veld leeg is, word geen `Authorization` header gestuur nie.

### Deaktivering van Feedbackverzameling

Laat beide die **Feedback Endpoint URL** en **Feedback API Key** velde leeg. Die duim-na-knoppie en die feedback-UI bly vir gebruikers sigbaar, maar indienings word nie na enige eksterne diens deurgestuur nie.

## Brave Search API Key

Ook op die **Advanced** tab, stel die **Brave Search API Key** veld die [Internet Search](../configuration/internet-search) vermoë in.

| Veld | Beskrywing |
|---|---|
| **Brave Search API Key** | Jou API-sleutel van die Brave Search developer dashboard. Vereis om internetsoek in die AI-assistent te aktiveer. |

Die veldlabel sluit 'n klikbare skakel in na die Brave Search API-aanmeldingsblad. Laat dit leeg om internetsoek te deaktiveer.

Sien [Internet Search](../configuration/internet-search) vir die eindgebruiker dokumentasie oor hierdie funksie.

## Funksie-Vlae (Feature Flags)

Ook bekendgestel in v1.9.0, bied die **Settings → Feature Flags** tab omskakelaars vir opsionele funksionaliteit. Elke vlag is óf op of af vir die hele netwerk; daar is tans geen per-site oortreding nie.

### Toegangskontrole-Vlae

| Vlag | Standaard | Beskrywing |
|---|---|---|
| **Restrict to Administrators** | Af | Wanneer geaktiveer, kan slegs gebruikers met die `administrator`-rol die AI Agent chatpaneel oopmaak. Alle ander rolle sien 'n "Kontak jou administrateur" boodskap in plaas. |
| **Restrict to Network Admins** | Af | Wanneer geaktiveer op 'n multisite-netwerk, kan slegs Super Admins die agent gebruik. Individuele site-administrateurs word geblokkeer. Het voorrang op "Restrict to Administrators" indien albei geaktiveer is. |
| **Allow Subscriber Access** | Af | Wanneer geaktiveer, kan gebruikers met die `subscriber`-rol die chat-koppelvlak gebruik, maar is beperk tot slegs-lees vermoë명 (geen plasing of instellingverandering nie). |
| **Disable for Non-Members** | Af | Integreer met Ultimate Multisite lidmaatskapstatus. Wanneer geaktiveer, word die chat vir sites wat nie 'n aktiewe lidmaatskap het nie, verberg. |

### Branding-Vlae

| Vlag | Standaard | Beskrywing |
|---|---|---|
| **Hide "Powered by Gratis AI Agent" Footer** | Af | Verwyder die merkattribusielyn wat onderaan die chat-widget getoon word. Aanbeveel vir white-label uitrol. |
| **Custom Agent Name** | *(blank)* | Vervang die standaard "Gratis AI Agent" label in die chat-kop en admin-menu met jou eie produknaam. Laat dit leeg om die standaard te gebruik. |
| **Hide Agent Picker** | Af | Wanneer geaktiveer, kan gebruikers nie tussen die vyf ingeboude agents skakel nie. Die huidige agent word vasgestel aan wat in Settings → General as standaard gekonfigureer is. |
| **Use Site Icon as Chat Avatar** | Af | Vervang die standaard AI-ikoon in die chat-widget-kop met die WordPress-site-ikoon (gestel onder Appearance → Customize → Site Identity). |

### Maatreggings Toepdien

Klik op **Save Settings** nadat jy enige vlag omgeskakel het. Veranderinge is onmiddellik van krag – daar is geen cache flush of plugin-reaktivering nodig nie.
