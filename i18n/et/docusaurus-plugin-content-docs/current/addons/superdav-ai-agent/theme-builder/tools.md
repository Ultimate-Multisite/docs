---
title: Tööriistad ja konfiguratsioon
sidebar_position: 4
_i18n_hash: 78a3b6062e985598d020eaee28754120
---
# Tööriistad ja konfiguratsioon {#tools-and-configuration}

Theme Builder kasutab tööriistade komplekti, et analüüsida, kujundada ja ehitada sinu WordPress saiti. Versioonis 1.16.0 on **sd-ai-agent/site-scrape nüüd Tier 1 tööriist**, mistõttu on see Theme Builderis vaikimisi saadaval. Superdav AI Agent v1.18.0 tutvustab ka eraldi levitatavat Advanced kaaspaketti usaldusväärsete arendajate töövoogude jaoks; need tööriistad ei kuulu WordPress.org põhipaketti ning need tuleb eraldi installida ja autoriseerida.

## Saadaolevad tööriistad {#available-tools}

### Tier 1 tööriistad (alati saadaval) {#tier-1-tools-always-available}

Tier 1 tööriistad on Theme Builderis vaikimisi saadaval ilma täiendava konfiguratsioonita.

#### sd-ai-agent/site-scrape {#sd-ai-agentsite-scrape}

**Eesmärk:** Analüüsida olemasolevaid veebisaite, et eraldada kujundusinspiratsiooni, sisustruktuuri ja funktsionaalsust.

**Võimalused:**

- **Veebisaidi analüüs** — kraabi ja analüüsi konkurentide või inspiratsiooniks olevaid veebisaite
- **Kujunduse eraldamine** — tuvasta värvid, fondid ja paigutusmustrid
- **Sisustruktuur** — mõista lehtede korraldust ja hierarhiat
- **Funktsioonide tuvastamine** — tuvasta pluginad ja funktsionaalsus
- **Jõudluse analüüs** — kontrolli lehe kiirust ja optimeeritust
- **SEO analüüs** — vaata üle meta-sildid ja struktureeritud andmed

**Kasutus:**

```
Analüüsi example.com kujundust ja kasuta seda minu saidi inspiratsioonina.
```

**Mida see eraldab:**

- Värvipalett ja värvide kasutus
- Tüpograafia (fondid ja suurused)
- Paigutuse struktuur ja vahed
- Navigatsioonimustrid
- Sisu korraldus
- Piltide ja meedia kasutus
- Interaktiivsed elemendid
- Mobiilne kohanduvus

**Piirangud:**

- Ei saa kraapida parooliga kaitstud saite
- Järgib robots.txt faili ja saidi reegleid
- Ei pruugi jäädvustada dünaamilist sisu
- JavaScripti-rohketel saitidel võib analüüs olla piiratud
- Suurte saitide analüüsimine võib võtta kauem aega

### Tier 2 tööriistad (valikulised) {#tier-2-tools-optional}

Tier 2 tööriistad on saadaval, kui need on Theme Builderi seadetes selgesõnaliselt lubatud.

#### Täpsem analüütika {#advanced-analytics}

Pakub üksikasjalikke jõudlusmõõdikuid:

- Lehe laadimisajad
- Core Web Vitals
- SEO skoor
- Ligipääsetavuse skoor
- Parimate tavade skoor

#### Sisu optimeerija {#content-optimizer}

Analüüsib ja soovitab parandusi järgmistele:

- Loetavus
- SEO optimeerimine
- Märksõnade kasutus
- Sisustruktuur
- Üleskutsete paigutus

### Tier 3 tööriistad (Premium) {#tier-3-tools-premium}

Tier 3 tööriistad nõuavad täiendavat konfiguratsiooni või premium-funktsioone.

#### AI sisugeneraator {#ai-content-generator}

Genereerib sisu järgmiste jaoks:

- Tootekirjeldused
- Teenuste lehed
- Blogipostitused
- Meta-kirjeldused
- Üleskutsete tekst

#### Täpsemad kujundustööriistad {#advanced-design-tools}

Pakub täpsemaid kujundusvõimalusi:

- Kohandatud CSS-i genereerimine
- Animatsioonide loomine
- Interaktiivsete elementide kujundus
- Täpsem värviteooria
- Tüpograafia optimeerimine

### Advanced kaastööriistad (eraldi pakett) {#advanced-companion-tools-separate-package}

Advanced kaasapaketti levitatakse Superdav AI Agent põhi-väljalaskest eraldi. See on mõeldud usaldusväärsetele arendajate ja saidiomanike keskkondadele, kus administraatorid lubavad agentil selgesõnaliselt kasutada suure mõjuga tööriistu.

Advanced kaasvõimalused võivad hõlmata järgmist:

- **Failisüsteemi tööriistad** — kontrolli ja muuda usaldusväärsetes keskkondades heakskiidetud faile
- **Andmebaasitööriistad** — päri või uuenda saidi andmeid, kui see on selgesõnaliselt autoriseeritud
- **WP-CLI tööriistad** — käivita WordPress hooldus- ja kontrollikäske
- **REST dispatcheri tööriistad** — kutsu registreeritud REST endpoint'e kontrollitud dispatch-töövoogude kaudu
- **Plugin builder tööriistad** — loo karkass ja itereeri plugina koodi
- **Git snapshot tööriistad** — loo snapshot'id enne riskantseid arendustoiminguid
- **Kasutajahaldustööriistad** — aita üle vaadata või kohandada kasutajakirjeid seal, kus see on lubatud
- **Võrdlustestide tööriistad** — käivita jõudluse või võimekuse võrdlusteste arenduse ülevaatuseks

Ära dokumenteeri neid kui üldiselt saadaval olevaid Theme Builderi tööriistu iga installatsiooni jaoks. Need on saadaval ainult siis, kui Advanced kaasapakett on installitud, lubatud ja piiratud usaldusväärsete administraatoritega.

## Tööriistade konfiguratsioon {#tool-configuration}

### Tööriistade lubamine {#enabling-tools}

Täiendavate tööriistade lubamiseks Theme Builderis:

1. Liigu jaotisse **Gratis AI Agent → Settings**
2. Mine jaotisse **Theme Builder → Tools**
3. Lülita tööriistad vajaduse järgi sisse/välja
4. Salvesta seaded

### Tööriistade õigused {#tool-permissions}

Mõned tööriistad nõuavad õigusi:

- **Saidi kraapimine** — nõuab internetiühendust
- **Analüütika** — nõuab Google Analyticsi integratsiooni
- **Sisu genereerimine** — nõuab API võtmeid
- **Täiustatud funktsioonid** — võivad nõuda premium-tellimust
- **Advanced kaastööriistad** — nõuavad eraldi levitatavat Advanced paketti ja administraatori selgesõnalist usaldust

### API võtmed ja mandaadid {#api-keys-and-credentials}

Konfigureeri API võtmed tööriistade jaoks, mis neid nõuavad:

1. Mine jaotisse **Gratis AI Agent → Settings → API Keys**
2. Sisesta iga tööriista mandaadid
3. Testi ühendust
4. Salvesta turvaliselt

### Advanced kaasapaketi installimine {#installing-the-advanced-companion-package}

Advanced kaasapakett avaldatakse WordPress.org põhi-ZIP-ist eraldi. Installi see ainult väljalaske ametlikust projekti levituskanalist ja piira seejärel ligipääs usaldusväärsete administraatoritega. Enne failisüsteemi, andmebaasi, WP-CLI, REST dispatcheri, plugin builderi, kasutajahaldus- või võrdlustestide tööriistade lubamist tootmissaidil vaata üle inimese kinnituse kontrollpunktid ja git snapshot'i käitumine.

## sd-ai-agent/site-scrape kasutamine {#using-sd-ai-agentsite-scrape}

### Põhikasutus {#basic-usage}

Palu Theme Builderil veebisaiti analüüsida:

```
Analüüsi minu konkurendi saidi kujundust aadressil competitor.com
ja soovita minu saidile kujundusparandusi.
```

### Konkreetne analüüs {#specific-analysis}

Küsi konkreetseid analüüsitüüpe:

```
Eralda example.com värvipalett ja kasuta seda inspiratsioonina.
```

```
Analüüsi example.com navigatsioonistruktuuri ja rakenda sarnast
korraldust minu saidile.
```

```
Kontrolli example.com mobiilset kohanduvust ja taga, et minu sait
oleks sama kohanduv.
```

### Võrdlev analüüs {#comparison-analysis}

Võrdle mitut saiti:

```
Võrdle site1.com ja site2.com kujundusi ning loo kujundus,
mis ühendab mõlema parimad elemendid.
```

## Tööriistade piirangud ja kaalutlused {#tool-limitations-and-considerations}

### Kiiruspiirangud {#rate-limiting}

- Scraping on kiirusepiiranguga, et vältida serveri ülekoormust
- Mitu päringut samale saidile võidakse aeglustada
- Suurte saitide analüüsimine võib võtta kauem aega

### Sisu täpsus {#content-accuracy}

- Dünaamilist sisu ei pruugita täielikult jäädvustada
- JavaScriptiga renderdatud sisu võib olla puudulik
- Reaalajas andmed ei pruugi kajastuda
- Osa sisust võib olla maksumüüri taga

### Õiguslikud ja eetilised kaalutlused {#legal-and-ethical-considerations}

- Austa robots.txt-faili ja saidi eeskirju
- Ära scrape’i autoriõigusega kaitstud sisu taasesitamiseks
- Kasuta analüüsi inspiratsiooniks, mitte kopeerimiseks
- Veendu, et sul on õigused väljavõetud sisu kasutamiseks
- Järgi analüüsitavate saitide teenusetingimusi

### Mõju jõudlusele {#performance-impact}

- Suurte saitide scraping võib võtta aega
- Mitu samaaegset scrape’i võivad olla aeglasemad
- Võrguühendus mõjutab kiirust
- Suured andmekogumid võivad vajada rohkem töötlemist

## Parimad tavad {#best-practices}

### Saidianalüüsi kasutamine {#using-site-analysis}

1. **Analüüsi mitut saiti** — kogu inspiratsiooni mitmest allikast
2. **Keskendu struktuurile** — õpi paigutuse ja korralduse mustreid
3. **Eralda värvid** — kasuta värvipalette lähtepunktidena
4. **Uuri tüpograafiat** — tuvasta fondikombinatsioonid, mis sulle meeldivad
5. **Vaata üle navigeerimine** — mõista menüü korraldust

### Eetiline scraping {#ethical-scraping}

1. **Austa robots.txt-faili** — järgi saidi juhiseid
2. **Ära kopeeri sisu** — kasuta analüüsi ainult inspiratsiooniks
3. **Kontrolli õigusi** — veendu, et saad väljavõetud sisu kasutada
4. **Viita allikatele** — tunnusta inspiratsiooniallikaid
5. **Järgi tingimusi** — täida saidi teenusetingimusi

### Tööriista tõhususe maksimeerimine {#maximizing-tool-effectiveness}

1. **Ole konkreetne** — küsi konkreetseid analüüsitüüpe
2. **Anna kontekst** — selgita oma saidi eesmärki
3. **Sea ootused** — kirjelda oma disainieesmärke
4. **Korda ja täpsusta** — täiusta tulemuste põhjal
5. **Kombineeri tööriistu** — kasuta põhjalikuks analüüsiks mitut tööriista

## Tõrkeotsing {#troubleshooting}

### Saiti ei saa scrape’ida {#site-wont-scrape}

- Kontrolli, kas sait on avalikult ligipääsetav
- Veendu, et robots.txt lubab scrapingut
- Proovi teist saiti
- Kontrolli internetiühendust
- Kui probleem püsib, võta ühendust toega

### Puudulik analüüs {#incomplete-analysis}

- Saidil võib olla dünaamiline sisu
- JavaScript ei pruugi täielikult renderduda
- Suured saidid võivad aeguda
- Proovi selle asemel analüüsida konkreetseid lehti
- Küsi konkreetseid analüüsitüüpe

### Aeglane jõudlus {#slow-performance}

- Suurte saitide analüüsimine võtab kauem aega
- Mitu samaaegset scrape’i on aeglasemad
- Võrguühendus mõjutab kiirust
- Proovi väljaspool tipptunde
- Analüüsi esmalt väiksemaid jaotisi

## Seotud dokumentatsioon {#related-documentation}

- [Avastusintervjuu](./discovery-interview.md) — kogu disainiteavet
- [Disainisuund](./design-direction.md) — täiusta oma disaini
- [Majutusasutuste menüüd](./hospitality-menus.md) — loo menüülehti
