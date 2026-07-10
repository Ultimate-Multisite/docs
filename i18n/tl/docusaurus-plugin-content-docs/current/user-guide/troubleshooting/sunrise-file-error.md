---
title: Error sa Sunrise File
sidebar_position: 12
_i18n_hash: 53d988d644c244d20f04444350bd5d3c
---
# Error sa Pag-install ng Sunrise File {#error-installing-the-sunrise-file}

Ang file na `sunrise.php` ay isang espesyal na file na hinahanap ng WordPress habang nag-boot up ito. Para matukoy ng WordPress ang `sunrise.php` file, kailangan itong nasa loob ng **wp-content folder**.

Kapag nag-activate ka ng Ultimate Multisite at dumaan sa setup wizard tulad ng nakikita mo sa screenshot, sinusubukan ng Ultimate Multisite na kopyahin ang ating `sunrise.php` file papunta sa wp-content folder.

<!-- Screenshot unavailable: Setup wizard page showing sunrise.php installation step -->

Karamihan sa mga pagkakataon, matagumpay nating nakokopya ang file at gumagana ang lahat. Gayunpaman, kung may hindi tama ang setup (halimbawa, permission ng folder), maaari kang makarating sa sitwasyon na hindi kayang kopyahin ng Ultimate Multisite ang file.

Kung babasahin mo ang error message na ibinibigay ng Ultimo sa iyo, makikita mo na iyan mismo ang nangyari rito: **Sunrise copy failed**.

<!-- Screenshot unavailable: Error message showing Sunrise copy failed -->

Para maayos iyan, maaari mong kopyahin ang `sunrise.php` file sa loob ng wp-ultimo plugin folder at i-paste ito sa iyong wp-content folder. Pagkatapos mong gawin iyon, i-reload mo ulit ang wizard page at dapat pumasa ang mga checks.

<!-- Screenshot unavailable: File manager showing sunrise.php inside wp-ultimo plugin folder --> Sa anumang kaso, maaaring kailangan mo ng pangkalahatang pagtingin sa iyong folder permissions para maiwasan ang problema sa hinaharap (hindi lang sa Ultimate Multisite kundi pati na rin sa ibang plugins at themes).

Ang **Health Check tool** na bahagi ng WordPress (maaari mo itong ma-access sa iyong pangunahing site **admin panel > Tools > Health Check**) ay kayang sabihin sa iyo kung ang folder permissions mo ba ay naka-set sa mga halaga na maaaring magdulot ng problema sa WordPress.

<!-- Walang screenshot: WordPress Health Check tool na nagpapakita ng status ng permission ng folder -->
