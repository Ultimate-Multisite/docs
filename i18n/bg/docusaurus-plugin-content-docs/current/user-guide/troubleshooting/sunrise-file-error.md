---
title: Грешка в файла Sunrise
sidebar_position: 12
_i18n_hash: 53d988d644c244d20f04444350bd5d3c
---
# Грешка при инсталиране на файла Sunrise {#error-installing-the-sunrise-file}

Файлът `sunrise.php` е специален файл, който WordPress търси, докато извършва процеса на стартиране (bootstraps). За да може WordPress да открие файла `sunrise.php`, той трябва да бъде разположен в **wp-content** папката.

Когато активирате Ultimate Multisite и преминете през помощния задаващ (setup wizard), подобен на този, който имате на скрийншота, Ultimate Multisite се опитва да копира нашия файл `sunrise.php` в папката `wp-content`.

<!-- Screenshot unavailable: Setup wizard page showing sunrise.php installation step -->

Повечето пъти успяваме успешно да копираме файла и всичко работи. Въпреки това, ако нещо не е настроено правилно (например правата на папките), може да се сблъскате със сценарий, при който Ultimate Multisite не може да копира файла.

Ако прочетете съобщението за грешка, което ви дава Ultimo, ще видите, че точно това се е случило тук: **Sunrise copy failed**.

<!-- Screenshot unavailable: Error message showing Sunrise copy failed -->

За да отстраните това, просто копирайте файла `sunrise.php` от па папката на плагина wp-ultimo и го поставете в папката `wp-content`. След като направите това, презаредете страницата на помощния задаващ и проверките трябва да преминат успешно.

<!-- Screenshot unavailable: File manager showing sunrise.php inside wp-ultimo plugin folder --> Всякакви случаи, това може да наложи обща проверка на правата на папките, за да избегнете проблеми в бъдеще (не само с Ultimate Multisite, но и с други плагини и теми).

**Health Check tool**, който е част от WordPress (до който можете да стигнете от основната **admin panel** на сайта си > Tools > Health Check), ви позволява да разберете дали имате зададени права на папките, които могат да причинят проблеми с WordPress.

<!-- Screenshot unavailable: WordPress Health Check tool showing folder permissions status -->
