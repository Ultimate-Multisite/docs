---
title: Çoxkirayəçilik inteqrasiyası
sidebar_position: 6
_i18n_hash: 3cf63ea3f0dba9dcf2a8fc74478aedbb
---
# Multi-Tenancy inteqrasiyası

Ultimate Multisite: Multi-Tenancy 1.2.0 suveren icarəçilər, miqrasiya yoxlaması və icarəçi həyat dövrünün avtomatlaşdırılması üçün bir neçə inteqrasiya təmas nöqtəsini dəyişir.

## İcarəçi ilkin işə salma axını

İcarəçilər yaradan və ya dəyişdirən inteqrasiyalar bu ardıcıllığa əməl etməlidir:

1. İcarəçi reyestri qeydini və izolyasiya modelini müəyyən edin.
2. İcarəçi verilənlər bazası yazıcısını yaradın və ya yoxlayın.
3. İcarəçi sxemini ilkin işə salın.
4. İcarəçi istifadəçilərini təmin edin.
5. İcarəçi marşrutlamasını və fayl sistemi yollarını qeydiyyatdan keçirin.
6. İcarəçini istifadəyə açmazdan əvvəl miqrasiya yoxlamasını işə salın.

Suveren icarəçinin şəbəkə verilənlər bazası bağlantısından yenidən istifadə edə biləcəyini güman etməyin. Əlavə tərəfindən təqdim edilən icarəçi reyestri və yazıcı abstraksiyalarından istifadə edin.

## SSO və REST hook-ları

Vəziyyətsiz icarəçi avtomatik girişi məqsəd claim-i, JTI təkrar istifadə qorunması, bitmə müddəti həddi və mənbə bağlanması olan qısaömürlü token-lərdən istifadə edir. Giriş düymələri və ya uzaqdan idarəetmə linkləri əlavə edən inteqrasiyalar icarəçi giriş URL-lərini birbaşa qurmaq əvəzinə dəstəklənən SSO axını vasitəsilə icarəçi ziyarətləri yaratmalıdır.

Şəbəkə tərəfli API audit hadisələri və gündəlik xülasələr suveren icarəçi gateway-ləri üçün əlçatandır. İcarəçi həyat dövrü endpoint-lərini çağıran xarici sistemləri sazlayarkən həmin loqlardan istifadə edin.

## Suveren müştəri əməliyyat URL-ləri

Ultimate Multisite v2.13.0 suveren icarəçi müştəri əməliyyatlarını hesab, ödəniş tamamlanması, hesablaşma, qaimə, sayt, şablon dəyişdirmə və domen xəritələmə axınları üçün əsas sayta yönləndirir. İcarəçi tərəfli idarəetmə linklərini göstərən inteqrasiyalar bu əməliyyatları əsas saytın müştəri panelinə yönəltməli və istifadəçi əməliyyatı tamamladıqdan sonra icarəçiyə qayıda bilməlidirsə, təsdiqlənmiş qayıdış hədəfi daxil etməlidir.

Domenlərarası idarəetmə linkləri üçün əsas SSO wrapper-indən istifadə edin:

```php
$url = wu_with_sso($main_site_customer_url);
```

Yaradılan URL `wu_sso_url` vasitəsilə filterlənə bilən olaraq qalır; bu filter SSO URL-ni, cari istifadəçini, hədəf sayt ID-sini və yönləndirmə kontekstini qəbul edir. Əlavələr bu filterdən Ultimate Multisite-in token doğrulamasını qoruyaraq provayderə xas kontekst əlavə etmək və ya broker URL-ni əvəz etmək üçün istifadə edə bilər.

Üzvlük, qaimə, hesablaşma ünvanı, şablon və ya domen idarəetməsi vəziyyətini suveren icarəçinin daxilində təkrarlamayın. İcarəçi dashboard-unu işəsalma nöqtəsi, əsas saytın müştəri panelini isə idarə olunan əməliyyatlar üçün əsas qeyd sistemi kimi qəbul edin.

## Miqrasiya yoxlaması

Miqrasiyadan sonra və ya həyat dövrü inteqrasiyası icarəçi məlumatlarını dəyişdikdən sonra yoxlama qapılarını işə salın:

- `wp tenant verify-no-legacy --site=<site-id>` icarəçinin artıq köhnə şəbəkə tərəfli yollardan asılı olmadığını təsdiqləyir.
- `wp tenant verify-sovereign-push --site=<site-id>` suveren push işlərinin emal edib boşalda bildiyini təsdiqləyir.

İnteqrasiyalar uğursuz yoxlamanı yerləşdirmə blokeri kimi qəbul etməli və problem həll olunana qədər icarəçini canlı kimi işarələməkdən çəkinməlidir.

## İcarəçinin silinməsi

Silmə axınları icarəçi verilənlər bazası giriş məlumatlarının təmizlənməsi üçün əlavə teardown yolunu çağırmalıdır. Xarici inteqrasiyalar teardown uğurla tamamlandıqdan sonra provayder resurslarını silə bilər, lakin yoxlama və ya async push işləri hələ də icra olunarkən host verilənlər bazalarını və ya qovluqları silməməlidir.

## Köhnəlmiş verilənlər bazası router-i

Köhnə `Database_Router` deprecation stub ilə əvəz edilib. Yeni inteqrasiyalar köhnə router class-ından asılı olmaq əvəzinə icarəçiləri cari sayt router-i və icarəçi reyestri API-ləri vasitəsilə müəyyən etməlidir.
