---
title: Azb Migrasi İş Akışı
sidebar_position: 8
_i18n_hash: f8aebdd695ed2f5b3f074c7aa7d52175
---
# Sovereign Migration Workflow

Ultimate Multisite: Multi-Tenancy 1.2.0 standart bir alt sitesini sovereign kiracı altyapısına taşımak için geçiş doğrulama kapıları ekledi.

## Başlamadan Önce

Şunların olduğundan emin olun:

- Kaynak sitenin güncel bir yedeği.
- Multi-Tenancy eklentisinin aktif olması.
- Hedef kiracı veritabanı, dosya sistemi kökü ve alan adının hazır olması.
- Ağ için hedef ortamla eşleşen bir veritabanı sunucu bağlaması (binding).
- Ağ için WP-CLI komutlarını çalıştırma erişimi.

## Önerilen İş Akışı

1. Hedef kiracı veritabanını ve dosya sistemini hazırla.
2. Kiracı izolasyon ayarlarını kaydet veya güncelle.
3. Kiracı geçişini çalıştır.
4. Kiracı kullanıcılarını sağla veya doğrula.
5. Asenkron geçiş işlerini boşalt (drain).
6. Sovereign geçiş doğrulamasını çalıştır.
7. SSO ile kiracıya git.
8. Doğrulama başarılı olduktan sonra DNS'i veya yönlendirmeyi değiştir.

## Doğrulama Kapıları

Doğrulama iş akışı geçişi birkaç açıdan kontrol eder:

- Kiracı şemasının var olup olmadığı ve kiracı veritabanı yazıcısı tarafından yazılıp yazılamadığı.
- Yapılandırılmış veritabanı sunucusunun geçerli izinlere sahip olup olmadığı.
- Kiracı kullanıcılarının mevcut olup olmadığı ve beklenen sovereign kurulum kullanıcısı sayısıyla eşleşip eşleşmediği.
- Asenkron itme kuyruğunun (async push queue) başarıyla boşaltılıp boşaltılamadığı.
- Eski ağ tarafı veri yollarının artık sovereign kiracı için gerekli olmaması.

Doğrulama hatalarını lansman öncesi engel olarak gör. Bildirilen veritabanı, kullanıcı, kuyruk veya yönlendirme sorununu düzelt, ardından kiracıyı müşterilere açmadan tekrar doğrulama yap.

## İlk Üretim Ziyareti

Doğrulama başarılı olduktan sonra, ilk yönetici ziyareti için site yönetim ekranından **Ziyaret Et (SSO)** özelliğini kullan. Bu, kiracı yönlendirmesini, SSO token işlemlerini, kaynak sabitlemeyi ve kiracı tarafı kullanıcı sağlama işlemini tek bir kontrollü adımda doğrular.
