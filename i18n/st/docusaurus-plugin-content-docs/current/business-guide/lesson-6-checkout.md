---
title: 'Thuto ea 6: Boiphihlelo ba ho Ingolisa'
sidebar_position: 7
_i18n_hash: a5c16cdd9b4e53a69e138df7bb042411
---
# Thuto ya 6: Boiphihlelo ba ho Ingodisa

Phallo ya ho phetha theko ke moo thahasello e fetohang lekeno. Tshebetso ya ho ingodisa e ferekanyang kapa e akaretsang e lahlehelwa ke bareki. Phallo e ikgethileng bakeng sa niche e buang puo ya bona mme e utlwahala e le bonolo e ba fetola bareki.

## Moo re Ileng ra Emisa Teng {#where-we-left-off}

FitSite e na le ditempleite le meralo e hlophisitsweng. Jwale re haha boiphihlelo ba ngodiso le ho phetha theko bo fetolang beng ba di-studio tsa boikoetliso hore e be bareki ba lefang.

## Ho Utlwisisa Phallo ya Ngodiso {#understanding-the-registration-flow}

Diforomo tsa ho phetha theko tsa Ultimate Multisite ke diforomo tsa mehato e mengata tse ka fetolwang ka botlalo. Bakeng sa FitSite, re batla phallo e:

1. Utlwahalang eka e hahilwe bakeng sa dikgwebo tsa boikoetliso
2. Bokellang feela se hlokahalang
3. Isang moreki sebakeng sa marang-rang se sebetsang kapele kamoo ho ka kgonehang

Sheba [Phallo ya Ngodiso](/user-guide/configuration/the-registration-flow) bakeng sa tshupiso e felletseng ya botekgeniki.

## Ho Rala Ho Phetha Theko ha FitSite {#designing-the-fitsite-checkout}

Eya ho **Ultimate Multisite > Diforomo tsa ho Phetha Theko** mme o etse foromo e ntjha.

### Mohato wa 1: Kgetho ya Moralo {#step-1-plan-selection}

Ntho ya pele eo monga studio sa boikoetliso a lokelang ho e bona e lokela ho ba meralo, e hlahisitsweng ka mantswe ao ba a utlwisang.

- Kenya karolo ya **Tafole ya Ditheko**
- E hlophise hore e bontshe meralo yohle e meraro ya FitSite
- Ditlhaloso tsa moralo tseo o di ngotseng Thutong ya 5 di hlaha mona -- etsa bonnete ba hore di bua ka ditlhoko tsa kgwebo ya boikoetliso, eseng dikarolo tsa botekgeniki

:::tip Puo ya Niche e Bohlokwa
"1 GB storage" ha e bolele letho ho monga gym. "Tsohle tseo o di hlokang bakeng sa sebaka sa marang-rang sa studio se profeshenale" e bolela tsohle. Ngola ditlhaloso tsa moralo ka puo ya moreki wa hao.
:::

### Mohato wa 2: Kgetho ya Template {#step-2-template-selection}

Kamora ho kgetha moralo, moreki o kgetha template eo a qalang ka yona.

- Kenya karolo ya **Kgetho ya Template**
- Ditempleite tse fumanehang di sefilwe ho ya ka moralo oo ba o kgethileng (o hlophisitsweng Thutong ya 5)
- Template ka nngwe e lokela ho ba le setshwantsho sa ponelopele se bontshang moralo o ikgethileng wa boikoetliso

### Mohato wa 3: Ho Etsa Account {#step-3-account-creation}

Boloka sena se le senyenyane. Bokella feela:

- Aterese ya imeile
- Password
- Lebitso la studio/kgwebo (sena se fetoha lebitso la sebaka sa bona sa marang-rang)

O se ke wa botsa tlhahisoleseding eo o sa e hlokeng nakong ya ho ingodisa. Karolo e nngwe le e nngwe e eketsehileng e fokotsa diphetoho.

### Mohato wa 4: Tlhophiso ya Sebaka sa Marang-rang {#step-4-site-setup}

- **Sehlooho sa sebaka sa marang-rang**: Tlatsa esale pele ho tswa lebitsong la studio le kentsweng Mohatong wa 3
- **URL ya sebaka sa marang-rang**: Iketsetse yona ho tswa lebitsong la studio (mohlala, `ironworks.fitsite.com`)

### Mohato wa 5: Tefo {#step-5-payment}

- Kenya karolo ya **Tefo**
- Hlophisa gateway ya hao ya tefo ([Stripe](/user-guide/payment-gateways/stripe) e kgothaletswa bakeng sa ditefo tsa subscription)
- Haeba o entse ditlatsetso tsa odara Thutong ya 5, kenya karolo ya **Tlatsetso ya Odara** pele ho mohato wa tefo

### Mohato wa 6: Netefatso {#step-6-confirmation}

- Iketsetse molaetsa wa netefatso ka puo e ikgethileng ya boikoetliso
- Mohlala: "Sebaka sa marang-rang sa studio sa hao sa boikoetliso se ntse se etswa. O tla fetisetswa sebakeng sa hao se setjha sa marang-rang ka metsotswana e seng mekae."

## Ho Kenya Switch ya Kgetho ya Nako {#adding-a-period-selection-toggle}

Haeba o hlophisitse diphapang tsa ditheko meralong ya hao (kgwedi le kgwedi kgahlanong le selemo le selemo), kenya karolo ya **Kgetho ya Nako** foromong ya ho phetha theko hore bareki ba kgone ho fetohela dipakeng tsa dinako tsa tefo. Sheba [Diforomo tsa ho Phetha Theko](/user-guide/configuration/checkout-forms#adding-a-period-selection-toggle) bakeng sa ditaelo.

## Ho Hlophisa Tefo {#configuring-payment}

Haeba ha o eso hlophise gateway ya tefo:

1. Eya ho **Ultimate Multisite > Ditlhophiso > Di-gateway tsa Tefo**
2. Latela [tataiso ya ho hlophisa Stripe](/user-guide/payment-gateways/stripe) kapa gateway eo o e ratang
3. Lekola phallo e felletseng ya ho phetha theko ka tefo ya teko

Sheba [Ho Lefuwa](/user-guide/payment-gateways/getting-paid) bakeng sa dintlha tsa hore na ditefo di phallela jwang Account ya hao.

## Ho Lekola Phallo {#testing-the-flow}

Pele o tswela pele, phethela teko e felletseng ya ho ingodisa:

1. Bula foromo ya ho phetha theko fensetereng ya sebatli sa incognito/private
2. Kgetha moralo
3. Kgetha template
4. Etsa Account
5. Phethela tefo (sebedisa mokgwa wa teko)
6. Netefatsa hore sebaka sa marang-rang se entswe ka template e nepahetseng

Hlahloba hore:

- [ ] Ditlhaloso tsa meralo di hlakile mme di ikgethile ho niche
- [ ] Diponelopele tsa ditempleite di bontsha meralo e loketseng boikoetliso
- [ ] URL ya sebaka sa marang-rang e hlahiswa ka nepo ho tswa lebitsong la studio
- [ ] Tefo e sebetsa ka katleho
- [ ] Moreki o fihla sebakeng sa marang-rang se sebetsang se nang le template e kgethilweng
- [ ] Diimeile tsa netefatso di sebedisa puo e ikgethileng ya boikoetliso

## Netweke ya FitSite ho fihlela Jwale {#the-fitsite-network-so-far}

```
Netweke ya FitSite
├── WordPress Multisite (mokgwa wa subdomain)
├── Ultimate Multisite (e hlophisitswe)
├── Hosting ka wildcard SSL + ho hokahanya domain
├── Ditempleite tsa Sebaka sa Marang-rang (Studio Essential, Gym Pro, Fitness Chain)
├── Dihlahiswa (Starter, Growth, Pro + Ditlatsetso tsa Odara)
├── Phallo ya ho Phetha Theko
│   ├── Kgetho ya moralo ka ditlhaloso tse ikgethileng ho niche
│   ├── Kgetho ya template ka diponelopele tsa boikoetliso
│   ├── Ho etsa Account ho fokolang
│   ├── Tefo ka Stripe
│   └── Netefatso e ikgethileng ya boikoetliso
└── E loketse branding (thuto e latelang)
```

## Seo re se Hahileng Thutong Ena {#what-we-built-this-lesson}

- **Foromo ya ho phetha theko ya mehato e mengata** e etseditsweng beng ba di-studio tsa boikoetliso
- **Puo e ikgethileng ho niche** phallong yohle ya ho ingodisa
- **Kgohlano e nyane** -- dikarolo tsa bohlokwa feela, tsela e potlakileng ho ya sebakeng sa marang-rang se sebetsang
- **Khokahanyo ya tefo** ka netefatso ya teko
- **Phallo e lekilweng ho tloha qalong ho isa qetellong** ho tloha kgethong ya moralo ho ya sebakeng sa marang-rang se sebetsang

---

**E latelang:** [Thuto ya 7: Ho e Etsa ya Hao](lesson-7-branding) -- re etsa white-label ya platform mme re theha FitSite e le brand.
