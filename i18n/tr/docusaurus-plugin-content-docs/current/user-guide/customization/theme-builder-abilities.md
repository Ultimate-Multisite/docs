---
title: Tema Oluşturucu Yetenekleri
sidebar_position: 20
_i18n_hash: 9289bf7c5f164c1b2052ea428e0e3898
---
# Tema Oluşturucu Yetenekleri: Blok Temaları İskele Kurma ve Aktifleştirme

Superdav AI Agent v1.12.0, sohbet arayüzünden özel blok temaları oluşturmanıza ve yayınlamanıza olanak tanıyan iki güçlü yetenek sunuyor.

## Genel Bakış

**scaffold-block-theme** ve **activate-theme** yetenekleri, agent'ların şunları yapmasını sağlar:
- Belirlediğiniz özelliklere göre eksiksiz, üretime hazır blok temalar oluşturur
- Temaları manuel müdahale olmadan sitenizde otomatik olarak aktifleştirir
- Rehberli tasarım kararlarıyla tutarlı görsel kimlikler yaratır

## Blok Teması İskele Kurma (Scaffold Block Theme)

**scaffold-block-theme** yeteneği, aşağıdaki bileşenleri içeren eksiksiz bir tema yapısıyla yeni bir WordPress blok teması oluşturur:

- Tasarım jetonları içeren `theme.json` yapılandırması
- Yaygın düzenler için blok şablon dosyaları
- Özel blok stilleri ve varyasyonları
- Tema meta verileri ve destek bildirimleri

### Nasıl Kullanılır

Superdav AI Agent ile yaptığınız sohbette, tema oluşturma isteğinde bulunabilirsiniz:

```
"Create a block theme called 'Modern Agency' with a blue and white color scheme,
sans-serif typography, and a professional layout"
```

Agent şunları yapacaktır:
1. Tasarım tercihlerinizi sohbet yoluyla toplar
2. Eksiksiz tema yapısını oluşturur
3. Gerekli tüm tema dosyalarını hazırlar
4. Temayı aktifleştirmeye hazır hale getirir

### Beklenen Çıktı

Yetenek başarıyla çalıştırıldığında şunları göreceksiniz:

- Temanın iskele kurulduğuna dair onay
- Tema adı ve konumu
- Uygulanan tasarım jetonlarının bir özeti (renkler, tipografi, boşluklar)
- Aktifleştirmeye hazır durumu

Örnek çıktı:
```
✓ Theme "Modern Agency" scaffolded successfully
  Location: /wp-content/themes/modern-agency/
  Colors: Primary #0066CC, Secondary #FFFFFF
  Typography: Inter (sans-serif)
  Status: Ready to activate
```

## Temayı Aktifleştirme (Activate Theme)

**activate-theme** yeteneği, sitenizi yeni iskele kurulmuş veya mevcut bir blok temasına geçirir.

### Nasıl Kullanılır

Bir tema iskele kurduktan sonra, hemen aktifleştirebilirsiniz:

```
"Activate the Modern Agency theme"
```

Veya mevcut herhangi bir temayı aktifleştirebilirsiniz:

```
"Switch to the Twentytwentyfour theme"
```

### Beklenen Çıktı

Aktifleştirme başarılı olduğunda:

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

## İş Akışı: İskele Kurma ve Aktifleştirme

Tipik bir iş akışı, her iki yeteneği de birleştirir:

1. **Tema oluşturma isteği**: "SaaS açılış sayfam için bir blok teması oluştur"
2. **Agent temayı iskele kurar**: Dosyaları ve tasarım jetonlarını oluşturur
3. **Gözden geçirme ve iyileştirme**: Gerekirse tasarım değişiklikleri hakkında konuşulur
4. **Aktifleştirme**: "Şimdi temayı aktifleştir"
5. **Doğrulama**: Yeni tasarımın yayında olup olmadığını kontrol etmek için sitenizi ziyaret edin

## Tasarım Jetonları ve Özelleştirme

İskele kurulan temalar, aşağıdaki amaçlar için WordPress tasarım jetonlarını (`theme.json` aracılığıyla) kullanır:

- **Renkler**: Birincil, ikincil, vurgu, nötr paletler
- **Tipografi**: Yazı tipi aileleri, boyutlar, ağırlıklar, satır yükseklikleri
- **Boşluklar**: Dolgu (padding), kenar boşluğu (margin), boşluk ölçekleri (gap scales)
- **Kenarlıklar**: Yarıçap ve genişlik jetonları
- **Gölgeler**: Yükseltme seviyeleri (Elevation levels)

Bu jetonlar `theme.json` dosyasında merkezileştirilmiştir, bu da tüm tasarım sisteminizi tek bir dosyadan ayarlamanızı kolaylaştırır.

## Sınırlamalar ve Notlar

- Temalar `/wp-content/themes/` dizininde iskele kurulur ve WordPress adlandırma kurallarına uymalıdır
- Aktifleştirme, WordPress sitenizde uygun izinler gerektirir
- Temalardaki özel PHP kodu minimum düzeydedir; karmaşık işlevsellik için eklentiler kullanın
- Blok temalar, WordPress 5.9 ve sonrası ile en iyi şekilde çalışır

## Sorun Giderme

**İskele kurulmasına rağmen tema görünmüyor**
- Tema dizininin varlığını ve doğru izinlere sahip olup olmadığını doğrulayın
- `theme.json` dosyasının geçerli bir JSON olduğundan emin olun
- Tema adının mevcut temalarla çakışmadığından emin olun

**Aktifleştirme başarısız oluyor**
- Yönetici izinlerine sahip olduğunuzu onaylayın
- Tema dizininin WordPress tarafından okunabilir olduğundan emin olun
- Detaylar için WordPress hata günlüklerini kontrol edin

**Tasarım jetonları uygulanmıyor**
- `theme.json` sözdiziminin doğru olduğundan emin olun
- Herhangi bir önbellekleme eklentisini temizleyin
- WordPress sürümünüzün kullandığınız jetonları desteklediğini kontrol edin

## Sonraki Adımlar

Temanızı aktifleştirdikten sonra şunları yapabilirsiniz:
- Tipografiyi, renkleri ve boşlukları iyileştirmek için **Design System Aesthetics skill**'ini kullanın
- WordPress blok editörü aracılığıyla bireysel blok stillerini özelleştirin
- Temanın `style.css` dosyasına özel CSS ekleyin
- Belirli sayfa türleri için özel blok şablonları oluşturun
