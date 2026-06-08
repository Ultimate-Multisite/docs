---
title: Alətlər və Konfiqurasiya
sidebar_position: 4
_i18n_hash: f27cdab7be320668b6c1d53db1190775
---
# Alətlər və Konfiqurasiya

Theme Builder, WordPress saytınızı analiz etmək, dizayn etmək və qurmaq üçün bir sıra alətlərdən istifadə edir. 1.16.0 versiyasında, **sd-ai-agent/site-scrape artıq Səviyyə 1 alətidir**, bu da onu Theme Builder-də avtomatik mövcud edir.

## Mövcud Alətlər

### Səviyyə 1 Alətləri (Həmişə Mövcuddur)

Səviyyə 1 alətləri əlavə konfiqurasiya tələb etmədən Theme Builder-də avtomatik mövcuddur.

#### sd-ai-agent/site-scrape

**Məqsəd:** Dizayn ilhamı, məzmun strukturu və funksionallığı çıxarmaq üçün mövcud veb saytları analiz etmək.

**İmkaniyyətlər:**

- **Veb sayt analizi** — rəqib və ya ilham verən veb saytları yığmaq və analiz etmək
- **Dizayn çıxarılması** — rəngləri, şriftləri və yerləşdirmə nümunələrini müəyyən etmək
- **Məzmun strukturu** — səhifə təşkilatını və iyerarxiyasını anlamaq
- **Xüsusiyyət aşkarlanması** — plugin və funksionallığı müəyyən etmək
- **Performans analizi** — səhifə sürətini və optimallaşdırmasını yoxlamaq
- **SEO analizi** — meta tag və strukturlu məlumatları nəzərdən keçirmək

**İstifadə:**

```
Analyze the design of example.com and use it as inspiration for my site.
```

**Nə çıxarır:**

- Rəng palitrası və rəng istifadəsi
- Tipoqrafiya (şriftlər və ölçülər)
- Yerləşdirmə strukturu və boşluqlar
- Naviqasiya nümunələri
- Məzmun təşkilatı
- Şəkillər və media istifadəsi
- İnteraktiv elementlər
- Mobil cavabdehlik

**Məhdudiyyətlər:**

- Şifrə ilə qorunan saytlardan məlumat yığa bilməz
- robots.txt və sayt siyasətlərinə hörmət edir
- Dinamik məzmunu ələ keçirə bilməyə bilər
- JavaScript-dən çox istifadə edən saytlarda analiz məhdud ola bilər
- Böyük saytlar analiz edilməkdə daha çox vaxt tələb edə bilər

### Səviyyə 2 Alətləri (İxtiyari)

Səviyyə 2 alətləri Theme Builder parametrlərində açıq şəkildə aktivləşdirildikdə mövcuddur.

#### Advanced Analytics

Ətraflı performans metrikaları təqdim edir:

- Səhifə yüklənmə vaxtları
- Core Web Vitals
- SEO balı
- Erişməlik balı (Accessibility score)
- Ən yaxşı təcrübələr balı (Best practices score)

#### Content Optimizer

Bunlar üçün analiz edir və təkmilləşdirmə təklif edir:

- Oxunaqlılıq
- SEO optimallaşdırması
- Açar söz istifadəsi
- Məzmun strukturu
- Hərəkətə keçmə çağırışı (Call-to-action) yerləşdirməsi

### Səviyyə 3 Alətləri (Premium)

Səviyyə 3 alətləri əlavə konfiqurasiya və ya premium funksionallıq tələb edir.

#### AI Content Generator

Bunlar üçün məzmun yaradır:

- Məhsul təsvirləri
- Xidmət səhifələri
- Blog yazıları
- Meta təsvirləri
- Hərəkətə keçmə çağırışı mətnləri

#### Advanced Design Tools

Əlavə dizayn imkanlıqları təqdim edir:

- Xüsusi CSS generasiyası
- Animasiya yaratmaq
- İnteraktiv element dizaynı
- İrəli rəng nəzəriyyəsi
- Tipoqrafiya optimallaşdırılması

## Alət Konfiqurasiyası

### Alətləri Aktivləşdirmək

Theme Builder-də əlavə alətləri aktivləşdirmək üçün:

1. **Gratis AI Agent → Settings** səhifəsinə keçin
2. **Theme Builder → Tools** bölməsinə gedin
3. Lazım olan alətləri yandırın/söndürün
4. Parametrləri yadda saxlayın

### Alət İcazələri

Bəzi alətlər icazə tələb edir:

- **Site scraping** — internet bağlantısı tələb edir
- **Analytics** — Google Analytics inteqrasiyası tələb edir
- **Content generation** — API açarları tələb edir
- **Advanced features** — premium abunəlik tələb edə bilər

### API Açarları və Giriş Məlumatları

Tələb edən alətlər üçün API açarlarını konfiqurasiya edin:

1. **Gratis AI Agent → Settings → API Keys** səhifəsinə gedin
2. Hər bir alət üçün giriş məlumatlarını daxil edin
3. Bağlantını yoxlayın
4. Təhlükəsiz şəkildə yadda saxlayın

## sd-ai-agent/site-scrape İstifadəsi

### Əsas İstifadə

Theme Builder-dən bir veb saytı analiz etməsini xahiş edin:

```
Analyze the design of my competitor's site at competitor.com
and suggest design improvements for my site.
```

### Xüsusi Analiz

Xüsusi analiz növlərini tələb edin:

```
Extract the color palette from example.com and use it as inspiration.
```

```
Analyze the navigation structure of example.com and apply similar
organization to my site.
```

```
Check the mobile responsiveness of example.com and ensure my site
is equally responsive.
```

### Müqayisə Analizi

Bir neçə saytı müqayisə edin:

```
Compare the designs of site1.com and site2.com and create a design
that combines the best elements of both.
```

## Alət Məhdudiyyətləri və Nəzərə Alınmalı Məsələlər

### Rate Limiting (Təzyiq Məhdudiyyəti)

- Serverin yüklənməsinin qarşısını almaq üçün scraping sürətləndirilir (rate-limited)
- Eyni sayta verilən bir neçə sorğu məhdudlaşdırıla bilər (throttled)
- Böyük saytlar analiz edilməkdə daha çox vaxt tələb edə bilər

### Məzmun Dəqiqliyi

- Dinamik məzmun tam ələ keçirilə bilməz
- JavaScript ilə yaradılmış məzmun qeyri-tam ola bilər
- Real vaxt məlumatları əks olunmaya bilər
- Bəzi məzmunlar ödəniş divarları arxasında ola bilər

### Hüquqi və Etik Nəzərdən Keçirmələr

- robots.txt və sayt siyasətlərinə hörmət edin
- Müəllif hüququ ilə qorunan məzmunu təkrarlamaq üçün yığmayın
- Analizdən ilham almaq üçün, kopyalamaq üçün istifadə edin
- Çıxarılan məzmunu istifadə etmək hüququnuz olduğunu yoxlayın
- Analiz edilən saytların xidmət şərtlərini izləyin

### Performans Təsiri

- Böyük saytları yığmaq vaxt aparır
- Bir neçə eyni vaxtlı scraping daha yavaş ola bilər
- Şəbəkə bağlantısı sürətə təsir edir
- Böyük məlumat dəstləri daha çox emal tələb edə bilər

## Ən Yaxşı Təcrübələr

### Sayt Analizindən İstifadə

1. **Bir neçə saytı analiz edin** — bir neçə mənbədən ilham toplayın
2. **Strukturaya fokuslanın** — yerləşdirmə və təşkilat nümunələrini öyrənin
3. **Rəngləri çıxarın** — rəng palitralarından başlanğıc nöqtələri kimi istifadə edin
4. **Tipoqrafiyanı öyrənin** — xoşladığınız şrift kombinasiyalarını müəyyən edin
5. **Naviqasiyanı nəzərdən keçirin** — menyu təşkilatını anlayın

### Etik Scraping

1. **robots.txt-yə hörmət edin** — sayt qaydalarına əməl edin
2. **Məzmunu kopyalamayın** — analizdən yalnız ilham almaq üçün istifadə edin
3. **Hüquqları yoxlayın** — çıxarılan məzmunu istifadə edə biləcəyinizi təmin edin
4. **Mənbələri göstərin** — ilham mənbələrinə kredit edin
5. **Şərtlərə əməl edin** — saytların xidmət şərtlərinə riayət edin

### Alətin Effektivliyini Artırmaq

1. **Xüsusi olun** — xüsusi analiz növləri tələb edin
2. **Kontekst verin** — saytınızın məqsədini izah edin
3. **Gözləntilər yaradın** — dizayn məqsədlərinizi təsvir edin
4. **Təkmilləşdirin** — nəticələrə əsasən düzəliş edin
5. **Alətləri birləşdirin** — hərtərəfli analiz üçün bir neçə alətdən istifadə edin

## Problemlərin Həlli

### Sayt Yığıla Bilmir

- Saytın ictimaiyyətə açıq olub-olmadığını yoxlayın
- robots.txt-nin scraping-ə icazə verdiyini təsdiqləyin
- Başqa bir sayt sınayın
- İnternet bağlantısını yoxlayın
- Problem davam edərsə dəstəklə əlaqə saxlayın

### Qeyri-tam Analiz

- Sayt dinamik məzmunə malik ola bilər
- JavaScript tam render edilməmiş ola bilər
- Böyük saytlar vaxtaşırı vaxt bitməsi (timeout) ilə nəticələnə bilər
- Bunun əvəzinə xüsusi səhifələri analiz etməyi sınayın
- Xüsusi analiz növləri tələb edin

### Yavaş Performans

- Böyük saytlar analiz edilməkdə daha çox vaxt aparır
- Bir neçə eyni vaxtlı scraping daha yavaşdır
- Şəbəkə bağlantısı sürətə təsir edir
- Ən yaxşı vaxtlarda (peak hours) yox, sakit vaxtlarda (off-peak hours) sınayın
- Əvvəlcə daha kiçik bölmələri analiz edin

## Əlaqəli Sənədlər

- [Discovery Interview](./discovery-interview.md) — dizayn məlumatlarını toplayın
- [Design Direction](./design-direction.md) — dizaynınızı təkmilləşdirin
- [Hospitality Menus](./hospitality-menus.md) — menyu səhifələri yaradın
