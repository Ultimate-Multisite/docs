---
title: Pagpapasadya ng Iyong Form ng Pagpaparehistro
sidebar_position: 17
_i18n_hash: 3dada0e900a1f46d950e1815ae8f5085
---
# Pag-customize ng iyong Form sa Pagpaparehistro

Upang magmukhang natatangi ang iyong network kumpara sa lahat ng iba pang SaaS na binuo sa WordPress platform, pinapayagan ka ng Ultimate Multisite na i-customize ang iyong mga pahina ng pagpaparehistro at pag-login gamit ang aming feature na **Mga Form sa Pag-checkout**.

Bagama’t madali at flexible ang mga ito para sumubok ng iba’t ibang paraan kapag sinusubukang i-convert ang mga bagong customer, kadalasang ginagamit ang mga ito upang gumawa ng mga personalized na form sa pagpaparehistro. Layunin ng artikulong ito na ipakita kung paano mo ito magagawa.

## Mga pahina ng pag-login at pagpaparehistro:

Sa pag-install ng Ultimate Multisite, awtomatiko itong gumagawa ng mga custom na pahina ng pag-login at pagpaparehistro sa iyong pangunahing website. Maaari mong baguhin ang mga default na pahinang ito anumang oras sa pamamagitan ng pagpunta sa iyong pahina na **Ultimate Multisite > Mga Setting > Pag-login at Pagpaparehistro**.

![Pahina ng mga setting ng Pag-login at Pagpaparehistro](/img/config/settings-general.png)

Narito ang buong view ng pahina ng mga setting ng pag-login at pagpaparehistro:

![Buong pahina ng mga setting ng Pag-login at Pagpaparehistro](/img/config/settings-login-registration-full.png)

Tingnan natin ang bawat isa sa mga opsyon na maaari mong i-customize sa pahinang **Pag-login at Pagpaparehistro**:

  * **Paganahin ang pagpaparehistro:** Paganahin o hindi paganahin ng opsyong ito ang pagpaparehistro sa iyong network. Kung naka-off ito, hindi makakapagrehistro at makakapag-subscribe ang iyong mga customer sa iyong mga produkto.

  * **Paganahin ang beripikasyon sa email:** Kung naka-on ang opsyong ito, ang mga customer na mag-subscribe sa isang libreng plano o isang bayad na plano na may trial period ay makakatanggap ng verification email at kakailanganing i-click ang verification link upang magawa ang kanilang mga website.

  * **Default na pahina ng pagpaparehistro:** Ito ang default na pahina para sa pagpaparehistro. Kailangang naka-publish ang pahinang ito sa iyong website at may form sa pagpaparehistro (kilala rin bilang checkout form) - kung saan mag-subscribe ang iyong mga kliyente sa iyong mga produkto. Maaari kang gumawa ng kahit ilang pahina ng pagpaparehistro at checkout form ayon sa gusto mo, tandaan lamang na ilagay ang shortcode ng checkout form sa pahina ng pagpaparehistro, kung hindi ay hindi ito lalabas.

  * **Gumamit ng custom na pahina ng pag-login:** Pinapayagan ka ng opsyong ito na gumamit ng naka-customize na pahina ng pag-login, maliban sa default na pahinang wp-login.php. Kung naka-on ang opsyong ito, maaari mong piliin kung aling pahina ang gagamitin para sa pag-login sa opsyong **Default na pahina ng pag-login** (nasa ibaba mismo).

  * **Itago ang orihinal na login url (wp-login.php)** : Kung gusto mong itago ang orihinal na login URL, maaari mong i-on ang opsyong ito. Kapaki-pakinabang ito upang maiwasan ang mga brute-force attack. Kung naka-enable ang opsyong ito, magpapakita ang Ultimate Multisite ng 404 error kapag sinubukan ng isang user na i-access ang orihinal na link na wp-login.php

  * **Pilitin ang sabayang pag-publish ng website:** Pagkatapos mag-subscribe ang isang customer sa isang produkto sa isang network, kailangang i-convert ang bagong pending na website sa isang tunay na network site. Nangyayari ang proseso ng pag-publish sa pamamagitan ng Job Queue, nang asynchronously. Paganahin ang opsyong ito upang piliting mangyari ang pag-publish sa parehong request gaya ng signup.

Ngayon, tingnan natin ang iba pang opsyon na may kaugnayan pa rin sa proseso ng pag-login at pagpaparehistro. Nasa ibaba mismo ang mga ito ng **Iba pang opsyon** sa parehong pahina ng Pag-login at pagpaparehistro:

  * **Default na role:** Ito ang role na magkakaroon ang iyong mga customer sa kanilang website pagkatapos ng proseso ng signup.

  * **Paganahin ang Jumper:** Pinapagana ang Jumper shortcut sa admin area. Pinapayagan ng Jumper ang mga administrator na mabilis na lumipat sa mga screen ng Ultimate Multisite, mga object ng network, at iba pang suportadong destinasyon nang hindi kinakailangang mag-browse sa bawat menu. I-off ito kung mas gusto mong itago ang mabilis na tool sa nabigasyon na iyon mula sa admin interface.

  * **Idagdag din ang mga user sa pangunahing website:** Kapag pinagana ang opsyong ito, idaragdag din ang user sa pangunahing website ng iyong network pagkatapos ng proseso ng signup. Kung pinagana mo ang opsyong ito, lalabas din sa ibaba mismo ang opsyon upang itakda ang **default na role** ng mga user na ito sa iyong website.

  * **Paganahin ang maraming account:** Payagan ang mga user na magkaroon ng mga account sa iba’t ibang website ng iyong network gamit ang parehong email address. Kung naka-off ang opsyong ito, hindi makakagawa ng account ang iyong mga customer sa iba pang website na tumatakbo sa iyong network gamit ang parehong email address.

At iyon na ang lahat ng opsyong may kaugnayan sa pag-login at pagpaparehistro na maaari mong i-customize! Huwag kalimutang i-save ang iyong mga setting pagkatapos mong matapos i-edit ang mga ito.

## Paggamit ng maraming form sa pagpaparehistro:

Nag-aalok ang Ultimate Multisite 2.0 ng checkout form editor na nagpapahintulot sa iyong gumawa ng kahit ilang form ayon sa gusto mo, na may iba’t ibang field, mga produktong iniaalok, atbp.

Parehong naka-embed gamit ang mga shortcode ang mga pahina ng pag-login at pagpaparehistro: **[wu_login_form]** sa pahina ng pag-login at**[wu_checkout]** para sa pahina ng pagpaparehistro. Maaari mo pang i-customize ang pahina ng pagpaparehistro sa pamamagitan ng pagbuo o paggawa ng mga checkout form.

Upang ma-access ang feature na ito, pumunta sa menu na **Mga Form sa Pag-checkout**, sa kaliwang side-bar.

![Menu ng Mga Form sa Pag-checkout sa sidebar](/img/config/checkout-forms-list.png)

Sa pahinang ito, makikita mo ang lahat ng checkout form na mayroon ka.

Kung gusto mong gumawa ng bago, i-click lamang ang **Magdagdag ng Checkout Form** sa itaas ng pahina.

Maaari kang pumili ng isa sa tatlong opsyong ito bilang iyong panimulang punto: single step, multi-step, o blank. Pagkatapos, i-click ang **Pumunta sa Editor**.

![Magdagdag ng Checkout Form na may mga opsyong single step, multi-step, o blank](/img/config/checkout-forms-list.png)

Bilang alternatibo, maaari mong i-edit o i-duplicate ang mga form na mayroon ka na sa pamamagitan ng pag-click sa mga opsyon sa ibaba ng pangalan nito. Doon, makikita mo rin ang mga opsyon upang kopyahin ang shortcode ng form o tanggalin ang form.

![Mga hover action ng checkout form na may edit, duplicate, at delete](/img/config/checkout-form-hover-actions.png)

Kung pipiliin mo ang single step o multi-step, ang checkout form ay naka-pre-populate na ng mga pangunahing hakbang upang gumana ito. Pagkatapos, kung gusto mo, maaari kang magdagdag ng mga karagdagang hakbang dito.

### Pag-edit ng Checkout Form:

Gaya ng nabanggit namin dati, maaari kang gumawa ng mga checkout form para sa iba’t ibang layunin. Sa halimbawang ito, gagawa tayo sa isang form sa pagpaparehistro.

Pagkatapos pumunta sa checkout form editor, bigyan ang iyong form ng pangalan (na gagamitin lamang para sa panloob na sanggunian) at slug (ginagamit upang gumawa ng mga shortcode, halimbawa).

![Editor ng checkout form na may mga field ng pangalan at slug](/img/config/checkout-form-name-slug.png)

Ang mga form ay binubuo ng mga hakbang at field. Maaari kang magdagdag ng bagong hakbang sa pamamagitan ng pag-click sa **Add New Checkout Step**.

![Button na Add New Checkout Step](/img/config/checkout-form-add-step.png)

Sa unang tab ng modal window, punan ang nilalaman ng hakbang ng iyong form. Bigyan ito ng ID, pangalan, at paglalarawan. Kadalasan, ginagamit ang mga item na ito sa loob ng system.

![Tab ng nilalaman ng checkout step na may ID, pangalan, at paglalarawan](/img/config/checkout-form-step-content.png)

Susunod, itakda ang visibility ng hakbang. Maaari kang pumili sa pagitan ng **Always show** , **Only show for logged in users** o **Only show for guests**.

![Mga opsyon sa visibility ng checkout step](/img/config/checkout-form-step-visibility.png)

Panghuli, i-configure ang estilo ng hakbang. Opsyonal ang mga field na ito.

![Configuration ng estilo ng checkout step](/img/config/checkout-form-step-style.png)

Ngayon, oras na para magdagdag ng mga field sa ating unang hakbang. I-click lang ang **Add New Field** at piliin ang uri ng seksyong gusto mo.

![Button na Add New Field](/img/config/checkout-form-add-field-button.png)![Dropdown ng pagpili ng uri ng field](/img/config/checkout-form-field-type-dropdown.png)

Bawat field ay may iba’t ibang parameter na kailangang punan. Para sa unang entry na ito, pipiliin natin ang field na **Username**.

![Configuration ng field na Username](/img/config/checkout-form-username-content.png)![Mga parameter ng field na Username](/img/config/checkout-form-username-visibility.png)![Karagdagang setting ng field na Username](/img/config/checkout-form-username-style.png)

Maaari kang magdagdag ng maraming hakbang at field ayon sa kailangan mo. Para ipakita ang iyong mga produkto na maaaring pagpilian ng iyong mga customer, gamitin ang field na Pricing Table. Kung gusto mong hayaang pumili ng template ang iyong mga client, idagdag ang field na Template Selection. At iba pa.

![Editor ng checkout form na may field na template selection](/img/config/checkout-form-with-template-field.png)

_**Tala:** Kung gagawa ka ng produkto pagkatapos gawin ang iyong checkout form, kakailanganin mong idagdag ang produkto sa seksyong Pricing table. Kung hindi mo ito idaragdag, hindi lalabas ang produkto sa iyong mga customer sa registration page._

_**Tala 2:** Ang username, email, password, pamagat ng site, site URL, buod ng order, bayad, at submit button ay mga mandatoryong field para gumawa ng checkout form._

Habang ginagawa mo ang iyong checkout form, maaari mong gamitin anumang oras ang Preview button para makita kung paano makikita ng iyong mga client ang form. Maaari ka ring magpalit sa pagitan ng view bilang umiiral na user o bisita.

![Preview button sa editor ng checkout form](/img/config/checkout-form-preview-button.png)![Preview ng checkout form bilang bisita o umiiral na user](/img/config/checkout-form-preview-modal.png)

Panghuli, sa **Advanced Options** maaari mong i-configure ang mensahe para sa pahinang **Thank You**, magdagdag ng mga snippet para subaybayan ang conversions, magdagdag ng custom na CSS sa iyong checkout form, o limitahan ito sa ilang bansa.

![Advanced Options na may Thank You page, conversion tracking, at custom CSS](/img/config/checkout-form-advanced.png)

Maaari mo ring manual na i-enable o i-disable ang iyong checkout form sa pamamagitan ng pag-toggle sa opsyong ito sa kanang column, o permanenteng burahin ang form.

![Active toggle at opsyon sa pagbura para sa checkout form](/img/config/checkout-form-active.png)

Huwag kalimutang i-save ang iyong checkout form!

![Button na Save Checkout Form](/img/config/checkout-form-save.png)

Para makuha ang shortcode ng iyong form, i-click ang **Generate Shortcode** at kopyahin ang resultang ipinapakita sa modal window.

![Modal ng Generate Shortcode na may shortcode na kokopyahin](/img/config/checkout-form-editor.png)

_**Tala:** Kakailanganin mong idagdag ang shortcode na ito sa iyong registration page upang maidagdag dito ang checkout form na ito._

## Paunang pagpili ng mga produkto at template gamit ang mga URL parameter:

Kung gusto mong gumawa ng mga naka-customize na pricing table para sa iyong mga produkto at paunang piliin sa checkout form ang produkto o template na pipiliin ng iyong customer mula sa iyong pricing table o templates page, maaari kang gumamit ng mga URL parameter para rito.

### **Para sa mga plan:**

Pumunta sa **Ultimate Multisite > Products > Select a plan**. Dapat mong makita ang button na **Click to copy Shareable Link** sa itaas ng page. Ito ang link na maaari mong gamitin para paunang piliin ang partikular na plan na ito sa iyong checkout form.

![Page ng produkto na may shareable link button](/img/config/products-list.png)

Tandaan na valid lang ang shareable link na ito para sa **Plans**. Hindi mo magagamit ang mga shareable link para sa mga package o serbisyo.

### Para sa mga template:

Kung gusto mong paunang piliin ang mga template ng site sa iyong checkout form, maaari mong gamitin ang parameter na: **?template_id=X** sa URL ng iyong registration page. Kailangang palitan ang "X" ng **numero ng ID ng site template**. Para makuha ang numerong ito, pumunta sa **Ultimate Multisite > Sites**.

I-click ang **Manage** sa ibaba mismo ng site template na gusto mong gamitin. Makikita mo ang SITE ID number. Gamitin lang ang numerong ito para sa partikular na site template na ito upang ito ay paunang mapili sa iyong checkout form. Sa halimbawa natin dito, ang URL parameter ay magiging **?template_id=2**.

![Listahan ng mga site na nagpapakita ng ID ng site template](/img/config/site-templates-list.png)

Sabihin nating ang network website natin ay [**www.mynetwork.com**](http://www.mynetwork.com) at ang ating registration page na may checkout form ay matatagpuan sa pahinang **/register**. Ang buong URL na may paunang napiling site template na ito ay magiging ganito: [**www.mynetwork.com/register/?template**](http://www.mynetwork.com/register/?template)**_id=2**.

At kung gusto mo, maaari mong paunang piliin pareho ang mga produkto at template sa iyong checkout form. Ang kailangan mo lang gawin ay kopyahin ang shareable link ng plan at i-paste ang template parameter sa dulo. Magiging ganito ito: [**www.mynetwork.com/register/premium-plan/?template**](http://www.mynetwork.com/register/premium-plan/?template)**_id=2**.
