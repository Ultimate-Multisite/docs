---
title: Създаване на промоционални кодове
sidebar_position: 19
_i18n_hash: d6adaf916f3e21b4fda2deeaa6672d00
---
# Създаване на промоционални кодове (v2)

_**ВАЖНО ЗАБЕЛЕЖКА: Тази статия се отнася до версия 2.x на Ultimate Multisite.**_

С Ultimate Multisite можете да създавате промоционални кодове, за да предоставяте отстъпки на вашите клиенти върху абонаментните им плащания. И създаването им е лесно!

## Създаване и редактиране на промоционални кодове {#creating-and-editing-discount-codes}

За да създадете или редактирате промоционален код, отидете на **Ultimate Multisite > Discount Codes**.

![Discount codes list — empty state before any codes exist](/img/config/discount-codes-empty.png)

Там ще видите списък с вече създадените от вас промоционални кодове.

Можете да кликнете върху **Add Discount** **Code**, за да създадете нов купон или можете да редактирате вече съществуващите, като преведете мишката над тях и кликнете върху **Edit**.

![Discount codes list with hover actions showing Edit and Delete links](/img/config/discount-codes-list-hover.png)

![Add Discount Code button in the page header](/img/config/discount-codes-add-button.png)

Ще бъдете пренасочени към страницата, където ще създадете или редактирате купонния си код. В този пример ще създадем нов.

![Discount code edit page with all sections visible](/img/config/discount-code-edit.png)

Нека разгледаме настройките, налични тук:

**Enter Discount Code:** Това е просто името на вашия промоционален код. Това не е кодът, който клиентите ви трябва да използват във формата за плащане.

**Description:** Тук можете кратко да опишете за какво е предназначен този купон.

![Discount code name and description fields at the top of the edit page](/img/config/discount-code-description.png)

Можете също така да видите дали промоционалният код е активен или неактивен:

![Discount code active status](/img/config/discount-code-active.png)

**Coupon code:** Тук дефинирате кода, който клиентите ви трябва да въведат по време на плащането.

![Coupon code field where customers enter the code at checkout](/img/config/discount-code-coupon-field.png)

**Discount:** Тук можете да зададете или **процент**, или **фиксирана сума** за вашия промоционален код.

![Discount amount setting with percentage or fixed-amount dropdown](/img/config/discount-code-amount.png)

**Apply to renewals:** Ако тази опция е изключена, този промоционален код ще бъде приложен само към **първото плащане**. Всички други плащания няма да имат отстъпка. Ако тази опция е включена, промоционалният код ще бъде валиден за всички бъдещи плащания.

**Setup fee discount:** Ако тази опция е изключена, купонният код **няма да предостави никаква отстъпка за таксата за настройка** на поръчката. Ако тази опция е включена, можете да зададете отстъпката (процент или фиксирана сума), която този купон ще приложи към таксата за настройка на вашите планове.

![Apply to renewals and setup fee discount toggle options](/img/config/discount-code-renewals.png)

**Active:** Ръчно активирайте или деактивирайте този купон.

![Active toggle to manually enable or disable the discount code](/img/config/discount-code-active.png)

Под **Advanced Options** имаме следните настройки:

![Discount code advanced options](/img/config/discount-code-advanced.png)

**Limit uses:**

  * **Uses:** Тук можете да видите колко пъти е използван промоционалният код.

  * **Max uses:** Това ще ограничи броя на пъти, които потребителите могат да използват този промоционален код. Например, ако тук поставите 10, купонът може да бъде използван само 10 пъти. След този лимит, купонният код вече не може да бъде използван.

![Limit uses setting with current uses count and max uses field](/img/config/discount-code-limit-uses.png)

**Start & expiration dates:** Тук ще имате възможността да добавите начална и/или крайна дата за вашия купон.

![Start and expiration date fields for scheduling the discount code](/img/config/discount-code-dates.png)

**Limit products:** Ако включите **Select products**, всички ваши продукти ще бъдат показани. Ще имате възможност ръчно да изберете (чрез включване или изключване) кой продукт може да приеме този купон. Продуктите, които са изключени тук, няма да показват никакви промени, ако вашите клиенти се опитат да използват този купон за тях.

![Limit products section with per-product toggle switches](/img/config/discount-code-limit-products.png)

След като настроите всички тези опции, кликнете върху **Save Discount Code**, за да запазите купона си и готово!

![Save Discount Code button at the bottom of the edit page](/img/config/discount-code-save.png)

Купонът вече е в списъка ви и оттам можете да кликнете, за да го **редактирате или изтриете**.

![Discount code row in the list with Edit and Delete hover actions](/img/config/discount-codes-list-hover.png)

###

### Използване на URL параметри: {#using-url-parameters}

Ако искате да персонализирате таблиците си с цени или да създадете красива страница с промоционален код за вашия уебсайт и искате да приложите промоционален код автоматично към формата за плащане, можете да направите това чрез URL параметри.

Първо, трябва да получите споделящата връзка за вашия план. За това отидете на **Ultimate Multisite > Products** и изберете план.

Кликнете върху бутона **Click to Copy Shareable Link**. Това ще ви даде споделящата връзка към този конкретен план. В нашия случай, споделящата връзка е [_**mynetworkdomain.com/register/premium/**_](http://mynetworkdomain.com/register/premium/)_._

![Product page with shareable link button](/img/config/products-list.png)

За да приложите промоционалния си код към този конкретен план, просто добавете параметъра **?discount_code=XXX** към URL-а. Където **XXX** е купонният код.

В нашия пример тук, ще приложим купонния код **50OFF** към този конкретен продукт.

URL-ът за този конкретен план и с приложен промоционален код 50OFF ще изглежда така: [_**mynetworkdomain.com/register/premium/**_](http://mynetworkdomain.com/register/premium/) _**?discount_code=50OFF**_.

###
