---
title: Għmli Codijiet taċċessjoni
sidebar_position: 19
_i18n_hash: d6adaf916f3e21b4fda2deeaa6672d00
---
# Kemmis Discount Codes (v2)

_**NOTA IMPORTANTI: Dan dan l-artiklu huwa referenzi għall Ultimate Multisite bizzjoni 2.x.**_

Ma jgħod il-Ultimate Multisite, puoi tcrea discount codes biex tagħmel għolja lil kliemiet tiegħek fuq is-subscription. U tcreahom huwa fasil!

## Tcrea u Edita Discount Codes

Biex tcrea jew edita un discount code, għandi tmur għand **Ultimate Multisite > Discount Codes**.

![Lista discount codes — stat vuotu qabel ma jkun kodijiet](/img/config/discount-codes-empty.png)

Għandek lìda lista tal-discount codes li kient tagħmel.

Tista tmur b'ċekk fuq **Add Discount Code** biex tcrea coupon ġdid jew tista edita jid-editi tiegħek biex tuwqa l-hover u tikklekk fuq **Edit**.

![Lista discount codes ma' azzjoni tal-hover li tura Edit u Delete](/img/config/discount-codes-list-hover.png)

![Bouton Add Discount Code fil-header tal-pajsa](/img/config/discount-codes-add-button.png)

Tiridjettati għall-pajsa li fejn tcrea jew edita il-coupon code tiegħek. F'dan l-eżempju, ncrea uno ġdid.

![Pajsa ta edita discount code ma' tutti i sezzjonijiet visibili](/img/config/discount-code-edit.png)

Għalna nħarsu l-settings li għandna għistagħnu:

**Enter Discount Code:** Dan huwa biss issemu tal-discount code tiegħek. Dan mhux il-code li x'oxxiex jifuna l-kliemiet tiegħek fuq il-checkout form.

**Description:** Hemm, tista tiskrivi b'mod qasir għal ma kien din coupon.

![Issemu u descrittjoni tal-discount code f'top ta pajsa ta edita](/img/config/discount-code-description.png)

Tista tistaxxi l-discount code biex jkun attivo jew inattivo:

![Statu attivi tal-discount code](/img/config/discount-code-active.png)

**Coupon code:** Hemm li definixx il-code li x'oxxiex jifuna l-kliemiet tiegħek biex jintira klawża fuq il-checkout.

![Coupon code field where customers enter the code at checkout](/img/config/discount-code-coupon-field.png)

**Skontinu:** Hawn, puoi setti sia **proporzjoni** (percentage) jew **importament fix** (fixed amount) tal-kod discount tiegħek.

![Discount amount setting with percentage or fixed-amount dropdown](/img/config/discount-code-amount.png)

**Applika għall-renewals:** Jekk din l-opzione hija tivvelata off, din il-kod discount se japplika biss għall-**pagament ewliem**. Kull dejjem ieħor ma jkun għandu xogħol ma jgħidx. Jekk din l-opzione hija tivvelata on, din il-kod discount se jkun valido għal kull pagamenti futuri.

**Skont tal-fee ta l-setup:** Jekk din l-opzione hija tivvelata off, il-coupon code **ma jgħidx xogħol ma għall-fee ta l-setup** tal-ordar. Jekk din l-opzione hija tivvelata on, puoi setti is-skont (proporzjoni jew importament fix) li din il-coupon code se japplika għal fee ta setup tal-plans tiegħek.

![Apply to renewals and setup fee discount toggle options](/img/config/discount-code-renewals.png)

**Attiv:** Attiva jew disattiva manualment din l-coupon code.

![Active toggle to manually enable or disable the discount code](/img/config/discount-code-active.png)

Taħt **Advanced Options**, għandna is-setting ewliem:

![Discount code advanced options](/img/config/discount-code-advanced.png)

**Limitazzjoni u l-użu:**

  * **Uses (Użu):** Hawn, puoi tara qed qas l-ħolq il-kod discount.

  * **Max uses (Massimum użu):** Dan se jlimitix is-ħin li l-istess utenti jistgħu jgħandu din il-kod discount. Biex t-tħejjja, jekk tqiegħed 10 hawn, il-coupon jista' jgħandu biss 10 volte. Wara dan limitazzjoni, il-coupon code ma jistax jitqiegħed anke.

![Limit uses setting with current uses count and max uses field](/img/config/discount-code-limit-uses.png)

**Data u l-data u scadenza:** Hawn tkun għandek l-opzione biex tiddir data aħħħa tal-aħħar (start date) u/jew data ta scadenza (expiration date) għall-coupon tiegħek.

![Start and expiration date fields for scheduling the discount code](/img/config/discount-code-dates.png)

**Limit prodotti:** Jekk tagħmel aktiva b'toggle **Select products**, kollha l-prodotti tiegħek se ttinqas jkun għandek. Tiddir l-opzione biex tsegħa manualment (tajjeb jew ma tajjeb) li qed prodott jista' jista' jipprovvidi lil coupon code dan. Prodotti li ma jkunu aktivi hemm f'lijn dan ma jkunx għandhom mudfilja xieħa jgħandu l-coupon code tiegħek.

![Limit products section with per-product toggle switches](/img/config/discount-code-limit-products.png)

Wara li tgħallim b'tajjeb kull dan l-opzioni, għallisse fuq **Save Discount Code** biex tsegħa l-coupon tiegħek u it-tajjeb!

![Save Discount Code button at the bottom of the edit page](/img/config/discount-code-save.png)

Il-coupon jkun issa fil-lista tiegħek u, min din, tista' tikklekk biex **edit jew tal-delete** tiegħu.

![Discount code row in the list with Edit and Delete hover actions](/img/config/discount-codes-list-hover.png)

###

### U l-Użu ta Parametri URL:

Jekk tixtieq tista' tistruttura b'mod personalizzat il-pricing tables tiegħek jew tgħmli una pjanell coupon code ieħor għall-website tiegħek u tixtieq applikaw l-coupon code fuq form tal-checkout tiegħek awtomatikament, tista' tfarmi dan minn parametri URL.

Firma l-primier, għandek biex tgħmli ilink li jgħandu (shareable link) għall-plan tiegħek. Biex tgħmel dan, tqgli għal **Ultimate Multisite > Products** u tagħmel selezjoni tal-plan.

Tikklekk fuq butun **Click to Copy Shareable Link**. Dan jkun l-link li jgħandu għall-plan speċifiku dan. F'cas tiegħene, l-link li jgħandu kien [_**mynetworkdomain.com/register/premium/**_](http://mynetworkdomain.com/register/premium/)_.

![Product page with shareable link button](/img/config/products-list.png)

Għal-fejn tivapplika il codice tal-diskont għall plan speċifiku dan, jekk jogħġbok aġixxi l-parament **?discount_code=XXX** għall-URL. Fi **XXX** se jkun il codice tal-coupon.

F'l-eżempju tagħna hemm, napplikaw il codice tal-coupon **50OFF** għal dan is-soddu speċifiku.

L-URL għal dan plan speċifiku u ma' l-codi tal-diskont 50OFF applikati se jkun: [_**mynetworkdomain.com/register/premium/**_](http://mynetworkdomain.com/register/premium/) _**?discount_code=50OFF**_.

###
