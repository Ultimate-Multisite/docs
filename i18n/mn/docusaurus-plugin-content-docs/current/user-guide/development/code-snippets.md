---
title: Код хэсгүүд
sidebar_position: 1
_i18n_hash: 2284b14474d86f665fa7c84cc305553e
---
# v2-ийн код жишээнүүд

Үндсэндээ **WordPress**-ийн код жишээнүүдийг ямар нэгэн тодорхой үйлдлүүдийг хийхэд ашигладаг бөгөөд эдгээр үйлдлүүдийг тусгай бага плагин шаардахгүй байж болно. Эдгээр код жишээнүүдийг WordPress-ийн үндсэн файлуудын (ихэвчлэн таны темы-ийн functions.php файл) аль нэгэнд байрлуулдаг эсвэл MU плагин болгон ашиглаж болно.

Энэ нийтлэлд бид **Ultimate Multisite v2**-тэй хамт ашиглах боломжтой гурван код жишээг харуулах болно:

  * [**Account меню зургийг өөрчлөх](#changing-the-position-of-the-account-menu-item)](#changing-the-position-of-the-account-menu-item)

  * [**Хэрэв хэрэглэгч тодорхой төлөвт байна эсвэл идэвхтэй худалдан авалттай эсэхийг шалгах](#how-to-check-if-the-user-is-under-a-given-plan-andor-has-an-active-subscription)](#how-to-check-if-the-user-is-under-a-given-plan-andor-has-an-active-subscription)

  * [**Mapped domains дээр Font-Icons-той CORS асуудлыг засах](#fixing-cors-issues-with-font-icons-in-mapped-domains)](#fixing-cors-issues-with-font-icons-in-mapped-domains)

## Account меню зургийг өөрчлөх {#changing-the-position-of-the-account-menu-item}

Таны үйлчлүүлэгчийн Dashboard дээрх Account меню зургийн байрлалыг өөрчлөхөд, та зүгээр л дараах код жишээг таны үндсэн сайтын идэвхтэй темы-ийн functions.php файл руу нэмнэ. Та мөн энэ жишээг аль нэг MU плагин эсвэл өөрийн бүтээсэн плагинд байрлуулах боломжтой.

add_filter('wu_my_account_menu_position', function() { return 10; // Менюг хүссэн байрлалд байрлуулахын тулд энэ утгыг тохируулна уу.)

Тавтай морил! Та бүхэн хувьд Ultimate Multisite-ийн WordPress-ийн документацийн орчуулга байна.

Хэрэв бүртгэл (subscription) идэвхтэй эсэхийг шалгахыг хүсвэл дараах функцийг ашиглаж болно:

`wu_is_active_subscriber($user_id)`

Доор жишээ код байна. Энэ нь одоогийн хэрэглэгч тодорхой төлөвлөгөөний (Plan ID 50) дотор байгаа эсэхийг, мөн тухайн хэрэглэгчийн бүртгэл идэвхтэй эсэхийг шалгадаг.

```php
$user_id = get_current_user_id();
$plan_id = 50;
if (wu_has_plan($user_id, $plan_id) && wu_is_active_subscriber($user_id)) { // Хэрэглэгч төлөвлөгөөний гишүүн бөгөөд бүртгэл идэвхтэй бол үүнийг хий

Apache

Таны .htaccess файл дотор дараах кодыг нэмнэ үү:

<FilesMatch “.(ttf|ttc|otf|eot|woff|font.css|css)$”> Header set Access-Control-Allow-Origin “*”

### NGINX

Таны сервер конфиг файлд (серверээс сервер рүү байрлал өөр байдаг) дараахыг нэмнэ үү:

location ~ .(ttf|ttc|otf|eot|woff|font.css|css)$ { add_header Access-Control-Allow-Origin “*”;}
