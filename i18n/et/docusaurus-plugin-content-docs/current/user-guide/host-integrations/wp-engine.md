---
title: WP Engine integreerimine
sidebar_position: 2
_i18n_hash: ceeee20432439d8afb3002dd0dd1ff12
---
# WP Engine Integreerimine

## Üldine ülevaade {#overview}
WP Engine on premium halitud WordPress hoastamise platvorm, mis pakub WordPress-saitidele optimeeritud jõudluse, turvalisuse ja skaalautuvuse. See integreerimine võimaldab automaatselt domeenid synkronida Ultimate Multisite'i ja WP Enginei vahel.

## Funktsioonid {#features}
- Automaatiline domeenide synkronimine
- Subdomeenide toetmine multisite installatsioonide jaoks
- Sujuv integreerimine WP Enginei olemasolevate süsteemidega

## nõuded {#requirements}
Integreerimine tuvastab automaatselt, kas te hoastate WordPressil WP Engineis ja kasutab sisse sisse oleva WP Engine API. Kui WP Engine plugin on aktiveeritud ja õigivan konfiguratsiooniga seadustatud, lisakohane konfiguratsiooni ei vaja.

Kuid kui vajate integreerimise manuaalselt konfiguratsiooni, saate defineerida üks näite konstantist oma `wp-config.php` failis:

```php
define('WPE_APIKEY', 'your_api_key'); // Eelistatud viis
// VÄLGA
define('WPE_API', 'your_api_key'); // Alternatiivne viis
```

## Seadistamise juhised {#setup-instructions}

### 1. WP Engine plugini kontrollimine {#1-verify-wp-engine-plugin}

Kui te hoastate WordPressil WP Engineis, peaks WP Engine plugin olema juba installitud ja aktiveeritud. Kontrollige järgmine:

1. WP Engine plugin on aktiveeritud
2. Fail `wp-content/mu-plugins/wpengine-common/class-wpeapi.php` on olemas

### 2. Integreerimise aktiveerimine {#2-enable-the-integration}

1. WordPressi administraatoris minud Ultimate Multisite > Settings (Seaded) sekkoni.
2. Minud "Domain Mapping" (Domeenide mappimise) tabile.
3. Skroolipilt alla "Host Integrations" (Hoastamise integreerimised) osas.
4. Aktiveeri WP Engine integreerimine.
5. Klõpsake "Save Changes" (Muudatused salvestamine).

## Kuidas see toimib {#how-it-works}

### Domeenide synkronimine {#domain-syncing}

Kui domeen on mappitud Ultimate Multisite'is:

1. Integreerimine kasutab WP Engine API-t domeeni teie WP Engine installatsioonile lisamiseks
2. WP Engine haldab domeeni konfiguratsiooni ja SSL-sertifikaadi väljastamise
3. Kui domeeni mappimist eemaldatakse, eemaldab integreerimine domeeni WP Engineist

### Subdomeenide toetmine {#subdomain-support}

Subdomän multisite installatsioonide jaoks:

1. Integreerimine lisab iga subdomäini WP Engine'ile uue sisse, kui uus veebileht luuakse.
2. WP Engine haldab subdomääni konfiguratsiooni.
3. Kui veebilehte eemaldatakse, eemaldab integreerimine subdomääni WP Engineist.

## Oluline märkused {#important-notes}

### Wildcard-nimeted domeenid (Wildcard Domains) {#wildcard-domains}

Subdomäni multisite installatsioonide jaoks soovitatakse kontaktida WP Enginei toetust ja küsumata wildcard-domeeni konfiguratsiooni. See võimaldab kõiki subdomääne töötada automaatselt ilma, et tuleb igaühealt eraldi lisada.

### SSL-tsete (SSL Certificates) {#ssl-certificates}

WP Engine haldab automaatselt SSL-tsete väljastamise ja uuesti võtmise kõikide domeenide jaoks, mida selle integreerimaga lisatakse. Lisakoncepteerimist ei ole vaja.

## Probleemide lahendamine {#troubleshooting}

### API ühenduse probleemid {#api-connection-issues}
- Kontrollige, kas WP Engine plugin on aktiveeritud ja õigesti konfiguratsioonil.
- Kui olete API-kaiku manuaalselt määratnud, kontrollige, et see on õige.
- Kontaktige WP Enginei toetust, kui teil on probleeme APIga.

### Domeeni lisamatus {#domain-not-added}
- Kontrollige Ultimate Multisite logud vigu sõnumite osas.
- Kontrollige, et domeen ei ole juba WP Engineis lisatud.
- Veenduge, et teie WP Engine plaan toetab selle domeenide arvu, mida te lisate.

### Subdomääni probleemid {#subdomain-issues}
- Kui subdomääneed ei töötaks, kontaktige WP Enginei toetust ja küsumata wildcard-domeeni konfiguratsiooni.
- Kontrollige, et teie DNS-seadistused on õigesti konfiguritud nii peamise domeenile kui subdomäänele.
