---
title: Fragmentet e kodit
sidebar_position: 1
_i18n_hash: 2284b14474d86f665fa7c84cc305553e
---
# Koda Snippet për v2

Në thelb, kodet e snippet-eve për **WordPress** përdoren për të bërë disa veprime që mund të kërkojnë një plugin më të vogël dhe dedikuar. Të këto kode snippet-e vendosen në një nga skedat bazë ose tema (zakonisht skedat `functions.php` e temës suaj) ose mund të përdoren si MU plugin.

Në këtë artikull do t'ju tregojmë tre code snippet-e që mund të përdoren me **Ultimate Multisite v2**:

  * [**Ndërrimi i pozicionit të menysë së Kontos (Account menu item)**](#changing-the-position-of-the-account-menu-item)

  * [**Si të kontrolloni nëse përdoruesi është nën një plan të caktuar dhe/ose ka një abonim aktiv**](#how-to-check-if-the-user-is-under-a-given-plan-and-has-an-active-subscription)

  * [**Rregullimi i problemeve CORS me Font-Icons në domenat e mapi**](#fixing-cors-issues-with-font-icons-in-mapped-domains)

## Ndërrimi i pozicionit të menysë së Kontos (Account menu item)

Për të ndryshuar pozicionin e menysë së Kontos në Dashboard-in e klientit tuaj, thjesht shtoni këtë code snippet në skedën `functions.php` të temës aktive të faqes kryesore të suaj. Ju mund ta vendosni edhe snippet-in brenda një prej MU plugin-eve ose plugin-eve të specializuara (custom plugins) tuaja.

```php
add_filter('wu_my_account_menu_position', function() { return 10; // Përshtatni këtë vlerë për të vendosur menynë në pozicionin e dëshiruar.
```

## Si të kontrolloni nëse përdoruesi është nën një plan të caktuar dhe/ose ka një abonim aktiv

Si administrator rrjeti, mund të keni nevojë të krijoni funksione të specialuara që do të kryejnë veprime bazike ose të bëjnë një shërbim/karakter të disponueshëm për një grup të zgjedhur abonentë ose përdorues finalë, bazuar në statusin e abonimit dhe planit ku janë të abonuar.

Këto funksione natyrore nga Ultimate Multisite do t'ju ndihmojnë me këtë.

Për të kontrolluar nëse përdoruesi është i anëtar i një plani të caktuar, ju mund të përdorni funksionin:

```php
wu_has_plan($user_id, $plan_id)
```

Për të kontrolluar nëse abonimi është aktiv, mund të përdorni funksionin:

`wu_is_active_subscriber($user_id)`

Më poshtë është një shembull fragment që kontrollon nëse përdoruesi aktual është nën një plan specifik (_Plan ID 50_) dhe nëse abonimi i përdoruesit është aktiv.

`$user_id = get_current_user_id(); $plan_id = 50; if (wu_has_plan($user_id, $plan_id) && wu_is_active_subscriber($user_id)) { // PËRDORUESI JEPËR E PLANIT DHE ABONIMI I TIJ SHËNTON, BDO AJOJ DIZAJONI} else { // PËRDORUESI NUK ËSHTË NJERI I PLANIT -- OSE -- ABONIMI I TIJ NUK ËSHTË AKTIV, BDO AJOJ DIZAJONI} // fund if;`

Vëreni se `_**wu_has_plan**_` kërkon një "Plan ID" që të funksionojë.

Për të marrë ID-në e një plani, mund të shkoni në **Ultimate Multisite > Products**. ID-ja e çdo produkti do të shfaqet në të djathtë të tabelës.

Vëreni se përdoruesit mund të abonojnë vetëm te një **Plan**, jo te një Paketë ose Shërbimi, sepse ata janë thjesht shtesa për një **Plan**.

![Lista e Produkteve që shfaq ID-të e planeve](/img/admin/products-list.png)

## Rregullimi i problemeve CORS me Font-Icons në domenat të mapuar
## Rregullimi i problemeve CORS me Font-Icons në domenat të mapuar

Pas kur mapi një domen te një sub-site, mund të zbuloni se faqja ka vështirësi për të ngarkuar fontet e personalizuara. Kjo shkaktohet nga një bllokim i burimit (cross-origin block) në cilësimet e serverit tuaj.

Duke qenë se skedaret e fontit paksa herëherë ngarkohen drejtpërdrejt nga CSS, plugin i mapimit të domenit tonë nuk mund të riekzikoje URL-të për të përdorur domenit e mapuar në vend të atyre origjinale. Prandaj, për të zgjidhur problemin, do të duhet të ndryshoni skedaret tuaja të konfigurimit të serverit.

Për Apache

Në skedarin .htaccess, shtoni:

<FilesMatch “.(ttf|ttc|otf|eot|woff|font.css|css)$”> Header set Access-Control-Allow-Origin “*”

Në NGINX

Në skedarin konfiguratës së serverit (vendosja ndryshon nga server në server), shtoni:

location ~ .(ttf|ttc|otf|eot|woff|font.css|css)$ { add_header Access-Control-Allow-Origin “*”;}
