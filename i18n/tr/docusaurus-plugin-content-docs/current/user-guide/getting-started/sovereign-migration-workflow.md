---
title: Egemen Taşıma İş Akışı
sidebar_position: 8
_i18n_hash: f8aebdd695ed2f5b3f074c7aa7d52175
---
# Egemen Taşıma İş Akışı

Ultimate Multisite: Multi-Tenancy 1.2.0, standart bir alt siteyi egemen kiracı altyapısına taşımak için taşıma doğrulama kapıları ekler.

## Başlamadan Önce {#before-you-start}

Şunların olduğundan emin olun:

- Kaynak sitenin güncel bir yedeği.
- Multi-Tenancy eklentisinin aktif olması.
- Hedef kiracı veritabanı, dosya sistemi kökü ve alan adının hazır olması.
- Hedef ortamla eşleşen bir veritabanı sunucu bağlaması (binding).
- Ağ için WP-CLI komutlarını çalıştırma erişimi.

## Önerilen İş Akışı {#recommended-workflow}

1. Hedef kiracı veritabanını ve dosya sistemini hazırlayın.
2. Kiracı izolasyon ayarlarını kaydedin veya güncelleyin.
3. Kiracı taşıma işlemini çalıştırın.
4. Kiracı kullanıcılarını sağlama (provision) veya doğrulama yapın.
5. Asenkron taşıma işlerini boşaltın (drain).
6. Egemen taşıma doğrulaması çalıştırın.
7. SSO ile kiracıya gidin.
8. Doğrulama geçtikten sonra DNS'i veya yönlendirmeyi değiştirin.

## Doğrulama Kapıları {#verification-gates}

Doğrulama iş akışı taşımayı çeşitli açılardan kontrol eder:

- Kiracı şemasının mevcut olması ve kiracı veritabanı yazıcısı tarafından yazılabilir olması.
- Yapılandırılmış veritabanı sunucusunun geçerli izinlere sahip olması.
- Kiracı kullanıcılarının bulunması ve beklenen egemen kurulum kullanıcısı sayısıyla eşleşmesi.
- Asenkron itme kuyruğunun (async push queue) başarıyla boşaltılabilmesi.
- Egemen kiracı için artık eski ağ tarafı veri yollarının gerekmemesi.

Doğrulama hatalarını lansman öncesi engel olarak görün. Bildirilen veritabanı, kullanıcı, kuyruk veya yönlendirme sorununu düzeltin, ardından kiracıyı müşterilere açmadan tekrar doğrulama yapın.

## İlk Üretim Ziyareti {#first-production-visit}

Doğrulama başarıyla geçtikten sonra, ilk yönetici ziyareti için site yönetim ekranından **Ziyaret Et (SSO)** özelliğini kullanın. Bu, kiracı yönlendirmesini, SSO token işleme, kaynak sabitleme ve kiracı tarafı kullanıcı sağlama işlemlerini tek bir kontrollü adımda doğrular.
