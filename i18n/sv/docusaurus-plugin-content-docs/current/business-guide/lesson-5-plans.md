---
title: 'Lektion 5: Designa dina planer'
sidebar_position: 6
_i18n_hash: 8c58dfd0a186bd585f43342bc4ea4f43
---
# Lektion 5: Designa dina planer

Dina planerivåer är inte bara prissättningsnivåer – de är en spegling av hur dina nischkunder faktiskt arbetar. I denna lektion kommer du att designa produktnivåer som matchar de verkliga behoven hos träningsföretag i olika skeden.

## Var vi slutade {#where-we-left-off}

FitSite har tre färdiga mallar (Studio Essential, Gym Pro, Fitness Chain). Nu skapar vi planerna som bestämmer vad kunderna får tillgång till och vad de betalar för.

## Tänk i kundsegment {#thinking-in-customer-segments}

Misstaget de flesta gör är att designa planer baserat på tekniska funktioner (lagring, bandbredd, antal sidor). Dina nischkunder tänker inte i sådana termer. En gymägare tänker på vad hen behöver för att driva sin verksamhet.

För träningsstudior finns det tre naturliga segment:

| Segment | Vem de är | Vad de behöver |
|---------|-------------|----------------|
| **Enskilda tränare / små studior** | 1–3 anställda, en plats, i början | En professionell webbplats, klassinformation, kontaktformulär |
| **Etablerade gym** | 5–20 anställda, en plats, växande | Allt ovanstående plus bokning, blogg, galleri, egen domän |
| **Träningskedjor** | Flera platser, etablerat varumärke | Allt ovanstående plus multisite, sidor för platser, personalregister |

Dina planer bör matcha dessa segment, inte godtyckliga funktionspaket.

## Skapa FitSite-planerna {#creating-the-fitsite-plans}

Navigera till **Ultimate Multisite > Products > Add Product** för varje plan.

### Plan 1: FitSite Starter -- $49/månad {#plan-1-fitsite-starter----49month}

**Målgrupp**: Enskilda tränare och små studior

**Fliken Beskrivning**:
- Namn: FitSite Starter
- Beskrivning: "Allt en personlig tränare eller en liten studio behöver för att se professionell online."

**Fliken Allmän**:
- Produkttyp: Plan
- Kundroll: Administrator

**Fliken Webbplatsmallar**:
- Tillåt webbplatsmallar: Aktiverat
- Tillgängliga mallar: Endast Studio Essential

**Begränsningar**:
- Webbplatser: 1
- Diskutrymme: 1 GB
- Egen domän: Inaktiverad (använder `studionamn.fitsite.com`)

**Fliken Plugins**:
- Kontaktformulär-plugin: Tvinga aktivering
- SEO-plugin: Tvinga aktivering
- Bokningsplugin: Inte tillgängligt (uppgraderingsincitament)

**Fliken Teman**:
- Ditt valda tema: Tvinga aktivering
- Alla andra teman: Dolda

### Plan 2: FitSite Growth -- $99/månad {#plan-2-fitsite-growth----99month}

**Målgrupp**: Etablerade gym på en plats

**Fliken Beskrivning**:
- Namn: FitSite Growth
- Beskrivning: "För etablerade gym som är redo att växa sin online-närvaro och locka nya medlemmar."

**Fliken Webbplatsmallar**:
- Tillgängliga mallar: Studio Essential och Gym Pro

**Begränsningar**:
- Webbplatser: 1
- Diskutrymme: 5 GB
- Egen domän: Aktiverad

**Fliken Plugins**:
- Allt i Starter, plus:
- Bokningsplugin: Tvinga aktivering
- Galleri-plugin: Tvinga aktivering
- Bloggfunktionalitet: Tillgänglig

**Fliken Uppgraderingar & Nedgraderingar**:
- Planfamilj: FitSite Plans
- Produktordning: 2

### Plan 3: FitSite Pro -- $199/månad {#plan-3-fitsite-pro----199month}

**Målgrupp**: Träningskedjor med flera platser

**Fliken Beskrivning**:
- Namn: FitSite Pro
- Beskrivning: "Den kompletta plattformen för träningsvarumärken med flera platser."

**Fliken Webbplatsmallar**:
- Tillgängliga mallar: Alla tre mallar

**Begränsningar**:
- Webbplatser: 5 (en per plats)
- Diskutrymme: 20 GB
- Egen domän: Aktiverad

**Fliken Plugins**:
- Allt i Growth, plus:
- Alla premium-plugins: Tvinga aktivering

**Fliken Uppgraderingar & Nedgraderingar**:
- Planfamilj: FitSite Plans
- Produktordning: 3

## Inställning av planfamiljen {#setting-up-the-plan-group}

Planfamiljen säkerställer att kunderna endast kan uppgradera eller nedgradera inom FitSite-planfamiljen. På varje plans flik **Uppgraderingar & Nedgraderingar**:

1. Ställ in **Planfamilj** till "FitSite Plans" för alla tre planerna
2. Ställ in **Produktordning** till 1 (Starter), 2 (Growth), 3 (Pro)

Detta skapar en tydlig uppgraderingsväg: Starter → Growth → Pro.

## Lägga till order bumps {#adding-order-bumps}

Order bumps är tilläggsprodukter som erbjuds vid kassan. För FitSite kan du överväga:

- **Extra lagringspaket** ($19/månad) – ytterligare 5 GB diskutrymme
- **Prioriterat support** ($29/månad) – snabbare svarstider
- **Ytterligare webbplats** ($39/månad) – för kunder som behöver fler webbplatser än vad deras plan tillåter

Skapa dessa som produkter av typen **Package** i Ultimate Multisite och associera dem med de relevanta planerna.

## Varför denna struktur fungerar {#why-this-structure-works}

- **Starter** tar bort inträdeshinder – lågt pris, enkelt erbjudande, får tränare online snabbt
- **Growth** lägger till de funktioner gym faktiskt efterfrågar – bokning, gallerier, egna domäner
- **Pro** betjänar det högvärdiga segmentet som behöver stöd för flera platser
- **Order bumps** låter kunder anpassa utan att komplicera kärnplanerna
- **Tydlig uppgraderingsväg** innebär att kunderna växer med dig istället för att lämna

## FitSite Network hittills {#the-fitsite-network-so-far}

```
FitSite Network
├── WordPress Multisite (subdomain mode)
├── Ultimate Multisite (konfigurerad)
├── Hosting med wildcard SSL + domänmappning
├── Site Templates (Studio Essential, Gym Pro, Fitness Chain)
├── Products
│   ├── FitSite Starter ($49/månad) → Studio Essential mall
│   ├── FitSite Growth ($99/månad) → Studio Essential + Gym Pro mallar
│   ├── FitSite Pro ($199/månad) → Alla mallar
│   └── Order Bumps (Extra Lagring, Prioriterat Support, Ytterligare Webbplats)
└── Redo för kassa-konfiguration (nästa lektion)
```

## Vad vi byggde i denna lektion {#what-we-built-this-lesson}

- **Tre plannivåer** kopplade till verkliga träningsverksamhetssegment
- **Funktionsbegränsning** med hjälp av Ultimate Multisites plugin- och mallkontroller
- **En planfamilj** med en tydlig uppgraderingsväg
- **Order bump-produkter** för extra intäkter
- **En prissättningsstruktur** baserad på kundvärde, inte tekniska specifikationer

---

**Nästa:** [Lektion 6: Uppregistreringsupplevelsen](lesson-6-checkout) -- vi bygger ett kassaflöde som konverterar träningsstudieägare till betalande kunder.
