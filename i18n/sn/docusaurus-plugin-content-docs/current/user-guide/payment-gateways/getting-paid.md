---
title: Kuvumbwa
sidebar_position: 15
_i18n_hash: 0f45bd2eb659d27199ac9f9752e1a8ae
---
# Kuva (v2)

_**CHINDIRA CHINDIRA: Iriro iri rudo!**_

Ultimate Multisite inenge neenda kune nzira dzinogona kuita membership uye kuita billing. Kuti nzira yedu ya billing ine zvinhu, tinenge tichingira (integrate) zvinangwa dzakakodzera dzakasiyana-siyana dzinogona kuita payment kubva pamweche wese we e-commerce. Zvinangwa dzakakodzera dziri kune Ultimate Multisite ndezvinhu zvakakosha neStripe, PayPal, uye Payment yakaita manual (Manual Payment). Unogona kuda kuchengetedza WooCommerce, GoCardless, uye Payfast kuti uone payment nekubata add-ons dzavo.

## Settings Dziri Kune Mazuva Akapfuma (Basic Settings)

Unogona kuita zvinhu izvi kune zvinangwa dzinopfuura (payment gateways) pane Ultimate Multisite payment settings. Unogona kunzwisisa nekuenda ku **Ultimate Multisite menu > Settings > Payments.**

![Payments settings page in Ultimate Multisite showing the Payments panel](/img/config/payments-settings-page.png)

Panguva unenge uita setup we gateway yako ya payment, ndichida kuti uve nekuona zvinhu zvinokwanisa kuita basic payment settings:

**Force auto-rene w:** Izvi zvichigadzirisa kuti payment ichiita auto-recur (kuti ichireve) mune nguva dzese dzinopfuura dzinogona kuitwa, kana kuti ndiri kuratidzo kwemakore anogona kuita user akasankana.

<!-- Screenshot unavailable: Force Auto-Renew toggle setting on the Payments settings page -->

Ultimate Multisite v2.13.0 inotjeka kuti gateway yakasiyana inenge inenge ine credential ya re-use (reusable renewal credential) panguva inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge

Iyiwe, iye inenge inotora kuti kune zvinhu izvi zvinoreva.

**Kubvumira trials pane nzira dze kupushwa (payment method):** Nechii chii chinobva, mutenda wako hauchida kuita kunzwisisa nekuita kuratidza nguva yakapfuura nekuti gateway inogona kutora kupushwa kune zvinhu zviri kubva muna.

<!-- Screenshot unavailable: Allow Trials Without Payment Method toggle on the Payments settings page -->

**Kutenda invoice panguva dzo kupushwa:** Izvi zvinokupa chii chinobva, kuti unenge uone kana haunenge utora invoice panguva dzo kupushwa. Ndinenge unoziva kuti nguva dzavo dzinogona kuona rekodi dze kupushwa kwavo pane dashboard yavo ya subsite. Izvi zvinotora chii chinobva kune Manual Gateway.

<!-- Screenshot unavailable: Send Invoice on Payment Confirmation toggle on the Payments settings page -->

**Mavhango ekurisa invoice (Invoice numbering scheme):** Mutauro wese unogona kutora, kana kuti nzira dze namba dziri kune kupushwa. Kana uchigona kutora chii chinobva necode dze kupushwa (payment reference code) kune invoices dzako, haunenge uchida kuita kunzwisisa kune zvinhu. Kana uchigona kutora nzira dze namba dziri kune kupushwa (sequential number scheme), unofanira kuita kunzwisisa **namba dze invoice yakanaka** (Namba iyi ichaizivikanwa kune invoice yakareta kubva). Namba iyi inogadzirwa neinvoice yakareta yakareta. Unogona kutamba uye kuita zvinhu kuti ureshe namba dze invoice dziri kune kupushwa kune chii chinobva. uye **prefix dze invoice number**.

<!-- Screenshot unavailable: Invoice numbering scheme dropdown with Payment Reference Code and Sequential Number options -->

<!-- Screenshot unavailable: Next invoice number and invoice number prefix fields shown when Sequential Number is selected -->

## Kuva kuva kune gateway:

Ungava gateways iyei paani ( **Ultimate Multisite > Settings > Payments**). Pamwe panguva pachishandana ne **active payment gateways**, unogona kuona: _Stripe_ , _Stripe_ _Checkout_ , _PayPal_ uye _Manual_.

![Active Payment Gateways section listing Stripe, Stripe Checkout, PayPal and Manual](/img/config/payments-active-gateways.png)

Tiri ne chidzidzo cheduche chinogona kuita kuti uone uye utambire iye iye (payment gateway). Unogona kuona uye kutambira zvinangwa zvekuita payment:

![Payment edit interface](/img/admin/payment-edit.png)

Iyi ndiyo kuviona kwakakosha kwe page yekutambira payment:

![Payment edit full interface](/img/admin/payment-edit-full.png)

Iyiwo kunoone zvinhu zvinangwa zvekuita gateways:

![Payment gateways settings full page](/img/config/settings-payments-gateways-full.png)

**Kutambira Stripe gateway**

**Kutambira PayPal gateway**** **

**Kutambira payments manual**

Nekuti unoda kuti uve ne _WooCommerce_ , _GoCardless_ kana _Payfast_ se payment gateway yako, unofanira **kuti utange uye kutambira add-ons dzavo**.

### Sei kuita WooCommerce add-on:

Tiri tiri kunoziva kuti _Stripe_ uye _PayPal_ haine pa ndiro dzakawanda dzinogona kuita zvinhu zvinogona kuva dambudziko kune Ultimate Multisite users vachigona kutamba zvakanaka plugin yedu. Saka tikati add-on kuti tishandise _WooCommerce_, inoshandiswa zvakawanda e-commerce plugin. Vadzidzi vachiti pa dzimwe dzakawanda vachikwanisa kuita add-ons kuti vashandise payment gateways dzakasiyana dzinogona kubva kune iye. Tiri shandisa izvi kuti tishandise gateways dzakasiyana dzinogona kutamba ne system yekutambira billing ya Ultimate Multisite.

_**CHINAI:** Ultimate Multisite: Kutiwe neWooCommerce inenge kuitwa (activated) pane main site yako._

Kutanga, ndichatanga kuenda pa page ya add-ons. Ungava iye nekugona **Ultimate Multisite > Settings**. Unoda kuona table ye **Add-ons**. Chibvumira **Check our Add-ons**.

<!-- Screenshot unavailable: Add-ons table on the Ultimate Multisite Settings sidebar with the Check our Add-ons link -->

Panguva unachikumbira **Check our Add-ons**, uchaedza kuenda pa page ye add-ons. Panguva iye, ungava zvose Ultimate Multisite add-ons. Chibvumira add-on ye **Ultimate Multisite: WooCommerce Integration**.

![Add-ons page listing Ultimate Multisite add-ons including WooCommerce Integration](/img/addons/addons-page.png)

Mhando dzaka-addon dzakasiyana dzinogona kuva panguva iye. Chibvumira **Install Now**.

<!-- Screenshot unavailable: Ultimate Multisite WooCommerce Integration add-on details dialog with Install Now button -->

Panguva installation yakakoma, uchaedza kuenda pa plugins page. Panguva iye, chibvumira **Network Activate** uye add-on ye WooCommerce itarigadzirwa (activated) pane network yako.

<!-- Screenshot unavailable: Plugins page with the Network Activate link for the WooCommerce Integration add-on -->

Panguva inenge yakagadzirwa, kana haunenge hauna plugin ye WooCommerce yakasiyana dzinogona kuva (installed and activated) pane website yako, uchakwanisa kuona reminder.

<!-- Screenshot unavailable: Admin notice reminding the administrator to install and activate the WooCommerce plugin -->

Kuti uone zvinhu zvakawanda pamusoro pe add-on ye WooCommerce Integration, **chibvumira iye**.

### Sei kuti utange install GoCardless add-on:

Ngano dzinotora kuti kudzira (install) _GoCardless_ add-on kuno ndiri chinokosha, zvinhu zvakasiyi nezvinhu zvinogona kuita. Unoda kuenda kwenye yepage ya add-ons uye utange uchigadzirisa (select) **Ultimate Multisite: GoCardless Gateway** add-on.

<!-- Screenshot unavailable: Add-ons page with the Ultimate Multisite GoCardless Gateway add-on highlighted -->

Chidzidzo chekuti add-on ichi chiri kuitwa. Chidzidzo chinokupa zvinhu zvinotora. Click kuti **Install Now**.

<!-- Screenshot unavailable: Ultimate Multisite GoCardless Gateway add-on details dialog with Install Now button -->

Panguva dzinotora kuita, uchakwanisa kuenda kwenye yepage ya plugins (plugins page). Panguva iyu, ndichigadzirisa **Network Activate** uye _GoCardless_ add-on ichi chiri kuitwa munzvimbo yako (network).

<!-- Screenshot unavailable: Plugins page with the Network Activate link for the GoCardless Gateway add-on -->

Kuti uone sei kudzira (get started) ne _GoCardless_ gateway, **shandisa riiro rino**.

### Sei kudzira Payfast add-on:

Unoda kuenda kwenye yepage ya add-ons uye utange uchigadzirisa **Ultimate Multisite: Payfast Gateway** add-on.

<!-- Screenshot unavailable: Add-ons page with the Ultimate Multisite Payfast Gateway add-on highlighted -->

Chidzidzo chekuti add-on ichi chiri kuitwa. Click kuti **Install Now**.

<!-- Screenshot unavailable: Ultimate Multisite Payfast Gateway add-on details dialog with Install Now button -->

Panguva dzinotora kuita, uchakwanisa kuenda kwenye yepage ya plugins (plugins page). Panguva iyu, ndichigadzirisa **Network Activate** uye _Payfast_ add-on ichi chiri kuitwa munzvimbo yako (network).

<!-- Screenshot unavailable: Plugins page with the Network Activate link for the Payfast Gateway add-on -->
