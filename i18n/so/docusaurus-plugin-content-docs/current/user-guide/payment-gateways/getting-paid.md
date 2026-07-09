---
title: Lacag qaadashada
sidebar_position: 15
_i18n_hash: 7808f514b91797f7ffb68811b12c48be
---
# Lacag Helid (v2)

_**XUSUUSIN MUHIIM AH: Maqaalkani wuxuu khuseeyaa Ultimate Multisite nooca 2.x.**_

Ultimate Multisite wuxuu leeyahay nidaam membership iyo billing oo ku dhex-dhisan. Si nidaamkeenna billing u shaqeeyo, waxaan ku darnay payment gateways-ka ugu badan ee laga isticmaalo e-commerce. Payment gateways-ka caadiga ah ee Ultimate Multisite waa _Stripe_ , _PayPal_ , iyo Manual Payment. Sidoo kale waxaad isticmaali kartaa _WooCommerce_ , _GoCardless_ iyo _Payfast_ si aad lacag-bixinno u hesho adigoo rakibaya add-ons-kooda u gaarka ah.

## Dejinnada Aasaasiga ah

Waxaad payment gateways-kan midkood ku habayn kartaa hoosta dejinnada lacag-bixinta ee Ultimate Multisite. Waxaad ka heli kartaa adigoo tagaya **Ultimate Multisite menu > Settings > Payments.**

![Bogga dejinnada lacag-bixinta ee Ultimate Multisite oo muujinaya guddiga Payments](/img/config/payments-settings-page.png)

Ka hor inta aadan dejin payment gateway-gaaga, fadlan eeg dejinnada aasaasiga ah ee lacag-bixinta ee aad habayn karto:

**Qasab ka dhig auto-rene** **w:** Tani waxay hubinaysaa in lacag-bixintu si otomaatig ah ugu soo noqoto dhammaadka billing cycle kasta iyadoo ku xiran billing frequency-ga uu isticmaaluhu doortay.

<!-- Screenshot unavailable: Force Auto-Renew toggle setting on the Payments settings page -->

Ultimate Multisite v2.13.0 wuxuu hubiyaa in gateway-ga firfircoon uu leeyahay renewal credential dib loo isticmaali karo ka hor inta uusan kaydin membership soo noqnoqda oo auto-renewal la shiday. Renewal credential wuxuu noqon karaa gateway subscription, billing agreement, saved vault token, ama hab lacag-bixin oo u dhigma oo dib loo isticmaali karo. Haddii gateway-gu soo sheego inuusan jirin credential la adeegsan karo, Ultimate Multisite wuxuu kaydiyaa membership-ka laakiin wuxuu damiyaa auto-renewal wuxuuna diiwaangeliyaa xaaladda credential-ka maqan si maamule ama support flow uu macaamilka uga codsan karo inuu dib u oggolaado lacag-bixinta ka hor taariikhda renewal-ka.

Tani waxay ka hortagtaa in membership uu u muuqdo inuu auto-renew sameynayo marka gateway-gu kaliya qaadi karo lacag-bixinno hal-mar ah. Gateway add-ons waa inay xaqiijiyaan in checkouts-ka soo noqnoqda ay kaydiyaan credential dib loo isticmaali karo, gaar ahaan marka gateway-gu taageero labadaba one-time capture iyo vaulted/subscription payment modes.

**Oggolow trials aan lahayn payment** **method:** Marka ikhtiyaarkan la shido, client-kaagu uma baahna inuu ku daro wax macluumaad maaliyadeed ah inta lagu jiro habka diiwaangelinta. Tani waxaa loo baahnaan doonaa oo keliya marka mudada trial-ku dhammaato.

<!-- Screenshot unavailable: Allow Trials Without Payment Method toggle on the Payments settings page -->

**Dir invoice marka lacag-bixinta la xaqiijiyo:** Tani waxay ku siinaysaa ikhtiyaar ah in invoice la diro ama aan la dirin ka dib lacag-bixinta. Ogow in isticmaalayaashu heli doonaan taariikhdooda lacag-bixinta hoosta dashboard-ka subsite-kooda. Ikhtiyaarkani kuma khuseeyo Manual Gateway.

<!-- Screenshot unavailable: Send Invoice on Payment Confirmation toggle on the Payments settings page -->

**Qaabka lambarraynta invoice-ka:** Halkan, waxaad dooran kartaa payment reference code ama sequential number scheme. Haddii aad doorato inaad invoice-yadaada u isticmaasho payment reference code, waxba uma baahnid inaad habayso. Haddii aad doorato inaad isticmaasho sequential number scheme, waxaad u baahan doontaa inaad habayso **next invoice number** (Lambarkan waxaa loo isticmaali doonaa invoice number ahaan invoice-ka xiga ee lagu soo saaro nidaamka. Hal ayaa lagu kordhiyaa mar kasta oo invoice cusub la abuuro. Waad beddeli kartaa oo kaydin kartaa si aad invoice sequential number ugu dejiso qiime gaar ah) iyo **invoice number prefix.**

<!-- Screenshot unavailable: Invoice numbering scheme dropdown with Payment Reference Code and Sequential Number options -->

<!-- Screenshot unavailable: Next invoice number and invoice number prefix fields shown when Sequential Number is selected -->

## Meesha laga helo gateways-ka:

Waxaad payment gateways-ka ku dejin kartaa isla boggaas ( **Ultimate Multisite > Settings > Payments**). Si toos ah hoosta **active payment gateways** , waxaad arki doontaa: _Stripe_ , _Stripe_ _Checkout_ , _PayPal_ iyo _Manual_.

![Qaybta Active Payment Gateways oo taxaysa Stripe, Stripe Checkout, PayPal iyo Manual](/img/config/payments-active-gateways.png)

Waxaan leenahay maqaal gaar ah oo loogu talagalay payment gateway kasta kaas oo kugu hagi doona tallaabooyinka dejintiisa, waxaadna ka heli kartaa links-ka hoose.

Waxaad arki kartaa oo tafatiri kartaa faahfaahinta lacag-bixinta:

![Interface-ka tafatirka lacag-bixinta](/img/admin/payment-edit.png)

Halkan waxaa ku yaal muuqaal buuxa oo bogga tafatirka lacag-bixinta ah:

![Interface-ka buuxa ee tafatirka lacag-bixinta](/img/admin/payment-edit-full.png)

Halkan sidoo kale waxaa ku yaal muuqaal buuxa oo dejinnada payment gateways-ka ah:

![Bogga buuxa ee dejinnada payment gateways-ka](/img/config/settings-payments-gateways-full.png)

**Dejinta Stripe gateway**

**Dejinta PayPal gateway**** **

**Dejinta manual payments**

Hadda, haddii aad rabto inaad _WooCommerce_ , _GoCardless_ ama _Payfast_ u isticmaasho payment gateway-gaaga, waxaad u baahan doontaa inaad **rakibto oo habayso add-ons-kooda**.

### Sida loo rakibo WooCommerce add-on:

Waxaan fahamsanahay in _Stripe_ iyo _PayPal_ aan laga heli karin dalal qaarkood, taas oo xaddidaysa ama carqaladaynaysa isticmaalayaasha Ultimate Multisite inay si wax ku ool ah u isticmaalaan plugin-keena. Sidaas darteed waxaan abuurnay add-on si loo dhexgeliyo _WooCommerce,_ kaas oo ah plugin e-commerce aad loo jecel yahay. Developers-ka adduunka oo dhan waxay abuureen add-ons si ay ugu dhexgeliyaan payment gateways kala duwan. Waxaan ka faa'iidaysannay tan si aan u ballaarinno payment gateways-ka aad ku isticmaali karto nidaamka billing ee Ultimate Multisite.

_**MUHIIM:** Ultimate Multisite: WooCommerce Integration wuxuu u baahan yahay in WooCommerce laga hawlgeliyo ugu yaraan site-kaaga weyn._

Marka hore, fadlan tag bogga add-ons-ka. Waxaad ka heli kartaa adigoo tagaya **Ultimate Multisite > Settings**. Waa inaad aragtaa jadwalka **Add-ons**. Guji **Hubi Add-ons-keena**.

<!-- Screenshot unavailable: Add-ons table on the Ultimate Multisite Settings sidebar with the Check our Add-ons link -->

Ka dib markaad gujiso **Hubi Add-ons-keena** , waxaa laguu wareejin doonaa bogga add-ons-ka. Halkan waxaad ka heli kartaa dhammaan Ultimate Multisite add-ons. Guji add-on-ka **Ultimate Multisite: WooCommerce Integration**.

![Bogga add-ons-ka oo taxaya Ultimate Multisite add-ons oo ay ku jirto WooCommerce Integration](/img/addons/addons-page.png)

Daaqad ayaa soo bixi doonta oo leh faahfaahinta ku-darka. Kaliya guji **Hadda Rakib**.

<!-- Sawir shaashad lama heli karo: wada-hadalka faahfaahinta ku-darka Isdhexgalka Ultimate Multisite WooCommerce oo leh badhanka Hadda Rakib -->

Kadib marka rakibiddu dhammaato, waxaa laguu wareejin doonaa bogga kordhinnada. Halkan, kaliya guji **Ka Hawlgeli Shabakadda** waxaana ku-darka WooCommerce laga hawlgelin doonaa shabakaddaada.

<!-- Sawir shaashad lama heli karo: bogga kordhinnada oo leh xiriirka Ka Hawlgeli Shabakadda ee ku-darka Isdhexgalka WooCommerce -->

Kadib markaad hawlgeliso, haddii aadan weli ku rakibin oo ku hawlgelin kordhinta WooCommerce mareegtaada, waxaad heli doontaa xusuusin.

<!-- Sawir shaashad lama heli karo: ogeysiis maamul oo xusuusinaya maamulaha inuu rakibo oo hawlgeliyo kordhinta WooCommerce -->

Si aad wax badan uga akhrido ku-darka Isdhexgalka WooCommerce, **halkan guji**.

### Sida loo rakibo ku-darka GoCardless:

Tallaabooyinka lagu rakibo ku-darka _GoCardless_ waxay aad ugu egyihiin kuwa ku-darka _WooCommerce_. Fadlan tag bogga ku-darrada oo dooro ku-darka **Ultimate Multisite: GoCardless Gateway**.

<!-- Sawir shaashad lama heli karo: bogga ku-darrada oo ku-darka Ultimate Multisite GoCardless Gateway la muujiyay -->

Daaqadda ku-darka ayaa soo bixi doonta. Guji **Hadda Rakib**.

<!-- Sawir shaashad lama heli karo: wada-hadalka faahfaahinta ku-darka Ultimate Multisite GoCardless Gateway oo leh badhanka Hadda Rakib -->

Kadib marka rakibiddu dhammaato, waxaa laguu wareejin doonaa bogga kordhinnada. Halkan, kaliya guji **Ka Hawlgeli Shabakadda** waxaana ku-darka _GoCardless_ laga hawlgelin doonaa shabakaddaada.

<!-- Sawir shaashad lama heli karo: bogga kordhinnada oo leh xiriirka Ka Hawlgeli Shabakadda ee ku-darka GoCardless Gateway -->

Si aad u barato sida loogu bilaabo gateway-ga _GoCardless_, **akhri maqaalkan**.

### Sida loo rakibo ku-darka Payfast:

Tag bogga ku-darrada oo dooro ku-darka **Ultimate Multisite: Payfast Gateway**.

<!-- Sawir shaashad lama heli karo: bogga ku-darrada oo ku-darka Ultimate Multisite Payfast Gateway la muujiyay -->

Daaqadda ku-darka ayaa soo bixi doonta. Guji **Hadda Rakib.**

<!-- Sawir shaashad lama heli karo: wada-hadalka faahfaahinta ku-darka Ultimate Multisite Payfast Gateway oo leh badhanka Hadda Rakib -->

Kadib marka rakibiddu dhammaato, waxaa laguu wareejin doonaa bogga kordhinnada. Halkan, kaliya guji **Ka Hawlgeli Shabakadda** waxaana ku-darka _Payfast_ laga hawlgelin doonaa shabakaddaada.

<!-- Sawir shaashad lama heli karo: bogga kordhinnada oo leh xiriirka Ka Hawlgeli Shabakadda ee ku-darka Payfast Gateway -->
