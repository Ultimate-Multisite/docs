---
title: Üçüncü Tərəf Rejimində Miqrasiya
sidebar_position: 17
_i18n_hash: 21e66c5c40d03011402c58addf6d96f3
---
# Üçüncü Tərəf Rejimi Keçidləri

Superdav AI Agent v1.12.0, üçüncü tərəf imkanlarının (abilities) necə idarə olunduğunu dəyişir. **Üçüncü tərəf rejimi indi avtomatikə keçir**, bu da WordPress 7.0+ versiyalarında əl ilə konfiqurasiya etmədən yerli WordPress Abilities API inteqrasiyasına imkan verir.

## Nə Dəyişdi? {#what-changed}

### v1.12.0-dan Əvvəl {#before-v1120}

Üçüncü tərəf imkanları əl ilə konfiqurasiya tələb edirdi:

- "Üçüncü tərəf rejimi"ni açıq şəkildə aktivləşdirməli idiniz.
- İmkanlar xüsusi bir qeydiyyatdan (registry) yüklənirdi.
- WordPress Abilities API ilə inteqrasiya isteğe bağlı idi.
- Varsayılan rejim köhnə (Legacy) rejimi idi.

### v1.12.0-dan Sonra {#after-v1120}

Üçüncü tərəf imkanları avtomatik işləyir:

- Üçüncü tərəf rejimi "avto" (auto) olaraq varsayılandır.
- İmkanlar WordPress Abilities API ilə yerli şəkildə inteqrasiya olunur.
- WordPress 7.0+ üçün əl ilə konfiqurasiya tələb olunmur.
- Köhnə rejim (Legacy mode) hələ də köhnə WordPress versiyaları üçün mövcuddur.

## Kim Təsir Edir? {#who-is-affected}

### Yeni Qurulmalar (WordPress 7.0+) {#new-installations-wordpress-70}

**Heç bir hərəkət tələb olunmur.** Üçüncü tərəf rejimi avtomatik olaraq "avto" (auto) olaraq təyin edilir və imkanlar qutu-qutu işləyir.

### Mövcud Qurulmalar {#existing-installations}

**Ayarlarınız qorunur.** Əgər aşağıdakılardan istifadə edirdinizsə:

- **Köhnə rejim (Legacy mode)**: Siz köhnə rejimdə qalacaqsınız (dəyişiklik yoxdur)
- **Əl ilə üçüncü tərəf rejimi (Manual third-party mode)**: Siz əl ilə rejimdə qalacaqsınız (dəyişiklik yoxdur)
- **Avto rejimi (Auto mode)**: Avto rejimdə davam edəcəksiniz (dəyişiklik yoxdur)

### 7.0-dan Əvvəlki WordPress Versiyaları {#wordpress-versions-before-70}

**Köhnə rejim (Legacy mode) hələ də mövcuddur.** Əgər WordPress 6.x və ya daha köhnə versiyadadırsa:

- Üçüncü tərəf rejimi "köhnə" (legacy) olaraq varsayılandır.
- İstənilərsə üçüncü tərəf rejimini əl ilə aktivləşdirə bilərsiniz.
- Yerli Abilities API-dən istifadə etmək üçün WordPress 7.0+ versiyasına yüksəldin.

## Rejimləri Anlamaq {#understanding-the-modes}

### Avto Rejimi (Yeni Varsayılan) {#auto-mode-new-default}

**Avto rejimi** yerli WordPress Abilities API inteqrasiyasından istifadə edir:

- İmkanlar WordPress hook-ları vasitəsilə qeydiyyatdan keçir.
- WordPress 7.0+ Abilities API ilə tam uyğunluq.
- Üçüncü tərəf imkanlarının avtomatik aşkarlanması.
- Əl ilə konfiqurasiya tələb olunmur.

**Nə vaxt istifadə etməli**: Üçüncü tərəf imkanları ilə WordPress 7.0+

### Əl ilə Rejim (Manual Mode) {#manual-mode}

**Əl ilə rejim** açıq şəkildə konfiqurasiya tələb edir:

- Hansı üçüncü tərəf imkanlarının yüklənməsinə qərar verirsiniz.
- Test etmək və ya seçici imkan yükləmək üçün faydalıdır.
- Konfiqurasiya fayllarını redaktə etməyi tələb edir.
- Daha çox nəzarət, amma daha çox qurulma.

**Nə vaxt istifadə etməli**: Test etmək, seçici imkan yükləmək və ya xüsusi konfiqurasiyalar.

### Köhnə Rejim (Legacy Mode) {#legacy-mode}

**Köhnə rejim** köhnə üçüncü tərəf imkan sistemiindən istifadə edir:

- Xüsusi imkan qeydiyyatı (WordPress Abilities API deyil).
- Köhnə WordPress versiyaları ilə geriyə uyğun işləyir.
- Yerli WordPress inteqrasiyası yoxdur.
- Köhnəlmişdir, lakin hələ də dəstəklənir.

**Nə vaxt istifadə etməli**: WordPress 6.x və ya daha köhnə, və ya köhnə uyğunluğa ehtiyac duyursunuzsa.

## Cari Rejiminizin Yoxlanılması {#checking-your-current-mode}

### Admin Panel vasitəsilə {#via-admin-panel}

1. **WordPress Admin** → **Superdav AI Agent** → **Settings**-ə gedin.
2. **Third-Party Mode** ayarını axtarın.
3. Cari rejiminizi və dəyişdirmək üçün seçimləri görəcəksiniz.

### Kod vasitəsilə {#via-code}

```php
$mode = get_option( 'superdav_third_party_mode' );
echo $mode; // 'auto', 'manual', və ya 'legacy'
```

## Rejiminizi Dəyişmək {#changing-your-mode}

### Avto Rejimə Keçmək {#switch-to-auto-mode}

Əgər WordPress 7.0+ versiyasında olduğunuz və avto rejimdən istifadə etmək istəyirsinizsə:

1. **Superdav AI Agent** → **Settings**-ə gedin.
2. **Third-Party Mode**-u tapın.
3. **Auto (WordPress Abilities API)**-ni seçin.
4. **Save** düyməsinə basın.

Superdav AI Agent avtomatik olaraq üçüncü tərəf imkanlarını aşkarlayacaq və qeydiyyatdan keçirəcək.

### Əl ilə Rejimə Keçmək {#switch-to-manual-mode}

Hansı imkanların yüklənməsini əl ilə idarə etmək istəyirsinizsə:

1. **Superdav AI Agent** → **Settings**-ə gedin.
2. **Third-Party Mode**-u tapın.
3. **Manual**-ı seçin.
4. **Save** düyməsinə basın.
5. Hansı imkanların yüklənməsini göstərmək üçün konfiqurasiya faylınızı redaktə edin.

### Köhnə Rejimə Keçmək {#switch-to-legacy-mode}

Köhnə uyğunluğa ehtiyacınız varsa:

1. **Superdav AI Agent** → **Settings**-ə gedin.
2. **Third-Party Mode**-u tapın.
3. **Legacy**-ni seçin.
4. **Save** düyməsinə basın.

## Avto Rejiminin Faydaları {#benefits-of-auto-mode}

### Avtomatik Aşkarlama {#automatic-discovery}

İmkanlar aşağıdakılardan avtomatik aşkarlanır:

- Qurulmuş pluginlər
- Aktiv tema
- Must-use pluginlər
- Drop-in pluginlər

Əl ilə qeydiyyat tələb olunmur.

### Yerli İntegrasiya {#native-integration}

İmkanlar WordPress Abilities API ilə inteqrasiya olunur:

- WordPress əsas çəkisi ilə uyğundur.
- WordPress admin-i ilə işləyir.
- Abilities API istifadə edən digər pluginlər ilə uyğundur.
- WordPress inkişaf etdikcə gələcəyə hazırlıqdır.

### Sadələşdirilmiş İdarəetmə {#simplified-management}

- Redaktə ediləcək konfiqurasiya faylları yoxdur.
- Əl ilə imkan qeydiyyatı yoxdur.
- Ability Visibility kontrolleri avtomatik işləyir.
- Admin bildirişləri sizə təsnifatlandırılmamış imkanlar haqqında xəbərdarlıq edir.

### Daha Yaxşı Performans {#better-performance}

- İmkanlar cache edilir.
- Tələb olunduqda tənbəl yüklənir (Lazy-loaded).
- WordPress 7.0+ üçün optimallaşdırılıb.

## Keçid Yolu {#migration-path}

### Əgər WordPress 6.x-dəsinizsə {#if-youre-on-wordpress-6x}

1. **WordPress 7.0+ versiyasına yüksəldin** (hazır olduqda).
2. **Superdav AI Agent-i** v1.12.0+ versiyasına yeniləyin.
3. **Üçüncü tərəf rejimini Avto-ya dəyişin** (isteğe bağlı; köhnə rejim hələ də işləyir).
4. **İmkan görünürlüyünü (ability visibility)** nəzərdən keçirin ki, düzgün giriş kontrolleri təmin olunsun.

### Əgər WordPress 7.0+ versiyasında olursunuzsa {#if-youre-on-wordpress-70}

1. **Superdav AI Agent-i** v1.12.0+ versiyasına yeniləyin.
2. **Üçüncü tərəf rejiminin Avto-da təyin olunduğunu yoxlayın** (varsayılan olmalıdır).
3. **İmkan görünürlüyünü** nəzərdən keçirin ki, düzgün giriş kontrolleri təmin olunsun.
4. **Üçüncü tərəf imkanlarını test edin** ki, işlədiyini təsdiqləyin.

## Problemlərin Həlli {#troubleshooting}

### Avto rejimdə imkanlar yüklənmir {#abilities-arent-loading-in-auto-mode}

- WordPress 7.0+ versiyasında olduğunuzu yoxlayın.
- Üçüncü tərəf rejiminin "Avto" (Auto) olaraq təyin edildiyini yoxlayın.
- İmkanı təmin edən pluginin aktiv olduğunu yoxlayın.
- Qeydiyyat xətaları üçün WordPress error loglarını yoxlayın.

### Köhnə rejimi saxlamaq istəyirəm {#i-want-to-keep-legacy-mode}

- **Settings** → **Third-Party Mode**-a gedin.
- **Legacy**-ni seçin.
- **Save** düyməsinə basın.
- Köhnə rejim işləməyə davam edəcək.

### Öz imkanlarım görünmür {#my-custom-abilities-arent-showing}

- Onların WordPress hook-ları vasitəsilə qeydiyyatdan keçdiyini yoxlayın.
- Abilities API-ni düzgün tətbiq etdiklərini yoxlayın.
- WordPress error loglarını nəzərdən keçirin.
- Bütün qeydiyyatdan keçmiş imkanları görmək üçün **Ability Visibility** admin səhifəsindən istifadə edin.

### "Təsnifatlandırılmamış imkan" bildirişləri alıram {#im-getting-unclassified-ability-notices}

- Bu, yeni üçüncü tərəf imkanları üçün normaldır.
- Onları admin bildirişində nəzərdən keçirin və təsnifatlandırın.
- Təsnifatlandırma haqqında detallar üçün **Ability Visibility**-ə baxın.

## Geriyə Uyğunluq {#backward-compatibility}

### Mövcud Konfiqurasiyalar {#existing-configurations}

Əgər mövcud üçüncü tərəf imkan konfiqurasiyalarınız varsa:

- **Köhnə rejim (Legacy mode)**: Konfiqurasiyanız işləməyə davam edir.
- **Əl ilə rejim (Manual mode)**: Konfiqurasiyanız işləməyə davam edir.
- **Avto rejim (Auto mode)**: Konfiqurasiyanız nəzərə alınmır (avto rejim üstün gəlir).

Xüsusi konfiqurasiyanızı saxlamaq üçün Əl ilə və ya Köhnə rejimdə qalın.

### Köhnəlmə Cədvəli {#deprecation-timeline}

- **v1.12.0**: Köhnə və Əl ilə rejimlər tam dəstəklənir.
- **v1.13.0+**: Köhnə rejim köhnəlmə bildirişləri göstərə bilər.
- **v2.0.0**: Köhnə rejim silinə bilər (TBD).

## Ən Yaxşı Praktikalara Nəzarət {#best-practices}

### Yeni Qurulmalar üçün {#for-new-installations}

- Avto rejimdən istifadə edin (bu varsayılandır).
- Superdav AI Agent-dən imkanları avtomatik aşkarlamasını təmin edin.
- Giriş nəzarətini idarə etmək üçün Ability Visibility-dən istifadə edin.

### Mövcud Qurulmalar üçün {#for-existing-installations}

- Mümkünsə WordPress 7.0+ versiyasına yüksəldin.
- Sadələşdirilmiş idarəetmə üçün Avto rejimə keçin.
- Ability Visibility istifadə edərək imkanları nəzərdən keçirin və təsnifatlandırın.

### Xüsusi İmkanlar üçün {#for-custom-abilities}

- İmkanları WordPress hook-ları vasitəsilə qeydiyyatdan keçirin (Abilities API).
- Xüsusi imkan qeydiyyatlarından yayınmaq.
- WordPress 7.0+ və Avto rejimdə test edin.

## Növbəti Addımlar {#next-steps}

1. **WordPress versiyanızı yoxlayın**: Avto rejimi üçün 7.0+ versiyasında olduğunuzdan əmin olun.
2. **Üçüncü tərəf rejiminizə nəzər salın**: Settings-ə gedin və cari rejiminizi yoxlayın.
3. **Zərurət yaranarsa yeniləyin**: Əgər WordPress 7.0+ versiyasında olursunuzsa, Avto rejimə keçin.
4. **İmkanları təsnifatlandırın**: Təsnifatlandırılmamış imkanları nəzərdən keçirin və təsnifatlandırın.
5. **Test edin**: Üçüncü tərəf imkanlarınızın düzgün işlədiyini yoxlayın.

## Əlaqəli Mövzular {#related-topics}

- **Ability Visibility**: Hansı imkanların harada görünəcəyini idarə edin.
- **WordPress Abilities API**: Yerli WordPress imkan qeydiyyatı haqqında öyrənin.
- **Third-Party Ability Development**: Avto rejimdə işləyən imkanlar yaradın.
