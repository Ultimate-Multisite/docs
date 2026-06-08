---
title: Third-Party Mode Migration
sidebar_position: 17
_i18n_hash: 21e66c5c40d03011402c58addf6d96f3
---
# Üçüncü Taraf Modu Geçişi

Superdav AI Agent v1.12.0, üçüncü taraf yeteneklerin (abilities) nasıl ele alındığını değiştiriyor. **Üçüncü taraf mod artık varsayılan olarak otomatik (auto) ayarda**, bu sayede manuel yapılandırmaya gerek kalmadan WordPress 7.0+ üzerinde yerel WordPress Abilities API entegrasyonunu kullanabilirsiniz.

## Ne Değişti?

### v1.12.0 Öncesi

Üçüncü taraf yetenekler manuel yapılandırma gerektiriyordu:

- "Üçüncü taraf modu"nu açıkça etkinleştirmeniz gerekiyordu
- Yetenekler özel bir kayıt defterinden (registry) yükleniyordu
- WordPress Abilities API ile entegrasyon isteğe bağlıydı
- Varsayılan mod eski (Legacy) moddu

### v1.12.0 Sonrası

Üçüncü taraf yetenekler otomatik olarak çalışıyor:

- Üçüncü taraf mod varsayılan olarak "auto" (otomatik) ayarında
- Yetenekler WordPress Abilities API ile yerel olarak entegre oluyor
- WordPress 7.0+ üzerinde manuel yapılandırmaya gerek yok
- Eski WordPress sürümleri için eski (Legacy) mod hala mevcut

## Kimler Etkileniyor?

### Yeni Kurulumlar (WordPress 7.0+)

**Hiçbir şey yapmanıza gerek yok.** Üçüncü taraf mod otomatik olarak "auto" olarak ayarlanır ve yetenekler kutudan çıktığı gibi çalışır.

### Mevcut Kurulumlar

**Ayarlarınız korunuyor.** Eğer şunları kullanıyorsanız:

- **Legacy modu**: Eski modda kalıyorsunuz (değişiklik yok)
- **Manuel üçüncü taraf modu**: Manuel modda kalıyorsunuz (değişiklik yok)
- **Auto modu**: Otomatik modda devam ediyorsunuz (değişiklik yok)

### 7.0 Öncesi WordPress Sürümleri

**Eski (Legacy) mod hala mevcut.** Eğer WordPress 6.x veya daha eski bir sürümdeyseniz:

- Üçüncü taraf mod varsayılan olarak "legacy" (eski) ayarında
- İsterseniz üçüncü taraf modu manuel olarak etkinleştirebilirsiniz
- Yerel Abilities API'yi kullanmak için WordPress 7.0+ sürümüne yükseltin

## Modları Anlamak

### Auto Mod (Yeni Varsayılan)

**Auto modu**, yerel WordPress Abilities API entegrasyonunu kullanır:

- Yetenekler WordPress hook'ları aracılığıyla kaydedilir
- WordPress 7.0+ Abilities API ile tam uyumluluk
- Üçüncü taraf yeteneklerin otomatik keşfi
- Manuel yapılandırmaya gerek yok

**Ne zaman kullanılır**: WordPress 7.0+ ve üçüncü taraf yetenekler kullanılıyorsa

### Manuel Mod

**Manuel mod**, açık yapılandırma gerektirir:

- Hangi üçüncü taraf yeteneklerin yükleneceğini siz belirlersiniz
- Test veya seçici yetenek yükleme için kullanışlıdır
- Yapılandırma dosyalarını düzenlemeyi gerektirir
- Daha fazla kontrol sağlar, ancak daha fazla kurulum gerektirir

**Ne zaman kullanılır**: Test, seçici yetenek yükleme veya özel yapılandırmalar yapılıyorsa

### Legacy Mod

**Legacy modu**, eski üçüncü taraf yetenek sistemini kullanır:

- Özel yetenek kayıt defteri (WordPress Abilities API değil)
- Daha eski WordPress sürümleriyle geriye dönük uyumlu
- Yerel WordPress entegrasyonu yok
- Kullanımdan kaldırılmış ancak hala destekleniyor

**Ne zaman kullanılır**: WordPress 6.x veya daha eskisi, veya eski uyumluluğa ihtiyacınız varsa

## Mevcut Modunuzu Kontrol Etme

### Yönetici Panelinden

1. **WordPress Admin** → **Superdav AI Agent** → **Settings** yolunu izleyin
2. **Third-Party Mode** ayarını bulun
3. Mevcut modunuzu ve değiştirmek için seçenekleri göreceksiniz

### Kod Üzerinden

```php
$mode = get_option( 'superdav_third_party_mode' );
echo $mode; // 'auto', 'manual', veya 'legacy'
```

## Modunuzu Değiştirme

### Auto Mod'a Geçiş

Eğer WordPress 7.0+ üzerindeyken auto modu kullanmak istiyorsanız:

1. **Superdav AI Agent** → **Settings** yolunu izleyin
2. **Third-Party Mode**'u bulun
3. **Auto (WordPress Abilities API)** seçeneğini seçin
4. **Save** butonuna tıklayın

Superdav AI Agent, üçüncü taraf yetenekleri otomatik olarak keşfedecek ve kaydedecektir.

### Manuel Moda Geçiş

Hangi yeteneklerin yükleneceğini manuel olarak kontrol etmek istiyorsanız:

1. **Superdav AI Agent** → **Settings** yolunu izleyin
2. **Third-Party Mode**'u bulun
3. **Manual** seçeneğini seçin
4. **Save** butonuna tıklayın
5. Hangi yeteneklerin yükleneceğini belirtmek için yapılandırma dosyanızı düzenleyin

### Legacy Moda Geçiş

Eski uyumluluğa ihtiyacınız varsa:

1. **Superdav AI Agent** → **Settings** yolunu izleyin
2. **Third-Party Mode**'u bulun
3. **Legacy** seçeneğini seçin
4. **Save** butonuna tıklayın

## Auto Mod'un Faydaları

### Otomatik Keşif

Yetenekler otomatik olarak şuradan keşfedilir:

- Yüklü eklentiler (plugins)
- Aktif tema
- Zorunlu eklentiler (must-use plugins)
- Drop-in eklentiler

Manuel kayıt yapmaya gerek yok.

### Yerel Entegrasyon

Yetenekler WordPress Abilities API ile entegre olur:

- WordPress çekirdeğiyle tutarlıdır
- WordPress admin'i ile çalışır
- Abilities API kullanan diğer eklentilerle uyumludur
- WordPress gelişirken geleceğe dönüktür

### Basitleştirilmiş Yönetim

- Düzenlenecek yapılandırma dosyası yok
- Manuel yetenek kaydı yok
- Ability Visibility kontrolleri otomatik çalışır
- Admin bildirimleri, sınıflandırılmamış yetenekler hakkında sizi uyarır

### Daha İyi Performans

- Yetenekler önbelleğe alınır (cached)
- İhtiyaç duyulduğunda tembel yüklenir (lazy-loaded)
- WordPress 7.0+ için optimize edilmiştir

## Geçiş Yolu

### WordPress 6.x Üzerindeyseniz

1. **WordPress 7.0+ sürümüne yükseltin** (hazır olduğunuzda)
2. **Superdav AI Agent**'ı v1.12.0+ sürümüne güncelleyin
3. **Üçüncü taraf modu Auto'ya değiştirin** (isteğe bağlı; legacy modu hala çalışır)
4. Doğru erişim kontrollerini sağlamak için **yetenek görünürlüğünü (ability visibility)** gözden geçirin

### WordPress 7.0+ Üzerindeyseniz

1. **Superdav AI Agent**'ı v1.12.0+ sürümüne güncelleyin
2. **Üçüncü taraf modun Auto olarak ayarlandığını doğrulayın** (varsayılan olarak öyle olmalıdır)
3. Doğru erişim kontrollerini sağlamak için **yetenek görünürlüğünü** gözden geçirin
4. Çalıştıklarını onaylamak için **üçüncü taraf yetenekleri test edin**

## Sorun Giderme

### Auto modda yetenekler yüklenmiyor

- WordPress 7.0+ üzerinde olduğunuzu doğrulayın
- Üçüncü taraf modun "Auto" olarak ayarlandığından emin olun
- Yeteneği sağlayan eklentinin aktif olduğunu kontrol edin
- Kayıt hataları için WordPress hata günlüklerini (error logs) kontrol edin

### Legacy modda kalmak istiyorum

- **Settings** → **Third-Party Mode** yolunu izleyin
- **Legacy** seçeneğini seçin
- **Save** butonuna tıklayın
- Legacy modu çalışmaya devam edecektir

### Özel yeteneklerim görünmüyor

- WordPress hook'ları aracılığıyla kaydedildiklerini doğrulayın
- Abilities API'yi doğru uyguladıklarından emin olun
- WordPress hata günlüklerini kontrol edin
- Tüm kaydedilmiş yetenekleri görmek için **Ability Visibility** admin sayfasını kullanın

### "Sınıflandırılmamış yetenek" bildirimleri alıyorum

- Bu, yeni üçüncü taraf yetenekler için normaldir
- Admin bildiriminde bunları gözden geçirin ve sınıflandırın
- Sınıflandırma detayları için **Ability Visibility**'ye bakın

## Geriye Uyumluluk

### Mevcut Yapılandırmalar

Eğer mevcut üçüncü taraf yetenek yapılandırmalarınız varsa:

- **Legacy modu**: Yapılandırmanız çalışmaya devam eder
- **Manuel mod**: Yapılandırmanız çalışmaya devam eder
- **Auto modu**: Yapılandırmanız yok sayılır (auto modu devralır)

Özel yapılandırmanızı korumak için Manuel veya Legacy modda kalın.

### Kullanımdan Kaldırma Takvimi

- **v1.12.0**: Legacy ve Manual modlar hala tamamen destekleniyor
- **v1.13.0+**: Legacy modu kullanımdan kaldırma bildirimleri gösterebilir
- **v2.0.0**: Legacy modu kaldırılabilir (Belirlenecek)

## En İyi Uygulamalar

### Yeni Kurulumlar İçin

- Auto mod'u kullanın (varsayılan budur)
- Superdav AI Agent'ın yetenekleri otomatik keşfetmesine izin verin
- Erişimi kontrol etmek için Ability Visibility kullanın

### Mevcut Kurulumlar İçin

- Mümkün olduğunda WordPress 7.0+ sürümüne yükseltin
- Basitleştirilmiş yönetim için Auto mod'a geçin
- Ability Visibility kullanarak yetenekleri gözden geçirin ve sınıflandırın

### Özel Yetenekler İçin

- Yetenekleri WordPress hook'ları (Abilities API) aracılığıyla kaydedin
- Özel yetenek kayıt defterlerinden kaçının
- Auto mod ile WordPress 7.0+ üzerinde test edin

## Sonraki Adımlar

1. **WordPress sürümünüzü kontrol edin**: Auto modu için 7.0+ üzerinde olduğunuzu doğrulayın
2. **Üçüncü taraf modunuzu gözden geçirin**: Ayarlar'a gidin ve mevcut modunuzu kontrol edin
3. **Gerekirse güncelleyin**: WordPress 7.0+ üzerindeyseniz Auto mod'a geçin
4. **Yetenekleri sınıflandırın**: Sınıflandırılmamış herhangi bir yeteneği gözden geçirin ve sınıflandırın
5. **Test edin**: Üçüncü taraf yeteneklerinizin doğru çalıştığını doğrulayın

## İlgili Konular

- **Ability Visibility**: Hangi yeteneklerin nerede görünür olacağını kontrol edin
- **WordPress Abilities API**: Yerel WordPress yetenek kaydı hakkında bilgi edinin
- **Third-Party Ability Development**: Auto modu ile çalışan yetenekler oluşturun
