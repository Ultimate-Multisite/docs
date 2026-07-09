---
title: Ro'yxatdan o'tish jarayoni
sidebar_position: 3
_i18n_hash: ae01b241f684c1a85d93bdc765eec135
---
# Ro'yxatdan O'tish Jarayoni (v2) {#the-registration-flow-v2}

_**MUHIM ESLATMA: Bu maqola Ultimate Multisite 2.x versiyasiga oid.**_

Foydalanuvchilar tarmoqqa turli usullardan ro'yxatdan olinishi mumkin. Ular sizning ro'yxatdan olinish shaklingizdan yoki oldindan tanlangan reja uchun ulashiladigan linkdan foydalanishlari mumkin. Bu yerda biz sizga mijozlaringiz tarmoqqa qanday ro'yxatdan olinishi va ular ro'yxatdan o'tganidan keyin nima sodir bo'lishini mavjud yo'llar va ro'yxatdan o'tish jarayonida ko'rsatamiz.

## Ro'yxatdan O'tish Shaklini Foydalanish: {#using-the-registration-form}

Bu standart ro'yxatdan olinish jarayonidir. Siz **checkout formasi** bilan ro'yxatdan olinish sahifasini yaratasiz va mijozlaringiz tarmoqqa ro'yxatdan o'tishi va reja uchun obuna bo'lishlari shu yerda sodir bo'ladi. Ixtiyoriy bo'lsangiz, har biriga turli ro'yxatdan olinish shakllari bilan ko'p ro'yxatdan olinish sahifasi bo'lishi mumkin.

Ro'yxatdan o'tish uchun standart sahifa [_**yourdomain.com/register**_](http://yourdomain.com/register) bo'ladi, ammo siz buni har qanday vaqtda **Ultimate Multisite > Settings > Login & Registration > Default Registration Page** orqali o'zgartirishingiz mumkin.

Foydalanuvchi ro'yxatdan olinish sahifasiga (odatda **Sign in** yoki **Buy now** tugmasiga bosganda) yetib kelganida, u yerda sizning ro'yxatdan olinish shaklingizni ko'radi.

![Ro'yxatdan olinish shakli ro'yxatdan olinish sahifasida ko'rsatilgan](/img/frontend/registration-form.png)

Frontendda ko'rinishi kabi checkout formasi misoli:

![Frontend checkout registration form](/img/config/checkout-frontend-registration.png)

Ular faqat majburiy maydonlarni to'ldirishlari kerak — elektron pochta, foydalanuvchi nomi, parol va h.k... — va reja uchun to'lov qilish yoki pul ma'lumotlari bo'lmagan bepul reja yoki sinov muddati bilan to'langan to'lovli reja uchun elektron pochta manzillarini tasdiqlash kerak.

"Rahmat" sahifasida ular elektron pochta manzilini tasdiqlashi kerakmi yoki veb-saytlari allaqachon faollashtirilgan va ulardan foydalanishni boshlash mumkinligi haqida xabar oladilar.

![Registration-da rahmatli sahifa](/img/frontend/registration-thank-you.png)

Agar elektron pochta manzili tasdiqlanishi talab qilsa, ular o'zlar elektron pochtasi qutubxonasiga borib tekshirish linkiga bosishlari kerak bo'ladi. Agar elektron pochta manzili tasdiqlansangiz, veb-saytingiz faollashmaydi.

Agar ular to'langan reja (paid plan) bilan ro'yxatdan bersa yoki sizning tarmoqningizda elektron pocha tasdiqlanishi majburiy bo'lmasa, ular to'lov tugmasidan darhol veb-saytlarini faollashtirib olishadi va ularga dashboard'ga kirish uchun link ko'rsatiladi.

![Dashboard'ga kirish uchun link bilan sayt faollashdi](/img/frontend/site-activated.png)

## Baham ko'rinadigan linkdan foydalanish: {#using-a-shareable-link}

Baham ko'rinadigan link orqali ro'yxatdan o'tish jarayoni asosan ro'yxatdan o'tish shakli bilan bir xil, faqat baham ko'rinadigan linkdan foydalanganda mijozlaringiz to'lov shaklidagi veb-sayt yoki shablonni tayyor tanlashlari mumkin (URL parametrlari orqali mahsulotlar va shablonlarni oldindan tanlash haqida bo'limga qarang) yoki hatto kupon kodi qo'shish mumkin (URL parametrlari dan foydalanish haqida bo'limga qarang).

Ro'yxatdan o'tish jarayoni bir xil bo'ladi: ular ismini, foydalanuvchi nomini, elektron pochta manzilini, veb-sayt nomini va sarlavhasi kabi narsalarni to'ldirishi kerak... lekin reja yoki sayt shablonidan ular uchun oldindan tanlangan bo'ladi.

### Qo'lda to'lovlar orqali ro'yxatdan o'tish: {#registering-using-manual-payments}

Agar siz Ultimate Multisite yoki uning qo'shimcha integratsiyalarida taklif etilgan PayPal, Stripe yoki boshqa har qanday to'lov eshigidan foydalanishni istamasangiz, mijozlaringiz uchun qo'lda to'lovlardan foydalanishingiz mumkin. Bu yechim orqali ular tarmoqningizda ro'yxatdan o'tganlaridan so'ng ularga hisob-xarji (invoice) yaratib, siz afzal ko'rgan to'lov protsessori orqali to'lashlari uchun tayyorlashingiz mumkin.

Ro'yxatdan o'tish jarayoni yuqoridagilardan aniq bir xil bo'ladi, lekin ro'yxatdan o'tish sahifasida mijozlar to'lovni yakunlash uchun qo'shimcha ko'rsatmalar bilan elektron pochta olishlarini bildirish xabari bilan duch kelishadi.

![Регистрации во время ручной оплаты сообщение](/img/frontend/registration-manual-notice.png)

И после завершения регистрации они увидят инструкции по оплате, которые вы установили (а также получат их на свою электронную почту).

![Инструкции по оплате после регистрации показаны](/img/frontend/registration-payment-instructions.png)

Инструкции по оплате можно изменить в **Ultimate Multisite > Settings > Payments**, включив опцию оплаты **Manual**:

![Переключатель ручной оплаты с полем инструкций по оплате](/img/config/manual-gateway-settings.png)

После того как ваши клиенты завершат ручную оплату и отправят вам подтверждение, вам нужно **вручную подтвердить платеж**, чтобы активировать членство клиента и веб-сайт.

Для этого перейдите в **Ultimate Multisite > Payments** и найдите оплату клиента. Она все еще должна отображаться со статусом **Pending** (Ожидает).

![Список платежей с ожидающей ручной оплатой](/img/admin/payments-list.png)

Нажмите на номер платежа, и вы сможете изменить его статус на **Completed** (Завершено).

![Страница с деталями платежа](/img/admin/payment-edit.png)

![Изменение статуса платежа на Completed](/img/admin/payment-status-completed.png)

После изменения статуса на **Completed**, вы увидите сообщение **Activate membership** (Активировать членство). Включите этот опцию **on** (вкл.), чтобы активировать членство и веб-сайт, связанные с этим клиентом. Затем нажмите, чтобы **Save Payment** (Сохранить платеж).

![Переключатель активации членства и кнопка Сохранить платеж](/img/admin/payment-activate-membership.png)

Ваш клиент теперь сможет получить доступ к дашборду и всем функциям, на которые он подписан.
