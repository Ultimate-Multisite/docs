---
title: Ручной платежләрне тәэмин итү
sidebar_position: 20
_i18n_hash: cc6364919e001b3e1c8a9de72dab4f76
---
# Ручной Оплата (v2) Настройка

_**ВАЖНОЕ ПРИМЕЧАНИЕ: Эта статья относится к Ultimate Multisite версии 2.x.**_

Ручные платежи — это способ предложить другие способы оплаты, если для ваших пользователей недоступны **Stripe** или **PayPal**. Это может быть банковский перевод или любой другой способ оплаты, который доступен вашим пользователям локально.

## Как включить ручные платежи

Настройка ручного платежа очень простая. Вам нужно просто включить его в разделе платежных шлюзов (payment gateways) и указать подробные инструкции о том, как пользователю следует отправить оплату.

Сначала перейдите в **Ultimate Multisite > Settings > Payments**. Под разделом **Payment Gateways** включите опцию **Manual**. Вы увидите, что для вас появится поле **Payment Instructions**.

Добавьте в это поле информацию, которая понадобится вашему клиенту для совершения платежа. Это могут быть реквизиты вашего банковского счета и ваш email, чтобы клиент мог отправить вам подтверждение оплаты, например.

![Переключатель ручного платежного шлюза с текстовым полем инструкций по оплате](/img/config/manual-gateway-expanded.png)

Вот интерфейс настроек ручного шлюза:

![Настройки ручного шлюза](/img/config/manual-gateway-settings.png)

После настройки просто нажмите **Save Settings** (Сохранить настройки), и всё готово. Когда пользователи регистрируются в вашей сети, они увидят сообщение, которое скажет им, что они получат ваши инструкции для завершения покупки.

![Сообщение о подтверждении регистрации, сообщающее пользователю, что он получит инструкции по оплате](/img/frontend/registration-manual-notice.png)

И они также получат сообщение на вашей странице **Thank You** (Спасибо), с вашими инструкциями по оплате.

<!-- Screenshot unavailable: Страница Спасибо, показывающая инструкции по оплате после оформления заказа -->

## Подтверждение ручных платежей

Ручной платежи подтверirmek için sol menüdeki **Payments** (Ödemeler) menüsüne gidin. Burada ağınızdaki tüm ödemeleri ve bunların **status** (durum) bilgilerini görebilirsiniz. Manuel bir ödeme, manuel olarak değiştirene kadar her zaman **Pending** (Beklemede) durumunda olacaktır.

![Payments list showing pending manual payment](/img/admin/payments-list.png)

Lütfen **reference code** (referans kodu) ile ödeme sayfasına tıklayarak gidin. Bu sayfada referans ID, ürünler, zaman damgaları ve daha fazlası gibi bekleyen ödemenin tüm detaylarını bulabilirsiniz.

![Payment details page showing reference code, products, and totals](/img/admin/payment-edit.png)

Sağ sütunda, ödemenin durumunu değiştirebilirsiniz. Durumu **Completed** (Tamamlandı) olarak değiştirip **Activate Membership** (Üyeliği Etkinleştir) seçeneğini açtığınızda müşterinizin sitesi aktif olacak ve üyeliği etkinleşecektir.

![Payment edit page with Status set to Completed and Activate Membership toggle](/img/admin/payment-activate-membership.png)
