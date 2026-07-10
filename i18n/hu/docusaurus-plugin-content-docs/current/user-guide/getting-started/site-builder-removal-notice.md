---
title: Oldaltépítő mód eltávolítási értesítés
sidebar_position: 19
_i18n_hash: 3abf37d17f19e045e9d9da3ffe8e3179
---
# Site Builder mód eltávolításáról szóló értesítés {#site-builder-mode-removal-notice}

**A Site Builder mód eltávolításra került a Superdav AI Agent v1.12.0-ban.** Ha használtad a Site Builder módot, át kell térned a **Setup Assistant agent**-re a téma létrehozásához és az oldal beállításához.

## Mi történt? {#what-happened}

### Site Builder mód (Legacy) {#site-builder-mode-legacy}

A Site Builder mód egy varázslós felület volt, amelyet az alábbiakhoz használtak:

- Oldaltematemplátumokból történő létrehozása
- Alapbeállítások konfigurálása
- Téma kiválasztása
- Kezdeti tartalom beállítása

### Mit helyettesítette? {#what-replaced-it}

A **Setup Assistant agent** most kezeli az összes Site Builder funkciót, és az alábbiakat biztosítja:

- Rugalmasabb, agent által irányított beállítás
- Jobb téma testreszabási lehetőségek
- Integráció a Theme Builder onboarding-nal
- Tartós site_brief memória a jövőbeli munkamenetekre

## Ha használtad a Site Builder módot {#if-you-were-using-site-builder-mode}

### Az oldalai még biztonságban vannak {#your-sites-are-safe}

- Az Site Builder módon létrehozott mege forduló oldalak továbbra is működnek
- Nincs adatvesztés vagy oldalzavar
- Normálisan folytathatja az oldalak kezelését

### Átmenés a Setup Assistant Agent-re {#migrate-to-setup-assistant-agent}

Új oldalbeállítások vagy témaváltozások esetén használja a Setup Assistant agent-et:

```
"Help me set up a new site"
```

vagy

```
"Start the Theme Builder onboarding"
```

A Setup Assistant agent ugyanazt a funkciót nyújtja, de nagyobb rugalmassággal.

## Összevetés: Site Builder vs. Setup Assistant {#comparison-site-builder-vs-setup-assistant}

| Funkció | Site Builder (Eltávolítva) | Setup Assistant (Új) |
|---------|--------------------------|----------------------|
| Beállítási módszer | Varázslós űrlap | Agent konveráció |
| Téma kiválasztása | Előre definiált sablonok | Személyre szabott generálás |
| Testreszabás | Korlátozott lehetőségek | Teljes design rendszer |
| Site brief | Nem tárolódik | Tartós memória |
| Jövőbeli munkamenetek | Ismétlő beállítás | Tárolt site_brief használata |
| Rugalmasság | Rögzített munkafolyamat | Adaptív konveráció |

## Átmenés a Setup Assistant Agent-re {#migrating-to-setup-assistant-agent}

### Új oldalak esetén {#for-new-sites}

Helyett, hogy Site Builder módot használná:

1. Kérdés: "Help me set up a new site"
2. A Setup Assistant agent a következőkre fog vezetni:
   - Az oldal célja és céljai
   - Célközönség
   - Márkaidentitás
   - Téma generálás
   - Kezdeti konfiguráció

### Mege forduló oldalak esetén {#for-existing-sites}

Ha van egy mege forduló oldala, amit Site Builder módon hoztak létre:

1. Folytatja használatát, ahogy van
2. A téma frissítéséhez kérje: "Redesign my site"
3. A Setup Assistant agent segíti Önnek egy új téma létrehozásában
4. Az oldal adatai változatlanok maradnak

### Témaváltozások esetén {#for-theme-changes}

Helyett, hogy Site Builder mód téma kiválasztását használná:

1. Kérdés: "Change my theme"
2. A Setup Assistant agent:
   - Megkérdezi a design preferenciáiról
   - Generál egy személyre szabott témát
   - Aktiválja az oldalon

## Kulcsfontosságú különbségek {#key-differences}

### Site Builder mód {#site-builder-mode}

```
1. Válasszon egy sablont
2. Válasszon egy témát
3. Konfigurálja az alapbeállításokat
4. Kész
```

### Setup Assistant Agent {#setup-assistant-agent}

```
1. Írja le az oldal célját
2. Meghatározza a célközönségét
3. Válassza ki a design preferenciákat
4. Az agent generál egy személyre szabott témát
5. Az agent aktiválja a témát
6. A site_brief tárolódik a jövőbeli munkamenetekre
```

## A Setup Assistant Agent előnyei {#benefits-of-setup-assistant-agent}

### Rugalmasabb {#more-flexible}

- Írja le az oldalát természetes nyelven
- Kap egy személyre szabott ajánlásokat
- Adaptálódik a konkrét igényeihez

### Jobb testreszabás {#better-customization}

- Személyre szabott téma generálás
- Design rendszer döntései
- Tartós design token-ek

### Tartós memória {#persistent-memory}

- Az oldalának site_brief-ja tárolódik
- A jövőbeli agentek megértik az oldalát
- Nem kell ismételni a beállítási információkat

### Integrált munkafolyamat {#integrated-workflow}

- Theme Builder onboarding
- Design System Aesthetics skill
- Ability Visibility controls
- Mindannyian együttműködik zökkenőmentesen

## Hibaelhárítás {#troubleshooting}

### Nem találom a Site Builder módot {#i-cant-find-site-builder-mode}

A Site Builder mód eltávolításra került. Használja helyette a Setup Assistant agent-et:

```
"Help me set up a new site"
```

### Létrehozni akarok egy Site Builder oldalt {#i-want-to-recreate-a-site-from-site-builder}

Létrehozhatja újra a Setup Assistant agent segítségével:

1. Kérdés: "Help me set up a new site"
2. Írja le az eredeti oldal célját és designját
3. Az agent generál egy hasonló témát
4. Az oldalának site_brief-ja tárolódik a jövőbeli hivatkozásokra

### Az mege forduló Site Builder oldalam nem működik {#my-existing-site-builder-site-isnt-working}

Az Site Builder módon létrehozott mege forduló oldalak továbbra is működnek. Ha problémákat tapasztal:

1. Ellenőrizze, hogy a téma még aktív-e
2. Ellenőrizze, hogy a plugin-jai aktiválva-e
3. Ellenőrizze a WordPress hiba naplóit
4. Kapcsolatfelvétel a támogatással, ha a problémák fennállnak

### Meg tudom-e még használni az régi Site Builder sablonjaimat? {#can-i-still-use-my-old-site-builder-templates}

A Site Builder sablonok már nem elérhetők. Azonban:

- Az mege forduló oldalai továbbra is működnek
- Hasonló oldalt hozhat létre a Setup Assistant agent segítségével
- A Setup Assistant agent több testreszabási lehetőséget biztosít

## Következő lépések {#next-steps}

1. **Új oldalak esetén**: Használja a Setup Assistant agent-et
2. **Mege forduló oldalak esetén**: Folytatja használatát, ahogy van
3. **Témaváltozások esetén**: Kérje a Setup Assistant agent segítségét
4. **Design finomítás esetén**: Használja a Design System Aesthetics skill-t

## Kapcsolódó témák {#related-topics}

- **Theme Builder Onboarding**: Irányított beállítás személyre szabott témákhoz
- **Setup Assistant Agent**: Agent által irányított oldalbeállítás
- **Site Specification Skill**: Meghatározza az oldal céljait és célközönségét
- **Design System Aesthetics Skill**: Finomítja az oldal vizuális identitását
