---
title: Feedback tal-klijenti u rapport tal-problemi
sidebar_position: 25
_i18n_hash: b8cc1801782ca29dbdcddcf9db34fb48
---
# Feedback tal-Użu u Problemi {#customer-feedback--issue-reporting}

Gratis AI Agent v1.5.0 jiddeja sistema integrat għall-feedback u riport tal-problemi li jippermettix l-utenti finali li segnu risposte mhux utli u riportaw problemi dirett minn l-interface tal-chat. Dan is-sistema inkludi xogħol tal-ġestjoni tal-konsens (consent management), komandu ta riport automatiku, u triage assistiti mill-AI fuq il-backend.

## Botton Tal-Thumbs-Down {#thumbs-down-button}

Kulle messaggio li jinvita minn l-assistenti AI jiddeqi botton **thumbs-down** (👎). Meta l'utenti jiklikom fih, jistgħu segnu risposta bħala mhux utli jew it-tista.

- Il-botton jiddeqi meta jmur għandu qabel kulle messaggio tal-assistenti.
- Meta jiklikom fih, jiftarraq il-**Feedback Consent Modal**.
- Il-feedback jikeljuta mal-thread ta konversazzjoni u il-messaġġ speċifiku.

## Feedback Consent Modal {#feedback-consent-modal}

Meta l'utenti jiklikom fuq botton il-thumbs-down, jiftarraq modal tal-konsens qabel ma jkunx data turgħuta. Il-modal:

- Jispjega x'informazzjoni se tiddir (escerpt ta konversazzjoni, kontekst tal-browser).
- Jistaqsi l-utenti biex jkonferma li jkonsensu biex jgħattu dan id-data.
- Joffri field ta test libur biex l-utenti jisskriv x'għadwa kien il-problema.
- Joffri opzjoni **Cancel** biex jiġi kapat il-modal biex ma jkunx turgħu dati.

Mell ma jkunx hemm konferma esplicita mill-utenti, la jikeljuta feedback.

## Auto-Prompt Feedback Banner {#auto-prompt-feedback-banner}

F'ikkkunt tal-konversazzjoni, l-assistenti jista' jiddeqi **auto-prompt feedback banner** — messaggio li ma jkunx intruzzjoni, jista' jista' jista' jista' jista' jista' jista' jista' jista' jista' jista' jista' jista' jista' jista' jista' jista' jista' jista' jista' jista' jista' jista' jista' jista' jista' jista' jista' jista' jista' jista' jista' jista' jista' jista' jista' jista' jista' jista' jista' jista' jista' jista' jista' jista' jista' jista' jista' jista' jista' jista' jista' jista' jista' jista' jista' jista' jista' jista' jista' jista' jista' jista' jista' jista' jista' jista' jista' jista' jista' jista' jista' jista' jista' jista' jista' jista' jista' jista' jista' jista' jista' jista' jista' jista' jista' jista' jista' jista' jista' jista' jista' jista' jista' jista' jista' jista' jista' jista' jista' jista' jista' jista' jista' jista' jista' jista' jista' jista' jista' jista' jista' jista' jista' jista' jista' jista' jista' jista' jista' jista' jista' jista' jista' jista' jista' jista' jista' jista' jista' jista' jista' jista' jista' jista' jista' jista' jista' jista' jista' jista' jista' jista' jista' jista' jista' jista' jista' jista' jista' jista' jista' jista' jista' jista' jista' jista' jista' jista' jista' jista' jista' jista' jista' jista' jista' jista' jista' jista' jista' jista' jista' jista' jista' jista' jista' jista' jista' jista' jista' jista' jista' jista' jista' jista' jista' jista' jista' jista' jista' jista' jista' jista' jista' jista' jista' jista' jista' jista' jista' jista' jista' jista' jista' jista' jista' jista' jista' jista' jista' jista' jista' jista' jista' jista' jista' jista' jista' jista' jista' jista' jista' jista' jista' jista' jista' jista' jista' jista' jista' jista' jista' jista' jista' jista' jista' jista' jista' jista' jista' j

* TIsħbla l-Modal ta Konzenziment tal Feedback immediat.
* Jippopola l-field ta deskrizzjoni b informazzjoni kontekstualija dwar il-konversazzjoni tal-qiegħed.
* Jista' li l-utenti jiddu id-detalji aggiemmalie qabel ma jgħattu.

Il-command `/report-issue` huwa disponibbli f kull mod ta chat (inline, widget flottant, full-screen).

## AI-Assisted Triage {#report-issue-slash-command}

Il-feedback li jkun msemmit jmur għall filiera tal-triage tal-AI li:

* Kategorizza l-rapport (parrużja fattwali, risposta mhux utli, kontent inadempjatt, ecc.).
* Jiddeqi metadata rilevanti dwar il-konversazzjoni.
* Jwadda is-summary tal-triage għall-**Feedback Endpoint** konfigurat (ara [Settings > Advanced](#settings-advanced)).

Dan jridu l-review manuali b'mod tiegħu minn by-surfu l-istess kwestjonijiet li huma l-piżżi.

## Settings > Advanced {#settings-advanced}

Biex tivveglah il-backend tal-feedback, konfigura l-field ewliem ta qudd ta qudd ta **Gratis AI Agent → Settings → Advanced**:

| Field | Deskrizzjoni |
|---|---|
| **Feedback Endpoint URL** | Il-URL li jista' jirċievi POST requests b feedback payloads (JSON). |
| **Feedback API Key** | Bearer token li juttilqu fil header `Authorization` biex jauthentifika is-submit tal-feedback. |

Aħjar l-field bl-blu biex tivveglah il-kollizzjoni tal-feedback. Button ta feedback individuallin jibqgħu visibbli għall-utenti, iżda is-submit ma jwadda.

:::tip
Il-endpoint tal-feedback għandu jista' jirċievi body JSON b'aħha `message_id`, `conversation_id`, `feedback_text`, u `triage_category`. Ara l-dokumentazzjoni tal-provider tal-endpoint tiegħek għall-schema attaratt.
:::
