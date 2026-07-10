---
title: Hostinger (hPanel) Integráció
sidebar_position: 7
_i18n_hash: ce631be523b8bbe2bf3156a106abfa3d
---
# Hostinger (hPanel) Integráció {#hostinger-hpanel-integration}

## Áttekintő {#overview}

Hostinger népszerű webhosting szolgáltató, amely modern irányítópulttal, az hPanel-lel rendelkezik. Az Ultimate Multisite Hostinger integráció automatikus domain szinkronizációt biztosít az Ultimate Multisite és a Hostinger hPanel-e között, így automatikusan kezelheti a domain mappákat és a subdomain-eket közvetlenül a WordPress admin felületéről.

## Funkciók {#features}

- Automatikus addon domain létrehozása az hPanel-ben
- Automatikus subdomain létrehozása az hPanel-ben (subdomain multisite telepítések esetén)
- Domain eltávolítása, ha a mappákat törli
- Zökkenőmentes integráció az hPanel domain menedzsment API-jával

## Feltételek {#requirements}

Ahhoz, hogy használja a Hostinger integrációt, szüksége van:

1. Egy Hostinger fiókra, amely hPanel hozzáféréssel rendelkezik
2. Egy API token Hostinger-től
3. A következő állandó értékek definiálására a `wp-config.php` fájlában:

```php
define('WU_HOSTINGER_API_TOKEN', 'your_hostinger_api_token');
define('WU_HOSTINGER_ACCOUNT_ID', 'your_hostinger_account_id');
```

Opcionálisan definiálhat:

```php
define('WU_HOSTINGER_API_URL', 'https://api.hostinger.com/v1'); // Alap API endpoint
```

## Beállítási utasítások {#setup-instructions}

### 1. Generálja a Hostinger API token-ját {#1-generate-your-hostinger-api-token}

1. Jelölje be a Hostinger fiókjába és lépjen az hPanel-be
2. Navigáljon az **Account Settings** → **API Tokens** menüpontra
3. Kattintson a **Create New Token** gombra
4. Adjon le a token-jának egy leíró nevet (pl. "Ultimate Multisite")
5. Válassza ki a szükséges engedélyeket:
   - Domain menedzsment
   - Subdomain menedzsment
6. Másolja ki a generált token-t és tárolja biztonságosan

### 2. Keresse meg a fiók ID-jét {#2-find-your-account-id}

1. Az hPanel-ben navigáljon az **Account Settings** → **Account Information** menüpontra
2. A Fiók ID-je ezen az oldalon látható
3. Másolja ki és mentse meg ezt az ID-t a következő lépésre

### 3. Adja hozzá az állandó értékeket a wp-config.php-hez {#3-add-constants-to-wp-configphp}

Adja hozzá a következő állandó értékeket a `wp-config.php` fájljához:

```php
define('WU_HOSTINGER_API_TOKEN', 'your_hostinger_api_token');
define('WU_HOSTINGER_ACCOUNT_ID', 'your_hostinger_account_id');
```

Ha a Hostinger fióka más API endpoint-et használ, testre szabhatja:

```php
define('WU_HOSTINGER_API_URL', 'https://api.hostinger.com/v1');
```

### 4. Aktiválja az integrációt {#4-enable-the-integration}

1. A WordPress admin felületén navigáljon az **Ultimate Multisite > Settings** menüpontra
2. Navigáljon a **Domain Mapping** fülre
3. Keressen le az **Host Integrations** szekciót
4. Aktiválja az **Hostinger (hPanel)** integrációt
5. Kattintson a **Save Changes** gombra

## Hogyan működik {#how-it-works}

### Addon Domain-ek {#addon-domains}

Amikor egy domain-t mappál az Ultimate Multisite-ban:

1. Az integráció egy kérést küld a Hostinger API-hoz, hogy hozzáadja a domain-t addon domainként
2. A domain-t úgy konfigurálja, hogy a gyökér könyvtárához mutatjon
3. Ha egy domain mappáját törli, az integráció automatikusan eltávolítja az addon domain-t az hPanel-ből

### Subdomain-ek {#subdomains}

Subdomain multisite telepítések esetén, amikor új oldal kerül létrehozásra:

1. Az integráció kiírja a subdomain részét a teljes domain-ből
2. Kérést küld a Hostinger API-hoz, hogy hozzáadja a subdomain-et
3. A subdomain-t úgy konfigurálja, hogy a gyökér könyvtárához mutatjon

## Fontos megjegyzések {#important-notes}

- Az integráció a Hostinger REST API-t használja a fiókjához való kommunikációhoz
- Az API token-jának rendelkeznie kell az addon és subdomain menedzsmenthez szükséges engedélyekkel
- Az integráció nem kezeli a DNS konfigurációt; a domain-eknak már előre kell mutatniuk a Hostinger fiókhoz
- Az API kérések biztonságosan HTTPS protokollon történnek
- Tartsa biztonságosak az API token-ját, és ne osztja ki nyilvánosan

## Hibaelhárítás {#troubleshooting}

### API kapcsolat problémái {#api-connection-issues}

- Ellenőrizze, hogy az API token-ja helyes és nem érvénytelen
- Ellenőrizze, hogy a Fiók ID-je helyes
- Győződjön meg róla, hogy az API token-jának rendelkezik a szükséges engedélyekkel a domain menedzsmenthez
- Ellenőrizze, hogy a Hostinger fióka aktív és megfelelően működik

### Domain nem adódott hozzá {#domain-not-added}

- Ellenőrizze az Ultimate Multisite logjaink minden hibaüzenetet
- Ellenőrizze, hogy a domain nem került már hozzáadásra a Hostinger fiókjához
- Győződjön meg róla, hogy a Hostinger fiókja nem érte el az addon domain limitjét
- Kérjük visszaigazolni, hogy a domain megfelelően mutatja a Hostinger nameserver-ekhez

### SSL Certificate problémák {#ssl-certificate-issues}

- Az integráció nem kezeli az SSL certificate kiállítását
- A Hostinger általában ingyenes SSL certificate-eket biztosít AutoSSL-en keresztül
- Az SSL certificate-eket közvetlenül kezelheti az hPanel-ben az **SSL/TLS** alatt
- Alternatívaként használja a Let's Encrypt-et a Hostinger AutoSSL funkciójával

## Támogatás {#support}

További segítségre az Ultimate Multisite Hostinger integrációjával kapcsolatban, kérjük, tekintse át:

- [Hostinger API Documentation](https://support.hostinger.com/en/articles/4286-api-documentation)
- [Ultimate Multisite Documentation](/)
- [Ultimate Multisite Support](https://ultimatemultisite.com/support)
