---
title: Įrankiai ir konfigūracija
sidebar_position: 4
_i18n_hash: 78a3b6062e985598d020eaee28754120
---
# Įrankiai ir konfigūracija {#tools-and-configuration}

Theme Builder naudoja įrankių rinkinį jūsų WordPress svetainei analizuoti, projektuoti ir kurti. 1.16.0 versijoje **sd-ai-agent/site-scrape dabar yra 1 lygio įrankis**, todėl jis pagal numatytuosius nustatymus pasiekiamas Theme Builder. Superdav AI Agent v1.18.0 taip pat pristato atskirai platinamą Advanced papildomą paketą patikimoms kūrėjų darbo eigoms; šie įrankiai nėra WordPress.org pagrindinio paketo dalis ir turi būti įdiegti bei autorizuoti atskirai.

## Pasiekiami įrankiai {#available-tools}

### 1 lygio įrankiai (visada pasiekiami) {#tier-1-tools-always-available}

1 lygio įrankiai pagal numatytuosius nustatymus pasiekiami Theme Builder be jokios papildomos konfigūracijos.

#### sd-ai-agent/site-scrape {#sd-ai-agentsite-scrape}

**Paskirtis:** Analizuoti esamas svetaines, kad būtų išgauta dizaino įkvėpimo, turinio struktūra ir funkcionalumas.

**Galimybės:**

- **Svetainių analizė** — nuskaityti ir analizuoti konkurentų arba įkvėpimo svetaines
- **Dizaino išgavimas** — nustatyti spalvas, šriftus ir išdėstymo modelius
- **Turinio struktūra** — suprasti puslapių organizavimą ir hierarchiją
- **Funkcijų aptikimas** — nustatyti papildinius ir funkcionalumą
- **Našumo analizė** — tikrinti puslapio greitį ir optimizavimą
- **SEO analizė** — peržiūrėti metažymes ir struktūrizuotus duomenis

**Naudojimas:**

```
Išanalizuok example.com dizainą ir naudok jį kaip įkvėpimą mano svetainei.
```

**Ką jis išgauna:**

- Spalvų paletę ir spalvų naudojimą
- Tipografiją (šriftus ir dydžius)
- Išdėstymo struktūrą ir tarpus
- Navigacijos modelius
- Turinio organizavimą
- Vaizdų ir medijos naudojimą
- Interaktyvius elementus
- Pritaikymą mobiliesiems

**Apribojimai:**

- Negali nuskaityti slaptažodžiu apsaugotų svetainių
- Laikosi robots.txt ir svetainės taisyklių
- Gali neužfiksuoti dinaminio turinio
- Svetainėse, kuriose daug JavaScript, analizė gali būti ribota
- Didelių svetainių analizė gali užtrukti ilgiau

### 2 lygio įrankiai (pasirenkami) {#tier-2-tools-optional}

2 lygio įrankiai pasiekiami, kai jie aiškiai įjungiami Theme Builder nustatymuose.

#### Išplėstinė analitika {#advanced-analytics}

Pateikia išsamius našumo rodiklius:

- Puslapio įkėlimo laikus
- Core Web Vitals
- SEO įvertinimą
- Prieinamumo įvertinimą
- Geriausios praktikos įvertinimą

#### Turinio optimizatorius {#content-optimizer}

Analizuoja ir siūlo patobulinimus:

- Skaitomumui
- SEO optimizavimui
- Raktažodžių naudojimui
- Turinio struktūrai
- Raginimo veikti vietai

### 3 lygio įrankiai (Premium) {#tier-3-tools-premium}

3 lygio įrankiams reikia papildomos konfigūracijos arba premium funkcijų.

#### AI turinio generatorius {#ai-content-generator}

Generuoja turinį:

- Produktų aprašymams
- Paslaugų puslapiams
- Tinklaraščio įrašams
- Meta aprašymams
- Raginimo veikti tekstui

#### Išplėstiniai dizaino įrankiai {#advanced-design-tools}

Suteikia išplėstines dizaino galimybes:

- Pasirinktinio CSS generavimą
- Animacijų kūrimą
- Interaktyvių elementų dizainą
- Išplėstinę spalvų teoriją
- Tipografijos optimizavimą

### Advanced papildomi įrankiai (atskiras paketas) {#advanced-companion-tools-separate-package}

Advanced papildomas paketas platinamas atskirai nuo pagrindinio Superdav AI Agent leidimo. Jis skirtas patikimoms kūrėjų ir svetainių savininkų aplinkoms, kuriose administratoriai aiškiai leidžia agentui naudoti didelio poveikio įrankius.

Advanced papildomos galimybės gali apimti:

- **Failų sistemos įrankius** — tikrinti ir keisti patvirtintus failus patikimose aplinkose
- **Duomenų bazės įrankius** — užklausti arba atnaujinti svetainės duomenis, kai aiškiai autorizuota
- **WP-CLI įrankius** — vykdyti WordPress priežiūros ir tikrinimo komandas
- **REST dispečerio įrankius** — kviesti registruotus REST endpointus per kontroliuojamas dispečerio darbo eigas
- **Papildinių kūrimo įrankius** — sukurti karkasą ir iteruoti papildinio kodą
- **Git momentinių kopijų įrankius** — kurti momentines kopijas prieš rizikingas kūrėjų operacijas
- **Naudotojų valdymo įrankius** — padėti peržiūrėti arba koreguoti naudotojų įrašus, kur leidžiama
- **Testavimo įrankius** — vykdyti našumo arba galimybių testus kūrimo peržiūrai

Nedokumentuokite jų kaip bendrai pasiekiamų Theme Builder įrankių kiekviename diegime. Jie pasiekiami tik tada, kai Advanced papildomas paketas yra įdiegtas, įjungtas ir apribotas patikimiems administratoriams.

## Įrankių konfigūracija {#tool-configuration}

### Įrankių įjungimas {#enabling-tools}

Norėdami įjungti papildomus įrankius Theme Builder:

1. Eikite į **Gratis AI Agent → Settings**
2. Eikite į **Theme Builder → Tools**
3. Įjunkite arba išjunkite įrankius pagal poreikį
4. Išsaugokite nustatymus

### Įrankių leidimai {#tool-permissions}

Kai kuriems įrankiams reikia leidimų:

- **Svetainės nuskaitymas** — reikalinga interneto prieiga
- **Analitika** — reikalinga Google Analytics integracija
- **Turinio generavimas** — reikalingi API raktai
- **Išplėstinės funkcijos** — gali reikėti premium prenumeratos
- **Advanced papildomi įrankiai** — reikalingas atskirai platinamas Advanced paketas ir aiškus administratoriaus pasitikėjimas

### API raktai ir kredencialai {#api-keys-and-credentials}

Sukonfigūruokite API raktus įrankiams, kuriems jų reikia:

1. Eikite į **Gratis AI Agent → Settings → API Keys**
2. Įveskite kiekvieno įrankio kredencialus
3. Išbandykite ryšį
4. Saugiai išsaugokite

### Advanced papildomo paketo diegimas {#installing-the-advanced-companion-package}

Advanced papildomas paketas išleidžiamas atskirai nuo WordPress.org pagrindinio ZIP. Įdiekite jį tik iš oficialaus projekto platinimo kanalo, skirto leidimui, tada apribokite prieigą patikimiems administratoriams. Prieš įjungdami failų sistemos, duomenų bazės, WP-CLI, REST dispečerio, papildinių kūrimo, naudotojų valdymo arba testavimo įrankius produkcinėje svetainėje, peržiūrėkite žmogaus patvirtinimo vartus ir git momentinių kopijų veikimą.

## sd-ai-agent/site-scrape naudojimas {#using-sd-ai-agentsite-scrape}

### Pagrindinis naudojimas {#basic-usage}

Paprašykite Theme Builder išanalizuoti svetainę:

```
Išanalizuok mano konkurento svetainės, esančios competitor.com, dizainą
ir pasiūlyk dizaino patobulinimų mano svetainei.
```

### Konkreti analizė {#specific-analysis}

Paprašykite konkrečių analizės tipų:

```
Išgauk spalvų paletę iš example.com ir naudok ją kaip įkvėpimą.
```

```
Išanalizuok example.com navigacijos struktūrą ir pritaikyk panašią
organizaciją mano svetainei.
```

```
Patikrink example.com pritaikymą mobiliesiems ir užtikrink, kad mano svetainė
būtų taip pat pritaikyta.
```

### Palyginamoji analizė {#comparison-analysis}

Palyginkite kelias svetaines:

```
Palygink site1.com ir site2.com dizainus ir sukurk dizainą,
kuris sujungia geriausius abiejų elementus.
```

## Įrankių apribojimai ir svarstymai {#tool-limitations-and-considerations}

### Užklausų ribojimas {#rate-limiting}

- Scraping greitis ribojamas, kad būtų išvengta serverio perkrovos
- Kelių užklausų į tą pačią svetainę vykdymas gali būti pristabdytas
- Didelėms svetainėms analizuoti gali prireikti daugiau laiko

### Turinio tikslumas {#content-accuracy}

- Dinaminis turinys gali būti užfiksuotas ne visiškai
- JavaScript sugeneruotas turinys gali būti neišsamus
- Realaus laiko duomenys gali būti neatspindėti
- Dalis turinio gali būti už mokamos prieigos sienų

### Teisiniai ir etiniai aspektai {#legal-and-ethical-considerations}

- Gerbkite robots.txt ir svetainės taisykles
- Nekopijuokite autorių teisėmis saugomo turinio atkūrimui
- Analizę naudokite įkvėpimui, o ne kopijavimui
- Patikrinkite, ar turite teisę naudoti išgautą turinį
- Laikykitės analizuojamų svetainių paslaugų teikimo sąlygų

### Poveikis našumui {#performance-impact}

- Didelių svetainių scraping gali užtrukti
- Keli vienu metu vykdomi scraping gali būti lėtesni
- Tinklo ryšys daro įtaką greičiui
- Dideliems duomenų rinkiniams gali reikėti daugiau apdorojimo

## Geriausios praktikos {#best-practices}

### Svetainės analizės naudojimas {#using-site-analysis}

1. **Analizuokite kelias svetaines** — rinkite įkvėpimą iš kelių šaltinių
2. **Sutelkite dėmesį į struktūrą** — mokykitės išdėstymo ir organizavimo šablonų
3. **Išgaukite spalvas** — naudokite spalvų paletes kaip pradinius taškus
4. **Studijuokite tipografiją** — nustatykite jums patinkančius šriftų derinius
5. **Peržiūrėkite navigaciją** — supraskite meniu organizavimą

### Etiškas scraping {#ethical-scraping}

1. **Gerbkite robots.txt** — laikykitės svetainės gairių
2. **Nekopijuokite turinio** — analizę naudokite tik įkvėpimui
3. **Patikrinkite teises** — įsitikinkite, kad galite naudoti išgautą turinį
4. **Nurodykite šaltinius** — paminėkite įkvėpimo šaltinius
5. **Laikykitės sąlygų** — laikykitės svetainės paslaugų teikimo sąlygų

### Įrankio efektyvumo didinimas {#maximizing-tool-effectiveness}

1. **Būkite konkretūs** — prašykite konkrečių analizės tipų
2. **Pateikite kontekstą** — paaiškinkite savo svetainės tikslą
3. **Nustatykite lūkesčius** — apibūdinkite savo dizaino tikslus
4. **Iteruokite** — tobulinkite pagal rezultatus
5. **Derinkite įrankius** — naudokite kelis įrankius išsamiai analizei

## Trikčių šalinimas {#troubleshooting}

### Svetainės nepavyksta nuskaityti naudojant scraping {#site-wont-scrape}

- Patikrinkite, ar svetainė viešai pasiekiama
- Patikrinkite, ar robots.txt leidžia scraping
- Išbandykite kitą svetainę
- Patikrinkite interneto ryšį
- Jei problema išlieka, susisiekite su palaikymo tarnyba

### Neišsami analizė {#incomplete-analysis}

- Svetainėje gali būti dinaminio turinio
- JavaScript gali būti nevisiškai sugeneruotas
- Didelėms svetainėms gali baigtis skirtasis laikas
- Vietoj to pabandykite analizuoti konkrečius puslapius
- Paprašykite konkrečių analizės tipų

### Lėtas veikimas {#slow-performance}

- Didelėms svetainėms analizuoti reikia daugiau laiko
- Keli vienu metu vykdomi scraping yra lėtesni
- Tinklo ryšys daro įtaką greičiui
- Bandykite ne piko valandomis
- Pirmiausia analizuokite mažesnes dalis

## Susijusi dokumentacija {#related-documentation}

- [Atradimo interviu](./discovery-interview.md) — surinkite dizaino informaciją
- [Dizaino kryptis](./design-direction.md) — patobulinkite savo dizainą
- [Svetingumo meniu](./hospitality-menus.md) — kurkite meniu puslapius
