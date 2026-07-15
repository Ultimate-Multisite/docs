---
title: Kutanga Kufamba Kwemafayere
sidebar_position: 12
_i18n_hash: 53d988d644c244d20f04444350bd5d3c
---
# Kufungurukutsa File ya Sunrise

File ya `sunrise.php` ndiyo file yakakosha kuitika neWordPress inoziva kuti iye ine. Kuti WordPress inezive file ya `sunrise.php`, inofanira kuwanzika mune **wp-content folder**.

Nekuti unachivisa Ultimate Multisite uye uchitenda setup wizard seunogona kuona munzvimbo wenzvimbo, Ultimate Multisite inoda kuitika file yedu ya `sunrise.php` kuwanzika mune wp-content folder.

<!-- Screenshot isina: Setup wizard page inochotsa step yeSunrise copy -->

Kuti zvakawanda, tinogona kutanga kuitika file uye zvinhu zviri kuenda zvakanaka. Asi, kana pane chinhu chiri kuita zvakanaka (kufanana nepermissions dzemafunhu, dzinokwanisa), unogona kuona nzvimbo inoziva kuti Ultimate Multisite haizvazvitsva kuitika file.

Kana uri kuona meseji ya error Ultimo inozivisa, uona kuti iye ndiyo yakanaka yakangozvitsva hapa: **Sunrise copy failed**.

<!-- Screenshot isina: Meseji ya error inochotsa Sunrise copy failed -->

Kuti ungarure, unogona kuitika file ya `sunrise.php` mune folder ya plugin ya wp-ultimo uye kuita paste mune wp-content folder yako. Apana uri kuita iye, reloaded wizard page uye checks dzinofanira kuenda zvakanaka.

<!-- Screenshot isina: File manager inochotsa sunrise.php mune folder ya wp-ultimo plugin --> Kuti kunyangwe, izvi zvinogona kuitika kuti uone nzira yese yepermissions dzemafunhu yako kuti usave neproblemu hanguhukama (saka haunozvitsva Ultimate Multisite chete asi neplugins uye themes dzinogona).

**Health Check tool** inosanganiswe mune WordPress (unogona kuita iye kuburikidza ne **admin panel > Tools > Health Check** yako main site) inogona kukutendera kuti unoziva kana uine permissions dzemafunhu dzinogona kuitika zvinhu nemapurovedzi ya WordPress.

<!-- Serefu se wara: Zvinorewo ye WordPress Health Check tool inoshona dzinoita zvinorewa dzirevo -->
