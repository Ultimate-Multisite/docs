---
title: 'Dərslik 13: Ölçekləmə'
sidebar_position: 14
_i18n_hash: 44dd9e49f54ba924696a428224c5aae0
---
# Dərs 13: Böyümək

Sizin artıq ödəniş edən müştəriləri olan işləyən bir platformanız var. Bu dərs, kiçik bir əməliyyatdan davamlı bir biznesə necə böyüyə biləcəyinizi öyrədir: infrastrukturu böyütmək, əməliyyatları avtomatlaşdırmaq və müştəri başına gəliri artırmaq.

## Harada Qaldıq

FitSite işləyir, müştərilər qeydiyyatdan keçir və siz gündəlik əməliyyatları yerinə yetirirsiniz. İndi isə böyüməyə fokuslanırıq.

## Rəqəmlərinizi Bilin

Böyüməyə başlamazdan əvvəl, vəziyyətinizə baxın:

### Əsas Metriklər

- **MRR (Monthly Recurring Revenue)**: Ümumi aylıq abunə gəliri
- **Müştəri sayı**: Aktiv abunəçilərin ümumi sayı
- **ARPU (Average Revenue Per User)**: MRR-in müştəri sayına bölünməsi ilə tapılan orta gəlir
- **Churn rate**: Hər ay ləğv etdirən müştərilərin faizi
- **LTV (Lifetime Value)**: Müştəri başına ümumi abunə müddətində orta gəlir
- **CAC (Customer Acquisition Cost)**: Bir müştəri əldə etmək üçün orta xərc

### Nümunə: 50 Müştərilik FitSite

| Metrika | Dəyər |
|--------|-------|
| Müştərilər | 50 (30 Starter, 15 Growth, 5 Pro) |
| MRR | $4,450 ($1,470 + $1,485 + $995 + $500 sifariş artırımları) |
| ARPU | $89/ay |
| Aylıq tərk etmə | 4% (ayda 2 ləğv) |
| LTV | $89 x 25 ay = $2,225 |

Bu rəqəmlər sizə nəyə fokuslanmalı olduğunuzu göstərir. Yüksək tərk etmə? Saxlanma strategiyasını düzəlt. Aşağı ARPU? Yüksəkləndirmələri təşviq et. Yüksək CAC? Əldə etmə kanallarını optimallaşdır.

## İnfraqstrukturun Böyütməsi

### Nə Vaxt Böyütməli?

Hosting-i aşağıdakı hallarda böyütməlisiniz:

- Səhifə yüklənmə vaxtları nəzərə çarpacaq şəkildə artırsa
- Server CPU və ya yaddaşı müntəzəm olaraq 70% istifadə səviyyəsini aşarsa
- 100-dan çox aktiv sayt yaxınlaşarsa
- Müştərilər sürət barədə şikayətləri artarsa

### Necə Böyütməli?

- **Vertikal miqayəllənmə**: Daha böyük bir serverə (daha çox CPU, RAM) keçmək
- **Keşləmə qatları**: Statik məzmun üçün səhifə keşləməsi, obyekt keşləməsi üçün Redis/Memcached əlavə etmək
- **CDN**: Əgər artıq Cloudflare və ya oxşar bir şey istifadə etmirsinizsə, statik fayllar üçün bir CDN əlavə edin
- **Verilənlər bazası optimallaşdırması**: Şəbəkə böyüdükcə, verilənlər bazası sorğuları ləngiyir. Cədvəlləri optimallaşdırın, indekslər əlavə edin, ayrılmış bir verilənlər bazası serverini nəzərdən keçirin.
- **Məsuliyyətləri ayırmaq**: Media saxlama yerini obyekt saxlama yerinə (S3-uyumlu) köçürmək, e-poçtu tranzaksiya e-poçtu xidmətinə ötürmək

### Hosting Köçürməsi

Əgər cari hostunuz daha böyüyə bilmirsə, bir köçürmə planlayın:

1. Yeni mühiti qurmaq
2. Şəbəkənizin bir nüsxəsi ilə ətraflı test etmək
3. Köçürməni aşağı trafik saatlarında təyin etmək
4. Əvvəlcədən minimal TTL ilə DNS-i yeniləmək
5. Köçürmədən sonra hər şeyin işlədiyini yoxlamaq

## Əməliyyatları Avtomatlaşdırmaq

Böyüdükcə, əl ilə yerinə yetirilən proseslər tıxanmalara çevrilir. Edə biləcəyinizi avtomatlaşdırın:

### Webhooks və Zapier

Aşağıdakıları avtomatlaşdırmaq üçün [Webhooks](/user-guide/integrations/webhooks) və ya [Zapier](/user-guide/integrations/zapier) istifadə edin:

- **Yeni qeydiyyat bildirişləri** → Slack kanalı və ya CRM
- **Ləğv edilmə xəbərdarlığı** → müştəriləri geri qaytarma e-poçtu ardıcımlığını işə salmaq
- **Ödəniş uğursuzluğu** → monitorinq alətinizdə xəbərdarlıq
- **Plan yüksəkləndirmələri** → təbrik e-poçtu və yeni funksiyalarla bələdçi

### E-poçt Avtomatlaşdırması

Əl ilə göndərilən e-poçtlardan avtomatlaşdırılmış ardıcımlıqlara keçin:

- Onboarding ardıcımlığı (Dərs 8-də artıq qurulub)
- Aktiv olmayan müştərilər üçün yenidən maraq yaratma ardıcımlığı
- Müştərilər plan limitlərinə yaxınlaşdıqda yüksəkləndirmə təklifləri
- İllik abunəçilər üçün yenilənmə xatırlatmaları

### Dəstək Avtomatlaşdırması

- Ümumi suallar üçün **Hazır cavablar**
- Dəstək biletinin alındığını təsdiq edən **Avtomatik cavablar**
- Müştərilər mövcud məqalələrlə uyğun bilet göndərdikdə **Məlumat bazası təklifləri**

## Gəliri Artırmaq

Böyümək sadəcə daha çox müştəri demək deyil. Həm də müştəri başına daha çox gəlir deməkdir.

### Mövcud Müştəriləri Yüksəkləndirmək (Upselling)

- **Plan yüksəkləndirmələri**: Starter müştərilərinə Growth/Pro funksiyalarını göstərən hədəfli kampaniyalar
- **Sifariş artırımları**: Mövcud müştərilərə e-poçt vasitəsilə əlavə məhsullar təşviq etmək
- **İllikə keçid**: Aylıq müştərilərə illik ödənişə keçmək üçün endirim təklif etmək

### Yeni Gəlir Axınları

- **Hazır qurulmuş sistem**: Müştərinizin saytını qurmaq və fərdiləşdirmək üçün premium ödəniş tələb etmək
- **Fərdiləşdirilmiş dizayn xidmətləri**: Şablonun üstünə xüsusi dizayn işləri təklif etmək
- **Təlim sessiyaları**: Praktiki köməklik istəyən müştərilər üçün ödənişli bir-bir görüşləri
- **Premium eklentilər**: Nişə xas premium eklentiləri ödənişli əlavələr kimi təklif etmək (məsələn, fitnes sinifi kitabçası)

### Qiymətləri Yüksəltmək

Platformanız inkişaf edib və dəyər artdıqca:

- Mövcud müştəriləri cari qiymətlərində saxlamaq
- Yeni qeydiyyatdan keçənlər üçün qiymətləri artırmaq
- Artırımları yeni funksiyalar və təkmilləşdirmələrlə əsaslandırmaq

## Komanda Qurmaq

Bir nöqtədə hər şeyi tək edə bilməyəcəksiniz. Ən çox rast gəlinən ilk işçilər:

1. **Dəstək şəxsi**: Gündəlik müştəri suallarını həll edir (ilkin olaraq yarımvaxt)
2. **Məzmun yaradıcısı**: Məlumat bazası məqalələri, blog yazıları və marketinq məzmunu yazar
3. **Dizayner**: Şablonları yaxşılaşdırır və yeni olanlar yaradır

İşçilərə ehtiyacınız yoxdur. Kontraktorlar və freelancerlər platforma biznesi üçün yaxşı işləyir.

## Böyümə Milestonları

| Mileston | Təxmini MRR | Fokus |
|-----------|--------------|-------|
| 0-25 müştəri | $0-$2,500 | Məhsul-bazar uyğunluğu, birbaşa əlaqə |
| 25-100 müştəri | $2,500-$10,000 | Əməliyyatları sistemləşdirmək, məzmun marketinqi |
| 100-250 müştəri | $10,000-$25,000 | Dəstək işçisi işə götürmək, konversiyanı optimallaşdırmaq, hosting-i böyütmək |
| 250-500 müştəri | $25,000-$50,000 | Komanda qurmaq, yeni gəlir axınları, premium funksiyalar |
| 500+ müştəri | $50,000+ | Platforma yetkinliyi, yaxın nişlər, potensial çıxış |

## Bu Dərsdə Nələr Quruldu

- Biznes sağlamlığını anlamaq üçün **bir metriklər çərçivəsi**
- Onlarla saytlardan yüzlərlə saytlara böyümə üçün **infrastruktur böyütmə planı**
- Dəstək, e-poçt və əməliyyatlar üçün **avtomatlaşdırma strategiyaları**
- Sadəcə yeni müştərilər əldə etməyin övəlində **gəlir böyütmə taktikaları**
- Tək əməliyyatdan çıxdığınız zaman **komanda qurma təlimatları**
- Hər mərhələ üçün fokus sahələri olan **Böyümə milestonları**

---

**Növbəti:** [Dərs 14: Növbəti Nədir](lesson-14-whats-next) -- ilk nişinizdən kənara çıxmaq.
