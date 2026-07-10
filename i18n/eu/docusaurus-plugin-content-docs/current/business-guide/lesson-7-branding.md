---
title: 'Lehena-lekurua: Itzultzea'
sidebar_position: 8
_i18n_hash: 90013fc79a9cbb15283ce89b688002b1
---
# Lehen 7: It Zure Itzu {#lesson-7-making-it-yours}

Daukoak ez duzu, ir guzti erabiltzen ari den "WordPress plugin bat" bezala sentitzen ez dute. Hau FitSite bezala sentitzea da -- industria-ren bitartean itxaritzeko platorma bat. Hau lehenarenan brandinga, white-labeling (proprietarietako forma) eta platormak produktu bat bezala sentitzea gertatzen ditu.

## Nola Udal Dituz? {#where-we-left-off}

FitSite-ek funtzionatzen duen checkout flow batek fitness studio pertsonalariak planak emateko irudiari gabe, lehen webgune bat ere ezarritzen dute. Hau guztia ikusi baten produktua, brandingditu eta batzuak sentitzea da.

## Itzultzailearen Domain-a {#your-platform-domain}

Anda brand-ren espilarenak domain-ek dira. FitSite-ko kasuetan:

- **Domain lehen**: `fitsite.com` (marketing webgunean eta network-en lehen edozein)
- **Webguneak pertsonalarietako**: `studioname.fitsite.com` (subdomainak)
- **Domainak osoa**: Growth eta Pro planek duten pertsonalariak domain bat jartzen dituzte

### Domainaren Konfigurazioa {#setting-up-your-domain}

1. Platorma domain-a ematen dizkio
2. Hostigunean erabilizten dituzu
3. Pertsonalarietako subdomainak (wildcard DNS) konfiguratatu (`*.fitsite.com`)
4. Wildcard SSL aktibo dagoela seguru egin

Mehatzeko erantzunak [How to Configure Domain Mapping](/user-guide/domain-mapping/how-to-configure-domain-mapping)-ean da.

## Admin Experience-aren White-Labeling (Proprietarietako Forma) {#white-labeling-the-admin-experience}

Fitness studio pertsonalariak bere webgunean dashboard-era sartu ondoren, WordPress edo Ultimate Multisite brandinga ez, baina zure brand-a ikusi duzu.

### Login Page Osoa {#custom-login-page}
WordPress login page-a osoa dezake:

- Zure FitSite logoa
- Fitness-ko apainagoak emateko irudiak (background imagery)
- Zure brand-ren coloreak

### Dashboard Branding {#dashboard-branding}

Erabendu [Admin Page Creator](/addons/admin-page-creator) addon edo CSS dezidiatua erabiltzen duzu:

- WordPress logoa FitSite logoare aldatzeko
- Administrazioaren kolor eskurriari (color scheme) brand-ekin batzuk egiteko
- Fitness-spazioak dira eta laburpena/auxilio resource-ek aurkitu widget bat gehien

### Admin Pages Sobizatuak (Custom Admin Pages) {#custom-admin-pages}

Fitness studio nagusiak jasotzen duen jatorrizko akzioak eragiten admin pages ezartzeko iruki dezakezu:

- "Editatu Class Schedule-ak"
- "Trainer Profiles-ek updateatu"
- "Site-ak ikustea"

Honek, standard WordPress menuku horretan ez daitezkeen akzioak amaiagoan ezdu eta fitness-spazio nagusiak eskatzen duen akzioak lehen datzuten du, eta berriz, batzuaren erabilera hobitzen du.

## Komunikazioak Brandizatu (Branding Your Communications) {#branding-your-communications}

Email, faktura eta notifikazio baten guztia brand-n zehatzuk hasterteko da.

### System Emails (Email-ek Sistema) {#system-emails}

**Ultimate Multisite > Settings > Emails** funtziokoan jarraitu eta email-ek sistema guztiak erabiliz:

- **From name**: FitSite
- **From email**: hello@fitsite.com
- **Email templates**: Brand-n kolorrak eta logoak erabiliz
- **Language**: Fitness-spazioa eskatzen du guztia

Erabilera dauden email-ek hauek:

| Email | Versio Generikoa | FitSite Versioa |
|-------|-----------------|-----------------|
| Welcome (Egun on) | "Site berria dago" | "FitSite fitness studio website-ak dago" |
| Payment receipt (Pagamentu informazioa) | "Pagamentua hartuta da" | "FitSite abonamendu pagamentua konformatu da" |
| Trial ending (Trial-a amaitzen da) | "Trial-ek amaitzen da hasten" | "FitSite trial-ak 3 eguneko da -- studio website-ak bizia jarri" |

### Invoices (Fakturak) {#invoices}

Fakturaren template-ek erabiliz:

- Itz logo eta brandak lekinak
- Itz negozioaren datuak
- Fitness-spediko produktu-naten (generiko plan ID-ek ez du)

## Irudiari Kontseilako Saila (The Customer-Facing Site) {#the-customer-facing-site}

Itz main domain-ek (`fitsite.com`) irudiari marketing sailbidea behar du, zein da plataforma-n saldu egiten du. Hau Ultimate Multisite network admin-ekatik eskaintzen ez da -- hau negozioaren publiko bokoa da.

Garrantzitsuak zehalak:

- **Homepage**: Fitness negozio-ekara balioa irudiari argi eta jakin bat ematen
- **Features**: FitSite zer egiten du, fitness terminoetan
- **Pricing**: Itz tres planak eta niche-spediko aukerak erakusten duen zehalak
- **Examples**: Plataforma-n egin site-ek erakustea
- **Sign Up**: Checkout formera linkak

:::tip Irudiari Marketing Sailbidea Network Site izan daiteke
Irudiari marketing sailbideak network-aren belurra situailean sortu. Hau lehen dashboard-etik eskaintzen du eta sizariak propioa plataforma-ren aukerak erakusten du.
:::

## Irudiari Domaina Kontseilako {#custom-domain-for-customers}

Domainak irudien planetan sartzen dutelako, prosesua argi dokumentatu:

1. Irudiari domain-ek registraturi edo transferatzen du
2. Irudiari DNS-ak plataforma-ra apuntatzen ditu (erregistroak onartu)
3. Ultimate Multisite domain mapping eta SSL-ek eskaintzen du

Hau prosesua eratu zehal edo knowledge base entry sortu, tekniko ez-expert fitness studio-ekara esan duen bezala.

## Irudiari FitSite Networka Zer da {#the-fitsite-network-so-far}

---

FitSite Network
├── WordPress Multisite (subdomain modua)
├── Ultimate Multisite (konfiguratu + brandatuta)
├── Platform Domain (fitsite.com + wildcard SSL)
├── Site Templates (Studio Essential, Gym Pro, Fitness Chain)
├── Produkzioak (Starter, Growth, Pro + Order Bumps)
├── Checkout Flow (niche-spazioa, testatuta)
├── Branding
│   ├── Login zehatza desgaitua
│   ├── Admin dashboard brandatuta
│   ├── Emailak sistema-spazioak
│   ├── Infeizak brandatuta
│   └── Marketing site fitsite.com-an
└── Onboarding flow-ra prestatu (next lesson)

## Zerri Ekin Dugu Hau {#what-we-built-this-lesson}

- **Platform domain eta DNS** brandatuta erpaldi bereiz
- **Admin dashboard leialduna** FitSite branding-a bestelako
- **Komunikazioak espezializatuta** -- emailak, infeizak eta notifikazioak guztiz brandatutako
- **Marketing site bat** zein studio dueño-ek FitSite-a saldu dezaten
- **Domain leialduna dokumentazioa** kliuntzak bere domain berriz berriz dirizteko

---

**Next:** [Zerri 8: Klientzia Onboarding](lesson-8-onboarding) -- berri inscrepsio bat aktibo eta gogorria kliuntzatu iragatik ematen erpaldi designatzen dugu.
