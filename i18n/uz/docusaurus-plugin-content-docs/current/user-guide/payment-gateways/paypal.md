---
title: PayPal'ni sozlash
sidebar_position: 10
_i18n_hash: 894ca1f2ca4ca589f3ef49c131e330d5
---
# PayPal Gateway'ni Sozlash (v2)

_**MUHIM Eslatma: Bu maqola Ultimate Multisite 2.x versiyasiga oid.**_

Bizning to‘lov sozlamalar sahifasida Stripe, Stripe Checkout, PayPal va Manual usullarini faollashtirish orqali to‘lovlardan birini faollashtirishingiz mumkin: Stripe, Stripe Checkout, PayPal va Manual. Bu maqolada biz **PayPal** bilan qanday integratsiya qilishni ko'rib chiqamiz.

Stripe kabi, PayPal ham onlayn to‘lovlar uchun keng qo‘llaniladi, ayniqsa WordPress saytlarida. Bu maqola sizga PayPalni sizning tarmoqqa mavjud to‘lov usuli sifatida qanday ishlatish bo‘yicha yo‘l ko‘rsatadi.

Bu yerda eslatib o‘tish kerakki, bu integratsiya uchun zarur bo‘lgan API kredensialini olish uchun sizda **PayPal Business hisobingiz** bo‘lishi kerak.

## PayPalni tarmoqqa faollashtirish

PayPalni tarmoqqa mavjud to‘lov usuli sifatida faollashtirish uchun **Ultimate Multisite > Settings > Payments** yorlig‘iga o‘ting va PayPal yonidagi qutini belgilang (tick).

![Enabling PayPal in active payment gateways](/img/config/settings-payment-gateways.png)

## Yo‘naltirilgan sozlash wizardidan foydalanish

Ultimate Multisite 2.10.0 to‘lov gateway sozlamalariga yo‘naltirilgan PayPal sozlash wizardini qo‘shadi. PayPalni faollashtirgandan so‘ng, gatewayni qanday ulashmoqchi ekanligingizni tanlash va saqlashdan oldin qaysi kredensiallarga hali ehtiyoj borligini tasdiqlashingiz uchun **Ultimate Multisite > Settings > Payments** da wizarddan foydalaning.

Wizard ikkita sozlash yo‘lini qo‘llab-quvvatlaydi:

* **Ручная учётных данных giri**: Bu yo'lni shunday ishlatish kerak: agar sizda allaqachon PayPal API ma'lumotlaringiz bo'lsa, hisobingiz uchun OAuth sozlamalari mavjud bo'lmasa yoki ma'lumotlarni o'zingiz nusxalashni afzal ko'rsangiz. PayPal maydonlariga API Foydalanuvchisi (API Username), API Parol (API Password) va API Imzosi (API Signature) kiritib, to'lov sozlamalarini saqlang.
* **OAuth bog'lanish eshigi**: Bu yo'lni faqat OAuth opsiyasi mavjud bo'lgan va sizning o'rnatishingiz uchun faollashtirilgan bo'lgan holatlarda ishlatish kerak. Wizard (ko'rsatuvchi) OAuth jarayonini feature flag orqali ko'rsatadi, shuning uchun flagga ega bo'lmagan tarmoqlar qo'lda ma'lumot kiritish maydonlarini davomida ishlatishda qoladi.

Agar wizardda OAuth opsiyasini ko'rmasangiz, quyidagi qo'lda учётdan foydalanish jarayonini yakunlang. Bu gateway avvalgi Ultimate Multisite 2.x versiyalari bilan bir xil PayPal Business API ma'lumotlari bilan ishlaydi.

## PayPal API ma'lumotlarini olish

PayPal to'lov eshigi sifatida faollashtirilganidan so'ng, siz PayPal API **Foydalanuvchisi** (Username), PayPal API **Parol** (Password) va PayPal API **Imzosi** (Signature) maydonlarini to'ldirishingiz kerak bo'ladi.

Buni o'zingizning PayPal [Live](https://www.paypal.com/home) yoki [Sandbox](https://www.sandbox.paypal.com/home) hisobingizga kirib kiritishingiz mumkin.

(Unutmangki, to'lovlarni sinab ko'rish va eshigi to'g'ri sozlangani tekshirish uchun **sandbox rejimidan** foydalanishingiz mumkin. Shunchaki tegishli bo'limni yoqing.)

![PayPal API ma'lumotlari maydonlari va sandbox rejimi tugmasi](/img/config/settings-payment-gateways.png)

PayPal hisobingiz uchun API Imzosi yoki Sertifikat ma'lumotlarini so'rash uchun:

  1. [Hisob sozlamalaringizga](https://www.paypal.com/businessmanage/account/accountAccess) kiring.

  2. **API kirish** (API access) bo'limida **Yangilash** (Update) tugmasini bosing.
![API kirish bo'limi bilan PayPal Hisob sozlamalari](/img/config/settings-payment-gateways.png)

3. **NVP/SOAP API integratsiyasida (Classic)**, **API ma'lumotlarini boshqarish** tugmasini bosing.
![PayPal NVP/SOAP API integration Manage API credentials](/img/config/settings-payment-gateways.png)

     * Agar sizda allaqachon API imzo yoki sertifikat yaratilgan bo'lsa, siz ma'lumotlaringizni topishingiz mumkin bo'lgan sahifaga yo'naltirilasiz.

     * _**Eslatma:** Agar PayPal hisobingizni tasdiqlashingiz so'raladigan holatda bo'lsangiz, ekrandagi ko'rsatmalarga amal qiling._

  4. Quyidagi variantlardan **birini** tanlang va keyin **Rozi bo'ldim va yuborish** tugmasini bosing.

     * **API imzosini so'rash** – API imzo autentifikatsiyasi uchun tanlang.

     * **API sertifikatini so'rash** – API sertifikati autentifikatsiyasi uchun tanlang.

  5. PayPal sizning API ma'lumotlaringizni quyidagicha yaratadi:
![PayPal generated API credentials](/img/config/settings-payment-gateways.png)

     * **API imzo ma'lumotlari**da API foydalanuvchisi (API Username), API paroli (API Password) va Imza (Signature) bo'ladi, ular muddati tugamaydi. Qo'shimcha xavfsizlik uchun bu qiymatlar ko'rinmaydi. Ularni yoqish/o'chirish uchun **Ko'rsatish/Yashirish** tugmasini bosing. Ishingiz tugagach, **Qabul qildim** tugmasini bosing.

     * **API sertifikati ma'lumotlari**da API foydalanuvchisi (API Username), API paroli (API Password) va Sertifikat (Certificate) bo'ladi, ular uch yil o'tgach avtomatik ravishda muddati tugaydi. API Sertifikatini kompyuter stoli ustiga saqlash uchun **Sertifikati yuklab olish** tugmasini bosing.

Endi sizning PayPal to'lov integratsiyangiz yakunlandi!

Agar PayPal sozlamalari bilan bog'liq savollaringiz bo'lsa, siz PayPal'ning [Yordam markaziga](https://www.paypal.com/br/smarthelp/home) murojaat qilishingiz mumkin.
