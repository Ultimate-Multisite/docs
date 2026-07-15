---
title: Kulipwa
sidebar_position: 15
_i18n_hash: 7808f514b91797f7ffb68811b12c48be
---
# Kulipwa (v2)

_**DONDOO MUHIMU: Makala hii inahusu Ultimate Multisite toleo 2.x.**_

Ultimate Multisite ina mfumo wa uanachama na utozaji uliojengwa ndani. Ili mfumo wetu wa utozaji ufanye kazi, tumeunganisha malango ya malipo yanayotumika zaidi katika biashara mtandaoni. Malango chaguomsingi ya malipo katika Ultimate Multisite ni _Stripe_ , _PayPal_ , na Malipo ya Mwongozo. Pia unaweza kutumia _WooCommerce_ , _GoCardless_ na _Payfast_ kupokea malipo kwa kusakinisha viendelezi vyake husika.

## Mipangilio ya Msingi {#basic-settings}

Unaweza kusanidi mojawapo ya malango haya ya malipo chini ya mipangilio ya malipo ya Ultimate Multisite. Unaweza kuipata kwa kwenda kwenye **menyu ya Ultimate Multisite > Mipangilio > Malipo.**

![Ukurasa wa mipangilio ya Malipo katika Ultimate Multisite unaoonyesha paneli ya Malipo](/img/config/payments-settings-page.png)

Kabla hujasanidi lango lako la malipo, tafadhali angalia mipangilio ya msingi ya malipo unayoweza kusanidi:

**Lazimisha kusasisha kiotomatiki** **:** Hii itahakikisha kwamba malipo yatajirejea kiotomatiki mwishoni mwa kila mzunguko wa utozaji kulingana na marudio ya utozaji ambayo mtumiaji alichagua.

<!-- Screenshot unavailable: Force Auto-Renew toggle setting on the Payments settings page -->

Ultimate Multisite v2.13.0 hukagua kama lango linalotumika lina kitambulisho cha kusasisha kinachoweza kutumika tena kabla ya kuhifadhi uanachama unaojirudia ukiwa na usasishaji wa kiotomatiki umewezeshwa. Kitambulisho cha kusasisha kinaweza kuwa usajili wa lango, makubaliano ya utozaji, vault token iliyohifadhiwa, au mbinu sawa ya malipo inayoweza kutumika tena. Ikiwa lango litaripoti kwamba hakuna kitambulisho kinachoweza kutumika kilichopo, Ultimate Multisite huhifadhi uanachama lakini huzima usasishaji wa kiotomatiki na kurekodi hali ya kukosekana kwa kitambulisho ili msimamizi au mtiririko wa usaidizi uweze kumwomba mteja aidhinishe tena malipo kabla ya tarehe ya kusasisha.

Hii huzuia uanachama kuonekana kana kwamba unasasishwa kiotomatiki wakati lango linaweza kukusanya malipo ya mara moja pekee. Viendelezi vya lango vinapaswa kuthibitisha kwamba malipo ya usajili yanayojirudia huhifadhi kitambulisho kinachoweza kutumika tena, hasa wakati lango linaunga mkono aina zote mbili za malipo: ukusanyaji wa mara moja na malipo ya vault/usajili.

**Ruhusu majaribio bila njia ya malipo** **:** Chaguo hili likiwezeshwa, mteja wako hatalazimika kuongeza taarifa yoyote ya kifedha wakati wa mchakato wa usajili. Hii itahitajika tu baada ya kipindi cha majaribio kuisha.

<!-- Screenshot unavailable: Allow Trials Without Payment Method toggle on the Payments settings page -->

**Tuma ankara baada ya uthibitisho wa malipo:** Hii hukupa chaguo la kutuma au kutotuma ankara baada ya malipo. Kumbuka kwamba watumiaji wataweza kufikia historia yao ya malipo chini ya dashboard ya subsite yao. Chaguo hili halitumiki kwa Lango la Mwongozo.

<!-- Screenshot unavailable: Send Invoice on Payment Confirmation toggle on the Payments settings page -->

**Mpangilio wa nambari za ankara:** Hapa, unaweza kuchagua ama msimbo wa marejeleo ya malipo au mpangilio wa nambari mfululizo. Ukichagua kutumia msimbo wa marejeleo ya malipo kwa ankara zako, huhitaji kusanidi chochote. Ukichagua kutumia mpangilio wa nambari mfululizo, utahitaji kusanidi **nambari inayofuata ya ankara** (Nambari hii itatumika kama nambari ya ankara kwa ankara inayofuata itakayozalishwa kwenye mfumo. Huongezwa kwa moja kila wakati ankara mpya inapoundwa. Unaweza kuibadilisha na kuihifadhi ili kuweka upya nambari mfululizo ya ankara hadi thamani mahususi) na **kiambishi awali cha nambari ya ankara.**

<!-- Screenshot unavailable: Invoice numbering scheme dropdown with Payment Reference Code and Sequential Number options -->

<!-- Screenshot unavailable: Next invoice number and invoice number prefix fields shown when Sequential Number is selected -->

## Mahali pa kupata malango: {#where-to-find-the-gateways}

Unaweza kusanidi malango ya malipo kwenye ukurasa huo huo ( **Ultimate Multisite > Mipangilio > Malipo**). Chini moja kwa moja ya **malango ya malipo yanayotumika** , utaweza kuona: _Stripe_ , _Stripe_ _Checkout_ , _PayPal_ na _Mwongozo_.

![Sehemu ya Malango ya Malipo Yanayotumika inayoorodhesha Stripe, Stripe Checkout, PayPal na Mwongozo](/img/config/payments-active-gateways.png)

Tuna makala maalum kwa kila lango la malipo itakayokuongoza kupitia hatua za kulisanidi, ambazo unaweza kuzipata kwenye viungo hapa chini.

Unaweza kuona na kuhariri maelezo ya malipo:

![Kiolesura cha kuhariri malipo](/img/admin/payment-edit.png)

Huu hapa mwonekano kamili wa ukurasa wa kuhariri malipo:

![Kiolesura kamili cha kuhariri malipo](/img/admin/payment-edit-full.png)

Pia huu hapa mwonekano kamili wa mipangilio ya malango ya malipo:

![Ukurasa kamili wa mipangilio ya malango ya malipo](/img/config/settings-payments-gateways-full.png)

**Kusanidi lango la Stripe**

**Kusanidi lango la PayPal**** **

**Kusanidi malipo ya mwongozo**

Sasa, ikiwa unataka kutumia _WooCommerce_ , _GoCardless_ au _Payfast_ kama lango lako la malipo, utahitaji **kusakinisha na kusanidi viendelezi vyake**.

### Jinsi ya kusakinisha kiendelezi cha WooCommerce: {#how-to-install-the-woocommerce-add-on}

Tunaelewa kwamba _Stripe_ na _PayPal_ hazipatikani katika baadhi ya nchi, jambo linaloweka kikomo au kuwazuia watumiaji wa Ultimate Multisite kutumia plugin yetu kwa ufanisi. Kwa hiyo tuliunda kiendelezi cha kuunganisha _WooCommerce,_ ambayo ni plugin maarufu sana ya biashara mtandaoni. Wasanidi programu kote duniani waliunda viendelezi vya kuunganisha malango tofauti ya malipo nayo. Tulitumia fursa hii kupanua malango ya malipo unayoweza kutumia na mfumo wa utozaji wa Ultimate Multisite.

_**MUHIMU:** Ultimate Multisite: Ushirikishaji wa WooCommerce unahitaji WooCommerce iwe imeamilishwa angalau kwenye site yako kuu._

Kwanza, tafadhali nenda kwenye ukurasa wa viendelezi. Unaweza kuupata kwa kwenda kwenye **Ultimate Multisite > Mipangilio**. Unapaswa kuona jedwali la **Viendelezi**. Bofya **Angalia Viendelezi vyetu**.

<!-- Screenshot unavailable: Add-ons table on the Ultimate Multisite Settings sidebar with the Check our Add-ons link -->

Baada ya kubofya **Angalia Viendelezi vyetu** , utaelekezwa kwenye ukurasa wa viendelezi. Hapa unaweza kupata viendelezi vyote vya Ultimate Multisite. Bofya kwenye kiendelezi cha **Ultimate Multisite: Ushirikishaji wa WooCommerce**.

![Ukurasa wa viendelezi unaoorodhesha viendelezi vya Ultimate Multisite ikijumuisha Ushirikishaji wa WooCommerce](/img/addons/addons-page.png)

Dirisha litatokea likiwa na maelezo ya nyongeza. Bofya tu **Sakinisha Sasa**.

<!-- Picha ya skrini haipatikani: kidirisha cha maelezo ya nyongeza ya Ultimate Multisite WooCommerce Integration chenye kitufe cha Sakinisha Sasa -->

Baada ya usakinishaji kukamilika, utaelekezwa kwenye ukurasa wa nyongeza. Hapa, bofya tu **Washa kwenye Mtandao** na nyongeza ya WooCommerce itawashwa kwenye mtandao wako.

<!-- Picha ya skrini haipatikani: ukurasa wa nyongeza wenye kiungo cha Washa kwenye Mtandao kwa nyongeza ya WooCommerce Integration -->

Baada ya kuiwasha, ikiwa bado huna nyongeza ya WooCommerce iliyosakinishwa na kuwashwa kwenye tovuti yako, utapokea kikumbusho.

<!-- Picha ya skrini haipatikani: taarifa ya msimamizi inayomkumbusha msimamizi kusakinisha na kuwasha nyongeza ya WooCommerce -->

Ili kusoma zaidi kuhusu nyongeza ya WooCommerce Integration, **bofya hapa**.

### Jinsi ya kusakinisha nyongeza ya GoCardless: {#how-to-install-the-gocardless-add-on}

Hatua za kusakinisha nyongeza ya _GoCardless_ zinafanana sana na za nyongeza ya _WooCommerce_. Tafadhali nenda kwenye ukurasa wa nyongeza na uchague nyongeza ya **Ultimate Multisite: GoCardless Gateway**.

<!-- Picha ya skrini haipatikani: ukurasa wa nyongeza ukiwa na nyongeza ya Ultimate Multisite GoCardless Gateway iliyoangaziwa -->

Dirisha la nyongeza litatokea. Bofya **Sakinisha Sasa**.

<!-- Picha ya skrini haipatikani: kidirisha cha maelezo ya nyongeza ya Ultimate Multisite GoCardless Gateway chenye kitufe cha Sakinisha Sasa -->

Baada ya usakinishaji kukamilika, utaelekezwa kwenye ukurasa wa nyongeza. Hapa, bofya tu **Washa kwenye Mtandao** na nyongeza ya _GoCardless_ itawashwa kwenye mtandao wako.

<!-- Picha ya skrini haipatikani: ukurasa wa nyongeza wenye kiungo cha Washa kwenye Mtandao kwa nyongeza ya GoCardless Gateway -->

Ili kujifunza jinsi ya kuanza kutumia lango la _GoCardless_, **soma makala hii**.

### Jinsi ya kusakinisha nyongeza ya Payfast: {#how-to-install-the-payfast-add-on}

Nenda kwenye ukurasa wa nyongeza na uchague nyongeza ya **Ultimate Multisite: Payfast Gateway**.

<!-- Picha ya skrini haipatikani: ukurasa wa nyongeza ukiwa na nyongeza ya Ultimate Multisite Payfast Gateway iliyoangaziwa -->

Dirisha la nyongeza litatokea. Bofya **Sakinisha Sasa.**

<!-- Picha ya skrini haipatikani: kidirisha cha maelezo ya nyongeza ya Ultimate Multisite Payfast Gateway chenye kitufe cha Sakinisha Sasa -->

Baada ya usakinishaji kukamilika, utaelekezwa kwenye ukurasa wa nyongeza. Hapa, bofya tu **Washa kwenye Mtandao** na nyongeza ya _Payfast_ itawashwa kwenye mtandao wako.

<!-- Picha ya skrini haipatikani: ukurasa wa nyongeza wenye kiungo cha Washa kwenye Mtandao kwa nyongeza ya Payfast Gateway -->
