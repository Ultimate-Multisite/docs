---
title: Integracija WP Engine
sidebar_position: 2
_i18n_hash: ceeee20432439d8afb3002dd0dd1ff12
---
# Integracija z WP Engine

## Pregled {#overview}
WP Engine je premium upravljana platforma za hostovanje WordPress-a, ki zagotavlja optimizirano delovanje, varnost in skalabilnost za WordPress spletne strani. Ta integracija omogoča avtomatizirano sinhronizacijo domen med Ultimate Multisite in WP Engine.

## Funkcionalnosti {#features}
- Avtomatizirana sinhronizacija domena
- Podpora poddomene za multisite instalacije
- Nenavadna integracija z obstoječimi sistemi WP Engine

## Zahtevi {#requirements}
Integracija samodejavno odkrije, če hostujete na WP Engine in uporablja vgrajen API WP Engine. Ni potrebno dodatne konfiguracije, če je plugin WP Engine aktiven in pravilno konfiguriran.

Vendar pa, če potrebujete ručno konfiguracijo integracije, lahko definirate eno od teh konstant v vašem datoteki `wp-config.php`:

```php
define('WPE_APIKEY', 'vaša_api_ključ'); // Predvidena metoda
// ALI
define('WPE_API', 'vaša_api_ključ'); // Alternativna metoda
```

## Navodila za nastavitve {#setup-instructions}

### 1. Preverite plugin WP Engine {#1-verify-wp-engine-plugin}

Če hostujete na WP Engine, bi morali biti plugin WP Engine že nameščen in aktiv. Preverite:

1. Da je plugin WP Engine aktiven
2. Da obstaja datoteka `wp-content/mu-plugins/wpengine-common/class-wpeapi.php`

### 2. Omogočite integracijo {#2-enable-the-integration}

1. V admin panel WordPressa, gre do Ultimate Multisite > Settings
2. Navigirajte na tab "Domain Mapping" (Mapiranje domen)
3. Prejmovajte dolje do "Host Integrations" (Integracije hostov)
4. Omogočite integracijo WP Engine
5. Kliknite na "Save Changes" (Shrani spremembe)

## Kako to deluje {#how-it-works}

### Sinhronizacija domena {#domain-syncing}

Ko je domen mapiran v Ultimate Multisite:

1. Integracija uporablja API WP Engine, da doda domen do vaše instalacije WP Engine
2. WP Engine upravlja konfiguracijo domena in izdajo SSL sertifikata
3. Ko se domen mapiranje odstrani, integracija ga odstrani iz WP Engine

### Podpora poddomene {#subdomain-support}

Za instalacije multisite na poddomene:

1. Integracija vsak poddomene dodaja v WP Engine ob kreiranju nove strani.
2. WP Engine upravlja konfiguracijo poddomene.
3. Obnošenje strani bo integracija odstranila poddomeno iz WP Engine.

## Pomembna opomnika {#important-notes}

### Wildcard domena {#wildcard-domains}

Za instalacije multisite na poddomene se priporočilo, da se obrnete na podporo WP Engine in zahtevate konfiguracijo wildcard domena. To omogoča, da bodo vse poddomene delovale samodejno, ne potrebujejo jednakega dodajanja vsake po sami.

### SSL sertifikati {#ssl-certificates}

WP Engine sam upravlja izdajo in obnovo SSL sertifikatov za vse domene, ki so dodani preko te integracije. Ni potrebno dodatno konfiguracijo.

## Reševanje težav {#troubleshooting}

### Problemi z povezavo API {#api-connection-issues}
- Preverite da je plugin WP Engine aktiven in pravilno konfiguriran.
- Če ste sami ručno definili API ključ, preverite, da je to pravilno.
- Obravnite se na podporo WP Engine, če imate težave z API.

### Domen ni dodan {#domain-not-added}
- Preverite logove Ultimate Multisite za kakršne koli napake.
- Preverite, da domena ni že dodano v WP Engine.
- Upe asegurarse, da vaš WP Engine plan podpira število domen ki ga dodajate.

### Problemi z poddomeni {#subdomain-issues}
- Če poddomene ne delajo, se obrnite na podporo WP Engine in zahtevajte konfiguracijo wildcard domena.
- Preverite, da so vaše nastavitve DNS pravilno konfigurirane za glavni domen in poddomene.
