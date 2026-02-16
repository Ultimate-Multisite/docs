---
title: Paggawa ng Mga Discount Code
sidebar_position: 19
_i18n_hash: 66179a52645793d48bb6cb9a9e47c016
---
# Paggawa ng mga Discount Code (v2)

_**MAHALAGANG PAALALA: Ang artikulong ito ay para sa Ultimate Multisite version 2.x.**_

Sa Ultimate Multisite, maaari kang gumawa ng mga discount code para makapagbigay ng diskwento sa iyong mga kliyente sa kanilang mga subscription. At madali lang itong gawin!

## Paggawa at Pag-edit ng mga Discount Code

Para gumawa o mag-edit ng discount code, pumunta sa **Ultimate Multisite > Discount Codes**.

![](/img/config/discount-codes-list.png)

Doon makikita mo ang listahan ng mga discount code na nagawa mo na.

Maaari kang mag-click sa **Add Discount** **Code** para gumawa ng bagong coupon o maaari mong i-edit ang mga mayroon ka na sa pamamagitan ng pag-hover sa mga ito at pag-click ng **Edit**.

![Listahan ng mga discount code na may mga hover action](/img/config/discount-codes-list.png)

![Add Discount Code button](/img/config/discount-codes-list.png)

Ire-redirect ka sa page kung saan gagawin o i-edit mo ang iyong coupon code. Sa halimbawang ito, gagawa tayo ng bago.

![Discount code edit page](/img/config/discount-codes-list.png)

Tingnan natin ang mga setting na available dito:

**Enter Discount Code:** Ito lang ang pangalan ng iyong discount code. Hindi ito ang code na gagamitin ng iyong mga customer sa checkout form.

**Description:** Dito, maaari mong ilagay ang maikling paglalarawan kung para saan ang coupon na ito.

![Mga field para sa pangalan at description ng discount code](/img/config/discount-codes-list.png)

**Coupon code:** Dito mo ilalagay ang code na kailangang ilagay ng iyong mga customer sa checkout.

![Coupon code field](/img/config/discount-codes-list.png)

**Discount:** Dito, maaari kang magtakda ng **percentage** o **fixed amount** ng pera para sa iyong discount code.

![Setting para sa discount percentage o fixed amount](/img/config/discount-codes-list.png)

**Apply to renewals:** Kung naka-off ang option na ito, ang discount code na ito ay gagana lang sa **unang bayad**. Lahat ng susunod na bayad ay walang diskwento. Kung naka-on ang option na ito, ang discount code ay magagamit sa lahat ng susunod na bayad.

**Setup fee discount:** Kung naka-off ang option na ito, ang coupon code ay **hindi magbibigay ng anumang diskwento sa setup fee** ng order. Kung naka-on ang option na ito, maaari mong itakda ang diskwento (percentage o fixed amount) na iaaplay ng coupon code na ito sa setup fee ng iyong mga plan.

![Mga option para sa apply to renewals at setup fee discount](/img/config/discount-codes-list.png)

**Active:** Manu-manong i-activate o i-deactivate ang coupon code na ito.

![Active toggle para sa discount code](/img/config/discount-codes-list.png)

Sa ilalim ng **Advanced Optio** **ns** , mayroon tayong mga sumusunod na setting:

**Limit uses:**

  * **Uses:** Dito, makikita mo kung ilang beses ginamit ang discount code.

  * **Max uses:** Lilimitahan nito kung ilang beses maaaring gamitin ng mga user ang discount code na ito. Halimbawa, kung maglagay ka ng 10 dito, 10 beses lang maaaring gamitin ang coupon. Pagkatapos ng limitasyong ito, hindi na maaaring gamitin ang coupon code.

![Setting para sa limit uses na may uses at max uses fields](/img/config/discount-codes-list.png)**Start & expiration dates:** Dito magkakaroon ka ng option na magdagdag ng start date at/o expiration date sa iyong coupon.

![Mga field para sa start at expiration date](/img/config/discount-codes-list.png)

**Limit products:** Kung i-toggle mo ang **Select products** na naka-on, makikita mo ang lahat ng iyong mga product. Magkakaroon ka ng option na manu-manong piliin (sa pamamagitan ng pag-toggle on o off) kung aling mga product ang maaaring tumanggap ng coupon code na ito. Ang mga product na naka-off dito ay hindi magpapakita ng anumang pagbabago kung susubukan gamitin ng iyong mga customer ang coupon code na ito sa kanila.

![Mga toggle para sa pagpili ng limit products](/img/config/discount-codes-list.png)

Pagkatapos i-set up ang lahat ng mga option na ito, i-click ang **Save Discount Code** para i-save ang iyong coupon at tapos na!

![Save Discount Code button](/img/config/discount-codes-list.png)

Ang coupon ay nasa iyong listahan na at, mula doon, maaari kang mag-click para **i-edit o i-delete** ito.

![Discount code sa listahan na may edit at delete options](/img/config/discount-codes-list.png)

### 

### Paggamit ng URL Parameters:

Kung gusto mong i-customize ang iyong mga pricing table o gumawa ng magandang coupon code page para sa iyong website at gusto mong awtomatikong ma-apply ang discount code sa iyong checkout form, magagawa mo ito gamit ang URL parameters.

Una, kailangan mong kunin ang shareable link para sa iyong plan. Para gawin ito, pumunta sa **Ultimate Multisite > Products** at pumili ng plan.

I-click ang **Click to Copy Shareable Link** button. Ibibigay nito sa iyo ang shareable link para sa partikular na plan na ito. Sa aming kaso, ang ibinigay na shareable link ay [_**mynetworkdomain.com/register/premium/**_](http://mynetworkdomain.com/register/premium/)_._

![Product page na may shareable link button](/img/config/products-list.png)

Para ma-apply ang iyong discount code sa partikular na plan na ito, idagdag lang ang parameter na **?discount_code=XXX** sa URL. Kung saan ang **XXX** ay ang coupon code.

Sa aming halimbawa dito, ia-apply natin ang coupon code na **50OFF** sa partikular na product na ito.

Ang URL para sa partikular na plan na ito at may nakalagay na 50OFF discount code ay magiging ganito: [_**mynetworkdomain.com/register/premium/**_](http://mynetworkdomain.com/register/premium/) _**?discount_code=50OFF**_.

### 
