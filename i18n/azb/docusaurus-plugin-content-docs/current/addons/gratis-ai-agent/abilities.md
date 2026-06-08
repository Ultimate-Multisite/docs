---
title: Qabiliyyə Referansı
sidebar_position: 2
_i18n_hash: 1a83460648ea789162af417c6b11eecc
---
# Abilities Reference

Abilities are those küçük eylemlerdir ki Gratis AI Agent sizin WordPress kurulumunuzda kullanabilir. Her bir ability, JSON schema'yı açan kayıtlı bir PHP sınıfıdır; ajan bu şemayı çalışma anında okuyarak hangi parametrelerin gerektiğini ve ability'nin ne döndüreceğini anlar.

Bu sayfa Gratis AI Agent v1.9.0 ile birlikte gelen tüm ability'leri belgeler.

---

## Custom Post Types (Özel Gönderi Tipleri)

Bu ability'ler, ajan aracılığıyla kaydedilen özel gönderi tiplerini (CPT) yönetir. Kayıtlar WordPress seçenek tablosuna kalıcı olarak kaydedilir, bu sayede eklenti devre dışı bırakılsa bile kaybolmaz ve tekrar etkinleştirildiğinde geri gelir.

### `register_post_type`

Yeni bir özel gönderi tipi kaydeder.

**Parametreler**

| Parametre | Tip | Gerekli mi? | Açıklama |
|---|---|---|---|
| `slug` | string | Evet | Gönderi tipi anahtarı (maksimum 20 karakter, büyük harf yok, boşluk yok) |
| `singular_label` | string | Evet | İnsanların okuyabileceği tekil isim, örn: `Portfolyo Öğesi` |
| `plural_label` | string | Evet | İnsanların okuyabileceği çoğul isim, örn: `Portfolyo Öğeleri` |
| `public` | boolean | Hayır | Gönderi tipinin herkese açık olup olmadığı. Varsayılan `true` |
| `supports` | array | Hayır | Desteklenen özellikler: `title`, `editor`, `thumbnail`, `excerpt`, `comments`, `revisions`, `custom-fields`. Varsayılan `["title","editor"]` |
| `has_archive` | boolean | Hayır | Bir gönderi tipi arşiv sayfasının etkin olup olmadığı. Varsayılan `false` |
| `menu_icon` | string | Hayır | Yönetici menü simgesi için Dashicons sınıfı veya URL'si. Varsayılan `"dashicons-admin-post"` |
| `rewrite_slug` | string | Hayır | Gönderi tipi için URL slug'ı. Varsayılan `slug` |

**Örnek**

```json
{
  "slug": "portfolio",
  "singular_label": "Portfolio Item",
  "plural_label": "Portfolio Items",
  "public": true,
  "supports": ["title", "editor", "thumbnail"],
  "has_archive": true,
  "menu_icon": "dashicons-portfolio"
}
```

**Dönüş** `{ "success": true, "slug": "portfolio" }`

---

### `list_post_types`

Ajan tarafından kaydedilen tüm özel gönderi tiplerini döndürür.

**Parametreler** — yok

**Dönüş**

```json
{
  "post_types": [
    {
      "slug": "portfolio",
      "singular_label": "Portfolio Item",
      "plural_label": "Portfolio Items",
      "public": true
    }
  ]
}
```

---

### `delete_post_type`

Ajan tarafından daha önce kaydedilmiş olan bir özel gönderi tipini kayıttan kaldırır. Bu türdeki mevcut gönderiler veritabanında kalır ancak artık gönderi tipi üzerinden erişilemez hale gelirler.

**Parametreler**

| Parametre | Tip | Gerekli mi? | Açıklama |
|---|---|---|---|
| `slug` | string | Evet | Kaldırılacak gönderi tipi anahtarı |

**Dönüş** `{ "success": true, "slug": "portfolio" }`

---

## Custom Taxonomies (Özel Taksonomiler)

Bu ability'ler özel taksonomileri yönetir. CPT'ler gibi, taksonomi kayıtları da kalıcı olarak saklanır.

### `register_taxonomy`

Yeni bir özel taksonomi kaydeder.

**Parametreler**

| Parametre | Tip | Gerekli mi? | Açıklama |
|---|---|---|---|
| `slug` | string | Evet | Taksonomi anahtarı (maksimum 32 karakter) |
| `singular_label` | string | Evet | İnsanların okuyabileceği tekil isim, örn: `Proje Kategorisi` |
| `plural_label` | string | Evet | İnsanların okuyabileceği çoğul isim, örn: `Proje Kategorileri` |
| `post_types` | array | Evet | Bu taksonominin hangi gönderi tipi slug'larına bağlanacağını belirtir |
| `hierarchical` | boolean | Hayır | Kategori tarzı için `true`, etiket tarzı için `false`. Varsayılan `true` |
| `public` | boolean | Hayır | Terimlerin herkese açık olup olmadığı. Varsayılan `true` |
| `rewrite_slug` | string | Hayır | Taksonomi için URL slug'ı. Varsayılan `slug` |

**Örnek**

```json
{
  "slug": "project-category",
  "singular_label": "Project Category",
  "plural_label": "Project Categories",
  "post_types": ["portfolio"],
  "hierarchical": true
}
```

**Dönüş** `{ "success": true, "slug": "project-category" }`

---

### `list_taxonomies`

Ajan tarafından kaydedilen tüm özel taksonomileri döndürür.

**Parametreler** — yok

**Dönüş**

```json
{
  "taxonomies": [
    {
      "slug": "project-category",
      "singular_label": "Project Category",
      "post_types": ["portfolio"],
      "hierarchical": true
    }
  ]
}
```

---

### `delete_taxonomy`

Ajan tarafından daha önce kaydedilmiş olan bir özel taksonomiyi kayıttan kaldırır.

**Parametreler**

| Parametre | Tip | Gerekli mi? | Açıklama |
|---|---|---|---|
| `slug` | string | Evet | Kaldırılacak taksonomi anahtarı |

**Dönüş** `{ "success": true, "slug": "project-category" }`

---

## Design System (Tasarım Sistemi)

Design system ability'leri WordPress sitesinin görsel sunumunu değiştirir — özel CSS'ten blok desenlerine ve site logosuna kadar.

### `inject_custom_css`

CSS'i `wp_add_inline_style` aracılığıyla sitenin `<head>` kısmına ekler. CSS, `gratis_ai_agent_custom_css` seçeneğinde saklanır ve ability sıfırlandığında temiz bir şekilde kaldırılır.

**Parametreler**

| Parametre | Tip | Gerekli mi? | Açıklama |
|---|---|---|---|
| `css` | string | Evet | Enjekte edilecek geçerli CSS kodu |
| `label` | string | Hayır | Bu CSS bloğu için insan tarafından okunabilir etiket, hata günlüklerinde kullanılır. Varsayılan `"agent-injected"` |
| `replace` | boolean | Hayır | Eğer `true` ise, daha önce enjekte edilen tüm CSS'i değiştirir. Varsayılan `false` (ekler) |

**Örnek**

```json
{
  "css": ":root { --primary: #1a1a2e; --accent: #e94560; } body { font-family: 'Inter', sans-serif; }",
  "label": "brand-colours",
  "replace": false
}
```

**Dönüş** `{ "success": true, "bytes": 96 }`

---

### `add_block_pattern`

WordPress pattern kütüphanesine yeniden kullanılabilir bir blok deseni kaydeder.

**Parametreler**

| Parametre | Tip | Gerekli mi? | Açıklama |
|---|---|---|---|
| `slug` | string | Evet | Desen tanımlayıcısı, örn: `gratis/hero-dark` |
| `title` | string | Evet | Editörde gösterilecek insan tarafından okunabilir desen adı |
| `content` | string | Evet | Desen için serileştirilmiş blok işaretlemesi (HTML) |
| `categories` | array | Hayır | Desen kategorisi slug'ları, örn: `["featured", "hero"]` |
| `description` | string | Hayır | Desen seçicisinde gösterilecek kısa açıklama |
| `keywords` | array | Hayır | Arama anahtar kelimeleri |

**Dönüş** `{ "success": true, "slug": "gratis/hero-dark" }`

---

### `list_block_patterns`

Ajan tarafından kaydedilen tüm blok desenlerini listeler.

**Parametreler** — yok

### `set_site_logo`

Bu fonksiyon, WordPress sitenizin logosunu bir medya kütüphanesi görseli kimliği (attachment ID) veya uzaktan bir resim URL'si ile ayarlamanızı sağlar. Bir URL sağlarsanız, resim indirilir ve Medya Kütüphanesine aktarılır.

**Parametreler**

| Parametre | Tip | Gerekli mi? | Açıklama |
|---|---|---|---|
| `attachment_id` | integer | Hayır | Mevcut bir Medya Kütüphanesi görselinin ID'si |
| `url` | string | Hayır | Logo olarak aktarılacak uzaktan resim URL'si |

`attachment_id` veya `url` seçeneklerinden en az biri sağlanmalıdır.

**Dönüş Değeri** `{ "success": true, "attachment_id": 42 }`

---

### `apply_theme_json_preset`

Aktif temanızın `theme.json` (veya `global-styles`) dosyasına isimlendirilmiş bir renk/tipografi ön ayarını uygular. Ön ayarlar, Gratis AI Agent ekibi tarafından hazırlanan özenle seçilmiş paketlerdir.

**Parametreler**

| Parametre | Tip | Gerekli mi? | Açıklama |
|---|---|---|---|
| `preset` | string | Evet | Ön ayar adı, örneğin: `minimal-dark`, `warm-editorial`, `corporate-blue` |
| `merge` | boolean | Hayır | Eğer `true` ise, mevcut değerleri değiştirerek birleştirir; aksi takdirde üzerine yazar. Varsayılan değeri `false`'dur. |

**Mevcut ön ayarlar**

| Ön Ayar | Açıklama |
|---|---|
| `minimal-dark` | Neredeyse siyah arka plan, beyaz metin, tek bir vurgu rengi |
| `warm-editorial` | Sıcak of-beyaz arka plan, serif başlıklar, toprak tonlu vurgu renkleri |
| `corporate-blue` | Profesyonel tipografi ile lacivert ve beyaz paleti |
| `vibrant-startup` | Parlak geçişler (gradients), yuvarlatılmış köşeler, modern sans-serif yazı tipi |
| `classic-blog` | Nötr griler, rahat satır yüksekliği, geleneksel düzen boşlukları |

**Dönüş Değeri** `{ "success": true, "preset": "minimal-dark" }`

---

## Global Stiller (Global Styles)

Global Stiller yetenekleri, WordPress Global Stiller API'si aracılığıyla tema.json değerlerini okur ve yazar; bu da sitenin tüm blokları ve şablonları için geçerlidir.

### `get_global_styles`

Mevcut global stiller yapılandırmasını döndürür.

**Parametreler**

| Parametre | Tip | Gerekli mi? | Açıklama |
|---|---|---|---|
| `path` | string | Hayır | Belirli bir değere JSON gösterici (pointer), örneğin `/color/palette` veya `/typography/fontSizes`. Eğer belirtilmezse tüm nesneyi döndürür. |

**Dönüş Değeri** Tüm global stiller nesnesini veya `path`'teki değeri döndürür.

---

### `set_global_styles`

Global stiller yapılandırmasındaki bir veya daha fazla değeri günceller.

**Parametreler**

| Parametre | Tip | Gerekli mi? | Açıklama |
|---|---|---|---|
| `path` | string | Evet | Ayarlanacak değer için JSON gösterici, örneğin `/color/palette` |
| `value` | any | Evet | Yeni değer |

**Örnek** — Palete bir renk ekleme

```json
{
  "path": "/color/palette",
  "value": [
    { "slug": "primary", "color": "#1a1a2e", "name": "Primary" },
    { "slug": "accent",  "color": "#e94560", "name": "Accent" }
  ]
}
```

**Dönüş Değeri** `{ "success": true, "path": "/color/palette" }`

---

### `reset_global_styles`

Tüm ajan tarafından uygulanan global stil değişikliklerini sıfırlar ve tema varsayılanlarını geri yükler.

**Parametreler** — yok

**Dönüş Değeri** `{ "success": true }`

---

## Navigasyon Menüleri (Navigation Menus)

Navigasyon Menüsü yetenekleri, WordPress navigasyon menülerini oluşturur ve yönetir.

### `create_menu`

Yeni bir WordPress navigasyon menüsü oluşturur.

**Parametreler**

| Parametre | Tip | Gerekli mi? | Açıklama |
|---|---|---|---|
| `name` | string | Evet | Menü adı, örneğin: `Primary Navigation` |
| `location` | string | Hayır | Bu menüyü atayacağınız tema konumu, örneğin: `primary` |

**Dönüş Değeri** `{ "success": true, "menu_id": 7 }`

---

### `update_menu`

Bir menünün adını değiştirir veya onu bir tema konumuna yeniden atar.

**Parametreler**

| Parametre | Tip | Gerekli mi? | Açıklama |
|---|---|---|---|
| `menu_id` | integer | Evet | Güncellenecek menünün ID'si |
| `name` | string | Hayır | Yeni menü adı |
| `location` | string | Hayır | Atanacak veya yeniden atayacağınız tema konumu |

**Dönüş Değeri** `{ "success": true, "menu_id": 7 }`

---

### `add_menu_item`

Mevcut bir navigasyon menüsüne bir öğe ekler.

**Parametreler**

| Parametre | Tip | Gerekli mi? | Açıklama |
|---|---|---|---|
| `menu_id` | integer | Evet | Hedef menünün ID'si |
| `type` | string | Evet | Öğe tipi: `custom`, `post_type` veya `taxonomy` |
| `title` | string | Hayır | Menü öğesi etiketi ( `custom` tipi için gereklidir) |
| `url` | string | Hayır | `custom` öğeleri için URL |
| `object_id` | integer | Hayır | `post_type`/`taxonomy` öğeleri için Post ID veya terim ID |
| `parent_id` | integer | Hayır | Bu öğeyi içine yerleştireceğiniz menü öğesi ID'si |
| `position` | integer | Hayır | Menüdeki sıfırdan başlayan pozisyon |

**Dönüş Değeri** `{ "success": true, "item_id": 12 }`

---

### `remove_menu_item`

Bir menüden bir öğeyi kaldırır.

**Parametreler**

| Parametre | Tip | Gerekli mi? | Açıklama |
|---|---|---|---|
| `item_id` | integer | Evet | Kaldırılacak menü öğesinin ID'si |

**Dönüş Değeri** `{ "success": true, "item_id": 12 }`

---

### `list_menus`

Atanmış tema konumları dahil tüm WordPress navigasyon menülerini listeler.

**Parametreler** — yok

**Dönüş Değeri**

```json
{
  "menus": [
    {
      "menu_id": 7,
      "name": "Primary Navigation",
      "location": "primary",
      "item_count": 5
    }
  ]
}
```

---

## Seçenek Yönetimi (Options Management)

Seçenek yetenekleri, `get_option` / `update_option` aracılığıyla WordPress seçeneklerini okur ve yazar. Kritik ayarların yanlışlıkla değiştirilmesini önlemek için yerleşik bir güvenlik blok listesi bulunur.

### `get_option`

Bir WordPress seçeneğini okur.

**Parametreler**

| Parametre | Tip | Gerekli mi? | Açıklama |
|---|---|---|---|
| `option_name` | string | Evet | Seçenek anahtarı, örneğin: `blogname` |

**Dönüş Değeri** `{ "option_name": "blogname", "value": "My Site" }`

Eğer `option_name` güvenlik blok listesindeyse bir hata döndürülür.

---

### `set_option`

Bir WordPress seçeneğini yazar.

**Parametreler**

| Parametre | Tip | Gerekli mi? | Açıklama |
|---|---|---|---|
| `option_name` | string | Evet | Seçenek anahtarı |
| `value` | any | Evet | Yeni değer (diziler/nesneler için otomatik olarak serileştirilir) |
| `autoload` | string | Hayır | `"yes"` veya `"no"`. Varsayılan, mevcut autoload ayarını korur. |

Bir seçenek adı güvenlik kara listesinde ise hata döndürülür.

**Dönüş** `{ "success": true, "option_name": "blogname" }`

---

### `delete_option`

WordPress'teki bir seçeneği siler.

**Parametreler**

| Parametre | Tip | Gerekli | Açıklama |
|---|---|---|---|
| `option_name` | string | Evet | Silinecek seçenek anahtarı |

Eğer `option_name` güvenlik kara listesindeyse hata döndürülür.

**Dönüş** `{ "success": true, "option_name": "my_custom_option" }`

---

### `list_options`

Belirli bir desenle eşleşen WordPress seçeneklerini listeler.

**Parametreler**

| Parametre | Tip | Gerekli | Açıklama |
|---|---|---|---|
| `pattern` | string | Hayır | Seçenek adlarını filtrelemek için SQL LIKE deseni, örneğin `gratis_%`. Belirtilmezse tüm seçenekler döner (büyük veritabanlarında dikkatli kullanın). |
| `limit` | integer | Hayır | Maksimum sonuç sayısı. Varsayılan `50`, maksimum `500` |

**Dönüş**

```json
{
  "options": [
    { "option_name": "gratis_ai_agent_version", "autoload": "yes" }
  ],
  "total": 1
}
```

---

## İçerik Yönetimi

İçerik Yönetimi yetenekleri WordPress gönderileri ve sayfaları oluşturur ve düzenler. Oluşturulan içeriğin sonraki adımlarda referans alınabilmesi için Gönderi Kimlikleri (Post IDs) döndürülür.

### `create_post`

Yeni bir WordPress gönderisi, sayfası veya özel gönderi türü girişi oluşturur.

**Parametreler**

| Parametre | Tip | Gerekli | Açıklama |
|---|---|---|---|
| `title` | string | Evet | Gönderi başlığı |
| `content` | string | Hayır | Gönderi içeriği — düz metin, HTML veya serileştirilmiş blok işaretleme kabul edilir |
| `status` | string | Hayır | `draft`, `publish`, `pending`, `private`. Varsayılan `draft` |
| `post_type` | string | Hayır | Gönderi türü slug'ı, örneğin `post`, `page` veya herhangi bir kayıtlı CPT. Varsayılan `post` |
| `excerpt` | string | Hayır | Arşivlerde ve arama sonuçlarında gösterilecek kısa özet |
| `categories` | array | Hayır | Atanacak kategori adları veya kimlikleri dizisi |
| `tags` | array | Hayır | Atanacak etiket adları veya kimlikleri dizisi |
| `author` | integer | Hayır | Gönderi yazarı olarak ayarlanacak WordPress kullanıcı ID'si. Varsayılan mevcut kullanıcıdır |
| `date` | string | Hayır | Yayınlama tarihi ISO 8601 formatında, örneğin `2026-05-01T09:00:00` |
| `page_template` | string | Hayır | Bu gönderiye veya sayfaya atanacak şablon dosyası, örneğin `page-full-width.php`. `post_type` `page` ise veya sayfa şablonlarını destekleyen bir CPT ise anlamlıdır. |

**Örnek**

```json
{
  "title": "Yeni Sitemize Hoş Geldiniz",
  "content": "<!-- wp:paragraph --><p>Merhaba dünya!</p><!-- /wp:paragraph -->",
  "status": "publish",
  "post_type": "page",
  "page_template": "page-full-width.php"
}
```

**Dönüş** `{ "success": true, "post_id": 42, "permalink": "https://example.com/welcome/" }`

---

### `update_post`

Mevcut bir WordPress gönderisini veya sayfasını günceller.

**Parametreler**

| Parametre | Tip | Gerekli | Açıklama |
|---|---|---|---|
| `post_id` | integer | Evet | Güncellenecek gönderinin ID'si |
| `title` | string | Hayır | Yeni gönderi başlığı |
| `content` | string | Hayır | Yeni gönderi içeriği |
| `status` | string | Hayır | Yeni durum: `draft`, `publish`, `pending`, `private` |
| `excerpt` | string | Hayır | Yeni kısa özet |
| `categories` | array | Hayır | Tam kategori listesini bu isimler veya kimlikleri dizisiyle değiştirin |
| `tags` | array | Hayır | Tam etiket listesini bu isimler veya kimlikleri dizisiyle değiştirin |
| `page_template` | string | Hayır | Bu gönderiye veya sayfaya atanacak yeni şablon dosyası, örneğin `page-full-width.php`. Şablon atamasını kaldırmak ve tema varsayılanına geri dönmek için boş bir dize geçin. |

**Örnek** — oluşturduktan sonra şablonu değiştirme

```json
{
  "post_id": 42,
  "page_template": "page-full-width.php"
}
```

**Dönüş** `{ "success": true, "post_id": 42 }`

---

### `batch_create_posts`

Tek bir yetenek çağrısında birden fazla gönderi oluşturur, site kurulumları veya toplu içerik aktarımları sırasında gidiş-dönüş sayısını azaltır. Gönderiler sırayla oluşturulur; biri başarısız olursa diğerleri devam eder ve başarısızlık sonuç dizisinde bildirilir.

**Parametreler**

| Parametre | Tip | Gerekli | Açıklama |
|---|---|---|---|
| `posts` | array | Evet | Her biri `create_post` için aynı parametreleri kabul eden gönderi nesneleri dizisi |
| `stop_on_error` | boolean | Hayır | `true` ise, ilk başarısızlık sonrası işlemi durdur. Varsayılan `false` |

**Örnek**

```json
{
  "posts": [
    {
      "title": "Hakkımızda",
      "post_type": "page",
      "status": "publish",
      "page_template": "page-full-width.php"
    },
    {
      "title": "Hizmetlerimiz",
      "post_type": "page",
      "status": "publish"
    },
    {
      "title": "İletişim",
      "post_type": "page",
      "status": "publish"
    }
  ]
}
```

**Dönüş**

```json
{
  "created": 3,
  "failed": 0,
  "results": [
    { "success": true, "post_id": 42, "title": "Hakkımızda" },
    { "success": true, "post_id": 43, "title": "Hizmetlerimiz" },
    { "success": true, "post_id": 44, "title": "İletişim" }
  ]
}
```

---

### `set_featured_image`

Mevcut bir gönderiye veya sayfaya öne çıkan görsel (gönderi küçük resmi) atar. Mevcut bir Medya Kütüphanesi ekine ID'sini veya uzak bir resim URL'sini kabul eder; bir URL sağlandığında, resim otomatik olarak indirilir ve içe aktarılır.

**Parametreler**

| Parametre | Tip | Gerekli | Açıklama |
|---|---|---|---|
| `post_id` | integer | Evet | Güncellenecek gönderi veya sayfanın ID'si |
| `attachment_id` | integer | Hayır | Mevcut bir Medya Kütüphanesi ekinin ID'si |
| `url` | string | Hayır | Öne çıkan görsel olarak içe aktarılacak ve ayarlanacak uzak resim URL'si |
| `alt_text` | string | Hayır | Bir URL'den içe aktarılırsa, eklenmesi gereken alternatif metin (Alt text) |

Ya `attachment_id` ya da `url` sağlanmalıdır.

**Dönüş** `{ "success": true, "post_id": 42, "attachment_id": 17 }`

---

### `create_contact_form`

Aktif form eklentisini (Contact Form 7, WPForms, Fluent Forms veya kurulu olana bağlı olarak Gravity Forms) kullanarak bir iletişim formu oluşturur. Herhangi bir gönderiye veya sayfaya gömülebilen kısa kod döndürür.

**Parametreler**

## Görsel İnceleme

Görsel İnceleme yetenekleri, ajanın canlı sayfaların ekran görüntülerini almasını ve analiz etmesini sağlar. Bu sayede herhangi bir tarayıcı eklentisine ihtiyaç duymadan otonom tasarım incelemesi, öncesi/sonrası karşılaştırmaları ve görsel regresyon kontrolleri yapabilirsiniz.

### `capture_screenshot`

Bu özellik, sunucu tarafında çalışan bir headless browser kullanarak verilen bir URL'deki WordPress sayfasının ekran görüntüsünü alır. Görüntü Medya Kütüphanesine kaydedilir ve bir CDN URL'si döndürülür.

**Parametreler**

| Parametre | Tip | Zorunlu mu? | Açıklama |
|---|---|---|---|
| `url` | string | Evet | Ekran görüntüsü alınacak sayfanın tam URL'si, örneğin: `https://example.com/about/` |
| `width` | integer | Hayır | Görüntüleme penceresi genişliği piksel cinsinden. Varsayılan: `1280` |
| `height` | integer | Hayır | Görüntüleme penceresi yüksekliği piksel cinsinden. Varsayılan: `800` |
| `full_page` | boolean | Hayır | Sadece görüntüleme alanını değil, tüm kaydırılabilir sayfayı yakalayın. Varsayılan: `false` |
| `delay_ms` | integer | Hayır | Sayfa yüklendikten sonra yakalama öncesi bekleyeceğiniz milisaniye. Animasyonlu içerikler için kullanışlıdır. Varsayılan: `500` |
| `label` | string | Hayır | Medya Kütüphanesindeki eklemede saklanacak insan tarafından okunabilir etiket. |

**Dönüş Değeri**

```json
{
  "success": true,
  "attachment_id": 88,
  "url": "https://example.com/wp-content/uploads/2026/04/screenshot-about.png",
  "width": 1280,
  "height": 800
}
```

---

### `compare_screenshots`

Bu özellik iki ekran görüntüsünü alır ve bir görsel fark puanı ile değiştirilen bölgeleri vurgulayan bir fark görüntüsü döndürür. Bir tasarım değişikliğinin beklenen sonucu üretip üretmediğini doğrulamak veya istenmeyen geri dönüşleri tespit etmek için kullanışlıdır.

**Parametreler**

| Parametre | Tip | Zorunlu mu? | Açıklama |
|---|---|---|---|
| `before_url` | string | Evet | "Önce" durumu olarak yakalanacak sayfanın URL'si |
| `after_url` | string | Evet | "Sonra" durumu olarak yakalanacak sayfanın URL'si. Zaman içinde karşılaştırma yapılıyorsa aynı URL olabilir. |
| `width` | integer | Hayır | Her iki yakalama için de görüntüleme penceresi genişliği. Varsayılan: `1280` |
| `threshold` | float | Hayır | Piksel fark eşiği (0.0–1.0). Bu tolerans içindeki pikseller değişmemiş kabul edilir. Varsayılan: `0.1` |

**Dönüş Değeri**

```json
{
  "success": true,
  "diff_score": 0.04,
  "changed_pixels": 2340,
  "total_pixels": 1024000,
  "diff_attachment_id": 91,
  "diff_url": "https://example.com/wp-content/uploads/2026/04/diff-about.png"
}
```

`diff_score` `0.0` ise görünür bir değişiklik yoktur; `1.0` ise her piksel değişmiştir.

---

### `review_page_design`

Bu özellik, bir sayfanın ekran görüntüsünü alır ve görsel analiz için dil modeline gönderir. Düzen, tipografi, renk kullanımı ve erişilebilirlik konularını kapsayan yapılandırılmış bir değerlendirme döndürür.

**Parametreler**

| Parametre | Tip | Zorunlu mu? | Açıklama |
|---|---|---|---|
| `url` | string | Evet | İncelemek için sayfanın tam URL'si |
| `focus` | string | Hayır | Vurgulanacak inceleme alanlarının virgülle ayrılmış listesi: `layout`, `typography`, `colour`, `accessibility`, `mobile`. Varsayılan: tüm alanlar |
| `width` | integer | Hayır | Görüntüleme penceresi genişliği. Varsayılan: `1280` |

**Dönüş Değeri**

```json
{
  "success": true,
  "screenshot_url": "https://example.com/wp-content/uploads/2026/04/review-about.png",
  "assessment": {
    "overall": "Sayfa yapısı temiz ve okunabilir. İki erişilebilirlik sorunu tespit edildi.",
    "layout": "İyi görsel hiyerarşi. Kahraman bölümü belirgin.",
    "typography": "Gövde metni 15px — okunabilirlik için 16px'e çıkarmayı düşünün.",
    "colour": "CTA düğmesindeki kontrast oranı (#4a90e2 üzerinde #fff) 3.1:1 — WCAG AA eşiği olan 4.5:1'in altında.",
    "accessibility": ["CTA düğmesinde düşük kontrast", "Kahraman görselinde eksik alt metin"],
    "suggestions": ["WCAG AA'yı geçmek için CTA düğmesini #1a5cb0 olarak koyulaştırın", "Kahraman görseline açıklayıcı alt metin ekleyin"]
  }
}
```

---

## Kurulabilir Yetenekler

Kurulabilir Yetenekler Kaydı, ajanı WordPress eklentileri olarak dağıtılan ek yetenek paketleriyle genişletmenize olanak tanır. Her paket, standart yetenek API'sini kullanarak bir veya daha fazla yeteneği kaydeder.

### `list_available_abilities`

Kayıttan kurulabilecek yetenek paketlerinin kataloğunu döndürür.

**Parametreler**

| Parametr | Tip | Şartlı | Açıklama |
|---|---|---|---|
| `category` | string | Hayır | Kategoriye göre filtreleme yapın: `ecommerce`, `seo`, `media`, `social`, `developer` |

**Dönüş Değeri (Returns)**

```json
{
  "packs": [
    {
      "slug": "gratis-ai-agent-woocommerce",
      "name": "WooCommerce Abilities",
      "category": "ecommerce",
      "version": "1.0.0",
      "abilities": ["create_product", "update_pricing", "manage_inventory"],
      "installed": false
    }
  ]
}
```

---

### `install_ability`

Kayıttan bir yetenek paketini indirir ve etkinleştirir.

**Parametreler**

| Parametre | Tip | Şartlı | Açıklama |
|---|---|---|---|
| `slug` | string | Evet | Yetenek paketi eklentisinin slug'ı (kısaltılmış adı) |

**Dönüş Değeri** `{ "success": true, "slug": "gratis-ai-agent-woocommerce", "abilities_added": 3 }`

---

### `recommend_plugin`

İstenen kullanım senaryosu için yetenek kaydını sorgular ve isteğe bağlı olarak onu kurar.

**Parametreler**

| Parametre | Tip | Şartlı | Açıklama |
|---|---|---|---|
| `description` | string | Evet | İstenen işlevselliğin doğal dildeki açıklaması |
| `install` | boolean | Hayır | Eğer `true` ise, önerilen eklentiyi hemen kurar. Varsayılan değeri `false`'dur |

**Örnek**

```json
{
  "description": "Dosya yükleme desteği ve spam koruması olan bir iletişim formu istiyorum",
  "install": false
}
```

**Dönüş Değeri**

```json
{
  "recommendation": {
    "slug": "contact-form-7",
    "name": "Contact Form 7",
    "reason": "Yaygın olarak kullanılıyor, dosya yüklemeyi destekliyor ve spam filtreleme için Akismet ile entegre.",
    "alternatives": ["wpforms-lite", "fluent-forms"]
  }
}
```
