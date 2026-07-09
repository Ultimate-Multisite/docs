---
title: 'Lektion 3: Opsætning af dit netværk'
sidebar_position: 4
_i18n_hash: 4bffe2f3ba68d1a58bfc32d6b0a3c5c7
---
# Lektion 3: Opsætning af dit netværk {#lesson-3-setting-up-your-network}

Nu er det tid til at bygge. I denne lektion vil du installere Ultimate Multisite og konfigurere fundamentet for FitSite-netværket. Hvert valg her træffes med fitnessnichen i tankerne.

## Hvor vi stoppede {#where-we-left-off}

Vi har valgt fitnessstudier som vores niche og bekræftet mulighederne. Nu omsætter vi den idé til en fungerende platform.

## Valg af hosting {#choosing-your-hosting}

Dit valg af hosting betyder mere for en nicheplatform end for et enkelt website. Du hoster ikke ét site – du hoster et netværk, der vil vokse til årtiers eller hundreder af sites.

### Hvad skal du kigge efter {#what-to-look-for}

- **WordPress Multisite support**: Ikke alle hosts håndterer multisite godt
- **Wildcard SSL**: Essentielt for netværk baseret på subdomæner
- **Skalerbare ressourcer**: Du har brug for plads til at vokse uden at skulle flytte
- **Ultimate Multisite integration**: Automatisk domænemapping og SSL sparer betydelig driftsindsats

### Anbefalet tilgang {#recommended-approach}

Vælg en host fra listen over [Compatible Providers](/user-guide/host-integrations/closte). Disse er testet med Ultimate Multisite og giver de integrationer, du har brug for til domænemapping og SSL-automatisering.

For FitSite vil vi bruge en subdomænekonfiguration. Det betyder, at kundesider i første omgang vil fremstå som `studionavn.fitsite.com`, før de eventuelt mapper deres egen domæne.

## Installation af WordPress Multisite {#installing-wordpress-multisite}

Hvis du ikke allerede har en WordPress Multisite installation:

1. Installer WordPress på din hostingudbyder
2. Følg guiden [Sådan installerer du WordPress Multisite](/user-guide/getting-started/how-to-install-wordpress-multisite)
3. Vælg **subdomæne** konfiguration, når du bliver spurgt

:::tip Hvorfor subdomæner?
Subdomæner giver hver kundeside sin egen distinkte adresse (`studio.fitsite.com`) i stedet for en sti (`fitsite.com/studio`). Dette er mere professionelt for dine kunder og undgår konflikter med permalinks. Se [Ultimate Multisite 101](/user-guide/getting-started/ultimate-multisite-101) for en detaljeret sammenligning.
:::

## Installation af Ultimate Multisite {#installing-ultimate-multisite}

Følg guiden til [Installation af Ultimate Multisite](/user-guide/getting-started/installing-ultimate-multisite) for at:

1. Uploade og aktivere plugin'et på tværs af netværket
2. Køre [Opsætningsværktøjet](/user-guide/getting-started/multisite-setup-wizard)

Under opsætningen skal du huske FitSite niche:

- **Valuta**: Sæt den til valutaen, som dine fitnessstudio-kunder bruger
- **Virksomhedsnavn**: "FitSite" (eller dit valgte brandnavn)
- **Virksomhedsoverskrift**: Upload dit brandlogo -- dette vises på fakturaer og e-mails

## Konfiguration for Fitness Nichen {#configuring-for-the-fitness-niche}

Med Ultimate Multisite installeret, skal du foretage disse niche-specifikke konfigurationsvalg:

### Generelle indstillinger {#general-settings}

Gå til **Ultimate Multisite > Indstillinger** og konfigurer:

- **Webstednavn**: FitSite
- **Standard rolle**: Administrator -- fitness studioejere skal have fuld kontrol over deres sites indhold
- **Registrering**: Aktiver brugerregistrering, så studioejere selv kan tilmelde sig

### E-mail Konfiguration {#email-configuration}

Dine systeme-mails skal tale niche-sproget. Gå til **Ultimate Multisite > Indstillinger > E-mails** og tilpas:

- Erstat den generiske "din nye side" tekst med fitness-specifikke beskeder
- Eksempel på velkomstemne: "Din fitnessstudie-hjemmeside er klar"
- Eksempel på velkomstdokument: Henvis deres studio, klasser og hvordan de kommer i gang med deres fitness-site

Vi vil finpudse disse yderligere i Lektion 8 (Kundeonboarding), men at sætte tonen nu sikrer, at selv tidlige testtilmeldinger føles niche-specifikke.

### Domænekonfiguration {#domain-configuration}

Hvis du bruger en kompatibel hostingudbyder, konfigurer domænemapping nu:

1. Gå til **Ultimate Multisite > Indstillinger > Domænemapping**
2. Følg integrationsguiden for din specifikke host
3. Test, at de nye subsites automatisk får SSL

Dette sikrer, at når vi begynder at lave templates og test-sites i næste lektion, fungerer alt fra start til slut.

## FitSite Netværket Indtil Nu {#the-fitsite-network-so-far}

I slutningen af denne lektion har du:

FitSite Network
├── WordPress Multisite (subdomæne-tilstand)
├── Ultimate Multisite (installeret og konfigureret)
├── Hosting med wildcard SSL
├── Domænemapping konfigureret
├── Niche-specifikke e-mail-templer (start)
└── Klar til sitestempler (næste lektion)

## Hvad har vi bygget i denne lektion {#what-we-built-this-lesson}

- **En fungerende WordPress Multisite** installation i subdomæne-tilstand
- **Ultimate Multisite installeret** og konfigureret med FitSite branding
- **Hosting og SSL** sat op til et voksende netværk
- **Domænemapping** konfigureret for din hostingudbyder
- **Niche-specifik e-mail tone** etableret fra dag ét

---

**Næste skridt:** [Lektion 4: Opbygning af niche-templer](lesson-4-templates) -- her opretter vi sitestempler, som fitnessstudioejere rent faktisk vil bruge.
