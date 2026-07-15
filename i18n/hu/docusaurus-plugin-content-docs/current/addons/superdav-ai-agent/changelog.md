---
title: Változásnapló
sidebar_position: 5
_i18n_hash: 9747e37b1fd831941c9f86e6c3f85c81
---
# Változásnapló

## 1.18.0 — Megjelent: 2026-06-29 {#1180--released-on-2026-06-29}

### Új {#new}

- **Google Calendar eszközök** — konfigurált naptárak és események olvasása ütemezés-tudatos automatizálásokhoz
- **Kapcsolatleképezés és résztvevősegédek** — naptári résztvevők párosítása a webhely felhasználóival és kapcsolataival
- **Emberi jóváhagyási kapuk és emlékeztetőrekordok** — automatizálások szüneteltetése felülvizsgálathoz, és ismétlődő értesítések elkerülése
- **TextBee SMS-szolgáltató** — konfigurált szöveges üzenetértesítések küldése a TextBee-n keresztül
- **Advanced kísérőcsomag** — megbízható fejlesztői fájlrendszer-, adatbázis-, WP-CLI-, REST-diszpécser-, plugin-építő-, git-pillanatkép-, felhasználókezelési és benchmark-eszközök hozzáadása, a WordPress.org buildtől külön terjesztve

### Továbbfejlesztve {#improved}

- **Felügyelt Superdav szolgáltatás beállítása** — hosztolt szolgáltatási endpointok és automatikus kapcsolat-létesítés hozzáadása támogatott webhelyekhez
- **Kiadási csomagolás** — külön core és Advanced ZIP-ek készítése, mindkettő közzététele a GitHubon, és csak a core csomag elküldése a WordPress.org-ra

### Javítva {#fixed}

- **AI-kérések megbízhatósága** — modellválasztás, kérés-időtúllépések, alapértelmezett beállítási modell, reasoning-text kezelés és érvénytelen eszközhívásokhoz tartozó újrapróbálkozási útmutatás javítása
- **Naptár- és emlékeztető-megerősítés** — Google Calendar tokenek és emlékeztető-duplikációmentesítés megerősítése
- **Bevezetés és jóváhagyási folytatások** — frontend bevezetési indítások és megerősített képességfolytatások javítása
- **WordPress.org csomagolási felülvizsgálati problémák** — a core kiadással kapcsolatos csomagolási felülvizsgálati visszajelzések kezelése

## 1.16.0 — Megjelent: 2026-05-20 {#1160--released-on-2026-05-20}

### Új {#new-1}

- **Generate Logo SVG képesség** — a Theme Builder mostantól egyedi logó SVG-ket tud generálni és beágyazni névtérbiztos tisztítással
- **Fotófeltöltés a feltáró interjúban** — a Theme Builder feltáró interjúja mostantól tartalmaz egy fotófeltöltési lépést a gazdagabb dizájnkörnyezethez
- **Validate Palette Contrast képesség** — színpárok ellenőrzése WCAG-megfelelőség szempontjából, mielőtt alkalmaznád őket egy témára
- **Vendéglátóipari menük** — a Theme Builder mostantól strukturált étel- és italmenüoldalakat tud generálni vendéglátóipari vállalkozások számára
- **Asztali és mobil előnézeti renderelés** — a dizájnirány kiválasztása közben megtekintheted a dizájnodat asztali és mobileszközökön
- **Navigációs címkeparaméter** — a Create Menu képesség mostantól támogat egy különálló `navigation_label` értéket, amely eltér az oldal címétől
- **Tier 1 eszköz elérhetősége** — az sd-ai-agent/site-scrape mostantól alapértelmezetten elérhető Tier 1 eszköz a Theme Builderben

### Javítva {#fixed-1}

- **AI Client gyorsítótár** — mostantól transientekre épül a kérések közötti perzisztenciához, megelőzve az adatvesztést hosszú ideig futó agent-feladatoknál
- **Plugin sorműveleti linkek** — javítva és átnevezve az egyértelműség érdekében

## 1.10.0 — Megjelent: 2026-05-05 {#1100--released-on-2026-05-05}

### Új {#new-2}

- **Tavily internetes keresés** — a Tavily hozzáadása keresési szolgáltatóként a gazdagabb internetes keresési eredményekhez a Brave Search mellett
- **Témaérzékeny beépített készségek** — a Block Themes, Classic Themes, Kadence Blocks és Kadence Theme készségútmutatók mostantól a pluginnal együtt érkeznek
- **Webhelyépítő kapcsolatfelvételi űrlap képesség** — kapcsolatfelvételi űrlap hozzáadása bármely oldalhoz közvetlenül a chat felületről

### Továbbfejlesztve {#improved-1}

- **WooCommerce integráció átdolgozva** — mostantól natív WooCommerce API-kat használ a jobb megbízhatóság és kompatibilitás érdekében
- **A szolgáltatói lista automatikusan frissül** — amikor bármely plugin aktiválásra vagy deaktiválásra kerül

### Javítva {#fixed-2}

- **navigate-to képesség** — végtelen újratöltési ciklus javítva egyes admin oldalakon
- **list-posts képesség** — mostantól helyesen oldja fel a kategória- és címkeneveket slugokká
- **WP-CLI parancsok** — hiányzó névtéraliasok visszaállítása egy korábbi átdolgozás után
- **Eseményautomatizálás** — kíméletesen kezeli azokat a webhelyeket, ahol az automatizálási táblák még nincsenek létrehozva
- **memory-save képesség** — mostantól a megfelelő névtérelőtagot használja a rendszerutasítás-építőben
- **Skalár eszközeredmények** — mostantól helyesen becsomagolva kerülnek visszaadásra az AI-nak
- **Használati statisztikák** — mostantól helyesen kezelik a régi képességkulcs-formátumot a régebbi verziókról történő frissítéskor
