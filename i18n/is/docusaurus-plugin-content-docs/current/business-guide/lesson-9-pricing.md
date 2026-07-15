---
title: 'Læoni 9: Príssetningur fyrir ávinning'
sidebar_position: 10
_i18n_hash: 0f58d92d3effcc1ffc1f62104d21cdcc
---
# Læoni 9: Prísning til Árangurs

Í Læoni 5 settum við fyrstu prísir fyrir FitSite plans. Í þessu gerðum að við finnum fram á nýja hugtök í prísstefnu sem aukar inntekjur, stimpra upp uppgrunni og minnkar feli.

## Hvar Við Stod {#where-we-left-off}
FitSite hefur plans, temblönd, checkout, branding og onboarding settir upp. Fyrir fyrstu prísunum var það $49/$99/$199 per month. Í þessu gerðum finnum við fram á nýja hugtök í prísstefnu sem aukar inntekjur, stimpra upp uppgrunni og minnkar feli.

## Prísstefnur fyrir Niche Platformir {#pricing-principles-for-niche-platforms}
### Prís á Verðmæti, ekki Kostnað {#price-on-value-not-cost}
Leigujafninn þinn gæti verið $5-$15 per viðskiptaheimili. Þetta þýðir ekki að prísinn þinn ætti að vera $20. Þú sölur ekki leigujafn; þú sölur:

- Profesjónilegt fitness-vitið sem hefði kosta $2,000-$5,000 að byggja sérstaklega
- Fyrirbærileg viðhald, uppfærslur og öryggisþróun sem þeir ekki þurfa að skoða sjálfur
- Sérstakar eiginleikar fyrir nýtingar sem almenn byggjendur ekki býður upp
- Trúspyrjurinn á platformi sem er byggð fyrir deildina þeirra

Prís settur upp á verðmæti sem þú sölur, ekki kostnaði að leigja það.

### Samanburður við Alternativ {#anchor-to-alternatives}
Þegar eigandi fitness-studios skoðar FitSite, samanburðar hann það með:

- **Að hyrja webb-þróandil**: $2,000-$5,000 framgangskeyps + $50-$100/månad viðhald
- **Wix/Squarespace**: $16-$45/månad en án sérstaka eiginleika fyrir fitness, þeir byggja það sjálfur
- **Ekki gera gìnna**: Feli sem ekki geta finna í netinu

Á $49-$199/månad er FitSite billigare en þróandil, meiri háðskiljanlegur en almennar byggjendur og óendanlega betri en enginn vitið.

## Framkvæmd Prísvarðandi {#implementing-price-variations}


Ársky prísning uppmunir til viðhaldi og minnkar fråtaka (churn). Navigjui yfir **Price Variations** tabinn fyrir hvert plan og bæti í ársauðið möguleika í:

| Plan | Mánuðarprís | Ársauður (per month) | Ársauður Totals | Sparnaður |
|------|-------------|---------------------|-----------------|-----------|
| Starter | $49/mo | $39/mo | $468/year | 20% af |
| Growth | $99/mo | $79/mo | $948/year | 20% af |
| Pro | $199/mo | $159/mo | $1,908/year | 20% af |

Bæti **Period Selection** fält í skráningarskjálann þinn til að viðskiptavinir geta breytt milli mánuðar- og ársauði greiðslu. Sjá [Checkout Forms](/user-guide/configuration/checkout-forms#adding-a-period-selection-toggle).

### Hvað gerir ársauður virkjað? {#why-annual-pricing-works}

- **Fyrir þig**: Framkvæmdarpeningur á fyrirtvegi, minnka fråtaka (viðskiptavinir sem betalir á árið eru mindre til að fela af sig)
- **Fyrir þeim**: Réa sparnaður, fyrirframáttarstjórn á fjármálum

## Uppsetningarsamþykki (Setup Fees) {#setup-fees}

Hugsa um einn uppsetningarsamþykki fyrir plan sem innihalda handbanna uppsetningu:

- **Starter**: Engin uppsetningarsamþykki (fjáðu hönnunarhindranir)
- **Growth**: $99 uppsetningarsamþykki (fyrir uppsetninga fyrir sérstaka vísarstæður og fyrsta ráðgjöf)
- **Pro**: $299 uppsetningarsamþykki (fyrir uppsetningu á fleiri staðnum og fyrsta ráðgjöf)

Uppsetningarsamþykki geturð það í hverjum prísarstefnu plansins. Sjá [Creating Your First Subscription Product](/user-guide/configuration/creating-your-first-subscription-product) fyrir nánari upplýsingar.

## Prófa-tími (Trial Periods) {#trial-periods}

Tilboð prófa-tíma minnkar hönnunarhindranir við skráningu en býður upp á áhættu um að ekki fela af sig. Fyrir FitSite:

* **7-dagars frjáls prøvegangur** bara á Starter planinu
* Engin prøvegangur á Growth og Pro (þessir viðskiptavinir eru meira skuldbandafast og bíða þess að betalla)

Stillingaðu prøvegangurinn í prísarstjórn Starter plansins með því að opna **Offer Trial** togglin og setja lengduna á 7 daga.

### Að gera prøvegangurinn til sölus {#making-trials-convert}
Prófprófa gangur bara ef viðskiptavinurinn upplifir gildi í prófíðum mínum. Inngangsserið þinn (Lesson 8) er mikilvægur hér – velkomna tölvupóstur ættu að vera settar til að spyrja á áhuga innan 7-dagakvöldunar.

## Viðskiptahefðir {#discount-codes}
Skapaðu stefingarskilpur fyrir sérstaka þætti:

- **FITLAUNCH** -- 30% af fyrri 3 mánuðum (til lansunarpromótion)
- **ANNUAL20** -- 20% af ársplanum (ef ekki er það getið áður)
- **REFERRAL** -- 1 mánuhinn frjáls (til viðskiptavina til að gefa annar)

Navið í **Ultimate Multisite > Discount Codes** til að skapa þau. Sjá [Creating Discount Codes](/user-guide/configuration/creating-discount-codes) fyrir nánari leiðbeiningu.

:::tip Skapaðu ekki hefðbundna viðskiptahefðir
Viðskiptahefðir ættu að vera stefingarskilpur, ekki stöðugt þjónustu. Ef alla fái viðskiptahefð, er það ekki viðskiptahefð – það er verulegt prísinn þinn. Notaðu þær fyrir sérstaka kampanir, til að gefa annar og tímahindra á tímabilum.
:::

## Skilning skatta {#tax-handling}
Ef þú verkefnið í lögnum sem krefst skattarinnar:

1. Stillingaðu skattarhlutfalli í **Ultimate Multisite > Settings > Taxes**
2. Notaðu skattarhlutfall til plananna þina
3. Skildu að faktuðir sýnu skattann rétt

Sjá [Tax Handling](/user-guide/payment-gateways/tax-handling) fyrir nánari upplýsingar um innregluð skatt. Ef þú þjónar viðskiptavili alþjóðlega, skoðaðu [VAT addon](/addons/vat) fyrir EU samþykki.

## Sjálfskynning verðla {#reviewing-your-pricing}
Eftir lansunni skal duðast verði kvartalinn. Skoðaðu:

- **Sjálfskynningur eftir plan**: Ef Starter sýnist vel en Growth ekki, gæti skilningur milli þessarar áhrifasins verið of stórt
- **Uppgravningarsjálfskynningur**: Ef fær lítil fjöldi viðskiptavina uppgravningu frá Starter til Growth, gæti Growth plan ekki býður upp nokkinn tilfyllt verðmæti
- **Felsjálfskynningur eftir plan**: Ef ársviðandi viðskiptavinir fær lítil felsjálfskynningu, þá skal ársverðla minna styrka
- **Verðsetning kvenna**: Hvað sýna aðrir til að bjóða? Er þú hönnuð rétt?

## FitSite Netverkinn hittil {#the-fitsite-network-so-far}



FitSite Network
├── WordPress Multisite (subdomain moda)
├── Ultimate Multisite (tengdurt + bráðingur)
├── Platform Domain (fitsite.com + wildcard SSL)
├── Site Templates (Studio Essential, Gym Pro, Fitness Chain)
├── Produkter
│   ├── FitSite Starter ($49/månad eða $468/år) + 7-dagars prófanir
│   ├── FitSite Growth ($99/månad eða $948/år) + $99 uppsetningartímið
│   ├── FitSite Pro ($199/månad eða $1,908/år) + $299 uppsetningartímið
│   └── Order Bumps + Viðskiptakóðir
├── Checkout Flow (með veitandi vali á tímabilum)
├── Bráðingur (innsending, dashboard, tölvupóstur, faktuir, markaðarvefsít)
├── Klýning viðskiptavina (Quick Start, tölvupóstur, hjálparauði)
├── Setningstímið
│   ├── Ársvíllingjar (20% af þá)
│   ├── Strategísk uppsetningartímið
│   ├── 7-dagars prófanir á Starter
│   ├── Viðskiptakóðir fyrir markaðar og tilgangurferli
│   └── Skattareglurinn
└── Bærdist til laukn (næsta læoni)

## Hva við byggðum í þessari læoni {#what-we-built-this-lesson}

- **Ársvíllingjar** með 20% af þá til að uppmunast til framkvæmdar
- **Uppsetningartímið** á hærri tímum til að dekkja fyrir vinnu við innleiðingu
- **Prófanirímið** á grunnplannum til að minnka óþægindum við að skrá sig
- **Strategísk viðskiptakóðir** fyrir laukn, tilgangurferli og markaðarferli
- **Skattareglurinn** fyrir samræmd faktuð
- **Rammi fyrir setningstíma** til stöðugrar uppfærslu

---

**Næsta:** [Læoni 10: Lauknann] -- vafnilega lista fyrir laukn og opnun.
