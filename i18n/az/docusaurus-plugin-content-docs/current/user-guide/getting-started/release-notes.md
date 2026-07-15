---
title: Buraxılış qeydləri
sidebar_position: 9
_i18n_hash: f43456fb08d6572cbc3ddf432a51d7d5
---
# Buraxılış Qeydləri

## Versiya 2.13.0 — 2026-06-05 tarixində buraxılıb {#version-2130--released-on-2026-06-05}

- Yeni: Müştəri Account-u, ödəniş, fakturalaşdırma, sayt, faktura, şablon dəyişdirmə və domen xəritələnməsi axınları üçün suveren-tenant dəstəyi əlavə edildi ki, tenant şəbəkələri idarə olunan əməliyyatlar üçün müştəriləri əsas sayta geri yönləndirə bilsin.
- Yeni: Təkrarlanan üzvlüklər üçün yenilənmə-etimadnaməsi yoxlamaları əlavə edildi ki, saxlanılmış fakturalaşdırma razılaşması, abunəlik və ya vault token olmadıqda ödəniş keçidləri avtomatik yenilənməni söndürə bilsin.
- Yeni: Gözləyən sayt yaradılması üçün HMAC ilə təsdiqlənmiş loopback yayımlama əlavə edildi ki, fon işlərinin gecikdiyi hostlarda ödənişdən-sayta təminetmə daha etibarlı olsun.
- Yeni: SSO URL-ləri, ödəniş forması baza domenləri və avtomatik domen qeydi yaradılması üçün developer genişləndirmə nöqtələri əlavə edildi.
- Düzəliş: SSO xəritələnmiş domenlər, anonim broker ziyarətləri, çıxış və pluginlərarası asılılıq ziddiyyətləri üzrə daha etibarlıdır.
- Düzəliş: Gözləyən sayt yaradılması indi köhnəlmiş yayımlama bayraqlarından bərpa olunur və müştərilərin sayt yaratma ekranında ilişib qalmasının qarşısını alır.
- Düzəliş: Domen qeydləri artıq paylaşılan ödəniş forması baza domenləri üçün yaradılmır və heç bir inteqrasiya aktiv olmadıqda istifadə olunmayan host-provayder fon işləri ötürülür.
- Düzəliş: Ödəniş, fakturalaşdırma ünvanı, parol sıfırlama, e-poçt təsdiqi, şablon dəyişdirmə, turlar və müştəri Dashboard-u ilə bağlı kənar hallar artıq normal müştəri axınlarını bloklamır.
- Düzəliş: Yayım e-poçtları indi alıcı siyahıları və ya poçt ötürmələri uğursuz olduqda SMTP/plugin fatal xətalarından yayınaraq alıcıları gizli saxlayır.
- Düzəliş: Üzvlük yenilənmələri, bitmə tarixi göstərilməsi və ödəniş toplama ilə bağlı kənar hallar artıq dərhal bitmələrin, çökmələrin və ya tələb olunan ödənişlərin qaçırılmasının qarşısını alır.
- Təkmilləşdirildi: WordPress uyğunluğu 7.0-a qədər test edilib, istehsal Vue resursları npm mənbələrindən yenidən qurulub və Cypress end-to-end əhatəsi indi daha çox ödəniş, quraşdırma, SSO və ödəniş keçidi axınlarını yoxlayır.

## Versiya 2.12.0 — 2026-05-15 tarixində buraxılıb {#version-2120--released-on-2026-05-15}

- Yeni: Hostinger (hPanel) domen xəritələnməsi inteqrasiyası ilə dəstəklənən host provayderi kimi əlavə edildi
- Yeni: Sayt İxracçısı indi bütün şəbəkə üzrə sayt bərpasını sadələşdirmək üçün şəbəkə import paketlərini emal edir
- Düzəliş: BCC yayım e-poçtları indi alıcı ünvanlarının açıqlanmasının qarşısını almaq üçün undisclosed-recipients header-indən istifadə edir
- Düzəliş: Üzvlüyün bitmə tarixi artıq tarix olmayan dəyərlə saxlanarkən korlanmır
- Düzəliş: Stripe üzvlük yeniləmələri artıq köhnəlmiş deleteDiscount API-ni çağırmadan endirimləri düzgün təmizləyir
- Düzəliş: Domen xəritələnmiş saytlarda SSO yönləndirmələri indi sonsuz yönləndirmə dövrlərinin qarşısını almaq üçün məhdudlaşdırılır
- Düzəliş: Quraşdırma sehrbazının şəkil seçici seçimi indi əsas məlumat modelini düzgün yeniləyir
- Düzəliş: Sayt İxracçısı CLI indi düzgün standart şəbəkə saytı seçimini qoruyur
- Təkmilləşdirildi: Plugin paketindən daxil edilmiş wp-cli silindi, plugin ölçüsü azaldıldı

## Versiya 2.11.0 — 2026-05-11 tarixində buraxılıb {#version-2110--released-on-2026-05-11}

- Yeni: Sayt ixracları indi öz-özünə başladılan `index.php` paketləyir ki, ZIP ayrıca plugin quraşdırılması olmadan təzə hostda quraşdırıla bilsin.
- Yeni: Şəbəkə ixracı administratorlara Sayt İxracı admin səhifəsindən bütün alt saytları tək arxivdə ixrac etməyə imkan verir.
- Yeni: Sayt Şablonlarına İcazə Ver plan keçidi indi fallback zənciri vasitəsilə tətbiq olunur və plan limitləri üçün şablon əlçatanlığını düzgün məhdudlaşdırır.
- Yeni: Ödəniş forması redaktoru tələb olunan sahə konfiqurasiya edilmədən məhsul əlavə edildikdə xəbərdarlıq edir.
- Yeni: Import/Export ayarları tabı indi öz əhatəsini aydın təsvir edir və birbaşa Sayt İxracı alətinə keçid verir.

## Versiya 2.10.0 — 2026-05-05 tarixində buraxılıb {#version-2100--released-on-2026-05-05}

- Yeni: Problemsiz ödəniş keçidi konfiqurasiyası üçün OAuth flag gate ilə manual etimadnamə girişi üçün PayPal yönləndirilən quraşdırma sehrbazı.
- Yeni: Şablon dəyişdirmə müştəri paneli cari-şablon kartı, davamlı grid və **Cari şablonu sıfırla** düyməsi ilə yenidən dizayn edildi.
- Düzəliş: Şablon dəyişdirmə AJAX uğursuzluğu zamanı artıq UI-ni dondurmur.
- Düzəliş: Şablon dəyişdirmə icazə vəziyyətləri icazəsiz girişə qarşı qorundu.
- Düzəliş: Sayt override girişləri saxlamadan əvvəl doğrulandı.
- Düzəliş: Fakturalaşdırma ünvanı boş olduqda indi ünvan sorğusu göstərilir.
- Düzəliş: PHP 8.1 null-dan-string-ə köhnəlmə bildirişləri həll edildi.
- Düzəliş: Zamanlama problemlərinin qarşısını almaq üçün Currents init hook-dan əvvəl lazy-loaded edildi.
- Düzəliş: Filtrlənmiş SSO yolu bütün giriş axınlarında nəzərə alındı.
- Düzəliş: Boş sayt kimliyi seçimləri saxlanarkən qorundu.

## Versiya 2.9.0 — 2026-04-30 tarixində buraxılıb {#version-290--released-on-2026-04-30}

- Yeni: Tək-sayt ixracı və importu **Alətlər > İxrac və Import** altında əlavə edildi.
- Düzəliş: İxrac ZIP faylları indi autentifikasiya edilmiş yükləmə endpoint-i vasitəsilə təqdim olunur.
- Düzəliş: Gözləyən ixrac/import sorğularında SQL injection riski və sorğu problemləri düzəldildi.
- Düzəliş: Admin müştəri e-poçtunu manual təsdiqlədikdə gözləyən sayt yayımlanmırdı.
- Düzəliş: Üzvlük olmadıqda yetim pending_site qeydləri təmizləndi.
- Düzəliş: Ayarlar naviqasiyasının padding-i və axtarış anchor naviqasiyası düzəldildi.
- Düzəliş: Gözləyən saytlar indi Bütün Saytlar görünüşündə birinci göstərilir.
- Düzəliş: 403 xətalarının qarşısını almaq üçün skrinşot provayderi (mShots) User-Agent header-i əlavə edildi.
- Düzəliş: Import cron cədvəli dövri asılılığı həll edildi.
- Düzəliş: Tur ID-ləri istifadəçi ayarları açarlarında alt xətlərə normallaşdırıldı.
- Təkmilləşdirildi: Daha yaxşı uyğunluq üçün Alchemy/Zippy əvəzinə ZipArchive istifadə olunur.

## Versiya 2.8.0 — 2026-04-29 {#version-280--released-on-2026-04-29}

- Yeni: Other Options tənzimləmələri UI-sinə Enable Jumper açarı əlavə edildi.
- Yeni: Checkout formaları siyahısı cədvəlinə status sütunu əlavə edildi.
- Yeni: Fərdi MU plugin sunrise genişləndirmələri üçün addon sunrise fayl yükləyicisi.
- Təkmilləşdirildi: Tənzimləmələr səhifəsindən xəta hesabatı üçün razılıq tənzimləməsi silindi.
- Düzəliş: Təşəkkür səhifəsində site kartı — şəkil indi məhdudlaşdırılır və linklər düzgün üslublandırılır.
- Düzəliş: Screenshot təminatçısı thum.io-dan WordPress.com mShots-a dəyişdirildi.
- Düzəliş: Enable Registration və Default Role indi təzə quraşdırmada düzgün standart dəyərlər təyin edir.
- Düzəliş: `get_site_url()` domenə port daxil olduqda artıq boş qaytarmır.
- Düzəliş: `copy_media` tənzimləməsi boş olduqda klon media faylları indi düzgün kopyalanır.
- Düzəliş: Şəbəkə üzrə aktivləşdirilmiş sitemeta yazısından sonra obyekt keşi düzgün etibarsızlaşdırıldı.
- Düzəliş: 3 hissəli domenlər üçün DNS yoxlamasında fərdi domen avtomatik olaraq əsas domenə yüksəldildi.
- Düzəliş: Müddəti bitmiş ödəniş təmizləndikdə gözləyən membership ləğv edildi.
- Düzəliş: Sətirdaxili login sorğusu bağlandıqdan sonra parol gücü yoxlayıcısı yenidən bağlandı.
- Düzəliş: Site artıq yaradıldıqda təşəkkür səhifəsində sonsuz səhifə yenilənməsi dayandırıldı.
- Düzəliş: WP nüvə qeydiyyat seçimi plugin aktivləşdiriləndə və tənzimləmələr saxlanılanda sinxronlaşdırıldı.
- Düzəliş: PHP 8.4 uyğunluğu üçün `calculate_expiration` daxilində null bitmə müddəti qoruyucusu əlavə edildi.
- Düzəliş: Müştərinin artıq aktiv membership-i olduqda təkrar qeydiyyatlar bloklandı.
- Düzəliş: Checkout-da `date_expiration` üçün null yoxlaması əlavə edildi.
- Düzəliş: Site təminatı möhkəmləndirildi — məhdudiyyətlər, membership-in çıxarılması, domenin yüksəldilməsi.
- Düzəliş: Pre-install yoxlama status etiketi yoxlama uğursuz olduqda NOT Activated kimi düzəldildi.
- Düzəliş: Email doğrulama URL-ləri üçün checkout domeni istifadə edildi.
- Düzəliş: Parol sahəsi olmadıqda checkout-dan sonra avtomatik login.
- Düzəliş: Pulsuz membership-lərin müddəti artıq bitmir — ömürlük kimi qəbul edilir.
- Düzəliş: Email doğrulama qapısı müştəri email-i doğrulayana qədər site dərcini saxlayır.
- Düzəliş: SES v2 API endpoint baza yolu və identity marşrutu düzəldildi.
- Düzəliş: `wu_inline_login_error` hook-u göndərmədən əvvəlki catch blokunda yayımlandı.
