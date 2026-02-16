---
title: Kubadilisha Fomu Yako ya Usajili
sidebar_position: 17
_i18n_hash: 01f3aeee38a564a8b5c4676a229748cf
---
# Kubadilisha Fomu Yako ya Usajili

Ili mtandao wako uonekane tofauti na SaaS nyingine zilizojengwa kwenye jukwaa la WordPress, Ultimate Multisite inakuruhusu kubadilisha kurasa zako za usajili na kuingia kwa kutumia kipengele chetu cha **Checkout Forms**.

Ingawa ni njia rahisi na inayobadilika ya kujaribu mbinu tofauti unapojaribu kuvutia wateja wapya, mara nyingi hutumiwa kuunda fomu za usajili zilizobinafsishwa. Makala hii inakuonyesha jinsi unavyoweza kufanya hivyo.

## Kurasa za kuingia na usajili:

Wakati wa usakinishaji wa Ultimate Multisite, mfumo huunda moja kwa moja kurasa maalum za kuingia na usajili kwenye tovuti yako kuu. Unaweza kubadilisha kurasa hizi za msingi wakati wowote kwa kwenda chini ya ukurasa wako wa **Ultimate Multisite > Settings > Login & Registration**.

![Ukurasa wa mipangilio ya Kuingia na Usajili](/img/config/settings-general.png)

Hebu tuangalie kila moja ya chaguo unazoweza kubadilisha kwenye ukurasa wa **Login & Registration**:

  * **Enable registration:** Chaguo hili litawezesha au kuzima usajili kwenye mtandao wako. Ikiwa imezimwa, wateja wako hawataweza kusajili na kujisajilisha kwa bidhaa zako.

  * **Enable email verification:** Ikiwa chaguo hili limewashwa, wateja wanaojisajilisha kwa mpango wa bure au mpango wa kulipia wenye kipindi cha majaribio watapokea barua pepe ya uthibitisho na watahitaji kubofya kiungo cha uthibitisho ili tovuti zao ziundwe.

  * **Default registration page:** Hii ni ukurasa wa msingi wa usajili. Ukurasa huu unahitaji kuchapishwa kwenye tovuti yako na kuwa na fomu ya usajili (pia inajulikana kama checkout form) - ambapo wateja wako watajisajilisha kwa bidhaa zako. Unaweza kuunda kurasa nyingi za usajili na checkout forms unavyotaka, kumbuka tu kuweka shortcode ya checkout form kwenye ukurasa wa usajili, vinginevyo haitaonekana.

  * **Use custom login page:** Chaguo hili linakuruhusu kutumia ukurasa wa kuingia ulioboreshwa, tofauti na ukurasa wa msingi wa wp-login.php. Ikiwa chaguo hili limewashwa, unaweza kuchagua ukurasa upi utatumiwa kuingia kwenye chaguo la **Default login page** (lililopo chini yake).

  * **Obfuscate the original login url (wp-login.php)** : Ikiwa unataka kuficha URL ya awali ya kuingia, unaweza kuwasha chaguo hili. Hii ni muhimu kuzuia mashambulizi ya brute-force. Ikiwa chaguo hili limewezeshwa, Ultimate Multisite itaonyesha kosa la 404 wakati mtumiaji anajaribu kufikia kiungo cha awali cha wp-login.php

  * **Force synchronous site publication:** Baada ya mteja kujisajilisha kwa bidhaa kwenye mtandao, tovuti mpya inayosubiri inahitaji kubadilishwa kuwa tovuti halisi ya mtandao. Mchakato wa kuchapisha hutokea kupitia Job Queue, kwa njia ya asynchronous. Wezesha chaguo hili kulazimisha uchapishaji kutokea katika ombi lile lile la kusajili.

Sasa, hebu tuone chaguo nyingine ambazo bado zinahusiana na mchakato wa kuingia na usajili. Zipo chini ya **Other options** kwenye ukurasa huo wa Login & registration:

  * **Default role:** Hii ni jukumu ambalo wateja wako watakuwa nalo kwenye tovuti yao baada ya mchakato wa kusajili.

  * **Add users to the main site as well:** Kuwezesha chaguo hili pia kutaongeza mtumiaji kwenye tovuti kuu ya mtandao wako baada ya mchakato wa kusajili. Ukiwezesha chaguo hili, chaguo la kuweka **default role** ya watumiaji hawa kwenye tovuti yako litaonekana pia chini yake.

  * **Enable multiple accounts:** Ruhusu watumiaji kuwa na akaunti katika tovuti tofauti za mtandao wako kwa kutumia anwani moja ya barua pepe. Ikiwa chaguo hili limezimwa, wateja wako hawataweza kuunda akaunti kwenye tovuti nyingine zinazofanya kazi kwenye mtandao wako kwa kutumia anwani ile ile ya barua pepe.

Na hizo ndizo chaguo zote zinazohusiana na kuingia na usajili unazoweza kubadilisha! Usisahau kuhifadhi mipangilio yako baada ya kumaliza kuihariri.

## Kutumia fomu nyingi za usajili:

Ultimate Multisite 2.0 inatoa kihariri cha checkout form kinachokuruhusu kuunda fomu nyingi unavyotaka, zenye sehemu tofauti, bidhaa zinazopatikana, na kadhalika.

Kurasa zote za kuingia na usajili zimewekwa na shortcodes: **[wu_login_form]** kwenye ukurasa wa kuingia na **[wu_checkout]** kwa ukurasa wa usajili. Unaweza kubadilisha zaidi ukurasa wa usajili kwa kujenga au kuunda checkout forms.

Kufikia kipengele hiki, nenda kwenye menyu ya **Checkout Forms**, kwenye upau wa pembeni kushoto.

![Menyu ya Checkout Forms kwenye upau wa pembeni](/img/config/checkout-forms-list.png)

Kwenye ukurasa huu, unaweza kuona checkout forms zote ulizonazo.

Ikiwa unataka kuunda mpya, bofya tu **Add Checkout Form** juu ya ukurasa.

Unaweza kuchagua moja ya chaguo hizi tatu kama hatua yako ya kuanzia: hatua moja, hatua nyingi au tupu. Kisha, bofya **Go to the Editor**.

![Kuongeza Checkout Form na chaguo za hatua moja, hatua nyingi, au tupu](/img/config/checkout-forms-list.png)

Vinginevyo, unaweza kuhariri au kunakili fomu ulizonazo tayari kwa kubofya chaguo zilizo chini ya jina lake. Hapo, pia utapata chaguo za kunakili shortcode ya fomu au kuifuta.

![Vitendo vya hover vya checkout form na kuhariri, kunakili, na kufuta](/img/config/checkout-form-hover-actions.png)

Ukichagua hatua moja au hatua nyingi, checkout form itakuwa tayari imejazwa mapema na hatua za msingi ili ifanye kazi. Kisha, ukitaka, unaweza kuongeza hatua zaidi.

### Kuhariri Checkout Form:

Kama tulivyosema awali, unaweza kuunda checkout forms kwa madhumuni tofauti. Katika mfano huu tutafanya kazi kwenye fomu ya usajili.

Baada ya kwenda kwenye kihariri cha checkout form, ipe fomu yako jina (ambalo litatumika kwa marejeleo ya ndani tu) na slug (inayotumika kuunda shortcodes, kwa mfano).

![Kihariri cha checkout form chenye sehemu za jina na slug](/img/config/checkout-form-editor.png)

Fomu zimeundwa na hatua na sehemu. Unaweza kuongeza hatua mpya kwa kubofya **Add New Checkout Step**.

![Kitufe cha Add New Checkout Step](/img/config/checkout-form-add-step.png)

Kwenye kichupo cha kwanza cha dirisha la modal, jaza maudhui ya hatua ya fomu yako. Ipe ID, jina na maelezo. Vipengele hivi vinatumika zaidi kwa ndani.

![Kichupo cha maudhui ya hatua ya checkout chenye ID, jina, na maelezo](/img/config/checkout-form-step.png)

Ifuatayo, weka uonekaji wa hatua. Unaweza kuchagua kati ya **Always show**, **Only show for logged in users** au **Only show for guests**.

![Chaguo za uonekaji wa hatua ya checkout](/img/config/checkout-form-step.png)

Hatimaye, sanidi mtindo wa hatua. Hizi ni sehemu za hiari.

![Usanidi wa mtindo wa hatua ya checkout](/img/config/checkout-form-step.png)

Sasa, ni wakati wa kuongeza sehemu kwenye hatua yetu ya kwanza. Bofya tu **Add New Field** na uchague aina ya sehemu unayotaka.

![Kitufe cha Add New Field](/img/config/checkout-form-editor.png)![Menyu ya kuchagua aina ya sehemu](/img/config/checkout-form-step.png)

Kila sehemu ina vigezo tofauti vya kujazwa. Kwa ingizo hili la kwanza, tutachagua sehemu ya **Username**.

![Usanidi wa sehemu ya Username](/img/config/checkout-form-step.png)![Vigezo vya sehemu ya Username](/img/config/checkout-form-step.png)![Mipangilio ya ziada ya sehemu ya Username](/img/config/checkout-form-step.png)

Unaweza kuongeza hatua na sehemu nyingi unavyohitaji. Ili kuonyesha bidhaa zako kwa wateja wako wachague moja, tumia sehemu ya Pricing Table. Ikiwa unataka kuwaruhusu wateja wako kuchagua template, ongeza sehemu ya Template Selection. Na kadhalika.

_**Kumbuka:** Ukiunda bidhaa baada ya kuunda checkout form yako, utahitaji kuongeza bidhaa katika sehemu ya Pricing table. Usipoiongeza, bidhaa haitaonekana kwa wateja wako kwenye ukurasa wa usajili._

_**Kumbuka 2:** username, email, password, site title, site URL, order summary, payment, na submit button ni sehemu za lazima kuunda checkout form._

Unapofanya kazi kwenye checkout form yako, unaweza kutumia kitufe cha Preview kuona jinsi wateja wako watakavyoiona fomu. Unaweza pia kubadilisha kati ya kuona kama mtumiaji aliyepo au mgeni.

![Kitufe cha Preview kwenye kihariri cha checkout form](/img/config/checkout-form-editor.png)![Onyesho la awali la checkout form kama mgeni au mtumiaji aliyepo](/img/config/checkout-form-editor.png)

Hatimaye, kwenye **Advanced Options** unaweza kusanidi ujumbe wa ukurasa wa **Thank You**, kuongeza snippets za kufuatilia conversion, kuongeza CSS maalum kwenye checkout form yako au kuizuia kwa nchi fulani.

![Advanced Options na ukurasa wa Thank You, ufuatiliaji wa conversion, na CSS maalum](/img/config/checkout-form-advanced.png)

Unaweza pia kuwezesha au kuzima checkout form yako kwa mikono kwa kubadilisha chaguo hili kwenye safu ya kulia, au kufuta fomu kabisa.

![Kibadilisha cha Active na chaguo la kufuta kwa checkout form](/img/config/checkout-form-active.png)

Usisahau kuhifadhi checkout form yako!

![Kitufe cha Save Checkout Form](/img/config/checkout-form-save.png)

Kupata shortcode ya fomu yako bofya **Generate Shortcode** na unakili matokeo yanayoonyeshwa kwenye dirisha la modal.

![Modal ya Generate Shortcode yenye shortcode ya kunakili](/img/config/checkout-form-editor.png)

_**Kumbuka:** Utahitaji kuongeza shortcode hii kwenye ukurasa wako wa usajili ili checkout form hii iongezwe humo._

## Kuchagua mapema bidhaa na templates kupitia vigezo vya URL:

Ikiwa unataka kuunda jedwali za bei zilizobinafsishwa kwa bidhaa zako na kuchagua mapema kwenye checkout form bidhaa au template ambayo mteja wako anachagua kutoka kwenye jedwali lako la bei au ukurasa wa templates, unaweza kutumia vigezo vya URL kwa hili.

### **Kwa mipango:**

Nenda **Ultimate Multisite > Products > Chagua mpango**. Utaona kitufe cha **Click to copy Shareable Link** juu ya ukurasa. Hiki ni kiungo unachoweza kutumia kuchagua mapema mpango huu mahususi kwenye checkout form yako.

![Ukurasa wa bidhaa na kitufe cha kiungo kinachoshirikiwa](/img/config/products-list.png)

Kumbuka kwamba kiungo hiki kinachoshirikiwa ni halali tu kwa **Plans**. Huwezi kutumia viungo vinavyoshirikiwa kwa packages au services.

### Kwa templates:

Ikiwa unataka kuchagua mapema site templates kwenye checkout form yako, unaweza kutumia kigezo: **?template_id=X** kwenye URL ya ukurasa wako wa usajili. "X" inahitaji kubadilishwa na **nambari ya site template ID**. Kupata nambari hii, nenda **Ultimate Multisite > Sites**.

Bofya **Manage** chini ya site template unayotaka kutumia. Utaona nambari ya SITE ID. Tumia tu nambari hii ili site template hii mahususi ichaguliwe mapema kwenye checkout form yako. Katika kesi yetu hapa, kigezo cha URL kingekuwa **?template_id=2**.

![Orodha ya Sites inayoonyesha site template ID](/img/config/site-templates-list.png)

Tuseme tovuti yetu ya mtandao ni [**www.mynetwork.com**](http://www.mynetwork.com) na ukurasa wetu wa usajili wenye checkout form yetu uko kwenye ukurasa wa **/register**. URL nzima ikiwa na site template hii imechaguliwa mapema itaonekana kama [**www.mynetwork.com/register/?template**](http://www.mynetwork.com/register/?template)**_id=2**.

Na ukitaka, unaweza kuchagua mapema bidhaa zote na templates kwenye checkout form yako. Unachohitaji kufanya ni kunakili kiungo kinachoshirikiwa cha mpango na kubandika kigezo cha template mwishoni. Kitaonekana kama [**www.mynetwork.com/register/premium-plan/?template**](http://www.mynetwork.com/register/premium-plan/?template)**_id=2**.
