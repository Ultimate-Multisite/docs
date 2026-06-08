---
title: CyberPanel Integráció
sidebar_position: 21
_i18n_hash: d0607874b556c583dac2aaa33ba1dc1d
---
# CyberPanel Integráció

Ez az útmutató elmagyarázza, hogyan kell beállítani az Ultimate Multisite CyberPanel integrációját, hogy a hálózatában mappolt domainek automatikusan hozzáadódjanak (és eltávolíthassák) virtuális hostként a CyberPanelben, opcionális Let's Encrypt auto-SSL biztosítással.

## Mit csinál?

- Amikor egy domainet mappolunk az Ultimate Multisitenben, az integráció hívja meg a CyberPanel API-ját, hogy létrehozzon egy virtuális hostot erre a domainre.
- Amikor egy domain mappolását távolítjuk el, az integráció hívja meg az API-t, hogy törölje a megfelelő virtuális hostot.
- Ha be van kapcsolva az auto-SSL, az integráció azonnal elindítja a Let's Encrypt tanúsítvány kiállítását a virtuális host létrehozásakor.
- Opcionálisan hozzáadja/távolítja el a `www.` aliasot, attól függően, hogy milyen beállításokkal van a "Auto-create www subdomain" (Automatikus www aldomain létrehozása) opció a Domain Mapping beállításain.

## Előfeltételek

- Egy működő CyberPanel példány (ajánlott v2.3 vagy újabb), amely elérhető a WordPress szerveréről.
- Egy meglévő weboldal a CyberPanelben, amely már biztosítja a WordPress hálózat alapját. Az integráció új virtuális hostokat ad hozzá ebbe a szerverhez.
- Előre bekapcsolt CyberPanel API hozzáférés. Az autentikációt a CyberPanel admin felhasználóneve és jelszava használja.
- A mappolt domainek DNS rekordjai márnek mutatnia kell a szerver IP címére, mielőtt az auto-SSL ki tudna adni érvényes tanúsítványt.

## Követelmények

Az alábbi konstansokat kell definiálni a `wp-config.php` fájlában:

```php
define('WU_CYBERPANEL_HOST', 'https://your-cyberpanel-host:8090');
define('WU_CYBERPANEL_USERNAME', 'your_admin_username');
define('WU_CYBERPANEL_PASSWORD', 'your_admin_password');
define('WU_CYBERPANEL_PACKAGE', 'Default');
```

Opcionálisan definiálhatja:

```php
define('WU_CYBERPANEL_AUTO_SSL', true);          // Default: true — Let's Encrypt SSL kiadása a domain létrehozása után
define('WU_CYBERPANEL_PHP_VERSION', 'PHP 8.2');  // Default: PHP 8.2
define('WU_CYBERPANEL_EMAIL', 'admin@yourdomain.com'); // Hasznos az SSL tanúsítvány kapcsolattartó e-mail címként
```

## Beállítási utasítások

### 1. Kapcsolja be a CyberPanel API-t

1. Jelölje be a CyberPanel dashboard-jához adminként.
2. Navigáljon a **Security** > **SSL** menüpontra, és ellenőrizze, hogy az SSL aktív-e a CyberPanel felületén magánál (ez szükséges a biztonságos API hívásokhoz).
3. A CyberPanel API alapértelmezetten elérhető a `https://your-server-ip:8090/api/` címen. Nem szükséges további lépéseket tennie annak aktiválásához – admin felhasználók számára alapértelmezetten bekapcsolt.

### 2. Adja hozzá a konstansokat a wp-config.php-hoz

Adja hozzá az alábbi konstansokat a `wp-config.php` fájljához, a `/* That's all, stop editing! */` sor előtt:

```php
define('WU_CYBERPANEL_HOST', 'https://your-cyberpanel-host:8090');
define('WU_CYBERPANEL_USERNAME', 'admin');
define('WU_CYBERPANEL_PASSWORD', 'your_secure_password');
define('WU_CYBERPANEL_PACKAGE', 'Default');
```

Az auto-SSL bekapcsolásához (ajánlott):

```php
define('WU_CYBERPANEL_AUTO_SSL', true);
define('WU_CYBERPANEL_EMAIL', 'admin@yourdomain.com');
```

### 3. Kapcsolja be az integrációt

1. A WordPress hálózat admin felületén navigáljon az **Ultimate Multisite** > **Settings** menüpontra.
2. Navigáljon a **Domain Mapping** (Domain mappolás) fülre.
3. Keresse meg az **Host Integrations** (Host integrációk) szekcióját.
4. Kapcsolja be az **CyberPanel** integrációt.
5. Kattintson a **Save Changes** (Beállítások mentése) gombra.

### 4. Ellenőrizze a kapcsolatot

Használja az alapvető kapcsolat tesztelést a beállítások varázslójában:

1. Navigáljon az **Ultimate Multisite** > **Settings** > **Domain Mapping** > **Host Integrations** > **CyberPanel** menüpontra.
2. Kattintson a **Test Connection** (Kapcsolat tesztelése) gombra.
3. Egy sikeres üzenet megerősíti, hogy a plugin elérheti a CyberPanel API-ját, és korrektül autentikálódik.

## Hogyan működik?

### Domain Mapping (Domain mappolás)

Amikor egy domainet mappolunk az Ultimate Multisitenben:

1. Az integráció küld egy `POST` kérést a `/api/createWebsite` endpointre a CyberPanel hostján.
2. A CyberPanel létrehoz egy új virtuális hostot a domain számára, a beállított csomag alatt.
3. A dokumentum gyökere (document root) a WordPress hálózat alap könyvtárára mutat.
4. Amikor a domain mappolását távolítjuk el, az integráció hívja meg a `/api/deleteWebsite` endpointet a virtuális host tisztításához.

### Auto-SSL (Automatikus SSL)

Amikor a `WU_CYBERPANEL_AUTO_SSL` értéke `true`:

1. A virtuális host létrehozása után az integráció hívja meg a `/api/issueSSL` endpointet a domain számára.
2. A CyberPanel egy Let's Encrypt tanúsítványt kér egy ACME HTTP-01 kihívással.
3. A tanúsítványt a CyberPanel automatikusan megújítja az érvényesség előtt.

> **Fontos:** A DNS-nek teljesen elterjednie kell a szerver IP címére, mielőtt a Let's Encrypt validálhatná a domainet. Ha az SSL kiadása azonnal sikertelen, várjon a DNS elterjedésére, és indítsa újra az SSL-t a CyberPanel dashboard-on a **SSL** > **Manage SSL** menüpont alatt.

### www Aldomain

Ha be van kapcsolva az **Auto-create www subdomain** (Automatikus www aldomain létrehozása) opció a Domain Mapping beállításain, az integráció létrehoz egy virtuális host aliasot a `www.<domain>` számára, és ha az auto-SSL be van, kiad egy tanúsítványt, amely mind az apex, mind a www változatot lefedi.

### E-mail Forwarder-ek (E-mail továbbítók)

Amikor aktív az [Ultimate Multisite: Emails](../../addons/ultimate-multisite-emails/) addon, a CyberPanel e-mail továbbítókat biztosíthat a vásárlóknak. A továbbítók a böngészőküldőből érkező üzeneteket egy másik inboxba irányítják, anélkül, hogy teljes postafiókot kellene létrehozni (ami hasznos az olyan aliasokhoz, mint `info@customer-domain.test` vagy `support@customer-domain.test`).

Mielőtt bekapcsolná a továbbítókat a vásárlók számára:

1. Ellenőrizze, hogy a CyberPanel konstansai be vannak állítva, és sikeres a kapcsolat teszt.
2. Kapcsolja be a CyberPanel e-mail szolgáltatót az Emails addon beállításain.
3. Győződjön meg róla, hogy a vásárló domain már létezik a CyberPanelben, mielőtt létrehozza a továbbítót.
4. Létrehozjon egy teszt továbbítót, és küldjen egy üzenetet keresztül, mielőtt a funkciót a produkciós terveken kínálja.

Ha a továbbító létrehozása sikertelen, ellenőrizze először az Ultimate Multisite tevékenységi naplóját, majd erősítse meg a CyberPanelben, hogy a forrás domain létezik, és hogy az API felhasználónak e-mail-kezelési engedélyei vannak.

## Konfigurációs hivatkozás

| Konstans | Követelmény | Default | Leírás |
|---|---|---|---|
| `WU_CYBERPANEL_HOST` | Igen | — | Teljes URL a CyberPanel példányához, beleértve a port, pl. `https://cp.example.com:8090` |
| `WU_CYBERPANEL_USERNAME` | Igen | — | CyberPanel admin felhasználóneve |
| `WU_CYBERPANEL_PASSWORD` | Igen | — | CyberPanel admin jelszava |
| `WU_CYBERPANEL_PACKAGE` | Igen | `Default` | A CyberPanel hosting csomagja, amelyet új virtuális hostoknak kell rendelni |
| `WU_CYBERPANEL_AUTO_SSL` | Nem | `true` | Let's Encrypt SSL tanúsítvány kiadása a domain létrehozása után |
| `WU_CYBERPANEL_PHP_VERSION` | Nem | `PHP 8.2` | PHP verzió új virtuális hostokhoz (meg kell egyeznie a CyberPanelben telepített verzióval) |
| `WU_CYBERPANEL_EMAIL` | Nem | — | Kapcsolattartó e-mail cím az SSL tanúsítvány regisztrációjához |

## Fontos megjegyzések

- A CyberPanel API session-alapú token autentikációt használja. Az integráció automatikusan kezeli a token megszerzését minden API híváskor.
- A CyberPanel admin fiókjának rendelkeznie kell a weboldalak létrehozásához és törléséhez szükséges engedélyekkel.
- A CyberPanel alapértelmezetten a `8090` portot használja. Ha a szerverének tűzfalát használja, győződjön meg róla, hogy ez a port elérhető a WordPress alkalmazás szerveréről.
- Az integráció nem kezeli a DNS rekordokat. A domainet nem lehet mappolni az Ultimate Multisitenben, ha nem mutatja a DNS-e a szerver IP címére.
- Ha OpenLiteSpeed (OLS)-t használja, a virtuális host módosítások után automatikusan elindít egy „graceful restart”-ot. Manuális beavatkozás nem szükséges.

## Hibaelhárítás

### API Kapcsolat Elutasítása (API Connection Refused)

- Ellenőrizze, hogy a `8090` port nyitva van-e a szerver tűzfalában.
- Győződjön meg arról, hogy a `WU_CYBERPANEL_HOST` értéke tartalmazza a megfelelő protokollot (`https://`) és a portot.
- Ellenőrizze, hogy a CyberPanel SSL tanúsítványa érvényes; a magánkulakolt tanúsítványok TLS ellenőrzési hibákat okozhatnak. Csak megbízható privát hálózat környezetében állítsa be a `WU_CYBERPANEL_VERIFY_SSL` értéket `false`-ra.

### Autentikációs Hibák (Authentication Errors)

- Kérjük visszaigazolni, hogy a `WU_CYBERPANEL_USERNAME` és `WU_CYBERPANEL_PASSWORD` helyesek, bejelentkezve közvetlenül a CyberPanelbe.
- A CyberPanel zárolja az előzményű sikertelen bejelentkezési kísérletek után. Ellenőrizze a **Security** > **Brute Force Monitor** menüpontot a CyberPanelben, ha zárolások történnek.

### Domain Nem Létrehozva (Domain Not Created)

- Ellenőrizze az Ultimate Multisite tevékenységi naplóját (**Ultimate Multisite** > **Activity Logs**) API hibaüzenetek után.
- Győződjön meg arról, hogy a `WU_CYBERPANEL_PACKAGE` konstansban definiált csomag létezik a CyberPanelben (**Packages** > **List Packages**).
- Győződjön meg róla, hogy a domain nem van már regisztrálva weboldalként a CyberPanelben – a duplás weboldal létrehozása hibaüzenetet ad vissza.

### SSL Tanúsítvány Nem Kiadva (SSL Certificate Not Issued)

- Győződjön meg róla, hogy a DNS teljesen elterjedt: a `dig +short your-domain.com` parancsnek a szerver IP címét kell visszaadnia.
- A Let's Encrypt korlátozást alkalmaz. Ha récemment több tanúsítványt is kiadott ugyanarra a domainre, várjon, mielőtt újra megpróbálja.
- Ellenőrizze a CyberPanel SSL naplókat a **Logs** > **Error Logs** menüpont alatt a tanúsítvány kiadási hibák részleteiről.
- Alternatív megoldásként manuálisan adhat ki SSL-t a CyberPanelből: **SSL** > **Manage SSL** > válassza ki a domainet > **Issue SSL**.

## Hivatkozások

- CyberPanel API Dokumentáció: https://docs.cyberpanel.net/docs/category/api
- CyberPanel SSL Kezelés: https://docs.cyberpanel.net/docs/cyberpanel/SSL/manageSSL
- Let's Encrypt Korlátozások: https://letsencrypt.org/docs/rate-limits/
