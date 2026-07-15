---
title: Sayt Eksportu
sidebar_position: 11
_i18n_hash: d25255aa1b01df64a9008f91e3dcbeb1
---
# Sayt İxracı

**Site Export** (Sayt İxracı) admin səhifəsi şəbəkə administratorlarına bir saytı və ya bütün şəbəkəni köçürmə, ehtiyat nüsxə alma və ya təhvil vermə üçün yüklənə bilən bir arxivi hazırlama imkanı verir.

## Bir Saytı İxrac Etmək {#exporting-one-site}

**Ultimate Multisite > Site Export** səhifəsinə keçin və **Generate new Site Export** (Yeni Sayt İxracı Yaradır) seçin. İxrac etmək istədiyiniz alt saytı seçin, daha sonra arxivin yükləmələri, pluginlər və mövzuları (themes) ehtiva edib-etməyəcəyini seçin.

İxrac tamamlandıqdan sonra, **Existing Exports** (Mövcud İxraclar) siyahısından ZIP faylını yükləyin. İxrac ZIP faylları indi özünü işə salan bir `index.php` və bir `readme.txt` ehtiva edir, beləliklə arxiv ayrı bir import plugin-i quraşdırmadan birbaşa yeni bir hosta yüklənib işə salına bilər.

## Bütün Şəbəkəni İxrac Etmək {#exporting-the-whole-network}

Şəbəkədəki bütün alt saytları ehtiva edən tək bir arxivə ehtiyacınız varsa, Site Export səhifəsində **Network Export** (Şəbəkə İxracı) istifadə edin. Bu, host köçürmələri, fəlakətə qarşı hazırlıq məşqləri və ya hər alt saytın birlikdə köçməsi lazım olan staging yenidən qurulmaları zamanı faydalıdır.

Şəbəkə ixracı tək sayt ixracından çox böyük ola biləcəyi üçün, onu aşağı trafikli bir vaxtda yerinə yetirin və həm yükləmələr, həm pluginlər, həm mövzular, həm də yaradılan ZIP faylları üçün hədəf yaddaşda kifayət qədər boş yer olduğundan əmin olun.

### Network Import Bundles (Şəbəkə İxracı Paketləri) {#network-import-bundles}

Ultimate Multisite 2.12.0 versiyasından etibarən, Site Exporter **network import bundles** (şəbəkə import paketləri) yarada bilər — bunlar şəbəkə boyu saytların sadələşdirilmiş şəkildə bərpası üçün nəzərdə tutulmuş xüsusi arxivlərdir. Bir şəbəkə import paketi, bir çox saytı yeni bir şəbəkə quruluşuna bərpa etmək üçün lazım olan bütün faylları və metadata-nı ehtiva edir.

#### Network Import Bundle Yaratmaq {#generating-a-network-import-bundle}

1. **Ultimate Multisite > Site Export** səhifəsinə keçin
2. **Generate new Network Export** (Yeni Şəbəkə İxracı Yaradır) düyməsinə basın
3. İxrac növü kimi **Network Import Bundle** (Şəbəkə İxracı Paketi) seçin
4. Yükləmələri, pluginləri və mövzuları ehtiva edib-etməyəcəyini seçin
5. **Generate** (Yaradır) düyməsinə basın
6. **Existing Exports** (Mövcud İxraclar) siyahısından paket ZIP faylını yükləyin

#### Network Import Bundle-dan Bərpa Etmək {#restoring-from-a-network-import-bundle}

Saytları bir şəbəkə import paketindən bərpa etmək üçün:

1. Ultimate Multisite-ı hədəf hostunuzda quraşdırın
2. Multisite quruluş siqarları (wizard) ilə prosesi tamamlayın
3. Yeni şəbəkədə **Ultimate Multisite > Site Export** səhifəsinə keçin
4. **Import Network Bundle** (Şəbəkə Paketini İxrac Et) düyməsinə basın
5. Şəbəkə import paketi ZIP faylını yükləyin
6. Ekrandakı import təlimatlarına əməl edin
7. İxrac prosesi bütün saytları, onların məzmununu və konfiqurasiyalarını bərpa edəcək.

Şəbəkə import paketləri aşağıdakıları qoruyur:
- Sayt məzmunu (postlar, səhifələr, custom post types)
- Sayt parametrləri və seçimləri
- İstifadəçi rolları və icazələri
- Pluginlər və mövzular (paketdə daxil edildikdə)
- Media yükləmələri (paketdə daxil edildikdə)
- Custom database tables və məlumatlar

## Özünü İşə Salan İxrac ZIP-i Quraşdırmaq {#installing-a-self-booting-export-zip}

Özünü işə salan bir ZIP faylını yeni bir hostda bərpa etmək üçün:

1. İxrac edilmiş ZIP məzmununu hədəf web root-una yükləyin.
2. Yüklənmiş `index.php` faylını brauzerdə açın.
3. Paketdəki ixrac təlimatlarına əməl edin.
4. Geçici faylları silməzdən əvvəl, paketdəki `readme.txt` faylını ixracla bağlı qeydlər üçün nəzərdən keçirin.

Addon-a xas quraşdırma və import detalları üçün [Site Exporter addon documentation](/addons/site-exporter) səhifəsinə baxın.

Ultimate Multisite 2.9.0-da əlavə edilmiş tək sayt aləti üçün isə [Export & Import](/user-guide/administration/export-import) səhifəsinə baxın.
