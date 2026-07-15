---
title: Tema-bil Maharat
sidebar_position: 27
_i18n_hash: b61ebe1e7de0e5e8edb96c9bc21743cc
---
# Tema'ya Özel Yetenekler

Superdav AI Agent v1.10.0, aktif WordPress temanıza otomatik olarak uyum sağlayan dört yeni tema'ya özel yerleşik yetenek (skill) getiriyor. Bu yetenekler, temanızın mimarisine ve özelliklerine özel rehberlik ve kabiliyetler sunar.

## Tema'ya Özel Yetenekler Nedir? {#what-are-theme-aware-skills}

Tema'ya özel yetenekler, yapay zeka asistanının sitenizde şu anda aktif olan WordPress temasına göre otomatik olarak seçtiği önceden yapılandırılmış bilgi tabanları ve araç setleridir. Tema değiştirdiğinizde, asistanın kullanabileceği yetenekler otomatik olarak güncellenir; manuel bir yapılandırmaya gerek yoktur.

Her yetenek şunları içerir:

- **Tema'ya özel dokümantasyon** — Temayı kullanma ve özelleştirme konusunda rehberlik
- **Blok ve desen referansları** — Kullanılabilir bloklar, desenler ve tasarım seçenekleri
- **Özelleştirme örnekleri** — Yaygın görevler için kod parçacıkları ve yapılandırma kalıpları
- **En iyi uygulamalar** — Temanın mimarisi ve iş akışı için öneriler

## Mevcut Tema'ya Özel Yetenekler {#available-theme-aware-skills}

### Blok Temaları (Block Themes) {#block-themes}

**Kimlere Uygulanır:** WordPress'in blok tabanlı (Full Site Editing) mimarisini kullanan temalar.

Blok Temaları yeteneği şu konularda rehberlik sağlar:

- Blok düzenleyiciyi kullanarak şablon oluşturma ve düzenleme
- Blok desenleri ve yeniden kullanılabilir bloklarla çalışma
- Global stilleri ve theme.json ayarlarını özelleştirme
- Tema bloklarını ve varyasyonlarını kullanma
- Siteniz için özel blok desenleri oluşturma

**Otomatik olarak etkinleşir:** Aktif temanız bir blok temasıysa ( `block-templates` özelliğini destekliyorsa).

### Klasik Temalar (Classic Themes) {#classic-themes}

**Kimlere Uygulanır:** PHP şablonları ve klasik düzenleyici kullanan geleneksel WordPress temaları.

Klasik Temalar yeteneği şu konularda rehberlik sağlar:

- PHP şablon dosyaları ve hook'larla çalışma
- Özelleştirici (Customizer) aracılığıyla tema görünümünü özelleştirme
- Widget alanlarını ve yan çubukları kullanma
- CSS'i ve child theme geliştirmeyi değiştirme
- Tema hiyerarşisini ve şablon etiketlerini anlama

**Otomatik olarak etkinleşir:** Aktif temanız klasik (blok olmayan) bir tema ise.

### Kadence Blocks {#kadence-blocks}

**Kimlere Uygulanır:** Gelişmiş blok tabanlı tasarım için Kadence Blocks eklentisini kullanan siteler.

Kadence Blocks yeteneği şu konularda rehberlik sağlar:

- Kadence'in gelişmiş blok kütüphanesini kullanma (Hero, Testimonials, Pricing vb.)
- Kadence blok ayarlarını ve duyarlı seçenekleri yapılandırma
- Kadence'in ızgara (grid) ve konteyner bloklarıyla özel düzenler oluşturma
- Kadence bloklarını temanızla entegre etme
- Kadence'in tasarım sisteminden ve ön ayarlarından yararlanma

**Otomatik olarak etkinleşir:** Kadence Blocks eklentisi sitenizde aktifse.

### Kadence Theme {#kadence-theme}

**Kimlere Uygulanır:** Blok tabanlı tasarım ve özelleştirme için Kadence temasını kullanan siteler.

Kadence Theme yeteneği şu konularda rehberlik sağlar:

- Global stiller ve theme.json aracılığıyla Kadence temasını özelleştirme
- Kadence'in yerleşik blok desenlerini ve şablonlarını kullanma
- Kadence tema ayarlarını ve seçeneklerini yapılandırma
- Kadence'in tasarım sistemiyle özel tasarımlar oluşturma
- Kadence'i popüler eklentiler ve araçlarla entegre etme

**Otomatik olarak etkinleşir:** Kadence teması aktif temanız ise.

## Yetenekler Nasıl Seçilir? {#how-skills-are-selected}

Asistan, her mesajda aktif temanızı ve yüklü eklentilerinizi otomatik olarak algılar. Eşleşen bir tema'ya özel yetenek mevcutsa, bu yetenek otomatik olarak asistanın bağlamına yüklenir. Yetenekleri manuel olarak etkinleştirmenize veya değiştirmenize gerek yoktur.

### Birden Fazla Yetenek {#multiple-skills}

Sitenize birden fazla yetenek uygulanıyorsa (örneğin, hem Kadence Blocks hem de Kadence Theme aktifse), asistan tüm geçerli yeteneklere erişebilir ve her birinden gelen rehberlikten faydalanabilir.

### Tema Değiştirme {#switching-themes}

Aktif temanızı değiştirdiğinizde, asistanın kullanabileceği yetenekler bir sonraki mesajda otomatik olarak güncellenir. Örneğin:

1. **Blok Temaları** yeteneği aktifken bir blok teması kullanıyorsunuz.
2. Klasik bir temaya geçiyorsunuz.
3. Bir sonraki mesajınızda, **Klasik Temalar** yeteneği otomatik olarak yüklenir ve **Blok Temaları** yeteneği artık kullanılamaz hale gelir.

## Tema'ya Özel Yetenekler Kullanımı {#using-theme-aware-skills}

Bir tema'ya özel yetenekten faydalanmak için, yapmanız gerekeni sohbet arayüzünde basitçe açıklayın. Asistan, uygun yeteneğin rehberliğine otomatik olarak atıfta bulunacaktır.

### Örnek Komutlar {#example-prompts}

**Blok Temaları için:**
> "Blok desenlerini kullanarak arka plan resmi ve ortalanmış metin içeren bir kahraman bölümü oluştur."

**Klasik Temalar için:**
> "Child theme kullanarak yan çubuğa özel bir widget alanı ekle."

**Kadence Blocks için:**
> "Kadence Testimonials bloğunu kullanarak bir referanslar bölümü oluştur."

**Kadence Theme için:**
> "Başlık düzenini ve navigasyon menüsü stilini özelleştir."

Asistan, aktif temanıza ve eklentilerinize özel rehberlik ve kod örnekleri sağlayacaktır.

:::note
Tema'ya özel yetenekler Superdav AI Agent v1.10.0 ve sonraki sürümlerde otomatik olarak mevcuttur. Ek kurulum veya yapılandırmaya gerek yoktur.
:::
