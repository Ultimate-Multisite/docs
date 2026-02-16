---
title: ServerPilot integráció
sidebar_position: 16
_i18n_hash: fdbdebe91bc1687b519dc0986de244d3
---
# ServerPilot integráció

## Áttekintés
A ServerPilot egy felhőszolgáltatás WordPress és egyéb PHP alapú weboldalak üzemeltetéséhez a DigitalOcean, Amazon, Google vagy bármely más szerverszolgáltató infrastruktúráján. Ez az integráció lehetővé teszi az automatikus domainszinkronizálást és SSL tanúsítványkezelést az Ultimate Multisite és a ServerPilot között.

## Funkciók
- Automatikus domainszinkronizálás
- SSL tanúsítványkezelés Let's Encrypt segítségével
- Automatikus SSL megújítás

## Követelmények
Az alábbi konstansokat kell definiálni a `wp-config.php` fájlban:

```php
define('WU_SERVER_PILOT_CLIENT_ID', 'your_client_id');
define('WU_SERVER_PILOT_API_KEY', 'your_api_key');
define('WU_SERVER_PILOT_APP_ID', 'your_app_id');
```

## Beállítási útmutató

### 1. ServerPilot API hitelesítő adatok beszerzése

1. Jelentkezz be a ServerPilot vezérlőpultba
2. Menj a „Account" > „API" menüpontra
3. Hozz létre egy új API kulcsot, ha még nincs
4. Másold ki a Client ID-t és az API Key-t

### 2. App ID beszerzése

1. A ServerPilot vezérlőpultban menj az „Apps" menüpontra
2. Válaszd ki azt az alkalmazást, ahol a WordPress multisite telepítésed található
3. Az App ID az URL-ben látható: `https://manage.serverpilot.io/apps/{APP_ID}`

### 3. Konstansok hozzáadása a wp-config.php fájlhoz

Add hozzá az alábbi konstansokat a `wp-config.php` fájlodhoz:

```php
define('WU_SERVER_PILOT_CLIENT_ID', 'your_client_id');
define('WU_SERVER_PILOT_API_KEY', 'your_api_key');
define('WU_SERVER_PILOT_APP_ID', 'your_app_id');
```

### 4. Az integráció engedélyezése

1. A WordPress adminfelületen menj az Ultimate Multisite > Settings menüpontra
2. Navigálj a „Domain Mapping" fülre
3. Görgess le a „Host Integrations" részhez
4. Engedélyezd a ServerPilot integrációt
5. Kattints a „Save Changes" gombra

## Hogyan működik

### Domainszinkronizálás

Amikor egy domain hozzárendelésre kerül az Ultimate Multisite-ban:

1. Az integráció lekéri a domainek aktuális listáját a ServerPilotból
2. Hozzáadja az új domaint a listához (szükség esetén a www-s verzióval együtt)
3. Elküldi a frissített listát a ServerPilotnak az API-n keresztül
4. A ServerPilot frissíti az alkalmazásod domainlistáját

### SSL tanúsítványkezelés

A domainek szinkronizálása után:

1. Az integráció automatikusan engedélyezi az AutoSSL-t az alkalmazásodhoz
2. A ServerPilot a Let's Encrypt segítségével kezeli az SSL tanúsítványok kiállítását és telepítését
3. A ServerPilot az SSL tanúsítványok automatikus megújításáról is gondoskodik

## SSL tanúsítvány ellenőrzés

Az integráció úgy van beállítva, hogy több SSL tanúsítvány-ellenőrzési kísérletet tesz lehetővé a ServerPilot esetében, mivel a tanúsítványok kiállítása és telepítése időbe telhet. Alapértelmezés szerint legfeljebb 5 alkalommal próbálkozik, de ez szűrők segítségével módosítható.

## Hibaelhárítás

### API kapcsolódási problémák
- Ellenőrizd, hogy a Client ID és az API Key helyes-e
- Ellenőrizd, hogy az App ID helyes-e
- Győződj meg róla, hogy a ServerPilot fiókod rendelkezik a szükséges jogosultságokkal

### SSL tanúsítványproblémák
- A ServerPilot megköveteli, hogy a domainek érvényes DNS rekordokkal rendelkezzenek, amelyek a szerveredre mutatnak, mielőtt kiállítaná az SSL tanúsítványokat
- Ha az SSL tanúsítványok nem kerülnek kiállításra, ellenőrizd, hogy a domainjeid megfelelően a szervered IP-címére mutatnak-e
- Az SSL tanúsítványok kiállítása és telepítése időbe telhet a ServerPilotnál (általában 5-15 perc)

### Domain nem lett hozzáadva
- Ellenőrizd az Ultimate Multisite naplókat hibaüzenetek után kutatva
- Győződj meg róla, hogy a domain még nincs hozzáadva a ServerPilothoz
- Ellenőrizd, hogy a ServerPilot előfizetésed támogatja-e a hozzáadni kívánt domainek számát

### Domain eltávolítás
- Jelenleg a ServerPilot API nem biztosít lehetőséget egyedi domainek eltávolítására
- Amikor egy domain hozzárendelés törlésre kerül az Ultimate Multisite-ban, az integráció frissíti a domainlistát a ServerPilotban az eltávolított domain kihagyásával
