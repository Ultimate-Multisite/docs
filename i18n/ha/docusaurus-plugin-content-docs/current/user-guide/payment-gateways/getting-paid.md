---
title: Karɓar Kuɗi
sidebar_position: 15
_i18n_hash: 7808f514b91797f7ffb68811b12c48be
---
# Karɓar Kuɗi (v2) {#getting-paid-v2}

_**MUHIMMIYAR SANARWA: Wannan maƙala tana nufin Ultimate Multisite sigar 2.x.**_

Ultimate Multisite yana da ginannen tsarin membership da lissafin kuɗi. Don tsarin lissafin kuɗinmu ya yi aiki, mun haɗa mafi yawan payment gateways da ake amfani da su a e-commerce. Tsoffin payment gateways a Ultimate Multisite su ne _Stripe_ , _PayPal_ , da Biyan Kuɗi na Hannu. Haka kuma za ka iya amfani da _WooCommerce_ , _GoCardless_ da _Payfast_ don karɓar kuɗi ta hanyar shigar da add-ons ɗinsu.

## Saitunan Asali {#basic-settings}

Za ka iya saita kowane ɗayan waɗannan payment gateways a ƙarƙashin saitunan biyan kuɗi na Ultimate Multisite. Za ka iya samun shi ta zuwa **Ultimate Multisite menu > Settings > Payments.**

![Shafin saitunan biyan kuɗi a Ultimate Multisite yana nuna Payments panel](/img/config/payments-settings-page.png)

Kafin ka saita payment gateway ɗinka, don Allah ka duba saitunan biyan kuɗi na asali da za ka iya saita:

**Tilasta sabuntawa ta atomati** **k:** Wannan zai tabbatar da cewa biyan kuɗin zai sake faruwa ta atomatik a ƙarshen kowane zagayen lissafin kuɗi dangane da yawan lokutan lissafin kuɗi da mai amfani ya zaɓa.

<!-- Screenshot unavailable: Force Auto-Renew toggle setting on the Payments settings page -->

Ultimate Multisite v2.13.0 yana duba ko gateway mai aiki yana da shaidar sabuntawa da za a iya sake amfani da ita kafin adana membership mai maimaituwa tare da auto-renewal a kunne. Shaidar sabuntawa na iya zama gateway subscription, billing agreement, saved vault token, ko makamanciyar hanyar biyan kuɗi da za a iya sake amfani da ita. Idan gateway ya bayar da rahoton cewa babu wata shaida mai amfani da ke akwai, Ultimate Multisite yana adana membership amma yana kashe auto-renewal kuma yana rubuta yanayin rashin-shaida domin administrator ko tsarin support ya iya tambayar abokin ciniki ya sake ba da izinin biyan kuɗi kafin ranar sabuntawa.

Wannan yana hana membership bayyana kamar yana auto-renew alhali gateway na iya karɓar biyan kuɗi na lokaci ɗaya kawai. Gateway add-ons ya kamata su tabbatar cewa recurring checkouts suna adana shaida da za a iya sake amfani da ita, musamman idan gateway yana tallafawa duka hanyoyin one-time capture da vaulted/subscription payment modes.

**Ba da izinin gwaji ba tare da** **hanyar biyan kuɗi ba:** Da wannan zaɓi a kunne, abokin cinikinka ba zai buƙaci ƙara kowace bayanin kuɗi yayin tsarin rajista ba. Wannan zai zama dole ne kawai idan lokacin gwaji ya ƙare.

<!-- Screenshot unavailable: Allow Trials Without Payment Method toggle on the Payments settings page -->

**Aika invoice bayan tabbatar da biyan kuɗi:** Wannan yana ba ka zaɓi ko za a aika invoice bayan biyan kuɗi ko a'a. Ka lura cewa masu amfani za su sami damar ganin tarihin biyan kuɗinsu a ƙarƙashin dashboard na subsite ɗinsu. Wannan zaɓin ba ya aiki da Manual Gateway.

<!-- Screenshot unavailable: Send Invoice on Payment Confirmation toggle on the Payments settings page -->

**Tsarin lambar invoice:** A nan, za ka iya zaɓar ko dai lambar tunani ta biyan kuɗi ko tsarin lambobi masu bin juna. Idan ka zaɓi amfani da lambar tunani ta biyan kuɗi don invoices ɗinka, ba ka buƙatar saita komai. Idan ka zaɓi amfani da tsarin lambobi masu bin juna, za ka buƙaci saita **lambar invoice ta gaba** (Za a yi amfani da wannan lamba a matsayin lambar invoice don invoice na gaba da aka samar a tsarin. Ana ƙara ta da ɗaya duk lokacin da aka ƙirƙiri sabon invoice. Za ka iya canza ta ka adana don sake saita lambar invoice mai bin juna zuwa takamaiman ƙima) da kuma **prefix na lambar invoice.**

<!-- Screenshot unavailable: Invoice numbering scheme dropdown with Payment Reference Code and Sequential Number options -->

<!-- Screenshot unavailable: Next invoice number and invoice number prefix fields shown when Sequential Number is selected -->

## Inda za a sami gateways: {#where-to-find-the-gateways}

Za ka iya saita payment gateways a shafi guda ( **Ultimate Multisite > Settings > Payments**). Kai tsaye a ƙasa da **payment gateways masu aiki** , za ka iya ganin: _Stripe_ , _Stripe_ _Checkout_ , _PayPal_ da _Manual_.

![Sashen Active Payment Gateways yana jera Stripe, Stripe Checkout, PayPal da Manual](/img/config/payments-active-gateways.png)

Muna da maƙala ta musamman ga kowane payment gateway wadda za ta jagorance ka ta matakan saita shi, wadda za ka iya samu a hanyoyin haɗin da ke ƙasa.

Za ka iya duba da gyara bayanan biyan kuɗi:

![Fuskar gyaran biyan kuɗi](/img/admin/payment-edit.png)

Ga cikakken gani na shafin gyaran biyan kuɗi:

![Cikakkiyar fuskar gyaran biyan kuɗi](/img/admin/payment-edit-full.png)

Ga kuma cikakken gani na saitunan payment gateways:

![Cikakken shafin saitunan payment gateways](/img/config/settings-payments-gateways-full.png)

**Saita Stripe gateway**

**Saita PayPal gateway**** **

**Saita biyan kuɗi na hannu**

Yanzu, idan kana son amfani da _WooCommerce_ , _GoCardless_ ko _Payfast_ a matsayin payment gateway ɗinka, za ka buƙaci **shigar da saita add-ons ɗinsu**.

### Yadda ake shigar da WooCommerce add-on: {#how-to-install-the-woocommerce-add-on}

Mun fahimci cewa _Stripe_ da _PayPal_ ba sa samuwa a wasu ƙasashe, wanda ke iyakance ko hana masu amfani da Ultimate Multisite yin amfani da plugin ɗinmu yadda ya kamata. Don haka muka ƙirƙiri add-on don haɗa _WooCommerce,_ wanda shahararren plugin ne na e-commerce sosai. Masu haɓakawa a duniya sun ƙirƙiri add-ons don haɗa payment gateways daban-daban da shi. Mun yi amfani da wannan damar don faɗaɗa payment gateways da za ka iya amfani da su tare da tsarin lissafin kuɗi na Ultimate Multisite.

_**MUHIMMI:** Ultimate Multisite: WooCommerce Integration yana buƙatar a kunna WooCommerce aƙalla a kan babban site ɗinka._

Da farko, don Allah je zuwa shafin add-ons. Za ka iya samun shi ta zuwa **Ultimate Multisite > Settings**. Ya kamata ka ga teburin **Add-ons**. Danna **Duba Add-ons ɗinmu**.

<!-- Screenshot unavailable: Add-ons table on the Ultimate Multisite Settings sidebar with the Check our Add-ons link -->

Bayan danna **Duba Add-ons ɗinmu** , za a tura ka zuwa shafin add-ons. A nan za ka iya samun duk Ultimate Multisite add-ons. Danna kan add-on na **Ultimate Multisite: WooCommerce Integration**.

![Shafin add-ons yana jera Ultimate Multisite add-ons ciki har da WooCommerce Integration](/img/addons/addons-page.png)

Wani taga zai bayyana da bayanan karin. Kawai danna **Shigar Yanzu**.

<!-- Hoton allo bai samu ba: maganganun bayanan karin Ultimate Multisite WooCommerce Integration tare da maballin Shigar Yanzu -->

Bayan an gama shigarwa, za a tura ka zuwa shafin plugins. A nan, kawai danna **Kunna a Network** kuma za a kunna karin WooCommerce a kan network ɗinka.

<!-- Hoton allo bai samu ba: Shafin plugins tare da hanyar Kunna a Network don karin WooCommerce Integration -->

Bayan kunna shi, idan har yanzu ba ka shigar kuma ka kunna plugin na WooCommerce a shafin yanar gizonka ba, za ka karɓi tunatarwa.

<!-- Hoton allo bai samu ba: Sanarwar admin da ke tunatar da mai gudanarwa ya shigar kuma ya kunna plugin na WooCommerce -->

Don karanta ƙarin bayani game da karin WooCommerce Integration, **danna nan**.

### Yadda ake shigar da karin GoCardless: {#how-to-install-the-gocardless-add-on}

Matakan shigar da karin _GoCardless_ kusan iri ɗaya ne da na karin _WooCommerce_. Da fatan ka je shafin kari kuma zaɓi karin **Ultimate Multisite: GoCardless Gateway**.

<!-- Hoton allo bai samu ba: Shafin kari tare da karin Ultimate Multisite GoCardless Gateway da aka haskaka -->

Tagar karin za ta bayyana. Danna **Shigar Yanzu**.

<!-- Hoton allo bai samu ba: maganganun bayanan karin Ultimate Multisite GoCardless Gateway tare da maballin Shigar Yanzu -->

Bayan an gama shigarwa, za a tura ka zuwa shafin plugins. A nan, kawai danna **Kunna a Network** kuma za a kunna karin _GoCardless_ a kan network ɗinka.

<!-- Hoton allo bai samu ba: Shafin plugins tare da hanyar Kunna a Network don karin GoCardless Gateway -->

Don koyon yadda za ka fara amfani da gateway na _GoCardless_, **karanta wannan labarin**.

### Yadda ake shigar da karin Payfast: {#how-to-install-the-payfast-add-on}

Je zuwa shafin kari kuma zaɓi karin **Ultimate Multisite: Payfast Gateway**.

<!-- Hoton allo bai samu ba: Shafin kari tare da karin Ultimate Multisite Payfast Gateway da aka haskaka -->

Tagar karin za ta bayyana. Danna **Shigar Yanzu.**

<!-- Hoton allo bai samu ba: maganganun bayanan karin Ultimate Multisite Payfast Gateway tare da maballin Shigar Yanzu -->

Bayan an gama shigarwa, za a tura ka zuwa shafin plugins. A nan, kawai danna **Kunna a Network** kuma za a kunna karin _Payfast_ a kan network ɗinka.

<!-- Hoton allo bai samu ba: Shafin plugins tare da hanyar Kunna a Network don karin Payfast Gateway -->
