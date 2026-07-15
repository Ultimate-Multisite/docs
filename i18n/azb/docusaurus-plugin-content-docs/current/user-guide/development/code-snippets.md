---
title: Code Fragments
sidebar_position: 1
_i18n_hash: 2284b14474d86f665fa7c84cc305553e
---
# v2 İçin Kod Parçaları

Temelde, **WordPress** için kod parçaları, aksi takdirde özel bir eklenti gerektirebilecek belirli işlemleri yapmak için kullanılır. Bu kod parçaları, WordPress çekirdek dosyalarından veya tema dosyalarından (genellikle temanızın functions.php dosyası) birine yerleştirilebilir veya bir MU eklentisi olarak kullanılabilir.

Bu makalede, **Ultimate Multisite v2** ile kullanabileceğiniz üç kod parçasını göstereceğiz:

  * [**Hesap menüsünün konumunu değiştirme**](#changing-the-position-of-the-account-menu-item)

  * [**Kullanıcının belirli bir plana sahip olup olmadığını ve/veya aktif bir aboneliği olup olmadığını kontrol etme**](#how-to-check-if-the-user-is-under-a-given-plan-andor-has-an-active-subscription)

  * [**Eşlenmiş alan adlarında Font-Icons ile CORS sorunlarını giderme**](#fixing-cors-issues-with-font-icons-in-mapped-domains)

## Hesap menüsünün konumunu değiştirme {#changing-the-position-of-the-account-menu-item}

Müşterinizin Dashboard'unda Hesap menüsünün konumunu değiştirmek için, aşağıdaki kod parçasını ana sitenizin aktif temasının functions.php dosyasına eklemeniz yeterlidir. Bu parçayı bir mu-plugin'in veya özel bir eklentinin içine de koyabilirsiniz.

add_filter('wu_my_account_menu_position', function() { return 10; // Menüyü istediğiniz konuma yerleştirmek için bu değeri değiştirin.

## Kullanıcının belirli bir plana sahip olup olmadığını ve/veya aktif bir aboneliği olup olmadığını kontrol etme {#how-to-check-if-the-user-is-under-a-given-plan-andor-has-an-active-subscription}

Bir ağ yöneticisi olarak, kullanıcının abonelik durumuna ve hangi plana abone olduğuna bağlı olarak temel işlemleri gerçekleştirecek veya bir hizmeti/özelliği seçilmiş bir abone grubuna veya son kullanıcılara sunacak özel fonksiyonlar oluşturmanız gerekebilir.

Bu Ultimate Multisite yerel fonksiyonları size yardımcı olacaktır.

Kullanıcının belirli bir plana üye olup olmadığını kontrol etmek için şu fonksiyonu kullanabilirsiniz:

wu_has_plan($user_id, $plan_id)

Aboneliğin aktif olup olmadığını kontrol etmek için ise şu fonksiyonu kullanabilirsiniz:

wu_is_active_subscriber($user_id)

Aşağıda, mevcut kullanıcının belirli bir plana (Plan ID 50) sahip olup olmadığını ve kullanıcının aboneliğinin aktif olup olmadığını kontrol eden bir örnek kod parçası bulunmaktadır.

$user_id = get_current_user_id();$plan_id = 50;if (wu_has_plan($user_id, $plan_id) && wu_is_active_subscriber($user_id)) { // KULLANICI PLANA ÜYE VE ABONELİĞİ AKTİF, BİR ŞEY YAP} else { // KULLANICI PLANA ÜYE DEĞİL -- VEYA -- ABONELİĞİ AKTİF DEĞİL, BAŞKA BİR ŞEY YAP} // end if;

**wu_has_plan** fonksiyonunun çalışması için bir "Plan ID" gerektirdiğini unutmayın.

Bir planın ID'sini almak için **Ultimate Multisite > Products** bölümüne gidebilirsiniz. Her ürünün ID'si tablonun sağ tarafında gösterilecektir.

Kullanıcıların yalnızca bir **Plan**'a abone olabileceğini unutmayın; çünkü bunlar yalnızca bir **Plan** için ek özelliklerdir (add-on).

![Products list showing plan IDs](/img/admin/products-list.png)

## Eşlenmiş alan adlarında Font-Icons ile CORS sorunlarını giderme {#fixing-cors-issues-with-font-icons-in-mapped-domains}
## Eşlenmiş alan adlarında Font-Icons ile CORS sorunlarını giderme {#fixing-cors-issues-with-font-icons-in-mapped-domains-1}

Bir alan adını bir alt siteye eşledikten sonra, sitenin özel yazı tiplerini yüklemekte zorlandığını fark edebilirsiniz. Bu durum, sunucu ayarlarınızdaki bir kökenler arası engellemeden (cross-origin block) kaynaklanmaktadır.

Yazı tipi dosyaları neredeyse her zaman doğrudan CSS'ten yüklendiği için, alan adı eşleme eklentimiz, URL'leri orijinal yerine eşlenmiş alanı kullanacak şekilde yeniden yazamıyor. Bu sorunu gidermek için sunucu yapılandırma dosyalarınızı düzenlemeniz gerekecektir.

Aşağıda Apache ve NGINX için sorunları giderecek kod parçaları bulunmaktadır. Bu değişiklikler, sunucu yapılandırma dosyaları (.htaccess dosyaları ve NGINX config dosyaları) hakkında ileri düzey bilgi gerektirir. Bu değişiklikleri kendiniz yapmaktan emin değilseniz, yardım gerektiğinde bu sayfayı hosting sağlayıcınızın destek temsilcilerine göndermeniz en iyisidir.

### Apache {#apache}

.htaccess dosyanıza şunu ekleyin:

<FilesMatch “.(ttf|ttc|otf|eot|woff|font.css|css)$”> Header set Access-Control-Allow-Origin “*”

### NGINX {#nginx}

Sunucu yapılandırma dosyanıza (konum sunucudan sunucuya değişir) şunu ekleyin:

location ~ .(ttf|ttc|otf|eot|woff|font.css|css)$ { add_header Access-Control-Allow-Origin “*”;}
