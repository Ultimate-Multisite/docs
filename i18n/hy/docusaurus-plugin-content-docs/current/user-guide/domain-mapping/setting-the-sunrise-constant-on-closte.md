---
title: Sunrise-ի հաստատուն արժեքը Closte-ում սահմանել
sidebar_position: 16
_i18n_hash: ce55527b126282d167eec4e3a8f824ea
---
# Closte-ում Sunrise constant-ը true անելու համար

일부 хост провайдерներ аюулалт (security) шалтгаалах wp-config.php файлыг хамгаалдаг. Энэ нь Ultimate Multisite-а домен маппинг болон бусад функцууд ажиллахын тулд шаардлагатай constant-уды оруулах шаардлагатай файлы өөрчлөхөө автоматаар хийж чадахгүй гэсэн үг. Closte нь ийм хост юм.

Гэсэн хэдий ч, Closte wp-config.php дотор constant-уды нэмэх аюулгүй арга олгодог. Та зөвхөн доорх алхмуудыг дагах хэрэгтэй:

## Closte dashboard дээр

Эхлээд [Closte аккаунтод нэвтэрнэ](https://app.closte.com/), Sites (Сайт) меню руу дарна, дараа нь одоо ажиллаж буй сайт дээрх Dashboard (Үндсэн харалт)-ийн холбоос дээр дарна:

<!-- Screenshot unavailable: Closte dashboard showing Sites menu and Dashboard link -->

Та дэлгэцийн зүүн талд шинэ менюгийн хэд хэдэн элементийг харж өгнө. Тэр менюг ашиглан **Settings** (Тохиргоо)-ийн хуудас руу орно:

<!-- Screenshot unavailable: Closte left sidebar menu showing Settings option -->

Дараа нь, **Settings**-д байгаа WP-Config таб руу очиж, түүний дахь "Additional wp-config.php content" (Нэмэлт wp-config.php агуулга)-ийн талбарыг олно:

<!-- Screenshot unavailable: Closte Settings page with WP-Config tab showing Additional wp-config.php content field -->

Ultimate Multisite суулгах үед, та тухайн талбарт sunrise constant-ыг нэмэх шаардлагатай болно. Зүгээр л шинэ мөр нэмээд доорх мөрийг хуулна уу. Дараа нь **Save All** (Бүгдийг хадгалах)-ийн товчийг дарна.

define('SUNRISE', true);

Энэ бол бүх зүйл дууссан. Ultimate Multisite суулгах wizard руу буцаж очиж, процессыг үргэлжлүүлэхийн тулд хуудсыг шинэчилнэ үү.
