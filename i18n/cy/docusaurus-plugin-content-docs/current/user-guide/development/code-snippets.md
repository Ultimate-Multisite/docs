---
title: Cyfrifau cod
sidebar_position: 1
_i18n_hash: 2284b14474d86f665fa7c84cc305553e
---
# Code Snippets ar v2

Ynysby, mae code snippets ar **WordPress** yn cael eu defnyddio i wneud rhywbeth penodol sydd e potential i'rhaid iddo'rhanbarth plugin bach. Mae'r code snippets hyn wedi'i leoli mewn un o fyliau core WordPress neu thymau (yn y cyfider, fylch `functions.php` y thymau eich site). Neu gallwch hefyd ei ddefnyddio fel MU plugin.

Yn y ail article hon byddwn yn dangos tri code snippets sydd e potential i'u defnyddio gyda **Ultimate Multisite v2**:

  * [**Gwylio'r safle o'r item Menu Cyfathrebu (Account menu item)**](#changing-the-position-of-the-account-menu-item)

  * [**Sut gyflwyno i gael ymysg y bydd ybory'r benodol a/neu roedd ychwanegiad cyflwynig yn weithredol**](#how-to-check-if-the-user-is-under-a-given-plan-andor-has-an-active-subscription)

  * [**Cyfathri'r pethau CORS gyda Font-Icons mewn domenau a chyflwynig**](#fixing-cors-issues-with-font-icons-in-mapped-domains)

## Gwylio'r safle o'r item Menu Cyfathrebu (Account menu item) {#changing-the-position-of-the-account-menu-item}

I weld y safle o'r item Menu Cyfathrebu ar gyfer eich client ar ei Dashboard, rhochwch yn unig y code snippet canlynol i `functions.php` y thymau cyflwynig y site honno. Gallwch hefyd leoli'r snippet yn un o'r mu-plugins neu pluginau custom eich hun.

```php
add_filter('wu_my_account_menu_position', function() { return 10; // Tweak this value to place the menu in the desired position.
```

## Sut gyflwyno i gael ymysg y bydd ybory'r benodol a/neu roedd ychwanegiad cyflwynig yn weithredol {#how-to-check-if-the-user-is-under-a-given-plan-andor-has-an-active-subscription}

Fel admin cyd-llwybr, gallwch angen gwneud ffurfion custom sydd e potential i'u chwarae gweithgareddau sylfaenol neu ddefnyddio rhywbeth/fae yn arwain ystod y statws eu chwarae a'r bydd ybory sydd eu cyflwynig.

Bydd y ffurfion native Ultimate Multisite hyn yn helpu i chi gyda hynny.

I weld os yw'r borthwr yn aelod o'r bydd ybory sydd eu cyflwynig, gallwch ddefnyddio'r ffurf:

`wu_has_plan($user_id, $plan_id)`

Iwch i'n gweld os yw'r cyfradd yn weithredol, gallwch ddefnyddio'r ffunctionau:

`wu_is_active_subscriber($user_id)`

Os yw'r ddau yn aml yn gweld y cyfradd yn weithredol, gallwch ddefnyddio'r ffunctionau:

`wu_is_active_subscriber($user_id)`

Isod ychwanegiad ymlaen ychwanegiad ymlaen ychwanegiad ymlaen ychwanegiad ymlaen ychwanegiad ymlaen ychwanegiad ymlaen ychwanegiad ymlaen ychwanegiad ymlaen ychwanegiad ymlaen ychwanegiad ymlaen ychwanegiad ymlaen ychwanegiad ymlaen ychwanegiad ymlaen ychwanegiad ymlaen ychwanegiad ymlaen ychwanegiad ymlaen ychwanegiad ymlaen ychwanegiad ymlaen ychwanegiad ymlaen ychwanegiad ymlaen ychwanegiad ymlaen ychwanegiad ymlaen ychwanegiad ymlaen ychwanegiad ymlaen ychwanegiad ymlaen ychwanegiad ymlaen ychwanegiad ymlaen ychwanegiad ymlaen ychwanegiad ymlaen ychwanegiad ymlaen ychwanegiad ymlaen ychwanegiad ymlaen ychwanegiad ymlaen ychwanegiad ymlaen ychwanegiad ymlaen ychwanegiad ymlaen ychwanegiad ymlaen ychwanegiad ymlaen ychwanegiad ymlaen ychwanegiad ymlaen ychwanegiad ymlaen ychwanegiad ymlaen ychwanegiad ymlaen ychwanegiad ymlaen ychwanegiad ymlaen ychwanegiad ymlaen ychwanegiad ymlaen ychwanegiad ymlaen ychwanegiad ymlaen ychwanegiad ymlaen ychwanegiad ymlaen ychwanegiad ymlaen ychwanegiad ymlaen ychwanegiad ymlaen ychwanegiad ymlaen ychwanegiad ymlaen ychwanegiad ymlaen ychwanegiad ymlaen ychwanegiad ymlaen ychwanegiad ymlaen ychwanegiad ymlaen ychwanegiad ymlaen ychwanegiad ymlaen ychwanegiad ymlaen ychwanegiad ymlaen ychwanegiad ymlaen ychwanegiad ymlaen ychwanegiad ymlaen ychwanegiad ymlaen ychwanegiad ymlaen ychwanegiad ymlaen ychwanegiad ymlaen ychwanegiad ymlaen ychwanegiad ymlaen ychwanegiad ymlaen ychwanegiad ymlaen ychwanegiad ymlaen ychwanegiad ymlaen ychwanegiad ymlaen ychwanegiad ymlaen ychwanegiad ymlaen ychwanegiad ymlaen ychwanegiad ymlaen ychwanegiad ymlaen ychwanegiad ymlaen ychwanegiad ymlaen ychwanegiad ymlaen ychwanegiad ymlaen ychwanegiad ymlaen ychwanegiad ymlaen ychwanegiad ymlaen ychwanegiad ymlaen ychwanegiad ymlaen ychwanegiad ymlaen ychwanegiad ymlaen ychwanegiad ymlaen ychwanegiad ymlaen ychwanegiad ymlaen ychwanegiad ymlaen ychwanegiad ymlaen ychwanegiad ymlaen ychwanegiad ymlaen ychwanegiad ymlaen ychwanegiad ymlaen ychwanegiad ymlaen ychwanegiad ymlaen ychwanegiad ymlaen ychwanegiad ymlaen ychwanegiad ymlaen ychwanegiad ymlaen ychwanegiad ymlaen ychwanegiad ymlaen ychwanegiad ymlaen ychwanegiad ymlaen ychwanegiad ymlaen ychwanegiad ymlaen ychwanegiad ymlaen ychwanegiad ymlaen ychwanegiad ymlaen ychwanegiad ymlaen ychwanegiad ymlaen ychwanegiad ymlaen ychwanegiad ymlaen ychwanegiad ymlaen ychwanegiad ymlaen ychwanegiad ymlaen ychwanegiad ymlaen ychwanegiad ymlaen ychwanegiad ymlaen ychwanegiad ymlaen ychwanegiad ymlaen ychwanegiad ymlaen ychwanegiad ymlaen ychwanegiad ymlaen ychwanegiad ymlaen ychwanegiad ymlaen ychwanegiad ymlaen ychwanegiad ymlaen ychwaneg

### Apache {#fixing-cors-issues-with-font-icons-in-mapped-domains}

Ar ôl yna'ch .htaccess, refalwch:

<FilesMatch “.(ttf|ttc|otf|eot|woff|font.css|css)$”> Header set Access-Control-Allow-Origin “*”

### NGINX {#fixing-cors-issues-with-font-icons-in-mapped-domains-1}

Ar ôl y config o'r server (mae lleoliad yn newid o server i server), refalwch:

location ~ .(ttf|ttc|otf|eot|woff|font.css|css)$ { add_header Access-Control-Allow-Origin “*”;}
