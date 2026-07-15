---
title: 'Les 7: Het naar je hand zetten'
sidebar_position: 8
_i18n_hash: 90013fc79a9cbb15283ce89b688002b1
---
# Les 7: Maak Het Jouw

Je klanten mogen nooit het gevoel hebben dat ze "gewoon een WordPress plugin" gebruiken. Ze moeten het gevoel hebben dat ze FitSite gebruiken – een platform dat is gebouwd voor hun specifieke branche. In deze les behandelen we branding, white-labeling en hoe je het platform het gevoel geeft van een volwaardig product.

## Waar We Gebleven Zijn {#where-we-left-off}

FitSite heeft een werkende checkout-flow die fitnessstudio-eigenaren van planselectie naar een live site brengt. Nu zorgen we ervoor dat de gehele ervaring voelt als een samenhangend, gebrand product.

## Het Platformdomein {#your-platform-domain}

De basis van je merk is je domein. Voor FitSite:

- **Hoofddomein**: `fitsite.com` (je marketingwebsite en netwerkroot)
- **Klantwebsites**: `studioname.fitsite.com` (subdomeinen)
- **Aangepaste domeinen**: Klanten op de Growth- en Pro-abonnementen kunnen hun eigen domein koppelen

### Je Domein Instellen {#setting-up-your-domain}

1. Registreer je platformdomein
2. Richt het domein door naar je hostingprovider
3. Configureer wildcard DNS (`*.fitsite.com`) voor klantsubdomeinen
4. Zorg ervoor dat wildcard SSL actief is

Zie [Hoe je Domeinmapping Configureert](/user-guide/domain-mapping/how-to-configure-domain-mapping) voor gedetailleerde instructies.

## De Admin Ervaring White-Labelen {#white-labeling-the-admin-experience}

Wanneer een fitnessstudio-eigenaar in het dashboard van zijn site inlogt, moet hij jouw merk zien, en niet de branding van WordPress of Ultimate Multisite.

### Custom Login Pagina {#custom-login-page}

Pas de WordPress loginpagina aan om te tonen:

- Het FitSite logo
- Fitnessgeschikte achtergrondafbeeldingen
- Jouw merk-kleuren

### Dashboard Branding {#dashboard-branding}

Gebruik de [Admin Page Creator](/addons/admin-page-creator) addon of custom CSS om:

- Het WordPress logo te vervangen door je FitSite logo
- Het admin kleurenschema aan te passen zodat het bij je merk past
- Een aangepaste dashboard widget toe te voegen met fitnessspecifieke snelkoppelingen en hulpbronnen

### Custom Admin Pagina's {#custom-admin-pages}

Overweeg het aanmaken van aangepaste adminpagina's die de meest relevante acties voor fitnessstudio-eigenaren naar voren brengen:

- "Bewerk Je Lesrooster"
- "Update Trainer Profielen"
- "Bekijk Je Site"

Dit vermindert de leercurve door niche-relevante acties centraal te plaatsen in plaats van ze te verbergen in het standaard WordPress menu.

## Je Communicatie Branden {#branding-your-communications}

Elk e-mailbericht, elke factuur en elke melding moet jouw merk versterken.

### Systeem E-mails {#system-emails}

Navigeer naar **Ultimate Multisite > Settings > Emails** en pas alle systeem-e-mails aan:

- **Van naam**: FitSite
- **Van e-mail**: hello@fitsite.com
- **E-mail templates**: Gebruik jouw merk-kleuren en logo
- **Taal**: Fitnessspecifiek door en door

Belangrijke e-mails om aan te passen:

| E-mail | Algemene Versie | FitSite Versie |
|-------|----------------|-----------------|
| Welkom | "Je nieuwe site is klaar" | "Je fitnessstudio website is live" |
| Betalingsoverzicht | "Betaling ontvangen" | "FitSite abonnement betaling bevestigd" |
| Proefperiode eindigt | "Je proefperiode eindigt snel" | "Je FitSite proefperiode eindigt over 3 dagen – houd je studio website live" |

### Facturen {#invoices}

Pas factuurtemplates aan met:

- Het FitSite logo en merk-kleuren
- Jouw bedrijfsgegevens
- Fitnessspecifieke productnamen (geen algemene plan-ID's)

## De Klantgerichte Site {#the-customer-facing-site}

Je hoofddomein (`fitsite.com`) heeft een marketingwebsite die het platform verkoopt. Dit is gescheiden van het Ultimate Multisite netwerk-admin – het is het publieke gezicht van je bedrijf.

Belangrijke pagina's:

- **Homepage**: Duidelijke waardepropositie voor fitnessbedrijven
- **Features**: Wat FitSite doet, in fitnesstermen
- **Pricing**: Je drie abonnementen met niche-specifieke vergelijkingen
- **Examples**: Toon websites die op het platform zijn gebouwd
- **Sign Up**: Links naar je checkout-formulier

:::tip Je Marketingwebsite Kan Een Netwerkwebsite Zijn
Maak je marketingwebsite aan als een site binnen je eigen netwerk. Dit stelt je in staat om deze te beheren vanuit hetzelfde dashboard en toont de mogelijkheden van jouw eigen platform.
:::

## Custom Domein voor Klanten {#custom-domain-for-customers}

Voor klanten op abonnementen die custom domeinen bevatten, documenteer het proces dan duidelijk:

1. De klant registreert of verplaatst zijn domein naar een registrar
2. De klant werkt de DNS bij om te wijzen naar jouw platform (verstrek exacte records)
3. Ultimate Multisite handelt de domeinmapping en SSL af

Maak een helpartikel of kennisbank-entry specifiek voor dit proces, geschreven voor niet-technische fitnessstudio-eigenaren.

## Het FitSite Netwerk Tot Nu Toe {#the-fitsite-network-so-far}

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

## Wat We Gebouwd Hebben Deze Les {#what-we-built-this-lesson}

- **Platformdomein en DNS** geconfigureerd voor een gebrandde ervaring
- **White-labeled admin** met FitSite branding overal
- **Aangepaste communicatie** – e-mails, facturen en meldingen allemaal op merk
- **Een marketingwebsite** die FitSite verkoopt aan fitnessstudio-eigenaren
- **Documentatie voor custom domeinen** voor klanten die hun eigen domein willen

---

**Volgende:** [Les 8: Klant Onboarding](lesson-8-onboarding) – we ontwerpen de ervaring die een nieuwe inschrijving omzet in een actieve, tevreden klant.
