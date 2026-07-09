---
title: 'Darasi na 7: Mai da Shi Naka'
sidebar_position: 8
_i18n_hash: 90013fc79a9cbb15283ce89b688002b1
---
# Darasi na 7: Mayar da Shi Naka

Kada abokan cinikinka su taba jin kamar suna amfani da "wani kari na WordPress." Ya kamata su ji kamar suna amfani da FitSite -- dandali da aka gina domin masana'antarsu. Wannan darasin ya ƙunshi alama, sanya alamar kamfaninka, da sa dandali ya ji kamar samfur.

## Inda Muka Tsaya

FitSite yana da tsarin biya mai aiki wanda ke kai masu gidajen studio na fitness daga zaɓin tsari zuwa shafi mai aiki. Yanzu za mu sa dukkan gogewar ta ji kamar samfur guda ɗaya mai alama.

## Domain na Dandalinka

Tushen alamarka shi ne domain ɗinka. Ga FitSite:

- **Babban domain**: `fitsite.com` (shafin tallanka da tushen network)
- **Shafukan abokan ciniki**: `studioname.fitsite.com` (subdomains)
- **Domains na musamman**: Abokan ciniki a tsare-tsaren Growth da Pro za su iya haɗa nasu domain

### Saita Domain Ɗinka

1. Yi rijistar domain na dandalinka
2. Nuna shi zuwa mai ba da hosting ɗinka
3. Saita wildcard DNS (`*.fitsite.com`) don subdomains na abokan ciniki
4. Tabbatar wildcard SSL yana aiki

Duba [Yadda ake Saita Domain Mapping](/user-guide/domain-mapping/how-to-configure-domain-mapping) don cikakkun umarni.

## Sanya Alamar Kamfaninka a Gogewar Admin

Lokacin da mai gidan studio na fitness ya shiga dashboard na shafinsa, ya kamata ya ga alamarka, ba alamar WordPress ko Ultimate Multisite ba.

### Shafin Shiga na Musamman

Keɓance shafin shiga na WordPress don ya nuna:

- Tambarin FitSite ɗinka
- Hotunan bango da suka dace da fitness
- Launukan alamarka

### Alamar Dashboard

Yi amfani da addon [Admin Page Creator](/addons/admin-page-creator) ko CSS na musamman don:

- Maye gurbin tambarin WordPress da tambarin FitSite ɗinka
- Keɓance tsarin launukan admin don ya dace da alamarka
- Ƙara widget na dashboard na musamman da hanyoyin sauri da albarkatun taimako na musamman ga fitness

### Shafukan Admin na Musamman

Yi la'akari da ƙirƙirar shafukan admin na musamman waɗanda ke fito da ayyukan da suka fi dacewa ga masu gidajen studio na fitness:

- "Gyara Jadawalin Azuzuwanku"
- "Sabunta Bayanan Masu Horarwa"
- "Duba Shafinku"

Wannan yana rage wahalar koyo ta hanyar sanya ayyukan da suka dace da wannan fanni a gaba da tsakiya maimakon ɓoye su a cikin menu na WordPress na yau da kullum.

## Sanya Alama a Sadarwarka

Kowane imel, rasit, da sanarwa ya kamata ya ƙarfafa alamarka.

### Imel na Tsari

Je zuwa **Ultimate Multisite > Settings > Emails** ka keɓance dukkan imel na tsari:

- **Sunan mai aikawa**: FitSite
- **Imel na mai aikawa**: hello@fitsite.com
- **Samfuran imel**: Yi amfani da launukan alamarka da tambari
- **Harshe**: Na musamman ga fitness a ko'ina

Muhimman imel da za a keɓance:

| Imel | Sigar Gabaɗaya | Sigar FitSite |
|-------|----------------|-----------------|
| Maraba | "Sabon shafinka ya shirya" | "Gidan yanar gizon studio ɗinka na fitness yana aiki" |
| Rasitin biya | "An karɓi biya" | "An tabbatar da biyan subscription na FitSite" |
| Ƙarshen gwaji | "Gwajinka zai ƙare nan ba da daɗewa ba" | "Gwajin FitSite ɗinka zai ƙare cikin kwanaki 3 -- ci gaba da sa gidan yanar gizon studio ɗinka ya kasance a raye" |

### Rasitoci

Keɓance samfuran rasiti da:

- Tambarin FitSite ɗinka da launukan alama
- Bayanai na kasuwancinka
- Sunayen samfur na musamman ga fitness (ba IDs na tsari na gabaɗaya ba)

## Shafin da Abokin Ciniki ke Gani

Babban domain ɗinka (`fitsite.com`) yana buƙatar shafin talla da ke sayar da dandalin. Wannan ya bambanta da admin na network na Ultimate Multisite -- shi ne fuskar jama'a ta kasuwancinka.

Muhimman shafuka:

- **Shafin farko**: Bayyanannen ƙimar da ake bayarwa ga kasuwancin fitness
- **Fasaloli**: Abin da FitSite yake yi, cikin kalmomin fitness
- **Farashi**: Tsare-tsarenka uku tare da kwatancen fasaloli na musamman ga wannan fanni
- **Misalai**: Nuna shafukan da aka gina a kan dandalin
- **Yi Rajista**: Hanyoyi zuwa fom ɗin biyanka

:::tip Your Marketing Site Can Be a Network Site
Create your marketing site as a site within your own network. This lets you manage it from the same dashboard and demonstrates your own platform's capabilities.
:::

## Domain na Musamman ga Abokan Ciniki

Ga abokan ciniki a kan tsare-tsaren da suka haɗa da domains na musamman, rubuta tsarin a fili:

1. Abokin ciniki ya yi rijista ko ya canja domain ɗinsa zuwa registrar
2. Abokin ciniki ya sabunta DNS don ya nuna zuwa dandalinka (ka bayar da takamaiman records)
3. Ultimate Multisite yana kula da domain mapping da SSL

Ƙirƙiri labarin taimako ko shigarwa a knowledge base musamman don wannan tsari, a rubuce ga masu gidajen studio na fitness da ba su da ƙwarewar fasaha.

## Network na FitSite Zuwa Yanzu

```
FitSite Network
├── WordPress Multisite (subdomain mode)
├── Ultimate Multisite (configured + branded)
├── Platform Domain (fitsite.com + wildcard SSL)
├── Site Templates (Studio Essential, Gym Pro, Fitness Chain)
├── Products (Starter, Growth, Pro + Order Bumps)
├── Checkout Flow (niche-specific, tested)
├── Branding
│   ├── Custom login page
│   ├── Branded admin dashboard
│   ├── Niche-specific system emails
│   ├── Branded invoices
│   └── Marketing site on fitsite.com
└── Ready for onboarding flow (next lesson)
```

## Abin da Muka Gina a Wannan Darasin

- **Domain na dandali da DNS** da aka saita don gogewa mai alama
- **Admin mai alamar kamfaninka** tare da alamar FitSite a ko'ina
- **Sadarwa da aka keɓance** -- imel, rasitoci, da sanarwa duk suna kan alama
- **Shafin talla** da ke sayar da FitSite ga masu gidajen studio na fitness
- **Takardun domain na musamman** ga abokan ciniki da ke son nasu domain

---

**Na gaba:** [Darasi na 8: Onboarding na Abokin Ciniki](lesson-8-onboarding) -- za mu tsara gogewar da ke mayar da sabon mai rajista zuwa abokin ciniki mai aiki da farin ciki.
