---
title: 'Lektion 7: Gør det dit eget'
sidebar_position: 8
_i18n_hash: 90013fc79a9cbb15283ce89b688002b1
---
# Lektion 7: Gør Det Til Dit Eget

Dine kunder må aldrig føle, at de bruger "et tilfældigt WordPress plugin". De skal føle, at de bruger FitSite – en platform bygget specifikt til deres branche. Denne lektion dækker branding, white-labeling og hvordan man får platformen til at føles som et produkt.

## Hvor Vi Sluttede Af {#where-we-left-off}

FitSite har nu en fungerende checkout flow, der tager fitnessstudioejere fra planvalg til en live side. Nu skal vi få hele oplevelsen til at føles som et sammenhængende, brandet produkt.

## Din Platformens Domæne {#your-platform-domain}

Grundlaget for dit brand er dit domæne. For FitSite:

- **Hoveddomæne**: `fitsite.com` (din marketingside og netværksrod)
- **Kunde-sites**: `studionavn.fitsite.com` (subdomæner)
- **Tilpassede domæner**: Kunder på Growth- og Pro-plan kan mappe deres eget domæne

### Opsætning af Dit Domæne {#setting-up-your-domain}

1. Registrer dit platformdomæne
2. Peg det til din hostingudbyder
3. Konfigurer wildcard DNS (`*.fitsite.com`) for kundesubdomæner
4. Sørg for, at wildcard SSL er aktiv

Se [Hvordan man konfigurerer domænemapping](/user-guide/domain-mapping/how-to-configure-domain-mapping) for detaljerede instruktioner.

## White-Labeling af Admin-oplevelsen {#white-labeling-the-admin-experience}

Når en fitnessstudioejer logger ind på deres sites dashboard, skal de se dit brand, ikke WordPress eller Ultimate Multisite branding.

### Tilpasset Login-side {#custom-login-page}

Tilpas WordPress login-siden til at vise:

- Dit FitSite logo
- Fitness-relaterede baggrundsbilleder
- Dine brandfarver

### Dashboard Branding {#dashboard-branding}

Brug [Admin Page Creator](/addons/admin-page-creator) add-on eller custom CSS til at:

- Erstat WordPress-logoet med dit FitSite-logo
- Tilpasse administrationsfarveskemaet til at matche dit brand
- Tilføje en custom dashboard widget med fitness-specifikke hurtige links og hjælperessourcer

### Custom Admin Sider {#custom-admin-pages}

Overvej at oprette custom admin sider, der fremhæver de mest relevante handlinger for fitnessstudieejere:

- "Rediger din klasseplan"
- "Opdater trænerprofiler"
- "Se din side"

Dette reducerer læringskurven ved at placere niche-relevante handlinger i centrum frem for at gemme dem i den standard WordPress menu.

## Branding af dine Kommunikation {#branding-your-communications}

Hver e-mail, faktura og notifikation skal styrke dit brand.

### System E-mails {#system-emails}

Gå til **Ultimate Multisite > Settings > Emails** og tilpas alle systeme-mails:

- **Fra navn**: FitSite
- **Fra e-mail**: hello@fitsite.com
- **E-mail skabeloner**: Brug dine brands farver og logo
- **Sprog**: Fitness-specifikt gennem hele processen

Vigtige e-mails at tilpasse:

| E-mail | Generisk version | FitSite version |
|---|---|---|
| Velkomst | "Din nye side er klar" | "Din fitnessstudie-hjemmeside er live" |
| Betalingskvittering | "Betaling modtaget" | "FitSite abonnement betaling bekræftet" |
| Prøveperiode udløber | "Din prøveperiode slutter snart" | "Din FitSite prøveperiode slutter om 3 dage – hold dit studie-website kørende" |

### Fakturaer {#invoices}

Tilpas fakturaskabeloner med:

- Dit logo og brandfarver for dit FitSite
- Dine virksomhedsdetaljer
- Fitness-specifikke produktnavne (ikke generiske plan-ID'er)

## Den Kundeorienterede Side {#the-customer-facing-site}

Din hoveddomæne (`fitsite.com`) skal have en markedsføringsside, der sælger platformen. Denne er adskilt fra administrator-delen af Ultimate Multisite-netværket – det er virksomhedens offentlige ansigt.

Vigtige sider:

- **Hjemmeside**: En klar værdiforslag for fitnessvirksomheder
- **Funktioner**: Hvad FitSite gør, forklaret med fitnessbegreber
- **Priser**: Dine tre planer med sammenligninger af niche-specifikke funktioner
- **Eksempler**: Vis sider bygget på platformen
- **Tilmeld dig**: Links til dit checkout-formular

:::tip Din Markedsføringsside Kan Være en Netværks-side
Opret din markedsføringsside som en side inden for dit eget netværk. Dette giver dig mulighed for at administrere den fra det samme dashboard og demonstrere dine egne platforms muligheder.
:::

## Custom Domæne til Kunder {#custom-domain-for-customers}

For kunder på planer, der inkluderer custom domæner, dokumentér processen tydeligt:

1. Kunden registrerer eller overfører deres domæne til en registrar
2. Kunden opdaterer DNS til at pege mod din platform (giv de præcise oplysninger)
3. Ultimate Multisite håndterer domænenavigeringen og SSL

Opret en hjælpeartikel eller en artikel i vidensbasen specifikt til denne proces, skrevet til ikke-tekniske fitnessstudioejere.

## FitSite Netværket Indtil Nu {#the-fitsite-network-so-far}

FitSite Network
├── WordPress Multisite (subdomområde)
├── Ultimate Multisite (konfigureret + brandet)
├── Platform Domain (fitsite.com + wildcard SSL)
├── Site Templates (Studio Essential, Gym Pro, Fitness Chain)
├── Products (Starter, Growth, Pro + Order Bumps)
├── Checkout Flow (niche-specifik, testet)
├── Branding
│   ├── Custom login side
│   ├── Brandet admin dashboard
│   ├── Niche-specifik systemmails
│   ├── Brandede fakturaer
│   └── Markedsider på fitsite.com
└── Klar til onboarding flow (næste lektion)

## Hvad har vi bygget i denne lektion {#what-we-built-this-lesson}

- **Platformdomæne og DNS** konfigureret for en brandet oplevelse
- **Hvidmærket admin** med FitSite branding overalt
- **Tilpasset kommunikation** -- e-mails, fakturaer og notifikationer alle på brandet niveau
- **En markedsider**, der sælger FitSite til fitnessstudioejere
- **Dokumentation for custom domæne** til kunder, der ønsker deres eget domæne

---

**Næste:** [Lektion 8: Kundeonboarding](lesson-8-onboarding) -- vi designer oplevelsen, der forvandler en ny tilmelding til en aktiv, glad kunde.
