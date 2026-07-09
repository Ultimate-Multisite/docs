---
title: Captcha o‘zgarishlar jurnali
sidebar_position: 99
_i18n_hash: 711bb4f00a108ccb60114b60822e5162
---
# Captcha o‘zgarishlar jurnali

Versiya: 1.5.0 - 2026-05-22 da chiqarilgan
* Yangi: Qat’iy to‘xtatuvchi tezlik cheklagichi — captcha bilan himoyalangan yuzalardagi har bir GET va POST ni sanaydi (wp-login / register / lost-password / comments, WooCommerce my-account / checkout / pay-for-order, Ultimate Multisite checkout / inline-login) va HTTP 429, `Retry-After` header hamda tasodifiy tarpit kutish vaqti (1–5s, qat’iy 15s bilan cheklangan) bilan javob beradi.
* Yangi: Tarpit oynasini sozlash uchun `cap_rate_limit_tarpit_min` / `cap_rate_limit_tarpit_max` sozlamalari.
* Yangi: Ishonchli IP diapazonlarini istisno qilish uchun `wu_cap_rate_limit_whitelist_ip` filtri.
* Yangi: Qat’iy to‘xtatuvchi javob yuborilishidan darhol oldin ishga tushadigan `wu_cap_rate_limit_will_block` amali.
* Yangi: Soxtalashtirishga chidamli client-IP aniqlash. `Captcha_Core::get_client_ip()` (tezlik cheklash bucket kalitlari, captcha siteverify `remoteip` va statistika IP xeshlari uchun yagona haqiqat manbai) endi qat’iy ishonch modelini majburiy qo‘llaydi: REMOTE_ADDR asosiy nuqta hisoblanadi, `CF-Connecting-IP` faqat bevosita peer joriy Cloudflare IP diapazoni ichida bo‘lganda hisobga olinadi, `X-Forwarded-For` esa faqat bevosita peer admin sozlagan ishonchli proxy ro‘yxatida bo‘lganda hisobga olinadi; bunda tashrifchi IP aniqlanguncha o‘ngdan chapga yurib, ishonchli/CF hoplar o‘tkazib yuboriladi.
* Yangi: `cap_trust_cloudflare_headers` sozlamasi (standart OFF) — Cloudflare ortida bo‘lganda `CF-Connecting-IP` ishonchini yoqish. Plugin ichiga kiritilgan Cloudflare CIDR snapshot bilan keladi va uni haftalik wp-cron orqali yangilaydi; yangilash muvaffaqiyatsiz bo‘lsa, ichki fallback ishlatiladi.
* Yangi: `cap_trusted_proxies` sozlamasi — o‘zingizning oldingi qatordagi proxylar / yuk taqsimlagichlaringizni ko‘rsatuvchi CIDRlar yoki yalang‘och IPlar uchun textarea (har qatorda bittadan, `#` izohlarga ruxsat beriladi). Busiz, tezlik cheklagichi yoqilgan bo‘lsa ham `X-Forwarded-For` e’tiborga olinmaydi.
* Yangi: Birinchi yoqishda ehtimoliy Cloudflare / proxy holatini avtomatik aniqlash va bir bosishda "Aniqlangan sozlamalarni qo‘llash" admin bildirishnomasi. Plugin saqlangan qiymatlaringizni hech qachon ustidan yozmaydi; agar keyingi trafik konfiguratsiyangiz endi real holatga mos kelmasligini ko‘rsatsa (masalan, Cloudflare CIDR diapazonlarini o‘zgartirgan va proxy CIDR endi eskirgan bo‘lsa), tavsiya etilgan yangilanish bilan yopib bo‘lmaydigan mos kelmaslik bildirishnomasi ko‘rsatiladi.
* Tuzatildi: Ko‘rinmas rejim endi `cap_security_level` ni jimgina FAST ga pasaytirmaydi — admin sozlagan daraja hurmat qilinadi. Maxsus mantiq xohlaydigan saytlar uchun yangi `wu_cap_server_security_level` filtri mavjud.
* Tuzatildi: Statistika `rate_limits_triggered` hisoblagichi endi faqat kam uchraydigan muvaffaqiyatdan keyingi backstop yo‘lida emas, har bir bloklashda oshiriladi.
* Tuzatildi: `Captcha_Core::get_client_ip()` endi tezlik cheklagichi, captcha provayderlari (reCAPTCHA + hCaptcha `siteverify`) va statistika bo‘ylab tashrifchi IP atributsiyasi uchun yagona haqiqat manbai — bu soxtalashtirilgan `CF-Connecting-IP` header olib kelgan to‘g‘ridan-to‘g‘ri origin-server so‘rovlari haqiqiy peer o‘rniga soxtalashtirilgan IP bo‘yicha bucket qilinishi mumkin bo‘lgan spoofing vektorini yopadi.
* Tuzatildi: WooCommerce klassik checkout tezlik cheklash darvozasi endi `woocommerce_before_checkout_form` o‘rniga `template_redirect` da (priority 1) ishga tushadi. Savat bo‘sh bo‘lganda forma darajasidagi hook hech qachon ishga tushmaydi, shu sabab mahsulot qo‘shmaydigan flood trafik cheklagichni butunlay chetlab o‘tayotgan edi.
* Tuzatildi: WooCommerce pay-for-order tezlik cheklash darvozasi endi `woocommerce_before_pay_action` o‘rniga `template_redirect` da ishga tushadi. Ikkinchisi faqat `wp_verify_nonce('woocommerce-pay')` muvaffaqiyatli bo‘lgandan keyin ishga tushadi, bu esa unauth hujumchilar (haqiqiy tahdid modeli) cheklagichni hech qachon qo‘zg‘atmaganini anglatadi.
* Tuzatildi: WooCommerce Store API (bloklar) checkout tezlik cheklash darvozasi endi `woocommerce_store_api_checkout_update_order_from_request` o‘rniga `rest_pre_dispatch` da ishga tushadi. Ikkinchisi faqat Store API savat va billing maydonlarini tekshirgandan keyin ishga tushadi, shu sabab unauth botlar validator’dan 400 olib, cheklagichni hech qachon ishga tushirmagan.
* Tuzatildi: Ultimate Multisite inline-login tezlik cheklash darvozasi endi `wu_before_inline_login` o‘rniga `wu_ajax_nopriv_wu_inline_login` priority 1 da (va tizimga kirganlar uchun mirror) ishga tushadi. Ikkinchisi faqat `check_ajax_referer('wu_checkout')` muvaffaqiyatli bo‘lgandan keyin ishga tushadi, shu sabab yaroqli wu_checkout nonce bo‘lmagan unauth botlar 403 olib, cheklagichni hech qachon ishga tushirmagan.
* Tuzatildi: `Rate_Limiter::enforce()` endi `surface|ip` bo‘yicha kalitlangan har so‘rovga bir marta ishlaydigan guard qo‘llaydi, shu sabab har renderda ikki marta ishga tushadigan yuqori oqim hooklari (ayniqsa Ultimate Multisite dagi `wu_setup_checkout`) endi samarali tezlik cheklash chegarasini yarmiga tushirmaydi.
* Tuzatildi: Tezlik cheklash yuzasi darvozalari endi `Captcha_Core::is_whitelisted()` (`wu_captcha_whitelisted` filtri) ga murojaat qilmaydi. Bu filtr "captcha allaqachon boshqa yuza tomonidan qayta ishlangan" degan signal beradi va flood himoyasiga aloqador emas — WooCommerce integratsiyasi Woo nonce mavjud bo‘lganda WordPress login captcha ni o‘tkazib yuborish uchun unga ulanayotgan edi, bu tezlik sanashga ham sizib o‘tib, Woo POSTlar cheklagichdan qochishiga imkon bergan. Endi qo‘llanadigan yagona chetlab o‘tish — tezlik cheklashga xos `wu_cap_rate_limit_whitelist_ip` filtri.

Versiya: 1.3.2 - 2026-01-27 da chiqarilgan
* Tuzatildi: Cap vidjeti Elementor yoki boshqa sahifa quruvchilaridan foydalanadigan checkout formalarida render qilinmasligi
* Tuzatildi: cap-widget maxsus elementi wp_kses() sanitizatsiyasi tomonidan olib tashlanishi
* Yaxshilandi: HTML filtrlashni chetlab o‘tish uchun checkout captcha maydoni uchun callable kontentdan foydalanish
* Yaxshilandi: Chekka holatlar uchun fallback bilan JavaScript soddalashtirildi

Versiya: 1.3.1 - 2026-01-26 da chiqarilgan
* Tuzatildi: Cap Captcha ko‘rinmas rejimi dinamik Ultimate Multisite checkout formalarida avtomatik yechilmasligi
* Yaxshilandi: Cap checkout skripti endi dinamik yuklangan vidjetlarni aniqlash uchun MutationObserver dan foydalanadi
* Yaxshilandi: Yuborishdan oldin tokenni kutish uchun checkout tugmasini ushlab qolish qo‘shildi

Version: 1.3.0 - 2026-01-27 da chiqarildi
* Yangi: WooCommerce Blocks checkout integratsiyasi Store API fetch tutib qolish bilan
* Yangi: WooCommerce checkout uchun ko‘rinmas captcha qo‘llab-quvvatlovi (hCaptcha ko‘rinmas, reCAPTCHA v2 ko‘rinmas, v3)
* Yangi: Ultimate Multisite siz ishlatish uchun alohida sozlamalar sahifasi
* Yangi: Bog‘liqlik ziddiyatlarining oldini olish uchun Jetpack Autoloader
* Tuzatildi: dinamik Ultimate Multisite checkout da hCaptcha ko‘rsatilmasligi (AJAX orqali yuklangan kontent)
* Tuzatildi: forma tekshiruvi xatolari yuz berganda Captcha yangilanmasligi/qayta tiklanmasligi
* Tuzatildi: WooCommerce checkout sahifasida hCaptcha ko‘rinmasligi
* Tuzatildi: reCAPTCHA class topilmadi xatosi (google/recaptcha PHP kutubxonasi qo‘shildi)
* Yaxshilandi: WordPress hooklari, MutationObserver va AJAX tutib qolish orqali xatolarni aniqlash
* Yaxshilandi: Sozlamalar tavsiflari endi API kalitlari uchun dashboard URLlarini o‘z ichiga oladi

Version: 1.2.2 - 2026-01-24 da chiqarildi
* Tuzatildi: Captcha Ultimate Multisite Login Form Element da ko‘rinmasligi (forma filteri nomi mos kelmagan)
* Tuzatildi: Cap widget HTML wp_kses() sanitizatsiyasi tomonidan olib tashlanishi
* Tuzatildi: JavaScript selectorlari element IDlarida slash bo‘lgan formalarni topmasligi
* Qo‘shildi: classaddonlar ruxsat etilgan HTML teglarini kengaytirishi uchun `wu_kses_allowed_html` filter hook
* Olib tashlandi: Provayderga xos scriptlar bilan almashtirilgan ishlatilmaydigan JavaScript fayllari

Version: 1.2.1 - 2026-01-23 da chiqarildi

* Tuzatildi: Cap Captcha token tekshiruvi multisite muhitlarida muvaffaqiyatsiz bo‘lishi (endi network bo‘ylab transientlardan foydalanadi)
* Tuzatildi: Captcha endi kirish holatidan qat’i nazar barcha foydalanuvchilar uchun izchil ko‘rsatiladi
* Tuzatildi: checkout muvaffaqiyatsizliklariga sabab bo‘lgan captcha ko‘rsatilishi va tekshiruvi o‘rtasidagi nomuvofiqlik

Version: 1.2.0 - 2026-01-21 da chiqarildi

* Yangi: Cap Captcha - o‘z serverida joylashtiriladigan proof-of-work captcha, faollashtirishda sukut bo‘yicha yoqiladi
* Yangi: Nol-sozlama himoya - addonni faollashtiring va darhol himoyalanasiz
* Yangi: Oson kengaytirish uchun polimorfik captcha provayder arxitekturasi
* Yangi: Karta sinov hujumlariga qarshi WooCommerce Store API checkout himoyasi
* Yangi: Sinovlar, tekshiruvlar va bloklangan hujumlarni ko‘rsatuvchi statistika kuzatuv dashboardi
* Yangi: Cap Captcha qiyinligi uchun xavfsizlik darajasi presetlari (Tez, O‘rta, Maks)
* Yangi: reCAPTCHA va hCaptcha provayderlari uchun abstrakt asosiy classlar
* Yaxshilandi: Kod bazasi modulli provayder classlariga qayta tuzildi
* Yaxshilandi: Maxsus manager class bilan mas’uliyatlar yaxshiroq ajratildi
* Fixed: Security improvements for $_SERVER variable sanitization
* Tuzatildi: WordPress nomlash qoidalari uchun PHPUnit test konfiguratsiyasi

Version: 1.0.1 - 2025-09-28 da chiqarildi

* Prefiks ultimate-multisite ga o‘zgartirildi; text domain yangilandi; versiya oshirildi.
