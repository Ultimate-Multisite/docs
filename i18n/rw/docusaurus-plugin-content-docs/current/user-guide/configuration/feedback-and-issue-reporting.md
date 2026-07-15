---
title: Urugendo rwa Umwujiza n'Ukurikirana Icyemezo
sidebar_position: 25
_i18n_hash: b8cc1801782ca29dbdcddcf9db34fb48
---
# Umuco ya Abantu n'Ubutumwa bishwe

Gratis AI Agent v1.5.0 irashobora kugufasha abantu kubwira ubutumwa n'ibintu byiza ku masezeri (feedback and issue reporting system) bitewe n'ubushobozi bw'ubwujobozi bwo gukoresha chat interface. Igihe cyo rishobora gufasha abantu kugira umuntu wese uba ashobora kubwira ibyo atari yiza cyangwa kubwira ibintu byiza mu gihe cy'amasezeri (chat). Ubutumwa bwo gukoresha uyu systemi bishobora gutera ku masezeri, uburyo bw'ubwujobozi bwo gufata umuntu wese ashobora kubona ubutumwa mu gihe cy'amasezeri (triage) ku Rwanda.

## Icyo gukoresha Thumbs-Down Button {#thumbs-down-button}

Icyo gukoresha AI assistant igice cyose cyitwa **thumbs-down** (👎). Iyo umuntu yagize, ashobora gufata ubutumwa cyangwa ibintu byatari yiza.

- Icyo gukoresha kigira ubushobozi bwo kuboneka mu gihe cy'ubwujobozi (hover) ku masezeri y'AI assistant.
- Iyo umuntu yagize, ashobora gufata ubutumwa cyangwa ibintu byatari yiza.
- Iyo umuntu yagize, ashobora gufata ubutumwa cyangwa ibintu byatari yiza.

- Icyo gukoresha kigira ubushobozi bwo kuboneka mu gihe cy'ubwujobozi (hover) ku masezeri y'AI assistant.
- Iyo umuntu yagize, ashobora gufata ubutumwa cyangwa ibintu byatari yiza.
- Iyo umuntu yagize, ashobora gufata ubutumwa cyangwa ibintu byatari yiza.

- Icyo gukoresha kigira ubushobozi bwo kuboneka mu gihe cy'ubwujobozi (hover) ku masezeri y'AI assistant.
- Iyo umuntu yagize, ashobora gufata ubutumwa cyangwa ibintu byatari yiza.

- Icyo gukoresha kigira ubushobozi bwo kuboneka mu gihe cy'ubwujobozi (hover) ku masezeri y'AI assistant.
- Iyo umuntu yagize, ashobora gufata ubutumwa cyangwa ibintu byatari yiza.

## Feedback Consent Modal {#feedback-consent-modal}

Iyo umuntu yagize Thumbs-Down Button, modal ya gukoresha ubwujobozi (consent modal) igira ubushobozi bwo kuboneka mbere y'uko data itangirirwe kwitwa. Icyo modal:

- Kigaragaza ibyo bitangirirwe kwitwa (gukoresha umuntu wese, uburyo bw'browser).
- Kugira umuntu wese gufata ko ashobora gukoresha iyo data.
- Kugira igice cyo gutanga ubutumwa ku masezeri y'uko umuntu yagize ibyo byatari yiza.
- Kugira igice cyo gutanga **Cancel** kugira ngo umubwujobozi wowe wiboneka nta gukoresha.

Nta butumwa bwo gukoresha bitangirirwe mbere y'uko umuntu yagize ko ashobora gukoresha iyo data.

## Auto-Prompt Feedback Banner {#auto-prompt-feedback-banner}

Mu gihe cyo gukoresha chat, AI assistant isobanura **auto-prompt feedback banner** — ubutumwa bwo gutanga ibyo bitangirirwe kwitwa (non-intrusive message) kugira ngo umuntu wese yibone niba igice cyo guhagarara ryari ryiza.

Icyo banner kigaragaza mu gihe cy'amasezeri ku buryo bwo gukoresha ubutumwa n'uko byashobora gutera. Iyo banner itangirira mu gihe cyo gukoresha ubutumwa n'uko byashobora gutera. Icyo banner kigaragaza mu gihe cyo gukoresha ubutumwa n'uko byashobora gutera.

Icyo banner kigaragaza mu gihe cyo gukoresha ubutumwa n'uko byashobora gutera. Iyo banner itangirira mu gihe cyo gukoresha ubutumwa n'uko byashobora gutera.

## /report-issue Slash Command {#report-issue-slash-command}

Abantu bashobora gufata butumwa bwo gukoresha ubwujobozi (feedback flow) mu gihe cyo gukoresha chat, bishobora gukoresha `/report-issue` mu chat input. Icyo command:

- Imezeza Modal ya Ubabu (Feedback Consent Modal) kwa wakati wote.
- Imejaza kielelezo cha maelezo na habari kuhusu mazungumzo yaliyopo ili kuwepo kabla ya kutuma ripoti.
- Inaruhusu watumiaji kuongeza maelezo mengine kabla ya kutuma.

Amruka `/report-issue` inapatikana katika miongozo yote ya mazungumzo (inline, floating widget, full-screen).

## Triage kwa Msaada wa AI (AI-Assisted Triage) {#ai-assisted-triage}

Ripoti zilizotumwa zinawafanywa kazi na tabaka la triage la AI ambalo:

- Linagawanya ripoti (kosa la ukweli, jibu lisilo na msaada, maudhui yasiyofaa, n.k.).
- Inajumuisha data muhimu za mazungumzo.
- Inatuma muhtasari wa triage kwenda **Feedback Endpoint** iliyowekwa (angalia [Settings > Advanced](#settings-advanced)).

Hii inafanya muda wa ukaguzi wa mwanadamu uwe mfupi kwa kuonyesha masuala muhimu zaidi kwanza.

## Settings > Advanced {#settings-advanced}

Ili kuwasha backend ya maoni, weka mipangilio ifuatayo chini ya **Gratis AI Agent → Settings → Advanced**:

| Field | Maelezo |
|---|---|
| **Feedback Endpoint URL** | URL inayopokea POST requests na payloads za maoni (JSON). |
| **Feedback API Key** | Bearer token inayotumwa katika kichwa cha `Authorization` kwa ajili ya kuthibitisha utumizi wa maoni. |

acha sehemu zote mbili tupu ili kuzima ukusanyaji wa maoni. Vituo vya kubonyeza maoni (feedback buttons) vinaendelea kuonekana kwa watumiaji, lakini matuma hayatafutwa.

:::tip
Feedback endpoint lazima lipe body la JSON na angalau fields za `message_id`, `conversation_id`, `feedback_text`, na `triage_category`. Angalia hati ya mtoa huduma wako ili kuona muundo unaotarajiwa (schema).
