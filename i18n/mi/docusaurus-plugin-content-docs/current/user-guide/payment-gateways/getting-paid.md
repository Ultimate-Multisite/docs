---
title: Whakawhanaungatanga
sidebar_position: 15
_i18n_hash: 0f45bd2eb659d27199ac9f9752e1a8ae
---
# Whakarongo Pago (v2)

_**NOTE WHAKANGA: Ko tēnei tikanga he tino whakamārama ki Ultimate Multisite v2.x.**_

He wahi membership me billing (pago) whakatika ana i te Ultimate Multisite. I roto i te mahi o te sistema pago, he whakotahitanga mātou i ngā payment gateways (whakamahara i ngā wahi pago) tino whakahou i te e-commerce. Ngā payment gateways default i te Ultimate Multisite ahau **Stripe**, **PayPal**, me **Manual Payment**. He tino pai hoki ki te whakamahi i **WooCommerce**, **GoCardless** me **Payfast** hei pētea ngā pago e ngā add-on (whakawhiti) o rā.

## Whakawātea Pākehā (Basic Settings)

Ko koe e taea ai te whakarite ahau i ngā payment gateways ei whaiaro ana i ngā whakaritenga pago o te Ultimate Multisite. Ko koe e taea te mātakitaki i tēnei mea i te whakapiri ki **Ultimate Multisite menu > Settings > Payments.**

![Payments settings page in Ultimate Multisite showing the Payments panel](/img/config/payments-settings-page.png)

Iha koe i te whakauru i tō payment gateway, he tino pai hoki ki te mātakitaki i ngā whakaritenga pago ei whaiaro ana e taea ai koe te whakarite:

**Force auto-rene** **w:** Ko tēnei mea e hiahia ahau kia whakatika i te pago automatically i te whakamutunga o every billing cycle (cycle pago) i runga i te frequency pago (pago frequency) kua whaiwhiako te user.

<!-- Screenshot unavailable: Force Auto-Renew toggle setting on the Payments settings page -->

Ko Ultimate Multisite v2.13.0 e tino whakamārama ana ahau mō te mea i pētea active gateway he utu (credential) e taea ai te whakatika i tō pētea i te wā reira, i roto i te whakaputanga o membership e hiahia i auto-renewal. He utu renewal credential he mahi subscription o gateway, agreement billing, token vault kua pētea, ahau he method pago e taea ai te whaiwhiako i te wā reira. Ko te gateway e tino whaiwhiako ana ahau kei te hiahia i noho credential e tika ana, Ultimate Multisite e pētea te membership akoi i whakatika i te auto-renewal me te kirikirau o te missing-credential (noho credential e pētea) kia taea ai te whakamārama ki te administrator he tino whaiwhiako i te customer kei te hiahia i te reauthorize tō pago mō te wā reira.

Ko tēnei e whakatika i te mea he taea ana i te membership ki te whakaarohia ana ahau e auto-renew (whakamutunga) ko he gateway kei te tino pai akorua (one-time payments) anō. Me whakaae ngā add-ons o te gateway kia whakaatu i te whakamahi credential (token/key) e taea te whakamahi anō, he tino nui ahau ki te wā o te gateway e pēnei ana i te one-time capture me te payment modes vault/subscription.

**Whakaaro i ngā trials without payment method:** Me whakatika tēnei option (option) ko, ka wona koe i te client kia whai i te whakamahi i ngā whakamahi wāhi (financial information) ahua he pēnei i te registration process. Ka hiahia ana ahau ki te tino whakaaro ahau i tēnei i te wā o te trial period e whāinga.

<!-- Screenshot unavailable: Allow Trials Without Payment Method toggle on the Payments settings page -->

**Whakaue invoice i te confirmation o te payment:** Ko tēnei e tino whakatika ahau he option ana me ngā users kia whai i te invoice (invoice) apo te payment. He tino nui, ka hiahia ngā users ki te whai i te payment history (history o te payment) i runga i te dashboard o te subsite (subsite). Ko tēnei option he āhua ana ki te Manual Gateway.

<!-- Screenshot unavailable: Send Invoice on Payment Confirmation toggle on the Payments settings page -->

**Whakamahi scheme o invoice numbering:** I tēnei, ka taea e koe te whiri i te payment reference code (code o te whakaaro o payment) he tino pai ahau ki te sequential number scheme (scheme o nga nūmu mō te invoice). Ko te mea, ko te tino pai ahau ana i te use o te payment reference code mo ngā invoices. He tino nui, ka hiahia koe kia whakatika i te **next invoice number** (ko tēnei nūmu e whakamahia he invoice number mo te invoice pēnei i te invoice next generated). Ka pēnei ahau ana i te one every time a new invoice is created. Ko koe e taea te whakawhiti i tēnei me te save ki te reset te sequential number o te invoice ki te value-specific (tētahi wāhi tino pai) value. me te **invoice number prefix** (te whiri o nūmu mō te invoice).

<!-- Screenshot unavailable: Invoice numbering scheme dropdown with Payment Reference Code and Sequential Number options -->

<!-- Screenshot unavailable: Next invoice number and invoice number prefix fields shown when Sequential Number is selected -->

## A roaheke i te gateway (Where to find the gateways):

Ko taea e koe te whakarite i ngā gateway o paimane ( **Ultimate Multisite > Settings > Payments**). I roto i te whakataki i **active payment gateways**, ka taea e koe te whakaaroha: _Stripe_, _Stripe_ _Checkout_, _PayPal_ me _Manual_.

![Active Payment Gateways section listing Stripe, Stripe Checkout, PayPal and Manual](/img/config/payments-active-gateways.png)

He whakamārama mātou i roto i article whānui mō every payment gateway, akomanga ana i ngā mahi hei whakarite ia, ka taumaha koe ki te link-tahuna i runga i runga katoa.

Ko taea e koe te whakaahua me te whakaiti i ngā whakamahi o te paimane (payment details):

![Payment edit interface](/img/admin/payment-edit.png)

He whakaahu whānui o te paimane whakaiti:

![Payment edit full interface](/img/admin/payment-edit-full.png)

He whakaahu whānui hoki o ngā whakaritenga gateway o paimane:

![Payment gateways settings full page](/img/config/settings-payments-gateways-full.png)

**Whakarite i te Stripe gateway**

**Whakarite i te PayPal gateway**** **

**Whakarite paimane manuia (Setting up manual payments)**

I ko te mea, ko te tino pai ana koe ki te whakamahi _WooCommerce_, _GoCardless_ he _Payfast_ mōtake o paimane o koe, ka taea e koe te whai i te mahi hei **whakarite me whakarite ngā add-ons** o ia.

### He aha te mahi hei whakauru i te WooCommerce add-on:

He tino whakamārama ana mātou ki te mea kei te wāhi neke atu i ngā wāhi i roto i ngā wāhi, ko _Stripe_ me _PayPal_ ka whai ake nei, e pōtiki ai ngā mātua o Ultimate Multisite kia whakamahi i tō plugin akorua i te mea tino pai. Ko te mea he whakatika ngā developers i roto i te ao ki te whai i ngā add-on hei whakauru ngā gateway o paimane haere mai ki ahau. Ka whakamahi ahau i tēnei hei whero i ngā gateway o paimane ka taea e koe te whakamahi ana me te system billing o Ultimate Multisite.

_**IMPORTANT:** Ultimate Multisite: Ko te Whakawhanaungatanga me WooCommerce e hiahia ana ki te whakatau i WooCommerce i runga i te wāhi nui o koe._

Kia kaha, he whai i te puta mai ki te manawa (add-ons) page. Kei te mea e taea ai koe te pēhea, ka pēnei: **Ultimate Multisite > Settings**. E reira e kitea te table o **Add-ons**. Whakawatea i **Check our Add-ons**.

<!-- Screenshot unavailable: Add-ons table on the Ultimate Multisite Settings sidebar with the Check our Add-ons link -->

Iha i te whakatipu i **Check our Add-ons**, ka whakawatea koe ki te puta mai ki te manawa page. E reira e kitea ai semua i ngā add-ons o Ultimate Multisite. Whakawatea i te add-on **Ultimate Multisite: WooCommerce Integration**.

![Add-ons page listing Ultimate Multisite add-ons including WooCommerce Integration](/img/addons/addons-page.png)

Ka whakatipu i te wāhi (window) e hihia ngā whakamahi o te add-on. Whakawatea i **Install Now** (Whakaritenga Irate).

<!-- Screenshot unavailable: Ultimate Multisite WooCommerce Integration add-on details dialog with Install Now button -->

Iha i te whakatipu i te rite, ka whakawatea koe ki te plugins page. E reira, whakamārama i **Network Activate** (Whakawatea i te Whānau), ā, ka whakawatea ai te add-on WooCommerce i runga i te network o koe.

<!-- Screenshot unavailable: Plugins page with the Network Activate link for the WooCommerce Integration add-on -->

Iha i te whakamārama i te ia, ko, he taea ai koe e pēnei, he ka puta mai i te whakamārama ki a koe:

<!-- Screenshot unavailable: Admin notice reminding the administrator to install and activate the WooCommerce plugin -->

Kia whakatipu mō mōhio nei i te add-on WooCommerce Integration, **whakawatea i ko atu**.

### He aha te whakamahi i te add-on GoCardless:

Ngā whakamāramatanga mō te whakatau i te _GoCardless_ add-on he tino pai, ā, he tino pai tonu ki te whakatau i te _WooCommerce_ add-on. Pāpā i te puta mai ki te manawa o ngā add-ons (add-ons page) ā, pilihete te **Ultimate Multisite: GoCardless Gateway** add-on.

<!-- Screenshot unavailable: Add-ons page with the Ultimate Multisite GoCardless Gateway add-on highlighted -->

Ka whakatutaku i te window o te add-on. Whakawārie i **Install Now**.

<!-- Screenshot unavailable: Ultimate Multisite GoCardless Gateway add-on details dialog with Install Now button -->

Iha i te whakatau, ka puta koe ki te manawa o ngā plugins (plugins page). I tēnei wā, whakatakino i **Network Activate** ā, ka whakawārie i te _GoCardless_ add-on i runga i te wāhi o koe.

<!-- Screenshot unavailable: Plugins page with the Network Activate link for the GoCardless Gateway add-on -->

Mō te māmā, he tino pai ki te whakataki i te gateway _GoCardless_, **pāreadi tēnei article**.

### He aha te whakamahi i te Payfast add-on:

Pāpā i te puta mai ki te manawa o ngā add-ons (add-ons page) ā, pilihete te **Ultimate Multisite: Payfast Gateway** add-on.

<!-- Screenshot unavailable: Add-ons page with the Ultimate Multisite Payfast Gateway add-on highlighted -->

Ka whakatutaku i te window o te add-on. Whakawārie i **Install Now**.

<!-- Screenshot unavailable: Ultimate Multisite Payfast Gateway add-on details dialog with Install Now button -->

Iha i te whakatau, ka puta koe ki te manawa o ngā plugins (plugins page). I tēnei wā, whakatakino i **Network Activate** ā, ka whakawārie i te _Payfast_ add-on i runga i te wāhi o koe.

<!-- Screenshot unavailable: Plugins page with the Network Activate link for the Payfast Gateway add-on -->
