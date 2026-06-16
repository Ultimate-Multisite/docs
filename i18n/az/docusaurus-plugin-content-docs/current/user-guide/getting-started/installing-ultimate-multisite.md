---
title: Ultimate Multisite-in quraşdırılması
sidebar_position: 12
_i18n_hash: dda8f0d2b67bc421c0a484c76c8eae6d
---
# Ultimate Multisite-in quraşdırılması

:::qeyd
Bu təlimatda, WordPress Multisite-nin artıq quraşdırılmış və konfiqurasiya edilmiş olduğu güman edilir. Nə etmək lazım olduğunu öyrənmək üçün WP Beginner tərəfindən hazırlanmış [bu təlimata](https://www.wpbeginner.com/glossary/multisite/) baxın.
:::

## Pluginin quraşdırılması

Ultimate Multisite pulsuz olaraq [WordPress.org](https://wordpress.org/plugins/ultimate-multisite/) saytında mövcuddur.

**Şəbəkə Administratoru Paneli**ndən **Pluginlər → Yeni Plugin əlavə et** bölməsinə keçin.

![Şəbəkə Administratoru, Yeni Plugin əlavə et səhifəsi](/img/installation/add-new-plugin.png)

**"Ultimate Multisite"** (dəqiq uyğunluq üçün dırnaqlara alınmış halda) axtarın və ilk nəticə olaraq görünəcək. **İndi quraşdırın** düyməsini klikləyin.

![Nəticələr arasında Ultimate Multisite göstərilib](/img/installation/search-ultimate-multisite.png)

Quraşdırıldıqdan sonra, pluginin bütün şəbəkədə aktivləşdirilməsi üçün **Şəbəkə Aktivləşdir** düyməsini klikləyin.

![Plugin quraşdırılıb və Şəbəkə Aktivləşdir düyməsi göstərilib](/img/installation/plugin-installed.png)

Aktivləşdirmədən sonra, avtomatik olaraq Quraşdırma Sehrbazına yönləndiriləcəksiniz.

![Plugin aktivləşdirilib və sehrbazda yönlendirilib](/img/installation/plugin-activated.png)

## Quraşdırma Sehrbazı

Quraşdırma Sehrbazı, Ultimate Multisite-i təxminən 10 dəqiqə ərzində konfiqurasiya etməyiniz üçün sizə kömək edəcək.

### Xoş gəldiniz

Başlamaq üçün **Başlayın** düyməsini klikləyin.

![Quraşdırma Sehrbazı, xoş gəlmə ekranı](/img/installation/wizard-welcome.png)

### Quraşdırmadan əvvəl yoxlamalar

Bu addım sistem məlumatlarınızı və WordPress quraşdırılmasını yoxlayaraq, onların Ultimate Multisite-in tələblərinə cavab verdiyinə əmin olur. Hər şey yaxşı görünürsə, **Növbəti Addıma Keçin** düyməsini klikləyin.

![Quraşdırmadan əvvəl yoxlamalar, sistem tələbləri göstərilib](/img/installation/wizard-pre-install-checks.png)

:::qeyd Şəbəkə Aktivləşdir düyməsi (v2.6.1+)
Ultimate Multisite quraşdırılıbsa, lakin **hələ şəbəkədə aktivləşdirilibməmisdir** — məsələn, əgər şəbəkə pluginləri ekranından **Aktivləşdir** (tək sayt) düyməsini klikləyərək **Şəbəkə Aktivləşdir** düyməsini klikləməmisinizsə — Quraşdırmadan əvvəl yoxlamalar addımı bunu aşkar edəcək və **Şəbəkə Aktivləşdir** düyməsini göstərəcək.

**Şəbəkə Aktivləşdir** düyməsini klikləyərək pluginin bütün multisite şəbəkənizdə aktivləşdirilməsini təmin edin. Aktivləşdirdikdən sonra, sehrbaz normal şəkildə quraşdırma addımına davam edəcək. Sehrbazdan çıxıb aktivasiya vəziyyətini düzəltməyinizə ehtiyac yoxdur.
:::

### Quraşdırma

Quraşdırıcı zəruri verilənlər bazası cədvəllərini yaradacaq və Ultimate Multisite-in işləməsi üçün lazım olan `sunrise.php` faylını quraşdıracaq. Davam etmək üçün **Quraşdırın** düyməsini klikləyin.

![Quraşdırma addımı, verilənlər bazası cədvəlləri və sunrise.php göstərilib](/img/installation/wizard-installation.png)

### Şirkətiniz

Şirkət məlumatlarınızı daxil edin və standart valyutanı təyin edin. Bu məlumatlar WaaS platformanızda istifadə ediləcəkdir. Bitirdikdən sonra **Davam Edin** düyməsini klikləyin.

![Şirkətiniz konfiqurasiya addımı](/img/installation/wizard-your-company.png)

### Standart Məlumatlar

Bu addım, öncədən hazırlanmış şablonları, məhsulları və digər başlanğıc məzmununu quraşdırmağa imkan verir. Bu, Ultimate Multisite-in funksiyalarına aşna olmaq üçün əla bir yoldur. Standart məzmunu əlavə etmək üçün **Quraşdırın** düyməsini klikləyin və ya üstünlük verirsinizsə bu addımı atlayın.

![Standart məzmun quraşdırma addımı](/img/installation/wizard-default-content.png)

### Tövsiyə Olunan Pluginlər

İsteğe bağlı olaraq tövsiyə edilən əlavə pluginləri quraşdırın. Onları əlavə etmək üçün **Quraşdırın** düyməsini klikləyin və ya davam etmək üçün bu addımı atlayın.

![Tövsiyə olunan pluginlər addımı](/img/installation/wizard-recommended-plugins.png)

### Hazırdır!

Bu qədər! Ultimate Multisite quraşdırılması tamamlandı. İndi **Şəbəkə Administratoru Paneli**ndən öz Website as a Service platformanızı qurmağa başlaya bilərsiniz.

![Quraşdırma tamamlandı - Hazır ekran](/img/installation/wizard-ready.png)

![Şəbəkə Administratoru Paneli, Ultimate Multisite aktivləşdirilib](/img/installation/network-dashboard.png)

İndi əylənin!
