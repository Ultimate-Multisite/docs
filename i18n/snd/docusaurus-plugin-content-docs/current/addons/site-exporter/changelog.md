---
title: سائيٽ برآمد ڪندڙ جو تبديلي لاگ
sidebar_position: 99
_i18n_hash: 6ce7f1a3c455b0afe71a841b7b82319a
---
# سائيٽ برآمد ڪندڙ تبديلي لاگ {#site-exporter-changelog}

نسخو: 1.0.6 - 2026-05-11 تي جاري ٿيو
* نئون: سائيٽ برآمدات هاڻي هڪ پاڻ-بوٽ ٿيندڙ index.php شامل ڪن ٿيون، تنهنڪري ZIP کي الڳ plugin انسٽال ڪرڻ کان سواءِ نئين host تي انسٽال ڪري سگهجي ٿو
* نئون: نيٽ ورڪ برآمد منتظمين کي Site Export admin page تان سڀ subsites هڪ ئي archive ۾ برآمد ڪرڻ ڏئي ٿي

نسخو: 1.0.5 - 2026-05-05 تي جاري ٿيو
* درستگي: WP_CLI polyfill stub ۾ __callStatic شامل ڪيو ويو ته get_config جهڙن unmocked طريقن کي سنڀالي، test bootstrap ناڪامين کي روڪي سگهجي

نسخو: 1.0.4 - 2025-11-25 تي جاري ٿيو

* Ultimate Multisite 2.4 سان مطابقت درست ڪئي.

نسخو: 1.0.2 - 2025-09-28 تي جاري ٿيو

* اڳياڙي کي ultimate-multisite ۾ نالو مٽايو؛ text domain اپڊيٽ ڪيو؛ نسخي ۾ واڌارو.

### نسخو 1.0.1 - 2023-08-09 تي جاري ٿيو {#version-101---released-on-2023-08-09}

* بهتر ڪيو ويو: هاڻي پڪ ڪري ٿو ته importer file جو صحيح file path حاصل ٿئي.
* درست ڪيو ويو: import دوران غلطيون روڪڻ لاءِ object cache غيرفعال ڪيو ويو.
* درست ڪيو ويو: importer plugin download link ڪم نه ڪرڻ وارو مسئلو درست ڪيو ويو.

### نسخو 1.0.0 - 2022-12-23 تي جاري ٿيو {#version-100---released-on-2022-12-23}

* درست ڪيو ويو: برآمد form popup لوڊ نه ٿي رهيو هو؛
* درست ڪيو ويو: برآمد page تي Javascript files لوڊ نه ٿي رهيون هيون؛
* اندروني: نئون build process؛

### نسخو 1.0.0-beta.4 - 2022-01-13 تي جاري ٿيو {#version-100-beta4---released-on-2022-01-13}

* اندروني: hooks ۽ filters generator شامل ڪيو ويو؛
* اندروني: developer quality of life لاءِ WP Ultimo stubs شامل ڪيا ويا؛
