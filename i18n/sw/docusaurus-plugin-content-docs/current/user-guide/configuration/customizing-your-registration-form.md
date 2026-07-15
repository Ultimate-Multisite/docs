---
title: Kubinafsisha Fomu Yako ya Usajili
sidebar_position: 17
_i18n_hash: 3dada0e900a1f46d950e1815ae8f5085
---
# Kubinafsisha Fomu yako ya Usajili

Ili kufanya network yako ionekane ya kipekee tofauti na SaaS nyingine zote zilizojengwa kwenye WordPress platform, Ultimate Multisite hukuruhusu kubinafsisha kurasa zako za usajili na kuingia kwa kutumia kipengele chetu cha **Checkout Forms**.

Ingawa ni njia rahisi na nyumbufu ya kujaribu mbinu tofauti unapojaribu kuwabadilisha wateja wapya, hutumika zaidi kuunda fomu za usajili zilizobinafsishwa. Makala hii inalenga kukuonyesha jinsi unavyoweza kufanya hivyo.

## Kurasa za kuingia na usajili: {#login-and-registration-pages}

Baada ya usakinishaji wa Ultimate Multisite, huunda kiotomatiki kurasa maalum za kuingia na usajili kwenye site yako kuu. Unaweza kubadilisha kurasa hizi chaguomsingi wakati wowote kwa kwenda kwenye ukurasa wako wa **Ultimate Multisite > Settings > Login & Registration**.

![Ukurasa wa mipangilio ya Kuingia na Usajili](/img/config/settings-general.png)

Huu hapa mwonekano kamili wa ukurasa wa mipangilio ya kuingia na usajili:

![Ukurasa kamili wa mipangilio ya Kuingia na Usajili](/img/config/settings-login-registration-full.png)

Hebu tuangalie kila mojawapo ya chaguo unazoweza kubinafsisha kwenye ukurasa wa **Login & Registration**:

  * **Wezesha usajili:** Chaguo hili litawezesha au kuzima usajili kwenye network yako. Ikiwa limezimwa, wateja wako hawataweza kujisajili na kujiunga na products zako.

  * **Wezesha uthibitishaji wa barua pepe:** Ikiwa chaguo hili limewashwa, wateja wanaojiunga na plan ya bure au plan ya kulipia yenye kipindi cha majaribio watapokea barua pepe ya uthibitishaji na watahitaji kubofya kiungo cha uthibitishaji ili websites zao ziundwe.

  * **Ukurasa chaguomsingi wa usajili:** Huu ndio ukurasa chaguomsingi wa usajili. Ukurasa huu unahitaji kuchapishwa kwenye website yako na uwe na fomu ya usajili (pia inajulikana kama checkout form) - ambapo clients wako watajiunga na products zako. Unaweza kuunda kurasa nyingi za usajili na checkout forms kadiri unavyotaka, kumbuka tu kuweka shortcode ya checkout form kwenye ukurasa wa usajili, vinginevyo haitaonekana.

  * **Tumia ukurasa maalum wa kuingia:** Chaguo hili hukuruhusu kutumia ukurasa wa kuingia uliobinafsishwa, tofauti na ukurasa chaguomsingi wa wp-login.php. Ikiwa chaguo hili limewashwa, unaweza kuchagua ni ukurasa gani utakaotumika kwa kuingia kwenye chaguo la **Ukurasa chaguomsingi wa kuingia** (moja kwa moja hapa chini).

  * **Ficha URL asili ya kuingia (wp-login.php)** : Ikiwa unataka kuficha URL asili ya kuingia, unaweza kuwasha chaguo hili. Hii ni muhimu kuzuia mashambulizi ya brute-force. Ikiwa chaguo hili limewezeshwa, Ultimate Multisite itaonyesha kosa la 404 mtumiaji anapojaribu kufikia kiungo asili cha wp-login.php

  * **Lazimisha uchapishaji wa site kwa usawazishaji:** Baada ya mteja kujiunga na product kwenye network, site mpya inayosubiri inahitaji kubadilishwa kuwa site halisi ya network. Mchakato wa kuchapisha hufanyika kupitia Job Queue, bila kusawazishwa. Wezesha chaguo hili kulazimisha uchapishaji ufanyike katika ombi lilelile kama usajili.

Sasa, hebu tuone chaguo nyingine ambazo bado zinahusiana na mchakato wa kuingia na usajili. Ziko moja kwa moja chini ya **Other options** kwenye ukurasa uleule wa Login & registration:

  * **Jukumu chaguomsingi:** Hili ndilo jukumu ambalo wateja wako watakuwa nalo kwenye website yao baada ya mchakato wa kujisajili.

  * **Wezesha Jumper:** Huwezesha njia ya mkato ya Jumper katika eneo la admin. Jumper huruhusu wasimamizi kuruka haraka hadi skrini za Ultimate Multisite, vitu vya network, na maeneo mengine yanayoungwa mkono bila kuvinjari kila menyu. Izime ikiwa unapendelea kuficha zana hiyo ya urambazaji wa haraka kutoka kwenye interface ya admin.

  * **Ongeza watumiaji kwenye site kuu pia:** Kuwezesha chaguo hili pia kutaongeza mtumiaji kwenye site kuu ya network yako baada ya mchakato wa kujisajili. Ikiwa utawezesha chaguo hili, chaguo la kuweka **jukumu chaguomsingi** la watumiaji hawa kwenye website yako pia litaonekana moja kwa moja hapa chini.

  * **Wezesha accounts nyingi:** Ruhusu watumiaji kuwa na accounts kwenye sites tofauti za network yako kwa kutumia anwani ileile ya barua pepe. Ikiwa chaguo hili limezimwa, wateja wako hawataweza kuunda account kwenye websites nyingine zinazoendeshwa kwenye network yako kwa kutumia anwani ileile ya barua pepe.

Na hayo ndiyo chaguo zote zinazohusiana na kuingia na usajili ambazo unaweza kubinafsisha! Usisahau kuhifadhi mipangilio yako baada ya kumaliza kuihariri.

## Kutumia fomu nyingi za usajili: {#using-multiple-registration-forms}

Ultimate Multisite 2.0 hutoa kihariri cha checkout form kinachokuruhusu kuunda fomu nyingi kadiri unavyotaka, zenye fields tofauti, products zinazotolewa, n.k.

Kurasa zote mbili za kuingia na usajili zimepachikwa kwa shortcodes: **[wu_login_form]** kwenye ukurasa wa kuingia na**[wu_checkout]** kwa ukurasa wa usajili. Unaweza kubinafsisha zaidi ukurasa wa usajili kwa kujenga au kuunda checkout forms.

Ili kufikia kipengele hiki, nenda kwenye menyu ya **Checkout Forms**, kwenye sidebar ya kushoto.

![Menyu ya Checkout Forms kwenye sidebar](/img/config/checkout-forms-list.png)

Kwenye ukurasa huu, unaweza kuona checkout forms zote ulizonazo.

Ikiwa unataka kuunda mpya, bonyeza tu **Add Checkout Form** juu ya ukurasa.

Unaweza kuchagua mojawapo ya chaguo hizi tatu kama mahali pa kuanzia: hatua moja, hatua nyingi au tupu. Kisha, bofya **Go to the Editor**.

![Ongeza Checkout Form yenye chaguo za hatua moja, hatua nyingi, au tupu](/img/config/checkout-forms-list.png)

Vinginevyo, unaweza kuhariri au kunakili fomu ulizonazo tayari kwa kubofya chaguo zilizo chini ya jina lake. Hapo, pia utapata chaguo za kunakili shortcode ya fomu au kufuta fomu.

![Vitendo vya kuelea juu ya checkout form vyenye hariri, nakili, na futa](/img/config/checkout-form-hover-actions.png)

Ukichagua hatua moja au hatua nyingi, checkout form itakuwa tayari imejazwa awali na hatua za msingi ili ifanye kazi. Kisha, ukitaka, unaweza kuongeza hatua za ziada kwake.

### Kuhariri Checkout Form: {#editing-a-checkout-form}

Kama tulivyotaja awali, unaweza kuunda checkout forms kwa madhumuni tofauti. Katika mfano huu tutashughulikia fomu ya usajili.

Baada ya kwenda kwenye kihariri cha checkout form, ipa fomu yako jina (litakalotumika kwa marejeleo ya ndani pekee) na slug (inayotumika kuunda shortcakes, kwa mfano).

![Kihariri cha fomu ya checkout chenye sehemu za jina na slug](/img/config/checkout-form-name-slug.png)

Fomu zinaundwa na hatua na sehemu. Unaweza kuongeza hatua mpya kwa kubofya **Ongeza Hatua Mpya ya Checkout**.

![Kitufe cha Ongeza Hatua Mpya ya Checkout](/img/config/checkout-form-add-step.png)

Kwenye kichupo cha kwanza cha dirisha la modal, jaza maudhui ya hatua ya fomu yako. Ipe ID, jina na maelezo. Vipengee hivi hutumika zaidi ndani ya mfumo.

![Kichupo cha maudhui ya hatua ya checkout chenye ID, jina, na maelezo](/img/config/checkout-form-step-content.png)

Kisha, weka mwonekano wa hatua. Unaweza kuchagua kati ya **Onyesha kila wakati** , **Onyesha tu kwa watumiaji walioingia** au **Onyesha tu kwa wageni**.

![Chaguo za mwonekano wa hatua ya checkout](/img/config/checkout-form-step-visibility.png)

Hatimaye, sanidi mtindo wa hatua. Hizi ni sehemu za hiari.

![Usanidi wa mtindo wa hatua ya checkout](/img/config/checkout-form-step-style.png)

Sasa, ni wakati wa kuongeza sehemu kwenye hatua yetu ya kwanza. Bofya tu **Ongeza Sehemu Mpya** na uchague aina ya sehemu unayotaka.

![Kitufe cha Ongeza Sehemu Mpya](/img/config/checkout-form-add-field-button.png)![Menyu kunjuzi ya uteuzi wa aina ya sehemu](/img/config/checkout-form-field-type-dropdown.png)

Kila sehemu ina vigezo tofauti vya kujazwa. Kwa ingizo hili la kwanza, tutachagua sehemu ya **Jina la mtumiaji**.

![Usanidi wa sehemu ya jina la mtumiaji](/img/config/checkout-form-username-content.png)![Vigezo vya sehemu ya jina la mtumiaji](/img/config/checkout-form-username-visibility.png)![Mipangilio ya ziada ya sehemu ya jina la mtumiaji](/img/config/checkout-form-username-style.png)

Unaweza kuongeza hatua na sehemu nyingi kadiri unavyohitaji. Ili kuonyesha bidhaa zako ili wateja wako wachague moja, tumia sehemu ya Jedwali la Bei. Ikiwa unataka kuwaruhusu wateja wako wachague kiolezo, ongeza sehemu ya Uteuzi wa Kiolezo. Na kadhalika.

![Kihariri cha fomu ya checkout chenye sehemu ya uteuzi wa kiolezo](/img/config/checkout-form-with-template-field.png)

_**Kumbuka:** Ukifanya bidhaa baada ya kuunda fomu yako ya checkout, utahitaji kuongeza bidhaa katika sehemu ya Jedwali la Bei. Usipoiongeza, bidhaa haitaonekana kwa wateja wako kwenye ukurasa wa usajili._

_**Kumbuka 2:** jina la mtumiaji, barua pepe, nenosiri, kichwa cha tovuti, URL ya tovuti, muhtasari wa oda, malipo, na kitufe cha kuwasilisha ni sehemu za lazima ili kuunda fomu ya checkout._

Unapofanya kazi kwenye fomu yako ya checkout, unaweza kutumia kitufe cha Hakiki wakati wowote kuona jinsi wateja wako watakavyoiona fomu. Unaweza pia kubadilisha kati ya mwonekano kama mtumiaji aliyepo au mgeni.

![Kitufe cha Hakiki kwenye kihariri cha fomu ya checkout](/img/config/checkout-form-preview-button.png)![Hakiki ya fomu ya checkout kama mgeni au mtumiaji aliyepo](/img/config/checkout-form-preview-modal.png)

Hatimaye, kwenye **Chaguo za Kina** unaweza kusanidi ujumbe wa ukurasa wa **Asante**, kuongeza snippets za kufuatilia conversions, kuongeza CSS maalum kwenye fomu yako ya checkout au kuiwekea kikomo kwa nchi fulani.

![Chaguo za Kina zenye ukurasa wa Asante, ufuatiliaji wa conversions, na CSS maalum](/img/config/checkout-form-advanced.png)

Unaweza pia kuwezesha au kulemaza fomu yako ya checkout mwenyewe kwa kuwasha au kuzima chaguo hili kwenye safu wima ya kulia, au kufuta fomu kabisa.

![Kitufe cha kuwasha/kuzima hali ya aktivu na chaguo la kufuta fomu ya checkout](/img/config/checkout-form-active.png)

Usisahau kuhifadhi fomu yako ya checkout!

![Kitufe cha Hifadhi Fomu ya Checkout](/img/config/checkout-form-save.png)

Ili kupata shortcode ya fomu yako, bofya **Tengeneza Shortcode** na unakili matokeo yanayoonyeshwa kwenye dirisha la modal.

![Modal ya Tengeneza Shortcode yenye shortcode ya kunakili](/img/config/checkout-form-editor.png)

_**Kumbuka:** Utahitaji kuongeza shortcode hii kwenye ukurasa wako wa usajili ili fomu hii ya checkout iongezwe humo._

## Kuchagua mapema bidhaa na violezo kupitia vigezo vya URL: {#pre-selecting-products-and-templates-via-url-parameters}

Ikiwa unataka kuunda majedwali ya bei yaliyobinafsishwa kwa bidhaa zako na kuchagua mapema kwenye fomu ya checkout bidhaa au kiolezo ambacho mteja wako anachagua kutoka kwenye jedwali lako la bei au ukurasa wa violezo, unaweza kutumia vigezo vya URL kwa hili.

### **Kwa mipango:** {#for-plans}

Nenda kwenye **Ultimate Multisite > Bidhaa > Chagua mpango**. Unapaswa kuona kitufe cha **Bofya kunakili Kiungo Kinachoweza Kushirikiwa** juu ya ukurasa. Hiki ndicho kiungo unachoweza kutumia kuchagua mapema mpango huu maalum kwenye fomu yako ya checkout.

![Ukurasa wa bidhaa wenye kitufe cha kiungo kinachoweza kushirikiwa](/img/config/products-list.png)

Kumbuka kuwa kiungo hiki kinachoweza kushirikiwa ni halali tu kwa **Mipango**. Huwezi kutumia viungo vinavyoweza kushirikiwa kwa vifurushi au huduma.

### Kwa violezo: {#for-templates}

Ikiwa unataka kuchagua mapema violezo vya tovuti kwenye fomu yako ya checkout, unaweza kutumia kigezo: **?template_id=X** kwenye URL ya ukurasa wako wa usajili. "X" inahitaji kubadilishwa na **nambari ya ID ya kiolezo cha tovuti**. Ili kupata nambari hii, nenda kwenye **Ultimate Multisite > Tovuti**.

Bofya **Dhibiti** moja kwa moja chini ya kiolezo cha tovuti unachotaka kutumia. Utaona nambari ya ID YA TOVUTI. Tumia tu nambari hii kwa kiolezo hiki maalum cha tovuti ili kichaguliwe mapema kwenye fomu yako ya checkout. Katika mfano wetu hapa, kigezo cha URL kitakuwa **?template_id=2**.

![Orodha ya tovuti inayoonyesha ID ya kiolezo cha tovuti](/img/config/site-templates-list.png)

Tuseme tovuti yetu ya mtandao ni [**www.mynetwork.com**](http://www.mynetwork.com) na ukurasa wetu wa usajili wenye fomu yetu ya checkout uko kwenye ukurasa wa **/register**. URL nzima ikiwa na kiolezo hiki cha tovuti kimechaguliwa mapema itaonekana kama [**www.mynetwork.com/register/?template**](http://www.mynetwork.com/register/?template)**_id=2**.

Na ikiwa unataka, unaweza kuchagua mapema bidhaa na violezo vyote viwili kwenye fomu yako ya checkout. Unachohitaji kufanya ni kunakili kiungo kinachoweza kushirikiwa cha mpango na kubandika kigezo cha kiolezo mwishoni. Kitaonekana kama [**www.mynetwork.com/register/premium-plan/?template**](http://www.mynetwork.com/register/premium-plan/?template)**_id=2**.
