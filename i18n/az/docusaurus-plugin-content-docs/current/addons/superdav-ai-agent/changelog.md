---
title: Dəyişikliklər siyahısı
sidebar_position: 5
_i18n_hash: d18a5d0a6c766913ed5d348b54dd6acc
---
# Yeniləmələr Siyahısı

## 1.16.0 — 2026-05-20 tarixində buraxılıb

### Yeni

- **Logo SVG yaratma imkanı** — Theme Builder indi namespace-tə cavabdeh sanitasiya ilə fərdiləşdirilmiş logo SVG-lər yaradıb yerləşdirə bilər.
- **Kəşfiyyat müsahibəsində foto yükləmə** — Theme Builder-in kəşfiyyat müsahibəsi indi daha zəngin dizayn konteksti üçün foto yükləmə addımını əhatə edir.
- **Palitral kontrastı yoxlama imkanı** — Bir mövzuya tətbiq etməzdən əvvəl rəng cütlərini WCAG uyğunluğu üçün yoxlayın.
- **Qonaqsevərlik menyuları** — Theme Builder indi qonaqsevərlik biznesləri üçün strukturlaşdırılmış yemək və içki menyu səhifələri yarada bilər.
- **Desktop və mobil önizləmə renderlənməsi** — Dizayn istiqaməti seçərkən dizaynınızı desktop və mobil cihazlarda önizləyin.
- **Naviqasiya etiketi parametri** — Create Menu imkanı indi səhifə adından ayrı, müstəqil bir `navigation_label` dəstəkləyir.
- **Tier 1 aləti mövcudluğu** — sd-ai-agent/site-scrape indi Theme Builder-də standart olaraq mövcud olan bir Tier 1 alətidir.

### Düzəlişlər

- **AI Client cache** — indi transiyentlər (transients) vasitəsilə bir neçə sorğu (cross-request) davamlılığı ilə dəstəklənir, bu da uzun müddət davam edən agent tapşırıqlarında məlumat itkisini əngəlləyir.
- **Plugin sətrindəki aksiyon linkləri** — Aydınlıq üçün düzəldildi və yenidən adlandırıldı.

## 1.10.0 — 2026-05-05 tarixində buraxılıb

### Yeni

- **Tavily internet axtarışı** — Brave Search ilə yanaşı, daha zəngin internet axtarış nəticələri üçün Tavily-ni bir axtarış provayuderi kimi əlavə edin.
- **Mövzuya uyğun daxili bacarıqlar** — Block Themes, Classic Themes, Kadence Blocks və Kadence Theme bacarıq bələdçiləri artıq plugin ilə birlikdə gəlir.
- **Site builder kontakt forması imkanı** — Chat interfeysindən birbaşa istənilən səhifəyə kontakt forması əlavə edin.

### Təkmilləşdirilmiş

- **WooCommerce inteqrasiyası yeniləndi** — Daha yaxşı etibarlılıq və uyğunluq üçün indi yerli WooCommerce API-lərindən istifadə edir.
- **Provayuderi siyahısı avtomatik yenilənir** — İstənilən plugin aktivləşdirildikdə və ya deaktive edildikdə.

### Düzəlişlər

- **navigate-to imkanı** — Bəzi admin səhifələrində sonsuz yenilənmə dövrü (infinite reload loop) düzəldildi.
- **list-posts imkanı** — İndi kateqoriya və tag adlarını düzgün şəkildə slug-lara çevirir.
- **WP-CLI əmrləri** — Əvvəlki bir refaktordan sonra itirilmiş namespace aliasları bərpa edildi.
- **Tədbir avtomatlaşdırması** — Avtomatlaşdırma cədvəlləri hələ yaradılmamış saytları zərif şəkildə idarə edir.
- **memory-save imkanı** — İndi sistem təlimat qurucuda (system instruction builder) düzgün namespace prefiksindən istifadə edir.
- **Scalar alət nəticələri** — İndi AI-ya qaytarılmadan əvvəl düzgün şəkildə sarılır (wrapped).
- **İstifadə statistikası** — Artıq köhnə versiyalardan yüksəldikdə köhnə ability key formatını düzgün şəkildə idarə edir.
