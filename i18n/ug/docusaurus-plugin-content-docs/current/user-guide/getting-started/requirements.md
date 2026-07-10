---
title: Şartlar
sidebar_position: 1
_i18n_hash: 77ce1a129b3eb304cc0b89d72faef9cf
---
# Ultimate Multisite Şartları {#ultimate-multisite-requirements}

Ultimate Multisite'ı satın almadan önce kendinize sorabileceğiniz ilk şey, eklentimizi çalıştırmak için ne gibi gereksinimler olduğunu bilmektir. Neyse ki, Ultimate Multisite'ı çalıştırmak için sadece birkaç temel gereksinim var: bir **alan adı** (domain name), iyi bir **barındırma sağlayıcısı** (hosting provider) ve bir WordPress **Multisite** kurulumu. Bunlar hepsi yeterli!

## Alan Adı (Domain Name) {#domain-name}

Öncelikle alan adından bahsedelim.

Bir alan adı seçerken, kendi özel nişinizin ne olduğunu ve Ultimate Multisite ile ne oluşturacağınızı göz önünde bulundurun: Bir ajans mı kurmak istiyorsunuz? Mağaza benzeri web siteleri mi satacaksınız? Yoksa belki bir WordPress web barındırma hizmeti mi sunacaksınız? Ultimate Multisite ile her şey mümkün.

Eklentimiz abonelik hizmetleri, ödeme toplama, ödeme formları, indirim kuponları ve müşteri iletişimleri gibi birçok işi sağlıyor. Bir WordPress Multisite'ı kurmak, yapılandırmak ve bakımını yapmak için gereken çok fazla iş Ultimate Multisite ile kolaylaşır.

Hizmet olarak web siteleri sattığınız sürece seçtiğiniz herhangi bir nişi eklentimizle yönetebilirsiniz! İş planınıza uygun bir alan adı seçtiğinizden emin olun.

## Barındırma Sağlayıcısı (Hosting Provider) {#hosting-provider}

Artık nişinizi ve işinizi temsil eden dikkat çekici bir alan adınız olduğuna göre, ağınızı Ultimate Multisite ile barındırmak için iyi bir web hosting şirketi seçmeniz gerekecek. Piyasada bazı iyi seçenekler var. Bazı hosting sağlayıcıları Ultimate Multisite ile iyi entegre olur, bu da ne inşa etmeyi planladığınıza bağlı olarak belirleyici bir faktör olabilir.

Ultimate Multisite هر هاستینگ sağlayıcısında işləyə bilməlidir. Yeganə fərq odur ki, bəzi haستینگ şirkətləri kimi _WPMU DEV Hosting_ , _WP Engine_ , _Closte_ , _Cloudways_ , _Gridpane_ və _Runcloud_ domen xəritələməsi üçün daha sıx inteqrasiyaya malikdir. Digər haستینگ üçün isə siz özünəməxsus domenləri əl ilə xəritələməlisiniz. Həmçinin AutoSSL dəstəkləyən bir haستینگ sağlayicisi tapmaq yaxşı fikirdir. _Closte_ , _Runcloud_ və _cPanel_ bunu dəstəkləyir.

Server spesifikasiyalarına gəldikdə, xüsusi bir düstur yoxdur çünki bu sizin təklif etdiyiniz funksiyalar və şəbəkənizin ölçüsünə bağlı olacaq. Paylaşımlı haستینگ yaxşı bir başlanğıc ola bilər, lakin şəbəkəniz böyüməyə başladığı anlarda ehtiyatlı VPS-ə (dedicated VPS) ehtiyacınız olacaq.

## WordPress Multisite {#wordpress-multisite}

İndi isə WordPress Multisite quraşdırılması haqqında bir az danışaq.

WordPress Multisite sizə tək bir quraşdırma üzərində bir şəbəkə yaradmağa imkan verir. Bu daxili bir funksiyadır, lakin standart olaraq aktiv deyil. Siz bu funksiyanı WordPress quraşdırmanız və veb haستینگ nəzarət paneliniz daxilində aktivləşdirməlisiniz.

WordPress-i Multisite ilə aktiv etmək **Ultimate Multisite üçün əsasdır**. Ultimate Multisite-ın əsas istifadəsi isə istifadəçilərə veb saytları xidmət kimi idarə etmə və satmağa kömək etməkdir, buna görə də bu iş WordPress-də Multisite aktiv olduğu halda aparılmalıdır.

WordPress quraşdırmanızda Multisite funksiyasını necə aktivləşdirməli olduğunuzu addım-addım öyrədən **bir ətraflı məqalə** hazırlamışırıq.

WordPress-də Multisite aktiv olduqdan sonra, Ultimate Multisite-ı quraşdırma vaxtıdır. Ultimate Multisite-ı düzgün quraşdırmaq üçün sizə aşağıdakılar lazımdır:

  * WordPress: v5.3+ (Tavsiya olunur: Son stabil versiya)

  * PHP: 7.4.x (8.0-dan sonra dəstək gələcək)

  * MySQL: v5+ (Tavsiya olunur: 5.6, əgər haستینگ sağlayıcınızda 8.0 mövcud deyilsə)

Ultimate Multisite üçün bu faqat yazılım talablari.

Unutmayın ki Ultimate Multisite PHP 8.0 ilə dewa olabilir, ancak biz onu PHP 7.4.x ile çalıştırmanızı tavsiye ederiz.

Ayrıca, onu alt alan adları (subdomains) veya alt dizinler (subdirectories) yerine **ana alan adlarında** kurmanızı öneririz. Alt alan adları/alt dizinlerde çalışabilir, ancak bazı hatalar ortaya çıkabilir.

Ultimate Multisite'ı nasıl kuracağınıza dair ayrıntılı bir kılavuz için **buraya tıklayın**.
