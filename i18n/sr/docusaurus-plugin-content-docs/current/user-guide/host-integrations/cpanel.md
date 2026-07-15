---
title: Integracija sa cPanelom
sidebar_position: 5
_i18n_hash: ba79fa3cffb0f29c4eda9bdf59244a2f
---
# Integracija sa cPanel

## Pregled {#overview}
cPanel je jedan od najpopularnijih kontrolnih panela za web hosting koji koriste mnogi zajednički i posvećeni hosting provajderi. Ova integracija omogućava automatsku sinhronizaciju domena između Ultimate Multisite-a i cPanel-a, što vam omogućava da automatski dodajete alias domene i poddomene na vaš nalog u cPanel-u.

## Karakteristike {#features}
- Automatsko kreiranje dodatnog domena (addon domain) u cPanel-u
- Automatsko kreiranje poddomena u cPanel-u (za instalacije sa više multisite poddomena)
- Uklanjanje domena kada se mape obrišu

## Zahtevi {#requirements}
Slede konstante moraju biti definisane u vašem fajlu `wp-config.php`:

```php
define('WU_CPANEL_USERNAME', 'vaš_cpanel_username');
define('WU_CPANEL_PASSWORD', 'vaša_cpanel_password');
define('WU_CPANEL_HOST', 'vaš_cpanel_host');
```

Opciono, možete definisati i:

```php
define('WU_CPANEL_PORT', 2083); // Podrazumevana vrednost je 2083
define('WU_CPANEL_ROOT_DIR', '/public_html'); // Podrazumevana vrednost je /public_html
```

## Uputstva za podešavanje {#setup-instructions}

### 1. Dobijte svoje cPanel podatke {#1-get-your-cpanel-credentials}

1. Dobavite korisničko ime i lozinku za cPanel od vašeg hosting provajdera
2. Odredite svoj cPanel host (obično `cpanel.vašdomen.com` ili `vašdomen.com:2083`)

### 2. Dodajte konstante u wp-config.php {#2-add-constants-to-wp-configphp}

Dodajte sledeće konstante u vaš fajl `wp-config.php`:

```php
define('WU_CPANEL_USERNAME', 'vaš_cpanel_username');
define('WU_CPANEL_PASSWORD', 'vaša_cpanel_password');
define('WU_CPANEL_HOST', 'vaš_cpanel_host');
```

Opciono, možete prilagoditi port i root direktorijum:

```php
define('WU_CPANEL_PORT', 2083); // Promenite ako vaš cPanel koristi drugi port
define('WU_CPANEL_ROOT_DIR', '/public_html'); // Promenite ako je vaš dokument root drugačiji
```

### 3. Omogućite integraciju {#3-enable-the-integration}

1. U Ultimate Multisite admin panelu, idite u Settings (Podešavanja)
2. Idite na karticu "Domain Mapping" (Mapiranje domena)
3. Skrolujte do "Host Integrations" (Integracije hosta)
4. Omogućite integraciju cPanel-a
5. Kliknite na "Save Changes" (Sačuvaj promene)

## Kako to funkcioniše {#how-it-works}

### Addon Domeni (Dodatni domeni) {#addon-domains}

Kada se domen mapira u Ultimate Multisite:

1. Integracija šalje zahtev API-ju cPanel-a da doda domen kao dodatni domen
2. Domen je podešen da pokazuje na vaš direktorijum za root (glavnu lokaciju)
3. Kada se ukloni mapiranje domena, integracija će ukloniti dodatni domen iz cPanel-a

### Poddomeni (Subdomains) {#subdomains}

Za instalacije multisite poddomena, kada se kreira novi sajt:

1. Integracija izvlači deo poddomena iz punog domena
2. Šalje zahtev API-ju cPanel-a da doda poddomen
3. Poddomen je podešen da pokazuje na vaš direktorijum za root (glavnu lokaciju)

## Važne napomene {#important-notes}

- Integracija koristi cPanel API2 za komunikaciju sa vašim cPanel nalogom
- Vaš cPanel nalog mora imati dozvole za dodavanje dodatnih domena i poddomena
- Neki hosting provajderi mogu ograničiti broj dodatnih domena ili poddomena koje možete kreirati
- Integracija ne upravlja DNS konfiguracijom; i dalje morate usmeriti svoje domene na IP adresu vašeg servera

## Rešavanje problema (Troubleshooting) {#troubleshooting}

### Problemi sa konekcijom API-ja {#api-connection-issues}
- Proverite da li su vaša korisnička imena i lozinke cPanel-a ispravna
- Proverite da li je vaš cPanel host ispravan i dostupan
- Osigurajte da vaš cPanel nalog ima potrebne dozvole
- Pokušajte da koristite punu URL adresu za host (npr. `https://cpanel.yourdomain.com`)

### Domen nije dodan {#domain-not-added}
- Proverite logove Ultimate Multisite na bilo kakve poruke o greškama
- Proverite da li domen već nije dodan u cPanel-u
- Osigurajte da vaš cPanel nalog nije dosegao granicu za dodatne domene ili poddomene

### Problemi sa SSL sertifikatom {#ssl-certificate-issues}
- Integracija ne obrađuje izdavanje SSL sertifikata.
- Morali biste koristiti alate za SSL/TLS u cPanelu ili funkciju AutoSSL da izdajete SSL sertifikate za vaše domene.
- Alternativno, možete koristiti uslugu poput Let's Encrypt sa AutoSSLom u cPanelu.
