---
title: Integracija Hostinger (hPanel)
sidebar_position: 7
_i18n_hash: ce631be523b8bbe2bf3156a106abfa3d
---
# Integracija sa Hostingerom (hPanel)

## Pregled {#overview}

Hostinger je popularan provajder web hostinga sa modernom kontrolnom tablom nazvanom hPanel. Integracija Ultimate Multisite za Hostinger omogućava automatsku sinhronizaciju domena između Ultimate Multisite-a i hPanel-a Hostingera, što vam omogućava da automatski upravljate mapiranjem domena i poddomenima direktno iz WordPress admina.

## Funkcionalnosti {#features}

- Automatsko kreiranje addon domena u hPanel-u
- Automatsko kreiranje poddomena u hPanel-u (za instalacije multisite-a sa poddomenima)
- Brisanje domena kada se mapiranja obrišu
- Besprekorna integracija sa API-jem za upravljanje domenima u hPanel-u

## Zahtjevnosti {#requirements}

Da biste koristili integraciju Hostinger-a, potrebno vam je:

1. Hostinger račun sa pristupom hPanel-u
2. API token od Hostingera
3. Definisanje sljedećih konstanti u vašoj `wp-config.php` datoteci:

```php
define('WU_HOSTINGER_API_TOKEN', 'your_hostinger_api_token');
define('WU_HOSTINGER_ACCOUNT_ID', 'your_hostinger_account_id');
```

Opcionalno, možete definisati i:

```php
define('WU_HOSTINGER_API_URL', 'https://api.hostinger.com/v1'); // Podrazumevani API endpoint
```

## Upute za postavljanje {#setup-instructions}

### 1. Generisanje Hostinger API Token-a {#1-generate-your-hostinger-api-token}

1. Prijavite se na svoj Hostinger račun i pristupite hPanel-u
2. Idite na **Account Settings** → **API Tokens**
3. Kliknite na **Create New Token**
4. Dajte tokenu opisno ime (npr. "Ultimate Multisite")
5. Odaberite potrebne dozvole:
   - Domain management
   - Subdomain management
6. Kopirajte generisani token i sigurno ga sačuvajte

### 2. Pronalaženje Account ID-a {#2-find-your-account-id}

1. U hPanel-u, idite na **Account Settings** → **Account Information**
2. Vaš Account ID je prikazan na ovoj stranici
3. Kopirajte i sačuvajte ovaj ID za sljedeći korak

### 3. Dodavanje konstanti u wp-config.php {#3-add-constants-to-wp-configphp}

Dodajte sljedeće konstante u vašu `wp-config.php` datoteku:

```php
define('WU_HOSTINGER_API_TOKEN', 'your_hostinger_api_token');
define('WU_HOSTINGER_ACCOUNT_ID', 'your_hostinger_account_id');
```

Ako vaš Hostinger račun koristi drugačiji API endpoint, možete ga prilagoditi:

```php
define('WU_HOSTINGER_API_URL', 'https://api.hostinger.com/v1');
```

### 4. Omogućavanje integracije {#4-enable-the-integration}

1. U vašem WordPress adminu, idite na **Ultimate Multisite > Settings**
2. Idite na karticu **Domain Mapping**
3. Skrolujte do **Host Integrations**
4. Omogućite integraciju **Hostinger (hPanel)**
5. Kliknite na **Save Changes**

## Kako funkcioniše {#how-it-works}

### Addon domeni {#addon-domains}

Kada mapirate domen u Ultimate Multisite-u:

1. Integracija šalje zahtjev Hostinger API-ju da doda domen kao addon domen
2. Domen se konfiguriše da ukazuje na vaš korijenski direktorijum
3. Kada se mapiranje domena ukloni, integracija automatski uklanja addon domen iz hPanel-a

### Poddomeni {#subdomains}

Za instalacije multisite-a sa poddomenima, kada se kreira novi sajt:

1. Integracija izvlači dio poddomena iz punog domena
2. Šalje zahtjev Hostinger API-ju da doda poddomen
3. Poddomen se konfiguriše da ukazuje na vaš korijenski direktorijum

## Važne napomene {#important-notes}

- Integracija koristi Hostingerov REST API za komunikaciju sa vašim računom
- Vaš API token mora imati potrebne dozvole za upravljanje domenima i poddomenima
- Integracija ne upravlja DNS konfiguracijom; domeni moraju biti već usmjereni na vaš Hostinger račun
- API zahtjevi se sigurno šalju preko HTTPS-a
- Čuvajte svoj API token sigurno i nikada ga ne dijelite javno

## Rješavanje problema {#troubleshooting}

### Problemi sa API konekcijom {#api-connection-issues}

- Provjerite da li je vaš API token tačan i da nije istekao
- Provjerite da li je vaš Account ID tačan
- Osigurajte da vaš API token ima potrebne dozvole za upravljanje domenima
- Potvrdite da je vaš Hostinger račun aktivan i u dobrom stanju

### Domen nije dodan {#domain-not-added}

- Provjerite logove Ultimate Multisite-a radi bilo kakvih poruka o greškama
- Potvrdite da domen nije već dodan na vaš Hostinger račun
- Osigurajte da vaš Hostinger račun nije dosegao limit za addon domene
- Potvrdite da je domen pravilno usmjeren na vaše Hostinger nameservere

### Problemi sa SSL certifikatima {#ssl-certificate-issues}

- Integracija ne upravlja izdajanjem SSL certifikata
- Hostinger obično nudi besplatne SSL certifikate putem AutoSSL-a
- Možete upravljati SSL certifikatima direktno u hPanel-u pod **SSL/TLS**
- Alternativno, koristite Let's Encrypt sa Hostingerovom AutoSSL funkcijom

## Podrška {#support}

Za dodatnu pomoć sa integracijom Hostinger-a, molimo vas da pogledate:

- [Hostinger API Documentation](https://support.hostinger.com/en/articles/4286-api-documentation)
- [Ultimate Multisite Documentation](/)
- [Ultimate Multisite Support](https://ultimatemultisite.com/support)
