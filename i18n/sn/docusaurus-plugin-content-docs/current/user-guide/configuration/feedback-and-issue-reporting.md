---
title: Zvinovaka dzeMudzidzo nemarudzo ekutendeka
sidebar_position: 25
_i18n_hash: b8cc1801782ca29dbdcddcf9db34fb48
---
# Kurudzera Kwezvinovhu neKutanga Matambudziko

Gratis AI Agent v1.5.0 inoratidza sistemu yekutanga zvinhu uye kutanga matambudziko inotanga kune mupfumbiro wekuti vanhu vakuru (end users) vanogona kuita kuti zvinovhu zvakasiya uye kuita kutanga matambudziko nekuti vachishandisa chat interface. Iyi sistemu inoratidza kuratidza kuti vachikubatsira kana vachisanganisira, command yekutanga kutanga (automated reporting command), uye kuteerera kwemashure (triage) kubatsirwa neAI mumapfumbiro ekupfumbiro.

## Button YeKutanga Kuti Zvinovhu (Thumbs-Down Button)

Mazuva onozuva kuti AI assistant inenge inotangura, inoratidza button ye**thumbs-down** (👎). Kana mutsavo anokutanga, anogona kuita kuti mupfumbiro uone sei kana unowanikwa.

- Button iyi inoratidzorwa panguva inosawana (hover) pamusoro pe message yese ya assistant.
- Kana ukutanga, inongova **Feedback Consent Modal**.
- Mupfumbiro unogona kuita kuti uone sei kana mupfumbiro uyu unowanikwa kana unowanikwa.

## Feedback Consent Modal

Kana mutsavo anokutanga button yethumbs-down, modal yekutanga (consent modal) inoratidzorwa panguva dambudziko rinogona kuita kuti data ine kutanga. Modal iyi:

- Inobvunza kuti munhu anoziva kuti kunge kuitwa sei zvinhu (conversation excerpt, browser context).
- Inoita mutsavo kuti munhu akubatsire kuti aone kuti anokubatsira kana vachishandisa iye.
- Inoratidzorwa field yekuti munhu anogona kuita kuti aone kuti zvakaita sei.
- Inoita **Cancel** option inosawana nekutanga pane kunge kuitwa sei.

Hakuna kutanga kwemupfumbiro kunoita mpaka mutsavo anokubatsira kuti uone sei.

## Auto-Prompt Feedback Banner

Panguva conversation inotanga, assistant inogona kuoratidza **auto-prompt feedback banner** — iye ndiyo message inosawana nekutanga (non-intrusive) inobvunza kana mupfumbiro uyu unowanikwa.

Banner iyi inongova nekuita zvinhu zvakasiya uye kuratidza kuti conversation yakasiyana, kune heuristics dzakasiyana dzekusarudzo. Inoita link kune flow yese yekutanga kutanga (thumbs-down button). Vanhu vanogona kuita banner iyi sei pane kunge kubvunza mupfumbiro.

## /report-issue Slash Command

Vanhu vanogona kuratidza flow yeutanga kutanga nekuti vachishandisa `/report-issue` mu chat input. Command iyi:

- Inopera Modal ya Feedback Consent zvakaita mwedzi wekuti unenge wese.
- Inenge inenge iinguva dzinobva nekuviona kuti munhu anogona kuita zvinotevera (pre-populate) pfungwa yechinyorwa nekuona kuti ndiri munzvimbo inotevera.
- Inenge kunge munhu anogona kuita zvinhu zvakawanda pfungwa dzinobva nekuita submission.

Command ya `/report-issue` inenge yakaita mazuva onozivaka (inline), widget inotevera, uye full-screen.

## AI-Assisted Triage

Feedback inoshandiswa kuenda ku layer ya AI triage inotanga:

- Kuti iinguva yechinyorwa (report) kuti iingwe (categorises) (kuti ndiri mupfungwa dzinobva, chivimbo chinogona kutsimuka, zvinhu zvinogona kubatsira, nhema, etc.).
- Kuti inenge inotanga metadata yakakosha yechinyorwa.
- Inenge inotevera summary ya triage kune **Feedback Endpoint** inotevera (ona [Settings > Advanced](#settings-advanced)).

Izvi zvinhu zvinokwanisa kupera kwemashoko anogona kutsimuka nekuti inotanga nechimwe chinhu chinokosha pane chimwe.

## Settings > Advanced {#settings-advanced}

Kuti utange backend ya feedback, tanga izvi zvinotevera panguva **Gratis AI Agent → Settings → Advanced**:

| Field | Chinyorwa |
|---|---|
| **Feedback Endpoint URL** | URL inotevera POST requests ne payloads dzinobva ya feedback (JSON). |
| **Feedback API Key** | Bearer token inotevera mu `Authorization` header kuti itevere submission ya feedback. |

Ramba izvi zvinotevera kuita submissions nekuti hazvire. Buttons dzakawanda dzinogona kunge munhu anogona kuona, asi submissions hazvire.

:::tip
Feedback endpoint inofanira kutenda JSON body inenge inosanganisira zvinhu zvakawanda ne `message_id`, `conversation_id`, `feedback_text`, uye `triage_category`. Ona documentation ya provider yako yekuti schema inotevera.
