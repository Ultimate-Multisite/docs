---
title: Retours Kliyan ak Rapò Masseur
sidebar_position: 25
_i18n_hash: b8cc1801782ca29dbdcddcf9db34fb48
---
# Rapor Faisant Feedback Kliyan & Rapò Pwoblèm

Gratis AI Agent v1.5.0 bay yon sistèm rapòman ak geri (feedback) ki vini avèk li, ki pèmèt itilizatè yo fè endikasyon sou repons ki pa ede epi rapò pwoblèm dirèkteman nan entèfas chat la. Sistèm sa a gen ladan jere konsantman (consent management), yon komand rapò otomatik, ak triaj asisté pa AI nan backend la.

## Bouton Thumbs-Down (Ba) {#thumbs-down-button}

Chak mesaj ki soti nan asistan AI a montre yon bouton **thumbs-down** (👎). Lè yon itilizatè klike sou li, yo ka marre repons an kòm pa ede oswa sa ki pa bon.

- Bouton an parèt lè ou mete mi sou chak mesaj asistan an.
- Klike sou li louvri **Feedback Consent Modal** la.
- Feedback la asosye ak fil konvèsasyon an epi ak mesaj espesifik la.

## Feedback Consent Modal (Fenèt Konsantman Feedback) {#feedback-consent-modal}

Lè yon itilizatè klike sou bouton thumbs-down, yon modal konsantman ap parèt anvan nenpòt done pa voye. Modal la:

- Eksplike ki enfòmasyon ki pral kolekte (ekzòp ak konteks brauzer).
- Mande itilizatè a konfime ke yo konsantye pou pataje done sa a.
- Bay yon tèks lib pou itilizatè a ka dekri sa k ap fè mal la.
- Ofri opsyon **Cancel** pou retire li san pa voye anyen.

Pa gen okenn feedback ki mete anrejistre jiskaske itilizatè a konfime eksplisite.

## Auto-Prompt Feedback Banner (Bannè Prompt Feedback Otomatik) {#auto-prompt-feedback-banner}

Nan fen yon konvèsasyon, asistan an ka montre yon **auto-prompt feedback banner** — yon mesaj ki pa fè moun mal k ap mande si sesyon an te ede.

Bannè sa a parèt otomatikman baze sou longè konvèsasyon ak rezilta yo. Li konekte ak menm flwa feedback tankou bouton thumbs-down la. Itilizatè yo ka retire bannè a san pa bay okenn geri.

## /report-issue Slash Command (Komand Slash Rapò Pwoblèm) {#report-issue-slash-command}

Itilizatè yo ka aktive flwa feedback la dirèkteman lè yo tape `/report-issue` nan entèfas chat la. Komand sa a:

- Li leve modal de konsantman fidbak imedyatman.
- Pre-rempliye deskripsyon an plizyè kontèks sou konvèsasyon kounye a.
- Kite itilizat yo ajoute plis detay anvan pou soumèt li.

Kòmande `/report-issue` disponib nan tout mod chat (inline, floating widget, full-screen).

## AI-Assisted Triage (Triaj ede pa AI) {#ai-assisted-triage}

Fidbak ki te soumèt ale yon kote triaj AI ki:

- Kote rapò a (erè faktyèl, repons ki pa ede, kontni inkonpatib, elatriye).
- Konekte metadata konvèsasyon ki enpòtan an.
- Pwopose rezime triaj la bay **Feedback Endpoint** ki configure (gade [Settings > Advanced](#settings-advanced)).

Sa diminye tan revizyon manual yo lè li montre pwoblèm ki pi krityèl yo premye.

## Settings > Advanced {#settings-advanced}

Pou kòmanse backend fidbak la, configure chak fld sa a anba **Gratis AI Agent → Settings → Advanced**:

| Fld | Deskripsyon |
|---|---|
| **Feedback Endpoint URL** | URL ki resevwa POST requests ak payload fidbak (JSON). |
| **Feedback API Key** | Bearer token ki voye nan `Authorization` header pou autentike soumèt fidbak. |

Lè ou kite de fld sa yo vid, ou ap desabilize koleksyon fidbak la. Bouton fidbak endividyèl rete vizib pou itilizat yo, men soumèt yo p ap teleporte.

:::tip
Feedback endpoint la dwe aksepte yon body JSON ki gen anba menm `message_id`, `conversation_id`, `feedback_text`, ak `triage_category` fld la. Gade dokiman pwovizè endpoint ou a pou skema espere a.
:::
