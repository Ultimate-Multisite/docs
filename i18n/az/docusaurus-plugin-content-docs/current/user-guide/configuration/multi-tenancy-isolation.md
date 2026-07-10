---
title: ÇoxMənzilli İzolasiya
sidebar_position: 12
_i18n_hash: 5aaf1504c3022f94b9aec9faaa4eda22
---
# Çox-Mənzillik İzolasiyası (Multi-Tenancy Isolation) {#multi-tenancy-isolation}

Ultimate Multisite: Multi-Tenancy 1.2.0 müstəqil mənzillər üçün hər alt sayt üçün verilənlər bazası və fayl sisteminin izolasiyasını dəstəkləyir. Bu, mənzilin məlumatlarını ayırara və şəbəkə səviyyəsində təminat, fatura və idarəetməni qoruyaraq saxlayır.

## İzolasiya strategiyası (Isolation strategy) {#isolation-strategy}

Daha güclü məlumat ayrılığı, xüsusi fayl sistemi saxlama yeri və ya ayrı host sərhədləri tələb edən müştərilər üçün mütləq mənzillik izolasiyasından istifadə edin.

Hər bir mütəxəssis mənzil (sovereign tenant) aşağıdakılara malik olmalıdır:

- Host tərəfindən təsdiqlənmiş xüsusi mənzil verilənlər bazası və ya verilənlər bazası prefix strategiyası.
- Xüsusi mənzil fayl sistemi kök (root).
- Saytı onun verilənlər bazasına, kök yoluna, host adına və izolasiya modelinə əlaqələndirən bir mənzil qeydi (tenant registry entry).
- Mənzilin canlı hesab edilməzdən əvvəl migrasiya yoxlama nəticəsi.

## Verilənlər bazası host bağlama (Database host binding) {#database-host-binding}

Versiya 1.2.0 müstəqil quraşdırmalar üçün standart eyni maşın host bağlama davranışını dəyişir. `localhost` kimi eyni maşın dəyərləri normalizə olunur ki, Bedrock, FrankenPHP və konteynerləşdirilmiş WordPress quraşdırmaları MySQL-in əsl gördüyü host stringə qarşı icazələr verə və yoxlaya bilsin.

Müstəqil bir mənzil konfiqurasiya edərkən:

1. Verilənlər bazası hostunu mənzilin işləməsi üçün tələb olunan dəyərə təyin edin.
2. Host yerli bağlantıları gözləyirsə, yerli soket quraşdırmaları üçün `localhost` istifadə edin.
3. Verilənlər bazası serveri həmin hosta imtiyazlar verdiyində və yalnız servis adı (service hostname) istifadə edin.
4. Host bağlamasını dəyişdikdən sonra migrasiya yoxlamasını işlədin.

Yoxlama qeyri-icazə (grant failures) göstərirsə, mənzilin DB istifadəçi imtiyazlarını konfiqurasiya edilmiş host bağlaması ilə müqayisə edin. `user@localhost` üçün verilmiş bir istifadəçi `user@127.0.0.1` və ya `user@%` ilə fərqlidir.

## Fayl sistemi kökü (Filesystem root) {#filesystem-root}

Kirayədar kök (tenant root) yenidən başladılardan və inteqrasiyalardan sonra sabit olmalıdır. Müvəqqəti mount yollardan çəkinin. Bedrock üslublu quraşdırmalar üçün, kirayədar kökün yalnız layihə kökünü deyil, həm də kirayədar bootstrap-unun gözlədiyi WordPress veb kökü ilə əlaqələndiyini təsdiqləyin.

## Təminat sırası (Provisioning order) {#provisioning-order}

Yeni suveren kirayədarlar üçün bu sıradan istifadə edin:

1. Kirayədar qeydiyyatı daxil olmasını yaradın (Create the tenant registry entry).
2. Kirayədar verilənlər bazasını və verilənlər bazası istifadəçisini yaradın (Create the tenant database and database user).
3. Kirayədar sxemini bootstrap edin (Bootstrap the tenant schema).
4. Kirayədar istifadəçilərini təmin edin (Provision tenant users).
5. Kirayədar fayl sisteminin yollarını konfiqurasiya edin (Configure tenant filesystem paths).
6. Migrasiya yoxlamasını işlədin (Run migration verification).
7. Yoxlama keçdikdən sonra yönləndirməni və ya DNS-i dəyişin (Switch routing or DNS after verification passes).

Bu sıra, verilənlər bazası yazıcısı, istifadəçilər və fayl sisteminin hazır olmasından əvvəl qismən izolyasiya edilmiş kirayədarların trafik almasını önləyir.

## Suveren müştəri idarəetmə axınları (Sovereign customer management flows) {#sovereign-customer-management-flows}

Ultimate Multisite v2.13.0 suveren rejimi aktiv olduqda müştəri idarəetmə əməliyyatlarını əsas saytda saxlayır. Kirayədar yalnız izolyasiya edilmiş bir WordPress quraşdırması kimi işləyə bilər, lakin şəbəkə üzərində faturalaşma, üzvlük və ya ortaq hesab məlumatlarına bağlı müştəri ilə qarşılıqlı əlaqəli əməliyyatlar kirayədar icra zamanı tamamlanmağa çalışmaq əvəzinə müştəri saytda yenidən yönləndirilməlidir.

Əsas sayt axını aşağıdakılara tətbiq edilir:

- Checkout və plan dəyişiklikləri (Checkout and plan changes).
- Hesab ümumi görünüşü və müştəri profili əməliyyatları (Account overview and customer profile actions).
- Faturalandırma ünvanı yeniləmələri və ödəniş idarəetmə ekranları (Billing address updates and payment-management screens).
- Fatura və ödəniş tarixi görünüşləri (Invoice and payment-history views).
- Saytların əlavə edilməsi və ya silinməsi kimi sayt idarəetmə əməliyyatları (Site management actions such as adding sites or deleting a site).
- Şablon dəyişikliyi (Template switching).
- Domen xəritələnməsi və əsas domen dəyişiklikləri (Domain mapping and primary-domain changes).

Müştəri bu fəaliyyətlərdən birini müstəqil (sovereign) tenantdan başladığı zaman, Ultimate Multisite müvafiq ana sayt URL-ni yaradır və əgər etmək təhlükəsizdirsə, mənbəki tenantı geri dönmə hədəfi kimi saxlayır. Bu, müştərilərin idarə olunan fəaliyyəti şəbəkə qeydləri ilə tamamlamasına imkan verir və bu zaman müstəqil verilənlər bazasında fatura və üzvlük statusunu təkrar yaratmadan tenant kontekstinə geri dönməsinə imkan yaradır.

Operatorlər üçün əsl qayda belədir: müstəqil şəbəkələr üçün fatura, hesab, checkout (ödəm), faktura, template və domen idarəetmə səhifələri ana saytda mövcud olmalıdır. Tenant panelləri bu səhifələrə link verə bilər, lakin fəaliyyət üçün ana sayt həmişə əsas mənbə (source of truth) qalır.
