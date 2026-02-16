---
title: Kod Parçacıkları
sidebar_position: 1
_i18n_hash: 2284b14474d86f665fa7c84cc305553e
---
# v2 için Kod Parçacıkları

**WordPress** için kod parçacıkları, normalde küçük bir eklenti gerektiren belirli işlemleri gerçekleştirmek amacıyla kullanılır. Bu tür kod parçacıkları WordPress çekirdek dosyalarından birine veya tema dosyalarına (genellikle temanızın functions.php dosyasına) yerleştirilir ya da MU eklentisi olarak kullanılabilir.

Bu makalede **Ultimate Multisite v2** ile kullanılabilecek üç kod parçacığını göstereceğiz:

  * [**Hesap menü öğesinin konumunu değiştirme**](#changing-the-position-of-the-account-menu-item)

  * [**Kullanıcının belirli bir plana sahip olup olmadığını ve/veya aktif aboneliği olup olmadığını kontrol etme**](#how-to-check-if-the-user-is-under-a-given-plan-andor-has-an-active-subscription)

  * [**Eşlenmiş alanlarda font ikonlarıyla ilgili CORS sorunlarını düzeltme**](#fixing-cors-issues-with-font-icons-in-mapped-domains)

## Hesap menü öğesinin konumunu değiştirme

Müşterinizin Dashboard'unda Hesap menü öğesinin konumunu değiştirmek için aşağıdaki kod parçacığını ana sitenizin aktif temasının functions.php dosyasına eklemeniz yeterlidir. Ayrıca bu kod parçacığını mu-plugins klasörünüzdeki veya özel eklentilerinizden birinin içine de koyabilirsiniz.

add_filter('wu_my_account_menu_position', function() { return 10; // Menüyü istediğiniz konuma yerleştirmek için bu değeri ayarlayın.

## Kullanıcının belirli bir plana sahip olup olmadığını ve/veya aktif aboneliği olup olmadığını kontrol etme

Bir ağ yöneticisi olarak, abonelerin veya son kullanıcıların abonelik durumuna ve abone oldukları plana göre belirli bir gruba temel işlemler gerçekleştiren veya bir hizmet/özellik sunan özel fonksiyonlar oluşturmanız gerekebilir.

Bu Ultimate Multisite yerleşik fonksiyonları bu konuda size yardımcı olacaktır.

Kullanıcının belirli bir planın üyesi olup olmadığını kontrol etmek için şu fonksiyonu kullanabilirsiniz:

wu_has_plan($user_id, $plan_id)

Aboneliğin aktif olup olmadığını kontrol etmek için şu fonksiyonu kullanabilirsiniz:

wu_is_active_subscriber($user_id)

Aşağıda, mevcut kullanıcının belirli bir plana (_Plan ID 50_) sahip olup olmadığını ve kullanıcının aboneliğinin aktif olup olmadığını kontrol eden örnek bir kod parçacığı bulunmaktadır.

$user_id = get_current_user_id();$plan_id = 50;if (wu_has_plan($user_id, $plan_id) && wu_is_active_subscriber($user_id)) { // KULLANICI PLANIN ÜYESİ VE ABONELİĞİ AKTİF, İŞLEMLERİ GERÇEKLEŞTR} else { // KULLANICI PLANIN ÜYESİ DEĞİL -- VEYA -- ABONELİĞİ AKTİF DEĞİL, DİĞER İŞLEMLERİ GERÇEKLEŞTIR} // end if;

_**wu_has_plan**_ fonksiyonunun çalışması için bir "Plan ID" gerektiğini unutmayın.

Bir planın ID'sini almak için **Ultimate Multisite > Products** bölümüne gidebilirsiniz. Her ürünün ID'si tablonun sağ tarafında gösterilir.

Kullanıcıların yalnızca bir **Plan**'a abone olabileceğini, Paket veya Hizmete abone olamayacağını unutmayın; çünkü bunlar yalnızca bir **Plan** için eklentidir.

![Plan ID'lerini gösteren ürün listesi](/img/admin/products-list.png)

## Eşlenmiş alanlarda font ikonlarıyla ilgili CORS sorunlarını düzeltme
## Eşlenmiş alanlarda font ikonlarıyla ilgili CORS sorunlarını düzeltme

Bir alt siteye alan adı eşledikten sonra sitenin özel fontları yüklemekte sorun yaşadığını fark edebilirsiniz. Bu durum, sunucu ayarlarınızdaki çapraz kaynak (cross-origin) engellemesinden kaynaklanır.

Font dosyaları neredeyse her zaman doğrudan CSS'ten yüklendiğinden, alan adı eşleme eklentimiz URL'leri orijinal yerine eşlenmiş alan adını kullanacak şekilde yeniden yazamamaktadır. Bu sorunu çözmek için sunucu yapılandırma dosyalarınızı düzenlemeniz gerekir.

Aşağıda Apache ve NGINX için sorunu düzelten kod parçacıkları bulunmaktadır. Bu değişiklikler sunucu yapılandırma dosyaları (.htaccess dosyaları ve NGINX config dosyaları) hakkında ileri düzey bilgi gerektirir. Bu değişiklikleri kendiniz yapmak konusunda rahat değilseniz, yardım talep ederken bu sayfayı hosting sağlayıcınızın destek ekibine gönderin.

### Apache

.htaccess dosyanıza şunu ekleyin:

<FilesMatch ".(ttf|ttc|otf|eot|woff|font.css|css)$"> Header set Access-Control-Allow-Origin "*" 

### NGINX

Sunucu yapılandırma dosyanıza (konumu sunucudan sunucuya değişir) şunu ekleyin:

location ~ .(ttf|ttc|otf|eot|woff|font.css|css)$ { add_header Access-Control-Allow-Origin "*";}
