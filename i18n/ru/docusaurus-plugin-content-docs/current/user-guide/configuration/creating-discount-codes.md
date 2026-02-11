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

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-G2iYAraljI.png)

Там будет список уже созданных вами кодов скидок.

Вы можете нажать **Add Discount** **Code**, чтобы создать новый купон, или отредактировать существующие, наведя курсор и нажав **Edit**.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-nl6H0I06Jl.png)

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-3puhU5xCFF.png)

Вы будете перенаправлены на страницу, где сможете создать или отредактировать ваш код купона. В этом примере мы создадим новый.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-9dup6xM4Cx.png)

Давайте посмотрим на доступные здесь настройки:

**Enter Discount Code:** Это просто название вашего кода скидки. Это не код, который ваши клиенты будут вводить в форме оформления заказа.

**Description:** Здесь вы можете кратко описать, для чего предназначен этот купон.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-V97PvPqtmK.png)

**Coupon code:** Здесь вы определяете код, который ваши клиенты должны вводить при оформлении заказа.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-En58UdF3b7.png)

**Discount:** Здесь вы можете установить либо **процент**, либо **фиксированную сумму** денег для вашего кода скидки.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-96cicxcs7f.png)

**Apply to renewals:** Если этот параметр выключен, код скидки будет применяться только к **первому платежу**. Все остальные платежи не будут иметь скидки. Если включен, код скидки будет действовать для всех будущих платежей.

**Setup fee discount:** Если этот параметр выключен, купон не даст скидку на **плату за настройку** заказа. Если включен, вы можете установить скидку (процент или фиксированную сумму), которую купон применит к плате за настройку ваших планов.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-zDYmcgHcoq.png)

**Active:** Вручную активировать или деактивировать этот код купона.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-rwNFfGobBB.png)

В разделе **Advanced Options** у нас есть следующие настройки:

**Limit uses:**

  * **Uses:** Здесь вы можете увидеть, сколько раз использовался код скидки.

  * **Max uses:** Это ограничит количество раз, которое пользователи могут использовать этот код скидки. Например, если вы укажете 10, купон можно будет использовать только 10 раз. После этого лимита код купона больше не будет использоваться.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-zx4xudymt2.png)

**Start & expiration dates:** Здесь вы можете добавить дату начала и/или дату истечения срока действия вашего купона.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-AyTJkzxz9W.png)

**Limit products:** Если включить **Select products**, все ваши продукты будут показаны. Вы сможете вручную выбрать (включив/выключив) какие продукты могут принимать этот код купона. Продукты, которые выключены здесь, не будут показывать изменений, если ваши клиенты попытаются использовать этот код купона для них.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-OHK9Bgsaq7.png)

После настройки всех этих параметров нажмите **Save Discount Code**, чтобы сохранить купон, и всё готово!

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-wAAoviDov8.png)

Купон теперь находится в вашем списке, и оттуда вы можете нажать **edit or delete**, чтобы изменить или удалить его.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-ySn575AxqX.png)

### 

### Использование параметров URL:

Если вы хотите настроить таблицы цен или создать красивую страницу кода купона для вашего сайта и автоматически применить код скидки к форме оформления заказа, вы можете сделать это через параметры URL.

Сначала вам нужно получить ссылку для совместного использования вашего плана. Для этого перейдите в **Ultimate Multisite > Products** и выберите план.

Нажмите кнопку **Click to Copy Shareable Link**. Это даст вам ссылку для совместного использования конкретного плана. В нашем случае ссылка была [_**mynetworkdomain.com/register/premium/**_](http://mynetworkdomain.com/register/premium/)_.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-TecoStCUYi.png)

Чтобы применить ваш код скидки к этому конкретному плану, просто добавьте параметр **?discount_code=XXX** к URL. Где **XXX** — это код купона.

В нашем примере мы применим код купона **50OFF** к этому конкретному продукту.

URL для этого конкретного плана с примененным кодом скидки 50OFF будет выглядеть так: [_**mynetworkdomain.com/register/premium/**_](http://mynetworkdomain.com/register/premium/) _**?discount_code=50OFF**_.

###
