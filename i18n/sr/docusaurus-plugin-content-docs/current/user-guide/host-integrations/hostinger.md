---
title: Integracija Hostinger (hPanel)
sidebar_position: 7
_i18n_hash: ce631be523b8bbe2bf3156a106abfa3d
---
# Integracija sa Hostingerom (hPanel) {#hostinger-hpanel-integration}

## Pregled {#overview}

Hostinger je popularan pružalac web hosting usluga sa modernim kontrolnim panelom pod nazivom hPanel. Ultimate Multisite integracija za Hostinger omogućava automatsku sinhronizaciju domena između Ultimate Multisite i Hostinger hPanel-a, što vam omogućava da automatski upravljate mapiranjem domena i poddomena direktno iz vašeg WordPress admin panela.

## Karakteristike {#features}

- Automatsko kreiranje dodatnih domen u hPanelu
- Automatsko kreiranje poddomena u hPanelu (za instalacije multisite sa poddomenama)
- Uklanjanje domena kada se mapiranja obrišu
- Besprekorna integracija sa API-jem za upravljanje domenima u hPanelu

## Zahtevi {#requirements}

Da biste koristili integraciju sa Hostingerom, potrebno vam je:

1. Račun Hostinger sa pristupom hPanel-u
2. API token od Hostinger-a
3. Sledeće konstante definisane u vašem fajlu `wp-config.php`:

```php
define('WU_HOSTINGER_API_TOKEN', 'vaš_hostinger_api_token');
define('WU_HOSTINGER_ACCOUNT_ID', 'vaš_hostinger_account_id');
```

Opciono, možete definisati i:

```php
define('WU_HOSTINGER_API_URL', 'https://api.hostinger.com/v1'); // Podrazumevani API endpoint
```

## Uputstva za podešavanje {#setup-instructions}

### 1. Generišite svoj Hostinger API Token {#1-generate-your-hostinger-api-token}

1. Prijavite se na svoj Hostinger nalog i pristupite hPanel-u
2. Idite do **Account Settings** → **API Tokens**
3. Kliknite na **Create New Token** (Kreiraj novi token)
4. Dajte svom tokenu opisno ime (npr. "Ultimate Multisite")
5. Izaberite potrebna dozvolama:
   - Upravljanje domenima
   - Upravljanje poddomenima
6. Kopirajte generisani token i bezbedno ga sačuvajte

### 2. Pronađite svoj Account ID {#2-find-your-account-id}

1. U hPanelu, idite do **Account Settings** → **Account Information** (Informacije o nalogu)
2. Vaš Account ID se prikazuje na ovoj stranici
3. Kopirajte i sačuvajte ovaj ID za sledeći korak

### 3. Dodajte konstante u wp-config.php {#3-add-constants-to-wp-configphp}

Dodajte sledeće konstante u vaš fajl `wp-config.php`:

```php
define('WU_HOSTINGER_API_TOKEN', 'vaš_hostinger_api_token');
define('WU_HOSTINGER_ACCOUNT_ID', 'vaš_hostinger_account_id');
```

Ako vaš Hostinger nalog koristi drugačiji API endpoint, možete ga prilagoditi:

```php
define('WU_HOSTINGER_API_URL', 'https://api.hostinger.com/v1');
```

### 4. Omogućavanje integracije {#4-enable-the-integration}

1. U admin paneli WordPressu, idite na **Ultimate Multisite > Settings** (Ultimate Multisite > Podešavanja)
2. Idite na karticu **Domain Mapping** (Mapiranje domena)
3. Skrolujte do sekcije **Host Integrations** (Integracije sa Hostom)
4. Omogućite integraciju **Hostinger (hPanel)**
5. Kliknite na **Save Changes** (Sačuvaj promene)

## Kako to funkcioniše {#how-it-works}

### Dodatni domeni (Addon Domains) {#addon-domains}

Kada mapirate domen u Ultimate Multisite:

1. Integracija šalje zahtev Hostinger API-ju da doda domen kao dodatni domen
2. Domen je podešen da pokazuje na vaš root direktorijum
3. Kada se ukloni mapiranje domena, integracija automatski uklanja dodatni domen iz hPanel-a

### Poddomeni (Subdomains) {#subdomains}

Za instalacije multisite poddomena, kada se kreira novi sajt:

1. Integracija izvlači deo sa poddomenom iz punog domena
2. Šalje zahtev Hostinger API-ju da doda poddomen
3. Poddomen je podešen da pokazuje na vaš root direktorijum

## Važne napomene {#important-notes}

- Integracija koristi REST API Hostinger-a za komunikaciju sa vašim nalogom
- Vaš API token mora imati potrebna dozvolama za upravljanje domenima i poddomenima
- Integracija ne obrađuje DNS konfiguraciju; domeni moraju već biti usmereni na vaš Hostinger nalog
- Zahtevi API-ja se bezbedno šalju preko HTTPS-a
- Održavajte svoj API token sigurno i nikada ga ne delite javno

## Rešavanje problema (Troubleshooting) {#troubleshooting}

### Problemi sa konekcijom API-ja {#api-connection-issues}

Проверите да ли је ваш API токен тачан и да није истекао
Проверите да ли је ваш Account ID тачан
Уверите се да ваш API токен има неопходне дозволе за управљање доменима
Проверите да ли је ваш Hostinger акаунт активен и у добро стању

### Домен није додатан {#domain-not-added}

- Проверите логи Ultimate Multisite на предмет било каквих порука о грешци
- Проверите да домен још није додатан у ваш Hostinger акаунт
- Уверите се да ваш Hostinger акаунт није достигнуо свој лимит за аддон домене
- Потврдите да је домен исправно подељен на ваше Hostinger имена сервере

### Проблеми са SSL сертификатима {#ssl-certificate-issues}

- Интеграција не управља издавањем SSL сертификата
- Hostinger обично пружа бесплатне SSL сертификате кроз AutoSSL
- Можете да управљате SSL сертификатима директно у hPanel под **SSL/TLS**
- Или, користите Let's Encrypt са функцијом AutoSSL-а Hostinger-а

## Подршка {#support}

За додатну помоћ са интеграцијом Hostinger-а, обратите се на:

- [Hostinger API Documentation](https://support.hostinger.com/en/articles/4286-api-documentation)
- [Ultimate Multisite Documentation](/)
- [Ultimate Multisite Support](https://ultimatemultisite.com/support)
