---
title: Фрагменты кода
sidebar_position: 1
_i18n_hash: 2284b14474d86f665fa7c84cc305553e
---
# Аргументы кода для v2

Аргументы кода для **WordPress** выкарыстоўваюцца для выканання певных дзеянняў, якія інакш вымагалі б выкарыстання выкліканага, меншага **plugin**. Такія аргументы кода можна размесціць у адным з асноўных файлаў WordPress або тэмы (заартэчна ў файле `functions.php` вашай тэмы) або іх можна выкарыстоўваць як MU plugin.

У гэтай артыкуле мы пакажам вам тры аргументы кода, якія можна выкарыстоўваць з **Ultimate Multisite v2**:

  * [**Змяненне пасылку меню "Account"**](#changing-the-position-of-the-account-menu-item)

  * [**Як праверыць, ці карыстальнік пад дадзеным планам і/або мае актыўную падпіску**](#how-to-check-if-the-user-is-under-a-given-plan-andor-has-an-active-subscription)

  * [**Выпраўленне праблем CORS з Font-Icons у мапіраваных домен значэннях**](#fixing-cors-issues-with-font-icons-in-mapped-domains)

## Змяненне пасылку меню "Account" {#changing-the-position-of-the-account-menu-item}

Каб змяніць пасылку меню "Account" на Dashboard вашага кліента, проста дадайце наступны аргумент кода у `functions.php` актыўнай тэмы вашага галоўнага сайта. Вы таксама можаце памісціць гэты аргумент у адзін з вашых mu-plugins або карыстаніцкіх plugins.

add_filter('wu_my_account_menu_position', function() { return 10; // Tweak this value to place the menu in the desired position.

## Як праверыць, ці карыстальнік пад дадзеным планам і/або мае актыўную падпіску {#how-to-check-if-the-user-is-under-a-given-plan-andor-has-an-active-subscription}

Як адміністратар сеткі, вам можа знаك咁 патрабавацца стварыць карыстаніцкія функцыі, якія выконваюць асноўныя дзеянні або робяць паслугу/функцыю даступнай для выбранага гуртоўка або канчатковага карыстальніка, на аснове статусу яго падпіскі і плана, пад якім ён падпісаны.

Гэтыя ўбудаваныя функцыі Ultimate Multisite дапамогуць вам з гэтым.

Каб праверыць, ці карыстальнік з'яўляецца членам дадзенага плана, вы можаце выкарыстоўваць функцыю:

wu_has_plan($user_id, $plan_id)

Каб праверыць, ці актыўная падпіска, вы можаце выкарыстоўваць функцыю:

wu_is_active_subscriber($user_id)

Падاني арыгінальны аргумент кода, які праверяе, ці карыстальнік з'яўляецца пад канкрэтным планам (_Plan ID 50_) і ці актыўная падпіска карыстальніка.

$user_id = get_current_user_id();$plan_id = 50;if (wu_has_plan($user_id, $plan_id) && wu_is_active_subscriber($user_id)) { // USER IS MEMBER OF PLAN AND HIS SUBSCRIPTION IS ACTIVE, DO STUFF} else { // USER IS NOT A MEMBER OF PLAN -- OR -- HIS SUBSCRIPTION IS NOT ACTIVE, DO OTHER STUFF} // end if;

Важна адзначыць, што **wu_has_plan** патрабуе "Plan ID", каб працаваць.

Каб атрымаць ID плана, вы можаце зайсці ў **Ultimate Multisite > Products**. ID кожнага прадукту будзе адказаны ў правым кутцы табліцы.

Важна адзначыць, што карыстальнікаў можна падпісаваць толькі на **Plan**, а не на Package ці Service, бо яны з'яўляюцца толькі дадаткамі да **Plan**.

![Products list showing plan IDs](/img/admin/products-list.png)

## Выпраўленне праблем CORS з Font-Icons у мапіраваных домен значэннях {#fixing-cors-issues-with-font-icons-in-mapped-domains}
## Выпраўленне праблем CORS з Font-Icons у мапіраваных домен значэннях {#fixing-cors-issues-with-font-icons-in-mapped-domains-1}

Пасля мапіравання домена ў пад-сайт вы можаце выявіць, што сайт мае цяжкасці з загрузкай карыстаніцкіх шрыфтаў. Гэта выклікаецца блокам крос-арыгінацыі ў настройках вашага сервера.

Каб гэта выправіць, вам трэба адрэдагаваць файлы канфігурацыі вашага сервера.

Падاني аргументы кода для выпраўлення гэтай праблемы для Apache і NGINX. Гэтыя змены патрабуюць пашыраных ведаў пра файлы канфігурацыі сервера (файлы .htaccess і файлы канфігурацыі NGINX). Калі вы не ўпэўнены ў сабе, што зможаце змяніць гэтыя змены, адпраўце гэтую старонку сваім агентам падтрымкі хосцінгу, калі вам патрабуецца памощь.

### Apache {#apache}

У ваш файл .htaccess дадайце:

<FilesMatch “.(ttf|ttc|otf|eot|woff|font.css|css)$”> Header set Access-Control-Allow-Origin “*”

### NGINX {#nginx}

У ваш файл канфігурацыі сервера (местшасць адрозніваецца ад сервера да сервера) дадайце:

location ~ .(ttf|ttc|otf|eot|woff|font.css|css)$ { add_header Access-Control-Allow-Origin “*”;}
