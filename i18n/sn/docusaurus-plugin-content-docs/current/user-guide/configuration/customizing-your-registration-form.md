---
title: Kutanga/Kubatidza Fomu Yako
sidebar_position: 17
_i18n_hash: 13f72671d55f48becd6bd89f6571f111
---
# Kutiwe kuvaingira (Registration Form)

Kuti chinekuura chinhu chako chinotevera nechinotevera nechimwe chekare zvose zvinotevera munzira yakachengetedza (SaaS) dziri munzira ye WordPress, Ultimate Multisite inakuita kuti uone kuvaunira uye kupfungwa kwakare (login pages) nekuti tinoita iwe **Checkout Forms** feature.

Kuti zvinhu izvi zvinotevera nechinotevera chinogona kutamba nezve nzira dzakasiyana-siyana dzinotevera kuti uone kuvaunira vatsasa vakachengetedza, zvichine zvinhu zviri kudzidziswa nekuti kunge kuita zvinhu zvakasiyana-siyana mumwe munzira wekuti unenge ukwanisa kuita. Asi, zvinotevera zvakawanda zvinoshandiswa kuti uone kuita forms dzinotevera (personalized registration forms). Iri chine chokwadi kuti iri dziri kudzidziswa sei kunoita iye.

## Kupfungwa kwakare nekuvaunira:

Panguva inoperekedzwa Ultimate Multisite, inogona kuita zvinhu hizi zvinotevera kupfungwa kwakare (login pages) nekuti tinokupa nzvimbo yakachengetedza (custom login and registration pages) munzira yako yakanaka. Unogona kungeura iye dziri dzinotevera mazuva ose nekuenda pano: **Ultimate Multisite > Settings > Login & Registration**.

![Login and Registration settings page](/img/config/settings-general.png)

Iri chine zvinhu zvinotevera pane kupfungwa kwakare nekuti unogona kuita munzira yakanaka:

![Login and Registration settings full page](/img/config/settings-login-registration-full.png)

Tiri kuona iye dzose dzinotevera dzinogone kutamba panei mu **Login & Registration** page:

  * **Enable registration:** Iyi nzira inogona kuita kana inogona kungekuita kuvaunira munzira yako yakachengetedza. Kana inokwanisa, vatsasa vakako havanzi kuvaunira uye kupfungwa zvinhu dzakasiyana-siyana dzinotevera (subscribe) zvinotevera.

  * **Enable email verification:** Kana iri nzira inogona kungekuita, vatsasa vanoenda kupfungwa kana vanorega plan yakare (free plan) kana plan yakare inosanganisira nguva dzinotevera (trial period) vanoita email ya kupfungwa uye vanofanira kuita click pa link ya kupfungwa kuti websites dzavo dzine kuonekwe.

* **Urapanywe wekufamba (Default registration page):** Ichi ndiyo chete chine chinotanga kune upanobva wekufamba (registration). Ichi page chinofanira kuita munzvimbo wako we website uye kuno shandisa fomu ya kukubvuma (checkout form) - inotanga kuti vanhu vako vashandise zvinhu zvauno. Unogona kuita upanobva wekufamba nefomu dzakawanda dzinogona kuita, asi ndichida kunzwisisa kuti unofanira kuita shortcode ya checkout form munzvimbo yeupanyana (registration page), saka hauna uchange iwe, haizovaka.

* **Gadzirisa upanobva wekufamba (Use custom login page):** Ichi chine kukupa urembo kuti utange upanobva wekufamba unogona kushandisa upanobva wekufamba wako wakanaka, kuno dziri kupfuura upanobva wp-login.php. Kana uchigadzirisa ichi, unogona kutanga upanobva wekufamba uri munzvimbo yeupanyana (Default login page) (panguva yakare).

* **Kutanga URL ya upanobva wekufamba (Obfuscate the original login url (wp-login.php))**: Kana uchida kuenda upanobva wekufamba wako wakanaka, unogona kutanga ichi. Iyi inenge inenge yakagadzirwa kuti ufanane neoriginal wp-login.php. Izvi zvinenge zviri kudzidzisa kuti usawane nenzaniso dzakawanda dzinotanga (brute-force attacks). Kana uchigadzirisa ichi, Ultimate Multisite chinogona kuita 404 error kana munhu anoda kuenda kwenye ya original wp-login.php.

* **Kutanga upanobva wekufamba (Force synchronous site publication)**: Panguva munhu anokubvuma zvinhu mumapuro (network), upanobva wekufamba wakaipa unofanira kuva upanobva wekufamba wemakore. Kuratidza upanobva wekufamba kunotanga kubva mu Job Queue, kune nguva yakare. Chigadzirisa ichi kuti utange upanobva wekufamba kuita mumwe request anokubvuma.

Nekuti tiri kuona zvinhu zvakawanda zvinenge zvichiri kugona kutanga uye kukubvuma (login and registration process), dziri pano panguva **Other options** munzvimbo yeLogin & registration:

* **Roli ya chokwadi (Default role):** Iyi ndiyo role inotanga inozuva rine munhu wako kwenye yakanaka kana akubvuma.

* **Chirira Jumper (Enable Jumper):** Ino chinangwa chiri kuno kunge kuita shortcut weJumper mu admin area. Jumper inokubatsira administrators kuti vave nekuramba kune Ultimate Multisite screens, network objects, uye zvinhu zvakasiendwa nekuti vanogona kuenda nekuramba kune menu yese. Iri chii kana munenge uchida kunge kuita iro iyi ya navigation yakapfupi kubva mu admin interface.

  * **Kutanga nguva dze users pamwe nemain site:** Kunenge uita iro iyi, unogona kuita kuti user ine account pamwe nemain site yenyika yako panguva dzo signup. Kana uchigadzira iro iyi, kunge kune option yekuti utange **default role** yeusers aya pamwe newebsite yako inenge inoratidzorera kupi ndiri.

  * **Kutanga accounts dzakawanda:** Inokubatsira users kuti vane accounts mumaitiro (sites) ekunyangwe kwenyika yako nekuda kune email yese yakaita. Kana iro iyi ine off, vagari vako havanogone kuita account pamwe newebsites anobva mumaitiro yako nekuda kune email yese yakaita.

Iyi ndiyo nzira dzose dzinogona kuendesa zvinosanganisira login uye registration kuti uine zvakakosha! Usiingai kunge kuita settings dzako panguva unenge uchitsvaga kurapudzira.

## Kutanga forms dzakawanda dze registration:

Ultimate Multisite 2.0 inoratidza checkout form editor inokubatsira kuti utange forms dzakawanda zvakasiendwa, nefields dzakasiendwa, uye products dzakasiendwa, kana zvinhu zvakasiendwa.

Login page uye registration page dzinowanikwa ne shortcodes: **[wu_login_form]** pa login page uye **[wu_checkout]** pa registration page. Unogona kuendesa registration page nekubatanidza forms dzakawanda kana kugadzira forms dzakasiendwa.

Kuti utange iro iyi, enda ku menu ya **Checkout Forms**, pamwe ne-side-bar.

![Checkout Forms menu in sidebar](/img/config/checkout-forms-list.png)

Pa page iyi, unogona kuona forms dzese dzinowanikwa.

Kana uchida kugadzira one pfungwa, ndingara i **Add Checkout Form** pa top ya page.

Unogona unogona uno iye tiri zvinogona kuita chekucheku chiriwo chako: single step, multi-step kana blank. Ndiyo, ndokuti utange, ndichikumbira kuti upiire kuti **Go to the Editor**.

![Add Checkout Form with single step, multi-step, or blank options](/img/config/checkout-forms-list.png)

Kana uri kuita zvinhu zvakasiyana, unogona kungeure kana kutaura forms dzako dzinowanikwa nekuita izvi nezvinhu zvako. Munei, unogona kuita kuti uone nzira dzinogona kutamba shortcode ya form kana kuenda kuenda (delete) form.

![Checkout form hover actions with edit, duplicate, and delete](/img/config/checkout-form-hover-actions.png)

Kana uri kuita single step kana multi-step, form yechikuru ichiri nekuita zvinhu zvinodzidzwa kuti itange. Ndiyo, kana uchida, unogona kuita kuti uone nzira dzakawanda dzinogona kutamba kune iye.

### Kuenda Kutaura Checkout Form:

Kufamba kwemafungiro, unogona kuita forms dzakasiyana-siyane. Mune iye, tichatanga neform ya registration (kuingira).

Panguva unenge uri kuenda kune editor yechikuru chekuita checkout form, ndinenge utaura kana chibviri zvinhu: zivimbiso (name) uye slug (unogona kushandiswa kuti uingire shortcodes, sei).

![Checkout form editor with name and slug fields](/img/config/checkout-form-editor.png)

Forms dzine steps nefields. Unogona kuita step chinobva nekuti unenge uri kuita **Add New Checkout Step**.

![Add New Checkout Step button](/img/config/checkout-form-add-step.png)

Panguva uri mumapuro (tab) yakare, shandisa content ya step yako yechikuru. Shandisa ID, name uye description kune iye. Izvi zvinhu zvakawanda zvinogona kushandiswa mune nzira dzako dzinomweya.

![Checkout step content tab with ID, name, and description](/img/config/checkout-form-step-content.png)

Zvedziso, shandisa visibility ya step. Unogona kuita kuti iye itange **Always show** (kuti itange zvose), **Only show for logged in users** (kuti itange kunogona vanhu vachitamba), kana **Only show for guests** (kuti itange kunogona vanhu vakavandudza).

![Checkout step visibility options](/img/config/checkout-form-step-visibility.png)

Mugwira, ndichikumbira kuti uregare style we step. Izvi ndizvinhu zvose zviri kuitika (optional).

![Checkout step style configuration](/img/config/checkout-form-step-style.png)

Nekuti, ndiri nguva yekutanga kuita fields dzinotanga. Zvinhu zvakaita kuti uingire, ndichikumbira kuti utange kuteerera **Add New Field** uye utange chine type ya section unoda.

![Add New Field button](/img/config/checkout-form-step-with-fields.png)![Field type selection dropdown](/img/config/checkout-form-field-type-dropdown.png)

Mwari dzinotsanangura zvinhu dzakasiyana kuti zvinogadzirwa. Kuti munenge uchitanga, tichotanga kuita field ye **Username**.

![Username field configuration](/img/config/checkout-form-username-content.png)![Username field parameters](/img/config/checkout-form-username-visibility.png)![Username field additional settings](/img/config/checkout-form-username-style.png)

Unogona kuita steps uye fields zvakawanda zvakodzera kwako. Kuti utangane products dako kunenge akaita kuti vose vashandi vachine chiri, unogona kutamba field ye Pricing Table. Nekuti unoda kuti vashandi vashandane vashandane template, unogona kuita Template Selection field. uye zvinhu zvakasiyana.

_**Note:** Kana uchitanga product panguva uita checkout form, unofanira kuita product iwo mu Pricing table section. Kana usina kuitika, product hauzovaka kuona kuvashandi vachiregistra._

_**Note 2:** username, email, password, site title, site URL, order summary, payment, uye submit button ndine fields dzinotanga kuti utange checkout form._

Ndiri musoro wako nekuti unenge uchitanga checkout form, unogona kutamba Preview button kuti uve nekuona vashandi vanenge vachiona form. Unogonawo kuteerera pakati kubona se user anobva kana visitor.

![Button ya kuona checkout form editor](/img/config/checkout-form-preview-button.png)![Kuviona checkout form chete seunine visitor kana user wese kuona](/img/config/checkout-form-preview-modal.png)

Hekuti, mu **Advanced Options** unogona kuita zvinhu zve message ya page ya **Thank You**, kuita snippets kuti utore conversion tracking, kuita custom CSS kune checkout form yako kana kukura kwake kunoita kune dzimwe ndima.

![Advanced Options ne Thank You page, conversion tracking, uye custom CSS](/img/config/checkout-form-advanced.png)

Unogonawo kuita kana kuva (enable or disable) checkout form yako nekuti unigone kuita ioption iye munyero we column ya dzamba dzinotevera (right column), kana kukura kwake kune chokwadi (delete permanently).

![Active toggle uye option yekukura checkout form](/img/config/checkout-form-active.png)

Usishande kuita save kwa checkout form yako!

![Button ya Save Checkout Form](/img/config/checkout-form-save.png)

Kuti utore shortcode ya form yako, ndichida kuti upi **Generate Shortcode** uye uone zvinhu zvinotevera munyero we modal window.

![Generate Shortcode modal ne shortcode yekukopanya](/img/config/checkout-form-editor.png)

_**Note:** Unofanira kuita this shortcode pa registration page yako kuti iwe utore checkout form iyi kune iye._

## Kuti unyira zvinhu uye templates kubva munyero we URL parameters:

Kana uchida kuita pricing tables dzakare (customized) kune products yako uye kuita pre-select munyero we checkout form product kana template inotorewa kuve muna pricing table kana templates page yako, unogone kushandisa URL parameters kuti iwe utore iye.

### **Kune plans:**

Panda kuenda mu **Ultimate Multisite > Products > Select a plan**. Unogona kuona button inoti **Click to copy Shareable Link** munyero we page. Iyi ndiyo link unogone kushandisa kuti uita pre-select this specific plan munyero we checkout form yako.

![Product page ne shareable link button](/img/config/products-list.png)

Note kuti link inoshareva iweyi inenge inofanele **Plans** chete. Haunogona kuita link inoshareva kune packages kana services.

### Kune templates:

Kana uchida kuita pre-select site templates pamusoro pe checkout form yako, unogona kuita parameter: **?template_id=X** pa URL ye page ya registration yako. "X" inofanira kubadilwa ne **site template ID number**. Ukuita iye, ndaura ku **Ultimate Multisite > Sites**.

Chikumbiro **Manage** pamusoro pe site template unoda kuita. Uchaona SITE ID number. Unogona kuita iye nendero iye kune site template iye itai pre-select pa checkout form yako. Kune zvinotevera, mu nzira yedu, parameter ye URL inozviita **?template_id=2**.

![Sites list showing site template ID](/img/config/site-templates-list.png)

Seunenge website ya network yathu inodiwa [**www.mynetwork.com**](http://www.mynetwork.com) uye page yako ye registration ne checkout form yacho inosikwa pa /register. URL yese inozviita iye site template itai pre-selected inogona kuita [**www.mynetwork.com/register/?template**](http://www.mynetwork.com/register/?template)**_id=2**.

Kana uchida, unogona kuita pre-select products uye templates pamusoro pe checkout form yako. Zvinotevera zvinoita: kuta shareable link ye plan uye shandisa parameter ye template pamusoro pe chinangwa chako. Izvirozoita kuita iye [**www.mynetwork.com/register/premium-plan/?template**](http://www.mynetwork.com/register/premium-plan/?template)**_id=2**.
