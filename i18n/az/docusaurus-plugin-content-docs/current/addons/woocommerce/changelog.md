---
title: WooCommerce İnteqrasiyası Dəyişiklik Jurnalı
sidebar_position: 99
_i18n_hash: 54658c4a8d52e85998183f523437d5a3
---
# WooCommerce İnteqrasiyası Dəyişiklik Jurnalı

Versiya 2.2.0 - 2026-07-01 tarixində buraxılıb
* Yeni: Ultimate Multisite vergi məbləğləri indi ödəniş səhifəsində ayrıca WooCommerce rüsum sətirləri kimi görünür, bu da ödənişdən əvvəl vergi yekunlarını daha aydın edir.
* Yeni: WooCommerce Subscriptions təkrar cəhd pəncərəsi zamanı uğursuz yenilənməyə görə dayandırma istəyən saytlar üçün seçimli "Uğursuz Yenilənmələrdə Üzvlükləri Dərhal Dayandır" ayarı və `wu_woo_suspend_on_payment_failure` filtri əlavə edildi.
* Düzəliş: Uğursuz və ya bərpa olunmuş yenilənmələrdən sonra Ultimate Multisite üzvlükləri ilə sinxronizasiyadan kənarda qala bilən WooCommerce Subscription statusları uzlaşdırıldı.
* Düzəliş: Çatışmadığı halda WooCommerce mağaza valyutası Ultimate Multisite valyuta siyahısına əlavə edildi.
* Düzəliş: Abunəçiləri WooCommerce ödəniş səhifəsinə yönləndirərkən müştəri faktura məlumatları qorundu.
* Təkmilləşdirildi: Jetpack Autoloader 5 ilə uyğunluq əlavə edildi.
* Təkmilləşdirildi: Buraxılış paketi yaradılması təmizləndi ki, GitHub və marketplace zip-ləri iç-içə yerləşən hazırlıq qovluqlarından və inkişaf fayllarından yayınsın.

Versiya 2.0.6 - 2026-01-16 tarixində buraxılıb
* Təkmilləşdirmə: Əsas abunəliklər əlavəyə daxil edildi. Artıq Woocommerce Subscriptinos genişləndirməsi tələb olunmur.

Versiya 2.0.5 - 2026-01-09 tarixində buraxılıb
* Təkmilləşdirmə: Tərcümələri glotpress API-dən yüklə.
* Düzəliş: Bəzi səhifə qurucularında kritik xəta.
* Düzəliş: Müştəri əsas saytın üzvü olduqda sonsuz yönləndirmə.

Versiya 2.0.4 - 2025-11-14 tarixində buraxılıb
* Əlavə edildi: Daha çox dil üçün tərcümələr.
* Dəyişdirildi: Ad Ultimate Multisite: Woocommerce Integration olaraq dəyişdirildi.
* Əlavə edildi: Woocommerce 10.2.1 ilə uyğunluq.
* Əlavə edildi: Woocommerce Subscriptions 7.7.0 ilə uyğunluq.
* Düzəliş: PHP 8.4 ilə uyğunluq
* Düzəliş: WC Account səhifəsi olmadıqda yönləndirmə.

Versiya 2.0.3 - 2025-08-13 tarixində buraxılıb
* Dəyişdirildi: Yeni marketplace ilə avtomatik yeniləmələr aktiv edildi.

Versiya 2.0.2 - 2025-07-05 tarixində buraxılıb
* Dəyişdirildi: Ad Multisite Ultimate: Woocommerce Integration olaraq dəyişdirildi.
* Əlavə edildi: Woocommerce 9.8.1 ilə uyğunluq.
* Əlavə edildi: Woocommerce Subscriptions 7.3.0 ilə uyğunluq.
* Düzəliş: Müştəri tərəfindən abunəliyin ləğv edilməsi.
* Düzəliş: Ödəniş bloku istifadə edilərkən kritik xəta.
* Təkmilləşdirmə: İndi Woocommerce yüksək performanslı xüsusi sifariş cədvəlləri ilə uyğundur.
* Düzəliş: WooCommerce ödəniş səhifəsində ləğv etmək hələ də üzvlüyü yüksəldə bilər.

Versiya 2.0.1 - 2023-08-09 tarixində buraxılıb

* Əlavə edildi: Woocommerce 7.9.0 ilə uyğunluq.
* Əlavə edildi: Woocommerce Subscriptions 5.3.0 ilə uyğunluq.
* Əlavə edildi: Üzvlük yeniləmələri üçün dəstək.
* Əlavə edildi: Woocommerce-də sınaqlar və quraşdırma haqları haqqında bildirişlər.
* Əlavə edildi: Ultimate Multisite Woocommerce məhsullarının meta dəyəri ilə müəyyən edilməsi.
* Əlavə edildi: Ultimate Multisite ilə əlaqəli bütün Woocommerce məhsullarını işarələmək üçün birdəfəlik düzəliş daxil edildi.
* Əlavə edildi: Ultimate Multisite tərəfindən yaradılmış məhsullar Woocommerce siyahısından çıxarıldı.
* Təkmilləşdirmə: Səbətə tətbiq etmək üçün təkrarlanmayan Woocommerce endirimi yaradıldı.
* Təkmilləşdirmə: Təkrarlanan endirim Woocommerce məhsuluna bərpa edildi.
* Təkmilləşdirmə: Woocommerce məhsuluna təkrarlanan endirim etiketi əlavə edildi.
* Təkmilləşdirmə: Ödəniş səhifəsində məhsul növü təmin edildi.
* Düzəliş: Aşağı plana keçid prosesi zamanı üzvlük statusu saxlanıldı.
* Düzəliş: Ləğvetmə prosesi zamanı xətalardan yayınmaq üçün abunəliyin mövcud olub-olmadığı yoxlanıldı.
* Düzəliş: Woocommerce abunəliklərində istifadə üçün abunəliyin başlanğıc tarixi əlavə edildi.
* Daxili: Yeni PHP 8.1 qurma prosesi tətbiq edildi.

Versiya 2.0.0 - Tam yenidən yazılma.

* Əlavə edildi: Ödəniş şlüzünü dəyişərkən və ya üzvlüyü ləğv edərkən woo abunəliyini silmək üçün ləğvetmə metodunu işlət;
* Əlavə edildi: Üzvlükləri aşağı və yuxarı plana keçirmək üçün idarəedici;
* Təkmilləşdirmə: Account yeniləməsinə icazə vermək üçün alt saytlarda müştəri yeniləmə formasında woocommerce asılılıqlarını yüklə;
* Təkmilləşdirmə: Mövcud deyilsə, Woocommerce səbətini düzgün yüklə;
* Təkmilləşdirmə: Ödəniş prosesini işlədərkən əsas sayt cədvəllərində olduğumuzu təmin et;
* Təkmilləşdirmə: Ultimo yenilənmə sifarişini son ödənişə görə deyil, Woocommerce abunəlik sifarişi dəyərinə əsaslandır;
* Düzəliş: WU Membership düymə keçidi;
* Düzəliş: Woocommerce abunəliklərinin yenilənməsi ödənildikdə Ultimo sifarişini ödənilmiş kimi təyin et;
* Qurma: Qurucu kimi MPB əlavə et;

Versiya 2.0.0-beta-5 - 2022-01-21 tarixində buraxılıb

* Daxili: Hook və filtr generatoru əlavə edildi;
* Daxili: Tərtibatçı rahatlığı üçün Ultimate Multisite stub-ları əlavə edildi;
* Düzəldildi: Lazım olmadıqda bir neçə məhsulun yaradılmasının qarşısı alındı;

Versiya 2.0.0-beta.4 - 2021-09-23

* Düzəliş: WooCommerce-in yalnız əsas saytda deyil, şəbəkə üzrə aktiv olmasını tələb etmək;
* Təkmilləşdirmə: əlavənin mu-plugin kimi istifadə edilməsinə icazə verən filtr əlavə edildi;

Versiya 2.0.0-beta.3 - 2021-05-28

* Düzəliş: Dashboard giriş nəzarəti həddindən artıq sərt idi;
* Təkmilləşdirmə: Ultimate Multisite üst menyusuna WooCommerce kömək keçidləri əlavə edildi;

Versiya 2.0.0-beta.2 - 2021-05-04

* Təkmilləşdirmə: WCS yenilənmə sifarişi yaradılarkən Ultimo-da gözləyən ödənişlər yaradır;
* Təkmilləşdirmə: faktura sahələrini Ultimate Multisite müştəri məlumatları ilə əvvəlcədən doldurur;
* Təkmilləşdirmə: şlüzlər üçün faktura sahələrini geri əlavə edir;

Versiya 2.0.0-beta.1 - 2021-05-04

* İlkin beta buraxılış

-- Köhnə Versiyalar --

Versiya 1.2.6 - 26/03/2020

* Düzəldildi: WooCommerce Subscriptions-un daha yeni versiyaları ilə kiçik uyğunsuzluq;

Versiya 1.2.5 - 26/08/2019

* Düzəldildi: Əvvəlki buraxılışda xəta;

Versiya 1.2.4 - 22/08/2019

* Təkmilləşdirildi: İnteqrasiyadan dərhal sonra WooCommerce ödəniş ekranına yönləndirmək üçün seçim əlavə edildi;

Versiya 1.2.3 - 26/05/2019

* Düzəldildi: Bəzi kənar hallarda WooCommerce üçün ödəniş e-poçtu yoxa çıxırdı;

Versiya 1.2.2 - 27/02/2019

* Əlavə edildi: WooCommerce Subscription inteqrasiyasında quraşdırma haqları üçün dəstək;

Versiya 1.2.1 - 17/11/2018

* Düzəldildi: Ultimate Multisite versiya 1.9.0 ilə uyğunluq problemləri;

Versiya 1.2.0 - 10/09/2018

* Təkmilləşdirildi: Əlavələr üçün yeni yeniləmə URL-i;
* Əlavə edildi: WooCommerce Subscription üçün beta dəstək;

Versiya 1.1.2 - 11/02/2018

* Düzəldildi: WooCommerce endpoint-lərindəki dəyişikliklərə cavab vermək üçün Ödəniş keçidinin dinamik yaradılması;
* Təkmilləşdirildi: `payment_completed` çağırıldıqda sifarişlərimiz üçün tamamlanmış statusunu indi məcburi edirik ki, yenilənmə hook-larımız lazım olduğu vaxt işləsin;

Versiya 1.1.1 - 24/01/2018

* Düzəldildi: İndi WooCommerce-in yalnız əsas saytda aktivləşdirilib-aktivləşdirilmədiyini də yoxlayır;
* Düzəldildi: Sifariş yaradılmasına vergilərin daxil edilməsinə imkan vermək üçün over-loading-lər əlavə edildi;

Versiya 1.1.0 - 04/11/2017

* Düzəldildi: İndi inteqrasiya düyməsinin etiketi həqiqətən parametrləri əks etdirmək üçün dəyişir. Ultimate Multisite 1.5.0 tələb olunur;
* Düzəldildi: WooCommerce Integration indi WooCommerce şəbəkə üzrə aktiv olmasa və yalnız əsas saytda aktivləşdirilsə belə işləyir;

1.0.0 - İlkin buraxılış
