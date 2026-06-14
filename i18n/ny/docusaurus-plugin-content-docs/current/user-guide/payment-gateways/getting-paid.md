---
title: Kupatira
sidebar_position: 15
_i18n_hash: 0f45bd2eb659d27199ac9f9752e1a8ae
---
# Kufunsa (v2)

_**KUFUNSA KWAMBIRI: Lelo lero lili nali Ultimate Multisite v2.x.**_

Ultimate Multisite uma na mfundo ya kupeza ndi kupanga ndalama. Kuti sistemu ya kukonza ndalama yanu ikuleke, tumapanga m’moyo ndi zinthu zomwe zimakwaniridwa kwambiri pawoleka (payment gateways) zomwe zimayendetsedwa kwambiri m’ecommerce. Zinthu zina zomwe zikuyendetsedwa kwa mpaka kukhala m’moyo ndi Stripe, PayPal, ndalama yomwe imapangidwa ndi m’moyo wina. Muli ndi ulemu wosiyanasiyana monga WooCommerce, GoCardless, ndi Payfast kuti mupeza ndalama mwachitsanzo paipanga add-ons zake.

## Zinthu Zofunika (Basic Settings)

Muli ndi ulemu wosiyanasiyana wosiyanasiyana m’moyo wanu m’moyo wa kukonza ndalama kwa Ultimate Multisite. Muli ndi ulemu wosiyanasiyana monga **Ultimate Multisite menu > Settings > Payments.**

![Payments settings page in Ultimate Multisite showing the Payments panel](/img/config/payments-settings-page.png)

Mmodzi m’moyo wanu wa kukonza ndalama, muli ndi zinthu zina zomwe mungayendetsani:

**Force auto-rene** **w:** Iyi idzakonza kuti ndalama idzakhala yomwe ikukonzedwa m’moyo kwa nthawi zonse pamene kukhala m’moyo wanu wa kukonza ndalama zomwe muli ndi mfundo ya kukonza ndalama imene.

<!-- Screenshot unavailable: Force Auto-Renew toggle setting on the Payments settings page -->

Ultimate Multisite v2.13.0 imapanga kuti m’moyo wosiyanasiyana wosiyanasiyana ulemu wanu umene ndi chidziwitso cha kukonza ndalama chomwe chimakwaniridwa m’moyo pansi pawoleka (reusable renewal credential) monga momwe mungukonze m’moyo wosiyanasiyana wosiyanasiyana wosiyanasiyana. Chidziwitso cha kukonza ndalama chimene chimakwaniridwa monga chidziwitso cha subscription ya ulemu, makamaka a kukonza ndalama, token la vault lomwe limapangidwa, kapena njira yomwe imayendetsedwa m’moyo wina. Ngati ulemu wanu umene ulipanga kuti osati ndi chidziwitso chomwe chimakwaniridwa, Ultimate Multisite idzakonza m’moyo koma idzakonza auto-renewal ndipo idzakonza malo lomwe lili ndi chidziwitso lili likulopereka kuti administrator kapena mfundo ya kukonza ndalama ikupatsedwe wina kuti amakonze ndalama m’moyo pansi pawoleka pansi pa nthawi yomwe imene.

Kusangalala, ndili mwayi wosangalala kuwona ninyani!

**Kugwiriza pang'ono kukhale kukhale kwa membership kukatula kuti kukhale kukhale (auto-renew) pamene gateway ikhoza kukupira pansi pafupi.** Gateway add-ons (zomwe zikufunika) zikufuna kuti muli ndi chonde kuti kuwira kukhale kukhale kumapira chithandizo chomwe sikuyenera kupira pafupi.

**Kugwiritsa ntchito trials osati ndi njira ya kupira:** **Ndi mwayi wosangalala.** Ndi mwayi wosangalala, m'moyo wanu woyamba (client) sikukufunika kuti muli ndi mawu azafupi za ndalama pamafupi pamene muli ndi kukhazikira. Izi zimapereka nkhawa muli kulamulira pafupi pamene mudzakhala wosangalala.

<!-- Screenshot unavailable: Allow Trials Without Payment Method toggle on the Payments settings page -->

**Kupereka invoice pamene kupirira kukhazikidwa:** Izi imapereka njira yomwe muli ndi chonde kuti muli ndi ulemu wopereka (invoice) kapena sikuyenera kupereka ulemu pafupi pambuyo pa kupira. Kodi muli ndi ulemu wopereka pamene kupira? Nkhaniyi, m'moyo wanu woyamba mudzakhala ndi ulemu wopereka m'dashboard ya subsite yanu. Izi siyo kwa Manual Gateway.

<!-- Screenshot unavailable: Send Invoice on Payment Confirmation toggle on the Payments settings page -->

**Njira ya kupereka invoice:** Pamene, muli ndi njira yomwe muli ndi chonde kuti muli ndi kodi kukhala kowonjezera (payment reference code) kapena njira ya mawu osiyanasiyana (sequential number scheme). Ngati muli woyenera kugwiritsa ntchito kowonjezera za ndalama pafupi pa ulemu wopereka wanu, simukufunika kuti muli ndi chinthu chomwe muli kulamulira. Ngati muli woyenera kugwiritsa ntchito njira ya mawu osiyanasiyana, muli woyenera kukhazikira **nkhali ya ulemu wopereka wosangalala (next invoice number)** (Nkhaliyi iyi idzakhale kuyenzera nkhali ya ulemu wopereka wosangalala wosangalala wosangalala. Idzakhale kuyenzera m'moyo wosangalala pamene ulemu wopereka wosangalala wosangalala wosangalala wosangalala wosangalala wosangalala wosangalala wosangalala wosangalala wosangalala wosangalala wosangalala wosangalala wosangalala wosangalala wosangalala wosangalala wosangalala wosangalala wosangalala wosangalala wosangalala wosangalala wosangalala wosangalala wosangalala wosangalala wosangalala wosangalala wosangalala wosangalala wosangalala wosangalala wosangalala wosangalala wosangalala wosangalala wosangalala wosangalala wosangalala wosangalala wosangalala wosangalala wosangalala wosangalala wosangalala wosangalala wosangalala wosangalala wosangalala wosangalala wosangalala wosangalala wosangalala wosangalala wosangalala wosangalala wosangalala wosangalala wosangalala wosangalala wosangalala wosangalala wosangalala wosangalala wosangalala wosangalala wosangalala wosangalala wosangalala wosangalala wosangalala wosangalala wosangalala wosangalala wosangalala wosangalala wosangalala wosangalala wosangalala wosangalala wosangalala wosangalala wosangalala wosangalala wosangalala wosangalala wosangalala wosangalala wosangalala wosangalala wosangalala wosangalala wosangalala wosangalala wosangalala wosangalala wosangalala wosangalala wosangalala wosangalala wosangalala wosangalala wosangalala wosangalala wosangalala wosangalala wosangalala wosangalala wosangalala wosangalala wosangalala wosangalala wosangalala wosangalala wosangalala wosangalala wosangalala wosangalala wosangalala wosangalala wosangalala wosangalala wosangalala wosangalala wosangalala wosangalala wosangalala wosangalala wosangalala wosangalala wosangalala wosangalala wosangalala wosangalala wosangalala wosangalala wosangalala wosangalala wosangalala wosangalala wosangalala wosangalala wosangalala wosangalala w

<!-- Screenshot unavailable: Next invoice number and invoice number prefix fields shown when Sequential Number is selected -->

## Kuti m'moyo kwa gateways:

Mungathe kudzera mga gateway pa page yomwe ( **Ultimate Multisite > Settings > Payments**). Pamwamba pa **active payment gateways**, mungatambale: _Stripe_ , _Stripe_ _Checkout_ , _PayPal_ ndi _Manual_.

![Active Payment Gateways section listing Stripe, Stripe Checkout, PayPal and Manual](/img/config/payments-active-gateways.png)

Tili ndi article lina lomwe limakonda kwa mwamphamvu wopayments kuti likukonza m'moyo wopereka (setup) komwe mungatambale pa links omwe muli pansi.

Mungathe kuona ndikukonza mapayments:

![Payment edit interface](/img/admin/payment-edit.png)

Ili ndi chitsanzo chosavuta kwa kupereka mapayments:

![Payment edit full interface](/img/admin/payment-edit-full.png)

Ili ndi chitsanzo chosavuta kwa settings za payment gateways:

![Payment gateways settings full page](/img/config/settings-payments-gateways-full.png)

**Kukonza Stripe gateway**

**Kukonza PayPal gateway**** **

**Kukonza mapayments omwe muli pa chinthu (manual payments)**

Ngati mukuona kuti mukuwoneza _WooCommerce_ , _GoCardless_ kapena _Payfast_ monga gateway yomwamba wopayments, mukuchepa **kuyendetsa ndi kukonza add-ons zawo**.

### Kodi mungonjeze add-on ya WooCommerce bwanji:

Tili ndi chonde kuti _Stripe_ ndi _PayPal_ sikuti ziri kothandizira ku kwa dziko lathu zomwe zimapangitsa kuti m'Ultimate Multisite wamene amagwira ntchito yomwe yomwe (plugin) kwambiri. Choncho, tili ndi add-on lomwe limakonda kuti likukonze _WooCommerce_, komwe ndi plugin ya e-commerce yomwe yomwe yomwe yomwe wamene amagwira ntchito m'moyo wopereka (plugin). Mawonera omwe ali pansi pa dziko lonse anapangidwa add-ons kuti likukonze gateways zosavuta ndi iwo. Tili ndi chonde lili ndi zomwe tikugwira kuti tikukonze gateways zomwe mungagwiritse ndi Ultimate Multisite billing system.

_**MAMBWE:** Ultimate Multisite: Kufufu ya WooCommerce inachitsatsa kuti WooCommerce ikataliwe pa site yanu yomakono._

Mwachitsogo, ndikufunsa m'moyo wanu kuwo. Mungathe kupita pa add-ons page. Mungathe kupeza ndi kukhala pa **Ultimate Multisite > Settings**. Mudzakhulupirira table ya **Add-ons**. Kuti mudzakhale, chonde pampira **Check our Add-ons**.

<!-- Screenshot unavailable: Add-ons table on the Ultimate Multisite Settings sidebar with the Check our Add-ons link -->

Pambuyo pa kupampira **Check our Add-ons**, mudzakhala m'page ya add-ons. Pambuyo poyamba, mudzakhale ndi add-ons onse za Ultimate Multisite. Chonde pampira add-on ya **Ultimate Multisite: WooCommerce Integration**.

![Add-ons page listing Ultimate Multisite add-ons including WooCommerce Integration](/img/addons/addons-page.png)

Kuti mupereka mavuto, kuli window imapuka ndi mafo ya add-on. Chonde pampira **Install Now**.

<!-- Screenshot unavailable: Ultimate Multisite WooCommerce Integration add-on details dialog with Install Now button -->

Pambuyo pa kupereka, mudzakhala m'plugins page. Pambuyo poyamba, chonde pampira **Network Activate** ndipo add-on ya WooCommerce idzakwera pa network yanu.

<!-- Screenshot unavailable: Plugins page with the Network Activate link for the WooCommerce Integration add-on -->

Pambuyo pa kukwera, ngati muli ndi plugin ya WooCommerce yokwera ndipo yakwera pa website yanu, mudzakhala ndi chitsogo chomwe chimapereka kuwiri.

<!-- Screenshot unavailable: Admin notice reminding the administrator to install and activate the WooCommerce plugin -->

Kuti muperekeza zambiri za add-on ya WooCommerce Integration, **pampira pano**.

### Kodi mwayi kuti muipereke add-on ya GoCardless:

Mwayi wopsezi kuti mwayi wopereka _GoCardless_ add-on ndi yomwe yomwe ndi yomwe. Mwayi wopereka ndi yomwe yomwe ndi yomwe. Kodi mwayi wopereka ndi yomwe yomwe ndi yomwe? Kodi mwayi wopereka ndi yomwe yomwe ndi yomwe?

Mwayi wopereka ndi yomwe yomwe ndi yomwe. Kodi mwayi wopereka ndi yomwe yomwe ndi yomwe? Mwayi wopereka ndi yomwe yomwe ndi yomwe. Kodi mwayi wopereka ndi yomwe yomwe ndi yomwe?

Mwayi wopereka ndi yomwe yomwe ndi yomwe. Kodi mwayi wopereka ndi yomwe yomwe ndi yomwe? Mwayi wopereka ndi yomwe yomwe ndi yomwe.

Kuti ulambe bwanji ndi _GoCardless_ gateway, **wambani opangiro lili.**

### Kodi ulambe add-on ya Payfast bwanji:

Tengeni mwayi wopereka ndi selebwerani **Ultimate Multisite: Payfast Gateway** add-on.

Mwayi wopereka ndi yomwe yomwe ndi yomwe. Kodi mwayi wopereka ndi yomwe yomwe ndi yomwe? Mwayi wopereka ndi yomwe yomwe ndi yomwe.

Mwayi wopereka ndi yomwe yomwe ndi yomwe. Kodi mwayi wopereka ndi yomwe yomwe ndi yomwe?
