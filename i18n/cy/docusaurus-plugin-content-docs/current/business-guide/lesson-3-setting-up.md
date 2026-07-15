---
title: 'Dysgu 3: Ymddangos eich rheol'
sidebar_position: 4
_i18n_hash: 4bffe2f3ba68d1a58bfc32d6b0a3c5c7
---
# Lesiad 3: Ymddio'r Rheolwrch

Mae hi'n amser i ddatblygu. Yn ystafell hwn Ultimate Multisite ac yn cyflwyno'r gweithrediad cynhwysedd o FitSite. Mae pob penderfyniad yma wedi'i gwneud gyda'r niche o ffitnes yn ôl.

## Oes yma dodai {#where-we-left-off}

Rydyn ni'n gwneud ystudiadau ffitnes fel niche a chwilio am y cyfle. Mae'n amser i weithio â'r iddo fel platform sy'n gweithredu.

## Cynrychioli eich host {#choosing-your-hosting}

Mae eich dechrau host yn bwysig iawn ar gyfer platform niche na ar gyfer golwg unig. Nid eich bod yn host un safle -- ydych chi'n host rheolwrch sydd yn dros y cyfathrebu i ddau neu fwy o safleoedd.

### Bethau i chwilio am {#what-to-look-for}

- **Cynllunio WordPress Multisite**: Nid pob host yn gael ei wneud'r multisite'n dda
- **Wildcard SSL**: Mae hyn yn hanfodol ar gyfer rheolwrch sydd ar adeiladau cyfathrebu (subdomain)
- **Rhyddiaethau allweddol (Scalable resources)**: Mae angen i chi gael lle i'r ddefnyddio heb ei chwarae
- **Cynllunio Ultimate Multisite**: Mae mapiad domain a SSL'n awtomatig yn gwneud weithrediadau operaciool mawr

### Cyfathrebu arallangol {#recommended-approach}

Dechrau host o'r llyfr [Compatible Providers](/user-guide/host-integrations/closte). Mae'r hyn yn cael eu gwylio gyda Ultimate Multisite ac yn rhoi'r cynlluniau sydd angen i chi ar gyfer mapiad domain a awtomatig SSL.

Ar FitSite, byddwn yn defnyddio cynllunio subdomain. Mae hyn yn ei golygu bod safleoedd cyddee'n dangos yn ewyl `studioname.fitsite.com` cyn iddynt ychwanegu eu domain yn ddefnyddiol.

## Ystafell WordPress Multisite {#installing-wordpress-multisite}

Os ydych chi nid oes gennych stafell WordPress Multisite:

1. Installwch WordPress ar eich cyddefnyddiwr hosting.
2. Cyflawni'r cyfarwyddiadau [Sut i Gofio WordPress Multisite](/user-guide/getting-started/how-to-install-wordpress-multisite).
3. Dewch yn oed **subdomain** i'r cyfathrebu pan cael eich cyflwyno.

:::tip Pam am Subdomains?
Mae subdomains yn rhoi ei ffordd penodol i'r safle o'r cyddefnyddwyr eu hunain (`studio.fitsite.com`) yn lle llwybr (`fitsite.com/studio`). Mae hyn yn ffurfiol hơn ar gyfer eich cyddefnyddwyr ac yn dod i'r ddeall ychwanegau permalink. Gweld [Ultimate Multisite 101](/user-guide/getting-started/ultimate-multisite-101) am cyflwyniad cyffredinol.
:::

## Cyflawni Ultimate Multisite {#installing-ultimate-multisite}

Cyflawni'r cyfarwyddiadau [Cyflawni Ultimate Multisite](/user-guide/getting-started/installing-ultimate-multisite) i:

1. Rhyngweidiwch a chwarae'r plugin yn gyffredinol
2. Chwarae'r [Setup Wizard](/user-guide/getting-started/multisite-setup-wizard)

Wrth y cyflwyniad, gparu â FitSite niche:

- **Cyfrifau**: Rheoli i'r cyfrifau sydd yn cael eu defnyddio gan eich cyddefnyddwyr studio fithrin.
- **Enw cwmni**: "FitSite" (neu enw brand eich cael).
- **Logo cwmni**: Rhyngweidiwch eich logo brand -- mae hyn yn dangos ar gyfer cyfathrebu a e-bost.

## Cyflawni ar gyfer y Niche Fithrin {#configuring-for-the-fitness-niche}

 gyda Ultimate Multisite wedi'i chwarae, gwneud y dechrau cyflwyniadau gan gynnig:

### Cyddefnyddiau Cyffredinol {#general-settings}

Mynolwch i **Ultimate Multisite > Settings** a rheoli:

- **Enwyl yr adeilad**: FitSite
- **Grolau cyffredinol**: Administrator -- mae angen i'r rheolwyr ystudiadau fithio gyda chylid o ddefnyddio'r cynnwys y site eu.

### Cynhyrchu E-bostref (Email Configuration) {#email-configuration}

Dylai eich e-bostrefau system sydd yn siarad y iaith o'ch niche. Mawrchwch i **Ultimate Multisite > Settings > Emails** a chynllunwch:

- Rhoddwyd yr iaith am y "site new" yn rhyfedd gyda phithio
- Prifol am y cyflwyniad: "Mae eich gwefan fithio yn barod"
- Prifol am y bodgelc: Cyfeiriad eu studio, clasau, a sut i entynnu gyda'u site fithio

Byddwn yn gwella hyn yn fwy yn Ysgrifennu 8 (Customer Onboarding), ond mae setiad y ton ar hyn o bryd yn sicr bod y cyfrannau test sydd wedi'u cyflwyno yn tebyg i'r niche.

### Cynhyrchu Ddwyllt (Domain Configuration) {#domain-configuration}

Os ydych chi'n defnyddio gynnig gweithredol sydd yn gywir, rhannwch y mappio dwyllt ar hyn o bryd:

1. Mawrchwch i **Ultimate Multisite > Settings > Domain Mapping**
2. Defnyddiwch y cyfarwyddiadau cysylltiad ar gyfer eich gynnig penodol
3. Gwylio bod y subsaites new yn cael SSL'rallt yn awtomatig

Mae hyn yn sicru bod bydd pob hyn yn gweithio o'r dechrau i'r diwedd pan byddwn yn creu templau a site test yn y cyflwyniad nesaf.

## Y FitSite Network Erioedd {#the-fitsite-network-so-far}

Ar ddiwedd y dysgu hwn, mae hyn sydd wedi'i chynllunio:

FitSite Network
├── WordPress Multisite (mode subdomain)
├── Ultimate Multisite (ychwanegol a chynalio wedi'i cyflwyno)
├── Hosting gyda SSL gweithredol (wildcard)
├── Cyfluniad domena (domain mapping) wedi'i chefnogi
├── Modelau e-bost (email templates) yn unigol i niche (yn cyntaf)
└── Parthaid ar gyfer modelau safle (y dysgu nesaf)

## Beth Rydyn Ni wedi Cyflwyno Mae'r Dysgu Hwnnw {#what-we-built-this-lesson}

- **Cyfluniad WordPress Multisite byw** mewn modd subdomain
- **Ultimate Multisite wedi'i chynalio a chefnogi** gyda brand FitSite
- **Hosting a SSL** wedi'u setio ar gyfer rheini sydd yn ddigwyddo
- **Cyfluniad domena** wedi'i chefnogi i'r cyfider your hosting provider
- **Ton e-bost unigol i niche** wedi'i sefydlu o ddyddiad ychwanegol

---

**Nesaf:** [Dysgu 4: Cyfathredu Modelau Niche](lesson-4-templates) -- byddwn yn creu modelau safle sydd yn ei fod gweithwyr studio ffitnes yn gallu ddefnyddio.
