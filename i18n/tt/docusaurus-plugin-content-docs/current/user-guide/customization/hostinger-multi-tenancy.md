---
title: Хостингер мультиаренда
sidebar_position: 8
_i18n_hash: d7facb9c131877c2c834bd2184d9a073
---
# Hostinger Multi-Tenancy

Ultimate Multisite: Multi-Tenancy 1.2.0 Hostinger multi-tenancy özelliğini ekler. Bu sayede barındırılan alan adları, mevcut Hostinger alan adı eşleştirme entegrasyonunun yanı sıra egemen kiracı (sovereign tenant) sağlama süreçlerine de katılabilir hale gelir.

Kiracı alan adları ve izole edilmiş kiracı altyapısı Hostinger hPanel üzerinden yönetiliyorsa bu özelliği kullanın.

## Kurulum notları {#setup-notes}

1. Temel Hostinger entegrasyonunu **Ultimate Multisite > Settings > Host Integrations** altında yapılandırın.
2. Hostinger API token'ının hedef alan adını veya alt alan adını yönetebildiğinden emin olun.
3. Multi-Tenancy addon özelliğini etkinleştirin.
4. Kiracıyı yayınlamadan önce kiracı izolasyon stratejisini yapılandırın.
5. Üretim trafiğini kiracıya göndermeden önce geçiş doğrulama iş akışını çalıştırın.

Hostinger özelliği, sunucu tarafı işlemler için paylaşılan Hostinger bağlantısını kullanır. DNS'in hala doğru Hostinger hesabına işaret etmesi ve hPanel hesap limitlerinin geçerli olması gerekir.

## Özelliklere özel değişiklikler {#capability-specific-changes}

- Egemen kiracılar (sovereign tenants), sunucu farkındalığı olan alan adı işlemleriyle oluşturulabilir.
- Veritabanı ana bilgisayar dizinleri aynı makinedeki durumlar için doğrulama yapılmadan önce normalize edilir.
- Hostinger tarafından yönetilen kiracılar, WordPress çalışma zamanının yerel bir geçersiz kılma gerektirmesi dışında hPanel'de gösterilen veritabanı ana bilgisayar değerini kullanmalıdır.
- SSO ziyaretleri, kiracı alan adının Hostinger tarafından barındırılan kiracıya çözülmesiyle çalışır.

## Hostinger kiracılarında sorun giderme {#troubleshooting-hostinger-tenants}

- Bir kiracı kurulumu başarısız olursa, alan adının zaten Hostinger hesabına bağlı olup olmadığını kontrol edin.
- Veritabanı doğrulama başarısız olursa, veritabanı kullanıcı adı, veritabanı adı ve ana bilgisayar bağlamını hPanel ile karşılaştırın.
- **Ziyaret (SSO)** başarısız olursa, kiracı alan adı için DNS'in ve SSL'in aktif olduğundan emin olun.
- Kaldırma işlemi sunucu kaynaklarını geride bırakıyorsa, yedekleri doğruladıktan sonra hPanel'den kalan tüm veritabanlarını, kullanıcıları veya klasörleri kaldırın.
