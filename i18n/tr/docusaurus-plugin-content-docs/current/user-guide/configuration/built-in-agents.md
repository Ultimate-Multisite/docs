---
title: Yerleşik Aracılar
sidebar_position: 12
_i18n_hash: a89717a9bbb03aa1da4d264e01acf11a
---
# Yerleşik Agents

Gratis AI Agent v1.9.0, her biri odaklanmış bir araç seti, özelleştirilmiş bir sistem istemi ve o alandaki yaygın görevlerle eşleşen başlangıç önerileriyle önceden yapılandırılmış beş yerleşik agents ile gelir. Agents arasında geçiş yapmak, assistant'ın ne yapabileceğini ve nasıl yanıt verdiğini değiştirir — sizin tarafınızda herhangi bir yapılandırma gerekmeden. Superdav AI Agent v1.18.0, ilgili entegrasyonlar yapılandırıldığında bu iş akışlarına takvim farkındalıklı araçlar, hatırlatıcı kayıtları, onay kapıları ve SMS bildirimleri ekleyebilir.

## Agent Nedir? {#what-is-an-agent}

Her agent, şunları birleştiren adlandırılmış bir yapılandırma profilidir:

- **Araçlar** — agent'ın çağırmasına izin verilen yetenekler (örn. bir İçerik Yazarı gönderi oluşturma yeteneklerine erişebilir; bir Tasarım Stüdyosu CSS ve theme.json yeteneklerine erişebilir)
- **Sistem istemi** — agent'ın tonunu, önceliklerini ve kısıtlarını belirleyen talimatlar
- **Öneriler** — hızlı başlamanıza yardımcı olmak için sohbet arayüzünde gösterilen önceden yazılmış istemler

## Agent Seçiciye Erişme {#accessing-the-agent-picker}

1. WordPress yönetici kenar çubuğunda **Gratis AI Agent** panelini açın.
2. Sohbet başlığının sol üstündeki **agent simgesine** tıklayın (simge, aktif agent'ı yansıtacak şekilde değişir).
3. **Agent Picker**, form-tablosu örtüsü olarak açılır. Her agent simgesi, adı ve tek satırlık açıklamasıyla listelenir.
4. Etkinleştirmek için bir agent satırına tıklayın. Sohbet başlığı hemen güncellenir.

Agents arasında konuşmanın ortasında da geçiş yapabilirsiniz — yeni agent'ın sistem istemi bir sonraki mesajdan itibaren etkili olur.

## Beş Yerleşik Agents {#the-five-built-in-agents}

### İçerik Yazarı {#content-writer}

**Odak:** Gönderiler, sayfalar ve iletişim formları oluşturma ve düzenleme.

**Kullanılabilir araçlar:** `create_post`, `update_post`, `batch_create_posts`, `set_featured_image`, `create_contact_form`, `get_option`, `list_post_types`. Superdav AI Agent v1.18.0 entegrasyonları etkinleştirildiğinde, yapılandırılmış takvim bağlamı, onay kapıları, hatırlatıcılar ve SMS bildirim araçları da onaylanmış iş akışları için kullanılabilir olabilir.

**Neyi iyi yapar:**
- Bir özet veya taslaktan blog gönderileri taslaklama ve yayımlama
- Yeni bir site için toplu açılış sayfaları oluşturma
- İletişim ve sorgu formları oluşturma
- Bir URL veya aramadan gönderilerde öne çıkan görseller ayarlama
- Yapılandırılmış Google Calendar bağlamından etkinlik takip mesajları taslaklama, ardından bildirimleri göndermeden önce onay için duraklama

**Başlangıç önerileri:**
- *WordPress multisite avantajları hakkında 500 kelimelik bir blog gönderisi yaz.*
- *Hakkında, Hizmetler ve İletişim sayfaları oluştur ve yayımla.*
- *İletişim sayfasına bir rezervasyon sorgu formu ekle.*
- *Yarınki yapılandırılmış takvim etkinliğindeki katılımcılar için bir hatırlatıcı taslağı hazırla ve göndermeden önce onay bekle.*

---

### Site Oluşturucu {#site-builder}

**Odak:** Tek bir istemden uçtan uca web sitesi oluşturma.

**Kullanılabilir araçlar:** `create_site_plan`, `execute_site_plan`, `get_plan_progress`, `handle_plan_error`, `create_post`, `batch_create_posts`, `register_post_type`, `create_menu`, `add_menu_item`, `inject_custom_css`, `apply_theme_json_preset`, `install_ability`, `recommend_plugin`, `create_contact_form`. Superdav AI Agent v1.18.0 ile, yöneticilerin etkinleştirdiği yerlerde yapılandırılmış yönetilen hizmet, onay, hatırlatıcı, takvim ve SMS araçları kullanılabilir olabilir.

**Neyi iyi yapar:**
- Tanımlanan bir işletme türü için çok aşamalı bir site oluşturma planı üretme
- Her aşamayı otonom olarak yürütme — yapı, içerik, gezinme, tasarım
- Manuel müdahale gerektirmeden plan ortasında hatalardan kurtulma
- Oluşturmanın parçası olarak önerilen pluginler kurma
- Sohbet arayüzünden doğrudan iletişim formları oluşturma (Superdav AI Agent v1.10.0+)
- Onay kapıları ve hatırlatıcı kayıtları etkinleştirildiğinde yinelenen bildirimler olmadan lansman hatırlatıcılarını veya katılımcı takibini koordine etme

**Başlangıç önerileri:**
- *Galeri gönderi türü, rezervasyon sayfası ve iletişim formu olan bir fotoğraf portföyü sitesi oluştur.*
- *Çevrimiçi menü, çalışma saatleri ve masa rezervasyonu sorgu formu olan bir restoran web sitesi oluştur.*
- *Hizmet sayfaları, portföy bölümü ve blog içeren bir serbest danışmanlık sitesi kur.*
- *Site oluşturucuyu kullanarak İletişim sayfasına bir iletişim formu ekle.*
- *Site lansmanı kontrol listesi onaylandıktan sonra, yapılandırılmış paydaş kişisine bir SMS hatırlatıcısı gönder.*

---

### Tasarım Stüdyosu {#design-studio}

**Odak:** Görsel özelleştirme — renkler, tipografi, CSS ve blok desenleri.

**Kullanılabilir araçlar:** `inject_custom_css`, `apply_theme_json_preset`, `get_global_styles`, `set_global_styles`, `reset_global_styles`, `add_block_pattern`, `list_block_patterns`, `set_site_logo`, `capture_screenshot`, `review_page_design`

**Neyi iyi yapar:**
- Adlandırılmış theme ön ayarlarını uygulama (minimal-dark, warm-editorial, corporate-blue, vibrant-startup, classic-blog)
- theme.json aracılığıyla global tipografi ve renk paletlerinde ince ayar yapma
- Markaya özel geçersiz kılmalar için özel CSS enjekte etme
- Bir sayfanın ekran görüntüsünü alma ve tasarım sorunları açısından inceleme

**Başlangıç önerileri:**
- *warm-editorial ön ayarını uygula ve ardından birincil rengi #2d6a4f olarak ayarla.*
- *Ana sayfanın ekran görüntüsünü al ve bana neleri iyileştireceğini söyle.*
- *Tam genişlikte arka plan görseli ve ortalanmış başlığı olan yeniden kullanılabilir bir hero blok deseni oluştur.*

### Plugin Yöneticisi {#plugin-manager}

**Odak:** WordPress pluginlerini keşfetme, kurma ve yönetme.

**Kullanılabilir araçlar:** `list_available_abilities`, `install_ability`, `recommend_plugin`, `get_option`, `set_option`

**Neyi iyi yapar:**
- Tanımlanan bir kullanım durumu için en iyi plugini önerme
- Kayıt defterinden yetenek paketleri kurma
- Kullanılabilir yetenek kataloğunu kategoriye göre gözden geçirme

**Başlangıç önerileri:**
- *Üyelik dizini için en iyi plugin nedir?*
- *WooCommerce yetenek paketini kur.*
- *Bana kullanılabilir tüm e-ticaret yetenek paketlerini göster.*

---

### Destek Assistant {#support-assistant}

**Odak:** Site içeriği, ayarları ve WordPress yapılandırması hakkındaki soruları yanıtlama.

**Kullanılabilir araçlar:** `get_option`, `list_options`, `list_post_types`, `list_taxonomies`, `list_menus`, `list_available_abilities`

**Neyi iyi yapar:**
- Mevcut site ayarlarını ve seçeneklerini aramak
- Sitede hangi gönderi türlerinin, taksonomilerin ve menülerin yapılandırıldığını açıklamak
- Canlı değerleri okuyarak "bu ayar ne işe yarar?" sorularını yanıtlamak
- Değişiklik yapmadan önce salt okunur bir tanılama katmanı olarak hizmet vermek

**Başlangıç önerileri:**
- *Bu sitede şu anda hangi pluginler ve ayarlar etkin?*
- *Bu sitede kayıtlı tüm özel gönderi türlerini listele.*
- *Hangi gezinme menüleri var ve nereye atanmışlar?*

---

## Superdav Otomasyon Entegrasyonları {#superdav-automation-integrations}

Superdav AI Agent v1.18.0 entegrasyonları yapılandırıldığında, yerleşik agentlar daha güvenli, zamanlamaya duyarlı otomasyon iş akışlarına katılabilir:

- **Google Calendar okuma araçları**, agentların takip çalışması taslağı hazırlamadan önce yapılandırılmış takvimleri ve etkinlikleri incelemesine olanak tanır.
- **Kişi ve katılımcı eşleştirme**, etkinlik katılımcılarını WordPress kullanıcılarıyla veya bilinen kişilerle eşleştirmeye yardımcı olur.
- **İnsan onayı kapıları**, yetkili bir kullanıcı bunları inceleyip onaylayana kadar hassas eylemleri duraklatır.
- **Hatırlatıcı kayıtları**, zamanlanmış işler yeniden denendiğinde veya tekrarlandığında yinelenen bildirimleri önler.
- **TextBee SMS bildirimleri**, SMS kimlik bilgileri ve iş akışı izinleri etkinleştirildiğinde yalnızca yapılandırılmış metin mesajları gönderir.

Önerilen iş akışı: agentdan mesajı veya eylemi hazırlamasını isteyin, onay istemini inceleyin, ardından onaylanmış eylemin devam etmesine izin verin. Yinelenen hatırlatıcılar için, aynı etkinliğe veya kişiye tekrar tekrar bildirim gönderilmemesi adına hatırlatıcı tekilleştirmeyi etkin tutun.

---

## Agentları Özelleştirme {#customising-agents}

Her yerleşik agent, `gratis_ai_agent_agents` filtresi aracılığıyla genişletilebilir veya değiştirilebilir.

### Mevcut bir agenta özel sistem istemi ekleme {#adding-a-custom-system-prompt-to-an-existing-agent}

```php
add_filter( 'gratis_ai_agent_agents', function ( array $agents ): array {
    if ( isset( $agents['content-writer'] ) ) {
        $agents['content-writer']['system_prompt'] .= "\n\nAlways write in British English and use the Oxford comma.";
    }
    return $agents;
} );
```

### Yeni bir agent kaydetme {#registering-a-new-agent}

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

### Yerleşik bir agentı kaldırma {#removing-a-built-in-agent}

```php
add_filter( 'gratis_ai_agent_agents', function ( array $agents ): array {
    unset( $agents['plugin-manager'] );
    return $agents;
} );
```
