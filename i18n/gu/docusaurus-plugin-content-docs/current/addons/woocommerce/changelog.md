---
title: WooCommerce એકીકરણ ફેરફાર નોંધ
sidebar_position: 99
_i18n_hash: 54658c4a8d52e85998183f523437d5a3
---
# WooCommerce સંકલન ફેરફાર નોંધ

Version 2.2.0 - 2026-07-01ના રોજ રિલીઝ થયું
* નવું: Ultimate Multisite કરની રકમો હવે checkout પર અલગ WooCommerce fee લાઇનો તરીકે દેખાય છે, જેથી ચુકવણી પહેલાં કરની કુલ રકમો વધુ સ્પષ્ટ બને છે.
* નવું: WooCommerce Subscriptions ફરી-પ્રયાસ વિન્ડો દરમિયાન નિષ્ફળ-નવીનીકરણ સસ્પેન્શન ઇચ્છતી સાઇટો માટે opt-in "નિષ્ફળ નવીનીકરણો પર Memberships તાત્કાલિક સસ્પેન્ડ કરો" સેટિંગ અને `wu_woo_suspend_on_payment_failure` ફિલ્ટર ઉમેર્યું.
* સુધારો: નિષ્ફળ અથવા પુનઃપ્રાપ્ત નવીનીકરણો પછી Ultimate Multisite memberships સાથે સમન્વય બહાર રહી શકતા WooCommerce Subscription statuses ને સમાધાન કર્યું.
* સુધારો: જ્યારે Ultimate Multisite ચલણ યાદીમાં WooCommerce સ્ટોર ચલણ ગેરહાજર હતું ત્યારે તેને ઉમેર્યું.
* સુધારો: subscribers ને WooCommerce checkout પર રીડાયરેક્ટ કરતી વખતે ગ્રાહકની billing વિગતો જાળવી રાખી.
* સુધારેલ: Jetpack Autoloader 5 સાથે સુસંગતતા ઉમેરાઈ.
* સુધારેલ: રિલીઝ પેકેજ જનરેશન સાફ કર્યું જેથી GitHub અને marketplace zips nested staging directories અને development files ટાળે.

Version 2.0.6 - 2026-01-16ના રોજ રિલીઝ થયું
* સુધારો: addon માં મુખ્ય subscriptions શામેલ કરો. હવે Woocommerce Subscriptinos extension ની જરૂર નથી.

Version 2.0.5 - 2026-01-09ના રોજ રિલીઝ થયું
* સુધારો: glotpress API માંથી અનુવાદો લોડ કરો.
* સુધારો: કેટલાક page builders માં fatal error.
* સુધારો: જ્યારે ગ્રાહક મુખ્ય સાઇટનો member હોય ત્યારે અનંત redirect.

Version 2.0.4 - 2025-11-14ના રોજ રિલીઝ થયું
* ઉમેર્યું: ઘણી વધુ ભાષાઓ માટે અનુવાદો.
* બદલ્યું: Ultimate Multisite: Woocommerce Integration તરીકે નામ બદલ્યું.
* ઉમેર્યું: Woocommerce 10.2.1 સાથે સુસંગતતા.
* ઉમેર્યું: Woocommerce Subscriptions 7.7.0 સાથે સુસંગતતા.
* સુધારો: PHP 8.4 સાથે સુસંગતતા
* સુધારો: જ્યારે કોઈ WC account page અસ્તિત્વમાં ન હોય ત્યારે redirect.

Version 2.0.3 - 2025-08-13ના રોજ રિલીઝ થયું
* બદલ્યું: નવા marketplace સાથે સ્વચાલિત updates સક્ષમ કર્યા.

Version 2.0.2 - 2025-07-05ના રોજ રિલીઝ થયું
* બદલ્યું: Multisite Ultimate: Woocommerce Integration તરીકે નામ બદલ્યું.
* ઉમેર્યું: Woocommerce 9.8.1 સાથે સુસંગતતા.
* ઉમેર્યું: Woocommerce Subscriptions 7.3.0 સાથે સુસંગતતા.
* સુધારો: ગ્રાહક દ્વારા subscription રદ કરવું.
* સુધારો: checkout block નો ઉપયોગ કરતી વખતે fatal error.
* સુધારો: હવે Woocommerce high performance custom order tables સાથે સુસંગત.
* સુધારો: WooCommerce checkout પર રદ કરવાથી હજુ પણ membership upgrade થઈ શકે છે.

Version 2.0.1 - 2023-08-09ના રોજ રિલીઝ થયું

* ઉમેર્યું: Woocommerce 7.9.0 સાથે સુસંગતતા.
* ઉમેર્યું: Woocommerce Subscriptions 5.3.0 સાથે સુસંગતતા.
* ઉમેર્યું: membership updates માટે સપોર્ટ.
* ઉમેર્યું: Woocommerce માં trials અને setup fees વિશે notices.
* ઉમેર્યું: meta value સાથે Ultimate Multisite Woocommerce products ની ઓળખ.
* ઉમેર્યું: બધા Ultimate Multisite સંબંધિત Woocommerce products ને mark કરવા માટે one-time fix દાખલ કર્યું.
* ઉમેર્યું: Ultimate Multisite દ્વારા બનાવેલા products ને Woocommerce list માંથી દૂર કર્યા.
* સુધારો: cart પર લાગુ કરવા માટે non-recurring Woocommerce discount બનાવ્યું.
* સુધારો: recurring discount ને Woocommerce product પર પુનઃસ્થાપિત કર્યું.
* સુધારો: Woocommerce product પર recurring discount label ઉમેર્યું.
* સુધારો: checkout પર product type સુનિશ્ચિત કર્યું.
* સુધારો: downgrade પ્રક્રિયા દરમિયાન membership status જાળવ્યું.
* સુધારો: cancellation પ્રક્રિયા દરમિયાન errors ટાળવા માટે subscription અસ્તિત્વમાં છે કે નહીં તે તપાસ્યું.
* સુધારો: Woocommerce subscriptions માં ઉપયોગ કરવા માટે start subscription date ઉમેર્યું.
* આંતરિક: નવો PHP 8.1 build process અમલમાં મૂક્યો.

Version 2.0.0 - સંપૂર્ણ પુનર્લેખન.

* ઉમેર્યું: gateway બદલતી વખતે અથવા membership રદ કરતી વખતે woo subscription દૂર કરવા માટે cancellation method process કરો;
* ઉમેર્યું: memberships ને downgrade અને upgrade કરવા માટે handler;
* સુધારો: account update કરવાની મંજૂરી આપવા subsites માં customer update form પર woocommerce dependencies લોડ કરો;
* સુધારો: જો અસ્તિત્વમાં ન હોય તો Woocommerce cart યોગ્ય રીતે લોડ કરો;
* સુધારો: checkout process કરતી વખતે આપણે main site tables પર છીએ તે સુનિશ્ચિત કરો;
* સુધારો: Ultimo renewal order ને Woocommerce subscription order value આધારિત બનાવો, last payment પરથી નહીં;
* સુધારો: WU Membership button link;
* સુધારો: જ્યારે Woocommerce subscriptions renewal paid થયું હોય ત્યારે Ultimo order ને paid તરીકે set કરો;
* Build: builder તરીકે MPB ઉમેરો;

Version 2.0.0-beta-5 - 2022-01-21ના રોજ રિલીઝ થયું

* આંતરિક: hooks અને filters generator ઉમેર્યું;
* આંતરિક: developer quality of life માટે Ultimate Multisite stubs ઉમેર્યા;
* સુધાર્યું: જરૂરી ન હોય ત્યારે multiple products ની રચના અટકાવો;

Version 2.0.0-beta.4 - 2021-09-23

* સુધારો: માત્ર main site ને બદલે WooCommerce network active હોવું જરૂરી કર્યું;
* સુધારો: add-on ને mu-plugin તરીકે ઉપયોગ કરવાની મંજૂરી આપવા filter ઉમેર્યું;

Version 2.0.0-beta.3 - 2021-05-28

* સુધારો: dashboard access control ખૂબ aggressive હતું;
* સુધારો: Ultimate Multisite top-menu માં WooCommerce help links ઉમેર્યા;

Version 2.0.0-beta.2 - 2021-05-04

* સુધારો: WCS renewal order creation પર Ultimo માં pending payments બનાવે છે;
* સુધારો: Ultimate Multisite customer data સાથે billing fields pre-fill કરે છે;
* સુધારો: gateways માટે billing fields પાછા ઉમેરે છે;

Version 2.0.0-beta.1 - 2021-05-04

* પ્રારંભિક beta રિલીઝ

-- Legacy Versions --

Version 1.2.6 - 26/03/2020

* સુધાર્યું: WooCommerce Subscriptions ના નવા versions સાથે નાની incompatibility;

Version 1.2.5 - 26/08/2019

* સુધાર્યું: previous release પર error;

Version 1.2.4 - 22/08/2019

* સુધારેલ: integration પછી તરત WooCommerce checkout screen પર redirect કરવાનો option ઉમેર્યો;

Version 1.2.3 - 26/05/2019

* સુધાર્યું: કેટલાક edge cases માં WooCommerce માટે payment email ગાયબ થઈ ગયો;

Version 1.2.2 - 27/02/2019

* ઉમેર્યું: WooCommerce Subscription integration પર setup fees માટે સપોર્ટ;

Version 1.2.1 - 17/11/2018

* સુધાર્યું: Ultimate Multisite version 1.9.0 સાથે compatibility issues;

Version 1.2.0 - 10/09/2018

* સુધારેલ: add-ons માટે નવા updates URL;
* ઉમેર્યું: WooCommerce Subscription માટે beta support;

Version 1.1.2 - 11/02/2018

* સુધાર્યું: WooCommerce endpoints માં ફેરફારોને respond કરવા માટે Pay માટેની link dynamically generate થતી;
* સુધારેલ: જ્યારે payment_completed call થાય ત્યારે અમારી orders માટે હવે અમે completed status ફરજિયાત કરીએ છીએ જેથી ખાતરી થાય કે અમારા renewal hooks ત્યારે જ run થાય જ્યારે જોઈએ;

Version 1.1.1 - 24/01/2018

* સુધાર્યું: હવે તે મુખ્ય સાઇટ પર WooCommerce હમણાં જ સક્રિય કરાયું છે કે નહીં તે પણ તપાસે છે;
* સુધાર્યું: ઓર્ડર બનાવવામાં કર સામેલ કરી શકાય તે માટે over-loadings સામેલ કર્યા;

Version 1.1.0 - 04/11/2017

* સુધાર્યું: હવે integration બટનનું લેબલ ખરેખર સેટિંગ્સને પ્રતિબિંબિત કરવા બદલાય છે. Ultimate Multisite 1.5.0 જરૂરી છે;
* સુધાર્યું: WooCommerce Integration હવે WooCommerce નેટવર્કમાં સક્રિય ન હોય અને માત્ર મુખ્ય સાઇટમાં સક્રિય હોય ત્યારે પણ કાર્ય કરે છે;

1.0.0 - પ્રારંભિક પ્રકાશન
