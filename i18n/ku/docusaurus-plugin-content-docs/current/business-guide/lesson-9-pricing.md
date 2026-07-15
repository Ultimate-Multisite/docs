---
title: 'Ders 9: Nirxdan ji bo Qezencê'
sidebar_position: 10
_i18n_hash: 0f58d92d3effcc1ffc1f62104d21cdcc
---
# Ders 9: Nirxdan ji bo Qezencê

Di Dersa 5 de me nirxên destpêkê ji bo planên FitSite danîn. Niha em stratejiya nirxdanê bi teknîkên ku dahatê zêde dikin, upgrade-an teşwîq dikin, û churn kêm dikin baştir dikin.

## Li Ku Derê Ma Bûn {#where-we-left-off}

FitSite niha plan, şablon, dayîn, branding, û onboarding hene. Nirxên destpêkê $49/$99/$199 di mehê de bûn. Niha em dihêlin ev nirxdan zêdetir kar bike.

## Prensîbên Nirxdanê ji bo Platformên Nîş {#pricing-principles-for-niche-platforms}

### Li Gorî Nirxê Bidin, Ne Li Gorî Mesrefê {#price-on-value-not-cost}

Mesrefên hosting-a te dibe ku ji bo her malpera mişterî $5-$15 bin. Ev nayê wê wateyê ku nirxa te divê $20 be. Tu hosting nafiroşî. Tu van tiştan difiroşî:

- Malperek fitness-a profesyonel ku çêkirina wê bi awayekî taybet $2,000-$5,000 dê biha be
- Lênêrîn, update, û ewlehiya berdewam ku ew ne hewce ne li ser bifikirin
- Taybetmendiyên taybet ji bo nîşa wan ku çêkerên giştî pêşkêş nakin
- Baweriyariya platformekê ku ji bo pîşesaziya wan hatiye çêkirin

Nirxê li gorî nirxa ku tu radest dikî danê, ne li gorî mesrefa radestkirina wê.

### Bi Alternatîfan Girê Bidin {#anchor-to-alternatives}

Dema xwediyê stûdyoyek fitness FitSite dinirxîne, ew wê bi van tiştan re dide ber hev:

- **Girtina web developer**: $2,000-$5,000 ji pêş ve + $50-$100/di mehê de ji bo lênêrînê
- **Wix/Squarespace**: $16-$45/di mehê de lê bê taybetmendiyên fitness-ê, ew xwe ava dikin
- **Tiştek nekirin**: Endamên winda ku nikarin wan online bibînin

Bi $49-$199/di mehê de, FitSite ji developer-ekê erzantir e, ji çêkerên giştî zêdetir kar dike, û ji nebûna malperê bêhed baştir e.

## Bicîhanîna Guherandinên Nirxê {#implementing-price-variations}

Nirxandina salane pabendiyê teşwîq dike û churn kêm dike. Biçe tab-a **Guherandinên Nirxê** ya her planê û vebijarkên salane lê zêde bike:

| Plan | Mehane | Salane (di mehê de) | Tevahiya Salane | Teserûf |
|------|---------|-------------------|--------------|---------|
| Destpêk | $49/meh | $39/meh | $468/sal | 20% kêm |
| Mezinbûn | $99/meh | $79/meh | $948/sal | 20% kêm |
| Pro | $199/meh | $159/meh | $1,908/sal | 20% kêm |

Qadeke **Hilbijartina Demê** li forma dayîna xwe zêde bike da ku mişterî karibin di navbera fatûreya mehane û salane de biguherînin. Binêre [Formên Dayînê](/user-guide/configuration/checkout-forms#adding-a-period-selection-toggle).

### Çima Nirxandina Salane Kar Dike {#why-annual-pricing-works}

- **Ji bo te**: Pereyê pêşîn, churn-a kêmtir (mişteriyên ku salane didin bi ihtimaleke kêmtir di nîvê demê de betal dikin)
- **Ji bo wan**: Teserûfa rastîn, pêşbîniya budceyê

## Xercên Setup {#setup-fees}

Ji bo planên ku veavakirina bi alîkarî dihewînin, xerceke yek-carî ya setup bifikire:

- **Destpêk**: Bê xerca setup (astengên têketinê rake)
- **Mezinbûn**: $99 xerca setup (veavakirina domain-a taybet û şêwirmendiya destpêkê digire)
- **Pro**: $299 xerca setup (setup-a gelek cihan û bangek onboarding digire)

Xercên setup di beşa nirxdanê ya her planê de veava bike. Ji bo hûrguliyan binêre [Afirandina Yekemîn Hilbera Abonetiya Xwe](/user-guide/configuration/creating-your-first-subscription-product).

## Demên Ceribandinê {#trial-periods}

Pêşkêşkirina ceribandinê astengiya tomarkirinê kêm dike lê rîska neguherînê jî tîne. Ji bo FitSite:

- **Ceribandina belaş a 7 rojî** tenê li ser plana Destpêk
- Li ser Mezinbûn û Pro ceribandin tune (ev mişterî zêdetir pabend in û hêvî dikin ku bidin)

Ceribandinê li beşa nirxdanê ya plana Destpêk veava bike: toggle-a **Ceribandin Pêşkêş Bike** çalak bike û demê 7 roj danê.

### Çawa Ceribandin Têne Veguherandin {#making-trials-convert}

Ceribandin tenê dema kar dike ku mişterî di dema ceribandinê de nirxê bibîne. Rêza onboarding-a te (Dersa 8) li vir girîng e -- divê emailên pêşwaziyê di dema rast de werin şandin da ku di nav pencereya 7 rojî de tevlîbûnê bimeşînin.

## Kodên Daxistinê {#discount-codes}

Ji bo armancên taybet kodên daxistinê yên stratejîk biafirîne:

- **FITLAUNCH** -- 30% kêm ji 3 mehên yekem (ji bo pêşvebirina launch)
- **ANNUAL20** -- 20% kêm ji planên salane (heke jixwe daxistin nehatibe kirin)
- **REFERRAL** -- 1 meh belaş (ji bo referral-ên mişteriyan)

Ji bo afirandina van, biçe **Ultimate Multisite > Discount Codes**. Ji bo rêbernameya tevahî binêre [Afirandina Kodên Daxistinê](/user-guide/configuration/creating-discount-codes).

:::tip Bi Default Daxistin Nekin
Daxistin divê amûrên stratejîk bin, ne tiştên herdemî. Heke her kes daxistinê bistîne, ew ne daxistin e -- ew nirxa te ya rastîn e. Wan ji bo kampanyayên taybet, referral-an, û pêşvebirinên dem-sînorkirî bi kar bîne.
:::

## Birêvebirina Bacê {#tax-handling}

Heke tu li herêmekê kar dikî ku berhevkirina bacê hewce dike:

1. Rêjeyên bacê di **Ultimate Multisite > Settings > Taxes** de veava bike
2. Kategoriyên bacê li planên xwe bi kar bîne
3. Piştrast bike ku fatûre bacê rast nîşan didin

Ji bo veavakirina hûrgulî binêre [Birêvebirina Bacê](/user-guide/payment-gateways/tax-handling). Heke tu ji mişteriyên navneteweyî re xizmet dikî, ji bo lihevhatina EU-ê [VAT addon](/addons/vat) bifikire.

## Nirxandina Nirxdanê ya Xwe {#reviewing-your-pricing}

Piştî launch, her sê meh carekê vegere nirxdanê. Li van binihêre:

- **Rêjeya veguherînê li gorî planê**: Heke Destpêk baş vediguherîne lê Mezinbûn na, dibe ku valahiya di navbera wan de pir mezin be
- **Rêjeya upgrade**: Heke mişteriyên hindik ji Destpêkê ber bi Mezinbûnê ve upgrade dikin, dibe ku plana Mezinbûnê têra nirxa zêde pêşkêş neke
- **Churn li gorî planê**: Heke mişteriyên salane kêmtir churn dikin, nirxandina salane zêdetir pêş bixe
- **Nirxandina hevrikan**: Alternatîf çiqas digirin? Tu rast hatiyî cihkirin?

## Tora FitSite Heta Niha {#the-fitsite-network-so-far}

```
FitSite Network
├── WordPress Multisite (subdomain mode)
├── Ultimate Multisite (configured + branded)
├── Platform Domain (fitsite.com + wildcard SSL)
├── Site Templates (Studio Essential, Gym Pro, Fitness Chain)
├── Products
│   ├── FitSite Starter ($49/mo or $468/yr) + 7-day trial
│   ├── FitSite Growth ($99/mo or $948/yr) + $99 setup fee
│   ├── FitSite Pro ($199/mo or $1,908/yr) + $299 setup fee
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

## Me Di Vê Dersê de Çi Avakirin {#what-we-built-this-lesson}

- **Nirxandina salane** bi 20% daxistinê ji bo teşwîqkirina pabendbûnê
- **Mesrefên sazkirinê** li ser astên bilindtir ji bo vegirtina hewldana destpêkirinê
- **Demeke ceribandinê** li ser plana asta destpêkê ji bo kêmkirina zehmetiya tomarkirinê
- **Kodên daxistinê yên stratejîk** ji bo destpêk, referans û kampanyayan
- **Mîhengkirina bacê** ji bo fatûrekirina li gor rêziknameyan
- **Çarçoveyeke nirxandina nirxan** ji bo baştirkirina domdar

---

**Piştre:** [Ders 10: Roja Destpêkirinê](lesson-10-launch) -- lîsteya kontrolê ya berî destpêkirinê û çûna zindî.
