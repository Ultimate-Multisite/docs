---
title: Estetika Design Systems veščine
sidebar_position: 21
_i18n_hash: 3fef8415909ed14038f38e9eda3a4545
---
# Veščina oblikovnih sistem estetike {#design-system-aesthetics-skill}

**Veščina oblikovnih sistem estetike** je usmerjen pristop do izboljšanja vizualne identitete vaše spletne strani. Pomoč vam pri sprejemanju usklajenih odločitev o tipografiji, barvah, razspacevanju in motion tokenih, ki definirajo vaš sistem oblikovanja.

## Kaj je Veščina oblikovnih sistem estetike? {#what-is-design-system-aesthetics}

Veščina oblikovnih sistem estetike je strukturirana veščina, ki vključuje:

- **Tipografijo**: Fontne družine, velikosti, težave in višine vrstic
- **Barve**: Primarne, sekundarne, akcentne in neutralne palete
- **Razspacevanje**: Padding, margin in razmerja za razdaljo (gap scales)
- **Obrvje**: Tokeni za krivulost in širino
- **Seneči (Shadows)**: Tokeni za višino in globino
- **Motion**: Animacije in prehodne obdobja

Ti odločitev se shranjuje v datoteki `theme.json` vaše teme, kar ustvarja usklajen vizualni sistem.

## Zakaj uporabljati Veščino oblikovnih sistem estetike? {#why-use-design-system-aesthetics}

### Usklađenost (Consistency) {#consistency}

Sistem oblikovanja zagotavlja:

- Da se vseh besed uporablja isti tipografski merilo
- Barve so uporabljene usklajeno na celoti spletni strani
- Razspacevanje sledi predvidljivemu vzorcu
- Animacije se počutijo eno in skojev.

### Uporabnost (Efficiency) {#efficiency}

Namesto da bi sprejemate oblikovske odločitev stran po strani, vi:

- Definišete tokenove vsakrat
- jih uporabite na vseh mestih
- globalno posodobite z spremembo enega vrednosti

### Fleksibilnost (Flexibility) {#flexibility}

Možete:

- Hitro prilagoditi celoten sistem oblikovanja
- Eksperimentirati z različnimi estetikami
- Ohraniti blagovno usklajenost, hkrati se razvijate

## Sprožanje Veščine oblikovnih sistem estetike {#triggering-the-design-system-aesthetics-skill}

### Ručno aktivacija (Manual Activation) {#manual-activation}

Veščino lahko začnete v katerem koli trenutku:

```
"Pomagaj mi izboljšati moj sistem oblikovanja"
```

ali

```
"Izboljšajmo estetik moje strani"
```

ali

```
"Usmerjaj me skozi odločitev sistema oblikovanja"
```

### Avtomatske predloge (Automatic Suggestions) {#automatic-suggestions}

Agenti lahko predlagajo uporabo veščine, ko:

- Vprašate za spremembe v dizajnu
- Zahtevate "moderno" ali "profesionalno" preoblikovanje
- Želite izboljšati vizualno usklajenost
- Ste pripravljeni na sproščanje vaše strani

## Proces dizajna sistemskih estetike {#the-design-system-aesthetics-process}

### Korak 1: Tipografija {#step-1-typography}

Agent vam vpraša o vaših izbirih fontov:

```
Kakšen je vaš predvčasten stil tipografije?
- Serif (tradična, elegantna)
- Sans-serif (moderna, čista)
- Monospace (tehnično, osredotočeno na kod)

Za font za naslove:
- Želite specifičen font za naslove, ali uporabiti isti kot za telo besede?
- Prednost: bold, eleganten, igral, minimalen?

Za font za telo besede:
- Preglednost je ključna. Predostranite:
  - Večji, bolj prostorski tekst
  - Kompaktni, učinkoviti tekst
  - Standardno velikost
```

Agent nato določi:

- **Font za naslove**: Primarni font za naslove in zaglavja
- **Font za telo besede**: Font za paragrafe in telo besede
- **Monospace font**: Font za kod in tehnične vsebine
- **Skala velikosti (Size scale)**: Predodogmatične velikosti (mal, osnovna, velika, XL itd.)
- **Skala težine (Weight scale)**: Težine fontov (regular, medium, bold itd.)
- **Višina vrstice (Line height)**: Razmak med vrsticami za preglednost

### Korak 2: Paleta barv {#step-2-color-palette}

```
Določimo vašo paleto barv.

Primarna barva (vaša znamka):
- Trenutna: [prikazuje obstoječo barvo]
- Sprememi na: [izberovalnik barv ali hex kod]

Sekundarna barva (podporna barva):
- Trenutna: [prikazuje obstoječo barvo]
- Sprememi na: [izberovalnik barv ali hex kod]

Akcentna barva (poudarki in CTA):
- Trenutna: [prikazuje obstoječo barvo]
- Sprememi na: [izberovalnik barv ali hex kod]

Neutralna paleta (srebrne za besedilo, oblike, ozadja):
- Svetla: [barva]
- Srednja: [barva]
- Temna: [barva]
```

Agent ustvari popolno paleto, ki vključuje:

- Primarne, sekundarne in akcentne barve
- Neutralne srebrene (svetla, srednja, temna)
- Semantične barve (uspeh, opozorilo, napaka)
- Stati barve (hover in aktivni stavi)

### Korak 3: Razmak {#step-3-spacing}

Kako želite prostor?

Prednost v razdaljo (spacing):
- Kompakten (tudi, učinkovite rasporedi)
- Normalen (uravnoteženo razdalja)
- Prostorjen (obilen prazni prostor)

To vpliva na:
- Padding v gumbih in kartah
- Margine med oddelki
- Razdaljo med elementi mreže (grid items)

Agent določa tokene za razdalje (spacing tokens):

- Osnovna enota (običajno 4px ali 8px)
- Skala: xs, sm, md, lg, xl, 2xl
- Specifične vrednosti za padding, margin, gap

### Korak 4: Obleke in Seneči (Borders and Shadows) {#step-4-borders-and-shadows}

```
Vizualna globina in definicija:

Prednost za krivuljino oblike (Border radius):
- Ostre (brez okavčanja)
- Subtilne (mala krivuljina)
- Okavčane (srednja krivuljina)
- Veliko okavčane (velika krivuljina)

Globina seneči (Shadow depth):
- Ravna (brez sen)
- Subtilna (svetle seneči)
- Izrazita (močne seneči)
```

Agent ustvarja:

- Tokene za krivulino oblike (za gumbke, karte, inpute)
- Tokene za seneči za različne ravni (elevation levels)
- Tokene za širino oblike (border width tokens)

### Korak 5: Gibanje in Animacija (Motion and Animation) {#step-5-motion-and-animation}

```
Kako bi vaš spletno mesto moralo delovati, ko je interaktiv?

Prednost za animacijo:
- Minimalna (brez animacij)
- Subtilna (meka prehodna obdobja)
- Igrana (opazljive animacije)

Specifične animacije:
- Prehodih strani: zamenjava, slišanje ali nič?
- Hover gumbov: sprememba velikosti, barve ali obe stvari?
- Stanja obtekanja (Loading states): spinner, skeleton, ali progresna črt?
```

Agent določa:

- Trajanje prehodov (hitro, normalno, slowly)
- Funkcije za lažnost (ease-in, ease-out, ease-in-out)
- Keyframes animacij za pogoste interakcije

## Uporaba Estetike Design Sistema {#applying-design-system-aesthetics}

### Avtomatska uporaba {#automatic-application}

Po dokončanju veščine agent:

1. Obnovi `theme.json` vaše teme z vsi tokensi
2. Priklopi design sistem k aktivičnem temi
3. Regenerira stile blokov, da bi se ustavili z novo sistemom
4. Aktivira obnoveno temu

### Ručna uporaba {#manual-application}

Morate lahko tudi sami uredite `theme.json`:

## Ogledavanje vašega dizajns sistema {#viewing-your-design-system}

### Vprašajte Agenta {#ask-the-agent}

```
"Pokaži mi moj dizajns sistem"
```

ali

```
"Kakva so moja trenutna dizajna tokenov?"
```

Agent vam bo prikazal vaše tipografije, barv, razpoložljivosti (spacing) in drugih tokenov.

### Predvidite theme.json {#view-themejson}

Otevrite `/wp-content/themes/[theme-name]/theme.json` v tekstualnem editorju, da vidite siročne definicije tokenov.

## Obnavljanje vašega dizajns sistema {#updating-your-design-system}

### Hitri obnavljanja {#quick-updates}

Vprašajte agenta za specifične spremembe:

```
"Uredi primarno barvo bolj temno"
```

ali

```
"Povečaj razpoložljivost (spacing) za 20%"
```

ali

```
"Spremeni font za naslove na serifni"
```

### Popolnoma preoblikovanje {#full-redesign}

Ponovno vključite veščino Dizajna sistema:

```
"Preoblikuj moj cel dizajns sistem"
```

To vas bo vodilo skozi vse odločbe ponovno, başlayanje z vašimi trenutnimi vrednostmi.

### Delna obnavljanja {#partial-updates}

Obnovite specifične aspekte:

```
"Spremeni samo paleto barv, ostalo bidi kot je"
```

## Najboljše prakse za dizajns sistem {#design-system-best-practices}

### Konsistenca {#consistency-1}

- Uporabite iste tokenove vseh
- Ne ustvarjajte jedrnih barv ali velikost
- Omenjujte tokenove namesto da bi vrednosti vpisali v kod (hardcoding)

### Imenovanje {#naming}

Uporabite jasna, semantična imena:

- ✓ `primary`, `secondary`, `accent`
- ✗ `blue`, `color-1`, `main`

- ✓ `heading-lg`, `body-sm`
- ✗ `font-size-24`, `text-large`

### Skalabilnost {#scalability}

Projekt, ki se lahko skalira:

- Uporabite relativne enote (rem, em) namesto pikselov
- Ustvarite skalirajoče sisteme (xs, sm, md, lg, xl) namesto proizvoljnih vrednosti
- Planirajte za prihodnje dodajanja

### Dokumentacija {#documentation}

Dokumentirajte svoj design system:

- Zakaj ste izbrali specifične barve
- Kdaj uporabljati vsak token
- Izjave in tepišni scenariji (edge cases)

## Pogostega vzorcevna sheme dizajna (Common Design System Patterns) {#common-design-system-patterns}

### Modern Minimalist {#modern-minimalist}

- Sans-serif tipografija (Inter, Helvetica)
- Omejena paleta barv (2-3 barve)
- Obilno razspacevanje (spacing)
- Subtilne seneči (shadows)
- Glatke, hitre animacije

### Topli in prijateljski (Warm and Friendly) {#warm-and-friendly}

- Mešanje serif in sans-serif tipografije
- Topla paleta barv (narandžni, topli sivi toni)
- Zaokrožene robove (rounded corners)
- Miti seneči
- Igrane animacije

### Profesionalno korporativno (Professional Corporate) {#professional-corporate}

- Čista sans-serif tipografija (Roboto, Open Sans)
- Neutralna paleta z akcentno barvo
- Strukturirano razspacevanje
- Minimalne seneči
- Subtilne prehodnosti (transitions)

### Kreativno in odločeno (Creative and Bold) {#creative-and-bold}

- Izrazita tipografija
- Odločena paleta barv
- Varirirano razspacevanje
- Močni seneči
- Opazljive animacije

## Reševanje težav (Troubleshooting) {#troubleshooting}

**Moje spremembe v design sistemu se ne pojavijo**
- Očiščite cache svojega brskalnika (browser cache)
- Ponovno zgrajte svojo spletno stran, če uporabljate statični generator (static generator)
- Preverite, da je theme.json validen JSON
- Potrdite, da je tema aktivna

**Barve izgledajo drugače na različnih strani**
- Preverite konfliktne CSS v pluginih
- Potrdite, da vse strani uporabljajo isto temo
- Očiščite kakršne koli caching pluginove

**Želim se vrniti na predhodno design sistem**
- Vprašajte agenta: "Pokaži mi moji zgodovinski podatke za design system" (Show me my design system history)
- Ručno uredite theme.json z predhodnimi vrednostmi
- Ponovno vgradite skill z različnimi izbira

## Naslednji koraki (Next Steps) {#next-steps}

Po definiranju svojega design sistema:

1. **Preverite svojo spletno mesto**: Vstopite na svoje mesto, da vidite nov dizajn
2. **Razvijite še bolj**: Predvsem uporabite svoj veščino za prilagoditve
3. **Ustvarite template:** Zgrajete lastne blok template z uporabo svojih design tokenov
4. **Dokumentirajte**: Delite svoje design system s sodelavci
