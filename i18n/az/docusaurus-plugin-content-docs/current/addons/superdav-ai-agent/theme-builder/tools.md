---
title: Alətlər və konfiqurasiya
sidebar_position: 4
_i18n_hash: 78a3b6062e985598d020eaee28754120
---
# Alətlər və Konfiqurasiya

Theme Builder WordPress saytınızı təhlil etmək, dizayn etmək və qurmaq üçün bir sıra alətlərdən istifadə edir. 1.16.0 versiyasında **sd-ai-agent/site-scrape artıq Tier 1 alətidir**, bu da onu Theme Builder-də standart olaraq əlçatan edir. Superdav AI Agent v1.18.0 həmçinin etibarlı developer iş axınları üçün ayrıca paylanan Advanced köməkçi paketini təqdim edir; bu alətlər WordPress.org əsas paketinin bir hissəsi deyil və ayrıca quraşdırılmalı və avtorizasiya edilməlidir.

## Mövcud Alətlər {#available-tools}

### Tier 1 Alətləri (Həmişə Əlçatandır) {#tier-1-tools-always-available}

Tier 1 alətləri heç bir əlavə konfiqurasiya olmadan Theme Builder-də standart olaraq əlçatandır.

#### sd-ai-agent/site-scrape {#sd-ai-agentsite-scrape}

**Məqsəd:** Dizayn ilhamı, məzmun strukturu və funksionallıq çıxarmaq üçün mövcud veb-saytları təhlil etmək.

**İmkanlar:**

- **Veb-sayt təhlili** — rəqib və ya ilham mənbəyi olan veb-saytları scrape və təhlil etmək
- **Dizayn çıxarılması** — rəngləri, şriftləri və düzən nümunələrini müəyyən etmək
- **Məzmun strukturu** — səhifə təşkilini və iyerarxiyasını anlamaq
- **Xüsusiyyət aşkarlanması** — plugin-ləri və funksionallığı müəyyən etmək
- **Performans təhlili** — səhifə sürətini və optimallaşdırmanı yoxlamaq
- **SEO təhlili** — meta teqləri və strukturlaşdırılmış məlumatları nəzərdən keçirmək

**İstifadə:**

```
example.com saytının dizaynını təhlil et və onu saytım üçün ilham kimi istifadə et.
```

**Nələri Çıxarır:**

- Rəng palitrası və rəng istifadəsi
- Tipoqrafiya (şriftlər və ölçülər)
- Düzən strukturu və aralıqlar
- Naviqasiya nümunələri
- Məzmun təşkilatı
- Şəkillər və media istifadəsi
- İnteraktiv elementlər
- Mobil uyğunlaşma

**Məhdudiyyətlər:**

- Şifrə ilə qorunan saytları scrape edə bilməz
- robots.txt və sayt siyasətlərinə hörmət edir
- Dinamik məzmunu tutmaya bilər
- JavaScript-ağırlıqlı saytların təhlili məhdud ola bilər
- Böyük saytların təhlili daha uzun çəkə bilər

### Tier 2 Alətləri (İstəyə Bağlı) {#tier-2-tools-optional}

Tier 2 alətləri Theme Builder ayarlarında açıq şəkildə aktivləşdirildikdə əlçatan olur.

#### Qabaqcıl Analitika {#advanced-analytics}

Ətraflı performans metrikləri təqdim edir:

- Səhifə yüklənmə vaxtları
- Core Web Vitals
- SEO balı
- Əlçatanlıq balı
- Ən yaxşı təcrübələr balı

#### Məzmun Optimallaşdırıcısı {#content-optimizer}

Aşağıdakılar üçün təkmilləşdirmələri təhlil edir və təklif edir:

- Oxunaqlılıq
- SEO optimallaşdırması
- Açar söz istifadəsi
- Məzmun strukturu
- Call-to-action yerləşdirilməsi

### Tier 3 Alətləri (Premium) {#tier-3-tools-premium}

Tier 3 alətləri əlavə konfiqurasiya və ya premium xüsusiyyətlər tələb edir.

#### AI Məzmun Generatoru {#ai-content-generator}

Aşağıdakılar üçün məzmun yaradır:

- Məhsul təsvirləri
- Xidmət səhifələri
- Bloq yazıları
- Meta təsvirlər
- Call-to-action mətni

#### Qabaqcıl Dizayn Alətləri {#advanced-design-tools}

Qabaqcıl dizayn imkanları təqdim edir:

- Xüsusi CSS yaradılması
- Animasiya yaradılması
- İnteraktiv element dizaynı
- Qabaqcıl rəng nəzəriyyəsi
- Tipoqrafiya optimallaşdırması

### Advanced Köməkçi Alətləri (Ayrı Paket) {#advanced-companion-tools-separate-package}

Advanced köməkçi paketi əsas Superdav AI Agent buraxılışından ayrıca paylanır. Bu, administratorların agentə yüksək təsirli alətlərdən istifadə etməyə açıq şəkildə icazə verdiyi etibarlı developer və sayt sahibi mühitləri üçün nəzərdə tutulub.

Advanced köməkçi imkanlarına aşağıdakılar daxil ola bilər:

- **Fayl sistemi alətləri** — etibarlı mühitlərdə təsdiqlənmiş faylları yoxlamaq və dəyişdirmək
- **Verilənlər bazası alətləri** — açıq şəkildə avtorizasiya edildikdə sayt məlumatlarını sorğulamaq və ya yeniləmək
- **WP-CLI alətləri** — WordPress texniki xidmət və yoxlama əmrlərini işə salmaq
- **REST dispatcher alətləri** — idarə olunan dispatch iş axınları vasitəsilə qeydiyyatdan keçmiş REST endpoint-ləri çağırmaq
- **Plugin qurucu alətləri** — plugin kodunu scaffold etmək və üzərində iterasiya aparmaq
- **Git snapshot alətləri** — riskli developer əməliyyatlarından əvvəl snapshot-lar yaratmaq
- **İstifadəçi idarəetmə alətləri** — icazə verilən yerlərdə istifadəçi qeydlərini nəzərdən keçirməyə və ya tənzimləməyə kömək etmək
- **Benchmark alətləri** — development nəzərdən keçirməsi üçün performans və ya imkan benchmark-ları işə salmaq

Bunları hər quraşdırma üçün ümumilikdə əlçatan Theme Builder alətləri kimi sənədləşdirməyin. Onlar yalnız Advanced köməkçi paketi quraşdırıldıqda, aktivləşdirildikdə və etibarlı administratorlarla məhdudlaşdırıldıqda əlçatandır.

## Alət Konfiqurasiyası {#tool-configuration}

### Alətlərin Aktivləşdirilməsi {#enabling-tools}

Theme Builder-də əlavə alətləri aktivləşdirmək üçün:

1. **Gratis AI Agent → Settings** bölməsinə keçin
2. **Theme Builder → Tools** bölməsinə gedin
3. Lazım olduqda alətləri açın/söndürün
4. Ayarları yadda saxlayın

### Alət İcazələri {#tool-permissions}

Bəzi alətlər icazələr tələb edir:

- **Sayt scraping** — internetə çıxış tələb edir
- **Analitika** — Google Analytics inteqrasiyası tələb edir
- **Məzmun yaradılması** — API açarları tələb edir
- **Qabaqcıl xüsusiyyətlər** — premium subscription tələb edə bilər
- **Advanced köməkçi alətləri** — ayrıca paylanan Advanced paketini və açıq administrator etibarını tələb edir

### API Açarları və Giriş Məlumatları {#api-keys-and-credentials}

Onları tələb edən alətlər üçün API açarlarını konfiqurasiya edin:

1. **Gratis AI Agent → Settings → API Keys** bölməsinə gedin
2. Hər alət üçün giriş məlumatlarını daxil edin
3. Bağlantını test edin
4. Təhlükəsiz şəkildə yadda saxlayın

### Advanced Köməkçi Paketinin Quraşdırılması {#installing-the-advanced-companion-package}

Advanced köməkçi paketi WordPress.org əsas ZIP-dən ayrıca buraxılır. Onu yalnız buraxılış üçün rəsmi layihə paylama kanalından quraşdırın, sonra girişi etibarlı administratorlarla məhdudlaşdırın. Production saytında fayl sistemi, verilənlər bazası, WP-CLI, REST dispatcher, plugin builder, user-management və ya benchmark alətlərini aktivləşdirməzdən əvvəl insan təsdiqi mərhələlərini və git snapshot davranışını nəzərdən keçirin.

## sd-ai-agent/site-scrape İstifadəsi {#using-sd-ai-agentsite-scrape}

### Əsas İstifadə {#basic-usage}

Theme Builder-dən bir veb-saytı təhlil etməsini istəyin:

```
competitor.com ünvanındakı rəqibimin saytının dizaynını təhlil et
və saytım üçün dizayn təkmilləşdirmələri təklif et.
```

### Xüsusi Təhlil {#specific-analysis}

Xüsusi təhlil növləri tələb edin:

```
example.com saytından rəng palitrasını çıxar və onu ilham kimi istifadə et.
```

```
example.com saytının naviqasiya strukturunu təhlil et və oxşar
təşkilatı saytımda tətbiq et.
```

```
example.com saytının mobil uyğunlaşmasını yoxla və saytımın
eyni dərəcədə uyğunlaşan olduğuna əmin ol.
```

### Müqayisəli Təhlil {#comparison-analysis}

Bir neçə saytı müqayisə edin:

```
site1.com və site2.com dizaynlarını müqayisə et və hər ikisinin ən yaxşı elementlərini
birləşdirən bir dizayn yarat.
```

## Alət Məhdudiyyətləri və Nəzərə Alınmalı Məqamlar {#tool-limitations-and-considerations}

### Rate Limiting {#rate-limiting}

- Scraping serverin həddindən artıq yüklənməsinin qarşısını almaq üçün sürət məhdudiyyəti ilə idarə olunur
- Eyni sayta edilən bir neçə sorğu yavaşladıla bilər
- Böyük saytların təhlili daha uzun çəkə bilər

### Məzmunun Dəqiqliyi {#content-accuracy}

- Dinamik məzmun tam şəkildə əldə olunmaya bilər
- JavaScript ilə render olunan məzmun natamam ola bilər
- Real vaxt məlumatları əks olunmaya bilər
- Bəzi məzmun ödəniş divarlarının arxasında ola bilər

### Hüquqi və Etik Mülahizələr {#legal-and-ethical-considerations}

- robots.txt və sayt siyasətlərinə hörmət edin
- Müəllif hüquqları ilə qorunan məzmunu təkrar dərc etmək üçün scrape etməyin
- Təhlildən kopyalamaq üçün deyil, ilham üçün istifadə edin
- Çıxarılan məzmundan istifadə hüquqlarınız olduğunu yoxlayın
- Təhlil edilən saytların xidmət şərtlərinə əməl edin

### Performansa Təsir {#performance-impact}

- Böyük saytların scrape edilməsi vaxt ala bilər
- Eyni anda bir neçə scrape daha yavaş ola bilər
- Şəbəkə bağlantısı sürətə təsir edir
- Böyük verilənlər dəstləri daha çox emal tələb edə bilər

## Ən Yaxşı Təcrübələr {#best-practices}

### Sayt Təhlilindən İstifadə {#using-site-analysis}

1. **Bir neçə saytı təhlil edin** — bir neçə mənbədən ilham toplayın
2. **Struktura fokuslanın** — tərtibat və təşkilatlanma nümunələrini öyrənin
3. **Rəngləri çıxarın** — rəng palitralarından başlanğıc nöqtələri kimi istifadə edin
4. **Tipoqrafiyanı öyrənin** — bəyəndiyiniz şrift kombinasiyalarını müəyyənləşdirin
5. **Naviqasiyanı nəzərdən keçirin** — menyu təşkilini anlayın

### Etik Scraping {#ethical-scraping}

1. **robots.txt-ə hörmət edin** — sayt təlimatlarına əməl edin
2. **Məzmunu kopyalamayın** — təhlildən yalnız ilham üçün istifadə edin
3. **Hüquqları yoxlayın** — çıxarılan məzmundan istifadə edə biləcəyinizə əmin olun
4. **Mənbələri göstərin** — ilham mənbələrini qeyd edin
5. **Şərtlərə əməl edin** — saytın xidmət şərtlərinə riayət edin

### Alətin Effektivliyini Maksimuma Çatdırmaq {#maximizing-tool-effectiveness}

1. **Konkret olun** — konkret təhlil növləri tələb edin
2. **Kontekst təqdim edin** — saytınızın məqsədini izah edin
3. **Gözləntiləri müəyyən edin** — dizayn məqsədlərinizi təsvir edin
4. **Təkrarlayın** — nəticələrə əsasən təkmilləşdirin
5. **Alətləri birləşdirin** — hərtərəfli təhlil üçün bir neçə alətdən istifadə edin

## Problemlərin Həlli {#troubleshooting}

### Sayt Scrape Olunmur {#site-wont-scrape}

- Saytın ictimai şəkildə əlçatan olub-olmadığını yoxlayın
- robots.txt-in scraping-ə icazə verdiyini yoxlayın
- Fərqli sayt sınayın
- İnternet bağlantısını yoxlayın
- Problem davam edərsə, dəstək ilə əlaqə saxlayın

### Natamam Təhlil {#incomplete-analysis}

- Saytda dinamik məzmun ola bilər
- JavaScript tam render olunmaya bilər
- Böyük saytlar timeout verə bilər
- Bunun əvəzinə konkret səhifələri təhlil etməyə çalışın
- Konkret təhlil növləri tələb edin

### Yavaş Performans {#slow-performance}

- Böyük saytların təhlili daha uzun çəkir
- Eyni anda bir neçə scrape daha yavaş olur
- Şəbəkə bağlantısı sürətə təsir edir
- Pik saatlardan kənarda sınayın
- Əvvəlcə daha kiçik bölmələri təhlil edin

## Əlaqəli Sənədləşmə {#related-documentation}

- [Kəşf Müsahibəsi](./discovery-interview.md) — dizayn məlumatlarını toplayın
- [Dizayn İstiqaməti](./design-direction.md) — dizaynınızı təkmilləşdirin
- [Qonaqpərvərlik Menyuları](./hospitality-menus.md) — menyu səhifələri yaradın
