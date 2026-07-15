---
title: Kod keselleri
sidebar_position: 1
_i18n_hash: 2284b14474d86f665fa7c84cc305553e
---
# v2 üçin Kod Kesikleri

Esasa, **WordPress** üçin kod kesiklerinden, başga bir özel kiçik plugin gerekip biljek belli işleri yapmak üçin iseler. Bu tür kod kesikleri WordPress'in esas faylýnda ýa-da tema faylynyň (geneliki wepajynda functions.php) içinde ýerleşdirilipdir, ýa-da MU plugin hasaplanyp hem ulanylýar.

Bu makalpa size **Ultimate Multisite v2** bilen ulanyla biljek üç kod kesigini görkezeli:

  * [**Hasabat menýü müňümçesini üýtgetmek**](#changing-the-position-of-the-account-menu-item)

  * [**User belli bir plan ýa-da işjeň subskripsiýasy barada barlamak üçin**](#how-to-check-if-the-user-is-under-a-given-plan-andor-has-an-active-subscription)

  * [**Maplan edilen domynlarda Font-Icons bilen CORS meselelerini düzetmek**](#fixing-cors-issues-with-font-icons-in-mapped-domains)

## Hasabat menýü müňümçesini üýtgetmek {#changing-the-position-of-the-account-menu-item}

Müşderiniň Dashboardynda Hasabat menýü müňümçesini üýtgetmek üçin, size esasy siteňizdäki aktif tema faylynyň functions.php-siga aşakdaky kod kesigini goşdirip bilersiňiz. Şol kesiki sizden hasaplaýan ýerleşdirilmek üçin bu summany üýtgedip bilersiňiz.

add_filter('wu_my_account_menu_position', function() { return 10; // Menýüni islenilen ýerleşdirmek üçin bu summany düzetip görüň.

## User belli bir planda we/ýa-da işjeň subskripsiýasy barada barlamak üçin {#how-to-check-if-the-user-is-under-a-given-plan-andor-has-an-active-subscription}

Awtomatlaşdyryjy (network) administrator hökmünde, siz hasaplaýan esasy işlemleri ýerine ýetirjek we subskribýanterleri ýa-da son durnýjylary belli bir guruhyň subskripsiýasy we ol subskribýatdan ýardam berýän plan bilen baglanyp hyzmat/funksionalligi bar etdirjek usulda özüňizden hasaplaýan funksiýalary döretmek gerek bilerisiz.

Bu Ultimate Multisite-iň özüniň funksiýalary size bu işde kömek eder.

User belli bir planda bolup bolmadykdyryny barlamak üçin, siz şu funksiyany ulanyp bilersiňiz:

wu_has_plan($user_id, $plan_id)

Abonamentin aktif olup olmadığını kontrol etmek üç funksiyadan birini kullanyp bilersiňiz:

`wu_is_active_subscriber($user_id)`

Aşakda, häzirki ulanyjyny belli bir plan ( _Plan ID 50_ ) aşakda we ulanyjynyň abonamentini aktif olup olmadığını kontrol edýän mysal kesgitini görýärsiňiz.

`$user_id = get_current_user_id(); $plan_id = 50; if (wu_has_plan($user_id, $plan_id) && wu_is_active_subscriber($user_id)) { // ULANYJÇY PLANDA DA, ABONAMENTI DA AKTIVDUR, BU ZAMANYŇ UÇUGYNY EDIP BİLİNSIN } else { // ULANYJÇY PLANDA DÄR, ÝA-DA ABONAMENTI AKTIVDUR DÄR, BAŞKA ZAMANYŇ UÇUGYNY EDIP BİLİNSIN } // end if;`

**wu_has_plan** funksiýasy işlemek üçin "Plan ID" gerekdirýändigini ýatlaň.

Bir plan ID-sini almak üçin **Ultimate Multisite > Products** bölümine gitmäge bilersiňiz. Her bir maglumatlarynyň sağ tanynda görkezilýär.

Ulanyjylar diňe **Plan** bilen, Paketden ýa-da Hyzmatdan däl, sebäbi olar diňe **Plan** üçin goşmaça böleklerdir (add-ons).

![Products list showing plan IDs](/img/admin/products-list.png)

## Map edilen domynlarda Font-Icons bilen baglanyşygy (CORS) soraglaryny galdyrmak {#fixing-cors-issues-with-font-icons-in-mapped-domains}
## Map edilen domynlarda Font-Icons bilen baglanyşygy (CORS) soraglaryny galdyrmak {#fixing-cors-issues-with-font-icons-in-mapped-domains-1}

Domyny sub-site bilen maplapdan soň, sahypa özüniň üçin goşmaça fontlary ýüklemekde kynçylyk çekýändigini tapyp bilersiňiz. Bu server sozlamalarynda "cross-origin" bloklanmasundan sebäpdir.

Font fayllary neredeyse her wagt CSS-den dogry ýüklenýär, şonuň üçin, biziň domyn maplama pluginimiz URL-leri map edilen domany ulanmaga üýtgetip bilmez. Şonuň üçin soragyny çözmek üçin server sozlamalaryňyzy düzetmelisiniz.

Apache

Sizi .htaccess faylunda şularly goşturun:

<FilesMatch “.(ttf|ttc|otf|eot|woff|font.css|css)$”> Header set Access-Control-Allow-Origin “*”

### NGINX {#apache}

Server konfigurasi faylınıza (bu yer serverden servere üýtgeýär) goşturun:

location ~ .(ttf|ttc|otf|eot|woff|font.css|css)$ { add_header Access-Control-Allow-Origin “*”;}
