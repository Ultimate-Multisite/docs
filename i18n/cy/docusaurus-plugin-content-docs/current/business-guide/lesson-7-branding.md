---
title: 'Dysgu 7: Gwylio i''i gael'
sidebar_position: 8
_i18n_hash: 90013fc79a9cbb15283ce89b688002b1
---
# Leses 7: Gwne'n ei eich hun {#lesson-7-making-it-yours}

Nid yw eich cyddeeion yn gwneud i'r cyddeeion eu gweld fel " rhywun plugin WordPress". Deall eu bod yn defnyddio FitSite -- platform a ddangoswyd ar gyfer y dyfodol eu gweithredol. Mae’r les hon yn cyflwyno brandau, white-labeling, ac yn gwneud i'r platform yn teimlo fel produs.

## Oes yma lle ni dod {#where-we-left-off}

Mae FitSite gyda chyflawni checkout sy mae'n rhoi ddefnyddwyr studio fit yn ymlaen o ddefnyddio plan i gael siat byw. Mae'n ddimais ni'n gwneud yr holl gyfathrebu teimlo fel produs unigol, wedi'i brandu.

## Dyddiau eich platform {#your-platform-domain}

Mae'r cyfnod eich brand yn ysgol eich domain. Ar gyfer FitSite:

- **Domain cyffredinol**: `fitsite.com` (eich siat marcadol a gweithredol y cwmni)
- **Siat cyddeeion**: `studioname.fitsite.com` (subdomains)
- **Domainau cyfathreiniol**: Gall y cyddeeion ar Pro ac Growth gallu mapi'u domain eu hun

### Cyflwyno eich domain {#setting-up-your-domain}

1. Registr eich domain platform
2. Tynnu'n ei ddefnyddio eich darparwr hosting
3. Cyflwyno DNS cyfathreiniol (`*.fitsite.com`) ar gyfer subdomains cyddeeion
4. Sicrhewch bod SSL cyfathreiniol yn gweithredol

Gweld [Sut mae cyflwyno mapi'r domain](/user-guide/domain-mapping/how-to-configure-domain-mapping) i ddefnyddio gyfarwyddiadau am ystyried domain.

## White-Labeling yr adran gweithredol {#white-labeling-the-admin-experience}

Pan fydd un o ddefnyddwyr studio fit yn cyflwyno i'w dashboard siat, bydd eu gweld eich brand, nid WordPress neu brandau Ultimate Multisite.

### Peiriant login custom {#custom-login-page}

Cyflwynwch y peiriant login WordPress i ddangos:

- Ychwanegol logo FitSite
- Imgyniadau ar gyfer fit
- Coloriadau eich brand

Gwelion y cyfieithiadau i'r gweithredwyr. Defnyddiwch y addon [Admin Page Creator](/addons/admin-page-creator) neu CSS customatig i:

- Gwylio'r logo WordPress gyda'r logo eich FitSite
- Customu'r rheollorau colortrwy (color scheme) ar gyfer'r admin i gyd-fynd â'ch brand
- Ychwanegu widget dashboard customatig gyda linciau cyflym a resurcio help yn benodol i ffitnes.

### Peidiadau Admin Customatig {#dashboard-branding}

Meddwl am ystyried creu peidiadau admin customatig sydd yn dangos yr adweithiadau harafynol am ystodwyr studio ffitnes:

- "Redig eich cynllun cyflwyniadau"
- "Arwain profifion trainwyr"
- "Gwylio eich site"

Mae hyn yn redus y gystadleu gan ddefnyddio adweithiau sydd yn hanfodol i'r niche ar ben, yn lle gwneud eu cyflwyno mewn menywod WordPress standard.

## Brando eich Cyfathiadau {#custom-admin-pages}

Mae pob e-bost, ffurfiad cyflwyniad (invoice), a chyhoeddiad yn cadw'r brand eich gweithredol.

### E-bost Systema {#branding-your-communications}

Mynolwch i **Ultimate Multisite > Settings > Emails** ac gwysylltu'r e-bost systema allanol:

- **From name**: FitSite
- **From email**: hello@fitsite.com
- **Email templates**: Defnyddiwch eich colortrwy a'r logo eich brand
- **Language**: Gymar yn benodol i ffitnes yn llwyr

E-bostau allanol sydd yn hanfodol i gwysylltu:

| E-bost | Versi Generol | Versi FitSite |
|-------|----------------|-----------------|
| Welcome | "Mae eich site newydd yn barod" | "Mae eich wefan studio ffitnes yn llai" |
| Payment receipt | "Mae cyflwyniad cyflwyniad wedi cael ei derbyn" | "Mae cyflwyniad cyflwyniad FitSite wedi'i cadw yn bennod" |
| Trial ending | "Mae eich trial yn dal yn ddefnyddio" | "Mae eich trial FitSite yn dal yn ddefnyddio mewn 3 dydd -- cadw eich wefan studio llai" |

### Ffurfiadau Cyflwyniad (Invoices) {#system-emails}

Gwysylltu ffurfiadau cyflwyniad gyda:

- Ych logo a gwynau brand eich
- Mae'r amseriad eich busnes yn ddefnyddio (e.g., "Fitness-specific product names" - enwau cynnyrch o fithres)

## Y Site i'r Cliention {#invoices}

Mae eich domena chyfathrebu (fitsite.com) angen rhywbeth marketing sy'n baw yn gael y platform. Mae hyn yn rhywbeth arall na'r admin o rheolion Ultimate Multisite -- mae'n y fwythyn cyhoeddus o'ch busnes.

Paginau allweddol:

- **Homepage**: Cyflwyniad llwyr o benodol am busnesau fithres
- **Features**: Beth sy'n ei wneud FitSite, mewn termau fithres
- **Pricing**: eich tri plan gyda chymparciaeth o fithres penodol
- **Examples**: Danglyd y siteau a cael eu gystadlu ar y platform
- **Sign Up**: Lwybr i'r ffurf cheictw your

:::tip Gall eich Site Marketing yn Site Cnyfrifol (Network Site)
Creu eich site marketing fel site o fewn yn eich rheolion eich hun. Mae hyn yn gallu'n gaelch ystyried yma o'r dashboard felly a dangos y galluau eich platform eich hun.
:::

## Domena Cynnyfrifol ar gyfer Cliention {#the-customer-facing-site}

Ar gyfer cliention ar planau sy'n cynnwys domena cynnyfrifol, ddefnyddiwch y prosess yn glir:

1. Mae'r client yn regrffri neu drosglwyddo ei domena i'r registrar
2. Mae'r client yn cyfnewid DNS i ddarganfod i'r platform eich (parhau gyda chwaraeau cywir)
3. Mae Ultimate Multisite yn gwneud y cysylltiad domena a SSL

Creu article help neu entry mewn gweithgref gwybodaeth yn benodol ar gyfer y prosess hwn, wedi'i ysgrifennu ar gyfer rheolion fithres nad yw'n ddefnyddio technoleg.

## Y FitSite Network Erioedd {#custom-domain-for-customers}

Mae'r fitns i'r network eich erioedd

FitSite Network
├── WordPress Multisite (modde subdomain)
├── Ultimate Multisite (configwyd + brandoed)
├── Platform Domain (fitsite.com + wildcard SSL)
├── Site Templates (Studio Essential, Gym Pro, Fitness Chain)
├── Products (Starter, Growth, Pro + Order Bumps)
├── Checkout Flow (niche-spefific, testwyd)
├── Branding
│   ├── Custom login page
│   ├── Branded admin dashboard
│   ├── Niche-spefific system emails
│   ├── Branded invoices
│   └── Marketing site ar fitsite.com
└── Ready for onboarding flow (next dysgu)

## Beth wedi'r Llesenau yr Llesenau Hwnnw {#the-fitsite-network-so-far}

- **Platform domain a DNS** wedi'i sicrwydd i gael gyfrifol brandoed
- **Admin gyda chwarae gwytbwys** gyda FitSite yn llawn brandoed
- **Cyflwyniadau cyfathrebu wedi'u cysylltu** -- e-bostau, foirmion, a gairiadau allan ar brandoed
- **Sainl yn weithredol** sy'n bawb FitSite i ddefnyddwyr studio gym
- **Documentad domain cyfathrebu** ar gyfer cyddeewr sy'n gallu eu domain ei hun gael

---

**Nesaf:** [Llesen 8: Onboarding y Cyddeewr](lesson-8-onboarding) -- byddwn yn ddefnyddio'r ffurf sy'n gwneud y cyflym newydd i cyddeewr yn cyddee, hapus.
