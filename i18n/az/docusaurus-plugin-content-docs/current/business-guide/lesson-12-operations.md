---
title: 'Dərslik 12: Biznesin İşlənməsi'
sidebar_position: 13
_i18n_hash: 0fe6371df216b74a2051b95972ad68e8
---
# Dərs 12: Biznesin İşləməsi

Bir platforma bitiriləcək bir layihə deyil — bu, idarə ediləcək bir biznesdir. Bu dərs FitSite-ı idarə etməyin gündəlik əməliyyatlarına toxunur: dəstək, fakturalar, texniki baxım və müştəriləri xoşbəxt saxlamaq.

## Harada Qaldıq

FitSite işə düşdü və müştərilər qeydiyyatdan keçirirlər. İndi isə əməliyyatı davamlı şəkildə idarə etməlisiniz.

## Gündəlik Əməliyyatlar

### Monitorinq

Bunları gündəlik yoxlayın (və ya xəbərdarlıq sistemi qurun):

- **Uptime (İşlək vəziyyət)**: Platforma istifadə üçün əlçatandır? Bir uptime monitorinq xidməti istifadə edin.
- **Yeni qeydiyyatlar**: Bu gün neçə yeni müştəri qeydiyyatdan keçdi?
- **Uğursuz ödənişlər**: Diqqət tələb edən ödəniş uğursuzluğu var?
- **Dəstək sorğuları**: Cavablanmamış müştəri sualları varmı?

### Müştəri Dəstəyi

Sizin niş fokusunuz burada bir üstünlükdür. Müştərilərinizin hamısı fitnes studiyaları olduğu üçün, eyni sualları təkrarlayıb görməyəcəksiniz:

**Gəlib-görəcəyiniz ümumi suallar:**

- "Dərs cədvəlimi necə yeniləyə bilərəm?"
- "Saytımın rənglərini dəyişə bilərəmmi?"
- "Saytıma yeni bir treyner necə əlavə edə bilərəm?"
- "Domainim işləmir"
- "Planımı necə ləğv edə/yüksəldə bilərəm?"

Bilik bazanızı (Dərs 8-də başladınız) bu təkrarlanan suallar ətrafında qurun. Bilik bazası məqaləsi ola biləcək hər bir dəstək tiketi, o məqaləni yazmaq üçün bir işarədir.

### Dəstək Səviyyələri

Böyüdükcə, dəstəyi planlara görə strukturlaşdırın:

| Plan | Dəstək Səviyyəsi | Cavab Vermə Müddəti |
|------|--------------|---------------|
| Starter | Bilik bazası + e-poçt | 48 saat |
| Growth | E-poçt dəstəyi | 24 saat |
| Pro | Prioritet e-poçt + onbording zəngi | 4 saat |

[Support Tickets addon](/addons/support-tickets) platforma daxilində dəstək sorğularını idarə etməyə kömək edə bilər.

## Faktura Əməliyyatları

### Təkrarlanan Ödənişlər

Ultimate Multisite ödəniş qapınız vasitəsilə təkrarlanan fakturalamanı avtomatik idarə edir. Sizin vəzifəniz aşağıdakıları monitorinq etməkdir:

- **Uğursuz ödənişlər**: Tez cavab verin. Əksər uğursuzluqlar qəsdən ləğv etməmək, sadəcə bitmiş kartlardır.
- **Dunning**: Ödəniş qapınız vasitəsilə avtomatik yenidən cəhd etmə məntiqini qurun (Stripe bunu yaxşı idarə edir).
- **Ləğv etmə sorğuları**: Müştərilərin niyə getdiyini anlayın. Hər bir ləğv etmə rəydir.

### Heyətlərin İdarə Edilməsi

Bütün aktiv abunəliklərinizi görmək, yüksəltmə və aşağı salma sorğularını emal etmək, lazım olduqda geri ödənişləri emal etmək və sınaq müddətlərinin bitməsini idarə etmək üçün **Ultimate Multisite > Memberships** səhifəsinə keçin:

Tam istinad üçün [Managing Memberships](/user-guide/administration/managing-memberships) səhifəsinə baxın.

### Fakturalar

Hər ödəniş üçün fakturaların düzgün yaradıldığından əmin olun. Müştərilər iş xərcləri hesabatı üçün fakturalara ehtiyac duyublar. [Managing Payments and Invoices](/user-guide/administration/managing-payments-and-invoices) səhifəsinə baxın.

## Platforma Baxımı

### WordPress və Plugin Yeniləmələri

Şəbəkə administratoru olaraq, siz aşağıdakılardan məsuliyyət daşıyırsınız:

- **WordPress əsas yeniləmələri**: İstehsal mühitinə tətbiq etməzdən əvvəl test mühitində yoxlayın
- **Plugin yeniləmələri**: Eyni şey — əvvəlcə test edin, sonra şəbəkə genişliyində tətbiq edin
- **Tema yeniləmələri**: Tema yeniləmələrindən sonra şablonların hələ də düz görünməsini yoxlayın
- **Ultimate Multisite yeniləmələri**: Dəyişiklik qeydinə (changelog) əməl edin və yeniləməzdən əvvəl test edin

:::warning Test etmədən İstehsal Mühitində Yeniləməyin
Pozulmuş bir yeniləmə şəbəkənizdəki hər bir müştəri saytını təsirləndirir. Yeniləmələri həmişə şəbəkənizin test nüsxəsi üzərində yoxlayın.
:::

### Təhlükəsizlik

- Bütün proqram təminatını güncel saxlayın
- Admin hesabları üçün güclü şifrələr və iki faktorlu autentifikasiya istifadə edin
- Şübhəli fəaliyyətləri monitorinq edin
- Təhlükəsizlik insidentləri üçün bir planınız olsun

### Performans

Şəbəkəniz böyüdükcə, aşağıdakıları monitorinq edin:

- **Səhifə yüklənmə müddətləri**: Müştəri saytları sürətlidirmi?
- **Server resurs istifadəsi**: CPU, yaddaş, disk sahəsi
- **Verilənlər bazası performansı**: Böyük şəbəkələr zamanla verilənlər bazası optimallaşdırması tələb edir

Hələ etmədiyiniz halda, kəşikləmə (page cache, object cache) və CDN tətbiq etməyi düşünün. [Cloudflare integration](/user-guide/host-integrations/cloudflare) bunun böyük bir hissəsini idarə edir.

## Müştəri Ömür Dövrü İdarəetməsi

### Müştəri İtkisini Azaltmaq (Churn)

Müştəri itkisi (Churn), hər ay ləğv edən müştərilərin faizidir. Abunəlik biznesi üçün, müştəri itkisini azaltmaq, yeni müştərilər qazanmaq qədər vacibdir.

**Fitnes studiyası müştərilərinin müştəri itkisinə səbəb ola biləcəyi ümumi səbəblər:**

- Platformadan necə istifadə edəcəklərini tapa bilmədilər → onbordingi yaxşılaşdırın
- Sayt kifayət qədər gözəl görünmürdü → şablonları yaxşılaşdırın
- Dəyəri görmədilər → xüsusiyyətləri və ya kommunikasiyanı yaxşılaşdırın
- Daha ucuz bir alternativ tapdılar → niş dəyərinizi gücləndirin
- Biznesləri bağlandı → qaçılmazdır, amma bunu ayrı izləyin

### Yüksəltmələri Təşviq Etmək

Starter planında olan və uğur qazanan müştərilər yüksəltməyə təşviq edilməlidir:

- Plan limitlərinə çatdıqda (saytlar, yaddaş), yüksəltmə təklifləri göstərin
- Growth planının faydalanacaqları xüsusiyyətlərini vurğulayan hədəfli e-poçtlar göndərin
- Growth/Pro müştərilərinin nə qurduğunu nümayiş etdirin

### Geri Qazanma Kampaniyaları

Müştəri ləğv etdikdə:

1. Niyə olduğunu soruşun (çıxış sorğusu və ya e-poçt)
2. Mümkünsə onların narahatlığını aradan qaldırın
3. Qayıtmaq üçün endirim təklif edin (ləğv etmə tarixindən 30-60 gün sonra)

## Həftəlik və Aylıq Rutinlər

### Həftəlik

- Yeni qeydiyyatları və ləğv etmələri nəzərdən keçirin
- Açılmış bütün dəstək tiketlərini cavablandırın
- Platforma performansını və uptime-ı yoxlayın
- Hər hansı uğursuz ödənişləri nəzərdən keçirin

### Aylıq

- Əsas göstəriciləri analiz edin (MRR, müştəri itkisi, yeni müştərilər, yüksəltmələr)
- WordPress və plugin yeniləmələrini tətbiq edin (test mühiti yoxlamasından sonra)
- Dəstək nümunələrinə əsaslanaraq bilik bazasını nəzərdən keçirin və yeniləyin
- Müştərilərə bir xəbər məktubu və ya yeniləmə göndərin (yeni xüsusiyyətlər, məsləhətlər, fitnes sənayesi xəbərləri)

### Üç Aylıq

- Qiymətləri rəqiblər və müştəri rəyləri ilə müqayisə edin
- Şablon dizaynlarını qiymətləndirin — yenilənməyə ehtiyacları var?
- Hostinq imkanlarını qiymətləndirin — miqyaslanmağa ehtiyacınız var?
- Aktivləşdirmə məlumatlarına əsaslanaraq onbordingi nəzərdən keçirin və yaxşılaşdırın

## Bu Dərsdə Nə Qurduq

- Uptime, qeydiyyatlar, ödənişlər və dəstək üçün **gündəlik monitorinq rutinləri**
- Plan səviyyələrinə uyğunlaşdırılmış **səviyyəli dəstək strukturu**
- Dunning və ləğv etməni idarə etməni əhatə edən **faktura əməliyyatları**
- Yeniləmələr, təhlükəsizlik və performans üçün **texniki baxım prosedurları**
- Fitnes nişinə xas **müştəri itkisini azaltma strategiyaları**
- **Həftəlik, aylıq və üç aylıq əməliyyat rutinləri**

---

**Növbəti:** [Dərs 13: Miqyaslanma](lesson-13-growth) — FitSite-ı kiçik bir əməliyyatdan real bir biznesə böyütmək.
