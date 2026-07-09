---
title: Pagmugna og mga Discount Code
sidebar_position: 19
_i18n_hash: d6adaf916f3e21b4fda2deeaa6672d00
---
# Paghimo og Discount Codes (v2) {#creating-discount-codes-v2}

_**MAHINUNGAN: Kini nga article nagrefer sa Ultimate Multisite version 2.x.**_

Sa Ultimate Multisite, pwede kang maghimo og discount codes para hatagan ang imong mga kliyente og diskwento sa ilang subscriptions. Ug dali ra ni paghimo!

## Paghimo ug Pag-edit sa Discount Codes {#creating-and-editing-discount-codes}

Para makahimo o makapag-edit og discount code, pumunta sa **Ultimate Multisite > Discount Codes**.

![Discount codes list — empty state before any codes exist](/img/config/discount-codes-empty.png)

Duna nimo ang listahan sa mga discount code nga imong gihimo na.

Pwede kang mag-click sa **Add Discount Code** para makahimo og bag-ong coupon o pwede nimong i-edit ang naa na pinaagi sa pag-hover niini ug pag-click sa **Edit**.

![Discount codes list with hover actions showing Edit and Delete links](/img/config/discount-codes-list-hover.png)

![Add Discount Code button in the page header](/img/config/discount-codes-add-button.png)

Moad-redirect ka sa pahina diin imong himuon o i-edit ang imong coupon code. Sa panigunting nga panig-ala, maghimo kita og bag-o.

![Discount code edit page with all sections visible](/img/config/discount-code-edit.png)

At tan-awon nato ang mga setting nga anaa diri:

**Enter Discount Code:** Kini mao lang ang ngalan sa imong discount code. Dili kini ang code nga kinahanglan gamiton sa inyong mga customer sa checkout form.

**Description:** Dinhi, pwede nimo katin-an og mubo kung unsa ni para sa coupon.

![Discount code name and description fields at the top of the edit page](/img/config/discount-code-description.png)

Pwede pud nimong tan-awon ang discount code is active o inactive:

![Discount code active status](/img/config/discount-code-active.png)

**Coupon code:** Dinhi mao diin imong i-define ang code nga kinahanglan i-enter sa inyong mga customer panahon sa checkout.

![Coupon code field where customers enter the code at checkout](/img/config/discount-code-coupon-field.png)

**Discount:** Dinhi, pwede nimo mag-set og **porsyento** o **fixed amount** sa kwarta para sa imong discount code.

![Discount amount setting with percentage or fixed-amount dropdown](/img/config/discount-code-amount.png)

**Apply to renewals:** Kung gipatabong (toggled off) ni option, ang discount code ani lang gamiton sa **unang bayad**. Ang tanang ubang bayad dili na magamit og discount. Kung ipatabong (toggled on) kini, ang discount code kay valid para sa tanang umaabot nga bayad.

**Setup fee discount:** Kung gipatabong (toggled off) ni option, ang coupon code **dili maghatag og bisan unsang discount para sa setup fee** sa order. Kung ipatabong (toggled on) kini, pwede nimo i-set ang discount (porsyento o fixed amount) nga maapil sa setup fee sa imong mga plano.

![Apply to renewals and setup fee discount toggle options](/img/config/discount-code-renewals.png)

**Active:** Manually i-activate o i-deactivate ni coupon code.

![Active toggle to manually enable or disable the discount code](/img/config/discount-code-active.png)

Sa ilalom sa **Advanced Options**, naa mi mga setting:

![Discount code advanced options](/img/config/discount-code-advanced.png)

**Limit uses:**

  * **Uses:** Dinhi, makita nimo kung pila na ka beses gigamit ang discount code.

  * **Max uses:** Kini maglimita sa gidaghanon nga higayon nga pwede gamiton sa mga user kining discount code. Pananglitan, kung ibutang nimo 10 diri, ang coupon mahimong gamiton lang 10 ka beses. Human niabot aning limit, dili na pwedeng gamiton ang coupon code.

![Limit uses setting with current uses count and max uses field](/img/config/discount-code-limit-uses.png)

**Petsa ug petsa sa pag-expire:** Dinhi nimo makahatag og opsyon nga magdugang og petsa sa pagsugod (start date) ug/o petsa sa pag-expire sa imong coupon.

![Start and expiration date fields for scheduling the discount code](/img/config/discount-code-dates.png)

**Limit products:** Kung i-toggle nimo ang **Select products**, tanan nimong mga produkto ipakita kanimo. Aduna kay opsyon nga manu-mano magpili (pinaagi sa pag-toggle on o off) kung unsang produkto ang mahimong motanggap niining coupon code. Ang mga produktong gitawag off dinhi dili magpakita og bisan unsang kausaban kung ang imong mga customer mosulay gamiton kining coupon code kanila.

![Limit products section with per-product toggle switches](/img/config/discount-code-limit-products.png)

Human sa pag-set up ni tanang mga opsyon, i-click ang **Save Discount Code** aron ma-save ang imong coupon ug tapos na!

![Save Discount Code button at the bottom of the edit page](/img/config/discount-code-save.png)

Ang coupon karon anaa sa imong listahan ug, gikan diha, mahimo nimong i-click aron **i-edit o burahin** kini.

![Discount code row in the list with Edit and Delete hover actions](/img/config/discount-codes-list-hover.png)

###

### Paggamit sa URL Parameters: {#using-url-parameters}

Kung gusto nimo usbon ang imong mga pricing table o maghimo og nindot nga coupon code page para sa imong website ug gusto nimong i-apply ang discount code sa imong checkout form awtomatiko, mahimo nimo kini pinaagi sa URL parameters.

Una, kinahanglan nimo makuha ang shareable link para sa imong plan. Aron buhaton niini, adto sa **Ultimate Multisite > Products** ug pili og usa ka plan.

I-click ang button nga **Click to Copy Shareable Link**. Kini maghatag kanimo sa shareable link para niining piho nga plan. Sa among kaso, ang shareable link nga gihatag mao ang [_**mynetworkdomain.com/register/premium/**_](http://mynetworkdomain.com/register/premium/)_.

![Product page with shareable link button](/img/config/products-list.png)

Para i-apply ang imong discount code niining specific plan, basta i-add lang ninyo ang parameter **?discount_code=XXX** sa URL. Diin si **XXX** mao ang coupon code.

Sa among example diri, i-apply nato ang coupon code nga **50OFF** niining specific product.

Ang URL para niining specific plan ug uban sa 50OFF discount code nga gi-apply kay moabot ani: [_**mynetworkdomain.com/register/premium/**_](http://mynetworkdomain.com/register/premium/) _**?discount_code=50OFF**_.

###
