---
title: Site Exporter Changelog
sidebar_position: 99
_i18n_hash: 6ce7f1a3c455b0afe71a841b7b82319a
---
# Site Exporter Değişiklik Günlüğü

Sürüm: 1.0.6 - Yayınlandı: 2026-05-11
* Yeni: Site dışa aktarımları artık kendi kendini başlatan bir index.php dosyası içeriyor. Böylece ZIP dosyasını ayrı bir plugin kurmadan yeni bir sunucuya yükleyebilirsiniz.
* Yeni: Ağ dışa aktarımı, yöneticilerin tüm alt siteleri tek bir arşivde, Site Export yönetici sayfasından dışa aktarmasına olanak tanır.

Sürüm: 1.0.5 - Yayınlandı: 2026-05-05
* Düzeltme: Test başlangıç hatalarını önlemek için, get_config gibi taklit edilmemiş metotları ele almak üzere WP_CLI polyfill stub'ına __callStatic eklendi.

Sürüm: 1.0.4 - Yayınlandı: 2025-11-25

* Ultimate Multisite 2.4 ile uyumluluk düzeltildi.

Sürüm: 1.0.2 - Yayınlandı: 2025-09-28

* Öneki ultimate-multisite olarak yeniden adlandırdık; metin alanını güncelledik; sürüm numarası artırıldı.

### Sürüm 1.0.1 - Yayınlandı: 2023-08-09

* İyileştirildi: Artık içe aktarma dosyasının doğru dosya yolunun alındığından emin oluyor.
* Düzeltildi: İçe aktarma sırasında hataları önlemek için nesne önbelleği devre dışı bırakıldı.
* Düzeltildi: İçe aktarma plugin'inin indirme bağlantısının çalışmaması sorunu düzeltildi.

### Sürüm 1.0.0 - Yayınlandı: 2022-12-23

* Düzeltildi: Dışa aktarma formu pop-up'ı yüklenmiyordu;
* Düzeltildi: Dışa aktarma sayfasında Javascript dosyaları yüklenmiyordu;
* Dahili: Yeni derleme süreci;

### Sürüm 1.0.0-beta.4 - Yayınlandı: 2022-01-13

* Dahili: Hook ve filtre oluşturucu eklendi;
* Dahili: Geliştiricilerin işini kolaylaştırmak için WP Ultimo stub'ları eklendi;
