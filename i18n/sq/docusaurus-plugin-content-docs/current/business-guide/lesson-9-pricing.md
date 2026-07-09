---
title: 'Mësimi 9: Vendosja e çmimeve për fitim'
sidebar_position: 10
_i18n_hash: 0f58d92d3effcc1ffc1f62104d21cdcc
---
# Mësimi 9: Vendosja e çmimeve për fitim

Në Mësimin 5 vendosëm çmimet fillestare për planet e FitSite. Tani e përmirësojmë strategjinë e çmimeve me teknika që rrisin të ardhurat, nxisin përmirësimet e planit dhe ulin largimet e klientëve.

## Ku e lamë

FitSite ka plane, shabllone, checkout, branding dhe onboarding gati. Çmimet fillestare ishin $49/$99/$199 në muaj. Tani e bëjmë këtë çmim të punojë më fort.

## Parimet e çmimeve për platforma të ngrohta

### Vendos çmimin sipas vlerës, jo kostos

Kostot e tua të hosting mund të jenë $5-$15 për site klienti. Kjo nuk do të thotë që çmimi yt duhet të jetë $20. Ti nuk po shet hosting. Ti po shet:

- Një website profesional fitnesi që do të kushtonte $2,000-$5,000 për t'u ndërtuar me porosi
- Mirëmbajtje, përditësime dhe siguri të vazhdueshme për të cilat ata nuk kanë pse të mendojnë
- Veçori specifike për këtë segment që ndërtuesit gjenerikë nuk i ofrojnë
- Besueshmërinë e një platforme të ndërtuar për industrinë e tyre

Vendos çmimin bazuar në vlerën që ofron, jo në koston për ta ofruar atë.

### Krahasoje me alternativat

Kur një pronar studioje fitnesi vlerëson FitSite, ai e krahason me:

- **Punësimi i një web developer**: $2,000-$5,000 paraprakisht + $50-$100/muaj mirëmbajtje
- **Wix/Squarespace**: $16-$45/muaj, por pa veçori specifike për fitnesin; e ndërtojnë vetë
- **Të mos bëjnë asgjë**: Anëtarë të humbur që nuk mund t'i gjejnë online

Me $49-$199/muaj, FitSite është më i lirë se një developer, më i aftë se ndërtuesit gjenerikë dhe pafundësisht më i mirë se mungesa e një website.

## Zbatimi i variacioneve të çmimeve

Çmimet vjetore nxisin angazhimin dhe ulin largimet e klientëve. Shko te skeda **Price Variations** e secilit plan dhe shto opsione vjetore:

| Plani | Mujore | Vjetore (në muaj) | Totali vjetor | Kursimi |
|------|---------|-------------------|--------------|---------|
| Starter | $49/mo | $39/mo | $468/year | 20% ulje |
| Growth | $99/mo | $79/mo | $948/year | 20% ulje |
| Pro | $199/mo | $159/mo | $1,908/year | 20% ulje |

Shto një fushë **Period Selection** në formularin tënd të checkout që klientët të mund të kalojnë midis faturimit mujor dhe atij vjetor. Shih [Formularët e checkout](/user-guide/configuration/checkout-forms#adding-a-period-selection-toggle).

### Pse funksionojnë çmimet vjetore

- **Për ty**: Para paraprakisht, më pak largime (klientët që paguajnë vjetor kanë më pak gjasa të anulojnë në mes të periudhës)
- **Për ta**: Kursime reale, parashikueshmëri buxheti

## Tarifat e konfigurimit

Mendo për një tarifë konfigurimi njëherëshe për planet që përfshijnë konfigurim praktik:

- **Starter**: Pa tarifë konfigurimi (hiq pengesat për hyrje)
- **Growth**: Tarifë konfigurimi $99 (mbulon konfigurimin e domain-it të personalizuar dhe konsultimin fillestar)
- **Pro**: Tarifë konfigurimi $299 (mbulon konfigurimin për shumë lokacione dhe telefonatën e onboarding)

Konfiguro tarifat e konfigurimit në seksionin e çmimeve të secilit plan. Shih [Krijimi i produktit tënd të parë me subscription](/user-guide/configuration/creating-your-first-subscription-product) për detaje.

## Periudhat e provës

Ofrimi i një prove ul pengesat për regjistrim, por sjell rrezikun e moskonvertimit. Për FitSite:

- **Provë falas 7-ditore** vetëm në planin Starter
- Pa provë në Growth dhe Pro (këta klientë janë më të angazhuar dhe presin të paguajnë)

Konfiguro provën në seksionin e çmimeve të planit Starter duke aktivizuar çelësin **Offer Trial** dhe duke vendosur kohëzgjatjen në 7 ditë.

### Si t'i bësh provat të konvertojnë

Një provë funksionon vetëm nëse klienti përjeton vlerë gjatë periudhës së provës. Sekuenca jote e onboarding (Mësimi 8) është kritike këtu -- email-et e mirëseardhjes duhet të jenë të programuara për të nxitur angazhim brenda dritares 7-ditore.

## Kodet e zbritjes

Krijo kode strategjike zbritjeje për qëllime specifike:

- **FITLAUNCH** -- 30% ulje për 3 muajt e parë (për promovimin e lançimit)
- **ANNUAL20** -- 20% ulje për planet vjetore (nëse nuk janë tashmë me zbritje)
- **REFERRAL** -- 1 muaj falas (për referime klientësh)

Shko te **Ultimate Multisite > Discount Codes** për t'i krijuar këto. Shih [Krijimi i kodeve të zbritjes](/user-guide/configuration/creating-discount-codes) për udhëzuesin e plotë.

:::tip Mos bëj zbritje si parazgjedhje
Zbritjet duhet të jenë mjete strategjike, jo elemente të përhershme. Nëse të gjithë marrin zbritje, ajo nuk është zbritje -- është çmimi yt real. Përdori për fushata specifike, referime dhe promovime me kohë të kufizuar.
:::

## Trajtimi i taksave

Nëse operon në një juridiksion që kërkon mbledhje taksash:

1. Konfiguro normat e taksave te **Ultimate Multisite > Settings > Taxes**
2. Apliko kategori taksash te planet e tua
3. Sigurohu që faturat ta shfaqin taksën saktë

Shih [Trajtimi i taksave](/user-guide/payment-gateways/tax-handling) për konfigurim të detajuar. Nëse u shërben klientëve ndërkombëtarisht, merr parasysh [addon-in VAT](/addons/vat) për përputhshmëri me BE-në.

## Rishikimi i çmimeve të tua

Pas lançimit, rishiko çmimet çdo tremujor. Shiko:

- **Norma e konvertimit sipas planit**: Nëse Starter konverton mirë, por Growth jo, hendeku mes tyre mund të jetë shumë i madh
- **Norma e përmirësimit të planit**: Nëse pak klientë kalojnë nga Starter në Growth, plani Growth mund të mos ofrojë mjaft vlerë shtesë
- **Largimi i klientëve sipas planit**: Nëse klientët vjetorë largohen më pak, shtyji më fort çmimet vjetore
- **Çmimet e konkurrentëve**: Sa po tarifojnë alternativat? A je pozicionuar saktë?

## FitSite Network deri tani

```
FitSite Network
├── WordPress Multisite (subdomain mode)
├── Ultimate Multisite (configured + branded)
├── Platform Domain (fitsite.com + wildcard SSL)
├── Site Templates (Studio Essential, Gym Pro, Fitness Chain)
├── Products
│   ├── FitSite Starter ($49/mo or $468/yr) + 7-day trial
│   ├── FitSite Growth ($99/mo or $948/yr) + $99 setup fee
│   ├── FitSite Pro ($199/mo or $1,908/yr) + $299 setup fee
│   └── Order Bumps + Discount Codes
├── Checkout Flow (with period selection toggle)
├── Branding (login, dashboard, emails, invoices, marketing site)
├── Customer Onboarding (Quick Start, emails, help resources)
├── Pricing Strategy
│   ├── Annual discounts (20% off)
│   ├── Strategic setup fees
│   ├── 7-day trial on Starter
│   ├── Discount codes for campaigns and referrals
│   └── Tax configuration
└── Ready for launch (next lesson)
```

## Çfarë ndërtuam në këtë mësim

- **Çmimi vjetor** me zbritje 20% për të nxitur angazhimin
- **Tarifat e konfigurimit** në nivelet më të larta për të mbuluar përpjekjen e onboarding-ut
- **Një periudhë prove** në planin fillestar për të ulur pengesat në regjistrim
- **Kodet strategjike të zbritjes** për lançimin, rekomandimet dhe fushatat
- **Konfigurimi i taksave** për faturim në përputhje me rregullat
- **Një kornizë për rishikimin e çmimeve** për optimizim të vazhdueshëm

---

**Më tej:** [Mësimi 10: Dita e lançimit](lesson-10-launch) -- lista e kontrollit para lançimit dhe dalja live.
