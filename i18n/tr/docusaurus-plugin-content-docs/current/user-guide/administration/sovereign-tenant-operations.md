---
title: Egemen Kiracı Operasyonları
sidebar_position: 15
_i18n_hash: bcde2032a685b60e17f1944b5b588f25
---
# Egemen Kiracı Operasyonları {#sovereign-tenant-operations}

Ultimate Multisite: Multi-Tenancy 1.2.0, egemen kiracılar için operasyonel araçlar ekler: kendi veritabanına, dosya sistemi kök dizinine ve yönlendirme bağlamına sahip olan ancak ağ yöneticisinden görünür kalabilen alt siteler (subsites).

İzolasyonlu müşteri sitelerini yönetirken, uzak site devir teslimlerinde veya standart bir alt siteyi egemen altyapıya taşıyan geçişlerde bu sayfayı kullanın.

## Yöneticiler için değişiklikler nelerdir? {#what-changes-for-administrators}

- **Durumsuz kiracı otomatik girişi (Stateless tenant autologin)** — Ağ yöneticileri, uzun süreli paylaşılan oturum durumuna güvenmeden egemen bir kiracıyı ziyaret edebilir. SSO token'ı amaç odaklıdır (purpose-scoped), kaynağa sabitlenmiştir (origin-pinned), tekrar oynatılmaya karşı korunur (replay-protected) ve kısa bir süre için sınırlıdır.
- **Egemen farkındalığı olan yönlendirme (Sovereign-aware routing)** — Eski izole ağlar ve egemen kiracılar aynı site yönlendirici yolu üzerinden çözülür, bu da eski ve yeni izole kurulumlar arasındaki başlangıç farklılıklarını azaltır.
- **Doğrulanmış geçiş durumu (Verified migration state)** — Geçiş doğrulama kontrolleri, bir kiracı tamamlanmış kabul edilmeden önce kullanıcı sağlama, veritabanı yazıcı izinleri, kuyruk boşaltma durumu ve eski tablo yokluğunu kontrol eder.
- **Daha güvenli kaldırma (Safer teardown)** — Egemen kaldırma artık kiracı kimlik bilgilerini temiz bir şekilde kaldırır, böylece silinen kiracılar arka planda kalmış eski veritabanı erişimine neden olmaz.

## Bir egemen kiracıyı ziyaret etme {#visiting-a-sovereign-tenant}

1. **Network Admin > Ultimate Multisite > Sites** yolunu açın.
2. Egemen kiracıyı seçin.
3. Şifre kopyalamak veya geçici yönetici hesapları oluşturmak yerine mevcutsa **Ziyaret Et (SSO)** özelliğini kullanın.

Ziyaret akışı o kiracı için kısa ömürlü bir oturum açma token'ı oluşturur ve SSO olayını kiracı denetim izine kaydeder. Düğme başarısız olursa, kiracı alanının beklenen kurulumla eşleşip eşleşmediğini ve kiracının ağ tarafındaki SSO uç noktasına ulaşıp ulaşmadığını kontrol edin.

## Uzak site operasyonları kontrol listesi {#remote-site-operations-checklist}

Bir egemen veya uzak kiracıyı değiştirmeden önce şunları doğrulayın:

Kiracı alan adı, kiracının dosya sistemini barındıran ana sunucuya işaret eder.
Kiracı veritabanı ana sunucusu, o kurulum için yapılandırılmış ana bilgisayar bağlamıyla eşleşir.
Taşıma doğrulama komutları kiracı için başarılı olur.
Asenkron taşıma kuyrukları, DNS veya sahiplik değişiklikleri yapılmadan boşaltılır.
Kiracı yönetici kullanıcısı taşıma sırasında oluşturulmuş ve SSO üzerinden giriş yapabilir.

## Egemen kiracı silme {#deleting-sovereign-tenants}

Bir egemen kiracıyı silmek yıkıcıdır. Öncelikle yedekleme ve dışa aktarma durumunu doğrulayın, ardından site yönetim ekranından silin. 1.2.0 kapatma akışı temizlik sürecinin bir parçası olarak kiracı veritabanı kimlik bilgilerini kaldırır, ancak harici hosting panelleri kullanırken ana bilgisayar düzeyindeki veritabanı kullanıcılarının ve klasörlerinin gitmediğini yine de kontrol etmelisiniz.

:::warning
Taşıma doğrulama hala çalışırken veya asenkron itme işleri kuyruklanmışken egemen bir kiracıyı silmeyin. Kapatma işlemi, bekleyen işler için gerekli olan kimlik bilgilerini kaldırmaması için doğrulamayı tamamlanmasını bekleyin.
:::
