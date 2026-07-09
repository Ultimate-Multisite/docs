---
title: Témaépítő Bevezetési Folyamata
sidebar_position: 17
_i18n_hash: 67d84d7e08c2ccfaa459bba0c40cb1ea
---
# Theme Builder Beindítási Folyamata {#theme-builder-onboarding-flow}

A Superdav AI Agent v1.12.0 bevezet egy irányított **Theme Builder beindítási folyamatot**, amely segít Önnek létrehozni egy egyedi blokk témát az első beállítás során. Ez helyettesíti az elavult Site Builder módot egy rugalmasabb, agent-asszisztált megközelítéssel.

## Mi az a Theme Builder Beindítási Folyamat? {#what-is-the-theme-builder-onboarding-flow}

A Theme Builder beindítási folyamata egy interaktív beállítási varázsló, amely:

- Irányítja Önt a tervezési döntések során (színek, tipográfia, elrendezés)
- Rögzíti az oldal vizuális identitás preferenciáit
- Generál egy egyedi blokk témát, amelyet az Ön igényeinek megfelelően szabtak
- Automatikusan aktiválja a témát a befejezéskor

A folyamatot a **Setup Assistant agent** működteti, amely tisztázó kérdéseket tesz fel, és fokozatosan építi ki a témáját.

## Hogyan Indítsuk el a Theme Builder Beindítását {#starting-the-theme-builder-onboarding}

### Első Alkalmi Beállítás {#first-run-setup}

Ha először indítja el a Superdav AI Agent-et egy új WordPress telepítésen, a következőket fogja látni:

```
Welcome to Superdav AI Agent!

What would you like to do?
1. Build a custom theme (Theme Builder)
2. Use an existing theme
3. Skip setup for now
```

Válassza ki a **"Build a custom theme"** opciót, hogy belépjen a Theme Builder beindítási folyamatába.

### Manuális Aktiválás {#manual-activation}

Bármikor elindíthatja a Theme Builder beindítását, ha kéri:

```
"Start the Theme Builder onboarding"
```

vagy

```
"Help me create a custom theme"
```

## Az Beindítási Lépések {#the-onboarding-steps}

### 1. Lépés: Mód Kiválasztása {#step-1-mode-selection}

A Setup Assistant agent megkérdezi Önt a preferenciájakról:

```
How would you like to build your theme?
- Guided (I'll ask questions and build it for you)
- Hands-on (I'll show you options and you decide)
```

A **Guided mode** (vezérelt mód) ajánlott a legtöbb felhasználó számára; az agent a piacáról és céljairól alapján ad tervezési ajánlásokat.

### 2. Lépés: Oldali Specifikáció {#step-2-site-specification}

Kérdeznek Önt az oldaláról:

- **Site purpose** (Oldal célja): E-kereskedelem, blog, portfólió, SaaS stb.
- **Target audience** (Célközönség): Ki a látogatójai?
- **Brand colors** (Márka színei): Elsődleges és másodlagos színek (vagy "Nem vagyok biztos")
- **Tone** (Hangnem): Profi, kreatív, játékos, minimalista stb.

Ezek az információk az Ön **site_brief** memóriájában tárolódnak, amelyet az agentek a jövőbeli munkamenetek során hivatkozni fognak.

### 3. Lépés: Tervezési Rendszer Döntései {#step-3-design-system-decisions}

Az agent végigvezet Önt a tervezési token (design token) kiválasztásán:

- **Typography** (Tipográfia): Betűtípus (serif, sans-serif, monospace) és méret skála
- **Color palette** (Színpaletta): Elsődleges, másodlagos, akcent és semleges színek
- **Spacing** (Távolság): Kompakt, normál vagy tágas elrendezések
- **Motion** (Mozgás): Animációk és átmenetek (ha szükséges)

### 4. Lépés: Téma Generálása {#step-4-theme-generation}

A Setup Assistant agent létrehozza az egyedi blokk témáját a következő elemekkel:

- `theme.json`, amely tartalmazza az összes tervezési token-ját
- Blokktemplátumok gyakori elrendezésekhez (oldalteljesítmény, blog, kapcsolat)
- Egyedi blokk stílusok, amelyek illeszkednek a tervezési rendszeréhez
- Téma metadatája és WordPress támogatási deklarációi

### 5. Lépés: Aktiválás és Ellenőrzés {#step-5-activation-and-verification}

A téma automatikusan aktiválódik, és látja:

```
✓ Your custom theme is now live!
  Theme name: [Your Site Name] Theme
  Colors: [Primary] / [Secondary]
  Typography: [Font Family]

  Visit your site to see the new design.
```

Ezután elutazhat az oldalára, hogy ellenőrizze, hogy a téma megfelelően jelenik-e meg.

## Oldali Specifikáció és site_brief Memória {#site-specification-and-sitebrief-memory}

Az onboarding során az agent rögzíti az oldal specifikációját egy **site_brief** memóriaterületen. Ez tartalmazza:

- Oldal célja és tartalékei
- Célközönség
- Márka színei és hangnem
- Tervezési preferenciák
- Tartalmi struktúra

### Miért fontos a site_brief? {#why-sitebrief-matters}

A jövőbeli munkamenetek során az agentek a site_brief-et használják, hogy:

- Megőrizzék a tervezési konzisztenciát a változtatások során
- Javaslatot tegyenek az oldal céljához illeszkedő funkciókra
- Kontextus-érzékeny ajánlásokat biztosítsanak
- Elkerüljék azonos beállítási kérdések megismétlését

### A site_brief Megtekőzése {#viewing-your-sitebrief}

Kérdezheti meg az agenttől:

```
"Show me my site brief"
```

vagy

```
"What do you know about my site?"
```

Az agent megjeleníti az elmentett oldal specifikációját.

## Testreszabás az Onboarding Után {#customizing-after-onboarding}

Az onboarding befejezése után teheti:

### Használja a Design System Aesthetics Skill-t {#use-the-design-system-aesthetics-skill}

Kérje meg tervezési finomításokat:

```
"Refine the typography to be more modern"
```

vagy

```
"Adjust the color palette to be warmer"
```

A **Design System Aesthetics skill** irányítja Önt a célzott tervezési frissítések során.

### Direkt szerkesztése a theme.json fájlban {#edit-themejson-directly}

Az avançált felhasználók számára szerkeszze meg a `/wp-content/themes/[theme-name]/theme.json` fájlt, hogy finomhangolhassa:

- Szín token-okat
- Tipográfiai skálákat
- Távolsági értékeket
- Keretezés és árnyékolás definiálásait

### Egyedi Blokktemplátumok Létrehozása {#create-custom-block-templates}

Használja a WordPress blokk szerkesztőt az egyedi templátumok létrehozásához:

- Oldalteljesítmény elrendezésekhez
- Blog poszt oldalakhoz
- Termékoldalakhoz
- Kapcsolat űrlapokhoz

## Öss 비교: Öreg vs. Új Onboarding {#comparison-old-vs-new-onboarding}

| Funkció | Site Builder (Elavult) | Theme Builder (Új) |
|---------|----------------------|--------------------|
| Beállítási módszer | Varázsló alapú űrlap | Agent által irányított beszélgetés |
| Téma generálás | Korlátozott sablonok | Egyedi szkelet (scaffolding) |
| Tervezési token-ok | Manuális beírás | Irányított döntések |
| Rugalmasság | Rögzített opciók | Testreszabható |
| Jövőbeli frissítések | Nem hivatkozott | Tárolva a site_brief-ben |

## Hibaelhárítás {#troubleshooting}

**Az onboarding folyamat nem fejeződött be**
- Indítsa újra a folyamatot: "Start the Theme Builder onboarding"
- Ellenőrizze, hogy a WordPress telepítése friss (up to date)
- Győződjön meg róla, hogy a Setup Assistant agent ki van kapcsolva

**A site_brief nem használatos**
- Kérjük vissza, hogy az agentnek van-e hozzáférés a memóriához
- Kérje az agenttől, hogy "recall my site brief" (emlékezzen vissza az oldal brief-emre)
- Ellenőrizze, hogy a memória be van kapcsolva a beállításainál

**A generált téma nem egyezik az én preferenciáimkel**
- Használja a Design System Aesthetics skill-t a finomításokhoz
- Kérje az agenttől, hogy "regenerate the theme with [specific changes]" (újra generálja a témát [specifikus változtatásokkal])
- Szerkeszze meg közvetlenül a theme.json fájlt pontos kontrollért

## Következő Lépések {#next-steps}

Az Theme Builder onboarding befejezése után:

1. **Ellenőrizze az oldalát**: Látogasson el az oldalára, hogy lássa a yeni témát
2. **Finomítsa a dizájn**: Használja a Design System Aesthetics skill-t az elrendezésekhez
3. **Adjon tartalmat**: Kezdje építeni az oldal tartalmát
4. **Fedezze fel a lehetőségeket**: Tanulja meg más agent funkcióiról, mint például scaffold-block-theme és activate-theme
