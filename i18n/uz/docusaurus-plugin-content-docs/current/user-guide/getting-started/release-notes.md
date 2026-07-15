---
title: Noutlar
sidebar_position: 9
_i18n_hash: f43456fb08d6572cbc3ddf432a51d7d5
---
# Chiqarish EslAtlari

## Versiya 2.13.0 — 2026-06-05 da chiqarildi {#version-2130--released-on-2026-06-05}

- Yangi funksiya: Mijoniy (tenant) uchun hisoblar, to'lov jarayonlari, faktura, sayt, shablon o'zgartirish va domen xaritasi jarayonlari uchun suveren-tenant (sovereign-tenant) qo'llab-quvvatlanish qo'shildi. Bu orqali mijozlar boshqariladigan harakatlar uchun tenent tarmoqlari orqali asosiy saytga qaytarilishi mumkin.
- Yangi funksiya: Takroriy a'zoliklar uchun yangilash kredensiallarini tekshirish qo'shildi, shunda agar saqlangan to'lov kelishuvi, obuna yoki vault token mavjud bo'lmasa, gateway avtomatik qayta yangilanishni o'chirish imkonini oladi.
- Yangi funksiya: Sayt yaratish jarayonidagi kutilayotgan (pending) saytlarni uchun HMAC tasdiqlangan loopback nashr etish qo'shildi, bu esa fon ishlarining kechikishi mumkin bo'lgan hostlarda to'lovdan saytga taqdimotni yanada ishonchli qiladi.
- Yangi funksiya: SSO URL'lari, to'lov shakllari asosiy domenlari va avtomatik domen yozuvlarini yaratish uchun dasturchilar kengaytirish nuqtalarini qo'shildi.
- Tuzatish: SSO xaritasi bilan ishlash, anonim broker tashriflari, chiqish (logout) va pluginlar o'rtasidagi bog'liqliklar tanlovlarning barcha domenlar bo'ylab yanada ishonchliroq bo'ldi.
- Tuzatish: Sayt yaratish jarayoni endi eskirgan nashr bayroqlari (stale publish flags) dan tiklanadi va mijozlarni sayt yaratish ekranida qolib qolmaysiz.
- Tuzatish: Umumiy to'lov shakllari asosiy domenlari uchun domen yozuvlari yaratilmaydi, shuningdek, integratsiya faolligini ko'rsatmagan foydalanuvchi host-provayder fon ishlaridan e'tiborsiz qoldiriladi.
- Tuzatish: To'lov jarayoni, to'lov manzili, parolni qayta tiklash, elektron tasdiqlash, shablon o'zgartirish, turlari (tours) va mijoz paneli kabi cheklovlar endi odatiy mijoz harakatlarini bloklamaydi.
- Tuzatish: Tarqatilgan elektron xatlarni qabul qiluvchilarga maxfiylikni saqlash uchun yangilandi, shuningdek, qabul qiluvchi ro'yxatlari yoki pochta transportlari muvaffaqiyatsiz bo'lganda SMTP/plugin fatal xatolaridan saqlanish imkonini berdi.
- Tuzatish: A'zoliklar qayta yangilanishi, muddati tugashi ko'rsatish va to'lov yig'ish kabi cheklovlar endi darhol tugashlar, ishlamay qolish yoki talab qilinadigan to'lovlarni qo'shib bo'lmaslik holatlarini oldini oladi.
- Takomillashtirish: WordPress bilan mos kelishuv 7.0 gacha sinovdan o'tkazildi, ishlab chiqarish Vue resurslari npm manbalaridan qayta quriladi va Cypress end-to-end qamrovida to'lov, sozlash, SSO va gateway jarayonlariga yanada ko'proq testlar amalga oshirildi.

## Versiya 2.12.0 — 2026-05-15 da chiqarildi {#version-2120--released-on-2026-05-15}

- Yangi: Hostinger (hPanel)ni domen xaritasi integratsiyasi bilan qo'llab-quvvatlanadigan host provayder sifatida qo'shildi
- Yangi: Site Exporter endi tarmoq bo'ylab saytni qayta tiklashni soddalashtirish uchun tarmoq import paketlarini boshqaradi
- Tuzatish: BCC tarqatish elektron xatlari endi qabul qiluvchi manzilni oshkor etmaslik uchun ma'lum bo'lmagan qabul qiluvchilar sarlavhasi (header) dan foydalanadi
- Tuzatish: Sana qiymatsiz qiymat bilan saqlashda a'zo bo'lish muddati korrupsiyaga uchramaydi
- Tuzatish: Stripe a'zoglik yangilanishlari endi eskirgan deleteDiscount API chaqirilmasdan chegirmalarni to'g'ri tozlaydi
- Tuzatish: domen xaritasi qilingan saytlardagi SSO yo'naltirishlar cheklangan, bu cheksiz qayta yo'naltirish sikllarini oldini oladi
- Tuzatish: O'rnatish asisti (Setup wizard) rasmlar tanlash endi asosiy ma'lumot modelini to'g'ri yangilaydi
- Tuzatish: Site Exporter CLI endi to'g'ri standart tarmoq sayt tanlovini saqlab qoladi
- Takomillashtirildi: Plugin hajmini kamaytirish uchun paketdagi wp-cli bundpiikli (bundled) olib tashlandi

## Versiya 2.11.0 — 2026-05-11 da chiqarildi {#version-2110--released-on-2026-05-11}

- Yangi: Site eksportlari endi mustaqil ishlaydigan `index.php` faylini paketlashni boshqaradi, shunda ZIP faylni alohida plugin o'rnatmasdan yangi hostga o'rnatish mumkin bo'ladi
- Yangi: Tarmoq eksporti administratorlarga Site Export admin sahifasidan barcha sousaytlarni yagona arxivda eksport qilish imkonini beradi
- Yangi: Site Templates rejasi (plan) tugmasini qo'llash endi o'rnatish cheklovlari uchun fallback zanjiri orqali majburiy qilingan holda, shunda plan chegaralari uchun shablon mavjudligini to'g'ri cheklaydi
- Yangi: Checkout form editor talab qilinadigan maydon konfiguratmasdan foydalanib mahsulot qo'shilsa ogohlantiradi
- Yangi: Import/Export sozlamalari yorlig'i uning diapazonini aniq tushuntiradi va Site Export vositasiga to'g'ridan-to'g'ri havolani beradi

## Versiya 2.10.0 — 2026-05-05 da chiqarildi {#version-2100--released-on-2026-05-05}

- Yangi: Manual ma'lumot kiritish uchun PayPal yo'l ko'rsatuvchi sozlash wizardi, mos keladigan gateway konfiguratsiyasi uchun OAuth flag gate bilan.
- Yangi: Shabloni o'zgartirish (Template switch) foydalanuvchi paneli hozirgi shablon kartasi, doimiy grid va **Hozirgi shablonni qayta tiklash** tugmasi bilan qayta loyihalangan.
- Tuzatish: AJAX xatosi yuz berganda shablon o'zgartirish UI ni bloklamaydi.
- Tuzatish: Shablon o'zgartirish ruxsat holatlari notimlik kirishdan himoya qilinadi.
- Tuzatish: Sayt ustuvor (Site override) kiritmalari saqlashdan oldin tekshiriladi.
- Tuzatish: Manzil bo'sh bo'lganda hisoboti so'raldi.
- Tuzatish: PHP 8.1 null-to-string ehtiyotkorlik haqidagi eslatmalar hal qilindi.
- Tuzatish: Timing muammolarini oldini olish uchun lazy-loaded ma'lumotlar init hookidan oldin ishga tushiriladi.
- Tuzatish: Barcha kirish oqimlarida filtrlangan SSO yo'li hurmat qilinadi.
- Tuzatish: Saqlashda bo'sh sayt identifikatsiya variantlari saqlab qolindi.

## Versiya 2.9.0 — 2026-04-30 da chiqarildi {#version-290--released-on-2026-04-30}

- Yangi: **Tools > Export & Import** (Asboblar > Eksport va import) ostida yagona saytni eksport qilish va import qilish qo'shildi.
- Tuzatish: ZIP fayllari endi tasdiqlangan yuklab olish nuqtasi orqali xizmat qilinadi.
- Tuzatish: Kutilayotgan eksport/import so'rovlaridagi SQL suntikligi (SQL injection) xavfi va so'rov muammolari tuzatildi.
- Tuzatish: Admin foydalanuvchi mijoz elektron pochta manzilini qo'lda tasdiqlaganda kutilayotgan sayt e'lon qilinmaydi.
- Tuzatish: Aʼzo (membership) yo'q bo'lganda yutqilgan pending_site yozuvlari tozalangan.
- Tuzatish: Sozlamalar navigatsiyasi paddingi va qidiruv ankora navigatsiyasi tuzatildi.
- Tuzatish: Kutilayotgan saytlar endi Barcha Saytlar (All Sites) ko'rinishida birinchi o'rinda ko'rsatiladi.
- Tuzatish: Skrinshot provayderi (mShots) 403 xatolarini oldini olish uchun User-Agent sarlavhasi qo'shildi.
- Tuzatish: Import cron jadvali doiraviy bog'liqligi hal qilindi.
- Tuzatish: Foydalanuvchi sozlamalari kalitlarida Tour IDlari underscore ( `_` ) ga normalizatsiya qilindi.
- Takomillashtirish: Ma'lumotlarni yaxshiroq mos kelish uchun ZipArchive endi Alchemy/Zippy o'rniga ishlatiladi.

## Versiya 2.8.0 — 2026-04-29 da chiqarildi {#version-280--released-on-2026-04-29}

Новое: В настройках других опций UI добавлен переключатель Jumper.
Новое: В таблице списка форм оформления заказа добавлена колонка Статус.
Новое: Добавлен загрузчик файлов sunrise Addon для пользовательских расширений sunrise MU-плагинов.
Улучшено: На странице настроек удалена опция включения отчетов об ошибках.
Исправлено: Карточка сайта на странице «Спасибо» — изображение теперь ограничено, а ссылки стилизованы правильно.
Исправлено: Провайдер скриншотов изменен с thum.io на WordPress.com mShots.
Исправлено: Включен Регистрация и Роль по умолчанию теперь устанавливают правильные значения при новой установке.
Исправлено: `get_site_url()` больше не возвращает пустое значение, когда домен включает порт.
Исправлено: Файлы медиа теперь копируются правильно, когда настройка `copy_media` пуста.
Исправлено: Кэш объектов корректно инвалидируется после записи sitemeta с network-activate.
Исправлено: Автоматическое продвижение пользовательского домена в основной при проверке DNS для трехчастных доменов.
Исправлено: Ожидающее членство отменяется, когда истек срок действия платежа и он очищен.
Исправлено: Проверка силы пароля перезапускается после закрытия всплывающего окна входа.
Исправлено: Бесконечная перезагрузка страницы на странице «Спасибо» прекращена, если сайт уже создан.
Исправлено: Опция регистрации ядра WP синхронизируется при активации плагина и сохранении настроек.
Исправлено: Добавлена защита от нулевого значения в `calculate_expiration` для совместимости с PHP 8.4.
Исправлено: Дублирующиеся регистрации блокируются, если у клиента уже есть активное членство.
Исправлено: Добавлена проверка на null для `date_expiration` в оформлении заказа.
Исправлено: Провизионирование сайта усилено — ограничения, выявление членства, продвижение домена.
Исправлено: Метка статуса предварительной установки исправлена на НЕ Активировано при сбое проверки.
Исправлено: Домен оформления заказа используется для URL верификации электронной почты.
Исправлено: Автологин после оформления заказа, когда нет поля пароля.
Исправлено: Бесплатные членства больше не истекают — считаются пожизненными.

- Tuzatish: E-mail tasdiqlash eshig'i mijoz e-mailni tasdiqlaguncha saytni nashr etmasini to'xtatardi.
- Tuzatish: SES v2 API endpoint asosiy yo'li va identifikatsiya yo'lini tuzatildi.
- Tuzatish: `wu_inline_login_error` hook pre-submit qutiyida chiqariladi.
