---
title: Referenca e cilësimeve
sidebar_position: 11
_i18n_hash: 0259b88b319090b358483322ad97fc2d
---
# Referenca të cilësimeve

Kjo faqe ndjek cilësimet që ndikojnë në menaxhimin e përditshëm dhe ndryshimet e fundit në sjellje në Ultimate Multisite.

## Të tjera opsione

Zona **Të tjera opsione** shfaqet nën **Ultimate Multisite > Settings > Login & Registration**.

| Cilësimi | Përshkrimi |
|---|---|
| **Enable Jumper** (Krijoni Jumper) | Tregon mjetin e navigimit të shpejtë Jumper në zonën admin. Përdorni atë për të kaluar drejtpërdrejt në ekranet e Ultimate Multisite, objekte të rrjetit dhe destinacionet e suportuara të adminit. Disaktivizoni nëse nuk dëshironi që ky shkurtim të jetë i dukshëm. |

## Raportimi i gabimeve dhe telemetria

Cilësimi i mëparshëm për pjesëmarrjen në raportimin e gabimeve është hiqur nga faqja e cilësimeve. Telemetria anonime është e deaktivizuar dhe nuk ka ndonjë opsion vizual (UI toggle) për ta aktivizuar.

Nëse keni runbooks të brendshëm ose skedarë ekran (screenshots) për faquin e cilësimeve, hiq referencat në fushën e vjetër të raportimit të gabimeve që administratorët të mos kërkojnë një cilësimi që nuk ekziston më.

## Cilësimet e importit/eksportit

Tabja **Import/Export** përshkruan cilat cilësime i kontrollon dhe lidhet drejtpërdrejt me **Ultimate Multisite > Site Export** për arkivët e saj të sitit dhe rrjetit. Përdorni tabin e cilësimeve për konfigurimin e importit/eksportit, përdorni **Tools > Export & Import** për procesin e importit/eksportit të një shtëpie të vetme, dhe përdorni mjetin Site Export kur keni nevojë për arkivin e plotë të Eksportit të Rrjetit.

## Cilësimet e lidhjes me ofruesin AI

Cilësimet e lidhjes me ofruesin AI tani eksponojnë vetëm grupet e llogave OAuth që mbështeten:

| Përfshësi | Fluksi i konfigurimit |
|---|---|
| **Anthropic Max** | Lidheni një ose më shumë llogari Anthropic Max duke përdorur butonin OAuth. Përdorni opsionin e rezervës manuale të OAuth kur shfletuesi në sandbox nuk mund të plotësojë redirektimin automatikisht. |
| **OpenAI ChatGPT/Codex** | Lidheni llogaritjet ChatGPT përmes të njëjtës rrjedhje (workflow) OAuth. Operimet e mbështetura nga konnektori mund të përdorin thirrjet e mjetit Codex të ChatGPT pasi llogaria është lidhur. |
| **Google AI Pro** | Lidheni llogaritjet Google AI Pro përmes OAuth, pastaj refreshojeni konnektorin nëse lista e llogarive nuk përditësohet menjëherë. |

Cursor Pro nuk është më një ofrues i mbështetur. Heqni skenat e vjetra të screenshot-eve interne, runbook-e ose hapat e onboarding që përmendin fusha konfigurore ose rrugët e konnektorëve për Cursor Pro.

Kur shtoni ose heqni llogaritje ofruese (provider accounts), vendosni një adresë email të vlefshme për llogarinë që po refreshohet ose fshihet dhe ruani cilësimet e ofrues para se të testoni operacionet me mbështetje konnektorit.
