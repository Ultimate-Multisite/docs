---
title: Export və Import
sidebar_position: 12
_i18n_hash: 6536f9ebee269a8553a57733e4cb03fc
---
# Export & Import

Ultimate Multisite 2.9.0, **Tools > Export & Import** altında tək sayt üçün **Export & Import** aləti əlavə edir. Bu aləti bir WordPress saytını ZIP faylı kimi paketləmək, bu ZIP faylını bərpa etmək və ya bir saytı uyumlu Ultimate Multisite və tək sayt WordPress quraşdırmaları arasında köçürmək lazım olduqda istifadə edin.

## Required permissions {#required-permissions}

İxrac ediləcək və ya idxal ediləcək saytda WordPress **Tools** menyusuna daxil ola bilən administrator kimi daxil olmalısınız. Multisite şəbəkəsində, şəbəkə səviyyəsindəki Ultimate Multisite alətləri vasitəsilə alt saytları ixrac edərkən və ya idxal edərkən şəbəkə administrator hesabından istifadə edin.

Export ZIP yükləmələri təsdiqlənmiş yükləmə nöqtəsi (authenticated download endpoint) vasitəsilə təmin edilir, buna görə də yükləmə bitənə qədər admin sessiyasını aktiv saxlayın və yaradılan yükləmə URL-lərini ictimaiyyətə yaymayın.

## Exporting a site to a ZIP {#exporting-a-site-to-a-zip}

1. Köçürmək istədiyiniz saytın WordPress admin panelində **Tools > Export & Import** yolunu izləyin.
2. İxrac sahəsini açın və paketləmək istədiyiniz saytı seçin.
3. Seçimlər mövcuddursa, yükləmələr (uploads), pluginlər və temalar kimi isteğe bağlı məzmunu seçin.
4. İxrac prosesini başlatın və bitməsini gözləyin. Böyük saytlar ZIP hazır olana qədər fon rejimində bitmələrini tələb edə bilər.
5. Bitmiş ZIP faylını ixraclar siyahısından yükləyin.

ZIP faylını təhlükəsiz bir yerdə saxlayın. O, sayt məzmununu, parametrlərini, media fayllarını və seçilmiş kod aktivlərini ehtiva edə bilər.

## What the export includes {#what-the-export-includes}

Bir export ZIP faylı aşağıdakıları ehtiva edə bilər:

- Seçilmiş saytın verilənlər bazası məzmunu və konfiqurasiyası.
- Yükləmələr daxil edildikdə yüklənmiş media faylları.
- Bu seçimlər seçildikdə pluginlər və temalar.
- Export & Import aləti tərəfindən hədəf quraşdırmada saytı yenidən qurmaq üçün istifadə edilən import metadata-sı.

Dəqiq ZIP ölçüsü media miqdarına, seçilmiş pluginlər və temalara və saytın verilənlər bazası cədvəllərinin ölçüsünə bağlıdır.

## Importing a site from a ZIP {#importing-a-site-from-a-zip}

1. Hədəf WordPress saytında **Tools > Export & Import** yolunu izləyin.
2. Import sahəsini açın və Export & Import aləti tərəfindən yaradılan ZIP faylını yükləyin.
3. Sayt yeni bir ünvan istifadə etməlidirsə, əvəz edici URL daxil edin, və ya orijinal URL-i saxlamaq üçün sahəni boş buraxın.
4. Import bitdikdən sonra yüklənmiş ZIP faylını silmək istədiyinizi seçin.
5. **Begin Import** düyməsinə basın.
6. Import bitənə qədər gözləyərək monitorinq edin. Prosesi bitməzdən əvvəl dayandırmaq lazım gəldikdə yalnız **Cancel Import** istifadə edin.
7. Normal trafik və ya müştəri girişinə icazə verməzdən əvvəl idxal edilmiş saytı nəzərdən keçirin.

Tək sayt WordPress quraşdırmasında ZIP faylını idxal etmək, mövcud saytı idxal edilmiş saytla əvəz edir. Bu, birləşdirmə (merge) aləti deyil. Başlamadan əvvəl hədəf saytın tam yechkarlığını (full backup) yaradın və eyni anda eyni sayt üçün bir neçə import başlatmaqdan çəkinin.

## Limitations and compatibility notes {#limitations-and-compatibility-notes}

- Çox böyük yükləmələr (uploads) və ya media kitabxanaları böyük ZIP faylları yarada bilər. Böyük saytları ixrac etmək və ya idxal etmək üçün PHP yükləmə limitlərini, icra limitlərini, disk sahəsini, yaddaşı və server timeout parametrlərini yoxlayın.
- Çox böyük media kitabxanaları aşağı trafikli texniki baxım pəncərəsi zamanı köçürülməli ola bilər.
- Hədəf WordPress quraşdırması uyumlu WordPress, PHP, Ultimate Multisite, plugin və tema versiyalarını işlətməlidir.
- Tək sayt idxalı hədəf saytı əvəz edir. O, birləşdirmə aləti deyil.
- Multisite-dən tək sayta və tək saytdan Multisite-ə köçürmələr yalnız hədəf mühit ixrac edilmiş saytın pluginlərini, temalarını, URL-lərini və tələb olunan Ultimate Multisite komponentlərini işlədə biləcəyi zaman dəstəklənir.
- ZIP faylını məxfi saxlayın. O, ixrac edilmiş saytdan verilənlər bazası məzmunu, yüklənmiş fayllar və konfiqurasiya detalları ehtiva edə bilər.

Daha köhnə şəbəkə səviyyəli ixrac iş axınları üçün [Site Export](/user-guide/administration/site-export) səhifəsinə baxın.
