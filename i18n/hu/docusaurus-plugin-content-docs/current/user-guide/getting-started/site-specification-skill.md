---
title: Weboldal specifikációs készség
sidebar_position: 18
_i18n_hash: 7470e8d04c1f380b3dca6ba5559b34f5
---
# Oldal Adatleírás (Site Specification) Képesség {#site-specification-skill}

Az **Oldal Adatleírás (Site Specification) képesség** egy strukturált megközelítés, amely rögzíti az oldal céljait, nézőkörét és márkaidentitását. Ezek az információk az **site_brief** memóriádba kerülnek, amelyet az agentek a tranzakciók során hivatkoznak rá, hogy konzisztens, kontextusérzékeny segítséget nyújtsanak.

## Mi az Oldal Adatleírás? {#what-is-site-specification}

Az Oldal Adatleírás a következő elemek dokumentálásának folyamata:

- **Oldal célja (Site purpose)**: Amit az oldalt csinál, és miért létezik.
- **Célközönség (Target audience)**: Ki látogatja az oldalt, és mi az ő szükséglete.
- **Márkaidentitás (Brand identity)**: A színeid, hangnemed és vizuális stílusod.
- **Üzleti célok (Business goals)**: Mi jelenti a sikerrel az oldal számára.
- **Tartalomstruktúra (Content structure)**: Hogyan van rendezve az oldalt.

Ez az adatokegyüttes az **site_brief**-ed lesz, egy tartós memória, amelyet az agentek az oldal kontextusának megértéséhez használnak.

## Miért használjuk az Oldal Adatleírást? {#why-use-site-specification}

### Konszenz és Tranzakciók Között {#consistency-across-sessions}

Nincs site_brief esetén minden új tranzakció elején újra kell magyaráznod az oldal célját. Ha van, az agentek azonnal értik:

- Az oldal céljait és a nézőköreit
- A márka színeit és hangnemét
- A tartalomstruktúrádat
- Az üzleti céljaidat

### Jobb Ajánlások {#better-recommendations}

Az agentek az site_brief-edet használják:

- Funkciók javaslatára, amelyek összhangban vannak az oldal céljával
- Tartalomstruktúrák ajánlására, amelyek illeszkednek a céljaidhoz
- Dizájnok javaslatára, amelyek konzisztensek a márkádhoz
- Inkompatibilis funkciók elkerülésére

### Gyorsabb Beindítás {#faster-onboarding}

Az új agentek (vagy az új tranzakciók során dolgozó agentek) gyorsan beindíthatják magukat, ha az site_brief-edet olvasják, és nem hogyíthatnak tisztázó kérdéseket.

## Hogyan indítsuk el az Oldal Adatleírást? {#initiating-site-specification}

### A Theme Builder Beindítási Folyamatában {#during-theme-builder-onboarding}

Az Oldal Adatleírás képesség automatikusan elindul a **Theme Builder onboarding flow** során. Az Setup Assistant agent kérdéseket tesz, és felépíti az site_brief-edet.

### Manuális Indítás {#manual-initiation}

Bármikor elindíthatod az Oldal Adatleírást:

```
"Adj nekem egy site specification-t az oldalamhoz"
```

vagy

```
"Segíts nekem létrehozni egy site brief-et"
```

## Az Oldal Adatleírás Folyamata {#the-site-specification-process}

### 1. Lépés: Oldal Célja {#step-1-site-purpose}

Az agent kérdezi:

```
Mi az oldal elsődleges célja?
- E-ker kereskedelmi oldal
- Blog vagy tartalomoldal
- Portfólió vagy kiállítás
- SaaS alkalmazás
- Közösségi oldal vagy fórum
- Más: [leírja]
```

Választhatsz egy kategóriát, vagy saját céljaidat írhatod le.

### 2. Lépés: Célközönség {#step-2-target-audience}

```
Ki a fő nézőköre?
- Fogyasztók / általános közönség
- Üzleti szakemberek
- Fejlesztők / technikai felhasználók
- Diákok / oktatók
- Más: [leírja]

Mi az ő fő szükséglete?
```

### 3. Lépés: Márkaidentitás {#step-3-brand-identity}

```
Mi a márka színeid?
- Elsődleges szín: [színkiváló vagy hex kód]
- Másodlagos szín: [színkiváló vagy hex kód]
- Akcent szín: [opcionális]

Hogyan írír le a márka hangnemét?
- Professzionális / vállalati
- Kreatív / művészi
- Játszmérbeli / laza
- Minimalista / modern
- Meleg / barátságos
```

### 4. Lépés: Üzleti Célok {#step-4-business-goals}

```
Mi jelenti a sikerrel az oldal számára?
- Lead generálás
- Termékek eladása
- Közösségépítés
- Tudásmegosztás
- Autoritatív pozíció kialakítása
- Más: [leírja]

Mi az elsődleges mérőszámod?
- Bevétel (Revenue)
- Felhasználói elköteleződés (User engagement)
- Tartalom elérése (Content reach)
- Konverziók (Conversions)
- Más
```

### 5. Lépés: Tartalomstruktúra {#step-5-content-structure}

```
Hogyan van rendezve a tartalom?
- Lapos (az összes tartalom ugyanazon a szinten)
- Hierarchikus (kategóriák és al-kategóriák)
- Kronológiai (blog stílusú)
- Termékalapú (katalógus)
- Más: [leírja]

Milyen tartalomtípusokat használsz?
- Blog posztok
- Termékoldalak
- Case study-k
- Dokumentáció
- Videók
- Más
```

## Az site_brief Memóriád {#your-sitebrief-memory}

Az Oldal Adatleírás elvégzése után az információid az **site_brief**ként kerülnek az agent memóriádba. Ez egy strukturált rekord, amely tartalmazza:

```json
{
  "site_purpose": "Kezedmirógépészeti ékszerek e-ker kereskedelmi oldala",
  "target_audience": "25-45 éves nők, akik érdeklődnek a fenntartható divat iránt",
  "brand_colors": {
    "primary": "#8B4513",
    "secondary": "#D2B48C",
    "accent": "#2F4F4F"
  },
  "brand_tone": "Meleg, kézműves, fenntartható",
  "business_goals": ["Eladás generálása", "Márkaelkötelezettségépítés"],
  "primary_metric": "Bevétel (Revenue)",
  "content_structure": "Termékatalógus bloggal",
  "content_types": ["Termékoldalak", "Blog posztok", "Ügyfél történetek"]
}
```

## Az site_brief Megtekőzése és Frissítése {#viewing-and-updating-your-sitebrief}

### Megtekintés az site_brief-edet {#view-your-sitebrief}

Kérdezd meg az agentet:

```
"Mutítsd meg az site brief-emet"
```

vagy

```
"Mit tudsz az oldalamról?"
```

Az agent megjeleníti az elmentett adatleírásodat.

### Frissítés az site_brief-edet {#update-your-sitebrief}

Ha az oldald évolúciósan változik, frissítheted:

```
"Frissítem az site brief-emet: most B2B ügyfeleket célozunk meg"
```

vagy

```
"Frissítem az oldal adatleírását"
```

Ez újra futtatja az Oldal Adatleírás képességét az aktuális információidat kiindulópontként használva.

## Hogyan használják az agentek az site_brief-et? {#how-agents-use-sitebrief}

### Dizájn Ajánlások {#design-recommendations}

Amikor dizájnváltozásokat kérsz, az agentek az site_brief-edet használják:

```
Te: "Újra kell dizájnolni az oldalak főoldalát"
Agent: "Az site brief-ed alapján, hogy 25-45 éves nők címmel,
meleg, kézműves hangnemet célozva, olyan dizájnnal fogok dolgozni,
amely hangsúlyozza a kézműves ékszereidet és a fenntartható értékeket."
```

### Funkciók Javaslatai {#feature-suggestions}

Az agentek olyan funkciókat javaslanak, amelyek összhangban vannak a céljaiddal:

```
Te: "Milyen funkciókat kell hozzáadnom?"
Agent: "Egy ügyféllojalitást célozó e-ker kereskedelmi oldalhoz javaslom:
lojalitási programot, ügyfél véleményeket, e-mail hírlevelet és
termékajánlásokat."
```

### Tartalomstruktúra {#content-structure}

Az agentek a struktúrád alapján javasolnak tartalomrendezést:

```
Te: "Hogyan kell rendeznem a blogomat?"
Agent: "Mivel termékatalógust és blogot használsz, javaslom, hogy a posztokat
a termék kategóriája szerint rendezd, és hozz létre 'stílusalkotó útmutatókat',
amiket több terméket együtt mutatnak be."
```

## Legjobb Gyakorlatok {#best-practices}

### Látósság legyél {#be-specific}

Ne csak "általános közönség" legyen, íradd le a tényleges nézőköreidet:

- ✓ "25-45 éves nők, akik érdeklődnek a fenntartható divat iránt"
- ✗ "Össéhárom"

### Frissítsd rendszeresen {#update-regularly}

Ahogy az oldald fejlődik, frissítsd az site_brief-edet:

- Ha átállsz egy új nézőkörekre
- Ha új termékcsaládokat adsz hozzá
- Ha változik a márkaidentitásod
- Ha változnak az üzleti céljaid

### Használj konzisztens terminológiát {#use-consistent-terminology}

Használj ugyanazokat a kifejezéseket a tranzakciók során:

- ✓ Mindig mondd "fenntartható ékszerek" (nem "környezetbarát ékszerek" és "zöld termékek")
- ✓ Mindig ugyanúgy utaladd a nézőköreidre

### Add kontextust {#include-context}

Ad olyan háttérinformációt, amely segít az agenteknek megérteni döntéseidet:

- "Célzott szakembereket, akik az áronál a minőséget tartják elsődlegesnek"
- "A nézőköreink technológiailag fejlettek, és modern dizájnt várnak el"
- "Egy kiinduló startup vagyunk, így költséghatékony megoldásokra van szükségünk"

## Kapcsolata a Theme Builder Beindítási Folyamattal {#relationship-to-theme-builder-onboarding}

Az Oldal Adatleírás képesség az **Theme Builder onboarding flow**-hoz integrálva. Amikor befejezed az onboarding-ot, az site_brief-ed automatikusan létrehozásra kerül az általad megadott információkkal.

Ha szeretnéd, függetlenül is futathatod az Oldal Adatleírást:

- Ha finomíteni szeretnéd az adatleírásodat az első beállítás után
- Ha frissíteni szeretnéd az site_brief-edet az oldald fejlődésével párhuzamra
- Ha részletes adatleírást szeretnél létrehozni, még mielőtt elkezdenéd a Theme Builder-t

## Hibaelhárítás {#troubleshooting}

**Az site_brief-em nem használják**
- Kérlek visszaigazolni, hogy az agentnek van hozzáférés a memóriához
- Kérdezd meg az agentet, hogy "emlékeztesse az site brief-emre"
- Ellenőrizd, hogy az memória be van kapcsolva a beállításaidban

**Új site_brief-el akarok kezdeni**
- Kérdezd meg az agentet: "Törlöm az site brief-emet és újonnan kezdek"
- Ezután futtasd újra az Oldal Adatleírást

**Az agent olyan ajánlásokat tesz, amelyek nem egyeznek az site_brief-emmel**
- Kérdezd meg az agentet, hogy "vizsgálja át az site brief-emet"
- Frissítsd az site_brief-edet, ha elavult
- Ad hozzá további kontextust a kéréseidhez

## Következő Lépések {#next-steps}

Az oldal adatleírását meghatározása után:

1. **Használj Theme Builder-t**: Létrehoz egy egyedi témát az site_brief-ed alapján
2. **Finomítsd a dizájnt**: Használj Design System Aesthetics képességet részletes dizájnmunkához
3. **Tervezd a tartalmat**: Kérdezd meg az agenteket tartalomstruktúra ajánlásokat
4. **Építsd a funkciókat**: Kérj funkciókat, amelyek összhangban vannak az üzleti céljaiddal
