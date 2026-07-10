---
title: 'Dysgu 13: Mae''n Gynllunio Atal'
sidebar_position: 14
_i18n_hash: 44dd9e49f54ba924696a428224c5aae0
---
# Les 13: Mae'r Gwaithu Atal {#lesson-13-scaling-up}

Mae gennych eich ffurf gweithredol sydd yn gweithio gyda chwaraeon. Mae’r les hon yn gweld sut i drosglau o weithrediad bach i gweithredol busnes – lladdio'r ffurf, awtomatig y gweithgareddau, a gryno'r cyfrifol ar gyfer un chwaraeon.

## Oedd Rydynniant {#where-we-left-off}

Mae FitSite yn gweithio, mae chwaraeon yn cyflwyno, ac ydych chi'n gwneud y gweithgareddau dyddiol. Mae'r les hon yn sefylltu ar ddefnyddio'r drosglau.

## Ddefnyddiwch eich Cyfrifau {#know-your-numbers}

Ar ôl y lladdio, gwrnwch beth yw eich sefyllti:

### Cyfrifau Allweddol (Key Metrics) {#key-metrics}

- **MRR (Monthly Recurring Revenue)**: Cyfrifol cyflym cynhwysion cyflwyniad cyflym
- **Cyfrif chwaraeon**: Cyfrifol holl gyflwyniadau weithredol
- **ARPU (Average Revenue Per User)**: MRR wedi'i ddelu ar gyfer un benwyllyd
- **Cyfrif chyrdd** (Churn rate): Penygym o chwaraeon sydd yn cael eu tystiolaeth y llwybr each ddifynol
- **LTV (Lifetime Value)**: Cyfrifol cyflym ar gyfer un chwaraeon arall dros ei gyflwyniad cyflym
- **CAC (Customer Acquisition Cost)**: Cyfrifol ar gyfer cael un chwaraeon

### Dram: FitSite gyda 50 Chwaraeon {#example-fitsite-at-50-customers}

| Cyfrif | Gwirionedd |
|--------|-------|
| Chwaraeon | 50 (30 Starter, 15 Growth, 5 Pro) |
| MRR | $4,450 ($1,470 + $1,485 + $995 + $500 order bumps) |
| ARPU | $89/mlynedd |
| Cyfrif chyrdd mlynedd | 4% (2 tystiolaeth/mlynedd) |
| LTV | $89 x 25 mlynedd = $2,225 |

Mae'r cyfrifau hyn yn dweud i chi beth yw eich gweithred. Cyfrif chyrdd uchel? Gyfyrchu cadw. ARPU isel? Gwylio am ysbrydion. CAC uchel? Optimau gyfnodau cyflwyniad.

## Lladdio'r Ffurf (Scaling Infrastructure) {#scaling-infrastructure}

### Pan fyddwch yn lladdio {#when-to-scale}

Lladdwch y ffurf pan:

Mae'r cyflymau lleoliad ddeblygu yn gryf yn gweld.
CPU neu memori y server mae'n gael yn aml yn gael yn fwy o 70% o ddefnyddio.
Rydych chi yn teithio i 100+ safle gweithredol.
Mae angenau o ddeimlad o'r cleiention am y cyflymau yn gryf.

### Sut i Gweithro (Scale) {#how-to-scale}

- **Gweithro vertikal**: Gwella i server mwy fawr (CPU, RAM mwy).
- **Llechau cache (Caching layers)**: Refal Redis/Memcached ar gyfer object caching, a llechau cache ar gyfer cynnwys statig.
- **CDN**: Os ydych chi nid yn defnyddio Cloudflare neu rhywbeth o heibio, refal CDN ar gyfer cyfathrebu statig (static assets).
- **Optimolau y databasu**: Gan fod y rheol yn ddigon, mae cwestiynau databasu'n gael yn ddim yn gyflym. Optimolau y tabliadau, refal indexau, a meddwl am server databasu deddfedig.
- **Parhau i'r cyflwyno (Separate concerns)**: Rhewch y storio media i storio object (S3-compatible), a rheoli e-bost o ddefnyddi serchfemail trawsansional.

### Mynodiad Gweithredol (Hosting Migration) {#hosting-migration}

Os nad oes gan eich host gyflwyno'r gael yn fwy, gwahddwch ar gyfer cynllunio mynodiad:

1. Rheoli y ddefnyddiwch newydd
2. Proffwch yn llwyr gyda chopi o'r rheol eich rhwydwaith
3. Cyflawn y mynodiad yn gyfnodau o ddefnydd lefel
4. Cyfathri DNS gyda TTL bach o'r blaen
5. Cynllunio'r holl fwy gyd-fynd ar ôl y mynodiad

## Parhau i'r Gweithgareddau (Automating Operations) {#automating-operations}

Gan fod eich gresg, mae prosesau manwl yn cael eu gwneud yn bachgen. Automatwch yr hyn y gallwch:

### Webhooks a Zapier {#webhooks-and-zapier}

Defnyddiw [Webhooks](/user-guide/integrations/webhooks) neu [Zapier](/user-guide/integrations/zapier) i'w gweithro:

- **Cyflwyniadau newydd o ddefnyddio** → canlynol Slack neu CRM
- **Bithro cyflwyniadau** → gwthio sicrwin e-bost win-back
- **Failiadau y peidiad** → gweithrediad yn eich tool monitor
- **Cyfathriadau planau** → e-bost chwarae gyda chyfarwyddiad newydd am fäfurfau

### Automata E-bostrefn {#email-automation}

Dei manual e-bostrefniat i sicrwyllau awtomatigol:

- Sicrwyllau cyfluniad (da mae wedi cael ei ddefnyddio yn Lesiwn 8)
- Sicrwyllau ail-gysyllti ar gyfer cydwylwyr anghyffredol
- Cyflwyniadau cyfathrebu pan fydd y cydwylwyr yn teithio i'r hanesau planiau
- Ofrosau atalion am ddefnyddwyr annwsylol ar gyfer cydwylwyr annwsylol

### Automata Cysyllti {#support-automation}

- **Cyfeiriadau can** ar gyfer cwestiynau cyffredinol
- **Auto-replies** i gydnabod y derbyniad o ddeilioi cefnogaeth
- **Gysgyrchion gweithgwr** pan fydd y cydwylwyr yn cyflwyno deilioi sy'n melin â chwaraeirau sy'n syrthio â rhai aros

## Yn ddiogelau Cyfrifol {#increasing-revenue}

Mae ddigwyddiad yn dod o fod yn cael mwy o cydwylwyr. Mae hefyd yn dod o gael mwy o cyfrifol per cydwylwr.

### Cyfathrebu Cydwylwyr Cynllunol {#upselling-existing-customers}

- **Cyfathrebu planiau**: Cyflwyniadau can sy'n dangos ffairiadau Gwaith/Pro i cydwylwyr Starter
- **Mwy o brosesau**: Cyflwyni produsau ychwanegol i cydwylwyr anwsylol drwy e-bostrefn
- **Cysyllti annawl**: Cynnig ddisgyblion amlygu cyflym i cydwylwyr mlyneddol i newid i gystadleu annawl

### Cyfrifol Newydd {#new-revenue-streams}

- **Cyfluniad wedi'i gwneud allan**: Cyfrifol ar gyfer ychwanegu a chysylltu'r safle cydwylwr ar gyfer eu safle
- **Gwasanaethau dylunio cyflog**: Cynnig gwaith dylunio yn ben o'r template
- **Cyfarfynion hyfforddiant**: Cyfarfynion un-un iadwyrol ar gyfer cydwylwyr sydd â'u dymuno help o ddefnyddio
- **Pluginau priwmaidd**: Cynnig pluginau priwmaidd yn ben o'r cyfrifol fel ychwanegau a ddychwelyd (e.e., gwidg gysyllti clasa chwaraeir)

### Yn ddigwyddo Prifion {#raising-prices}

Pan fydd eich platform yn ddiogelio ac yn rhoi werth:

- Cadw cydwylwyr anwsylol ar eu pris cyfyngedig
- Gorffyn prisau ar gyfer newid o ddefnyddwyr newydd
- Cyflwyno cyfathrebu gyda chwaraeirau newydd a gwellaadau

## Gynllhau'r Tîmau {#building-a-team}

Ar gyfyngedig, ni allwch chi gwneud pob hyn yn unig. Y cyflwyniadau cyntaf cyffredinol:

1. **Person y cefnogaeth**: Mae’n gael ei ddefnyddio ar cwestiadau cleientau dyddiol (yn ychwanegol yn ychwanegol yn ychwanegol)
2. **Creacwr cynnwys**: Mae'n ysgrifennu aelodau cyfarwyddyd, blogau, a cynnwys marcomonol
3. **Disgyblwr**: Mae’n gwella templau a creu newydd

Nid oes angen i chi gweithwyr. Mae gweithwyr cymryd a freelancers yn gweithio'n dda ar gyfer busnes platform.

## Cyflwyniadau Croesau {#growth-milestones}

| Cyflwyniad | MRR Arallt | Focws |
|---|---|---|
| 0-25 cleient | $0-$2,500 | Ymddifol y produs a'r bazar, cyfathrebu yn dros y cyflym |
| 25-100 cleient | $2,500-$10,000 | Systematigau gweithgareddau, cynnwys marcomonol |
| 100-250 cleient | $10,000-$25,000 | Cyflogi cefnogaeth, optimi cyflwyniadau, llwybr ychwanegol |
| 250-500 cleient | $25,000-$50,000 | Gynllunio tîmau, gyfeiriadau newydd, ffeithiau priw |
| 500+ cleient | $50,000+ | Cyflwyniad y platform, nicheau cyfathrebu, potential exit |

## Beth Yddimais Ni Byddaiwn Dydydd {#what-we-built-this-lesson}

- **Cyfrannau metref** i ddeall cyfiaweth busnes
- **Cyflwyniad gael y gweithredol** ar gyfer gwella o ddos i chwarae cleiention
- **Strategau awtomatigau** ar gyfer cefnogaeth, e-bost a weithgareddau
- **Tactego cyflogau mewn cyflym** yn ôl ychwanegol i gael cleiention newydd dim ond

- **Cyfarwyddiadau cynllunio tîmau** pan fyddwch chi'n gwella'r weithredol unig
- **Cyflwyniadau croesau** gyda fyny ar gyfer pob stad

---

**Manor Next:** [Lesson 14: What Comes Next](lesson-14-whats-next) -- cyfathrebu yn dros y niche gyntaf.
