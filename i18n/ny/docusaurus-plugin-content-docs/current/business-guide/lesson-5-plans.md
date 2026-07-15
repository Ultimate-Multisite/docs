---
title: 'Phunziro 5: Kupanga Mapulani Anu'
sidebar_position: 6
_i18n_hash: 8c58dfd0a186bd585f43342bc4ea4f43
---
# Phunziro 5: Kupanga Mapulani Anu

Magawo a mapulani anu si milingo ya mitengo yokha -- ndi chisonyezo cha mmene makasitomala anu a niche amagwirira ntchito kwenikweni. Mu phunziro ili mudzapanga magawo a zinthu zogulitsa omwe amafanana ndi zosowa zenizeni za mabizinesi a fitness pa magawo osiyanasiyana.

## Pomwe Tidasiyira {#where-we-left-off}

FitSite ili ndi ma template atatu okonzeka (Studio Essential, Gym Pro, Fitness Chain). Tsopano tikupanga mapulani omwe amasankha zomwe makasitomala amapeza mwayi wogwiritsa ntchito ndi zomwe amalipira.

## Kuganiza M'magulu a Makasitomala {#thinking-in-customer-segments}

Cholakwa chomwe anthu ambiri amachita ndi kupanga mapulani potengera zinthu za technical (storage, bandwidth, chiwerengero cha masamba). Makasitomala anu a niche saganiza motero. Mwini gym amaganiza za zomwe akufunikira kuti ayendetse bizinesi yake.

Kwa ma studio a fitness, pali magulu atatu achibadwa:

| Gulu | Ndi Ndani | Zomwe Amafunikira |
|---------|-------------|----------------|
| **Ophunzitsa a payekha / ma studio ang'onoang'ono** | Ogwira ntchito 1-3, malo amodzi, akuyamba | Tsamba la akatswiri, zambiri za makalasi, fomu yolumikizirana |
| **Ma gym okhazikika** | Ogwira ntchito 5-20, malo amodzi, akukula | Zonse zapamwamba kuphatikiza booking, blog, gallery, custom domain |
| **Ma chain a fitness** | Malo angapo, brand yokhazikika | Zonse zapamwamba kuphatikiza multi-site, masamba a malo, chikwatu cha ogwira ntchito |

Mapulani anu ayenera kufanana ndi magulu awa, osati magulu osasankhidwa a zinthu.

## Kupanga Mapulani a FitSite {#creating-the-fitsite-plans}

Pitani ku **Ultimate Multisite > Products > Add Product** pa plan iliyonse.

### Plan 1: FitSite Starter -- $49/mwezi {#plan-1-fitsite-starter----49month}

**Cholinga**: Ophunzitsa a payekha ndi ma studio ang'onoang'ono

**Tab ya Kufotokozera**:
- Dzina: FitSite Starter
- Kufotokozera: "Zonse zomwe personal trainer kapena studio yaying'ono imafunikira kuti iwoneke ngati ya akatswiri pa intaneti."

**Tab ya General**:
- Mtundu wa chinthu: Plan
- Udindo wa kasitomala: Administrator

**Tab ya Site Templates**:
- Lolani ma template a site: Enabled
- Ma template omwe alipo: Studio Essential yokha

**Zoletsa**:
- Ma site: 1
- Disk space: 1 GB
- Custom domain: Disabled (imagwiritsa ntchito `studioname.fitsite.com`)

**Tab ya Plugins**:
- Contact form plugin: Force Activate
- SEO plugin: Force Activate
- Booking plugin: Not Available (chilimbikitso chokweza)

**Tab ya Themes**:
- Theme yomwe mwasankha: Force Activate
- Ma theme ena onse: Hidden

### Plan 2: FitSite Growth -- $99/mwezi {#plan-2-fitsite-growth----99month}

**Cholinga**: Ma gym okhazikika a malo amodzi

**Tab ya Kufotokozera**:
- Dzina: FitSite Growth
- Kufotokozera: "Kwa ma gym okhazikika omwe ali okonzeka kukulitsa kupezeka kwawo pa intaneti ndi kukopa mamembala atsopano."

**Tab ya Site Templates**:
- Ma template omwe alipo: Studio Essential ndi Gym Pro

**Zoletsa**:
- Ma site: 1
- Disk space: 5 GB
- Custom domain: Enabled

**Tab ya Plugins**:
- Zonse zomwe zili mu Starter, kuphatikiza:
- Booking plugin: Force Activate
- Gallery plugin: Force Activate
- Ntchito ya blog: Available

**Tab ya Up & Downgrades**:
- Gulu la plan: FitSite Plans
- Dongosolo la Product: 2

### Plan 3: FitSite Pro -- $199/mwezi {#plan-3-fitsite-pro----199month}

**Cholinga**: Ma chain a fitness a malo angapo

**Tab ya Kufotokozera**:
- Dzina: FitSite Pro
- Kufotokozera: "Platform yonse ya ma brand a fitness okhala ndi malo angapo."

**Tab ya Site Templates**:
- Ma template omwe alipo: Ma template onse atatu

**Zoletsa**:
- Ma site: 5 (limodzi pa malo aliwonse)
- Disk space: 20 GB
- Custom domain: Enabled

**Tab ya Plugins**:
- Zonse zomwe zili mu Growth, kuphatikiza:
- Ma premium plugins onse: Force Activate

**Tab ya Up & Downgrades**:
- Gulu la plan: FitSite Plans
- Dongosolo la Product: 3

## Kukhazikitsa Gulu la Plan {#setting-up-the-plan-group}

Gulu la plan limatsimikizira kuti makasitomala angathe kokha kukweza kapena kutsitsa mkati mwa banja la ma plan a FitSite. Pa tab ya **Up & Downgrades** ya plan iliyonse:

1. Ikani **Plan Group** kukhala "FitSite Plans" pa ma plan onse atatu
2. Ikani **Product Order** kukhala 1 (Starter), 2 (Growth), 3 (Pro)

Izi zimapanga njira yomveka yokwezera: Starter → Growth → Pro.

## Kuwonjezera Order Bumps {#adding-order-bumps}

Order bumps ndi zinthu zowonjezera zomwe zimaperekedwa pa checkout. Kwa FitSite, ganizirani:

- **Extra Storage Pack** ($19/mwezi) -- disk space yowonjezera ya 5 GB
- **Priority Support** ($29/mwezi) -- nthawi yoyankha mwachangu
- **Additional Site** ($39/mwezi) -- kwa makasitomala omwe amafunikira ma site ambiri kuposa omwe plan yawo imalola

Pangani izi ngati zinthu za mtundu wa **Package** mu Ultimate Multisite ndipo zigwirizanitseni ndi ma plan oyenera.

## Chifukwa Chake Kapangidwe Aka Kamagwira Ntchito {#why-this-structure-works}

- **Starter** imachotsa zopinga zolowera -- mtengo wotsika, chopereka chosavuta, imayika ophunzitsa pa intaneti mwachangu
- **Growth** imawonjezera zinthu zomwe ma gym amafunsa kwenikweni -- booking, ma gallery, custom domains
- **Pro** imatumikira gulu la mtengo wapamwamba lomwe limafunikira thandizo la malo angapo
- **Order bumps** zimathandiza makasitomala kusintha monga akufuna popanda kusokoneza mapulani akulu
- **Njira yomveka yokwezera** zikutanthauza kuti makasitomala amakula nanu m'malo mochoka

## Network ya FitSite Mpaka Pano {#the-fitsite-network-so-far}

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

## Zomwe Tinamanga Mu Phunziro Ili {#what-we-built-this-lesson}

- **Magawo atatu a plan** ofananitsidwa ndi magulu enieni a bizinesi ya fitness
- **Kutseka zinthu** pogwiritsa ntchito ma controls a plugin ndi template a Ultimate Multisite
- **Gulu la plan** lokhala ndi njira yomveka yokwezera
- **Zinthu za order bump** za ndalama zowonjezera
- **Kapangidwe ka mitengo** kochokera pa phindu la kasitomala, osati technical specs

---

**Chotsatira:** [Phunziro 6: Zochitika za Kulembetsa](lesson-6-checkout) -- timamanga checkout flow yomwe imasintha eni ma studio a fitness kukhala makasitomala olipira.
