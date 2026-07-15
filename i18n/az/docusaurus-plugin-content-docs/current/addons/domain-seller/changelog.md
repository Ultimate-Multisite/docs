---
title: Domen Satıcısı Dəyişikliklər jurnalı
sidebar_position: 99
_i18n_hash: 6b9be73c1503d8df8a806bb02b241873
---
# Domain Seller Dəyişiklik jurnalı

Versiya 1.3.0 - 2026-06-02 tarixində buraxılıb
- Yeni: HostAfrica reseller balansı çox aşağı düşəndə network-admin xəbərdarlığı əlavə edildi
- Yeni: Yeni qeydiyyatdan keçirilmiş domenlərin network saytına avtomatik xəritələnməsi əlavə edildi
- Düzəliş: Qeydiyyatçı sahəsi tələbləri yalnız yeni domen qeydiyyatdan keçirilərkən tətbiq edildi
- Düzəliş: Balans monitorinq bildirişləri bağlana bilən edildi
- Düzəliş: WooCommerce qeydiyyatçı hesablaşma məlumatlarının qorunması təmin edildi
- Düzəliş: Qeydiyyat zamanı qeydiyyatçı əlaqə tələbləri məcburi edildi
- Düzəliş: Domen qeydiyyatı məhsullarının 0% marja ilə yaradılmasının qarşısı alındı
- Düzəliş: Checkout sessiyası axını boyunca domen seçimləri və qiymətlər qorundu
- Düzəliş: HostAfrica domen qiymət valyutası göstərilməsi yaxşılaşdırıldı
- Düzəliş: WP-core query-var uyğunsuzluqlarının qarşısını almaq üçün checkout form-action davranışı yaxşılaşdırıldı
- Yaxşılaşdırıldı: Quraşdırma təlimatında HostAfrica reseller konfiqurasiyası sənədlərinə keçid verildi

Versiya 1.2.0 - 2026-05-25 tarixində buraxılıb
- Yeni: HostAfrica checkout, quraşdırma sehrbazı, axtarış, TLD/qiymətləndirmə, qeydiyyat, yeniləmə, transfer, ad serveri, DNS, EPP kodu, registrar kilidi və ID qoruması dəstəyi ilə domen satışı inteqrasiyası kimi əlavə edildi
- Yeni: Openprovider reseller qiymətləndirməsi, qeydiyyat, yeniləmə, transfer, ad serveri, DNS, EPP kodu, registrar kilidi, WHOIS məxfiliyi və TLD sinxronlaşdırma dəstəyi ilə domen satışı inteqrasiyası kimi əlavə edildi
- Yeni: Hostinger əsas inteqrasiyadan paylaşılan Hostinger API tokenindən istifadə edərək əlçatanlıq yoxlamaları, qeydiyyat, ad serveri yeniləmələri, registrar kilidi və WHOIS məxfiliyi üçün domen satışı inteqrasiyası kimi əlavə edildi
- Yaxşılaşdırıldı: Tərtibatçı inteqrasiyası təlimatı üçün domen həyat dövrü əməliyyatı və filtr docblock-ları əlavə edildi
- Yaxşılaşdırıldı: Əlavənin readme faylında plugin uyğunluq metadatası WordPress 7.0-a yeniləndi
- Yaxşılaşdırıldı: Gələcək buraxılış koordinasiyası üçün istifadə olunan planlaşdırma şablonları yeniləndi

Versiya 1.1.0 - 2026-05-08 tarixində buraxılıb
- Yeni: DNS qeydi yaradılması (add_dns_record) ResellerClub, Enom və OpenSRS registrarları üçün həyata keçirildi
- Düzəliş: Defolt DNS qeydləri parseri indi {DOMAIN} və {SITE_URL} tokenlərini qəbul edir
- Düzəliş: Domen seçimi checkout sahəsi slug-ları site_url ilə toqquşmanın qarşısını almaq üçün ad məkanına salındı

Versiya 1.0.8 - 2026-05-07 tarixində buraxılıb
- Düzəliş: ResellerClub domen qiymətləndirməsi indi düzgün API endpoint-indən canlı maya dəyəri qiymətlərini götürür

Versiya 1.0.7 - 2026-05-06 tarixində buraxılıb
* Düzəliş: ResellerClub test_connection tələb olunan tlds parametrini göndərir (#224)

Versiya 1.0.6 - 2026-05-05 tarixində buraxılıb
* Düzəliş: ResellerClub domen qeydiyyatı indi təkmilləşdirilmiş API cavabı emalı və registr yönümlü provayder yönləndirməsi ilə düzgün işləyir
* Düzəliş: Register Domain admin səhifəsi UX yaxşılaşdırmaları
* Silindi: CyberPanel registrar inteqrasiyası

Versiya 1.0.5 - 2026-04-02 tarixində buraxılıb
* Yeni: Domen qeydiyyatı və idarəetməsi üçün GoDaddy registrar inteqrasiyası
* Yeni: NameSilo registrar inteqrasiyası
* Yeni: ResellerClub registrar inteqrasiyası
* Yeni: Domen alışı və xəritələnməsi zamanı SES göndərmə domeninin avtomatik təsdiqlənməsi
* Düzəliş: Test mühitində plugin sabitlərini yenidən təyin edilmədən qoruma
* Düzəliş: install-wp-tests.sh-də MySQL bayraqları düzgün sözlərə bölünür

Versiya 1.0.4 - 2026-03-14 tarixində buraxılıb
* **Düzəliş:** Bəzi çatışmayan css assetləri
* **Düzəliş:** Əlçatan olmayan tld-lərlə bağlı xəta

Versiya 1.0.3 - 2026-03-09 tarixində buraxılıb
* **Düzəliş:** Checkout shortcode-u ilə köhnə qeydiyyat şablonundan istifadə edərkən Vue reaktiv xüsusiyyət xətaları (domain_option, selected_domain, domain_provider)
* **Düzəliş:** Subdomen giriş sahəsinin düzülüş pozuntusu və domen seçimi checkout sahəsində həddindən artıq böyük mətn
* **Düzəliş:** Domen seçimi sahəsi mövcud olduqda "URL-niz belə olacaq" önizləmə blokunu gizlətmək

Versiya 1.0.2 - 2026-03-01 tarixində buraxılıb
* **Yaxşılaşdırıldı:** Qlobal marja ayarları ayarlar səhifəsindən silindi — qiymətləndirmə indi yalnız hər məhsul üzrədir
* **Yaxşılaşdırıldı:** Sürətli naviqasiya üçün ayarlar səhifəsinə "Domen Məhsullarını İdarə Et" keçidi əlavə edildi
* **Yaxşılaşdırıldı:** Domen məhsul ayarları üçün daha aydın sahə təsvirləri və ipucları (catch-all vs TLD-specific, marja növləri, giriş qiymətləndirməsi)
* **Yaxşılaşdırıldı:** Ayarlar səhifəsi boyunca daha yaxşı təsvirlər (TLD-ləri axtarış, yeniləmələr, DNS, bildirişlər)

Versiya 1.0.1 - 2026-02-27 tarixində buraxılıb

* **Yeni:** Toplu qiymət idarəetməsi üçün TLD import aləti
* **Yeni:** Domen məhsulları üçün giriş qiymətləndirməsi dəstəyi
* **Yeni:** Cypress ilə E2E test dəsti
* **Yeni:** Domen həyat dövrü bildirişləri üçün email şablonları
* **Yeni:** Admin domen qeydiyyatı modalında registrant ünvan sahələri, settings-dən əvvəlcədən doldurulmuş
* **Yeni:** Qeydləri əlavə etmə, redaktə etmə və silmə dəstəyi olan müştəri DNS idarəetmə interfeysi
* **Yeni:** Avtomatik domen xəritələnməsi ilə "Öz domenini gətir" checkout seçimi
* **Yeni:** Checkout zamanı domen adından sayt URL-inin avtomatik yaradılması
* **Yeni:** Settings-də standart nameserver və DNS qeyd konfiqurasiyası
* **Yeni:** Əsas domen redaktə səhifəsində domen qeydiyyatı detalları və DNS idarəetməsi
* **Yeni:** Quraşdırma sehrbazı məntiqli standartlarla standart domen məhsulunu avtomatik yaradır
* **Yeni:** Bütün konfiqurasiya edilmiş provayderlər üzrə cron vasitəsilə gündəlik avtomatik TLD sinxronizasiyası
* **Yeni:** Hər məhsul üzrə konfiqurasiya ilə WHOIS məxfilik qoruması (həmişə aktiv, müştəri seçimi və ya deaktiv)
* **Yeni:** Qiymət göstərimi və dark mode dəstəyi ilə WHOIS məxfilik checkout checkbox-u
* **Yeni:** Manual domen qeydiyyatı üçün Register Domain admin səhifəsi
* **Yeni:** Ultimate Multisite yeniləmə serveri vasitəsilə avtomatik plugin yeniləmələri
* **Yeni:** Bənövşəyi nişan üslubu ilə məhsul siyahısı cədvəlində domen məhsul növü filter tab-ı
* **Yeni:** Domen checkout formunda registrant əlaqə sahələri (ad, ünvan, şəhər, ştat, poçt kodu, ölkə, telefon)
* **Yeni:** Registrar API çağırmazdan əvvəl aydın xəta mesajları ilə registrant sahə yoxlanışı
* **Yeni:** Domen qeydiyyatı hadisələri üçün provayderə xas log kanalları (məs. domain-seller-namecheap.log)
* **Yeni:** Əsas qeydiyyat/signup checkout formunda registrant əlaqə sahələri (domen qeydiyyatdan keçirilərkən göstərilir)
* **Təkmilləşdirildi:** Domain Search checkout sahəsi subdomain, register və existing domain tab-larını dəstəkləyən vahid Domain Selection sahəsi ilə əvəz edildi
* **Təkmilləşdirildi:** Domen məhsul settings-ləri əsas widget sistemi vasitəsilə məhsul redaktə səhifəsində inline göstərilir
* **Təkmilləşdirildi:** Müştəri domen məlumatı ayrıca metabox əvəzinə əsas domen xəritələmə widget-inə qoşulur
* **Təkmilləşdirildi:** TLD import sehrbazı bütün provayderlərdən bir kliklə sinxronizasiyaya sadələşdirildi
* **Təkmilləşdirildi:** Namecheap domen mövcudluğu daha sürətli axtarış üçün batch API çağırışından istifadə edir
* **Təkmilləşdirildi:** Namecheap qiymət API-si düzgün parametrlərdən və cavab təhlilindən istifadə edir
* **Təkmilləşdirildi:** TLD saxlanması tək network option-da mərkəzləşdirildi
* **Təkmilləşdirildi:** DNS dəyişiklikləri, transferlər və konfiqurasiya tətbiqi üçün domen fəaliyyət log-lanması
* **Təkmilləşdirildi:** Batch yoxlama ilə IANA əsas siyahısından istifadə edən OpenSRS üçün tam TLD sinxronizasiyası
* **Təkmilləşdirildi:** Səhifələnmiş API sorğuları ilə Namecheap üçün tam TLD sinxronizasiyası
* **Təkmilləşdirildi:** Legacy provayder class-ları Integration Registry nümunəsi ilə əvəz edildi
* **Təkmilləşdirildi:** DNS və transfer konfiqurasiyası olan settings paneli
* **Təkmilləşdirildi:** Telefon nömrələri avtomatik olaraq +CC.NNN registrar formatına çevrilir
* **Təkmilləşdirildi:** Telefon sahəsi yoxlanışı göndərmədən əvvəl formatlama simvollarını silir
* **Təkmilləşdirildi:** Versiya tələbi daha aydın bildirişlə Ultimate Multisite 2.4.12-yə yüksəldildi
* **Təkmilləşdirildi:** CI workflow həm addon, həm də əsas plugin üçün düzgün checkout istifadə edir
* **Təkmilləşdirildi:** prepare_registrant_info() billing ünvanı fallback-i ilə checkout-da saxlanmış istifadəçi meta-sından oxuyur
* **Düzəldildi:** Checkout zamanı sistemə daxil olmayan istifadəçilər üçün domen axtarışı AJAX-ın uğursuz olması
* **Düzəldildi:** Checkout zamanı sistemə daxil olmayan istifadəçilər üçün domen qiyməti AJAX-ın uğursuz olması
* **Düzəldildi:** WP-CLI əmrləri işlədilərkən Spyc class-ının yenidən elan edilməsi fatal error-u
* **Düzəldildi:** Namecheap sandbox API timeout-u çox qısa idi
* **Düzəldildi:** Domen axtarışında Select düyməsinin mətni yaşıl fonda görünmürdü
* **Düzəldildi:** Əlaqə məlumatı çatışmadığı üçün domen qeydiyyatının "RegistrantFirstName is Missing" xətası ilə uğursuz olması
* **Düzəldildi:** Checkout vaxtı sayt hələ mövcud olmayanda blog_id=0 ilə domen qeydi yaradılırdı
* **Düzəldildi:** Standart TLD-lər setting-i təhlil edilmiş massiv əvəzinə string kimi qaytarılırdı
* **Silindi:** Ayrıca Domain Management admin səhifəsi — indi əsas domen səhifələri vasitəsilə idarə olunur

Versiya 1.0.0 - 2025-09-28 tarixində buraxılıb

**Ultimate Multisite v2 üçün Böyük Yenidən Yazılma**

* **Yeni:** Müasir PHP 7.4+ arxitekturası ilə tam yenidən yazılma
* **Yeni:** Ultimate Multisite v2 checkout sistemi ilə problemsiz inteqrasiya
* **Yeni:** Çevik qiymət seçimləri ilə domen məhsulu idarəetməsi
* **Yeni:** Çoxsaylı domen provayderi dəstəyi arxitekturası
* **Yeni:** Avtomatik yenilənmə və subscription inteqrasiyası
* **Yeni:** Müştəri domen idarəetmə interfeysi
* **Yeni:** Admin domen monitorinqi və log-lar
* **Yeni:** Domen məhsulları üçün kupon dəstəyi
* **Yeni:** Hərtərəfli settings idarəetməsi
* **Yeni:** Developer üçün əlverişli genişləndirilə bilən codebase
* **Təkmilləşdirildi:** Tam funksiya dəstəyi ilə OpenSRS provayderi yeniləndi
* **Təkmilləşdirildi:** Ultimate Multisite v2 ilə uyğun müasir UI
* **Düzəldildi:** Bütün köhnəlmiş v1 kodu v2 standartlarına yeniləndi
* **Silindi:** Legacy v1 uyğunluğu (breaking change)

### Əvvəlki Versiyalar (v1 Legacy) {#previous-versions-v1-legacy}

### Versiya 0.0.3 - 20/08/2019 {#version-003---20082019}

* Düzəldildi: Groundhogg CRM ilə uyğunsuzluq
* Qeyd: Bu, v1 ilə uyğun son buraxılış idi

### Versiya 0.0.2 - 07/12/2018 {#version-002---07122018}

* Düzəldildi: License Key sahəsi silindi
* Düzəldildi: Xüsusiyyət plugin-i aktiv olduqda plan tab-ları çatışmırdı
* Təkmilləşdirildi: Qeydiyyat sahəsinə keç düyməsi əlavə edildi

### Versiya 0.0.1 - İlkin Buraxılış {#version-001---initial-release}

* WP Ultimo v1 üçün əsas OpenSRS inteqrasiyası
* Sadə domen axtarışı və qeydiyyatı
* Plan əsaslı domen icazələri
