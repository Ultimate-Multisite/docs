---
title: Site Exporter Değişiklik Günlüğü
sidebar_position: 99
_i18n_hash: 6ce7f1a3c455b0afe71a841b7b82319a
---
# Site Exporter Değişiklik Günlüğü

Sürüm: 1.0.6 - Yayınlanma Tarihi: 2026-05-11
* Yeni: Site dışa aktarımları artık kendi kendini başlatan bir index.php dosyası içeriyor, böylece ZIP dosyası ayrı bir plugin kurulumu olmadan yeni bir hosting'e kurulabilir.
* Yeni: Ağ dışa aktarımı, yöneticilerin Site Export yönetici sayfasından tüm alt siteleri tek bir arşivde dışa aktarmasına olanak tanır.

Sürüm: 1.0.5 - Yayınlanma Tarihi: 2026-05-05
* Düzeltme: Test başlatma hatalarını önlemek için get_config gibi sahte (mocklanmamış) yöntemleri ele almak üzere WP_CLI polyfill stub'ına __callStatic eklendi.

Sürüm: 1.0.4 - Yayınlanma Tarihi: 2025-11-25

* Ultimate Multisite 2.4 ile uyumluluk düzeltildi.

Sürüm: 1.0.2 - Yayınlanma Tarihi: 2025-09-28

* Öneki ultimate-multisite olarak yeniden adlandırıldı; metin alanı güncellendi; sürüm numarası artırıldı.

### Sürüm 1.0.1 - Yayınlanma Tarihi: 2023-08-09 {#version-101---released-on-2023-08-09}

* İyileştirildi: Artık içe aktarma dosyasının doğru dosya yolunun alındığından emin oluyor.
* Düzeltme: İçe aktarma sırasında hataları önlemek için nesne önbelleği devre dışı bırakıldı.
* Düzeltme: İçe aktarma plugin'inin indirme bağlantısının çalışmaması sorunu düzeltildi.

### Sürüm 1.0.0 - Yayınlanma Tarihi: 2022-12-23 {#version-100---released-on-2022-12-23}

* Düzeltme: Dışa aktarma formu pop-up'ı yüklenmiyordu;
* Düzeltme: Dışa aktarma sayfasında Javascript dosyaları yüklenmiyordu;
* Dahili: Yeni derleme süreci;

### Sürüm 1.0.0-beta.4 - Yayınlanma Tarihi: 2022-01-13 {#version-100-beta4---released-on-2022-01-13}

* Dahili: Hook ve filtre oluşturucu eklendi;
* Dahili: Geliştirici yaşam kalitesi için WP Ultimo stub'ları eklendi;
