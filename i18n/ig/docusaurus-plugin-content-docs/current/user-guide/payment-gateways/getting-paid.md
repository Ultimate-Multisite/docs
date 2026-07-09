---
title: Ịnata ụgwọ
sidebar_position: 15
_i18n_hash: 7808f514b91797f7ffb68811b12c48be
---
# Ịnata Ụgwọ (v2) {#getting-paid-v2}

_**IHE NDỊ DỊ MKPA: Edemede a na-ekwu maka Ultimate Multisite ụdị 2.x.**_

Ultimate Multisite nwere sistemụ otu na ịkwụ ụgwọ e wuru n’ime ya. Ka sistemụ ịkwụ ụgwọ anyị wee rụọ ọrụ, anyị etinyela ụzọ nnata ụgwọ ndị a na-ejikarị eme ihe na e-commerce. Ụzọ nnata ụgwọ ndabara na Ultimate Multisite bụ _Stripe_ , _PayPal_ , na Ịkwụ Ụgwọ Aka. Ị nwekwara ike iji _WooCommerce_ , _GoCardless_ na _Payfast_ nata ụgwọ site n’ịwụnye add-ons nke ha.

## Ntọala Ndị Bụ Isi {#basic-settings}

Ị nwere ike ịhazi nke ọ bụla n’ime ụzọ nnata ụgwọ ndị a n’okpuru ntọala ịkwụ ụgwọ Ultimate Multisite. Ị nwere ike ịchọta ya site n’ịga na **Ultimate Multisite menu > Settings > Payments.**

![Peeji ntọala ịkwụ ụgwọ na Ultimate Multisite na-egosi panel Payments](/img/config/payments-settings-page.png)

Tupu ị hazie ụzọ nnata ụgwọ gị, biko lelee ntọala ịkwụ ụgwọ ndị bụ isi ị nwere ike ịhazi:

**Manye mmeghari-akpaka** **:** Nke a ga-eme ka ịkwụ ụgwọ ahụ na-emegharị onwe ya na njedebe nke okirikiri ịkwụ ụgwọ ọ bụla dabere na ugboro ịkwụ ụgwọ onye ọrụ họọrọ.

<!-- Screenshot unavailable: Force Auto-Renew toggle setting on the Payments settings page -->

Ultimate Multisite v2.13.0 na-enyocha ma gateway nọ n’ọrụ nwere credential mmeghari a pụrụ iji ọzọ tupu echekwa membership na-emegharị ugboro ugboro nke auto-renewal agbanyere. Credential mmeghari nwere ike ịbụ subscription nke gateway, nkwekọrịta ịkwụ ụgwọ, vault token echekwara, ma ọ bụ payment method kwekọrọ na ya a pụrụ iji ọzọ. Ọ bụrụ na gateway kọọ na credential bara uru adịghị, Ultimate Multisite na-echekwa membership ahụ mana gbanyụọ auto-renewal ma dekọọ ọnọdụ credential na-efu ka onye nchịkwa ma ọ bụ usoro nkwado nwee ike ịrịọ customer ka o nyeghachi ikike ịkwụ ụgwọ tupu ụbọchị mmeghari.

Nke a na-egbochi membership ka ọ ghara iyi ka ọ na-emegharị onwe ya mgbe gateway nwere ike ịnakọta naanị ịkwụ ụgwọ otu oge. Add-ons nke gateway kwesịrị ikwenye na checkouts na-emegharị ugboro ugboro na-echekwa credential a pụrụ iji ọzọ, ọkachasị mgbe gateway na-akwado ma ịnakọta otu oge ma ụdị ịkwụ ụgwọ vaulted/subscription.

**Kwe ka trials na-enweghị payment** **method:** Mgbe agbanyere nhọrọ a, client gị agaghị achọ itinye ozi ego ọ bụla n’oge usoro ndebanye aha. A ga-achọ nke a naanị mgbe oge trial gwụsịrị.

<!-- Screenshot unavailable: Allow Trials Without Payment Method toggle on the Payments settings page -->

**Zipu invoice mgbe akwadoro ịkwụ ụgwọ:** Nke a na-enye gị nhọrọ ma ị ga-eziga invoice ma ọ bụ na ị gaghị eziga ya mgbe ịkwụ ụgwọ gasịrị. Rịba ama na ndị ọrụ ga-enwe ohere ịnweta akụkọ ịkwụ ụgwọ ha n’okpuru dashboard nke subsite ha. Nhọrọ a anaghị emetụta Manual Gateway.

<!-- Screenshot unavailable: Send Invoice on Payment Confirmation toggle on the Payments settings page -->

**Usoro nọmba invoice:** N’ebe a, ị nwere ike ịhọrọ ma payment reference code ma ọ bụ usoro nọmba na-esochi ibe ha. Ọ bụrụ na ịhọrọ iji payment reference code maka invoices gị, ịchọghị ịhazi ihe ọ bụla. Ọ bụrụ na ịhọrọ iji usoro nọmba na-esochi ibe ha, ị ga-ahazi **nọmba invoice na-esote** (A ga-eji nọmba a dị ka nọmba invoice maka invoice na-esote a ga-emepụta na sistemụ. A na-abawanye ya otu otu oge ọ bụla e kere invoice ọhụrụ. Ị nwere ike ịgbanwe ya ma chekwaa ya iji tọgharịa nọmba invoice na-esochi ibe ha ka ọ bụrụ uru akọwapụtara) na **prefix nọmba invoice.**

<!-- Screenshot unavailable: Invoice numbering scheme dropdown with Payment Reference Code and Sequential Number options -->

<!-- Screenshot unavailable: Next invoice number and invoice number prefix fields shown when Sequential Number is selected -->

## Ebe ịchọta gateways: {#where-to-find-the-gateways}

Ị nwere ike ịhazi ụzọ nnata ụgwọ na otu peeji ahụ ( **Ultimate Multisite > Settings > Payments**). N’okpuru **active payment gateways** ozugbo, ị ga-enwe ike ịhụ: _Stripe_ , _Stripe_ _Checkout_ , _PayPal_ na _Manual_.

![Nkebi Active Payment Gateways na-edepụta Stripe, Stripe Checkout, PayPal na Manual](/img/config/payments-active-gateways.png)

Anyị nwere edemede pụrụ iche maka ụzọ nnata ụgwọ ọ bụla nke ga-eduzi gị site na nzọụkwụ ịtọlite ya, nke ị nwere ike ịchọta na njikọ ndị dị n’okpuru.

Ị nwere ike ilele ma dezie nkọwa ịkwụ ụgwọ:

![Interface idezi ịkwụ ụgwọ](/img/admin/payment-edit.png)

Nke a bụ nlele zuru ezu nke peeji idezi ịkwụ ụgwọ:

![Interface zuru ezu nke idezi ịkwụ ụgwọ](/img/admin/payment-edit-full.png)

Nke a bụkwa nlele zuru ezu nke ntọala ụzọ nnata ụgwọ:

![Peeji zuru ezu nke ntọala ụzọ nnata ụgwọ](/img/config/settings-payments-gateways-full.png)

**Ịtọlite Stripe gateway**

**Ịtọlite PayPal gateway**** **

**Ịtọlite ịkwụ ụgwọ aka**

Ugbu a, ọ bụrụ na ịchọrọ iji _WooCommerce_ , _GoCardless_ ma ọ bụ _Payfast_ dị ka ụzọ nnata ụgwọ gị, ị ga-achọ **ịwụnye ma hazie add-ons ha**.

### Otu esi etinye WooCommerce add-on: {#how-to-install-the-woocommerce-add-on}

Anyị ghọtara na _Stripe_ na _PayPal_ adịghị na ụfọdụ mba, nke na-egbochi ma ọ bụ na-akpaghasị ndị ọrụ Ultimate Multisite iji plugin anyị nke ọma. Ya mere, anyị kere add-on iji jikọta _WooCommerce,_ nke bụ plugin e-commerce a ma ama nke ukwuu. Ndị mmepe gburugburu ụwa kere add-ons iji jikọta ụzọ nnata ụgwọ dị iche iche na ya. Anyị jiri ohere a gbasaa ụzọ nnata ụgwọ ị nwere ike iji na sistemụ ịkwụ ụgwọ Ultimate Multisite.

_**IHE NDỊ DỊ MKPA:** Ultimate Multisite: WooCommerce Integration chọrọ ka agbanyere WooCommerce opekata mpe na site isi gị._

Nke mbụ, biko gaa na peeji add-ons. Ị nwere ike ịchọta ya site n’ịga na **Ultimate Multisite > Settings**. Ị kwesịrị ịhụ tebụl **Add-ons**. Pịa **Check our Add-ons**.

<!-- Screenshot unavailable: Add-ons table on the Ultimate Multisite Settings sidebar with the Check our Add-ons link -->

Mgbe ịpịrị **Check our Add-ons** , a ga-ebuga gị na peeji add-ons. N’ebe a, ị nwere ike ịchọta add-ons niile nke Ultimate Multisite. Pịa add-on **Ultimate Multisite: WooCommerce Integration**.

![Peeji add-ons na-edepụta Ultimate Multisite add-ons gụnyere WooCommerce Integration](/img/addons/addons-page.png)

Window ga-apụta nwere nkọwa mgbakwunye ahụ. Naanị pịa **Wụnye Ugbu a**.

<!-- Nseta ihuenyo adịghị: dialog nkọwa mgbakwunye Ultimate Multisite WooCommerce Integration nwere bọtịnụ Wụnye Ugbu a -->

Mgbe echichi ahụ mechara, a ga-ebugharị gị gaa na peeji mgbakwunye. N'ebe a, naanị pịa **Mee ka ọ rụọ ọrụ na Network** ma a ga-eme ka mgbakwunye WooCommerce rụọ ọrụ na network gị.

<!-- Nseta ihuenyo adịghị: Peeji mgbakwunye nwere njikọ Mee ka ọ rụọ ọrụ na Network maka mgbakwunye WooCommerce Integration -->

Mgbe ịmechara ya ka ọ rụọ ọrụ, ọ bụrụ na ị ka etinyebeghị ma mee ka mgbakwunye WooCommerce rụọ ọrụ na webụsaịtị gị, ị ga-enweta ncheta.

<!-- Nseta ihuenyo adịghị: Ọkwa admin na-echetara onye nchịkwa ka ọ wụnye ma mee ka mgbakwunye WooCommerce rụọ ọrụ -->

Iji gụọkwuo gbasara mgbakwunye WooCommerce Integration, **pịa ebe a**.

### Otu esi wụnye mgbakwunye GoCardless: {#how-to-install-the-gocardless-add-on}

Nzọụkwụ iji wụnye mgbakwunye _GoCardless_ fọrọ nke nta ka ọ bụrụ otu ihe ahụ dị ka mgbakwunye _WooCommerce_. Biko gaa na peeji mgbakwunye ma họrọ mgbakwunye **Ultimate Multisite: GoCardless Gateway**.

<!-- Nseta ihuenyo adịghị: Peeji mgbakwunye nwere mgbakwunye Ultimate Multisite GoCardless Gateway egosipụtara -->

Window mgbakwunye ahụ ga-apụta. Pịa **Wụnye Ugbu a**.

<!-- Nseta ihuenyo adịghị: dialog nkọwa mgbakwunye Ultimate Multisite GoCardless Gateway nwere bọtịnụ Wụnye Ugbu a -->

Mgbe echichi ahụ mechara, a ga-ebugharị gị gaa na peeji mgbakwunye. N'ebe a, naanị pịa **Mee ka ọ rụọ ọrụ na Network** ma a ga-eme ka mgbakwunye _GoCardless_ rụọ ọrụ na network gị.

<!-- Nseta ihuenyo adịghị: Peeji mgbakwunye nwere njikọ Mee ka ọ rụọ ọrụ na Network maka mgbakwunye GoCardless Gateway -->

Iji mụta otú e si amalite iji gateway _GoCardless_, **gụọ edemede a**.

### Otu esi wụnye mgbakwunye Payfast: {#how-to-install-the-payfast-add-on}

Gaa na peeji mgbakwunye ma họrọ mgbakwunye **Ultimate Multisite: Payfast Gateway**.

<!-- Nseta ihuenyo adịghị: Peeji mgbakwunye nwere mgbakwunye Ultimate Multisite Payfast Gateway egosipụtara -->

Window mgbakwunye ahụ ga-apụta. Pịa **Wụnye Ugbu a.**

<!-- Nseta ihuenyo adịghị: dialog nkọwa mgbakwunye Ultimate Multisite Payfast Gateway nwere bọtịnụ Wụnye Ugbu a -->

Mgbe echichi ahụ mechara, a ga-ebugharị gị gaa na peeji mgbakwunye. N'ebe a, naanị pịa **Mee ka ọ rụọ ọrụ na Network** ma a ga-eme ka mgbakwunye _Payfast_ rụọ ọrụ na network gị.

<!-- Nseta ihuenyo adịghị: Peeji mgbakwunye nwere njikọ Mee ka ọ rụọ ọrụ na Network maka mgbakwunye Payfast Gateway -->
