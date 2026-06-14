---
title: Pag-customize ng Iyong Registration Form
sidebar_position: 17
_i18n_hash: 13f72671d55f48becd6bd89f6571f111
---
# Pag-customize ng iyong Registration Form

Para maging kakaiba ang itsura ng network mo kumpara sa lahat ng ibang SaaS na binuo sa WordPress platform, pinapayagan ka ng Ultimate Multisite na i-customize ang iyong registration at login pages gamit ang aming **Checkout Forms** feature.

Bagama't madali at flexible ito para mag-eksperimento sa iba't ibang paraan habang sinusubukan mong ma-convert ang mga bagong customer, pangunahing ginagamit ito para gumawa ng personalized na registration forms. Ang artikulong ito ay naglalayong ipakita sa iyo kung paano mo ito magagawa.

## Mga pahina ng Login at Registration:

Pagkatapos i-install ang Ultimate Multisite, awtomatikong gagana ito ng mga custom login at registration pages sa iyong main site. Maaari mong baguhin ang mga default na page na ito anumang oras sa pamamagitan ng pagpunta sa iyong **Ultimate Multisite > Settings > Login & Registration** page.

![Login and Registration settings page](/img/config/settings-general.png)

Narito ang buong tingin sa login at registration settings page:

![Login and Registration settings full page](/img/config/settings-login-registration-full.png)

Tingnan natin ang bawat opsyon na maaari mong i-customize sa **Login & Registration** page:

  * **Enable registration:** Ang opsyong ito ay magpapagana o magpapatigil ng registration sa iyong network. Kung ito ay naka-off, hindi makakapag-register at makakapasubscribe ang iyong mga customer sa iyong mga produkto.

  * **Enable email verification:** Kung naka-on ang opsyong ito, ang mga customer na nag-subscribe para sa libreng plano o may bayad na plano na may trial period ay tatanggap ng isang email para sa verification at kailangan nilang i-click ang verification link para mabuo ang kanilang mga website.

* **Default registration page:** Ito ang default na pahina para sa pagrehistro. Kailangan mong i-publish itong pahinang ito sa iyong website at dapat mayroon itong registration form (kilala rin bilang checkout form) - kung saan magsasubscribe ang iyong mga kliyente sa iyong mga produkto. Maaari kang gumawa ng kahit anong dami ng registration page at checkout form na gusto mo, pero tandaan lang na ilagay ang checkout form shortcode sa registration page, kung hindi, hindi ito lalabas.

  * **Gamitin ang custom login page:** Ang opsyong ito ay nagbibigay-daan sa iyo na gumamit ng isang naka-customize na login page, maliban sa default na wp-login.php page. Kung i-toggle mo itong on, maaari mong piliin kung aling pahina ang gagamitin para sa login sa opsyon na **Default login page** (nasa ibaba nito).

  * **I-obfuscate ang orihinal na URL ng login (wp-login.php)**: Kung gusto mong itago ang orihinal na URL ng login, maaari mong i-toggle itong on. Nakakatulong ito para maiwasan ang brute-force attacks. Kung naka-enable ang opsyong ito, magpapakita ang Ultimate Multisite ng 404 error kapag sinubukan ng user na ma-access ang orihinal na wp-login.php link

  * **Pilitin ang synchronous site publication:** Pagkatapos mag-subscribe ang isang customer sa isang produkto sa network, ang bagong pending site ay kailangang gawing aktwal na network site. Ang proseso ng pag-publish ay nangyayari sa pamamagitan ng Job Queue, asynchronoso. I-enable mo itong opsyon para pilitin ang pag-publish na mangyari sa parehong request kasabay ng signup.

Ngayon, tingnan natin ang ibang mga opsyon na may kaugnayan pa rin sa proseso ng login at registration. Nasa ibaba ito ng **Other options** sa parehong Login & registration page:

  * **Default role:** Ito ang role na magkakaroon ang iyong mga customer sa kanilang website pagkatapos ng proseso ng signup.

* **I-enable ang Jumper:** Binibigyan nito ng shortcut na Jumper sa admin area. Ang Jumper ay nagpapahintulot sa mga administrator na mabilis na lumipat sa mga screen ng Ultimate Multisite, network objects, at iba pang sinusuportahang destinasyon nang hindi kailangang mag-browse sa bawat menu. Patayin ito kung gusto mong itago ang mabilis na tool na ito para sa navigation mula sa admin interface.

* **Idagdag din ang mga user sa main site:** Ang pag-enable ng opsyong ito ay magdadagdag din ng user sa main site ng iyong network pagkatapos ng proseso ng signup. Kung i-enable mo ang opsyong ito, lalabas din ang opsyon na itakda ang **default role** ng mga users na ito sa iyong website sa ibaba nito.

* **I-enable ang maraming account:** Pinapayagan nito ang mga user na magkaroon ng mga account sa iba't ibang site ng iyong network gamit ang parehong email address. Kung naka-off ang opsyong ito, hindi makakagawa ng account ang iyong mga customer sa ibang websites na tumatakbo sa iyong network na may parehong email address.

At iyan lang ang mga opsyon na nauugnay sa login at registration na maaari mong i-customize! Huwag kalimutang i-save ang iyong settings pagkatapos mong matapos mag-edit.

## Paggamit ng maraming registration forms:

Nag-aalok ang Ultimate Multisite 2.0 ng checkout form editor na nagpapahintulot sa iyo na gumawa ng kahit anong dami ng forms, na may iba't ibang fields, mga produkto na inaalok, atbp.

Parehong naka-embed sa login page ang shortcodes: **[wu_login_form]** para sa login page at **[wu_checkout]** para sa registration page. Maaari mo pang i-customize ang registration page sa pamamagitan ng paggawa o paglikha ng checkout forms.

Para ma-access ang feature na ito, pumunta sa menu na **Checkout Forms**, sa kaliwang sidebar.

![Checkout Forms menu in the sidebar](/img/config/checkout-forms-list.png)

Sa pahinang ito, makikita mo ang lahat ng iyong mga checkout forms.

Kung gusto mong gumawa ng bago, i-click lang ang **Add Checkout Form** sa itaas ng page.

Maaari kang pumili ng isa sa tatlong opsyon na ito bilang iyong panimula: single step (iisang hakbang), multi-step (maraming hakbang) o blank (walang laman). Pagkatapos, i-click mo para **Magpunta sa Editor**.

![Add Checkout Form with single step, multi-step, or blank options](/img/config/checkout-forms-list.png)

Bilang alternatibo, maaari mong i-edit o kopyahin ang mga form na mayroon ka na sa pamamagitan ng pag-click sa mga opsyon sa ilalim ng pangalan nito. Diyan mo rin makikita ang mga opsyon para kopyahin ang shortcode ng form o burahin ang form.

![Checkout form hover actions with edit, duplicate, and delete](/img/config/checkout-form-hover-actions.png)

Kung pipiliin mo ang single step o multi-step, ang checkout form ay awtomatikong mayroon nang mga pangunahing hakbang para gumana ito. Pagkatapos, kung gusto mo, maaari kang magdagdag ng karagdagang mga hakbang dito.

### Pag-edit ng Checkout Form:

Gaya ng nabanggit natin kanina, maaari kang gumawa ng checkout forms para sa iba't ibang layunin. Sa halimbawang ito, gagawin natin ang isang registration form.

Pagkatapos mong pumunta sa checkout form editor, bigyan mo ng pangalan ang iyong form (na gagamitin lang para sa internal reference) at slug (ginagamit para gumawa ng shortcodes, halimbawa).

![Checkout form editor with name and slug fields](/img/config/checkout-form-editor.png)

Ang mga form ay binubuo ng mga step at field. Maaari kang magdagdag ng bagong step sa pamamagitan ng pag-click sa **Add New Checkout Step**.

![Add New Checkout Step button](/img/config/checkout-form-add-step.png)

Sa unang tab ng modal window, punan ang nilalaman ng step ng iyong form. Bigyan ito ng ID, pangalan at deskripsyon. Ang mga item na ito ay karaniwang ginagamit sa loob ng sistema.

![Checkout step content tab with ID, name, and description](/img/config/checkout-form-step-content.png)

Susunod, itakda ang visibility (pagpapakita) ng step. Maaari kang pumili sa pagitan ng **Always show** (Laging ipakita), **Only show for logged in users** (Ipakita lamang para sa mga naka-log in na user), o **Only show for guests** (Ipakita lamang para sa mga bisita).

![Checkout step visibility options](/img/config/checkout-form-step-visibility.png)

Sa huli, i-configure ang istilo ng step. Ang mga ito ay optional na field.

![Checkout step style configuration](/img/config/checkout-form-step-style.png)

Ngayon, oras na para magdagdag ng mga field sa ating unang step. I-click lang ang **Add New Field** at piliin ang uri ng section na gusto mo.

![Add New Field button](/img/config/checkout-form-step-with-fields.png)![Field type selection dropdown](/img/config/checkout-form-field-type-dropdown.png)

Bawat field ay may iba't ibang parameters na kailangang punan. Para sa unang pagpasok na ito, pipiliin natin ang **Username** field.

![Username field configuration](/img/config/checkout-form-username-content.png)![Username field parameters](/img/config/checkout-form-username-visibility.png)![Username field additional settings](/img/config/checkout-form-username-style.png)

Maaari kang magdagdag ng anong steps at fields ang kailangan mo. Para ipakita ang iyong mga produkto para pumili ang iyong mga customer, gamitin ang Pricing Table field. Kung gusto mong hayaan ang iyong mga kliyente na pumili ng template, magdagdag ng Template Selection field. At iba pa.

_**Tanda:** Kung gagawa ka ng product pagkatapos gumawa ng checkout form mo, kailangan mong idagdag ang product sa pricing table section. Kung hindi mo ito idadagdag, hindi lalabas ang product sa mga customer mo sa registration page._

_**Tanda 2:** Ang username, email, password, site title, site URL, order summary, payment, at submit button ay mga mandatory field para makagawa ng checkout form._

Habang nagtatrabaho ka sa iyong checkout form, maaari mo ring gamitin ang Preview button para makita kung paano makikita ito ng iyong mga kliyente. Maaari ka ring magpalit-palit sa pagtingin bilang isang existing user o visitor.

Sa **Advanced Options**, maaari mong i-configure ang mensahe para sa pahinang **Thank You**, magdagdag ng mga snippet para subaybayan ang conversions, magdagdag ng custom CSS sa iyong checkout form, o limitahan ito sa ilang mga bansa.

Maa mo ring i-enable o i-disable nang mano-mano ang iyong checkout form sa pamamagitan ng pag-toggle nito sa kanang column, o permanenteng burahin ang form.

Huwag kalimutang i-save ang iyong checkout form!

Para makuha ang shortcode ng iyong form, i-click ang **Generate Shortcode** at kopyahin ang resulta na ipinapakita sa modal window.

_**Tanda:** Kailangan mong idagdag ang shortcode na ito sa iyong registration page para magawa itong checkout form._

## Pagpili ng mga produkto at template gamit ang URL parameters:

Kung gusto mong gumawa ng mga customized na pricing table para sa iyong mga produkto at i-pre-select sa checkout form ang produkto o template na pipiliin ng customer mula sa iyong pricing table o templates page, maaari kang gumamit ng URL parameters para dito.

### **Para sa mga plano (plans):**

Pumunta sa **Ultimate Multisite > Products > Select a plan**. Dapat mong makikita ang button na **Click to copy Shareable Link** sa itaas ng pahina. Ito ang link na maaari mong gamitin para i-pre-select ang partikular na plan na ito sa iyong checkout form.

![Product page with shareable link button](/img/config/products-list.png)

Tandaan na ang shareable link na ito ay para lamang sa mga **Plans**. Hindi mo magagamit ang shareable links para sa mga package o serbisyo.

### Para sa mga template:

Kung gusto mong i-pre-select ang site templates sa iyong checkout form, maaari mong gamitin ang parameter na: **?template_id=X** sa URL ng iyong registration page. Ang "X" ay kailangang palitan ng **site template ID number**. Upang makuha ang numerong ito, pumunta ka sa **Ultimate Multisite > Sites**.

I-click ang **Manage** sa ibaba mismo ng site template na gusto mong gamitin. Makikita mo doon ang SITE ID number. Gamitin mo lang ang numerong ito para sa partikular na site template na iyon upang maging pre-selected sa iyong checkout form. Sa ating kaso rito, ang URL parameter ay magiging **?template_id=2**.

![Sites list showing site template ID](/img/config/site-templates-list.png)

Sabihin nating ang network website natin ay [**www.mynetwork.com**](http://www.mynetwork.com) at ang ating registration page na may checkout form ay nasa **/register** page. Ang buong URL na may pre-selected site template ay magmumukhang [**www.mynetwork.com/register/?template**](http://www.mynetwork.com/register/?template)**_id=2**.

At kung gusto mo, maaari mong i-pre-select ang parehong produkto at templates sa iyong checkout form. Ang kailangan mo lang gawin ay kopyahin ang shareable link ng plan at i-paste ang template parameter sa dulo. Magmumukha itong [**www.mynetwork.com/register/premium-plan/?template**](http://www.mynetwork.com/register/premium-plan/?template)**_id=2**.
