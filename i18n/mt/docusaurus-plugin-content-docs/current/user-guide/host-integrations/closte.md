---
title: Integrazzjoni Closte
sidebar_position: 7
_i18n_hash: 8f07c74ab2f7df614f502e0cc089c3e0
---
# Integrazzjoni ma' Closte {#closte-integration}

## Panoramika {#overview}
Closte hija piattaforma hosting WordPress gestita li tsetta fuq infrastruttura Google Cloud. Dan l-integrazzjoni tismella sincronizzazzjoni automatika tal-domain u il-ġestjoni tal-SSL certificate bejn Ultimate Multisite u Closte.

## Funzjonijiet {#features}
- Sincronizzazzjoni automatika tal-domain
- Ġestjoni tal-SSL certificate
- Support għal domain wildcard
- Ma għandekx configurazzjoni jekk qed tservi fuq Closte

## Reġistrazzjonijiet {#requirements}
Il-konstanta li sigurtabbil għandha tiddefini fil-file `wp-config.php` tiegħek jekk qed użaw Closte:

```php
define('CLOSTE_CLIENT_API_KEY', 'your_api_key');
```

Il-konstanta li tista' tkun già definita jekk qed tservi fuq Closte.

## Istruzzjonijiet ta l-Istawarra (Setup) {#setup-instructions}

### 1. Verifika il-Closte API Key tiegħek {#1-verify-your-closte-api-key}

Jekk qed tservi fuq Closte, il-konstanta `CLOSTE_CLIENT_API_KEY` għandha tkun già definita fil-file `wp-config.php` tiegħek. Tista' verifika dan minn is-file `wp-config.php` tiegħek.

### 2. Iżna' l-Integrazzjoni (Enable the Integration) {#2-enable-the-integration}

1. F'admin WordPress tiegħek, għandi itra għal Ultimate Multisite > Settings
2. Naviga għall-tab "Domain Mapping"
3. Scrolla' wara għal "Host Integrations"
4. Iżna' l-integrazzjoni Closte
5. Klikka fuq "Save Changes"

## Come Funziona {#how-it-works}
Meta li domain jomm mappat f'Ultimate Multisite:

1. L-integrazzjoni tiffaċċja riċievi għall-API ta' Closte biex tiddarba d-domain fl-app tiegħek
2. Closte tgħandu l-ġestjoni automatika tal-SSL certificate
3. Meta tiddirba il-mapping tal-domain, l-integrazzjoni tiddirba d-domain minn Closte

L-integrazzjoni tistabbilixxi wkoll ma' l-setting ta dns check interval f'Ultimate Multisite, li jippermettiklek tsetConfiga kif wieħed jiddeq il-sistema biex tqesser is-sincronizzazzjoni tal-DNS u l-isskutta tal-SSL certificate.

## Kreawja tal-Record ta' Domain {#domain-record-creation}

Questa integrazione assicura che quando si crea o si duplica un sito, venga creato automaticamente un record di dominio. Questo è particolarmente importante per l'integrazione Closte, poiché la creazione del record di dominio attiva l'API Closte per creare il dominio e il certificato SSL.

## Risoluzione dei problemi (Troubleshooting) {#troubleshooting}

### Problemi di connessione API {#api-connection-issues}
- Verifica che la tua chiave API Closte sia corretta
- Assicurati che il tuo account Closte abbia i permessi necessari

### Problemi con il Certificato SSL {#ssl-certificate-issues}
- Closte potrebbe impiegare un po' di tempo per emettere i certificati SSL (solitamente 5-10 minuti)
- Verifica che i tuoi domini puntino correttamente all'indirizzo IP del tuo server Closte
- Controlla i record DNS del tuo dominio per assicurarti che siano configurati correttamente

### Dominio non aggiunto {#domain-not-added}
- Controlla i log di Ultimate Multisite per eventuali messaggi di errore
- Verifica che il dominio non sia già aggiunto a Closte
- Assicurati che i record DNS del tuo dominio siano configurati correttamente

### Intervallo di controllo DNS {#dns-check-interval}
- Se l'emissione dei certificati SSL richiede troppo tempo, puoi regolare l'intervallo di controllo DNS nelle impostazioni di Mappatura del Dominio (Domain Mapping settings)
- L'intervallo predefinito è di 300 secondi (5 minuti), ma puoi impostarlo fino a 10 secondi per controlli più rapidi durante i test
