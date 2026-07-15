---
title: 'Læoni 6: Skráningarnar upplifun'
sidebar_position: 7
_i18n_hash: a5c16cdd9b4e53a69e138df7bb042411
---
# Læoni 6: Signup-upplifunni

Kaupferlið er þar sem áhuga orðast í fjármuni. Óskýr eða algeng skráningarprosessi missir viðskiptavini. Einangrað ferli sem talar þeirra tungumli og finnst eins og engin ákostur, breytur þeim til betalande viðskiptavina.

## Hvar Við Stod {#where-we-left-off}
FitSite hefur temblönd og planir sett upp. Í dag byggjum við skráningarprosessi og kaupferli sem breytur færslum fyrir træningstofa í betalande viðskiptavina.

## Skilning á Skráningarprosessnum {#understanding-the-registration-flow}
Ultimate Multisite's checkout forms eru fullt möguleiki til að þýða flursteppla formir. Til FitSite viljum við ferli sem:

1. Finns eins og það hefur verið byggt fyrir træningstofa
2. Samlar aðeins það sem er nauðsynlegt
3. Fáttar viðskiptavininn á vinnandi síðu í hraða mögulega

Sjá [The Registration Flow](/user-guide/configuration/the-registration-flow) fyrir fullan tæknilegan referens.

## Design á FitSite Kaupferlið {#designing-the-fitsite-checkout}
Navígu yfir **Ultimate Multisite > Checkout Forms** og skapa nýtt form.

### Stig 1: Val á Planum {#step-1-plan-selection}

Fyrir allt sem træningstofa eigandi sjá, þurfa planir sést í orða þeirra skilja.

- Ítilagið felt **Pricing Table**
- Settu upp það til að sýna þrjár FitSite planir
- Planauðskrifanir sem þú skrifluð í Læoni 5 eru hér – þurfa að tryggja að þær tali um þörf træningstofa, ekki tæknilega eiginleika

:::tip Einangrað tungumli er mikilvægt
"1 GB gömlu" hefur engin merkingu fyrir gymmi eigandi. "Allt sem þú þarft til proff-síðu træningstofa" hefur allt. Skrifa planauðskrifanir í tungumli viðskiptavina þín.
:::

### Árangurvalg á malli (Template Selection) {#step-2-template-selection}

Eftir að velja plan, vælimur að nota þennan skrefið til að velja byrjunmallann fyrir viðskiptavininn.

- Ítildu **Template Selection** fält.
- Til að sjá hvernig málarnir eru fylgðar, er valin mallar fylgðar eftir planinu sem þeir valdiðu (sem er sett upp í Læoni 5).
- Hvert mallur þarf að hafa fyrirfyrst mynd til viðmiðunar sem sýnir hönnun sérsniðin fyrir trænni/fitness.

### Árangurskýrslu (Account Creation) {#step-3-account-creation}

Hafðu þetta eins einfalt og mögulegt er. Samlaðu aðeins eftirfarandi upplýsingar:

- Tölvupóstur
- Lösenord
- Námskeiðs/viðskiptaheiti (þetta blir nýtt staðnámsnafn fyrir síðuna þeirra)

Spyr ekki um upplýsingar sem þú þarft ekki við skráningu. Hvert extra fält minnkar konversjónina.

### Uppsetning síðunar (Site Setup) {#step-4-site-setup}

- **Site title** (Títil á síðuna): Fyll eftir með heiti námskeiðsins sem var sett í skrefi 3
- **Site URL** (Loka staður á síðunni): Auto-gengja úr heiti námskeiðsins (t.d. `ironworks.fitsite.com`)

### Betalning (Payment) {#step-5-payment}

- Ítildu **Payment** fält.
- Það er minnt til að setja upp betalingshættuna þína ([Stripe](/user-guide/payment-gateways/stripe) er minnt til fyrir skráningu með endurskoðun).
- Ef þú hefur skráð **Order Bumps** í Læoni 5, bætu við **Order Bump** fält áður en betalingsskrefið.

### Bestæðing (Confirmation) {#step-6-confirmation}

- Skynja bestæðingarmótuna með hugtökum sérsniðnum fyrir trænni/fitness.
- Dæmi: "Sjónvarpi námskeiðsins þíns er að byggja upp. Þú verður leiðréttur á nýja síðuna þinni í ein sömmu tíma."

## Íbúningur fyrir val á tímabil (Adding a Period Selection Toggle) {#adding-a-period-selection-toggle}

Ef þú settir upp verðarbreytileikur í planum þínum (mánaðarinn vs. árs), bæti við **Period Selection** felt í skráningarskjans fyrir betalingsskráninguna svo að viðskiptavinir geti skilað saman milli reikningstíma. Sjá [Checkout Forms](/user-guide/configuration/checkout-forms#adding-a-period-selection-toggle) fyrir leiðbeiningar um þetta.

## Innstilling av betalingshættum (Configuring Payment) {#configuring-payment}

Ef þú hefur ekki sett upp betalingshættu áður:

1. Gangi í **Ultimate Multisite > Settings > Payment Gateways**
2. Fylgja [Stripe setup guide](/user-guide/payment-gateways/stripe) eða valinn hættu
3. Testi fullan skráningarsýn með testarbetalingu betalingu

Sjá [Getting Paid](/user-guide/payment-gateways/getting-paid) fyrir upplýsingar um hvernig betalingar flæðar í reikninginn þinn.

## Testun ferlisins (Testing the Flow) {#testing-the-flow}

Fyrir að fara yfir, fullfær fulla testskráningu:

1. Opna skráningarskjann í incognito/private browngla
2. Veldu plan
3. Valdu mall
4. Skapa reikning
5. Fullfær betaling (notkun testarinnstillingar)
6. Staðfest að vísitalinn sé skapaður með réttum malli

Þýð verð:

- [ ] Planauðskrifanir eru klár og sérsniðnar fyrir þann sérstaka sviði
- [ ] Mallauðskynslur sýna hlutverk sem passar við fítness
- [ ] Vísitalinn gerist rétt frá stúdíusnafi
- [ ] Betalingsforrit eru lausa
- [ ] Viðskiptavinir komast á vinnandi síti með valdinum malli
- [ ] Staðfestingstölur nota fítness-sérsniðnu orða

FitSite Network
├── WordPress Multisite (subdomain moda)
├── Ultimate Multisite (innstilt)
├── Hosting með wildcard SSL + domain mapping
├── Site Templates (Studio Essential, Gym Pro, Fitness Chain)
├── Produkter (Starter, Growth, Pro + Order Bumps)
├── Checkout Flow
│   ├── Plan val á nítandi skýrslum fyrir sérhæfðir staðir
│   ├── Val á temblöð með fitness fyrirspilum
│   ├── Minimal reikningurferli
│   ├── Skjaldeild með Stripe
│   └── Fitness-sérstaklega staðfesting
└── Bærdur til brandingar (næsta læoni)

## Hva við byggðum í þessu læoni {#the-fitsite-network-so-far}

- **Flóknum reikningurferli** sniðinn fyrir eigendur fitness staðir
- **Sérhæfð orðalag** í heildar reikningurferlið
- **Minimal óþægindi** – aðeins nauðsynlegir feldir, hrað veg til vinnenda staðar
- **Skjaldeild með Stripe** og tæknilega staðfesting
- **Testað endanlegt ferli** frá val á planum til vinnenda staðar

---

**Næsta:** [Læoni 7: að gera það sín] (lesson-7-branding) -- við gerum plattforma sínna bróðum og byggjum FitSite upp sem merki.
