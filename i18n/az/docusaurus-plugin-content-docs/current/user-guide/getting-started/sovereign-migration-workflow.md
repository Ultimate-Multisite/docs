---
title: Müstəqil Miqrasiya İş Axını
sidebar_position: 8
_i18n_hash: f8aebdd695ed2f5b3f074c7aa7d52175
---
# Sovereign Migration Workflow

Ultimate Multisite: Multi-Tenancy 1.2.0 standart bir alt sitenin souveren müştəri infrastrukturuna köçürülməsi üçün migrasiya yoxlaması qapılarını əlavə edir.

## Başlamazdan əvvəl {#before-you-start}

Aşağıdakıları təsdiqlədiyinizdən əmin olun:

- Mənbə sitenin hazır bir yedəfəsi.
- Multi-Tenancy addon aktivdir.
- Hədəf müştəri bazası, fayl sisteminin kök nöqtəsi və domen hazırdır.
- Hədəf mühitləri ilə uyğun olan bir bazası host binding (bazası host bağlama).
- Şəbəkə üçün WP-CLI əmrlərini işlətmək imkanına sahibsiniz.

## Tövsiyə olunan iş axını {#recommended-workflow}

1. Hədəf müştəri bazasını və fayl sistemini hazırlayın.
2. Müştəri izolyasiya ayarlarını qeyd edin və ya yeniləyin.
3. Müştəri migrasiyasını işlədin.
4. Müştəri istifadəçilərini təmin edin və ya yoxlayın.
5. Asinxron migrasiya işlərini boşaldın (drain).
6. Souveren migrasiya yoxlamasını işlədin.
7. SSO ilə müştəriyə daxil olun.
8. Yalnız yoxlama keçdikdən sonra DNS və ya yönləndirməni dəyişin.

## Yoxlama qapıları (Verification gates) {#verification-gates}

Yoxlama iş axını migrasiyanı bir neçə bucaqdan yoxlayır:

- Müştəri sxemi mövcuddur və müştəri bazası yazıcısı tərəfindən yazıla bilər.
- Konfiqurasiya edilmiş bazası host valid grantlərə malikdir.
- Müştəri istifadəçiləri mövcuddur və gözlənilən souveren quraşdırma istifadəçi sayı ilə üst-üstə düşür.
- Asinxron itələmə kuyusu (async push queue) uğurla boşaldıla bilər.
- Souveren müştəri üçün köhnə şəbəkə tərəfindən olan məlumat yolları artıq tələb edilmir.

Yoxlama uğursuzluqlarını işə salmadan əvvəl maneə kimi qəbul edin. Bildirildiyi bazası, istifadəçini, kuyunu və ya yönləndirməni düzəldin, sonra müştəri ilə üzləşdirməzdən əvvəl yoxlamanı yenidən işlədin.

## İlk istehsal ziyarət (First production visit) {#first-production-visit}

Yoxlama keçdikdən sonra ilk administrator ziyarəti üçün sayt idarəetmə ekranından **Ziyarət (SSO)** funksiyasını istifadə edin. Bu, müştəri yönləndirməsini, SSO tokeninin idarə edilməsini, mənbəni sabitlənməsini və müştəri tərəfindən istifadəçi təminatını bir nəzarət olunan addımda təsdiqləyir.
