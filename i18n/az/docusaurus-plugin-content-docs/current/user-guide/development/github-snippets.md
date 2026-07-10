---
title: GitHub Snippets
sidebar_position: 3
_i18n_hash: c643f3d76aace8c15fd224b984af6633
---
# Ultimate Multisite snippet-lərindən GitHub repozitoriyamızda necə istifadə etmək olar {#how-to-use-ultimate-multisite-snippets-on-our-github-repository}

Ultimate Multisite istifadəçiləri tərəfindən tez-tez soruşulan və saytlarımıza Google Analytics skripti əlavə etmək və ya admin dashboard-dan bir meta box gizlətmək kimi kiçik funksionallıqlar əlavə etmək istəyən istifadəçilər üçün GitHub repozitoriyasında kod parçaları (code snippets) mövcuddur.

Bu məqalədə sizə bu kodları necə istifadə etməyi və daha dəqiq desək, harada yerləşdirməyi öyrədəcəyik.

Kod parçalarını aşağıdakı linkdə tapa bilərsiniz.

https://github.com/next-press/wp-ultimo-snippets/

Kodları əlavə etmək üçün sizin üçün 2 yol var:

  1. Temanızın `functions.php` faylı üzərindən.

  2. Must-Use Plugins (mu-plugins) vasitəsilə.

# Temanızın functions.php faylına snippet necə əlavə etmək olar. {#how-to-add-the-snippet-on-your-themes-functionsphp-file}

  1. WordPress Network admin dashboard-unuza daxil olun və Themes > Theme Editor (Aşağıdakı skrinşota baxın) yolunu izləyin.

  2. "Edit Themes" səhifəsində, ekranınızın yuxarı sağ küncündə yerləşən dropdown sahəsində aktiv temanızın seçilmiş olduğundan əmin olun (# Aşağıdakı skrinşotda 3).

  3. Faylı yükləmək üçün "Theme Files" bölməsi altındakı `functions.php` faylına klikləyin. Aşağıya doğru sürüşün və GitHub repozitoriyasından aldığınız Ultimate Multisite snippet-ini yapışdırın.

<!-- Screenshot unavailable: WordPress Theme Editor showing functions.php file editing -->

# Must-Use Plugins (mu-plugins) yaratmaq necədir {#how-to-create-must-use-plugins-mu-plugins}

WordPress-də "Must-Use Plugins" və ya qısaca "mu-plugins" adlanan, özəl funksionallıq yükləməyə imkan verən bir xüsusiyyət var.

Bu xüsusi mu-plugins, bütün digər adi pluginlərdən əvvəl yüklənir və deaktiv edilə bilməz. Bir multisite şəbəkəsində, bu mu-plugins-dakı kod bütün quruluşunuzdakı saytlarda yüklənəcək.

1. WordPress quraşdırmanızın fayl sisteminə daxil olmaq üçün FTP və ya SSH-dən istifadə edin.

2. WordPress quraşdırmanızın `wp-content` kataloqunun içində `mu-plugins` adlı yeni bir kataloq yaradın.

<!-- Screenshot unavailable: File manager showing wp-content directory with mu-plugins folder -->

3. Kompüterinizdə Notepad və ya istənilən kod redaktoru istifadə edərək `wu-snippet.php` adlı yeni bir PHP faylı yaradın.

4. GitHub repozitoriyasından aldığınız Ultimate Multisite kod snippet-ini fayla yerləşdirin və yadda saxlayın. Həmçinin, mu plugin-inizi etiketləmək üçün bu kodu snippet-in yuxarısına əlavə edə bilərsiniz.
