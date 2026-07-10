---
title: Код фрагменти
sidebar_position: 1
_i18n_hash: 2284b14474d86f665fa7c84cc305553e
---
# Код фрагменти за v2 {#code-snippets-for-v2}

Всъщност, код фрагментите за **WordPress** се използват за извършване на определени действия, които иначе може да изискват отделен, по-малък plugin. Такъв код фрагмент се поставя в един от файловете на ядрото на WordPress или на темата (обикновено в файла functions.php на вашата тема) или може да се използва като MU plugin.

В тази статия ще ви покажем три код фрагмента, които можете да използвате с **Ultimate Multisite v2**:

  * [**Промяна на позицията на елемента в менюто "Account"**](#changing-the-position-of-the-account-menu-item)

  * [**Как да проверите дали потребителят е под определен план и/или има активна абонаментна подписка**](#how-to-check-if-the-user-is-under-a-given-plan-andor-has-an-active-subscription)

  * [**Отстраняване на CORS проблеми с Font-Icons в мапирани домейни**](#fixing-cors-issues-with-font-icons-in-mapped-domains)

## Промяна на позицията на елемента в менюто "Account" {#changing-the-position-of-the-account-menu-item}

За да промените позицията на елемента в менюто "Account" в Dashboard на клиента си, просто добавете следния код фрагмент в functions.php на активната тема на основния си сайт. Можете също така да поставите фрагмента в един от вашите mu-plugins или custom plugins.

add_filter('wu_my_account_menu_position', function() { return 10; // Tweak this value to place the menu in the desired position.

## Как да проверите дали потребителят е под определен план и/или има активна абонаментна подписка {#how-to-check-if-the-user-is-under-a-given-plan-andor-has-an-active-subscription}

Като network admin, може да се наложи да създадете персонализирани функции, които да извършват основни действия или да предоставят услуга/функция на избрана група абонати или крайни потребители, в зависимост от статуса на тяхната подписка и плана, към който са абонирани.

Тези нативни функции на Ultimate Multisite ще ви помогнат с това.

За да проверите дали потребителят е член на определен план, можете да използвате функцията:

wu_has_plan($user_id, $plan_id)

За да проверите дали абонаментът е активен, можете да използвате функцията:

wu_is_active_subscriber($user_id)

По-долу е примерен код фрагмент, който проверява дали текущият потребител е под определен план (_Plan ID 50_) и дали абонаментът на потребителя е активен.

$user_id = get_current_user_id();$plan_id = 50;if (wu_has_plan($user_id, $plan_id) && wu_is_active_subscriber($user_id)) { // USER IS MEMBER OF PLAN AND HIS SUBSCRIPTION IS ACTIVE, DO STUFF} else { // USER IS NOT A MEMBER OF PLAN -- OR -- HIS SUBSCRIPTION IS NOT ACTIVE, DO OTHER STUFF} // end if;

Забележка: _**wu_has_plan**_ изисква "Plan ID", за да работи.

За да получите ID на плана, можете да отидете на **Ultimate Multisite > Products**. ID на всеки продукт ще бъде показан отдясно в таблицата.

Забележка: Потребителите могат да бъдат абонирани само към **Plan**, а не към Package или Service, тъй като те са само допълнения към **Plan**.

![Products list showing plan IDs](/img/admin/products-list.png)

## Отстраняване на CORS проблеми с Font-Icons в мапирани домейни {#fixing-cors-issues-with-font-icons-in-mapped-domains}
## Отстраняване на CORS проблеми с Font-Icons в мапирани домейни {#fixing-cors-issues-with-font-icons-in-mapped-domains-1}

След като мапирате домейн към подсайт, може да откриете, че сайтът има проблеми с зареждането на персонализирани шрифтове. Това се дължи на блок за крос-домейн (cross-origin) в настройките на вашия сървър.

Тъй като файловете на шрифтовете почти винаги се зареждат директно от CSS, нашият plugin за мапиране на домейни не може да пренапише URL адресите, за да използва мапирания домейн вместо оригиналния, така че за отстраняване на проблема ще трябва да редактирате файловете за конфигурация на сървъра си.

По-долу са код фрагменти за отстраняване на проблема за Apache и NGINX. Тези промени изискват напреднали познания по файлове за конфигурация на сървъра (.htaccess файлове и NGINX config файлове). Ако не се чувствате уверени да направите тези промени сами, изпратете тази страница на агентите за поддръжка на вашия hosting доставчик, когато се нуждаете от помощ.

### Apache {#apache}

В .htaccess файла си, добавете:

<FilesMatch “.(ttf|ttc|otf|eot|woff|font.css|css)$”> Header set Access-Control-Allow-Origin “*”

### NGINX {#nginx}

В файла за конфигурация на сървъра си (местоположението варира от сървър към сървър), добавете:

location ~ .(ttf|ttc|otf|eot|woff|font.css|css)$ { add_header Access-Control-Allow-Origin “*”;}
