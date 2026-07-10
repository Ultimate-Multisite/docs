---
title: 'Læoni 5: Design þessar planir yours'
sidebar_position: 6
_i18n_hash: 8c58dfd0a186bd585f43342bc4ea4f43
---
# Læoni 5: Design á Planum þínum {#lesson-5-designing-your-plans}

Þínar planstegir eru ekki bara verðlaunshættir – þær er einkennir hvernig sérstakliðir þínar viðskiptavinir ná inn. Í þessri læoni munurðu gera design á vöru-stegum sem passar við raunverulega þörf fítness viðskiptaferlisins á öllum stigi.

## Hvar við vorum {#where-we-left-off}
FitSite hefur þrír skjalabúnaðir bók (Studio Essential, Gym Pro, Fitness Chain) klára. Í þessu skrefi skapum planunum sem séra hvaða aðgang viðskiptavinir fá og hvað þeir ná inn.

## Hugsanir í viðskiptavinnastigum {#thinking-in-customer-segments}
Stórasta villu sem fólk gerja er að gera design á planum um tæknilega eiginleika (hugrinn, bandþjónustu, fjölda yfirskrifa). Sérstakliðir þínar hugsa ekki í þeim hugtökum. Stjórnandi gymmi hugsar um það sem hann þarf til að stjórna viðskipti sín.

Fyrir fítness studio eru þrír náttúruleg stafræðir:

| Stafræði | Hvað þeir eru | Hvað þeir þurfa |
|---|---|---|
| **Einkalíkar trænir / smá studio** | 1-3 starfsmönnum, ein staður, byrjar að byrja | Profesionelt síti, upplýsingar um klássi, tengilínan |
| **Fastboðin gymmi** | 5-20 starfsmönnum, ein staður, vaxa | Allt yfir það plús booking, blogg, galleri, sérstakla domén |
| **Fítness kjeder** | Flest staðir, fastbrandið merki | Allt yfir það plús multi-site, staðar-sider, starfsmönnuma-listi |

Planarnir þín verða að passa við þessar stafræðir, ekki við hvarfeytingu eiginleika.

## Skapandi FitSite Planar {#creating-the-fitsite-plans}

Navígu yfir til **Ultimate Multisite > Products > Add Product** fyrir hvert plan.

### Plan 1: FitSite Starter -- $49/month {#plan-1-fitsite-starter----49month}

**Mælingar fyrir:** Eina tæknirækjandi og smá stúdíi

**Skýrslu taburinn (Description tab):**
- Námni: FitSite Starter
- Skýring: "Allt það sem persónulegur tæknirækjandi eða smá stúdíi þarf til að sjokkast sér á netinu."

**Almenn taburinn (General tab):**
- Laugsins hlutfall: Plan
- Klientról: Administrator

**Sítuforma taburinn (Site Templates tab):**
- Leitað í sítuforma: Engar (Enabled)
- Til að gera til við: Studio Essential only

**Begri:**
- Sítur: 1
- Skráningarsvæði: 1 GB
- Handhilda dómvögu: Engar (Disabled) (Notkun `studioname.fitsite.com`)

**Plugin taburinn (Plugins tab):**
- Kontaktform plugin: Til að gera til við (Force Activate)
- SEO plugin: Til að gera til við (Force Activate)
- Booking plugin: Engar (Not Available) (Til að gera til við með áhugaverðum uppfærslu)

**Theme taburinn (Themes tab):**
- Vald themeinn þinn: Til að gera til við (Force Activate)
- Allir öðlingar: Hýnd (Hidden)

### Plan 2: FitSite Growth -- $99/månad {#plan-2-fitsite-growth----99month}

**Mælingar fyrir:** Fastsett gymma með einn stað

**Skýrslu taburinn (Description tab):**
- Námni: FitSite Growth
- Skýring: "Til fastsettra gymma sem eru klára að vaxa nettilfinningu sína og að lokka nýjum liti."

**Sítuforma taburinn (Site Templates tab):**
- Til að gera til við: Studio Essential og Gym Pro

**Begri:**
- Sítur: 1
- Skráningarsvæði: 5 GB
- Handhilda dómvögu: Til að gera til við (Enabled)

**Plugin taburinn (Plugins tab):**
- Allt í Starter, plús:
- Booking plugin: Til að gera til við (Force Activate)
- Gallery plugin: Til að gera til við (Force Activate)
- Blogg ferli: Til að gera til við (Available)

**Upp og niður uppfærslur taburinn (Up & Downgrades tab):**
- Gruppar plan: FitSite Plans
- Ordur fyrir vöru: 2

### Plan 3: FitSite Pro -- $199/månad {#plan-3-fitsite-pro----199month}

**Mælingar fyrir:** Fitness kjeder með fleiri staðir

**Skýrslu taburinn (Description tab):**
- Námni: FitSite Pro
- Skýring: "Fullt plattforma fyrir fitness merki með fleiri staðir."

**Site Templates tab**:
- Til aðgængur temblag: Allir þrír temblög

**Begræðingar**:
- Stöðvar: 5 (eitt fyrir stað)
- Skráningarsvæði: 20 GB
- Handhilda domén: Engar

**Plugins tab**:
- Allt í Growth, ásamt:
- Allir premium plugins: Force Activate

**Up & Downgrades tab**:
- Plan group: FitSite Plans
- Product order: 3

## Innstilling á plan gruppin {#setting-up-the-plan-group}

Plan gruppa tryggir að viðskiptavinir geti aðeins uppgradurð eða nedgravurð í samræmi við FitSite plan family. Á hverjum **Up & Downgrades** tab fyrir planinn:

1. Set **Plan Group** sett á "FitSite Plans" fyrir alls þrír plan
2. Set **Product Order** sett á 1 (Starter), 2 (Growth), 3 (Pro)

Þetta skapar klár uppgradursti: Starter → Growth → Pro.

## Að bæta við order bumps {#adding-order-bumps}

Order bumps eru viðbótsprodukter sem sýnast í samræmi við betalningu. Til FitSite, skoða eftirfarandi möguleika:

- **Extra Storage Pack** ($19/månad) -- aðilandi 5 GB skráningarsvæði
- **Priority Support** ($29/månad) -- hraðari svara
- **Additional Site** ($39/månad) -- fyrir viðskiptavini sem þurfa meiri stöðvar en planinn leyfir

Skapa þessar sem **Package** öryggingar í Ultimate Multisite og tengdu þær við viðeigandi plan.

## Hvað gerir þetta virkja? {#why-this-structure-works}

- **Starter** fjarlæg fyrir inngangshindum – lítil þjónusta, einfaldan tilboð, getur færð ferðamenn online fljótt.
- **Growth** bætir við eiginleika sem træningarnir í raun vilt – nýting, gallerí, sérstök domænir.
- **Pro** þjónar hárvæti segandi miðla sem þurfa stuðning fyrir fleiri staði.
- **Order bumps** leyfa viðskiptavinum að sparna í eiginleikum án þess að koma í gang kompletta planunum.
- **Skýr uppgravning** þegar það er á veg fyrir, þetta þýðir að viðkerðingar vaxa með okkur í stað þess að fari út.

## FitSite Network til núti {#the-fitsite-network-so-far}

```
FitSite Network
├── WordPress Multisite (subdomain mode)
├── Ultimate Multisite (þá sett upp)
├── Hosting með wildcard SSL + domén mapping
├── Site Templates (Studio Essential, Gym Pro, Fitness Chain)
├── Products
│   ├── FitSite Starter ($49/mo) → Studio Essential template
│   ├── FitSite Growth ($99/mo) → Studio Essential + Gym Pro templates
│   ├── FitSite Pro ($199/mo) → All templates
│   └── Order Bumps (Extra Storage, Priority Support, Additional Site)
└── Klar fyrir checkout uppsetningu (næsta læoni)
```

## Hva við byggðum í þessari læoni {#what-we-built-this-lesson}

- **Þrír plansteg** sem eru tengdir raunverulegum hluta ferðamanna.
- **Einingar eiginleika** með notkun plugin eða stílstjórn Ultimate Multisite’s og template controls.
- **Planhópur** með skýrum uppgravningu vegna þess að viðkerðingar vaxa.
- **Order bump vörur** fyrir að ná yfir meira fjármagn.
- **Verðsetning** sem byggir á verði fyrir viðskiptavininn, ekki tæknilegum eiginleikum.

**Næstu:** [Læoni 6: Skráningarsögnin](lesson-6-checkout) – við byggjum áhrifamótun fyrir skráningu sem snýr eigendur fítesskóla í betalendur.
