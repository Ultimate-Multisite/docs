---
title: Offer a Ffurfweddiad
sidebar_position: 4
_i18n_hash: 78a3b6062e985598d020eaee28754120
---
# Offer a Ffurfweddiad {#tools-and-configuration}

Mae Theme Builder yn defnyddio set o offer i ddadansoddi, dylunio, ac adeiladu eich safle WordPress. Yn fersiwn 1.16.0, **mae sd-ai-agent/site-scrape bellach yn offeryn Haen 1**, gan ei wneud ar gael yn ddiofyn yn Theme Builder. Mae Superdav AI Agent v1.18.0 hefyd yn cyflwyno pecyn cydymaith Advanced a ddosberthir ar wahân ar gyfer llifoedd gwaith datblygwyr dibynadwy; nid yw’r offer hynny’n rhan o becyn craidd WordPress.org ac mae’n rhaid eu gosod a’u hawdurdodi ar wahân.

## Offer Sydd Ar Gael {#available-tools}

### Offer Haen 1 (Ar Gael Bob Amser) {#tier-1-tools-always-available}

Mae offer Haen 1 ar gael yn ddiofyn yn Theme Builder heb unrhyw ffurfweddiad ychwanegol.

#### sd-ai-agent/site-scrape {#sd-ai-agentsite-scrape}

**Diben:** Dadansoddi gwefannau presennol i echdynnu ysbrydoliaeth dylunio, strwythur cynnwys, ac ymarferoldeb.

**Galluoedd:**

- **Dadansoddi gwefan** — sgrapio a dadansoddi gwefannau cystadleuwyr neu ysbrydoliaeth
- **Echdynnu dylunio** — adnabod lliwiau, ffontiau, a phatrymau cynllun
- **Strwythur cynnwys** — deall trefniadaeth tudalennau a hierarchaeth
- **Canfod nodweddion** — adnabod plugins ac ymarferoldeb
- **Dadansoddi perfformiad** — gwirio cyflymder tudalen ac optimeiddio
- **Dadansoddi SEO** — adolygu tagiau meta a data strwythuredig

**Defnydd:**

```
Dadansoddwch ddyluniad example.com a’i ddefnyddio fel ysbrydoliaeth ar gyfer fy safle.
```

**Beth Mae’n Ei Echdynnu:**

- Palet lliwiau a defnydd o liwiau
- Teipograffeg (ffontiau a meintiau)
- Strwythur cynllun a bylchu
- Patrymau llywio
- Trefniadaeth cynnwys
- Defnydd o ddelweddau a chyfryngau
- Elfennau rhyngweithiol
- Ymatebolrwydd symudol

**Cyfyngiadau:**

- Ni all sgrapio safleoedd sydd wedi’u diogelu gan gyfrinair
- Yn parchu robots.txt a pholisïau safle
- Efallai na fydd yn cipio cynnwys deinamig
- Efallai y bydd gan safleoedd sy’n drwm ar JavaScript ddadansoddiad cyfyngedig
- Efallai y bydd safleoedd mawr yn cymryd mwy o amser i’w dadansoddi

### Offer Haen 2 (Dewisol) {#tier-2-tools-optional}

Mae offer Haen 2 ar gael pan gânt eu galluogi’n benodol yng ngosodiadau Theme Builder.

#### Dadansoddeg Uwch {#advanced-analytics}

Yn darparu metrigau perfformiad manwl:

- Amseroedd llwytho tudalennau
- Core Web Vitals
- Sgôr SEO
- Sgôr hygyrchedd
- Sgôr arferion gorau

#### Optimeiddiwr Cynnwys {#content-optimizer}

Yn dadansoddi ac yn awgrymu gwelliannau ar gyfer:

- Darllenadwyedd
- Optimeiddio SEO
- Defnydd o allweddeiriau
- Strwythur cynnwys
- Lleoliad galwad i weithredu

### Offer Haen 3 (Premiwm) {#tier-3-tools-premium}

Mae offer Haen 3 yn gofyn am ffurfweddiad ychwanegol neu nodweddion premiwm.

#### Cynhyrchydd Cynnwys AI {#ai-content-generator}

Yn cynhyrchu cynnwys ar gyfer:

- Disgrifiadau cynnyrch
- Tudalennau gwasanaeth
- Postiadau blog
- Disgrifiadau meta
- Copi galwad i weithredu

#### Offer Dylunio Uwch {#advanced-design-tools}

Yn darparu galluoedd dylunio uwch:

- Cynhyrchu CSS personol
- Creu animeiddiadau
- Dylunio elfennau rhyngweithiol
- Damcaniaeth lliwiau uwch
- Optimeiddio teipograffeg

### Offer Cydymaith Advanced (Pecyn Ar Wahân) {#advanced-companion-tools-separate-package}

Mae’r pecyn cydymaith Advanced yn cael ei ddosbarthu ar wahân i ryddhad craidd Superdav AI Agent. Fe’i bwriedir ar gyfer amgylcheddau datblygwyr a pherchnogion safleoedd dibynadwy lle mae gweinyddwyr yn caniatáu’n benodol i’r agent ddefnyddio offeru effaith uchel.

Gall galluoedd cydymaith Advanced gynnwys:

- **Offer system ffeiliau** — archwilio ac addasu ffeiliau cymeradwy mewn amgylcheddau dibynadwy
- **Offer cronfa ddata** — ymholi neu ddiweddaru data safle pan gaiff ei awdurdodi’n benodol
- **Offer WP-CLI** — rhedeg gorchmynion cynnal a chadw ac archwilio WordPress
- **Offer dosbarthwr REST** — galw endpoints REST cofrestredig drwy lifoedd gwaith dosbarthu rheoledig
- **Offer adeiladu plugin** — sgaffaldio ac ailadrodd ar god plugin
- **Offer ciplun Git** — creu cipluniau cyn gweithrediadau datblygwr peryglus
- **Offer rheoli defnyddwyr** — helpu i adolygu neu addasu cofnodion defnyddwyr lle caniateir hynny
- **Offer meincnodi** — rhedeg meincnodau perfformiad neu allu ar gyfer adolygiad datblygu

Peidiwch â dogfennu’r rhain fel offer Theme Builder sydd ar gael yn gyffredinol ar gyfer pob gosodiad. Maent ar gael dim ond pan fo’r pecyn cydymaith Advanced wedi’i osod, wedi’i alluogi, ac wedi’i gyfyngu i weinyddwyr dibynadwy.

## Ffurfweddiad Offer {#tool-configuration}

### Galluogi Offer {#enabling-tools}

I alluogi offer ychwanegol yn Theme Builder:

1. Ewch i **Gratis AI Agent → Gosodiadau**
2. Ewch i **Theme Builder → Offer**
3. Toglo offer ymlaen/i ffwrdd yn ôl yr angen
4. Cadw gosodiadau

### Caniatâd Offer {#tool-permissions}

Mae rhai offer yn gofyn am ganiatâd:

- **Sgrapio safle** — yn gofyn am fynediad i’r rhyngrwyd
- **Dadansoddeg** — yn gofyn am integreiddiad Google Analytics
- **Cynhyrchu cynnwys** — yn gofyn am allweddi API
- **Nodweddion uwch** — efallai’n gofyn am danysgrifiad premiwm
- **Offer cydymaith Advanced** — yn gofyn am y pecyn Advanced a ddosberthir ar wahân ac ymddiriedaeth benodol gan weinyddwr

### Allweddi API a Manylion Dilysu {#api-keys-and-credentials}

Ffurfweddwch allweddi API ar gyfer offer sy’n gofyn amdanynt:

1. Ewch i **Gratis AI Agent → Gosodiadau → Allweddi API**
2. Rhowch fanylion dilysu ar gyfer pob offeryn
3. Profi cysylltiad
4. Cadw’n ddiogel

### Gosod y Pecyn Cydymaith Advanced {#installing-the-advanced-companion-package}

Rhyddheir y pecyn cydymaith Advanced ar wahân i ZIP craidd WordPress.org. Gosodwch ef dim ond o sianel ddosbarthu swyddogol y prosiect ar gyfer y rhyddhad, yna cyfyngwch fynediad i weinyddwyr dibynadwy. Adolygwch byrth cymeradwyo dynol ac ymddygiad ciplun git cyn galluogi offer system ffeiliau, cronfa ddata, WP-CLI, dosbarthwr REST, adeiladu plugin, rheoli defnyddwyr, neu feincnodi ar safle cynhyrchu.

## Defnyddio sd-ai-agent/site-scrape {#using-sd-ai-agentsite-scrape}

### Defnydd Sylfaenol {#basic-usage}

Gofynnwch i Theme Builder ddadansoddi gwefan:

```
Dadansoddwch ddyluniad safle fy nghystadleuydd yn competitor.com
ac awgrymwch welliannau dylunio ar gyfer fy safle.
```

### Dadansoddiad Penodol {#specific-analysis}

Gofynnwch am fathau penodol o ddadansoddiad:

```
Echdynnwch y palet lliwiau o example.com a’i ddefnyddio fel ysbrydoliaeth.
```

```
Dadansoddwch strwythur llywio example.com a chymhwyswch drefniadaeth
debyg i fy safle.
```

```
Gwiriwch ymatebolrwydd symudol example.com a sicrhewch fod fy safle
yr un mor ymatebol.
```

### Dadansoddiad Cymharu {#comparison-analysis}

Cymharwch sawl safle:

```
Cymharwch ddyluniadau site1.com a site2.com a chreu dyluniad
sy’n cyfuno elfennau gorau’r ddau.
```

## Cyfyngiadau ac Ystyriaethau Offer {#tool-limitations-and-considerations}

### Cyfyngu Cyfradd {#rate-limiting}

- Mae sgrapio wedi’i gyfyngu o ran cyfradd i atal gorlwytho’r gweinydd
- Gall ceisiadau lluosog i’r un safle gael eu harafu
- Gall safleoedd mawr gymryd mwy o amser i’w dadansoddi

### Cywirdeb Cynnwys {#content-accuracy}

- Efallai na chaiff cynnwys deinamig ei gipio’n llawn
- Gall cynnwys a rendrwyd gan JavaScript fod yn anghyflawn
- Efallai na chaiff data amser real ei adlewyrchu
- Gall rhywfaint o gynnwys fod y tu ôl i waliau talu

### Ystyriaethau Cyfreithiol a Moesegol {#legal-and-ethical-considerations}

- Parchwch robots.txt a pholisïau’r safle
- Peidiwch â sgrapio cynnwys hawlfraint ar gyfer ei atgynhyrchu
- Defnyddiwch ddadansoddiad ar gyfer ysbrydoliaeth, nid copïo
- Gwiriwch fod gennych hawliau i ddefnyddio cynnwys a echdynnwyd
- Dilynwch delerau gwasanaeth y safleoedd a ddadansoddwyd

### Effaith ar Berfformiad {#performance-impact}

- Gall sgrapio safleoedd mawr gymryd amser
- Gall sgrapiadau lluosog ar yr un pryd fod yn arafach
- Mae cysylltedd rhwydwaith yn effeithio ar gyflymder
- Gall setiau data mawr ofyn am fwy o brosesu

## Arferion Gorau {#best-practices}

### Defnyddio Dadansoddiad Safle {#using-site-analysis}

1. **Dadansoddwch sawl safle** — casglwch ysbrydoliaeth o sawl ffynhonnell
2. **Canolbwyntiwch ar strwythur** — dysgwch batrymau cynllun a threfniadaeth
3. **Echdynnwch liwiau** — defnyddiwch baletau lliw fel mannau cychwyn
4. **Astudiwch deipograffeg** — nodwch gyfuniadau ffontiau rydych yn eu hoffi
5. **Adolygwch lywio** — deallwch drefniadaeth dewislenni

### Sgrapio Moesegol {#ethical-scraping}

1. **Parchwch robots.txt** — dilynwch ganllawiau’r safle
2. **Peidiwch â chopïo cynnwys** — defnyddiwch ddadansoddiad ar gyfer ysbrydoliaeth yn unig
3. **Gwiriwch hawliau** — sicrhewch y gallwch ddefnyddio cynnwys a echdynnwyd
4. **Priodolwch ffynonellau** — cydnabyddwch ffynonellau ysbrydoliaeth
5. **Dilynwch delerau** — cydymffurfiwch â thelerau gwasanaeth y safle

### Mwyafu Effeithiolrwydd Offer {#maximizing-tool-effectiveness}

1. **Byddwch yn benodol** — gofynnwch am fathau penodol o ddadansoddiad
2. **Darparwch gyd-destun** — eglurwch bwrpas eich safle
3. **Gosodwch ddisgwyliadau** — disgrifiwch eich nodau dylunio
4. **Ailadroddwch** — mireiniwch ar sail canlyniadau
5. **Cyfunwch offer** — defnyddiwch sawl offeryn ar gyfer dadansoddiad cynhwysfawr

## Datrys Problemau {#troubleshooting}

### Ni Fydd y Safle’n Sgrapio {#site-wont-scrape}

- Gwiriwch a yw’r safle ar gael yn gyhoeddus
- Gwiriwch fod robots.txt yn caniatáu sgrapio
- Rhowch gynnig ar safle gwahanol
- Gwiriwch y cysylltiad rhyngrwyd
- Cysylltwch â chymorth os yw’r broblem yn parhau

### Dadansoddiad Anghyflawn {#incomplete-analysis}

- Gall fod gan y safle gynnwys deinamig
- Efallai na chaiff JavaScript ei rendro’n llawn
- Gall safleoedd mawr amseru allan
- Ceisiwch ddadansoddi tudalennau penodol yn lle hynny
- Gofynnwch am fathau penodol o ddadansoddiad

### Perfformiad Araf {#slow-performance}

- Mae safleoedd mawr yn cymryd mwy o amser i’w dadansoddi
- Mae sgrapiadau lluosog ar yr un pryd yn arafach
- Mae cysylltedd rhwydwaith yn effeithio ar gyflymder
- Ceisiwch yn ystod oriau llai prysur
- Dadansoddwch adrannau llai yn gyntaf

## Dogfennaeth Gysylltiedig {#related-documentation}

- [Cyfweliad Darganfod](./discovery-interview.md) — casglu gwybodaeth ddylunio
- [Cyfeiriad Dylunio](./design-direction.md) — mireinio eich dyluniad
- [Dewislenni Lletygarwch](./hospitality-menus.md) — creu tudalennau dewislenni
