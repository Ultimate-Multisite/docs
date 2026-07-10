---
title: 'Dysgu 9: Prifyniadau ar gyfer profith'
sidebar_position: 10
_i18n_hash: 0f58d92d3effcc1ffc1f62104d21cdcc
---
# Lesiwn 9: Prysauidau ar gyfaoedd i gael cyfathrebu {#lesson-9-pricing-for-profit}

Yn Lesiwn 5, roeddwn ni'n setio prysau cyntaf ar y planau FitSite. Mae'r hyn yn dda, mae angen ni eto gwella'r strategais o prys gyda ffurfau sydd wedi'u llwybr yn cynyddu cyfathrebu, i gynnig cyflwyniadau (upgrades) a i ddifyn y chwarae (churn).

## Oedd Ni wedi Cynhaltio {#where-we-left-off}

Mae FitSite gyda planau, templateau, checkout, branding, a onboarding wedi'u setio. Roedd y prysau cyntaf yn $49/$99/$199 per mudiad. Mae'n dda i ni gwella'r prysau hyn i gweithio'n ddwfnach.

## Prifau Prysau ar gyfer Platformau Niche {#pricing-principles-for-niche-platforms}

### Pris ar Gyllygu, Nid Ar Cost {#price-on-value-not-cost}

Gall costau eich hostiastio fod yn $5-15 per site o'r cyddee. Mae hyn nid yn golygu bod eich prys yn $20. Nid eich cynrychioliwch hostiastio. Rydych chi'n cynrychioliwch:

- Ardalweb fithrin proffesiynol syddai fod yn cost $2,000-$5,000 i ei ddatblygu arallt
- Cynllunio parhau, cyfathrychiadau (updates), a diogelwch sydd wedi'u gwneud nad oes angen eu meddwl am
- Ffurfau penodol i'r niche sydd wedi'u cynnig gan ddatblygu arallt yn rhyfedd
- Cyfathrebu platform sydd wedi'i gael ei ddatblygu ar gyfer eu dyfodol

Pris ar gyfer y gael eich cyflwyniadau, nid cost i'w cyflwyno.

### Cyddeu â'r Alternaethau {#anchor-to-alternatives}

Pan mae rhywun o'r rheolwr studio fithrin yn ddarparu FitSite, mae hi'n deimlo gyda:

- **Cyflogi ddatblygweb web**: $2,000-$5,000 i'r cyntaf + $50-$100/mudiad cynllunio parhau
- **Wix/Squarespace**: $16-$45/mudiad ond dim ond ffurfau penodol i'r fithrin, mae hi'n ddatblygu ei hun
- **Nid gwneud rhywbeth**: Aelodau wedi'u colli sydd nad oes gan eu gallu dod o hyd i'w online

Ar $49-$199/mudiad, mae FitSite yn isonol na chydlogi ddatblygweb, yn gael ei ffyddiad mwy o ddefnyddiol na dim ond arallt, a'r fawr iawn na'r siarad.

## Cyflwyno Variadau Prys {#implementing-price-variations}

Mae gaelau pren blynyddol yn gofynol i'r cyflawniad ac yn gwella chwylio (churn). Navwch i tab **Price Variations** o bob plan a refwch opsiyn blynyddol:

| Plan | Blynyddol | Blynyddol (per mlynedd) | Cyflawniad Blynyddol | Cynlluniau |
|------|----------|-----------------------|---------------------|-----------|
| Starter | $49/mlynedd | $39/mlynedd | $468/flynyddo | 20% o ddefnyddio |
| Growth | $99/mlynedd | $79/mlynedd | $948/flynyddo | 20% o ddefnyddio |
| Pro | $199/mlynedd | $159/mlynedd | $1,908/flynyddo | 20% o ddefnyddio |

Refwch field **Period Selection** i'r ffurf cheictw your gyda'r cyd-deithio rhwng gaelau blynyddol a blynyddol. Gweld [Checkout Forms](/user-guide/configuration/checkout-forms#adding-a-period-selection-toggle).

### Pam mae pren blynyddol yn weithio? {#why-annual-pricing-works}

- **Ar gyfer chi**: Cas o'r cyntaf, chwylio isel (mae chwaraeon sy'n dalu blynyddol yn llai yn cael eu tynnu yn y cyfnod canlynol)
- **Ar gyfer nhw**: Cynlluniau gofynol, cyflawniad arian

## Cyfeiriadau Rheoli (Setup Fees) {#setup-fees}

Gofynwch un cynllun cyfeiriad ar gyfer planau sy'n cynnwys cyflawniad o ddefnyddio:

- **Starter**: Nid oes cynllun cyfeiriad (talyb y barriau i gael)
- **Growth**: $99 cynllun cyfeiriad (mae'r cyflawniad hwn yn gwrhoi cyflawniad domain custom a chwaraeon gyntaf)
- **Pro**: $299 cynllun cyfeiriad (mae'r cyflawniad hwn yn gwrhoi setffroi am ymlaenol ac cyfarfod cychwyn)

Refwch cynlluniau cyfeiriad ar y sicr o bob plan. Gweld [Creating Your First Subscription Product](/user-guide/configuration/creating-your-first-subscription-product) i gael mwy o fanylion.

## Cyfnodau Cynllun (Trial Periods) {#trial-periods}

Mae cynnig cyfnod cynllun yn llai'r chwaraeon i ddefnyddio ond mae'n cyflwyno risg o ddifynol. Ar gyfer FitSite:

- **7-dwr cyffredigol** ar plan Starter yn unig
- Nid oes trial ar Growth a Pro (mae y golybusau hyn yn fwy cydweithiol ac mae angen eu cyflwyno)

Rheoli'r trial ar sicrwydd y plan Starter gan gyflwyno'r togg **Offer Trial** a setio'r amser i 7 ddiwrnod.

### Cyfathogh i ddodynau (Trials Convert) {#making-trials-convert}

Mae trial yn gweithio dim ond os mae'r cydweithredwr yn cael gael gwerth yn ystod y cyfnod trial. Mae eich sicrwydd y cyflwyno (Lesson 8) yn hanfodol yma -- dylai'r e-bostau cychweidiol cael eu cyfathogh i ddefnyddio'r amser o 7 diwrnod i gysylltu â'r gweithrediad.

## Codau Disconwento (Discount Codes) {#discount-codes}

Creu codau disconwento strategol ar gyfer pethau penodol:

- **FITLAUNCH** -- 30% o ddefnyddio'r cyntaf 3 mlynedd (ar gyfer promosi llwybr)
- **ANNUAL20** -- 20% o ddefnyddio'r planau annwl (os nid yw wedi cael eu disconwento'n ddiweddar)
- **REFERRAL** -- 1 mlynedd o ddefnyddio'r cyflwyno (ar gyfer golybusau cydweithredwyr)

Mynol i **Ultimate Multisite > Discount Codes** i creu hyn. Gweld [Creating Discount Codes](/user-guide/configuration/creating-discount-codes) ar gyfer y cyfarwyddiad cyfan.

:::tip Nid disconwento gan ddefnyddio yn defnyddiol
Disconwentoedd dylai fod yn weithiau strategol, nid yn ffurfau diwyll. Os mae pob un yn cael disconwento, nid yw'n disconwento -- mae'n y prys gwirioneddol eich. Defnyddiw nhw ar gyfer camau penodol, golybusau cydweithredwyr, a promosi gyda amser hanes.
:::

## Cyfathogh o Tax (Tax Handling) {#tax-handling}

Os ydych chi yn gweithio mewn y drefn sydd â'r cyflwyno tax:

1. Rheoli'r cyfrifau tax yn **Ultimate Multisite > Settings > Taxes**
2. Gyhoeddi cyfathoghion tax ar eich planau
3. Sicru bod y ffurfiadau (invoices) yn dangos y tax yn llawn

Gwylio [Tax Handling](/user-guide/payment-gateways/tax-handling) i gynnigau am ychwanegiadau. Os ydych chi'n gwasanaethu cleiention ar all-drydd, meddwch am ychwanegiad VAT (/addons/vat) i gydnabod EU.

## Adfilio'r Prifyniad eich Prifyniadau {#reviewing-your-pricing}

Ar ôl ychwanegu, gwylio ar gyfer y prifyniadau yn cyntaf. Gwylio ar:

- **Cyfrif y cyflawniad gan plan**: Os ydych Starter yn cyflawni'n dda ond nid yw Growth yn cyflawni'n dda, gall y gwahaniaeth rhwng eu bod yn rhy fawr.
- **Cyfrif y cyfathrebu**: Os oes llawer o cleiention sydd yn cyfathreg o Starter i Growth, gallai fod plan Growth nid yn cynnig gwerth ychwanegol yn ddefnyddiol.
- **Churn gan plan**: Os mae cleiention annwsigol yn chwylio'n ddefnyddiol yn fwy, gwneudwch prifyniadau annwsigol yn ddefnyddiol yn fwy.
- **Cyfrif y gweithwyr cymryd**: Beth yw'r ail-gwnaethau sy'n cyfrifio? A oes eich sicr yn cael ei leoli'n dda?

## Y Cyd-gynllun SiteF yn Awyrol {#the-fitsite-network-so-far}

---

FitSite Network
├── WordPress Multisite (mode subdomain)
├── Ultimate Multisite (configwyd + brandwyd)
├── Platform Domain (fitsite.com + wildcard SSL)
├── Site Templates (Studio Essential, Gym Pro, Fitness Chain)
├── Products
│   ├── FitSite Starter ($49/m neu $468/blwyddyn) + 7-diodd trial
│   ├── FitSite Growth ($99/m neu $948/blwyddyn) + cyfradd y set-up $99
│   ├── FitSite Pro ($199/m neu £1,908/blwyddyn) + cyfradd y set-up $299
│   └── Order Bumps + Codau Disconcywn
├── Checkout Flow ( gyda chwytho'r deithio o ddefnyddio'r amgylch)
├── Branding (log-in, dashboard, e-bostau, ffurfiadau, safle marraith)
├── Customer Onboarding (Cyfradd Cynhwys, e-bostau, resurs helpu)
├── Pricing Strategy
│   ├── Disconcywn blwyddynol (20% o ddisconcywn)
│   ├── Cyfraddau set-up strategol
│   ├── 7-diodd trial ar y plan cyntaf
│   ├── Codau disconcywn ar gyfer cyflwyniadau a chwaraeon
│   └── Cyfathrebu'r teithio (Tax configuration)
└── Barod i ddefnyddio (y dysgu nesaf)

## Beth Rydyn Ni wedi Creu y Dysgu Hwn {#what-we-built-this-lesson}

- **Cyfraddau blwyddynol** gyda 20% o ddisconcywn i gynnig y cydweithio
- **Cyfraddau set-up** ar y planau uwch i sicrhau'r oryddu cynhwys
- **Amser trial** ar y plan cyntaf i ddifyn y chwarae o ddefnyddio'r syddiad
- **Codau disconcywn strategol** ar gyfer cyflwyniad, cyfraddau a chwaraeon
- **Cyfathrebu'r teithio** i gael ei chyflawni yn llai
- **Ffrainframwaith ddarparu cyfraddau** ar gyfer optimiynol ar gyfer y cyfnod nesaf

---

**Nesaf:** [Dysgu 10: Dydd Cyflwyniad] -- y rheol ddefnyddio cyn y cyflwyniad a'r cyflwyniad.
