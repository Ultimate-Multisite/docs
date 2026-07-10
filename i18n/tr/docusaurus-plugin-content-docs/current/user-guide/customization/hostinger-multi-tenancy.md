---
title: Hostinger Çoklu Kiracılık
sidebar_position: 8
_i18n_hash: d7facb9c131877c2c834bd2184d9a073
---
# Hostinger Çoklu Kiracılık {#hostinger-multi-tenancy}

Ultimate Multisite: Multi-Tenancy 1.2.0, barındırılan alan adlarının mevcut Hostinger alan eşleştirme entegrasyonunun yanı sıra egemen kiracı sağlama (sovereign tenant provisioning) ile birlikte yer alabilmesi için bir Hostinger çoklu kiracılık yeteneği ekler.

Kiracı alan adları ve izole edilmiş kiracı altyapısı Hostinger hPanel aracılığıyla yönetiliyorsa bu yeteneği kullanın.

## Kurulum notları {#setup-notes}

1. Temel Hostinger entegrasyonunu **Ultimate Multisite > Ayarlar > Host Entegrasyonları** altında yapılandırın.
2. Hostinger API token'ının hedef alanı veya alt alan adını yönetebildiğini doğrulayın.
3. Çoklu Kiracılık eklentisini etkinleştirin.
4. Kiracıyı yayınlamadan önce kiracı izolasyon stratejisini yapılandırın.
5. Üretim trafiğini kiracıya göndermeden önce geçiş doğrulama iş akışını çalıştırın.

Hostinger yeteneği, sunucu tarafı işlemleri için paylaşılan Hostinger bağlantısını kullanır. DNS'in hala doğru Hostinger hesabına işaret etmesi ve hPanel hesap limitlerinin geçerli olması gerekir.

## Yeteneğe özel değişiklikler {#capability-specific-changes}

- Egemen kiracılar, sunucu farkındalığı olan alan adı işlemleriyle oluşturulabilir.
- Aynı makine üzerindeki veritabanı ana bilgisayar dizinleri, doğrulama yapılmadan önce normalleştirilir.
- Hostinger tarafından yönetilen kiracılar, WordPress çalışma zamanının yerel bir geçersiz kılma gerektirmesi olmadıkça hPanel'de gösterilen veritabanı ana bilgisayar değerini kullanmalıdır.
- SSO ziyaretleri, kiracı alan adının Hostinger tarafından barındırılan kiracıya çözülmesine dayanır.

## Hostinger kiracılarında sorun giderme {#troubleshooting-hostinger-tenants}

- Bir kiracı kurulumu başarısız olursa, alan adının zaten Hostinger hesabına bağlı olup olmadığını doğrulayın.
- Veritabanı doğrulaması başarısız olursa, kiracı DB kullanıcı adını, veritabanı adını ve ana bilgisayar bağlamını hPanel ile karşılaştırın.
- **Ziyaret (SSO)** başarısız olursa, DNS'in ve SSL'in kiracı alanı için aktif olup olmadığını kontrol edin.
- Kaldırma işlemi sunucu kaynaklarını geride bırakıyorsa, yedekleri doğruladıktan sonra hPanel'den kalan herhangi bir veritabanını, kullanıcıyı veya klasörü kaldırın.
