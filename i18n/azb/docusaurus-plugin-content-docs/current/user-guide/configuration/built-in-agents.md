---
title: Internal Agents
sidebar_position: 12
_i18n_hash: 4852fdc3ddd1a44a574c100846e84dc5
---
# Yerleşik Agent'lar

Gratis AI Agent v1.9.0, her biri belirli bir araç seti, özel bir sistem komutu (system prompt) ve o alandaki yaygın görevlere uygun başlangıç önerileriyle önceden yapılandırılmış beş yerleşik agent ile geliyor. Agent'lar arasında geçiş yapmak, asistanın ne yapabileceğini ve nasıl yanıt vereceğini değiştirir — sizin herhangi bir yapılandırma yapmanıza gerek kalmadan.

## Agent Nedir?

Her agent, bir araya getirilmiş bir yapılandırma profili (configuration profile) olup şunları içerir:

- **Tools (Araçlar)** — agent'ın kullanmasına izin verilen yetenekler (örneğin, bir İçerik Yazarı'nın gönderi oluşturma yeteneklerine erişimi vardır; bir Tasarım Stüdyosu ise CSS ve theme.json yeteneklerine erişime sahiptir)
- **System prompt (Sistem komutu)** — agent'ın tonunu, önceliklerini ve kısıtlamalarını belirleyen talimatlar
- **Suggestions (Öneriler)** — hızlı başlamanıza yardımcı olmak için sohbet arayüzünde gösterilen önceden yazılmış komutlar

## Agent Seçiciye Erişim

1. WordPress yönetici kenar çubuğundaki **Gratis AI Agent** paneline gidin.
2. Sohbet başlığının sol üst köşesindeki **agent simgesine** tıklayın (simge, aktif agent'ı yansıtacak şekilde değişir).
3. **Agent Picker** bir form-tablo katmanı olarak açılır. Her agent, simgesi, adı ve tek satırlık bir açıklama ile listelenir.
4. Bir agent satırına tıklayarak onu etkinleştirin. Sohbet başlığı hemen güncellenir.

Ayrıca konuşma sırasında agent değiştirebilirsiniz — yeni agent'ın sistem komutu bir sonraki mesajdan itibaren geçerli olur.

## Beş Yerleşik Agent

### Content Writer (İçerik Yazarı)

**Odak:** Gönderi, sayfa ve iletişim formları oluşturma ve düzenleme.

**Mevcut araçlar:** `create_post`, `update_post`, `batch_create_posts`, `set_featured_image`, `create_contact_form`, `get_option`, `list_post_types`

**Nelerde başarılıdır:**
- Bir özet veya taslaktan blog yazısı taslağı hazırlama ve yayınlama
- Yeni bir site için toplu açılış sayfası (landing page) oluşturma
- İletişim ve sorgulama formları oluşturma
- Bir URL'den veya aramadan gönderilere öne çıkan görsel (featured image) atama

**Başlangıç önerileri:**
- *WordPress multisite'ın faydaları hakkında 500 kelimelik bir blog yazısı yaz.*
- *Bir Hakkımızda, Hizmetler ve İletişim sayfası oluştur ve yayınla.*
- *İletişim sayfasına bir rezervasyon sorgulama formu ekle.*

---

### Site Builder (Site Oluşturucu)

**Odak:** Tek bir komutla uçtan uca web sitesi oluşturma.

**Mevcut araçlar:** `create_site_plan`, `execute_site_plan`, `get_plan_progress`, `handle_plan_error`, `create_post`, `batch_create_posts`, `register_post_type`, `create_menu`, `add_menu_item`, `inject_custom_css`, `apply_theme_json_preset`, `install_ability`, `recommend_plugin`, `create_contact_form`

**Nelerde başarılıdır:**
- Açıklanan bir iş türü için çok aşamalı bir site oluşturma planı oluşturma
- Her aşamayı özerk bir şekilde yürütme — yapı, içerik, navigasyon, tasarım
- Manuel müdahale gerektirmeden plan ortasında hatalardan kurtulma
- Yapının bir parçası olarak önerilen eklentileri kurma
- İletişim formlarını doğrudan sohbet arayüzünden oluşturma (Superdav AI Agent v1.10.0+)

**Başlangıç önerileri:**
- *Bir galeri gönderi türü, bir rezervasyon sayfası ve bir iletişim formu içeren bir fotoğrafçılık portfolyo sitesi oluştur.*
- *Online menü, çalışma saatleri ve masa rezervasyonu sorgulama formu içeren bir restoran web sitesi oluştur.*
- *Hizmet sayfaları, bir portfolyo bölümü ve bir blog içeren serbest danışmanlık sitesi kur.*
- *Site oluşturucuyu kullanarak İletişim sayfasına bir iletişim formu ekle.*

---

### Design Studio (Tasarım Stüdyosu)

**Odak:** Görsel özelleştirme — renkler, tipografi, CSS ve blok desenleri.

**Mevcut araçlar:** `inject_custom_css`, `apply_theme_json_preset`, `get_global_styles`, `set_global_styles`, `reset_global_styles`, `add_block_pattern`, `list_block_patterns`, `set_site_logo`, `capture_screenshot`, `review_page_design`

**Nelerde başarılıdır:**
- Adlandırılmış tema ön ayarlarını uygulama (minimal-dark, warm-editorial, corporate-blue, vibrant-startup, classic-blog)
- theme.json aracılığıyla küresel tipografi ve renk paletlerini ince ayar yapma
- Markaya özel geçersiz kılmalar için özel CSS enjekte etme
- Bir sayfanın ekran görüntüsünü alıp tasarım sorunları açısından inceleme

**Başlangıç önerileri:**
- *warm-editorial ön ayarını uygula ve ardından birincil rengi #2d6a4f olarak ayarla.*
- *Ana sayfanın ekran görüntüsünü al ve neyi iyileştirebileceğimi söyle.*
- *Tam genişlikte bir arka plan görseli ve ortalanmış bir başlık içeren yeniden kullanılabilir bir kahraman blok deseni oluştur.*

---

### Plugin Manager (Eklenti Yöneticisi)

**Odak:** WordPress eklentilerini keşfetme, kurma ve yönetme.

**Mevcut araçlar:** `list_available_abilities`, `install_ability`, `recommend_plugin`, `get_option`, `set_option`

**Nelerde başarılıdır:**
- Açıklanan bir kullanım senaryosu için en iyi eklentiyi önerme
- Kayıt defterindeki yetenek paketlerini kurma
- Kategoriye göre mevcut yetenek kataloğunda gezinme

**Başlangıç önerileri:**
- *Üyelik dizini için en iyi eklenti nedir?*
- *WooCommerce yetenek paketini kur.*
- *Mevcut tüm e-ticaret yetenek paketlerini göster.*

---

### Support Assistant (Destek Asistanı)

**Odak:** Site içeriği, ayarlar ve WordPress yapılandırması hakkında soruları yanıtlama.

**Mevcut araçlar:** `get_option`, `list_options`, `list_post_types`, `list_taxonomies`, `list_menus`, `list_available_abilities`

**Nelerde başarılıdır:**
- Mevcut site ayarlarını ve seçeneklerini kontrol etme
- Sitede hangi gönderi türlerinin, taksonomilerin ve menülerin yapılandırıldığını açıklama
- Canlı değerleri okuyarak "bu ayar ne işe yarıyor?" sorularını yanıtlama
- Değişiklik yapmadan önce salt okunur bir teşhis katmanı görevi görme

**Başlangıç önerileri:**
- *Bu sitede şu anda hangi eklentiler ve ayarlar aktif?*
- *Bu sitede kayıtlı tüm özel gönderi türlerini listele.*
- *Hangi navigasyon menüleri var ve nereye atanmışlar?*

---

## Agent Özelleştirme

Her yerleşik agent, `gratis_ai_agent_agents` filtresi aracılığıyla genişletilebilir veya değiştirilebilir.

### Mevcut bir agent'a özel bir sistem komutu ekleme

```php
add_filter( 'gratis_ai_agent_agents', function ( array $agents ): array {
    if ( isset( $agents['content-writer'] ) ) {
        $agents['content-writer']['system_prompt'] .= "\n\nAlways write in British English and use the Oxford comma.";
    }
    return $agents;
} );
```

### Yeni bir agent kaydetme

```php
add_filter( 'gratis_ai_agent_agents', function ( array $agents ): array {
    $agents['seo-specialist'] = [
        'name'          => 'SEO Specialist',
        'description'   => 'Optimises posts and pages for search engines.',
        'icon'          => 'dashicons-search',
        'tools'         => [ 'get_option', 'set_option', 'create_post', 'update_post', 'list_post_types' ],
        'system_prompt' => 'You are an SEO specialist. Focus on keyword optimisation, meta descriptions, and structured data.',
        'suggestions'   => [
            'Review the homepage title and meta description.',
            'Suggest title tag improvements for the five most recent posts.',
        ],
    ];
    return $agents;
} );
```

Yeni agent, filtre çalıştıktan hemen sonra Agent Picker'da görünür.

### Yerleşik bir agent'ı kaldırma

```php
add_filter( 'gratis_ai_agent_agents', function ( array $agents ): array {
    unset( $agents['plugin-manager'] );
    return $agents;
} );
```
