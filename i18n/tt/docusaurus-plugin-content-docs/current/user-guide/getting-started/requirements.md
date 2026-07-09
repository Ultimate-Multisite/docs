---
title: Талаптар
sidebar_position: 1
_i18n_hash: 77ce1a129b3eb304cc0b89d72faef9cf
---
# Ultimate Multisite Gereklilikleri {#ultimate-multisite-requirements}

Ultimate Multisite'ı satın almadan önce kendinize sormanız gereken ilk şey, eklentimizi çalıştırmak için ne gibi gereksinimler olduğu olabilir. Neyse ki, Ultimate Multisite'ı çalıştırmak için sadece birkaç temel gereksinim var: bir **alan adı**, iyi bir **barındırma sağlayıcısı** ve bir WordPress **Multisite** kurulumu. İşte ihtiyacınız olan hepsi bu!

## Alan Adı {#domain-name}

Öncelikle alan adından bahsedelim.

Bir alan adı seçerken, nişinizin ne olduğunu ve Ultimate Multisite ile ne oluşturacağınızı göz önünde bulundurun: Bir ajans mı kurmak istiyorsunuz? Mağaza benzeri web siteleri mi satacaksınız? Yoksa belki bir WordPress web barındırma hizmeti mi sunacaksınız? Ultimate Multisite ile her şey mümkün.

Eklentimiz abonelik hizmetleri, ödeme toplama, ödeme formları, indirim kuponları ve müşteri iletişimleri sağlıyor. Bir WordPress Multisite'ı kurmak, yapılandırmak ve sürdürmek için gereken çok fazla işi Ultimate Multisite kolaylaştırıyor.

Hangi nişi seçerseniz seçin, eğer web sitelerini hizmet olarak satıyorsanız eklentimizle yönetebilirsiniz! İş planınıza uygun bir alan adı seçtiğinizden emin olun.

## Barındırma Sağlayıcısı {#hosting-provider}

Artık nişinizi ve işinizi temsil eden ilgi çekici bir alan adınız olduğuna göre, ağınızı Ultimate Multisite ile barındırmak için iyi bir web hosting şirketi seçmeniz gerekecek. Piyasada bazı iyi seçenekler var. Bazı barındırma sağlayıcıları Ultimate Multisite ile iyi entegre olur ki bu da ne inşa etmeyi planladığınıza bağlı olarak belirleyici bir faktör olabilir.

Ultimate Multisite hər hansı hosting provayderinde işləy bilmelidir. Yeganə fərq odur ki, bəzi hosting şirkətləri kimi _WPMU DEV Hosting_, _WP Engine_, _Closte_, _Cloudways_, _Gridpane_ və _Runcloud_ domen xəritələməsi üçün daha sıx inteqrasiyaya malikdir. Digər hostinglərdə isə özünüz custom domenləri əl ilə xəritələməyə ehtiyacınız ola bilər. Həmçinin, AutoSSL dəstəkləyən bir hosting provayderi almaq yaxşı fikirdir. _Closte_, _Runcloud_ və _cPanel_ bunu dəstəkləyir.

Server spesifikasiyalarına gəldikdə, xüsusi bir düstur yoxdur, çünki bu sizin təklif etdiyiniz funksiyalar və şəbəkənizin ölçüsünə bağlı olacaq. Paylaşımlı hosting yaxşı başlanğıc ola bilər, lakin şəbəkəniz böyüməyə başladığı anlarda ehtiyacınız çox gümanlı olaraq dedikodlu VPS (dedicated VPS) almağa düşəcək.

## WordPress Multisite {#wordpress-multisite}

İndi isə bir WordPress Multisite quraşdırılması haqqında biraz danışaq.

WordPress Multisite-da siz tək bir quraşdırmada bir şəbəkə yarada bilərsiniz. Bu daxili bir funksiyadır, lakin avtomatik aktiv deyil. Bunu öz WordPress quraşdırmanız və veb hosting nəzarət paneliniz içində aktiv etməlisiniz.

WordPress-i Multisite ilə aktivləşdirmək **Ultimate Multisite üçün əsasdır**. Ultimate Multisite-ın əsas istifadəsi isə istifadəçilərə veb saytları xidmət olaraq idarə etmə və satmağa kömək etməkdir, buna görə də bu iş WordPress-də Multisite aktiv olduqda aparılmalıdır.

WordPress quraşdırmanızda Multisite funksiyasını necə aktivləşdirməli olduğunuzu addım-addım öyrədən **bir ətraflı məqalə** hazırlamışdıq.

WordPress-də Multisite aktiv olduqdan sonra, Ultimate Multisite-ı quraşdırma vaxtıdır. Ultimate Multisite-ı düzgün quraşdırmaq üçün sizə aşağıdakılar lazımdır:

  * WordPress: v5.3+ (Tövsiyə olunur: Son stabil versiya)

  * PHP: 7.4.x (8.0-dan sonra dəstək gələcək)

  * MySQL: v5+ (Tövsiyə olunur: 8.0 mövcud deyilsə, hosting provayderinizdəki halda 5.6)

Эдмоглар учун Ultimate Multisite-ың шартлары шуlardır.

УсламаламанUltimate Multisite PHP 8.0-да иштее алар, билесеңиз, бирок биз PHP 7.4.x-да иштетүүнне тавсиялеймиз.

Шулай ук, биз аны **основ доменларда** (main domains) установитьүңүзне сунуштайбыз, субдомендерде же субдиректорияларда эмес. Субдомендерде/субдиректорияларда иштеши мүмкүн, бирок кээ бир каталар тукушы мүмкүн.

Ultimate Multisite-ың кантип орнотулушу жөнүндө толук колдонмо үчүн, **бул жерге клик кылыңыз**.
