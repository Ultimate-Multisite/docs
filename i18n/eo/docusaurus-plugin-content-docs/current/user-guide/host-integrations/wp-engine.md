---
title: Integrado WP Engine
sidebar_position: 2
_i18n_hash: ceeee20432439d8afb3002dd0dd1ff12
---
# Integrado kun WP Engine

## Ĝenerala Informoj {#overview}
WP Engine estas premium administrita WordPress hospita platformo, kiu koncesas optimitan performon, sekurecon kaj skalabilajn kapablon por WordPress-sitoj. Ĉi tiu integracio permesas aŭtomatan domen sincronigon inter Ultimate Multisite kaj WP Engine.

## Funkcioj {#features}
- Aŭtomata domeno sincronigo
- Subdomeno-subteno por multisite instaliloj
- Senproblema integrigo kun la ekzistantaj sistemoj de WP Engine

## Requisitoj {#requirements}
La integracio aŭtomate detektas, ĉu vi hospitas sur WP Engine, kaj uzas la integritan WP Engine API. Ne serĉas plia konfiguritaĵo, se la plugino WP Engine estas aktiva kaj bone konfigurita.

Tamen, se vi bezonas manuve de la integracion, vi povas defini unu el ĉi ti konstanta en via `wp-config.php` filiro:

```php
define('WPE_APIKEY', 'via_api_clavo'); // Preferita metodo
// Aŭ
define('WPE_API', 'via_api_clavo'); // Alternativa metodo
```

## Instalado Instruoj {#setup-instructions}

### 1. Verifi WP Engine Pluginon {#1-verify-wp-engine-plugin}

Se vi hospitas sur WP Engine, la plugino WP Engine devas esti instalita kaj aktiva. Verifuji ke:

1. La plugino WP Engine estas aktiva
2. La filiro `wp-content/mu-plugins/wpengine-common/class-wpeapi.php` ekzistas

### 2. Aktivi la Integracion {#2-enable-the-integration}

1. En via WordPress admina, diru Ultimate Multisite > Settings (Konfigurado)
2. Navigu al la tabelo "Domain Mapping" (Domeno Mapado)
3. Scrollu nedon en "Host Integrations" (Hospita Integradoj)
4. Aktivi la WP Engine integracion
5. Kliku sur "Save Changes" (Salvi ŝanĝojn)

## Kiel Ĝi Funkcias {#how-it-works}

### Domeno Sincronigo {#domain-syncing}

Kiam domeno estas mapita en Ultimate Multisite:

1. La integracio uzas la WP Engine API por aĉi la domenon al via WP Engine instalilo
2. WP Engine maneĝas la domeno-konfigurigon kaj SSL-sertifikato-emitadon
3. Kiam domeno-mapado estas forigita, la integracio forigas la domenon de WP Engine

### Subdomeno-subteno {#subdomain-support}

Por subdomain multisite instalacioj:

1. Integracioja dodaje vsak subdomain na WP Engine, ko novo spoyt je kreiran.
2. WP Engine obravlja konfiguracijo subdomainov.
3. Ko spoyt je izbrisano, integracija ga odstrani iz WP Engine.

## Pomembni napomi {#important-notes}

### Wildcard domena {#wildcard-domains}

Za instalacije multisite z subdomaini, priporočamo, da se obrnete na podporo WP Engine in zahtevate konfiguracijo wildcard domena. To omogoča, da bodo vsi poddomeni delovali samodejno brez potrebe po dodajanju vsake zasebno.

### SSL sertifikati {#ssl-certificates}

WP Engine samodejno obravlja izdajo in obnovitev SSL sertifikatov za vse domene, ki so dodani skozi to integracijo. Ni potrebna dodatna konfiguracija.

## Reševanje težav (Troubleshooting) {#troubleshooting}

### Problemi z povezavo API {#api-connection-issues}
- Preverite da je plugin WP Engine aktiven in pravilno konfiguriran.
- Če ste sami definili API ključ, preverite, da je on pravilne.
- Obrnite se na podporo WP Engine, če imate težave s API.

### Domen ni dodan {#domain-not-added}
- Preverite logove Ultimate Multisite za kakršne koli sporočila o napaki.
- Preverite, da domena ni že dodano v WP Engine.
- Upe asegurarse, da vaš WP Engine plan podpira število domen ki ga dodajate.

### Problemi z poddomeni {#subdomain-issues}
- Če poddomeni ne delujejo, se obrnite na podporo WP Engine in zahtevajte konfiguracijo wildcard domena.
- Preverite, da so vaše nastavitve DNS pravilno konfigurirane za glavni domen in poddomene.
