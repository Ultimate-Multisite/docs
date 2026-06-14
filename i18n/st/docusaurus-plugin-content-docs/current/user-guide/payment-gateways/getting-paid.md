---
title: Ho ba tšepetso
sidebar_position: 15
_i18n_hash: 0f45bd2eb659d27199ac9f9752e1a8ae
---
# Le Tlhaloso (v2)

_**SEKOTSHAMO SELE: Le tsela le thise sefatsa Ultimate Multisite v2.x.**_

Ultimate Multisite e na le setshwantsho le tshedi (membership) le tlhahlobo (billing system). Ho go ba le bone, re ne re ketsahala le dikgwathwa tsa tsela tse di fetang (payment gateways) tse a fetang mo e-commerce. Dikgwathwa tsa tsela tse di tshedi mo Ultimate Multisite ke _Stripe_, _PayPal_, le Tlhahlobo ya Ho Baola (Manual Payment). U ka u sebelisa _WooCommerce_, _GoCardless_, le _Payfast_ ho leboga dikgwathwa tsa tsela tse di fetang ka go ntsa dikgwathwa tsa bone.

## Dikgwathwa tsa Boitshwaro (Basic Settings)

U ka u rata dikgwathwa tse di fetang tse di fetang mo setshwantsho sa tlhahlobo ya Ultimate Multisite. U ka u bona ka go laola **Ultimate Multisite menu > Settings > Payments.**

![Setshwantsho sa setshwantsho sa tlhahlobo ya payments mo Ultimate Multisite se bontšang panel ya Payments](/img/config/payments-settings-page.png)

Pula o tsamaisa dikgwathwa tsa tsela tsa gago, ke rata go bona dikgwathwa tse di fetang tsa boitshwaro le u ka go rata:

**Force auto-rene w:** Le tla ntsa gore dikgwathwa tsa tsela di reka ho tsamaea ka tsela efe mo lefatsheng la tlhahlobo (billing cycle) tse o dirang ke morao wa user.

<!-- Screenshot unavailable: Setshwantsho sa toggle ya Force Auto-Renew mo setshwantsho sa setshwantsho sa tlhahlobo ya payments -->

Ultimate Multisite v2.13.0 e leela gore dikgwathwa tsa boitshwaro tse di fetang di bona gore ho na le credential e ka sebelisoa mo go tsamaea (reusable renewal credential) fa u dirang setshwantsho sa membership se se reka ho tsamaea ka auto-renewal. Credential ya ho tsamaea e ka na le subscription ya dikgwathwa, agreement ya tlhahlobo, vault token e fetang, kapa metheo e fetang ya tsela e ka sebelisoa. Fa dikgwathwa di re le gore ha na credential e ka sebelisoa, Ultimate Multisite e tsamaea membership hobane e tsamaea auto-renewal e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e

Kea le fa'aopoaga ea ho sebelisa membership e ho fana ka auto-renew ha gateway e ka kolela payments e le e le tsela e le nako o lehle. Gateway add-ons ba bapatsa hore recurring checkouts ba fana ka credential e ka sebeliso fa gateway e ka fana le modes ea payment e le e le mofuta o le lehle (one-time capture) le mode ea payment e le e le tsela e le lehle/subscription.

**Ho fetola trials ha ho fana ka method ea payment:** Ho feta tsebo ena, client oa hau a tla hloka ho fana le fa'aopoaga ea metsi ea rona ka ho fana ka fa'aopoaga ea metsi ka tsela e le nako o lehle. Sena se tla hloka ha moetso o lehle o tla hloka ha metsi a fetola.

<!-- Screenshot unavailable: Allow Trials Without Payment Method toggle on the Payments settings page -->

**Ho tšoa invoice ka ho fana ka payment:** Sena se fana ka eona fa u na le eona ea ho tšoa invoice ha u na le eona, ha u na le eona ha u na le eona ha u na le eona ha u na le eona. Re lebisa hore ba bang ba na le litsela tsa ho fana ka payment ba tla na le fa'aopoaga ea bona ea ho fana ka payment ka tsela ea bona ea subsite dashboard. Sena se fana ka Manual Gateway.

<!-- Screenshot unavailable: Send Invoice on Payment Confirmation toggle on the Payments settings page -->

**Moea oa ho numera invoice:** Le tla, u ka utloi fa u ba le code ea ho hlalosa payment kapa moea o le seqetshana. Ha u tloi ho sebelisa code ea ho hlalosa payment ha ho na le ho fana ka ntho e le e lehle. Ha u tloi ho sebelisa moea o le seqetshana, u tla hloka ho fana ka **ntho e le invoice e le seqetshana** (Ntho ena o tla sebelisoa e le ntho ea invoice ea nako ea invoice ea ntlha ea system. E tla fetola haholo ha invoice e leseqetshana e le nako ea invoice e leseqetshana e le nako ea invoice e le seqetshana e le nako ea invoice e le seqetshana e le nako ea invoice e le seqetshana e le nako ea invoice e le seqetshana e le nako ea invoice e le seqetshana e le nako ea invoice e le seqetshana e le nako ea invoice e le seqetshana e le nako ea invoice e le seqetshana e le nako ea invoice e le seqetshana e le nako ea invoice e le seqetshana e le nako ea invoice e le seqetshana e le nako ea invoice e le seqetshana e le nako ea invoice e le seqetshana e le nako ea invoice e le seqetshana e le nako ea invoice e le seqetshana e le nako ea invoice e le seqetshana e le nako ea invoice e le seqetshana e le nako ea invoice e le seqetshana e le nako ea invoice e le seqetshana e le nako ea invoice e le seqetshana e le nako ea invoice e le seqetshana e le nako ea invoice e le seqetshana e le nako ea invoice e le seqetshana e le nako ea invoice e le seqetshana e le nako ea invoice e le seqetshana e le nako ea invoice e le seqetshana e le nako ea invoice e le seqetshana e le nako ea invoice e le seqetshana e le nako ea invoice e le seqetshana e le nako ea invoice e le seqetshana e le nako ea invoice e le seqetshana e le nako ea invoice e le seqetshana e le nako ea invoice e le seqetshana e le nako ea invoice e le seqetshana e le nako ea invoice e le seqetshana e le nako ea invoice e le seqetshana e le nako ea invoice e le seqetshana e le nako ea invoice e le seqetshana e le nako ea invoice e le seqetshana e le nako ea invoice e le seqetshana e le nako ea invoice e le seqetshana e le nako ea invoice e le seqetshana e le nako ea invoice e le seqetshana e le nako ea invoice e le seqetshana e le nako ea invoice e le seqetshana e le nako ea invoice e le seqetshana e le nako ea invoice e le seqetshana e le nako ea invoice e le seqetshana e le nako ea invoice e le seqetshana e le nako ea invoice e le seqetshana e le nako ea invoice e le seqetshana e le nako ea invoice e le seqetshana e le nako ea invoice e le seqetshana e le nako ea invoice e le seqetshana e le nako ea invoice e le seqetshana e le nako ea invoice e le seqetshana e le nako ea invoice e le seqetshana e le nako ea invoice e le seqetshana e le nako

<!-- Screenshot unavailable: Next invoice number and invoice number prefix fields shown when Sequential Number is selected -->

## Le fa motho le gateway (gateways) o lapa:

O ka u fana fa gateways o tšhono (payment gateways) ha lapa ea pele ( **Ultimate Multisite > Settings > Payments**). Ho a fetang ho **active payment gateways**, o tla bona: _Stripe_, _Stripe_ _Checkout_, _PayPal_ le _Manual_.

![Active Payment Gateways section listing Stripe, Stripe Checkout, PayPal and Manual](/img/config/payments-active-gateways.png)

Re na lapa ea mofuta ho ea ho fana ka gateway (payment gateway) ka lapa ea hae e ntse e tsoang le seo se tla u fana ka tsela ea ho fetola, seo u tla li le fa links tse a fetang.

O ka bona le ho fetola ditshwantsho tsa payment:

![Payment edit interface](/img/admin/payment-edit.png)

Ke na le tšepo efe ea lapa ea fetola payment:

![Payment edit full interface](/img/admin/payment-edit-full.png)

Ke na le tšepo efe ea settings tsa payment gateways:

![Payment gateways settings full page](/img/config/settings-payments-gateways-full.png)

**Ho fana ka Stripe gateway**

**Ho fana ka PayPal gateway**** **

**Ho fana ka payments manu**

Ha u batla ho u sebelise _WooCommerce_, _GoCardless_ kapa _Payfast_ e le gateway ea hau, o tla hloka ho **fana (install) le ho fetola (configure) add-ons** tsa hae.

### Kae u fana ka WooCommerce add-on:

Re re bona hore _Stripe_ le _PayPal_ ha ba le fa setlo sehlopha sehlopha se tla hlokomisa le se tla ba le ho ba le lehle ho ba le lehle ho ba le lehle ho ba le lehle ho ba le lehle ho ba le lehle ho ba le lehle ho ba le lehle ho ba le lehle ho ba le lehle ho ba le lehle ho ba le lehle ho ba le lehle ho ba le lehle ho ba le lehle ho ba le lehle ho ba le lehle ho ba le lehle ho ba le lehle ho ba le lehle ho ba le lehle ho ba le lehle ho ba le lehle ho ba le lehle ho ba le lehle ho ba le lehle ho ba le lehle ho ba le lehle ho ba le lehle ho ba le lehle ho ba le lehle ho ba le lehle ho ba le lehle ho ba le lehle ho ba le lehle ho ba le lehle ho ba le lehle ho ba le lehle ho ba le lehle ho ba le lehle ho ba le lehle ho ba le lehle ho ba le lehle ho ba le lehle ho ba le lehle ho ba le lehle ho ba le lehle ho ba le lehle ho ba le lehle ho ba le lehle ho ba le lehle ho ba le lehle ho ba le lehle ho ba le lehle ho ba le lehle ho ba le lehle ho ba le lehle ho ba le lehle ho ba le lehle ho ba le lehle ho ba le lehle ho ba le lehle ho ba le lehle ho ba le lehle ho ba le lehle ho ba le lehle ho ba le lehle ho ba le lehle ho ba le lehle ho ba le lehle ho ba le lehle ho ba le lehle ho ba le lehle ho ba le lehle ho ba le lehle ho ba le lehle ho ba le lehle ho ba le lehle ho ba le lehle ho ba le lehle ho ba le lehle ho ba le lehle ho ba le lehle ho ba le lehle ho ba le lehle ho ba le lehle ho ba le lehle ho ba le lehle ho ba le lehle ho ba le lehle ho ba le lehle ho ba le lehle ho ba le lehle ho ba le lehle ho ba le lehle ho ba le lehle ho ba le lehle ho ba le lehle ho ba le lehle ho ba le lehle ho ba le lehle ho ba le lehle ho ba le lehle ho ba le lehle ho ba le lehle ho ba le lehle ho ba le lehle ho ba le lehle ho ba le lehle ho ba le lehle ho ba le lehle ho ba le lehle ho ba le lehle ho ba le lehle ho ba le lehle ho ba le lehle ho ba le lehle ho ba le lehle ho ba le lehle ho ba le lehle ho ba le lehle ho ba le lehle ho ba le lehle ho ba le lehle ho ba le lehle ho ba le lehle ho ba le lehle ho ba le lehle ho ba le lehle ho ba le lehle ho ba le lehle ho ba le lehle ho ba le lehle ho ba le lehle ho ba le lehle ho ba le lehle ho ba le lehle ho ba le lehle ho ba le lehle ho ba le lehle ho ba le lehle ho ba le lehle ho ba le lehle ho ba le lehle ho ba le lehle ho

_**BOREK:** Ultimate Multisite: Ho fana kaWooCommerce ho fetola ho ba site ya mofuta a le.

Mopula, u le tla fihla ka page ya add-ons (add-ons). U ka e fihla ka go laola **Ultimate Multisite > Settings**. O tla bona table ya **Add-ons** (add-ons). Leola **Check our Add-ons**.

<!-- Screenshot unavailable: Table ya Add-ons a le ba letsope tsa Ultimate Multisite Settings le link ya Check our Add-ons -->

Le fa o laola **Check our Add-ons**, u tla fana ka page ya add-ons. Le tla fihla bohle ba add-ons ya Ultimate Multisite. Leola add-on ya **Ultimate Multisite: WooCommerce Integration**.

![Page ya Add-ons e leboha add-ons ya Ultimate Multisite e kopa WooCommerce Integration](/img/addons/addons-page.png)

Motswelo o tla tsamaela boithuti ba add-on. Leola **Install Now** (Fetola Now).

<!-- Screenshot unavailable: Dialog ya details ya add-on ya Ultimate Multisite WooCommerce Integration le butu ba Install Now -->

Le fa fetola le fetilwe, u tla tsamaela ka page ya plugins. Le fa o laola **Network Activate** (Fetola ho Net), add-on ya WooCommerce e tla fetolwa ka network ya hau.

<!-- Screenshot unavailable: Page ya Plugins le link ya Network Activate ya add-on ya WooCommerce Integration -->

Le fa u fetole, le fa a re fana ka plugin ya WooCommerce e fetilwe le e fetolwe ka website ya hau, o tla bona remelao (reminder).

<!-- Screenshot unavailable: Remelao ya Admin e re fana ka ho fetola le ho fetola plugin ya WooCommerce -->

Ho go bona fa u leboha ka add-on ya WooCommerce Integration, **laola lefa**.

### Ke ba leba hore o fetole add-on ya GoCardless:

Boetsope ea ho faka le liti tsa ho faka _GoCardless_ add-on ke tseo tse di fetang le _WooCommerce_ add-on. Leha, a goba page ea add-ons (add-ons page) u le selekane **Ultimate Multisite: GoCardless Gateway** add-on.

<!-- Screenshot unavailable: Add-ons page with the Ultimate Multisite GoCardless Gateway add-on highlighted -->

Mohlodi oa add-on o tla tsamaetsa. Leha, a goba **Install Now**.

<!-- Screenshot unavailable: Ultimate Multisite GoCardless Gateway add-on details dialog with Install Now button -->

Ha o faka lehle ho feta, u tla fetoa ka page ea plugins (plugins page). Leha, a goba **Network Activate** le _GoCardless_ add-on o tla baetsoa ka network ea hau.

<!-- Screenshot unavailable: Plugins page with the Network Activate link for the GoCardless Gateway add-on -->

Ho tseba hore na le ho faka gateway ea _GoCardless_, **a re: this article**.

### Ke eng e tla faka payfast add-on:

Leha, a goba page ea add-ons (add-ons page) u le selekane **Ultimate Multisite: Payfast Gateway** add-on.

<!-- Screenshot unavailable: Add-ons page with the Ultimate Multisite Payfast Gateway add-on highlighted -->

Mohlodi oa add-on o tla tsamaetsa. Leha, a goba **Install Now**.

<!-- Screenshot unavailable: Ultimate Multisite Payfast Gateway add-on details dialog with Install Now button -->

Ha o faka lehle ho feta, u tla fetoa ka page ea plugins (plugins page). Leha, a goba **Network Activate** le _Payfast_ add-on o tla baetsoa ka network ea hau.

<!-- Screenshot unavailable: Plugins page with the Network Activate link for the Payfast Gateway add-on -->
