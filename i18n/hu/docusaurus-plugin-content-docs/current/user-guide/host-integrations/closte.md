---
title: Closte integráció
sidebar_position: 7
_i18n_hash: 8f07c74ab2f7df614f502e0cc089c3e0
---
# Closte integráció

## Áttekintés
A Closte egy menedzselt WordPress hosting platform, amely a Google Cloud infrastruktúrájára épül. Ez az integráció lehetővé teszi az automatikus domain szinkronizálást és SSL tanúsítvány kezelést az Ultimate Multisite és a Closte között.

## Funkciók
- Automatikus domain szinkronizálás
- SSL tanúsítvány kezelés
- Wildcard domain támogatás
- Nincs szükség konfigurációra, ha Closte-on fut

## Követelmények
A következő konstanst kell definiálni a `wp-config.php` fájlban, ha Closte-ot használsz:

```php
define('CLOSTE_CLIENT_API_KEY', 'your_api_key');
```

Ez a konstans általában már definiálva van, ha Closte-on hostolsz.

## Beállítási útmutató

### 1. Ellenőrizd a Closte API kulcsot

Ha Closte-on hostolsz, a `CLOSTE_CLIENT_API_KEY` konstans már definiálva van a `wp-config.php` fájlban. Ezt a `wp-config.php` fájl ellenőrzésével tudod megerősíteni.

### 2. Integráció engedélyezése

1. A WordPress admin felületen navigálj az Ultimate Multisite > Settings menüpontra
2. Válaszd a "Domain Mapping" fület
3. Görgess le a "Host Integrations" részhez
4. Engedélyezd a Closte integrációt
5. Kattints a "Save Changes" gombra

## Hogyan működik

Amikor egy domaint hozzárendelsz az Ultimate Multisite-ban:

1. Az integráció kérést küld a Closte API-nak, hogy hozzáadja a domaint az alkalmazásodhoz
2. A Closte automatikusan kezeli az SSL tanúsítvány kiállítását
3. Amikor egy domain hozzárendelést eltávolítasz, az integráció törli a domaint a Closte-ból

Az integráció együttműködik az Ultimate Multisite DNS ellenőrzési időköz beállításával is, így konfigurálhatod, milyen gyakran ellenőrizze a rendszer a DNS propagációt és az SSL tanúsítvány kiállítását.

## Domain rekord létrehozása

Ez az integráció biztosítja, hogy amikor egy oldalt létrehozol vagy duplikálsz, automatikusan létrejön egy domain rekord. Ez különösen fontos a Closte integráció szempontjából, mivel a domain rekord létrehozása aktiválja a Closte API-t a domain és az SSL tanúsítvány létrehozásához.

## Hibaelhárítás

### API kapcsolódási problémák
- Ellenőrizd, hogy a Closte API kulcsod helyes-e
- Győződj meg róla, hogy a Closte fiókod rendelkezik a szükséges jogosultságokkal

### SSL tanúsítvány problémák
- A Closte-nak időre lehet szüksége az SSL tanúsítványok kiállításához (általában 5-10 perc)
- Ellenőrizd, hogy a domainjeid megfelelően a Closte szervered IP címére mutatnak-e
- Ellenőrizd a domain DNS rekordjait, hogy helyesen vannak-e konfigurálva

### Domain nem lett hozzáadva
- Ellenőrizd az Ultimate Multisite naplókat hibaüzenetek után kutatva
- Győződj meg róla, hogy a domain nincs már hozzáadva a Closte-hoz
- Ellenőrizd, hogy a domain DNS rekordjai megfelelően vannak-e konfigurálva

### DNS ellenőrzési időköz
- Ha az SSL tanúsítványok kiállítása túl sokáig tart, módosíthatod a DNS ellenőrzési időközt a Domain Mapping beállításokban
- Az alapértelmezett időköz 300 másodperc (5 perc), de tesztelés során akár 10 másodpercre is csökkentheted a gyorsabb ellenőrzés érdekében
