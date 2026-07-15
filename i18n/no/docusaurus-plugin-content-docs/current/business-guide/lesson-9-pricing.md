---
title: 'Leksjon 9: Prissetting for profitt'
sidebar_position: 10
_i18n_hash: 0f58d92d3effcc1ffc1f62104d21cdcc
---
# Leksjon 9: Prissetting for profitt

I Leksjon 5 satte vi de første prisene for FitSite-planene. Nå forfiner vi prissettingen med teknikker som øker inntektene, oppmuntrer til oppgraderinger og reduserer frafall.

## Hvor vi slapp {#where-we-left-off}

FitSite har planer, maler, checkout, branding og onboarding på plass. Den opprinnelige prisingen var $49/$99/$199 per måned. Nå får vi denne prisingen til å jobbe hardere.

## Prinsipper for prissetting for nisjeplattformer {#pricing-principles-for-niche-platforms}

### Pris basert på verdi, ikke kostnad {#price-on-value-not-cost}

Dine hostingkostnader kan være $5–$15 per kundeside. Det betyr ikke at prisen din bør være $20. Du selger ikke hosting. Du selger:

- En profesjonell treningsnettside som ville kostet $2 000–$5 000 å bygge tilpasset
- Løpende vedlikehold, oppdateringer og sikkerhet de ikke trenger å tenke på
- Nisjespesifikke funksjoner som generiske byggere ikke tilbyr
- Troverdigheten til en plattform bygget for deres bransje

Pris basert på verdien du leverer, ikke kostnaden ved å levere den.

### Forankre mot alternativer {#anchor-to-alternatives}

Når en treningsstudioeier vurderer FitSite, sammenligner de det med:

- **Å ansette en webutvikler**: $2 000–$5 000 forskuddsbetalt + $50–$100/måned vedlikehold
- **Wix/Squarespace**: $16–$45/måned, men ingen treningsspesifikke funksjoner, de bygger det selv
- **Å ikke gjøre noe**: Tapte medlemmer som ikke kan finne dem på nettet

Til $49–$199/måned er FitSite billigere enn en utvikler, mer kapabel enn generiske byggere, og uendelig bedre enn ingen nettside.

## Implementering av prisvariasjoner {#implementing-price-variations}

Årlig prising oppmuntrer til forpliktelse og reduserer frafall. Naviger til fanen **Price Variations** for hver plans og legg til årlige alternativer:

| Plan | Månedlig | Årlig (per måned) | Årlig total | Besparelse |
|------|---------|-------------------|--------------|---------|
| Starter | $49/mnd | $39/mnd | $468/år | 20% rabatt |
| Growth | $99/mnd | $79/mnd | $948/år | 20% rabatt |
| Pro | $199/mnd | $159/mnd | $1 908/år | 20% rabatt |

Legg til et felt for **Period Selection** på checkout-skjemaet ditt slik at kundene kan bytte mellom månedlig og årlig fakturering. Se [Checkout Forms](/user-guide/configuration/checkout-forms#adding-a-period-selection-toggle).

### Hvorfor årlig prising fungerer {#why-annual-pricing-works}

- **For deg**: Kontanter på forhånd, lavere frafall (kunder som betaler årlig er mindre sannsynlige å kansellere midlertidig)
- **For dem**: Reelle besparelser, budsjettforutsigbarhet

## Oppsettgebyrer {#setup-fees}

Vurder et engangsoppsettgebyr for planer som inkluderer manuell konfigurasjon:

- **Starter**: Ingen oppsettgebyr (fjerner barrierer for inngang)
- **Growth**: $99 oppsettgebyr (dekker konfigurasjon av custom domain og innledende konsultasjon)
- **Pro**: $299 oppsettgebyr (dekker oppsett for flere lokasjoner og onboarding-samtale)

Konfigurer oppsettgebyrene på prissettningsseksjonen for hver plan. Se [Creating Your First Subscription Product](/user-guide/configuration/creating-your-first-subscription-product) for detaljer.

## Prøveperioder {#trial-periods}

Å tilby en prøveperiode reduserer registreringsfriksjonen, men introduserer risikoen for manglende konvertering. For FitSite:

- **7-dagers gratis prøveperiode** kun på Starter-planen
- Ingen prøveperiode på Growth og Pro (disse kundene er mer forpliktet og forventer å betale)

Konfigurer prøveperioden på prissettningsseksjonen for Starter-planen ved å aktivere bryteren **Offer Trial** og sette varigheten til 7 dager.

### Hvordan få prøveperioder til å konvertere {#making-trials-convert}

En prøveperiode fungerer bare hvis kunden opplever verdi i løpet av perioden. Din onboarding-sekvens (Leksjon 8) er kritisk her – velkomst-e-postene bør times for å drive engasjement i løpet av de 7 dagene.

## Rabattkoder {#discount-codes}

Opprett strategiske rabattkoder for spesifikke formål:

- **FITLAUNCH** – 30% rabatt de første 3 månedene (for lanseringskampanje)
- **ANNUAL20** – 20% rabatt på årlige planer (hvis ikke allerede rabattert)
- **REFERRAL** – 1 måned gratis (for kundehenvisninger)

Naviger til **Ultimate Multisite > Discount Codes** for å opprette disse. Se [Creating Discount Codes](/user-guide/configuration/creating-discount-codes) for den fullstendige guiden.

:::tip Ikke rabatter som standard
Rabatter bør være strategiske verktøy, ikke permanente innslag. Hvis alle får rabatt, er det ikke en rabatt – det er din faktiske pris. Bruk dem til spesifikke kampanjer, henvisninger og tidsbegrensede tilbud.
:::

## Håndtering av skatt {#tax-handling}

Hvis du opererer i en jurisdiksjon som krever skatteinnkreving:

1. Konfigurer skattesatser i **Ultimate Multisite > Settings > Taxes**
2. Påfør skattekategorier til planene dine
3. Sørg for at fakturaer viser skatten korrekt

Se [Tax Handling](/user-guide/payment-gateways/tax-handling) for detaljert konfigurasjon. Hvis du betjener kunder internasjonalt, vurder [VAT addon](/addons/vat) for EU-overholdelse.

## Gjennomgang av prissettingen din {#reviewing-your-pricing}

Etter lanseringen, revurder prissettingen kvartalsvis. Se på:

- **Konverteringsrate etter plan**: Hvis Starter konverterer godt, men Growth ikke gjør det, kan gapet mellom dem være for stort
- **Oppgraderingsrate**: Hvis få kunder oppgraderer fra Starter til Growth, kan Growth-planen ikke tilby nok ekstra verdi
- **Frafall etter plan**: Hvis årlige kunder faller fra mindre, press på årlig prising hardere
- **Konkurrentpriser**: Hva krever alternativene? Er du riktig posisjonert?

## FitSite Network så langt {#the-fitsite-network-so-far}

```
FitSite Network
├── WordPress Multisite (subdomain mode)
├── Ultimate Multisite (konfigurert + merkevarelagt)
├── Platform Domain (fitsite.com + wildcard SSL)
├── Site Templates (Studio Essential, Gym Pro, Fitness Chain)
├── Products
│   ├── FitSite Starter ($49/mnd eller $468/år) + 7-dagers prøveperiode
│   ├── FitSite Growth ($99/mnd eller $948/år) + $99 oppsettgebyr
│   ├── FitSite Pro ($199/mnd eller $1 908/år) + $299 oppsettgebyr
│   └── Order Bumps + Discount Codes
├── Checkout Flow (med period selection toggle)
├── Branding (login, dashboard, e-poster, fakturaer, markedsføringsside)
├── Customer Onboarding (Quick Start, e-poster, hjelkeressurser)
├── Prissettingstrategi
│   ├── Årlige rabatter (20% rabatt)
│   ├── Strategiske oppsettgebyrer
│   ├── 7-dagers prøveperiode på Starter
│   ├── Rabattkoder for kampanjer og henvisninger
│   └── Skattekonfigurasjon
└── Klar for lansering (neste leksjon)
```

## Hva vi bygde i denne leksjonen {#what-we-built-this-lesson}

- **Årlig prising** med 20% rabatt for å oppmuntre til forpliktelse
- **Oppsettgebyrer** på høyere nivåer for å dekke onboarding-arbeid
- **En prøveperiode** på inngangsplanen for å redusere registreringsfriksjonen
- **Strategiske rabattkoder** for lansering, henvisninger og kampanjer
- **Skattekonfigurasjon** for lovlig fakturering
- **Et rammeverk for prisinggjennomgang** for kontinuerlig optimalisering

---

**Neste:** [Leksjon 10: Lanseringsdagen](lesson-10-launch) – sjekklisten før lansering og å gå live.
