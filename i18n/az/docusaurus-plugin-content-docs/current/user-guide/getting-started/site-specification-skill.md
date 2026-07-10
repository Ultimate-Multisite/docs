---
title: Sayt Spesifikasiya Bacarığı
sidebar_position: 18
_i18n_hash: 7470e8d04c1f380b3dca6ba5559b34f5
---
# Sayt Təsviri Bacarığı {#site-specification-skill}

**Sayt Təsviri bacarığı**, saytınızın məqsədlərini, auditoriyasını və brend kimliyini ələ keçirmək üçün strukturlaşdırılmış bir yanaşmadır. Bu məlumat **site_brief** yaddaşınızda saxlanılır və agentlər bu məlumatı sessiyalar boyunca istifadə edərək tutarlı, kontekstə uyğun kömək göstərir.

## Sayt Təsviri nədir? {#what-is-site-specification}

Sayt Təsviri, aşağıdakıları sənədləşdirmək prosesidir:

- **Sayt məqsədi**: Saytınızın nə etdiyi və niyə mövcud olduğu
- **Hədəf auditoriya**: Saytınıza kim gəlir və onların nəyə ehtiyacı var
- **Brend kimliyi**: Rəngləriniz, tonunuz və vizual üslubunuz
- **Biznes məqsədləri**: Saytınız üçün uğurun nə demək olduğu
- **Məzmun strukturu**: Saytınızın necə təşkil olunduğu

Bu təsvir sizin **site_brief**iniz olur; bu, agentlərin saytınızın kontekstini anlamaq üçün istifadə etdiyi daimi bir yaddaşdır.

## Niyə Sayt Təsviri İstifadə Etməli? {#why-use-site-specification}

### Seanslar Arasında Davamlılıq {#consistency-across-sessions}

site_brief olmadan, hər yeni sessiya başladığınızda saytınızın məqsədini yenidən izah etməli olardınız. Onu istifadə etdiyiniz zaman isə, agentlər dərhal anlayır:

- Saytınızın məqsədləri və auditoriyası
- Brend rəngləriniz və tonunuz
- Məzmun strukturunuz
- Biznes məqsədləriniz

### Daha Yaxşı Tövsiyələr {#better-recommendations}

Agentlər site_briefinizi aşağıdakılar üçün istifadə edir:

- Saytınızın məqsədi ilə uyğun xüsusiyyətlər təklif etmək
- Məqsədlərinizə uyğun məzmun strukturları tövsiyə etmək
- Brendinizlə uyğun dizaynlar təklif etmək
- Uyğun gəlməyən xüsusiyyətlər təklif etməkdən çəkinmək

### Daha Tez Başlama {#faster-onboarding}

Yeni agentlər (və ya yeni sessiyalardakı agentlər) aydınlaşdırıcı suallar vermək əvəzinə site_briefinizi oxuyaraq tez bir zamanda işə başlamalıdırlar.

## Sayt Təsvirini Başlatmaq {#initiating-site-specification}

### Theme Builder Onboarding Sırasında {#during-theme-builder-onboarding}

Sayt Təsviri bacarığı **Theme Builder onboarding axını** zamanı avtomatik olaraq başlayır. Setup Assistant agenti suallar verir və site_briefinizi qurur.

### Əl ilə Başlatma {#manual-initiation}

Sayt Təsvirini istənilən vaxt başlada bilərsiniz:

```
"Let's define my site specification"
```

və ya

```
"Help me create a site brief"
```

## Sayt Təsviri Prosesi {#the-site-specification-process}

### Addım 1: Sayt Məqsədi {#step-1-site-purpose}

Agent soruşur:

```
What is your site's primary purpose?
- E-commerce store
- Blog or content site
- Portfolio or showcase
- SaaS application
- Community or forum
- Other: [describe]
```

Bir kateqoriya seçə və ya öz məqsədinizi təsvir edə bilərsiniz.

### Addım 2: Hədəf Auditoriya {#step-2-target-audience}

```
Who is your primary audience?
- Consumers / general public
- Business professionals
- Developers / technical users
- Students / educators
- Other: [describe]

What are their main needs?
```

### Addım 3: Brend Kimliyi {#step-3-brand-identity}

```
What are your brand colors?
- Primary color: [color picker or hex code]
- Secondary color: [color picker or hex code]
- Accent color: [optional]

How would you describe your brand tone?
- Professional / corporate
- Creative / artistic
- Playful / casual
- Minimal / modern
- Warm / friendly
```

### Addım 4: Biznes Məqsədləri {#step-4-business-goals}

```
What does success look like for your site?
- Generate leads
- Sell products
- Build community
- Share knowledge
- Establish authority
- Other: [describe]

What's your primary metric?
- Revenue
- User engagement
- Content reach
- Conversions
- Other
```

### Addım 5: Məzmun Strukturu {#step-5-content-structure}

```
How is your content organized?
- Flat (all content at same level)
- Hierarchical (categories and subcategories)
- Chronological (blog-style)
- Product-based (catalog)
- Other: [describe]

What content types do you use?
- Blog posts
- Product pages
- Case studies
- Documentation
- Videos
- Other
```

## site_brief Yaddaşınız {#your-sitebrief-memory}

Sayt Təsvirini tamamladıqdan sonra, məlumatlarınız agent yaddaşınızda **site_brief** kimi saxlanılır. Bu, aşağıdakıları ehtiva edən strukturlaşdırılmış bir qeyddir:

```json
{
  "site_purpose": "E-commerce store for handmade jewelry",
  "target_audience": "Women aged 25-45, interested in sustainable fashion",
  "brand_colors": {
    "primary": "#8B4513",
    "secondary": "#D2B48C",
    "accent": "#2F4F4F"
  },
  "brand_tone": "Warm, artisanal, sustainable",
  "business_goals": ["Generate sales", "Build brand loyalty"],
  "primary_metric": "Revenue",
  "content_structure": "Product catalog with blog",
  "content_types": ["Product pages", "Blog posts", "Customer stories"]
}
```

## site_briefinizi Görmək və Yeniləmək {#viewing-and-updating-your-sitebrief}

### site_briefinizi Görmək {#view-your-sitebrief}

Agentdən soruşun:

```
"Show me my site brief"
```

və ya

```
"What do you know about my site?"
```

Agent saxlanmış təsvirinizi göstərəcək.

### site_briefinizi Yeniləmək {#update-your-sitebrief}

Saytınız təkmilləşsə, onu yeniləyə bilərsiniz:

```
"Update my site brief: we're now targeting B2B customers"
```

və ya

```
"Refresh my site specification"
```

Bu, mövcud məlumatlarınızı başlanğıc nöqtəsi kimi istifadə edərək Sayt Təsviri bacarığını yenidən işə salacaq.

## Agentlər site_brief-dən Necə İstifadə Edir? {#how-agents-use-sitebrief}

### Dizayn Tövsiyələri {#design-recommendations}

Dizayn dəyişiklikləri istədiyiniz zaman, agentlər site_briefinizə istinad edir:

```
You: "Redesign my homepage"
Agent: "Based on your site brief, you're targeting women aged 25-45
with a warm, artisanal tone. I'll create a design that emphasizes
your handmade jewelry and sustainable values."
```

### Xüsusiyyət Təklifləri {#feature-suggestions}

Agentlər məqsədlərinizə uyğun xüsusiyyətlər təklif edir:

```
You: "What features should I add?"
Agent: "For an e-commerce store focused on customer loyalty,
I'd recommend: loyalty program, customer reviews, email newsletter,
and product recommendations."
```

### Məzmun Strukturu {#content-structure}

Agentlər strukturunuza əsaslanaraq məzmun təşkil etməsi haqqında təklif edir:

```
You: "How should I organize my blog?"
Agent: "Since you use a product catalog with blog, I'd suggest
organizing posts by product category and creating 'styling guides'
that showcase multiple products together."
```

## Ən Yaxşı Praktikalara Nəzər Salmaq {#best-practices}

### Spesifik Olun {#be-specific}

"Ümumi auditoriya" əvəzinə, faktiki auditoriyanızı təsvir edin:

- ✓ "Women aged 25-45, interested in sustainable fashion"
- ✗ "Everyone"

### Mütəmadi Yeniləyin {#update-regularly}

Saytınız təkmilləşdikcə, site_briefinizi yeniləyin:

- Yeni bir auditoriyaya keçdiyiniz zaman
- Yeni məhsul xətləri əlavə etdiyiniz zaman
- Brend kimliyiniz dəyişdikdə
- Biznes məqsədləriniz dəyişdikdə

### Tutarlı Terminologiya İstifadə Edin {#use-consistent-terminology}

Seanslar boyunca eyni terminlərdən istifadə edin:

- ✓ Həmişə "sustainable jewelry" deyin (yox "eco-friendly jewelry" və "green products")
- ✓ Auditoriyanıza daim eyni şəkildə istinad edin

### Kontekst Daxil Edin {#include-context}

Agentlərin qərarlarınızı anlamağa kömək edən fon məlumatı verin:

- "Biz qiymətə deyil, keyfiyyətə dəyər verən peşəkarlara yönəlirik"
- "Auditoriyam texnologiyaya açıqdır və müasir dizayn gözləyir"
- "Biz öz resurslarımızla qurulmuş bir startapıq, buna görə də qiymətə malik həllərə ehtiyacımız var"

## Theme Builder Onboarding ilə Əlaqəsi {#relationship-to-theme-builder-onboarding}

Sayt Təsviri bacarığı **Theme Builder onboarding axını** daxil edilmişdir. Onboarding-i tamamladığınız zaman, təqdim etdiyiniz məlumatlarla site_briefiniz avtomatik yaradılır.

Əgər istəsəniz, Sayt Təsvirini müstəqil şəkildə də işə sala bilərsiniz:

- Başlanğıc qurulmasından sonra təsvirinizi təkmilləşdirmək üçün
- Saytınız təkmilləşdikcə site briefinizi yeniləmək üçün
- Theme Builder-i başlatmadan əvvəl ətraflı təsvir yaratmaq üçün

## Problemlərin Həlli {#troubleshooting}

**site_briefim istifadə edilmir**
- Agentin yaddaşa çıxarış etməsinə icazə verildiyini təsdiqləyin
- Agentdən "recall my site brief" (site briefimi xatırlat) deməsini xahiş edin
- Ayarlarınızda yaddaşın aktiv olduğundan əmin olun

**Yeni bir site_brief ilə sıfırdan başlamalıyam**
- Agentdən: "Clear my site brief and start fresh" (Site briefimi təmizlə və sıfırdan başla) deməsini xahiş edin
- Sonra Sayt Təsvirini yenidən işə salın

**Agent site_briefimə uyğun olmayan tövsiyələr verir**
- Agentdən "review my site brief" (site briefimi nəzərdən keçir) deməsini xahiş edin
- site_briefiniz köhnədirsə, onu yeniləyin
- Xahişlərinizdə əlavə kontekst verin

## Növbəti Addımlar {#next-steps}

Sayt təsvirinizi müəyyən etdikdən sonra:

1. **Theme Builder-dən istifadə edin**: site_briefinizə əsaslanaraq özəl bir tema yaradın
2. **Dizaynı Təkmilləşdirin**: Ətraflı dizayn işləri üçün Design System Aesthetics bacarığından istifadə edin
3. **Məzmun Planlaşdırın**: Məzmun strukturu tövsiyələri üçün agentlərdən xahiş edin
4. **Xüsusiyyətlər Qurun**: Biznes məqsədlərinizə uyğun xüsusiyyətlər tələb edin
