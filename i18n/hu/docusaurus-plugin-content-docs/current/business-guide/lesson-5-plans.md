---
title: 'Örnzet 5: Tervezésezed'
sidebar_position: 6
_i18n_hash: 8c58dfd0a186bd585f43342bc4ea4f43
---
# 5. Bölöm: A Tervcsoportok Tervezése

A tervcsoportjai nem csupán árazási szintek – hanem tükrözik azt, ahogyan a szakterületének ügyfelei ténylegesen működnek. Ebben a bölségeben olyan termékcsoportokat terveznek, amelyek megfelelnek a fitness vállalkozások valódi igényeinek különböző szakaszokban.

## Hol maradtunk? {#where-we-left-off}

FitSite rendelkezik három előre elkészített sablónál (Studio Essential, Gym Pro, Fitness Chain). Most létrehozzuk azokat a tervcsoportokat, amelyek meghatározzák, milyen funkciókra férnek hozzá az ügyfelek, és mit fizetnek.

## A Funkcionális Szegmensek Összefoglalása {#thinking-in-customer-segments}

A legtöbb ember hibát követ el, amikor a tervcsoportokat a műszaki funkciók körül tervezzi (raktárkapacitás, sávszélesség, oldalszám). A szakterületének ügyfelei nem ilyen szempontok alapján gondolkodnak. Egy fitness étterem tulajdonosa arról gondolkodik, amire szüksége van a vállalkozás működtetéséhez.

A fitness stúdiók számára három természetes szegmens létezik:

| Szegmens | Ki? | Mire van szüksége? |
|---------|-------------|----------------|
| **Egyededi edzők / kis stúdiók** | 1-3 dolgozó, egy helyszín, kezdő | Professzionális weboldal, osztályinformáció, kapcsolatfelvételi űrlap |
| **Megalapozott fitness éttermek** | 5-20 dolgozó, egy helyszín, növekvő | Minden az előzőekben lévő funkció plusz foglalás, blog, galéria, saját domain |
| **Fitness láncok** | Több helyszín, megalapozott márka | Minden az előzőekben lévő funkció plusz multi-site, helyszínek oldalai, dolgozók listája |

A tervcsoportjai ezekhez a szegmensekhez kell kötődniük, nem pedig véletlenszerű funkciócsomagokhoz.

## A FitSite Tervcsoportok Létrehozása {#creating-the-fitsite-plans}

Navigáljon az **Ultimate Multisite > Products > Add Product** menüpontra minden tervcsoporthoz.

### Tervcsoport 1: FitSite Starter -- 49 $/hónap {#plan-1-fitsite-starter----49month}

**Célközönség**: Egyededi edzők és kis stúdiók

**Description tab**:
- Neve: FitSite Starter
- Leírás: "Összesen, amire egy személyi edzőnek vagy kis stúdiónak szüksége van, hogy online professzionális legyen."

**General tab**:
- Terméktípus: Tervcsoport
- Ügyfél szerepe: Administrator

**Site Templates tab**:
- Engedélyezett sablonok: Engedélyezve
- Elérhető sablonok: Csak Studio Essential

**Limitations**:
- Oldalak: 1
- Raktárkapacitás: 1 GB
- Saját domain: Kiás (használja a `studioname.fitsite.com` címet)

**Plugins tab**:
- Kapcsolatfelvételi űrlap plugin: Követetett aktiválás (Force Activate)
- SEO plugin: Követetett aktiválás (Force Activate)
- Foglalási plugin: Nem elérhető (felülvizsgálási ösztönző)

**Themes tab**:
- Kiválasztott témája: Követetett aktiválás (Force Activate)
- Minden más téma: Rejtve

### Tervcsoport 2: FitSite Growth -- 99 $/hónap {#plan-2-fitsite-growth----99month}

**Célközönség**: Megalakult, egy helyszíni fitness éttermek

**Description tab**:
- Neve: FitSite Growth
- Leírás: "A megalapozott fitness éttermek számára, akik készen állnak az online jelenlégük növelésére és új tagok vonzására."

**Site Templates tab**:
- Elérhető sablonok: Studio Essential és Gym Pro

**Limitations**:
- Oldalak: 1
- Raktárkapacitás: 5 GB
- Saját domain: Engedélyezve

**Plugins tab**:
- Minden az Starterben lévő funkció plusz:
- Foglalási plugin: Követetett aktiválás (Force Activate)
- Galéria plugin: Követetett aktiválás (Force Activate)
- Blog funkció: Elérhető

**Up & Downgrades tab**:
- Tervcsoport: FitSite Plans
- Termékrendelmezés: 2

### Tervcsoport 3: FitSite Pro -- 199 $/hónap {#plan-3-fitsite-pro----199month}

**Célközönség**: Több helyszíni fitness láncok

**Description tab**:
- Neve: FitSite Pro
- Leírás: "A teljes platform a több helyszínű fitness márkák számára."

**Site Templates tab**:
- Elérhető sablonok: Mindhárom sablon

**Limitations**:
- Oldalak: 5 (egy helyszínre)
- Raktárkapacitás: 20 GB
- Saját domain: Engedélyezve

**Plugins tab**:
- Minden az Growth-ban lévő funkció plusz:
- Minden prémium plugin: Követetett aktiválás (Force Activate)

**Up & Downgrades tab**:
- Tervcsoport: FitSite Plans
- Termékrendelmezés: 3

## A Tervcsoportok Beállítása {#setting-up-the-plan-group}

A tervcsoport biztosítja, hogy az ügyfelek csak a FitSite tervcsoporton belül tudjanak emelkedni vagy csökkenteni. Minden tervcsoport **Up & Downgrades** menüpontján:

1.  Állítsa a **Plan Group**-ot "FitSite Plans"-re mindhárom tervcsoport esetén
2.  Állítsa a **Product Order**-t 1-re (Starter), 2-re (Growth), 3-ra (Pro)

Ez létrehozza egy világos emelkedési útvonalat: Starter → Growth → Pro.

## Order Bumpok Hozzáadása {#adding-order-bumps}

Az "order bumpok" (kiegészítő vásárlások) olyan kiegészítő termékek, amelyeket a fizetési folyamat során kínálunk. FitSite esetében fontolja meg:

- **Extra Storage Pack** (19 $/hónap) – további 5 GB raktárkapacitás
- **Priority Support** (29 $/hónap) – gyorsabb válaszidő
- **Additional Site** (39 $/hónap) – az ügyfelek számára, akiknek több helyszínre van szükségük, mint amennyit a tervcsoportuk engedi

Létrehozsa ezeket **Package** típusú termékekként az Ultimate Multisite-ban, és kapcsolja őket a releváns tervcsoportokhoz.

## Miért Működik Ez a Szerkezet? {#why-this-structure-works}

- A **Starter** eltávolítja a belépési akadályokat – alacsony ár, egyszerű kínálat, gyors online jelenlétet biztosít az edzőknek
- A **Growth** hozzáadja azokat a funkciókat, amelyekre a fitness éttermeknek ténylegesen szüksége van – foglalás, galériák, saját domainek
- A **Pro** a magas értékű szegmensnek szolgál, amely több helyszíni támogatást igényel
- Az **Order bumpok** lehetővé teszik az ügyfelek számára, hogy testre szabják a szolgáltatást, anélkül, hogy bonyolítják meg a fő tervcsoportokat
- A **világos emelkedési útvonal** azt jelenti, hogy az ügyfelek növekedésével növekednek veletek, nem hogy elhagyják a szolgáltatást

## A FitSite Hálózatának Állapotát {#the-fitsite-network-so-far}

```
FitSite Network
├── WordPress Multisite (subdomain mode)
├── Ultimate Multisite (configured)
├── Hosting with wildcard SSL + domain mapping
├── Site Templates (Studio Essential, Gym Pro, Fitness Chain)
├── Products
│   ├── FitSite Starter ($49/mo) → Studio Essential template
│   ├── FitSite Growth ($99/mo) → Studio Essential + Gym Pro templates
│   ├── FitSite Pro ($199/mo) → All templates
│   └── Order Bumps (Extra Storage, Priority Support, Additional Site)
└── Ready for checkout configuration (next lesson)
```

## Amit Létrehozottunk Ebben a Bölségeben {#what-we-built-this-lesson}

- **Három tervcsoport**, amelyek megfelelnek a valódi fitness vállalkozási szegmenseknek
- **Funkciókorlátozás** az Ultimate Multisite plugin és sablonvezérlő funkcióit használva
- **Egy tervcsoport**, amely világos emelkedési útvonalat biztosít
- **Order bump termékek** további bevételhez
- **Árazási struktúra**, amely az ügyfél értékén alapul, nem a műszaki specifikációkon

---

**Következő:** [6. Bölöm: A Regisztrációs Élmény](lesson-6-checkout) – itt építünk egy fizetési folyamatot, amely átalakítja a fitness stúdió tulajdonosait fizető ügyfelekké.
