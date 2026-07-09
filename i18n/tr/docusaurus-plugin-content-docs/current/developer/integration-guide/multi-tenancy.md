---
title: Çok Kiracılılık Entegrasyonu
sidebar_position: 6
_i18n_hash: 3cf63ea3f0dba9dcf2a8fc74478aedbb
---
# Multi-Tenancy Entegrasyonu {#multi-tenancy-integration}

Ultimate Multisite: Multi-Tenancy 1.2.0; sovereign kiracılar, geçiş doğrulaması ve kiracı yaşam döngüsü otomasyonu için çeşitli entegrasyon temas noktalarını değiştirir.

## Kiracı bootstrap akışı {#tenant-bootstrap-flow}

Kiracı oluşturan veya değiştiren entegrasyonlar şu sırayı izlemelidir:

1. Kiracı kayıt kaydını ve izolasyon modelini çözümleyin.
2. Kiracı veritabanı yazıcısını oluşturun veya doğrulayın.
3. Kiracı şemasını bootstrap edin.
4. Kiracı kullanıcılarını sağlayın.
5. Kiracı yönlendirmesini ve dosya sistemi yollarını kaydedin.
6. Kiracıyı erişime açmadan önce geçiş doğrulamasını çalıştırın.

Bir sovereign kiracının ağ veritabanı bağlantısını yeniden kullanabileceğini varsaymayın. Addon tarafından sağlanan kiracı kaydı ve yazıcı soyutlamalarını kullanın.

## SSO ve REST hook’ları {#sso-and-rest-hooks}

Durumsuz kiracı otomatik oturum açma; amaç claim’i, JTI yeniden oynatma koruması, sona erme üst sınırı ve origin sabitlemesi içeren kısa ömürlü token’lar kullanır. Giriş düğmeleri veya uzaktan yönetim bağlantıları ekleyen entegrasyonlar, kiracı giriş URL’lerini doğrudan oluşturmak yerine desteklenen SSO akışı üzerinden kiracı ziyaretleri oluşturmalıdır.

Ağ tarafı API denetim olayları ve günlük özetler, sovereign kiracı ağ geçitleri için kullanılabilir. Kiracı yaşam döngüsü endpoint’lerini çağıran harici sistemlerde hata ayıklarken bu günlükleri kullanın.

## Sovereign müşteri işlem URL’leri {#sovereign-customer-action-urls}

Ultimate Multisite v2.13.0, sovereign-kiracı müşteri işlemlerini; Account, checkout, faturalandırma, fatura, site, şablon değiştirme ve domain-mapping akışları için ana siteye geri yönlendirir. Kiracı tarafı yönetim bağlantıları oluşturan entegrasyonlar, bu işlemleri ana site müşteri paneline yönlendirmeli ve kullanıcının işlemi tamamladıktan sonra kiracıya geri dönebilmesi gerekiyorsa doğrulanmış bir dönüş hedefi içermelidir.

Alanlar arası yönetim bağlantıları için çekirdek SSO sarmalayıcısını kullanın:

```php
$url = wu_with_sso($main_site_customer_url);
```

Oluşturulan URL, SSO URL’sini, mevcut kullanıcıyı, hedef site ID’sini ve yönlendirme bağlamını alan `wu_sso_url` üzerinden filtrelenebilir kalır. Add-on’lar, sağlayıcıya özgü bağlam eklemek veya Ultimate Multisite’ın token doğrulamasını korurken aracı URL’sini değiştirmek için bu filtreyi kullanabilir.

Üyelik, fatura, fatura adresi, şablon veya domain yönetimi durumunu sovereign kiracının içinde çoğaltmayın. Kiracı Dashboard’unu başlatıcı, ana site müşteri panelini ise yönetilen işlemler için kayıt sistemi olarak ele alın.

## Geçiş doğrulaması {#migration-verification}

Bir geçiş veya yaşam döngüsü entegrasyonu kiracı verilerini değiştirdikten sonra doğrulama kapılarını çalıştırın:

- `wp tenant verify-no-legacy --site=<site-id>`, kiracının artık eski ağ tarafı yollara bağlı olmadığını doğrular.
- `wp tenant verify-sovereign-push --site=<site-id>`, sovereign push işlerinin işlenip boşaltılabildiğini doğrular.

Entegrasyonlar, başarısız doğrulamayı bir dağıtım engelleyicisi olarak ele almalı ve hata çözülene kadar kiracıyı canlı olarak işaretlemekten kaçınmalıdır.

## Kiracı silme {#tenant-deletion}

Silme akışları, kiracı veritabanı kimlik bilgilerinin temizlenmesi için addon teardown yolunu çağırmalıdır. Harici entegrasyonlar, teardown başarılı olduktan sonra sağlayıcı kaynaklarını kaldırabilir; ancak doğrulama veya async push işleri hâlâ çalışırken host veritabanlarını ya da klasörleri silmemelidir.

## Kullanımdan kaldırılmış veritabanı yönlendiricisi {#deprecated-database-router}

Eski `Database_Router`, kullanımdan kaldırma stub’ı ile değiştirilmiştir. Yeni entegrasyonlar, eski yönlendirici sınıfına bağlı kalmak yerine mevcut site yönlendiricisi ve kiracı kayıt API’leri üzerinden kiracıları çözümlemelidir.
