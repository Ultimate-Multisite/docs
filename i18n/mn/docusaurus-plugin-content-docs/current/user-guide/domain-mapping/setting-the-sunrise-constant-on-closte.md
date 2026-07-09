---
title: Closte-д Нарны тогтмол утгыг тохируулах
sidebar_position: 16
_i18n_hash: ce55527b126282d167eec4e3a8f824ea
---
# Closte-д Sunrise константыг үнэн болгох {#setting-the-sunrise-constant-to-true-on-closte}

Зарим хост компаниуд аюулгүй байдлын шалтгаанаар wp-config.php файлыг хаадаг. Энэ нь Ultimate Multisite-ийн домен тохиргоо болон бусад функцуудыг ажиллахын тулд шаардлагатай константуудыг автоматаар засварлах боломжгүй гэсэн үг юм. Closte нь ийм хост нэг юм.

Гэсэн хэдий ч, Closte нь wp-config.php дотор константуудыг аюулгүй аргаар нэмэх замыг санал болгодог. Та зөвхөн доорх алхмуудыг дагах хэрэгтэй:

## Closte-ийн dashboard дээр {#on-the-closte-dashboard}

Эхлээд, [Closte аккаунтанд нэвтэрээрэй](https://app.closte.com/), Sites (Сайт) меню руу дарна, дараа нь та ажиллаж буй сайт дээрх Dashboard (Үндсэн харагдах хэсэг)-ийн холбоос дээр дарна:

<!-- Screenshot unavailable: Closte dashboard showing Sites menu and Dashboard link -->

Та дэлгэцийн зүүн талд олон шинэ меню элементүүдийг харж өгнө. Тэр меню ашиглан **Settings** (Тохиргоо)-ийн хуудас руу орно:

<!-- Screenshot unavailable: Closte left sidebar menu showing Settings option -->

Дараа нь, **Settings**-д орсон байхад WP-Config таб руу очоод, тэр таб дээрх "Additional wp-config.php content" (Нэмэлт wp-config.php агуулга)-ийн талбарыг ол:

<!-- Screenshot unavailable: Closte Settings page with WP-Config tab showing Additional wp-config.php content field -->

Ultimate Multisite-ийг суулгах үед, та тухайн талбарт sunrise константыг нэмэх хэрэгтэй. Зөвхөн шинэ мөр нэмээд доорх мөрийг хуулж оруулаарай. Дараа нь **Save All** (Бүгдийг хадгалах)-ийн товчийг дарна.

define('SUNRISE', true);

Энэ бол бүх зүйл дууссан. Ultimate Multisite суулгах үйл явцад дахин эхлэлийн wizards руу буцаж, хуудсыг шинэчилж үргэлжлүүлээрэй.
