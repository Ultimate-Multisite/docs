---
title: Често задавани въпроси
sidebar_position: 18
_i18n_hash: 2aae003605ca306aebc782d92f605d7c
---
# Често задавани въпроси {#frequently-asked-questions}

Ето някои **Често задавани въпроси**, които често се появяват по време на заявки за поддръжка.

  * **Какво е Ultimate Multisite?**

Ultimate Multisite е plugin за WordPress, създаден за WordPress Multisite инсталации, който превръща инсталацията ви на WordPress в премиум мрежа от сайтове – подобно на [WordPress.com](https://WordPress.com) – позволявайки на клиентите да създават сайтове срещу месечни, тримесечни или годишни такси (можете да създавате и безплатни планове).

  * **Работи ли Ultimate Multisite без Multisite?**

Не. Ultimate Multisite изисква WordPress Multisite, subdirectory или subdomain.

  * **Какви са изискванията за Ultimate Multisite?**

Ultimate Multisite изисква:

**WordPress Version** : v5.3+ (Препоръчително: Последна стабилна версия)
**PHP Version** : 7.4.x (Поддръжка за > 8.0 скоро)
**MySQL Version** : v5+ (Препоръчително: Версия 5.6, ако не разполагате с 8.0 при вашия хостинг доставчик)

_Multisite (subdomain или subdirectory) също трябва да е активиран._ [Как да инсталирате WordPress Multisite](/user-guide/getting-started/how-to-install-wordpress-multisite).

  * **Работи ли Ultimate Multisite с Multisite с Subdirectories?**

Да. Ultimate Multisite поддържа както subdirectory инсталации, така и subdirectory инсталации.

  * **Работи ли Ultimate Multisite с Multisite с Subdomains?**

Да. Ultimate Multisite поддържа както subdirectory инсталации, така и subdomain инсталации.

  * **Мога ли да използвам Ultimate Multisite, за да огранича кои Plugins и Themes могат да използват потребителите?**

Да. С Ultimate Multisite можете да изберете кои plugins и themes са налични за всеки план в вашата мрежа.

  * **Мога ли да използвам Ultimate Multisite, за да огранича броя на публикациите, които потребител може да създаде на своя сайт?**

Да. С Ultimate Multisite можете да зададете квоти за публикации за **всеки наличен тип публикации** в вашата мрежа. Освен това можете да ограничите броя на потребителите, които администраторът може да покани, **количеството дисково пространство** и много други неща.

  * **Поддържа ли Ultimate Multisite Site Templates?**

Да. С Ultimate Multisite можете да създадете колкото и желаете Site Templates. Site Templates не са themes, те са нормални сайтове в вашата мрежа. Можете да активирате plugins, themes и да персонализирате този Site Template по вашия начин. Ако потребител избере този шаблон, неговият сайт ще бъде създаден като копия на този шаблон, с всички персонализации на място.

Можете също така да зададете конкретен шаблон за един план. Чрез това всеки потребител, който се регистрира с този план, ще има своя сайт създаден като дубликат на този Site Template.

  * **Интегрира ли Ultimate Multisite с WooCommerce?**

Да!

Ако искате потребителите в вашата мрежа да имат достъп до WooCommerce, което им позволява да създават магазини, това е възможно с Ultimate Multisite. Дори можете да ограничите броя на продуктите, които вашите клиенти могат да създадат за всеки план.

По отношение на абонаментните плащания за Ultimate Multisite, можете да използвате [Ultimate Multisite: WooCommerce Integration Add-on](https://ultimatemultisite.com/addons/wp-ultimo-woocommerce/) , за да позволите на вашите клиенти на Ultimate Multisite да плащат с WooCommerce gateways на вашия основен сайт. По този начин можете да използвате огромната библиотека от платежни gateways, разработени за WooCommerce, за начисляване на вашите клиенти на Ultimate Multisite.

  * **Има ли начин да мигрирам абонаментни данни от WPMUDEV Pro Sites?**

Да, Ultimate Multisite вече предлага [полезен инструмент за миграция](https://ultimatemultisite.com/addons/wp-ultimo-pro-sites-migrator/) на вашата мрежа Pro Sites.

  * **Защо табът „Allowed Plugins“ е празен на страницата за редактиране на плана ми?**

Ultimate Multisite ви позволява да разрешавате или отказвате достъп само до plugins, които не са активирани на ниво мрежа в вашата мрежа. Когато един plugin е активиран на ниво мрежа, по своята същност, той ще бъде зареден по подразбиране във всеки сайт на вашата мрежа.

Ако не виждате никакви plugins в таба „Allowed Plugins“, проверете дали желания plugin е активен на ниво мрежа или не.

  * **Мога ли да използвам собствен дизайн на таблица с цени?**

Да. От версия 1.4.0, Ultimate Multisite поддържа template overrides.

  * **Работи ли Ultimate Multisite с WP Engine?**

Да. Ultimate Multisite винаги е бил поддържан от WP Engine, но за работа на мапирането на домейни беше необходими ръчни допълнителни стъпки от администратора (добавяне на домейна в панела на WP Engine). **Това вече не е така от версия 1.6.0.** Ultimate Multisite интегрира директно с WP Engine API и домейните се добавят в панела автоматично след мапиране.

  * **Кой хостинг доставчик препоръчвате?**

Ultimate Multisite трябва да работи с всеки хостинг доставчик. Единствената разлика е, че някои хостинг компании като Closte, Serverpilot, WPMUDEV, WP Engine, Cloudways, Gridpane и [Runcloud.io](http://Runcloud.io) имат по-силно интегриране за възможности за мапиране на домейни, така че работят "от кутията". За други хостинги може да се наложи ръчно задаване на мапирането на домейни.
