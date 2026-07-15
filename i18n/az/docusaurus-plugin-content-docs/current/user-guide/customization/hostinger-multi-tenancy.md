---
title: Hostinger ÇoxMənzilli İdarəetmə
sidebar_position: 8
_i18n_hash: d7facb9c131877c2c834bd2184d9a073
---
# Hostinger Multi-Tenancy

Ultimate Multisite: Multi-Tenancy 1.2.0, Ultimate Multisite: Multi-Tenancy 1.2.0, bir Hostinger multi-tenancy imkanı əlavə edir ki, host edilmiş domenlər mövcud Hostinger domen xəritəsi inteqrasiyası ilə yanaşı müstəqil kirayəçilər (tenant) təmin edilməsinə iştirak edə bilsin.

Bu funksiyanı kirayəçi domenləri və izolyasiya edilmiş kirayəçi infrastrukturunun Hostinger hPanel vasitəsilə idarə olunduğu zaman istifadə edin.

## Qurumlaşdırma qeydləri {#setup-notes}

1. Əsas Hostinger inteqrasiyasını **Ultimate Multisite > Settings > Host Integrations** altında konfiqurasiya edin.
2. Hostinger API tokeninin hədəf domen və ya alt domenini idarə edə biləcəyini təsdiqləyin.
3. Multi-Tenancy addonunu aktivləşdirin.
4. Kirayəçini yayınlamadan əvvəl kirayəçi izolyasiya strategiyasını konfiqurasiya edin.
5. Produksiya trafikini kirayəçiyə göndərməzdən əvvəl migrasiya yoxlama iş axınını (migration verification workflow) icra edin.

Hostinger funksionallığı host tərəfindəki əməliyyatlar üçün ortaq Hostinger bağlantısından istifadə edir. DNS hələ də düzgün Hostinger hesabına yönəlməlidir və hPanel hesabı limitləri tətbiq olunur.

## Funksiyaya xas dəyişikliklər {#capability-specific-changes}

- Mövcud kirayəçilər host-fərqləndirməli domen əməliyyatları ilə yaradıla bilər.
- Eyni maşın üzərindəki verilənlər bazası host sətirləri təsdiqdan əvvəl normalizə olunur.
- Hostinger tərəfindən idarə olunan kirayəçilər, WordPress runtime yerli üstələmə (local override) tələb etmədiyi halda hPanel-də göstərilən verilənlər bazası host dəyərindən istifadə etməlidir.
- SSO ziyarətleri kirayəçi domeninin Hostinger tərəfindən host edilmiş kirayəçiyə yönəlməsindən asılıdır.

## Hostinger kirayəçilərində problemlərin həlli {#troubleshooting-hostinger-tenants}

- Əgər kirayəçi quraşdırması uğursuz olarsa, domen Hostinger hesabına artıq bağlı olduğunu yoxlayın.
- Əgər verilənlər bazası təsdiqi uğursuz olarsa, kirayəçi DB istifadəçisi adını, verilənlər bazası adını və host bağlamasını hPanel ilə müqayisə edin.
- Əgər **Visit (SSO)** uğursuz olarsa, kirayəçi domen üçün DNS və SSL aktiv olduğunu təsdiqləyin.
- Əgər təmizləmə zamanı host resursları geridə qalsa, ehtiyat nüsxələrini təsdiq etdikdən sonra hPanel-dən bütün qalan verilənlər bazalarını, istifadəçiləri və qovluqları aradan asılı olun.
