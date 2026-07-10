---
title: Gwirionedd ystyr y safle
sidebar_position: 18
_i18n_hash: 7470e8d04c1f380b3dca6ba5559b34f5
---
# Faddau Cymorth Skill {#site-specification-skill}

Mae'r **Faddau Cymorth y Safle** (Site Specification skill) yn ffordd sydd wedi'i ddefnyddio i cyflogi'r cymrydau eich safle, y ddefnyddwyr, a'r identiti brand. Mae'r wybodaeth hwn yn cael ei storio mewn memoriad **site_brief** eich safle, gan y gartrefau (agents) sydd wedi'u cyfeirio arall ystodau i rhoi gysylltiadol a chwarae-gwrthwyll.

## Beth yw Faddau Cymorth y Safle? {#what-is-site-specification}

Mae Faddau Cymorth y Safle yn broses o ddefnyddio:

- **Pusill y safle**: Beth sy'n ei wneud eich safle a pam mae'n dod i fod
- **Ddefnyddwyr cyflwyniadol**: Pwy sy'n weithio ar eich safle ac beth angen nhw
- **Identiti brand**: Eich gwynion, ton, a styl gwidu
- **Pusill busnes**: Beth yw cyflogau cyflym i'r safle
- **Struktur cynnwys**: Sut mae eich safle wedi'i ddefnyddio

Mae'r faddau hwn yn dod yn eich **site_brief**, memoriad parhaol a sydd wedi'i ddefnyddio gan y gartrefau i ddeall y context (cyflog) eich safle.

## Pam Rhaid Defnyddio Faddau Cymorth y Safle? {#why-use-site-specification}

### Cyflwyniad yn Cynllunion {#consistency-across-sessions}

Tan site_brief, byddwch yn angen ei ddisgwyl yr unigol ystodau eich safle eto everych i'r amser sydd wedi'i entynnu. gyda hi, mae'r gartrefau yn deall yn gyflym:

- Y cysylltiadau a'r ddefnyddwyr eich safle
- Eich gwynion brand a'r ton
- Eich struktur cynnwys
- Eich busnes cyflogau

### Cynlluniau Bytthrych Mae'n Bytthrych {#better-recommendations}

Mae'r gartrefau yn defnyddio eich site_brief i:

- Cyflwyno ffeithiau sydd wedi'u cysylltu â'r pusill y safle
- Cyflwyno strukturau cynnwys sy'n cyfathogh â'r busnes eich cyflogau
- Cynradd dyluniau sydd wedi'u cysylltu â'r brand eich
- Osgoi’r cynllunio ffeithiau sydd yn anghyffredol

### Cyflwyniad Cyflym {#faster-onboarding}

Gall gartrefau newydd (neu gartrefau mewn ystodau newydd) mynd i ddefnyddio'r site_brief eich safle yn gyflym gan ddarllen eich site_brief yn lle gofyn cwestiynau aclarniadwy.

## Cynnal Faddau Cymorth y Safle {#initiating-site-specification}

### Yn Ystod Cyflwyniad Theme Builder {#during-theme-builder-onboarding}

Mae'r Faddau Cymorth y Safle yn cael ei cychwyn yn awt yn ystod **cyflwyniad Theme Builder**. Mae'r gartref Setup Assistant yn gofyn cwestiynau a llwybr eich site_brief.

### Cychwyn Manwl {#manual-initiation}

Gallwch eich Cyflwyniad y Safesau (Site Specification) unrhyw amser:

```
"Fe wneudaf fy nghwanegiad safesau"
```

neu

```
"Helpwch i ddatblygu breif safesau"
```

## Proses Cyflwyniad y Safesau {#the-site-specification-process}

### Cynllun 1: Gweithredol y Safesau (Site Purpose) {#step-1-site-purpose}

Mae'r agent yn gofyn:

```
Beth yw'r gweithredol prynhawn eich safesau?
- Stafell e-commerce
- Blog neu safesau cynnwys
- Portfoli neu ddarparu
- Cyddefnyddio SaaS (SaaS application)
- Cymuned neu fforwm
- Arall: [disgrifwch]
```

Gallwch ddewis cyfathrebu neu disgrifwch eich gweithredol.

### Cynllun 2: Cyflwyniad y Cyffredin (Target Audience) {#step-2-target-audience}

```
Pwy yw'r cyffredin prynhawn eich safesau?
- Gynraddwyr / cyhoedd ar gyfer y cyfan
- Profesionau busnes
- Ddatblyguwr / benwiolion technolegol
- Estudiants / addysgwr
- Arall: [disgrifwch]

Beth yw'r angenau eu cyffredin?
```

### Cynllun 3: Identiti'r Brif (Brand Identity) {#step-3-brand-identity}

```
Pa beth yw eich gwynion brif?
- Gwynion prynhawn: [cyfathrebu owyn neu cod hex]
- Gwynion ail: [cyfathrebu owyn neu cod hex]
- Gwynion cyflwyniad (Accent color): [optiol]

Sut byddwch yn disgrifio'r ton brif eich brand?
- Profesionol / corfforol
- Chydweithredol / artistig
- Chwarae / casual
- Minimal / modern
- Warm / cyfeillgar
```

### Cynllun 4: Gymddhanau Busnes (Business Goals) {#step-4-business-goals}

```
Pa beth yw cyflogau'r safesau eich bod yn llwyddiannus?
- Creu cyflwyniadau (leads)
- Bawb cynnyrch
- Adfilio cymuned
- Rhaglen gwybodaeth
- Cyflwyno awdurdod (authority)
- Arall: [disgrifwch]

Beth yw'r metr prynhawn eich bod yn llwyddiannus?
- Cyfrannau (Revenue)
- Cynllunwyr benwiolion (User engagement)
- Cyflwyniad cynnwys (Content reach)
- Cyfathriadau (Conversions)
- Arall
```

### Cynllun 5: Estrwydd y Cynnwys (Content Structure) {#step-5-content-structure}

```
Sut mae eich cynnwys yn cael ei ddatblygu?
- Flat (pennol pob cynnwys ar un lefel)
- Hierarchol (categoriadau a cyflwyniadau canlynol)
- Chronolegol (styl blog)
- Dystafol ar gyfer y produs (catalog)
- Arall: [disgrifwch]

Pa ddefnyddwch chi oethau cynnwys?
- Blog posts
- Peidiadau produs
- Casestudiau
- Ddaccu (Documentation)
- Wybyddau (Videos)
- Arall
```

## Memori y safesau eich (Your site_brief Memory) {#your-sitebrief-memory}

Ar ôl gwblhau'r Cyflwyniad y Safesau, mae eich inform ei fod yn cael ei storio fel **site_brief** yn y memori eich agent. Mae hyn yn cadarniad sy'n cynnwys:

## Gwylio a Arnewyddu eich site_brief {#viewing-and-updating-your-sitebrief}

### Gwylio eich site_brief {#view-your-sitebrief}

Gofyn i'r agent:

```
"Wydych chi'n dangos ymlaen fy site_brief"
```

neu

```
"Beth oes gennychu am fy site?"
```

Bydd y agent yn dangos y spesifau sy mae wedi'i storio.

### Arnewyddu eich site_brief {#update-your-sitebrief}

Os yw eich site yn ewro, gallwch arnewyddu ei weithredoedd:

```
"Arnewyddu fy site_brief: rydyn ni'n taro'r cleientau B2B nawr"
```

neu

```
"Atal fy nghyfieithiad y site"
```

Bydd hyn yn gwylio'r Skill Site Specification gyda'ch wybodaeth sy mae gennychu fel نقطa dechrau.

## Sut mae Agentau'n Defnyddio'r site_brief {#how-agents-use-sitebrief}

### Arddylliadau Cynllunio (Design Recommendations) {#design-recommendations}

Pan gweld eich bod eisiau newid y dylun, bydd y agentau yn cyfeirio at eich site_brief:

```
Ti: "Arnewyddu fy nghyfieithiad y gartref cyntaf"
Agent: "Ar gyfer eich site_brief, rydych chi'n taro'r menywod 25-45 oed gyda ton warm a artisanal. Byddaf i creu dylun sy yn parhau'r menywod eich jewyn handmade ac y gwerthau diogel."
```

### Cynrychiadau Faeithiol (Feature Suggestions) {#feature-suggestions}

Mae agentau'n cynrychioli ffeithiau sy'n cynnwys eich cymorthau:

```
Ti: "Beth dylai i mi addasu?"
Agent: "Ar gyfer siop e-commerce sy'n yn rhoi gronfyddolion, byddaf i roi cyfathrebu: programm y gronfyddol, cyd-gyfeiriadau o'r cleient, newsletter email, a chynlluniau cynnyrch."
```

### Estrwy Natur (Content Structure) {#content-structure}

Mae agentau yn cytuno ar gyfer y gystadleu cynnwys yn seiliedig ar eich strwythur:

Rydyn: "Sutaliad i'r blog?"
Aithyn: "Gan rydych chi'n defnyddio catalog o produsau gyda blog, byddai mi roi'r cyfathrebu'r postau yn ôl y cyfathrebu produsau a creu 'cyfarwyddiadau styl' sydd yn dangos produsau aml yn y cyfathrebu."

## Prif Gwybodaeth {#best-practices}

### Byddwch yn Bysbygol {#be-specific}

Er ei fod "gwragedd cyffredinol" yn ddefnyddiol, sylwi ar gyfer y gwragedd gwirioneddol:

- ✓ "Gwraigau o 25-45 oed, sy'n cael eu cyflogi mewn ffermio diogel"
- ✗ "Pob un"

### Cyflwynwch yn Rregolau {#update-regularly}

Gan fod eich safle yn ewro, gwahddwch eich `site_brief`:

- Pan mae'ch chi'n newid y gwragedd eich cyffredinol
- Pan mae'n cael chi'n ychwanegu llinellau produseg newydd
- Pan mae eich identiti brand yn newid
- Pan mae eich cymrydion busnes yn newid

### Defnyddiwch Termynau Cyflwyniadol {#use-consistent-terminology}

Defnyddiwch yr unigolau fel yma arall cyfathrebu:

- ✓ Rhaid i chi'n dweud "fffermio diogel" (nid "proddiad gael diogel" a "prodau gwyn")
- ✓ Mae'n cael ei darn yn gyflwyniadol eich gwragedd fel yma

### Cynnwys Cyfathrebu {#include-context}

Cyflwynwch ddefnyddiol y cyflymau sydd yn helpu'r agenau i weld eich penderfyniadau:

- "Rydyn ni'n cerddedion sy'n charddog yn gwerthfawrodd o hydol"
- "Mae'r gwragedd ein yn ddefnyddio tec yn ddiogel ac mae angen eu cyflogi modern"
- "Rydyn ni'n startup a ddarganfod, felly rhaid i ni chwilio amserau byddol"

## Cyflwyniad â Theme Builder {#relationship-to-theme-builder-onboarding}

Mae'r ffurf Site Specification yn cael ei gysylltu â **cyflwyniad Theme Builder**. Pan fyddwch yn gwblhau'r cyflwyniad, bydd eich `site_brief` yn cael ei creu'n awtomatig gyda'r wybodaeth sydd yn cael eich rhoi.

Gallwch hefyd chwarae Site Specification yn seil-bhwyll i fod eisiau:

- Gyfeiriad eich cyfathrebu ar ôl y setiad cyntaf
- Newid eich `site_brief` gan fod eich safle yn ewro
- Creu cyfathrebu cyffredinol قبل ychwanegu Theme Builder

## Gofalion {#troubleshooting}

**Nid cael ei ddefnyddio'r site_brief fydd**
- Cynfodwch bod y agen yn cael cyffurfio i'r memori
- Mae'n cael eich cyflwyno i'r agen "recall fy `site_brief`"
- Gwylio bod y memori wedi'i chwarae yn eich setiadau

**Rydduw i ddefnyddio'r site\_brief new gyda chwarae newydd**
- Mae'n gofynol i'r agent: "Tgluro fy nghwaneg site brief a entyn yn newydd"
- Yna rhedeg Site Specification eto

**Mae'r agent yn gwneud cyflwyniadau sy'n ddim yn cyfyngu â'r site\_brief fydd yn eu cyflawni**
- Mae'n gofynol i'r agent i "gyweirio fy nghwaneg site brief"
- Gwylio eich site\_brief os oes fod yn anghyfrifol
- Cynrychi ddefnyddiol ychwanegau mewn cyflwyniadau eich bod

## Ymddangosau nesaf {#next-steps}

Ar ôl i ddarganfod eich Site Specification:

1. **Defnyddio Theme Builder**: Creu thymau newydd yn seiliedig ar eich site\_brief
2. **Gwylio'r dylun**: Defnyddio'r ffurf gweithredol Design System Aesthetics i weithredoedd dylun cyffredinol
3. **Cynllun y cynnwys**: Gofyn i'r agentau am gyflwyniadau o ddefnydd cynnwys
4. **Gwarae'r ffeithiau**: Gofyn am ffeithiau sy'n cyfyngu â'ch gymrydion busnes
