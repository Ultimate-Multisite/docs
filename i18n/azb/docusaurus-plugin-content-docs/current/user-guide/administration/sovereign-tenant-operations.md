---
title: Müstəqil İcarəçi Əməliyyatları
sidebar_position: 15
_i18n_hash: bcde2032a685b60e17f1944b5b588f25
---
# Sovereign Tenant Operasyonları

Ultimate Multisite: Multi-Tenancy 1.2.0, egemen kiracılar (sovereign tenants) için operasyonel araçlar ekler: bunlar kendi veritabanılarına, dosya sistemi köklerine ve yönlendirme bağlamlarına sahip olan ancak ağ yöneticisinden görünen alt sitelerdir.

Bu sayfayı izole edilmiş müşteri sitelerini yönetirken, uzak site devir teslimlerinde veya standart bir alt siteyi egemen altyapıya taşıyan geçişlerde kullanın.

## Yöneticiler için değişiklikler

- **Durumsuz kiracı otomatik girişi (Stateless tenant autologin)** — Ağ yöneticileri, uzun süreli paylaşılan oturum durumuna güvenmeden bir egemen kiracıyı ziyaret edebilir. SSO token'ı amaç odaklıdır (purpose-scoped), kaynağa sabitlenmiştir (origin-pinned), tekrar oynatılmaya karşı korunur (replay-protected) ve kısa bir süre sonra sona ermesi için sınırlıdır.
- **Egemen farkındalığı olan yönlendirme (Sovereign-aware routing)** — Eski izole ağlar ve egemen kiracılar aynı site yönlendirici yolu üzerinden çözülür, bu da eski ve yeni izole kurulumlar arasındaki başlangıç farklılıklarını azaltır.
- **Doğrulanmış geçiş durumu (Verified migration state)** — Bir kiracı tamamlanmış kabul edilmeden önce kullanıcı sağlama, veritabanı yazıcı izinleri, kuyruk boşaltma durumu ve eski tablo yokluğu gibi kontrolleri yapar.
- **Daha güvenli kaldırma (Safer teardown)** — Egemen kaldırma artık kiracı kimlik bilgilerini temiz bir şekilde kaldırır, böylece silinen kiracılar arka planda kalmış veritabanı erişimine neden olmaz.

## Bir egemen kiracıyı ziyaret etme

1. **Network Admin > Ultimate Multisite > Sites** yolunu açın.
2. Egemen kiracıyı seçin.
3. Mümkün olduğunda şifre kopyalamak veya geçici yönetici hesapları oluşturmak yerine **Visit (SSO)** özelliğini kullanın.

Ziyaret akışı o kiracı için kısa ömürlü bir giriş token'ı oluşturur ve SSO olayını kiracının denetim izine kaydeder. Buton başarısız olursa, kiracı alan adının beklenen kurulumla eşleşip eşleşmediğini ve kiracının ağ tarafındaki SSO uç noktasına ulaşıp ulaşmadığını kontrol edin.

## Uzak site operasyonları kontrol listesi

Bir egemen veya uzak kiracıyı değiştirmeden önce şunları doğrulayın:

## Sovereign kiralar silinmesi

Bir egemen kirayı silmek geri alınamaz bir işlemdir. Önce yedekleme ve dışa aktarma durumunu kontrol edin, ardından site yönetim ekranından silme işlemini yapın. 1.2.0 kaldırma akışı temizlik sırasında kiracı veritabanı kimlik bilgilerini kaldırır, ancak harici hosting panelleri kullanırken sunucu düzeyindeki veritabanı kullanıcılarının ve klasörlerinin de gitmiş olduğundan emin olmalısınız.

:::warning
Migration doğrulama hala çalışırken veya asenkron itme işleri kuyruklanmışken egemen bir kirayı silmeyin. Kaldırma işlemi, bekleyen işler için gerekli olan kimlik bilgilerini kaldırmaması için doğrulamayı tamamlanmasını bekleyin.
