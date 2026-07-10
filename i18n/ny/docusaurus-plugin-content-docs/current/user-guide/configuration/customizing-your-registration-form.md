---
title: Kusintha Fomu Yanu Yolembetsa
sidebar_position: 17
_i18n_hash: 3dada0e900a1f46d950e1815ae8f5085
---
# Kusintha Fomu yanu Yolembetsa {#customizing-your-registration-form}

Kuti network yanu iwoneke yapadera kuposa ma SaaS ena onse omangidwa pa WordPress platform, Ultimate Multisite imakulolani kusintha masamba anu olembetsa ndi olowera pogwiritsa ntchito mbali yathu ya **Checkout Forms**.

Ngakhale ndi njira yosavuta komanso yosinthika yoyesera njira zosiyanasiyana poyesa kusintha alendo atsopano kukhala makasitomala, nthawi zambiri amagwiritsidwa ntchito kupanga mafomu olembetsa okonzedwa mwapadera. Nkhaniyi ikufuna kukuwonetsani momwe mungachitire izi.

## Masamba olowera ndi olembetsa: {#login-and-registration-pages}

Mukangoyika Ultimate Multisite, imangopanga masamba apadera olowera ndi olembetsa pa site yanu yayikulu. Mutha kusintha masamba osasinthika awa nthawi iliyonse popita ku tsamba lanu la **Ultimate Multisite > Settings > Login & Registration**.

![Tsamba la makonda a Login ndi Registration](/img/config/settings-general.png)

Nawu muwone wonse wa tsamba la makonda a login ndi registration:

![Tsamba lonse la makonda a Login ndi Registration](/img/config/settings-login-registration-full.png)

Tiyeni tiwone njira iliyonse yomwe mungasinthe pa tsamba la **Login & Registration**:

  * **Yambitsani kulembetsa:** Njirayi idzayambitsa kapena kuzimitsa kulembetsa pa network yanu. Ngati yazimitsidwa, makasitomala anu sadzatha kulembetsa ndi kusubscribe ku zinthu zanu.

  * **Yambitsani kutsimikizira email:** Ngati njirayi yayatsidwa, makasitomala omwe asubscribe ku plan yaulere kapena plan yolipira yokhala ndi nthawi yoyesera adzalandira email yotsimikizira ndipo adzafunika kudina ulalo wotsimikizira kuti mawebusayiti awo apangidwe.

  * **Tsamba losasinthika lolembetsa:** Ili ndi tsamba losasinthika lolembetsa. Tsambali liyenera kukhala lofalitsidwa pa website yanu ndipo likhale ndi fomu yolembetsa (yomwe imadziwikanso ngati checkout form) - komwe makasitomala anu adzasubscribe ku zinthu zanu. Mutha kupanga masamba olembetsa ndi checkout forms ochuluka momwe mukufunira, ingokumbukirani kuyika checkout form shortcode pa tsamba lolembetsa, apo ayi sidzawoneka.

  * **Gwiritsani ntchito tsamba lolowera lokonzedwa mwapadera:** Njirayi imakulolani kugwiritsa ntchito tsamba lolowera lokonzedwa mwapadera, losiyana ndi tsamba losasinthika la wp-login.php. Ngati njirayi yayatsidwa, mutha kusankha tsamba lomwe lidzagwiritsidwe ntchito polowera pa njira ya **Tsamba lolowera losasinthika** (pansipa pomwe).

  * **Bisani login url yoyambirira (wp-login.php)** : Ngati mukufuna kubisa login URL yoyambirira, mutha kuyatsa njirayi. Izi ndi zothandiza popewa kuukira kwa brute-force. Ngati njirayi yayatsidwa, Ultimate Multisite idzawonetsa cholakwika cha 404 pamene wogwiritsa ntchito ayesa kufikira ulalo woyambirira wa wp-login.php

  * **Kakamizani kufalitsa site nthawi yomweyo:** Makasitomala akasubscribe ku chinthu pa network, site yatsopano yomwe ikuyembekezera iyenera kusinthidwa kukhala site yeniyeni ya network. Njira yofalitsa imachitika kudzera mu Job Queue, mosagwirizana ndi nthawi yomweyo. Yambitsani njirayi kuti mukakamize kufalitsa kuchitika mu pempho lomwelo monga signup.

Tsopano, tiyeni tiwone njira zina zomwe zikadali zofunika pa njira yolowera ndi yolembetsa. Zili pansipa pa **Other options** pa tsamba lomwelo la Login & registration:

  * **Role yosasinthika:** Iyi ndi role yomwe makasitomala anu adzakhala nayo pa website yawo pambuyo pa njira ya signup.

  * **Yambitsani Jumper:** Imayambitsa njira yachidule ya Jumper mu admin area. Jumper imalola oyang'anira kudumpha mwachangu kupita ku masikirini a Ultimate Multisite, zinthu za network, ndi malo ena othandizidwa popanda kusakatula menyu iliyonse. Izimitseni ngati mukufuna kubisa chida chimenecho choyendera mwachangu pa admin interface.

  * **Onjezaninso ogwiritsa ntchito ku site yayikulu:** Kuyambitsa njirayi kudzawonjezeranso wogwiritsa ntchito ku site yayikulu ya network yanu pambuyo pa njira ya signup. Ngati muyambitsa njirayi, njira yokhazikitsa **role yosasinthika** ya ogwiritsa ntchito awa pa website yanu idzawonekeranso pansipa pomwe.

  * **Yambitsani ma account angapo:** Lolani ogwiritsa ntchito kukhala ndi ma account mu ma site osiyanasiyana a network yanu ndi email address yomweyo. Ngati njirayi yazimitsidwa, makasitomala anu sadzatha kupanga account pa mawebsite ena omwe akuyenda pa network yanu ndi email address yomweyo.

Ndipo ndizo njira zonse zokhudzana ndi login ndi registration zomwe mungasinthe! Musaiwale kusunga makonda anu mukamaliza kuwasintha.

## Kugwiritsa ntchito mafomu olembetsa angapo: {#using-multiple-registration-forms}

Ultimate Multisite 2.0 imapereka checkout form editor yomwe imakulolani kupanga mafomu ochuluka momwe mukufunira, okhala ndi minda yosiyanasiyana, zinthu zomwe zikuperekedwa, ndi zina zotero.

Masamba onse a login ndi registration amaikidwamo shortcodes: **[wu_login_form]** pa tsamba la login ndi**[wu_checkout]** pa tsamba la registration. Mutha kusinthanso tsamba la registration popanga kapena kumanga checkout forms.

Kuti mufikire mbaliyi, pitani ku menyu ya **Checkout Forms**, kumanzere pa side-bar.

![Menyu ya Checkout Forms mu sidebar](/img/config/checkout-forms-list.png)

Pa tsambali, mutha kuona checkout forms zonse zomwe muli nazo.

Ngati mukufuna kupanga yatsopano, ingodinani **Add Checkout Form** pamwamba pa tsambali.

Mutha kusankha imodzi mwa njira zitatuzi ngati poyambira: sitepe imodzi, masitepe angapo kapena yopanda kanthu. Kenako, dinani **Go to the Editor**.

![Onjezani Checkout Form yokhala ndi njira za sitepe imodzi, masitepe angapo, kapena yopanda kanthu](/img/config/checkout-forms-list.png)

Mwinanso, mutha kusintha kapena kubwereza mafomu omwe muli nawo kale podina njira zomwe zili pansipa pa dzina lake. Kumeneko, mupezanso njira zokopera shortcode ya fomuyo kapena kufufuta fomuyo.

![Zochita za hover pa checkout form zokhala ndi kusintha, kubwereza, ndi kufufuta](/img/config/checkout-form-hover-actions.png)

Ngati musankha sitepe imodzi kapena masitepe angapo, checkout form idzakhala itadzazidwa kale ndi masitepe ofunikira kuti igwire ntchito. Kenako, ngati mukufuna, mutha kuwonjezera masitepe owonjezera.

### Kusintha Checkout Form: {#editing-a-checkout-form}

Monga tanena kale, mutha kupanga checkout forms pa zolinga zosiyanasiyana. Mu chitsanzo ichi tigwira ntchito pa fomu yolembetsa.

Mukapita ku checkout form editor, perekani fomu yanu dzina (lomwe lidzagwiritsidwa ntchito ngati cholozera chamkati chokha) ndi slug (yogwiritsidwa ntchito kupanga shortcakes, mwachitsanzo).

![Mkonzi wa fomu ya checkout yokhala ndi minda ya dzina ndi slug](/img/config/checkout-form-name-slug.png)

Mafomu amapangidwa ndi masitepe ndi minda. Mungawonjezere sitepe yatsopano podina **Add New Checkout Step**.

![Batani la Add New Checkout Step](/img/config/checkout-form-add-step.png)

Pa tabu yoyamba ya zenera la modal, lembani zomwe zili mu sitepe ya fomu yanu. Ipatseni ID, dzina ndi kufotokozera. Zinthu izi zimagwiritsidwa ntchito kwambiri mkati.

![Tabu ya zomwe zili mu sitepe ya checkout yokhala ndi ID, dzina, ndi kufotokozera](/img/config/checkout-form-step-content.png)

Kenako, khazikitsani kuoneka kwa sitepeyo. Mungasankhe pakati pa **Always show** , **Only show for logged in users** kapena **Only show for guests**.

![Zosankha za kuoneka kwa sitepe ya checkout](/img/config/checkout-form-step-visibility.png)

Pomaliza, konzani kalembedwe ka sitepeyo. Iyi ndi minda yosankha.

![Kukonzekera kalembedwe ka sitepe ya checkout](/img/config/checkout-form-step-style.png)

Tsopano, ndi nthawi yowonjezera minda ku sitepe yathu yoyamba. Ingodinani **Add New Field** ndikusankha mtundu wa gawo lomwe mukufuna.

![Batani la Add New Field](/img/config/checkout-form-add-field-button.png)![Menyu yotsika yosankhira mtundu wa munda](/img/config/checkout-form-field-type-dropdown.png)

Munda uliwonse uli ndi magawo osiyanasiyana oti mudzaze. Pa kulowa koyamba uku, tidzasankha munda wa **Username**.

![Kukonzekera munda wa Username](/img/config/checkout-form-username-content.png)![Magawo a munda wa Username](/img/config/checkout-form-username-visibility.png)![Zokonda zowonjezera za munda wa Username](/img/config/checkout-form-username-style.png)

Mungawonjezere masitepe ndi minda yambiri momwe mungafunire. Kuti muwonetse zinthu zanu kwa makasitomala anu kuti asankhe chimodzi, gwiritsani ntchito munda wa Tebulo la Mitengo. Ngati mukufuna kulola makasitomala anu kusankha template, onjezani munda wa Kusankha Template. Ndi zina zotero.

![Mkonzi wa fomu ya checkout yokhala ndi munda wosankha template](/img/config/checkout-form-with-template-field.png)

_**Dziwani:** Mukapanga chinthu mutapanga fomu yanu ya checkout, mudzafunika kuwonjezera chinthucho mu gawo la Tebulo la Mitengo. Ngati simuchiwonjezera, chinthucho sichidzawoneka kwa makasitomala anu pa tsamba lolembetsera._

_**Dziwani 2:** username, email, password, mutu wa site, URL ya site, chidule cha oda, kulipira, ndi batani lotumiza ndi minda yofunikira kupanga fomu ya checkout._

Pamene mukugwira ntchito pa fomu yanu ya checkout, nthawi zonse mungagwiritse ntchito batani la Preview kuti muone momwe makasitomala anu adzaonere fomu. Mungasinthanenso pakati pa kuwona ngati wogwiritsa ntchito yemwe alipo kale kapena mlendo.

![Batani la Preview pa mkonzi wa fomu ya checkout](/img/config/checkout-form-preview-button.png)![Kuwoneratu fomu ya checkout ngati mlendo kapena wogwiritsa ntchito yemwe alipo kale](/img/config/checkout-form-preview-modal.png)

Pomaliza, pa **Advanced Options** mungakonze uthenga wa tsamba la **Thank You**, kuwonjezera snippets kuti mutsatire conversions, kuwonjezera CSS yosinthidwa ku fomu yanu ya checkout kapena kuiletsa kumayiko ena.

![Advanced Options yokhala ndi tsamba la Thank You, kutsatira conversion, ndi CSS yosinthidwa](/img/config/checkout-form-advanced.png)

Mungathenso kuyatsa kapena kuzimitsa pamanja fomu yanu ya checkout posintha njira iyi pa kolamu yakumanja, kapena kuchotsa fomuyo kosatha.

![Kusinthira kwa Active ndi njira yochotsa fomu ya checkout](/img/config/checkout-form-active.png)

Musaiwale kusunga fomu yanu ya checkout!

![Batani la Save Checkout Form](/img/config/checkout-form-save.png)

Kuti mutenge shortcode ya fomu yanu dinani **Generate Shortcode** ndipo koperani zotsatira zomwe zawonetsedwa pa zenera la modal.

![Modal ya Generate Shortcode yokhala ndi shortcode yoti mukopere](/img/config/checkout-form-editor.png)

_**Dziwani:** Mudzafunika kuwonjezera shortcode iyi pa tsamba lanu lolembetsera kuti fomu ya checkout iyi iwonjezedwe pamenepo._

## Kusankhiratu zinthu ndi ma template kudzera mu magawo a URL: {#pre-selecting-products-and-templates-via-url-parameters}

Ngati mukufuna kupanga matebulo a mitengo osinthidwa mwamakonda a zinthu zanu ndi kusankhiratu pa fomu ya checkout chinthu kapena template yomwe kasitomala wanu amasankha kuchokera pa tebulo lanu la mitengo kapena tsamba la ma template, mungagwiritse ntchito magawo a URL pa izi.

### **Kwa mapulani:** {#for-plans}

Pitani ku **Ultimate Multisite > Products > Select a plan**. Muyenera kuona batani la **Click to copy Shareable Link** pamwamba pa tsambalo. Iyi ndi link yomwe mungagwiritse ntchito kusankhiratu pulani yeniyeniyi pa fomu yanu ya checkout.

![Tsamba la chinthu lokhala ndi batani la link yogawana](/img/config/products-list.png)

Dziwani kuti link yogawana iyi ndi yovomerezeka kokha kwa **Mapulani**. Simungagwiritse ntchito ma link ogawana pa mapaketi kapena ntchito.

### Kwa ma template: {#for-templates}

Ngati mukufuna kusankhiratu ma template a site pa fomu yanu ya checkout, mungagwiritse ntchito parameter: **?template_id=X** pa URL ya tsamba lanu lolembetsera. "X" iyenera kusinthidwa ndi **nambala ya ID ya site template**. Kuti mutenge nambala iyi, pitani ku **Ultimate Multisite > Sites**.

Dinani **Manage** pansi pomwe pa site template yomwe mukufuna kugwiritsa ntchito. Mudzawona nambala ya SITE ID. Ingogwiritsani ntchito nambala iyi pa site template yeniyeniyi kuti isankhidwiratu pa fomu yanu ya checkout. Mu nkhani yathu pano, parameter ya URL idzakhala **?template_id=2**.

![Mndandanda wa Sites ukuwonetsa ID ya site template](/img/config/site-templates-list.png)

Tiyerekeze kuti website ya network yathu ndi [**www.mynetwork.com**](http://www.mynetwork.com) ndipo tsamba lathu lolembetsera lokhala ndi fomu yathu ya checkout lili pa tsamba la **/register**. URL yonse yokhala ndi site template iyi yosankhidwiratu idzaoneka ngati [**www.mynetwork.com/register/?template**](http://www.mynetwork.com/register/?template)**_id=2**.

Ndipo ngati mukufuna, mungasankhiretu zonse ziwiri, zinthu ndi ma template, ku fomu yanu ya checkout. Zonse muyenera kuchita ndi kukopera link yogawana ya pulaniyo ndikuyika parameter ya template kumapeto. Idzaoneka ngati [**www.mynetwork.com/register/premium-plan/?template**](http://www.mynetwork.com/register/premium-plan/?template)**_id=2**.
