---
title: Qo‘lda to‘lovlarni sozlash
sidebar_position: 20
_i18n_hash: 98210a45c3d3af7368f60d7593235163
---
# Qo‘lda to‘lovlarni sozlash (v2)

_**MUHIM ESLATMA: Bu maqola Ultimate Multisite 2.x versiyasiga taalluqli.**_

Qo‘lda to‘lovlar — foydalanuvchilaringiz uchun **Stripe** yoki **PayPal** mavjud bo‘lmaganda, ularga boshqa to‘lov usullarini taklif qilish yo‘lidir. Bu pul o‘tkazmasi yoki bank o‘tkazmasi yoxud foydalanuvchilaringiz hududida mavjud bo‘lgan istalgan boshqa to‘lov usuli bo‘lishi mumkin.

## Qo‘lda to‘lovlarni qanday yoqish mumkin

Qo‘lda to‘lovni sozlash juda oson. Siz uni to‘lov shlyuzlari ostida yoqishingiz va foydalanuvchi to‘lovni qanday yuborishi kerakligi haqida batafsil yo‘riqnomalarni kiritishingiz kifoya.

Avval **Ultimate Multisite > Sozlamalar > To‘lovlar** bo‘limiga o‘ting. **To‘lov shlyuzlari** ostida **Qo‘lda** parametrini yoqing. Siz uchun **To‘lov yo‘riqnomalari** oynasi paydo bo‘lganini ko‘rasiz.

Bu oynaga mijozingiz to‘lovni amalga oshirishi uchun kerak bo‘ladigan ma’lumotlarni qo‘shing. Masalan, bu bank hisobingiz tafsilotlari va mijoz sizga to‘lov tasdiqini yuborishi uchun emailingiz bo‘lishi mumkin.

![To‘lov yo‘riqnomalari matn maydoni bilan qo‘lda to‘lov shlyuzi tugmasi](/img/config/manual-gateway-expanded.png)

Mana qo‘lda shlyuz sozlamalari interfeysi:

![Qo‘lda shlyuz sozlamalari](/img/config/manual-gateway-settings.png)

Uni sozlaganingizdan so‘ng, shunchaki **Sozlamalarni saqlash** tugmasini bosing va hammasi tayyor. Foydalanuvchilar tarmog‘ingizda ro‘yxatdan o‘tganda, xaridni yakunlash uchun sizning yo‘riqnomalaringizni olishlari haqida xabarni ko‘rishadi.

![Foydalanuvchiga to‘lov yo‘riqnomalarini olishini bildiruvchi ro‘yxatdan o‘tish tasdiqlash xabari](/img/frontend/registration-manual-notice.png)

Shuningdek, ular **Rahmat** sahifangizda to‘lov yo‘riqnomalaringiz bilan xabar ham olishadi.

<!-- Screenshot unavailable: Thank You page showing payment instructions after checkout -->

## Qo‘lda to‘lovlarni tasdiqlash

Qo‘lda to‘lovni tasdiqlash uchun chap paneldagi **To‘lovlar** menyusiga o‘ting. U yerda tarmog‘ingizdagi barcha to‘lovlarni va ularning tafsilotlarini, jumladan **holat**ini ko‘rishingiz mumkin. Qo‘lda to‘lov siz uni qo‘lda o‘zgartirmaguningizcha har doim **Kutilmoqda** holatida bo‘ladi.

![Kutilayotgan qo‘lda to‘lovni ko‘rsatadigan to‘lovlar ro‘yxati](/img/admin/payments-list.png)

**Ma’lumot kodi**ni bosish orqali to‘lov sahifasiga kiring. Bu sahifada kutilayotgan to‘lovning barcha tafsilotlari, masalan, ma’lumot IDsi, mahsulotlar, vaqt belgilari va boshqalar mavjud.

![Ma’lumot kodi, mahsulotlar va yakuniy summalarni ko‘rsatuvchi to‘lov tafsilotlari sahifasi](/img/admin/payment-edit.png)

O‘ng ustunda to‘lov holatini o‘zgartirishingiz mumkin. Uni **Yakunlangan** holatiga o‘zgartirish va **A’zolikni faollashtirish** parametrini yoqish mijozingizning saytini ishga tushiradi va ularning a’zoligi faol bo‘ladi.

![Holati Yakunlangan qilib o‘rnatilgan va A’zolikni faollashtirish tugmasi yoqilgan to‘lovni tahrirlash sahifasi](/img/admin/payment-activate-membership.png)
