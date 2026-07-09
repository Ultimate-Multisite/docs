---
title: Müstəqil Kiracı Əməliyyatları
sidebar_position: 15
_i18n_hash: bcde2032a685b60e17f1944b5b588f25
---
# Müstəqil Tenant Əməliyyatları {#sovereign-tenant-operations}

Ultimate Multisite 1.2.0 müstəqil (sovereign) tenantlar üçün əməliyyat alətləri əlavə edir: bu, özünəmxtəlif verilənlər bazası, fayl sisteminin kök nöqtəsi və yönləndirmə konteksti ilə işləyən alt-saytları nəzərdə tutur, lakin onların şəbəkə administrasiyasından görünməsi davam edir.

Standart bir alt-saytın müstəqil infrastrukturda yerləşdirilməsini dəyişdirmək, uzaq saytlar arasında köçürmələr və ya izolyasiya edilmiş müştəri saytlarını idarə etmək zamanı bu səhifədən istifadə edin.

## Administratorlar üçün nə dəyişir? {#what-changes-for-administrators}

- **Stateless tenant autologin** — Şəbəkə administrasiyası uzunömürlü paylaşılan sessiya vəziyyətindən asılı olmayaraq müstəqil bir tenantı ziyarət edə bilər. SSO tokenının məqsədli dairəsi, mənbənin kilidlənməsi (origin-pinned), yenidən oynatma qorunması (replay-protected) və qısa sonu olan bir müddətə məhdudlaşdırılması olur.
- **Müstəqil-fərqləndirilmiş yönləndirmə (Sovereign-aware routing)** — Köhnə izolyasiya edilmiş şəbəkələr və müstəqil tenantlar eyni sayt yönləndirmə yolu vasitəsilə həll olunur, bu da köhnə və yeni izolyasiya edilmiş quraşdırmalar arasındakı başlanğıc fərqləri azaldır.
- **Təsdiqlənmiş köçürmə vəziyyəti** — Köçürmənin təsdiqi yoxlamaları tenantin təmin edilməsini, verilənlər bazası yazıcı icazələrini, kuyunun boşalması (queue drain) statusunu və müstəqil cədvəllərin olmamasını yoxlayır ki, bir tenant tam hesab edilmiş kimi qəbul edilsin.
- **Təhlükəsiz təmizləmə** — Müstəqil tenantın təmizlənməsi indi tenant kredensialarını təmiz şəkildə aradan qaldırır ki, silinmiş tenantlar köhnələr verilənlər bazası girişini geridə qoymasın.

## Müstəqil tenantı ziyarət etmək {#visiting-a-sovereign-tenant}

1. **Network Admin > Ultimate Multisite > Sites**-a daxil olun.
2. Müstəqil tenantı seçin.
3. Şifrələri kopyalamaq və ya müvəqqəti admin hesabları yaratmaq əvəzinə mövcud olduqda **Visit (SSO)** funksiyasından istifadə edin.

Ziyaret axını həmin tenant üçün qısaömürlü bir giriş tokeni yaradır və SSO hadisəsini tenantin audit izində qeyd edir. Əgər düymə işləmirsə, domainin gözlənilən quraşdırma ilə uyğun gəldiyini və tenantın şəbəkə tərəfindəki SSO nöqtəsinə çata bilməsini yoxlayın.

## Uzaq sayt əməliyyatları siyahısı {#remote-site-operations-checklist}

Müstəqil və ya uzaq bir tenantı dəyişdirməzdən əvvəl aşağıdakıları təsdiqləyin:

## Mülkiyyətli (sovereign) mənzillikləri silmək {#deleting-sovereign-tenants}

Mülkiyyətli bir mənzilliyi silmək məhv edicidir. Əvvəlcə ehtiyat nüsxələrinin və eksport statusunun təsdiqini verin, sonra sayt idarəetmə ekranından silin. 1.2.0-ın təmizlənmə prosesi mənzillik verilənlər bazası kredensiallarını təmizləmənin bir hissəsi kimi çıxarır, lakin xarici hosting panelləri istifadə edərkən idarəçilər host səviyyasındakı verilənlər bazası istifadəçilərinin və qovluqların yox olduğunu yenidən yoxlamalıdırlar.

:::warning
Müvafiq (verification) proses hələ də işləyərkən və ya asinxron push işləri sıraya düşmüş halda mülkiyyətli bir mənzilliyi silməyin. Təmizlənmə zamanı gözlənilən işlər üçün lazım olan kredensialları çıxarmamaq üçün prosesin tamamlanmasını gözləyin.
:::
