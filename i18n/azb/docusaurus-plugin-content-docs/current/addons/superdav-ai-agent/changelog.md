---
title: Tariq-e-tabdil
sidebar_position: 5
_i18n_hash: d18a5d0a6c766913ed5d348b54dd6acc
---
# Değişiklik Günlüğü

## 1.16.0 — Yayınlanma Tarihi: 2026-05-20

### Yeni

- **Logo SVG Oluşturma yeteneği** — Theme Builder artık, namespace güvenli temizleme (sanitisation) ile özel logo SVG'leri oluşturup gömebiliyor.
- **Keşif görüşmesine fotoğraf yükleme** — Theme Builder keşif görüşmesi, daha zengin bir tasarım bağlamı için artık fotoğraf yükleme adımı içeriyor.
- **Palet Kontrastı Doğrulama yeteneği** — Bir temaya uygulamadan önce renk çiftlerini WCAG uyumluluğu açısından kontrol edin.
- **Otel/Konaklama menüleri** — Theme Builder, konaklama işletmeleri için yapılandırılmış yiyecek ve içecek menü sayfaları oluşturabiliyor.
- **Masaüstü ve mobil önizleme oluşturma** — Tasarım yönü seçerken tasarımınızı masaüstü ve mobil cihazlarda önizleyebilirsiniz.
- **Navigasyon etiketi parametresi** — Oluşturma (Create Menu) yeteneği artık, sayfa başlığından ayrı bir `navigation_label` desteği sunuyor.
- **Tier 1 araç erişilebilirliği** — sd-ai-agent/site-scrape artık Theme Builder'da varsayılan olarak bulunan bir Tier 1 aracı.

### Düzeltildi

- **AI Client önbelleği (cache)** — Artık istekler arası kalıcılık için geçici verilere (transients) dayalı çalışıyor, bu da uzun süren agent görevlerinde veri kaybını önlüyor.
- **Plugin satırı eylem bağlantıları** — Açıklığı artırmak için düzeltildi ve yeniden adlandırıldı.

## 1.10.0 — Yayınlanma Tarihi: 2026-05-05

### Yeni

- **Tavily internet araması** — Daha zengin internet arama sonuçları için Brave Search'in yanı sıra Tavily'yi bir arama sağlayıcısı olarak ekleyin.
- **Tema farkındalıklı yerleşik yetenekler** — Block Themes, Classic Themes, Kadence Blocks ve Kadence Theme yetenek kılavuzları artık eklentiyle birlikte geliyor.
- **Site oluşturucu iletişim formu yeteneği** — Sohbet arayüzünden herhangi bir sayfaya doğrudan iletişim formu ekleyin.

### Geliştirildi

- **WooCommerce entegrasyonu yeniden yapılandırıldı** — Daha iyi güvenilirlik ve uyumluluk için artık yerel WooCommerce API'lerini kullanıyor.
- **Sağlayıcı listesi otomatik yenilenir** — Herhangi bir eklenti etkinleştirildiğinde veya devre dışı bırakıldığında.

### Düzeltildi

- **navigate-to yeteneği** — Bazı admin sayfalarında sonsuz yeniden yükleme döngüsü (infinite reload loop) düzeltildi.
- **list-posts yeteneği** — Artık kategori ve etiket adlarını doğru bir şekilde slug'lara çözümlüyor.
- **WP-CLI komutları** — Önceki bir yeniden yapılandırmadan sonra eksik olan namespace takma adları (aliases) geri yüklendi.
- **Olay otomasyonu** — Otomasyon tabloları henüz oluşturulmamış siteleri sorunsuz bir şekilde ele alıyor.
- **memory-save yeteneği** — Artık sistem talimat oluşturucusunda doğru namespace öneki (prefix) kullanıyor.
- **Scalar aracı sonuçları** — Artık AI'ya geri döndürülmeden önce doğru şekilde sarılıyor (wrapped).
- **Kullanım istatistikleri** — Eski sürümlerden yükseltme yapılırken eski yetenek anahtarı formatını doğru bir şekilde ele alıyor.
