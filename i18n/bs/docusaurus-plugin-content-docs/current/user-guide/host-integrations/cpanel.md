---
title: Integracija sa cPanelom
sidebar_position: 5
_i18n_hash: ba79fa3cffb0f29c4eda9bdf59244a2f
---
# Integracija sa cPanel-om {#cpanel-integration}

## Pregled {#overview}
cPanel je jedan od najpopularnijih kontrolnih panela za web hosting koji koriste mnogi provajderi dijeljenog i posvećenog hostinga. Ova integracija omogućava automatsko sinhronizovanje domena između Ultimate Multisite-a i cPanel-a, što vam omogućava da automatski dodajete aliase domena i poddomene na vaš cPanel račun.

## Funkcionalnosti {#features}
- Automatsko kreiranje addon domena u cPanel-u
- Automatsko kreiranje poddomena u cPanel-u (za instalacije multisite-a sa poddomenama)
- Brisanje domena kada se mapiranja obrišu

## Zahtjevi {#requirements}
Sledeće konstante moraju biti definirane u vašoj `wp-config.php` datoteci:

```php
define('WU_CPANEL_USERNAME', 'your_cpanel_username');
define('WU_CPANEL_PASSWORD', 'your_cpanel_password');
define('WU_CPANEL_HOST', 'your_cpanel_host');
```

Opcionalno, možete definisati i:

```php
define('WU_CPANEL_PORT', 2083); // Default je 2083
define('WU_CPANEL_ROOT_DIR', '/public_html'); // Default je /public_html
```

## Upute za postavljanje {#setup-instructions}

### 1. Dohvatite svoje cPanel vjerodajnice {#1-get-your-cpanel-credentials}

1. Dobijte korisničko ime i lozinku za cPanel od vašeg hosting provajdera
2. Odredite vaš cPanel host (obično je `cpanel.yourdomain.com` ili `yourdomain.com:2083`)

### 2. Dodajte konstante u wp-config.php {#2-add-constants-to-wp-configphp}

Dodajte sljedeće konstante u vašu `wp-config.php` datoteku:

```php
define('WU_CPANEL_USERNAME', 'your_cpanel_username');
define('WU_CPANEL_PASSWORD', 'your_cpanel_password');
define('WU_CPANEL_HOST', 'your_cpanel_host');
```

Opcionalno, možete prilagoditi port i korijenski direktorijum:

```php
define('WU_CPANEL_PORT', 2083); // Promijenite ako vaš cPanel koristi drugi port
define('WU_CPANEL_ROOT_DIR', '/public_html'); // Promijenite ako je vaš korijenski direktorijum drugačiji
```

### 3. Omogućite integraciju {#3-enable-the-integration}

1. U vašem WordPress administraciji, idite na Ultimate Multisite > Podešavanja
2. Idite na karticu "Domain Mapping" (Mapiranje domena)
3. Skrolujte do "Host Integrations" (Integracije hosta)
4. Omogućite cPanel integraciju
5. Kliknite na "Save Changes" (Sačuvajte promjene)

## Kako funkcioniše {#how-it-works}

### Addon domeni {#addon-domains}

Kada je domen mapiran u Ultimate Multisite-u:

1. Integracija šalje zahtjev cPanel API-ju da doda domen kao addon domen
2. Domen je konfigurisan da ukazuje na vaš korijenski direktorijum
3. Kada se mapiranje domena ukloni, integracija će ukloniti addon domen iz cPanel-a

### Poddomeni {#subdomains}

Za instalacije multisite-a sa poddomenama, kada se kreira novi sajt:

1. Integracija izvlači dio poddomena iz punog domena
2. Šalje zahtjev cPanel API-ju da doda poddomen
3. Poddomen je konfigurisan da ukazuje na vaš korijenski direktorijum

## Važne napomene {#important-notes}

- Integracija koristi cPanel API2 za komunikaciju sa vašim cPanel računom
- Vaš cPanel račun mora imati dozvole za dodavanje addon domena i poddomena
- Neki hosting provajderi mogu ograničiti broj addon domena ili poddomena koje možete kreirati
- Integracija ne upravlja DNS konfiguracijom; i dalje morate usmjeriti svoje domene na IP adresu vašeg servera

## Rješavanje problema {#troubleshooting}

### Problemi sa API konekcijom {#api-connection-issues}
- Provjerite da li su vaše korisničko ime i lozinka za cPanel ispravni
- Provjerite da li je vaš cPanel host ispravan i dostupan
- Osigurajte da vaš cPanel račun ima potrebne dozvole
- Pokušajte koristiti punu URL adresu za host (npr. `https://cpanel.yourdomain.com`)

### Domen nije dodan {#domain-not-added}
- Provjerite logove Ultimate Multisite-a radi bilo kakvih poruka o greškama
- Provjerite da li domen nije već dodan u cPanel
- Osigurajte da vaš cPanel račun nije dosegao limit za addon domene ili poddomene

### Problemi sa SSL certifikatima {#ssl-certificate-issues}
- Integracija ne upravlja izdajom SSL certifikata
- Morat ćete koristiti cPanel alate SSL/TLS ili funkciju AutoSSL za izdajanje SSL certifikata za vaše domene
- Alternativno, možete koristiti uslugu poput Let's Encrypt sa cPanel AutoSSL-om
