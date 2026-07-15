---
title: 'Leksjon 5: Designe dine planer'
sidebar_position: 6
_i18n_hash: 8c58dfd0a186bd585f43342bc4ea4f43
---
# Leksjon 5: Designe Planene Dine

Plan-nivåene dine er ikke bare prispunkter – de er en refleksjon av hvordan dine nisje-kunder faktisk opererer. I denne leksjonen skal du designe produktnivåer som matcher de virkelige behovene til treningsbedrifter i ulike faser.

## Hvor Vi Slapp {#where-we-left-off}

FitSite har tre maler klare (Studio Essential, Gym Pro, Fitness Chain). Nå skal vi lage planene som bestemmer hva kundene får tilgang til, og hva de betaler for.

## Tenke i Kundesegmenter {#thinking-in-customer-segments}

Feilen de fleste gjør, er å designe planer basert på tekniske funksjoner (lagring, båndbredde, antall sider). Dine nisje-kunder tenker ikke i slike termer. En treningsstudio-eier tenker på hva de trenger for å drive virksomheten sin.

For treningsstudioer finnes det tre naturlige segmenter:

| Segment | Hvem De Er | Hva De Trenger |
|---------|-------------|----------------|
| **Solo-trenere / små studioer** | 1–3 ansatte, én lokasjon, starter opp | En profesjonell nettside, timeinformasjon, kontaktskjema |
| **Etablererte treningssentre** | 5–20 ansatte, én lokasjon, vokser | Alt ovenfor pluss booking, blogg, galleri, custom domain |
| **Treningskjeder** | Flere lokasjoner, etablert merkevare | Alt ovenfor pluss multisite, lokasjonssider, ansattregister |

Planene dine bør kartlegges mot disse segmentene, ikke mot vilkårlige funksjonsklynger.

## Opprette FitSite Planer {#creating-the-fitsite-plans}

Gå til **Ultimate Multisite > Products > Add Product** for hver plan.

### Plan 1: FitSite Starter -- $49/mnd {#plan-1-fitsite-starter----49month}

**Målgruppe**: Solo-trenere og små studioer

**Description-fanen**:
- Navn: FitSite Starter
- Beskrivelse: "Alt en personlig trener eller et lite studio trenger for å se profesjonelt ut på nettet."

**General-fanen**:
- Produkttype: Plan
- Kundens rolle: Administrator

**Site Templates-fanen**:
- Tillat site-maler: Enabled
- Tilgjengelige maler: Studio Essential kun

**Begrensninger**:
- Steder: 1
- Diskplass: 1 GB
- Custom domain: Disabled (bruker `studioname.fitsite.com`)

**Plugins-fanen**:
- Kontaktskjema-plugin: Force Activate
- SEO-plugin: Force Activate
- Booking-plugin: Not Available (oppgraderingsinsentiv)

**Themes-fanen**:
- Ditt valgte tema: Force Activate
- Alle andre temaer: Hidden

### Plan 2: FitSite Growth -- $99/mnd {#plan-2-fitsite-growth----99month}

**Målgruppe**: Etablererte treningssentre i én lokasjon

**Description-fanen**:
- Navn: FitSite Growth
- Beskrivelse: "For etablerte treningssentre som er klare til å vokse sin nettholdning og tiltrekke seg nye medlemmer."

**Site Templates-fanen**:
- Tilgjengelige maler: Studio Essential og Gym Pro

**Begrensninger**:
- Steder: 1
- Diskplass: 5 GB
- Custom domain: Enabled

**Plugins-fanen**:
- Alt i Starter, pluss:
- Booking-plugin: Force Activate
- Galleri-plugin: Force Activate
- Bloggfunksjonalitet: Available

**Up & Downgrades-fanen**:
- Plan-gruppe: FitSite Plans
- Produktrekkefølge: 2

### Plan 3: FitSite Pro -- $199/mnd {#plan-3-fitsite-pro----199month}

**Målgruppe**: Treningskjeder med flere lokasjoner

**Description-fanen**:
- Navn: FitSite Pro
- Beskrivelse: "Den komplette plattformen for treningsmerker med flere lokasjoner."

**Site Templates-fanen**:
- Tilgjengelige maler: Alle tre malene

**Begrensninger**:
- Steder: 5 (én per lokasjon)
- Diskplass: 20 GB
- Custom domain: Enabled

**Plugins-fanen**:
- Alt i Growth, pluss:
- Alle premium plugins: Force Activate

**Up & Downgrades-fanen**:
- Plan-gruppe: FitSite Plans
- Produktrekkefølge: 3

## Oppsett av Plan-gruppen {#setting-up-the-plan-group}

Plan-gruppen sikrer at kundene kun kan oppgradere eller nedgradere innenfor FitSite-planfamilien. På **Up & Downgrades**-fanen for hver plan:

1. Sett **Plan Group** til "FitSite Plans" for alle tre planene
2. Sett **Product Order** til 1 (Starter), 2 (Growth), 3 (Pro)

Dette skaper en klar oppgraderingssti: Starter → Growth → Pro.

## Legge til Order Bumps {#adding-order-bumps}

Order bumps er tilleggsprodukter som tilbys under kassen. For FitSite, vurder:

- **Extra Storage Pack** ($19/mnd) -- ekstra 5 GB diskplass
- **Priority Support** ($29/mnd) -- raskere responstid
- **Additional Site** ($39/mnd) -- for kunder som trenger flere steder enn planen tillater

Opprett disse som produkter av typen **Package** i Ultimate Multisite og knytt dem til de relevante planene.

## Hvorfor Denne Strukturen Fungerer {#why-this-structure-works}

- **Starter** fjerner inngangsbarrierer – lav pris, enkelt tilbud, får trenere online raskt
- **Growth** legger til funksjoner som treningssentre faktisk etterspør – booking, gallerier, custom domains
- **Pro** betjener det høyt verdsatte segmentet som trenger multisite-støtte
- **Order bumps** lar kundene tilpasse uten å komplisere kjerneplanene
- **Klar oppgraderingssti** betyr at kundene vokser med deg i stedet for å forlate deg

## FitSite Nettverket Så Langt {#the-fitsite-network-so-far}

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

## Hva Vi Bygget Denne Leksjonen {#what-we-built-this-lesson}

- **Tre plan-nivåer** kartlagt til virkelige treningsbedriftssegmenter
- **Funksjonsbegrensning** ved hjelp av Ultimate Multisites plugin- og malkontroller
- **En plan-gruppe** med en klar oppgraderingssti
- **Order bump-produkter** for ekstra inntekt
- **En prisstruktur** basert på kundeverdi, ikke tekniske spesifikasjoner

---

**Neste:** [Leksjon 6: Oppsett av Kassen](lesson-6-checkout) -- vi bygger en kasseflyt som konverterer eiere av treningsstudioer til betalende kunder.
