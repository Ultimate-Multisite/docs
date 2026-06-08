---
title: Установіць канстанту "Sunrise" на Closte
sidebar_position: 16
_i18n_hash: ce55527b126282d167eec4e3a8f824ea
---
# Установіць канстанту Sunrise на Closte

Некаторыя хосты-провайдыры блокуюць файл wp-config.php з бяспечнасных па},{"security reasons"}. Гэта азначае, што Ultimate Multisite не можа аўтаматычна рэдагаваць гэты файл, каб уключыць неабходныя канстанты для праựngвання доменаў і працу яшчэ аднымі функцыяналагімі. Closte — адзін з такіх хостаў.

Аднак Closte прапануе спосаб дадання канстантаў у wp-config.php ў бяспечнай форме. Вам проста трэба выканаць крокі, пералічаныя ніжэй:

## На дашбордзе Closte

Перш за ўсё, [увайдзіце ў свой кант па Closte](https://app.closte.com/), націсніце на меню Sites, а потым на спасылку Dashboard на сайце, над якім вы зараз працуеце:

<!-- Screenshot unavailable: Closte dashboard showing Sites menu and Dashboard link -->

Вам будзе прадастаўлена шэрага новых пунктаў меню ўліва на экране. Знайдзіце спасылку **Settings** праз гэтае меню:

<!-- Screenshot unavailable: Closte left sidebar menu showing Settings option -->

Пасля гэтага, на **Settings**, знайдзіце тэчку WP-Config, а пасля ней — поле "Additional wp-config.php content" на гэтай тэчцы:

<!-- Screenshot unavailable: Closte Settings page with WP-Config tab showing Additional wp-config.php content field -->

У кантэксце ўстаноўкі Ultimate Multisite вам трэба будзе дадаць канстанту sunrise ў гэтае поле. Проста дадайце новы ryad і ўстаўце наступны код. Пасля гэтага націсніце кнопку **Save All**.

define('SUNRISE', true);

І ўсё, вы ўсё гатовыя. Вярніцеся да візарда ўстаноўкі Ultimate Multisite і абнавіце старонку, каб працягнуць працэс.
