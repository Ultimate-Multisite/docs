---
title: 'Lektion 5: Design af dine planer'
sidebar_position: 6
_i18n_hash: 8c58dfd0a186bd585f43342bc4ea4f43
---
# Lektion 5: Design af Dine Planer

Dine planer er ikke bare prisniveauer – de afspejler, hvordan dine nichekunder rent faktisk opererer. I denne lektion designer du produktniveauer, der matcher de reelle behov hos fitnessvirksomheder i forskellige faser.

## Hvor Vi Sluttede

FitSite har tre skabeloner klar (Studio Essential, Gym Pro, Fitness Chain). Nu opretter vi planerne, der bestemmer, hvad kunder får adgang til, og hvad de betaler for det.

## Tænkning i Kundesegmenter

Den fejl, de fleste mennesker begår, er at designe planer omkring tekniske funktioner (lagring, båndbredde, antal sider). Dine nichekunder tænker ikke på disse termer. En fitnessvirksomheds ejer tænker over, hvad de har brug for til at drive deres forretning.

For fitnessstudier findes der tre naturlige segmenter:

| Segment | Hvem de er | Hvad de har brug for |
|---|---|---|
| **Solo-trænere / små studier** | 1-3 medarbejdere, ét sted, starter op | En professionel hjemmeside, klasseinformation, kontaktformular |
| **Etablerede fitnesscentre** | 5-20 medarbejdere, ét sted, vokser | Alt ovenstående plus booking, blog, galleri, custom domæne |
| **Fitnesskæder** | Flere lokationer, etableret brand | Alt ovenstående plus multi-site, lokationssider, medarbejderliste |

Dine planer skal kortlægges op imod disse segmenter, ikke efter vilkårlige funktionspakker.

## Oprettelse af FitSite Planerne

Gå til **Ultimate Multisite > Products > Add Product** for hver plan.

### Plan 1: FitSite Starter -- $49/måned

**Målgruppe**: Solo trænere og små studier

**Beskrivelsesfane**:
- Navn: FitSite Starter
- Beskrivelse: "Alt, en personlig træner eller et lille studie har brug for for at se professionelt online."

**Generel fane**:
- Produkt type: Plan
- Kunde rolle: Administrator

**Skabelonstab**:
- Tillad site templates: Aktiveret
- Tilgængelige skabeloner: Studio Essential kun

**Begrænsninger**:
- Sites: 1
- Diskplads: 1 GB
- Custom domain: Deaktiveret (bruger `studioname.fitsite.com`)

**Plugins fane**:
- Contact form plugin: Tvunget aktivering
- SEO plugin: Tvunget aktivering
- Booking plugin: Ikke tilgængelig (opgraderingsincitament)

**Tematisk fane**:
- Dit valgte tema: Tvunget aktivering
- Alle andre temaer: Skjult

### Plan 2: FitSite Growth -- $99/måned

**Målgruppe**: Etablerede fitnesscentre med ét lokation

**Beskrivelsesfane**:
- Navn: FitSite Growth
- Beskrivelse: "Til etablerede fitnesscentre, der er klar til at udvide deres online tilstedeværelse og tiltrække nye medlemmer."

**Skabelonstab**:
- Tilgængelige skabeloner: Studio Essential og Gym Pro

**Begrænsninger**:
- Sites: 1
- Diskplads: 5 GB
- Custom domain: Aktiveret

**Plugins fane**:
- Alt fra Starter, plus:
- Booking plugin: Tvunget aktivering
- Gallery plugin: Tvunget aktivering
- Blog funktionalitet: Tilgængelig

**Opgradering og nedgraderingstab**:
- Plan gruppe: FitSite Plans
- Produktordre: 2

### Plan 3: FitSite Pro -- $199/måned

**Målgruppe**: Fitnesskæder med flere lokationer

**Beskrivelsesfane**:
- Navn: FitSite Pro
- Beskrivelse: "Den komplette platform for fitnessbrands med flere lokationer."

**Site Templates fane**:
- Tilgængelige skabeloner: Alle tre skabeloner

**Begrænsninger**:
- Sider: 5 (én pr. lokation)
- Diskplads: 20 GB
- Custom domæne: Aktiveret

**Plugins fane**:
- Alt i Growth, plus:
- Alle premium plugins: Force Activate

**Op & Nedgraderingsfane**:
- Plan gruppe: FitSite Plans
- Produktrækkefølge: 3

## Opsætning af plangruppen

Plangruppen sikrer, at kunder kun kan opgradere eller nedgradere inden for FitSite planfamilien. På hver plans **Op & Nedgraderingsfane**:

1. Sæt **Plan gruppe** til "FitSite Plans" for alle tre planer
2. Sæt **Produktrækkefølge** til 1 (Starter), 2 (Growth), 3 (Pro)

Dette skaber en klar opgraderingssti: Starter → Growth → Pro.

## Tilføjelse af order bumps

Order bumps er tillægsprodukter, der tilbydes under kassen. For FitSite kan du overveje:

- **Ekstra lagerpakke** ($19/måned) -- yderligere 5 GB diskplads
- **Prioriteret support** ($29/måned) -- hurtigere svartider
- **Yderligere site** ($39/måned) -- til kunder, der har brug for flere sider end deres plan tillader

Opret disse som produkter af type **Package** i Ultimate Multisite og forbinder dem med de relevante planer.

## Hvorfor denne struktur virker

- **Starter** fjer barrierer for indtræden – lav pris, simpel tilbud, får trænere online hurtigt
- **Vækst** tilføjer de funktioner, fitnesscentre rent faktisk spørger om – booking, gallerier, custom domæner
- **Pro** betjener den højværdi-segment, der har brug for support på flere lokationer
- **Order bumps** giver kunderne mulighed for at tilpasse uden at komplicere de grundlæggende planer
- **Klar opgraderingssti** betyder, at kunder vokser sammen med dig i stedet for at forlade dig

## FitSite Netværket Indtil Nu

```
FitSite Network
├── WordPress Multisite (subdomæne mode)
├── Ultimate Multisite (konfigureret)
├── Hosting med wildcard SSL + domænemapping
├── Site Templates (Studio Essential, Gym Pro, Fitness Chain)
├── Products
│   ├── FitSite Starter ($49/måned) → Studio Essential template
│   ├── FitSite Growth ($99/måned) → Studio Essential + Gym Pro templates
│   ├── FitSite Pro ($199/måned) → Alle templates
│   └── Order Bumps (Ekstra lager, Prioriteret support, Yderligere site)
└── Klar til checkout konfiguration (næste lektion)
```

## Hvad Vi Har Bygget Denne Lektion

- **Tre planer** kortlagt efter reelle fitnessvirksomhedssegmenter
- **Funktionsbegrænsning** ved hjælp af Ultimate Multisite's plugin og template-kontroller
- **En plangruppe** med en klar opgraderingssti
- **Order bump produkter** for yderligere indtægt
- **En prisstruktur** baseret på kundens værdi, ikke tekniske specifikationer

**Næste:** [Lektion 6: Tilmeldingsoplevelsen](lesson-6-checkout) -- vi bygger en betalingsproces, der omdanner fitnessstudioejere til betalende kunder.
