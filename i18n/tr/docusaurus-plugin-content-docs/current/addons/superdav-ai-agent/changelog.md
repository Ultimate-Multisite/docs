---
title: Değişiklik Günlüğü
sidebar_position: 5
_i18n_hash: d18a5d0a6c766913ed5d348b54dd6acc
---
# Değişiklik Günlüğü

## 1.16.0 — Yayınlanma Tarihi: 2026-05-20

### Yeni Özellikler

- **Logo SVG Oluşturma Yeteneği** — Tema Oluşturucu, artık namespace güvenli temizleme (sanitization) kullanarak özel logo SVG'leri oluşturabilir ve bunları gömebilir.
- **Keşif Görüşmesinde Fotoğraf Yükleme** — Tema Oluşturucu keşif görüşmesi, daha zengin bir tasarım bağlamı için artık bir fotoğraf yükleme adımı içeriyor.
- **Palet Kontrastını Doğrulama Yeteneği** — Bir temaya uygulamadan önce renk çiftlerini WCAG uyumluluğu açısından kontrol edin.
- **Otelcilik Menüleri** — Tema Oluşturucu, artık otelcilik işletmeleri için yapılandırılmış yiyecek ve içecek menü sayfaları oluşturabilir.
- **Masaüstü ve Mobil Önizleme Oluşturma** — Tasarım yönü seçimi sırasında tasarımınızı masaüstü ve mobil cihazlarda önizleyebilirsiniz.
- **Navigasyon Etiketi Parametresi** — Oluştur Menü yeteneği, artık sayfa başlığından ayrı, belirgin bir `navigation_label` desteği sunuyor.
- **Tier 1 Araç Erişilebilirliği** — sd-ai-agent/site-scrape, artık Tema Oluşturucu'da varsayılan olarak bulunan bir Tier 1 aracıdır.

### Düzeltmeler

- **AI İstemci Önbelleği** — Artık, uzun süren ajan görevlerinde veri kaybını önlemek için çapraz istek kalıcılığı (cross-request persistence) sağlamak amacıyla geçici veriler (transients) ile destekleniyor.
- **Eklenti Satırı Eylem Bağlantıları** — Açıklığı artırmak için düzeltildi ve yeniden adlandırıldı.

## 1.10.0 — Yayınlanma Tarihi: 2026-05-05

### Yeni Özellikler

- **Tavily İnternet Araması** — Daha zengin internet arama sonuçları için Brave Search'in yanına Tavily'yi bir arama sağlayıcısı olarak ekleyin.
- **Tema Farkındalığı Olan Yerleşik Beceriler** — Block Themes, Classic Themes, Kadence Blocks ve Kadence Theme beceri kılavuzları artık eklentiyle birlikte geliyor.
- **Site Oluşturucu İletişim Formu Yeteneği** — Sohbet arayüzünden herhangi bir sayfaya doğrudan bir iletişim formu ekleyin.

### İyileştirmeler

- **WooCommerce Entegrasyonu Yeniden Yapılandırıldı** — Artık daha iyi güvenilirlik ve uyumluluk için yerel WooCommerce API'lerini kullanıyor.
- **Sağlayıcı Listesi Otomatik Yenilenir** — Herhangi bir eklenti etkinleştirildiğinde veya devre dışı bırakıldığında.

### Düzeltmeler

- **navigate-to yeteneği** — Bazı yönetici sayfalarındaki sonsuz yenileme döngüsü düzeltildi.
- **list-posts yeteneği** — Artık kategori ve etiket adlarını doğru bir şekilde slug'lara dönüştürüyor.
- **WP-CLI komutları** — Önceki bir yeniden yapılandırmadan sonra eksik namespace takma adları geri yüklendi.
- **Olay Otomasyonu** — Otomasyon tabloları henüz oluşturulmamış siteleri sorunsuz bir şekilde ele alıyor.
- **memory-save yeteneği** — Artık sistem talimat oluşturucusunda doğru namespace öneki kullanıyor.
- **Scalar aracı sonuçları** — Artık yapay zekaya döndürülmeden önce doğru şekilde sarılıyor.
- **Kullanım istatistikleri** — Artık eski sürümlerden yükseltme yaparken eski yetenek anahtar formatını doğru bir şekilde ele alıyor.
