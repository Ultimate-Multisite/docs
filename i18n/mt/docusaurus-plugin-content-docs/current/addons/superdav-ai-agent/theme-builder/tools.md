---
title: Għodod u Konfigurazzjoni
sidebar_position: 4
_i18n_hash: 78a3b6062e985598d020eaee28754120
---
# Għodod u Konfigurazzjoni {#tools-and-configuration}

Theme Builder juża sett ta' għodod biex janalizza, jiddisinja, u jibni s-sit WordPress tiegħek. Fil-verżjoni 1.16.0, **sd-ai-agent/site-scrape issa huwa għodda Tier 1**, u b'hekk ikun disponibbli awtomatikament f'Theme Builder. Superdav AI Agent v1.18.0 jintroduċi wkoll pakkett Advanced anċillari distribwit separatament għal flussi tax-xogħol ta' żviluppaturi fdati; dawk l-għodod mhumiex parti mill-pakkett ewlieni ta' WordPress.org u jridu jiġu installati u awtorizzati separatament.

## Għodod Disponibbli {#available-tools}

### Għodod Tier 1 (Dejjem Disponibbli) {#tier-1-tools-always-available}

L-għodod Tier 1 huma disponibbli awtomatikament f'Theme Builder mingħajr ebda konfigurazzjoni addizzjonali.

#### sd-ai-agent/site-scrape {#sd-ai-agentsite-scrape}

**Għan:** Analizza websajts eżistenti biex tiġbed ispirazzjoni tad-disinn, struttura tal-kontenut, u funzjonalità.

**Kapaċitajiet:**

- **Analiżi tal-websajt** — scrape u analizza websajts tal-kompetituri jew ta' ispirazzjoni
- **Estrazzjoni tad-disinn** — identifika kuluri, fonts, u mudelli ta' tqassim
- **Struttura tal-kontenut** — ifhem l-organizzazzjoni u l-ġerarkija tal-paġni
- **Sejbien ta' karatteristiċi** — identifika plugins u funzjonalità
- **Analiżi tal-prestazzjoni** — iċċekkja l-veloċità tal-paġna u l-ottimizzazzjoni
- **Analiżi SEO** — irrevedi meta tags u dejta strutturata

**Użu:**

```
Analizza d-disinn ta' example.com u użah bħala ispirazzjoni għas-sit tiegħi.
```

**Dak li Jiġbed:**

- Paletta tal-kuluri u użu tal-kuluri
- Tipografija (fonts u daqsijiet)
- Struttura tat-tqassim u spazjar
- Mudelli ta' navigazzjoni
- Organizzazzjoni tal-kontenut
- Użu ta' immaġini u media
- Elementi interattivi
- Risponsività fuq il-mobile

**Limitazzjonijiet:**

- Ma jistax jagħmel scrape ta' siti protetti b'password
- Jirrispetta robots.txt u l-politiki tas-sit
- Jista' ma jaqbadx kontenut dinamiku
- Siti li jiddependu ħafna fuq JavaScript jista' jkollhom analiżi limitata
- Siti kbar jistgħu jieħdu aktar żmien biex jiġu analizzati

### Għodod Tier 2 (Mhux Obbligatorji) {#tier-2-tools-optional}

L-għodod Tier 2 huma disponibbli meta jiġu attivati b'mod espliċitu fis-settings ta' Theme Builder.

#### Analitika Avvanzata {#advanced-analytics}

Tipprovdi metriċi dettaljati tal-prestazzjoni:

- Ħinijiet tat-tagħbija tal-paġni
- Core Web Vitals
- Punteġġ SEO
- Punteġġ tal-aċċessibbiltà
- Punteġġ tal-aħjar prattiki

#### Ottimizzatur tal-Kontenut {#content-optimizer}

Janalizza u jissuġġerixxi titjib għal:

- Leġġibbiltà
- Ottimizzazzjoni SEO
- Użu ta' keywords
- Struttura tal-kontenut
- Tqegħid ta' call-to-action

### Għodod Tier 3 (Premium) {#tier-3-tools-premium}

L-għodod Tier 3 jeħtieġu konfigurazzjoni addizzjonali jew karatteristiċi premium.

#### Ġeneratur ta' Kontenut AI {#ai-content-generator}

Jiġġenera kontenut għal:

- Deskrizzjonijiet tal-prodotti
- Paġni tas-servizzi
- Artikli tal-blog
- Deskrizzjonijiet meta
- Test ta' call-to-action

#### Għodod tad-Disinn Avvanzati {#advanced-design-tools}

Jipprovdi kapaċitajiet avvanzati tad-disinn:

- Ġenerazzjoni ta' CSS personalizzat
- Ħolqien ta' animazzjonijiet
- Disinn ta' elementi interattivi
- Teorija avvanzata tal-kuluri
- Ottimizzazzjoni tat-tipografija

### Għodod Anċillari Advanced (Pakkett Separat) {#advanced-companion-tools-separate-package}

Il-pakkett Advanced anċillari jiġi distribwit separatament mir-rilaxx ewlieni ta' Superdav AI Agent. Huwa maħsub għal ambjenti ta' żviluppaturi u sidien ta' siti fdati fejn l-amministraturi jippermettu b'mod espliċitu lill-aġent juża għodod b'impatt għoli.

Il-kapaċitajiet anċillari Advanced jistgħu jinkludu:

- **Għodod tas-sistema tal-fajls** — spezzjona u mmodifika fajls approvati f'ambjenti fdati
- **Għodod tad-database** — agħmel query jew aġġorna d-dejta tas-sit meta jkun awtorizzat b'mod espliċitu
- **Għodod WP-CLI** — ħaddem kmandi ta' manutenzjoni u spezzjoni ta' WordPress
- **Għodod REST dispatcher** — sejjaħ REST endpoints irreġistrati permezz ta' flussi ta' dispatch ikkontrollati
- **Għodod għall-bini ta' plugins** — oħloq scaffold u itera fuq il-kodiċi tal-plugin
- **Għodod ta' snapshot Git** — oħloq snapshots qabel operazzjonijiet ta' żviluppatur riskjużi
- **Għodod ta' ġestjoni tal-utenti** — għin biex tirrevedi jew taġġusta rekords tal-utenti fejn permess
- **Għodod ta' benchmark** — ħaddem benchmarks tal-prestazzjoni jew tal-kapaċitajiet għal reviżjoni tal-iżvilupp

Tiddokumentahomx bħala għodod Theme Builder ġeneralment disponibbli għal kull installazzjoni. Huma disponibbli biss meta l-pakkett Advanced anċillari jkun installat, attivat, u ristrett għal amministraturi fdati.

## Konfigurazzjoni tal-Għodod {#tool-configuration}

### Attivazzjoni tal-Għodod {#enabling-tools}

Biex tattiva għodod addizzjonali f'Theme Builder:

1. Innaviga lejn **Gratis AI Agent → Settings**
2. Mur lejn **Theme Builder → Tools**
3. Ixgħel/itfi l-għodod kif meħtieġ
4. Issejvja s-settings

### Permessi tal-Għodod {#tool-permissions}

Xi għodod jeħtieġu permessi:

- **Site scraping** — jeħtieġ aċċess għall-internet
- **Analitika** — teħtieġ integrazzjoni ma' Google Analytics
- **Ġenerazzjoni tal-kontenut** — teħtieġ API keys
- **Karatteristiċi avvanzati** — jistgħu jeħtieġu abbonament premium
- **Għodod anċillari Advanced** — jeħtieġu l-pakkett Advanced distribwit separatament u fiduċja espliċita tal-amministratur

### API Keys u Kredenzjali {#api-keys-and-credentials}

Ikkonfigura API keys għall-għodod li jeħtiġuhom:

1. Mur lejn **Gratis AI Agent → Settings → API Keys**
2. Daħħal kredenzjali għal kull għodda
3. Ittestja l-konnessjoni
4. Issejvja b'mod sigur

### Installazzjoni tal-Pakkett Anċillari Advanced {#installing-the-advanced-companion-package}

Il-pakkett Advanced anċillari jiġi rilaxxat separatament mill-core ZIP ta' WordPress.org. Installah biss mill-kanal uffiċjali tad-distribuzzjoni tal-proġett għar-rilaxx, imbagħad irrestrinġi l-aċċess għal amministraturi fdati. Irrevedi l-punti ta' approvazzjoni umana u l-imġiba ta' git snapshot qabel tattiva għodod tas-sistema tal-fajls, database, WP-CLI, REST dispatcher, bennej ta' plugins, ġestjoni tal-utenti, jew benchmark fuq sit tal-produzzjoni.

## Użu ta' sd-ai-agent/site-scrape {#using-sd-ai-agentsite-scrape}

### Użu Bażiku {#basic-usage}

Staqsi lil Theme Builder biex janalizza websajt:

```
Analizza d-disinn tas-sit tal-kompetitur tiegħi f'competitor.com
u ssuġġerixxi titjib fid-disinn għas-sit tiegħi.
```

### Analiżi Speċifika {#specific-analysis}

Itlob tipi speċifiċi ta' analiżi:

```
Oħroġ il-paletta tal-kuluri minn example.com u użaha bħala ispirazzjoni.
```

```
Analizza l-istruttura tan-navigazzjoni ta' example.com u applika organizzazzjoni
simili għas-sit tiegħi.
```

```
Iċċekkja r-risponsività fuq il-mobile ta' example.com u żgura li s-sit tiegħi
jkun responsiv bl-istess mod.
```

### Analiżi ta' Tqabbil {#comparison-analysis}

Qabbel diversi siti:

```
Qabbel id-disinji ta' site1.com u site2.com u oħloq disinn
li jgħaqqad l-aħjar elementi tat-tnejn.
```

## Limitazzjonijiet u Konsiderazzjonijiet tal-Għodod {#tool-limitations-and-considerations}

### Limitazzjoni tar-Rata {#rate-limiting}

- L-iscraping huwa limitat bir-rata biex jipprevjeni tagħbija żejda fuq is-server
- Talbiet multipli lill-istess sit jistgħu jiġu mrażżna
- Siti kbar jistgħu jieħdu aktar żmien biex jiġu analizzati

### Preċiżjoni tal-Kontenut {#content-accuracy}

- Kontenut dinamiku jista' ma jinqabadx kompletament
- Kontenut iġġenerat bil-JavaScript jista' jkun mhux komplut
- Data f'ħin reali tista' ma tkunx riflessa
- Xi kontenut jista' jkun wara paywalls

### Kunsiderazzjonijiet Legali u Etiċi {#legal-and-ethical-considerations}

- Irrispetta robots.txt u l-politiki tas-sit
- Tiskrapjax kontenut bid-drittijiet tal-awtur għar-riproduzzjoni
- Uża l-analiżi għall-ispirazzjoni, mhux għall-ikkupjar
- Ivverifika li għandek id-drittijiet biex tuża kontenut estratt
- Segwi t-termini tas-servizz tas-siti analizzati

### Impatt fuq il-Prestazzjoni {#performance-impact}

- L-iscraping ta' siti kbar jista' jieħu ż-żmien
- Scrapes multipli simultanji jistgħu jkunu aktar bil-mod
- Il-konnettività tan-netwerk taffettwa l-veloċità
- Datasets kbar jistgħu jeħtieġu aktar ipproċessar

## L-Aħjar Prattiki {#best-practices}

### L-Użu tal-Analiżi tas-Sit {#using-site-analysis}

1. **Analizza siti multipli** — iġbor ispirazzjoni minn diversi sorsi
2. **Iffoka fuq l-istruttura** — tgħallem mudelli ta' tqassim u organizzazzjoni
3. **Estrai kuluri** — uża paletti tal-kuluri bħala punti tat-tluq
4. **Studja t-tipografija** — identifika kombinazzjonijiet ta' fonts li jogħġbuk
5. **Irrevedi n-navigazzjoni** — ifhem l-organizzazzjoni tal-menus

### Scraping Etiku {#ethical-scraping}

1. **Irrispetta robots.txt** — segwi l-linji gwida tas-sit
2. **Tikkupjax kontenut** — uża l-analiżi għall-ispirazzjoni biss
3. **Ivverifika d-drittijiet** — assigura li tista' tuża kontenut estratt
4. **Attribwixxi s-sorsi** — agħti kreditu lis-sorsi tal-ispirazzjoni
5. **Segwi t-termini** — ikkonforma mat-termini tas-servizz tas-sit

### Massimizzazzjoni tal-Effettività tal-Għodda {#maximizing-tool-effectiveness}

1. **Kun speċifiku** — itlob tipi speċifiċi ta' analiżi
2. **Ipprovdi kuntest** — spjega l-iskop tas-sit tiegħek
3. **Stabbilixxi aspettattivi** — iddeskrivi l-għanijiet tad-disinn tiegħek
4. **Itera** — irfina abbażi tar-riżultati
5. **Għaqqad għodod** — uża għodod multipli għal analiżi komprensiva

## Soluzzjoni tal-Problemi {#troubleshooting}

### Is-Sit Ma Jistax Jiġi Scraped {#site-wont-scrape}

- Iċċekkja jekk is-sit huwiex aċċessibbli pubblikament
- Ivverifika li robots.txt jippermetti scraping
- Ipprova sit differenti
- Iċċekkja l-konnessjoni tal-internet
- Ikkuntattja l-appoġġ jekk il-kwistjoni tippersisti

### Analiżi Mhux Kompluta {#incomplete-analysis}

- Is-sit jista' jkollu kontenut dinamiku
- JavaScript jista' ma jiġix rendered kompletament
- Siti kbar jistgħu jagħmlu timeout
- Ipprova analizza paġni speċifiċi minflok
- Itlob tipi speċifiċi ta' analiżi

### Prestazzjoni Bil-Mod {#slow-performance}

- Siti kbar jieħdu aktar żmien biex jiġu analizzati
- Scrapes multipli simultanji huma aktar bil-mod
- Il-konnettività tan-netwerk taffettwa l-veloċità
- Ipprova waqt sigħat mhux tal-quċċata
- Analizza sezzjonijiet iżgħar l-ewwel

## Dokumentazzjoni Relatata {#related-documentation}

- [Intervista ta' Skoperta](./discovery-interview.md) — iġbor informazzjoni dwar id-disinn
- [Direzzjoni tad-Disinn](./design-direction.md) — irfina d-disinn tiegħek
- [Menus tal-Ospitalità](./hospitality-menus.md) — oħloq paġni tal-menus
