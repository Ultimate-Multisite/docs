---
title: Kliendifeedback ja probleemide raportimine
sidebar_position: 25
_i18n_hash: b8cc1801782ca29dbdcddcf9db34fb48
---
# Klientide annused ja probleemide raportimine

Gratis AI Agent v1.5.0 on lisatud sisemine süsteem, mis võimaldab kasutajatel endiselt esitada tagasiannutusi ja raportida probleeme otseselt kesksechatina. See süsteem hõlmab nõusoleku haldamist, automaatset raportimendist ja AI-assistitud triagimist backendi tasemel.

## Peale-tagi nupp (Thumbs-Down Button) {#thumbs-down-button}

AI-assistentil saadud iga sõnumi kõrval on näha **peale-tagi** (👎) nupp. Kui kasutaja seda klõpsab, saab ta märida vastust ebavastuna või väärjana.

- Nupp ilmub hoveri käigus iga assistentisõnumi kõrvale.
- Klõpsamine avab **Tagasiannutuse nõusoleku modaali** (Feedback Consent Modal).
- Tagasiannutus on seotud kesksekonniga ja konkreetse sõnumiga.

## Tagasiannutuse nõusoleku modaal (Feedback Consent Modal) {#feedback-consent-modal}

Kui kasutaja klõpsab peale-tagi nuppu, ilmub enne seda, kui märgistatakse edastatud infot. Modaali:

- Selgitab, millist teavet kogutakse (konversatsiooni üte, brauseri kontekst).
- Küsib kasutajat kinnitust selle kohta, et ta nõustub selle andmete jagamiseega.
- Pakub vaba tekstikaviat, mille abil kasutaja saab kirjeldada, mis käis vales.
- Pakub **Tühistus** (Cancel) võimaluse, ilma esitamata seda.

Tagasiannutusi ei registreeru enne kui kasutaja kinnitab seda otseselt.

## Automaatne tagasiannutusbanneri (Auto-Prompt Feedback Banner) {#auto-prompt-feedback-banner}

Konversatsiooni lõpule jäädes võib assistent näidata **automaatset tagasiannutuse bannerit** – see on mittehäirelik sõnum, mis küsib, kas sessioon oli kasulik.

See banner ilmub automaatselt konversatsiooni pikkuse ja tulemuse algoritmide põhjal. See linkib sama tagasiannutusvoolu nagu peale-tagi nupp. Kasutajad võivad bannerit tühistada ilma tagasiannutust antamata.

## /report-issue slash command {#report-issue-slash-command}

Kasutajad võivad tagasiannutusvoolu käivitada otseselt kirjutades chatikku `/report-issue`. See käsk:

Avahetusvaldkon (Feedback Consent Modal) avatakse kohe.
Kirjeldusvälja täidetakse konteksti selle kohta, mis on tekkiv jutust.
Käitlejad saavad lisate üksikasjuid esitamiseks enne esitamist.

`/report-issue` käsk on saadaval kõigis jutustest (inline, lühikese väljakit, täieliku ekraan).

## AI-põhine prioriteetide seadmine (AI-Assisted Triage) {#ai-assisted-triage}

Esitatud tagastamine suunatakse AI-prioriteetide küsimusele, mis:

- Klassifitseerib raporti (faktilise viga, ebavõtlik vastus, ebatähtväärne sisu jne).
- Lisab seotud jutustest metadato.
- Jookseb prioriteetide kokkuvõtte konfigurieritud **Feedback Endpoint**ile (vaata [Settings > Advanced](#settings-advanced)).

See vähendab manuaalse ülevaate aega, esitamaks kõige kriitilisemad probleemid esimesena.

## Settings > Advanced {#settings-advanced}

Tagastamine tagasiendiku aktiveerimiseks konfigurige järgmised väljad **Gratis AI Agent → Settings → Advanced** all:

| Välja | Kirjeldus |
|---|---|
| **Feedback Endpoint URL** | URL, mis saab POST-vaateid (JSON) tagastamine. |
| **Feedback API Key** | Bearer token, mida kasutatakse `Authorization` headeris tagastamise autentimiseks. |

Jätke mõlemad väljad tühjaks, et lülitada tagastamise kogumine välja. Individuaalsed tagastamise nuppud jäävad kasutajatele nähtavaks, kuid esitamised ei jookse.

:::tip
Tagastamine endpoint peab olema valmis JSON-tüduga, mis sisaldab vähemalt `message_id`, `conversation_id`, `feedback_text` ja `triage_category` väljad. Vaata oma endpointi pakkuja dokumentatsiooni saadud skema kohta.
