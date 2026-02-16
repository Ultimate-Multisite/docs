---
title: Pag-customize ng Iyong Registration Form
sidebar_position: 17
_i18n_hash: 01f3aeee38a564a8b5c4676a229748cf
---
# Pag-customize ng iyong Registration Form

Para magkaroon ng kakaibang hitsura ang iyong network kumpara sa ibang SaaS na ginawa gamit ang WordPress platform, pinapayagan ka ng Ultimate Multisite na i-customize ang iyong registration at login pages gamit ang aming **Checkout Forms** feature.

Kahit na madali at flexible itong gamitin para mag-eksperimento ng iba't ibang paraan sa pag-convert ng mga bagong customer, kadalasang ginagamit ito para gumawa ng personalized na registration forms. Ang artikulong ito ay magpapakita sa iyo kung paano ito gawin.

## Login at registration pages:

Pagkatapos i-install ang Ultimate Multisite, awtomatiko itong gagawa ng custom na login at registration pages sa iyong main site. Maaari mong palitan ang mga default pages na ito anumang oras sa pamamagitan ng pagpunta sa iyong **Ultimate Multisite > Settings > Login & Registration** page.

![Login and Registration settings page](/img/config/settings-general.png)

Tingnan natin ang bawat isa sa mga opsyon na maaari mong i-customize sa **Login & Registration** page:

  * **Enable registration:** Ine-enable o dini-disable ng opsyong ito ang registration sa iyong network. Kapag naka-off ito, hindi makakapag-register at makakapag-subscribe ang iyong mga customer sa iyong mga produkto.

  * **Enable email verification:** Kapag naka-on ang opsyong ito, ang mga customer na nag-subscribe sa free plan o paid plan na may trial period ay makakatanggap ng verification email at kakailanganing i-click ang verification link bago magawa ang kanilang mga website.

  * **Default registration page:** Ito ang default page para sa registration. Kailangang naka-publish ang page na ito sa iyong website at may registration form (kilala rin bilang checkout form) - kung saan magsu-subscribe ang iyong mga kliyente sa iyong mga produkto. Maaari kang gumawa ng maraming registration pages at checkout forms hangga't gusto mo, tandaan lang na ilagay ang checkout form shortcode sa registration page, kung hindi ay hindi ito lalabas.

  * **Use custom login page:** Pinapayagan ka ng opsyong ito na gumamit ng customized login page, bukod sa default na wp-login.php page. Kapag naka-on ang opsyong ito, maaari mong piliin kung anong page ang gagamitin para sa login sa **Default login page** option (nasa ibaba lang).

  * **Obfuscate the original login url (wp-login.php)** : Kung gusto mong itago ang orihinal na login URL, maaari mong i-on ang opsyong ito. Kapaki-pakinabang ito para maiwasan ang brute-force attacks. Kapag naka-enable ang opsyong ito, magpapakita ang Ultimate Multisite ng 404 error kapag sinubukan ng user na i-access ang orihinal na wp-login.php link.

  * **Force synchronous site publication:** Pagkatapos mag-subscribe ng customer sa isang produkto sa network, kailangang i-convert ang bagong pending site sa isang tunay na network site. Nangyayari ang proseso ng pag-publish sa pamamagitan ng Job Queue, nang asynchronous. I-enable ang opsyong ito para pilitin ang publication na mangyari sa parehong request ng signup.

Ngayon, tingnan natin ang iba pang mga opsyon na may kaugnayan pa rin sa login at registration process. Nasa ilalim sila ng **Other options** sa parehong Login & registration page:

  * **Default role:** Ito ang role na magkakaroon ang iyong mga customer sa kanilang website pagkatapos ng signup process.

  * **Add users to the main site as well:** Kapag in-enable ang opsyong ito, idadagdag din ang user sa main site ng iyong network pagkatapos ng signup process. Kapag in-enable mo ito, may lalabas na opsyon para itakda ang **default role** ng mga user na ito sa iyong website.

  * **Enable multiple accounts:** Pinapayagan ang mga user na magkaroon ng accounts sa iba't ibang sites ng iyong network gamit ang parehong email address. Kapag naka-off ang opsyong ito, hindi makakapag-create ang iyong mga customer ng account sa ibang websites na tumatakbo sa iyong network gamit ang parehong email address.

At iyan na ang lahat ng mga opsyon na may kaugnayan sa login at registration na maaari mong i-customize! Huwag kalimutang i-save ang iyong settings pagkatapos mong mag-edit.

## Paggamit ng maraming registration forms:

Nag-aalok ang Ultimate Multisite 2.0 ng checkout form editor na nagpapahintulot sa iyo na gumawa ng maraming forms hangga't gusto mo, na may iba't ibang fields, produktong inaalok, at iba pa.

Parehong naka-embed sa shortcodes ang login at registration pages: **[wu_login_form]** sa login page at **[wu_checkout]** para sa registration page. Maaari mo pang i-customize ang registration page sa pamamagitan ng pag-build o paggawa ng checkout forms.

Para ma-access ang feature na ito, pumunta sa **Checkout Forms** menu, sa left side-bar.

![Checkout Forms menu in the sidebar](/img/config/checkout-forms-list.png)

Sa page na ito, makikita mo ang lahat ng checkout forms na mayroon ka.

Kung gusto mong gumawa ng bago, i-click lang ang **Add Checkout Form** sa itaas ng page.

Maaari kang pumili ng isa sa tatlong opsyon na ito bilang iyong starting point: single step, multi-step o blank. Pagkatapos, i-click ang **Go to the Editor**.

![Add Checkout Form with single step, multi-step, or blank options](/img/config/checkout-forms-list.png)

Bilang alternatibo, maaari mong i-edit o i-duplicate ang mga forms na mayroon ka na sa pamamagitan ng pag-click sa mga opsyon sa ilalim ng pangalan nito. Doon, makikita mo rin ang mga opsyon para kopyahin ang shortcode ng form o i-delete ang form.

![Checkout form hover actions with edit, duplicate, and delete](/img/config/checkout-form-hover-actions.png)

Kung pipiliin mo ang single step o multi-step, ang checkout form ay magiging pre-populated na ng mga basic steps para gumana ito. Pagkatapos, kung gusto mo, maaari kang magdagdag ng mga extra steps dito.

### Pag-edit ng Checkout Form:

Gaya ng nabanggit namin kanina, maaari kang gumawa ng checkout forms para sa iba't ibang layunin. Sa halimbawang ito, gagawa tayo ng registration form.

Pagkatapos mag-navigate sa checkout form editor, bigyan ng pangalan ang iyong form (na gagamitin lang para sa internal reference) at isang slug (ginagamit para gumawa ng shortcodes, halimbawa).

![Checkout form editor with name and slug fields](/img/config/checkout-form-editor.png)

Binubuo ng steps at fields ang mga forms. Maaari kang magdagdag ng bagong step sa pamamagitan ng pag-click sa **Add New Checkout Step**.

![Add New Checkout Step button](/img/config/checkout-form-add-step.png)

Sa unang tab ng modal window, punan ang content ng step ng iyong form. Bigyan ito ng ID, pangalan at description. Kadalasang ginagamit ang mga ito para sa internal purposes.

![Checkout step content tab with ID, name, and description](/img/config/checkout-form-step.png)

Susunod, itakda ang visibility ng step. Maaari kang pumili sa pagitan ng **Always show**, **Only show for logged in users** o **Only show for guests**.

![Checkout step visibility options](/img/config/checkout-form-step.png)

Panghuli, i-configure ang style ng step. Opsyonal ang mga field na ito.

![Checkout step style configuration](/img/config/checkout-form-step.png)

Ngayon, oras na para magdagdag ng fields sa ating unang step. I-click lang ang **Add New Field** at piliin ang uri ng section na gusto mo.

![Add New Field button](/img/config/checkout-form-editor.png)![Field type selection dropdown](/img/config/checkout-form-step.png)

Ang bawat field ay may iba't ibang parameters na kailangang punan. Para sa unang entry na ito, pipiliin natin ang **Username** field.

![Username field configuration](/img/config/checkout-form-step.png)![Username field parameters](/img/config/checkout-form-step.png)![Username field additional settings](/img/config/checkout-form-step.png)

Maaari kang magdagdag ng maraming steps at fields hangga't kailangan mo. Para ipakita ang iyong mga produkto para mapili ng iyong mga customer, gamitin ang Pricing Table field. Kung gusto mong hayaan ang iyong mga kliyente na pumili ng template, idagdag ang Template Selection field. At iba pa.

_**Paalala:** Kung gagawa ka ng produkto pagkatapos mong gumawa ng checkout form, kailangan mong idagdag ang produkto sa Pricing table section. Kung hindi mo ito idadagdag, hindi lalabas ang produkto sa iyong mga customer sa registration page._

_**Paalala 2:** Ang username, email, password, site title, site URL, order summary, payment, at submit button ay mandatory fields para makagawa ng checkout form._

Habang ginagawa mo ang iyong checkout form, maaari mong gamitin ang Preview button anumang oras para makita kung paano makikita ng iyong mga kliyente ang form. Maaari ka ring magpalit sa pagitan ng view bilang existing user o visitor.

![Preview button on the checkout form editor](/img/config/checkout-form-editor.png)![Checkout form preview as visitor or existing user](/img/config/checkout-form-editor.png)

Panghuli, sa **Advanced Options** maaari mong i-configure ang mensahe para sa **Thank You** page, magdagdag ng snippets para mag-track ng conversions, magdagdag ng custom CSS sa iyong checkout form o i-restrict ito sa ilang partikular na bansa.

![Advanced Options with Thank You page, conversion tracking, and custom CSS](/img/config/checkout-form-advanced.png)

Maaari mo ring mano-manong i-enable o i-disable ang iyong checkout form sa pamamagitan ng pag-toggle ng opsyong ito sa kanang column, o permanenteng i-delete ang form.

![Active toggle and delete option for checkout form](/img/config/checkout-form-active.png)

Huwag kalimutang i-save ang iyong checkout form!

![Save Checkout Form button](/img/config/checkout-form-save.png)

Para makuha ang shortcode ng iyong form, i-click ang **Generate Shortcode** at kopyahin ang resulta na ipinapakita sa modal window.

![Generate Shortcode modal with shortcode to copy](/img/config/checkout-form-editor.png)

_**Paalala:** Kailangan mong idagdag ang shortcode na ito sa iyong registration page para maidagdag ang checkout form na ito dito._

## Pre-selecting ng mga produkto at templates gamit ang URL parameters:

Kung gusto mong gumawa ng customized pricing tables para sa iyong mga produkto at i-pre-select sa checkout form ang produkto o template na pinili ng iyong customer mula sa iyong pricing table o templates page, maaari mong gamitin ang URL parameters para dito.

### **Para sa plans:**

Pumunta sa **Ultimate Multisite > Products > Select a plan**. Dapat makita mo ang **Click to copy Shareable Link** button sa itaas ng page. Ito ang link na magagamit mo para i-pre-select ang partikular na plan na ito sa iyong checkout form.

![Product page with shareable link button](/img/config/products-list.png)

Tandaan na ang shareable link na ito ay valid lang para sa **Plans**. Hindi mo magagamit ang shareable links para sa packages o services.

### Para sa templates:

Kung gusto mong i-pre-select ang site templates sa iyong checkout form, maaari mong gamitin ang parameter: **?template_id=X** sa URL ng iyong registration page. Ang "X" ay kailangang palitan ng **site template ID number**. Para makuha ang numerong ito, pumunta sa **Ultimate Multisite > Sites**.

I-click ang **Manage** sa ilalim ng site template na gusto mong gamitin. Makikita mo ang SITE ID number. Gamitin lang ang numerong ito para i-pre-select ang partikular na site template na ito sa iyong checkout form. Sa ating kaso dito, ang URL parameter ay magiging **?template_id=2**.

![Sites list showing site template ID](/img/config/site-templates-list.png)

Sabihin nating ang ating network website ay [**www.mynetwork.com**](http://www.mynetwork.com) at ang ating registration page na may checkout form ay nasa **/register** page. Ang buong URL na may pre-selected na site template ay magiging ganito: [**www.mynetwork.com/register/?template**](http://www.mynetwork.com/register/?template)**_id=2**.

At kung gusto mo, maaari mong i-pre-select ang parehong products at templates sa iyong checkout form. Ang kailangan mo lang gawin ay kopyahin ang shareable link ng plan at i-paste ang template parameter sa dulo. Magiging ganito ang hitsura: [**www.mynetwork.com/register/premium-plan/?template**](http://www.mynetwork.com/register/premium-plan/?template)**_id=2**.
