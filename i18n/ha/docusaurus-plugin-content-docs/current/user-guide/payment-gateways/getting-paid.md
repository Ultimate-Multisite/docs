---
title: Samun kuɗi
sidebar_position: 15
_i18n_hash: 0f45bd2eb659d27199ac9f9752e1a8ae
---
# Ake Kuɗi (v2)

_**MUHIMMANA:** Wannan makala tana nufin Ultimate Multisite versiyon 2.x._

Ultimate Multisite yana da tsarin shiga kasuwanci da kuɗi da aka gina a cikin shi. Don tsarin kuɗinmu ya yi aiki, muna haɗa mafi yawan hanyoyin biyan kuɗi da ake amfani da su a kasuwancin bincike (e-commerce). Hanyoyin biyan kuɗi na asali a Ultimate Multisite sune _Stripe_, _PayPal_, da Biya Da Kalka. Za ka iya amfani da _WooCommerce_, _GoCardless_, da _Payfast_ don karɓar kuɗi ta hanyar shigar wajen su.

## Bayanai na Asali (Basic Settings)

Za ka iya lura kowane irin hanyoyin biyan kuɗi a ƙarƙashin bayanan asalin Ultimate Multisite. Za ka samu hakan ne da tafiya zuwa **Ultimate Multisite menu > Settings > Payments.**

![Hanyen bayanan biyan kuɗi a Ultimate Multisite yana nuna wajen Biya Kuɗi](/img/config/payments-settings-page.png)

Kafin ka shirya hanyar biyan kuɗin ka, don san yadda za ka iya lura da bayanan asalin biyan kuɗi da za ka iya tsara:

**Force auto-rene (Jaka samar da sake gina kai tsaye):** Wannan zai tabbatar cewa biyan kuɗin ya sake faruwa ne a ƙarshen kowane wani sabon tsari na biya, dangane da yadda mai amfani ya zaɓa yawan lokacin biya.

<!-- Screenshot unavailable: Wajen canza Force Auto-Renew a shafin Bayanai na Biya Kuɗi -->

Ultimate Multisite v2.13.0 yana bincika ko wajen biyan da ake amfani da shi yana da ikon sake gina kai (reusable renewal credential) kafin a rufe shigar kasuwanci na sake faruwa tare da samar da sake gina kai tsaye. Wannan ikon sake gina kai zai iya zama shigar kuɗi, tsarin biya, token na vault da aka adana, ko hanyar biyan da aka adana wacce ke daidai. Idan wajen biyan ya bayyana cewa ba a samu wani ikon amfani ba, Ultimate Multisite zai rufe shigar kasuwanci amma zai yi laushi da sake faruwa tare da samar da kai kuma zai rubuta yanayin rashin samun ikon amfani don wata gida ko tallafi ya tambaye mai amfani da sake tabbatar da biyan kuɗi kafin ranar sake gina.

Wannan yana hana wani kungiya ya nuna cewa zai sake samar (auto-renew) idan gwaji (gateway) zai iya samun biyanar da ta yi wuri ɗaya kawai. Add-ons na gateway dole ne su tabbatar cewa bayanan biyanar da ke sake maimaitawa suna ajiye wani bayani mai amfani, musamman idan gwaji yana samun hanyoyin biyanar na wuri ɗaya da kuma hanyoyin biyanar na ajiya/samun arziki (vaulted/subscription payment modes).

**Ba a ba da damar gwaji ba tare da hanyar biyanar ba** **hanyar biyanar:** Da kun samar da wannan za'a yi wa abokin ciniki ku ba shi bu zai saka wani bayanin kuɗi cikin tsarin rajista. Wannan zai buƙata ne kawai lokacin da wani alamar gwaji ya ƙare.

<!-- Screenshot unavailable: Allow Trials Without Payment Method toggle on the Payments settings page -->

**Aiko sabon takarda (invoice) bayan tabbatar biyanar:** Wannan yana ba ku zaɓi ko ba za a aiko takarda bayan an biya. Ka tuna cewa masu amfani za su iya samun tarihi na biyanar su ta ƙasa cikin dashboard na subsite ɗin su. Wannan hanya ba ta shafi Gateway na Gaba (Manual Gateway).

<!-- Screenshot unavailable: Send Invoice on Payment Confirmation toggle on the Payments settings page -->

**Tsarin lambar takardun sabon takarda:** A nan, za ku iya zaɓar ko wani kodi na referance na biyanar (payment reference code) ko tsarin lambar da ke biyo (sequential number scheme). Idan kuna zaɓar amfani da kodi na referance na biyanar ga takardun ku, ba ku bu ƙirƙirar wani abu. Idan kuna zaɓar amfani da tsarin lambar da ke biyo, za ku bu ƙirƙirar **lambaran takarda na gaba** (Wannan lambara za'a yi amfani da ita a matsayin lambaran takardun gaba da aka samar a cikin tsarin. Ana ƙara shi ɗaya kowace lokacin da aka ƙirƙira sabon takarda. Kuna iya canza shi kuma ku daka shi don sake fara lambar takardun da ke biyo zuwa wani ƙima na musamman) da **kodi na gaba na lambaran takarda (invoice number prefix)**.

<!-- Screenshot unavailable: Invoice numbering scheme dropdown with Payment Reference Code and Sequential Number options -->

<!-- Screenshot unavailable: Next invoice number and invoice number prefix fields shown when Sequential Number is selected -->

## Wani samada za samuniyoyin (gateways):

Zakaun samuniyoyin ku shiga a kan wuri ɗaya ne ( **Ultimate Multisite > Settings > Payments**). A ƙasa na **active payment gateways**, za ka iya gani: _Stripe_ , _Stripe_ _Checkout_ , _PayPal_ da _Manual_.

![Active Payment Gateways section listing Stripe, Stripe Checkout, PayPal and Manual](/img/config/payments-active-gateways.png)

Muna samun wata rubutu ga kowane samuniyyar wajen ku don koyarwa yadda ake shirya ta, wanda za ka iya samunsa a cikin link ɗin da ke ƙasa.

Za ka iya kallon da gyara bayanan samuniyoyin:

![Payment edit interface](/img/admin/payment-edit.png)

Ga cikakken bayanin shafin gyaran samuniyya:

![Payment edit full interface](/img/admin/payment-edit-full.png)

Ga kuma cikakken bayanin shiryar samuniyoyin wajen ku:

![Payment gateways settings full page](/img/config/settings-payments-gateways-full.png)

**Shiryar Stripe gateway**

**Shiryar PayPal gateway**** **

**Shiryar biyan hannu (manual payments)**

Yanzu, idan kana so ka yi amfani da _WooCommerce_ , _GoCardless_ ko _Payfast_ a matsayin samuniyarka wajen ku, za ka buƙaci **shigar da kuma shirya add-ons** (add-ons) na su.

### Yadda ake shigar da add-on na WooCommerce:

Muna fahimtar cewa _Stripe_ da _PayPal_ ba su samu a wasu ƙasashe da ke iyakance ko yana hana masu amfani na Ultimate Multisite amfani da wajen mu cikin sauƙi. Don haka, mun ƙirƙira add-on don haɗa _WooCommerce_, wanda shi ne babban plugin na sayarwa (e-commerce) mai shahara. Masu gina a duniya sun ƙirƙira add-ons don haɗa daban-daban samuniyoyin wajen ku da shi. Mun yi amfani da wannan don ƙara samuniyoyin wajen ku da za ka iya amfani da tsarin biyan na Ultimate Multisite billing.

_**MAHIMU DA NA'URI:** Ultimate Multisite: Don ko don WooCommerce a cikin wajen site ɗin ku na gaba ya yi aiki (activated) au kaɗai._

Farko, dawo ga shafin add-ons. Za ka iya samun shi ta hanyar tafiya zuwa **Ultimate Multisite > Settings**. Za ka ga jadawalin **Add-ons** (add-ons). Danna kan **Check our Add-ons** (Bincika Add-ons mu).

<!-- Screenshot unavailable: Jadawalin add-ons a gefen settings na Ultimate Multisite tare da link Check our Add-ons -->

Ba’ada bayan danna kan **Check our Add-ons**, za a wajarka shafin add-ons. A nan za ka samu duk add-ons na Ultimate Multisite. Danna kan add-on ɗin **Ultimate Multisite: WooCommerce Integration**.

![Shafin add-ons da ya nuna add-ons na Ultimate Multisite tare da WooCommerce Integration](/img/addons/addons-page.png)

Wani window zai bayyana da bayanan add-on. Ka danna kan **Install Now** (Danna nan Don Shigarwa).

<!-- Screenshot unavailable: Bayanan add-on na Ultimate Multisite WooCommerce Integration tare da babban babban mai danna Install Now -->

Bayan an kammala shigarwar, za a wajarka shafin plugins. A nan, ka danna kan **Network Activate** (Atsa Network). Sannan add-on ɗin WooCommerce zai yi aiki a network ɗinka.

<!-- Screenshot unavailable: Shafin plugins da link Network Activate don add-on WooCommerce Integration -->

Bayan an tsara shi, idan ba ka ba WooCommerce plugin a kan website ɗinka ba kuma ba ka tsara shi ba, za ka samu wani gargaɗi.

<!-- Screenshot unavailable: Gargaɗin admin wanda ke tunatar da administrator don shigarwa da tsara WooCommerce plugin -->

Don karatu ƙarin game da add-on ɗin WooCommerce Integration, **danna nan**.

### Yadda za a shigar add-on ɗin GoCardless:

ماحل نصب ديال افزونه _GoCardless_ كيكون بحال نفس طريقة النصب ديال افزونة _WooCommerce_. سير لصفحة الـ add-ons (الإضافات) واختار **Ultimate Multisite: GoCardless Gateway** إضافة.

<!-- Screenshot unavailable: Add-ons page with the Ultimate Multisite GoCardless Gateway add-on highlighted -->

شباك الإضافة غادي يفتح. ضغط على **Install Now** (نصب الآن).

<!-- Screenshot unavailable: Ultimate Multisite GoCardless Gateway add-on details dialog with Install Now button -->

من بعد ما تكمل عملية النصب، غادي تتوجه لصفحة الـ plugins (الإضافات). هنا، غير ضغط على **Network Activate** (تفعيل الشبكة) و الإضافة ديال _GoCardless_ غتتفعّل في شبكتك.

<!-- Screenshot unavailable: Plugins page with the Network Activate link for the GoCardless Gateway add-on -->

باش تعرف كيف تبدا مع بوابة _GoCardless_، **اقرا هاد المقال**.

### كيفاش تنصب افزونة Payfast:

سير لصفحة الـ add-ons (الإضافات) واختار **Ultimate Multisite: Payfast Gateway** إضافة.

<!-- Screenshot unavailable: Add-ons page with the Ultimate Multisite Payfast Gateway add-on highlighted -->

شباك الإضافة غادي يفتح. ضغط على **Install Now**.

<!-- Screenshot unavailable: Ultimate Multisite Payfast Gateway add-on details dialog with Install Now button -->

من بعد ما تكمل عملية النصب، غادي تتوجه لصفحة الـ plugins (الإضافات). هنا، غير ضغط على **Network Activate** (تفعيل الشبكة) و الإضافة ديال _Payfast_ غتتفعّل في شبكتك.

<!-- Screenshot unavailable: Plugins page with the Network Activate link for the Payfast Gateway add-on -->
