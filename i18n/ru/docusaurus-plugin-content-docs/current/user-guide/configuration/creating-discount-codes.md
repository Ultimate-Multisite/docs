---
title: Создание кодов скидок
sidebar_position: 19
_i18n_hash: 3c7a42fff1710e14a95a32365f893dc3
---
# Создание кодов скидок (v2)

_**ВАЖНОЕ ЗАМЕЧАНИЕ: Эта статья относится к версии Ultimate Multisite 2.x.**_

С Ultimate Multisite вы можете создавать коды скидок, чтобы предоставлять клиентам скидки на их подписки. И создание их простое!

## Создание и редактирование кодов скидок

Чтобы создать или отредактировать код скидки, перейдите в **Ultimate Multisite > Discount Codes**.

![](/img/config/discount-codes-list.png)

Там будет список уже созданных вами кодов скидок.

Вы можете нажать **Add Discount** **Code**, чтобы создать новый купон, или отредактировать существующие, наведя курсор и нажав **Edit**.

![Discount codes list with hover actions](/img/config/discount-codes-list.png)

![Add Discount Code button](/img/config/discount-codes-list.png)

Вы будете перенаправлены на страницу, где сможете создать или отредактировать ваш код купона. В этом примере мы создадим новый.

![Discount code edit page](/img/config/discount-codes-list.png)

Давайте посмотрим на доступные здесь настройки:

**Enter Discount Code:** Это просто название вашего кода скидки. Это не код, который ваши клиенты будут вводить в форме оформления заказа.

**Description:** Здесь вы можете кратко описать, для чего предназначен этот купон.

![Discount code name and description fields](/img/config/discount-codes-list.png)

**Coupon code:** Здесь вы определяете код, который ваши клиенты должны вводить при оформлении заказа.

![Coupon code field](/img/config/discount-codes-list.png)

**Discount:** Здесь вы можете установить либо **процент**, либо **фиксированную сумму** денег для вашего кода скидки.

![Discount percentage or fixed amount setting](/img/config/discount-codes-list.png)

**Apply to renewals:** Если этот параметр выключен, код скидки будет применяться только к **первому платежу**. Все остальные платежи не будут иметь скидки. Если включен, код скидки будет действовать для всех будущих платежей.

**Setup fee discount:** Если этот параметр выключен, купон не даст скидку на **плату за настройку** заказа. Если включен, вы можете установить скидку (процент или фиксированную сумму), которую купон применит к плате за настройку ваших планов.

![Apply to renewals and setup fee discount options](/img/config/discount-codes-list.png)

**Active:** Вручную активировать или деактивировать этот код купона.

![Active toggle for discount code](/img/config/discount-codes-list.png)

В разделе **Advanced Options** у нас есть следующие настройки:

**Limit uses:**

  * **Uses:** Здесь вы можете увидеть, сколько раз использовался код скидки.

  * **Max uses:** Это ограничит количество раз, которое пользователи могут использовать этот код скидки. Например, если вы укажете 10, купон можно будет использовать только 10 раз. После этого лимита код купона больше не будет использоваться.

![Limit uses setting with uses and max uses fields](/img/config/discount-codes-list.png)**Start & expiration dates:** Here you will have the option to add a start date and/or an expiration date to your coupon.

**Start & expiration dates:** Здесь вы можете добавить дату начала и/или дату истечения срока действия вашего купона.

![Start and expiration date fields](/img/config/discount-codes-list.png)

**Limit products:** Если включить **Select products**, все ваши продукты будут показаны. Вы сможете вручную выбрать (включив/выключив) какие продукты могут принимать этот код купона. Продукты, которые выключены здесь, не будут показывать изменений, если ваши клиенты попытаются использовать этот код купона для них.

![Limit products selection toggles](/img/config/discount-codes-list.png)

После настройки всех этих параметров нажмите **Save Discount Code**, чтобы сохранить купон, и всё готово!

![Save Discount Code button](/img/config/discount-codes-list.png)

Купон теперь находится в вашем списке, и оттуда вы можете нажать **edit or delete**, чтобы изменить или удалить его.

![Discount code in the list with edit and delete options](/img/config/discount-codes-list.png)

### 

### Использование параметров URL:

Если вы хотите настроить таблицы цен или создать красивую страницу кода купона для вашего сайта и автоматически применить код скидки к форме оформления заказа, вы можете сделать это через параметры URL.

Сначала вам нужно получить ссылку для совместного использования вашего плана. Для этого перейдите в **Ultimate Multisite > Products** и выберите план.

Нажмите кнопку **Click to Copy Shareable Link**. Это даст вам ссылку для совместного использования конкретного плана. В нашем случае ссылка была [_**mynetworkdomain.com/register/premium/**_](http://mynetworkdomain.com/register/premium/)_.

![Product page with shareable link button](/img/config/products-list.png)

Чтобы применить ваш код скидки к этому конкретному плану, просто добавьте параметр **?discount_code=XXX** к URL. Где **XXX** — это код купона.

В нашем примере мы применим код купона **50OFF** к этому конкретному продукту.

URL для этого конкретного плана с примененным кодом скидки 50OFF будет выглядеть так: [_**mynetworkdomain.com/register/premium/**_](http://mynetworkdomain.com/register/premium/) _**?discount_code=50OFF**_.

###
