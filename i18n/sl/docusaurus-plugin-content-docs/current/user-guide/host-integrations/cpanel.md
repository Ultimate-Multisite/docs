---
title: Integracija cPanel
sidebar_position: 5
_i18n_hash: ba79fa3cffb0f29c4eda9bdf59244a2f
---
# Integracija z cPanelom {#cpanel-integration}

## Pregled {#overview}
cPanel je ena od najbolj popularnih kontrolnih paneli za spletno hostiranje, ki jo uporabljajo številni delilni in dedikirani dostajalci. Ta integracija omogoča avtomatizirano sinhronizacijo domenov med Ultimate Multisite in cPanelom, kar vam omogoča avtomaško dodajanje aliase domen (domain aliases) in poddomene na vaš račun v cPanelu.

## Funkcionalnosti {#features}
- Avtomatizirano ustvarjanje dodatnih domen (addon domain) v cPanelu
- Avtomatizirano ustvarjanje poddomene (subdomain) v cPanelu (za instalacije z poddomeno multisite)
- Odstranitev domena ob seveda odstranite povezave (mappings)

## Zahtevi {#requirements}
Slovenian morate definirati naslednje konstante v vašem datoteki `wp-config.php`:

```php
define('WU_CPANEL_USERNAME', 'vaš_cpanel_username');
define('WU_CPANEL_PASSWORD', 'vaš_cpanel_password');
define('WU_CPANEL_HOST', 'vaš_cpanel_host');
```

Opcionalno lahko definirate tudi:

```php
define('WU_CPANEL_PORT', 2083); // Početen je 2083
define('WU_CPANEL_ROOT_DIR', '/public_html'); // Početen je /public_html
```

## Navodila za nastavitve {#setup-instructions}

### 1. Dobite svoje podatke cPanel-a {#1-get-your-cpanel-credentials}

1. Dobite svoj uporabniški račun in geslo cPanel-a od vašega dostajalca
2. Odredite svoj cPanel host (običajno `cpanel.vašdomen.com` ali `vašdomen.com:2083`)

### 2. Dodajte konstante v wp-config.php {#2-add-constants-to-wp-configphp}

Dodajte naslednje konstante v vaš datotek `wp-config.php`:

```php
define('WU_CPANEL_USERNAME', 'vaš_cpanel_username');
define('WU_CPANEL_PASSWORD', 'vaš_cpanel_password');
define('WU_CPANEL_HOST', 'vaš_cpanel_host');
```

Opcionalno lahko prilagodite port in root direktorij:

```php
define('WU_CPANEL_PORT', 2083); // Spremenite, če uporablja vaš cPanel drugačen port
define('WU_CPANEL_ROOT_DIR', '/public_html'); // Spremenite, če je vaš root direktorij drugačen
```

### 3. Omogočite integracijo {#3-enable-the-integration}

1. V administraciji WordPressa, grejte na Ultimate Multisite > Settings (Nastavitve)
2. Navigirajte na tab "Domain Mapping" (Mapiranje domen).
3. Prejmovajte do "Host Integrations" (Integracije hostov).
4. Omogočite integracijo cPanel.
5. Kliknite na "Save Changes" (Shrani spremembe).

## Kako to deluje {#how-it-works}

### Addon Domains (Dodatni domeni) {#addon-domains}

Ko je domen mapiran v Ultimate Multisite:

1. Integracija pošlje zahtevo API-ju cPanelu, da doda domen kot dodatni domen.
2. Domen je konfiguriran tako, da kaže na vaš glavni direktorij.
3. Ko se odstrani mapiranje domena, integracija bo dodalni domen odstranila iz cPanelja.

### Subdomains (Poddomeni) {#subdomains}

Za instalacije multisite z poddomeni, ko se ustvari nov splet:

1. Integracija izvaja del poddomena iz celotnega domena.
2. Pošlje zahtevo API-ju cPanelu za dodajanje poddomena.
3. Poddomen je konfiguriran tako, da kaže na vaš glavni direktorij.

## Pomembne opombe {#important-notes}

- Integracija uporablja API2 cPanelja za komunikacijo z vašim cPanel računom.
- Vaš cPanel račun mora imeti dovoljenja za dodajanje dodatnih domen in poddomen.
- Nekateri hostniki lahko omejajo število dodatnih domen ali poddomenov, ki jih lahko ustvarite.
- Integracija ne obravnava konfiguracije DNS; morate še vedno sami usmeriti svoje domene na IP naslov vašega serverja.

## Reševanje težav (Troubleshooting) {#troubleshooting}

### Problemi z povezavo APIja {#api-connection-issues}
- Preverite da so vaši uporabniški in geslo cPanelja pravilna.
- Preverite, da je vaš host cPanelja pravilno nastavljen in dostopen.
- Upe asegurarse, da ima vaš cPanel račun potrebna dovoljenja.
- Poskusite uporabo celotnega URL za host (npr. `https://cpanel.yourdomain.com`).

### Domen ni dodan {#domain-not-added}
- Preverite log Ultimate Multisite za kakršne koli napake.
- Upe asegurarse, da domen ni že dodan v cPanel.
- Upe asegurarse, da vaš cPanel račun ni dosegel omejitve za dodatne domene ali poddomene.

### Problemi z SSL sertifikati {#ssl-certificate-issues}
- Integracija ne obravnava izdajanja SSL sertifikatov.
- Boste morali uporabiti orodja za SSL/TLS v cPanelu ali funkcijo AutoSSL za izraditev SSL sertifikatov za vaše domene.
- Alternativno lahko uporabite storitev kot je Let's Encrypt z AutoSSLom v cPanelu.
