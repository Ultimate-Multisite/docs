---
title: Ultimate Multisite quraşdırmaq
sidebar_position: 12
_i18n_hash: dda8f0d2b67bc421c0a484c76c8eae6d
---
# Ultimate Multisite-ı Qurmaq

:::note
Bu təlimat, sizin artıq WordPress Multisite quraşdırılıb və konfiqurasiya edildiyini fərz edir. Necə edəcəyinizi öyrənmək üçün WP Beginner tərəfindən hazırlanmış [bu təlimata](https://www.wpbeginner.com/glossary/multisite/) baxın.
:::

## Plugin-i Qurmaq

Ultimate Multisite [WordPress.org](https://wordpress.org/plugins/ultimate-multisite/) saytında pulsuz mövcuddur.

**Network Admin Dashboard**-unuzdan, **Plugins → Add New Plugin** yolunu izləyin.

![Network Admin Add New Plugin page](/img/installation/add-new-plugin.png)

**"Ultimate Multisite"** axtarın (dəqiq uyğunluq üçün tırnaq içində) və bu, ilk nəticə olaraq görünəcək. **Install Now** düyməsinə klikləyin.

![Search results showing Ultimate Multisite](/img/installation/search-ultimate-multisite.png)

Quraşdırıldıqdan sonra, plugin-i bütün şəbəkənizdə aktivləşdirmək üçün **Network Activate** düyməsinə klikləyin.

![Plugin installed with Network Activate button](/img/installation/plugin-installed.png)

Aktivasiyadan sonra, avtomatik olaraq Setup Wizard-a yönləndiriləcəksiniz.

![Plugin activated and redirected to wizard](/img/installation/plugin-activated.png)

## Setup Wizard (Qurulum Sihirli Pencərəsi)

Setup Wizard, Ultimate Multisite-ı konfiqurasiya etmək barədə sizə təxminən 10 dəqiqə ərzində bələdlik edəcək.

### Welcome (Xoş Gəlmisiniz)

Başlamaq üçün **Get Started** düyməsinə klikləyin.

![Setup Wizard welcome screen](/img/installation/wizard-welcome.png)

### Pre-install Checks (Ön-quraşdırma Yoxlamaları)

Bu addım sistem məlumatlarınızı və WordPress quraşdırmanızı yoxlayır ki, Ultimate Multisite-ın tələblərinə cavab verir. Hər şey qaydasındadırsa, **Go to the Next Step** düyməsinə klikləyin.

![Pre-install checks showing system requirements](/img/installation/wizard-pre-install-checks.png)

:::note Network Activate düyməsi (v2.6.1+)
Əgər Ultimate Multisite quraşdırılıb, lakin **hələ şəbəkə aktivasiya edilməyibsə** — məsələn, şəbəkə pluginlər ekranından **Network Activate** əvəzinə **Activate** (tək sayt) düyməsinə klikləmisinizsə — Pre-install Checks addımı bunu aşkarlayacaq və bir **Network Activate** düyməsi göstərəcək.

**Network Activate** düyməsinə klikləmək plugin-i avtomatik olaraq bütün multisite şəbəkənizdə aktivləşdirir. Aktivasiya edildikdən sonra, wizard normal şəkildə quraşdırma addımına davam edir. Aktivasiya vəziyyətini düzəltmək üçün wizard-dan çıxmağınıza ehtiyac yoxdur.
:::

### Installation (Quraşdırma)

Quraşdırıcı zəruri verilənlər bazası cədvəllərini yaradacaq və Ultimate Multisite-ın işləməsi üçün lazım olan `sunrise.php` faylını quraşdıracaq. Davam etmək üçün **Install** düyməsinə klikləyin.

![Installation step showing database tables and sunrise.php](/img/installation/wizard-installation.png)

### Your Company (Şirkətiniz)

Şirkət məlumatlarınızı doldurun və standart valyutanızı təyin edin. Bu məlumatlar WaaS platformanız boyunca istifadə ediləcək. Bitirəndə **Continue** düyməsinə klikləyin.

![Your Company configuration step](/img/installation/wizard-your-company.png)

### Default Content (Standart Məzmun)

Bu addım sizə əvvəlcədən təyin edilmiş şablonlar, məhsullar və digər başlanğıc məzmununu quraşdırmağa imkan verir. Bu, Ultimate Multisite'ın xüsusiyyətlərinə alışmaq üçün əla bir yoldur. Standart məzmunu əlavə etmək üçün **Install** düyməsinə, yoxsa sıfırdan başlamağı üstün tutursunuzsa bu addımı atlayın.

![Default content installation step](/img/installation/wizard-default-content.png)

### Recommended Plugins (Tövsiyə Olunan Pluginlər)

İxtiyari olaraq tövsiyə olunan əlavə pluginləri quraşdırın. Onları əlavə etmək üçün **Install** düyməsinə və ya davam etmək üçün atlayın.

![Recommended plugins step](/img/installation/wizard-recommended-plugins.png)

### Ready! (Hazırdır!)

Budur! Ultimate Multisite quraşdırmanız tamamlandı. İndi **Network Admin Dashboard**-dan Website as a Service platformunuzu qurmağa başlaya bilərsiniz.

![Setup complete - Ready screen](/img/installation/wizard-ready.png)

![Network Admin Dashboard with Ultimate Multisite active](/img/installation/network-dashboard.png)

İndi əylənin!
