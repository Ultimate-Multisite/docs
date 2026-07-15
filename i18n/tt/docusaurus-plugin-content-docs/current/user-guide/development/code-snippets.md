---
title: Код фрагментлары
sidebar_position: 1
_i18n_hash: 2284b14474d86f665fa7c84cc305553e
---
# v2 üçün Kod Kesitleri

Temelde, **WordPress** için kod kesitleri, normalde ayrı küçük bir eklenti gerektirebilecek belirli işlemleri yapmak için kullanılır. Bu tür kod kesitleri WordPress çekirdek dosyalarından veya temanızın (genellikle functions.php dosyası) içinde yer alabilir veya bir MU plugin olarak da kullanılabilirler.

Bu makalede, **Ultimate Multisite v2** ile kullanabileceğiniz üç kod kesitini göstereceğiz:

  * [Hesap menü öğesinin konumunu değiştirme](#changing-the-position-of-the-account-menu-item)

  * [Kullanıcının belirli bir plan altında olup olmadığını ve/veya aktif bir aboneliği olup olmadığını kontrol etme](#how-to-check-if-the-user-is-under-a-given-plan-andor-has-an-active-subscription)

  * [Eşlenmiş alan adlarında Font-Icons ile CORS sorunlarını çözme](#fixing-cors-issues-with-font-icons-in-mapped-domains)

## Hesap menü öğesinin konumunu değiştirme {#changing-the-position-of-the-account-menu-item}

Müşterinizin Dashboard'undaki Hesap menü öğesinin konumunu değiştirmek için, aşağıdaki kod kesitini ana sitenizin aktif temasının functions.php dosyasına eklemeniz yeterlidir. Bu kesiti aynı zamanda bir mu-plugin veya özel eklentinizin içine de koyabilirsiniz.

add_filter('wu_my_account_menu_position', function() { return 10; // Menüyü istediğiniz konuma yerleştirmek için bu değeri ayarlayın.

## Kullanıcının belirli bir plan altında olup olmadığını ve/veya aktif bir aboneliği olup olmadığını kontrol etme {#how-to-check-if-the-user-is-under-a-given-plan-andor-has-an-active-subscription}

Bir ağ yöneticisi olarak, abonelik durumlarına ve abone olduğu plana dayanarak temel işlemler gerçekleştiren veya bir hizmeti/özelliği seçilmiş bir abone grubu veya son kullanıcılar için mevcut hale getiren özel fonksiyonlar oluşturmanız gerekebilir.

Bu Ultimate Multisite yerel (native) fonksiyonları bu konuda size yardımcı olacaktır.

Kullanıcının belirli bir planda olup olmadığını kontrol etmek için şu fonksiyonu kullanabilirsiniz:

wu_has_plan($user_id, $plan_id)

Абонентin aktifmi tek taseklämek üçin `wu_is_active_subscriber($user_id)` funksiyasından foydalanyp bilersiňiz.

Aşakda, häzirki ulanyjyny belli bir plan ( _Plan ID 50_) ýokarynda we ulanyjynyň aboneti aktifmi diýip barlamak üçin mysal kesgitini görkezýärin:

`$user_id = get_current_user_id(); $plan_id = 50; if (wu_has_plan($user_id, $plan_id) && wu_is_active_subscriber($user_id)) { // ULANYJÇY PLANDA WE ABONETI AKTIVDIR, BU UÇARLARY ÝAPLYN.` } else { // ULANYJÇY PLANDA DUGARYN -- ÝA-DA ABONETI AKTIVDORMÄ, BAŞGA ŞEÝLEME YAP. } // end if;`

**wu_has_plan** üçin işlemek üçin "Plan ID" gerekdirýändigini ýatlamalydyňyz.

Bir plan ID-sini almak üçin **Ultimate Multisite > Products** bölümini açyp bilersiňiz. Her bir maglumat (product) ID-si tablisan wagty sağ tarapda görkezilýär.

Ulanyjylar diňe **Plan**lara, Paketlere ýa-da Hyzmatlara däl, sebäbi olar diňe **Planlaryň** goşulmalarydyr (add-ons).

![Plan IDlerini görkezýän maglumat](/img/admin/products-list.png)

## Maplan domainlerde Font-Icons bilen bagly CORS meselelerini çözmek {#fixing-cors-issues-with-font-icons-in-mapped-domains}
## Maplan domainlerde Font-Icons bilen bagly CORS meselelerini çözmek {#fixing-cors-issues-with-font-icons-in-mapped-domains-1}

Bir domaini sub-site üçin maplaýandan soň, sahypa özüniň adat fontlaryny ýüklemegiňde kynçylyk çykaryp biljekdigini görseňiz. Bu server sozlamalarynda "cross-origin" bloklanmasundan sebäpdir.

Font fayllary neredeyse her wagt CSS-den dogry ýüklenýär, şonuň üçin maglumat maplama pluginimiz URL-leri maplan domaini ulanmak üçin özüni işläp bilmez. Şonuň üçin meseleni çözmek üçin server sozlamalaryňyzy üýtgetmelisiniz.

Apache

Вашем .htaccess файле добавьте следующее:

<FilesMatch “.(ttf|ttc|otf|eot|woff|font.css|css)$”> Header set Access-Control-Allow-Origin “*”

### NGINX {#apache}

На вашем конфигурационном файле сервера (местоположение зависит от сервера) добавьте:

location ~ .(ttf|ttc|otf|eot|woff|font.css|css)$ { add_header Access-Control-Allow-Origin “*”;}
