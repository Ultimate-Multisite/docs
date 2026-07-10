---
title: Kodakopiak
sidebar_position: 1
_i18n_hash: 2284b14474d86f665fa7c84cc305553e
---
# Koda-kodak (Code Snippets) v2 {#code-snippets-for-v2}

Ezin beti, **WordPress**-eko koda-kodakak erabiltzen da batzuk egin dezake, zein irakurripen edo plugin berezi behar izan jasotzen dirudi. Hau eskinduaren koda-kodak WordPress-en core edo tema file bat (lerregatik, tema-ren functions.php file-a) edo MU plugin bat gisa erabiltzen daiteke.

Hau artikuluan Ultimate Multisite v2arekin erabil beste koda-kodak hiru erakusten daitezkeen:

  * [**Kontua menuko lekuan haseritzeko**](#changing-the-position-of-the-account-menu-item)

  * [**Erabiltzaileak zehatze bat edo aktibo abonazioa dut non jakin dezake**](#how-to-check-if-the-user-is-under-a-given-plan-andor-has-an-active-subscription)

  * [**Font-Icons-ek domain ezarritutakoak ondorioz CORS problema bat haseritzeko**](#fixing-cors-issues-with-font-icons-in-mapped-domains)

## Kontua menuko lekuan haseritzeko {#changing-the-position-of-the-account-menu-item}

Client-ren Dashboard-aren Kontua menuko lekuan haseritzeko, zure main site-aren aktibo tema-ren functions.php-le koda-kodak hauek gehitu behar duzu. Koda-kodak hau MU plugin bat edo custom plugin bat aurrera egin dezake.

add_filter('wu_my_account_menu_position', function() { return 10; // Hau erabilera haseritzeko menuko lekuan jarri. })

## Erabiltzaileak zehatze bat edo aktibo abonazioa dut non jakin dezake {#how-to-check-if-the-user-is-under-a-given-plan-andor-has-an-active-subscription}

Network admin batez, abonazioaren eta planaren eragiketaaren boatusan motatutako abonen edo end-user-ek irekitu dituzten serbizio edo funtzio bat eskaintzeko custom functions ezarritzen behar zabaltelako da.

Ultimate Multisite-ren native functions hauek aukera ematen duzu horrela.

Erabiltzaileak jakin dezake zehatze bat plan batean dagoela, funzionea hauek erabiliz:

wu_has_plan($user_id, $plan_id)

Subscription aktiboa jak eratu, funksioa hauek ezin daite:

wu_is_active_subscriber($user_id)

Astea da, testu bat da, zein erabiltzaileak plan bat ( _Plan ID 50_) ondorioz dago eta erabiltzailearen abonazioa aktibo dagoela jakosteko.

$user_id = get_current_user_id();$plan_id = 50;if (wu_has_plan($user_id, $plan_id) && wu_is_active_subscriber($user_id)) { // ERBAILZAIK PLAN BATAREN DUGOT ETA ABONAZIOA AKTIBOA DA, ERE KUTXOA EGITEA} else { // ERBAILZAIK PLAN BATAREN EZ DUGOT -- ORA -- ABONAZIOA AKTIBOA EZ DA, BAILAKO EGITEA} // end if;

Ez zurekin **wu_has_plan**-ek "Plan ID" bat behar du funtzionatzeko.

Plan bataren ID aurretik jartzeko, **Ultimate Multisite > Products** (Produktoak) funtziokoan jarraitu dezakezu. Produkzio baten IDa eta tablearen hakugarriak eratu daitezke.

Ez dago erabiltzaileek **Package** edo **Service**-ekin abonatu ez du, plan batzuk dira, zein Plan batzuk dira Package edo Service-ekin gehien besteak (add-ons) dela.

![Products list showing plan IDs](/img/admin/products-list.png)

## Font-Icons-ek Maps Domainetan CORS Problema Horren Irudi {#fixing-cors-issues-with-font-icons-in-mapped-domains}
## Font-Icons-ek Maps Domainetan CORS Problema Horren Irudi {#fixing-cors-issues-with-font-icons-in-mapped-domains-1}

Domain bat sub-site bat mapatuta jakin duzu, eta erabilizun fontak (custom fonts) laden dezake ez dagoela. Horra serveraren konfiguratura aukera bat da (cross-origin block).

Font fileak gurean gabe CSS-n direktu egiten dira, zein domain mapping plugin-ek URL-ek aldatzeko gaitasunez direla mapatutako domaina erabiliz eta orihala berea erabiltzea ez du. Horrek konponbidea bat arregiatzen behar duzu serveraren konfiguratura fileak.

Apache

Dienu zenbait .htaccess arkadean:

<FilesMatch “.(ttf|ttc|otf|eot|woff|font.css|css)$”> Header set Access-Control-Allow-Origin “*”

### NGINX {#apache}

Zen server konfigurazio filean (le jarduera aldatzenari serverraren ondorioz dira) zenpen:

location ~ .(ttf|ttc|otf|eot|woff|font.css|css)$ { add_header Access-Control-Allow-Origin “*”;}
