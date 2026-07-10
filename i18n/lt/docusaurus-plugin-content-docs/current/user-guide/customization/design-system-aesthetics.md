---
title: Dizaino sistemos estestikos įgūdžius
sidebar_position: 21
_i18n_hash: 3fef8415909ed14038f38e9eda3a4545
---
# Kompetencijai Dizaino Sistemos Estetika {#design-system-aesthetics-skill}

**Design System Aesthetics (Dizaino Sistemos Estetika)** yra gairinė veikla, kuri padeda sukurti jūsų svetainės vizualią identitetą. Ji jums padeda priimti vienod status sąrašu apie tipografiją, spalvas, atrypus ir judėjimo tokenus, kurie apibrėžia jūsų dizaino sistemą.

## Kas tai yra Design System Aesthetics? {#what-is-design-system-aesthetics}

Design System Aesthetics yra struktūrinė įgūdžių, kuri apima:

- **Tipografija**: Fontų šeimos, dydžiai, svoris ir eilutės aukštybes
- **Spalvos**: Pagrindinės, sekundinės, akcentuojamos ir neutralios paletros
- **Atrypus**: Paddingas, margines ir atrypų skaliai (gap scales)
- **Kairiai**: Radius ir šančiai tokenai
- **Šaktai**: Aukštybos ir giliaus tokenai
- **Judėjimas**: Animacijos ir perėjimo efektai

Šie sprendimai yra įrašomi jūsų temo `theme.json` failyje, sukuriant kohesivų vizualinį sistemą.

## Kodėl naudoti Design System Aesthetics? {#why-use-design-system-aesthetics}

### Vienodumas (Consistency) {#consistency}

Dizaino sistema užtikrina:

- Visi teksti naudoja vieną tipografinių skalę
- Spalvos naudojamos vienodai po svetainei
- Atrypus seka prognojuamą schemą
- Animacijos atrodo vienodas

### Efektyvumas (Efficiency) {#efficiency}

Kai kurios dizaino sprendimai atliekami puslapis po puslapio, jūs:

- Nurodoma tokenus vieną kartą
- Naudojate juos visur
- Atnaujinat globaliai pakeisdami vieną reikšmę

### Elgsimumas (Flexibility) {#flexibility}

Jūs galite:

- Greimai nustatyti visą dizaino sistemą
- Eksperimentuoti su skirtingais estetikomis
- Uvartyti preikės konsistenciją, keičiant jūsų projektą

## Kodėl įjungti Design System Aesthetics gailbūtį? {#triggering-the-design-system-aesthetics-skill}

### Rankinis įjungimas (Manual Activation) {#manual-activation}

Jūs galite pradėti šią veikla bet kuriuo metu:

```
"Padėk man tobulinti savo dizaino sistemą"
```

ar

```
"Patokeime mano svetainės estetiką"
```

ar

```
"Pateikite man gairines apie dizaino sistemos sprendimus"
```

### Automatiniai pasiūlymai (Automatic Suggestions) {#automatic-suggestions}

Agentai gali siūlyti naudoti šią veikla, kai jūs:

- Prašote dizaino pakeitimų
- Reikalaujate „modernaus“ ar „profesionalaus“ redizaino
- Norite pagerinti vizualią konsistenciją
- Pasiruošate įveikti savo svetainę

## Dizaino Sistemos Estetikos Procesas {#the-design-system-aesthetics-process}

### Ketinta 1: Tipografija {#step-1-typography}

Agentas klausosi apie jūsų fontų pasirinkimus:

```
Kokia Jūsų mėgstama tipografinė stilius?
- Serif (traducinis, elegantiškas)
- Sans-serif (modernus, švarus)
- Monospace (techninis, kodui orientuotas)

Jūsų antraštės fontui:
- Norite turėti aiškią antraštės fontą, ar naudoti tą pačią kaip tekstą?
- Preferencija: gražus, elegantiškas, žaidintis, minimalus?

Jūsų teksto fontui:
- Skaitymas yra pagrindinis. Ar pasirinkate:
  - Didgesnis, daugiau atrypus tekstas
  - Kompaktesnis, efektyvesnis tekstas
  - Standartų dydis
```

Antraštės aprašymas nurodo:

- **Antraštės fontas**: Pagrindinis fontas antraštėms ir pavadinimams
- **Teksto fontas**: Fontas paragrafo ir naujo teksto
- **Monospace fontas**: Fontas kodui ir techninei informacijai
- **Dydžių skala**: Predefined dydžiai (kleinutinas, pagrindinis, didelis, XL ir pan.)
- **Svarumo skala**: Fontų svyres (reguliarus, vidutinis, grūnas ir pan.)
- **Laiko aukštis**: Atrypus tarp eilutės skaitymiesi skaičiaus

### Ketinta 2: Spacingas {#step-2-color-palette}

```
Pasirinkime jūsų spalvų paletę.

Pagrindinė spalva (jūsų prekės ženklos spalva):
- Dabartinė: [rodoma esamią spalvą]
- Pakeisti į: [spalvos pasirinkėjas arba hex kodas]

Pagrindinė spalva (pagalaujama spalva):
- Dabartinė: [rodoma esamią spalvą]
- Pakeisti į: [spalvos pasirinkėjas arba hex kodas]

Akcentavimo spalva (pabrėžimai ir CTA mygtukai):
- Dabartinė: [rodoma esamią spalvą]
- Pakeisti į: [spalvos pasirinkėjas arba hex kodas]

Neutralios paletės (grėsiniai, apdailos, fonai):
- Šviesiai: [spalva]
- Viduriai: [spalva]
- Tamsiai: [spalva]
```

Agentas sukuria visą paletę, kuri apima:

- Pagrindines, sekundarines ir akcentavimo spalvas
- Neutralias grėsinį (sviesiai, viduriai, tamsiai)
- Semantines spalvas (sėkmės, perspėjimo, klaidų)
- Hover ir aktyvumo būsenus

**Kuo, kiek laiko norite?**

**Atspindžių skali pasirinkimas:**
- Kompakti (sužęstinis, efektyvūs dizainai)
- Normalus (balansavus atspindžiai)
- Laikiai (generius vidutinės vietos)

Tai nurodo:
- Paddingas viduje mygtukams ir kortelėms
- Margines tarp sekcijų
- Vidutinė vidutinė vietos tarp dvipartytų elementų

Agentas nurodo atspindžių tokenus:

- Pagrindinė vienetas (tipikiškai 4px arba 8px)
- Skala: xs, sm, md, lg, xl, 2xl
- Specifikiniai skaičiai paddingui, marginei, vidutinėms vietoms

### Kairos 4: Kotai ir Šaktai {#step-3-spacing}

```
Vizualus giliai ir apibrėžimas:

Kairos radiusas pasirinkimas:
- Skirtas (be nurodymo)
- Subtilis (mažas radiusas)
- Aruginis (vidurinis radiusas)
- Labai aruginis (didelis radiusas)

Šakto giliai:
- Platūs (be šaktai)
- Subtilis (pašalintos šaktai)
- Įspūdingi (strigti šaktai)
```

Agentas sukuria:

- Kairos radiusų tokenus (mygtukams, kortelėms, įvestiniams laukams)
- Šakto tokenus lygių nivel'iams
- Kairos šIA tokenus

### Kairos 5: Rusys ir Animacijos {#step-4-borders-and-shadows}

```
Kaip turi atrodyti jūsų svetainė interaktyvi?

Animacijos pasirinkimas:
- Minimalios (be animacijų)
- Subtilios (pašalintos perėjimo efektai)
- Žaidžiančios (paskaičiais matomos animacijos)

Specifikiniai animacijos:
- Pagrindinių pusliki perėjimas: išvaizduojimas, slidimas ar nurodyti?
- Mygtuko paspaudimas: didinimas, spalvos keitimas ar abiparna?
- Kiekis įkrovimo būsenai: spinneris, skeletonas ar progres skiltis?
```

Agentas nurodo:

- Perėjimo laiko (brigo, normalus, lėtas)
- Easing funkcijas (ease-in, ease-out, ease-in-out)
- Animacijos keyframes dažnai naudojamoms interakcijoms

## Dizaino sistemos estetiškumo paleidimas {#step-5-motion-and-animation}

### Automatinis paleidimas {#applying-design-system-aesthetics}

Po to, kai pabaigsite įgūdžių, agentas:

1. Atnaujina jūsų temo `theme.json` su visais tokenais
2. Taikoma dizaino sistemą aktyviaiems temui
3. Regeneruoja blokų stilius, kad atitiktų naują sistemą
4. Aktyvuoja atnaujintą temą

### Rankinis paleidimas {#automatic-application}

Jūs galite redaguoti `theme.json` tiesiogiai:

## Jūsų Dizaino Sistemos Peržiūra {#manual-application}

### Užduoti Agentui {#viewing-your-design-system}

```
"Pokaži savo dizainimo sistemą"
```

arba

```
"Ką turiu dabartiniam dizaino tokenų?"
```

Agentas pateiks jūsų tipografiją, spalvas, atrypus ir kitus tokien.

### Peržiūrėti theme.json {#ask-the-agent}

Atvėkite `/wp-content/themes/[theme-name]/theme.json` teksto redaktore, kad pamatytumėte šių tokenų nurodytus tikslus.

## Jūsų Dizaino Sistemos Aktualizavimas {#view-themejson}

### Greitos Aktualizavimai {#updating-your-design-system}

Pagalbos agentui prapginti specifinius pakeitimus:

```
"Pakeiskite pagrindinę spalvą tamsesnę"
```

arba

```
"Pakeiskite atrypus ekrano skaliu 20%"
```

arba

```
"Pakeiskite antraštės fontą į serifinį"
```

### Pilnas Redizainas {#quick-updates}

Atlikite Design System Aesthetics įgūdžių veikimą vėl:

```
"Patvarkykime visą savo dizaino sistemą"
```

Tai patvirtins jūsų visus sprendimus, pradėdami nuo dabartinių reikšmių.

### Dalinis Aktualizavimas {#full-redesign}

Aktualizuokite specifinius aspektus:

```
"Pakeiskite tik spalvų paletą, viską kitas laisi"
```

## Dizaino Sistemos Geriausios Praktikos {#partial-updates}

### Konsistencija {#design-system-best-practices}

- Naudokite vienodius tokien visur
- Neapimažinkite vieninteliškų spalvų ar dydžių
- Referuokite tokien, o ne įkoduokite reikšmes tiesiai

### Pavadinimas {#consistency-1}

Naudokite aiškius, semantinius pavadinimus:

- ✓ `primary`, `secondary`, `accent`
- ✗ `blue`, `color-1`, `main`

- ✓ `heading-lg`, `body-sm`
- ✗ `font-size-24`, `text-large`

### Skalavimybė {#naming}

Projekt, kuris skalaus į amantį:

- Naudokite vidines vienetų (rem, em) vietoj pikselių
- Kurkite skalas (xs, sm, md, lg, xl) vietoj didelės reikšmėmis
- Planuokite ateitymos pridėjimais

### Dokumentacija {#scalability}

Dokumentuokite savo dizainimo sistemą:

- Kodėl pasirinkote konkrečius spalvas
- Kai naudoti kiekvienam tokenui
- Apsiliegos ir randinės situacijos

## Dažnai naudojami Dizaino Sistemos Modeliai {#documentation}

### Modern Minimalistinis {#common-design-system-patterns}

- Sans-serif tipografija (Inter, Helvetica)
- Apriboti spalvų paleta (2–3 spalvos)
- Generines atrypiavimo (spacing)
- Subtili šeštai
- Lygūs, greti animacijos

### Šaltinis ir Drauginis {#modern-minimalist}

- Sudėtingumas serifinių ir sans-serif tipografijos
- Šaltinis spalvų paleta (apalyvintos, šaltiniai gražiai)
- Aruginai aprypiavimo
- Šaltiniai šeštai
- Žaidžiantos animacijos

### Profesionali Korporatyvinis {#warm-and-friendly}

- Šaltinis sans-serif (Roboto, Open Sans)
- Neutrali paleta su akcentu spalva
- Struktūrinis aprypiavimas
- Minimalūs šeštai
- Subtili perėjimai

### Kreatyvinis ir Apgaliojantis {#professional-corporate}

- Aiškiai identifikavima tipografija
- Apalyvinta spalvų paleta
- Variuotinis aprypiavimas
- Stiprūs šeštai
- Paskaičiavimo animacijos

## Problemos Atsiliepimai (Troubleshooting) {#creative-and-bold}

**Mano dizaino sistemos pakeitimai ne rodomasi**
- Tame skirkite naršinio istoriją (cache)
- Atnaujinkite savo svetainę, jei naudojate statinį generatorių (static generator)
- Patikrinkite, ar theme.json yra galingas JSON formatas
- Patikrinkite, ar tema yra aktyvi

**Spalvos atrodo skirtingai įvairiose puslapiuose**
- Patikrinkite, ar pluginuose nėra susidarius CSS
- Patikrinkite, ar visi puslapiai naudoja tą pačią temą
- Tame skirkite bet kokius caching pluginus

**Norindu atkreipti į ankstesnį dizaino sistemą**
- Paklausykite agentui: "Rodykite man mano dizaino sistemos istoriją"
- Rankai redaguokite theme.json ankstesnių reikšmėmis
- Vėl paleiskite gamybą su skirtingais pasirinkimais

## Nauji Žingsniai {#troubleshooting}

Dizainimo sistemą nurodę:

1. **Patikrinkite savo svetainę**: Eikite naujamą dizainą savo svetainėje.
2. **Tinklinkite to further**: Atlikite korekcijas naudodami jūsų įgūdžius.
3. **Sukurkite šablonus**: Apbakykite pritaikytus blokų šablonus naudojant jūsų dizaino tokenus.
4. **Dokumentuokite**: Pasidalinkite savo dizaino sistemos su komandos nariais.
