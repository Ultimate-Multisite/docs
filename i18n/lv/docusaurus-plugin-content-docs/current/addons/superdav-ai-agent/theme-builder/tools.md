---
title: Rīki un konfigurācija
sidebar_position: 4
_i18n_hash: 78a3b6062e985598d020eaee28754120
---
# Rīki un konfigurācija

Theme Builder izmanto rīku kopu, lai analizētu, projektētu un izveidotu jūsu WordPress vietni. Versijā 1.16.0 **sd-ai-agent/site-scrape tagad ir 1. līmeņa rīks**, padarot to pēc noklusējuma pieejamu Theme Builder. Superdav AI Agent v1.18.0 arī ievieš atsevišķi izplatītu Advanced pavadošo pakotni uzticamām izstrādātāju darbplūsmām; šie rīki nav daļa no WordPress.org pamata pakotnes un ir jāinstalē un jāautorizē atsevišķi.

## Pieejamie rīki {#available-tools}

### 1. līmeņa rīki (vienmēr pieejami) {#tier-1-tools-always-available}

1. līmeņa rīki pēc noklusējuma ir pieejami Theme Builder bez jebkādas papildu konfigurācijas.

#### sd-ai-agent/site-scrape {#sd-ai-agentsite-scrape}

**Mērķis:** Analizēt esošas tīmekļa vietnes, lai iegūtu dizaina iedvesmu, satura struktūru un funkcionalitāti.

**Iespējas:**

- **Tīmekļa vietnes analīze** — izgūt un analizēt konkurentu vai iedvesmas tīmekļa vietnes
- **Dizaina izgūšana** — identificēt krāsas, fontus un izkārtojuma modeļus
- **Satura struktūra** — izprast lapu organizāciju un hierarhiju
- **Funkciju noteikšana** — identificēt pluginus un funkcionalitāti
- **Veiktspējas analīze** — pārbaudīt lapas ātrumu un optimizāciju
- **SEO analīze** — pārskatīt meta tagus un strukturētos datus

**Lietošana:**

```
Analizē example.com dizainu un izmanto to kā iedvesmu manai vietnei.
```

**Ko tas izgūst:**

- Krāsu paleti un krāsu lietojumu
- Tipogrāfiju (fontus un izmērus)
- Izkārtojuma struktūru un atstarpes
- Navigācijas modeļus
- Satura organizāciju
- Attēlu un multivides lietojumu
- Interaktīvos elementus
- Mobilās ierīces pielāgojamību

**Ierobežojumi:**

- Nevar izgūt ar paroli aizsargātas vietnes
- Ievēro robots.txt un vietnes politikas
- Var neuztvert dinamisko saturu
- Vietnēm ar lielu JavaScript daudzumu analīze var būt ierobežota
- Lielu vietņu analīze var aizņemt ilgāku laiku

### 2. līmeņa rīki (pēc izvēles) {#tier-2-tools-optional}

2. līmeņa rīki ir pieejami, kad tie ir skaidri iespējoti Theme Builder iestatījumos.

#### Paplašinātā analītika {#advanced-analytics}

Nodrošina detalizētus veiktspējas rādītājus:

- Lapas ielādes laiki
- Core Web Vitals
- SEO vērtējums
- Pieejamības vērtējums
- Labāko prakšu vērtējums

#### Satura optimizētājs {#content-optimizer}

Analizē un iesaka uzlabojumus šādiem aspektiem:

- Lasāmība
- SEO optimizācija
- Atslēgvārdu lietojums
- Satura struktūra
- Aicinājuma uz darbību izvietojums

### 3. līmeņa rīki (Premium) {#tier-3-tools-premium}

3. līmeņa rīkiem nepieciešama papildu konfigurācija vai Premium funkcijas.

#### AI satura ģenerators {#ai-content-generator}

Ģenerē saturu šādiem nolūkiem:

- Product apraksti
- Pakalpojumu lapas
- Bloga ieraksti
- Meta apraksti
- Aicinājuma uz darbību teksts

#### Paplašinātie dizaina rīki {#advanced-design-tools}

Nodrošina paplašinātas dizaina iespējas:

- Pielāgota CSS ģenerēšana
- Animāciju izveide
- Interaktīvo elementu dizains
- Paplašināta krāsu teorija
- Tipogrāfijas optimizācija

### Advanced pavadošie rīki (atsevišķa pakotne) {#advanced-companion-tools-separate-package}

Advanced pavadošā pakotne tiek izplatīta atsevišķi no Superdav AI Agent pamata laidiena. Tā ir paredzēta uzticamām izstrādātāju un vietņu īpašnieku vidēm, kur administratori skaidri atļauj agentam izmantot augstas ietekmes rīkus.

Advanced pavadošās iespējas var ietvert:

- **Failu sistēmas rīki** — pārbaudīt un modificēt apstiprinātus failus uzticamās vidēs
- **Datubāzes rīki** — vaicāt vai atjaunināt vietnes datus, kad tas ir skaidri autorizēts
- **WP-CLI rīki** — palaist WordPress uzturēšanas un pārbaudes komandas
- **REST dispečera rīki** — izsaukt reģistrētus REST endpointus, izmantojot kontrolētas dispečera darbplūsmas
- **Pluginu veidotāja rīki** — izveidot sākotnējo struktūru un iterēt plugin kodu
- **Git momentuzņēmumu rīki** — izveidot momentuzņēmumus pirms riskantām izstrādātāja operācijām
- **Lietotāju pārvaldības rīki** — palīdzēt pārskatīt vai pielāgot lietotāju ierakstus, kur tas ir atļauts
- **Etalontestu rīki** — palaist veiktspējas vai iespēju etalontestus izstrādes pārskatīšanai

Nedokumentējiet tos kā vispārēji pieejamus Theme Builder rīkus katrai instalācijai. Tie ir pieejami tikai tad, kad Advanced pavadošā pakotne ir instalēta, iespējota un ierobežota uzticamiem administratoriem.

## Rīku konfigurācija {#tool-configuration}

### Rīku iespējošana {#enabling-tools}

Lai iespējotu papildu rīkus Theme Builder:

1. Dodieties uz **Gratis AI Agent → Settings**
2. Dodieties uz **Theme Builder → Tools**
3. Pēc vajadzības ieslēdziet/izslēdziet rīkus
4. Saglabājiet iestatījumus

### Rīku atļaujas {#tool-permissions}

Dažiem rīkiem nepieciešamas atļaujas:

- **Vietnes izgūšana** — nepieciešama piekļuve internetam
- **Analītika** — nepieciešama Google Analytics integrācija
- **Satura ģenerēšana** — nepieciešamas API atslēgas
- **Paplašinātās funkcijas** — var būt nepieciešams Premium abonements
- **Advanced pavadošie rīki** — nepieciešama atsevišķi izplatītā Advanced pakotne un skaidra administratora uzticība

### API atslēgas un akreditācijas dati {#api-keys-and-credentials}

Konfigurējiet API atslēgas rīkiem, kuriem tās nepieciešamas:

1. Dodieties uz **Gratis AI Agent → Settings → API Keys**
2. Ievadiet akreditācijas datus katram rīkam
3. Pārbaudiet savienojumu
4. Droši saglabājiet

### Advanced pavadošās pakotnes instalēšana {#installing-the-advanced-companion-package}

Advanced pavadošā pakotne tiek izlaista atsevišķi no WordPress.org pamata ZIP. Instalējiet to tikai no oficiālā projekta izplatīšanas kanāla attiecīgajam laidienam, pēc tam ierobežojiet piekļuvi uzticamiem administratoriem. Pirms failu sistēmas, datubāzes, WP-CLI, REST dispečera, pluginu veidotāja, lietotāju pārvaldības vai etalontestu rīku iespējošanas production vietnē pārskatiet cilvēka apstiprinājuma vārtus un git momentuzņēmumu darbību.

## sd-ai-agent/site-scrape lietošana {#using-sd-ai-agentsite-scrape}

### Pamata lietošana {#basic-usage}

Palūdziet Theme Builder analizēt tīmekļa vietni:

```
Analizē mana konkurenta vietnes dizainu vietnē competitor.com
un iesaki dizaina uzlabojumus manai vietnei.
```

### Konkrēta analīze {#specific-analysis}

Pieprasiet konkrētus analīzes veidus:

```
Izgūsti krāsu paleti no example.com un izmanto to kā iedvesmu.
```

```
Analizē example.com navigācijas struktūru un piemēro līdzīgu
organizāciju manai vietnei.
```

```
Pārbaudi example.com pielāgojamību mobilajām ierīcēm un nodrošini, ka mana vietne
ir tikpat pielāgojama.
```

### Salīdzinājuma analīze {#comparison-analysis}

Salīdziniet vairākas vietnes:

```
Salīdzini site1.com un site2.com dizainus un izveido dizainu,
kas apvieno abu labākos elementus.
```

## Rīku ierobežojumi un apsvērumi {#tool-limitations-and-considerations}

### Ātruma ierobežošana {#rate-limiting}

- Scraping ātrums ir ierobežots, lai novērstu servera pārslodzi
- Vairāki pieprasījumi uz to pašu vietni var tikt ierobežoti
- Lielu vietņu analīze var aizņemt vairāk laika

### Satura precizitāte {#content-accuracy}

- Dinamisks saturs var netikt pilnībā uztverts
- Ar JavaScript renderēts saturs var būt nepilnīgs
- Reāllaika dati var netikt atspoguļoti
- Daļa satura var atrasties aiz maksas piekļuves sienām

### Juridiskie un ētiskie apsvērumi {#legal-and-ethical-considerations}

- Ievērojiet robots.txt un vietnes politikas
- Neveiciet ar autortiesībām aizsargāta satura scraping reproducēšanai
- Izmantojiet analīzi iedvesmai, nevis kopēšanai
- Pārliecinieties, ka jums ir tiesības izmantot iegūto saturu
- Ievērojiet analizēto vietņu pakalpojumu noteikumus

### Veiktspējas ietekme {#performance-impact}

- Lielu vietņu scraping var aizņemt laiku
- Vairāki vienlaicīgi scraping procesi var būt lēnāki
- Tīkla savienojamība ietekmē ātrumu
- Lielām datu kopām var būt nepieciešama papildu apstrāde

## Labākā prakse {#best-practices}

### Vietnes analīzes izmantošana {#using-site-analysis}

1. **Analizējiet vairākas vietnes** — iegūstiet iedvesmu no vairākiem avotiem
2. **Koncentrējieties uz struktūru** — apgūstiet izkārtojuma un organizācijas modeļus
3. **Iegūstiet krāsas** — izmantojiet krāsu paletes kā sākuma punktus
4. **Izpētiet tipogrāfiju** — identificējiet fontu kombinācijas, kas jums patīk
5. **Pārskatiet navigāciju** — izprotiet izvēlnes organizāciju

### Ētisks scraping {#ethical-scraping}

1. **Ievērojiet robots.txt** — sekojiet vietnes vadlīnijām
2. **Nekopējiet saturu** — izmantojiet analīzi tikai iedvesmai
3. **Pārbaudiet tiesības** — pārliecinieties, ka varat izmantot iegūto saturu
4. **Norādiet avotus** — norādiet iedvesmas avotus
5. **Ievērojiet noteikumus** — ievērojiet vietnes pakalpojumu noteikumus

### Rīka efektivitātes maksimizēšana {#maximizing-tool-effectiveness}

1. **Esiet konkrēti** — pieprasiet konkrētus analīzes veidus
2. **Sniedziet kontekstu** — izskaidrojiet savas vietnes mērķi
3. **Nosakiet gaidas** — aprakstiet savus dizaina mērķus
4. **Iterējiet** — precizējiet, balstoties uz rezultātiem
5. **Apvienojiet rīkus** — izmantojiet vairākus rīkus visaptverošai analīzei

## Problēmu novēršana {#troubleshooting}

### Vietni nevar noscrapēt {#site-wont-scrape}

- Pārbaudiet, vai vietne ir publiski pieejama
- Pārliecinieties, vai robots.txt atļauj scraping
- Izmēģiniet citu vietni
- Pārbaudiet interneta savienojumu
- Sazinieties ar atbalstu, ja problēma saglabājas

### Nepilnīga analīze {#incomplete-analysis}

- Vietnē var būt dinamisks saturs
- JavaScript var netikt pilnībā renderēts
- Lielām vietnēm var iestāties noildze
- Tā vietā mēģiniet analizēt konkrētas lapas
- Pieprasiet konkrētus analīzes veidus

### Lēna veiktspēja {#slow-performance}

- Lielu vietņu analīze aizņem vairāk laika
- Vairāki vienlaicīgi scraping procesi ir lēnāki
- Tīkla savienojamība ietekmē ātrumu
- Mēģiniet ārpus noslodzes stundām
- Vispirms analizējiet mazākas sadaļas

## Saistītā dokumentācija {#related-documentation}

- [Atklāšanas intervija](./discovery-interview.md) — apkopojiet dizaina informāciju
- [Dizaina virziens](./design-direction.md) — pilnveidojiet savu dizainu
- [Viesmīlības izvēlnes](./hospitality-menus.md) — izveidojiet izvēļņu lapas
