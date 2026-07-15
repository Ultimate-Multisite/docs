---
title: 'Les 9: Prijzen voor Winst'
sidebar_position: 10
_i18n_hash: 0f58d92d3effcc1ffc1f62104d21cdcc
---
# Les 9: Prijsbepaling voor Winst

In Les 5 hebben we de initiële prijzen voor de FitSite-abonnementen vastgesteld. Nu verfijnen we de prijsstrategie met technieken die de omzet verhogen, upgrades stimuleren en churn (verloop) verminderen.

## Waar We Gebleven Zijn {#where-we-left-off}

FitSite heeft abonnementen, templates, checkout, branding en onboarding gereed. De initiële prijzen waren $49/$99/$199 per maand. Nu laten we die prijzen harder werken.

## Prijsprincipes voor Niche Platforms {#pricing-principles-for-niche-platforms}

### Prijs op Basis van Waarde, Niet van Kosten {#price-on-value-not-cost}

Uw hostingkosten kunnen $5-$15 per klantwebsite bedragen. Dat betekent echter niet dat uw prijs $20 moet zijn. U verkoopt geen hosting. U verkoopt:

- Een professionele fitnesswebsite die custom gebouwd $2.000-$5.000 zou kosten
- Voortdurende onderhoud, updates en beveiliging waar ze zich geen zorgen over hoeven te maken
- Niche-specifieke functies die algemene builders niet aanbieden
- Het vertrouwen van een platform dat is gebouwd voor hun branche

Prijs op basis van de waarde die u levert, niet op basis van de kosten om het te leveren.

### Veranker Je aan Alternatieven {#anchor-to-alternatives}

Wanneer een eigenaar van een fitnessstudio FitSite evalueert, vergelijkt deze het met:

- **Het inhuren van een webontwikkelaar**: $2.000-$5.000 aan startkosten + $50-$100/maand onderhoud
- **Wix/Squarespace**: $16-$45/maand, maar zonder fitness-specifieke functies, en ze bouwen het zelf
- **Niets doen**: Gemiste leden die ze online niet kunnen vinden

Met $49-$199/maand is FitSite goedkoper dan een ontwikkelaar, capabeler dan algemene builders, en oneindig beter dan geen website.

## Het Implementeren van Prijsvariaties {#implementing-price-variations}

Jaarlijkse prijzen moedigen toewijding aan en verminderen churn. Navigeer naar de tab **Price Variations** van elk abonnement en voeg jaarlijkse opties toe:

| Plan | Maandelijks | Jaarlijks (per maand) | Jaarlijks totaal | Besparing |
|------|---------|-------------------|--------------|---------|
| Starter | $49/ma | $39/ma | $468/jaar | 20% korting |
| Growth | $99/ma | $79/ma | $948/jaar | 20% korting |
| Pro | $199/ma | $159/ma | $1.908/jaar | 20% korting |

Voeg een veld **Period Selection** toe aan uw checkout-formulier, zodat klanten kunnen schakelen tussen maandelijkse en jaarlijkse facturering. Zie [Checkout Forms](/user-guide/configuration/checkout-forms#adding-a-period-selection-toggle).

### Waarom Jaarlijkse Prijzen Werken {#why-annual-pricing-works}

- **Voor u**: Directe cashflow, lagere churn (klanten die jaarlijks betalen, hebben minder snel de neiging om halverwege te annuleren)
- **Voor hen**: Echte besparingen, voorspelbaarheid van het budget

## Setup Fees {#setup-fees}

Overweeg een eenmalige setup fee voor abonnementen die hands-on configuratie vereisen:

- **Starter**: Geen setup fee (verwijder drempels om toe te treden)
- **Growth**: $99 setup fee (dekt configuratie van custom domein en initiële consultatie)
- **Pro**: $299 setup fee (dekt multi-locatie setup en onboarding call)

Configureer setup fees op de prijssectie van elk abonnement. Zie [Creating Your First Subscription Product](/user-guide/configuration/creating-your-first-subscription-product) voor details.

## Proefperiodes {#trial-periods}

Het aanbieden van een proefperiode vermindert de opmaakdrempel, maar brengt het risico van non-conversie met zich mee. Voor FitSite:

- **7-daagse gratis proefperiode** alleen voor het Starter-abonnement
- Geen proefperiode voor Growth en Pro (deze klanten zijn meer vastbesloten en verwachten te betalen)

Configureer de proefperiode op de prijssectie van het Starter-abonnement door de toggle **Offer Trial** in te schakelen en de duur in te stellen op 7 dagen.

### Proefperiodes Laten Converteren {#making-trials-convert}

Een proefperiode werkt alleen als de klant waarde ervaart gedurende de proefperiode. Uw onboarding-reeks (Les 8) is hier cruciaal voor – de welkomstmails moeten getimed zijn om betrokkenheid te stimuleren binnen de 7 dagen.

## Kortingscodes {#discount-codes}

Maak strategische kortingscodes voor specifieke doeleinden:

- **FITLAUNCH** – 30% korting op de eerste 3 maanden (voor lancering)
- **ANNUAL20** – 20% korting op jaarabonnementen (als dit nog niet is verlaagd)
- **REFERRAL** – 1 maand gratis (voor klantverwijzingen)

Navigeer naar **Ultimate Multisite > Discount Codes** om deze te maken. Zie [Creating Discount Codes](/user-guide/configuration/creating-discount-codes) voor de volledige handleiding.

:::tip Geen Korting Standaard
Kortingen moeten strategische hulpmiddelen zijn, geen permanente voorzieningen. Als iedereen een korting krijgt, is het dan geen korting – het is uw werkelijke prijs. Gebruik ze voor specifieke campagnes, verwijzingen en tijdelijke promoties.
:::

## Belastingafhandeling {#tax-handling}

Als u opereert in een jurisdictie die belastinginning vereist:

1. Configureer belastingtarieven in **Ultimate Multisite > Settings > Taxes**
2. Pas belastingcategorieën toe op uw abonnementen
3. Zorg ervoor dat facturen de belasting correct weergeven

Zie [Tax Handling](/user-guide/payment-gateways/tax-handling) voor gedetailleerde configuratie. Als u klanten internationaal bedient, overweeg dan de [VAT addon](/addons/vat) voor EU-naleving.

## Uw Prijzen Herzien {#reviewing-your-pricing}

Nadat u gelanceerd heeft, herzie de prijzen dan elk kwartaal. Kijk naar:

- **Conversieratio per abonnement**: Als Starter goed converteert, maar Growth niet, kan de kloof ertussen te groot zijn
- **Upgrade-ratio**: Als weinig klanten upgraden van Starter naar Growth, biedt het Growth-abonnement dan niet genoeg extra waarde?
- **Churn per abonnement**: Als jaarlijkse klanten minder churnen, duw dan harder op jaarlijkse prijzen
- **Concurrentieprijzen**: Wat vragen alternatieven? Zijn wij correct gepositioneerd?

## Het FitSite Netwerk Tot Nu Toe {#the-fitsite-network-so-far}

```
FitSite Network
├── WordPress Multisite (subdomain mode)
├── Ultimate Multisite (geconfigureerd + gebrand)
├── Platform Domain (fitsite.com + wildcard SSL)
├── Site Templates (Studio Essential, Gym Pro, Fitness Chain)
├── Products
│   ├── FitSite Starter ($49/ma of $468/jaar) + 7-daagse proefperiode
│   ├── FitSite Growth ($99/ma of $948/jaar) + $99 setup fee
│   ├── FitSite Pro ($199/ma of $1.908/jaar) + $299 setup fee
│   └── Order Bumps + Discount Codes
├── Checkout Flow (met period selection toggle)
├── Branding (login, dashboard, e-mails, facturen, marketing site)
├── Customer Onboarding (Quick Start, e-mails, help resources)
├── Pricing Strategy
│   ├── Jaarlijkse kortingen (20% korting)
│   ├── Strategische setup fees
│   ├── 7-daagse proefperiode op Starter
│   ├── Kortingscodes voor campagnes en verwijzingen
│   └── Belastingconfiguratie
└── Klaar voor lancering (volgende les)
```

## Wat We Deze Les Hebben Gebouwd {#what-we-built-this-lesson}

- **Jaarlijkse prijzen** met 20% korting om toewijding te stimuleren
- **Setup fees** op hogere niveaus om de onboarding-inspanning te dekken
- **Een proefperiode** op het instapabonnement om de opmaakdrempel te verlagen
- **Strategische kortingscodes** voor lancering, verwijzingen en campagnes
- **Belastingconfiguratie** voor conforme facturering
- **Een framework voor prijsherziening** voor voortdurende optimalisatie

---

**Volgende:** [Les 10: Lancering Dag](lesson-10-launch) -- de pre-launch checklist en live gaan.
