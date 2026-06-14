---
title: Tema buvimo įsigijimo procesas
sidebar_position: 17
_i18n_hash: 67d84d7e08c2ccfaa459bba0c40cb1ea
---
# Przepływ Onboardingu Theme Builder

Superdav AI Agent v1.12.0 wprowadza przewodzący **przepływ onboardingu Theme Builder**, który pomoże Ci stworzyć własny motyw blokowy podczas początkowej konfiguracji. Zastępuje on stary tryb Site Builder bardziej elastycznym podejściem wspomaganym przez agenta.

## Czym jest Przepływ Onboardingu Theme Builder?

Przepływ onboardingu Theme Builder to interaktywny kreator, który:

- Prowadzi Cię przez decyzje projektowe (kolory, typografia, układ)
- Zapisuje Twoje preferencje wizualnej tożsamości strony
- Generuje niestandardowy motyw blokowy dopasowany do Twoich potrzeb
- Automatycznie aktywuje motyw po jego ukończeniu

Przepływ ten jest zasilany przez **agent Setup Assistant**, który zadaje pytania wyjaśniające i buduje Twój motyw krok po kroku.

## Rozpoczęcie Onboardingu Theme Builder

### Konfiguracja Pierwszego Użycia

Kiedy po raz pierwszy uruchomisz Superdav AI Agent na nowej instalacji WordPressa, zobaczysz:

```
Witamy w Superdav AI Agent!

Co chciałbyś zrobić?
1. Stworzyć niestandardowy motyw (Theme Builder)
2. Użyć istniejącego motywu
3. Pomiń konfigurację na razie
```

Wybierz **"Stwórz niestandardowy motyw"**, aby przejść do przepływu onboardingu Theme Builder.

### Aktywacja Manualna

Możesz również rozpocząć onboarding Theme Builder w dowolnym momencie, prosząc o:

```
"Start the Theme Builder onboarding"
```

lub

```
"Help me create a custom theme"
```

## Kroki Onboardingu

### Krok 1: Wybór Trybu

Agent Setup Assistant pyta o Twoje preferencje:

```
Jak chciałbyś zbudować swój motyw?
- Przewodowy (Zadaję pytania i buduję go dla Ciebie)
- Praktyczny (Pokazuję Ci opcje, a Ty decydujesz)
```

**Tryb przewodowy** jest zalecany dla większości użytkowników; agent proponuje rozwiązania projektowe na podstawie Twojej branży i celów.

### Krok 2: Specyfikacja Strony

- **Sito tikslas**: E-komercija, blogas, portfolijos, SaaS ir kitas.
- **Tikslinė auditorija**: Kurie yra jūsų vizitatori?
- **Prekės ženklos spalvos**: Pagrindinės ir sekundinės spalvos (arba „nenuorauja“)
- **Tonis**: Profesionalus, kūrybiškas, žaidžiantis, minimalus ir kitas.

Šią informaciją saugomas jūsų **site_brief** archyve, kurį agentai naura ateityje sesijose.

### 3. Dizaino sistemos sprendimai (Design System Decisions)

Agentas pagalbia jums pasirinkti dizaino tokenus:

- **Tipografija**: Fontų šeima (serif, sans-serif, monospace) ir dydžių skala
- **Spalvų paleta**: Pagrindinės, sekundinės, akcentuojamos ir neutralios spalvos
- **Atstumas**: Kompaktai, normalūs ar laisvi dizainai
- **Rinkimai (Motion)**: Animacijos ir perėjimo efektai (jei norite)

### 4. Temų generavimas (Theme Generation)

Įdiegimo asistentas (Setup Assistant agent) sukuria jūsų pritaikytą blokų temą, įskaitant:

- `theme.json`, kuriame yra visi jūsų dizaino tokenai
- Blokų šablonus dažniai naudojamoms tvarkomoms puslapiams (pagrindinis puslapis, blogas, kontaktas)
- Pritaikytus blokų stilius, atitinkant jūsų dizainą sistemą
- Temos metadatos ir WordPressio palaikymo deklaracijas

### 5. Aktyvavimas ir patikrinimas (Activation and Verification)

Tema aktyvuojama automatiškai, o jūs pamatys:

```
✓ Jūsų pritaikytā tema dabar yra veikti!
  Temos pavadinimas: [Jūsų svetainės pavadinimo] Tema
  Spalvos: [Pagrindinė] / [Sekundinė]
  Tipografija: [Fontų šeima]

  Pasirinkite savo svetainę, kad pamatytum naują dizainą.
```

Tada galite pasinaudoti savo svetaine ir patikrinti, ar tema atrodo tinkamai.

## Svetainės specifikacijos ir site_brief archyvas

Įdiegimo metu agentas įsigijama jūsų svetainės specifikacijas **site_brief** archyve kategorijoje. Tai apima:

- Svetainės tikslą ir kelionę
- Tikslinę auditoriją
- Prekės ženklos spalvas ir tonis
- Dizaino preferencijas
- Maudumo struktūrą

### Kodėl site_brief yra svarbus

Ateityje sesijose agentai naura jūsų **site_brief** informaciją, kad:

### Uvedimas apie jūsų svetainės apibendrinimą (site_brief)

Jūs galite klausti agentui:

```
"Rodyti man mano svetainės apibendrinimą"
```

arba

```
"Ką jūs žinote apie mano svetainę?"
```

Agentas pateiks jūsų saugomas svetainės specifikaciją.

## Personalizavimas po įdalybos (onboarding)

Po to, kai baigus Theme Builder įdalybą, galite:

### Naudoti „Design System Aesthetics“ gadinimo įgalį

Pagalbos su dizaino tobulinyminiais:

```
"Tinklinimo fontus keisti moderniau"
```

arba

```
"Palyginti spalvų paletą, kad ji būtų šilumai"
```

**Design System Aesthetics gadinimas įgalis** pabaigo jūsų veiksmus, skirtus tiksliniams dizaino atnaujinimams.

### Redaguoti theme.json tiesiogiai

Pagalpinui vartotojai galite redaguoti `/wp-content/themes/[theme-name]/theme.json`, kad nustatytumėte:

- Spalvų tokenus (Color tokens)
- Tipografinių skalų (Typography scales)
- Atrypimo reikšmes (Spacing values)
- Kotų ir šakų apribojimų (Border and shadow definitions)

### Sukurti pritaikytus blokų šablonus

Naudokite WordPress blokų redaktorią, kad sukurotumėte pritaikytus šablonus:

- Pagrindinio puslapio tvarkomui
- Blog post puslapiams
- Produktų puslapiams
- Kontakto formoms

## Palyginimas: Senas vs. Naujas įdalyba (onboarding)

| Pavadinimas | Svetainės kūrėjas (Legacy) | Theme Builder (Naujas) |
|---------|----------------------|-------------------|
| Įdalybos būdas | Vizardas (Wizard-based form) | Agentas gadinamas pokalbis |
| Tema generavimas | Apriboti šablonai | Pritaikomi struktūrai (Custom scaffolding) |
| Dizaino tokenai | Rankinis įvedimas | Gadinami sprendimai |
| Elgimys | Įfiksuoti variantai | Pritaikomi |
| Ateities atnaujinimai | Neapibrėžti | Saugo tiesiogiai svetainės apibendrinime (site_brief) |

## Problemos iššutes (Troubleshooting)

**Įdalyba nebaigėsi**
- Prisijunkite prie jos: "Pradėti Theme Builder įdalybą"
- Patikrinkite, ar jūsų WordPress instalacija yra naujausia versija
- Patikrinkite, ar agentas „Setup Assistant“ yra įjungtas

**Mano `site_brief` nenaudojama**
- Patikrinkite, ar agentui yra pasiekiamos jūsų įrašai (memory).
- Prašykite agentą „atsekti mano svetainės apibendrinimą“ ("recall my site brief").
- Patikrinkite, ar jūsų nustatymuose įjungta memorie (memory) palaikymas.

**Gaminamas tema nepatinka man**
- Naudokite Design System Aesthetics įgūdžių (skill) palyginti ją ir to išvengti problemų.
- Prašykite agentą „regeneruoti temą su [konkretūs pakeitimai]“ ("regenerate the theme with [specific changes]").
- Redaguokite `theme.json` tiesiogiai, kad turėtumėte tikslų kontrolges.

## Ketvirtieji žingsniai

Tema Builder įdiegimo (onboarding) pabaigoje:

1. **Patikrinkite savo svetainę**: Eikite jūsų svetainei, kad pamatytumėte naują temą.
2. **Išvalykite dizainą**: Naudokite Design System Aesthetics įgūdžių palyginti korekcijos.
3. **Pridėkite turinį**: Pradėkite su kūrimu savo svetainės turinio.
4. **Paskandytos galimybes**: Sužinoje apie kitas agentų galimybes, pabaigdotas `scaffold-block-theme` ir įjungtas `activate-theme`.
