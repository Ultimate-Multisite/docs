---
title: Müstəqil Miqrasiya Təsdiqi
sidebar_position: 16
_i18n_hash: a19bc6263b278573f09cbba17581f632
---
# Sovereign Migration Verification

Ultimate Multisite: Multi-Tenancy 1.2.0, souveren (müstəq) müştəri miqyasında köçürmələr üçün WP-CLI yoxlama əmrlərini ehtiva edir. Müştəri köçürməsi, SSO ziyarəti və ya izolyasiya edilmiş quraşdırma gözlənilən kimi işləmədikdə bunları istifadə edin.

## İşləniləcək əmrlər

Şəbəkədəki WordPress quraşdırılmasından yoxlama aparın:

```bash
wp tenant verify-no-legacy --site=<site-id>
wp tenant verify-sovereign-push --site=<site-id>
```

Köçürdüyünüz müştəri üçün site ID-ni istifadə edin. Birinci əmr, müştərinin artıq köhnə şəbəkə tərəfindən verilmiş məlumatlara bağlı olmadığını yoxlayır. İkinci əmr isə souveren push işlərinin emal edilə və boşaldıla (drain) bilməsini yoxlayır.

## Ümumi səhvlər

### Database icazələri host ilə uyğun gəlmir

Yoxlama icazə (grant) və writer-user səhvləri bildirirsə, konfiqurasiya edilmiş database hostunu yoxlayın. `localhost`, `127.0.0.1` və bir konteyner xidmətinin adı MySQL icazə hostları ilə fərqlidir. Müştəri host bağlamasını və ya database icazələrini yeniləyin, sonra yoxlamanı yenidən işlədin.

### Bedrock və ya yerli quraşdırmalar qoşula bilmir

Bedrock və yerli soket quraşdırmaları databazı `localhost` kimi göstərə bilər, halbuki proqram vaxtında (runtime) normaliz edilmiş ünvan vasitəsilə qoşulur. Versiya 1.2.0 eyni maşın host sətirlərini normalizə edir, lakin xüsusi host üstələnmələri databazı icazələri ilə hələ də çətinlik yarada bilər.

### Asinxron push kuyruğu boşalmir (drain)

Əgər `verify-sovereign-push` bitməzsə, Action Scheduler və ya konfiqurasiya edilmiş asinxron runner-i yoxlayın. İşlərin yenidən cəhd edilməsi və ya atılması təhlükəsiz olduğundan əmin olduqdan sonra yalnız uğursuz işləri təmizləyin.

### Müştəri istifadəçi sayı yanlışdır

Köçürmə souveren müştəri üçün istifadəçilər yaratmalıdır. Əgər gözlənilən quraşdırma istifadəçisi yoxdursa, SSO-nu yenidən cəhd etməzdən əvvəl istifadəçi təmin edilmə addımını yenidən işlədin.

### SSO ziyarəti rədd edilir

Stataless mövcudun avtomatik girişi üçün təsdiq edilməli olan hissələr: mövcud domen, origin pin, token məqsədi, nonce və son gəlmə tarixi uyğun olmalıdır. Mövcud URL-in düzgün olduğunu təsdiqləyin və SSO ziyarətini yaratdıqdan sonra daxil olma cəhdinin yaxın zamanda edilməsini təsdiqləyin.

## Yenidən cəhd etmə zamanı

Hər infrastruktur dəyişikliyindən sonra yoxlamanı yenidən edin. Bütün yoxlama növləri keçdikdən ərzində istehsal trafikə keçməyin, mənbə məlumatını silməyin və migrasiya kredensiallarını çıxarmayın.
