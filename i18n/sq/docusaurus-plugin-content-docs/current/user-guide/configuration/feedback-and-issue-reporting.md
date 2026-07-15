---
title: Feedback dhe Raportimi i Probleve të Klientëve
sidebar_position: 25
_i18n_hash: b8cc1801782ca29dbdcddcf9db34fb48
---
# Feedback dhe Raportimi i Problemeve të Klientëve

Gratis AI Agent v1.5.0 prezanton një sistem të integruar për kthim të feedback-it dhe raportimin e problemeve, që lejon përdoruesve final të flagojnë përgjigjet që nuk janë të ndihmuara dhe raportojnë probleme direkt nga interfejsi i bisedës. Ky sistem përfshin menaxhimin e konsentmentit (consent management), një komandë raportimi automatike dhe triazh të mbështetur nga AI në backend.

## Butoni Thumbs-Down (Përpjekje) {#thumbs-down-button}

Çdo mesazh që dërgon asistentia AI shfaq një buton **thumbs-down** (👎). Kur përdoruesi e klikon, mund ta markojë përgjigjen si të pa ndihmuar ose gabuar.

- Butoni shfaqet kur hoverohet pranë çdo mesazhi i asistentit.
- Klikimi hap **Modalin e Konsentmentit të Feedback-it**.
- Feedback-i lidhet me lëvizjen e bisedës dhe mesazhin specifik.

## Modal Konsentmenti i Feedback-it {#feedback-consent-modal}

Kur përdoruesi klikon butonin thumbs-down, shfaqet një modal konsentmenti para se të dërgohen ndonjësi të dhëna. Modiulli:

- Shpjegon çfarë informacioni do mblidhet (një pjesë e bisedës, konteksti i browserit).
- Kërkon përgjigjen e përdoruesit që të konfirmojë se jep konsentiment për ndarjen e këtyre të dhënave.
- Propozon një fushë tekstuale për përdoruesin që të përshkruajse çfarë ka shkuar gabim.
- Keqon opsionin **Cancel** për ta mbyllur pa dërguar asgjë.

Nuk regjistrohet asnjë feedback derisa përdoruesi ta konfirmojë eksplisit.

## Banner i Automatik i Feedback-it (Auto-Prompt) {#auto-prompt-feedback-banner}

Në fund të një bisede, asistenti mund të shfaqë një **banner automatik të feedback-it** — një mesazh jo-intrusiv që pyet nëse sesi ishte i dobishëm.

Ky banner shfaqet automatikisht bazuar në gjatësinë e bisedës dhe rregullat (heuristics) se si ka shkuar. Ai lidhet me të njëjtën rrjedhje feedback-i si butoni thumbs-down. Përdoruesit mund ta mbyllin bannerin pa dhënë feedback.

## Komanda Slash `/report-issue` {#report-issue-slash-command}

Përdoruesit mund të shfaqin rrjedhjen e feedback-it direkt duke shtypur `/report-issue` në inputin e bisedës. Ky komandë:

Hapësues modalin e Konsentimit të Feedback-it menjëherë.
Pre-prapopulon fushën e përshkrimit me kontekst mbi bisedën aktuale.
Lejon përdoruesve të shtojnë detaje shtesë para se të dërgojnë.

Kommandoja `/report-issue` është e disponueshme në të gjitha modelet e chatit (inline, widget i lëvizshëm, full-screen).

## Triage me ndihmën e AI {#ai-assisted-triage}

Feedback-i i dërguar i drejtohet një shtresë triage AI që:

- Kategorizon raportin (gabim fakte, përgjigje të pjekur, përmbajtje e paçueshme, etj.).
- Bashkon metadatanet relevante të bisedës.
- Dërgon përmbledhjen e triage-it në **Feedback Endpoint** të konfiguruar (shikoni [Settings > Advanced](#settings-advanced)).

Kjo zvogëlon kohën e vlerësimit manual duke nxjerrë para çështjeve më kritike.

## Settings > Advanced {#settings-advanced}

Për të aktivizuar backend-in e feedback-it, konfiguroni këto fusha nën **Gratis AI Agent → Settings → Advanced**:

| Fushë | Përshkrimi |
|---|---|
| **Feedback Endpoint URL** | URL-ja që merr kërkesa POST me ngarkesa (payload) feedback-i (JSON). |
| **Feedback API Key** | Token Bearer i dërguar në headerin `Authorization` për autentikimin e dërgesave të feedback-it. |

Lëreni të dy fushat e zbrazëta për të deaktivizuar mbledhjen e feedback-it. Butonet individualë të feedback-it mbeten të dukshëm për përdoruesit, por dërgesat nuk do të dërgohen më.

:::tip
Feedback endpoint duhet të pranojë një trup JSON me të paktën fushat `message_id`, `conversation_id`, `feedback_text` dhe `triage_category`. Shikon dokumentacionin e ofrues suaj për skemën e pritshme.
:::
