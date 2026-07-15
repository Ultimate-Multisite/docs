---
title: Error sa Sunrise File
sidebar_position: 12
_i18n_hash: 53d988d644c244d20f04444350bd5d3c
---
# Error sa Pag-install ng Sunrise File

Ang sunrise.php file ay isang espesyal na file na hinahanap ng WordPress habang naglo-load ito. Para madetect ng WordPress ang sunrise.php file, kailangan itong nasa loob ng **wp-content folder**.

Kapag ina-activate mo ang Ultimate Multisite at dinadaan mo ang setup wizard tulad ng makikita sa screenshot, susubukan ng Ultimate Multisite na kopyahin ang aming sunrise.php file papunta sa wp-content folder.

<!-- Screenshot unavailable: Setup wizard page showing sunrise.php installation step -->

Kadalasan, matagumpay naming nakokopya ang file at gumagana ang lahat. Gayunpaman, kung may hindi maayos na setup (halimbawa, folder permissions), maaaring makaharap ka ng sitwasyon kung saan hindi makopya ng Ultimate Multisite ang file.

Kung babasahin mo ang error message na ibinibigay ng Ultimo, makikita mo na iyan mismo ang nangyari: **Sunrise copy failed**.

<!-- Screenshot unavailable: Error message showing Sunrise copy failed -->

Para ayusin ito, kopyahin mo lang ang sunrise.php file na nasa loob ng wp-ultimo plugin folder at i-paste ito sa iyong wp-content folder. Pagkatapos mo iyon, i-reload ang wizard page at dapat na pumasa ang mga checks.

<!-- Screenshot unavailable: File manager showing sunrise.php inside wp-ultimo plugin folder --> Sa anumang kaso, maaaring kailanganin mong suriin ang iyong folder permissions para maiwasan ang mga problema sa hinaharap (hindi lang sa Ultimate Multisite kundi pati na rin sa ibang plugins at themes).

Ang **Health Check tool** na bahagi ng WordPress (ma-access mo ito sa pamamagitan ng iyong main site **admin panel > Tools > Health Check**) ay kayang ipaalam sa iyo kung may folder permissions ka na nakatakda sa mga value na maaaring magdulot ng problema sa WordPress.

<!-- Screenshot unavailable: WordPress Health Check tool showing folder permissions status -->
