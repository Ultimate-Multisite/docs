---
title: 'Lecția 9: Prețuri pentru profit'
sidebar_position: 10
_i18n_hash: 0f58d92d3effcc1ffc1f62104d21cdcc
---
# Lecția 9: Prețuri pentru profit {#lesson-9-pricing-for-profit}

În Lecția 5, am stabilit prețurile inițiale pentru planurile FitSite. Acum ne rafinăm strategia de prețuri cu tehnici care cresc veniturile, încurajează upgrade-urile și reduc rata de dezabonare (churn).

## Unde ne-am oprit {#where-we-left-off}

FitSite are planuri, șabloane, checkout, branding și onboarding în locul lor. Prețul inițial era de $49/$99/$199 pe lună. Acum facem ca aceste prețuri să lucreze mai mult.

## Principii de prețuri pentru platforme de nișă {#pricing-principles-for-niche-platforms}

### Preț pe valoare, nu pe cost {#price-on-value-not-cost}

Costurile de găzduire (hosting) pot varia între $5 și $15 per site de client. Asta nu înseamnă că prețul tău ar trebui să fie $20. Tu nu vinzi găzduire. Tu vinzi:

- Un site profesional de fitness, care ar costa între $2.000 și $5.000 pentru a fi construit personalizat
- Mentenanță continuă, actualizări și securitate, despre care ei nu trebuie să se preocupe
- Funcționalități specifice nișei, pe care constructorii generici nu le oferă
- Credibilitatea unei platforme construite pentru industria lor

Prețuiește pe baza valorii pe care o livrezi, nu pe costul livrării acestei valori.

### Ancorează prețul pe alternative {#anchor-to-alternatives}

Când un proprietar de studio de fitness evaluează FitSite, îl compară cu:

- **Angajarea unui dezvoltator web**: $2.000-$5.000 upfront + $50-$100/lună mentenanță
- **Wix/Squarespace**: $16-$45/lună, dar fără funcționalități specifice fitness-ului, și trebuie să construiască singur
- **Nu face nimic**: Membri pierduți care nu vă pot găsi online

La $49-$199/lună, FitSite este mai ieftin decât un dezvoltator, mai capabil decât constructorii generici și infinit mai bun decât lipsa unui website.

## Implementarea variațiilor de preț {#implementing-price-variations}

Prețurile anuale încurajează angajamentul și reduc rata de dezabonare. Navighează la tab-ul **Price Variations** (Variații de preț) al fiecărui plan și adaugă opțiunile anuale:

| Plan | Lunar | Anual (per lună) | Total Anual | Economii |
|------|---------|-------------------|--------------|---------|
| Starter | $49/lună | $39/lună | $468/an | 20% reducere |
| Growth | $99/lună | $79/lună | $948/an | 20% reducere |
| Pro | $199/lună | $159/lună | $1.908/an | 20% reducere |

Adaugă un câmp **Period Selection** (Selectarea perioadei) în formularul de checkout pentru ca clienții să poată comuta între facturarea lunară și cea anuală. Vezi [Checkout Forms](/user-guide/configuration/checkout-forms#adding-a-period-selection-toggle).

### De ce funcționează prețurile anuale {#why-annual-pricing-works}

- **Pentru tine**: Bani upfront, rată de dezabonare mai mică (clienții care plătesc anual sunt mai puțin probabil să anuleze în perioada curentă)
- **Pentru ei**: Economii reale, predictibilitate bugetară

## Taxe de configurare (Setup Fees) {#setup-fees}

Ia în considerare o taxă de configurare unică pentru planurile care includ configurare manuală:

- **Starter**: Nicio taxă de configurare (elimină barierele de intrare)
- **Growth**: Taxă de configurare de $99 (acoperă configurarea domeniului personalizat și consultanța inițială)
- **Pro**: Taxă de configurare de $299 (acoperă configurarea multi-locație și apelul de onboarding)

Configurează taxele de configurare în secțiunea de prețuri a fiecărui plan. Vezi [Creating Your First Subscription Product](/user-guide/configuration/creating-your-first-subscription-product) pentru detalii.

## Perioade de probă (Trial Periods) {#trial-periods}

Oferirea unei perioade de probă reduce frecarea în înscriere, dar introduce riscul de neconversie. Pentru FitSite:

- **Perioadă de probă gratuită de 7 zile** doar pentru planul Starter
- Nicio probă pentru Growth și Pro (acești clienți sunt mai implicați și se așteaptă să plătească)

Configurează proba în secțiunea de prețuri a planului Starter, activând comutatorul **Offer Trial** și setând durata la 7 zile.

### Cum faci ca probele să se converteze {#making-trials-convert}

O probă funcționează doar dacă clientul experimentează valoare în timpul perioadei de probă. Secvența ta de onboarding (Lecția 8) este critică aici — e-mailurile de bun venit ar trebui programate pentru a stimula implicarea în intervalul de 7 zile.

## Coduri de reducere (Discount Codes) {#discount-codes}

Creează coduri de reducere strategice pentru scopuri specifice:

- **FITLAUNCH** — 30% reducere pentru primele 3 luni (pentru promoția de lansare)
- **ANNUAL20** — 20% reducere pentru planurile anuale (dacă nu sunt deja reduse)
- **REFERRAL** — 1 lună gratis (pentru recomandări de la clienți)

Navighează la **Ultimate Multisite > Discount Codes** pentru a le crea. Vezi [Creating Discount Codes](/user-guide/configuration/creating-discount-codes) pentru ghidul complet.

:::tip Nu reduceți prețul implicit
Reducerile ar trebui să fie instrumente strategice, nu elemente permanente. Dacă toată lumea primește o reducere, nu este o reducere — este prețul tău real. Folosește-le pentru campanii specifice, recomandări și promoții limitate în timp.
:::

## Gestionarea taxelor {#tax-handling}

Dacă operezi într-o jurisdicție care necesită colectarea taxelor:

1. Configurează ratele de taxe în **Ultimate Multisite > Settings > Taxes**
2. Aplică categoriile de taxe planurilor tale
3. Asigură-te că facturile afișează taxele corect

Vezi [Tax Handling](/user-guide/payment-gateways/tax-handling) pentru configurare detaliată. Dacă servești clienți internațional, ia în considerare [VAT addon](/addons/vat) pentru conformitatea cu UE.

## Revizuirea prețurilor tale {#reviewing-your-pricing}

După lansare, revizuiește prețurile trimestrial. Observă:

- **Rata de conversie pe plan**: Dacă Starter convertește bine, dar Growth nu, spațiul dintre ele ar putea fi prea mare
- **Rata de upgrade**: Dacă puțini clienți fac upgrade de la Starter la Growth, planul Growth ar putea nu oferi suficientă valoare suplimentară
- **Rata de dezabonare pe plan**: Dacă clienții anuali au o rată de dezabonare mai mică, promovează mai mult prețurile anuale
- **Prețurile concurenților**: Ce taxează alternativele? Ești poziționat corect?

## Rețeaua FitSite până acum {#the-fitsite-network-so-far}

```
FitSite Network
├── WordPress Multisite (subdomain mode)
├── Ultimate Multisite (configured + branded)
├── Platform Domain (fitsite.com + wildcard SSL)
├── Site Templates (Studio Essential, Gym Pro, Fitness Chain)
├── Products
│   ├── FitSite Starter ($49/mo sau $468/an) + 7-day trial
│   ├── FitSite Growth ($99/mo sau $948/an) + $99 setup fee
│   ├── FitSite Pro ($199/mo sau $1,908/an) + $299 setup fee
│   └── Order Bumps + Discount Codes
├── Checkout Flow (with period selection toggle)
├── Branding (login, dashboard, emails, invoices, marketing site)
├── Customer Onboarding (Quick Start, emails, help resources)
├── Pricing Strategy
│   ├── Annual discounts (20% off)
│   ├── Strategic setup fees
│   ├── 7-day trial on Starter
│   ├── Discount codes for campaigns and referrals
│   └── Tax configuration
└── Ready for launch (next lesson)
```

## Ce am construit în această lecție {#what-we-built-this-lesson}

- **Prețuri anuale** cu o reducere de 20% pentru a încuraja angajamentul
- **Taxe de configurare** la nivelurile superioare pentru a acoperi efortul de onboarding
- **O perioadă de probă** la planul de intrare pentru a reduce frecarea în înscriere
- **Coduri de reducere strategice** pentru lansare, recomandări și campanii
- **Configurarea taxelor** pentru facturare conformă
- **Un cadru de revizuire a prețurilor** pentru optimizare continuă

---

**Următorul:** [Lecția 10: Ziua Lansării](lesson-10-launch) — lista de verificare pre-lansare și punerea în funcțiune.
