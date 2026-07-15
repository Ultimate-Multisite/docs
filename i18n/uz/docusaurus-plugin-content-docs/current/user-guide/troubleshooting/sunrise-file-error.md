---
title: Sunrise Fayl Xatosi
sidebar_position: 12
_i18n_hash: 53d988d644c244d20f04444350bd5d3c
---
# Sunrise Faylni O'rnatish Xatosi

`sunrise.php` fayli bu WordPress o'zini ishga tushirish (bootstrapping) jarayonida qidiradigan maxsus fayldir. WordPress `sunrise.php` faylini aniqlashi uchun u **wp-content papkasining** ichida joylashgan bo'lishi kerak.

Ultimate Multisite ni faollashtirib, ekranda ko'rsatilganidek sozlash dasturidan o'tganingizda, Ultimate Multisite bizning `sunrise.php` faylimizni wp-content papkasiga nusxalashga harakat qiladi.

<!-- Ekran tasviri mavjud emas: sunrise.php o'rnatish bosqichini ko'rsatuvchi sozlash dasturi sahifasi -->

Ko'pincha, biz faylni muvaffaqiyatli nusxalay olamiz va hamma narsa ishlaydi. Biroq, agar biror narsa to'g'ri sozlanmagan bo'lsa (masalan, papka ruxsatnomalari), Ultimate Multisite faylni nusxalay olmasligi mumkin bo'lgan vaziyatga duch kelishingiz mumkin.

Ultimo sizga beradigan xato xabarini o'qisangiz, aynan shu narsa sodir bo'lganini ko'rasiz: **Sunrise nusxalash muvaffaqiyatsiz yakunlandi** (Sunrise copy failed).

<!-- Ekran tasviri mavjud emas: Sunrise nusxalash muvaffaqiyatsiz yakunlangan xato xabari -->

Buni tuzatish uchun siz shunchaki `wp-ultimo` plugin papkasidagi `sunrise.php` faylini nusxalab, uni o'zingizning wp-content papkangizga joylashtirishingiz mumkin. Buni qildikten so'ng, dastur sahifasini qayta yuklang va tekshiruvlar muvaffaqiyatli yakunlanishi kerak.

<!-- Ekran tasviri mavjud emas: fayl menejeri wp-ultimo plugin papkasidagi sunrise.php ni ko'rsatadi --> Har qanday holatda, kelajakda (Ultimate Multisite bilan emas, balki boshqa pluginlar va temalar bilan ham) muammolarni oldini olish uchun papka ruxsatnomalaringizni umumiy tekshirib ko'rish kerak bo'lishi mumkin.

WordPressning o'zida mavjud bo'lgan **Health Check tool** (buni asosiy saytingizdagi **admin panel > Tools > Health Check** orqali ishga tushirishingiz mumkin) sizda WordPress bilan muammolarga sabab bo'lishi mumkin bo'lgan papka ruxsatnomalari sozlamalaringiz bor-yo'qligini bilib berishi mumkin.

<!-- Скрипка не доступна: Инструмент проверки здоровья WordPress показывает статус разрешений папки -->
