---
title: GitHub Snippets
sidebar_position: 3
_i18n_hash: c643f3d76aace8c15fd224b984af6633
---
# Ultimate Multisite snippet-ууд GitHub репозиторийг хэрхэн ашиглах вэ

Ultimate Multisite ашигладаг хүмүүс ихээр хүссэн, жижиг функцууд (жишээлбэл, бүртгэл хийх хуудас дээр Google Analytics скрипт нэмэх эсвэл администратор дашбортоос мета боксыг нуух) зэрэг нэмэлт үйлдлүүдийг хийхэд хэрэгтэй кодны жишээ (snippets) GitHub репозиторийг дотор байдаг.

Энэ нийтлэлд бид эдгээр кодыг хэрхэн ашиглах, ямар газарт байрлуулах талаар тайлбарлаж өгнө.

Кодууд нь доор байгаа линк дээрээ олдох боломжтой:

https://github.com/next-press/wp-ultimo-snippets/

Кодыг нэмэх хоёр арга бий:

  1. Таны theme-ийн functions.php файл дээр.

  2. Must-Use Plugins (mu-plugins)

# Theme-ийн functions.php файл дээр snippet-ийг хэрхэн нэмэх вэ.

  1. WordPress Network admin dashboard руу логин хийгээд Themes > Theme Editor рүү орно (доорх скриншотыг үзнэ үү).

  2. "Edit Themes" хуудсан дээр, таны идэвхтэй theme-ийг зүүн дээд буланд байгаа dropdown (dropdown) хэсэгт сонгосныг шалгана (#3-р скриншот дээр).

  3. "Theme Files" хэсгийн доор functions.php файлыг дарж файл ачаална. Доо руу урагшираад GitHub репозиторийг авсан Ultimate Multisite snippet-ийг хуулж оруулаарай.

<!-- Скриншот харагдахгүй: WordPress Theme Editor дээр functions.php файлыг засварлах -->

# Must-Use Plugins (mu-plugins)-ыг хэрхэн үүсгэх вэ

WordPress-д "Must-Use Plugins" эсвэл ху축чилсан нэрээр "mu-plugins" гэж нэрлэсэн, өөрийн тохируулгын функцүүдийг ачаалах боломжтой онцлог байна.

Эдгээр тусгай mu-plugins нь бусад бүх ердийн плагинуудаас өмнө ачаалдаг бөгөөд хаах боломжгүй байдаг. Multisite network дээр, эдгээр mu-plugins-ийн код таны бүх сайт дээр ачаалагдана.

1\. FTP эсвэл SSH ашиглан WordPress-ийн файлын систем рүү нэвтрээрэй.

2. WordPress-ийн `wp-content` директорийн дотор шинэ директорийг үүсгээрэй, нэр нь: `mu-plugins`.

<!-- Скриншот байхгүй: Файл менежерээс wp-content директори болон mu-plugins фолдеры харагдаж байна -->

3. Компьютерийн талбайд Notepad эсвэл ямар нэгэн код редактор ашиглан `wu-snippet.php` гэсэн шинэ PHP файл үүсгээрэй.

4. Та GitHub репозиториос авсан Ultimate Multisite кодын жишээг энэ файлд оруулаад хадгална уу. Энэ кодыг таны mu plugin-ийг тэмдэглэх зорилгоор кодны дээд хэсэгт нэмж болно.
