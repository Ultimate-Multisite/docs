---
title: Integrazzjoni WPMU DEV
sidebar_position: 4
_i18n_hash: 01cdaa5cf8aece1ca5c269d943e8a9e9
---
# Integrà WPMU DEV {#wpmu-dev-integration}

## Panoramika {#overview}
WPMU DEV huwa piattaforma WordPress all-inclusive li l-hosting, pluginijiet u servizzi għal siti WordPress. Dan l-integrà tismabbilixxi sintonizzazzjoni automatiku tal-domain u il-ġestjoni taċċertifikat SSL bejn Ultimate Multisite u hosting WPMU DEV.

## Funzjonijiet {#features}
- Sintonizzazzjoni automatika tal-domain
- Ġestjoni taċċertifikat SSL
- Tentat estesi għall-verifikazzjoni taċċertifikat SSL

## Reġistrazzjonijiet {#requirements}
L-integrà siddeq awtomatik se jgħid li qed tista' hosti fuq WPMU DEV u jastaqsi l-API integrata. Ma hemm configurazzjonijiet aggiemiet biex tista' hosti fuq WPMU DEV.

L-integrà tipprovvidi b'verifika għall-presenza tal-constant `WPMUDEV_HOSTING_SITE_ID`, li jit definita awtomatik meta tista' hosti fuq WPMU DEV.

## Istruzzjonijiet taċċettabbil {#setup-instructions}
### 1. Verifika l-Hosting fuq WPMU DEV {#1-verify-wpmu-dev-hosting}

Jekk qed tista' hosti fuq WPMU DEV, il-constant biex jifuna l-necessarju għall-hosting għandhom jkun definita. Verifika li:

1. Il-constant `WPMUDEV_HOSTING_SITE_ID` huwa definita fil-environment tiegħek
2. Qed għandek membership WPMU DEV attivo b'akses API

### 2. Iżonabbilja l-Integrà {#2-enable-the-integration}

1. F'admin WordPress tiegħek, għandi Ultimate Multisite > Settings
2. Naviga għall-tab "Domain Mapping" (Mappatura tal-domain)
3. Scrolla' wara għal "Host Integrations" (Integrazzjonijiet tal-hosting)
4. Iżonabbilja l-integrà WPMU DEV
5. Klikka fuq "Save Changes" (Saħħa Bidżi)

## Come Funziona {#how-it-works}

### Sintonizzazzjoni tal-Domain {#domain-syncing}

Meta domain jit mappat f'Ultimate Multisite:

1. L-integrà tistaqsi l-API ta WPMU DEV biex tiddarba d-domain għall-account hosting tiegħek
2. Tiddarba awtomatik ukoll il-versjoni www tal-domain
3. WPMU DEV hija responsabbli għall-konfigurazzjoni tal-domain u l-emissioni taċċertifikat SSL

### Ġestjoni taċċertifikat SSL {#ssl-certificate-management}

Il-integrà huwa konfigurat biex t aumenta l-numero tal tentativi ta verifica tal SSL certificate għal hosting ta WPMU DEV, peress li jistaħu ħalli xi ħin biex jiġu emessi u installati il-SSL certificates. B difiżit, jipprova għal massimu 10 tentat għall-verifikazzjoni tal-SSL certificate, kontra l-5 tentat standard.

## Nota Importanti {#important-notes}

### Eliminazzjoni tal-Dominio {#domain-removal}

Aktwalment, l-API ta WPMU DEV ma joffri xogħol biex elimini domini. Meta t-timbid (domain mapping) jolt fil-Ultimate Multisite, id-dominio se jipprovdi fl-account tiegħek tal-hosting ta WPMU DEV. Tekk għandek eliminali manualment mill-dashboard tal-hosting ta WPMU DEV meta it-ħtieġa.

### Awtentikazzjoni tal-API {#api-authentication}

L-integrà tista' l-API key ta WPMU DEV li hija magħal database ta WordPress bħala opzjoni `wpmudev_apikey`. Dan jgħandu awtomatik meta tgħall-site tiegħek mal-WPMU DEV.

## Problemi u Soluzzjonijiet (Troubleshooting) {#troubleshooting}

### Problemi b'Konnekkjizzjoni tal-API {#api-connection-issues}
- Verifika li l-site tiegħek huwa konness awturament mal-WPMU DEV
- Kontrolla li l-opzjoni `wpmudev_apikey` hija impostata fil-database ta WordPress tiegħek
- Assicurajt li l-membership tiegħek tal-WPMU DEV aktiva

### Problemi b'SSL Certificate {#ssl-certificate-issues}
- Il-WPMU DEV jista' jaħobb xi ħin biex jemessi SSL certificates (tipiku 5-15 minutu)
- L-integrà hija konfigurat biex tikkontrolla għal massimu 10 volte għall-SSL certificates
- Meta l-SSL certificates ma jistgħux jiġu emessi appoċċi tentat tal-kbir, kontatta is-support ta WPMU DEV

### Dominio M'għandux Tiddir {#domain-not-added}
- Kontrolla il-logs tal-Ultimate Multisite għal pirċa msgji speċifi
- Verifika li d-dominio ma jkunx imtastjar fl-WPMU DEV
- Assicurajt li l-plan ta hosting tiegħek tal-WPMU DEV jippoġġi l-numero tal-domini li qed tiddir
