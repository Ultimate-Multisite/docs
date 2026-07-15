---
title: Site Özellik Becerisi
sidebar_position: 18
_i18n_hash: 7470e8d04c1f380b3dca6ba5559b34f5
---
# Site Spesifikasyonu Yeteneği

**Site Spesifikasyonu yeteneği**, sitenizin hedeflerini, hedef kitlesini ve marka kimliğini yakalamak için yapılandırılmış bir yaklaşımdır. Bu bilgiler, **site_brief** belleğinizde saklanır ve ajanlar, tutarlı, bağlama duyarlı yardım sağlamak için oturumlar boyunca bu belleğe başvurur.

## Site Spesifikasyonu Nedir? {#what-is-site-specification}

Site Spesifikasyonu, aşağıdaki unsurları belgelemek sürecidir:

- **Site amacı**: Sitenizin ne yaptığı ve neden var olduğu
- **Hedef kitle**: Sitenizi kimlerin ziyaret ettiği ve neye ihtiyacı olduğu
- **Marka kimliği**: Renkleriniz, tonunuz ve görsel stiliniz
- **İş hedefleri**: Siteniz için başarının ne anlama geldiği
- **İçerik yapısı**: Sitenizin nasıl organize edildiği

Bu spesifikasyon, ajanların sitenizin bağlamını anlamak için kullandığı kalıcı bir bellek olan **site_brief** haline gelir.

## Site Spesifikasyonu Neden Kullanılmalı? {#why-use-site-specification}

### Oturumlar Arası Tutarlılık {#consistency-across-sessions}

site_brief olmadan, her yeni oturum başlattığınızda sitenizin amacını yeniden açıklamanız gerekir. site_brief ile ise ajanlar hemen şunları anlar:

- Sitenizin hedefleri ve hedef kitlesi
- Marka renkleriniz ve tonunuz
- İçerik yapınız
- İş hedefleriniz

### Daha İyi Öneriler {#better-recommendations}

Ajanlar, site_brief'inizi kullanarak şunları yapar:

- Sitenizin amacına uygun özellikler önerir
- Hedeflerinize uyan içerik yapıları tavsiye eder
- Markanızla tutarlı tasarımlar önerir
- Uyumsuz özellikler önermekten kaçınır

### Daha Hızlı Öğrenme Süreci {#faster-onboarding}

Yeni ajanlar (veya yeni oturumlardaki ajanlar), açıklayıcı sorular sormak yerine site_brief'inizi okuyarak hızla adapte olabilirler.

## Site Spesifikasyonunu Başlatma {#initiating-site-specification}

### Theme Builder Onboarding Sırasında {#during-theme-builder-onboarding}

Site Spesifikasyonu yeteneği, **Theme Builder onboarding akışı** sırasında otomatik olarak başlatılır. Setup Assistant ajanı sorular sorar ve site_brief'inizi oluşturur.

### Manuel Başlatma {#manual-initiation}

Site Spesifikasyonunu istediğiniz zaman başlatabilirsiniz:

```
"Let's define my site specification"
```

veya

```
"Help me create a site brief"
```

## Site Spesifikasyonu Süreci {#the-site-specification-process}

### Adım 1: Site Amacı {#step-1-site-purpose}

Ajan sorar:

```
What is your site's primary purpose?
- E-commerce store
- Blog or content site
- Portfolio or showcase
- SaaS application
- Community or forum
- Other: [describe]
```

Bir kategori seçebilir veya kendi amacınızı açıklayabilirsiniz.

### Adım 2: Hedef Kitle {#step-2-target-audience}

```
Who is your primary audience?
- Consumers / general public
- Business professionals
- Developers / technical users
- Students / educators
- Other: [describe]

What are their main needs?
```

### Adım 3: Marka Kimliği {#step-3-brand-identity}

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

### Adım 4: İş Hedefleri {#step-4-business-goals}

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

### Adım 5: İçerik Yapısı {#step-5-content-structure}

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

## site_brief Belleğiniz {#your-sitebrief-memory}

Site Spesifikasyonunu tamamladıktan sonra, bilgileriniz ajan belleğinizde **site_brief** olarak saklanır. Bu, aşağıdaki yapıyı içeren yapılandırılmış bir kayıttır:

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

## site_brief'inizi Görüntüleme ve Güncelleme {#viewing-and-updating-your-sitebrief}

### site_brief'inizi Görüntüleme {#view-your-sitebrief}

Ajana şunu sorun:

```
"Show me my site brief"
```

veya

```
"What do you know about my site?"
```

Ajan, depolanan spesifikasyonunuzu gösterecektir.

### site_brief'inizi Güncelleme {#update-your-sitebrief}

Siteniz gelişirse, onu güncelleyebilirsiniz:

```
"Update my site brief: we're now targeting B2B customers"
```

veya

```
"Refresh my site specification"
```

Bu, mevcut bilgilerinizle bir başlangıç noktası kullanarak Site Spesifikasyonu yeteneğini yeniden çalıştıracaktır.

## Ajanlar site_brief'i Nasıl Kullanır? {#how-agents-use-sitebrief}

### Tasarım Önerileri {#design-recommendations}

Tasarım değişiklikleri istediğinizde, ajanlar site_brief'inize başvurur:

```
You: "Redesign my homepage"
Agent: "Based on your site brief, you're targeting women aged 25-45
with a warm, artisanal tone. I'll create a design that emphasizes
your handmade jewelry and sustainable values."
```

### Özellik Önerileri {#feature-suggestions}

Ajanlar, hedeflerinize uygun özellikler önerir:

```
You: "What features should I add?"
Agent: "For an e-commerce store focused on customer loyalty,
I'd recommend: loyalty program, customer reviews, email newsletter,
and product recommendations."
```

### İçerik Yapısı {#content-structure}

Ajanlar, yapınıza göre içerik organizasyonu önerir:

```
You: "How should I organize my blog?"
Agent: "Since you use a product catalog with blog, I'd suggest
organizing posts by product category and creating 'styling guides'
that showcase multiple products together."
```

## En İyi Uygulamalar {#best-practices}

### Spesifik Olun {#be-specific}

"Genel kitle" yerine, gerçek kitlenizi tanımlayın:

- ✓ "Women aged 25-45, interested in sustainable fashion" (Sürdürülebilir modaya ilgi duyan 25-45 yaş arası kadınlar)
- ✗ "Everyone" (Herkes)

### Düzenli Güncelleyin {#update-regularly}

Siteniz geliştikçe, site_brief'inizi güncelleyin:

- Yeni bir kitleye yöneldiğinizde
- Yeni ürün hatları eklediğinizde
- Marka kimliğiniz değiştiğinde
- İş hedefleriniz kaydığında

### Tutarlı Terminoloji Kullanın {#use-consistent-terminology}

Oturumlar boyunca aynı terimleri kullanın:

- ✓ Her zaman "sustainable jewelry" (sürdürülebilir takı) deyin (ne "eco-friendly jewelry" ne de "green products")
- ✓ Hedef kitlenize her zaman aynı şekilde atıfta bulunun

### Bağlam Ekleyin {#include-context}

Ajanların kararlarınızı anlamasına yardımcı olacak arka plan bilgisi sağlayın:

- "Fiyat yerine kaliteye değer veren profesyonellere odaklanıyoruz"
- "Kitlemiz teknolojiye yatkın ve modern tasarım bekliyor"
- "Başlangıç sermayesiyle kurulan bir startup olduğumuz için uygun maliyetli çözümlere ihtiyacımız var"

## Theme Builder Onboarding ile İlişkisi {#relationship-to-theme-builder-onboarding}

Site Spesifikasyonu yeteneği, **Theme Builder onboarding akışına** entegre edilmiştir. Onboarding'i tamamladığınızda, sağladığınız bilgilerle site_brief'iniz otomatik olarak oluşturulur.

İsterseniz Site Spesifikasyonunu bağımsız olarak da çalıştırabilirsiniz:

- İlk kurulumdan sonra spesifikasyonunuzu iyileştirmek için
- Siteniz geliştikçe site brief'inizi güncellemek için
- Theme Builder'a başlamadan önce ayrıntılı bir spesifikasyon oluşturmak için

## Sorun Giderme {#troubleshooting}

**site_brief kullanılmıyor**
- Ajanın belleğe erişimi olduğundan emin olun
- Ajandan "recall my site brief" (site_brief'imi hatırlat) diye isteyin
- Ayarlarınızda belleğin etkinleştirildiğini kontrol edin

**Yeni bir site_brief ile sıfırdan başlamak istiyorum**
- Ajana şunu sorun: "Clear my site brief and start fresh" (Site_brief'imi temizle ve sıfırdan başla)
- Ardından Site Spesifikasyonunu tekrar çalıştırın

**Ajan, site_brief'ime uymayan önerilerde bulunuyor**
- Ajandan "review my site brief" (site_brief'imi gözden geçir) diye isteyin
- site_brief'iniz güncel değilse güncelleyin
- İsteklerinizde ek bağlam sağlayın

## Sonraki Adımlar {#next-steps}

Site spesifikasyonunuzu tanımladıktan sonra:

1. **Theme Builder'ı Kullanın**: site_brief'inize dayalı özel bir tema oluşturun
2. **Tasarımı İyileştirin**: Detaylı tasarım çalışmaları için Design System Aesthetics skill'i kullanın
3. **İçerik Planlayın**: İçerik yapısı önerileri için ajanlardan yardım isteyin
4. **Özellikler Oluşturun**: İş hedeflerinize uygun özellikler talep edin
