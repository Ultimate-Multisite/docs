---
title: 'Dysgu 12: Gwarchod y Busnes'
sidebar_position: 13
_i18n_hash: 0fe6371df216b74a2051b95972ad68e8
---
# Leses 12: Mae'r Busnes yn Rhanu

Mae platform nid yw prosiect sydd wedi cael ei gwblhau -- mae'n busnes sydd wedi cael ei rhanu. Mae’r les hon yn gwmpasu y gweithredoedd dyddiol o ddefnyddio FitSite: cefnogaeth, cyfathrebu, chynllunio, a chofio'r cleiention yn hapus.

## Oes y lle roedd ni wedi mynd {#where-we-left-off}

Mae FitSite yn llai ac mae cleiention yn dewis eu cyfrifoldeb. Mae angen i chi rhanu'r gweithrediad yn dda.

## Gweithredoedd Dyddiol {#daily-operations}

### Monitoriaeth {#monitoring}

Gwylio hyn dyddiol (neu setwch amgylcheddau allw'r amser) ychwanegau:

- **Uptime**: yw'r platform yn cael ei cyffredinol? Defnyddiw serchgell monitor ubin.
- **New signups**: sut mae nifer o cleiention newydd wedi dewis eu cyfrifoldeb heddiw?
- **Failed payments**: ydynt ychwanegau peob cyfathrebu sydd angen gwylio?
- **Support requests**: ydynt ychwanegau cleientol yn cael eu bod yn cael eu cyflwyno?

### Cefnogaeth Cleientol {#customer-support}

Mae eich fawniad yn rhoi'r canfyddiad i chi. Oherwydd bod pob un o'ch cleiention yn studi fit, byddwch yn gweld yr unig y gwestynau yn drosbarth:

**Gwestynau cyffredinol syddai chi cael:**

- "Sut mae'r cyd-gystadleu fy nghyddu?"
- "Gallaf iwfaltio'r lliwiau fy ngartref?"
- "Sut mae i mi ddod o ddefnyddio newydd i fy nghyddu ar fy ngartref?"
- "Mae fy domain yn gweithio nid"
- "Sut mae i mi cael ei drosgu/cyflwyno fy chwarae?"

Bynllhauwch eich cyfnod gwybodaeth (ddstart wedi'i gwneud yn Les 8) o am ywestynau hanesyddol hyn. Pob ticket cefnogaeth syddai fod yn article cyfnod gwybodaeth yw signal i ysgrif y article hwnnw.

### Tiers Cefnogaeth {#support-tiers}

Pan fyddwch yn ddigwydd, rhannu'r cefnogaeth gan plan:

| Plan | Cenedd Cyflen | Amserau |
|------|--------------|----------|
| Starter | Gweithgellau + e-bost | 48 awr |
| Growth | Cynllun ymd | 24 awr |
| Pro | E-bost priwartal + cyfarfod ychwanegu | 4 awr |

Gall [Support Tickets addon](/addons/support-tickets) gallu i ddefnyddio i rheoli cyflwyniadau cefnogaeth yn y platform.

## Gweithredu Cyfathrebu (Billing Operations) {#billing-operations}

### Pwylliant Cynllunol (Recurring Payments) {#recurring-payments}

Mae Ultimate Multisite yn gwneud y cyflogau cynllunol yn awr drwy'ch gweithgoleg cyfathrebu. Mae eich gweith yn cael ei ddefnyddio i moni am:

- **Cyflwyniadau anoddol (Failed payments)**: Rhowch ystyried yn gyflym. Mae'r pwylliantau yn cael eu cyflwyno'n llwyr yn aml o cardau wedi'u dod i'w ddefnyddio, nid o ddeallt.
- **Dunning**: Rheoli llawerau ychwanegu awtomatig drwy'ch gweithgoleg cyfathrebu (Mae Stripe yn cael hyn yn well)
- **Gofynion cynllunio (Cancellation requests)**: Cynnal y deall pam mae cyddeeau yn gadael. Mae pob cynllunio yn cael ei ddefnyddio fel gysylltiad.

### Rheoli Cyflwyniadau (Managing Memberships) {#managing-memberships}

Mynolwch i **Ultimate Multisite > Memberships** i:

- Gwylio pob cyflwyniadau sydd ar gael
- Rheoli cynlluniau cyfathrebu a chwanegu'r cyflwyniadau
- Cynnal y cyflwyniadau am ychwanegu pan oes angen
- Rheoli ddefnyddio cyflwyniadau

Gwylio [Managing Memberships](/user-guide/administration/managing-memberships) i gael y cyfeiriad llawn.

### Cyflwyniadau (Invoicing) {#invoicing}

Gofal bod cyflwyniadau yn cael eu cyfathrebu'n iawn ar gyfer pob cyflwyniad. Gall angen cyddeeau am ddefnyddio busnes i ddefnyddio. Gwylio [Managing Payments and Invoices](/user-guide/administration/managing-payments-and-invoices).

## Cynllunio Platform (Platform Maintenance) {#platform-maintenance}

### Cyfathrebu a Chwanegu Pluginau WordPress (WordPress and Plugin Updates) {#wordpress-and-plugin-updates}

Fel gweithredwr y rheol yn y cyd-gynllun, ydych chi yn gyfrifol am:

- **Cyfderau'r WordPress core**: Gwarchu ar wefan ystafell (staging site) قبل asgynio i proddefyniadau
- **Gwarchu'r pluginau**: Mae'n yr unig -- gwarchu gyntaf, yna asgynio arall dros y rheol
- **Gwarchu'r themeau**: Gwarchu bod y templateau yn ddifrifol ar ôl gwarchu'r themeau

:::warning Peidiwch â gwarchu mewn proddefyniad heb gwarchu
Mae gwarchu brofiad yn effaith ar bob cyfrifol site ar eich rheol. Gwarchu gyntaf ar copy stagi o'ch rheol.
:::

### Diogelwch (Security) {#security}

- Rwy'n parhau i ffresgu'r software allan
- Defnyddiwch pwysodau gryf a cyflwyniad dros ddau (two-factor authentication) ar gyfer cyfrifau admin
- Monitro am ymweliadau anghyffredinol
- Mae ganrdefyniad ar gyfer digwyddiadau diogelwch

### Perfformiad (Performance) {#performance}

Gan fod eich rheol yn ddigon, monitro:

- **Amserau cyflwyniad y peidiadau**: Oron y siteau'r cydifol yn gyflym?
- **Defnydd resurs y server**: CPU, memori, safle diskwert
- **Perfformiad y database**: Mae rheolaid ddigon mawr yn angen optimi'r database ar gael o amser

Cynllunwch ei ddefnyddio cache (page cache, object cache) a CDN os nad oes gennych hynny. Mae'r [Cloudflare integration](/user-guide/host-integrations/cloudflare) yn gwarchu llawer o hyn.

## Rheoli'r Bywyd y Cydifol (Customer Lifecycle Management) {#customer-lifecycle-management}

### Reddu Churn (Churn Reduction) {#reducing-churn}

Mae churn yn y penderfyniad o'r penderfyniadau o'r cydifol sydd yn cael eu tynnu eachw. Ar gyfer busnes cyflwyniad, mae reddu churn yn hanfodol fellych yn ddefnyddio newyddion.

**Gofalau cyffredinol am y rheolaid fitness studio sy'n cael eu tynnu:**

- Nid oeddent yn ymddangos sut i defnyddio'r platform → gwella y cyfluniad o ddefnyddio (onboarding)
- Nid oedd y safle yn dangos iawn → gwella y modelau (templates)
- Nid oedd eu bod yn cael ei chynal → gwella'r ffeithiau neu y gweithgrefi
- Roeddent wedi dod ag ddefnyddio alternatiw gyffredinol hơn → cwblhau'r gwerth yr unigol (niche value) eich busnes

### Gyflwyno cyfathrebuau gwella (Encouraging Upgrades) {#encouraging-upgrades}

Dyddynion ar Starter sydd yn cyflymu dylai cael eu gyflwyno i gwella:

- Pan fyddant yn cyrraedd hanesau planiau (safleoedd, storio), dangos ychwanegiadau gwella
- Anfon e-bostau cyflwynigol yn nodi ffeithiau Plan Gwythdrefn (Growth) sydd eu bod yn cael eu cyflawni
- Dangos beth wedi'u guberdio y gweithwyr Growth/Pro

### Cyfathrebuadau ag ddefnyddio eto (Win-Back Campaigns) {#win-back-campaigns}

Pan mae cliant yn cael ei drososiad:

1. Mae'n gofyn i wneud sylw beth yw'r rheswm (survey o wyddiadau neu e-bost)
2. Cyflawni eu chwynnig os oes possibile
3. Cynnig ddisgyblion i ddychwelyd (30-60 diwrnod ar ôl y drososiad)

## Cynlluniau cymeriad cymeriadol a manwl (Weekly and Monthly Routines) {#weekly-and-monthly-routines}

### Cymeriad cymeriadol (Weekly) {#weekly}

- Ddychwio newyddion o gyflwyniadau a drososiadau
- Cyfeillio i'r holl ticketau cefnogaeth agor
- Gwellydd perfformiad y platform a ddefnyddio (uptime)
- Ddychwio unrhyw peidiadau wedi'u cael eu cyflawni

### Manwl (Monthly) {#monthly}

- Analysu merynoedd allweddol (MRR, churn, new customers, upgrades)
- Cyflwyno cyfathrebuadau WordPress a pluginau (ar ôl gwylio test y stagiad)
- Ddychwio a gyfresgu'r gweithgrefi ar adalaith ar gyfer y modelau cefnogaeth
- Anfon newsletter neu cyfresgu i cliantau (feithiau newydd, cysylltiadau, news o'r dyfodol fitness)

### Cymeriad triwyl (Quarterly) {#quarterly}

- Adfilio'r y cyfathreiddig yn gyflwyniad â'r gynnwysau a'r adolygiadau o'r cydweithwyr
- Ddychwilio ar dyluniau template -- yw'n angen eu newid?
- Assesiad y cyfyngedigau gweithredol -- yw'n angen eu llwybr?
- Adolygu a gwella'r cyflwyniad yn seiliedig ar data chwarae

## Beth syddaiwn i'w ddefnyddio yma {#what-we-built-this-lesson}

- **Routyn moniti diwrnodol** ar gyfer cyfathreiddig, cyflwyniadau, peidiadau, a cefnogaeth
- **Struktur cefnogaeth wedi'i ddefnyddio mewn trefi** sy'n cael ei ddefnyddio yn agos â'r lefelau planiau
- **Gweithredoedd cyfathreiddig** gan gynnwys dunnio a rheoli cyddeallt
- **Prosedidiadau cadarnhau** ar gyfer cyfathryd, diogelwch, a perfformiad
- **Strategau i ddifyn y chwylio** sy'n rhoi'r niche fitnes yn benodol
- **Routyn weithredol, manwl, a cyntaf**

---

**Manor:** [Cyflwyniad 13: Mae'n Gweithredu'r Cyfathreiddig](lesson-13-growth) -- gresog FitSite o gyfarfod bach i gweithredol gwirioneddol.
