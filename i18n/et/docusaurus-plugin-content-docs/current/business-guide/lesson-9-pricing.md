---
title: 'Õppetund 9: Kasumlik hinnastamine'
sidebar_position: 10
_i18n_hash: 0f58d92d3effcc1ffc1f62104d21cdcc
---
# Õppetund 9: Kasumlik hinnastamine {#lesson-9-pricing-for-profit}

Õppetunnis 5 määrasime FitSite’i pakettidele algsed hinnad. Nüüd täiustame hinnastrateegiat tehnikatega, mis suurendavad tulu, soodustavad kõrgemale paketile üleminekut ja vähendavad loobumist.

## Kuhu me pooleli jäime {#where-we-left-off}

FitSite’il on paketid, mallid, kassaprotsess, bränding ja sisseelamine paigas. Algne hinnastus oli $49/$99/$199 kuus. Nüüd paneme selle hinnastuse rohkem tööd tegema.

## Hinnastamispõhimõtted nišiplatvormidele {#pricing-principles-for-niche-platforms}

### Hinda väärtuse, mitte kulu järgi {#price-on-value-not-cost}

Sinu hostingu kulud võivad olla $5–$15 kliendi veebisaidi kohta. See ei tähenda, et sinu hind peaks olema $20. Sa ei müü hostingut. Sa müüd:

- Professionaalset fitnessi veebisaiti, mille eritellimusel loomine maksaks $2,000–$5,000
- Pidevat hooldust, uuendusi ja turvalisust, millele nad ei pea mõtlema
- Nišispetsiifilisi funktsioone, mida üldised ehitajad ei paku
- Usaldusväärsust, mis tuleb nende valdkonna jaoks loodud platvormist

Hinda selle väärtuse põhjal, mida pakud, mitte selle kulu põhjal, mis sul selle pakkumiseks tekib.

### Seo hind alternatiividega {#anchor-to-alternatives}

Kui fitnessistuudio omanik hindab FitSite’i, võrdleb ta seda järgmiste võimalustega:

- **Veebiarendaja palkamine**: $2,000–$5,000 ettemaksuna + $50–$100/kuu hoolduseks
- **Wix/Squarespace**: $16–$45/kuu, kuid ilma fitnessispetsiifiliste funktsioonideta; nad ehitavad selle ise
- **Mitte midagi tegemine**: Kaotatud liikmed, kes ei leia neid veebist

Hinnaga $49–$199/kuu on FitSite odavam kui arendaja, võimekam kui üldised ehitajad ja lõputult parem kui veebisaidi puudumine.

## Hinnavariatsioonide rakendamine {#implementing-price-variations}

Aastane hinnastus soodustab pühendumist ja vähendab loobumist. Liigu iga paketi vahekaardile **Hinnavariatsioonid** ja lisa aastased valikud:

| Pakett | Kuu kaupa | Aastane (kuus) | Aastane kogusumma | Sääst |
|------|---------|-------------------|--------------|---------|
| Starter | $49/kuu | $39/kuu | $468/aasta | 20% soodsam |
| Growth | $99/kuu | $79/kuu | $948/aasta | 20% soodsam |
| Pro | $199/kuu | $159/kuu | $1,908/aasta | 20% soodsam |

Lisa oma kassavormile väli **Perioodi valik**, et kliendid saaksid vahetada kuu- ja aastapõhise arvelduse vahel. Vaata [Kassavormid](/user-guide/configuration/checkout-forms#adding-a-period-selection-toggle).

### Miks aastane hinnastus toimib {#why-annual-pricing-works}

- **Sinu jaoks**: Raha ette, väiksem loobumine (kliendid, kes maksavad aastaks ette, tühistavad väiksema tõenäosusega perioodi keskel)
- **Nende jaoks**: Tegelik sääst, eelarve ennustatavus

## Seadistustasud {#setup-fees}

Kaalu ühekordset seadistustasu pakettidele, mis sisaldavad praktilist seadistamist:

- **Starter**: Seadistustasu puudub (eemalda sisenemistõkked)
- **Growth**: $99 seadistustasu (katab kohandatud domeeni seadistamise ja esmase konsultatsiooni)
- **Pro**: $299 seadistustasu (katab mitme asukoha seadistamise ja sisseelamiskõne)

Seadista seadistustasud iga paketi hinnastuse jaotises. Üksikasjade jaoks vaata [Oma esimese tellimustoote loomine](/user-guide/configuration/creating-your-first-subscription-product).

## Prooviperioodid {#trial-periods}

Prooviperioodi pakkumine vähendab registreerumise hõõrdumist, kuid tekitab riski, et kasutaja ei konverteeru maksvaks kliendiks. FitSite’i puhul:

- **7-päevane tasuta prooviperiood** ainult Starter-paketil
- Growth- ja Pro-paketil prooviperioodi pole (need kliendid on rohkem pühendunud ja eeldavad maksmist)

Seadista prooviperiood Starter-paketi hinnastuse jaotises, lubades lüliti **Paku prooviperioodi** ja määrates kestuseks 7 päeva.

### Kuidas prooviperioodid konverteerima panna {#making-trials-convert}

Prooviperiood toimib ainult siis, kui klient kogeb selle jooksul väärtust. Sinu sisseelamisjada (õppetund 8) on siin kriitiline -- tervituskirjad peaksid olema ajastatud nii, et need suurendaksid kaasatust 7-päevase akna jooksul.

## Sooduskoodid {#discount-codes}

Loo strateegilisi sooduskoode konkreetsetel eesmärkidel:

- **FITLAUNCH** -- 30% soodustust esimeseks 3 kuuks (käivituskampaania jaoks)
- **ANNUAL20** -- 20% soodustust aastastele pakettidele (kui need pole juba soodustatud)
- **REFERRAL** -- 1 kuu tasuta (klientide soovituste eest)

Nende loomiseks liigu **Ultimate Multisite > Sooduskoodid**. Täieliku juhendi jaoks vaata [Sooduskoodide loomine](/user-guide/configuration/creating-discount-codes).

:::tip Ära paku soodustust vaikimisi
Soodustused peaksid olema strateegilised tööriistad, mitte püsivad elemendid. Kui kõik saavad soodustust, ei ole see soodustus -- see on sinu tegelik hind. Kasuta neid konkreetsete kampaaniate, soovituste ja ajaliselt piiratud pakkumiste jaoks.
:::

## Maksude käsitlemine {#tax-handling}

Kui tegutsed jurisdiktsioonis, kus maksude kogumine on nõutav:

1. Seadista maksumäärad jaotises **Ultimate Multisite > Seaded > Maksud**
2. Rakenda oma pakettidele maksukategooriad
3. Veendu, et arved kuvaksid maksu õigesti

Üksikasjaliku seadistuse jaoks vaata [Maksude käsitlemine](/user-guide/payment-gateways/tax-handling). Kui teenindad kliente rahvusvaheliselt, kaalu EL-i nõuetele vastavuse jaoks [VAT addon](/addons/vat).

## Hinnastuse ülevaatamine {#reviewing-your-pricing}

Pärast käivitamist vaata hinnastus kord kvartalis üle. Vaata järgmist:

- **Konversioonimäär paketi lõikes**: Kui Starter konverteerib hästi, kuid Growth mitte, võib nende vahe olla liiga suur
- **Kõrgemale paketile ülemineku määr**: Kui vähesed kliendid liiguvad Starterilt Growthile, ei pruugi Growth-pakett pakkuda piisavalt lisaväärtust
- **Loobumine paketi lõikes**: Kui aastased kliendid loobuvad vähem, rõhuta aastast hinnastust tugevamalt
- **Konkurentide hinnastus**: Kui palju alternatiivid küsivad? Kas sinu positsioneering on õige?

## FitSite’i võrgustik seni {#the-fitsite-network-so-far}

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

## Mida selles õppetunnis ehitasime {#what-we-built-this-lesson}

- **Aastane hinnastamine** 20% allahindlusega, et soodustada pühendumist
- **Seadistustasud** kõrgematel pakettidel, et katta kasutuselevõtu töö
- **Prooviperiood** algtaseme paketil, et vähendada registreerumise hõõrdumist
- **Strateegilised sooduskoodid** käivituse, soovituste ja kampaaniate jaoks
- **Maksukonfiguratsioon** nõuetele vastavaks arveldamiseks
- **Hinnastuse ülevaatamise raamistik** pidevaks optimeerimiseks

---

**Järgmine:** [Õppetund 10: Käivitamispäev](lesson-10-launch) -- käivituseelne kontrollnimekiri ja avalikustamine.
