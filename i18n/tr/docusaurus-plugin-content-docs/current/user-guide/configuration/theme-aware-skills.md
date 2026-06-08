---
title: Tema Farkındalıklı Beceriler
sidebar_position: 27
_i18n_hash: b61ebe1e7de0e5e8edb96c9bc21743cc
---
# Tema Farkındalıklı Beceriler

Superdav AI Agent v1.10.0, aktif WordPress temanıza otomatik olarak uyum sağlayan dört yeni tema farkındalıklı yerleşik beceri (skill) ile geliyor. Bu beceriler, temanızın mimarisine ve özelliklerine özel olarak hazırlanmış uzman rehberlik ve yetenekler sunar.

## Tema Farkındalıklı Beceriler Nedir?

Tema farkındalıklı beceriler, yapay zeka asistanının sitenizde şu anda aktif olan WordPress temasına göre otomatik olarak seçtiği önceden yapılandırılmış bilgi tabanları ve araç setleridir. Tema değiştirdiğinizde, asistanın kullanabileceği beceriler otomatik olarak güncellenir; manuel bir yapılandırmaya gerek yoktur.

Her beceri şunları içerir:

- **Tema'ya özel dokümantasyon** — Temayı kullanma ve özelleştirme konusunda rehberlik
- **Blok ve desen referansları** — Mevcut bloklar, desenler ve tasarım seçenekleri
- **Özelleştirme örnekleri** — Yaygın görevler için kod parçacıkları ve yapılandırma kalıpları
- **En iyi uygulamalar** — Temanın mimarisi ve iş akışı için öneriler

## Mevcut Tema Farkındalıklı Beceriler

### Blok Temalar (Block Themes)

**Uygulanır:** WordPress'in blok tabanlı (Full Site Editing) mimarisini kullanan temalar.

Blok Temalar becerisi şunlar hakkında rehberlik sağlar:

- Blok düzenleyiciyi kullanarak şablon oluşturma ve düzenleme
- Blok desenleri ve yeniden kullanılabilir bloklarla çalışma
- Global stilleri ve theme.json ayarlarını özelleştirme
- Tema bloklarını ve varyasyonlarını kullanma
- Siteniz için özel blok desenleri oluşturma

**Otomatik olarak etkinleşir:** Aktif temanız bir blok teması olduğunda ( `block-templates` özelliğini destekliyorsa).

### Klasik Temalar (Classic Themes)

**Uygulanır:** PHP şablonları ve klasik düzenleyiciyi kullanan geleneksel WordPress temaları.

Klasik Temalar becerisi şunlar hakkında rehberlik sağlar:

- PHP şablon dosyaları ve hooks ile çalışma
- Özelleştirici (Customizer) aracılığıyla tema görünümünü özelleştirme
- Widget alanlarını ve kenar çubuklarını kullanma
- CSS'i ve alt tema geliştirmeyi değiştirme
- Tema hiyerarşisini ve şablon etiketlerini anlama

**Otomatik olarak etkinleşir:** Aktif temanız klasik (blok olmayan) bir tema olduğunda.

### Kadence Blocks

**Uygulanır:** Gelişmiş blok tabanlı tasarım için Kadence Blocks eklentisini kullanan siteler.

Kadence Blocks becerisi şunlar hakkında rehberlik sağlar:

- Kadence'in gelişmiş blok kütüphanesini kullanma (Hero, Testimonials, Pricing vb.)
- Kadence blok ayarlarını ve duyarlı seçenekleri yapılandırma
- Kadence'in ızgara (grid) ve kapsayıcı (container) bloklarıyla özel düzenler oluşturma
- Kadence bloklarını temanızla entegre etme
- Kadence'in tasarım sisteminden ve ön ayarlarından yararlanma

**Otomatik olarak etkinleşir:** Kadence Blocks eklentisi sitenizde aktif olduğunda.

### Kadence Theme

**Uygulanır:** Blok tabanlı tasarım ve özelleştirme için Kadence temasını kullanan siteler.

Kadence Theme becerisi şunlar hakkında rehberlik sağlar:

- Global stiller ve theme.json aracılığıyla Kadence temasını özelleştirme
- Kadence'in yerleşik blok desenlerini ve şablonlarını kullanma
- Kadence tema ayarlarını ve seçeneklerini yapılandırma
- Kadence'in tasarım sistemiyle özel tasarımlar oluşturma
- Kadence'i popüler eklentiler ve araçlarla entegre etme

**Otomatik olarak etkinleşir:** Kadence teması aktif temanız olduğunda.

## Beceriler Nasıl Seçilir?

Asistan, her mesajda aktif temanızı ve yüklü eklentilerinizi otomatik olarak algılar. Eşleşen bir tema farkındalıklı beceri mevcutsa, bu beceri otomatik olarak asistanın bağlamına yüklenir. Becerileri manuel olarak etkinleştirmenize veya değiştirmenize gerek yoktur.

### Birden Fazla Beceri

Sitenize birden fazla beceri uygulanıyorsa (örneğin, hem Kadence Blocks hem de Kadence Theme aktifse), asistan tüm geçerli becerilere erişebilir ve her birinden rehberlik alabilir.

### Tema Değiştirme

Aktif temanızı değiştirdiğinizde, asistanın kullanabileceği beceriler bir sonraki mesajda otomatik olarak güncellenir. Örneğin:

1. **Blok Temalar** becerisi aktifken bir blok teması kullanıyorsunuz.
2. Klasik bir temaya geçiyorsunuz.
3. Bir sonraki mesajınızda, **Klasik Temalar** becerisi otomatik olarak yüklenir ve **Blok Temalar** becerisi artık kullanılamaz hale gelir.

## Tema Farkındalıklı Becerileri Kullanma

Bir tema farkındalıklı beceriden yararlanmak için yapmanız gereken tek şey, sohbet arayüzünde ne yapmak istediğinizi açıklamak. Asistan, uygun becerinin rehberliğine otomatik olarak atıfta bulunacaktır.

### Örnek Komutlar

**Blok Temalar için:**
> "Blok desenlerini kullanarak arka plan resmi ve ortalanmış metin içeren bir kahraman bölümü oluştur."

**Klasik Temalar için:**
> "Alt tema kullanarak kenar çubuğuna özel bir widget alanı ekle."

**Kadence Blocks için:**
> "Kadence Testimonials bloğunu kullanarak bir referanslar bölümü oluştur."

**Kadence Theme için:**
> "Başlık düzenini ve navigasyon menüsü stilini özelleştir."

Asistan, aktif temanıza ve eklentilerinize özel rehberlik ve kod örnekleri sağlayacaktır.

:::note
Tema farkındalıklı beceriler Superdav AI Agent v1.10.0 ve sonraki sürümlerde otomatik olarak mevcuttur. Ek bir kurulum veya yapılandırmaya gerek yoktur.
:::
