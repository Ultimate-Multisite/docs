---
title: Hükümdar Geçiş İş Akymy
sidebar_position: 8
_i18n_hash: f8aebdd695ed2f5b3f074c7aa7d52175
---
# Egemen Migrasi İş Akışı {#sovereign-migration-workflow}

Ultimate Multisite: Multi-Tenancy 1.2.0 standart bir alt sitesini egemen kiracı altyapısına taşımak için migrasyon doğrulama kapılarını əlavə edir.

## Başlamadan Əvvəl {#before-you-start}

Aşağıdakıları etdiyinizdən əmin olun:

- Mənbə saytının hazır köçüncünün (backup) olması.
- Multi-Tenancy addonunun aktiv olması.
- Hədəf kiracı bazası, fayl sisteminin kökü və domen hazır olmalıdır.
- Hədəf mühitlə uyğun olan bir bazası host bindingin olması.
- Şəbəkə üçün WP-CLI əmrlərini işlətmək imkanının olması.

## Tövsiyə olunan iş axını {#recommended-workflow}

1. Hədəf kiracı bazasını və fayl sistemini hazırlayın.
2. Kiracı izolyasiya ayarlarını qeyd edin və ya yeniləyin.
3. Kiracı migrasiyasını işlədin.
4. Kiracı istifadəçilərini təmin edin və ya yoxlayın.
5. Asinxron migrasi işlərini boşaldın (drain).
6. Egemen migrasi doğrulamasını işlədin.
7. SSO ilə kiracının ziyarət etməsini edin.
8. Doğrulamadan sonra yalnız DNS və ya yönləndirməni dəyişin.

## Doğrulama kapıları {#verification-gates}

Doğrulama iş axını migrasiyanı bir neçə bucaqdan yoxlayır:

- Kiracı sxemi mövcuddur və kiracı bazası yazıcısı tərəfindən yazılmaq mümkündür.
- Konfiqurasiya edilmiş bazası hostun düzgün icazələri var.
- Kiracı istifadəçiləri mövcuddur və gözlənilən egemen quraşdırma istifadəçi sayı ilə üst-üstə gəlir.
- Asinxron itələmə kuyunun (async push queue) uğurla boşaldılması mümkündür.
- Egemen kiracı üçün köhnə şəbəkə tərəfindəki məlumat yolları artıq tələb edilmir.

Doğrulama səhvlərini işə salmadan əvvəl maneə kimi qəbul edin. Bildirildiyi bazası, istifadəçini, kuyunu və ya yönləndirməni düzəldin, sonra kiracını müştərilərə göstərməzdən əvvəl yenidən doğrulama işini işlədin.

## İlk istehsal ziyarəti {#first-production-visit}

Doğrulama uğurladıqdan sonra, ilk administrator ziyarəti üçün sayt idarəetmə ekranından **Visit (SSO)** funksiyasını istifadə edin. Bu, kiracı yönləndirməsini, SSO tokeninin idarə edilməsini, mənbəni sabitlətməni və kiracı tərəfində istifadəçi təminatını bir nəzarət olunan addımda təsdiqləyir.
