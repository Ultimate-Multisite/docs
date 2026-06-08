---
title: Yeme-İçme Menüleri
sidebar_position: 3
_i18n_hash: 6005be1ddbd4aa6dddf175828f4fc8f5
---
# Otel/Restoran Menüleri

**Otel/Restoran Menüleri** özelliği, Theme Builder'ın yapılandırılmış yiyecek ve içecek menü sayfalarını doğrudan WordPress sitenize oluşturmasına ve yerleştirmesine olanak tanır.

## Genel Bakış

Theme Builder, artık restoranlar, kafeler, barlar ve catering hizmetleri gibi konaklama sektöründeki işletmeler için profesyonel, yapılandırılmış menü sayfaları oluşturabilir. Bu menüler sitenizin tasarımına tamamen entegre olur ve kolayca güncellenip yönetilebilir.

## Desteklenen Konaklama Türleri

- **Restoranlar** — tam hizmet veren yemek menüleri
- **Kafeler** — kahve ve hafif atıştırmalık menüleri
- **Barlar ve Lounge'lar** — içecek ve başlangıç menüleri
- **Fırınlar** — pastane ve ekmek menüleri
- **Catering Hizmetleri** — etkinlik menü seçenekleri
- **Food Truck'lar** — mobil yemek hizmeti menüleri
- **Bira ve Şaraphaneler** — açıklamalara sahip içecek menüleri

## Menü Yapısı

### Menü Kategorileri

Menüler kategorilere ayrılmıştır:

- **Başlangıçlar** — aperatifler ve küçük tabaklar
- **Ana Yemekler** — ana yemekler
- **Yan Ürünler** — eşlikçiler ve sebzeler
- **Tatlılar** — tatlı atıştırmalıklar
- **İçecekler** — içecekler (alkollü ve alkolsüz)
- **Özel Günler** — günlük veya mevsimlik özel menüler

### Menü Öğesi Formatı

Her menü öğesi şunları içerir:

```json
{
  "name": "Izgara Somon",
  "description": "Limon tereyağlı taze Atlantik somonu",
  "price": "$24.95",
  "dietary_info": ["Glutensiz", "Yüksek Protein"],
  "allergens": ["Balık"],
  "availability": "Günlük"
}
```

#### Öğe Alanları

| Alan | Tip | Açıklama |
|-------|------|-------------|
| `name` | string | Yemek veya içecek adı |
| `description` | string | Öğenin detaylı açıklaması |
| `price` | string | Fiyat (para birimi ile biçimlendirilmiş) |
| `dietary_info` | array | Diyet nitelikleri (Vegan, Glutensiz vb.) |
| `allergens` | array | Yaygın alerjenler (Kuruyemiş, Kabuklu Deniz Ürünü vb.) |
| `availability` | string | Ne zaman mevcut (Günlük, Mevsimlik vb.) |

## Otel/Restoran Menüleri Oluşturma

### Adım 1: Menü Bilgisini Sağlayın

Theme Builder'a menünüz hakkında bilgi verin:

```
İtalyan restoranım için başlangıçlar, makarna yemekleri, ana yemekler ve tatlıları içeren bir restoran menüsü oluştur. Fiyatları ve açıklamaları ekle.
```

### Adım 2: Theme Builder Menüyü Oluşturur

Theme Builder:

1. Yapılandırılmış bir menü sayfası oluşturur
2. Sitenizin temasına uyacak şekilde tasarlar
3. Öğeleri kategorilere ayırır
4. Fiyatları ve açıklamaları biçimlendirir
5. Diyet ve alerjen bilgilerini ekler

### Adım 3: Gözden Geçirin ve Özelleştirin

Şunları yapabilirsiniz:

1. Menü öğelerini ve fiyatları düzenleyebilirsiniz
2. Kategori ekleyebilir veya çıkarabilirsiniz
3. Kategoriler içindeki öğelerin sırasını değiştirebilirsiniz
4. Açıklamaları ve diyet bilgilerini güncelleyebilirsiniz
5. Stil ve düzenlemeyi ayarlayabilirsiniz

## Menü Görüntüleme Seçenekleri

### Tam Menü Sayfası

Tüm menünüzü gösteren özel bir sayfa:

- Kategoriye göre düzenlenmiş
- Aranabilir ve filtrelenebilir
- Yazdırılabilir düzen
- Mobil cihazlara uyumlu tasarım

### Menü Widget'ı

Menü bölümlerini diğer sayfalara gömün:

- Ana sayfada öne çıkan öğeler
- Kenar çubuğunda günlük özel menüler
- Bar sayfasında içecek menüsü
- Altbilgide tatlı vitrini

### Menü PDF'i

İndirilebilir bir PDF menüsü oluşturun:

- Profesyonel biçimlendirme
- Yazdırmaya hazır kalite
- Görseller ve açıklamalar içerir
- Paylaşması ve e-posta ile göndermesi kolay

## Diyet ve Alerjen Bilgileri

### Diyet Nitelikleri

Öğeleri diyet bilgileriyle işaretleyin:

- **Vegan** — hayvansal ürün içermez
- **Vejetaryen** — et içermez
- **Glutensiz** — çölyak hastalığı için güvenli
- **Süt Ürünü İçermeyen** — süt ürünleri içermez
- **Kuruyemiş İçermeyen** — ağaç kuruyemişi veya yer fıstığı içermez
- **Düşük Karbonhidratlı** — azaltılmış karbonhidrat
- **Yüksek Protein** — protein açısından zengin

### Alerjen Uyarıları

Yaygın alerjenleri ekleyin:

- **Kuruyemiş** — ağaç kuruyemişleri ve yer fıstığı
- **Kabuklu Deniz Ürünü** — krustasea ve yumuşakçalar
- **Balık** — tüm balık türleri
- **Süt Ürünü** — süt ve süt ürünleri
- **Yumurta** — tavuk yumurtası
- **Soya** — soya ürünleri
- **Gluten** — buğday ve gluten içeren tahıllar
- **Susam** — susam tohumu ve yağı

## Menü Yönetimi

### Fiyat Güncelleme

Menü fiyatlarını kolayca güncelleyin:

1. Menü sayfasına gidin
2. "Menüyü Düzenle"ye tıklayın
3. Öğelerin fiyatlarını güncelleyin
4. Değişiklikleri kaydedin
5. Değişiklikler sitenizde anında görünür

### Mevsimlik Öğeler Ekleme

Mevsimlik menü varyasyonları oluşturun:

1. Yeni bir menü sürümü oluşturun
2. Mevsimlik öğeler ekleyin
3. Öğeleri "Mevsimlik" olarak işaretleyin
4. Kullanılabilirlik tarihlerini planlayın
5. Mevsim boyunca otomatik olarak gösterilir

### Özel Günleri Yönetme

Günlük veya haftalık özel menüler sergileyin:

1. Bir "Özel Günler" kategorisi oluşturun
2. Kullanılabilirlik tarihleri ile öğeler ekleyin
3. Ana sayfada özel günleri vurgulayın
4. Günlük veya haftalık güncelleyin
5. Eski özel günleri arşivleyin

## Theme Builder ile Entegrasyon

Otel/restoran siteleri için Theme Builder kullanırken:

1. **Otomatik menü algılama** — yiyecek/içecek işletmesi olup olmadığınızı belirler
2. **Menü sayfası oluşturma** — profesyonel menü sayfaları oluşturur
3. **Tasarım eşleştirme** — menüler sitenizin temasıyla uyumlu olur
4. **Mobil optimizasyon** — menüler telefonlarda güzel görünür
5. **SEO optimizasyonu** — menüler arama motoru dostudur

## En İyi Uygulamalar

### Menü Tasarımı

- **Net düzenleme** — mantıksal kategori yapısı
- **Okunabilir açıklamalar** — iştah açıcı ve bilgilendirici
- **Tutarlı fiyatlandırma** — net para birimi ve biçimlendirme
- **Profesyonel fotoğraflar** — yüksek kaliteli yiyecek görselleri
- **Boşluk kullanımı** — sayfayı kalabalıklaştırmayın

### İçerik

- **Doğru açıklamalar** — öğeleri doğru bir şekilde tanımlayın
- **Özel günleri vurgulayın** — özel günleri öne çıkarın
- **Alerjenleri ekleyin** — alerjenleri her zaman listeleyin
- **Düzenli güncelleyin** — fiyatları ve öğeleri güncel tutun
- **İştah açıcı dil kullanın** — öğeleri lezzetli gösterin

### Erişilebilirlik

- **Okunabilir yazı tipleri** — net, okunabilir yazı tipleri kullanın
- **Yeterli kontrast** — metnin okunabilir olduğundan emin olun
- **Diyet etiketleri** — diyet seçeneklerini açıkça işaretleyin
- **Alerjen uyarıları** — alerjenleri belirgin bir şekilde gösterin
- **Mobil uyumlu** — tüm cihazlarda test edin

## Örnekler

### Restoran Menü Yapısı

```
Başlangıçlar
├── Bruschetta al Pomodoro
├── Calamari Fritti
└── Caprese Salad

Makarna Yemekleri
├── Spaghetti Carbonara
├── Fettuccine Alfredo
└── Penne Arrabbiata

Ana Yemekler
├── Osso Buco
├── Branzino al Forno
└── Saltimbocca alla Romana

Tatlılar
├── Tiramisu
├── Panna Cotta
└── Gelato Selection
```

### Kafe Menü Yapısı

```
Kahve
├── Espresso
├── Cappuccino
└── Latte

Pastalar
├── Croissants
├── Muffins
└── Scones

Sandviçler
├── Caprese Panini
├── Smoked Turkey Club
└── Vegetarian Wrap
```

## İlgili Özellikler

- [Create Menu](../abilities/create-menu.md) — navigasyon menüleri oluşturun
- [Design Direction](./design-direction.md) — sitenizin tasarımını özelleştirin
- [Discovery Interview](./discovery-interview.md) — site yapınızı planlayın
