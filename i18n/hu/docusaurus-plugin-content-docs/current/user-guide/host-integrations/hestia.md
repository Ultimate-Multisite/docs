---
title: Hestia Vezérlőpult Integráció
sidebar_position: 7
_i18n_hash: 252519613f4d84d44875a5b2090e4bd6
---
# Hestia Control Panel integráció

Ez az útmutató bemutatja, hogyan konfigurálhatod az Ultimate Multisite Hestia integrációt, hogy a hálózatodban hozzárendelt domainek automatikusan hozzáadódjanak (és törlődjenek) Web Domain Alias-ként a Hestiában.

- Hestia CLI referencia: v-add-web-domain-alias / v-delete-web-domain-alias
- Hivatalos REST API dokumentáció: https://hestiacp.com/docs/server-administration/rest-api.html

## Mit csinál
- Amikor egy domaint hozzárendelsz az Ultimate Multisite-ban, az integráció meghívja a Hestia API-t a következő parancs futtatásához:
  - `v-add-web-domain-alias <USER> <DOMAIN> <ALIAS> [RESTART]`
- Amikor egy domain hozzárendelést törölsz, ezt futtatja:
  - `v-delete-web-domain-alias <USER> <DOMAIN> <ALIAS> [RESTART]`
- Opcionálisan hozzáadja/eltávolítja a `www.` aliast a Domain Mapping beállításokban található „www aldomain automatikus létrehozása" opció alapján.

## Előfeltételek
- Egy meglévő Hestia Web Domain, amely már a WordPress telepítésedre mutat. Az integráció ehhez az alap domainhez csatolja az aliasokat.
- Hestia API hozzáférés engedélyezve. Hitelesíthetsz jelszóval vagy API hash/token használatával.

A Hestia REST API dokumentációjában olvashatod el az API hozzáférés engedélyezésének és a hitelesítés részleteit:
https://hestiacp.com/docs/server-administration/rest-api.html

## Konfiguráció (Varázsló → Integrációk → Hestia)
Add meg a következő értékeket:

- `WU_HESTIA_API_URL` (kötelező)
  - Az alap API végpont, általában `https://your-hestia-host:8083/api/`.
- `WU_HESTIA_API_USER` (kötelező)
  - Az API parancsokhoz használt Hestia felhasználó (gyakran `admin`).
- `WU_HESTIA_API_PASSWORD` vagy `WU_HESTIA_API_HASH` (legalább egy)
  - Válassz egy hitelesítési módot: jelszó vagy API hash/token.
- `WU_HESTIA_ACCOUNT` (kötelező)
  - A Web Domain tulajdonosa (fiók) a Hestiában; ez a CLI első argumentuma.
- `WU_HESTIA_WEB_DOMAIN` (kötelező)
  - A meglévő Hestia Web Domain, amely a WordPress-edet szolgálja ki (az aliasok ehhez lesznek csatolva).
- `WU_HESTIA_RESTART` (opcionális; alapértelmezett `yes`)
  - Újraindítsa-e a szolgáltatásokat az alias módosítások után.

Hagyhatod, hogy a varázsló beírja ezeket a konstansokat a `wp-config.php` fájlba, vagy manuálisan is megadhatod őket.

## Beállítás ellenőrzése
- A varázsló „Tesztelés" lépésében a plugin meghívja a `v-list-web-domains <WU_HESTIA_ACCOUNT> json` parancsot az API-n keresztül. A sikeres válasz megerősíti a kapcsolatot és a hitelesítést.
- Domain hozzárendelés után ellenőrizd a Hestiában: Web > az alap domain > Aliasok. Látni kell az újonnan hozzáadott aliast.

## Megjegyzések és tippek
- Győződj meg róla, hogy a `WU_HESTIA_WEB_DOMAIN` létezik és a `WU_HESTIA_ACCOUNT` a tulajdonosa.
- Ha SSL szükséges, a tanúsítványokat a Hestiában kezeld. Ez az integráció jelenleg csak az aliasokat kezeli.
- A plugin a Domain Mapping „www aldomain" beállításától függően hozzáadhatja/eltávolíthatja a `www.<domain>` aliast is.

## Példa API hívás (cURL)
Az alábbiakban egy koncepcionális példa látható (igazítsd a környezetedhez). A pontos paraméterekért nézd meg a hivatalos dokumentációt.

```
POST https://your-hestia-host:8083/api/
Content-Type: application/x-www-form-urlencoded

cmd=v-add-web-domain-alias
&user=admin
&password=YOUR_API_PASSWORD  (or &hash=YOUR_API_HASH)
&arg1=admin                  (WU_HESTIA_ACCOUNT)
&arg2=network.example.com    (WU_HESTIA_WEB_DOMAIN)
&arg3=customer-domain.com    (alias to add)
&arg4=yes                    (WU_HESTIA_RESTART)
&returncode=yes
```

Törléshez használd a `cmd=v-delete-web-domain-alias` parancsot ugyanazokkal az argumentumokkal.

## Hibaelhárítás
- HTTP hiba az API-tól: ellenőrizd, hogy a `WU_HESTIA_API_URL` elérhető és tartalmazza az `/api` útvonalat.
- Hitelesítési hibák: ellenőrizd a `WU_HESTIA_API_USER` értékét és a `WU_HESTIA_API_PASSWORD` vagy `WU_HESTIA_API_HASH` valamelyikét.
- „Hiányzó fiók/alap domain" a naplókban: győződj meg róla, hogy a `WU_HESTIA_ACCOUNT` és a `WU_HESTIA_WEB_DOMAIN` be van állítva és érvényes a Hestiában.

## Hivatkozások
- Hestia REST API: https://hestiacp.com/docs/server-administration/rest-api.html
- Hestia CLI referencia (Aliasok): https://hestiacp.com/docs/reference/cli.html#v-add-web-domain-alias
