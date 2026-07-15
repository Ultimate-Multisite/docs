---
title: Nekva'ra
sidebar_position: 1
_i18n_hash: 77ce1a129b3eb304cc0b89d72faef9cf
---
# Ultimate Multisite Gereksinimleri

Ultimate Multisite'ı satın almadan önce kendinize sorabileceğiniz ilk şey, eklentimizi çalıştırmak için ne gibi gereksinimler var? Neyse ki, Ultimate Multisite'ı çalıştırmak için sadece birkaç temel gereksinim var: bir **domain adı**, iyi bir **barındırma sağlayıcısı** ve bir WordPress **Multisite** kurulumu. Hepsi bu kadar!

## Domain Adı {#domain-name}

Öncelikle domain adından bahsedelim.

Bir domain adı seçerken, hangi nişte olduğunuzu ve Ultimate Multisite ile ne tür siteler oluşturacağınızı aklınızda bulundurun: Bir ajans mı kurmak istiyorsunuz? Mağaza benzeri siteler mi satacaksınız? Yoksa belki bir WordPress web barındırma hizmeti mi? Ultimate Multisite ile her şey mümkün.

Eklentimiz abonelik hizmetleri, ödeme toplama, satın alma formları, indirim kuponları ve müşteri iletişimleri sağlıyor. Bir WordPress Multisite'ı kurmak, yapılandırmak ve sürdürmek için gereken işlerin büyük bir kısmı Ultimate Multisite tarafından kolaylaştırılıyor.

Hangi nişi seçerseniz seçin, siteleri bir hizmet olarak satabildiğiniz sürece eklentimizle yönetebilirsiniz! İş planınıza uygun bir domain adı seçtiğinizden emin olun.

## Barındırma Sağlayıcısı {#hosting-provider}

Artık nişinizi ve işinizi temsil eden dikkat çekici bir domain adınız olduğuna göre, Ultimate Multisite ile ağınızı barındırmak için iyi bir web barındırma şirketi seçmeniz gerekecek. Piyasada bazı iyi seçenekler var. Bazı barındırma sağlayıcıları Ultimate Multisite ile iyi entegre oluyor; bu, ne planladığınıza bağlı olarak belirleyici bir faktör olabilir.

Ultimate Multisite herhangi bir barındırma sağlayıcısında çalışmalıdır. Tek fark, _WPMU DEV Hosting_ , _WP Engine_ , _Closte_ , _Cloudways_ , _Gridpane_ ve _Runcloud_ gibi bazı barındırma şirketlerinin domain eşleştirme konusunda daha sıkı bir entegrasyona sahip olmasıdır. Diğer barındırmalar için ise özel domainleri manuel olarak eşleştirmeniz gerekebilir. Ayrıca AutoSSL destekleyen bir barındırma sağlayıcısı edinmek de iyi bir fikirdir. _Closte_ , _Runcloud_ ve _cPanel_ bunu destekliyor.

Sunucu özelliklerine gelince, belirli bir formül yok çünkü bu, sunacağınız özelliklere ve işlevlere ve ağınızın büyüklüğüne bağlı olacaktır. Paylaşımlı bir barındırma iyi bir başlangıç olabilir, ancak ağınız büyümeye başladığı anda muhtemelen özel bir VPS'a ihtiyacınız olacaktır.

## WordPress Multisite {#wordpress-multisite}

Şimdi, bir WordPress Multisite kurulumundan biraz bahsedelim.

WordPress Multisite, tek bir kurulum üzerinde bir site ağı kurmanıza olanak tanır. Bu yerleşik bir özelliktir, ancak varsayılan olarak aktif değildir. Bu özelliği WordPress kurulumunuz ve web barındırma kontrol paneliniz içinde etkinleştirmeniz gerekir.

WordPress'in Multisite ile etkinleştirilmiş olması **Ultimate Multisite için temeldir**. Ultimate Multisite'ın ana kullanım amacı kullanıcıların siteleri bir hizmet olarak yönetmesine ve satmasına yardımcı olmak olduğundan, bunun WordPress'te Multisite etkinleştirilmiş olarak yapılması gerekir.

WordPress kurulumunuzda Multisite özelliğini etkinleştirmek için adım adım ne yapmanız gerektiğini öğreten **derinlemesine bir makalemiz** var.

WordPress'te Multisite'ı etkinleştirdikten sonra, Ultimate Multisite'ı kurma zamanı gelmiş demektir. Ultimate Multisite'ı doğru bir şekilde kurmak için şunlara sahip olmanız gerekir:

  * WordPress: v5.3+ (Önerilen: En son kararlı sürüm)

  * PHP: 7.4.x (8.0'a kadar destek yakında geliyor)

  * MySQL: v5+ (Önerilen: 5.6, barındırma sağlayıcınızda 8.0 mevcut değilse)

Bunlar Ultimate Multisite için tek yazılım gereksinimleridir.

Ultimate Multisite'ın PHP 8.0 ile çalışabileceğini unutmayın, ancak bunu PHP 7.4.x ile çalıştırmanızı öneririz.

Ayrıca, bunu alt alan adlarında veya alt dizinlerde değil, **ana domainlerde** kurmanızı öneririz. Alt alan adlarında/alt dizinlerde çalışabilir, ancak bazı hatalar gösterebilir.

Ultimate Multisite'ı nasıl kuracağınıza dair ayrıntılı bir rehber için **buraya tıklayın**.
