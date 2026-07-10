---
title: Dəyişiklik jurnalı
sidebar_position: 5
_i18n_hash: 9747e37b1fd831941c9f86e6c3f85c81
---
# Dəyişikliklər jurnalı {#changelog}

## 1.18.0 — 2026-06-29 tarixində buraxılıb {#1180--released-on-2026-06-29}

### Yeni {#new}

- **Google Calendar alətləri** — cədvəli nəzərə alan avtomatlaşdırmalar üçün konfiqurasiya edilmiş təqvimləri və tədbirləri oxuyun
- **Kontakt xəritələndirməsi və iştirakçı köməkçiləri** — təqvim iştirakçılarını sayt istifadəçiləri və kontaktlarla uyğunlaşdırın
- **İnsan təsdiqi keçidləri və xatırlatma qeydləri** — avtomatlaşdırmaları yoxlama üçün dayandırın və təkrar bildirişlərin qarşısını alın
- **TextBee SMS provayderi** — TextBee vasitəsilə konfiqurasiya edilmiş mətn mesajı bildirişləri göndərin
- **Təkmil müşayiət paketi** — WordPress.org yığmasından ayrıca paylanan etibarlı tərtibatçı fayl sistemi, verilənlər bazası, WP-CLI, REST yönləndiricisi, plugin qurucusu, git snapshot, istifadəçi idarəetməsi və benchmark alətləri əlavə edin

### Təkmilləşdirildi {#improved}

- **İdarə olunan Superdav xidmətinin qurulması** — dəstəklənən saytlar üçün hostinqli xidmət endpoint-ləri və avtomatik bağlantı təminatı əlavə edin
- **Buraxılış paketlənməsi** — ayrıca əsas və Advanced ZIP-lər yaradın, hər ikisini GitHub-da yayımlayın və WordPress.org-a yalnız əsas paketi göndərin

### Düzəldildi {#fixed}

- **AI sorğu etibarlılığı** — model seçimini, sorğu vaxt limitlərini, standart qurulum modelini, əsaslandırma mətninin emalını və etibarsız alət çağırışları üçün təkrar cəhd göstərişlərini yaxşılaşdırın
- **Təqvim və xatırlatma möhkəmləndirilməsi** — Google Calendar token-lərini və xatırlatma təkrarsızlaşdırmasını gücləndirin
- **Başlanğıc qurulumu və təsdiq davametmələri** — frontend başlanğıc qurulumu işə salınmalarını və təsdiqlənmiş bacarıq davametmələrini düzəldin
- **WordPress.org paketləmə baxışı problemləri** — əsas buraxılış üçün paketləmə baxışı rəyini həll edin

## 1.16.0 — 2026-05-20 tarixində buraxılıb {#1160--released-on-2026-05-20}

### Yeni {#new-1}

- **Loqo SVG yaratma bacarığı** — Theme Builder indi namespace baxımından təhlükəsiz təmizləmə ilə fərdi loqo SVG-ləri yarada və daxil edə bilər
- **Kəşf müsahibəsində foto yükləmə** — Theme Builder kəşf müsahibəsi indi daha zəngin dizayn konteksti üçün foto yükləmə addımını ehtiva edir
- **Palitra kontrastını doğrulama bacarığı** — theme-ə tətbiq etməzdən əvvəl rəng cütlərini WCAG uyğunluğu üçün yoxlayın
- **Qonaqpərvərlik menyuları** — Theme Builder indi qonaqpərvərlik biznesləri üçün strukturlaşdırılmış yemək və içki menyu səhifələri yarada bilər
- **Desktop və mobil önizləmə renderingi** — dizayn istiqaməti seçimi zamanı dizaynınızı desktop və mobil cihazlarda önizləyin
- **Naviqasiya etiketi parametri** — Menyu yaratma bacarığı indi səhifə başlığından ayrı ayrıca `navigation_label` dəstəkləyir
- **Tier 1 alət əlçatanlığı** — sd-ai-agent/site-scrape indi Theme Builder-də standart olaraq əlçatan Tier 1 alətidir

### Düzəldildi {#fixed-1}

- **AI Client keşi** — indi sorğulararası davamlılıq üçün transient-lərlə dəstəklənir və uzunmüddətli agent tapşırıqlarında məlumat itkisinə mane olur
- **Plugin sətri əməl linkləri** — aydınlıq üçün düzəldildi və yenidən adlandırıldı

## 1.10.0 — 2026-05-05 tarixində buraxılıb {#1100--released-on-2026-05-05}

### Yeni {#new-2}

- **Tavily internet axtarışı** — Brave Search ilə yanaşı daha zəngin internet axtarış nəticələri üçün Tavily-ni axtarış provayderi kimi əlavə edin
- **Theme-dən xəbərdar daxili bacarıqlar** — Block Themes, Classic Themes, Kadence Blocks və Kadence Theme bacarıq bələdçiləri indi plugin ilə birlikdə təqdim olunur
- **Sayt qurucusu kontakt forması bacarığı** — chat interfeysindən birbaşa istənilən səhifəyə kontakt forması əlavə edin

### Təkmilləşdirildi {#improved-1}

- **WooCommerce inteqrasiyası yenidən işlənib** — indi daha yaxşı etibarlılıq və uyğunluq üçün yerli WooCommerce API-lərindən istifadə edir
- **Provayder siyahısı avtomatik yenilənir** — hər hansı plugin aktivləşdirildikdə və ya deaktivləşdirildikdə

### Düzəldildi {#fixed-2}

- **navigate-to bacarığı** — bəzi admin səhifələrində sonsuz yenidən yüklənmə dövrəsi düzəldildi
- **list-posts bacarığı** — indi kateqoriya və teq adlarını slug-lara düzgün həll edir
- **WP-CLI əmrləri** — əvvəlki refaktordan sonra çatışmayan namespace alias-ları bərpa edildi
- **Tədbir avtomatlaşdırması** — avtomatlaşdırma cədvəlləri hələ yaradılmamış saytları problemsiz idarə edir
- **memory-save bacarığı** — indi sistem təlimatı qurucusunda düzgün namespace prefiksindən istifadə edir
- **Skalyar alət nəticələri** — indi AI-a qaytarılmadan əvvəl düzgün şəkildə bükülür
- **İstifadə statistikası** — indi köhnə versiyalardan yüksəltmə zamanı köhnə bacarıq açarı formatını düzgün idarə edir
