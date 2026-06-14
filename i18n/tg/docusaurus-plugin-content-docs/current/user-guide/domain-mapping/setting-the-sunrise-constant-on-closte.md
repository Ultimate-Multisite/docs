---
title: Муайян кардани константа Sunrise дар Closte
sidebar_position: 16
_i18n_hash: ce55527b126282d167eec4e3a8f824ea
---
# Муартиб кардани константа Sunrise ба true дар Closte

Баъзе хостҳо барои омилҳои аманӣ файл `wp-config.php` -ро қатъ мекунанд. Ин маънои онро дорад, ки Ultimate Multisite наметавонад мустақилона файлро тағир диҳад ва константаҳои зарурӣ барои кор кардани маппинг домен ва дигар хусусиятҳо ба вуҷуд оварда шаванд. Closte яке аз чунин хостҳо аст.

Аммо, Closte роҳи додани константаҳо ба `wp-config.php` бо тарзи аман муайян мекунад. Шумо танҳо қадамҳои зеринро иҷро кардан лозим аст:

## Дар дашборди Closte

Дар аввал, [ба ҳисоби Closte ворид шавед](https://app.closte.com/), ба менюи Sites клик кунед ва пас дар саҳифаи сайтее, ки дар он кор мекунед, ба лоиҳаи Dashboard клик кунед:

<!-- Screenshot unavailable: Closte dashboard showing Sites menu and Dashboard link -->

Шумо рӯй дода мешавад аз як қатор маҷмӯаи меню нави. Бо истифода аз ин меню ба саҳифаи **Settings** равед:

<!-- Screenshot unavailable: Closte left sidebar menu showing Settings option -->

Пас дар **Settings**, таб-и WP-Config -ро пайдо кунед ва пас дар он, майдони "Additional wp-config.php content" (Мундариҷаи иловагии wp-config.php) -ро дар ин таб пайдо кунед:

<!-- Screenshot unavailable: Closte Settings page with WP-Config tab showing Additional wp-config.php content field -->

Дар контексти интиқол додани Ultimate Multisite, шумо бояд константа Sunrise-ро ба ин майдон илова намоед. Ин аст, ки шумо як қатор нав мегзоред ва қадами зеринро паст мекунед:

define('SUNRISE', true);

Ин ҳама аст. Ба болои ройалдори интиқол додани Ultimate Multisite баргардонед ва саҳифаро таҷдид кунед, то равандро идома намонед.
