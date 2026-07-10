---
title: 'Les 5: Het ontwerpen van uw plannen'
sidebar_position: 6
_i18n_hash: 8c58dfd0a186bd585f43342bc4ea4f43
---
# Les 5: Het Ontwerpen van Uw Plannen {#lesson-5-designing-your-plans}

Uw planlagen zijn meer dan alleen prijsniveaus – ze zijn een weerspiegeling van hoe uw nicheklanten daadwerkelijk werken. In deze les ontwerpt u productlagen die aansluiten bij de echte behoeften van fitnessbedrijven in verschillende stadia.

## Waar We Gebleven Zijn {#where-we-left-off}

FitSite heeft drie templates klaarstaan (Studio Essential, Gym Pro, Fitness Chain). Nu creëren we de plannen die bepalen waarop klanten toegang krijgen en wat ze betalen.

## Denken in Klachtensegmenten {#thinking-in-customer-segments}

De fout die de meeste mensen maken, is het ontwerpen van plannen rond technische functies (opslag, bandbreedte, aantal pagina's). Uw nicheklanten denken niet in die termen. Een sportschooleigenaar denkt na over wat ze nodig hebben om hun bedrijf te laten draaien.

Voor fitnessstudio's bestaan er drie natuurlijke segmenten:

| Segment | Wie Ze Zijn | Wat Ze Nodig Hebben |
|---------|-------------|----------------|
| **Solo trainers / kleine studio's** | 1-3 personeelsleden, één locatie, net beginnen | Een professionele site, lesinformatie, contactformulier |
| **Gevestigde sportscholen** | 5-20 personeelsleden, één locatie, groeien | Alles van bovenstaande plus boeking, blog, galerij, custom domain |
| **Fitnessketens** | Meerdere locaties, gevestigd merk | Alles van bovenstaande plus multi-site, locatieweergaven, personeelsverzeichnis |

Uw plannen moeten hierop gebaseerd zijn, en niet op willekeurige functiegroepen.

## Het Creëren van de FitSite Plannen {#creating-the-fitsite-plans}

Navigeer naar **Ultimate Multisite > Products > Add Product** voor elk plan.

### Plan 1: FitSite Starter -- $49/maand {#plan-1-fitsite-starter----49month}

**Doelgroep**: Solo trainers en kleine studio's

**Description tab**:
- Naam: FitSite Starter
- Beschrijving: "Alles wat een personal trainer of kleine studio nodig heeft om online professioneel te ogen."

**General tab**:
- Producttype: Plan
- Klantrol: Administrator

**Site Templates tab**:
- Site templates toestaan: Enabled
- Beschikbare templates: Alleen Studio Essential

**Limitations**:
- Sites: 1
- Opslagruimte: 1 GB
- Custom domain: Disabled (gebruikt `studioname.fitsite.com`)

**Plugins tab**:
- Contact form plugin: Force Activate
- SEO plugin: Force Activate
- Booking plugin: Niet beschikbaar (upgrade prikkel)

**Themes tab**:
- Uw geselecteerde thema: Force Activate
- Alle andere thema's: Hidden

### Plan 2: FitSite Growth -- $99/maand {#plan-2-fitsite-growth----99month}

**Doelgroep**: Gevestigde sportscholen op één locatie

**Description tab**:
- Naam: FitSite Growth
- Beschrijving: "Voor gevestigde sportscholen die klaar zijn om hun online aanwezigheid te laten groeien en nieuwe leden aan te trekken."

**Site Templates tab**:
- Beschikbare templates: Studio Essential en Gym Pro

**Limitations**:
- Sites: 1
- Opslagruimte: 5 GB
- Custom domain: Enabled

**Plugins tab**:
- Alles in Starter, plus:
- Booking plugin: Force Activate
- Gallery plugin: Force Activate
- Blog functionaliteit: Available

**Up & Downgrades tab**:
- Plan group: FitSite Plans
- Product order: 2

### Plan 3: FitSite Pro -- $199/maand {#plan-3-fitsite-pro----199month}

**Doelgroep**: Fitnessketens met meerdere locaties

**Description tab**:
- Naam: FitSite Pro
- Beschrijving: "Het complete platform voor fitnessmerken met meerdere locaties."

**Site Templates tab**:
- Beschikbare templates: Alle drie de templates

**Limitations**:
- Sites: 5 (één per locatie)
- Opslagruimte: 20 GB
- Custom domain: Enabled

**Plugins tab**:
- Alles in Growth, plus:
- Alle premium plugins: Force Activate

**Up & Downgrades tab**:
- Plan group: FitSite Plans
- Product order: 3

## Het Instellen van de Plan Groep {#setting-up-the-plan-group}

De plan groep zorgt ervoor dat klanten alleen binnen de FitSite planfamilie kunnen upgraden of downgraden. Op de **Up & Downgrades** tab van elk plan:

1. Stel de **Plan Group** in op "FitSite Plans" voor alle drie de plannen
2. Stel de **Product Order** in op 1 (Starter), 2 (Growth), 3 (Pro)

Dit creëert een duidelijke upgrade-route: Starter → Growth → Pro.

## Het Toevoegen van Aankoopaanvullingen (Order Bumps) {#adding-order-bumps}

Aankoopaanvullingen zijn add-on producten die tijdens het afrekenproces worden aangeboden. Voor FitSite kunt u overwegen:

- **Extra Storage Pack** ($19/maand) -- extra 5 GB opslagruimte
- **Priority Support** ($29/maand) -- snellere reactietijden
- **Additional Site** ($39/maand) -- voor klanten die meer sites nodig hebben dan hun plan toestaat

Maak deze aan als producten van type **Package** in Ultimate Multisite en koppel ze aan de relevante plannen.

## Waarom Deze Structuur Werkt {#why-this-structure-works}

- **Starter** verwijdert drempels: lage prijs, eenvoudig aanbod, brengt trainers snel online
- **Growth** voegt de functies toe waar sportscholen daadwerkelijk om vragen: boeking, galerijen, custom domains
- **Pro** bedient het segment met hoge waarde dat multi-locatie ondersteuning nodig heeft
- **Aankoopaanvullingen** stellen klanten in staat om te personaliseren zonder de kernplannen te compliceren
- **Duidelijke upgrade-route** betekent dat klanten met u groeien in plaats van weg te vallen

## Het FitSite Netwerk Tot Nu Toe {#the-fitsite-network-so-far}

```
FitSite Network
├── WordPress Multisite (subdomain mode)
├── Ultimate Multisite (geconfigureerd)
├── Hosting met wildcard SSL + domain mapping
├── Site Templates (Studio Essential, Gym Pro, Fitness Chain)
├── Products
│   ├── FitSite Starter ($49/maand) → Studio Essential template
│   ├── FitSite Growth ($99/maand) → Studio Essential + Gym Pro templates
│   ├── FitSite Pro ($199/maand) → Alle templates
│   └── Order Bumps (Extra Storage, Priority Support, Additional Site)
└── Klaar voor checkout configuratie (volgende les)
```

## Wat We Deze Les Hebben Gebouwd {#what-we-built-this-lesson}

- **Drie planlagen** gekoppeld aan echte fitnessbedrijfssegmenten
- **Functionaliteitsbeperking** met de plugin- en templatecontroles van Ultimate Multisite
- **Een plan groep** met een duidelijke upgrade-route
- **Aankoopaanvullingsproducten** voor extra inkomsten
- **Een prijsstructuur** gebaseerd op klantwaarde, niet op technische specificaties

---

**Volgende:** [Lesson 6: The Signup Experience](lesson-6-checkout) -- we bouwen een checkout-flow die fitnessstudio-eigenaren omzet in betalende klanten.
