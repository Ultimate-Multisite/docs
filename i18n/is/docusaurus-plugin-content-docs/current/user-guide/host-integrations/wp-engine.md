---
title: Samþætting WP Engine
sidebar_position: 2
_i18n_hash: ceeee20432439d8afb3002dd0dd1ff12
---
# Samning við WP Engine

## Áhersla {#overview}
WP Engine er premium þjónusta fyrir leitað WordPress hélduð á vefsítum sem býður upp á ólíkandi framkvæmd, öryggi og skalafæði fyrir WordPress síti. Þessi samning fer með sjálfsviðskipti domænum milli Ultimate Multisite og WP Engine.

## Stöðvar {#features}
- Sjálfvirkur samning domænum
- Stöðvar fyrir subdomainar í multisite uppsetunum
- Glímafri samning við núverandi kerfi WP Engine

## Kreftingar {#requirements}
Samningurinn finnur sjálfan sem þú ert á WP Engine og notar innbyggðan WP Engine API. Þarf ekki að hafa nokkrar að setja upp ef plugin WP Engine er aktivt og rétt sett upp.

Hins veitir þú þarf manuelle settuppsetning samningurinn, geturð þú sett einn af þessum konstantum í `wp-config.php` leiti:

```php
define('WPE_APIKEY', 'your_api_key'); // Fyrust preferredi hátt
// Eða
define('WPE_API', 'your_api_key'); // Alternativt hátt
```

## Settuppleiðarenir {#setup-instructions}

### 1. Staða WP Engine Pluginsins {#1-verify-wp-engine-plugin}
Ef þú ert á WP Engine, þurfi plugininn WP Engine að vera sett upp og aktivt. Staðfesti að:

1. Plugininn WP Engine er aktivt
2. Fílið `wp-content/mu-plugins/wpengine-common/class-wpeapi.php` finnst

### 2. Aktiva Samningurinn {#2-enable-the-integration}
1. Í WordPress admin, gæfðu í Ultimate Multisite > Settings
2. Navigdu yfir til tækið "Domain Mapping" (Domænuma samningur)
3. Skoli niður yfir "Host Integrations" (Þjónustu samningar)
4. Aktiva WP Engine samningurinn
5. Klikka á "Save Changes" (Spara breytingar)

## Hvernig það virkar {#how-it-works}

### Samning domænum {#domain-syncing}
Þegar domæni eru samning á Ultimate Multisite:

1 Notar samningurinn WP Engine API til að bæta domæinum í WP Engine uppsetningu þinni
2 WP Engine tekur á settuppsetningum domæna og útgefnum SSL kerfi
3 Þegar domænuma samning er fjarlægð, fjarlægir samningurinn domænið úr WP Engine

### Stöðvar fyrir subdomainar {#subdomain-support}

Til multisite innsetningar for underdomænar:

1. Integrasjonen legg kvar underdomén til WP Engine når ein ny side blir oppretta.
2. WP Engine handterer konfigurasjonen av underdomenet.
3. Når ein side blir sletta, vil integrasjonen fjerne underdomenet frå WP Engine.

## Viktige merknader {#important-notes}

### Wildcard-domæner {#wildcard-domains}

For multisite innsetningar med underdomæner er det tilrådd å kontakte WP Engine support for å be om ei wildcard-domene konfigurasjon. Dette gjer at alle underdomena fungerer automatisk utan at du treng å legge til kvar av dei individuelt.

### SSL-sertifikat {#ssl-certificates}

WP Engine handterer automatisk utstedelse og fornying av SSL-sertifikat for alle domener lagt til gjennom denne integrasjonen. Ingen tilleggskonfigurasjon er nødvendig.

## Feilsøking {#troubleshooting}

### Problem med API-tilkopling {#api-connection-issues}
- Sjekk at WP Engine plugin er aktiv og korrekt konfigurert.
- Om du har definert API-nøkkelen manuelt, sjekk at den er korrekt.
- Kontakt WP Engine support om du har problem med API-et.

### Domene ikkje lagt til {#domain-not-added}
- Sjekk Ultimate Multisite loggane for eventuelle feilmeldingar.
- Verifiser at domenet ikkje allereie er lagt til i WP Engine.
- Sørg for at WP Engine-planen din støttar talet på domener du legg til.

### Underdomene problem {#subdomain-issues}
- Om underdomena ikkje fungerer, kontakt WP Engine support for å be om ei wildcard-domene konfigurasjon.
- Verifiser at DNS-innstillingane dine er korrekt konfigurert for hovuddomenet og underdomena.
