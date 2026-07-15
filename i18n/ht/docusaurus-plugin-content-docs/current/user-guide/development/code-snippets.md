---
title: Kòd Snipe
sidebar_position: 1
_i18n_hash: 2284b14474d86f665fa7c84cc305553e
---
# Code Snippets pou v2

An reyalman, code snippets pou **WordPress** yo itilize pou fè kèk aksyon ki ka mande yon plugin pi piti ki dedye. Genyen sa yo mete nan youn nan dosye nòmal WordPress la oswa nan tem (theme) ou a (anjeneral dosye functions.php tem ou an), oubyen yo ka itilize kòm yon MU plugin.

Nan atik sa a, nou pral montre w twa code snippets ki ka itilize ak **Ultimate Multisite v2** :

  * [**Chanje pozisyon mennu Kont (Account menu item)**](#changing-the-position-of-the-account-menu-item)

  * [**Kijan pou w verifi si itilizat la anba yon plan espesifik epi/oswa gen yon abòn aktif**](#how-to-check-if-the-user-is-under-a-given-plan-andor-has-an-active-subscription)

  * [**Repare pwoblèm CORS ak Font-Icons nan domèn ki mapé (mapped domains)**](#fixing-cors-issues-with-font-icons-in-mapped-domains)

## Chanje pozisyon mennu Kont (Account menu item) {#changing-the-position-of-the-account-menu-item}

Pou chanje pozisyon mennu Kont la sou Dashboard kliyan ou a, jis ajoute code snippet sa a nan dosye functions.php tem prensipal sit ou an ap itilize a. Ou ka mete snippet la nan youn nan MU plugin oswa custom plugin ou yo tou.

add_filter('wu_my_account_menu_position', function() { return 10; // Twezi valè sa a pou mete mennu a nan pozisyon ou vle a.

Pou wè si abònman an aktif, ou ka itilize fonksyon sa a:

wu_is_active_subscriber($user_id)

Anba sa a, se yon egzanp ki montre kijan pou w kontwole si itilizat kounye a gen plan espesifik (_Plan ID 50_) epi si abònman li aktif.

$user_id = get_current_user_id();$plan_id = 50;if (wu_has_plan($user_id, $plan_id) && wu_is_active_subscriber($user_id)) { // ITILIZAT LA MENM PLAN E ABÒNMAN LI AKTIF, FÈ SA} else { // ITILIZAT PA MENM PLAN -- OLI -- ABÒNMAN LI PA AKTIF, FÈ SA OTÈL} // fini if;

Note ke _**wu_has_plan**_ mande yon "Plan ID" pou li ka fonksyone.

Pou jwenn ID yon plan an, ou ka ale nan **Ultimate Multisite > Products**. ID chak pwodwi pral montre a bò dwat tab la.

Note ke itilizat yo sèlman ka abònye yon **Plan**, pa yon Package oswa yon Service, paske yo se sèlman ajou pou yon **Plan**.

![Products list showing plan IDs](/img/admin/products-list.png)

## Repare pwoblèm CORS ak Font-Icons nan domèn ki mapé {#how-to-check-if-the-user-is-under-a-given-plan-andor-has-an-active-subscription}
## Repare pwoblèm CORS ak Font-Icons nan domèn ki mapé {#fixing-cors-issues-with-font-icons-in-mapped-domains}

Aprè w fin mapé yon domèn pou yon sub-site, ou ka jwenn ke sit la gen pwoblèm pou li chaje font koutim. Sa se poutèt yon bloke kòtori (cross-origin block) nan konfigirasyon sèvè ou a.

Puis ke fichye font yo anpòt toujou chaje dirèkteman soti nan CSS, plugin mapaj domèn nou pa ka re-ekri URL yo pou itilize domèn ki mapé la olye de sa orijinal la. Donk pou w rezoud pwoblèm nan, ou pral bezwen modifie fichye konfigirasyon sèvè ou a.

Men kèk kòd pou rezoud pwoblèm nan pou Apache ak NGINX. Chanjman sa yo mande yon konpreyansyon avanse sou fichye konfigirasyon sèvè (.htaccess files ak NGINX config files). Si ou pa konfòtab fè chanjman sa tèt ou, voye paj sa a bay agent sipò hosting ou lè w bezwen èd.

### Apache {#fixing-cors-issues-with-font-icons-in-mapped-domains-1}

Nan fichye .htaccess ou an, ajoute sa:

<FilesMatch “.(ttf|ttc|otf|eot|woff|font.css|css)$”> Header set Access-Control-Allow-Origin “*”

### NGINX {#apache}

Nan fichye konfigirasyon sèvè ou a (ki kote li varye selon sèvè a), ajoute sa:

location ~ .(ttf|ttc|otf|eot|woff|font.css|css)$ { add_header Access-Control-Allow-Origin “*”;}
