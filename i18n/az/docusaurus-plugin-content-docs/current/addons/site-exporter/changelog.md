---
title: Site Exporter Changelog
sidebar_position: 99
_i18n_hash: 6ce7f1a3c455b0afe71a841b7b82319a
---
# Site Exporter Değişiklik Qeydi

Version: 1.0.6 - Yayınlanma tarixi: 2026-05-11
* Yeni: Sayt ixracları indi özünü işə salan bir index.php paketləyir ki, ZIP faylı ayrı bir plugin quraşdırması olmadan yeni bir hosta yerləşdirilsin.
* Yeni: Şəbəkə ixracı administratorlara Site Export admin səhifəsindən bütün alt-saytları tək bir arxivdə ixrac etməyə imkan verir.

Version: 1.0.5 - Yayınlanma tarixi: 2026-05-05
* Düzəliş: Test başlatma səhvlərinin qarşısını almaq üçün get_config kimi mock edilməmiş metodları idarə etmək üçün WP_CLI polyfill stub-una __callStatic əlavə edildi.

Version: 1.0.4 - Yayınlanma tarixi: 2025-11-25

* Düzəliş: Ultimate Multisite 2.4 ilə uyğunluq.

Version: 1.0.2 - Yayınlanma tarixi: 2025-09-28

* Prefiksi ultimate-multisite olaraq dəyişdirdik; mətn domenini yenilədik; versiya artırıldı.

### Version 1.0.1 - Yayınlanma tarixi: 2023-08-09 {#version-101---released-on-2023-08-09}

* Təkmilləşdirildi: İdxal faylının düzgün fayl yolunun əldə edilməsini təmin edir.
* Düzəliş: İdxal zamanı səhvlərin qarşısını almaq üçün obyekt cache-i deaktiv edildi.
* Düzəliş: İdxal plugin-inin yükləmə linkinin işləməməsi problemi aradan qaldırıldı.

### Version 1.0.0 - Yayınlanma tarixi: 2022-12-23 {#version-100---released-on-2022-12-23}

* Düzəliş: İxrac forması pop-up-u yüklənmirdi;
* Düzəliş: İxrac səhifəsində Javascript faylları yüklənmirdi;
* Daxili: Yeni build prosesi;

### Version 1.0.0-beta.4 - Yayınlanma tarixi: 2022-01-13 {#version-100-beta4---released-on-2022-01-13}

* Daxili: Hooks və filters generatoru əlavə edildi;
* Daxili: Developer üçün rahatlığı artırmaq məqsədilə WP Ultimo stub-ları əlavə edildi;
