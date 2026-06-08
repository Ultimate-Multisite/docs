---
title: V1-dən köçürmə
sidebar_position: 17
_i18n_hash: 1deefaf09206b741c89be6666fe2143c
---
# V1-dən Köçürmə

## Ultimate Multisite öz ilkin 1.x nəşr seriyasından 2.x nəşr seriyasına keçib.

Ultimate Multisite 2.0 və yuxarı versiyası kod bazasının tamamilə yenidən yazılması deməkdir, bu da o deməkdir ki, köhnə versiya ilə yeni versiya arasında çox az ortaq hissə var. Bu səbəbdən, 1.x-dən 2.x-ə yüksəldikdə, məlumatlarınızın yeni versiyaların başa düşə biləcəyi bir formatda köçürülməsi lazım gələcək.

Nə vaxt ki, Ultimate Multisite 2.0+ **migrator ilə gəlir** və bu migrator, köhnə versiyadan olan məlumatları aşkarlayıb onu yeni formata çevirmə qabiliyyətinə malikdir. Bu köçürmə, 2.0+ versiyasının **Setup Wizard** (Quraşdırma Sihirli Tortusu) zamanı baş verir.

Bu dərs, migratorun necə işlədiyini, uğursuzluq halları üçün nə etməli olduğunuzu və bu proses zamanı yaranan problemlərin necə həll edilə biləcəyini əhatə edir.

_**MÜHÜMDÜR: 1.x versiyasından 2.0 versiyasına yüksəlməyə başlamazdan əvvəl, zəhmət olmasa sayt verilənlər bazanızın yəni backup-ını yaratdığınızdan əmin olun.**_

## İlk addımlar

İlk addım, plugin-in .zip faylını yükləmək və 2.0 versiyasını network admin dashboard-unuzda quraşdırmaqdır.

[2.0 versiyasını quraşdırıb aktivləşdirdikdən sonra](../getting-started/installing-ultimate-multisite.md), sistem avtomatik olaraq Multisite-ınızın köhnə versiyada işlədiyini aşkarlayacaq və plugin səhifəsinin yuxarısında bu mesajı görəcəksiniz.

_**QEYD:** Əgər Multisite-ınızda Ultimate Multisite 1.x quraşdırılıbsa, plugin-i yüklədiyiniz versiya ilə əvəz etmək seçimi sizə təqdim ediləcək. Zəhmət olmasa, **Replace current with uploaded** (Hazırkı ilə yüklənənini əvəz et) düyməsinə klik edin._

<!-- Screenshot unavailable: Plugin page showing option to replace v1 with uploaded v2 version -->

Növbəti səhifə sizə 1.x versiyası ilə birlikdə hansı köhnə add-on-ların quraşdırıldığını göstərəcək. Bu səhifə, istifadə etdiyiniz versiyanın 2.0 versiyası ilə uyğun olub-olmadığı və ya köçürmədən sonra add-on-un yüksəldilmiş versiyasını quraşdırmalı olub-olmadığınız barədə təlimatlar verəcək.

<!-- Screenshot unavailable: Message on the top of the plugins page about updating to v2.0, with list of add-ons that need updating -->

İrəliləməyə hazır olduqda, **Visit the Installer to finish the upgrade** (Yüksəlməni bitirmək üçün Quraşdırıcıya daxil olun) düyməsinə klikləyə bilərsiniz.

<!-- Screenshot unavailable: Button saying Visit the Installer to finish the upgrade -->

Bu, sizi bəzi xoş gəlmisiniz mesajları ilə quraşdırma sihirli tortusu səhifəsinə yönləndirəcək. Növbəti səhifəyə keçmək üçün sadəcə **Get Started** (Başlamaq) düyməsinə klik etməlisiniz.

<!-- Screenshot unavailable: Setup Wizard welcoming page with Get Started button -->

**Get Started** düyməsinə kliklədikdən sonra, sizi Pre-install Checks (Quraşdırmadan Əvvəl Yoxlamalar) səhifəsinə yönləndirəcək. Bu səhifə sizə System Information (Sistem Məlumatınızı) və WordPress quraşdırmanızı göstərəcək və onun **Ultimate Multisite-ın tələblərinə** uyğun olub-olmadığını deyəcək.

<!-- Screenshot unavailable: Pre-install Checks page showing system requirements confirmation -->

Növbəti addım, Ultimate Multisite lisenziya açarınızı daxil etmək və plugin-i aktivləşdirməkdir. Bu, add-on-lar daxil olmaqla, bütün funksionallıqların saytınızda mövcud olmasını təmin edəcək.

<!-- Screenshot unavailable: License activation page with license key input and Agree and Activate button -->

Açarınızı daxil etdikdən sonra, **Agree & Activate** (Razılaş və Aktivləşdir) düyməsinə klikləyin.

Lisenziya aktivləşdirildikdən sonra, növbəti səhifədə **Install** (Quraşdır) düyməsinə klikləyərək faktiki quraşdırmaya başlaya bilərsiniz. Bu, 2.0 versiyasının işləməsi üçün lazım olan faylları və verilənlər bazasını avtomatik olaraq yaradacaq.

<!-- Screenshot unavailable: Installation page showing what will be updated with Install button -->

## İndi, köçürmə

Migratorun özündə bir təhlükəsizlik funksiyası var; bu funksiya bütün multisite-ınızı yoxlayaraq bütün Ultimate Multisite məlumatlarınızın heç bir problem olmadan köçürülə biləcəyini təmin edir. Prosesi başlatmaq üçün **Run Check** (Yoxlamanı İşə Sal) düyməsinə klikləyin.

<!-- Screenshot unavailable: Migration page with Run Check button to verify data can be converted -->

Yoxlamanı işlətdikdən sonra, iki ehtimalınız var: nəticə ya **xəta ilə** və ya **xətasız** ola bilər.

### Xəta ilə

Əgər bir xəta mesajı alırsınızsa, xətanı düzəltməyiniz üçün dəstəklərimizə müraciət etməlisiniz. Bir ticket yaratarkən **xəta logunu təqdim etdiyinizdən** əmin olun. Logu yükləyə bilərsiniz və ya "contact our support team" (dəstəklərimizə müraciət edin) yazan linkə klikləyə bilərsiniz. Bu, səhifənizin sağ tərəfindəki kömək widget-ını açacaq və təsvir altında xəta loglarını əhatə edən, sizin üçün doldurulmuş sahələr olacaq.

_**Sistem bir xəta aşkarladığı üçün, 2.0 versiyasına köçürməyə davam edə bilməyəcəksiniz. Bu zaman xəta düzəldilənə qədər network-unuzu işlətməyə davam etmək üçün 1.x versiyasına geri qayıda bilərsiniz.**_

### Xətasız

Əgər sistem heç bir xəta aşkarlamazsa, uğur mesajı və aşağıda bir **Migrate** (Köçür) düyməsi görəcəksiniz ki, bu da köçürməni davam etdirməyə imkan verəcək. Bu səhifədə, irəliləməzdən əvvəl verilənlər bazanızın backup-ını yaratmanız xatırladılacaq, ki, biz bunu şiddətlə tövsiyə edirik. Əgər artıq backup-ınız varsa, **Migrate** düyməsinə basın.

<!-- Screenshot unavailable: Migration page showing success message and backup recommendation -->

<!-- Screenshot unavailable: Migrate button on the bottom-right corner -->

Və bu, bütün məsələdir!

Ya Wizard quraşdırmasına davam edərək network-unuzdakı loqonuzu və digər şeyləri yeniləyə bilərsiniz, ya da Ultimate Multisite 2.0 menyusunda və onun yeni interfeysində gəzməyə başlaya bilərsiniz. Zəhmət olmasa, əylənin.
