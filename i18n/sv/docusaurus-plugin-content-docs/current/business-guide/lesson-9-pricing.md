---
title: 'Lektion 9: Prissättning för vinst'
sidebar_position: 10
_i18n_hash: 0f58d92d3effcc1ffc1f62104d21cdcc
---
# Lektion 9: Prissättning för vinst {#lesson-9-pricing-for-profit}

I Lektion 5 satte vi de initiala priserna för FitSite-planerna. Nu förfinar vi prissättningsstrategin med tekniker som ökar intäkterna, uppmuntrar till uppgraderingar och minskar kundavhopp.

## Var vi slutade {#where-we-left-off}

FitSite har nu planerna, mallarna, kassan, varumärkesbyggandet och onboarding-processen på plats. De initiala priserna var $49/$99/$199 per månad. Nu får vi dessa priser arbeta hårdare.

## Prissättningsprinciper för nischplattformar {#pricing-principles-for-niche-platforms}

### Prissätt baserat på värde, inte kostnad {#price-on-value-not-cost}

Dina värdhostingkostnader kan vara $5–$15 per kundsida. Det betyder inte att ditt pris bör vara $20. Du säljer inte hosting. Du säljer:

- En professionell träningswebbplats som skulle kosta $2 000–$5 000 att bygga anpassat
- Löpande underhåll, uppdateringar och säkerhet som de slipper tänka på
- Nischspecifika funktioner som generiska byggverktyg inte erbjuder
- Trovärdigheten i en plattform byggd för deras bransch

Prissätt baserat på det värde du levererar, inte kostnaden för att leverera det.

### Förankra dig mot alternativ {#anchor-to-alternatives}

När en träningsstudieägare utvärderar FitSite jämför de det med:

- **Att anlita en webbutvecklare**: $2 000–$5 000 initialt + $50–$100/månad underhåll
- **Wix/Squarespace**: $16–$45/månad, men inga träningsspecifika funktioner, de bygger det själva
- **Att inte göra någonting**: Förlorade medlemmar som inte kan hitta dem online

Med $49–$199/månad är FitSite billigare än en utvecklare, mer kapabel än generiska byggverktyg och oändligt bättre än ingen webbplats alls.

## Implementering av prisvariationer {#implementing-price-variations}

Årliga priser uppmuntrar till engagemang och minskar kundavhopp. Gå till fliken **Price Variations** för varje plans och lägg till årliga alternativ:

| Plan | Månadsvis | Årsvis (per månad) | Årligt totalt | Besparing |
|------|---------|-------------------|--------------|---------|
| Starter | $49/mån | $39/mån | $468/år | 20% rabatt |
| Growth | $99/mån | $79/mån | $948/år | 20% rabatt |
| Pro | $199/mån | $159/mån | $1 908/år | 20% rabatt |

Lägg till ett fält för **Period Selection** i ditt kassaformulär så att kunderna kan växla mellan månads- och årsbetalning. Se [Checkout Forms](/user-guide/configuration/checkout-forms#adding-a-period-selection-toggle).

### Varför årliga priser fungerar {#why-annual-pricing-works}

- **För dig**: Engångskassa, lägre kundavhopp (kunder som betalar årligen är mindre benägna att avbryta mitt i perioden)
- **För dem**: Verkliga besparingar, budgetförutsägbarhet

## Uppställningsavgifter (Setup Fees) {#setup-fees}

Överväg en engångsavgift för planer som inkluderar manuell konfiguration:

- **Starter**: Ingen uppställningsavgift (tar bort inträdeshinder)
- **Growth**: $99 uppställningsavgift (täcker konfiguration av anpassat domännamn och initial konsultation)
- **Pro**: $299 uppställningsavgift (täcker uppställning av flera platser och onboarding-samtal)

Konfigurera uppställningsavgifterna på varje plans prissättningssektion. Se [Creating Your First Subscription Product](/user-guide/configuration/creating-your-first-subscription-product) för detaljer.

## Testperioder (Trial Periods) {#trial-periods}

Att erbjuda en testperiod minskar friktionen vid registreringen, men introducerar risken för att kunden inte konverterar. För FitSite:

- **7-dagars gratis provperiod** endast på Starter-planen
- Ingen testperiod på Growth och Pro (dessa kunder är mer engagerade och förväntar sig att betala)

Konfigurera testperioden på Starter-planens prissättningssektion genom att aktivera växlingsknappen **Offer Trial** och ställa in varaktigheten till 7 dagar.

### Hur man får testperioder att konvertera {#making-trials-convert}

En testperiod fungerar bara om kunden upplever värde under perioden. Din onboarding-sekvens (Lektion 8) är kritisk här – välkomstmailen bör tajmas för att driva engagemang under de 7 dagarna.

## Rabattkoder {#discount-codes}

Skapa strategiska rabattkoder för specifika ändamål:

- **FITLAUNCH** – 30% rabatt de första 3 månaderna (för lansering)
- **ANNUAL20** – 20% rabatt på årliga planer (om det inte redan är rabatterat)
- **REFERRAL** – 1 månads gratis (för kundrekommendationer)

Gå till **Ultimate Multisite > Discount Codes** för att skapa dessa. Se [Creating Discount Codes](/user-guide/configuration/creating-discount-codes) för den fullständiga guiden.

:::tip Rabattera inte som standard
Rabatter ska vara strategiska verktyg, inte permanenta tillägg. Om alla får en rabatt, är det inte en rabatt – det är ditt riktiga pris. Använd dem för specifika kampanjer, rekommendationer och tidsbegränsade erbjudanden.
:::

## Hantering av skatt {#tax-handling}

Om du verkar i en jurisdiktion som kräver skatteuppbörd:

1. Konfigurera skattesatser i **Ultimate Multisite > Settings > Taxes**
2. Tilldela skattekategorier till dina planer
3. Se till att fakturorna visar skatten korrekt

Se [Tax Handling](/user-guide/payment-gateways/tax-handling) för detaljerad konfiguration. Om du betjänar kunder internationellt, överväg [VAT addon](/addons/vat) för EU-efterlevnad.

## Granskning av din prissättning {#reviewing-your-pricing}

Efter lanseringen, granska prissättningen kvartalsvis. Titta på:

- **Konverteringsgrad per plan**: Om Starter konverterar bra men Growth inte gör det, kan gapet mellan dem vara för stort
- **Uppgraderingsgrad**: Om få kunder uppgraderar från Starter till Growth, kanske Growth-planen inte erbjuder tillräckligt med extra värde
- **Kundavhopp per plan**: Om årliga kunder har lägre avhopp, driv mer på det årliga priset
- **Konkurrentprissättning**: Vad tar alternativen betalt? Är du korrekt positionerad?

## FitSite Network hittills {#the-fitsite-network-so-far}

```
FitSite Network
├── WordPress Multisite (subdomain mode)
├── Ultimate Multisite (konfigurerat + varumärkesbyggt)
├── Platform Domain (fitsite.com + wildcard SSL)
├── Site Templates (Studio Essential, Gym Pro, Fitness Chain)
├── Products
│   ├── FitSite Starter ($49/mån eller $468/år) + 7-dagars provperiod
│   ├── FitSite Growth ($99/mån eller $948/år) + $99 uppställningsavgift
│   ├── FitSite Pro ($199/mån eller $1 908/år) + $299 uppställningsavgift
│   └── Order Bumps + Rabattkoder
├── Checkout Flow (med växlingsknapp för periodval)
├── Branding (login, dashboard, e-post, fakturor, marknadswebbplats)
├── Customer Onboarding (Quick Start, e-post, hjälpred resurser)
├── Prissättningsstrategi
│   ├── Årliga rabatter (20% rabatt)
│   ├── Strategiska uppställningsavgifter
│   ├── 7-dagars provperiod på Starter
│   ├── Rabattkoder för kampanjer och rekommendationer
│   └── Skattekonfiguration
└── Redo för lansering (nästa lektion)
```

## Vad vi byggde i denna lektion {#what-we-built-this-lesson}

- **Årliga priser** med 20% rabatt för att uppmuntra engagemang
- **Uppställningsavgifter** på högre nivåer för att täcka konfigurationsarbete
- **En provperiod** på instegsplanen för att minska registreringsfriktionen
- **Strategiska rabattkoder** för lansering, rekommendationer och kampanjer
- **Skattekonfiguration** för efterlevande fakturering
- **En ram för prissättningsgranskning** för kontinuerlig optimering

---

**Nästa:** [Lektion 10: Lanseringsdagen](lesson-10-launch) – pre-launch checklistan och att gå live.
