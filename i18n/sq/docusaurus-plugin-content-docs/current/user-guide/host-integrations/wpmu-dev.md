---
title: Integrimi WPMU DEV
sidebar_position: 4
_i18n_hash: 01cdaa5cf8aece1ca5c269d943e8a9e9
---
# Integrimi me WPMU DEV {#wpmu-dev-integration}

## Përmbledhje {#overview}
WPMU DEV është një platformë e plotë WordPress që ofron hosting, plugin dhe shërbime për faqe WordPress. Kjo integrim lejon sinkronizimin automatik të domenit dhe menaxhimin e sertifikatës SSL midis Ultimate Multisite dhe hostingut WPMU DEV.

## Karakteristikat {#features}
- Sinkronizim automatik i domenit
- Menaxhimi i sertifikatës SSL
- Provime të shtfuara të verifikimit të sertifikatës SSL

## Kërkesat {#requirements}
Integrimi automatikisht zbulon nëse po hoston tek WPMU DEV dhe përdor API-n e integruar. Nuk keni nevojë për konfigurim shtesë nëse po hostoni tek WPMU DEV.

Integrimi kontrollon keberim të konstantes `WPMUDEV_HOSTING_SITE_ID`, e cila defineton automatikisht kur hostoni tek WPMU DEV.

## Udhëzimet për Instalimin {#setup-instructions}

### 1. Verifikoni Hostingun në WPMU DEV {#1-verify-wpmu-dev-hosting}

Nëse po hostoni tek WPMU DEV, konstante të nevojshme duhet të jenë tashmë të definuara. Kontrolloni se:

1. Konstanta `WPMUDEV_HOSTING_SITE_ID` është e definuar në mjedisin tuaj
2. Keni një anëtarë aktive WPMU DEV me akses API

### 2. Aktivizoni Integrimin {#2-enable-the-integration}

1. Në adminin tuaj WordPress, shkoni te Ultimate Multisite > Settings (Cilësimet)
2. Navigjoni te tab "Domain Mapping" (Mapele Domeni)
3. Scrolloni poshtë te "Host Integrations" (Integrimet e Hostuesit)
4. Aktivizoni integrimin WPMU DEV
5. Klikoni "Save Changes" (Ruaj Ndryshimet)

## Si Funksionon {#how-it-works}

### Sinkronizimi i Domenit {#domain-syncing}

Kur një domen mapehet në Ultimate Multisite:

1. Integrimi përdor API-n e WPMU DEV për të shtuar domenit në llogarinë tuaj hostinge
2. Ai gjithashtu shton automatikisht versionin `www` të domenit
3. WPMU DEV menaxhon konfigurimin e domenit dhe dhënien e sertifikatës SSL

### Menaxhimi i Sertifikatës SSL {#ssl-certificate-management}

Integriteti është konfiguruar për të rritur numrin e provave të verifikimit të sertifikatëve SSL për hostimin WPMU DEV, pasi mund të marrë pak kohë për lëshimin dhe instalimin e sertifikatëve SSL. Në defrutat, do të provojë deri në 10 herë për verifikimin e sertifikatës SSL, krahasuar me standardin prej 5 provave.

## Shënime Importante {#important-notes}

### Heqja e Domenit {#domain-removal}
Aktualisht, API-ja WPMU DEV nuk ofron mënyrën të heqni domenët. Kur një mappendje domene hiqet në Ultimate Multisite, domeni do të mbetet në konton tuaj të hostimit WPMU DEV. Do të duhet ta hiqni manualisht nga dashboard-i i hostimit WPMU DEV nëse është e nevojshme.

### Autentikimi i API-së {#api-authentication}
Integriteti përdor çelësin API WPMU DEV që ruhet në bazën e të dhënave të WordPress-it si opsioni `wpmudev_apikey`. Ky vendoset automatikisht kur lidhni faqen tuaj me WPMU DEV.

## Zgjidhja e Problemeve (Troubleshooting) {#troubleshooting}

### Probleme me Lidhurin me API {#api-connection-issues}
- Verifikoni që faqja juaj është lidhur siç duhet me WPMU DEV
- Kontrolloni nëse opsioni `wpmudev_apikey` është vendosur në bazën e të dhënave të WordPress-it tuaj
- Sigurohuni që anëtarësia juaj në WPMU DEV të jetë aktive

### Probleme me Sertifikatët SSL {#ssl-certificate-issues}
- WPMU DEV mund të marrë pak kohë për lëshimin e sertifikave SSL (zakonisht 5-15 minuta)
- Integrita është konfiguruar për të kontrolluar deri në 10 herë për sertifikat SSL
- Nëse sertifikatët SSL nuk lëshohen ende pas disa provave, kontaktoni mbështetjen e WPMU DEV

### Domeni Nuk Shtohet {#domain-not-added}
- Kontrolloni logjet e Ultimate Multisite për ndonjë mesazh gabimi
- Verifikoni që domeni nuk është shtuar tashmë në WPMU DEV
- Sigurohuni që plani juaj i hostimit WPMU DEV të mbështet numrin e domenve që po shtoni
