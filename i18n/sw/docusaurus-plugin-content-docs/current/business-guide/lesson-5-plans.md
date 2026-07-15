---
title: 'Somada ya 5: Kubuni Mipango Yako'
sidebar_position: 6
_i18n_hash: 8c58dfd0a186bd585f43342bc4ea4f43
---
# Somo la 5: Kubuni Miradi Yako

Viwango vyako vya mipango si tu viwango vya bei—ni kioo kinachoonyesha jinsi wateja wako wa niche wanavyofanya kazi kweli. Katika somo hili, utabuni viwango vya bidhaa vinavyolingana na mahitaji halisi ya biashara za fitness katika hatua tofauti.

## Tulipoacha {#where-we-left-off}

FitSite ina muundo wa aina tatu tayari (Studio Essential, Gym Pro, Fitness Chain). Sasa tutaunda mipango ambayo itabainisha kile wanachopata wateja na kile wanacholipia.

## Kuifikiria kwa Vikundi vya Wateja {#thinking-in-customer-segments}

Kosa kubwa ambalo watu wengi hufanya ni kubuni mipango kulingana na vipengele vya kiufundi (hifadhi, upana wa pita, idadi ya kurasa). Wateja wako wa niche hawafikiri kwa maneno hayo. Mmiliki wa gym anafikiria kile anachohitaji ili kuendesha biashara yake.

Kwa studio za fitness, kuna vikundi vitatu vya asili:

| Kundi | Nani Wao | Wanahitaji Nini |
|---------|-------------|----------------|
| **Wanafundisha binafsi / studio ndogo** | Wafanyakazi 1-3, eneo moja, wanapoanza | Tovuti ya kitaalamu, taarifa za darasa, fomu ya mawasiliano |
| **Gym zilizojengwa** | Wafanyakazi 5-20, eneo moja, zinakua | Kila kitu hapo juu pamoja na kuweka miadi, blogu, vikumbusho, na eneo la kipekee (custom domain) |
| **Mitandao ya fitness** | Maeneo mengi, chapa iliyoanzishwa | Kila kitu hapo juu pamoja na multi-site, kurasa za maeneo, na orodha ya wafanyakazi |

Mipango yako inapaswa kuambatana na vikundi hivi, sio vifurushi vya vipengele ambavyo havina maana.

## Kuunda Mipango ya FitSite {#creating-the-fitsite-plans}

Nenda kwenye **Ultimate Multisite > Products > Add Product** kwa kila mpango.

### Mpango 1: FitSite Starter -- $49/mwezi {#plan-1-fitsite-starter----49month}

**Lengo**: Wanafundisha binafsi na studio ndogo

**Tab ya Maelezo (Description tab)**:
- Jina: FitSite Starter
- Maelezo: "Kila kitu mtaalamu wa kufundisha binafsi au studio ndogo anachohitaji kuonekana kitaalamu mtandaoni."

**Tab ya Jumla (General tab)**:
- Aina ya bidhaa: Mpango (Plan)
- Jukumu la mteja: Msimamizi (Administrator)

**Tab ya Muundo wa Tovuti (Site Templates tab)**:
- Ruhusu muundo wa tovuti: Imewashwa (Enabled)
- Muundo uliopo: Studio Essential tu

**Vikwazo (Limitations)**:
- Tovuti: 1
- Nafasi ya disk: 1 GB
- Custom domain: Imefungwa (Disabled) (inatumia `studioname.fitsite.com`)

**Tab ya Plugins**:
- Plugin ya fomu ya mawasiliano: Force Activate
- Plugin ya SEO: Force Activate
- Plugin ya kuweka miadi: Haiyapatikani (upgrade incentive)

**Tab ya Mandhari (Themes tab)**:
- Mandhari yako yaliyochaguliwa: Force Activate
- Mandhari zingine zote: Zimefichwa (Hidden)

### Mpango 2: FitSite Growth -- $99/mwezi {#plan-2-fitsite-growth----99month}

**Lengo**: Gym zilizojengwa katika eneo moja

**Tab ya Maelezo (Description tab)**:
- Jina: FitSite Growth
- Maelezo: "Kwa gym zilizojengwa ambazo ziko tayari kukua uwepo wao mtandaoni na kuvutia wanachama wapya."

**Tab ya Muundo wa Tovuti (Site Templates tab)**:
- Muundo uliopo: Studio Essential na Gym Pro

**Vikwazo (Limitations)**:
- Tovuti: 1
- Nafasi ya disk: 5 GB
- Custom domain: Imewashwa (Enabled)

**Tab ya Plugins**:
- Kila kitu kilichopo kwenye Starter, pamoja na:
- Plugin ya kuweka miadi: Force Activate
- Plugin ya vikumbusho: Force Activate
- Uwezo wa blogu: Uliopo (Available)

**Tab ya Kupanda na Kushuka (Up & Downgrades tab)**:
- Kikundi cha mpango: FitSite Plans
- Mpangilio wa bidhaa: 2

### Mpango 3: FitSite Pro -- $199/mwezi {#plan-3-fitsite-pro----199month}

**Lengo**: Mitandao ya fitness yenye maeneo mengi

**Tab ya Maelezo (Description tab)**:
- Jina: FitSite Pro
- Maelezo: "Jukwaa kamili kwa chapa za fitness zenye maeneo mengi."

**Tab ya Muundo wa Tovuti (Site Templates tab)**:
- Muundo uliopo: Muundo wote mitatu

**Vikwazo (Limitations)**:
- Tovuti: 5 (moja kwa kila eneo)
- Nafasi ya disk: 20 GB
- Custom domain: Imewashwa (Enabled)

**Tab ya Plugins**:
- Kila kitu kilichopo kwenye Growth, pamoja na:
- Plugins zote za premium: Force Activate

**Tab ya Kupanda na Kushuka (Up & Downgrades tab)**:
- Kikundi cha mpango: FitSite Plans
- Mpangilio wa bidhaa: 3

## Kuweka Kikundi cha Mpango {#setting-up-the-plan-group}

Kikundi cha mpango kinahakikisha kwamba wateja wanaweza kuboresha au kupunguza kiwango chao ndani ya familia ya mipango ya FitSite tu. Kwenye **Tab ya Kupanda na Kushuka** ya kila mpango:

1. Weka **Kikundi cha Mpango (Plan Group)** kuwa "FitSite Plans" kwa mipango yote mitatu
2. Weka **Mpangilio wa Bidhaa (Product Order)** kuwa 1 (Starter), 2 (Growth), 3 (Pro)

Hii inaunda njia ya kuboresha ambayo ni wazi: Starter → Growth → Pro.

## Kuongeza Zilizoongezwa Wakati wa Malipo (Order Bumps) {#adding-order-bumps}

Order bumps ni bidhaa za ziada zinazotolewa wakati wa malipo. Kwa FitSite, zingatia:

- **Extra Storage Pack** ($19/mwezi) -- nafasi ya disk ya ziada ya GB 5
- **Priority Support** ($29/mwezi) -- muda wa kujibu wa haraka zaidi
- **Additional Site** ($39/mwezi) -- kwa wateja wanaohitaji maeneo zaidi kuliko yanavyoruhusiwa na mpango wao

Unda hizi kama bidhaa za aina ya **Package** katika Ultimate Multisite na uzihusishie na mipango inayohitajika.

## Kwa Nini Muundo Huu Unafanya Kazi {#why-this-structure-works}

- **Starter** huondoa vikwazo vya kuingia -- bei ndogo, ofa rahisi, inawapa mafunishi mtandaoni haraka
- **Growth** inaongeza vipengele ambavyo gym zinavoomba kweli -- kuweka miadi, vikumbusho, na custom domains
- **Pro** hudumisha kundi lenye thamani kubwa ambalo linahitaji usaidizi wa maeneo mengi
- **Order bumps** inaruhusu wateja kubadilisha bila kuogopa kuifanya mipango mikuu kuwa ngumu
- **Njia wazi ya kuboresha** inamaanisha kwamba wateja wanakua na wewe badala ya kuondoka

## Mtandao wa FitSite Hadi Sasa {#the-fitsite-network-so-far}

```
FitSite Network
├── WordPress Multisite (subdomain mode)
├── Ultimate Multisite (configured)
├── Hosting with wildcard SSL + domain mapping
├── Site Templates (Studio Essential, Gym Pro, Fitness Chain)
├── Products
│   ├── FitSite Starter ($49/mo) → Studio Essential template
│   ├── FitSite Growth ($99/mo) → Studio Essential + Gym Pro templates
│   ├── FitSite Pro ($199/mo) → All templates
│   └── Order Bumps (Extra Storage, Priority Support, Additional Site)
└── Ready for checkout configuration (next lesson)
```

## Tulichojenga Somo Hili {#what-we-built-this-lesson}

- **Viwango vitatu vya mipango** vilivyolingana na vikundi halisi vya biashara za fitness
- **Kudhibiti vipengele (Feature gating)** kwa kutumia udhibiti wa plugin na muundo wa Ultimate Multisite
- **Kikundi cha mpango** chenye njia wazi ya kuboresha
- **Bidhaa za order bump** kwa mapato ya ziada
- **Muundo wa bei** unaotegemea thamani ya mteja, sio vipimo vya kiufundi

---

**Inayofuata:** [Somo la 6: Uzoefu wa Usajili](lesson-6-checkout) -- tutajenga mtiririko wa malipo ambao unabadilisha wamiliki wa studio za fitness kuwa wateja wanaolipa.
