---
title: Paggawa ng mga Discount Code
sidebar_position: 19
_i18n_hash: d6adaf916f3e21b4fda2deeaa6672d00
---
# Paglikha ng Discount Codes (v2) {#creating-discount-codes-v2}

_**MAHALAGANG PAUNA: Ang artikulong ito ay tumutukoy sa Ultimate Multisite version 2.x.**_

Sa Ultimate Multisite, maaari kang gumawa ng discount codes para magbigay ng diskwento sa iyong mga kliyente sa kanilang subscriptions. At ang paggawa nito ay madali!

## Paglikha at Pag-e-edit ng Discount Codes {#creating-and-editing-discount-codes}

Para lumikha o mag-edit ng discount code, pumunta ka sa **Ultimate Multisite > Discount Codes**.

![Listahan ng mga discount codes — empty state bago mayroon pang anumang codes](/img/config/discount-codes-empty.png)

Doon mo makikita ang listahan ng mga discount code na iyong ginawa na.

Maaari kang mag-click sa **Add Discount Code** para gumawa ng bagong coupon o maaari mong i-edit ang mga kasalukuyan sa pamamagitan ng pag-hover dito at pagpindot sa **Edit**.

![Listahan ng discount codes na may hover actions na nagpapakita ng Edit at Delete links](/img/config/discount-codes-list-hover.png)

![Button para magdagdag ng Discount Code sa header ng pahina](/img/config/discount-codes-add-button.png)

Maaaring i-redirect ka sa pahina kung saan mo gagawin o i-e-edit ang iyong coupon code. Sa halimbawang ito, gagawa tayo ng bago.

![Discount code edit page na may lahat ng seksyon na nakikita](/img/config/discount-code-edit.png)

Tingnan natin ang mga setting na available dito:

**Enter Discount Code:** Ito lang ang pangalan ng iyong discount code. Hindi ito ang code na kailangan gamitin ng iyong mga customer sa checkout form.

**Description:** Dito, maaari mong maikling ilarawan kung para saan ang coupon na ito.

![Mga field para sa pangalan at deskripsyon ng discount code sa itaas ng edit page](/img/config/discount-code-description.png)

Maaari mo ring tingnan ang discount code bilang aktibo o hindi aktibo:

![Katayuan ng aktibong discount code](/img/config/discount-code-active.png)

**Coupon code:** Dito mo itatakda kung anong code ang kailangan i-enter ng iyong mga customer habang nag-checkout.

![Coupon code field where customers enter the code at checkout](/img/config/discount-code-coupon-field.png)

**Diskwento:** Dito, maaari mong itakda kung **porsyento** o **tiyak na halaga** ng pera para sa iyong discount code.

![Discount amount setting with percentage or fixed-amount dropdown](/img/config/discount-code-amount.png)

**Ilapat sa mga renewal:** Kung naka-off ang opsyong ito, ang coupon code na ito ay gagamitin lamang sa **unang bayad**. Ang lahat ng ibang bayad ay walang diskwento. Kung naka-on ang opsyong ito, ang discount code ay magiging balido para sa lahat ng susunod na bayad.

**Diskwento sa setup fee:** Kung naka-off ang opsyong ito, ang coupon code ay **hindi magbibigay ng anumang diskwento para sa setup fee** ng order. Kung naka-on ang opsyong ito, maaari mong itakda ang diskwento (porsyento o tiyak na halaga) na iaaplay ng coupon code na ito sa setup fee ng iyong mga plano.

![Apply to renewals and setup fee discount toggle options](/img/config/discount-code-renewals.png)

**Aktibo:** Manu-manong i-activate o i-deactivate ang coupon code na ito.

![Active toggle to manually enable or disable the discount code](/img/config/discount-code-active.png)

Sa ilalim ng **Advanced Options**, mayroon tayong mga sumusunod na setting:

![Discount code advanced options](/img/config/discount-code-advanced.png)

**Limitahan ang paggamit (Limit uses):**

  * **Gamit (Uses):** Dito, makikita mo kung ilang beses na ginamit ang discount code.

  * **Pinakamataas na gamit (Max uses):** Ito ang maglilimita kung ilang beses pwedeng gamitin ng mga user ang discount code na ito. Halimbawa, kung ilalagay mo ang 10 dito, ang coupon ay magagamit lamang nang 10 beses. Pagkatapos nito, hindi na magagamit ang coupon code.

![Limit uses setting with current uses count and max uses field](/img/config/discount-code-limit-uses.png)

**Petsa at petsa ng pag-expire:** Dito mo pwedeng magdagdag ng petsa ng simula (start date) at/o petsa ng pagtatapos (expiration date) sa iyong coupon.

![Start and expiration date fields for scheduling the discount code](/img/config/discount-code-dates.png)

**Limitahan ang mga produkto:** Kung i-toggle mo ang **Select products**, lahat ng iyong produkto ay ipapakita sa iyo. Mayroon kang opsyon na manu-manong pumili (sa pamamagitan ng pag-toggle on o off) kung aling produkto ang maaaring tumanggap ng coupon code na ito. Ang mga produktong naka-off dito ay hindi magpapakita ng anumang pagbabago kung susubukan ng iyong mga customer na gamitin ang coupon code na ito para sa kanila.

![Limit products section with per-product toggle switches](/img/config/discount-code-limit-products.png)

Pagkatapos mong i-set up ang lahat ng mga opsyong ito, i-click ang **Save Discount Code** para ma-save ang iyong coupon at tapos na!

![Save Discount Code button at the bottom of the edit page](/img/config/discount-code-save.png)

Ang coupon ay nasa listahan mo na at mula doon, maaari mo itong i-click para **i-edit o burahin** ito.

![Discount code row in the list with Edit and Delete hover actions](/img/config/discount-codes-list-hover.png)

###

### Paggamit ng URL Parameters: {#using-url-parameters}

Kung gusto mong i-customize ang iyong pricing tables o gumawa ng magandang coupon code page para sa iyong website at gusto mong awtomatikong ma-apply ang discount code sa iyong checkout form, maaari mo itong gawin gamit ang mga URL parameters.

Una, kailangan mo munang makuha ang shareable link para sa iyong plan. Para gawin ito, pumunta ka sa **Ultimate Multisite > Products** at piliin ang isang plan.

I-click ang button na **Click to Copy Shareable Link**. Bibigyan ka nito ng shareable link para sa partikular na plan na ito. Sa ating kaso, ang ibinigay na shareable link ay [_**mynetworkdomain.com/register/premium/**_](http://mynetworkdomain.com/register/premium/)_.

![Product page with shareable link button](/img/config/products-list.png)

Para gamitin ang iyong discount code sa partikular na plan na ito, i-add mo lang ang parameter na **?discount_code=XXX** sa URL. Kung saan ang **XXX** ay ang coupon code mo.

Sa ating halimbawa dito, gagamitin natin ang coupon code na **50OFF** para sa partikular na produkto na ito.

Ang URL para sa partikular na plan na ito at may naka-apply na 50OFF discount code ay magiging ganito: [_**mynetworkdomain.com/register/premium/**_](http://mynetworkdomain.com/register/premium/) _**?discount_code=50OFF**_.

###
