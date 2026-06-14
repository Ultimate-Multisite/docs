---
title: Taispeáidtear
sidebar_position: 15
_i18n_hash: 0f45bd2eb659d27199ac9f9752e1a8ae
---
# Taispeid (v2)

_**NOTE CRUCIAL: Tá an curte seo ag curte ar Ultimate Multisite version 2.x.**_

Tá siomra membership agus billing ceartaithe inbhallaite i Ultimate Multisite. Nuair a bheith an siomra billing atá ag dul ar bhealach, táimid ag curte is gcomhthabhairtacha deacairte a bhuseartha a bhaineann le e-commerce. Is é na gcuid siomra billing deacairte i Ultimate Multisite _Stripe_, _PayPal_ agus Billing Manuil. Is féidir leat a bheith ag úsáid _WooCommerce_, _GoCardless_ agus _Payfast_ chun tairiscint a fháil ar chuid add-ons a bhaineann leis na hiontaí sin.

## Cuid Aisneacháin (Basic Settings)

Is féidir leat a chur in áit aon cheoinn siomra billing seo i ngléanna siomra billing deacairte i Ultimate Multisite. Is féidir leat é seo a fháil ag dul go dtí **Ultimate Multisite menu > Settings > Payments.**

![Payments settings page in Ultimate Multisite showing the Payments panel](/img/config/payments-settings-page.png)

Sula thuairiscint an siomra billing atá ag curte, le ghnáth an tairiscint aisneacháin bunaithe a bhaineann leis na cheoinn siomra billing bunaithe a féidir leat a chur in áit:

**Force auto-rene** **w:** Beidh sé seo ag cur isteach go bhfuil an tairiscint ag teacht ar bhealach chun an tairiscint a dhéanamh go dtí an deireadh de chuid na hiontaí a bhaineann leis an fheidhmeachas a chur in áit a thigeann an úsáid.

<!-- Screenshot unavailable: Force Auto-Renew toggle setting on the Payments settings page -->

Ag cur Ultimate Multisite v2.13.0, ag iarraidh sé a bheith ar an tairiscint atá ag obair ag teacht ar chuid reusabil an tairiscint a bhaineann leis an tairiscint aisneacháin a chur in áit le auto-renewal atá ag obair. Is féidir leat an tairiscintaisce a bheith mar subscription de chuid airgeadta, ginearál ar cheangailte, token vault a chur in áit, nó meán reusabil a bhaineann leis an fheidhmeachas. Má iontas an tairiscint ag cur ar an tairiscintaisce go bhfuil aon cheoinn siomra a chur ar bhealach, caillfidh Ultimate Multisite an siomra ach beidh sé auto-renewal ag obair agus beidh sé an stáit cheoinn siomra a bhaineann leis an fheidhmeachas chun an tairiscint a chur ar bhealach leat ar chuid airgeadta primaid a dhéanamh primaid as an tairiscintaisce.

Iní an t-amhas an t-amhas seo chun an chéad chuid ar an bhfath.

**Fhéad an t-amhas (trials) gan pleithne:** **Méthode:** Le linn tá an option seo acuán, níl mór duit a chur i bhfeidhm aon fáil féin go dtí an t-amhas deireadh. Beidh sé ag tairgíocht amach an lá atá an t-amhas deireadh.

<!-- Screenshot unavailable: Allow Trials Without Payment Method toggle on the Payments settings page -->

**An t-amhas (invoice) a bheith ar fháil ar confirmation pleithne:** Tugann seo duit oiriúnas chun an t-amhas a bheith ar fháil tar éis an pleithne. Déan ar an chúram: beidh na húsáir ag cur réiteach ar a bhfath pleithne mar chuid iad ag cur isteach ar a dashboard subsite. Níl an option seo ag athrú chun an Manual Gateway.

<!-- Screenshot unavailable: Send Invoice on Payment Confirmation toggle on the Payments settings page -->

**Céadtaí nua ar an t-amhas (invoice numbering scheme):** Anseo, leat ormúint a chur i bhfeidhm ach beidh tú ag cur chun cinn mar chuid féin pleithne pleithne nó ardán sérial. Má thug tú ar chuid féin pleithne pleithne go léiríocht ar do chuid amhas, níl mór duit aon rud a chur i bhfeidhm. Má thug tú ar chuid féin ardán sérial, beidh tú ag cur chun cinn an **amhas nua** (Beidh an amhas seo ag úsáid mar amhasnóir leat ar an t-amhas nua a bhailte ar an siomhan. Beidh sé ag tairgíocht ar chuid féin ag an t-amhas nua a bhailte. Is é sin ag tairgíocht ar chuid féin ag an t-amhas nua a bhailte. Beidh sé ag tairgíocht ar chuid féin ag an t-amhas nua a bhailte. Beidh sé ag tairgíocht ar chuid féin ag an t-amhas nua a bhailte. Beidh sé ag tairgíocht ar chuid féin ag an t-amhas nua a bhailte. Beidh sé ag tairgíocht ar chuid féin ag an t-amhas nua a bhailte.) agus **prifíseán an amhasnóir** (Beidh sé ag tairgíocht ar chuid féin ag an t-amhas nua a bhailte. Beidh sé ag tairgíocht ar chuid féin ag an t-amhas nua a bhailte.) agus **prifíseán an amhasnóir** (Beidh sé ag tairgíocht ar chuid féin ag an t-amhas nua a bhailte).

<!-- Screenshot unavailable: Invoice numbering scheme dropdown with Payment Reference Code and Sequential Number options -->

<!-- Screenshot unavailable: Next invoice number and invoice number prefix fields shown when Sequential Number is selected -->

## Caith an gcurthaíocht na gateway:

Is féidir leat a chur ar fáil na gateway de oileán ar an amas atá tú ag cur isteach ( **Ultimate Multisite > Settings > Payments**). Ar an bhfáthach seo, ar an bhfáthach "active payment gateways", beidh tú ag fheiceáil: _Stripe_, _Stripe_ _Checkout_, _PayPal_ agus _Manual_.

![Active Payment Gateways section listing Stripe, Stripe Checkout, PayPal and Manual](/img/config/payments-active-gateways.png)

Tá curtha an tairiscint aige ar chuid de oileán ar chuid de oileán atá tú ag cur isteach (payment gateway). Beidh méid aige chun na stiúirithe a fheiceáil agus a athrú:

![Payment edit interface](/img/admin/payment-edit.png)

Seo curtha fuaime ar an curtha de oileán atá tú ag cur isteach:

![Payment edit full interface](/img/admin/payment-edit-full.png)

Seo curtha fuaime ar na curtha de oileán atá tú ag cur isteach:

![Payment gateways settings full page](/img/config/settings-payments-gateways-full.png)

**Curtha an gcurthaíocht Stripe**

**Curtha an gcurthaíocht PayPal**** **

**Curtha na pléas manual**

Anois, má tá tú ag iarraidh a bheith ag úsáid _WooCommerce_, _GoCardless_ nó _Payfast_ mar curtha de oileán atá tú ag cur isteach, leat é a bheith ag cur isteach agus a chur ar fáil na add-ons (add-ons) aige.

### Conas a chur in áit an add-on WooCommerce:

Tá linn go bhfuil _Stripe_ agus _PayPal_ níl ag bheith faisnéis i gcuid gceanaírtas, a bhíonn siad ag líonadh nó ag cur isteach na húsáiteoirí Ultimate Multisite ar chuid éifeachtúil. Mar sin, roinnt add-ons amachadh caillte a muid a chur ar fáil chun _WooCommerce_ a shlúthadh leat, atá sé plugin e-commerce beag. Tá deóirí ar an talamh na h-éirí an t-ádhchúrtaithe ag cur isteach gateway éifeachtúil ar é seo. Táimid ag úsáid seo chun na gateway atá tú ag cur isteach a shlúthadh leat leis an siastáil billing de Ultimate Multisite a leanas.

_**IMPORTANT:** Is é a Intégráid le WooCommerce de Ultimate Multisite agraithe ar chuidite WooCommerce a bheith activaithe ar chuidite bunaithe agat._

Ar anois, le guraigh go cur i bhfeic ar an cur add-ons. Beidh tú ag iarraidh é a fheiceáil tríd **Ultimate Multisite > Settings**. Ba cheart tú é a fheiceáil ar an tabla **Add-ons**. Cliom ar **Check our Add-ons**.

<!-- Screenshot unavailable: Tabla Add-ons ar an chuidite Settings de Ultimate Multisite le cur Check our Add-ons -->

Tar éifeacht a bhfáthach ar **Check our Add-ons**, beidh tú ag cur i bhfeic ar an cur add-ons. Beidh tú ag iarraidh é a fheiceáil ar an cur add-ons de Ultimate Multisite. Cliom ar an add-on **Ultimate Multisite: WooCommerce Integration**.

![Cur add-ons a léiriad na add-ons de Ultimate Multisite, gan cur WooCommerce Integration](/img/addons/addons-page.png)

Beidh cur a bhfáthach ag teacht ar leith, beidh tú ag iarraidh é a bheith chomhartha agus a bheith activaithe ar do website.

<!-- Screenshot unavailable: Notice admin a chur ar an admin a bheith ag cur i bhfeic ar an plugin WooCommerce -->

Leat a léamh níos mó faoi an add-on **Ultimate Multisite: WooCommerce Integration**, **clic anseo**.

### Conas a chruinneadd an add-on GoCardless:

Tá an chéadachais chun an add-on _GoCardless_ a chiallaíonn go leat go hiomlán mar is éasca ná an add-on _WooCommerce_. Déan cinnte go cur isteach ar an lús add-ons agus déan chun an add-on **Ultimate Multisite: GoCardless Gateway** a chur i bhfeicim.

<!-- Screenshot unavailable: Add-ons page with the Ultimate Multisite GoCardless Gateway add-on highlighted -->

Beidh cur chuimneamh an add-on ag turláint. Cliom ar **Install Now**.

<!-- Screenshot unavailable: Ultimate Multisite GoCardless Gateway add-on details dialog with Install Now button -->

Tar éis a thaispeán an chiallaíonn, beidh tú ag cur chuimneamh ar an lús plugins. Anois, cliom ar **Network Activate** agus beidh an add-on _GoCardless_ ag fáil ardú ar do ngrú.

<!-- Screenshot unavailable: Plugins page with the Network Activate link for the GoCardless Gateway add-on -->

Leim ar na chuid a bhaint ar an ghlú _GoCardless_ gateway, **léigh an athcharta seo**.

### Conas a chur i bhfeicim an add-on Payfast:

Déan chun an lús add-ons go hiomlán agus déan chun an add-on **Ultimate Multisite: Payfast Gateway** a chur i bhfeicim.

<!-- Screenshot unavailable: Add-ons page with the Ultimate Multisite Payfast Gateway add-on highlighted -->

Beidh cur chuimneamh an add-on ag turláint. Cliom ar **Install Now**.

<!-- Screenshot unavailable: Ultimate Multisite Payfast Gateway add-on details dialog with Install Now button -->

Tar éis a thaispeán an chiallaíonn, beidh tú ag cur chuimneamh ar an lús plugins. Anois, cliom ar **Network Activate** agus beidh an add-on _Payfast_ ag fáil ardú ar do ngrú.

<!-- Screenshot unavailable: Plugins page with the Network Activate link for the Payfast Gateway add-on -->
