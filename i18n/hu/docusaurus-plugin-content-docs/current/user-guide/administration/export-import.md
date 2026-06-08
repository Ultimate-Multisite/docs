---
title: Exportálás és Importálás
sidebar_position: 12
_i18n_hash: 6536f9ebee269a8553a57733e4cb03fc
---
# Exportálás és Importálás

Az Ultimate Multisite 2.9.0 egy egysiteszt **Exportálás és Importálás** eszközt ad hozzá a **Tools > Export & Import** alatt. Használja akkor, ha egy WordPress oldalt szeretne ZIP fájlba csomagolni, visszaállítani, vagy egy kompatibilis Ultimate Multisite és egysiteszt WordPress telepítés között áthelyezni.

## Előfeltételezett engedélyek

Adminisztrátort kell lennie, aki hozzáférhet a kiexportált vagy importált WordPress oldal **Tools** menüpontjához. Egy multisite hálózat esetén a hálózatadminisztrátor fiókot kell használni, ha hálózat szintű Ultimate Multisite eszközökkel dolgozik aloldalak exportálásán vagy importálásán.

Az export ZIP letöltései hiteles letöltési végpontokon keresztül történnek, ezért kérjük, hogy ne hagyja kiaktivált az adminisztrációs munkamenetét a letöltés végéig, és ne osztja ki nyilvánosan a generált letöltési URL-eket.

## Oldal exportálása ZIP-ként

1.  A másolni kívánt oldal WordPress adminisztrációjában navigáljon a **Tools > Export & Import** menüpontra.
2.  Nyitssa az exportációs területet, és válassza ki az oldalt, amelyet csomagolni szeretne.
3.  Válassza ki opcionálisan, hogy milyen tartalmat szeretne beضمolni, például az feltöltések, a plugin-ek és a témák, ha ezek az opciók elérhetők.
4.  Indítsa el az exportálást, és várja, amíg a folyamat befejeződik. Nagy oldalak esetén a ZIP fájl elkészülése előtt a háttérben kell végrehajtania a folyamatot.
5.  Töltse le a kész ZIP fájlt az exportálás listájából.

Tárolja biztonságos helyen a ZIP fájlt. Az olyan tartalmat, beállításokat, média fájlokat és kiválasztott kódforrásokat tartalmazhat, mint az oldal tartalma.

## Mit tartalmaz az exportálás

Az export ZIP fájl tartalmazhat:

- Az adott oldal kiválasztott adatbázis tartalmát és konfigurációját.
- Az feltöltések, ha ezeket beضمolják.
- A plugin-ek és témák, ha ezeket kiválasztották.
- Az import metadata-t, amelyet az Export & Import eszköz használ ahhoz, hogy az oldalt újraépítse a céltelepítésen.

A pontos ZIP méret függ a média mennyiségétől, a kiválasztott plugin-ektől és témákról, valamint az oldal adatbázistábláinak méretétől.

## Oldal importálása egy ZIP-ből

1.  Navigáljon a cél WordPress oldal **Tools > Export & Import** menüpontjára.
2.  Nyitssa az importációs területet, és töltse fel a ZIP fájlt, amelyet az Export & Import eszköz hozott létre.
3.  Adjon meg egy helyettesítő URL-t, ha az oldal új címet használ, vagy hagyja üresen a mezőt, ha az eredeti URL-t szeretné megőrizni.
4.  Válassza ki, hogy az importálás végén törli-e az feltöltött ZIP fájlt.
5.  Kattintson **Begin Import**.
6.  Kövesse nyomon az függő importáláson, amíg az befejeződik. Csak akkor használja a **Cancel Import** gombot, ha a folyamat befejeződése előtt kell megállítania.
7.  Ellenőrizze az importált oldalt, mielőtt engedi a normál forgalmat vagy a vásárlói hozzáférést.

Egy egysiteszt WordPress telepítésén az importálás helyettesíti az aktuális oldalt az importált oldallal. Kérjük, készítsen teljes biztonsági másolatot a céloldalról, mielőtt elkezdi, és kerülje el, hogy ugyanazon az időpontban több importálást indítson el ugyanarra az oldalra.

## Korlátozások és kompatibilitási megjegyzések

- Nagyon nagy feltöltési könyvtárak vagy média könyvtárak nagy ZIP fájlokat eredményezhetnek. Kérjük, ellenőrizze a PHP feltöltési limitjeit, a végrehajtási limitjeit, a lemezterületet, a memóriát és a szerver időkorlátozását, mielőtt nagy oldalt exportál vagy importál.
- Nagyon nagy média könyvtárak esetén lehet, hogy egy alacsony forgalmú karbantartási ablak alatt kell őket áthelyezni.
- A cél WordPress telepítésnek kompatibilis WordPress, PHP, Ultimate Multisite, plugin és téma verziókat kell futtatnia.
- Az egysiteszt importálás helyettesíti a céloldalt. Ez nem egy ötvöző eszköz.
- A multisite-ről egysiteszt, és egysiteszt-ről multisite-ra történő áthelyezés csak akkor támogatott, ha a célkörnyezet képes futtatni az exportált oldal plugin-eit, témáit, URL-jeit és az Ultimate Multisite által szükséges komponenseit.
- Tartsa a ZIP fájlt magánként. Az exportált oldaltól származó adatbázis tartalmat, feltöltött fájlokat és konfigurációs részleteket tartalmazhat.

Az idősebb hálózat szintű exportációs munkafolyamatokhoz nézze el a [Site Export](/user-guide/administration/site-export) oldalra.
