---
title: Eszközök és konfiguráció
sidebar_position: 4
_i18n_hash: 78a3b6062e985598d020eaee28754120
---
# Eszközök és konfiguráció {#tools-and-configuration}

A Theme Builder eszközkészletet használ a WordPress oldalad elemzéséhez, megtervezéséhez és felépítéséhez. Az 1.16.0 verzióban az **sd-ai-agent/site-scrape mostantól Tier 1 eszköz**, így alapértelmezetten elérhető a Theme Builderben. A Superdav AI Agent v1.18.0 egy külön terjesztett Advanced kísérőcsomagot is bevezet megbízható fejlesztői munkafolyamatokhoz; ezek az eszközök nem részei a WordPress.org alapcsomagnak, és külön kell őket telepíteni és engedélyezni.

## Elérhető eszközök {#available-tools}

### Tier 1 eszközök (mindig elérhetők) {#tier-1-tools-always-available}

A Tier 1 eszközök alapértelmezetten elérhetők a Theme Builderben további konfiguráció nélkül.

#### sd-ai-agent/site-scrape {#sd-ai-agentsite-scrape}

**Cél:** Meglévő webhelyek elemzése dizájninspiráció, tartalmi struktúra és funkcionalitás kinyeréséhez.

**Képességek:**

- **Webhelyelemzés** — versenytárs vagy inspirációs webhelyek feltérképezése és elemzése
- **Dizájnkinyerés** — színek, betűtípusok és elrendezési minták azonosítása
- **Tartalmi struktúra** — az oldalszervezés és hierarchia megértése
- **Funkciófelismerés** — pluginok és funkcionalitás azonosítása
- **Teljesítményelemzés** — oldalsebesség és optimalizálás ellenőrzése
- **SEO elemzés** — meta tagek és strukturált adatok áttekintése

**Használat:**

```
Elemezd az example.com dizájnját, és használd inspirációként az oldalamhoz.
```

**Amit kinyer:**

- Színpaletta és színhasználat
- Tipográfia (betűtípusok és méretek)
- Elrendezési struktúra és térközök
- Navigációs minták
- Tartalomszervezés
- Képek és médiahasználat
- Interaktív elemek
- Mobilos reszponzivitás

**Korlátozások:**

- Nem tud jelszóval védett webhelyeket feltérképezni
- Tiszteletben tartja a robots.txt fájlt és a webhelyszabályzatokat
- Előfordulhat, hogy nem rögzíti a dinamikus tartalmat
- JavaScript-intenzív webhelyeknél korlátozott lehet az elemzés
- Nagy webhelyek elemzése tovább tarthat

### Tier 2 eszközök (opcionális) {#tier-2-tools-optional}

A Tier 2 eszközök akkor érhetők el, ha kifejezetten engedélyezve vannak a Theme Builder beállításaiban.

#### Haladó analitika {#advanced-analytics}

Részletes teljesítménymutatókat biztosít:

- Oldalbetöltési idők
- Core Web Vitals
- SEO pontszám
- Akadálymentességi pontszám
- Bevált gyakorlatok pontszáma

#### Tartalomoptimalizáló {#content-optimizer}

Elemzi és fejlesztéseket javasol a következőkhöz:

- Olvashatóság
- SEO optimalizálás
- Kulcsszóhasználat
- Tartalmi struktúra
- Call-to-action elhelyezése

### Tier 3 eszközök (Premium) {#tier-3-tools-premium}

A Tier 3 eszközök további konfigurációt vagy premium funkciókat igényelnek.

#### AI tartalomgenerátor {#ai-content-generator}

Tartalmat generál a következőkhöz:

- Termékleírások
- Szolgáltatási oldalak
- Blogbejegyzések
- Meta leírások
- Call-to-action szöveg

#### Haladó dizájneszközök {#advanced-design-tools}

Haladó dizájnképességeket biztosít:

- Egyedi CSS generálása
- Animációk létrehozása
- Interaktív elemek tervezése
- Haladó színelmélet
- Tipográfia optimalizálása

### Advanced kísérőeszközök (külön csomag) {#advanced-companion-tools-separate-package}

Az Advanced kísérőcsomagot a Superdav AI Agent alapkiadásától külön terjesztik. Olyan megbízható fejlesztői és webhelytulajdonosi környezetekhez készült, ahol az adminisztrátorok kifejezetten engedélyezik az agent számára a nagy hatású eszközök használatát.

Az Advanced kísérőképességek a következőket tartalmazhatják:

- **Fájlrendszer-eszközök** — jóváhagyott fájlok vizsgálata és módosítása megbízható környezetekben
- **Adatbázis-eszközök** — webhelyadatok lekérdezése vagy frissítése kifejezett engedélyezés esetén
- **WP-CLI eszközök** — WordPress karbantartási és ellenőrzési parancsok futtatása
- **REST dispatcher eszközök** — regisztrált REST endpointok hívása ellenőrzött dispatch munkafolyamatokon keresztül
- **Pluginépítő eszközök** — plugin kód vázának létrehozása és iterálása
- **Git pillanatkép-eszközök** — pillanatképek létrehozása kockázatos fejlesztői műveletek előtt
- **Felhasználókezelési eszközök** — felhasználói rekordok áttekintésének vagy módosításának segítése, ahol engedélyezett
- **Benchmark eszközök** — teljesítmény- vagy képesség-benchmarkok futtatása fejlesztői áttekintéshez

Ne dokumentáld ezeket minden telepítéshez általánosan elérhető Theme Builder eszközként. Csak akkor érhetők el, ha az Advanced kísérőcsomag telepítve és engedélyezve van, valamint megbízható adminisztrátorokra van korlátozva.

## Eszközkonfiguráció {#tool-configuration}

### Eszközök engedélyezése {#enabling-tools}

További eszközök engedélyezése a Theme Builderben:

1. Navigálj ide: **Gratis AI Agent → Settings**
2. Menj ide: **Theme Builder → Tools**
3. Kapcsold be/ki az eszközöket szükség szerint
4. Mentsd a beállításokat

### Eszközengedélyek {#tool-permissions}

Egyes eszközök engedélyeket igényelnek:

- **Webhelyfeltérképezés** — internet-hozzáférést igényel
- **Analitika** — Google Analytics integrációt igényel
- **Tartalomgenerálás** — API-kulcsokat igényel
- **Haladó funkciók** — premium előfizetést igényelhetnek
- **Advanced kísérőeszközök** — a külön terjesztett Advanced csomagot és kifejezett adminisztrátori bizalmat igényelnek

### API-kulcsok és hitelesítő adatok {#api-keys-and-credentials}

Konfiguráld az API-kulcsokat azokhoz az eszközökhöz, amelyek igénylik őket:

1. Menj ide: **Gratis AI Agent → Settings → API Keys**
2. Add meg az egyes eszközök hitelesítő adatait
3. Teszteld a kapcsolatot
4. Mentsd biztonságosan

### Az Advanced kísérőcsomag telepítése {#installing-the-advanced-companion-package}

Az Advanced kísérőcsomagot a WordPress.org alap ZIP-től külön adják ki. Csak a kiadáshoz tartozó hivatalos projektterjesztési csatornáról telepítsd, majd korlátozd a hozzáférést megbízható adminisztrátorokra. Tekintsd át az emberi jóváhagyási kapukat és a git pillanatkép viselkedését, mielőtt fájlrendszer-, adatbázis-, WP-CLI-, REST dispatcher-, pluginépítő-, felhasználókezelési vagy benchmark eszközöket engedélyezel éles webhelyen.

## Az sd-ai-agent/site-scrape használata {#using-sd-ai-agentsite-scrape}

### Alapvető használat {#basic-usage}

Kérd meg a Theme Buildert egy webhely elemzésére:

```
Elemezd a versenytársam webhelyének dizájnját a competitor.com címen,
és javasolj dizájnfejlesztéseket az oldalamhoz.
```

### Konkrét elemzés {#specific-analysis}

Kérj konkrét típusú elemzéseket:

```
Nyerd ki a színpalettát az example.com webhelyről, és használd inspirációként.
```

```
Elemezd az example.com navigációs struktúráját, és alkalmazz hasonló
szervezést az oldalamon.
```

```
Ellenőrizd az example.com mobilos reszponzivitását, és biztosítsd, hogy az oldalam
ugyanilyen reszponzív legyen.
```

### Összehasonlító elemzés {#comparison-analysis}

Hasonlíts össze több webhelyet:

```
Hasonlítsd össze a site1.com és a site2.com dizájnját, és hozz létre olyan dizájnt,
amely mindkettő legjobb elemeit ötvözi.
```

## Eszközkorlátozások és megfontolások {#tool-limitations-and-considerations}

### Sebességkorlátozás {#rate-limiting}

- A scraping sebességkorlátozott a szerver túlterhelésének megelőzése érdekében
- Ugyanarra a site-ra irányuló több kérés korlátozva lehet
- A nagy site-ok elemzése hosszabb ideig tarthat

### Tartalom pontossága {#content-accuracy}

- Előfordulhat, hogy a dinamikus tartalom nem kerül teljesen rögzítésre
- A JavaScript által renderelt tartalom hiányos lehet
- Előfordulhat, hogy a valós idejű adatok nem jelennek meg
- Egyes tartalmak fizetőfal mögött lehetnek

### Jogi és etikai szempontok {#legal-and-ethical-considerations}

- Tartsd tiszteletben a robots.txt-t és a site szabályzatait
- Ne scrape-elj szerzői joggal védett tartalmat reprodukálás céljából
- Az elemzést inspirációként használd, ne másolásra
- Ellenőrizd, hogy van-e jogod a kinyert tartalom használatához
- Tartsd be az elemzett site-ok szolgáltatási feltételeit

### Teljesítményre gyakorolt hatás {#performance-impact}

- Nagy site-ok scrapingje időt vehet igénybe
- Több egyidejű scrape lassabb lehet
- A hálózati kapcsolat befolyásolja a sebességet
- A nagy adatkészletek több feldolgozást igényelhetnek

## Bevált gyakorlatok {#best-practices}

### Site-elemzés használata {#using-site-analysis}

1. **Elemezz több site-ot** — gyűjts inspirációt több forrásból
2. **Fókuszálj a struktúrára** — ismerd meg az elrendezési és szervezési mintákat
3. **Nyerd ki a színeket** — használd a színpalettákat kiindulási pontként
4. **Tanulmányozd a tipográfiát** — azonosítsd a neked tetsző betűtípus-kombinációkat
5. **Tekintsd át a navigációt** — értsd meg a menü szervezését

### Etikus scraping {#ethical-scraping}

1. **Tartsd tiszteletben a robots.txt-t** — kövesd a site irányelveit
2. **Ne másolj tartalmat** — az elemzést csak inspirációként használd
3. **Ellenőrizd a jogokat** — győződj meg róla, hogy használhatod a kinyert tartalmat
4. **Tüntesd fel a forrásokat** — nevezd meg az inspirációs forrásokat
5. **Tartsd be a feltételeket** — felelj meg a site szolgáltatási feltételeinek

### Az eszköz hatékonyságának maximalizálása {#maximizing-tool-effectiveness}

1. **Légy konkrét** — kérj konkrét elemzéstípusokat
2. **Adj kontextust** — magyarázd el a site-od célját
3. **Állíts fel elvárásokat** — írd le a tervezési céljaidat
4. **Iterálj** — finomíts az eredmények alapján
5. **Kombináld az eszközöket** — használj több eszközt az átfogó elemzéshez

## Hibaelhárítás {#troubleshooting}

### A site nem scrape-elhető {#site-wont-scrape}

- Ellenőrizd, hogy a site nyilvánosan elérhető-e
- Ellenőrizd, hogy a robots.txt engedélyezi-e a scrapinget
- Próbálj ki egy másik site-ot
- Ellenőrizd az internetkapcsolatot
- Fordulj a támogatáshoz, ha a probléma továbbra is fennáll

### Hiányos elemzés {#incomplete-analysis}

- Lehet, hogy a site dinamikus tartalommal rendelkezik
- Előfordulhat, hogy a JavaScript nem renderelődik teljesen
- A nagy site-oknál időtúllépés fordulhat elő
- Próbálj inkább konkrét oldalakat elemezni
- Kérj konkrét elemzéstípusokat

### Lassú teljesítmény {#slow-performance}

- A nagy site-ok elemzése hosszabb ideig tart
- Több egyidejű scrape lassabb
- A hálózati kapcsolat befolyásolja a sebességet
- Próbáld csúcsidőn kívül
- Először kisebb szakaszokat elemezz

## Kapcsolódó dokumentáció {#related-documentation}

- [Discovery Interview](./discovery-interview.md) — tervezési információk gyűjtése
- [Design Direction](./design-direction.md) — a design finomítása
- [Hospitality Menus](./hospitality-menus.md) — menüoldalak létrehozása
