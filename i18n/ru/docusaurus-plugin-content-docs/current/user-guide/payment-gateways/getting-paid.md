---
title: Получение платежей
sidebar_position: 15
_i18n_hash: b7e644488bb1bef802e024319be88725
---
# Получение оплаты (v2)

_**ВАЖНОЕ ЗАМЕЧАНИЕ: Эта статья относится к версии Ultimate Multisite 2.x.**_

Ultimate Multisite имеет встроенную систему членства и биллинга. Чтобы наша система биллинга работала, мы интегрировали самые распространённые платежные шлюзы, используемые в электронной коммерции. По умолчанию в Ultimate Multisite доступны шлюзы _Stripe_, _PayPal_ и Manual Payment. Вы также можете использовать _WooCommerce_, _GoCardless_ и _Payfast_ для получения платежей, установив их соответствующие дополнения.

## Базовые настройки

Вы можете настроить любой из этих платежных шлюзов в настройках платежей Ultimate Multisite. Вы можете найти их, перейдя в **Ultimate Multisite menu > Settings > Payments.**

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-42sl37Fn5G.png)

Перед настройкой вашего платежного шлюза, пожалуйста, ознакомьтесь с базовыми настройками платежей, которые вы можете настроить:

**Force auto-rene** **w:** Это гарантирует, что платеж будет автоматически повторяться в конце каждого платежного цикла в зависимости от выбранной пользователем частоты биллинга.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-Og3iJwLdmn.png)

**Allow trials without payment** **method:** При включении этой опции ваш клиент не будет вынужден вводить финансовую информацию во время процесса регистрации. Это будет необходимо только после истечения пробного периода.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-aA5Olqe9M9.png)

**Send invoice on payment confirmation:** Это даёт вам возможность отправлять счёт после оплаты. Обратите внимание, что пользователи смогут просматривать историю платежей в своей панели управления подсайтом. Эта опция не применяется к шлюзу Manual.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-RGupao7GvW.png)

**Invoice numbering scheme:** Здесь вы можете выбрать либо код ссылки платежа, либо последовательную схему номеров. Если вы выберете код ссылки платежа для ваших счетов, ничего настраивать не нужно. Если вы выберете последовательную схему номеров, вам понадобится настроить **next invoice number** (Это число будет использоваться в качестве номера счёта для следующего сгенерированного счёта в системе. Оно увеличивается на единицу каждый раз, когда создаётся новый счёт. Вы можете изменить его и сохранить, чтобы сбросить последовательный номер счёта до конкретного значения) и **invoice number prefix.**

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-mP0949Eawa.png)

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-oD5LaLaw7t.png)

## Где найти шлюзы:

Вы можете настроить платежные шлюзы на той же странице ( **Ultimate Multisite > Settings > Payments**). Ниже **active payment gateways** вы увидите: _Stripe_, _Stripe Checkout_, _PayPal_ и _Manual_.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-g9RMYx84r5.png)

У нас есть отдельная статья для каждого платежного шлюза, которая проведёт вас через шаги настройки, которые вы можете найти по ссылкам ниже.

**Настройка шлюза Stripe**

**Настройка шлюза PayPal**

**Настройка ручных платежей**

Теперь, если вы хотите использовать _WooCommerce_, _GoCardless_ или _Payfast_ в качестве платежного шлюза, вам понадобится **установить и настроить их дополнения**.

### Как установить дополнение WooCommerce:

Мы понимаем, что _Stripe_ и _PayPal_ недоступны в некоторых странах, что ограничивает или мешает пользователям Ultimate Multisite эффективно использовать наш плагин. Поэтому мы создали дополнение для интеграции _WooCommerce_, который является очень популярным плагином электронной коммерции. Разработчики по всему миру создали дополнения для интеграции различных платежных шлюзов с ним. Мы воспользовались этим, чтобы расширить платежные шлюзы, которые вы можете использовать с системой биллинга Ultimate Multisite.

_**ВАЖНО:** Ultimate Multisite: WooCommerce Integration требует, чтобы WooCommerce был активирован хотя бы на вашем основном сайте._

Сначала перейдите на страницу дополнений. Вы можете найти её, перейдя в **Ultimate Multisite > Settings**. Вы увидите таблицу **Add-ons**. Нажмите **Check our Add-ons**.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-WtOkJNuCsj.png)

После нажатия **Check our Add-ons** вы будете перенаправлены на страницу дополнений. Здесь вы можете найти все дополнения Ultimate Multisite. Нажмите на дополнение **Ultimate Multisite: WooCommerce Integration**.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-BmLWqj4yjt.png)

Откроется окно с деталями дополнения. Просто нажмите **Install Now**.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-fGaxHyPtsv.png)

После завершения установки вы будете перенаправлены на страницу плагинов. Здесь просто нажмите **Network Activate**, и дополнение WooCommerce будет активировано в вашей сети.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-TM2lYtgyM7.png)

После активации, если у вас всё ещё нет установленного и активированного плагина WooCommerce на вашем сайте, вы получите напоминание.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-VwIGoJhzqc.png)

Чтобы узнать больше о дополнении WooCommerce Integration, **нажмите здесь**.

### Как установить дополнение GoCardless:

Шаги по установке дополнения _GoCardless_ почти такие же, как и для _WooCommerce_. Перейдите на страницу дополнений и выберите дополнение **Ultimate Multisite: GoCardless Gateway**.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-BmLWqj4yjt.png)

Откроется окно дополнения. Нажмите **Install Now**.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-YIpPgP4VVo.png)

После завершения установки вы будете перенаправлены на страницу плагинов. Здесь просто нажмите **Network Activate**, и дополнение _GoCardless_ будет активировано в вашей сети.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-FGurJpzaF0.png)

Чтобы узнать, как начать работу с шлюзом _GoCardless_, **прочитайте эту статью**.

### Как установить дополнение Payfast:

Перейдите на страницу дополнений и выберите дополнение **Ultimate Multisite: Payfast Gateway**.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-BmLWqj4yjt.png)

Откроется окно дополнения. Нажмите **Install Now.**

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-1jpCakOHNy.png)

После завершения установки вы будете перенаправлены на страницу плагинов. Здесь просто нажмите **Network Activate**, и дополнение _Payfast_ будет активировано в вашей сети.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-49OQHBwPxk.png)
