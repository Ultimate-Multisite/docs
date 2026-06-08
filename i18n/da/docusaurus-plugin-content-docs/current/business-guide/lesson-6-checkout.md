---
title: 'Lektion 6: Tilmeldingsoplevelsen'
sidebar_position: 7
_i18n_hash: a5c16cdd9b4e53a69e138df7bb042411
---
# Lektion 6: Tilmeldingsoverblikket

Kassen er det sted, hvor interesse bliver til indtægt. En forvirrende eller generisk tilmeldingsproces mister kunder. En niche-specifik proces, der taler deres sprog og føles ubesværet, konverterer dem.

## Hvor vi stoppede

FitSite har skabeloner og planer sat op. Nu bygger vi registrerings- og kasseoplevelsen, der forvandler fitnessstudieejere til betalende kunder.

## Forståelse af Tilmeldingsflowet

Ultimate Multisites kasseformularer er fuldt tilpasselige flertrinsformularer. For FitSite ønsker vi en proces, der:

1. Føles som om den er bygget til fitnessvirksomheder
2. Indsamler kun det nødvendige
3. Får kunden videre til en fungerende side så hurtigt som muligt

Se [The Registration Flow](/user-guide/configuration/the-registration-flow) for den fulde tekniske reference.

## Design af FitSite Kassen

Gå til **Ultimate Multisite > Checkout Forms** og opret en ny formular.

### Trin 1: Planvalg

Det første, en fitnessstudieejer ser, skal være planer præsenteret på et sprog, de forstår.

- Tilføj et felt med en **Pricing Table**
- Konfigurer den til at vise alle tre FitSite planer
- De planbeskrivelser, du skrev i Lektion 5, vises her – sørg for, at de taler til fitnessvirksomhedens behov, ikke tekniske funktioner

:::tip Niche sprog betyder noget
"1 GB lagerplads" betyder intet for en motionsstudieejer. "Alt, hvad du har brug for til en professionel studieside" betyder alt. Skriv planbeskrivelser i din kundes sprog.
:::

### Trin 2: Skabelonvalg

Efter at kunden har valgt en plan, vælger de deres startskabelon.

- Tilføj et felt til **Skabelonvalg**
- De tilgængelige skabeloner filtreres efter den plan, de har valgt (konfigureret i Lektion 5)
- Hver skabelon skal have et forhåndsvisningsbillede, der viser et fitness-specifikt design

### Trin 3: Kontooprettelse

Hold dette så simpelt som muligt. Indsaml kun følgende oplysninger:

- E-mailadresse
- Adgangskode
- Studio-/virksomhedsnavn (dette bliver deres websitets navn)

Spørg ikke om information, du ikke har brug for ved tilmeldingen. Hvert ekstra felt reducerer konverteringsraten.

### Trin 4: Opsætning af hjemmeside

- **Hjemmesidetitel**: Præ-fyld fra studio-navnet indtastet i trin 3
- **Hjemmeside-URL**: Automatisk genereret fra studio-navnet (f.eks. `ironworks.fitsite.com`)

### Trin 5: Betaling

- Tilføj feltet til **Betaling**
- Konfigurer din betalingsgateway ([Stripe](/user-guide/payment-gateways/stripe) anbefales til abonnementsbetaling)
- Hvis du har oprettet order bumps i Lektion 5, så tilføj et felt til **Order Bump** før betalings trinnet

### Trin 6: Bekræftelse

- Tilpas bekræftelsesbeskeden med fitness-specifik sprog
- Eksempel: "Din fitnessstudio-hjemmeside bliver oprettet. Du vil blive omdirigeret til din nye side om få sekunder."

## Tilføjelse af en Toggles for Periodevalg

Hvis du har indstillet prisvariationer i dine planer (månedlig vs. årlig), så tilføj et felt kaldet **Period Selection** til kassen, så kunder kan skifte mellem betalingsperioderne. Se [Checkout Forms](/user-guide/configuration/checkout-forms#adding-a-period-selection-toggle) for instruktioner.

## Konfiguration af betaling

Hvis du endnu ikke har opsat en betalingsgateway:

1. Gå til **Ultimate Multisite > Indstillinger > Betalingsgateways**
2. Følg [Stripe setup guide](/user-guide/payment-gateways/stripe) eller din foretrukne gateway
3. Test en komplet kasseproces med et testbetaling

Se [Getting Paid](/user-guide/payment-gateways/getting-paid) for detaljer om, hvordan betalinger flyder til din konto.

## Test af flowet

Før du går videre, gennemfør en fuld testregistrering:

1. Åbn kasseformularen i et inkognito-/privat browser vindue
2. Vælg en plan
3. Vælg en skabelon (template)
4. Opret en konto
5. Gennemfør betalingen (brug testtilstand)
6. Bekræft, at siden er oprettet med den korrekte skabelon

Tjek følgende:

- [ ] Planbeskrivelserne er klare og niche-specifikke
- [ ] Skabelonforhåndsvisninger viser fitness-egnede designs
- [ ] Websitet genereres korrekt fra studionavnet
- [ ] Betalingsprocessen lykkes
- [ ] Kunden lander på en fungerende side med den valgte skabelon
- [ ] Bekræftelsesmails bruger fitness-specifik sprogbrug

## FitSite Network Indtil Nu

FitSite Network
├── WordPress Multisite (subdom-tilgang)
├── Ultimate Multisite (konfigureret)
├── Hosting med wildcard SSL + domæne-mapping
├── Site Templates (Studio Essential, Gym Pro, Fitness Chain)
├── Produkter (Starter, Growth, Pro + Order Bumps)
├── Checkout Flow
│   ├── Planvalg med niche-specifikke beskrivelser
│   ├── Templatevalg med fitness-forhåndsvisninger
│   ├── Minimal kontooprettelse
│   ├── Betaling via Stripe
│   └── Fitness-specifik bekræftelse
└── Klar til branding (næste lektion)

## Hvad Vi Har Bygget I Denne Lektion

- **En flertrins checkout-formular**, skræddersyet til fitnessstudieejere
- **Niche-specifikt sprog** gennem hele registreringsflowet
- **Minimal friktion** -- kun de essentielle felter, hurtig vej til en fungerende side
- **Betalingsintegration** med testverifikation
- **En testet ende-til-ende proces** fra planvalg til fungerende side

---

**Næste:** [Lektion 7: Gør Det Dit](lesson-7-branding) -- vi white-label platformen og etablerer FitSite som et brand.
