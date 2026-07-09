---
title: Tau Txais Nyiaj
sidebar_position: 15
_i18n_hash: 7808f514b91797f7ffb68811b12c48be
---
# Tau Txais Nyiaj (v2)

_**CEEB TOOM TSEEM CEEB: Kab lus no hais txog Ultimate Multisite version 2.x.**_

Ultimate Multisite muaj ib lub kaw lus membership thiab billing uas twb tsim los nrog lawm. Kom peb lub kaw lus billing ua haujlwm tau, peb tau txuas nrog cov payment gateways uas siv ntau tshaj hauv e-commerce. Cov payment gateways default hauv Ultimate Multisite yog _Stripe_ , _PayPal_ , thiab Manual Payment. Koj kuj siv tau _WooCommerce_ , _GoCardless_ thiab _Payfast_ los txais nyiaj them los ntawm kev nruab lawv cov add-ons uas phim.

## Kev Teeb Tsa Yooj Yim

Koj tuaj yeem teeb tsa ib qho ntawm cov payment gateways no hauv Ultimate Multisite cov payment settings. Koj nrhiav tau nws los ntawm kev mus rau **Ultimate Multisite menu > Settings > Payments.**

![Nplooj payments settings hauv Ultimate Multisite uas qhia lub Payments panel](/img/config/payments-settings-page.png)

Ua ntej koj teeb tsa koj lub payment gateway, thov saib cov payment settings yooj yim uas koj tuaj yeem teeb tau:

**Yuam kom rov txuas dua tsis siv nee** **g:** Qhov no yuav xyuas kom meej tias kev them nyiaj yuav rov tshwm sim tsis siv neeg thaum kawg ntawm txhua billing cycle raws li billing frequency uas tus neeg siv tau xaiv.

<!-- Screenshot tsis muaj: Force Auto-Renew toggle setting ntawm nplooj Payments settings -->

Ultimate Multisite v2.13.0 kuaj xyuas seb gateway uas qhib puas muaj reusable renewal credential ua ntej khaws ib qho recurring membership uas qhib auto-renewal. Renewal credential tej zaum yog gateway subscription, billing agreement, saved vault token, lossis ib txoj kev them nyiaj reusable uas sib npaug. Yog gateway qhia tias tsis muaj usable credential, Ultimate Multisite yuav khaws membership tab sis tua auto-renewal thiab sau tseg qhov xwm txheej missing-credential kom tus administrator lossis support flow thiaj nug tau tus customer kom rov tso cai them nyiaj ua ntej hnub renewal.

Qhov no tiv thaiv kom membership tsis txhob zoo li yuav auto-renew thaum gateway tsuas sau tau one-time payments xwb. Gateway add-ons yuav tsum lees paub tias recurring checkouts khaws ib qho reusable credential, tshwj xeeb thaum gateway txhawb ob hom one-time capture thiab vaulted/subscription payment modes.

**Tso cai rau trials yam tsis muaj payment** **method:** Thaum qhib qhov option no, koj tus client yuav tsis tas ntxiv tej ntaub ntawv nyiaj txiag thaum registration process. Qhov no tsuas yuav tsum muaj thaum trial period tas lawm xwb.

<!-- Screenshot tsis muaj: Allow Trials Without Payment Method toggle ntawm nplooj Payments settings -->

**Xa invoice thaum payment confirmation:** Qhov no muab kev xaiv rau koj seb puas xa invoice tom qab them nyiaj. Nco ntsoov tias users yuav nkag tau mus saib lawv payment history hauv lawv subsite Dashboard. Qhov option no tsis siv rau Manual Gateway.

<!-- Screenshot tsis muaj: Send Invoice on Payment Confirmation toggle ntawm nplooj Payments settings -->

**Invoice numbering scheme:** Ntawm no, koj xaiv tau payment reference code lossis sequential number scheme. Yog koj xaiv siv payment reference code rau koj cov invoices, koj tsis tas teeb tsa dab tsi. Yog koj xaiv siv sequential number scheme, koj yuav tsum teeb tsa **next invoice number** (Tus lej no yuav raug siv ua invoice number rau invoice tom ntej uas tsim hauv system. Nws yuav nce ib qho txhua zaus muaj invoice tshiab raug tsim. Koj hloov tau nws thiab save kom reset invoice sequential number mus rau ib tus nqi tshwj xeeb) thiab **invoice number prefix.**

<!-- Screenshot tsis muaj: Invoice numbering scheme dropdown nrog Payment Reference Code thiab Sequential Number options -->

<!-- Screenshot tsis muaj: Next invoice number thiab invoice number prefix fields uas pom thaum xaiv Sequential Number -->

## Nrhiav cov gateways qhov twg:

Koj tuaj yeem teeb tsa cov payment gateways ntawm tib nplooj ntawd ( **Ultimate Multisite > Settings > Payments**). Hauv qab kiag **active payment gateways** , koj yuav pom: _Stripe_ , _Stripe_ _Checkout_ , _PayPal_ thiab _Manual_.

![Ntu Active Payment Gateways uas teev Stripe, Stripe Checkout, PayPal thiab Manual](/img/config/payments-active-gateways.png)

Peb muaj ib kab lus tshwj xeeb rau txhua payment gateway uas yuav coj koj mus raws cov kauj ruam teeb tsa nws, uas koj nrhiav tau ntawm cov links hauv qab no.

Koj tuaj yeem saib thiab kho payment details:

![Interface kho payment](/img/admin/payment-edit.png)

Ntawm no yog qhov pom tag nrho ntawm nplooj kho payment:

![Interface kho payment tag nrho](/img/admin/payment-edit-full.png)

Ntawm no kuj yog qhov pom tag nrho ntawm cov payment gateways settings:

![Nplooj payment gateways settings tag nrho](/img/config/settings-payments-gateways-full.png)

**Teeb tsa Stripe gateway**

**Teeb tsa PayPal gateway**** **

**Teeb tsa manual payments**

Tam sim no, yog koj xav siv _WooCommerce_ , _GoCardless_ lossis _Payfast_ ua koj lub payment gateway, koj yuav tsum **nruab thiab teeb tsa lawv cov add-ons**.

### Yuav nruab WooCommerce add-on li cas:

Peb nkag siab tias _Stripe_ thiab _PayPal_ tsis muaj nyob hauv qee lub teb chaws, uas txwv lossis cuam tshuam cov neeg siv Ultimate Multisite kom siv tsis tau peb lub plugin zoo. Yog li peb thiaj tsim ib qho add-on los txuas nrog _WooCommerce,_ uas yog ib lub e-commerce plugin nrov heev. Developers thoob ntiaj teb tau tsim add-ons los txuas ntau hom payment gateways rau nws. Peb siv qhov no los nthuav cov payment gateways uas koj siv tau nrog Ultimate Multisite billing system.

_**TSEEM CEEB:** Ultimate Multisite: WooCommerce Integration yuav tsum muaj WooCommerce qhib tsawg kawg ntawm koj lub main site._

Ua ntej, thov mus rau nplooj add-ons. Koj nrhiav tau nws los ntawm kev mus rau **Ultimate Multisite > Settings**. Koj yuav tsum pom lub **Add-ons** table. Nyem rau **Check our Add-ons**.

<!-- Screenshot tsis muaj: Add-ons table ntawm Ultimate Multisite Settings sidebar nrog link Check our Add-ons -->

Tom qab nyem rau **Check our Add-ons** , koj yuav raug xa mus rau nplooj add-ons. Ntawm no koj nrhiav tau tag nrho Ultimate Multisite add-ons. Nyem rau **Ultimate Multisite: WooCommerce Integration** add-on.

![Nplooj Add-ons uas teev Ultimate Multisite add-ons nrog rau WooCommerce Integration](/img/addons/addons-page.png)

Ib lub qhov rai yuav tshwm nrog cov ntaub ntawv ntxaws txog add-on. Tsuas yog nias rau **Install Now**.

<!-- Screenshot unavailable: Ultimate Multisite WooCommerce Integration add-on details dialog with Install Now button -->

Tom qab kev teeb tsa tiav lawm, koj yuav raug coj mus rau nplooj plugins. Ntawm no, tsuas yog nias rau **Network Activate** ces WooCommerce add-on yuav raug qhib rau ntawm koj lub network.

<!-- Screenshot unavailable: Plugins page with the Network Activate link for the WooCommerce Integration add-on -->

Tom qab qhib nws lawm, yog tias koj tseem tsis tau nruab thiab qhib WooCommerce plugin rau ntawm koj lub vev xaib, koj yuav tau txais ib qho lus ceeb toom.

<!-- Screenshot unavailable: Admin notice reminding the administrator to install and activate the WooCommerce plugin -->

Yog xav nyeem ntxiv txog WooCommerce Integration add-on, **nias ntawm no**.

### Yuav ua li cas nruab GoCardless add-on:

Cov kauj ruam los nruab _GoCardless_ add-on yeej zoo ib yam li _WooCommerce_ add-on. Thov mus rau nplooj add-ons thiab xaiv **Ultimate Multisite: GoCardless Gateway** add-on.

<!-- Screenshot unavailable: Add-ons page with the Ultimate Multisite GoCardless Gateway add-on highlighted -->

Lub qhov rai add-on yuav tshwm. Nias rau **Install Now**.

<!-- Screenshot unavailable: Ultimate Multisite GoCardless Gateway add-on details dialog with Install Now button -->

Tom qab kev teeb tsa tiav lawm, koj yuav raug coj mus rau nplooj plugins. Ntawm no, tsuas yog nias rau **Network Activate** ces _GoCardless_ add-on yuav raug qhib rau ntawm koj lub network.

<!-- Screenshot unavailable: Plugins page with the Network Activate link for the GoCardless Gateway add-on -->

Yog xav kawm yuav pib siv _GoCardless_ gateway li cas, **nyeem tsab ntawv no**.

### Yuav ua li cas nruab Payfast add-on:

Mus rau nplooj add-ons thiab xaiv **Ultimate Multisite: Payfast Gateway** add-on.

<!-- Screenshot unavailable: Add-ons page with the Ultimate Multisite Payfast Gateway add-on highlighted -->

Lub qhov rai add-on yuav tshwm. Nias rau **Install Now.**

<!-- Screenshot unavailable: Ultimate Multisite Payfast Gateway add-on details dialog with Install Now button -->

Tom qab kev teeb tsa tiav lawm, koj yuav raug coj mus rau nplooj plugins. Ntawm no, tsuas yog nias rau **Network Activate** ces _Payfast_ add-on yuav raug qhib rau ntawm koj lub network.

<!-- Screenshot unavailable: Plugins page with the Network Activate link for the Payfast Gateway add-on -->
