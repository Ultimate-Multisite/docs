---
title: Kugadzirwa neWPMU DEV Integration
sidebar_position: 4
_i18n_hash: 01cdaa5cf8aece1ca5c269d943e8a9e9
---
# Integration neWPMU DEV {#wpmu-dev-integration}

## Zvinoro (Overview) {#overview}
WPMU DEV ndiri platform yakakwana ye WordPress inoshandisa hosting, plugins, uye services kune sites dzine WordPress. Integration iyi inopa kuratidza domain syncing nekugadzirisa SSL certificate zvakaita kuti zvinotenderwa neUltimate Multisite nekubatsira nemhaka wemuhiringiro weWPMU DEV.

## Zvinhu (Features) {#features}
- Kuratidza domain syncing kwemakore
- Kugadzirisa SSL certificate
- Kuti kutarisa kuratidza SSL certificate zvakawanda

## Zvinodiwa (Requirements) {#requirements}
Integration iyi inoziva nekuti unogona hosting muWPMU DEV uye inoshandisa API yakanaka. Usina kuita zvinhu zvakawanda kana unogona hosting muWPMU DEV.

Integration iyi inotsvaga kuti `WPMUDEV_HOSTING_SITE_ID` constant ine, inozivikanwa nekuti unogona hosting muWPMU DEV.

## Kuratidza (Setup Instructions) {#setup-instructions}

### 1. Kuratidza Hosting weWPMU DEV {#1-verify-wpmu-dev-hosting}

Kana unogona hosting muWPMU DEV, constants dzakakwana dzinotarisirwa. Ratiro kuti:

1. `WPMUDEV_HOSTING_SITE_ID` constant inozivikanwa munzira yako (environment)
2. Unenge uene nemembership ya WPMU DEV inoshandisa API

### 2. Kuti Integration Inenge Inogona Kushanda {#2-enable-the-integration}

1. Mu admin yako ye WordPress, enda ku Ultimate Multisite > Settings
2. Enda ku tab "Domain Mapping" (Kuratidza Domain)
3. Enda kupfuura kune "Host Integrations" (Integration dzemuhiringiro wehost)
4. Onge integration ya WPMU DEV inenge inogona kushanda (Enable)
5. Click "Save Changes" (Onge Zvinotenderwa)

## Inoenda Sei (How It Works) {#how-it-works}

### Kuratidza Domain Syncing {#domain-syncing}

Kana domain ine mapping muUltimate Multisite:

1. Integration iyi inoshandisa WPMU DEV API kuti itanje domain yakanaka ku account yako yehosting
2. Inotanga kutaridza www version ya domain automatically
3. WPMU DEV inogadzirisa configuration yedomain uye SSL certificate

### Kugadzirisa SSL Certificate {#ssl-certificate-management}

Kugutsi kune integration inenge yakangechirwa kuti kuva nekuvimbisa zvinhu zvinobva pama SSL certificate verification kubva kuWPMU DEV hosting, sezvo kunge kuva kunge kuva kunge kuva kunge kunge kusimuka nguva yakawanda kuti SSL certificates dzine kuva uye kuinstalla. Nechakanaka, ichiichira upfungire 10 kuti zvimbise SSL certificate verification, kune kuratidza standard 5 attempts.

## Zvinotora Kuti Zvinhu Zvinotora (Important Notes) {#important-notes}

### Kuenda Kwemudziro (Domain Removal) {#domain-removal}

Nkuita nguva iyi, WPMU DEV API haichiri nzira yekupfuura domains. Kana domain mapping kuenda muUltimate Multisite, domain ichiri kuenda mumakore ako ekuhotikidza WPMU DEV hosting. Unofanira kuitira manually kuti uende (remove) kubva kuWPMU DEV hosting dashboard kana zvichitika.

### Authentication ya API (API Authentication) {#api-authentication}

Integration inoratidza WPMU DEV API key inozivikanwa muWordPress database seoption `wpmudev_apikey`. Izviro ichiingira nekuita iye kana unokumbira site yako kuti iite connection neWPMU DEV.

## Kuti Zvinhu Zvinotora (Troubleshooting) {#troubleshooting}

### Matambudziko ekutanga API (API Connection Issues) {#api-connection-issues}
- Simbisa kuti site yako inenge yakange ikwanisirwa zvakanaka neWPMU DEV
- Simbisa kuti option `wpmudev_apikey` inenge inosimbiswa muWordPress database
- Simbisa kuti membership ya WPMU DEV yako inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge
