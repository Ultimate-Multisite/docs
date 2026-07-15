---
title: 'Lezzjoni 5: Iddisinja l-Pjanijiet Tiegħek'
sidebar_position: 6
_i18n_hash: 8c58dfd0a186bd585f43342bc4ea4f43
---
# Lezzjoni 5: Tfassal il-Pjanijiet Tiegħek

Il-livelli tal-pjanijiet tiegħek mhumiex biss livelli ta' prezzijiet -- huma riflessjoni ta' kif il-klijenti fin-niċċa tiegħek fil-fatt joperaw. F'din il-lezzjoni se tfassal livelli ta' prodott li jaqblu mal-bżonnijiet reali ta' negozji tal-fitness fi stadji differenti.

## Fejn Ħallejna {#where-we-left-off}

FitSite għandu tliet templates lesti (Studio Essential, Gym Pro, Fitness Chain). Issa noħolqu l-pjanijiet li jiddeterminaw għal xiex il-klijenti jkollhom aċċess u kemm iħallsu.

## Taħseb f'Segmenti ta' Klijenti {#thinking-in-customer-segments}

L-iżball li jagħmlu ħafna nies huwa li jfasslu pjanijiet madwar karatteristiċi tekniċi (ħażna, bandwidth, numru ta' paġni). Il-klijenti fin-niċċa tiegħek ma jaħsbux b'dawk it-termini. Sid ta' gym jaħseb dwar dak li għandu bżonn biex imexxi n-negozju tiegħu.

Għal studios tal-fitness, jeżistu tliet segmenti naturali:

| Segment | Min Huma | X'Għandhom Bżonn |
|---------|-------------|----------------|
| **Trainers waħedhom / studios żgħar** | 1-3 staff, post wieħed, qed jibdew | Sit professjonali, informazzjoni dwar klassijiet, formola ta' kuntatt |
| **Gyms stabbiliti** | 5-20 staff, post wieħed, qed jikbru | Kollox ta' hawn fuq flimkien ma' booking, blog, gallerija, domain personalizzat |
| **Ktajjen tal-fitness** | Postijiet multipli, brand stabbilit | Kollox ta' hawn fuq flimkien ma' multi-site, paġni tal-postijiet, direttorju tal-istaff |

Il-pjanijiet tiegħek għandhom jikkorrispondu għal dawn is-segmenti, mhux għal pakketti arbitrarji ta' karatteristiċi.

## Toħloq il-Pjanijiet ta' FitSite {#creating-the-fitsite-plans}

Mur għal **Ultimate Multisite > Products > Add Product** għal kull pjan.

### Pjan 1: FitSite Starter -- $49/xahar {#plan-1-fitsite-starter----49month}

**Mira**: Trainers waħedhom u studios żgħar

**Tab tad-Deskrizzjoni**:
- Isem: FitSite Starter
- Deskrizzjoni: "Kollox li personal trainer jew studio żgħir għandu bżonn biex jidher professjonali online."

**Tab Ġenerali**:
- Tip ta' prodott: Pjan
- Rwol tal-klijent: Administrator

**Tab tas-Site Templates**:
- Ippermetti site templates: Enabled
- Templates disponibbli: Studio Essential biss

**Limitazzjonijiet**:
- Siti: 1
- Spazju fuq id-disk: 1 GB
- Domain personalizzat: Disabled (juża `studioname.fitsite.com`)

**Tab tal-Plugins**:
- Plugin tal-formola ta' kuntatt: Force Activate
- Plugin SEO: Force Activate
- Plugin tal-booking: Not Available (inċentiv għall-upgrade)

**Tab tat-Themes**:
- It-theme magħżul tiegħek: Force Activate
- It-themes l-oħra kollha: Hidden

### Pjan 2: FitSite Growth -- $99/xahar {#plan-2-fitsite-growth----99month}

**Mira**: Gyms stabbiliti b'post wieħed

**Tab tad-Deskrizzjoni**:
- Isem: FitSite Growth
- Deskrizzjoni: "Għal gyms stabbiliti lesti jikbru l-preżenza online tagħhom u jattiraw membri ġodda."

**Tab tas-Site Templates**:
- Templates disponibbli: Studio Essential u Gym Pro

**Limitazzjonijiet**:
- Siti: 1
- Spazju fuq id-disk: 5 GB
- Domain personalizzat: Enabled

**Tab tal-Plugins**:
- Kollox fi Starter, flimkien ma':
- Plugin tal-booking: Force Activate
- Plugin tal-gallerija: Force Activate
- Funzjonalità tal-blog: Available

**Tab tal-Up & Downgrades**:
- Grupp tal-pjan: FitSite Plans
- Ordni tal-prodott: 2

### Pjan 3: FitSite Pro -- $199/xahar {#plan-3-fitsite-pro----199month}

**Mira**: Ktajjen tal-fitness b'postijiet multipli

**Tab tad-Deskrizzjoni**:
- Isem: FitSite Pro
- Deskrizzjoni: "Il-pjattaforma kompluta għal brands tal-fitness b'postijiet multipli."

**Tab tas-Site Templates**:
- Templates disponibbli: It-tliet templates kollha

**Limitazzjonijiet**:
- Siti: 5 (wieħed għal kull post)
- Spazju fuq id-disk: 20 GB
- Domain personalizzat: Enabled

**Tab tal-Plugins**:
- Kollox fi Growth, flimkien ma':
- Il-plugins premium kollha: Force Activate

**Tab tal-Up & Downgrades**:
- Grupp tal-pjan: FitSite Plans
- Ordni tal-prodott: 3

## Twaqqaf il-Grupp tal-Pjanijiet {#setting-up-the-plan-group}

Il-grupp tal-pjanijiet jiżgura li l-klijenti jistgħu jagħmlu upgrade jew downgrade biss fi ħdan il-familja tal-pjanijiet FitSite. Fuq it-tab **Up & Downgrades** ta' kull pjan:

1. Issettja l-**Plan Group** għal "FitSite Plans" għat-tliet pjanijiet kollha
2. Issettja l-**Product Order** għal 1 (Starter), 2 (Growth), 3 (Pro)

Dan joħloq triq ċara ta' upgrade: Starter → Growth → Pro.

## Żieda ta' Order Bumps {#adding-order-bumps}

Order bumps huma prodotti add-on offruti waqt checkout. Għal FitSite, ikkunsidra:

- **Pakkett ta' Ħażna Żejda** ($19/xahar) -- 5 GB addizzjonali ta' spazju fuq id-disk
- **Appoġġ ta' Prijorità** ($29/xahar) -- ħinijiet ta' rispons aktar mgħaġġla
- **Sit Addizzjonali** ($39/xahar) -- għal klijenti li għandhom bżonn aktar siti milli jippermetti l-pjan tagħhom

Oħloq dawn bħala prodotti tat-tip **Pakkett** f'Ultimate Multisite u assoċjahom mal-pjanijiet rilevanti.

## Għaliex Din l-Istruttura Taħdem {#why-this-structure-works}

- **Starter** ineħħi l-ostakli għad-dħul -- prezz baxx, offerta sempliċi, iġib trainers online malajr
- **Growth** iżid il-karatteristiċi li gyms fil-fatt jitolbu -- booking, galleriji, domains personalizzati
- **Pro** jaqdi s-segment ta' valur għoli li għandu bżonn appoġġ għal postijiet multipli
- **Order bumps** iħallu lill-klijenti jippersonalizzaw mingħajr ma jikkomplikaw il-pjanijiet ewlenin
- **Triq ċara ta' upgrade** tfisser li l-klijenti jikbru miegħek minflok jitilqu

## In-Network ta' FitSite Sa Issa {#the-fitsite-network-so-far}

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

## X'Bnejna f'Din il-Lezzjoni {#what-we-built-this-lesson}

- **Tliet livelli ta' pjanijiet** immappjati għal segmenti reali tan-negozji tal-fitness
- **Kontroll tal-aċċess għall-karatteristiċi** bl-użu tal-kontrolli tal-plugins u templates ta' Ultimate Multisite
- **Grupp tal-pjanijiet** b'triq ċara ta' upgrade
- **Prodotti Order bump** għal dħul addizzjonali
- **Struttura ta' prezzijiet** ibbażata fuq il-valur għall-klijent, mhux fuq speċifikazzjonijiet tekniċi

---

**Li jmiss:** [Lezzjoni 6: L-Esperjenza tar-Reġistrazzjoni](lesson-6-checkout) -- nibnu checkout flow li jikkonverti sidien ta' studios tal-fitness f'klijenti li jħallsu.
