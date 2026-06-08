---
title: Araçlar ve Yapılandırma
sidebar_position: 4
_i18n_hash: f27cdab7be320668b6c1d53db1190775
---
# Araçlar ve Yapılandırma

Theme Builder, WordPress sitenizi analiz etmek, tasarlamak ve oluşturmak için bir dizi araç kullanır. 1.16.0 sürümünde, **sd-ai-agent/site-scrape artık bir Tier 1 aracıdır**, bu sayede Theme Builder'da varsayılan olarak kullanıma sunulmuştur.

## Mevcut Araçlar

### Tier 1 Araçlar (Her Zaman Kullanılabilir)

Tier 1 araçlar, ek bir yapılandırma yapılmasına gerek kalmadan Theme Builder'da varsayılan olarak mevcuttur.

#### sd-ai-agent/site-scrape

**Amacı:** Tasarım ilhamı, içerik yapısı ve işlevselliği çıkarmak için mevcut web sitelerini analiz eder.

**Yetenekleri:**

- **Web sitesi analizi** — Rakip veya ilham verici web sitelerini kazır ve analiz eder
- **Tasarım çıkarma** — Renkleri, yazı tiplerini ve düzen kalıplarını belirler
- **İçerik yapısı** — Sayfa organizasyonunu ve hiyerarşiyi anlar
- **Özellik tespiti** — Plugin ve işlevselliği belirler
- **Performans analizi** — Sayfa hızını ve optimizasyonu kontrol eder
- **SEO analizi** — Meta etiketleri ve yapılandırılmış verileri inceler

**Kullanımı:**

```
Analyze the design of example.com and use it as inspiration for my site.
```

**Ne Çıkarır:**

- Renk paleti ve renk kullanımı
- Tipografi (yazı tipleri ve boyutlar)
- Düzen yapısı ve boşluklar
- Navigasyon kalıpları
- İçerik organizasyonu
- Görseller ve medya kullanımı
- Etkileşimli öğeler
- Mobil uyumluluk

**Sınırlamaları:**

- Şifre korumalı siteleri kazılayamaz
- robots.txt ve site politikalarına saygı duyar
- Dinamik içeriği yakalayamayabilir
- JavaScript ağırlıklı sitelerde analiz sınırlı olabilir
- Büyük siteler analiz edilmesi daha uzun sürebilir

### Tier 2 Araçlar (İsteğe Bağlı)

Tier 2 araçlar, Theme Builder ayarlarında açıkça etkinleştirildiğinde kullanılabilir.

#### Advanced Analytics

Detaylı performans metrikleri sağlar:

- Sayfa yükleme süreleri
- Core Web Vitals
- SEO puanı
- Erişilebilirlik puanı
- En iyi uygulamalar puanı

#### Content Optimizer

Aşağıdakiler için analiz yapar ve iyileştirme önerileri sunar:

- Okunabilirlik
- SEO optimizasyonu
- Anahtar kelime kullanımı
- İçerik yapısı
- Harekete geçirici mesaj (Call-to-action) yerleşimi

### Tier 3 Araçlar (Premium)

Tier 3 araçlar ek yapılandırma veya premium özellikler gerektirir.

#### AI Content Generator

Aşağıdaki içerikleri oluşturur:

- Ürün açıklamaları
- Hizmet sayfaları
- Blog yazıları
- Meta açıklamaları
- Harekete geçirici mesaj (Call-to-action) metinleri

#### Advanced Design Tools

Gelişmiş tasarım yetenekleri sağlar:

- Özel CSS oluşturma
- Animasyon oluşturma
- Etkileşimli öğe tasarımı
- Gelişmiş renk teorisi
- Tipografi optimizasyonu

## Araç Yapılandırması

### Araçları Etkinleştirme

Theme Builder'da ek araçları etkinleştirmek için:

1. **Gratis AI Agent → Settings** yolunu izleyin
2. **Theme Builder → Tools** bölümüne gidin
3. İhtiyaca göre araçları açma/kapama düğmesiyle değiştirin
4. Ayarları kaydedin

### Araç İzinleri

Bazı araçlar izin gerektirir:

- **Site kazıma (Site scraping)** — internet erişimi gerektirir
- **Analitik (Analytics)** — Google Analytics entegrasyonu gerektirir
- **İçerik oluşturma (Content generation)** — API anahtarları gerektirir
- **Gelişmiş özellikler (Advanced features)** — premium abonelik gerektirebilir

### API Anahtarları ve Kimlik Bilgileri

Bunları gerektiren araçlar için API anahtarlarını yapılandırın:

1. **Gratis AI Agent → Settings → API Keys** yoluna gidin
2. Her araç için kimlik bilgilerini girin
3. Bağlantıyı test edin
4. Güvenli bir şekilde kaydedin

## sd-ai-agent/site-scrape Kullanımı

### Temel Kullanım

Theme Builder'dan bir web sitesini analiz etmesini isteyin:

```
Analyze the design of my competitor's site at competitor.com
and suggest design improvements for my site.
```

### Belirli Analiz

Belirli analiz türleri talep edin:

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

### Karşılaştırma Analizi

Birden fazla siteyi karşılaştırın:

```
Compare the designs of site1.com and site2.com and create a design
that combines the best elements of both.
```

## Araç Sınırlamaları ve Dikkat Edilmesi Gerekenler

### Hız Sınırlaması (Rate Limiting)

- Sunucu aşırı yüklenmesini önlemek için kazıma hız sınırlıdır
- Aynı siteye yapılan birden fazla istek kısıtlanabilir
- Büyük siteler analiz edilmesi daha uzun sürebilir

### İçerik Doğruluğu

- Dinamik içerik tam olarak yakalanamayabilir
- JavaScript ile oluşturulan içerik eksik olabilir
- Gerçek zamanlı veriler yansıtılmayabilir
- Bazı içerikler ücretli duvarların arkasında olabilir

### Yasal ve Etik Hususlar

- robots.txt ve site politikalarına saygı gösterin
- Telif hakkıyla korunan içeriği çoğaltmak için kazımayın
- Analizi kopyalamak için değil, ilham almak için kullanın
- Çıkarılan içeriği kullanma hakkınız olduğundan emin olun
- Analiz edilen sitelerin hizmet şartlarına uyun

### Performans Etkisi

- Büyük siteleri kazımak zaman alabilir
- Birden fazla eş zamanlı kazıma daha yavaş olabilir
- Ağ bağlantısı hızı etkiler
- Büyük veri kümeleri daha fazla işlem gerektirebilir

## En İyi Uygulamalar

### Site Analizi Kullanımı

1. **Birden fazla siteyi analiz edin** — Birkaç kaynaktan ilham toplayın
2. **Yapıya odaklanın** — Düzen ve organizasyon kalıplarını öğrenin
3. **Renkleri çıkarın** — Renk paletlerini başlangıç noktası olarak kullanın
4. **Tipografiyi inceleyin** — Beğendiğiniz yazı tipi kombinasyonlarını belirleyin
5. **Navigasyonu gözden geçirin** — Menü organizasyonunu anlayın

### Etik Kazıma

1. **robots.txt'ye saygı gösterin** — Site yönergelerine uyun
2. **İçerik kopyalamayın** — Analizi yalnızca ilham almak için kullanın
3. **Hakları doğrulayın** — Çıkarılan içeriği kullanabileceğinizden emin olun
4. **Kaynakları belirtin** — İlham kaynaklarına atıfta bulunun
5. **Şartlara uyun** — Site hizmet şartlarına uyun

### Araç Etkinliğini En Üst Düzeye Çıkarma

1. **Spesifik olun** — Belirli analiz türleri isteyin
2. **Bağlam sağlayın** — Sitenizin amacını açıklayın
3. **Beklentiler belirleyin** — Tasarım hedeflerinizi açıklayın
4. **Tekrarlayın** — Sonuçlara göre iyileştirin
5. **Araçları birleştirin** — Kapsamlı analiz için birden fazla araç kullanın

## Sorun Giderme

### Site Kazınmıyor

- Sitenin genel kullanıma açık olup olmadığını kontrol edin
- robots.txt'nin kazımaya izin verip vermediğini doğrulayın
- Farklı bir site deneyin
- İnternet bağlantısını kontrol edin
- Sorun devam ederse destekle iletişime geçin

### Eksik Analiz

- Site dinamik içerik barındırıyor olabilir
- JavaScript tam olarak işlenmemiş olabilir
- Büyük siteler zaman aşımına uğrayabilir
- Bunun yerine belirli sayfaları analiz etmeyi deneyin
- Belirli analiz türleri isteyin

### Yavaş Performans

- Büyük siteleri analiz etmek daha uzun sürer
- Birden fazla eş zamanlı kazıma daha yavaştır
- Ağ bağlantısı hızı etkiler
- Yoğun olmayan saatlerde denemeyi deneyin
- Önce daha küçük bölümleri analiz edin

## İlgili Belgeler

- [Discovery Interview](./discovery-interview.md) — Tasarım bilgisi toplama
- [Design Direction](./design-direction.md) — Tasarımınızı iyileştirme
- [Hospitality Menus](./hospitality-menus.md) — Menü sayfaları oluşturma
