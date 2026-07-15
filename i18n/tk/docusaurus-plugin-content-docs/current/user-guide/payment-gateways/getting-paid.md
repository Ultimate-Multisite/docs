---
title: Töleg almak
sidebar_position: 15
_i18n_hash: 7808f514b91797f7ffb68811b12c48be
---
# Töleg almak (v2)

_**MÖHÜM BELLIK: Bu makala Ultimate Multisite 2.x wersiýasyna degişlidir.**_

Ultimate Multisite içinde agzalyk we hasaplaşyk ulgamy bar. Hasaplaşyk ulgamymyzyň işlemegi üçin, e-commerce-de ulanylýan iň giň ýaýran töleg gateway-lerini birleşdirdik. Ultimate Multisite-de adaty töleg gateway-leri _Stripe_ , _PayPal_ , we El bilen tölegdir. Şeýle hem degişli add-onlaryny gurnap, tölegleri almak üçin _WooCommerce_ , _GoCardless_ we _Payfast_ ulanyp bilersiňiz.

## Esasy sazlamalar {#basic-settings}

Bu töleg gateway-leriniň islendik birini Ultimate Multisite töleg sazlamalarynyň aşagynda sazlap bilersiňiz. Ony **Ultimate Multisite menu > Settings > Payments** boýunça girip tapyp bilersiňiz.

![Ultimate Multisite-de Payments panelini görkezýän töleg sazlamalary sahypasy](/img/config/payments-settings-page.png)

Töleg gateway-iňizi sazlamazdan öň, sazlap biljek esasy töleg sazlamalaryňyza serediň:

**Force auto-rene** **w:** Bu ulanyjynyň saýlan hasaplaşyk ýygylygyna baglylykda her hasaplaşyk döwrüniň ahyrynda tölegiň awtomatiki gaýtalanmagyny üpjün eder.

<!-- Screenshot unavailable: Force Auto-Renew toggle setting on the Payments settings page -->

Ultimate Multisite v2.13.0 awtomatiki täzelenme açyk bolan gaýtalanýan agzalygy ýatda saklamazdan öň işjeň gateway-de gaýtadan ulanyp bolýan täzelenme ygtyýarlygynyň bardygyny barlaýar. Täzelenme ygtyýarlygy gateway subscription, billing agreement, saklanan vault token ýa-da şoňa deň gaýtadan ulanyp bolýan töleg usuly bolup biler. Eger gateway ulanyp boljak ygtyýarlygyň ýokdugyny habar berse, Ultimate Multisite agzalygy ýatda saklaýar, ýöne awtomatiki täzelenmäni öçürýär we administratoryň ýa-da goldaw akymynyň täzelenme senesinden öň müşderiden tölegi täzeden ygtyýarlylandyrmagy sorap bilmegi üçin ýetmeýän ygtyýarlyk ýagdaýyny ýazga alýar.

Bu, gateway diňe bir gezeklik tölegleri ýygnap bilýän wagty agzalygyň awtomatiki täzelenýän ýaly görünmeginiň öňüni alýar. Gateway add-onlary, esasan hem gateway hem bir gezeklik capture, hem-de vaulted/subscription töleg režimlerini goldaýan ýagdaýynda, gaýtalanýan checkoutlaryň gaýtadan ulanyp bolýan ygtyýarlygy saklaýandygyny tassyklamalydyr.

**Allow trials without payment** **method:** Bu opsiýa açyk bolanda, müşderiňiz hasaba alyş prosesinde hiç hili maliýe maglumatyny goşmaly bolmaz. Bu diňe synag möhleti gutarandan soň talap ediler.

<!-- Screenshot unavailable: Allow Trials Without Payment Method toggle on the Payments settings page -->

**Send invoice on payment confirmation:** Bu tölegden soň invoice ibermek ýa-da ibermezlik mümkinçiligini berýär. Ulanyjylaryň töleg taryhyna öz subsite dashboardynyň aşagynda elýeterliligi boljakdygyny belläň. Bu opsiýa Manual Gateway-e degişli däldir.

<!-- Screenshot unavailable: Send Invoice on Payment Confirmation toggle on the Payments settings page -->

**Invoice numbering scheme:** Bu ýerde, töleg salgylanma koduny ýa-da yzygiderli san shemasyny saýlap bilersiňiz. Eger invoice-laryňyz üçin töleg salgylanma koduny ulanmagy saýlasaňyz, hiç zat sazlamagyňyz gerek däl. Eger yzygiderli san shemasyny ulanmagy saýlasaňyz, **indiki invoice belgisi** (Bu san ulgamda döredilen indiki invoice üçin invoice belgisi hökmünde ulanylar. Täze invoice döredilende her gezek bir san artdyrylýar. Invoice yzygiderli belgisini belli bir baha täzeden sazlamak üçin ony üýtgedip we ýatda saklap bilersiňiz) we **invoice belgisi prefiksi** sazlamaly bolarsyňyz.

<!-- Screenshot unavailable: Invoice numbering scheme dropdown with Payment Reference Code and Sequential Number options -->

<!-- Screenshot unavailable: Next invoice number and invoice number prefix fields shown when Sequential Number is selected -->

## Gateway-leri nireden tapmaly: {#where-to-find-the-gateways}

Töleg gateway-lerini şol bir sahypada sazlap bilersiňiz ( **Ultimate Multisite > Settings > Payments**). **active payment gateways** -iň göni aşagynda şulary görüp bilersiňiz: _Stripe_ , _Stripe_ _Checkout_ , _PayPal_ we _Manual_.

![Stripe, Stripe Checkout, PayPal we Manual görkezilen Active Payment Gateways bölümi](/img/config/payments-active-gateways.png)

Her töleg gateway-i üçin ony sazlamak ädimlerinde size ýol görkezjek aýratyn makalamyz bar; olary aşakdaky linklerden tapyp bilersiňiz.

Töleg jikme-jikliklerini görüp we redaktirläp bilersiňiz:

![Töleg redaktirleme interfeýsi](/img/admin/payment-edit.png)

Ine, töleg redaktirleme sahypasynyň doly görnüşi:

![Töleg redaktirleme doly interfeýsi](/img/admin/payment-edit-full.png)

Şeýle hem töleg gateway-leri sazlamalarynyň doly görnüşi:

![Töleg gateway-leri sazlamalarynyň doly sahypasy](/img/config/settings-payments-gateways-full.png)

**Stripe gateway-ni sazlamak**

**PayPal gateway-ni sazlamak**** **

**El bilen tölegleri sazlamak**

Indi, töleg gateway-iňiz hökmünde _WooCommerce_ , _GoCardless_ ýa-da _Payfast_ ulanmak isleseňiz, olaryň **add-onlaryny gurnap we sazlamaly** bolarsyňyz.

### WooCommerce add-onyny nädip gurnamaly: {#how-to-install-the-woocommerce-add-on}

_Stripe_ we _PayPal_ käbir ýurtlarda elýeterli däldigine düşünýäris; bu bolsa Ultimate Multisite ulanyjylarynyň pluginimizi netijeli ulanmagyny çäklendirýär ýa-da päsgel berýär. Şonuň üçin biz örän meşhur e-commerce plugini bolan _WooCommerce,_ bilen birleşmek üçin add-on döretdik. Dünýäniň dürli ýerindäki işläp düzüjiler oňa dürli töleg gateway-lerini birleşdirmek üçin add-onlar döretdiler. Biz Ultimate Multisite hasaplaşyk ulgamy bilen ulanyp biljek töleg gateway-leriňizi giňeltmek üçin mundan peýdalandyk.

_**MÖHÜM:** Ultimate Multisite: WooCommerce Integration üçin WooCommerce azyndan esasy saýtyňyzda işjeňleşdirilen bolmaly._

Ilki bilen, add-onlar sahypasyna gidiň. Ony **Ultimate Multisite > Settings** boýunça girip tapyp bilersiňiz. **Add-ons** tablisasyny görmeli. **Check our Add-ons** üstüne basyň.

<!-- Screenshot unavailable: Add-ons table on the Ultimate Multisite Settings sidebar with the Check our Add-ons link -->

**Check our Add-ons** üstüne basanyňyzdan soň, add-onlar sahypasyna ugradylyp geçirilersiňiz. Bu ýerde ähli Ultimate Multisite add-onlaryny tapyp bilersiňiz. **Ultimate Multisite: WooCommerce Integration** add-onynyň üstüne basyň.

![WooCommerce Integration bilen birlikde Ultimate Multisite add-onlaryny görkezýän add-onlar sahypasy](/img/addons/addons-page.png)

Goşmaça modulyň jikme-jiklikleri bilen penjire açylar. Diňe **Häzir gurna** düwmesine basyň.

<!-- Ekran suraty elýeterli däl: Häzir gurna düwmesi bolan Ultimate Multisite WooCommerce Integration goşmaça modulynyň jikme-jiklikler dialogy -->

Gurnama tamamlanandan soň, siz pluginler sahypasyna ugrukdyrylarsyňyz. Bu ýerde diňe **Tor boýunça işjeňleşdir** düwmesine basyň we WooCommerce goşmaça moduly toruňyzda işjeňleşdiriler.

<!-- Ekran suraty elýeterli däl: WooCommerce Integration goşmaça moduly üçin Tor boýunça işjeňleşdir baglanyşygy bolan pluginler sahypasy -->

Ony işjeňleşdireniňizden soň, eger websaýtyňyzda WooCommerce plugin henizem gurnalan we işjeňleşdirilen bolmasa, size ýatlatma görkeziler.

<!-- Ekran suraty elýeterli däl: Administratory WooCommerce pluginini gurnamaga we işjeňleşdirmäge ýatladýan admin habarnamasy -->

WooCommerce Integration goşmaça moduly barada has köp okamak üçin **şu ýere basyň**.

### GoCardless goşmaça modulyny nädip gurnamaly: {#how-to-install-the-gocardless-add-on}

_GoCardless_ goşmaça modulyny gurnamagyň ädimleri _WooCommerce_ goşmaça moduly bilen diýen ýaly birmeňzeş. Goşmaça modullar sahypasyna geçiň we **Ultimate Multisite: GoCardless Gateway** goşmaça modulyny saýlaň.

<!-- Ekran suraty elýeterli däl: Ultimate Multisite GoCardless Gateway goşmaça moduly bellenen goşmaça modullar sahypasy -->

Goşmaça modul penjiresi açylar. **Häzir gurna** düwmesine basyň.

<!-- Ekran suraty elýeterli däl: Häzir gurna düwmesi bolan Ultimate Multisite GoCardless Gateway goşmaça modulynyň jikme-jiklikler dialogy -->

Gurnama tamamlanandan soň, siz pluginler sahypasyna ugrukdyrylarsyňyz. Bu ýerde diňe **Tor boýunça işjeňleşdir** düwmesine basyň we _GoCardless_ goşmaça moduly toruňyzda işjeňleşdiriler.

<!-- Ekran suraty elýeterli däl: GoCardless Gateway goşmaça moduly üçin Tor boýunça işjeňleşdir baglanyşygy bolan pluginler sahypasy -->

_GoCardless_ gateway bilen nähili başlamalydygyny öwrenmek üçin **şu makalany okaň**.

### Payfast goşmaça modulyny nädip gurnamaly: {#how-to-install-the-payfast-add-on}

Goşmaça modullar sahypasyna geçiň we **Ultimate Multisite: Payfast Gateway** goşmaça modulyny saýlaň.

<!-- Ekran suraty elýeterli däl: Ultimate Multisite Payfast Gateway goşmaça moduly bellenen goşmaça modullar sahypasy -->

Goşmaça modul penjiresi açylar. **Häzir gurna.** düwmesine basyň

<!-- Ekran suraty elýeterli däl: Häzir gurna düwmesi bolan Ultimate Multisite Payfast Gateway goşmaça modulynyň jikme-jiklikler dialogy -->

Gurnama tamamlanandan soň, siz pluginler sahypasyna ugrukdyrylarsyňyz. Bu ýerde diňe **Tor boýunça işjeňleşdir** düwmesine basyň we _Payfast_ goşmaça moduly toruňyzda işjeňleşdiriler.

<!-- Ekran suraty elýeterli däl: Payfast Gateway goşmaça moduly üçin Tor boýunça işjeňleşdir baglanyşygy bolan pluginler sahypasy -->
