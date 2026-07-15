---
title: Site Specification Skill
sidebar_position: 18
_i18n_hash: 7470e8d04c1f380b3dca6ba5559b34f5
---
# Site Specification Yeteneği

**Site Specification yeteneği**, sitenizin hedeflerini, hedef kitlesini ve marka kimliğini yakalamak için yapılandırılmış bir yaklaşımdır. Bu bilgiler, ajanların oturumlar boyunca tutarlı ve bağlama duyarlı yardım sağlaması için başvurduğu **site_brief** belleğinde saklanır.

## Site Specification Nedir? {#what-is-site-specification}

Site Specification, aşağıdaki unsurları belgelemek sürecidir:

- **Site amacı**: Sitenizin ne yaptığı ve neden var olduğu
- **Hedef kitle**: Sitenizi kimlerin ziyaret ettiği ve neye ihtiyacı olduğu
- **Marka kimliği**: Renkleriniz, tonunuz ve görsel tarzınız
- **İş hedefleri**: Siteniz için başarının ne anlama geldiği
- **İçerik yapısı**: Sitenizin nasıl organize edildiği

Bu spesifikasyon, ajanların sitenizin bağlamını anlamak için kullandığı kalıcı bir bellek olan **site_brief** haline gelir.

## Site Specification Neden Kullanılmalı? {#why-use-site-specification}

### Oturumlar Arası Tutarlılık {#consistency-across-sessions}

site_brief olmadan, her yeni oturum başlattığınızda sitenizin amacını yeniden açıklamanız gerekir. Bununla birlikte, ajanlar hemen şunları anlar:

- Sitenizin hedefleri ve hedef kitlesi
- Marka renkleriniz ve tonunuz
- İçerik yapınız
- İş hedefleriniz

### Daha İyi Öneriler {#better-recommendations}

Ajanlar, site_brief'inizi şunları yapmak için kullanır:

- Sitenizin amacına uygun özellikler önerir
- Hedeflerinize uyan içerik yapıları tavsiye eder
- Markanızla tutarlı tasarımlar sunar
- Uyumsuz özellikler önermekten kaçınır

### Daha Hızlı Öğrenme Süreci {#faster-onboarding}

Yeni ajanlar (veya yeni oturumlardaki ajanlar), açıklayıcı sorular sormak yerine site_brief'inizi okuyarak hızla adapte olabilirler.

## Site Specification'ı Başlatma {#initiating-site-specification}

### Theme Builder Kullanıcıya Alıştırma Sırasında {#during-theme-builder-onboarding}

Site Specification yeteneği, **Theme Builder onboarding akışı** sırasında otomatik olarak başlatılır. Setup Assistant ajanı sorular sorar ve site_brief'inizi oluşturur.

### Manuel Başlatma {#manual-initiation}

Site Specification'ı istediğiniz zaman başlatabilirsiniz:

```
"Site spesifikasyonumu tanımlayalım"
```

veya

```
"Bana bir site brief'i oluşturmanda yardım et"
```

## Site Specification Süreci {#the-site-specification-process}

### Adım 1: Site Amacı {#step-1-site-purpose}

Ajan sorar:

```
Sitenizin birincil amacı nedir?
- E-ticaret mağazası
- Blog veya içerik sitesi
- Portföy veya vitrin
- SaaS uygulaması
- Topluluk veya forum
- Diğer: [tanımlayın]
```

Bir kategori seçebilir veya kendi amacınızı tanımlayabilirsiniz.

### Adım 2: Hedef Kitle {#step-2-target-audience}

```
Birincil hedef kitleniz kim?
- Tüketiciler / genel halk
- İş profesyonelleri
- Geliştiriciler / teknik kullanıcılar
- Öğrenciler / eğitimciler
- Diğer: [tanımlayın]

Temel ihtiyaçları nelerdir?
```

### Adım 3: Marka Kimliği {#step-3-brand-identity}

```
Marka renkleriniz neler?
- Birincil renk: [renk seçici veya hex kodu]
- İkincil renk: [renk seçici veya hex kodu]
- Vurgu rengi: [isteğe bağlı]

Marka tonunuzu nasıl tanımlarsınız?
- Profesyonel / kurumsal
- Yaratıcı / sanatsal
- Eğlenceli / gündelik
- Minimal / modern
- Sıcak / samimi
```

### Adım 4: İş Hedefleri {#step-4-business-goals}

```
Siteniz için başarı ne anlama geliyor?
- Potansiyel müşteri oluşturmak
- Ürün satmak
- Topluluk oluşturmak
- Bilgi paylaşmak
- Otorite kurmak
- Diğer: [tanımlayın]

Birincil metriğiniz nedir?
- Gelir
- Kullanıcı etkileşimi
- İçerik erişimi
- Dönüşümler
- Diğer
```

### Adım 5: İçerik Yapısı {#step-5-content-structure}

```
İçeriğiniz nasıl organize edilmiş?
- Düz (tüm içerikler aynı seviyede)
- Hiyerarşik (kategoriler ve alt kategoriler)
- Kronolojik (blog tarzı)
- Ürün tabanlı (katalog)
- Diğer: [tanımlayın]

Hangi içerik türlerini kullanıyorsunuz?
- Blog yazıları
- Ürün sayfaları
- Vaka çalışmaları
- Dokümantasyon
- Videolar
- Diğer
```

## site_brief Belleğiniz {#your-sitebrief-memory}

Site Specification'ı tamamladıktan sonra, bilgileriniz ajan belleğinizde **site_brief** olarak saklanır. Bu, aşağıdaki gibi yapılandırılmış bir kayıttır:

```json
{
  "site_purpose": "El yapımı takılar için e-ticaret mağazası",
  "target_audience": "Sürdürülebilir moda ile ilgilenen 25-45 yaş arası kadınlar",
  "brand_colors": {
    "primary": "#8B4513",
    "secondary": "#D2B48C",
    "accent": "#2F4F4F"
  },
  "brand_tone": "Sıcak, el işi, sürdürülebilir",
  "business_goals": ["Satış oluşturmak", "Marka sadakati oluşturmak"],
  "primary_metric": "Gelir",
  "content_structure": "Blog ile ürün kataloğu",
  "content_types": ["Ürün sayfaları", "Blog yazıları", "Müşteri hikayeleri"]
}
```

## site_brief'inizi Görüntüleme ve Güncelleme {#viewing-and-updating-your-sitebrief}

### site_brief'inizi Görüntüleme {#view-your-sitebrief}

Ajana şunu sorun:

```
"site brief'imi göster"
```

veya

```
"Sitem hakkında ne biliyorsun?"
```

Ajan, depolanan spesifikasyonunuzu gösterecektir.

### site_brief'inizi Güncelleme {#update-your-sitebrief}

Siteniz gelişirse, onu güncelleyebilirsiniz:

```
"site brief'imi güncelle: artık B2B müşterilere odaklanıyoruz"
```

veya

```
"Site spesifikasyonumu yenile"
```

Bu, mevcut bilgilerinizle bir başlangıç noktası kullanarak Site Specification yeteneğini yeniden çalıştıracaktır.

## Ajanlar site_brief'i Nasıl Kullanır? {#how-agents-use-sitebrief}

### Tasarım Önerileri {#design-recommendations}

Tasarım değişiklikleri istediğinizde, ajanlar site_brief'inize başvurur:

```
Siz: "Ana sayfamı yeniden tasarla"
Ajan: "Site brief'inize göre, 25-45 yaş arası, sıcak ve el işi bir tona sahip kadınları hedefliyorsunuz. El yapımı takılarınızı ve sürdürülebilir değerlerinizi vurgulayan bir tasarım oluşturacağım."
```

### Özellik Önerileri {#feature-suggestions}

Ajanlar, hedeflerinize uygun özellikler önerir:

```
Siz: "Hangi özellikleri eklemeliyim?"
Ajan: "Müşteri sadakatine odaklanan bir e-ticaret mağazası için şunları öneririm: sadakat programı, müşteri yorumları, e-posta bülteni ve ürün önerileri."
```

### İçerik Yapısı {#content-structure}

Ajanlar, yapınıza göre içerik organizasyonu önerir:

```
Siz: "Blogumu nasıl organize etmeliyim?"
Ajan: "Ürün kataloğu ve blog kullandığınız için, gönderileri ürün kategorisine göre düzenlemenizi ve birden fazla ürünü bir arada sergileyen 'stil rehberleri' oluşturmanızı öneririm."
```

## En İyi Uygulamalar {#best-practices}

### Spesifik Olun {#be-specific}

"Genel kitle" yerine, gerçek kitlenizi tanımlayın:

- ✓ "Sürdürülebilir moda ile ilgilenen 25-45 yaş arası kadınlar"
- ✗ "Herkes"

### Düzenli Güncelleyin {#update-regularly}

Siteniz geliştikçe, site_brief'inizi güncelleyin:

- Yeni bir kitleye yöneldiğinizde
- Yeni ürün hatları eklediğinizde
- Marka kimliğiniz değiştiğinde
- İş hedefleriniz değiştiğinde

### Tutarlı Terminoloji Kullanın {#use-consistent-terminology}

Oturumlar boyunca aynı terimleri kullanın:

- ✓ Her zaman "sürdürülebilir takı" deyin (ne "çevre dostu takı" ne de "yeşil ürünler").
- ✓ Hedef kitlenize her zaman aynı şekilde atıfta bulunun.

### Bağlam Ekleyin {#include-context}

Ajanların kararlarınızı anlamasına yardımcı olacak arka plan bilgisi sağlayın:

- "Fiyat yerine kaliteye değer veren profesyonelleri hedefliyoruz."
- "Kitlemız teknolojiye yatkın ve modern tasarım bekliyor."
- "Başlangıç sermayesiyle çalışan bir startup'ız, bu yüzden uygun maliyetli çözümlere ihtiyacımız var."

## Theme Builder Onboarding ile İlişkisi {#relationship-to-theme-builder-onboarding}

Site Specification yeteneği, **Theme Builder onboarding akışına** entegre edilmiştir. Onboarding'i tamamladığınızda, sağladığınız bilgilerle site_brief'iniz otomatik olarak oluşturulur.

Ayrıca, isterseniz Site Specification'ı bağımsız olarak çalıştırabilirsiniz:

- İlk kurulumdan sonra spesifikasyonunuzu iyileştirmek için
- Siteniz geliştikçe site brief'inizi güncellemek için
- Theme Builder'a başlamadan önce ayrıntılı bir spesifikasyon oluşturmak için

## Sorun Giderme {#troubleshooting}

**site_brief kullanılmıyor**
- Ajanın belleğe erişimi olduğundan emin olun
- Ajandan "site brief'imi hatırlat" diye isteyin
- Ayarlarınızda belleğin etkinleştirildiğini kontrol edin

**Yeni bir site_brief ile sıfırdan başlamak istiyorum**
- Ajana şunu sorun: "Site brief'imi temizle ve sıfırdan başla"
- Ardından Site Specification'ı tekrar çalıştırın

**Ajan, site_brief'ime uymayan önerilerde bulunuyor**
- Ajandan "site brief'imi gözden geçir" diye isteyin
- site_brief'iniz güncel değilse güncelleyin
- İsteklerinizde ek bağlam sağlayın

## Sonraki Adımlar {#next-steps}

Site spesifikasyonunuzu tanımladıktan sonra:

1. **Theme Builder Kullanın**: site_brief'inize dayalı özel bir tema oluşturun
2. **Tasarımı İyileştirin**: Detaylı tasarım çalışmaları için Design System Aesthetics yeteneğini kullanın
3. **İçerik Planlayın**: İçerik yapısı önerileri için ajanlardan yardım isteyin
4. **Özellikler Oluşturun**: İş hedeflerinize uygun özellikler talep edin
