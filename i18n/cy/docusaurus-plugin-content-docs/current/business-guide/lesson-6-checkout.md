---
title: 'Dysgu 6: Y ffurf cyfrannu'
sidebar_position: 7
_i18n_hash: a5c16cdd9b4e53a69e138df7bb042411
---
# Leses 6: Y Bysbysu (The Signup Experience)

Mae'r ffordd cheddau yw lle mae cyfwriant yn dod i ffurfau. Mae proses cyfrifol neu amrywiol o ddefnyddio yn colli cleiention. Ffordd penodol i'r nichw sy'n siarad eu iaith ac mae'n teimlo fel rhywbeth hanfodol yn cael eu cyflwyno yn cael eu cyfathogh.

## Oedd Rhyddaiwn Ni {#where-we-left-off}

Mae FitSite wedi'i gynnig y templateau a'r cynlluniau wedi'u cyflwyno. Mae'n ddim ond ar hyn o bryd ni'n llwybr y cyfrifolion a'r ffordd cheddau sy'n gwneud benodau fitnes yn cleiention peob.

## Cyfathogh â'r Ffordd Cyfrifol (Understanding the Registration Flow) {#understanding-the-registration-flow}

Mae ffurfau cheddau o Ultimate Multisite yn ffurfau amrywiol-ystafell sy'n cael eu cyflwyno'n llawn. Ar gyfer FitSite, byddwn yn gallu gael ffordd sy'n:

1. Teimlo fel bod wedi cael ei ddatblygu ar gyfer busnesau fitnes
2. Cynllt yn unig yr hyn sydd angen
3. Mae'r cleient yn cael eu cyfathogh i wefan gweithredol yn gyflymffordd allweddol

Gweld [The Registration Flow](/user-guide/configuration/the-registration-flow) ar gyfer y cyflwyniad teknig llawn.

## Cynllunio'r Cheddau FitSite (Designing the FitSite Checkout) {#designing-the-fitsite-checkout}

Nychwch i **Ultimate Multisite > Checkout Forms** a creu ffurf newydd.

### Cyflwyniad 1: Dechrau Cynlluniau (Step 1: Plan Selection) {#step-1-plan-selection}

Ysbryd gyntaf y bydd yn gweld y rheolau, wedi'u cyflwyno mewn termau sy'n eu deall.

- Ymddangos field **Pricing Table**
- Cyflwynio'r ei ddefnyddio i dangos pob tri cynllun FitSite
- Mae’r disgrifiadau cynlluniau ydyn nhw wedi'u ysgrifennu yn y Les 5 yn cael eu cyflwyno yma -- sicr ydynt yn siarad â hanes busnes fitnes, nid gyda phatrwydd teknig

:::tip Mae Iaith Penodol'r Nich sydd angen
"1 GB storage" yw rhywbeth ddim yn gynnwys i'r rheolwr gym. "Everything you need for a professional studio website" yw pob hyn. Ysbryd disgrifiadau cynlluniau mewn iaith y cleient eich siarad.

### Cynllun 2: Dechreu Cymyniadau (Template Selection) {#step-2-template-selection}

Ar ôl dechreu'r plan, mae'r cydig yn cryfalu'r template gyntaf eu cyfrifol.

- Refynwch field **Template Selection**
- Mae’r templateau ar gael wedi'u filtru gan y plan a ddeallwyd (a fydd wedi'i sicrhau yn Lesiwn 5)
- Rhaid i bob template gynnwys llun preiview yn dangos dylun gymharol â ffitnes.

### Cynllun 3: Creu Cyfathogh (Account Creation) {#step-3-account-creation}

Rhaid i hyn fod yn beir. Cynhyrchu dim ond y cyflwyno:

- Adres e-bost
- Cyfrifau
- Enw Studio/business (mae hyn yn dod yn enw eu gartref)

Peidiwch â gofyn am wybodaeth sy nid yw'n angen i chi ar gyfer y cyfrifol. Mae pob field oethach yn gwella'r cyflwynoedd.

### Cynllun 4: Cyflwyno Gartref (Site Setup) {#step-4-site-setup}

- **Site title**: Mae wedi'i cyflwyno o'r enw studio a ddarganfod yn y Cynllun 3
- **Site URL**: Mae wedi'i genyntio'n awtrol gan enw studio (e.e., `ironworks.fitsite.com`)

### Cynllun 5: Pwyllismau (Payment) {#step-5-payment}

- Refynwch field **Payment**
- Mae’r gweithredig pwyllismau eich cyflwynoedd ([Stripe](/user-guide/payment-gateways/stripe)) yn cael ei roi'n ddefnyddio ar gyfer cyfrifol ychwanegau (subscription billing)
- Os ydych chi wedi creu order bumps yn Lesiwn 5, refynwch field **Order Bump** قبل y cynllun pwyllismau

### Cynllun 6: Cyfathogh (Confirmation) {#step-6-confirmation}

- Gwylio'r message cynhyrchu gyda lân gymharol â ffitnes
- Dram yn مثال: "Mae eich gartref ffitnes yn cael ei creu. Byddwch yn cael eich cyffredinol i'ch gartref newydd mewn chwarae o fewn."

## Ymyddu Cyfathogh Cynllun (Adding a Period Selection Toggle) {#adding-a-period-selection-toggle}

Os byddwch yn setefu variatau o pris yn eich planiau (mholodol vs. blynyddol), refwch field **Period Selection** ar ffurf y checyniad i'r cyd-gynnwys i'r cyd-gynnwysi'r cyfnodau. Gweld [Checkout Forms](/user-guide/configuration/checkout-forms#adding-a-period-selection-toggle) am gyfarwyddiadau.

## Cyfluniad y Pwylhau {#configuring-payment}

Os ydych chi nid wedi setefu gwahanter gweithredol:

1. Mawrch i **Ultimate Multisite > Settings > Payment Gateways**
2. Defnyddiwwch y [Stripe setup guide](/user-guide/payment-gateways/stripe) neu'r gweithredol eich hoffter
3. Gwarchwch ffordd checyniad cyfan gyda chyfathrebu test

Gweld [Getting Paid](/user-guide/payment-gateways/getting-paid) am manylion am beth yw ffordd y cyfathregau yn mynd i'r cyfrifol.

## Gwarchu'r Ffordd {#testing-the-flow}

Cynfeirwch ei ddefnyddio'r checyniad test cyfan:

1. Agorwch y ffurf checyniad mewn gwydweli incognito/privat
2. Dechrau'r plan
3. Dewch yn dewis template
4. Creu cyfrifol
5. Gwarchwch y cyfathrebu (defnyddiwch modd test)
6. Cynfeirwch bod y safle wedi'i creu gyda'r template cywir

Gwarchwch ei ddefnyddio:

- [ ] Mae disgrifiadau'r planiau yn glir ac yn gyfrifol i'r ffurf
- [ ] Mae'r preiviau'r template yn dangos dyluniau a ddylid i'r ffurf
- [ ] Mae'r URL y safle yn cael ei gynhyrchu'n dda o'r enw y studio
- [ ] Mae'r prosesau cyfathrebu'n llwyddiannus
- [ ] Mae'r cyd-gynnwyswr yn mynd ar safle gweithredol gyda'r template a ddewiswyd
- [ ] Mae eimelau cynhyrchu yn defnyddio iaith gyfrifol i'r ffurf

## Y FitSite Network Erio {#the-fitsite-network-so-far}

FitSite Network
├── WordPress Multisite (mode subdomain)
├── Ultimate Multisite (configwyd)
├── Hosting gyda SSL gwaith cyflwrdd domenaid
├── Site Templates (Studio Essential, Gym Pro, Fitness Chain)
├── Producaethau (Starter, Growth, Pro + Order Bumps)
├── Cyflwr y Ffylch (Checkout Flow)
│   ├── Dechreu y plan gyda disgrifiadau penodol i nicheau
│   ├── Dechreu y template gyda gwylio fitness
│   ├── Creu cyfrifau minimol
│   ├── Pwylliant trwy Stripe
│   └── Cynallyad gymharu-gynllunol
└── Parioedd ar gyfer brando (dysg nesaf)

## Beth Roeddwn wedi'i Gweithredu Mae'r Dysg Hwnnw {#what-we-built-this-lesson}

- **Ffylch cyflwr llawer-ethau** a ddifynwyd i ddefnyddwyr studio fitness
- **Langa penodol i nicheau** yn llifo drwy gydol y ffordd cyfrifau
- **Friction minimol** -- dim ond ffeiliau hanfodol, ffordd cyflym i weithredol site
- **Pwylliant trwy Stripe** gyda chybediad test
- **Cyflwr penodol o gwbl** o dechreu y plan i weithredol site

---

**Nesaf:** [Dysg 7: Gwneud ei fod eich hun](lesson-7-branding) -- byddwn yn gweithredu'r platforma gyda brando a fyddwn yn cyflwyno FitSite fel brando.
