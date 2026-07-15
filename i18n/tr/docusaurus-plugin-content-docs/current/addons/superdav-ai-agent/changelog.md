---
title: Değişiklik günlüğü
sidebar_position: 5
_i18n_hash: 9747e37b1fd831941c9f86e6c3f85c81
---
# Değişiklik Günlüğü

## 1.18.0 — 2026-06-29 tarihinde yayımlandı {#1180--released-on-2026-06-29}

### Yeni {#new}

- **Google Calendar araçları** — takvim duyarlı otomasyonlar için yapılandırılmış takvimleri ve etkinlikleri okuyun
- **Kişi eşleme ve katılımcı yardımcıları** — takvim katılımcılarını site kullanıcıları ve kişilerle eşleştirin
- **İnsan onay kapıları ve hatırlatıcı kayıtları** — otomasyonları inceleme için duraklatın ve yinelenen bildirimleri önleyin
- **TextBee SMS sağlayıcısı** — yapılandırılmış kısa mesaj bildirimlerini TextBee üzerinden gönderin
- **Gelişmiş yardımcı paket** — WordPress.org yapısından ayrı olarak dağıtılan güvenilir geliştirici dosya sistemi, veritabanı, WP-CLI, REST dağıtıcısı, plugin oluşturucu, git anlık görüntüsü, kullanıcı yönetimi ve benchmark araçları ekleyin

### İyileştirildi {#improved}

- **Yönetilen Superdav hizmet kurulumu** — desteklenen siteler için barındırılan hizmet endpoint'leri ve otomatik bağlantı sağlama ekleyin
- **Sürüm paketleme** — ayrı core ve Advanced ZIP'leri oluşturun, ikisini de GitHub'da yayımlayın ve WordPress.org'a yalnızca core paketi gönderin

### Düzeltildi {#fixed}

- **AI isteği güvenilirliği** — model seçimini, istek zaman aşımlarını, varsayılan kurulum modelini, akıl yürütme metni işlemeyi ve geçersiz araç çağrıları için yeniden deneme rehberliğini iyileştirin
- **Takvim ve hatırlatıcı sağlamlaştırma** — Google Calendar token'larını ve hatırlatıcı tekilleştirmeyi güçlendirin
- **İlk katılım ve onay devamları** — frontend ilk katılım başlatmalarını ve onaylanmış yetenek devamlarını düzeltin
- **WordPress.org paketleme incelemesi sorunları** — core sürümü için paketleme incelemesi geri bildirimlerini ele alın

## 1.16.0 — 2026-05-20 tarihinde yayımlandı {#1160--released-on-2026-05-20}

### Yeni {#new-1}

- **Logo SVG Oluştur yeteneği** — Theme Builder artık ad alanı güvenli temizleme ile özel logo SVG'leri oluşturup gömebilir
- **Keşif görüşmesinde fotoğraf yükleme** — Theme Builder keşif görüşmesi artık daha zengin tasarım bağlamı için bir fotoğraf yükleme adımı içerir
- **Palet Kontrastını Doğrula yeteneği** — bir theme'e uygulamadan önce renk çiftlerini WCAG uyumluluğu açısından kontrol edin
- **Konaklama menüleri** — Theme Builder artık konaklama işletmeleri için yapılandırılmış yiyecek ve içecek menüsü sayfaları oluşturabilir
- **Masaüstü ve mobil önizleme işleme** — tasarım yönü seçimi sırasında tasarımınızı masaüstü ve mobil cihazlarda önizleyin
- **Navigasyon etiketi parametresi** — Menü Oluştur yeteneği artık sayfa başlığından ayrı, farklı bir `navigation_label` destekler
- **Tier 1 araç kullanılabilirliği** — sd-ai-agent/site-scrape artık Theme Builder'da varsayılan olarak kullanılabilen bir Tier 1 araçtır

### Düzeltildi {#fixed-1}

- **AI Client önbelleği** — artık istekler arası kalıcılık için transient'larla destekleniyor ve uzun süren agent görevlerinde veri kaybını önlüyor
- **Plugin satırı eylem bağlantıları** — netlik için düzeltildi ve yeniden adlandırıldı

## 1.10.0 — 2026-05-05 tarihinde yayımlandı {#1100--released-on-2026-05-05}

### Yeni {#new-2}

- **Tavily internet araması** — Brave Search'ün yanında daha zengin internet arama sonuçları için bir arama sağlayıcısı olarak Tavily ekleyin
- **Theme duyarlı yerleşik beceriler** — Block Themes, Classic Themes, Kadence Blocks ve Kadence Theme beceri kılavuzları artık plugin ile birlikte gelir
- **Site oluşturucu iletişim formu yeteneği** — sohbet arayüzünden doğrudan herhangi bir sayfaya iletişim formu ekleyin

### İyileştirildi {#improved-1}

- **WooCommerce entegrasyonu yeniden düzenlendi** — artık daha iyi güvenilirlik ve uyumluluk için yerel WooCommerce API'lerini kullanıyor
- **Sağlayıcı listesi otomatik olarak yenilenir** — herhangi bir plugin etkinleştirildiğinde veya devre dışı bırakıldığında

### Düzeltildi {#fixed-2}

- **navigate-to yeteneği** — bazı admin sayfalarında sonsuz yeniden yükleme döngüsü düzeltildi
- **list-posts yeteneği** — artık kategori ve etiket adlarını slug'lara doğru şekilde çözümler
- **WP-CLI komutları** — önceki bir yeniden düzenlemeden sonra eksik ad alanı takma adları geri yüklendi
- **Etkinlik otomasyonu** — otomasyon tablolarının henüz oluşturulmadığı siteleri sorunsuz şekilde ele alır
- **memory-save yeteneği** — artık sistem talimatı oluşturucusunda doğru ad alanı önekini kullanır
- **Skaler araç sonuçları** — artık AI'ya döndürülmeden önce doğru şekilde sarmalanır
- **Kullanım istatistikleri** — artık eski sürümlerden yükseltmede eski yetenek anahtarı biçimini doğru şekilde işler
