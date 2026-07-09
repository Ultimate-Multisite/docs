---
title: Paggawa ng mga Code ng Diskuwento
sidebar_position: 19
_i18n_hash: d6adaf916f3e21b4fda2deeaa6672d00
---
# Paggawa ng mga Discount Code (v2)

_**MAHALAGANG PAALALA: Tumutukoy ang artikulong ito sa Ultimate Multisite version 2.x.**_

Sa Ultimate Multisite maaari kang gumawa ng mga discount code para bigyan ang iyong mga client ng mga diskuwento sa kanilang mga subscription. At madali lang itong gawin!

## Paggawa at Pag-edit ng mga Discount Code

Para gumawa o mag-edit ng discount code, pumunta sa **Ultimate Multisite > Discount Codes**.

![Listahan ng mga discount code — walang laman bago magkaroon ng anumang code](/img/config/discount-codes-empty.png)

Doon ay magkakaroon ka ng listahan ng mga discount code na nagawa mo na.

Maaari mong i-click ang **Add Discount** **Code** para gumawa ng bagong coupon o maaari mong i-edit ang mga mayroon ka sa pamamagitan ng pag-hover sa mga ito at pag-click sa **Edit**.

![Listahan ng mga discount code na may mga hover action na nagpapakita ng mga link na Edit at Delete](/img/config/discount-codes-list-hover.png)

![Button na Add Discount Code sa page header](/img/config/discount-codes-add-button.png)

Ire-redirect ka sa pahina kung saan gagawa ka o mag-e-edit ng iyong coupon code. Sa halimbawang ito gagawa tayo ng bago.

![Pahina ng pag-edit ng discount code na nakikita ang lahat ng seksyon](/img/config/discount-code-edit.png)

Tingnan natin ang mga setting na available dito:

**Enter Discount Code:** Ito ay pangalan lang ng iyong discount code. Hindi ito ang code na kailangang gamitin ng iyong mga customer sa checkout form.

**Description:** Dito, maaari mong ilarawan nang maikli kung para saan ang coupon na ito.

![Mga field ng pangalan at paglalarawan ng discount code sa itaas ng pahina ng pag-edit](/img/config/discount-code-description.png)

Maaari mo ring tingnan ang discount code bilang active o inactive:

![Active status ng discount code](/img/config/discount-code-active.png)

**Coupon code:** Dito mo tinutukoy ang code na kailangang ilagay ng iyong mga customer habang nasa checkout.

![Field ng coupon code kung saan inilalagay ng mga customer ang code sa checkout](/img/config/discount-code-coupon-field.png)

**Discount:** Dito, maaari kang magtakda ng alinman sa **percentage** o **fixed amount** ng pera para sa iyong discount code.

![Setting ng halaga ng diskuwento na may dropdown para sa percentage o fixed amount](/img/config/discount-code-amount.png)

**Apply to renewals:** Kung naka-off ang opsyong ito, ilalapat lang ang discount code na ito sa **unang bayad**. Walang diskuwento ang lahat ng iba pang bayad. Kung naka-on ang opsyong ito, magiging valid ang discount code para sa lahat ng bayad sa hinaharap.

**Setup fee discount:** Kung naka-off ang opsyong ito, ang coupon code ay **hindi magbibigay ng anumang diskuwento para sa setup fee** ng order. Kung naka-on ang opsyong ito, maaari mong itakda ang diskuwento (percentage o fixed amount) na ilalapat ng coupon code na ito sa setup fee ng iyong mga plan.

![Mga opsyon sa toggle para sa Apply to renewals at setup fee discount](/img/config/discount-code-renewals.png)

**Active:** Manu-manong i-activate o i-deactivate ang coupon code na ito.

![Active toggle para manu-manong i-enable o i-disable ang discount code](/img/config/discount-code-active.png)

Sa ilalim ng **Advanced Options**, mayroon tayong mga sumusunod na setting:

![Mga advanced option ng discount code](/img/config/discount-code-advanced.png)

**Limit uses:**

  * **Uses:** Dito, makikita mo kung ilang beses ginamit ang discount code.

  * **Max uses:** Lilimitahan nito ang dami ng beses na magagamit ng mga user ang discount code na ito. Halimbawa, kung maglalagay ka ng 10 dito, 10 beses lang magagamit ang coupon. Pagkatapos ng limitasyong ito, hindi na magagamit ang coupon code.

![Setting ng limit uses na may kasalukuyang bilang ng paggamit at field ng max uses](/img/config/discount-code-limit-uses.png)

**Start & expiration dates:** Dito magkakaroon ka ng opsyong magdagdag ng petsa ng pagsisimula at/o petsa ng pag-expire sa iyong coupon.

![Mga field ng petsa ng pagsisimula at pag-expire para sa pag-iskedyul ng discount code](/img/config/discount-code-dates.png)

**Limit products:** Kung i-toggle mo ang **Select products** sa on, ipapakita sa iyo ang lahat ng iyong mga produkto. Magkakaroon ka ng opsyong manu-manong piliin (sa pamamagitan ng pag-toggle sa on o off) kung aling produkto ang maaaring tumanggap ng coupon code na ito. Ang mga produktong naka-off dito ay hindi magpapakita ng anumang pagbabago kung susubukan ng iyong mga customer na gamitin ang coupon code na ito sa kanila.

![Seksyon ng limit products na may mga toggle switch kada produkto](/img/config/discount-code-limit-products.png)

Pagkatapos i-set up ang lahat ng opsyong ito, i-click ang **Save Discount Code** para i-save ang iyong coupon at tapos na!

![Button na Save Discount Code sa ibaba ng pahina ng pag-edit](/img/config/discount-code-save.png)

Nasa listahan mo na ngayon ang coupon at, mula roon, maaari mong i-click para **i-edit o i-delete** ito.

![Row ng discount code sa listahan na may mga hover action na Edit at Delete](/img/config/discount-codes-list-hover.png)

###

### Paggamit ng mga Parameter ng URL:

Kung gusto mong i-customize ang iyong mga pricing table o gumawa ng magandang pahina ng coupon code para sa iyong website at gusto mong awtomatikong ilapat ang discount code sa iyong checkout form, magagawa mo ito sa pamamagitan ng mga parameter ng URL.

Una, kailangan mong kunin ang shareable link para sa iyong plan. Para gawin ito, pumunta sa **Ultimate Multisite > Products** at pumili ng plan.

I-click ang button na **Click to Copy Shareable Link**. Ibibigay nito sa iyo ang shareable link papunta sa partikular na plan na ito. Sa aming kaso, ang ibinigay na shareable link ay [_**mynetworkdomain.com/register/premium/**_](http://mynetworkdomain.com/register/premium/)_._

![Pahina ng produkto na may button ng shareable link](/img/config/products-list.png)

Para ilapat ang iyong discount code sa partikular na plan na ito, idagdag lang ang parameter na **?discount_code=XXX** sa URL. Kung saan ang **XXX** ay ang coupon code.

Sa aming halimbawa rito, ilalapat namin ang coupon code na **50OFF** sa partikular na produktong ito.

Ang URL para sa partikular na plan na ito at may inilapat na 50OFF discount code ay magiging ganito: [_**mynetworkdomain.com/register/premium/**_](http://mynetworkdomain.com/register/premium/) _**?discount_code=50OFF**_.

###
