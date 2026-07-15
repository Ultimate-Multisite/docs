---
title: Integracija s cPanelom
sidebar_position: 5
_i18n_hash: ba79fa3cffb0f29c4eda9bdf59244a2f
---
# Integracija s cPanelom

## Pregled {#overview}
cPanel je jedan od najpopularnijih kontrolnih panela za web hosting koji koriste mnogi zajednički i posvećeni pružatelji usluga. Ova integracija omogućuje automatsku sinhronizaciju domena između Ultimate Multisite-a i cPanel-a, što vam omogućuje da automatski dodajete alias domene i poddomene na vaš cPanel račun.

## Svojstva {#features}
- Automatsko kreiranje dodatnog domena u cPanelu
- Automatsko kreiranje poddomene u cPanelu (za instalacije s poddomenskim multisite)
- Uklanjanje domena kada se mape obrišu

## Zahtjevi {#requirements}
Sledeće konstante moraju biti definirane u vašem datoteci `wp-config.php`:

```php
define('WU_CPANEL_USERNAME', 'vaš_cpanel_username');
define('WU_CPANEL_PASSWORD', 'vaša_cpanel_password');
define('WU_CPANEL_HOST', 'vaš_cpanel_host');
```

Opcionalno, možete definirati i:

```php
define('WU_CPANEL_PORT', 2083); // Podrazumevana vrijednost je 2083
define('WU_CPANEL_ROOT_DIR', '/public_html'); // Podrazumevana vrijednost je /public_html
```

## Upute za postavljanje {#setup-instructions}

### 1. Dobavite svoje cPanel podatke {#1-get-your-cpanel-credentials}

1. Dobavite korisničko ime i lozinku za vaš cPanel od svog pružatelja usluga hostinga
2. Odredite svoj cPanel host (obično `cpanel.vašdomen.com` ili `vašdomen.com:2083`)

### 2. Dodajte konstante u wp-config.php {#2-add-constants-to-wp-configphp}

Dodajte sljedeće konstante u vašu datoteku `wp-config.php`:

```php
define('WU_CPANEL_USERNAME', 'vaš_cpanel_username');
define('WU_CPANEL_PASSWORD', 'vaša_cpanel_password');
define('WU_CPANEL_HOST', 'vaš_cpanel_host');
```

Opcionalno, možete prilagoditi port i direktorijum:

```php
define('WU_CPANEL_PORT', 2083); // Promijenite ako vaš cPanel koristi drugi port
define('WU_CPANEL_ROOT_DIR', '/public_html'); // Promijenite ako je vaš root dokument diferente drugačiji
```

### 3. Omogućite integraciju {#3-enable-the-integration}

1. U Ultimate Multisite adminu, idite na Ultimate Multisite > Settings
2. Idite do tab "Domain Mapping" (Mapeiranje domena)
3. Skrolajte prema dolje do "Host Integrations" (Integracije hosta)
4. Omogućite integraciju cPanel-a
5. Kliknite na "Save Changes" (Spremi promjene)

## Kako to radi {#how-it-works}

### Addon Domains (Dodatni domeni) {#addon-domains}

Kada se domen mape u Ultimate Multisite:

1. Integracija šalje zahtjev API-ju cPanel-a kako bi dodala domen kao dodatni domen
2. Domen je konfiguriran da pokazuje na vaš direktorijum za glavni dio (root directory)
3. Kada se ukloni mape domena, integracija će ukloniti dodatni domen iz cPanel-a

### Subdomains (Poddomeni) {#subdomains}

Za instalacije multisite poddomena, kada se kreira nova stranica:

1. Integracija izvlači dio poddomena iz punog domena
2. Šalje zahtjev API-ju cPanel-a kako bi dodala poddomen
3. Poddomen je konfiguriran da pokazuje na vaš direktorijum za glavni dio (root directory)

## Važne napomene {#important-notes}

- Integracija koristi cPanel API2 za komunikaciju s vašim cPanel računom
- Vaš cPanel račun mora imati dozvole za dodavanje dodatnih domena i poddomena
- Neki hosting provajderi mogu ograničiti broj dodatnih domena ili poddomena koje možete kreirati
- Integracija ne obrađuje konfiguraciju DNS-a; i dalje morate usmjeriti svoje domene na IP adresu vašeg servera

## Rješavanje problema (Troubleshooting) {#troubleshooting}

### Problemi s povezivanjem API-ja {#api-connection-issues}
- Provjerite da li su vaša korisnička ime i lozinka za cPanel ispravna
- Provjerite da li je vaš cPanel host ispravan i dostupan
- Osigurajte da vaš cPanel račun ima potrebne dozvole
- Pokušajte koristiti punu URL adresu za host (npr. `https://cpanel.yourdomain.com`)

### Domen ne dodan {#domain-not-added}
- Provjerite Ultimate Multisite logove na bilo kakve poruke o greškama
- Provjerite da li domen već nije dodan u cPanel
- Osigurajte da vaš cPanel račun nije dosegao svoj limit za dodatne domene ili poddomene

### Problemi s SSL certifikatima {#ssl-certificate-issues}
- Integracija ne obrađuje izdavanje SSL certifikata.
- Morat ćete koristiti alate za SSL/TLS u cPanelu ili značajku AutoSSL kako biste izdali SSL certifikate za svoje domene.
- Alternativno, možete koristiti uslugu poput Let's Encrypt s AutoSSLom u cPanelu.
