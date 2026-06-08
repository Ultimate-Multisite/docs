---
title: 'Lektion 9: Prissætning til profit'
sidebar_position: 10
_i18n_hash: 0f58d92d3effcc1ffc1f62104d21cdcc
---
# Lektion 9: Prissætning for Profit

I Lektion 5 satte vi de indledende priser på FitSite planer. Nu finjusterer vi prissætningsstrategien med teknikker, der øger omsætningen, opfordrer til opgraderinger og reducerer frafald (churn).

## Hvor Vi Sluttede Af

FitSite har planer, skabeloner, checkout, branding og onboarding på plads. De indledende priser var $49/$99/$199 om måneden. Nu får vi den pris til at arbejde hårdere.

## Principper for Prissætning af Niche Platforme

### Pris baseret på værdi, ikke omkostninger

Dine hostingomkostninger kan være $5-$15 pr. kundesite. Det betyder ikke, at din pris skal være $20. Du sælger ikke hosting. Du sælger:

- En professionel fitnesshjemmeside, som det ville koste $2.000-$5.000 at bygge skræddersyet
- Løbende vedligeholdelse, opdateringer og sikkerhed, som de ikke behøver bekymre sig om
- Niche-specifikke funktioner, som generiske bygherrer ikke tilbyder
- Platformens troværdighed, der er bygget til deres branche

Prissæt baseret på den værdi, du leverer, ikke omkostningerne ved at levere den.

### Anker mod alternativer

Når en fitnessstudioejer vurderer FitSite, sammenligner de det med:

- **At hyre en webudvikler**: $2.000-$5.000 i forvejen + $50-$100/måned vedligeholdelse
- **Wix/Squarespace**: $16-$45 om måneden, men uden fitness-specifikke funktioner; de bygger det selv
- **At gøre ingenting**: Tabte medlemmer, som ikke kan finde dem online

Til $49-$199 om måneden er FitSite billigere end en udvikler, mere kapabel end generiske bygherrer og uendeligt bedre end ingen hjemmeside.

## Implementering af Prisvariationer

Årlig prissætning opmuntrer til forpligtelse og reducerer frafald. Gå til fanen **Price Variations** for hver plan og tilføj årlige muligheder:

| Plan | Månedligt | Årligt (per måned) | Årligt totalbeløb | Besparelse |
|------|-----------|--------------------|-------------------|------------|
| Starter | $49/md | $39/md | $468/år | 20% rabat |
| Growth | $99/md | $79/md | $948/år | 20% rabat |
| Pro | $199/md | $159/md | $1.908/år | 20% rabat |

Tilføj et felt til **Period Selection** i din checkout form, så kunder kan skifte mellem månedlig og årlig fakturering. Se [Checkout Forms](/user-guide/configuration/checkout-forms#adding-a-period-selection-toggle).

### Hvorfor virker årlig prissætning?

- **For dig**: Kontant udbetalt på forhånd, lavere frafald (kunder, der betaler årligt, er mindre tilbøjelige til at opsige midtvejs)
- **For dem**: Reelle besparelser, budgetforudsigelighed

## Opsætningsgebyrer

Overvej et engangsopsætningsgebyr for planer, der inkluderer manuel konfiguration:

- **Starter**: Ingen opsætningsgebyr (fjern barrierer for indtræden)
- **Growth**: $99 opsætningsgebyr (dækker konfiguration af custom domæne og den indledende konsultation)
- **Pro**: $299 opsætningsgebyr (dækker opsætning i flere lokationer og onboarding-opkald)

Konfigurer opsætningsgebyrer på hver plans prissætningssektion. Se [Creating Your First Subscription Product](/user-guide/configuration/creating-your-first-subscription-product) for detaljer.

## Prøveperioder

Tilbud om en prøveperiode reducerer signup-friktionen, men introducerer risikoen for manglende konvertering. For FitSite:

* **7-dages gratis prøveperiode** kun på Starter-planen
* Ingen prøveperiode på Growth og Pro (disse kunder er mere engagerede og forventer at betale)

Konfigurer prøveperioden i prissiden for Starter-planen ved at slå **Offer Trial**-tasten til og sætte varigheden til 7 dage.

### Gør Prøverne Om til Salg

En prøveperiode virker kun, hvis kunden oplever værdi i løbet af prøveperioden. Din onboarding-sekvens (Lektion 8) er kritisk her – velkomstmails skal timeliges for at drive engagement inden for de 7 dages vindue.

## Rabatkoder

Opret strategiske rabatkoder til specifikke formål:

- **FITLAUNCH** -- 30% rabat på de første 3 måneder (til lancering)
- **ANNUAL20** -- 20% rabat på årsabonnementer (hvis ikke allerede nedsat)
- **REFERRAL** -- 1 måned gratis (til kundehenvisninger)

Gå til **Ultimate Multisite > Discount Codes** for at oprette disse. Se [Creating Discount Codes](/user-guide/configuration/creating-discount-codes) for den fulde guide.

:::tip Ikke nedsæt priser som standard
Rabatter skal være strategiske værktøjer, ikke permanente ting. Hvis alle får en rabat, er det ikke en rabat – det er din virkelige pris. Brug dem til specifikke kampagner, henvisninger og tidsbegrænsede tilbud.
:::

## Skattehåndtering

Hvis du opererer i et jurisdiktion, der kræver skatteindberetning:

1. Konfigurer satser for skat i **Ultimate Multisite > Settings > Taxes**
2. Anvend skattekategorier til dine planer
3. Sørg for, at fakturaerne viser skatten korrekt

Se [Tax Handling](/user-guide/payment-gateways/tax-handling) for detaljerede konfigurationer. Hvis du betjener kunder internationalt, så overvej tilføjelsen [VAT addon](/addons/vat) for EU-overholdelse.

## Gennemgang af din prissætning

Efter lancering skal du se på priserne hver tredje måned. Kig efter:

- **Konverteringsrate efter plan**: Hvis Starter konverterer godt, men Growth ikke gør det, kan hullet mellem dem være for stort
- **Opgraderingsrate**: Hvis få kunder opgraderer fra Starter til Growth, kan Growth-planen måske ikke tilbyde nok ekstra værdi
- **Churn pr. plan**: Hvis årlige kunder churner mindre, skal du presse på med de årlige priser hårdere
- **Konkurrentpriser**: Hvad tager alternativerne? Er du positioneret korrekt?

## FitSite Netværket indtil nu

FitSite Network
├── WordPress Multisite (subdom-tilgang)
├── Ultimate Multisite (konfigureret + brandet)
├── Platform Domain (fitsite.com + wildcard SSL)
├── Site Templates (Studio Essential, Gym Pro, Fitness Chain)
├── Produkter
│   ├── FitSite Starter ($49/md eller $468/år) + 7-dages prøveperiode
│   ├── FitSite Growth ($99/md eller $948/år) + $99 opsætningsgebyr
│   ├── FitSite Pro ($199/md eller $1.908/år) + $299 opsætningsgebyr
│   └── Order Bumps + Rabatkoder
├── Checkout Flow (med valg af periode-toggle)
├── Branding (login, dashboard, e-mails, fakturaer, markedsføringssted)
├── Kundeopsætning (Quick Start, e-mails, hjælperessourcer)
├── Prissætningsstrategi
│   ├── Årlige rabatter (20% afslag)
│   ├── Strategiske opsætningsgebyrer
│   ├── 7-dages prøveperiode på Starter-planen
│   ├── Rabatkoder til kampagner og henvisninger
│   └── Skattekonfiguration
└── Klar til lancering (næste lektion)

## Hvad Vi Har Bygget I Denne Lektion

- **Årlig prissætning** med 20% rabat for at opfordre til engagement
- **Opsætningsgebyrer** på de højere niveauer for at dække opsætningsarbejdet
- **En prøveperiode** på det indgangsniveauplan for at mindske friktionen ved tilmelding
- **Strategiske rabatkoder** til lancering, henvisninger og kampagner
- **Skattekonfiguration** for overholdelsesgod fakturering
- **Et prissætningsgennemgangsrammeværk** til løbende optimering

---

**Næste:** [Lektion 10: Lancering](lesson-10-launch) -- pre-launch tjeklisten og go live.
