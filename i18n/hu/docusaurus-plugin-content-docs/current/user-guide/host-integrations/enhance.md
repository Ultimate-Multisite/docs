---
title: Vezérlőpult integráció fejlesztése
sidebar_position: 2
_i18n_hash: 2b4047e6b7b32a1c96a0b562e251cbfb
---
# Enhance Control Panel integráció

## Áttekintés
Az Enhance egy modern vezérlőpult, amely hatékony tárhelyautomatizálási és -kezelési funkciókat kínál. Ez az integráció lehetővé teszi a domain-ok automatikus szinkronizálását és az SSL-tanúsítványok kezelését az Ultimate Multisite és az Enhance Control Panel között.

**Kapcsolódó beszélgetés:** A közösségi tippekért és további információkért lásd a [GitHub Discussion #265](https://github.com/Multisite-Ultimate/ultimate-multisite/discussions/265) oldalt.

## Funkciók
- Automatikus domain-szinkronizálás, amikor domain-okat társítasz az Ultimate Multisite-ban
- Automatikus SSL-tanúsítvány kiállítás LetsEncrypt-en keresztül, amint a DNS feloldódik
- Aldomain támogatás aldomain módban futó hálózatokhoz
- Domain eltávolítás a társítások törlésekor
- Kapcsolat tesztelése az API hitelesítő adatok ellenőrzéséhez

## Követelmények

### Rendszerkövetelmények
- Telepített és elérhető Enhance Control Panel
- WordPress Multisite telepítés, amely egy Enhance szerveren fut vagy ahhoz kapcsolódik
- Apache webszerver (az Enhance jelenleg az Apache konfigurációkat támogatja; a LiteSpeed Enterprise kedvezményes áron érhető el)

### API hozzáférés
Az API tokenek létrehozásához rendszergazdai hozzáférésre van szükséged az Enhance Control Panelhez.

## Az API hitelesítő adatok beszerzése

### 1. API token létrehozása

1. Jelentkezz be az Enhance Control Panelbe rendszergazdaként
2. Kattints a **Settings** menüpontra a navigációs menüben
3. Navigálj az **Access Tokens** oldalra
4. Kattints a **Create Token** gombra
5. Adj a tokennek egy leíró nevet (pl. "Ultimate Multisite Integration")
6. Rendeld hozzá a **System Administrator** szerepkört
7. A lejárati dátumhoz:
   - Hagyd üresen, ha azt szeretnéd, hogy a token soha ne járjon le
   - Vagy állíts be egy konkrét lejárati dátumot biztonsági okokból
8. Kattints a **Create** gombra

A létrehozás után megjelenik az **Access Token** és az **Organization ID**. **Mentsd el ezeket azonnal**, mert a token csak egyszer jelenik meg.

### 2. Az Organization ID beszerzése

Az Organization ID az Access Tokens oldalon, egy kék információs dobozban jelenik meg "Org ID: {your_id}" címkével.

Az Organization ID UUID formátumú, például: `d8554b6d-5d0d-6719-009b-fec1189aa8f3`

Egy ügyfél Organization ID-ját a következő módon is megtalálhatod:
1. Menj a **Customers** oldalra
2. Kattints a **Manage customer** gombra a megfelelő ügyfélnél
3. Nézd meg az URL-t – az Organization ID a `/customers/` utáni alfanumerikus karakterek

### 3. A Server ID beszerzése

A Server ID megtalálásához (domain műveleteknél szükséges):

1. Az Enhance Control Panelben navigálj a **Servers** oldalra
2. Kattints arra a szerverre, amelyen a WordPress telepítésed fut
3. A Server ID (UUID formátumban) látható lesz az URL-ben vagy a szerver adatai között
4. Alternatívaként az API-t is használhatod a szerverek listázásához:

```bash
curl -s -X GET https://your-enhance-panel.com/api/servers \
  -H "Accept: application/json" \
  -H "Authorization: Bearer YOUR_TOKEN" | jq
```

A Server ID UUID formátumú: `00000000-0000-0000-0000-000000000000`

### 4. Az API URL beszerzése

Az API URL az Enhance Control Panel URL-ed, amelyhez hozzáfűzöd az `/api/` részt:

```
https://your-enhance-panel.com/api/
```

**Fontos:** Az `/api/` útvonal kötelező. Gyakori hibák:
- Csak a domain használata `/api/` nélkül
- HTTP használata HTTPS helyett (a HTTPS kötelező biztonsági okokból)

## Konfiguráció

### Szükséges konstansok

Add hozzá a következő konstansokat a `wp-config.php` fájlodhoz:

```php
// Enhance Control Panel integráció
define('WU_ENHANCE_API_TOKEN', 'your-bearer-token-here');
define('WU_ENHANCE_API_URL', 'https://your-enhance-panel.com/api/');
define('WU_ENHANCE_SERVER_ID', 'your-server-uuid-here');
```

### Beállítás az integrációs varázslóval

1. A WordPress admin felületen menj az **Ultimate Multisite** > **Settings** menüpontra
2. Navigálj az **Integrations** fülre
3. Keresd meg az **Enhance Control Panel Integration** elemet, és kattints a **Configuration** gombra
4. A varázsló végigvezet a beállításon:
   - **1. lépés:** Bevezetés és funkcióáttekintés
   - **2. lépés:** Add meg az API hitelesítő adataidat (Token, API URL, Server ID)
   - **3. lépés:** Teszteld a kapcsolatot
   - **4. lépés:** Áttekintés és aktiválás

Választhatsz:
- A varázsló automatikusan beszúrja a konstansokat a `wp-config.php` fájlba
- Másold ki a konstans-definíciókat és add hozzá őket manuálisan

## További WordPress konfiguráció

A közösségi visszajelzések alapján ([Discussion #265](https://github.com/Multisite-Ultimate/ultimate-multisite/discussions/265)) szükség lehet ezeknek a további beállításoknak a konfigurálására:

### .htaccess konfiguráció

Ha problémákat tapasztalsz a domain mapping-gel:
1. Töröld az eredeti Enhance `.htaccess` fájlt
2. Cseréld le a szabványos WordPress Multisite `.htaccess` fájlra

### Cookie konstansok

Add hozzá ezeket a konstansokat a `wp-config.php` fájlhoz a megfelelő cookie-kezelés biztosítására a társított domain-ok között:

```php
define('COOKIE_DOMAIN', $_SERVER['HTTP_HOST']);
define('COOKIEPATH', '/');
define('ADMIN_COOKIE_PATH', '/');
```

## Hogyan működik

### Amikor egy domain-t társítasz

1. A felhasználó egyéni domain-t társít az Ultimate Multisite-ban (vagy új webhely jön létre aldomain módban)
2. Az integráció POST kérést küld az Enhance API-nak: `/servers/{server_id}/domains`
3. Az Enhance hozzáadja a domain-t a szerver konfigurációjához
4. Amikor a DNS feloldódik a szerveredre, az Enhance automatikusan kiállít egy SSL-tanúsítványt a LetsEncrypt-en keresztül
5. A domain HTTPS-sel aktívvá válik

### Amikor egy domain-t eltávolítasz

1. Egy domain-társítás törlődik az Ultimate Multisite-ban
2. Az integráció lekérdezi az Enhance-t, hogy megtalálja a domain ID-ját
3. DELETE kérés kerül elküldésre: `/servers/{server_id}/domains/{domain_id}`
4. Az Enhance eltávolítja a domain-t a szerver konfigurációjából

### DNS és SSL ellenőrzés

Az Ultimate Multisite beépített DNS és SSL ellenőrzést tartalmaz:
- Az ellenőrzési intervallumot a **Domain Mapping Settings** alatt konfigurálhatod (alapértelmezés: 300 másodperc/5 perc)
- A rendszer ellenőrzi a DNS propagációt, mielőtt a domain-t aktívként jelölné
- Az SSL-tanúsítvány érvényessége automatikusan ellenőrzésre kerül
- Az Enhance automatikusan kezeli az SSL kiállítását, így manuális SSL konfigurációra nincs szükség

## A beállítás ellenőrzése

### Kapcsolat tesztelése

1. Az integrációs varázslóban használd a **Test Connection** lépést
2. A plugin megpróbálja listázni a domain-okat a szervereden
3. A sikeres üzenet megerősíti, hogy:
   - Az API hitelesítő adatok helyesek
   - Az API URL elérhető
   - A Server ID érvényes
   - A jogosultságok megfelelően vannak beállítva

### Domain társítása után

1. Társíts egy teszt domain-t az Ultimate Multisite-ban
2. Ellenőrizd az Ultimate Multisite naplókat (**Ultimate Multisite** > **Logs** > **integration-enhance**)
3. Ellenőrizd az Enhance Control Panelben, hogy a domain hozzá lett-e adva:
   - Menj a **Servers** > **Your Server** > **Domains** menüpontba
   - Az új domain-nak meg kell jelennie a listában
4. Miután a DNS propagálódik, ellenőrizd, hogy az SSL automatikusan kiállításra került-e

## Hibaelhárítás

### API kapcsolati problémák

**Hiba: "Failed to connect to Enhance API"**
- Ellenőrizd, hogy a `WU_ENHANCE_API_URL` végén szerepel-e az `/api/`
- Győződj meg róla, hogy HTTPS-t használsz, nem HTTP-t
- Ellenőrizd, hogy az Enhance panel elérhető-e a WordPress szerveredről
- Ellenőrizd, hogy nincsenek-e tűzfalszabályok, amelyek blokkolják a kapcsolatot

**Hiba: "Enhance API Token not found"**
- Győződj meg róla, hogy a `WU_ENHANCE_API_TOKEN` definiálva van a `wp-config.php` fájlban
- Ellenőrizd, hogy a token nem lett-e törölve vagy nem járt-e le az Enhance-ben
- Ellenőrizd, hogy nincsenek-e elgépelések a token értékében

**Hiba: "Server ID is not configured"**
- Ellenőrizd, hogy a `WU_ENHANCE_SERVER_ID` definiálva van-e a `wp-config.php` fájlban
- Győződj meg róla, hogy a Server ID érvényes UUID formátumú
- Erősítsd meg, hogy a szerver létezik az Enhance panelben

### A domain nem került hozzáadásra

**Ellenőrizd a naplókat:**
1. Menj az **Ultimate Multisite** > **Logs** menüpontba
2. Szűrj az **integration-enhance** elemre
3. Keresd a problémát jelző hibaüzeneteket

**Gyakori okok:**
- Érvénytelen domain név formátum
- A domain már létezik az Enhance-ben
- Elégtelen API jogosultságok (győződj meg róla, hogy a token System Administrator szerepkörrel rendelkezik)
- A Server ID nem egyezik a tényleges szerverrel az Enhance-ben

### SSL-tanúsítvány problémák

**Az SSL nem kerül kiállításra:**
- Ellenőrizd, hogy a DNS a szervered IP-címére mutat-e
- Ellenőrizd, hogy a domain helyesen oldódik-e fel: `nslookup yourdomain.com`
- Az Enhance megköveteli, hogy a DNS feloldódjon, mielőtt SSL-t állíthatna ki
- Az SSL kiállítása általában 5-10 percet vesz igénybe a DNS propagáció után
- Ellenőrizd az Enhance Control Panel naplóit az SSL-specifikus hibákért

**Manuális SSL hibaelhárítás az Enhance-ben:**
1. Menj a **Servers** > **Your Server** > **Domains** menüpontba
2. Keresd meg a domain-odat és ellenőrizd az SSL állapotát
3. Szükség esetén manuálisan is elindíthatod az SSL kiállítását

### DNS ellenőrzési intervallum

Ha a domain-ok vagy SSL-tanúsítványok túl sokáig tartanak az aktiválódásig:
1. Menj az **Ultimate Multisite** > **Settings** > **Domain Mapping** menüpontra
2. Keresd meg a **DNS Check Interval** beállítást
3. Állítsd át az alapértelmezett 300 másodpercről alacsonyabb értékre (minimum: 10 másodperc)
4. **Megjegyzés:** Az alacsonyabb intervallum gyakoribb ellenőrzést jelent, de nagyobb szerverterhelést is

### Hitelesítési hibák

**HTTP 401/403 hibák:**
- Generálj új API tokent az Enhance-ben
- Ellenőrizd, hogy a token **System Administrator** szerepkörrel rendelkezik-e
- Ellenőrizd, hogy a token nem járt-e le
- Győződj meg róla, hogy a megfelelő Organization ID-t használod (bár ez általában nem szükséges az URL-ben)

### Naplóelemzés

Részletes naplózás engedélyezése:
```php
// Add hozzá a wp-config.php fájlhoz a bővített hibakereséshez
define('WP_DEBUG', true);
define('WP_DEBUG_LOG', true);
```

Ezután ellenőrizd a naplókat itt:
- Ultimate Multisite naplók: **Ultimate Multisite** > **Logs**
- WordPress debug napló: `wp-content/debug.log`
- Enhance panel naplók: Elérhetők az Enhance admin felületén

## API referencia

### Hitelesítés
Minden API kérés Bearer token hitelesítést használ:
```
Authorization: Bearer YOUR_TOKEN_HERE
```

### Gyakran használt végpontok

**Szerverek listázása:**
```
GET /servers
```

**Domain-ok listázása egy szerveren:**
```
GET /servers/{server_id}/domains
```

**Domain hozzáadása:**
```
POST /servers/{server_id}/domains
Body: {"domain": "example.com"}
```

**Domain törlése:**
```
DELETE /servers/{server_id}/domains/{domain_id}
```

### Teljes API dokumentáció
Teljes API dokumentáció: [https://apidocs.enhance.com](https://apidocs.enhance.com)

## Legjobb gyakorlatok

### Biztonság
- **Soha ne commitolj API tokeneket verziókezelőbe**
- Tárold a tokeneket a `wp-config.php` fájlban, amelyet ki kell zárni a Git-ből
- Használj megfelelő jogosultságokkal rendelkező tokeneket (System Administrator a teljes integrációhoz)
- Állíts be token lejárati dátumokat éles környezetekben
- Rendszeresen cseréld a tokeneket

### Teljesítmény
- Használd az alapértelmezett DNS ellenőrzési intervallumot (300 másodperc) a túlzott API hívások elkerülésére
- Figyelj az Enhance szerver erőforrásaira nagyméretű domain műveletek futtatásakor
- Fontold meg a domain hozzáadások ütemezését, ha egyszerre sok domain-t társítasz

### Monitorozás
- Rendszeresen ellenőrizd az Ultimate Multisite naplókat integrációs hibák után kutatva
- Állíts be monitorozást a sikertelen domain hozzáadásokhoz
- Ellenőrizd, hogy az SSL-tanúsítványok megfelelően kerülnek-e kiállításra
- Figyelj az Enhance szerver kapacitására és a domain limitekre

## További források

- **Enhance hivatalos dokumentáció:** [https://enhance.com/docs](https://enhance.com/docs)
- **Enhance API dokumentáció:** [https://apidocs.enhance.com](https://apidocs.enhance.com)
- **Enhance közösségi fórum:** [https://community.enhance.com](https://community.enhance.com)
- **GitHub Discussion:** [Issue #265 - Enhance Integration Tips](https://github.com/Multisite-Ultimate/ultimate-multisite/discussions/265)
- **Ultimate Multisite Domain Mapping útmutató:** Lásd a wiki oldalt "How to Configure Domain Mapping v2"

## Támogatás

Ha problémákba ütközöl:
1. Nézd át a fenti Hibaelhárítás részt
2. Tekintsd át az Ultimate Multisite naplókat
3. Konzultálj a [GitHub Discussions](https://github.com/Multisite-Ultimate/ultimate-multisite/discussions) oldalon
4. Lépj kapcsolatba az Enhance támogatással panel-specifikus problémák esetén
5. Hozz létre egy új discussion-t részletes hibanaplókkal közösségi segítségért

## Megjegyzések

- Ez az integráció csak a domain aliasokat kezeli; az Enhance automatikusan kezeli az SSL-t
- Az integráció támogatja mind az egyéni domain társításokat, mind az aldomain-alapú webhelyeket
- Az automatikus www aldomain létrehozás konfigurálható a Domain Mapping beállításokban
- Az Enhance jelenleg az Apache konfigurációkat támogatja (a LiteSpeed Enterprise elérhető)
- A domain eltávolítása az Ultimate Multisite-ból eltávolítja a domain-t az Enhance-ből, de a kapcsolódó SSL-tanúsítványok nem feltétlenül törlődnek azonnal
