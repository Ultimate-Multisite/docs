---
title: Отмена членства
sidebar_position: 2
_i18n_hash: 1e2e0e42ea0aebad987e389838ecdfd5
---
# Отмена подписки (v2)

_**ВАЖНОЕ ЗАМЕЧАНИЕ: Эта статья относится к версии Ultimate Multisite 2.x.**_

Отмена подписки со стороны ваших клиентов довольно проста.

Если ваш пользователь хочет отменить свою подписку, он должен сначала перейти на страницу ****Аккаунт****.

Там они должны перейти в раздел **Danger Zone** и нажать **Delete Account**.

![Account page Danger Zone with Delete Account button](/img/admin/memberships-list.png)

Модуль откроется с запросом подтверждения. Они должны включить опцию **Confirm Account Deletion** и нажать **Delete Account**.

![Confirm Account Deletion dialog](/img/admin/memberships-list.png)

Это разлоггирует их с сайта и отменит их подписку в вашей сети, а также удалит их сайт из вашей сети.

![Logged out after account deletion](/img/admin/memberships-list.png)

![Membership canceled confirmation](/img/admin/memberships-list.png)

**Важно:** Обратите внимание, что это действие не исключит клиента из вашей сети, поскольку клиент может иметь более одной подписки или ни одной подписки, привязанной к нему.

![Customer still exists in the network after cancellation](/img/admin/memberships-list.png) | ![Customer with no active memberships](/img/admin/memberships-list.png)
---|---
