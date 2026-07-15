---
title: Integracija Hostinger (hPanel)
sidebar_position: 7
_i18n_hash: ce631be523b8bbe2bf3156a106abfa3d
---
# Integracija z Hostinger (hPanel)

## Povzetek {#overview}

Hostinger je popularni storitev za hosting s modernim kontrolnim panelom, hPanel. Ultimate Multisite integracija z Hostinger omogoča avtomatizirano sinhronizacijo domenov med Ultimate Multisite in hPanel-om, kar vam omogoča avtomaško upravljanje mapiranja domen in poddomen. To lahko storite neposredno iz vaše WordPress admin panela.

## Funkcionalnosti {#features}

- Avtomatizirana kreacija dodatnih domen v hPanel
- Avtomatizirana kreacija poddomenov v hPanel (za instalacije z poddomenskim multisite)
- Odstranitev domena ob seveda odstranite mapiranja
- Nenavadna integracija z API za upravljanje domenov hPanel

## Zahtevi {#requirements}

Za uporabo integracije Hostinger potrebujete:

1. Račun Hostinger s dostopom do hPanel-a
2. API token od Hostingerja
3. Slede konstante definirane v vašem datoteki `wp-config.php`:

```php
define('WU_HOSTINGER_API_TOKEN', 'vaš_hostinger_api_token');
define('WU_HOSTINGER_ACCOUNT_ID', 'vaš_hostinger_account_id');
```

Opcionalno lahko definirez tudi:

```php
define('WU_HOSTINGER_API_URL', 'https://api.hostinger.com/v1'); // Predhodna točka API
```

## Navodila za nastavitve {#setup-instructions}

### 1. Generirajte svoj Hostinger API token {#1-generate-your-hostinger-api-token}

1. Pri logovanju na svoj račun Hostinger in dostopu do hPanel-a
2. Grejte na **Account Settings** → **API Tokens**
3. Kliknite na **Create New Token** (Ustvari novi token)
4. Dajte svojemu tokenu opisno ime (npr. "Ultimate Multisite")
5. Izberite potrebne dovoljenja:
   - Upravljanje domen
   - Upravljanje poddomenov
6. Kopirajte generirani token in ga varnostno shranite

### 2. Poiščite svoj ID računa {#2-find-your-account-id}

1. V hPanel-u gre na **Account Settings** → **Account Information** (Informacije o računu)
2. Vaš Account ID je prikazan na tej strani
3. Kopirajte in shranite ta ID za naslednji korak

### 3. Dodajte konstante v wp-config.php {#3-add-constants-to-wp-configphp}

Dodajte slede konstante v vaš datotek `wp-config.php`:

```php
define('WU_HOSTINGER_API_TOKEN', 'vaš_hostinger_api_token');
define('WU_HOSTINGER_ACCOUNT_ID', 'vaš_hostinger_account_id');
```

Če sta uporabljate drugačno API endpointa za Hostinger račun, ga lahko prilagodite:

```php
define('WU_HOSTINGER_API_URL', 'https://api.hostinger.com/v1');
```

### 4. Omogočite integracijo {#4-enable-the-integration}

1. V admin panel WordPress, idite na **Ultimate Multisite > Settings** (Nastavitve)
2. Navigirajte na tabu **Domain Mapping** (Mapiranje domen)
3. Prejmovajte do **Host Integrations** (Integracije hosta)
4. Omogočite integracijo **Hostinger (hPanel)**
5. Kliknite na **Save Changes** (Shrani spremembe)

## Kako to deluje {#how-it-works}

### Addon domena {#addon-domains}

Ko mapirate domen v Ultimate Multisite:

1. Integracija pošlje zahtevo Hostinger API-ju, da doda domen kot addon domen
2. Domen je konfiguriran tako, da kaže na vaš glavni direktorij
3. Ko odstranite mapiranje domena, integracija samodejno odstrani addon domen iz hPanel

### Poddomena {#subdomains}

Za instalacije multisite z poddomenami, ko se ustvari nova stran:

1. Integracija izvaja del poddomene iz celotnega domena
2. Pošlje zahtevo Hostinger API-ju, da doda poddomeno
3. Poddomeno je konfigurirano tako, da kaže na vaš glavni direktorij

## Pomembne napake {#important-notes}

- Integracija uporablja REST API Hostingerja za komunikacijo z vašim računom
- Vaš API token mora imeti potrebna dovoljenja za upravljanje domenami in poddomenami
- Integracija ne obravnava konfiguracije DNS; domena morajo biti že usmerjeni na vaš Hostinger račun
- Zahtevi API so varno opravljani preko HTTPS-a
- Ohranite svoj API token varnostno in ga nikoli ne delite javno

## Reševanje težav {#troubleshooting}

### Problemi z povezavo APIja {#api-connection-issues}

Preverite, da je vaš API token pravilno in ni že iztekel
Preverite, da je vaš Account ID pravilno vnesen
Upe asegurarse, da ima vaš API token potrebna dovoljenja za upravljanje domena
Preverite, da je vaš Hostinger račun aktiven in v redu

### Domena ni dodana {#domain-not-added}

- Preverite log Ultimate Multisite za kakršne koli napake
- Upe asegurarse, da ni domena že dodana na vaš Hostinger račun
- Upe asegurarse, da se vaš Hostinger račun ni dosegel omejitve za dodatne domene
- Potrdite, da je domena pravilno usmerjena na vaše Hostinger nameservere

### Problemi z SSL certifikati {#ssl-certificate-issues}

- Integracija ne obravnava izdajanje SSL certifikatov
- Hostinger običajno ponuja brezplačne SSL certifikate preko AutoSSL
- SSL certifikate lahko upravljate direktno v hPanel pod **SSL/TLS**
- Alternativno, uporabite Let's Encrypt z funkcijo AutoSSL od Hostingerja

## Podpora {#support}

Za dodatno pomoč pri integraciji z Hostingerjem se obratite:

- [Hostinger API Dokumentacija](https://support.hostinger.com/en/articles/4286-api-documentation)
- [Ultimate Multisite Dokumentacija](/)
- [Ultimate Multisite Podpora](https://ultimatemultisite.com/support)
