---
title: Utiylo va Konfiguratsiya
sidebar_position: 4
_i18n_hash: f27cdab7be320668b6c1d53db1190775
---
# Araçlar ve Yapılandırma

Theme Builder, WordPress sitenizi analiz etmek, tasarlamak ve oluşturmak için bir dizi araç kullanır. 1.16.0 sürümünde, **sd-ai-agent/site-scrape artık Seviye 1 bir araçtır**, bu sayede Theme Builder'da varsayılan olarak kullanıma hazırdır.

## Mevcut Araçlar

### Seviye 1 Araçlar (Her Zaman Kullanılabilir)

Seviye 1 araçlar, ek bir yapılandırmaya gerek kalmadan Theme Builder'da varsayılan olarak mevcuttur.

#### sd-ai-agent/site-scrape

**Amacı:** Mevcut web sitelerini analiz ederek tasarım ilhamı, içerik yapısı ve işlevsellik çıkarmak.

**Yetenekleri:**

- **Web sitesi analizi** — Rakip veya ilham verici web sitelerini tarar ve analiz eder
- **Tasarım çıkarma** — Renkleri, yazı tiplerini ve düzen kalıplarını belirler
- **İçerik yapısı** — Sayfa organizasyonunu ve hiyerarşiyi anlar
- **Özellik tespiti** — Plugin'leri ve işlevselliği belirler
- **Performans analizi** — Sayfa hızını ve optimizasyonunu kontrol eder
- **SEO analizi** — Meta etiketleri ve yapılandırılmış verileri inceler

**Kullanımı:**

```
example.com'un tasarımını analiz et ve bunu sitem için ilham kaynağı olarak kullan.
```

**Neler Çıkarır:**

- Renk paleti ve renk kullanımı
- Tipografi (yazı tipleri ve boyutlar)
- Düzen yapısı ve boşluklar
- Navigasyon kalıpları
- İçerik organizasyonu
- Görseller ve medya kullanımı
- Etkileşimli öğeler
- Mobil uyumluluk

**Sınırlamaları:**

- Şifre korumalı siteleri tarayamaz
- robots.txt ve site politikalarına saygı duyar
- Dinamik içeriği yakalayamayabilir
- JavaScript ağırlıklı sitelerde analiz sınırlı olabilir
- Büyük siteler analiz edilmesi daha uzun sürebilir

### Seviye 2 Araçlar (İsteğe Bağlı)

Seviye 2 araçlar, Theme Builder ayarlarında açıkça etkinleştirildiğinde kullanılabilir.

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
- Harekete geçirici mesaj (CTA) yerleşimi

### Seviye 3 Araçlar (Premium)

Seviye 3 araçlar ek yapılandırma veya premium özellikler gerektirir.

#### AI Content Generator

Aşağıdaki içerikleri oluşturur:

- Ürün açıklamaları
- Hizmet sayfaları
- Blog yazıları
- Meta açıklamaları
- Harekete geçirici mesaj (CTA) metinleri

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
3. İhtiyaca göre araçları aç/kapa yapın
4. Ayarları kaydedin

### Araç İzinleri

Bazı araçlar izin gerektirir:

- **Site tarama** — internet erişimi gerektirir
- **Analitik** — Google Analytics entegrasyonu gerektirir
- **İçerik oluşturma** — API anahtarları gerektirir
- **Gelişmiş özellikler** — premium abonelik gerektirebilir

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
competitor.com adresindeki rakip sitemin tasarımını analiz et
ve sitem için tasarım iyileştirmeleri öner.
```

### Belirli Analiz

Belirli analiz türleri talep edin:

```
example.com'dan renk paletini çıkar ve bunu ilham kaynağı olarak kullan.
```

```
example.com'un navigasyon yapısını analiz et ve benzer bir
organizasyonu siteme uygula.
```

```
example.com'un mobil uyumluluğunu kontrol et ve sitemin de
aynı derecede uyumlu olduğundan emin ol.
```

### Karşılaştırmalı Analiz

Birden fazla siteyi karşılaştırın:

```
site1.com ve site2.com'un tasarımlarını karşılaştır ve her ikisinin de
en iyi unsurlarını birleştiren bir tasarım oluştur.
```

## Araç Sınırlamaları ve Dikkat Edilmesi Gerekenler

### Hız Sınırlaması (Rate Limiting)

- Sunucu aşırı yüklenmesini önlemek için tarama hız sınırlıdır
- Aynı siteye yapılan birden fazla istek kısıtlanabilir
- Büyük siteler analiz edilmesi daha uzun sürebilir

### İçerik Doğruluğu

- Dinamik içerik tam olarak yakalanamayabilir
- JavaScript ile oluşturulan içerik eksik olabilir
- Gerçek zamanlı veriler yansıtılmayabilir
- Bazı içerikler ücretli duvarların arkasında olabilir

### Yasal ve Etik Hususlar

- robots.txt ve site politikalarına saygı gösterin
- Telif hakkıyla korunan içeriği çoğaltmak için taramayın
- Analizi kopyalamak için değil, ilham almak için kullanın
- Çıkarılan içeriği kullanma hakkınız olduğundan emin olun
- Analiz edilen sitelerin hizmet şartlarına uyun

### Performans Etkisi

- Büyük siteleri taramak zaman alabilir
- Birden fazla eş zamanlı tarama daha yavaş olabilir
- Ağ bağlantısı hızı etkiler
- Büyük veri kümeleri daha fazla işlem gerektirebilir

## En İyi Uygulamalar

### Site Analizi Kullanımı

1. **Birden fazla siteyi analiz edin** — birkaç kaynaktan ilham toplayın
2. **Yapıya odaklanın** — düzen ve organizasyon kalıplarını öğrenin
3. **Renkleri çıkarın** — renk paletlerini başlangıç noktası olarak kullanın
4. **Tipografiyi inceleyin** — beğendiğiniz yazı tipi kombinasyonlarını belirleyin
5. **Navigasyonu gözden geçirin** — menü organizasyonunu anlayın

### Etik Tarama

1. **robots.txt'ye saygı gösterin** — site yönergelerine uyun
2. **İçerik kopyalamayın** — analizi sadece ilham için kullanın
3. **Hakları doğrulayın** — çıkarılan içeriği kullanabileceğinizden emin olun
4. **Kaynakları belirtin** — ilham kaynaklarına atıfta bulunun
5. **Şartlara uyun** — site hizmet şartlarına uyun

### Araç Etkinliğini En Üst Düzeye Çıkarma

1. **Spesifik olun** — belirli analiz türleri isteyin
2. **Bağlam sağlayın** — sitenizin amacını açıklayın
3. **Beklentiler belirleyin** — tasarım hedeflerinizi anlatın
4. **Tekrarlayın** — sonuçlara göre iyileştirin
5. **Araçları birleştirin** — kapsamlı analiz için birden fazla araç kullanın

## Sorun Giderme

### Site Taranmıyor

- Sitenin genel kullanıma açık olup olmadığını kontrol edin
- robots.txt'nin taramaya izin verdiğini doğrulayın
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
- Birden fazla eş zamanlı tarama daha yavaştır
- Ağ bağlantısı hızı etkiler
- Yoğun olmayan saatlerde denemeyi deneyin
- Önce daha küçük bölümleri analiz edin

## İlgili Belgeler

- [Discovery Interview](./discovery-interview.md) — tasarım bilgisi toplama
- [Design Direction](./design-direction.md) — tasarımınızı iyileştirme
- [Hospitality Menus](./hospitality-menus.md) — menü sayfaları oluşturma
