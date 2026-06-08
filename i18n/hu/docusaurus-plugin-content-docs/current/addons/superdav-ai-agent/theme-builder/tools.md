---
title: Eszközök és konfiguráció
sidebar_position: 4
_i18n_hash: f27cdab7be320668b6c1d53db1190775
---
# Eszközök és Konfiguráció

A Theme Builder egy eszköztárral rendelkezik, amelyet az oldalának elemzésére, tervezésére és építésére használ. Az 1.16.0 verzióban **sd-ai-agent/site-scrape most Tier 1 eszköz**, így alapértelmezés szerint elérhető a Theme Builderben.

## Elérhető Eszközök

### Tier 1 Eszközök (Mindig Elérhetőek)

A Tier 1 eszközök alapértelmezés szerint elérhetők a Theme Builderben, további konfiguráció nélkül.

#### sd-ai-agent/site-scrape

**Funkció:** Az istniejącí tartalmak elemzésére, hogy design inspirációt, tartalmi struktúrát és funkciókat szakkolhasson ki.

**Funkciók:**

- **Oldal elemzése** — Versenyző vagy inspirációs weboldalak szakkolása és elemzése
- **Design szakkolása** — Színeket, betűtípusokat és elrendezési mintákat azonosít
- **Tartalmi struktúra** — Megérti az oldalak szerveződését és hierarchiáját
- **Funkciók detektálása** — Azonosítja a plugineket és a funkciókat
- **Teljesítmény elemzése** — Ellenőrzi az oldal sebességét és optimalizációját
- **SEO elemzése** — Vizsgálja a meta címkéket és a strukturált adatokat

**Használat:**

```
Elemződ a példa.com designját, és használja inspirációként az oldalamra.
```

**Mit szakkol ki:**

- Színek palettája és színek felhasználása
- Tipográfia (betűtípusok és méretek)
- Elrendezési struktúra és távolságok
- Navigációs minták
- Tartalom szerveződés
- Képek és média felhasználása
- Interaktív elemek
- Mobil optimalizáció

**Korlátozások:**

- Nem szakkolázhat jelszóval védett oldalakat
- Tiszteeti köti a robots.txt-t és az oldal szabályzatait
- Nem fogja szakkolázni a dinamikus tartalmat
- A JavaScript-alapú oldalak korlátozott elemzést eredményezhetnek
- Nagy oldalak hosszabb időt igényelhetnek az elemzéshez

### Tier 2 Eszközök (Opcionális)

A Tier 2 eszközök akkor elérhetők, ha explicit módon aktiválják a Theme Builder beállításain.

#### Advanced Analytics (Haladó Analitika)

Részletes teljesítmény-mutatókat biztosít:

- Oldal betöltési idői
- Core Web Vitals
- SEO pontszám
- Elérhetőség (Accessibility) pontszám
- Legjobb gyakorlatok pontszám

#### Content Optimizer (Tartalom Optimalizátora)

Elemzi és javaslatokat ad a következőkre:

- Olvashatóság
- SEO optimalizáció
- Kulcsszó felhasználás
- Tartalmi struktúra
- Call-to-action elhelyezése

### Tier 3 Eszközök (Premium)

A Tier 3 eszközök további konfigurációt vagy premium funkciókat igényelnek.

#### AI Content Generator (AI Tartalom Generátor)

Tartalmat generál a következőkre:

- Termékleírások
- Szolgáltatási oldalak
- Blogbejegyzések
- Meta leírások
- Call-to-action szövegek

#### Advanced Design Tools (Haladó Design Eszközök)

Haladó design funkciókat biztosít:

- Saját CSS generálás
- Animáció létrehozása
- Interaktív elem designja
- Haladó színtelmélet
- Tipográfiai optimalizáció

## Eszköz Konfiguráció

### Eszköz Aktiválása

Ha további eszközöket szeretne aktiválni a Theme Builderben:

1. Navigáljon a **Gratis AI Agent → Settings** menüpontra
2. Lépjen a **Theme Builder → Tools** menüpontra
3. Kapcsolja be/ki az eszközöket szükség szerint
4. Mentse a beállításokat

### Eszköz Engedélyek

Néhány eszköz engedélyeket igényel:

- **Oldal szakkolása** — internet hozzáférést igényel
- **Analitika** — Google Analytics integrációt igényel
- **Tartalom generálás** — API kulcsokat igényel
- **Haladó funkciók** — premium előfizetést igényelhet

### API Kulcsok és Hitelesítő adatok

Konfigurálja az API kulcsokat az eszközök számára, amelyek ezeket igényelnek:

1. Lépjen a **Gratis AI Agent → Settings → API Keys** menüpontra
2. Adja meg az adatokat minden eszköz számára
3. Tesztelje a kapcsolatot
4. Mentse biztonságosan

## sd-ai-agent/site-scrape Használata

### Alapvető Használat

Kérje a Theme Builder-től, hogy elemzze egy weboldalt:

```
Elemződ a versenytársam oldalát, a versenytárs.com-ot, és javasolj design javításokat az oldalamra.
```

### Specifikus Elemzés

Kérjen meg specifikus típusú elemzést:

```
Szakkolázz ki a színek palettáját a példa.com-ról, és használja inspirációként.
```

```
Elemződ a navigációs struktúrát a példa.com-ról, és alkalmazz hasonló szerveződéset az oldalamra.
```

```
Ellenőrizd a mobil optimalizációt a példa.com-on, és biztosítsd, hogy az oldalam ugyanolyan optimalizált legyen.
```

### Össравни Réselemzés

Összehasonlítsa több oldalt:

```
Összehasonlítsa a site1.com és a site2.com designját, és hozzon létre egy designot, amely a legjobbak elemeit ötvözi.
```

## Eszköz Korlátozásai és Megfontolások

### Rate Limiting (Hogyan történik a korlátozás)

- A szakkolás rate-limitelt, hogy elkerülje a szerver túlterhelését
- Többszörös kérés ugyanazon az oldalra lassíthatja
- Nagy oldalak hosszabb időt igényelhetnek az elemzéshez

### Tartalom Pontossága

- A dinamikus tartalmat nem szakkolázhat teljesen
- A JavaScript által generált tartalom hiányos lehet
- Az valós idejű adatok nem tükröződhetnek
- Néhány tartalom fizetős fal mögött lehet

### Jogi és Etikai Megfontolások

- Tiszteeti köti a robots.txt-t és az oldal szabályzatait
- Ne szakkolázz szerzői jogi tartalmát reprodukcióra
- Használja az elemzést inspirációként, nem másolásként
- Ellenőrizze, hogy jogában van-e használni az extrahált tartalmat
- Kövesse az elemzett oldalak szolgáltatási feltételeit

### Teljesítmény Hatása

- A nagy oldalak szakkolása időt igényelhet
- Több egyidejű szakkolás lassabb lehet
- A hálózati kapcsolat befolyásolja a sebességet
- A nagy adatszettek több feldolgozást igényelhetnek

## Legjobb Gyakorlatok

### Oldal Elemzésének Használata

1. **Elemződ több oldalt** — gyűjtse inspirációt több forrásból
2. **Fókuszáljon a strukturán** — tanulja meg az elrendezési és szerveződés mintákat
3. **Színek szakkolása** — használja a színek palettáit kiindulópontként
4. **Tanulmányozza a tipográfiát** — azonosítsa a kedvenc betűtípus kombinációit
5. **Vizsgálja a navigációt** — értelmezi a menü szerveződését

### Etikus Szakkolás

1. **Tiszteeti köti a robots.txt-t** — kövesse az oldal irányelveit
2. **Ne másolja tartalmat** — csak inspirációként használja az elemzést
3. **Ellenőrizze a jogokat** — győződjön meg róla, hogy jogában van-e használni az extrahált tartalmat
4. **Hivatkozzon a forrásokra** — hivatkozzon az inspirációs forrásokra
5. **Kövesse a feltételeket** — tartsa be az oldal szolgáltatási feltételeit

### Eszköz Hatékonyságának Maximális Kiaknázása

1. **Légy specifikus** — kérjen meg specifikus típusú elemzést
2. **Adjon kontextust** — magyarázza el az oldalának célját
3. **Állítsa el elvárásokat** — írja le a design céljait
4. **Iteráljon** — finomítsen a találatok alapján
5. **Összeállítsa eszközöket** — használjon több eszközt átfogó elemzéshez

## Hibaelhárítás

### Az oldal nem szakkolázható

- Ellenőrizze, hogy az oldal nyilvánosan elérhető-e
- Vizsgálja meg, hogy a robots.txt engedi-e a szakkolást
- Próbáljon más oldalt
- Ellenőrizze az internet kapcsolatot
- Üzenekküldés a támogatásnak, ha a probléma fennáll

### Inkomplett Elemzés

- Az oldal dinamikus tartalmat tartalmazhat
- A JavaScript nem szakkolázható teljesen
- A nagy oldalak időkorlátozást okozhatnak
- Próbálja elemeket elemzni
- Kérjen meg specifikus elemzés típusokat

### Lassú Teljesítmény

- A nagy oldalak hosszabb időt igényelnek az elemzéshez
- Több egyidejű szakkolás lassabb
- A hálózati kapcsolat befolyásolja a sebességet
- Próbálja a csúcsaórák külső időszakában
- Kezdetben elemződsebb részeket

## Kapcsolódó Dokumentáció

- [Discovery Interview](./discovery-interview.md) — gyűjteni design információkat
- [Design Direction](./design-direction.md) — finomítani a designját
- [Hospitality Menus](./hospitality-menus.md) — létrehozni menüoldalakat
