---
title: '9. nodarbība: Cenu noteikšana peļņas gūšanai'
sidebar_position: 10
_i18n_hash: 0f58d92d3effcc1ffc1f62104d21cdcc
---
# 9. nodarbība: cenu noteikšana peļņai

5. nodarbībā mēs noteicām sākotnējās cenas FitSite plāniem. Tagad pilnveidojam cenu stratēģiju ar paņēmieniem, kas palielina ieņēmumus, veicina pāreju uz augstākiem plāniem un samazina klientu aizplūšanu.

## Kur mēs apstājāmies

FitSite jau ir ieviesti plāni, veidnes, checkout, zīmolvedība un onboarding. Sākotnējās cenas bija $49/$99/$199 mēnesī. Tagad panāksim, lai šīs cenas strādā efektīvāk.

## Cenu noteikšanas principi nišas platformām

### Nosakiet cenu pēc vērtības, nevis izmaksām

Jūsu hostinga izmaksas varētu būt $5-$15 par klienta vietni. Tas nenozīmē, ka cenai jābūt $20. Jūs nepārdodat hostingu. Jūs pārdodat:

- Profesionālu fitnesa tīmekļa vietni, kuras individuāla izstrāde maksātu $2,000-$5,000
- Pastāvīgu uzturēšanu, atjauninājumus un drošību, par ko viņiem nav jādomā
- Nišai specifiskas funkcijas, ko vispārīgi konstruktori nepiedāvā
- Uzticamību, ko sniedz platforma, kas izveidota viņu nozarei

Nosakiet cenu, balstoties uz vērtību, ko sniedzat, nevis uz tās nodrošināšanas izmaksām.

### Piesaistiet cenu alternatīvām

Kad fitnesa studijas īpašnieks izvērtē FitSite, viņš to salīdzina ar:

- **Tīmekļa izstrādātāja nolīgšanu**: $2,000-$5,000 sākumā + $50-$100/mēnesī uzturēšanai
- **Wix/Squarespace**: $16-$45/mēnesī, bet bez fitnesam specifiskām funkcijām, un viņiem viss jāveido pašiem
- **Nedarīšanu neko**: Zaudēti dalībnieki, kuri nevar viņus atrast tiešsaistē

Pie $49-$199/mēnesī FitSite ir lētāks nekā izstrādātājs, spējīgāks nekā vispārīgi konstruktori un neizmērojami labāks nekā nekādas tīmekļa vietnes neesamība.

## Cenu variāciju ieviešana

Gada cenas veicina apņemšanos un samazina klientu aizplūšanu. Dodieties uz katra plāna cilni **Price Variations** un pievienojiet gada opcijas:

| Plāns | Mēneša | Gada (mēnesī) | Gada kopā | Ietaupījums |
|------|---------|-------------------|--------------|---------|
| Starter | $49/mēn. | $39/mēn. | $468/gadā | 20% atlaide |
| Growth | $99/mēn. | $79/mēn. | $948/gadā | 20% atlaide |
| Pro | $199/mēn. | $159/mēn. | $1,908/gadā | 20% atlaide |

Pievienojiet checkout formai lauku **Period Selection**, lai klienti varētu pārslēgties starp mēneša un gada norēķiniem. Skatiet [Checkout formas](/user-guide/configuration/checkout-forms#adding-a-period-selection-toggle).

### Kāpēc gada cenas darbojas

- **Jums**: Nauda avansā, zemāka klientu aizplūšana (klienti, kuri maksā par gadu, retāk atceļ abonementu perioda vidū)
- **Viņiem**: Reāli ietaupījumi, budžeta paredzamība

## Iestatīšanas maksas

Apsveriet vienreizēju iestatīšanas maksu plāniem, kuros iekļauta praktiska konfigurēšana:

- **Starter**: Bez iestatīšanas maksas (samazina ienākšanas barjeras)
- **Growth**: $99 iestatīšanas maksa (sedz pielāgota domēna konfigurēšanu un sākotnējo konsultāciju)
- **Pro**: $299 iestatīšanas maksa (sedz vairāku atrašanās vietu iestatīšanu un onboarding zvanu)

Konfigurējiet iestatīšanas maksas katra plāna cenu sadaļā. Sīkāku informāciju skatiet [Pirmā abonementa produkta izveide](/user-guide/configuration/creating-your-first-subscription-product).

## Izmēģinājuma periodi

Izmēģinājuma piedāvāšana samazina reģistrēšanās berzi, bet ievieš risku, ka lietotāji nekļūs par maksājošiem klientiem. FitSite gadījumā:

- **7 dienu bezmaksas izmēģinājums** tikai Starter plānam
- Bez izmēģinājuma Growth un Pro plāniem (šie klienti ir apņēmīgāki un sagaida, ka maksās)

Konfigurējiet izmēģinājumu Starter plāna cenu sadaļā, ieslēdzot slēdzi **Offer Trial** un iestatot ilgumu uz 7 dienām.

### Kā panākt izmēģinājumu konversiju

Izmēģinājums darbojas tikai tad, ja klients izmēģinājuma periodā piedzīvo vērtību. Jūsu onboarding secība (8. nodarbība) šeit ir kritiski svarīga -- sveiciena e-pastiem jābūt ieplānotiem tā, lai 7 dienu logā veicinātu iesaisti.

## Atlaižu kodi

Izveidojiet stratēģiskus atlaižu kodus konkrētiem mērķiem:

- **FITLAUNCH** -- 30% atlaide pirmajiem 3 mēnešiem (palaišanas akcijai)
- **ANNUAL20** -- 20% atlaide gada plāniem (ja tie vēl nav ar atlaidi)
- **REFERRAL** -- 1 mēnesis bez maksas (klientu ieteikumiem)

Dodieties uz **Ultimate Multisite > Discount Codes**, lai tos izveidotu. Pilnu ceļvedi skatiet [Atlaižu kodu izveide](/user-guide/configuration/creating-discount-codes).

:::tip Do Not Discount by Default
Discounts should be strategic tools, not permanent fixtures. If everyone gets a discount, it is not a discount -- it is your real price. Use them for specific campaigns, referrals, and time-limited promotions.
:::

## Nodokļu apstrāde

Ja darbojaties jurisdikcijā, kurā nepieciešama nodokļu iekasēšana:

1. Konfigurējiet nodokļu likmes sadaļā **Ultimate Multisite > Settings > Taxes**
2. Piemērojiet nodokļu kategorijas saviem plāniem
3. Pārliecinieties, ka rēķinos nodokļi tiek attēloti pareizi

Detalizētu konfigurāciju skatiet [Nodokļu apstrāde](/user-guide/payment-gateways/tax-handling). Ja apkalpojat klientus starptautiski, apsveriet [VAT papildinājumu](/addons/vat) atbilstībai ES prasībām.

## Cenu pārskatīšana

Pēc palaišanas pārskatiet cenas reizi ceturksnī. Apskatiet:

- **Konversijas rādītājs pēc plāna**: Ja Starter konvertē labi, bet Growth ne, atšķirība starp tiem var būt pārāk liela
- **Pārejas uz augstāku plānu rādītājs**: Ja tikai daži klienti pāriet no Starter uz Growth, Growth plāns, iespējams, nepiedāvā pietiekamu papildu vērtību
- **Klientu aizplūšana pēc plāna**: Ja gada klientu aizplūšana ir mazāka, aktīvāk virziet gada cenas
- **Konkurentu cenas**: Cik prasa alternatīvas? Vai esat pozicionēti pareizi?

## FitSite tīkls līdz šim

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

## Ko mēs izveidojām šajā nodarbībā

- **Gada cenas** ar 20% atlaidi, lai veicinātu apņemšanos
- **Iestatīšanas maksas** augstākos līmeņos, lai segtu ieviešanas darbu
- **Izmēģinājuma periods** sākuma līmeņa plānā, lai samazinātu reģistrēšanās šķēršļus
- **Stratēģiskie atlaižu kodi** palaišanai, ieteikumiem un kampaņām
- **Nodokļu konfigurācija** atbilstošai rēķinu izrakstīšanai
- **Cenu pārskatīšanas ietvars** nepārtrauktai optimizācijai

---

**Tālāk:** [10. nodarbība: Palaišanas diena](lesson-10-launch) -- pirms palaišanas kontrolsaraksts un publicēšana.
