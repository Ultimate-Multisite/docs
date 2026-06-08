---
title: Üçüncü Taraf Modda Geçiş
sidebar_position: 17
_i18n_hash: 21e66c5c40d03011402c58addf6d96f3
---
# Üçüncü Taraf Mod Geçişi

Superdav AI Agent v1.12.0, üçüncü taraf yeteneklerin nasıl ele alındığını değiştiriyor. **Üçüncü Taraf Mod artık varsayılan olarak otomatik (auto) ayarda**, bu sayede manuel yapılandırmaya gerek kalmadan WordPress 7.0+ üzerinde yerel WordPress Abilities API entegrasyonu sağlanıyor.

## Ne Değişti?

### v1.12.0 Öncesi

Üçüncü taraf yetenekler manuel yapılandırma gerektiriyordu:

- "Üçüncü Taraf Mod"u açıkça etkinleştirmeniz gerekiyordu
- Yetenekler özel bir kayıt defterinden yükleniyordu
- WordPress Abilities API ile entegrasyon isteğe bağlıydı
- Varsayılan mod eski (legacy) moddu

### v1.12.0 Sonrası

Üçüncü taraf yetenekler otomatik olarak çalışıyor:

- Üçüncü Taraf Mod varsayılan olarak "auto" (otomatik) ayarındadır
- Yetenekler, WordPress Abilities API ile yerel olarak entegre oluyor
- WordPress 7.0+ üzerinde manuel yapılandırmaya gerek yok
- Eski mod, daha eski WordPress sürümleri için hala mevcut

## Kimler Etkileniyor?

### Yeni Kurulumlar (WordPress 7.0+)

**Hiçbir işlem yapmanıza gerek yok.** Üçüncü Taraf Mod otomatik olarak "auto" olarak ayarlanır ve yetenekler kutudan çıktığı gibi çalışır.

### Mevcut Kurulumlar

**Ayarlarınız korunuyor.** Eğer şunları kullanıyorsanız:

- **Eski Mod (Legacy mode)**: Eski modda kalırsınız (değişiklik yok)
- **Manuel Üçüncü Taraf Mod**: Manuel modda kalırsınız (değişiklik yok)
- **Otomatik Mod (Auto mode)**: Otomatik modda devam edersiniz (değişiklik yok)

### 7.0 Öncesi WordPress Sürümleri

**Eski mod hala mevcut.** Eğer WordPress 6.x veya daha eski bir sürümdeyseniz:

- Üçüncü Taraf Mod varsayılan olarak "legacy" (eski) ayarındadır
- İsterseniz üçüncü taraf modu manuel olarak etkinleştirebilirsiniz
- Yerel Abilities API'yi kullanmak için WordPress 7.0+ sürümüne yükseltin

## Modları Anlamak

### Otomatik Mod (Yeni Varsayılan)

**Otomatik Mod**, yerel WordPress Abilities API entegrasyonunu kullanır:

- Yetenekler WordPress kancaları (hooks) aracılığıyla kaydedilir
- WordPress 7.0+ Abilities API ile tam uyumluluk
- Üçüncü taraf yeteneklerin otomatik keşfi
- Manuel yapılandırmaya gerek yok

**Ne zaman kullanılır**: Üçüncü taraf yeteneklere sahip WordPress 7.0+

### Manuel Mod

**Manuel Mod**, açık yapılandırma gerektirir:

- Hangi üçüncü taraf yeteneklerin yükleneceğini siz belirlersiniz
- Test veya seçici yetenek yüklemesi için kullanışlıdır
- Yapılandırma dosyalarının düzenlenmesini gerektirir
- Daha fazla kontrol sağlar, ancak daha fazla kurulum gerektirir

**Ne zaman kullanılır**: Test etme, seçici yetenek yüklemesi veya özel yapılandırmalar

### Eski Mod (Legacy Mode)

**Eski Mod**, eski üçüncü taraf yetenek sistemini kullanır:

- Özel yetenek kayıt defteri (WordPress Abilities API değil)
- Daha eski WordPress sürümleriyle geriye dönük uyumlu
- Yerel WordPress entegrasyonu yok
- Kullanımdan kaldırılmış ancak hala destekleniyor

**Ne zaman kullanılır**: WordPress 6.x veya daha eski, veya eski uyumluluğa ihtiyacınız olduğunda

## Mevcut Modunuzu Kontrol Etme

### Yönetici Panelinden

1. **WordPress Yönetici** → **Superdav AI Agent** → **Ayarlar**'a gidin
2. **Üçüncü Taraf Mod** ayarını bulun
3. Mevcut modunuzu ve değiştirmek için seçenekleri göreceksiniz

### Kod Üzerinden

```php
$mode = get_option( 'superdav_third_party_mode' );
echo $mode; // 'auto', 'manual', veya 'legacy'
```

## Modunuzu Değiştirme

### Otomatik Moda Geçiş

WordPress 7.0+ sürümündeyseniz ve otomatik modu kullanmak istiyorsanız:

1. **Superdav AI Agent** → **Ayarlar**'a gidin
2. **Üçüncü Taraf Mod**'u bulun
3. **Auto (WordPress Abilities API)** seçeneğini seçin
4. **Kaydet**'e tıklayın

Superdav AI Agent, üçüncü taraf yetenekleri otomatik olarak keşfedip kaydedecektir.

### Manuel Moda Geçiş

Hangi yeteneklerin yükleneceğini manuel olarak kontrol etmek istiyorsanız:

1. **Superdav AI Agent** → **Ayarlar**'a gidin
2. **Üçüncü Taraf Mod**'u bulun
3. **Manual** seçeneğini seçin
4. **Kaydet**'e tıklayın
5. Hangi yeteneklerin yükleneceğini belirtmek için yapılandırma dosyanızı düzenleyin

### Eski Moda Geçiş

Eski uyumluluğa ihtiyacınız varsa:

1. **Superdav AI Agent** → **Ayarlar**'a gidin
2. **Üçüncü Taraf Mod**'u bulun
3. **Legacy** seçeneğini seçin
4. **Kaydet**'e tıklayın

## Otomatik Modun Faydaları

### Otomatik Keşif

Yetenekler otomatik olarak şuradan keşfedilir:

- Yüklü eklentiler
- Aktif tema
- Zorunlu eklentiler (Must-use plugins)
- Drop-in eklentiler

Manuel kayıt yapmaya gerek yok.

### Yerel Entegrasyon

Yetenekler WordPress Abilities API ile entegre olur:

- WordPress çekirdeğiyle tutarlıdır
- WordPress yönetimiyle çalışır
- Abilities API kullanan diğer eklentilerle uyumludur
- WordPress geliştikçe geleceğe dönüktür

### Basitleştirilmiş Yönetim

- Düzenlenecek yapılandırma dosyası yok
- Manuel yetenek kaydı yok
- Yetenek Görünürlüğü kontrolleri otomatik çalışır
- Yönetici bildirimleri, sınıflandırılmamış yetenekler hakkında sizi uyarır

### Daha İyi Performans

- Yetenekler önbelleğe alınır
- İhtiyaç duyulduğunda tembel yüklenir (lazy-loaded)
- WordPress 7.0+ için optimize edilmiştir

## Geçiş Yolu

### WordPress 6.x Kullanıyorsanız

1. **WordPress 7.0+ sürümüne yükseltin** (hazır olduğunuzda)
2. **Superdav AI Agent**'ı v1.12.0+ sürümüne güncelleyin
3. **Üçüncü taraf modu Otomatik'e değiştirin** (isteğe bağlı; eski mod hala çalışır)
4. Doğru erişim kontrollerini sağlamak için **yetenek görünürlüğünü** gözden geçirin

### WordPress 7.0+ Kullanıyorsanız

1. **Superdav AI Agent**'ı v1.12.0+ sürümüne güncelleyin
2. **Üçüncü Taraf Mod'un Otomatik olarak ayarlandığını doğrulayın** (varsayılan olarak öyle olmalıdır)
3. Doğru erişim kontrollerini sağlamak için **yetenek görünürlüğünü** gözden geçirin
4. Çalıştıklarından emin olmak için **üçüncü taraf yetenekleri test edin**

## Sorun Giderme

### Otomatik modda yetenekler yüklenmiyor

- WordPress 7.0+ sürümünde olduğunuzu doğrulayın
- Üçüncü Taraf Mod'un "Auto" olarak ayarlandığından emin olun
- Yeteneği sağlayan eklentinin etkin olduğundan emin olun
- Kayıt hataları için WordPress hata günlüklerini kontrol edin

### Eski modu korumak istiyorum

- **Ayarlar** → **Üçüncü Taraf Mod**'a gidin
- **Legacy** seçeneğini seçin
- **Kaydet**'e tıklayın
- Eski mod çalışmaya devam edecektir

### Özel yeteneklerim görünmüyor

- WordPress kancaları (hooks) aracılığıyla kaydedildiklerini doğrulayın
- Abilities API'yi doğru bir şekilde uyguladıklarını kontrol edin
- WordPress hata günlüklerini gözden geçirin
- Tüm kaydedilmiş yetenekleri görmek için **Yetenek Görünürlüğü** yönetici sayfasını kullanın

### "Sınıflandırılmamış yetenek" bildirimleri alıyorum

- Bu, yeni üçüncü taraf yetenekler için normaldir
- Yönetici bildiriminde bunları gözden geçirin ve sınıflandırın
- Sınıflandırma hakkında ayrıntılar için **Yetenek Görünürlüğü**'ne bakın

## Geriye Dönük Uyumluluk

### Mevcut Yapılandırmalar

Eğer mevcut üçüncü taraf yetenek yapılandırmalarınız varsa:

- **Eski Mod**: Yapılandırmanız çalışmaya devam eder
- **Manuel Mod**: Yapılandırmanız çalışmaya devam eder
- **Otomatik Mod**: Yapılandırmanız dikkate alınmaz (otomatik mod devreye girer)

Özel yapılandırmanızı korumak için Manuel veya Eski modda kalın.

### Kullanımdan Kaldırma Takvimi

- **v1.12.0**: Eski ve Manuel modlar hala tam destekleniyor
- **v1.13.0+**: Eski modda kullanımdan kaldırma bildirimleri görünebilir
- **v2.0.0**: Eski mod kaldırılabilir (Belirlenecek)

## En İyi Uygulamalar

### Yeni Kurulumlar İçin

- Otomatik modu kullanın (varsayılan budur)
- Superdav AI Agent'ın yetenekleri otomatik olarak keşfetmesine izin verin
- Erişimi kontrol etmek için Yetenek Görünürlüğü'nü kullanın

### Mevcut Kurulumlar İçin

- Mümkün olduğunda WordPress 7.0+ sürümüne yükseltin
- Basitleştirilmiş yönetim için Otomatik Moda geçin
- Yetenek Görünürlüğü kullanarak yetenekleri gözden geçirin ve sınıflandırın

### Özel Yetenekler İçin

- Yetenekleri WordPress kancaları (Abilities API) aracılığıyla kaydedin
- Özel yetenek kayıt defterlerinden kaçının
- WordPress 7.0+ üzerinde Otomatik mod ile test edin

## Sonraki Adımlar

1. **WordPress sürümünüzü kontrol edin**: Otomatik mod için 7.0+ sürümünde olduğunuzu doğrulayın
2. **Üçüncü taraf modunuzu gözden geçirin**: Ayarlar'a gidin ve mevcut modunuzu kontrol edin
3. **Gerekirse güncelleyin**: WordPress 7.0+ sürümündeyseniz Otomatik Moda geçin
4. **Yetenekleri sınıflandırın**: Sınıflandırılmamış herhangi bir yeteneği gözden geçirin ve sınıflandırın
5. **Test edin**: Üçüncü taraf yeteneklerinizin doğru çalıştığını doğrulayın

## İlgili Konular

- **Yetenek Görünürlüğü**: Hangi yeteneklerin nerede görünür olacağını kontrol edin
- **WordPress Abilities API**: Yerel WordPress yetenek kaydı hakkında bilgi edinin
- **Üçüncü Taraf Yetenek Geliştirme**: Otomatik mod ile çalışan yetenekler oluşturun
