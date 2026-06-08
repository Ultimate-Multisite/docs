---
title: Стваৰэнне кодаў зніжкі
sidebar_position: 19
_i18n_hash: d6adaf916f3e21b4fda2deeaa6672d00
---
# Стваৰэнне кода зніжкі (v2)

_**ВАЖНА ЗАМЕТКА: Гэты артыкул адносіцца да версіі Ultimate Multisite 2.x.**_

З Ultimate Multisite вы можаце ствараць коды зніжкі, каб даць сваім кліентам зніжкі на іх падпіскі. І стварыць іх вельмі лёгка!

## Стваৰэнне і рэдагаванне кода зніжкі

Каб стварыць або адрэдагаваць код зніжкі, зайдзіце на **Ultimate Multisite > Discount Codes**.

![Discount codes list — empty state before any codes exist](/img/config/discount-codes-empty.png)

Тут вы ўбачыце спіс кода зніжкі, якія ўжо створылі.

Вы можаце націснуць **Add Discount** **Code**, каб стварыць новы купон, або адрэдагаваць існуючыя, наведзіўшы на іх курсор і націснуўшы **Edit**.

![Discount codes list with hover actions showing Edit and Delete links](/img/config/discount-codes-list-hover.png)

![Add Discount Code button in the page header](/img/config/discount-codes-add-button.png)

Вас перакіраваецца на старонку, дзе вы зможаце стварыць або адрэдагаваць свой купон. На гэтым прыคุшні мы створым новы.

![Discount code edit page with all sections visible](/img/config/discount-code-edit.png)

Дазьмецеся на налады, якія тут даступныя:

**Enter Discount Code:** Гэта проста назва вашага кода зніжкі. Гэта не код, які пакупнікі будуць павінны выкарыстоўваць на формай аплатам.

**Description:** Тут вы можаце каротка апісаць, для чаго гэты купон.

![Discount code name and description fields at the top of the edit page](/img/config/discount-code-description.png)

Вы таксама можаце паглядзець статус кода зніжкі як актыўны або неактыўны:

![Discount code active status](/img/config/discount-code-active.png)

**Coupon code:** Тут вы вызначаеце код, які пакупнікі будуць павінны ўвесці падчас аплатам.

![Coupon code field where customers enter the code at checkout](/img/config/discount-code-coupon-field.png)

**Discount:** Тут вы можаце ўставіць або **працэнт**, або **фіксаваную суму** для вашага кода зніжкі.

![Discount amount setting with percentage or fixed-amount dropdown](/img/config/discount-code-amount.png)

**Apply to renewals:** Калі гэты параметр выключэнне, гэты код зніжкі будзе працаваць толькі для **першай аплаты**. Усе іншыя аплаты не атрымаюць зніжкі. Калі гэты параметр уключаны, код зніжкі будзе быць дзельным для ўсіх будучых аплат.

**Setup fee discount:** Калі гэты параметр выключэнне, купон не будзе даваць **ніякай зніжкі на пачатковыя выдаткі** па замаўленні. Калі гэты параметр уключаны, вы можаце ўставіць зніжку (працэнт або фіксаваную суму), на якую гэты купон будзе дазначацца ў пачатковыя выдаткі вашага плана.

![Apply to renewals and setup fee discount toggle options](/img/config/discount-code-renewals.png)

**Active:** Ручна актываваць або дэактываваць гэты купон.

![Active toggle to manually enable or disable the discount code](/img/config/discount-code-active.png)

Па **Advanced Options** (Пашыраныя налады) у нас ёсць наступныя налады:

![Discount code advanced options](/img/config/discount-code-advanced.png)

**Limit uses:**

  * **Uses:** Тут вы можаце пабачыць, колькі raza выкарыстоўвалі код зніжкі.

  * **Max uses:** Гэта абмежыць колькасць разаў, калі карыстальнікі змогуць выкарыстоўваць гэты код зніжкі. Напрыклад, калі вы ўведзеце сюды 10, купон можна выкарыстоўваць толькі 10 разаў. Пасля гэтага ліміту купон больш не будзе можна выкарыстоўваць.

![Limit uses setting with current uses count and max uses field](/img/config/discount-code-limit-uses.png)

**Start & expiration dates:** Тут вы атрымаеце магчымасць дадаць дату пачатку і/або дату канца для вашага купона.

![Start and expiration date fields for scheduling the discount code](/img/config/discount-code-dates.png)

**Limit products:** Калі вы ўключыце **Select products**, вам будуць паказаны ўсе вашыя прадукты. Вы атрымаеце магчымасць ручна выбраць (націснуўшы ўключэнне або выключэнне), які прадукт можа прыняць гэты купон. Прадукты, якія выключэнне тут, не пакажаць ніякіх змен, калі вашыя пакупнікі спрабуюць выкарыстоўваць гэты купон для іх.

![Limit products section with per-product toggle switches](/img/config/discount-code-limit-products.png)

Пасля ўстаноўкі ўсіх гэтых наладаў, націсніце **Save Discount Code**, каб захаваць свой купон, і ўсё гатова!

![Save Discount Code button at the bottom of the edit page](/img/config/discount-code-save.png)

Купон цяпер знаходзіцца ў вашым спісе, і адтуды вы можаце націснуць, каб **рэдагаваць або выдаліць** яго.

![Discount code row in the list with Edit and Delete hover actions](/img/config/discount-codes-list-hover.png)

###

### Выкарыстанне URL-параметраў:

Калі вы хочаце набілічна ўпарадкаваць свае табліцы цэнаў або створыць прыгожый купон-страніцу для вашага сайта і хочаце аўтаматычна дадаць код зніжкі на форму аплатам, вы можаце зрабіць гэта праз URL-параметры.

Сперш вам трэба атрымаць спальвалікавальны спасыл на свой план. Для гэтага зайдзіце на **Ultimate Multisite > Products** і выберыце план.

Націсніце на кнопку **Click to Copy Shareable Link**. Гэта выдасць вам спальвалікавальны спасыл на гэты канкрэтны план. У нашым выпадку, спальвалікавальны спасыл, які быў выдадзены, быў [_**mynetworkdomain.com/register/premium/**_](http://mynetworkdomain.com/register/premium/)_._

![Product page with shareable link button](/img/config/products-list.png)

Каб дадаць ваш код зніжкі да гэтага канкрэтнага плана, проста дадайце параметр **?discount_code=XXX** да URL. Гэтае **XXX** — гэта код купона.

У нашым прыคุшні мы будзем дадаваць код купона **50OFF** да гэтага канкрэтнага прадукта.

URL для гэтага канкрэтнага плана з дададзеным кодам зніжкі 50OFF будзе выглядаць так: [_**mynetworkdomain.com/register/premium/**_](http://mynetworkdomain.com/register/premium/) _**?discount_code=50OFF**_.

###
