---
title: Ho hlola sebope la tšhobo
sidebar_position: 19
_i18n_hash: d6adaf916f3e21b4fda2deeaa6672d00
---
# Ho Fana Le Codes Le Discount (v2)

_**LIPOTSE LE KOTSE: Le tsela le tla fana ka sefaka sa Ultimate Multisite 2.x.**_

Le Ultimate Multisite, u ka fana ka sefaka sa discount codes ho ba leba batho ba hau sefaka sa ho tsamaea (subscriptions). Le ho fana ka ho faka ke le lina bo lebotse!

## Ho Faka le Ho Hlola Discount Codes {#creating-and-editing-discount-codes}

Ho faka kapa ho hlola discount code, u tla fihla **Ultimate Multisite > Discount Codes**.

![List ya discount codes — sefaka sa ho ba le codes lehle fa ho na codes](https://img.example.com/config/discount-codes-empty.png)

Le ntlha, u tla bona lista ya discount codes joang o faka kae.

U ka fana ka ho tsamaya ka **Add Discount Code** ho faka coupon se se tloho kapa u ka hlola seo u faka ke ho le ho faka ka ho hlalosa (hover) le ho tsamaya ka **Edit**.

![List ya discount codes le actions ya hover e bontsha Edit le Delete links](https://img.example.com/config/discount-codes-list-hover.png)

![Buta ya Add Discount Code fa sefaka sa page](https://img.example.com/config/discount-codes-add-button.png)

O tla tsamaya ka sefaka se se fana ka ho faka kapa ho hlola coupon code ea hau. Ka ntlha eena, re tla faka se se tloho se se tloho.

![Se faka sa discount code se se fana le sections sohle](https://img.example.com/config/discount-code-edit.png)

Re tla bona setso se se fana ka ho faka:

**Enter Discount Code:** Le tla ba le lehlakane la tsela ea hau ya discount code. Sena se ne se fana ka ho tsamaea batho ba hau fa ba leba checkout form.

**Description:** Le ntlha, u ka hlalosa ka lina lehle hore ke coupon eena.

![Fields ya lehlakane la discount code le ho hlalosa fa tsela ea hlola](https://img.example.com/config/discount-code-description.png)

U ka fana ka ho bona discount code se se fana ka ho ba le lehle kapa se se fana:

![Setso sa active status ya discount code](https://img.example.com/config/discount-code-active.png)

**Coupon code:** Le ntlha, ke le lengolo le tla fana ka ho faka code eona ba batho ba hau ba tla hloka fa ba leba checkout.

![Coupon code field where customers enter the code at checkout](/img/config/discount-code-coupon-field.png)

**Discount:** Le, ho ka ba le **percentage** (lapa) kapa **fixed amount** (tshwalo) ya go lona mo tlhwa ya iyong discount code.

![Discount amount setting with percentage or fixed-amount dropdown](/img/config/discount-code-amount.png)

**Apply to renewals:** Ha o ka le this option e ntsha, this discount code ho tla fana fa **payment ya ntlha**. Boela ba ba ba tse ling ha ba tla fana le lona discount. Ha o fetola option e ntsha, this discount code o tla ba le bonako bohle ba ba tla tloha.

**Setup fee discount:** Ha o ka le this option e ntsha, coupon code e tla **e ne e tla fana le lona setup fee** ya order. Ha o fetola option e ntsha, o ka setse (percentage kapa fixed amount) e e tla fana le setup fee ya plans ea hau.

![Apply to renewals and setup fee discount toggle options](/img/config/discount-code-renewals.png)

**Active:** O ka ba le this coupon code manually activate kapa deactivate.

![Active toggle to manually enable or disable the discount code](/img/config/discount-code-active.png)

Under **Advanced Options**, re na le setso se seguente:

![Discount code advanced options](/img/config/discount-code-advanced.png)

**Limit uses:**

  * **Uses:** Ha o ka le this, o ka bona eng le mofuta oa lehlakane oa discount code o ile a fetola.

  * **Max uses:** Le tla fana ho fana fa users ba ka fetola eng le mofuta oa lehlakane oa discount code. Ho ntlha, ha u setse 10 ena, coupon code e ka fetola le mofuta oa lehlakane 10. Ha o feta le lona limit, coupon code ha a ka fetola fa.

![Limit uses setting with current uses count and max uses field](/img/config/discount-code-limit-uses.png)

**Tsoho le tsoho ya ho fana:** Le tla go na leboho la ho ntsa mofuta o fana (start date) le/go leba (expiration date) ho coupon ea hau.

![Leboho la mofuta o fana le leba ho saetso ho hlalosa code ea ho fana](/img/config/discount-code-dates.png)

**Ho fetola mofuta:** Ha u fetola **Select products** ka on, mofuta oa hau o tla ba leboho. O tla na leboho la ho utloa (ka ho fetola ka on kapa ka ho fana) mofuta o ka e tšoa (select) o ka e tšoa ea code ea ho fana. Mofuta oa ho fetola o tla nna leboho ha u ba leboho, ha ba ba leboho ha ba ba leboho a u batlang ho sebelisa code ea ho fana ho bona.

![Sehlobo sa mofuta le boithakiso ba fetola ka mofuta](/img/config/discount-code-limit-products.png)

Ha u saetse litlhahiselo hloekoe tsa ho fetola tse ling, u tsamaea ka **Save Discount Code** ho fana ka code ea hau le efe!

![Botso ea ho fana ka code a tsoalo ea page ea ho fetola](/img/config/discount-code-save.png)

Code ea ho fana o tla ba le mofuta oa hau, le ho fetola haholo, u ka tsamaea ho **edit kapa delete** eona.

![Lihlobo la code ea ho fana le boithakiso ba edit le delete haholo](/img/config/discount-codes-list-hover.png)

###

### Ho sebelisa URL Parameters: {#using-url-parameters}

Ha u batla ho fetola litlhahiselo tsa hau tsa mofuta (pricing tables) kapa ho hlalosa page ea code ea ho fana e ntle ho website ea hau le ho tsoela code ea ho fana ka checkout form ea hau ka ho fetola URL parameters.

Ha uqala, u hloka ho ba le link ea ho shareable (shareable link) ea hau. Ho etoa, u tsamaea ka **Ultimate Multisite > Products** kapa u utloi plan.

Tsamaea botso ea **Click to Copy Shareable Link**. Sena se tla u fana le link ea ho shareable ea plan ea hau. Ka mofuta oa hau, link ea ho shareable e tsoela ke [_**mynetworkdomain.com/register/premium/**_](http://mynetworkdomain.com/register/premium/)_.

![Page ea mofuta le botso ea link ea ho shareable](/img/config/products-list.png)

Ho ba le fa u batla le coupon code oa hau ka tsela ea plan ea hau, u phela **parameter ?discount_code=XXX** ho URL. Joang **XXX** ke coupon code ea hau.

Ina lebo ea rona, re tla phela coupon code **50OFF** ka tantso ea produk this specific product.

URL ea lona e tsoang ea plan ea hau le le coupon code 50OFF e phela: [_**mynetworkdomain.com/register/premium/**_](http://mynetworkdomain.com/register/premium/) _**?discount_code=50OFF**_.

###
