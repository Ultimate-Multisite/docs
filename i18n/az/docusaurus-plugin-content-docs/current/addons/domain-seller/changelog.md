---
title: Domain Seller Changelog
sidebar_position: 99
_i18n_hash: bc3ab4e3f0076e80e8c38ed313f4430d
---
# Domain Seller Değişiklik Qeydi

Version 1.1.0 - Yayınlanma tarixi 2026-05-08
- Yeni: ResellerClub, Enom və OpenSRS registrarları üçün DNS qeydi yaratmaq (add_dns_record) funksionallığı tətbiq edildi
- Düzəliş: Default DNS Qeydləri parser-i indi {DOMAIN} və {SITE_URL} tokenlərini nəzərdən keçirir
- Düzəliş: Domen seçimi checkout sahəsinin slug adları, site_url ilə toqquşmasını önləmək üçün adlandırıldı

Version 1.0.8 - Yayınlanma tarixi 2026-05-07
- Düzəliş: ResellerClub domen qiymətləndirməsi indi düzgün API nöqtəsindən canlı xərc qiymətlərini çəkir

Version 1.0.7 - Yayınlanma tarixi 2026-05-06
* Düzəliş: ResellerClub test_connection tələb olunan tlds parametrinə (#224) göndərir

Version 1.0.6 - Yayınlanma tarixi 2026-05-05
* Düzəliş: ResellerClub domen qeydiyyatı, təkmilləşdirilmiş API cavab idarəetməsi və qeydiyyat agentinə əsaslanan provayder yönləndirməsi ilə düzgün işləyir
* Düzəliş: Register Domain admin səhifəsinin istifadəçi təcrübəsi (UX) təkmilləşdirildi
* Silindi: CyberPanel registrar inteqrasiyası

Version 1.0.5 - Yayınlanma tarixi 2026-04-02
* Yeni: Domen qeydiyyatı və idarəetməsi üçün GoDaddy registrar inteqrasiyası
* Yeni: NameSilo registrar inteqrasiyası
* Yeni: ResellerClub registrar inteqrasiyası
* Yeni: Domen alınması və xəritələnməsi zamanı SES göndərilən domeninin avtomatik yoxlanılması
* Düzəliş: Test mühitində Guard plugin sabitləri yenidən təyin edilməsinə qarşı qorunuldu
* Düzəliş: MySQL bayraqları install-wp-tests.sh faylında düzgün word-split edilir

Version 1.0.4 - Yayınlanma tarixi 2026-03-14
* **Düzəliş:** Bəzi çatışmayan css assetləri
* **Düzəliş:** İstifadə edilə bilməyən tlds ilə bağlı xəta

Version 1.0.3 - Yayınlanma tarixi 2026-03-09
* **Düzəliş:** Köhnə signup şablonu ilə checkout shortcode istifadə edilərkən Vue reaktiv xüsusiyyət xətaları (domain_option, selected_domain, domain_provider)
* **Düzəliş:** Domen seçimi checkout sahəsində altdomen giriş sahəsinin hizalanmaması və böyük mətn
* **Düzəliş:** Domen seçimi sahəsi mövcud olduqda "Your URL will be" önizləmə bloku gizlədilir

Version 1.0.2 - Yayınlanma tarixi 2026-03-01
* **Təkmilləşdirildi:** Ayarlar səhifəsindən global markup ayarları çıxarıldı — qiymətləndirmə indi yalnız məhsula görədir
* **Təkmilləşdirildi:** Ayarlar səhifəsində sürətli naviqasiya üçün "Manage Domain Products" linki əlavə edildi
* **Təkmilləşdirildi:** Domen məhsulu ayarları üçün daha aydın sahə təsvirləri və tooltip-lər (catch-all vs TLD-specific, markup növləri, təqdimat qiymətləndirməsi)
* **Təkmilləşdirildi:** Ayarlar səhifəsi boyunca daha yaxşı təsvirlər (TLD-ləri axtarmaq, yeniləmələr, DNS, bildirişlər)

Version 1.0.1 - Yayınlanma tarixi 2026-02-27

* **Yeni:** Toplu qiymətləndirmə idarəetməsi üçün TLD import aləti
* **Yeni:** Domen məhsulları üçün təqdimat qiymətləndirməsi dəstəyi
* **Yeni:** Cypress ilə E2E test dəsti
* **Yeni:** Domen dövrü bildirişləri üçün e-poçt şablonları
* **Yeni:** Admin domen qeydiyyat modalında qeydiyyatçı ünvan sahələri, ayarlar vasitəsilə ön-doldurulur
* **Yeni:** Əlavə, redaktə və silmə qeydi dəstəkləyən müştəri DNS idarəetmə interfeysi
* **Yeni:** Avtomatik domen xəritələnməsi ilə "Bring your own domain" checkout seçimi
* **Yeni:** Checkout zamanı domen adından sayt URL-inin avtomatik generasiyası
* **Yeni:** Ayarlarda default nameserver və DNS qeydi konfiqurasiyası
* **Yeni:** Əsas domen redaktə səhifəsində domen qeydiyyat detalları və DNS idarəetməsi
* **Yeni:** Setup wizard, məntiqli default ayarlar ilə default domen məhsulunu avtomatik yaradır
* **Yeni:** Bütün konfiqurasiya edilmiş provayderlər arasında cron vasitəsilə gündəlik avtomatik TLD sinxronizasiyası
* **Yeni:** Məhsulə görə konfiqurasiyalı WHOIS məxfiliyi qorunması (həmişə aktiv, müştəri seçimi və ya deaktiv)
* **Yeni:** Qiymətləndirmə göstərilən və dark mode dəstəkləyən WHOIS məxfiliyi checkout qutusu
* **Yeni:** Əl ilə domen qeydiyyatı üçün Register Domain admin səhifəsi
* **Yeni:** Ultimate Multisite update server vasitəsilə avtomatik plugin yeniləmələri
* **Yeni:** Məhsul siyahısı cədvəlində domen məhsulu tipi filtri tabı və bənövşəyi nişan stili
* **Yeni:** Domen checkout formunda qeydiyyatçı əlaqə sahələri (ad, ünvan, şəhər, vilayət, poçt kodu, ölkə, telefon)
* **Yeni:** Registrar API-ni çağırmadan əvvəl qeydiyyatçı sahə yoxlaması və aydın xəta mesajları
* **Yeni:** Domen qeydiyyat hadisələri üçün provayderə xas log kanalları (məsələn, domain-seller-namecheap.log)
* **Yeni:** Əsas qeydiyyat/signup checkout formunda qeydiyyatçı əlaqə sahələri (domen qeydiyyatı zamanı göstərilir)
* **Təkmilləşdirildi:** Domain Search checkout sahəsi, subdomain, qeydiyyat və mövcud domen tablarını dəstəkləyən vahid Domain Selection sahəsi ilə əvəz edildi
* **Təkmilləşdirildi:** Domen məhsulu ayarları, əsas widget sistemi vasitəsilə məhsul redaktə səhifəsində inline göstərilir
* **Təkmilləşdirildi:** Müştəri domen məlumatı, müstəqil metabox əvəzinə əsas domen xəritələmə widget-ına qoşulur
* **Təkmilləşdirildi:** TLD import wizard-i bütün provayderlərdən bir kliklə sinxronizasiyaya sadələşdirildi
* **Təkmilləşdirildi:** Namecheap domen mövcudluğu daha sürətli axtarış üçün batch API çağırışından istifadə edir
* **Təkmilləşdirildi:** Namecheap qiymətləndirmə API-si düzgün parametrlərdən və cavab parsing-indən istifadə edir
* **Təkmilləşdirildi:** TLD yaddaş yeri tək bir network option-da mərkəzləşdirildi
* **Təkmilləşdirildi:** DNS dəyişiklikləri, köçürmələr və konfiqurasiya tətbiqi üçün domen fəaliyyət loglaması
* **Təkmilləşdirildi:** OpenSRS üçün IANA master list istifadə edərək batch yoxlaması ilə tam TLD sinxronizasiyası
* **Təkmilləşdirildi:** Namecheap üçün səhifələnmiş API sorğuları ilə tam TLD sinxronizasiyası
* **Təkmilləşdirildi:** Köhnə provayder sinifləri Integration Registry pattern ilə əvəz edildi
* **Təkmilləşdirildi:** DNS və transfer konfiqurasiyası ilə Ayarlar paneli
* **Təkmilləşdirildi:** Telefon nömrələri avtomatik olaraq +CC.NNN registrar formatına formatlanır
* **Təkmilləşdirildi:** Telefon sahəsi yoxlaması göndərilməzdən əvvəl formatlama simvollarını təmizləyir
* **Təkmilləşdirildi:** Versiya tələbi Ultimate Multisite 2.4.12-yə yüksəldildi və daha aydın bildiriş verildi
* **Təkmilləşdirildi:** CI workflow, həm addon, həm də əsas plugin üçün düzgün checkout istifadə edir
* **Təkmilləşdirildi:** prepare_registrant_info() checkout-da yadda saxlanılan user meta-dan və billing ünvanı fallback-dan oxuyur
* **Düzəliş:** Checkout zamanı qeydiyyə olmamış istifadəçilər üçün Domain search AJAX-ı uğursuz olurdu
* **Düzəliş:** Checkout zamanı qeydiyyə olmamış istifadəçilər üçün Domain pricing AJAX-ı uğursuz olurdu
* **Düzəliş:** WP-CLI komandaları işləyərkən Spyc sinifinin yenidən təyin edilməsi ilə bağlı fatal xəta
* **Düzəliş:** Namecheap sandbox API timeout-u çox qısa idi
* **Düzəliş:** Domain search Select düyməsinin mətni yaşıl fon üzərində görünmürdü
* **Düzəliş:** Domen qeydiyyatı, çatışmayan əlaqə məlumatı səbəbindən "RegistrantFirstName is Missing" xətası ilə uğursuz olurdu
* **Düzəliş:** Sayt hələ mövcud olmadıqda checkout zamanı domen qeydi blog_id=0 ilə yaradılırdı
* **Düzəliş:** Default TLD-lər ayarı parse edilmiş array əvəzinə string kimi qaytarılırdı
* **Silindi:** Müstəqil Domain Management admin səhifəsi — indi əsas domen səhifələri vasitəsilə idarə olunur

Version 1.0.0 - Yayınlanma tarixi 2025-09-28

**Ultimate Multisite v2 üçün Böyük Yeniləmə**

* **Yeni:** Müasir PHP 7.4+ arxitekturası ilə tam yenidən yazıldı
* **Yeni:** Ultimate Multisite v2 checkout sistemi ilə problemiz inteqrasiya
* **Yeni:** Fleksib qiymətləndirmə seçimləri ilə domen məhsulu idarəetməsi
* **Yeni:** Bir neçə domen provayderi dəstəkləyən arxitektura
* **Yeni:** Avtomatik yeniləmə və abunəlik inteqrasiyası
* **Yeni:** Müştəri domen idarəetmə interfeysi
* **Yeni:** Admin domen monitorinqi və logları
* **Yeni:** Domen məhsulları üçün kupon dəstəyi
* **Yeni:** Kompleks ayarlar idarəetməsi
* **Yeni:** Developer-friendly genişləndirilə bilən kod bazası
* **Təkmilləşdirildi:** Bütün köhnəlmiş v1 kodu v2 standartlarına yeniləndi
* **Silindi:** Köhnə v1 uyğunluğu (sarsıdıcı dəyişiklik)

### Əvvəlki Versiyalar (v1 Legacy)

### Version 0.0.3 - 20/08/2019

* Düzəliş: Groundhogg CRM ilə uyğunsuzluq
* Qeyd: Bu, son v1-uyumlu buraxılış idi

### Version 0.0.2 - 07/12/2018

* Düzəliş: Lisenziya Key sahəsi çıxarıldı
* Düzəliş: Xüsusiyyət plugin-i aktiv olduqda Plan tabları yox idi
* Təkmilləşdirildi: Qeydiyyat sahəsinə keçmə düyməsi əlavə edildi

### Version 0.0.1 - İlkin Buraxılış

* WP Ultimo v1 üçün əsas OpenSRS inteqrasiyası
* Sadə domen axtarışı və qeydiyyatı
* Plan əsaslı domen icazələri
