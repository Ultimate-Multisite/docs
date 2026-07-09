---
title: Cloudways integráció
sidebar_position: 3
_i18n_hash: 09425d90def2b755c27a698d78d7d4b0
---
# Cloudways integráció

## Áttekintés
A Cloudways egy felügyelt felhőalapú tárhelyplatform, amely lehetővé teszi WordPress oldalak telepítését különböző felhőszolgáltatókra, például DigitalOcean, AWS, Google Cloud és más platformokra. Ez az integráció automatikus domain-szinkronizálást és SSL-tanúsítvány-kezelést tesz lehetővé az Ultimate Multisite és a Cloudways között.

## Funkciók
- Automatikus domain-szinkronizálás
- SSL-tanúsítvány-kezelés
- Extra domainek támogatása
- DNS-ellenőrzés SSL-tanúsítványokhoz

## Követelmények
A következő konstansokat meg kell határozni a `wp-config.php` fájlodban:

```php
define('WU_CLOUDWAYS_EMAIL', 'your_cloudways_email');
define('WU_CLOUDWAYS_API_KEY', 'your_api_key');
define('WU_CLOUDWAYS_SERVER_ID', 'your_server_id');
define('WU_CLOUDWAYS_APP_ID', 'your_app_id');
```

Opcionálisan ezeket is megadhatod:

```php
define('WU_CLOUDWAYS_EXTRA_DOMAINS', 'comma,separated,list,of,domains');
```

## Beállítási útmutató

### 1. Szerezd meg a Cloudways API hitelesítő adataidat

1. Jelentkezz be a Cloudways dashboardodba
2. Lépj az "Account" > "API Keys" menüpontra
3. Generálj egy API-kulcsot, ha még nincs ilyened
4. Másold ki az e-mail-címedet és az API-kulcsot

### 2. Szerezd meg a szerver- és alkalmazásazonosítóidat

1. A Cloudways dashboardodban lépj a "Servers" részhez
2. Válaszd ki azt a szervert, ahol a WordPress multisite-od hosztolva van
3. A Server ID látható az URL-ben: `https://platform.cloudways.com/server/{SERVER_ID}`
4. Lépj az "Applications" részhez, és válaszd ki a WordPress alkalmazásodat
5. Az App ID látható az URL-ben: `https://platform.cloudways.com/server/{SERVER_ID}/application/{APP_ID}`

### 3. Konstansok hozzáadása a wp-config.php fájlhoz

Add hozzá a következő konstansokat a `wp-config.php` fájlodhoz:

```php
define('WU_CLOUDWAYS_EMAIL', 'your_cloudways_email');
define('WU_CLOUDWAYS_API_KEY', 'your_api_key');
define('WU_CLOUDWAYS_SERVER_ID', 'your_server_id');
define('WU_CLOUDWAYS_APP_ID', 'your_app_id');
```

Ha vannak további **külső** domaineid (a multisite hálózatodon kívül), amelyeket mindig a Cloudways aliaslistán kell tartani:

```php
define('WU_CLOUDWAYS_EXTRA_DOMAINS', 'extradomain1.com,extradomain2.com');
```

:::warning Ne add meg a saját hálózatod wildcardját
**Ne** add hozzá a `*.your-network.com` értéket (vagy a saját hálózatod bármely aldomain-mintáját) a
`WU_CLOUDWAYS_EXTRA_DOMAINS` értékhez. Lásd lent: [Fontos — wildcard SSL buktató](#important--wildcard-ssl-pitfall),
hogy ez miért akadályozza meg a bérlőnkénti SSL-tanúsítványok kiadását.
:::

### 4. Az integráció engedélyezése

1. A WordPress adminban lépj az Ultimate Multisite > Settings részhez
2. Navigálj a "Domain Mapping" fülre
3. Görgess le a "Host Integrations" részig
4. Engedélyezd a Cloudways integrációt
5. Kattints a "Save Changes" gombra

## Hogyan működik

### Domain-szinkronizálás

Amikor egy domain hozzá van rendelve az Ultimate Multisite-ban:

1. Az integráció lekéri az összes jelenleg hozzárendelt domaint
2. Hozzáadja az új domaint a listához (adott esetben a www verzióval együtt)
3. Elküldi a teljes listát a Cloudwaysnek az API-n keresztül
4. A Cloudways frissíti az alkalmazásod domainaliasait

Megjegyzés: A Cloudways API megköveteli, hogy minden alkalommal a domainek teljes listáját küldd el, ne csak egyes domaineket adj hozzá vagy távolíts el.

### SSL-tanúsítvány-kezelés

Miután a domainek szinkronizálva lettek:

1. Az integráció ellenőrzi, mely domainek rendelkeznek érvényes DNS-rekordokkal, amelyek a szerveredre mutatnak
2. Kérést küld a Cloudwaysnek, hogy telepítsen Let's Encrypt SSL-tanúsítványokat ezekhez a domainekhez
3. A Cloudways kezeli az SSL-tanúsítvány kiadását és telepítését

Az integráció mindig **standard** (nem wildcard) Let's Encrypt tanúsítványokat kér a
Cloudwaystől. Ha wildcard minta van megadva a `WU_CLOUDWAYS_EXTRA_DOMAINS` értékben, a kezdő
`*.` el lesz távolítva az SSL-kérés előtt — magát a wildcardot ez az integráció soha nem telepíti.
Wildcard tanúsítvány használatához a Cloudwaysen manuálisan kellene telepítened,
de ez blokkolja a domainenkénti Let's Encrypt kiadást a hozzárendelt egyedi domainekhez
(lásd a lenti buktatót).

## Extra domainek

A `WU_CLOUDWAYS_EXTRA_DOMAINS` konstans lehetővé teszi további **külső**
domainek megadását, amelyeket mindig a Cloudways alkalmazás aliaslistáján kell tartani. Erre használd:

- Külső domainekhez, amelyeket nem az Ultimate Multisite kezel (pl. egy külön marketingoldal, amely ugyanazt a Cloudways alkalmazást használja)
- Parkolt vagy staging domainekhez, amelyeket az alkalmazás aliaslistáján szeretnél tartani

**Ne** használd ezt a konstanst a saját hálózatod aldomain-wildcardjához
(pl. `*.your-network.com`). Lásd az alábbi wildcard SSL buktatót.

## Fontos — wildcard SSL buktató

Gyakori hiba a Cloudways alapértelmezett beállításának követésekor, hogy hozzáadnak egy wildcardot, például
`*.your-network.com` értéket a `WU_CLOUDWAYS_EXTRA_DOMAINS` konstanshoz, vagy manuálisan telepítenek egy Cloudways
wildcard SSL-tanúsítványt ehhez a wildcardhoz.

**Ha ezt teszed, a Cloudways megtagadja a Let's Encrypt tanúsítványok kiadását azokhoz a
bérlőnkénti egyedi domainekhez, amelyeket az Ultimate Multisite rendel hozzá.** A Cloudways minden alkalommal lecseréli az aktív
SSL-tanúsítványt az alkalmazáson, és az alkalmazáson már meglévő wildcard tanúsítvány
blokkolja azt a domainenkénti Let's Encrypt kiadást, amelyre az integráció támaszkodik.

### Ajánlott Cloudways SSL-beállítás egy Ultimate Multisite hálózathoz

1. A Cloudways alkalmazás **SSL Certificate** fülén telepíts egy **standard
   Let's Encrypt tanúsítványt**, amely csak a `your-network.com` és `www.your-network.com`
   domaineket fedi le — **nem** wildcardot.
2. **Ne** tedd a `*.your-network.com` értéket (vagy a saját hálózatod bármely aldomain-mintáját) a
   `WU_CLOUDWAYS_EXTRA_DOMAINS` konstansba. Ezt a konstanst kizárólag **külső** domainekhez tartsd fenn.
3. A bérlőnkénti aldomain-wildcardot csak **DNS** szinten hozd létre (egy `A` rekordot a
   `*.your-network.com` értékhez, amely a Cloudways szerver IP-címére mutat), hogy az aloldalak feloldódjanak. Az SSL-t
   az egyes hozzárendelt egyedi domainekhez ezután az integráció automatikusan kiadja
   a Let's Encrypten keresztül.

Ha a bérlőid egyéni domainjei SSL nélkül elakadnak, ellenőrizd a Cloudways SSL fület. Ha ott aktív egy wildcard tanúsítvány, távolítsd el, állíts ki újra egy standard Let's Encrypt tanúsítványt csak a fő hálózati domainhez, és távolíts el minden wildcard bejegyzést a `WU_CLOUDWAYS_EXTRA_DOMAINS` értékből. Ezután indíts újra egy domain-leképezést (vagy várd meg a következőt), és az integráció ismét domainenkénti tanúsítványokat fog kiállítani.

## Hibaelhárítás

### API-kapcsolati problémák
- Ellenőrizd, hogy az email-címed és az API key helyes-e
- Ellenőrizd, hogy a szerver- és alkalmazásazonosítóid helyesek-e
- Győződj meg róla, hogy a Cloudways Account rendelkezik a szükséges jogosultságokkal

### SSL-tanúsítványokkal kapcsolatos problémák
- A Cloudways megköveteli, hogy a domainek érvényes DNS-rekordokkal rendelkezzenek, amelyek a szerveredre mutatnak, mielőtt SSL-tanúsítványokat állít ki
- Az integráció ellenőrzi a DNS-rekordokat, mielőtt SSL-tanúsítványokat kérne
- Ha az SSL-tanúsítványok nem kerülnek kiállításra, ellenőrizd, hogy a domainjeid megfelelően a szervered IP-címére mutatnak-e
- **Bérlőnkénti egyéni domainek SSL nélkül elakadtak?** Ellenőrizd a Cloudways alkalmazás SSL Certificate fülét. Ha aktív egy wildcard tanúsítvány (manuálisan telepítve, vagy a `*.your-network.com` lefedésére), a Cloudways nem fog Let's Encrypt tanúsítványokat kiállítani az egyenként leképezett egyéni domainekhez. Cseréld le egy standard Let's Encrypt tanúsítványra, amely csak a fő hálózati domaint fedi le (`your-network.com`, `www.your-network.com`), és távolíts el minden wildcard bejegyzést a `WU_CLOUDWAYS_EXTRA_DOMAINS` értékből. Ezután indíts újra egy domain-leképezést (vagy várd meg a következőt), és az integráció domainenkénti tanúsítványokat fog kérni.

### Domain nincs hozzáadva
- Ellenőrizd az Ultimate Multisite naplóit bármilyen hibaüzenetért
- Ellenőrizd, hogy a domain nincs-e már hozzáadva a Cloudwayshez
- Győződj meg róla, hogy a Cloudways csomagod támogatja a hozzáadni kívánt domainek számát
