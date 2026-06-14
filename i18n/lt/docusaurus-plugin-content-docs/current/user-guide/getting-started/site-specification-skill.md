---
title: Svetimo specifikacija įgūdžiai
sidebar_position: 18
_i18n_hash: 7470e8d04c1f380b3dca6ba5559b34f5
---
# Skill: Site Specification

**Site Specification** yra struktūrinis būdas suformuoti jūsų svetainės tikslus, vartotojus ir preikės identitetą. Ši informacija saugoma jūsų **site\_brief** (svetainės aprašymas) sąlygos, kurios agentai naudoja tarp sesijų, kad pateiktų pagal kontekstą informavimą.

## Kas tai yra Site Specification?

Site Specification yra dokumentavimo procesas, kuriame suformuojama:

- **Svetainės tikslas**: kas jūsų svetainė darybama ir kodėl ji egzistuoja
- **Tikslinė auditorija**: kurie žmonės randa jūsų svetainę ir ką jie reikia
- **Preikės identitas**: jūsų spalvos, tonas ir vizual stilius
- **Biznis tikslai**: kaip atrodo sėkmė jūsų svetaine
- **Mąstymo struktūra (Content structure)**: kaip jūsų svetainė yra suorganizuota

Šis aprašymas tampa jūsų **site\_brief**, persidėvimo sąlygos, kurios agentai naudoja suprantys jūsų svetainės kontekstą.

## Kodėl naudoti Site Specification?

### Konsistencija tarp sesijų

Be site\_brief turėjote reikėtų kiekvienai naujam sesijai atsiargumentuoti savo svetainės tikslus. Su jo, agentai iš karto supranta:

- Jūsų svetainės tikslus ir auditoriją
- Jūsų preikės spalvas ir toną
- Jūsų mąstymo struktūrą
- Jūsų biznesų tikslus

### Geros rekomendacijos

Agentai naudoja jūsų site\_brief, kad:

- Siūlotų funkcijas, susijusias su jūsų svetainės tikslu
- Rekomenduotų mąstymo struktūras, atitinkamos jūsų tikslams
- Siūlotų dizainus, susijusius su jūsų preikė
- Vartotu vengtum šių nekompatabilių funkcijos siūlomų

### Greangesnis įsigydimas (Onboarding)

Nauji agentai (arba agentai naujose sesijose) greitai įsitikina, perskaitydami jūsų site\_brief, o ne klausdant prekybiškų klausimų.

## Site Specification inicijuoti

### During Theme Builder Onboarding

Site Specification skiliai inicijuojama during **Theme Builder onboarding flow**. Setup Assistant agent klausosi klausimų ir suforma jūsų site\_brief.

### Manual Initiation

Galitei galite starti svetain:

```
"Nurodymo savo svetainės specifikaciją"
```

ar

```
"Padėk man sukurti svetainės apibendrinimą"
```

## Svetainės specifikacijos procesas

### 1. Svetainės tikslas

Agentis klausia:

```
Koks yra jūsų svetainės pagrindinis tikslas?
- E-komercijai parduotuvė
- Blogas ar turinio svetainė
- Portfolijas ar demonstravimo puslapis
- SaaS programėlė
- Bendrovė arba forumas
- Kitas: [apibūdinkite]
```

Jūs galite pasirinkti kategoriją arba apibūdinti savo tikslą.

### 2. Tikslinė auditorija

```
Koks yra jūsų pagrindinis vartotojas?
- Vartotojai / bendruomenė
- Bizneso profesaliai
- Programatoriai / techniniai vartotojai
- Studentai / mokytojai
- Kitas: [apibūdinkite]

Ką jie turi pagrindinių poreikių?
```

### 3. Prekės ženklas (Brand Identity)

```
Koki yra jūsų prekės ženklo spalvos?
- Pagrindinė spalva: [spalvos pasirinkimas ar hex kodas]
- Antras spalva: [spalvos pasirinkimas ar hex kodas]
- Akcentavimo spalva: [valstybinis]

Kaip aprašytumėte savo prekės ženklo toną?
- Profesionali / korporatyvinis
- Kreatyvinis / artistinis
- Žaidžiantis / kasualus
- Minimalistas / modernusis
- Šiltas / draugiškas
```

### 4. Biznesiniai tikslai

```
Kaip atrodo sėkmė jūsų svetainėje?
- Generuoti leadus (potencinius klientus)
- Parduoti produktus
- Daryti bendruomenę
- Dalinti žinias
- Užtikrinti aukštą statusą/autoritētę
- Kitas: [apibūdinkite]

Koks jūsų pagrindinis metrikas?
- Apiegamumas (Revenue)
- Vartotojų įtraukimas
- Turinio pasiekimas
- Konversijos
- Kitas
```

### 5. Turinio struktūra

```
Kaip yra organizuotas jūsų turinys?
- Platus (visas turinys viename lygio)
- Hierarchinis (kategorijos ir subkategorijos)
- Kronologinis (blogų stilius)
- Pagrindas produktams (katalogas)
- Kitas: [apibūdinkite]

Koki turinio tipus naudojate?
- Blogų straipsniai
- Produktų puslapiai
- Ardis naujienos (Case studies)
- Dokumentacija
- Vaizdo įrašai
- Kitas
```

## Jūsų site_brief sąjoda

Svetainės specifikacijos pabaigoje jūsų informacija saugomi kaip **site_brief** jūsų agentinio sąjoda. Tai struktūrinis įrašas, kuriame yra:

## Prisėjimas ir atnaujinimas jūsų svetainės aprašymui (site_brief)

### Peržiūrėti savo svetainės aprašymą (site_brief)

Paklausykite agentui:

```
"Rodyti man mano svetainės aprašymą"
```

ar

```
"Ką jūs žinote apie mano svetainę?"
```

Agentas pateiks jūsų saugomas specifikaciją.

### Atnaujinti savo svetainės aprašymą (site_brief)

Jei jūsų svetainė keičiasi, galite ją atnaujinti:

```
"Atnaujinti mano svetainės aprašymą: dabar tiksluo turime B2B klientus"
```

ar

```
"Atnaujinti mano svetainės specifikaciją"
```

Tai atsisiųs jūsų esamą informaciją kaip pradoti. Tai vėl paleis Site Specification įgūdžių, naudojant jūsų esamą informaciją kaip pradinį punktą.

## Kaip agentai naudoja svetainės aprašymą (site_brief)

### Dizaino rekomendacijos

Kai klausysite apie dizaino pakeitimus, agentai remiasi jūsų svetainės aprašymu:

```
Jūs: "Redesize mano pagrindinį puslapį"
Agentas: "Pagrindines jūsų svetainės aprašymo atveju, jūs tiksluojate į moteris 25-45 metų grupę su šiltu, gamybos charakterio tonu. Apsikursiu dizainą, kuris pabrėžia jūsų gamybus juvelius ir laisvame (sustainabilty) vertus."
```

### Funkcionalumo siūlymai

Agentai siūlo funkcijas, susijusias su jūsų tikslomis:

```
Jūs: "Ką turėčiau pridėti?"
Agentas: "E-komercijai, kurios yra orientuota į klientų lojalumą, aš siūlyčiau: lojalumo programą, klientų atsaugojus, el. laiškų rašylių (newsletter) ir produktų rekomendacijas."
```

### Maudė struktūra

Agentai siūlo turinio organizavimą pagal jūsų struktūrą:

Pagalba blogą?
Agentas: „Kadangi naudojate produktų katalogą su blogu, siūlyčiau saugoti straipsnius pagal produktų kategorijas ir sukurtę 'stilizavimo vadovyrus', kuriuose pateikta kelios produktai kartu.”

## Geriaus praktikai

### Būkite specifūs

Kai kurį kartą nurodykite savo tikrą skilty.
- ✓ „Moterys 25–45 metų, susidėvios įtakos laikinai moda“
- ✗ „Visi“

### Aktualizuokite reguliariai
Kai jūsų svetainė keičiasi, atnaujinkite savo site_brief:
- Kai keičiate tikslinę auditoriją
- Kai pridėjate naujus produktų lainas
- Kai keičiasi jūsų prekės ženklos identitas
- Kai keičiasi jūsų verslo tikslai

### Naudokite vienodą terminologiją
Naudokite vienus pačias žodžius visose sesijose:
- ✓ Visą laiku nurodykite „saugomos juveliai“ (ne „ekoprijuveliai“ ir „grėtinai produktai“)
- ✓ Konsistentiai nurodykite savo auditoriją tą pačia būdu

### Įtraukite kontekstą
Pateikite pagrindimą, kuris padės agentui suprasti jūsų sprendimus:
- „Mums tiksluojame profesionalus, kurie vertina kokybę prieš kainą“
- „Mums auditorija yra technologinio savaliė ir jie kelia modernios dizaino reikalavimus“
- „Mes esame startupe, kuris finansuojamas iš savo pinigų, todėl mums reikia kainos efektyviausių sprogdymų“

## Nuomonė su Theme Builder įdiegimu

Site Specification įgūdžius integruoti į **Theme Builder įdiegimo procesą**. Kai pabaigsite įdiegimą, jūsų site_brief būtų automatiškai sukurtas su tą informaciją, kurią pateikėte.

Jau ar galite naudoti Site Specification nepriklausomai, jei norite:
- Nuoblikti savo specifikaciją po pradinis nustatymas
- Aktualizuoti savo site_brief, kai jūsų svetainė keičiasi
- Sukurti detalią specifikaciją prieš pradėdami Theme Builder

## Problemos atšalinimas

**Mano site_brief ne naudoja**
- Patikrinkite, ar agentui yra pasiekiamas sąminti (memory)
- Paklausykite agentą „atsekti mano site_brief“
- Patikrinkite, ar sąmintis įjungta jūsų nustatymuose

**Norėdami pradėti naują site\_brief**
- Paklausykite agentą: "Pakeiskite mano site brief ir pradėkite naujiai"
- Tada atlikite Site Specification vėl

**Agentas siūlo rekomendacijas, kurios nepatinka mano site\_brief**
- Paklausykite agentą: "Patikrinkite mano site brief"
- Atnaujinkite savo site\_brief, jei jis yra sukirimas
- Užtepkite daugiau konteksto savo pateikimu

## Keturi toliai

Po suprantojo jūsų svetainės specifikacijas:

1. **Naudokite Theme Builder**: Kurkite pritaikytą temą, remiantę jūsų site\_brief
2. **Nuobraukykite dizainą**: Naudokite Design System Aesthetics įgūdžių, kad atliktumėte detalių dizaino darbą
3. **Planuokite turinį**: Paklausykite agentus rekomenduoti turinio struktūrą
4. **Apbakykite funkcijas**: Prašykite funkcijas, susijusias su jūsų verslo tikslais
