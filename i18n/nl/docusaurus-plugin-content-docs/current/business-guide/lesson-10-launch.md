---
title: 'Les 10: Lanceringdag'
sidebar_position: 11
_i18n_hash: 49ba467b8efba57e92cf072bcec53969
---
# Les 10: Lancering {#lesson-10-launch-day}

Alles is gebouwd. Voordat je de deuren opent, gaat deze les door de pre-launch checklist om ervoor te zorgen dat niets kapot, ontbreekt of gênant is.

## Waar we gebleven waren {#where-we-left-off}

FitSite heeft templates, plannen, checkout, branding, onboarding en prijzen geconfigureerd. Nu verifiëren we of alles werkt en gaan we live.

## Pre-Launch Checklist {#pre-launch-checklist}

Werk elk item af. Laat niets over.

### Platform Infrastructuur {#platform-infrastructure}

- [ ] Hosting is stabiel en presteert goed onder belasting
- [ ] Wildcard SSL is actief en alle subdomeinen draaien via HTTPS
- [ ] Domeinmapping werkt – test het aanmaken van een site en het mappen van een custom domain
- [ ] Backups zijn geconfigureerd en getest (herstel minstens één om te verifiëren)
- [ ] Monitoring is op जगह – je weet of het platform uitvalt

### Templates {#templates}

- [ ] Alle drie de templates laden correct op nieuwe sites
- [ ] Placeholder content is nuttig en vrij van typefouten
- [ ] Alle afbeeldingen zijn correct gelicenseerd (geen watermerken van stockfoto's)
- [ ] Mobile responsiveness werkt op elke templatepagina
- [ ] De laadsnelheid van de pagina is acceptabel (test met een tool zoals GTmetrix of PageSpeed Insights)
- [ ] Geen kapotte links of ontbrekende assets op een enkele template

### Plannen en Producten {#plans-and-products}

- [ ] Alle drie de plannen zijn actief en zichtbaar
- [ ] Planbeschrijvingen zijn accuraat en niche-specifiek
- [ ] Prijzen zijn correct (maandelijks en jaarlijks)
- [ ] Opzetkosten zijn geconfigureerd op de juiste plannen
- [ ] De proefperiode werkt op het Starter plan
- [ ] Order bumps verschijnen correct tijdens de checkout
- [ ] Beperkingen van plugins en thema's worden correct afgedwongen per plan

### Checkout Flow {#checkout-flow}

- [ ] Voltooi een volledige testaanmelding op elk plan (gebruik test betaalmodus)
- [ ] Template selectie toont de juiste templates per plan
- [ ] Betaling verloopt succesvol
- [ ] De klant ontvangt een welkomstmail na aanmelding
- [ ] Een nieuwe site wordt aangemaakt met de juiste template
- [ ] De klant kan direct inloggen op hun nieuwe site
- [ ] Kortingscodes werken correct

### Branding {#branding}

- [ ] De inlogpagina toont FitSite branding
- [ ] Het admin dashboard toont FitSite branding
- [ ] Alle systeemmails gebruiken FitSite branding en fitness-specifieke taal
- [ ] Facturen worden correct weergegeven met uw bedrijfsgegevens
- [ ] De marketingwebsite is live en linkt naar het checkout formulier

### Onboarding {#onboarding}

- [ ] De Quick Start widget verschijnt op nieuwe klant dashboards
- [ ] Alle Quick Start links wijzen naar de juiste pagina's
- [ ] De welkomstmailreeks is geconfigureerd en getest
- [ ] Knowledge base artikelen zijn gepubliceerd en toegankelijk
- [ ] De accountpagina toont de juiste planinformatie en upgrade-opties

### Juridisch en Zakelijk {#legal-and-business}

- [ ] Servicevoorwaarden zijn gepubliceerd en gelinkt vanaf de checkout
- [ ] Het privacybeleid is gepubliceerd en toegankelijk
- [ ] Het terugbetalingsbeleid is gedefinieerd en gedocumenteerd
- [ ] De bedrijfsentiteit is ingesteld voor het ontvangen van betalingen
- [ ] De payment gateway staat in live modus (niet testmodus)
- [ ] De belastingconfiguratie is correct voor uw jurisdictie

## Soft Launch vs. Hard Launch {#soft-launch-vs-hard-launch}

Overweeg een lancering in twee fasen:

### Fase 1: Soft Launch {#phase-1-soft-launch}

Nodig 5-10 fitness studio-eigenaren uit om zich aan te melden vóór de publieke lancering. Dit zijn uw bèta klanten. Bied hen een aanzienlijke korting (50% korting voor het leven, of 3 maanden gratis) in ruil voor:

- Eerlijke feedback over de aanmeld- en onboardingervaring
- Toestemming om hun site te gebruiken als voorbeeld
- Het melden van bugs of problemen die ze tegenkomen

Dit geeft je echte klantfeedback en live sites om te tonen voordat je het publiek opent.

### Fase 2: Public Launch {#phase-2-public-launch}

Zodra de feedback van de soft launch is verwerkt:

- Schakel de payment gateway over naar live modus
- Publiceer uw marketingwebsite
- Begin met klantacquisitie (Les 11)
- Kondig aan op relevante fitnessindustrie kanalen

## Acties op de Lancering {#launch-day-actions}

Op de dag dat je publiek wordt:

1. **Schakel over op live betalingen** – schakel de testmodus uit op uw payment gateway.
2. **Verifieer nog een keer** – voer een volledige testaanmelding uit met een echt betaling (verreken het daarna aan uzelf).
3. **Monitor nauwkeurig** – let op fouten, mislukte aanmeldingen of betalingsproblemen.
4. **Wees beschikbaar** – uw eerste echte klanten hebben misschien hulp nodig, en een snelle reactie bouwt vertrouwen op.
5. **Vier kort** – en ga dan weer aan het werk.

## Wat kan misgaan {#what-can-go-wrong}

Wees voorbereid op:

- **Problemen met de payment gateway**: Zorg dat u het supportcontact van uw gatewayprovider bij de hand heeft.
- **Problemen met SSL-certificaten**: Weet hoe u certificaten kunt controleren en vernieuwen.
- **E-mailleveringsfouten**: Test of e-mails daadwerkelijk aankomen (controleer de spammappen).
- **Prestaties onder belasting**: Als u een verkeerspiek krijgt, weet dan hoe u uw hosting kunt opschalen.
- **Verwarring bij klanten**: Zorg dat uw knowledge base en supportkanalen klaarstaan.

## Het FitSite Netwerk Tot Nu Toe {#the-fitsite-network-so-far}

```
FitSite Network
├── WordPress Multisite (subdomain mode) ✓
├── Ultimate Multisite (configured + branded) ✓
├── Platform Domain (fitsite.com + wildcard SSL) ✓
├── Site Templates (Studio Essential, Gym Pro, Fitness Chain) ✓
├── Products (Starter, Growth, Pro + Order Bumps + Discounts) ✓
├── Checkout Flow (tested end-to-end) ✓
├── Branding (complete) ✓
├── Customer Onboarding (Quick Start, emails, help resources) ✓
├── Pricing Strategy (annual, trials, setup fees, discounts) ✓
├── Pre-Launch Checklist (verified) ✓
├── Soft Launch (beta customers onboarded) ✓
└── LIVE ✓
```

## Wat we in deze les hebben gebouwd {#what-we-built-this-lesson}

- **Een uitgebreide pre-launch checklist** die infrastructuur, content, betalingen en juridische zaken dekt.
- **Een soft launch strategie** om echte feedback te krijgen voordat u publiek wordt.
- **Procedures voor de lancering** om met vertrouwen live te gaan.
- **Een noodplan** voor veelvoorkomende lanceringproblemen.

---

**Volgende:** [Les 11: Klanten Vinden](lesson-11-customers) -- nu FitSite live is, hoe krijgen jullie dan fitness studio-eigenaren om zich aan te melden?
