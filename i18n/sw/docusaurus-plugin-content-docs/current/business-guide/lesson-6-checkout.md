---
title: 'Somo la 6: Uzoefu wa Kusajili'
sidebar_position: 7
_i18n_hash: a5c16cdd9b4e53a69e138df7bb042411
---
# Somo la 6: Uzoefu wa Kujiandikisha {#lesson-6-the-signup-experience}

Mchakato wa malipo ndio mahali ambapo nia inabadilika kuwa mapato. Mchakato wa kujiandikisha ambao ni wenye kuchanganya au ni wa jumla unamwacha mteja. Mchakato maalum unaozungumza lugha yao na unaohisi rahisi sana ndio unawabadilisha kuwa wateja.

## Popo Tulipoacha {#where-we-left-off}

FitSite ina templates na mipango iliyowekwa. Sasa tunajenga uzoefu wa kujiandikisha na malipo ambao unawabadilisha wamiliki wa studio za mazoezi kuwa wateja wanaolipa.

## Kuelewa Mchakato wa Kujiandikisha {#understanding-the-registration-flow}

Form za malipo za Ultimate Multisite ni aina ya fomu za hatua nyingi ambazo zinaweza kubadilishwa kabisa. Kwa FitSite, tunataka mchakato ambao:

1. Unahisi kama umejengwa kwa ajili ya biashara za mazoezi
2. Unakusanya tu kile kinachohitajika
3. Anampeleka mteja kwenye tovuti inayofanya kazi haraka iwezekanavyo

Tazama [The Registration Flow](/user-guide/configuration/the-registration-flow) kwa rejea kamili ya kiufundi.

## Kubuni Malipo ya FitSite {#designing-the-fitsite-checkout}

Nenda kwenye **Ultimate Multisite > Checkout Forms** na unda fomu mpya.

### Hatua ya 1: Kuchagua Mpango (Plan Selection) {#step-1-plan-selection}

Jambo la kwanza ambalo mmiliki wa studio ya mazoezi anapaswa kuona ni mipango, iliyowasilishwa kwa maneno anayoelewa.

- Ongeza sehemu ya **Pricing Table**
- Iweke mipangilio kuonyesha mipango yote mitatu ya FitSite
- Maelezo ya mipango uliyoiandika katika Somo la 5 yanaonekana hapa — hakikisha yanazungumza mahitaji ya biashara za mazoezi, sio vipengele vya kiufundi

:::tip Lugha Maalum ni Muhimu
"Hifadhi ya GB 1" haimaanishi chochote kwa mmiliki wa gym. "Kila unayohitaji kwa tovuti ya studio ya kitaalamu" inamaanisha kila kitu. Andika maelezo ya mipango kwa lugha ya mteja wako.
:::

### Hatua ya 2: Kuchagua Template {#step-2-template-selection}

Baada ya kuchagua mpango, mteja anachagua template yake ya kuanzia.

- Ongeza sehemu ya **Template Selection**
- Templates zinazopatikana zimepitishwa kulingana na mpango ambao wamechagua (iliyowekwa katika Somo la 5)
- Kila template inapaswa kuwa na picha ya muonyeshaji (preview image) inayoonyesha muundo maalum kwa mazoezi

### Hatua ya 3: Kuunda Akaunti {#step-3-account-creation}

Weka hili kuwa dogo. Kukusanya tu:

- Anwani ya barua pepe (Email address)
- Neno la siri (Password)
- Jina la studio/biashara (Hili linakuwa jina la tovuti yao)

Uswaulize habari unazohitaji katika kujiandikisha. Kila sehemu ya ziada inapunguza idadi ya wateja wanaokamilisha usajili.

### Hatua ya 4: Kuweka Tovuti (Site Setup) {#step-4-site-setup}

- **Site title**: Jaza kiotomatiki kutoka kwa jina la studio lililoingizwa katika Hatua ya 3
- **Site URL**: Jitengenezwe kiotomatiki kutoka kwa jina la studio (mfano, `ironworks.fitsite.com`)

### Hatua ya 5: Malipo (Payment) {#step-5-payment}

- Ongeza sehemu ya **Payment**
- Weka mipangilio yako ya malipo (Stripe [Stripe](/user-guide/payment-gateways/stripe) inashauriwa kwa bili za usajili)
- Ikiwa uliunda *order bumps* katika Somo la 5, ongeza sehemu ya **Order Bump** kabla ya hatua ya malipo

### Hatua ya 6: Thibitisho (Confirmation) {#step-6-confirmation}

- Badilisha ujumbe wa uthibitisho kwa lugha maalum kwa mazoezi
- Mfano: "Tovuti yako ya studio ya mazoezi inaundwa. Utarudi kwenye tovuti yako mpya baada ya sekunde chache."

## Kuongeza Kichocheo cha Kuchagua Kipindi (Period Selection Toggle) {#adding-a-period-selection-toggle}

Ikiwa umeandaa tofauti za bei katika mipango yako (kwa kila mwezi dhidi ya kila mwaka), ongeza sehemu ya **Period Selection** kwenye fomu ya malipo ili wateja waweze kubadilisha kati ya vipindi vya malipo. Tazama [Checkout Forms](/user-guide/configuration/checkout-forms#adding-a-period-selection-toggle) kwa maelekezo.

## Kuweka Mipangilio ya Malipo {#configuring-payment}

Ikiwa bado hujawaweka mipangilio ya malipo:

1. Nenda kwenye **Ultimate Multisite > Settings > Payment Gateways**
2. Fuata mwongozo wa [Stripe setup](/user-guide/payment-gateways/stripe) au njia yako unayopendelea
3. Jaribu mchakato kamili wa malipo kwa kutumia malipo ya majaribio

Tazama [Getting Paid](/user-guide/payment-gateways/getting-paid) kwa maelezo ya jinsi malipo yanavyofika kwenye akaunti yako.

## Kujaribu Mchakato (Testing the Flow) {#testing-the-flow}

Kabla ya kuendelea, kamilisha usajili kamili wa majaribio:

1. Fungua fomu ya malipo kwenye dirisha la kivinjari cha incognito/private
2. Chagua mpango
3. Chagua template
4. Unda akaunti
5. Kamilisha malipo (tumia hali ya majaribio)
6. Thibitisha kuwa tovuti imaundwa na template sahihi

Thibitisha kwamba:

- [ ] Maelezo ya mipango ni wazi na maalum kwa sekta
- [ ] Muonyeshaji wa templates unaonyesha miundo inayofaa kwa mazoezi
- [ ] Site URL inatengenezwa kwa usahihi kutoka kwa jina la studio
- [ ] Malipo yanapitia kwa mafanikio
- [ ] Mteja anafika kwenye tovuti inayofanya kazi na template iliyochaguliwa
- [ ] Barua pepe za uthibitisho zinatumia lugha maalum kwa mazoezi

## Mtandao wa FitSite Hadi Sasa {#the-fitsite-network-so-far}

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

## Tulichojenga Somo Hili {#what-we-built-this-lesson}

- **Fomu ya malipo ya hatua nyingi** iliyobadilishwa kwa wamiliki wa studio za mazoezi
- **Lugha maalum kwa sekta** kote mchakato wa kujiandikisha
- **Ugumu mdogo** -- tu sehemu muhimu, njia ya haraka kwenda kwenye tovuti inayofanya kazi
- **Uunganishaji wa malipo** na uthibitisho wa majaribio
- **Mchakato uliothibitishwa kutoka mwanzoni hadi mwisho** kuanzia kuchagua mpango hadi tovuti inayofanya kazi

---

**Inayofuata:** [Lesson 7: Making It Yours](lesson-7-branding) -- tutaifanya platform iwe yetu (white-label) na kuweka FitSite kama chapa.
