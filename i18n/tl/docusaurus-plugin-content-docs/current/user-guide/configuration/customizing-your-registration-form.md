---
title: Pag-customize ng Iyong Form sa Pagpaparehistro
sidebar_position: 17
_i18n_hash: 3dada0e900a1f46d950e1815ae8f5085
---
# Pag-customize ng iyong Form ng Rehistrasyon

Upang magmukhang natatangi ang iyong network mula sa lahat ng ibang SaaS na binuo sa WordPress platform, pinapayagan ka ng Ultimate Multisite na i-customize ang iyong mga pahina ng rehistrasyon at login gamit ang aming feature na **Checkout Forms**.

Bagama’t madali at flexible ang mga ito para mag-eksperimento sa iba’t ibang paraan kapag sinusubukang gawing bagong customer ang mga bisita, kadalasan ay ginagamit ang mga ito upang gumawa ng mga personalized na form ng rehistrasyon. Layunin ng artikulong ito na ipakita sa iyo kung paano mo ito magagawa.

## Mga pahina ng login at rehistrasyon: {#login-and-registration-pages}

Sa pag-install ng Ultimate Multisite, awtomatiko itong gumagawa ng mga custom na pahina ng login at rehistrasyon sa iyong pangunahing site. Maaari mong baguhin ang mga default na pahinang ito anumang oras sa pamamagitan ng pagpunta sa iyong pahina ng **Ultimate Multisite > Settings > Login & Registration**.

![Pahina ng mga setting ng Login at Registration](/img/config/settings-general.png)

Narito ang buong view ng pahina ng mga setting ng login at rehistrasyon:

![Buong pahina ng mga setting ng Login at Registration](/img/config/settings-login-registration-full.png)

Tingnan natin ang bawat isa sa mga opsyong maaari mong i-customize sa pahina ng **Login & Registration**:

  * **Paganahin ang rehistrasyon:** Ie-enable o idi-disable ng opsyong ito ang rehistrasyon sa iyong network. Kung naka-off ito, hindi makakapagrehistro at makakapag-subscribe ang iyong mga customer sa iyong mga produkto.

  * **Paganahin ang beripikasyon sa email:** Kung naka-on ang opsyong ito, ang mga customer na mag-subscribe sa isang libreng plan o isang bayad na plan na may trial period ay makakatanggap ng email ng beripikasyon at kakailanganing i-click ang verification link upang malikha ang kanilang mga website.

  * **Default na pahina ng rehistrasyon:** Ito ang default na pahina para sa rehistrasyon. Kailangang naka-publish ang pahinang ito sa iyong website at may form ng rehistrasyon (kilala rin bilang checkout form) - kung saan magsu-subscribe ang iyong mga client sa iyong mga produkto. Maaari kang gumawa ng kahit ilang pahina ng rehistrasyon at checkout form na gusto mo, tandaan lang na ilagay ang checkout form shortcode sa pahina ng rehistrasyon, kung hindi ay hindi ito lalabas.

  * **Gumamit ng custom na pahina ng login:** Pinapayagan ka ng opsyong ito na gumamit ng customized na pahina ng login, bukod sa default na pahinang wp-login.php. Kung naka-on ang opsyong ito, maaari mong piliin kung aling pahina ang gagamitin para sa login sa opsyong **Default login page** (nasa ibaba mismo).

  * **Itago ang orihinal na login url (wp-login.php)** : Kung gusto mong itago ang orihinal na login URL, maaari mong i-on ang opsyong ito. Kapaki-pakinabang ito upang maiwasan ang brute-force attacks. Kung naka-enable ang opsyong ito, magpapakita ang Ultimate Multisite ng 404 error kapag sinubukan ng isang user na i-access ang orihinal na link na wp-login.php

  * **Pilitin ang synchronous na pag-publish ng site:** Pagkatapos mag-subscribe ng isang customer sa isang produkto sa isang network, kailangang i-convert ang bagong pending site upang maging tunay na network site. Nangyayari ang proseso ng pag-publish sa pamamagitan ng Job Queue, nang asynchronously. I-enable ang opsyong ito upang piliting mangyari ang pag-publish sa parehong request ng signup.

Ngayon, tingnan natin ang iba pang mga opsyon na may kaugnayan pa rin sa proseso ng login at rehistrasyon. Nasa ibaba mismo ang mga ito ng **Other options** sa parehong pahina ng Login & registration:

  * **Default na role:** Ito ang role na magkakaroon ang iyong mga customer sa kanilang website pagkatapos ng proseso ng signup.

  * **Paganahin ang Jumper:** Ine-enable ang shortcut na Jumper sa admin area. Pinapayagan ng Jumper ang mga administrator na mabilis na lumipat sa mga screen ng Ultimate Multisite, mga object ng network, at iba pang suportadong destinasyon nang hindi kinakailangang mag-browse sa bawat menu. I-off ito kung mas gusto mong itago ang mabilisang navigation tool na iyon mula sa admin interface.

  * **Idagdag din ang mga user sa pangunahing site:** Kapag in-enable ang opsyong ito, idaragdag din ang user sa pangunahing site ng iyong network pagkatapos ng proseso ng signup. Kung i-enable mo ang opsyong ito, lalabas din sa ibaba mismo ang isang opsyon upang itakda ang **default role** ng mga user na ito sa iyong website.

  * **Paganahin ang maraming account:** Payagan ang mga user na magkaroon ng mga account sa iba’t ibang site ng iyong network gamit ang parehong email address. Kung naka-off ang opsyong ito, hindi makakagawa ng account ang iyong mga customer sa ibang mga website na tumatakbo sa iyong network gamit ang parehong email address.

At iyan na ang lahat ng opsyong may kaugnayan sa login at rehistrasyon na maaari mong i-customize! Huwag kalimutang i-save ang iyong mga setting pagkatapos mong matapos ang pag-edit sa mga ito.

## Paggamit ng maraming form ng rehistrasyon: {#using-multiple-registration-forms}

Nag-aalok ang Ultimate Multisite 2.0 ng checkout form editor na nagpapahintulot sa iyong gumawa ng kahit ilang form na gusto mo, na may iba’t ibang field, mga produktong iniaalok, atbp.

Parehong naka-embed ang mga pahina ng login at rehistrasyon gamit ang mga shortcode: **[wu_login_form]** sa pahina ng login at**[wu_checkout]** para sa pahina ng rehistrasyon. Maaari mo pang i-customize ang pahina ng rehistrasyon sa pamamagitan ng pagbuo o paggawa ng mga checkout form.

Upang ma-access ang feature na ito, pumunta sa menu na **Checkout Forms**, sa kaliwang side-bar.

![Menu ng Checkout Forms sa sidebar](/img/config/checkout-forms-list.png)

Sa pahinang ito, makikita mo ang lahat ng checkout form na mayroon ka.

Kung gusto mong gumawa ng bago, i-click lang ang **Add Checkout Form** sa itaas ng pahina.

Maaari kang pumili ng isa sa tatlong opsyong ito bilang iyong panimulang punto: single step, multi-step o blank. Pagkatapos, i-click ang **Go to the Editor**.

![Magdagdag ng Checkout Form na may mga opsyong single step, multi-step, o blank](/img/config/checkout-forms-list.png)

Bilang alternatibo, maaari mong i-edit o i-duplicate ang mga form na mayroon ka na sa pamamagitan ng pag-click sa mga opsyon sa ibaba ng pangalan nito. Doon, makikita mo rin ang mga opsyon upang kopyahin ang shortcode ng form o burahin ang form.

![Mga hover action ng checkout form na may edit, duplicate, at delete](/img/config/checkout-form-hover-actions.png)

Kung pipiliin mo ang single step o multi-step, ang checkout form ay paunang mapupunan na ng mga pangunahing hakbang upang gumana ito. Pagkatapos, kung gusto mo, maaari kang magdagdag ng mga karagdagang hakbang dito.

### Pag-edit ng Checkout Form: {#editing-a-checkout-form}

Gaya ng nabanggit namin dati, maaari kang gumawa ng mga checkout form para sa iba’t ibang layunin. Sa halimbawang ito, magtatrabaho tayo sa isang form ng rehistrasyon.

Pagkatapos pumunta sa checkout form editor, bigyan ang iyong form ng pangalan (na gagamitin lamang para sa internal reference) at isang slug (ginagamit upang gumawa ng mga shortcode, halimbawa).

![Editor ng checkout form na may mga field para sa pangalan at slug](/img/config/checkout-form-name-slug.png)

Ang mga form ay binubuo ng mga hakbang at field. Maaari kang magdagdag ng bagong hakbang sa pamamagitan ng pag-click sa **Add New Checkout Step**.

![Button na Add New Checkout Step](/img/config/checkout-form-add-step.png)

Sa unang tab ng modal window, punan ang nilalaman ng hakbang ng iyong form. Bigyan ito ng ID, pangalan, at paglalarawan. Ang mga item na ito ay kadalasang ginagamit sa loob ng system.

![Tab ng nilalaman ng checkout step na may ID, pangalan, at paglalarawan](/img/config/checkout-form-step-content.png)

Susunod, itakda ang visibility ng hakbang. Maaari kang pumili sa pagitan ng **Always show** , **Only show for logged in users** o **Only show for guests**.

![Mga opsyon sa visibility ng checkout step](/img/config/checkout-form-step-visibility.png)

Panghuli, i-configure ang estilo ng hakbang. Opsyonal ang mga field na ito.

![Configuration ng estilo ng checkout step](/img/config/checkout-form-step-style.png)

Ngayon, oras na para magdagdag ng mga field sa ating unang hakbang. I-click lang ang **Add New Field** at piliin ang uri ng seksyong gusto mo.

![Button na Add New Field](/img/config/checkout-form-add-field-button.png)![Dropdown para sa pagpili ng uri ng field](/img/config/checkout-form-field-type-dropdown.png)

Bawat field ay may iba’t ibang parameter na kailangang punan. Para sa unang entry na ito, pipiliin natin ang field na **Username**.

![Configuration ng field na Username](/img/config/checkout-form-username-content.png)![Mga parameter ng field na Username](/img/config/checkout-form-username-visibility.png)![Karagdagang setting ng field na Username](/img/config/checkout-form-username-style.png)

Maaari kang magdagdag ng kahit gaano karaming hakbang at field ayon sa kailangan mo. Para ipakita ang iyong mga produkto na pagpipilian ng iyong mga customer, gamitin ang field na Pricing Table. Kung gusto mong hayaan ang iyong mga kliyente na pumili ng template, idagdag ang field na Template Selection. At iba pa.

![Editor ng checkout form na may field para sa pagpili ng template](/img/config/checkout-form-with-template-field.png)

_**Tandaan:** Kung gagawa ka ng produkto pagkatapos gawin ang iyong checkout form, kakailanganin mong idagdag ang produkto sa seksyon ng Pricing table. Kung hindi mo ito idaragdag, hindi lalabas ang produkto sa iyong mga customer sa pahina ng pagpaparehistro._

_**Tandaan 2:** ang username, email, password, pamagat ng site, site URL, buod ng order, pagbabayad, at submit button ay mga mandatoryong field para gumawa ng checkout form._

Habang ginagawa mo ang iyong checkout form, maaari mong palaging gamitin ang button na Preview para makita kung paano makikita ng iyong mga kliyente ang form. Maaari ka ring magpalit-palit sa pagitan ng view bilang umiiral na user o bisita.

![Button na Preview sa editor ng checkout form](/img/config/checkout-form-preview-button.png)![Preview ng checkout form bilang bisita o umiiral na user](/img/config/checkout-form-preview-modal.png)

Panghuli, sa **Advanced Options** maaari mong i-configure ang mensahe para sa pahinang **Thank You**, magdagdag ng mga snippet para subaybayan ang mga conversion, magdagdag ng custom CSS sa iyong checkout form, o limitahan ito sa ilang partikular na bansa.

![Advanced Options na may Thank You page, pagsubaybay sa conversion, at custom CSS](/img/config/checkout-form-advanced.png)

Maaari mo ring manual na i-enable o i-disable ang iyong checkout form sa pamamagitan ng pag-toggle sa opsyong ito sa kanang column, o permanenteng burahin ang form.

![Active toggle at opsyon sa pagbura para sa checkout form](/img/config/checkout-form-active.png)

Huwag kalimutang i-save ang iyong checkout form!

![Button na Save Checkout Form](/img/config/checkout-form-save.png)

Para makuha ang shortcode ng iyong form, i-click ang **Generate Shortcode** at kopyahin ang resultang ipinapakita sa modal window.

![Modal ng Generate Shortcode na may shortcode na kokopyahin](/img/config/checkout-form-editor.png)

_**Tandaan:** Kakailanganin mong idagdag ang shortcode na ito sa iyong pahina ng pagpaparehistro upang maidagdag dito ang checkout form na ito._

## Paunang pagpili ng mga produkto at template sa pamamagitan ng mga parameter ng URL: {#pre-selecting-products-and-templates-via-url-parameters}

Kung gusto mong gumawa ng mga customized na pricing table para sa iyong mga produkto at paunang piliin sa checkout form ang produkto o template na pipiliin ng iyong customer mula sa iyong pricing table o pahina ng mga template, maaari mong gamitin ang mga parameter ng URL para rito.

### **Para sa mga plan:** {#for-plans}

Pumunta sa **Ultimate Multisite > Products > Select a plan**. Dapat mong makita ang button na **Click to copy Shareable Link** sa itaas ng pahina. Ito ang link na magagamit mo para paunang piliin ang partikular na plan na ito sa iyong checkout form.

![Pahina ng produkto na may button para sa shareable link](/img/config/products-list.png)

Tandaan na ang shareable link na ito ay valid lang para sa **Plans**. Hindi mo magagamit ang mga shareable link para sa mga package o serbisyo.

### Para sa mga template: {#for-templates}

Kung gusto mong paunang piliin ang mga template ng site sa iyong checkout form, maaari mong gamitin ang parameter na: **?template_id=X** sa URL ng iyong pahina ng pagpaparehistro. Kailangang palitan ang "X" ng **ID number ng site template**. Para makuha ang numerong ito, pumunta sa **Ultimate Multisite > Sites**.

I-click ang **Manage** sa ibaba mismo ng site template na gusto mong gamitin. Makikita mo ang SITE ID number. Gamitin lang ang numerong ito para sa partikular na site template na ito upang paunang mapili sa iyong checkout form. Sa aming kaso dito, ang parameter ng URL ay magiging **?template_id=2**.

![Listahan ng mga site na nagpapakita ng ID ng site template](/img/config/site-templates-list.png)

Sabihin nating ang ating network website ay [**www.mynetwork.com**](http://www.mynetwork.com) at ang ating pahina ng pagpaparehistro na may checkout form ay matatagpuan sa pahinang **/register**. Ang buong URL na may paunang napiling site template na ito ay magiging ganito: [**www.mynetwork.com/register/?template**](http://www.mynetwork.com/register/?template)**_id=2**.

At kung gusto mo, maaari mong paunang piliin ang parehong mga produkto at template sa iyong checkout form. Ang kailangan mo lang gawin ay kopyahin ang shareable link ng plan at i-paste ang parameter ng template sa dulo. Magmumukha itong ganito: [**www.mynetwork.com/register/premium-plan/?template**](http://www.mynetwork.com/register/premium-plan/?template)**_id=2**.
