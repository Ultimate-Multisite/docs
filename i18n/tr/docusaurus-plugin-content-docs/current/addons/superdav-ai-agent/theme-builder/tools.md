---
title: Araçlar ve Yapılandırma
sidebar_position: 4
_i18n_hash: 78a3b6062e985598d020eaee28754120
---
# Araçlar ve Yapılandırma

Theme Builder, WordPress sitenizi analiz etmek, tasarlamak ve oluşturmak için bir dizi araç kullanır. 1.16.0 sürümünde, **sd-ai-agent/site-scrape artık Tier 1 araçtır**; bu da Theme Builder içinde varsayılan olarak kullanılabilir olduğu anlamına gelir. Superdav AI Agent v1.18.0 ayrıca güvenilir geliştirici iş akışları için ayrı dağıtılan bir Advanced yardımcı paketi sunar; bu araçlar WordPress.org çekirdek paketinin parçası değildir ve ayrıca kurulup yetkilendirilmelidir.

## Kullanılabilir Araçlar {#available-tools}

### Tier 1 Araçlar (Her Zaman Kullanılabilir) {#tier-1-tools-always-available}

Tier 1 araçlar, ek bir yapılandırma olmadan Theme Builder içinde varsayılan olarak kullanılabilir.

#### sd-ai-agent/site-scrape {#sd-ai-agentsite-scrape}

**Amaç:** Tasarım ilhamı, içerik yapısı ve işlevsellik çıkarmak için mevcut web sitelerini analiz etmek.

**Yetenekler:**

- **Web sitesi analizi** — rakip veya ilham alınacak web sitelerini tarayın ve analiz edin
- **Tasarım çıkarımı** — renkleri, yazı tiplerini ve düzen kalıplarını belirleyin
- **İçerik yapısı** — sayfa organizasyonunu ve hiyerarşiyi anlayın
- **Özellik tespiti** — plugin’leri ve işlevselliği belirleyin
- **Performans analizi** — sayfa hızını ve optimizasyonu kontrol edin
- **SEO analizi** — meta etiketleri ve yapılandırılmış verileri inceleyin

**Kullanım:**

```
example.com tasarımını analiz et ve bunu sitem için ilham olarak kullan.
```

**Ne Çıkarır:**

- Renk paleti ve renk kullanımı
- Tipografi (yazı tipleri ve boyutlar)
- Düzen yapısı ve aralıklar
- Gezinme kalıpları
- İçerik organizasyonu
- Görseller ve medya kullanımı
- Etkileşimli öğeler
- Mobil uyumluluk

**Sınırlamalar:**

- Parola korumalı siteleri tarayamaz
- robots.txt ve site politikalarına uyar
- Dinamik içeriği yakalayamayabilir
- JavaScript ağırlıklı sitelerde analiz sınırlı olabilir
- Büyük sitelerin analiz edilmesi daha uzun sürebilir

### Tier 2 Araçlar (İsteğe Bağlı) {#tier-2-tools-optional}

Tier 2 araçlar, Theme Builder ayarlarında açıkça etkinleştirildiğinde kullanılabilir.

#### Gelişmiş Analitik {#advanced-analytics}

Ayrıntılı performans metrikleri sağlar:

- Sayfa yükleme süreleri
- Core Web Vitals
- SEO puanı
- Erişilebilirlik puanı
- En iyi uygulamalar puanı

#### İçerik Optimize Edici {#content-optimizer}

Şunlar için iyileştirmeler analiz eder ve önerir:

- Okunabilirlik
- SEO optimizasyonu
- Anahtar kelime kullanımı
- İçerik yapısı
- Eylem çağrısı yerleşimi

### Tier 3 Araçlar (Premium) {#tier-3-tools-premium}

Tier 3 araçlar ek yapılandırma veya premium özellikler gerektirir.

#### AI İçerik Oluşturucu {#ai-content-generator}

Şunlar için içerik oluşturur:

- Ürün açıklamaları
- Hizmet sayfaları
- Blog yazıları
- Meta açıklamaları
- Eylem çağrısı metni

#### Gelişmiş Tasarım Araçları {#advanced-design-tools}

Gelişmiş tasarım yetenekleri sağlar:

- Özel CSS oluşturma
- Animasyon oluşturma
- Etkileşimli öğe tasarımı
- Gelişmiş renk teorisi
- Tipografi optimizasyonu

### Advanced Yardımcı Araçlar (Ayrı Paket) {#advanced-companion-tools-separate-package}

Advanced yardımcı paketi, çekirdek Superdav AI Agent sürümünden ayrı olarak dağıtılır. Yöneticilerin agent’ın yüksek etkili araçları kullanmasına açıkça izin verdiği güvenilir geliştirici ve site sahibi ortamları için tasarlanmıştır.

Advanced yardımcı yetenekleri şunları içerebilir:

- **Dosya sistemi araçları** — güvenilir ortamlarda onaylanmış dosyaları inceleyin ve değiştirin
- **Veritabanı araçları** — açıkça yetkilendirildiğinde site verilerini sorgulayın veya güncelleyin
- **WP-CLI araçları** — WordPress bakım ve inceleme komutlarını çalıştırın
- **REST dağıtıcı araçları** — kontrollü dağıtım iş akışları aracılığıyla kayıtlı REST endpoint’lerini çağırın
- **Plugin oluşturucu araçları** — plugin kodu için iskelet oluşturun ve üzerinde yineleme yapın
- **Git anlık görüntü araçları** — riskli geliştirici işlemlerinden önce anlık görüntüler oluşturun
- **Kullanıcı yönetimi araçları** — izin verilen durumlarda kullanıcı kayıtlarını incelemeye veya ayarlamaya yardımcı olun
- **Benchmark araçları** — geliştirme incelemesi için performans veya yetenek benchmark’ları çalıştırın

Bunları her kurulum için genel olarak kullanılabilir Theme Builder araçları olarak belgelemeyin. Yalnızca Advanced yardımcı paketi kurulduğunda, etkinleştirildiğinde ve güvenilir yöneticilerle sınırlandırıldığında kullanılabilirler.

## Araç Yapılandırması {#tool-configuration}

### Araçları Etkinleştirme {#enabling-tools}

Theme Builder içinde ek araçları etkinleştirmek için:

1. **Gratis AI Agent → Settings** bölümüne gidin
2. **Theme Builder → Tools** bölümüne gidin
3. Gerektiği şekilde araçları açın/kapatın
4. Ayarları kaydedin

### Araç İzinleri {#tool-permissions}

Bazı araçlar izin gerektirir:

- **Site tarama** — internet erişimi gerektirir
- **Analitik** — Google Analytics entegrasyonu gerektirir
- **İçerik oluşturma** — API anahtarları gerektirir
- **Gelişmiş özellikler** — premium abonelik gerektirebilir
- **Advanced yardımcı araçlar** — ayrı dağıtılan Advanced paketini ve açık yönetici güvenini gerektirir

### API Anahtarları ve Kimlik Bilgileri {#api-keys-and-credentials}

Bunları gerektiren araçlar için API anahtarlarını yapılandırın:

1. **Gratis AI Agent → Settings → API Keys** bölümüne gidin
2. Her araç için kimlik bilgilerini girin
3. Bağlantıyı test edin
4. Güvenli şekilde kaydedin

### Advanced Yardımcı Paketini Kurma {#installing-the-advanced-companion-package}

Advanced yardımcı paketi, WordPress.org çekirdek ZIP’inden ayrı olarak yayımlanır. Bunu yalnızca sürüm için resmi proje dağıtım kanalından kurun, ardından erişimi güvenilir yöneticilerle sınırlayın. Bir üretim sitesinde dosya sistemi, veritabanı, WP-CLI, REST dağıtıcı, plugin oluşturucu, kullanıcı yönetimi veya benchmark araçlarını etkinleştirmeden önce insan onayı geçitlerini ve git anlık görüntü davranışını gözden geçirin.

## sd-ai-agent/site-scrape Kullanımı {#using-sd-ai-agentsite-scrape}

### Temel Kullanım {#basic-usage}

Theme Builder’dan bir web sitesini analiz etmesini isteyin:

```
competitor.com adresindeki rakibimin sitesinin tasarımını analiz et
ve sitem için tasarım iyileştirmeleri öner.
```

### Belirli Analiz {#specific-analysis}

Belirli analiz türleri isteyin:

```
example.com’dan renk paletini çıkar ve bunu ilham olarak kullan.
```

```
example.com’un gezinme yapısını analiz et ve benzer
organizasyonu siteme uygula.
```

```
example.com’un mobil uyumluluğunu kontrol et ve sitemin
aynı derecede uyumlu olduğundan emin ol.
```

### Karşılaştırma Analizi {#comparison-analysis}

Birden fazla siteyi karşılaştırın:

```
site1.com ve site2.com tasarımlarını karşılaştır ve ikisinin de en iyi
öğelerini birleştiren bir tasarım oluştur.
```

## Araç Sınırlamaları ve Dikkate Alınacaklar {#tool-limitations-and-considerations}

### Hız Sınırlaması {#rate-limiting}

- Scraping, sunucu aşırı yüklenmesini önlemek için hız sınırına tabidir
- Aynı siteye yapılan birden fazla istek yavaşlatılabilir
- Büyük sitelerin analiz edilmesi daha uzun sürebilir

### İçerik Doğruluğu {#content-accuracy}

- Dinamik içerik tam olarak yakalanmayabilir
- JavaScript ile işlenen içerik eksik olabilir
- Gerçek zamanlı veriler yansıtılmayabilir
- Bazı içerikler ödeme duvarlarının arkasında olabilir

### Yasal ve Etik Hususlar {#legal-and-ethical-considerations}

- robots.txt ve site politikalarına saygı gösterin
- Telif hakkıyla korunan içeriği çoğaltmak için scrape etmeyin
- Analizi kopyalama için değil, ilham için kullanın
- Çıkarılan içeriği kullanma haklarına sahip olduğunuzu doğrulayın
- Analiz edilen sitelerin hizmet şartlarına uyun

### Performans Etkisi {#performance-impact}

- Büyük siteleri scrape etmek zaman alabilir
- Eş zamanlı birden fazla scrape işlemi daha yavaş olabilir
- Ağ bağlantısı hızı etkiler
- Büyük veri kümeleri daha fazla işlem gerektirebilir

## En İyi Uygulamalar {#best-practices}

### Site Analizini Kullanma {#using-site-analysis}

1. **Birden fazla siteyi analiz edin** — çeşitli kaynaklardan ilham toplayın
2. **Yapıya odaklanın** — düzen ve organizasyon kalıplarını öğrenin
3. **Renkleri çıkarın** — renk paletlerini başlangıç noktası olarak kullanın
4. **Tipografiyi inceleyin** — beğendiğiniz font kombinasyonlarını belirleyin
5. **Gezinmeyi gözden geçirin** — menü organizasyonunu anlayın

### Etik Scraping {#ethical-scraping}

1. **robots.txt’ye saygı gösterin** — site yönergelerini izleyin
2. **İçeriği kopyalamayın** — analizi yalnızca ilham için kullanın
3. **Hakları doğrulayın** — çıkarılan içeriği kullanabileceğinizden emin olun
4. **Kaynakları belirtin** — ilham kaynaklarına atıf verin
5. **Şartlara uyun** — site hizmet şartlarına uyun

### Araç Etkinliğini En Üst Düzeye Çıkarma {#maximizing-tool-effectiveness}

1. **Spesifik olun** — belirli analiz türleri isteyin
2. **Bağlam sağlayın** — sitenizin amacını açıklayın
3. **Beklentileri belirleyin** — tasarım hedeflerinizi tanımlayın
4. **Yineleyin** — sonuçlara göre iyileştirin
5. **Araçları birleştirin** — kapsamlı analiz için birden fazla araç kullanın

## Sorun Giderme {#troubleshooting}

### Site Scrape Edilemiyor {#site-wont-scrape}

- Sitenin herkese açık erişilebilir olup olmadığını kontrol edin
- robots.txt’nin scraping’e izin verdiğini doğrulayın
- Farklı bir site deneyin
- İnternet bağlantısını kontrol edin
- Sorun devam ederse destekle iletişime geçin

### Eksik Analiz {#incomplete-analysis}

- Sitede dinamik içerik olabilir
- JavaScript tam olarak işlenmemiş olabilir
- Büyük sitelerde zaman aşımı olabilir
- Bunun yerine belirli sayfaları analiz etmeyi deneyin
- Belirli analiz türleri isteyin

### Yavaş Performans {#slow-performance}

- Büyük sitelerin analiz edilmesi daha uzun sürer
- Eş zamanlı birden fazla scrape işlemi daha yavaştır
- Ağ bağlantısı hızı etkiler
- Yoğun olmayan saatlerde deneyin
- Önce daha küçük bölümleri analiz edin

## İlgili Dokümantasyon {#related-documentation}

- [Keşif Görüşmesi](./discovery-interview.md) — tasarım bilgilerini toplayın
- [Tasarım Yönü](./design-direction.md) — tasarımınızı iyileştirin
- [Konaklama Menüleri](./hospitality-menus.md) — menü sayfaları oluşturun
