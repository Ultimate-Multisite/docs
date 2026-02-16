---
title: cPanel integráció
sidebar_position: 5
_i18n_hash: ba79fa3cffb0f29c4eda9bdf59244a2f
---
# cPanel integráció

## Áttekintés
A cPanel az egyik legnépszerűbb webtárhely-kezelő felület, amelyet számos osztott és dedikált tárhelyszolgáltató használ. Ez az integráció lehetővé teszi az automatikus domain-szinkronizálást az Ultimate Multisite és a cPanel között, így automatikusan hozzáadhatsz domain aliasokat és aldomaineket a cPanel fiókodhoz.

## Funkciók
- Automatikus addon domain létrehozása a cPanelben
- Automatikus aldomain létrehozása a cPanelben (aldomain alapú multisite telepítések esetén)
- Domain törlése a hozzárendelések eltávolításakor

## Követelmények
A következő konstansokat kell definiálnod a `wp-config.php` fájlban:

```php
define('WU_CPANEL_USERNAME', 'your_cpanel_username');
define('WU_CPANEL_PASSWORD', 'your_cpanel_password');
define('WU_CPANEL_HOST', 'your_cpanel_host');
```

Opcionálisan a következőket is megadhatod:

```php
define('WU_CPANEL_PORT', 2083); // Default is 2083
define('WU_CPANEL_ROOT_DIR', '/public_html'); // Default is /public_html
```

## Beállítási útmutató

### 1. cPanel hitelesítő adatok beszerzése

1. Szerezd be a cPanel felhasználóneved és jelszavad a tárhelyszolgáltatódtól
2. Határozd meg a cPanel hosztot (általában `cpanel.yourdomain.com` vagy `yourdomain.com:2083`)

### 2. Konstansok hozzáadása a wp-config.php fájlhoz

Add hozzá a következő konstansokat a `wp-config.php` fájlodhoz:

```php
define('WU_CPANEL_USERNAME', 'your_cpanel_username');
define('WU_CPANEL_PASSWORD', 'your_cpanel_password');
define('WU_CPANEL_HOST', 'your_cpanel_host');
```

Opcionálisan testreszabhatod a portot és a gyökérkönyvtárat:

```php
define('WU_CPANEL_PORT', 2083); // Change if your cPanel uses a different port
define('WU_CPANEL_ROOT_DIR', '/public_html'); // Change if your document root is different
```

### 3. Az integráció engedélyezése

1. A WordPress adminisztrációs felületén navigálj az Ultimate Multisite > Settings menüpontra
2. Kattints a "Domain Mapping" fülre
3. Görgess le a "Host Integrations" részhez
4. Engedélyezd a cPanel integrációt
5. Kattints a "Save Changes" gombra

## Hogyan működik

### Addon domainek

Amikor egy domaint hozzárendelsz az Ultimate Multisite-ban:

1. Az integráció kérést küld a cPanel API-jának, hogy addon domainként adja hozzá a domaint
2. A domain a gyökérkönyvtáradra lesz beállítva
3. Amikor egy domain-hozzárendelést eltávolítasz, az integráció törli az addon domaint a cPanelből

### Aldomainek

Aldomain alapú multisite telepítések esetén, amikor új oldalt hozol létre:

1. Az integráció kivonja az aldomain részt a teljes domainből
2. Kérést küld a cPanel API-jának az aldomain hozzáadásához
3. Az aldomain a gyökérkönyvtáradra lesz beállítva

## Fontos tudnivalók

- Az integráció a cPanel API2-t használja a cPanel fiókoddal való kommunikációhoz
- A cPanel fiókodnak rendelkeznie kell addon domainek és aldomainek hozzáadásához szükséges jogosultságokkal
- Egyes tárhelyszolgáltatók korlátozhatják a létrehozható addon domainek vagy aldomainek számát
- Az integráció nem kezeli a DNS-beállításokat; a domaineket neked kell a szervered IP-címére irányítanod

## Hibaelhárítás

### API-kapcsolati problémák
- Ellenőrizd, hogy a cPanel felhasználóneved és jelszavad helyes-e
- Győződj meg róla, hogy a cPanel hoszt helyes és elérhető
- Bizonyosodj meg arról, hogy a cPanel fiókod rendelkezik a szükséges jogosultságokkal
- Próbáld meg a teljes URL-t használni a hosztnál (pl. `https://cpanel.yourdomain.com`)

### A domain nem lett hozzáadva
- Ellenőrizd az Ultimate Multisite naplókat esetleges hibaüzenetekért
- Győződj meg róla, hogy a domain még nincs hozzáadva a cPanelhez
- Bizonyosodj meg arról, hogy a cPanel fiókod nem érte el az addon domainek vagy aldomainek limitjét

### SSL-tanúsítvány problémák
- Az integráció nem kezeli az SSL-tanúsítványok kiállítását
- A cPanel SSL/TLS eszközeit vagy az AutoSSL funkciót kell használnod a domainjeidhez tartozó SSL-tanúsítványok kiállításához
- Alternatívaként használhatsz olyan szolgáltatást, mint a Let's Encrypt a cPanel AutoSSL funkcióval
