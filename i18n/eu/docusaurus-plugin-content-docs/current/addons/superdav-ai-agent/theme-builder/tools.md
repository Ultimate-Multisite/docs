---
title: Tresnak eta konfigurazioa
sidebar_position: 4
_i18n_hash: 78a3b6062e985598d020eaee28754120
---
# Tresnak eta konfigurazioa

Theme Builder-ek tresna multzo bat erabiltzen du zure WordPress gunea aztertzeko, diseinatzeko eta eraikitzeko. 1.16.0 bertsioan, **sd-ai-agent/site-scrape orain 1. mailako tresna da**, eta, beraz, lehenespenez eskuragarri dago Theme Builder-en. Superdav AI Agent v1.18.0-k, halaber, bereizita banatutako Advanced laguntzaile pakete bat aurkezten du garatzaile fidagarrien lan-fluxuetarako; tresna horiek ez dira WordPress.org nukleo paketearen parte, eta bereiz instalatu eta baimendu behar dira.

## Eskuragarri dauden tresnak

### 1. mailako tresnak (beti eskuragarri)

1. mailako tresnak lehenespenez eskuragarri daude Theme Builder-en, konfigurazio gehigarririk gabe.

#### sd-ai-agent/site-scrape

**Helburua:** Dauden webguneak aztertzea, diseinu-inspirazioa, edukiaren egitura eta funtzionalitatea ateratzeko.

**Gaitasunak:**

- **Webgunearen analisia** — lehiakideen edo inspiraziozko webguneak erauzi eta aztertu
- **Diseinuaren erauzketa** — koloreak, letra-tipoak eta diseinu-ereduak identifikatu
- **Edukiaren egitura** — orrien antolaketa eta hierarkia ulertu
- **Ezaugarrien detekzioa** — pluginak eta funtzionalitatea identifikatu
- **Errendimenduaren analisia** — orriaren abiadura eta optimizazioa egiaztatu
- **SEO analisia** — meta etiketak eta datu egituratuak berrikusi

**Erabilera:**

```
Aztertu example.com-en diseinua eta erabili inspirazio gisa nire gunerako.
```

**Zer erauzten duen:**

- Kolore-paleta eta koloreen erabilera
- Tipografia (letra-tipoak eta tamainak)
- Diseinuaren egitura eta tartekatzea
- Nabigazio-ereduak
- Edukiaren antolaketa
- Irudien eta medien erabilera
- Elementu interaktiboak
- Mugikorretarako egokitasuna

**Mugak:**

- Ezin ditu pasahitzez babestutako guneak erauzi
- robots.txt eta gunearen gidalerroak errespetatzen ditu
- Baliteke eduki dinamikoa ez jasotzea
- JavaScript asko duten guneek analisi mugatua izan dezakete
- Gune handiak aztertzeko denbora gehiago behar izan daiteke

### 2. mailako tresnak (aukerakoak)

2. mailako tresnak eskuragarri daude Theme Builder ezarpenetan esplizituki gaitzen direnean.

#### Analitika aurreratua

Errendimendu-metrika xeheak ematen ditu:

- Orrialdeak kargatzeko denborak
- Core Web Vitals
- SEO puntuazioa
- Irisgarritasun puntuazioa
- Jardunbide egokien puntuazioa

#### Edukiaren optimizatzailea

Honetarako hobekuntzak aztertzen eta iradokitzen ditu:

- Irakurgarritasuna
- SEO optimizazioa
- Gako-hitzen erabilera
- Edukiaren egitura
- Ekintzarako deien kokapena

### 3. mailako tresnak (Premium)

3. mailako tresnek konfigurazio gehigarria edo premium ezaugarriak behar dituzte.

#### AI eduki-sortzailea

Honetarako edukia sortzen du:

- Produktu-deskribapenak
- Zerbitzu-orriak
- Blogeko argitalpenak
- Meta deskribapenak
- Ekintzarako deien testua

#### Diseinu-tresna aurreratuak

Diseinu-gaitasun aurreratuak ematen ditu:

- CSS pertsonalizatuaren sorrera
- Animazioen sorrera
- Elementu interaktiboen diseinua
- Kolore-teoria aurreratua
- Tipografiaren optimizazioa

### Advanced laguntzaile tresnak (pakete bereizia)

Advanced laguntzaile paketea Superdav AI Agent-en nukleo argitalpenetik bereizita banatzen da. Administratzaileek agenteari eragin handiko tresneria erabiltzeko baimena esplizituki ematen dioten garatzaile eta gune-jabe fidagarrien inguruneetarako dago pentsatuta.

Advanced laguntzailearen gaitasunen artean honako hauek egon daitezke:

- **Fitxategi-sistemako tresnak** — ingurune fidagarrietan onartutako fitxategiak ikuskatu eta aldatu
- **Datu-baseko tresnak** — guneko datuak kontsultatu edo eguneratu, esplizituki baimenduta dagoenean
- **WP-CLI tresnak** — WordPress mantentze- eta ikuskapen-komandoak exekutatu
- **REST bidaltzaile tresnak** — erregistratutako REST endpointetara deitu bidalketa-lan-fluxu kontrolatuen bidez
- **Plugin eraikitzaile tresnak** — plugin kodea egituratu eta iteratu
- **Git argazki tresnak** — garatzaile-eragiketa arriskutsuen aurretik argazkiak sortu
- **Erabiltzaile-kudeaketako tresnak** — baimenduta dagoenean erabiltzaile-erregistroak berrikusten edo doitzen lagundu
- **Benchmark tresnak** — garapen-berrikuspenerako errendimendu- edo gaitasun-benchmarkak exekutatu

Ez dokumentatu hauek instalazio guztietarako orokorrean eskuragarri dauden Theme Builder tresna gisa. Advanced laguntzaile paketea instalatuta, gaituta eta administratzaile fidagarrietara mugatuta dagoenean bakarrik daude eskuragarri.

## Tresnen konfigurazioa

### Tresnak gaitzea

Theme Builder-en tresna gehigarriak gaitzeko:

1. Joan **Gratis AI Agent → Settings** atalera
2. Joan **Theme Builder → Tools** atalera
3. Aktibatu/desaktibatu tresnak behar den moduan
4. Gorde ezarpenak

### Tresnen baimenak

Tresna batzuek baimenak behar dituzte:

- **Gunearen erauzketa** — interneterako sarbidea behar du
- **Analitika** — Google Analytics integrazioa behar du
- **Eduki-sorrera** — API gakoak behar ditu
- **Ezaugarri aurreratuak** — baliteke premium harpidetza behar izatea
- **Advanced laguntzaile tresnak** — bereizita banatutako Advanced paketea eta administratzailearen konfiantza esplizitua behar dituzte

### API gakoak eta kredentzialak

Konfiguratu API gakoak behar dituzten tresnetarako:

1. Joan **Gratis AI Agent → Settings → API Keys** atalera
2. Sartu tresna bakoitzaren kredentzialak
3. Probatu konexioa
4. Gorde modu seguruan

### Advanced laguntzaile paketea instalatzea

Advanced laguntzaile paketea WordPress.org nukleo ZIPetik bereizita argitaratzen da. Instalatu soilik argitalpenerako proiektuaren banaketa-kanal ofizialetik, eta gero mugatu sarbidea administratzaile fidagarrietara. Berrikusi giza onarpen-ateak eta git argazkien portaera, produkzio-gune batean fitxategi-sistema, datu-basea, WP-CLI, REST bidaltzailea, plugin eraikitzailea, erabiltzaile-kudeaketa edo benchmark tresnak gaitu aurretik.

## sd-ai-agent/site-scrape erabiltzea

### Oinarrizko erabilera

Eskatu Theme Builder-i webgune bat aztertzeko:

```
Aztertu nire lehiakidearen gunearen diseinua competitor.com helbidean
eta iradoki diseinu-hobekuntzak nire gunerako.
```

### Analisi espezifikoa

Eskatu analisi mota zehatzak:

```
Erauzi example.com-eko kolore-paleta eta erabili inspirazio gisa.
```

```
Aztertu example.com-eko nabigazio-egitura eta aplikatu antzeko
antolaketa nire guneari.
```

```
Egiaztatu example.com-en mugikorretarako egokitasuna eta ziurtatu nire gunea
berdin egokigarria dela.
```

### Konparazio-analisia

Konparatu hainbat gune:

```
Konparatu site1.com eta site2.com-en diseinuak eta sortu diseinu bat
bien elementurik onenak uztartzen dituena.
```

## Tresnen mugak eta kontuan hartzekoak

### Tasa-mugatzea

- Scraping-a tasa-mugatua dago zerbitzariaren gainkarga saihesteko
- Gune berera egindako eskaera anitz moteldu daitezke
- Gune handiak aztertzeko denbora gehiago behar izan dezakete

### Edukiaren zehaztasuna

- Eduki dinamikoa agian ez da guztiz jasoko
- JavaScript bidez errendatutako edukia osatu gabe egon daiteke
- Denbora errealeko datuak agian ez dira islatuko
- Eduki batzuk paywall-en atzean egon daitezke

### Legezko eta etika-kontuak

- Errespetatu robots.txt eta gunearen politikak
- Ez erauzi copyright bidez babestutako edukia erreproduzitzeko
- Erabili analisia inspiraziorako, ez kopiatzeko
- Egiaztatu erauzitako edukia erabiltzeko eskubideak dituzula
- Bete aztertutako guneen zerbitzu-baldintzak

### Errendimenduan eragina

- Gune handien scraping-ak denbora har dezake
- Aldi bereko scraping anitz motelagoak izan daitezke
- Sare-konektibitateak abiaduran eragiten du
- Datu multzo handiek prozesamendu gehiago eska dezakete

## Jardunbide egokiak

### Gunearen analisia erabiltzea

1. **Aztertu gune anitz** — bildu inspirazioa hainbat iturritatik
2. **Jarri arreta egituran** — ikasi diseinu eta antolaketa ereduak
3. **Erauzi koloreak** — erabili kolore-paletak abiapuntu gisa
4. **Aztertu tipografia** — identifikatu gustuko dituzun letra-tipo konbinazioak
5. **Berrikusi nabigazioa** — ulertu menuen antolaketa

### Scraping etikoa

1. **Errespetatu robots.txt** — jarraitu gunearen jarraibideak
2. **Ez kopiatu edukia** — erabili analisia inspiraziorako soilik
3. **Egiaztatu eskubideak** — ziurtatu erauzitako edukia erabil dezakezula
4. **Aitortu iturriak** — eman kreditu inspirazio-iturriei
5. **Bete baldintzak** — bete gunearen zerbitzu-baldintzak

### Tresnaren eraginkortasuna maximizatzea

1. **Izan zehatza** — eskatu analisi mota zehatzak
2. **Eman testuingurua** — azaldu zure gunearen helburua
3. **Ezarri itxaropenak** — deskribatu zure diseinu-helburuak
4. **Iteratu** — findu emaitzen arabera
5. **Konbinatu tresnak** — erabili hainbat tresna analisi osoa egiteko

## Arazoak konpontzea

### Gunea ezin da erauzi

- Egiaztatu gunea publikoki eskuragarri dagoen
- Egiaztatu robots.txt-ek scraping-a baimentzen duen
- Saiatu beste gune batekin
- Egiaztatu interneteko konexioa
- Jarri harremanetan laguntzarekin arazoak jarraitzen badu

### Analisi osatu gabea

- Guneak eduki dinamikoa izan dezake
- JavaScript agian ez da guztiz errendatuko
- Gune handiek denbora-muga gaindi dezakete
- Saiatu orri zehatzak aztertzen
- Eskatu analisi mota zehatzak

### Errendimendu motela

- Gune handiak aztertzeko denbora gehiago behar da
- Aldi bereko scraping anitz motelagoak dira
- Sare-konektibitateak abiaduran eragiten du
- Saiatu puntako orduetatik kanpo
- Aztertu atal txikiagoak lehenik

## Lotutako dokumentazioa

- [Aurkikuntza-elkarrizketa](./discovery-interview.md) — bildu diseinu-informazioa
- [Diseinuaren norabidea](./design-direction.md) — findu zure diseinua
- [Ostalaritza-menuak](./hospitality-menus.md) — sortu menu-orriak
