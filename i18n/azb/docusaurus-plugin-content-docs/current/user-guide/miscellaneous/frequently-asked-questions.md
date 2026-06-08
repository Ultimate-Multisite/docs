---
title: Frequently Asked Questions
sidebar_position: 18
_i18n_hash: 2aae003605ca306aebc782d92f605d7c
---
# Sıkça Sorulan Sorular

Destek taleplerinde sıkça karşılaşılan bazı **Sıkça Sorulan Sorular** aşağıdadır.

  * **Ultimate Multisite nedir?**

Ultimate Multisite, WordPress multisite kurulumları için yapılmış bir WordPress plugin'idir. WordPress kurulumunuzu, [WordPress.com](https://WordPress.com) gibi premium bir site ağına dönüştürür; bu sayede müşterileriniz aylık, üç aylık veya yıllık ücretlerle (ücretsiz planlar oluşturmanız da mümkün) site oluşturabilirler.

  * **Ultimate Multisite Multisite olmadan çalışır mı?**

Hayır. Ultimate Multisite, WordPress multisite, alt dizin (subdirectory) veya alt alan adı (subdomain) gerektirir.

  * **Ultimate Multisite'ın gereksinimleri nelerdir?**

Ultimate Multisite şunları gerektirir:

**WordPress Sürümü** : v5.3+ (Önerilen: En Son Kararlı Sürüm)
**PHP Sürümü** : 7.4.x (8.0'ın üzerine destek yakında gelecek)
**MySQL Sürümü** : v5+ (Önerilen: 5.6 Sürümü, barındırma sağlayıcınızda 8.0 mevcut değilse)

_Multisite'ın (alt alan adı veya alt dizin) etkinleştirilmesi de gereklidir._ [WordPress Multisite Nasıl Kurulur](/user-guide/getting-started/how-to-install-wordpress-multisite).

  * **Ultimate Multisite, Alt Dizini olan Multisite ile çalışır mı?**

Evet. Ultimate Multisite hem alt dizin kurulumlarını hem de alt dizin kurulumlarını destekler.

  * **Ultimate Multisite, Alt Alan Adı olan Multisite ile çalışır mı?**

Evet. Ultimate Multisite hem alt dizin kurulumlarını hem de alt alan adı kurulumlarını destekler.

  * **Ultimate Multisite'ı kullanıcıların hangi Plugin ve Tema'ları kullanabileceğini sınırlamak için kullanabilir miyim?**

Evet. Ultimate Multisite ile ağınızdaki her plan için hangi plugin ve temaların mevcut olacağını seçebilirsiniz.

  * **Ultimate Multisite'ı bir kullanıcının kendi sitesinde oluşturabileceği gönderi sayısını sınırlamak için kullanabilir miyim?**

Evet. Ultimate Multisite ile ağınızdaki **her mevcut gönderi türü** için gönderi kotası belirleyebilirsiniz. Ayrıca yöneticinin davet edebileceği kullanıcı sayısını, **disk alanı miktarını** ve çok daha fazlasını sınırlayabilirsiniz.

  * **Ultimate Multisite Site Şablonlarını (Site Templates) destekliyor mu?**

Evet. Ultimate Multisite ile istediğiniz kadar Site Şablonu oluşturabilirsiniz. Site Şablonları tema değildir; bunlar ağınızdaki normal sitelerdir. Plugin'ları, temaları etkinleştirebilir ve Site Şablonunuzu istediğiniz gibi özelleştirebilirsiniz. Bir kullanıcı bu şablonu seçerse, onun sitesi, tüm özelleştirmeler yerleştirilmiş bir kopyası olarak oluşturulacaktır.

Ayrıca bir plan için özel bir şablon belirleyebilirsiniz. Bunu yaparak, bu planda kayıt olan her kullanıcının sitesi, o Site Şablonu'nun bir kopyası olarak oluşturulacaktır.

  * **Ultimate Multisite, WooCommerce ile entegre olur mu?**

Evet!

Ağ kullanıcılarınızın WooCommerce'a sahip olmasını ve böylece mağazalar kurmalarını istiyorsanız, bu Ultimate Multisite kullanılarak mümkündür. Hatta müşterilerinizin her plan katmanında oluşturabileceği ürün sayısını bile sınırlayabilirsiniz.

Ultimate Multisite için abonelik ödemeleri açısından, ana sitenizde Ultimate Multisite müşterilerinizin WooCommerce ağ geçitlerini kullanarak ödeme yapmasına izin vermek için [Ultimate Multisite: WooCommerce Integration Add-on](https://ultimatemultisite.com/addons/wp-ultimo-woocommerce/) kullanabilirsiniz. Bu sayede, WooCommerce için geliştirilmiş devasa ödeme ağ geçitleri kütüphanesinden yararlanabilir ve Ultimate Multisite müşterilerinizi faturalandırabilirsiniz.

  * **Abonelikleri WPMUDEV Pro Sites'tan taşımanın bir yolu var mı?**

Evet, Ultimate Multisite artık Pro Sites ağınızı [taşımaya yardımcı olacak bir araç](https://ultimatemultisite.com/addons/wp-ultimo-pro-sites-migrator/) sunuyor.

  * **Plan Düzenleme Sayfamda "İzin Verilen Pluginler" sekmesi neden boş?**

Ultimate Multisite, yalnızca ağınızda ağ düzeyinde etkinleştirilmemiş plugin'lara erişimi izin vermenize veya engellemenize olanak tanır. Bir plugin ağ düzeyinde etkinleştirildiğinde, doğası gereği, ağınızdaki her sitede varsayılan olarak yüklenecektir.

"İzin Verilen Pluginler" sekmesinde herhangi bir plugin listelemediğinizi görürseniz, istenen plugin'ın ağ düzeyinde etkin olup olmadığını kontrol edin.

  * **Kendi Fiyat Tablosu tasarımımı kullanabilir miyim?**

Evet. 1.4.0 sürümünden beri Ultimate Multisite, şablon geçersiz kılmalarını (template overrides) destekliyor.

  * **Ultimate Multisite, WP Engine ile çalışır mı?**

Evet. Ultimate Multisite her zaman WP Engine tarafından desteklenmiştir, ancak alan adı eşleştirmesinin çalışması için yönetici tarafından manuel ek adımlar gerekiyordu (alan adını WP Engine paneline eklemek gibi). **1.6.0 sürümünden beri bu durum geçerli değil.** Ultimate Multisite, WP Engine API'si ile doğrudan entegre olur ve eşleştirme yapıldıktan sonra alan adları otomatik olarak panele eklenir.

  * **Hangi barındırma sağlayıcısını önerirsiniz?**

Ultimate Multisite herhangi bir barındırma sağlayıcısıyla çalışmalıdır. Tek fark, Closte, Serverpilot, WPMUDEV, WP Engine, Cloudways, Gridpane ve [Runcloud.io](http://Runcloud.io) gibi bazı barındırma şirketlerinin alan adı eşleştirme yetenekleri için daha sıkı bir entegrasyona sahip olmasıdır, bu yüzden kutudan çıktığı gibi çalışırlar. Diğer barındırma sağlayıcıları için ise alan adı eşleştirmeyi manuel olarak kurmanız gerekebilir.
