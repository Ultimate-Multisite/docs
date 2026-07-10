---
title: 'Mësimi 5: Dizajnimi i planeve tuaja'
sidebar_position: 6
_i18n_hash: 8c58dfd0a186bd585f43342bc4ea4f43
---
# Mësimi 5: Dizajnimi i Planeve Tuaja {#lesson-5-designing-your-plans}

Nivelet e planeve tuaja nuk janë thjesht nivele çmimesh -- ato janë pasqyrim i mënyrës se si klientët e niches suaj funksionojnë realisht. Në këtë mësim do të dizajnoni nivele produktesh që përputhen me nevojat reale të bizneseve të fitness në faza të ndryshme.

## Ku e Lamë {#where-we-left-off}

FitSite ka tre template gati (Studio Essential, Gym Pro, Fitness Chain). Tani krijojmë planet që përcaktojnë se në çfarë marrin qasje klientët dhe sa paguajnë.

## Të Menduarit në Segmente Klientësh {#thinking-in-customer-segments}

Gabimi që bëjnë shumica e njerëzve është dizajnimi i planeve rreth veçorive teknike (hapësirë ruajtjeje, bandwidth, numër faqesh). Klientët e niches suaj nuk mendojnë me këto terma. Një pronar palestre mendon për atë që i nevojitet për të drejtuar biznesin e tij.

Për studiot e fitness, ekzistojnë tre segmente natyrore:

| Segmenti | Kush Janë | Çfarë u Nevojitet |
|---------|-------------|----------------|
| **Trajnerë solo / studio të vogla** | 1-3 staf, një vendndodhje, duke filluar | Një site profesional, informacion për klasa, formular kontakti |
| **Palestra të konsoliduara** | 5-20 staf, një vendndodhje, në rritje | Gjithçka më sipër plus rezervim, blog, galeri, domain i personalizuar |
| **Zinxhirë fitness** | Shumë vendndodhje, brand i konsoliduar | Gjithçka më sipër plus multi-site, faqe vendndodhjesh, direktori stafi |

Planet tuaja duhet të lidhen me këto segmente, jo me paketa veçorish arbitrare.

## Krijimi i Planeve FitSite {#creating-the-fitsite-plans}

Navigoni te **Ultimate Multisite > Products > Add Product** për secilin plan.

### Plani 1: FitSite Starter -- $49/muaj {#plan-1-fitsite-starter----49month}

**Synimi**: Trajnerë solo dhe studio të vogla

**Skeda e përshkrimit**:
- Emri: FitSite Starter
- Përshkrimi: "Gjithçka që i nevojitet një trajneri personal ose studioje të vogël për t’u dukur profesional online."

**Skeda e përgjithshme**:
- Lloji i produktit: Plan
- Roli i klientit: Administrator

**Skeda Site Templates**:
- Lejo template site-sh: Aktivizuar
- Template të disponueshme: Vetëm Studio Essential

**Kufizimet**:
- Site: 1
- Hapësirë disku: 1 GB
- Domain i personalizuar: Çaktivizuar (përdor `studioname.fitsite.com`)

**Skeda Plugins**:
- Plugin formulari kontakti: Force Activate
- Plugin SEO: Force Activate
- Plugin rezervimi: Nuk disponohet (nxitje për upgrade)

**Skeda Themes**:
- Theme i zgjedhur nga ju: Force Activate
- Të gjitha themes e tjera: Të fshehura

### Plani 2: FitSite Growth -- $99/muaj {#plan-2-fitsite-growth----99month}

**Synimi**: Palestra të konsoliduara me një vendndodhje

**Skeda e përshkrimit**:
- Emri: FitSite Growth
- Përshkrimi: "Për palestra të konsoliduara gati të rrisin praninë e tyre online dhe të tërheqin anëtarë të rinj."

**Skeda Site Templates**:
- Template të disponueshme: Studio Essential dhe Gym Pro

**Kufizimet**:
- Site: 1
- Hapësirë disku: 5 GB
- Domain i personalizuar: Aktivizuar

**Skeda Plugins**:
- Gjithçka në Starter, plus:
- Plugin rezervimi: Force Activate
- Plugin galerie: Force Activate
- Funksionalitet blogu: I disponueshëm

**Skeda Up & Downgrades**:
- Grupi i planit: FitSite Plans
- Renditja e produktit: 2

### Plani 3: FitSite Pro -- $199/muaj {#plan-3-fitsite-pro----199month}

**Synimi**: Zinxhirë fitness me shumë vendndodhje

**Skeda e përshkrimit**:
- Emri: FitSite Pro
- Përshkrimi: "Platforma e plotë për brande fitness me shumë vendndodhje."

**Skeda Site Templates**:
- Template të disponueshme: Të tre templates

**Kufizimet**:
- Site: 5 (një për çdo vendndodhje)
- Hapësirë disku: 20 GB
- Domain i personalizuar: Aktivizuar

**Skeda Plugins**:
- Gjithçka në Growth, plus:
- Të gjitha plugins premium: Force Activate

**Skeda Up & Downgrades**:
- Grupi i planit: FitSite Plans
- Renditja e produktit: 3

## Konfigurimi i Grupit të Planeve {#setting-up-the-plan-group}

Grupi i planeve siguron që klientët mund të bëjnë upgrade ose downgrade vetëm brenda familjes së planeve FitSite. Në skedën **Up & Downgrades** të secilit plan:

1. Vendosni **Plan Group** në "FitSite Plans" për të tre planet
2. Vendosni **Product Order** në 1 (Starter), 2 (Growth), 3 (Pro)

Kjo krijon një rrugë të qartë upgrade: Starter → Growth → Pro.

## Shtimi i Order Bumps {#adding-order-bumps}

Order bumps janë produkte shtesë të ofruara gjatë checkout. Për FitSite, konsideroni:

- **Extra Storage Pack** ($19/muaj) -- 5 GB hapësirë shtesë disku
- **Priority Support** ($29/muaj) -- kohë më të shpejta përgjigjeje
- **Additional Site** ($39/muaj) -- për klientët që kanë nevojë për më shumë site sesa lejon plani i tyre

Krijojini këto si produkte të llojit **Package** në Ultimate Multisite dhe lidhini me planet përkatëse.

## Pse Funksionon Kjo Strukturë {#why-this-structure-works}

- **Starter** heq barrierat për hyrje -- çmim i ulët, ofertë e thjeshtë, i vendos trajnerët online shpejt
- **Growth** shton veçoritë që palestrat kërkojnë realisht -- rezervim, galeri, domain-e të personalizuara
- **Pro** i shërben segmentit me vlerë të lartë që ka nevojë për mbështetje me shumë vendndodhje
- **Order bumps** i lejojnë klientët të personalizojnë pa ndërlikuar planet kryesore
- **Rrugë e qartë upgrade** do të thotë që klientët rriten me ju në vend që të largohen

## Rrjeti FitSite Deri Tani {#the-fitsite-network-so-far}

```
FitSite Network
├── WordPress Multisite (subdomain mode)
├── Ultimate Multisite (configured)
├── Hosting with wildcard SSL + domain mapping
├── Site Templates (Studio Essential, Gym Pro, Fitness Chain)
├── Products
│   ├── FitSite Starter ($49/mo) → Studio Essential template
│   ├── FitSite Growth ($99/mo) → Studio Essential + Gym Pro templates
│   ├── FitSite Pro ($199/mo) → All templates
│   └── Order Bumps (Extra Storage, Priority Support, Additional Site)
└── Ready for checkout configuration (next lesson)
```

## Çfarë Ndërtuam në Këtë Mësim {#what-we-built-this-lesson}

- **Tre nivele planesh** të lidhura me segmente reale biznesesh fitness
- **Kufizim veçorish** duke përdorur kontrollet e plugin-eve dhe template-eve të Ultimate Multisite
- **Një grup planesh** me një rrugë të qartë upgrade
- **Produkte order bump** për të ardhura shtesë
- **Një strukturë çmimesh** bazuar në vlerën për klientin, jo në specifika teknike

---

**Tjetra:** [Mësimi 6: Përvoja e Regjistrimit](lesson-6-checkout) -- ndërtojmë një rrjedhë checkout që i kthen pronarët e studiove fitness në klientë që paguajnë.
