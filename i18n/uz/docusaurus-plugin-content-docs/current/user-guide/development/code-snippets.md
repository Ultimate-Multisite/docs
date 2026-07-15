---
title: Kod qismlari
sidebar_position: 1
_i18n_hash: 2284b14474d86f665fa7c84cc305553e
---
# v2 uchun Kod Kesitlari

Asosiy qilib, **WordPress** uchun kod kesitlari ba'zi harakatlarni bajarish uchun ishlatiladi, bu esa boshqa bir maxsus kichik plugin talab qilishi mumkin. Bunday kod kesitlari WordPress yadrosining yoki temangizning (odatda `functions.php` fayli) bittasiga joylashtiriladi yoki MU plugin sifatida ham ishlatilishi mumkin.

Bu maqolada sizga **Ultimate Multisite v2** bilan ishlash uchun foydalanish mumkin bo'lgan uchta kod kesitini ko'rsatib beramiz:

  * [**Hisob menyusi qayerga joylashtirilishini o'zgartirish**](#changing-the-position-of-the-account-menu-item)

  * [**Foydalanuvchi belgilangan reja ostida ekanligini va/yoki faol obuna mavjudligini tekshirish usuli**](#how-to-check-if-the-user-is-under-a-given-plan-andor-has-an-active-subscription)

* [**Font-Icons bilan xaritalangan domenlarda CORS muammolarini tuzatish**](#fixing-cors-issues-with-font-icons-in-mapped-domains)

## Hisob menyusi qatorini o'zgartirish {#changing-the-position-of-the-account-menu-item}

Mijozingiz Dashboardidagi "Hisob" (Account) menyusining joylashuvini o'zgartirish uchun, quyidagi kod parchasini asosiy saytingiz faol tema `functions.php` fayliga qo'shishingiz kifoya. Bu qismlarni mu-pluginlaringiz yoki maxsus pluginlaringizning ichiga ham qo'yishingiz mumkin.

```php
add_filter('wu_my_account_menu_position', function() { return 10; // Menyu joylashuvini kerakli joyga qo'yish uchun bu qiymatni sozlang.
```

## Foydalanuvchi ma'lum bir reja ostida ekanligini va/yoki faol obuna mavjudligini qanday tekshirish mumkin {#how-to-check-if-the-user-is-under-a-given-plan-andor-has-an-active-subscription}

Bir tarmoq administrator sifatida sizga obunachilar yoki foydalanuvchilarning obuna holati va ular obuna bo'lgan reja asosida ma'lum bir guruh uchun bazaviy harakatlarni bajaradigan maxsus funksiyalarni yaratish kerak bo'lishi mumkin.

Bu Ultimate Multisite ning mahalliy (native) funksiyalari sizga bu jarayonda yordam beradi.

Foydalanuvchi ma'lum bir reja a'zosiga tegishli ekanligini tekshirish uchun quyidagi funksiyadan foydalanishingiz mumkin:

`wu_has_plan($user_id, $plan_id)`

Obuna faol ekanligini tekshirish uchun esa bu funksiyani ishlatishingiz mumkin:

`wu_is_active_subscriber($user_id)`

Quyida hozirgi foydalanuvchi ma'lum bir reja (masalan, _Plan ID 50_) ostida ekanligini va foydalanuvchining obunasi faol ekanligini tekshiradigan misol parchasi keltirilgan.

$user_id = get_current_user_id();$plan_id = 50;if (wu_has_plan($user_id, $plan_id) && wu_is_active_subscriber($user_id)) { // Foyd planga a mansubscriber va uchrashgan bo'lsa, shuni qiling} else { // Foyd planiga a'zo emas yoki uning subskripsiyasi faol bo'lmasa, boshqa narsalarni qiling} // end if;

Eslatma: _**wu_has_plan**_ funksiyasidan foydalanish uchun "Plan ID" kerak.

Plan ID ni olish uchun **Ultimate Multisite > Products** sahifasiga o'tishingiz mumkin. Har bir mahsulotning ID jadvalning o'ng tomonida ko'rsatiladi.

Eslatma: foydalanuvchilar faqat **Plan**ga subskribtsiya qilishlari mumkin, Paket yoki Xizmatga emas, chunki ular faqat **Plan** uchun qo'shimcha (add-on) hisoblanadi.

![Products list showing plan IDs](/img/admin/products-list.png)

## Xaritaga solingan domenlarda Font-Icons muammolarini bartaraf etish {#fixing-cors-issues-with-font-icons-in-mapped-domains}

Bir domenni sub-saytga xarita (mapping) qilsangiz, saytingizda maxsus shriftlarni yuklashda muammo bo'lishi mumkin. Bu sizning server sozlamalaringizdagi cross-origin bloklovchidan sabablangan.

Shrift fayllari deyarli har doim CSS dan to'g'ridan-to'g'ri yuklanadi, shuning uchun bizning domen xarita (domain mapping) pluginimiz URL'larni asl domenni o'rniga xaritaga solingan domenidan foydalanish uchun qayta yozishga qodir emas. Shuni tuzatish uchun esa siz server konfiguratsiya fayllaringizni o'zgartirishingiz kerak bo'ladi.

Apache

Sizning .htaccess faylingizga quyidagini qo'shing:

<FilesMatch “.(ttf|ttc|otf|eot|woff|font.css|css)$”> Header set Access-Control-Allow-Origin “*”

### NGINX {#fixing-cors-issues-with-font-icons-in-mapped-domains-1}

Server konfiguratsiya faylingizga (bu joy serverdan serverga farq qilishi mumkin) quyidagini qo'shing:

location ~ .(ttf|ttc|otf|eot|woff|font.css|css)$ { add_header Access-Control-Allow-Origin “*”;}
