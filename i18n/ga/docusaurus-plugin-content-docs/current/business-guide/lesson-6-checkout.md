---
title: 'Ceacht 6: An tEispéireas Clárúcháin'
sidebar_position: 7
_i18n_hash: a5c16cdd9b4e53a69e138df7bb042411
---
# Ceacht 6: An Taithí Chlárúcháin {#lesson-6-the-signup-experience}

Is é an sreabhadh checkout an áit a n-iompaíonn spéis ina hioncam. Cailleann próiseas clárúcháin mearbhallach nó cineálach custaiméirí. Tiontaíonn sreabhadh atá sonrach don nideoig, a labhraíonn a dteanga agus a bhraitheann gan dua, iad.

## An Áit ar Fhágamar É {#where-we-left-off}

Tá teimpléid agus pleananna cumraithe ag FitSite. Anois tógfaimid an taithí chlárúcháin agus checkout a iompaíonn úinéirí stiúideonna aclaíochta ina gcustaiméirí íoctha.

## An Sreabhadh Clárúcháin a Thuiscint {#understanding-the-registration-flow}

Is foirmeacha ilchéime go hiomlán inoiriúnaithe iad foirmeacha checkout Ultimate Multisite. Do FitSite, teastaíonn sreabhadh uainn a:

1. Bhraitheann amhail is gur tógadh é do ghnólachtaí aclaíochta
2. Bhailíonn ach an méid atá riachtanach
3. Thugann an custaiméir chuig suíomh oibre chomh tapa agus is féidir

Féach [An Sreabhadh Clárúcháin](/user-guide/configuration/the-registration-flow) don tagairt theicniúil iomlán.

## Checkout FitSite a Dhearadh {#designing-the-fitsite-checkout}

Téigh chuig **Ultimate Multisite > Foirmeacha Checkout** agus cruthaigh foirm nua.

### Céim 1: Roghnú Plean {#step-1-plan-selection}

Ba chóir gurb iad na pleananna an chéad rud a fheiceann úinéir stiúideo aclaíochta, agus iad curtha i láthair i dtéarmaí a thuigeann siad.

- Cuir réimse **Tábla Praghsála** leis
- Cumraigh é chun na trí phlean FitSite go léir a thaispeáint
- Tá na cur síosanna plean a scríobh tú i gCeacht 5 le feiceáil anseo -- cinntigh go labhraíonn siad le riachtanais ghnólachtaí aclaíochta, ní le gnéithe teicniúla

:::tip Tá Tábhacht le Teanga an Nideoige
Ní chiallaíonn "stóráil 1 GB" tada d’úinéir giomnáisiam. Ciallaíonn "Gach rud atá uait do shuíomh gréasáin gairmiúil stiúideo" gach rud. Scríobh cur síosanna plean i dteanga do chustaiméara.
:::

### Céim 2: Roghnú Teimpléid {#step-2-template-selection}

Tar éis dóibh plean a roghnú, roghnaíonn an custaiméir a dteimpléad tosaigh.

- Cuir réimse **Roghnú Teimpléid** leis
- Scagtar na teimpléid atá ar fáil de réir an phlean a roghnaigh siad (cumraithe i gCeacht 5)
- Ba chóir íomhá réamhamhairc a bheith ag gach teimpléad a thaispeánann dearadh atá sonrach don aclaíocht

### Céim 3: Cruthú Account {#step-3-account-creation}

Coinnigh é seo íosta. Bailigh amháin:

- Seoladh ríomhphoist
- Pasfhocal
- Ainm stiúideo/gnó (éiríonn sé seo ina ainm suímh)

Ná hiarr eolas nach bhfuil de dhíth ort ag an gclárú. Laghdaíonn gach réimse breise tiontuithe.

### Céim 4: Socrú Suímh {#step-4-site-setup}

- **Teideal suímh**: Réamhlíon ón ainm stiúideo a cuireadh isteach i gCéim 3
- **URL an tsuímh**: Gin go huathoibríoch ón ainm stiúideo (m.sh., `ironworks.fitsite.com`)

### Céim 5: Íocaíocht {#step-5-payment}

- Cuir an réimse **Íocaíocht** leis
- Cumraigh do gheata íocaíochta (moltar [Stripe](/user-guide/payment-gateways/stripe) do bhilleáil síntiúis)
- Má chruthaigh tú breiseáin ordaithe i gCeacht 5, cuir réimse **Breiseán Ordaithe** leis roimh chéim na híocaíochta

### Céim 6: Deimhniú {#step-6-confirmation}

- Saincheap an teachtaireacht deimhnithe le teanga atá sonrach don aclaíocht
- Sampla: "Tá suíomh gréasáin do stiúideo aclaíochta á chruthú. Atreorófar thú chuig do shuíomh nua i gceann cúpla soicind."

## Lasc Roghnaithe Tréimhse a Chur Leis {#adding-a-period-selection-toggle}

Má shocraigh tú éagsúlachtaí praghais i do phleananna (míosúil vs. bliantúil), cuir réimse **Roghnú Tréimhse** leis an bhfoirm checkout ionas gur féidir le custaiméirí aistriú idir tréimhsí billeála. Féach [Foirmeacha Checkout](/user-guide/configuration/checkout-forms#adding-a-period-selection-toggle) le haghaidh treoracha.

## Íocaíocht a Chumrú {#configuring-payment}

Mura bhfuil geata íocaíochta socraithe agat cheana:

1. Téigh chuig **Ultimate Multisite > Socruithe > Geataí Íocaíochta**
2. Lean an [treoir socraithe Stripe](/user-guide/payment-gateways/stripe) nó an geata is fearr leat
3. Tástáil sreabhadh checkout iomlán le híocaíocht tástála

Féach [Íocaíocht a Fháil](/user-guide/payment-gateways/getting-paid) le haghaidh sonraí faoin gcaoi a sreabhann íocaíochtaí chuig do chuntas.

## An Sreabhadh a Thástáil {#testing-the-flow}

Sula mbogann tú ar aghaidh, déan clárú tástála iomlán:

1. Oscail an fhoirm checkout i bhfuinneog bhrabhsálaí incognito/príobháideach
2. Roghnaigh plean
3. Roghnaigh teimpléad
4. Cruthaigh account
5. Críochnaigh íocaíocht (úsáid mód tástála)
6. Deimhnigh go gcruthaítear an suíomh leis an teimpléad ceart

Seiceáil go bhfuil:

- [ ] Cur síosanna plean soiléir agus sonrach don nideoig
- [ ] Réamhamhairc teimpléid ag taispeáint dearaí oiriúnacha don aclaíocht
- [ ] URL an tsuímh á ghiniúint i gceart ón ainm stiúideo
- [ ] Próiseáil na híocaíochta rathúil
- [ ] An custaiméir ag teacht i dtír ar shuíomh oibre leis an teimpléad roghnaithe
- [ ] Ríomhphoist deimhnithe ag úsáid teanga atá sonrach don aclaíocht

## Líonra FitSite Go dtí Seo {#the-fitsite-network-so-far}

```
FitSite Network
├── WordPress Multisite (subdomain mode)
├── Ultimate Multisite (configured)
├── Hosting with wildcard SSL + domain mapping
├── Site Templates (Studio Essential, Gym Pro, Fitness Chain)
├── Products (Starter, Growth, Pro + Order Bumps)
├── Checkout Flow
│   ├── Plan selection with niche-specific descriptions
│   ├── Template selection with fitness previews
│   ├── Minimal account creation
│   ├── Payment via Stripe
│   └── Fitness-specific confirmation
└── Ready for branding (next lesson)
```

## An Rud a Thógamar sa Cheacht Seo {#what-we-built-this-lesson}

- **Foirm checkout ilchéime** saincheaptha d’úinéirí stiúideonna aclaíochta
- **Teanga atá sonrach don nideoig** ar fud an tsreafa chlárúcháin
- **Frithchuimilt íosta** -- réimsí riachtanacha amháin, cosán tapa chuig suíomh oibre
- **Comhtháthú íocaíochta** le fíorú tástála
- **Sreabhadh tástáilte ó cheann ceann** ó roghnú plean go suíomh oibre

---

**Ar Aghaidh:** [Ceacht 7: É a Dhéanamh Duit Féin](lesson-7-branding) -- déanfaimid bánlipéadú ar an ardán agus bunóimid FitSite mar bhranda.
