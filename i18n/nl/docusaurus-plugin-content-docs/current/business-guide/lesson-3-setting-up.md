---
title: 'Les 3: Het instellen van uw netwerk'
sidebar_position: 4
_i18n_hash: 4bffe2f3ba68d1a58bfc32d6b0a3c5c7
---
# Les 3: Het Instellen van Uw Netwerk

Het is tijd om te bouwen. In deze les installeert u Ultimate Multisite en configureert u de basis van het FitSite-netwerk. Elke beslissing die we hier nemen, is gericht op de fitnessniche.

## Waar We Gebleven Zijn

We hebben fitnessstudio's gekozen als onze niche en de kans gevalideerd. Nu zetten we dat idee om in een werkend platform.

## Uw Hosting Kiezen

Uw hostingkeuze is belangrijker voor een nicheplatform dan voor één enkele website. U host niet één site – u host een netwerk dat zal groeien naar tientallen of zelfs honderden sites.

### Waar U Op Moet Letten

- **WordPress Multisite ondersteuning**: Niet alle hosts zijn goed in multisite.
- **Wildcard SSL**: Essentieel voor netwerken op basis van subdomeinen.
- **Schaalbare middelen**: U heeft ruimte nodig om te groeien zonder dat u moet migreren.
- **Ultimate Multisite integratie**: Geautomatiseerde domeinmapping en SSL besparen aanzienlijk operationeel werk.

### Aanbevolen Aanpak

Kies een host uit de lijst met [Compatibele Providers](/user-guide/host-integrations/closte). Deze zijn getest met Ultimate Multisite en bieden de integraties die u nodig heeft voor domeinmapping en SSL-automatisering.

Voor FitSite zullen we een subdomeinconfiguratie gebruiken. Dit betekent dat de klantwebsites in eerste instantie zullen verschijnen als `studienaam.fitsite.com` voordat ze optioneel hun eigen domein koppelen.

## WordPress Multisite Installeren

Als u nog geen WordPress Multisite-installatie heeft:

1. Installeer WordPress op uw hostingprovider
2. Volg de handleiding [Hoe u WordPress Multisite installeert](/user-guide/getting-started/how-to-install-wordpress-multisite)
3. Kies **subdomein** configuratie wanneer u wordt gevraagd

:::tip Waarom Subdomeinen?
Subdomeinen geven elke klantwebsite zijn eigen unieke adres (`studio.fitsite.com`) in plaats van een pad (`fitsite.com/studio`). Dit is professioneler voor uw klanten en voorkomt permalink-conflicten. Zie [Ultimate Multisite 101](/user-guide/getting-started/ultimate-multisite-101) voor een gedetailleerde vergelijking.
:::

## Ultimate Multisite Installeren

Volg de handleiding [Ultimate Multisite installeren](/user-guide/getting-started/installing-ultimate-multisite) om:

1. De plugin op netwerkbreedte te uploaden en te activeren
2. De [Setup Wizard](/user-guide/getting-started/multisite-setup-wizard) uit te voeren

Houd tijdens de setup wizard de FitSite-niche in gedachten:

- **Valuta**: Stel deze in op de valuta die uw fitnessstudio-klanten gebruiken
- **Bedrijfsnaam**: "FitSite" (of de door u gekozen merknaam)
- **Bedrijfslogo**: Upload uw merklogo – dit verschijnt op facturen en e-mails

## Configureren voor de Fitnessniche

Nadat Ultimate Multisite is geïnstalleerd, maakt u de volgende niche-specifieke configuratiekeuzes:

### Algemene Instellingen

Navigeer naar **Ultimate Multisite > Settings** en configureer:

- **Site name**: FitSite
- **Default role**: Administrator – fitnessstudio-eigenaren hebben volledige controle over hun site-inhoud nodig
- **Registration**: Schakel gebruikersregistratie in, zodat studio-eigenaren zichzelf kunnen aanmelden

### E-mailconfiguratie

Uw systeem-e-mails moeten de taal van uw niche spreken. Navigeer naar **Ultimate Multisite > Settings > Emails** en pas aan:

- Vervang algemene taal zoals "uw nieuwe site" door fitnessspecifieke berichten
- Voorbeeld van welkomstonderwerp: "Uw fitnessstudio website is klaar"
- Voorbeeld van welkomsttekst: Verwijs naar hun studio, lessen en hoe ze beginnen met hun fitnesssite

We verfijnen deze punten verder in Les 8 (Klantonboarding), maar het nu al zetten van de toon zorgt ervoor dat zelfs vroege testaanmeldingen niche-specifiek aanvoelen.

### Domeinconfiguratie

Als u een compatibele hostingprovider gebruikt, configureer dan nu de domeinmapping:

1. Navigeer naar **Ultimate Multisite > Settings > Domain Mapping**
2. Volg de integratiehandleiding voor uw specifieke host
3. Test of nieuwe subsites automatisch SSL krijgen

Dit zorgt ervoor dat wanneer we in de volgende les beginnen met het maken van templates en testsites, alles end-to-end werkt.

## Het FitSite Netwerk Tot Nu Toe

Aan het einde van deze les heeft u het volgende:

```
FitSite Network
├── WordPress Multisite (subdomeinmodus)
├── Ultimate Multisite (geïnstalleerd en geconfigureerd)
├── Hosting met wildcard SSL
├── Domeinmapping geconfigureerd
├── Niche-specifieke e-mailtemplates (initieel)
└── Klaar voor site-templates (volgende les)
```

## Wat We Deze Les Hebben Gebouwd

- **Een werkende WordPress Multisite** installatie in subdomeinmodus
- **Ultimate Multisite geïnstalleerd** en geconfigureerd met FitSite branding
- **Hosting en SSL** ingesteld voor een groeiend netwerk
- **Domeinmapping** geconfigureerd voor uw hostingprovider
- **Niche-specifieke e-mailtoon** vastgesteld vanaf dag één

---

**Volgende:** [Les 4: Niche Templates Bouwen](lesson-4-templates) – we creëren site-templates die fitnessstudio-eigenaren daadwerkelijk willen gebruiken.
