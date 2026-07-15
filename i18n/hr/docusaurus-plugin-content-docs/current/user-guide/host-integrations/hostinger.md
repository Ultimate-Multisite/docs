---
title: Integracija s Hostingerom (hPanel)
sidebar_position: 7
_i18n_hash: ce631be523b8bbe2bf3156a106abfa3d
---
# Integracija s Hostingerom (hPanel)

## Pregled {#overview}

Hostinger je popularan pružatelj web hosting usluga s modernim kontrolnim panellom pod nazivom hPanel. Ultimate Multisite integracija za Hostinger omogućuje automatsku sinhronizaciju domena između Ultimate Multisite i Hostingerovog hPanel-a, što vam omogućuje da automatski upravljate mapiranjem domena i poddomena direktno iz vašeg WordPress admina.

## Svojstva {#features}

- Automatsko kreiranje dodatnog domena u hPanelu
- Automatsko kreiranje poddomena u hPanelu (za instalacije multisite s poddomenama)
- Uklanjanje domena kada se mapiranja obrišu
- Besmjetna integracija s API-jem za upravljanje domenima u hPanelu

## Zahtjevi {#requirements}

Da biste koristili integraciju s Hostingerom, trebate:

1. Račun Hostinger sa pristupom hPanelu
2. API token od Hostingerovog računa
3. Prilazeće konstante definirane u vašem datoteci `wp-config.php`:

```php
define('WU_HOSTINGER_API_TOKEN', 'vaš_hostinger_api_token');
define('WU_HOSTINGER_ACCOUNT_ID', 'vaš_hostinger_account_id');
```

Opcionalno, možete definirati i:

```php
define('WU_HOSTINGER_API_URL', 'https://api.hostinger.com/v1'); // Podrazumijevani API endpoint
```

## Upute za postavljanje {#setup-instructions}

### 1. Generirajte svoj Hostinger API Token {#1-generate-your-hostinger-api-token}

1. Prijavite se na svoj Hostinger račun i pristupite hPanelu
2. Idite na **Account Settings** (Postavke računa) → **API Tokens** (API tokeni)
3. Kliknite na **Create New Token** (Kreiraj novi token)
4. Dajte svom tokenu opisno ime (npr. "Ultimate Multisite")
5. Odaberite potrebne dozvole:
   - Domain management (Upravljanje domenom)
   - Subdomain management (Upravljanje poddomenama)
6. Kopirajte generirani token i sigurno ga pohranite

### 2. Pronađite svoj Account ID {#2-find-your-account-id}

1. U hPanelu, idite na **Account Settings** (Postavke računa) → **Account Information** (Informacije o računu)
2. Vaš Account ID se prikazuje na ovoj stranici
3. Kopirajte i sačuvajte ovaj ID za sljedeći korak

### 3. Dodajte konstante u wp-config.php {#3-add-constants-to-wp-configphp}

Dodajte sljedeće konstante u vaš datoteku `wp-config.php`:

```php
define('WU_HOSTINGER_API_TOKEN', 'vaš_hostinger_api_token');
define('WU_HOSTINGER_ACCOUNT_ID', 'vaš_hostinger_account_id');
```

Ako vaš Hostinger račun koristi drugačiji API endpoint, možete ga prilagoditi:

```php
define('WU_HOSTINGER_API_URL', 'https://api.hostinger.com/v1');
```

### 4. Omogućite integraciju {#4-enable-the-integration}

1. U svom WordPress adminu, idite na **Ultimate Multisite > Settings** (Ultimate Multisite > Postavke)
2. Idite na karticu **Domain Mapping** (Mapeiranje domena)
3. Skrolajte do **Host Integrations** (Integracije Hostova)
4. Omogućite integraciju **Hostinger (hPanel)**
5. Kliknite na **Save Changes** (Spremi promjene)

## Kako to radi {#how-it-works}

### Addon domeni {#addon-domains}

Kada mapirate domen u Ultimate Multisite-u:

1. Integracija šalje zahtjev Hostinger API-ju kako bi dodala domen kao addon domen
2. Domen je konfiguriran da pokazuje na vaš glavni direktorij (root directory)
3. Kada se ukloni mape domena, integracija automatski uklanja addon domen iz hPanel-a

### Poddomeni {#subdomains}

Za instalacije multisite s poddomenima, kada se kreira novi site:

1. Integracija izvlači dio poddomena iz punog domena
2. Šalje zahtjev Hostinger API-ju kako bi dodala poddomen
3. Poddomen je konfiguriran da pokazuje na vaš glavni direktorij (root directory)

## Važne napomene {#important-notes}

- Integracija koristi REST API Hostinger-a za komunikaciju s vašim računom
- Vaš API token mora imati potrebne dozvole za upravljanje domenima i poddomenima
- Integracija ne obrađuje DNS konfiguraciju; domeni moraju već biti usmjereni na vaš Hostinger račun
- Zahtjevi API-ja se sigurno šalju putem HTTPS-a
- Održavajte svoj API token sigurnosnim i nikada ga ne dijelite javno

## Rješavanje problema {#troubleshooting}

### Problemi s povezivanjem API-ja {#api-connection-issues}

Proveri da li je tvoj API token ispravan i da li nije istekao
Provjeri da li je tvoj Account ID ispravan
Osiguraj da imaš potrebna dozvolama za upravljanje domenima putem API tokena
Provjeri da li je tvoj Hostinger račun aktivan i u dobrom stanju

### Domen ne dodan {#domain-not-added}

- Provjeri Ultimate Multisite logove na bilo kakve poruke o greškama
- Proveri da li domen već nije dodan na tvoj Hostinger račun
- Osiguraj da tvoj Hostinger račun nije dosegao granicu za dodatne domene
- Potvrdi da je domen ispravno usmjeren na tvoje Hostinger nameservere

### Problemi s SSL certifikatima {#ssl-certificate-issues}

- Integracija ne obrađuje izdavanje SSL certifikata
- Hostinger obično nudi besplatne SSL certifikate putem AutoSSL-a
- Možeš upravljati SSL certifikatima direktno u hPanelu pod **SSL/TLS**
- Alternativno, koristi Let's Encrypt s Hostingerovom AutoSSL značajkom

## Podrška {#support}

Za dodatnu pomoć oko integracije sa Hostingerom, molimo te da se obratiš:

- [Hostinger API Dokumentacija](https://support.hostinger.com/en/articles/4286-api-documentation)
- [Ultimate Multisite Dokumentacija](/)
- [Ultimate Multisite Podrška](https://ultimatemultisite.com/support)
