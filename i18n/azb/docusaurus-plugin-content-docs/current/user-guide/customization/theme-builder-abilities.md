---
title: Tema Oluşturucu Yetenekleri
sidebar_position: 20
_i18n_hash: 9289bf7c5f164c1b2052ea428e0e3898
---
# Theme Builder Yeterlilikleri: Scaffold ve Activate Block Temaları

Superdav AI Agent v1.12.0, sohbet arayüzünden doğrudan özel block temaları oluşturmanıza ve dağıtmanıza olanak tanıyan iki güçlü yetenek sunuyor.

## Genel Bakış {#overview}

**scaffold-block-theme** ve **activate-theme** yetenekleri, agent'ların şunları yapmasını sağlar:
- Belirlediğiniz özelliklere göre eksiksiz, yayınlanmaya hazır block temaları oluşturmak
- Temaları manuel müdahale olmadan sitenizde otomatik olarak etkinleştirmek
- Rehberli tasarım kararlarıyla tutarlı görsel kimlikler yaratmak

## Block Tema Scaffold Etme {#scaffold-block-theme}

**scaffold-block-theme** yeteneği, aşağıdaki bileşenleri içeren eksiksiz bir tema yapısıyla yeni bir WordPress block teması oluşturur:

- Tasarım token'ları içeren `theme.json` yapılandırması
- Yaygın düzenler için Block şablon dosyaları
- Özel block stilleri ve varyasyonları
- Tema meta verileri ve destek bildirimleri

### Nasıl Kullanılır {#how-to-invoke}

Superdav AI Agent ile yaptığınız sohbette, tema oluşturma isteğinde bulunabilirsiniz:

```
"Create a block theme called 'Modern Agency' with a blue and white color scheme,
sans-serif typography, and a professional layout"
```

Agent şunları yapacaktır:
1. Sohbet yoluyla tasarım tercihlerizi toplar
2. Eksiksiz tema yapısını oluşturur
3. Gerekli tüm tema dosyalarını hazırlar
4. Temayı etkinleştirilmeye hazır hale getirir

### Beklenen Çıktı {#expected-output}

Yetenek başarıyla çalıştırıldığında şunları göreceksiniz:

- Temanın scaffold edildiğine dair onay
- Tema adı ve konumu
- Uygulanan tasarım token'larının özeti (renkler, tipografi, boşluk)
- Etkinleştirilmeye hazır durumu

Örnek çıktı:
```
✓ Theme "Modern Agency" scaffolded successfully
  Location: /wp-content/themes/modern-agency/
  Colors: Primary #0066CC, Secondary #FFFFFF
  Typography: Inter (sans-serif)
  Status: Ready to activate
```

## Temayı Etkinleştirme (Activate Theme) {#activate-theme}

**activate-theme** yeteneği, sitenizi yeni scaffold edilmiş veya mevcut bir block temasına geçirir.

### Nasıl Kullanılır {#how-to-invoke-1}

Bir tema scaffold ettikten sonra, hemen etkinleştirebilirsiniz:

```
"Activate the Modern Agency theme"
```

Veya herhangi bir mevcut temayı etkinleştirebilirsiniz:

```
"Switch to the Twentytwentyfour theme"
```

### Beklenen Çıktı {#expected-output-1}

Etkinleştirme başarılı olduğunda:

- Aktif temanın onayı
- Önceki tema adı (referans için)
- Temanın şu anda yayında olduğu Site URL'si
- Tema özelinde herhangi bir kurulum notu

Örnek çıktı:
```
✓ Theme activated successfully
  Active theme: Modern Agency
  Previous theme: Twentytwentyfour
  Live at: https://yoursite.com
  Note: Check your homepage to verify the layout
```

## İş Akışı: Scaffold Etme ve Etkinleştirme {#workflow-scaffold-and-activate}

Tipik bir iş akışı her iki yeteneği de birleştirir:

1. **Tema oluşturma isteği**: "SaaS açılış sayfam için bir block tema oluştur"
2. **Agent temayı scaffold eder**: Dosyaları ve tasarım token'larını oluşturur
3. **Gözden geçirme ve iyileştirme**: Gerekirse tasarım değişiklikleri hakkında konuşulur
4. **Etkinleştirme**: "Şimdi temayı etkinleştir"
5. **Doğrulama**: Yeni tasarımın yayında olup olmadığını kontrol etmek için sitenizi ziyaret edin

## Tasarım Token'ları ve Özelleştirme {#design-tokens-and-customization}

Scaffold edilen temalar, aşağıdaki amaçlar için WordPress tasarım token'larını (`theme.json` aracılığıyla) kullanır:

- **Renkler**: Birincil, ikincil, vurgu, nötr paletler
- **Tipografi**: Font aileleri, boyutlar, ağırlıklar, satır yükseklikleri
- **Boşluk**: Padding, margin, gap ölçekleri
- **Kenarlıklar**: Radius ve genişlik token'ları
- **Gölgeler**: Yükseltme seviyeleri

Bu token'lar `theme.json` dosyasında merkezileştirilmiştir, bu da tüm tasarım sisteminizi tek bir dosyadan ayarlamayı kolaylaştırır.

## Sınırlamalar ve Notlar {#limitations-and-notes}

- Temalar `/wp-content/themes/` dizininde scaffold edilir ve WordPress adlandırma kurallarına uymalıdır
- Etkinleştirme, WordPress sitenizde uygun izinler gerektirir
- Temalardaki özel PHP kodu minimum düzeydedir; karmaşık işlevsellik için plugin kullanın
- Block temalar, WordPress 5.9 ve sonrası ile en iyi şekilde çalışır

## Sorun Giderme {#troubleshooting}

**Scaffold edildikten sonra tema görünmüyor**
- Tema dizininin varlığını ve uygun izinlere sahip olup olmadığını doğrulayın
- `theme.json`'ın geçerli bir JSON olduğundan emin olun
- Tema adının mevcut temalarla çakışmadığından emin olun

**Etkinleştirme başarısız oluyor**
- Yönetici izinlerine sahip olduğunuzu onaylayın
- Tema dizininin WordPress tarafından okunabilir olduğundan emin olun
- Detaylar için WordPress hata günlüklerini kontrol edin

**Tasarım token'ları uygulanmıyor**
- `theme.json` sözdiziminin doğru olduğundan emin olun
- Herhangi bir önbellekleme plugin'ını temizleyin
- WordPress sürümünüzün kullandığınız token'ları desteklediğini kontrol edin

## Sonraki Adımlar {#next-steps}

Temanızı etkinleştirdikten sonra şunları yapabilirsiniz:
- Tipografiyi, renkleri ve boşlukları iyileştirmek için **Design System Aesthetics skill** kullanın
- WordPress block editörü aracılığıyla bireysel block stillerini özelleştirin
- Temanın `style.css` dosyasına özel CSS ekleyin
- Belirli sayfa türleri için özel block şablonları oluşturun
