---
title: Referenca e cilësimeve
sidebar_position: 11
_i18n_hash: d9ab375be74a5dff1aaf4f4eaf80c3be
---
# Referenca e Settings

Kjo faqe ndjek Settings që ndikojnë në administrimin e përditshëm dhe ndryshimet e fundit të sjelljes në Ultimate Multisite.

## Opsione të tjera

Zona **Opsione të tjera** shfaqet nën **Ultimate Multisite > Settings > Login & Registration**.

| Setting | Përshkrimi |
|---|---|
| **Enable Jumper** | Shfaq mjetin e navigimit të shpejtë Jumper në zonën e administrimit. Përdoreni për të kaluar drejtpërdrejt te ekranet e Ultimate Multisite, objektet e rrjetit dhe destinacionet e mbështetura të administrimit. Çaktivizojeni nëse nuk dëshironi që kjo shkurtore të jetë e dukshme. |

## Raportimi i gabimeve dhe telemetria

Cilësimi i mëparshëm opt-in për raportimin e gabimeve është hequr nga faqja e settings. Telemetria anonime është e çaktivizuar dhe nuk ka asnjë UI toggle për ta aktivizuar.

Nëse mirëmbani runbooks të brendshme ose pamje ekrani për faqen e settings, hiqni referencat te fusha e vjetër opt-in për raportimin e gabimeve, në mënyrë që administratorët të mos kërkojnë një cilësim që nuk ekziston më.

## Settings për import/eksport

Skeda e settings **Import/Export** përshkruan cilat settings kontrollon dhe lidhet drejtpërdrejt me **Ultimate Multisite > Site Export** për arkivat e site dhe rrjetit. Përdorni skedën e settings për konfigurimin e import/eksportit, përdorni **Tools > Export & Import** për rrjedhën e punës së eksport/importit për një site të vetëm, dhe përdorni mjetin Site Export kur ju nevojitet një arkiv i plotë Network Export.

## Paralajmërim për bilancin e Domain Seller HostAfrica

Kur addoni Domain Seller lidhet me HostAfrica, administratorët e rrjetit tani shohin një paralajmërim të mbyllshëm për bilanc të ulët kur bilanci i Account të reseller është tepër i ulët për përpunim të besueshëm të regjistrimit ose rinovimit të domain.

Trajtojeni këtë njoftim si paralajmërim operacional: mbushni bilancin e reseller në HostAfrica përpara se të pranoni më shumë regjistrime domain me pagesë, pastaj kthehuni te settings e Domain Seller ose te ekrani i monitorimit të domain për të konfirmuar që regjistrimet dhe rinovimet mund të vazhdojnë normalisht.

## Settings të lidhësit të ofruesit AI

Settings të lidhësit të ofruesit AI tani ekspozojnë vetëm grupet e mbështetura të Account OAuth:

| Ofruesi | Rrjedha e konfigurimit |
|---|---|
| **Anthropic Max** | Lidhni një ose më shumë Account Anthropic Max me butonin OAuth. Përdorni alternativën manuale OAuth kur një shfletues në sandbox nuk mund ta përfundojë automatikisht ridrejtimin. |
| **OpenAI ChatGPT/Codex** | Lidhni Account ChatGPT përmes së njëjtës rrjedhë pune të grupit OAuth. Operacionet e mbështetura nga lidhësi mund të përdorin thirrje mjetesh ChatGPT Codex pasi Account të jetë lidhur. |
| **Google AI Pro** | Lidhni Account Google AI Pro përmes OAuth, pastaj rifreskoni lidhësin nëse lista e Account nuk përditësohet menjëherë. |

Cursor Pro nuk është më një ofrues i mbështetur. Hiqni pamjet e vjetra të brendshme të ekranit, runbooks ose hapat e onboarding që përmendin fusha konfigurimi ose shtigje lidhësi për Cursor Pro.

Kur shtoni ose hiqni Account të ofruesit, vendosni një adresë email të vlefshme për Account që po rifreskohet ose fshihet dhe ruani settings e ofruesit përpara se të testoni operacione të mbështetura nga lidhësi.
