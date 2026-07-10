---
title: GitHub qismlari
sidebar_position: 3
_i18n_hash: c643f3d76aace8c15fd224b984af6633
---
# Ultimate Multisite qismlarini GitHub reposiyangizda qanday ishlatish haqida {#how-to-use-ultimate-multisite-snippets-on-our-github-repository}

Ultimate Multisite foydalanuvchilari ko'pincha so'raydigan kod qismlari mavjud bo'lib, ular ro'yxatdan o'tish sahifalariga Google Analytics skriptini qo'shish yoki admin panelidan meta boxni yashirish kabi kichik funksionalliklarni qo'shishni xohlaydi.

Bu maqolada sizga bu kodlarni qanday ishlatishingiz yoki aniqroq, ularni qayerga joylashtirishingizni ko'rsataman.

Qismlarni quyidagi linkda topishingiz mumkin:

https://github.com/next-press/wp-ultimo-snippets/

Kodni qo'shish uchun sizda 2 ta usul bor:

  1. O'zingizning temangizning functions.php faylida.

  2. Must-Use Plugins (mu-plugins)

# Qismlarni temangizning functions.php fayliga qanday qo'shish kerak. {#how-to-add-the-snippet-on-your-themes-functionsphp-file}

  1. WordPress Network admin paneliga tizimga kirib, Themes > Theme Editor (pastdagi skrinshotni ko'ring).

2. "Themes" sahifasida, o'ng yuqori burchakdagi tushirilgan menyuda faol ishlatayotgan temangizni tanlaganingizga ishonch hosil qiling (#3 rasmdagi).

3. "Theme Files" bo'limi ostidagi functions.php faylini bosib, uni yuklang. Pastga aylaning va GitHub repositoriyasidan olgan Ultimate Multisite snippetini u yerga joylang.

<!-- Screenshot unavailable: WordPress Theme Editor showing functions.php file editing -->

# Must-Use Pluginlarni (mu-plugins) qanday yaratish {#how-to-create-must-use-plugins-mu-plugins}

WordPress'da sizga "Must-Use Plugins" yoki qisqacha nomi bilan "mu-plugins" deb ataladigan maxsus funksionallikni yuklash imkonini beruvchi xususiyat mavjud.

Bu maxsus mu-pluginslar boshqa barcha oddiy plaginlardan oldin yuklanadi va ularni o'chirish mumkin emas. Multisite tarmoqida, bu mu-pluginsdagi kod sizning o'rnatishingizdagi barcha saytlarda yuklanadi.

1. WordPress o'rnatishingiz fayl tizimiga FTP yoki SSH orqali kirish uchun foydalaning.

2. WordPress o'rnatishingizning `wp-content` katalogi ichida quyidagi nomda yangi katalog yarating: `mu-plugins`.

<!-- Ekran tasviri mavjud emas: Fayl menejeri mu-plugins papkasini ko'rsatadi -->

3. Kompyuteringizda Notepad yoki istalor kod muharriri yordamida `wu-snippet.php` nomli yangi PHP faylini yarating.

4. GitHub repositoriyidan olgan Ultimate Multisite kod nusxasini faylga joylang va saqlang. Shuningdek, mu-plugins plaginini belgilash uchun bu kod nusxasi ustiga qo'shishingiz mumkin.
