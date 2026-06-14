---
title: Stripe-унып җибәрү
sidebar_position: 6
_i18n_hash: a73a808f5976fbabb54e2c9889334d00
---
# Stripe Gateway'i Kurma (v2)

_**ÖNEMLİ QAYDALI: Bu makale Ultimate Multisite versiyon 2.x'i əks etdirir.**_

Ödəniş ayarlar səhifəsində ödəniş metodlarından qədər dördünü, yəni Stripe, Stripe Checkout, PayPal və Manual-ı aktivləşdirə bilərsiniz. Bu məqalədə biz **Stripe** ilə necə inteqrasiya ediləcəyini görəcəyik.

## Stripe-i Aktivləşdirmək

Stripe-u şəbəkənizdə mövcud ödəniş portalı kimi aktiv etmək üçün **Ultimate Multisite > Settings > Payments** (Ayarlar > Ödənişlər) bölməsinə gedin və Active Payment Gateways (Aktiv Ödəniş Portal Ləğvləri) hissəsində **Stripe** və ya **Stripe Checkout** yanındakı düyməni işarələyin.

![Active payment gateways-da Stripe aktivləşdirmək](/img/config/settings-payment-gateways.png)

### Stripe vs Stripe Checkout:

**Stripe:** Bu üsul, ödəniş zamanı kredit kartı nömrəsini daxil etmək üçün bir yer göstərəcək.

![Ödəniş zamanı Stripe inline kredit kartı sahəsi](/img/config/settings-payment-gateways.png)

**Stripe Checkout:** Bu üsul, ödəniş zamanı müştəriyə Stripe Checkout səhifəsinə yönləndirir.

![Ödəniş zamanı Stripe Checkout yönləndirmə səhifəsi](/img/config/settings-payment-gateways.png)

Stripe API açarlarınızı almaq

Stripe ödəniş portalı kimi aktiv olduqdan sonra, **Stripe Publishable Key** (Stripe Yayınlanmış Açarı) və **Stripe Secret Key** (Stripe Gizli Açarı) sahələrini doldurmanız lazım olacaq. Bunu Stripe hesabınıza daxil olaraq əldə edə bilərsiniz.

_**Qeyd:** Ödəniş metodunun işləyib-işləmədiyini yoxlamaq üçün **Sandbox modunu** aktivləşdirə bilərsiniz._

![Stripe API açarı sahələri və sandbox modu düyməsi](/img/config/settings-payment-gateways.png)

Stripe panellərinizdə, sağ üst küncdə **Developers** (İnkişafçılar) üzərinə klikləyin və sonra sol menyuda **API Keys** (API Açarları) seçin.

![Stripe dashboard Developers bölməsi API açarları ilə](/img/config/settings-payment-gateways.png)

Вы можете использовать либо **Тестовые данные** (чтобы проверить, работает ли интеграция на вашем рабочем сайте), либо не использовать их. Чтобы изменить это, переключите тумблер **Просмотр тестовых данных**.

![Stripe Viewing test data toggle](/img/config/settings-payment-gateways.png)

Скопируйте значение из полей **Publishable key** и **Secret key**, из столбца **Token**, и вставьте его в поля Stripe Gateway Ultimate Multisite. Затем нажмите, чтобы **Сохранить изменения**.

![Stripe publishable and secret key values](/img/config/settings-payment-gateways.png)

![Pasting Stripe keys in Ultimate Multisite settings](/img/config/settings-payment-gateways.png)

## Настройка Webhook для Stripe

Stripe отправляет события вебхуков, которые уведомляют Ultimate Multisite каждый раз, когда происходит событие на **вашем аккаунте Stripe**.

Нажмите **Developers** (Разработчики), а затем выберите пункт **Webhooks** (Вебхуки) в левом меню. Затем справа нажмите **Add endpoint** (Добавить конечную точку) *.

![Stripe Webhooks page with Add endpoint button](/img/config/settings-payment-gateways.png)

Вам понадобится **Endpoint URL** (URL конечной точки) *. Ultimate Multisite автоматически генерирует URL конечной точки, который вы можете найти прямо под полем **Webhook Listener URL** в разделе **Ultimate Multisite Stripe Gateway**._

![Webhook Listener URL field in Stripe gateway settings](/img/config/settings-payment-gateways.png)

**Скопируйте** URL конечной точки и **вставьте** его в поле **Endpoint URL** в настройках Stripe.

![Pasting endpoint URL in Stripe webhook setup](/img/config/settings-payment-gateways.png)

Далее нужно выбрать **Event** (Событие) *. В этом варианте вам просто нужно поставить галочку **Select all events** (Выбрать все события) и нажать **Add events** (Добавить события). После этого нажмите **Add Endpoint** (Добавить конечную точку), чтобы сохранить изменения.

![Selecting all events and adding the Stripe endpoint](/img/config/settings-payment-gateways.png)

Это всё, ваша интеграция с платежами Stripe завершена!
