---
title: ƏDV Changelog
sidebar_position: 99
_i18n_hash: 6a39ef4779b6ed52a08804c75ca25fc9
---
# ƏDV Dəyişikliklər Siyahısı

Versiya 1.0.7 - 2026-02-03 tarixində yayınlandı

* Düzəliş: Almaniya (DE) ƏDV nömrələri VIES SOAP xidməti MS_MAX_CONCURRENT_REQ səhvləri səbəbindən doğrulanmır. Daha etibarlı doğrulaması üçün köhnəlmiş SOAP API-dən rəsmi EU VIES REST API-sinə keçildi.
* Düzəliş: VIES xidməti müvəqqəti olaraq mövcud olmadıqda, ƏDV nömrələri artıq səhv rədd edilmədən qəbul edilir. Sonradan nəzərdən keçirmək üçün bir log qeydi yaradılır.
* Düzəliş: ƏDV/Vergi ID sahəsi indi yalnız Aİ üzvləri üçün deyil, bütün ölkələr üçün görünür. Aİ-dən kənarı vergi ID-ləri (məsələn, İsveçrə CHE nömrələri) VIES doğrulaması olmadan faktura göstərilməsi üçün saxlanılır.
* Düzəliş: Yunanıstan (GR), Monako (MC) və Man adası (IM) üçün ƏDV prefiksinin axtarılması, yanlış massiv axtarış məntiqi səbəbindən pozulmuşdu.
* Təkmilləşdirmə: Site Exporter addon-u ilə birlikdə istifadə edildikdə kritik səhvlərə səbəb ola biləcək lazım olmayan wp-cli-bundle dev asılılığı çıxarıldı.
* Təkmilləşdirmə: Kompleks vahid test dəsti (53 test) əlavə edildi.

Versiya 1.0.6 - 2026-01-25 tarixində yayınlandı

* Düzəliş: Daxili B2B əməliyyatları indi ƏDV-ni düzgün şəkildə hesablayır. Aİ ƏDV qaydalarına əsasən, tərs vergiləndirmə yalnız sərhədlərarası B2B əməliyyatlarına, müştərinin ölkəsi şirkətin ölkəsi ilə eyni olduqda deyil, tətbiq olunur.

Versiya 1.0.5 - 2026-01-22 tarixində yayınlandı

* Düzəliş: Addon yüklənmir və ya düzgün işləmir.
* Dəyişiklik: Daha etibarlı və aktiv şəkildə saxlanılan məlumat üçün ƏDV dərəcəsi mənbəyi euvatrates.com-dan ibericode/vat-rates repozitoriyasına keçirildi.
* Düzəliş: super_reduced_rates seçimi dəyərindəki yazım səhvi düzəldildi.
* Təkmilləşdirmə: Səhvləri qarşısını almaq üçün ölkə kodu idarəetməsinə boş dəyər yoxlamaları əlavə edildi.
* Dəyişiklik: Traduttore vasitəsilə avtomatik yeniləmələrə üstünlük verilməsi ilə birlikdə paketlə verilmiş tərcümə faylları çıxarıldı.

Versiya: 1.0.3 - 2025-09-28 tarixində yayınlandı

* Prefiksi ultimate-multisite olaraq yenilədi; mətn domenini yenilədi; versiya artırıldı.

Versiya 1.0.0-beta.4 - 2021-09-24

* Əlavə edildi: mu-plugins əsaslı quruluşlar üçün wp_ultimo_skip_network_active_check filtri;

Versiya 1.0.0 - 05/08/2021 - İlkin Yayın
