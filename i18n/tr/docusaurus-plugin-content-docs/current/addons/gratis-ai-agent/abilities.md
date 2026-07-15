---
title: Yetenekler Referansı
sidebar_position: 2
_i18n_hash: 1a83460648ea789162af417c6b11eecc
---
# Abilities Referansı

Abilities, Gratis AI Agent’ın WordPress kurulumunuzda çağırabileceği atomik eylemlerdir. Her ability, bir JSON şeması sunan kayıtlı bir PHP sınıfıdır — agent, hangi parametrelerin gerekli olduğunu ve ability’nin ne döndürdüğünü anlamak için bu şemayı çalışma zamanında okur.

Bu sayfa, Gratis AI Agent v1.9.0 ile birlikte gelen tüm abilities öğelerini belgeler.

---

## Özel Gönderi Türleri {#custom-post-types}

Bu abilities, agent aracılığıyla kaydedilen özel gönderi türlerini (CPT’ler) yönetir. Kayıtlar WordPress seçenekler tablosunda kalıcı olarak saklanır; böylece plugin devre dışı bırakılıp yeniden etkinleştirildiğinde korunurlar.

### `register_post_type` {#registerposttype}

Yeni bir özel gönderi türü kaydeder.

**Parametreler**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `slug` | string | Yes | Gönderi türü anahtarı (en fazla 20 karakter, büyük harf yok, boşluk yok) |
| `singular_label` | string | Yes | İnsan tarafından okunabilir tekil ad, örn. `Portfolio Item` |
| `plural_label` | string | Yes | İnsan tarafından okunabilir çoğul ad, örn. `Portfolio Items` |
| `public` | boolean | No | Gönderi türünün herkese açık erişilebilir olup olmadığı. Varsayılan `true` |
| `supports` | array | No | Desteklenecek özellikler: `title`, `editor`, `thumbnail`, `excerpt`, `comments`, `revisions`, `custom-fields`. Varsayılan `["title","editor"]` |
| `has_archive` | boolean | No | Gönderi türü arşiv sayfasının etkin olup olmadığı. Varsayılan `false` |
| `menu_icon` | string | No | Yönetici menüsü simgesi için Dashicons sınıfı veya URL. Varsayılan `"dashicons-admin-post"` |
| `rewrite_slug` | string | No | Gönderi türü için URL slug’ı. Varsayılan olarak `slug` kullanılır |

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

**Döndürür** `{ "success": true, "slug": "portfolio" }`

---

### `list_post_types` {#listposttypes}

Agent tarafından kaydedilen tüm özel gönderi türlerini döndürür.

**Parametreler** — yok

**Döndürür**

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

### `delete_post_type` {#deleteposttype}

Agent tarafından daha önce kaydedilmiş bir özel gönderi türünün kaydını kaldırır. Bu türdeki mevcut gönderiler veritabanında kalır, ancak artık gönderi türü üzerinden erişilebilir olmaz.

**Parametreler**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `slug` | string | Yes | Kaldırılacak gönderi türü anahtarı |

**Döndürür** `{ "success": true, "slug": "portfolio" }`

---

## Özel Taksonomiler {#custom-taxonomies}

Bu abilities, özel taksonomileri yönetir. CPT’ler gibi, taksonomi kayıtları da kalıcı olarak saklanır.

### `register_taxonomy` {#registertaxonomy}

Yeni bir özel taksonomi kaydeder.

**Parametreler**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `slug` | string | Yes | Taksonomi anahtarı (en fazla 32 karakter) |
| `singular_label` | string | Yes | İnsan tarafından okunabilir tekil ad, örn. `Project Category` |
| `plural_label` | string | Yes | İnsan tarafından okunabilir çoğul ad, örn. `Project Categories` |
| `post_types` | array | Yes | Bu taksonominin ekleneceği gönderi türü slug’ları |
| `hierarchical` | boolean | No | Kategori tarzı için `true`, etiket tarzı için `false`. Varsayılan `true` |
| `public` | boolean | No | Terimlerin herkese açık erişilebilir olup olmadığı. Varsayılan `true` |
| `rewrite_slug` | string | No | Taksonomi için URL slug’ı. Varsayılan olarak `slug` kullanılır |

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

**Döndürür** `{ "success": true, "slug": "project-category" }`

---

### `list_taxonomies` {#listtaxonomies}

Agent tarafından kaydedilen tüm özel taksonomileri döndürür.

**Parametreler** — yok

**Döndürür**

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

### `delete_taxonomy` {#deletetaxonomy}

Agent tarafından daha önce kaydedilmiş bir özel taksonominin kaydını kaldırır.

**Parametreler**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `slug` | string | Yes | Kaldırılacak taksonomi anahtarı |

**Döndürür** `{ "success": true, "slug": "project-category" }`

---

## Tasarım Sistemi {#design-system}

Tasarım sistemi abilities, WordPress sitesinin görsel sunumunu değiştirir — özel CSS’ten blok desenlerine ve site logosuna kadar.

### `inject_custom_css` {#injectcustomcss}

`wp_add_inline_style` aracılığıyla sitenin `<head>` bölümüne CSS ekler. CSS, `gratis_ai_agent_custom_css` seçeneğinde saklanır ve ability sıfırlandığında temiz şekilde kuyruktan çıkarılır.

**Parametreler**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `css` | string | Yes | Enjekte edilecek geçerli CSS |
| `label` | string | No | Bu CSS bloğu için insan tarafından okunabilir etiket; hata ayıklama günlüklerinde kullanılır. Varsayılan `"agent-injected"` |
| `replace` | boolean | No | `true` ise, daha önce enjekte edilmiş tüm CSS’i değiştirir. Varsayılan `false` (sona ekler) |

**Örnek**

```json
{
  "css": ":root { --primary: #1a1a2e; --accent: #e94560; } body { font-family: 'Inter', sans-serif; }",
  "label": "brand-colours",
  "replace": false
}
```

**Döndürür** `{ "success": true, "bytes": 96 }`

---

### `add_block_pattern` {#addblockpattern}

WordPress desen kütüphanesinde yeniden kullanılabilir bir blok deseni kaydeder.

**Parametreler**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `slug` | string | Yes | Desen tanımlayıcısı, örn. `gratis/hero-dark` |
| `title` | string | Yes | Düzenleyicide gösterilen insan tarafından okunabilir desen adı |
| `content` | string | Yes | Desen için serileştirilmiş blok işaretlemesi (HTML) |
| `categories` | array | No | Desen kategorisi slug’ları, örn. `["featured", "hero"]` |
| `description` | string | No | Desen seçicide gösterilen kısa açıklama |
| `keywords` | array | No | Arama anahtar kelimeleri |

**Döndürür** `{ "success": true, "slug": "gratis/hero-dark" }`

---

### `list_block_patterns` {#listblockpatterns}

Agent tarafından kaydedilen tüm blok desenlerini listeler.

**Parametreler** — yok

**Döndürür**

```json
{
  "patterns": [
    {
      "slug": "gratis/hero-dark",
      "title": "Dark Hero",
      "categories": ["hero"]
    }
  ]
}
```

---

### `set_site_logo` {#setsitelogo}

WordPress site logosunu belirtilen bir ek ID'sine veya uzak bir görsel URL'sine ayarlar. Bir URL sağlandığında, görsel indirilir ve Ortam Kütüphanesi'ne içe aktarılır.

**Parametreler**

| Parametre | Tür | Gerekli | Açıklama |
|---|---|---|---|
| `attachment_id` | integer | Hayır | Mevcut bir Ortam Kütüphanesi ekinin ID'si |
| `url` | string | Hayır | İçe aktarılıp logo olarak ayarlanacak uzak görsel URL'si |

`attachment_id` veya `url` değerlerinden biri sağlanmalıdır.

**Döndürür** `{ "success": true, "attachment_id": 42 }`

---

### `apply_theme_json_preset` {#applythemejsonpreset}

Etkin temanın `theme.json` dosyasına (veya `global-styles` öğesine) adlandırılmış bir renk/tipografi ön ayarı uygular. Ön ayarlar, Gratis AI Agent ekibi tarafından sürdürülen özenle hazırlanmış paketlerdir.

**Parametreler**

| Parametre | Tür | Gerekli | Açıklama |
|---|---|---|---|
| `preset` | string | Evet | Ön ayar adı, ör. `minimal-dark`, `warm-editorial`, `corporate-blue` |
| `merge` | boolean | Hayır | `true` ise değiştirmek yerine mevcut değerlerle birleştirir. Varsayılan `false` |

**Kullanılabilir ön ayarlar**

| Ön ayar | Açıklama |
|---|---|
| `minimal-dark` | Neredeyse siyah arka plan, beyaz metin, tek vurgu rengi |
| `warm-editorial` | Sıcak kırık beyaz arka plan, serif başlıklar, toprak tonlarında vurgu renkleri |
| `corporate-blue` | Profesyonel tipografiyle lacivert ve beyaz palet |
| `vibrant-startup` | Parlak gradyanlar, yuvarlatılmış köşeler, modern sans-serif yazı tipi |
| `classic-blog` | Nötr griler, rahat satır yüksekliği, geleneksel yerleşim aralığı |

**Döndürür** `{ "success": true, "preset": "minimal-dark" }`

---

## Genel Stiller {#global-styles}

Genel Stiller yetenekleri, WordPress Genel Stiller API'si aracılığıyla theme.json değerlerini okur ve yazar; site genelinde tüm blokları ve şablonları etkiler.

### `get_global_styles` {#getglobalstyles}

Geçerli genel stiller yapılandırmasını döndürür.

**Parametreler**

| Parametre | Tür | Gerekli | Açıklama |
|---|---|---|---|
| `path` | string | Hayır | Belirli bir değere yönelik JSON işaretçisi, ör. `/color/palette` veya `/typography/fontSizes`. Atlanırsa tüm nesneyi döndürür. |

**Döndürür** tam genel stiller nesnesini veya `path` konumundaki değeri.

---

### `set_global_styles` {#setglobalstyles}

Genel stiller yapılandırmasındaki bir veya daha fazla değeri günceller.

**Parametreler**

| Parametre | Tür | Gerekli | Açıklama |
|---|---|---|---|
| `path` | string | Evet | Ayarlanacak değere yönelik JSON işaretçisi, ör. `/color/palette` |
| `value` | any | Evet | Yeni değer |

**Örnek** — palete bir renk ekle

```json
{
  "path": "/color/palette",
  "value": [
    { "slug": "primary", "color": "#1a1a2e", "name": "Primary" },
    { "slug": "accent",  "color": "#e94560", "name": "Accent" }
  ]
}
```

**Döndürür** `{ "success": true, "path": "/color/palette" }`

---

### `reset_global_styles` {#resetglobalstyles}

Agent tarafından uygulanmış tüm genel stil değişikliklerini sıfırlayarak tema varsayılanlarını geri yükler.

**Parametreler** — yok

**Döndürür** `{ "success": true }`

---

## Gezinme Menüleri {#navigation-menus}

Gezinme Menüsü yetenekleri, WordPress gezinme menüleri ve bunların öğelerini oluşturur ve yönetir.

### `create_menu` {#createmenu}

Yeni bir WordPress gezinme menüsü oluşturur.

**Parametreler**

| Parametre | Tür | Gerekli | Açıklama |
|---|---|---|---|
| `name` | string | Evet | Menü adı, ör. `Primary Navigation` |
| `location` | string | Hayır | Bu menünün atanacağı tema konumu, ör. `primary` |

**Döndürür** `{ "success": true, "menu_id": 7 }`

---

### `update_menu` {#updatemenu}

Bir menüyü yeniden adlandırır veya bir tema konumuna yeniden atar.

**Parametreler**

| Parametre | Tür | Gerekli | Açıklama |
|---|---|---|---|
| `menu_id` | integer | Evet | Güncellenecek menünün ID'si |
| `name` | string | Hayır | Yeni menü adı |
| `location` | string | Hayır | Atanacak veya yeniden atanacak tema konumu |

**Döndürür** `{ "success": true, "menu_id": 7 }`

---

### `add_menu_item` {#addmenuitem}

Mevcut bir gezinme menüsüne bir öğe ekler.

**Parametreler**

| Parametre | Tür | Gerekli | Açıklama |
|---|---|---|---|
| `menu_id` | integer | Evet | Hedef menünün ID'si |
| `type` | string | Evet | Öğe türü: `custom`, `post_type` veya `taxonomy` |
| `title` | string | Hayır | Menü öğesi için etiket (`custom` türü için gerekli) |
| `url` | string | Hayır | `custom` öğeleri için URL |
| `object_id` | integer | Hayır | `post_type`/`taxonomy` öğeleri için gönderi ID'si veya terim ID'si |
| `parent_id` | integer | Hayır | Bu öğenin altına yerleştirileceği menü öğesi ID'si |
| `position` | integer | Hayır | Menüde sıfır tabanlı konum |

**Döndürür** `{ "success": true, "item_id": 12 }`

---

### `remove_menu_item` {#removemenuitem}

Bir gezinme menüsünden bir öğeyi kaldırır.

**Parametreler**

| Parametre | Tür | Gerekli | Açıklama |
|---|---|---|---|
| `item_id` | integer | Evet | Kaldırılacak menü öğesi ID'si |

**Döndürür** `{ "success": true, "item_id": 12 }`

---

### `list_menus` {#listmenus}

Atanmış tema konumları dahil tüm WordPress gezinme menülerini listeler.

**Parametreler** — yok

**Döndürür**

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

## Seçenek Yönetimi {#options-management}

Seçenek yetenekleri, `get_option` / `update_option` aracılığıyla WordPress seçeneklerini okur ve yazar. Yerleşik bir güvenlik engelleme listesi, kritik ayarların yanlışlıkla değiştirilmesini önler.

### `get_option` {#getoption}

Bir WordPress seçeneğini okur.

**Parametreler**

| Parametre | Tür | Gerekli | Açıklama |
|---|---|---|---|
| `option_name` | string | Evet | Seçenek anahtarı, ör. `blogname` |

**Döndürür** `{ "option_name": "blogname", "value": "My Site" }`

`option_name` güvenlik engelleme listesindeyse hata döndürür.

---

### `set_option` {#setoption}

Bir WordPress seçeneği yazar.

**Parametreler**

| Parametre | Tür | Gerekli | Açıklama |
|---|---|---|---|
| `option_name` | string | Evet | Seçenek anahtarı |
| `value` | any | Evet | Yeni değer (diziler/nesneler için otomatik olarak serileştirilir) |
| `autoload` | string | Hayır | `"yes"` veya `"no"`. Varsayılan, mevcut autoload ayarını korur |

`option_name` güvenlik engelleme listesindeyse bir hata döndürür.

**Döndürür** `{ "success": true, "option_name": "blogname" }`

---

### `delete_option` {#deleteoption}

Bir WordPress seçeneğini siler.

**Parametreler**

| Parametre | Tür | Gerekli | Açıklama |
|---|---|---|---|
| `option_name` | string | Evet | Silinecek seçenek anahtarı |

`option_name` güvenlik engelleme listesindeyse bir hata döndürür.

**Döndürür** `{ "success": true, "option_name": "my_custom_option" }`

---

### `list_options` {#listoptions}

Bir desenle eşleşen WordPress seçeneklerini listeler.

**Parametreler**

| Parametre | Tür | Gerekli | Açıklama |
|---|---|---|---|
| `pattern` | string | Hayır | Seçenek adlarını filtrelemek için SQL LIKE deseni, ör. `gratis_%`. Atlanırsa tüm seçenekleri döndürür (büyük veritabanlarında dikkatli kullanın). |
| `limit` | integer | Hayır | Maksimum sonuç sayısı. Varsayılan `50`, en fazla `500` |

**Döndürür**

```json
{
  "options": [
    { "option_name": "gratis_ai_agent_version", "autoload": "yes" }
  ],
  "total": 1
}
```

---

## İçerik Yönetimi {#content-management}

İçerik Yönetimi yetenekleri WordPress yazıları ve sayfaları oluşturur ve düzenler. Yazı ID’leri döndürülür, böylece çok yetenekli planlardaki sonraki adımlar oluşturulan içeriğe başvurabilir.

### `create_post` {#createpost}

Yeni bir WordPress yazısı, sayfası veya özel yazı türü girdisi oluşturur.

**Parametreler**

| Parametre | Tür | Gerekli | Açıklama |
|---|---|---|---|
| `title` | string | Evet | Yazı başlığı |
| `content` | string | Hayır | Yazı gövdesi — düz metin, HTML veya serileştirilmiş blok işaretlemesini kabul eder |
| `status` | string | Hayır | `draft`, `publish`, `pending`, `private`. Varsayılan `draft` |
| `post_type` | string | Hayır | Yazı türü slug’ı, ör. `post`, `page` veya kayıtlı herhangi bir CPT. Varsayılan `post` |
| `excerpt` | string | Hayır | Arşivlerde ve arama sonuçlarında gösterilen kısa özet |
| `categories` | array | Hayır | Atanacak kategori adları veya ID’lerinden oluşan dizi |
| `tags` | array | Hayır | Atanacak etiket adları veya ID’lerinden oluşan dizi |
| `author` | integer | Hayır | Yazı yazarı olarak ayarlanacak WordPress kullanıcı ID’si. Varsayılan olarak geçerli kullanıcı kullanılır |
| `date` | string | Hayır | ISO 8601 biçiminde yayın tarihi, ör. `2026-05-01T09:00:00` |
| `page_template` | string | Hayır | Bu yazıya veya sayfaya atanacak şablon dosyası, ör. `page-full-width.php`. Yalnızca `post_type` `page` olduğunda veya sayfa şablonlarını destekleyen bir CPT olduğunda anlamlıdır. |

**Örnek**

```json
{
  "title": "Welcome to Our New Site",
  "content": "<!-- wp:paragraph --><p>Hello world!</p><!-- /wp:paragraph -->",
  "status": "publish",
  "post_type": "page",
  "page_template": "page-full-width.php"
}
```

**Döndürür** `{ "success": true, "post_id": 42, "permalink": "https://example.com/welcome/" }`

---

### `update_post` {#updatepost}

Mevcut bir WordPress yazısını veya sayfasını günceller.

**Parametreler**

| Parametre | Tür | Gerekli | Açıklama |
|---|---|---|---|
| `post_id` | integer | Evet | Güncellenecek yazının ID’si |
| `title` | string | Hayır | Yeni yazı başlığı |
| `content` | string | Hayır | Yeni yazı gövdesi |
| `status` | string | Hayır | Yeni durum: `draft`, `publish`, `pending`, `private` |
| `excerpt` | string | Hayır | Yeni özet |
| `categories` | array | Hayır | Tam kategori listesini bu adlar veya ID’ler dizisiyle değiştir |
| `tags` | array | Hayır | Tam etiket listesini bu adlar veya ID’ler dizisiyle değiştir |
| `page_template` | string | Hayır | Bu yazıya veya sayfaya atanacak yeni şablon dosyası, ör. `page-full-width.php`. Şablon atamasını kaldırıp theme varsayılanına dönmek için boş bir string geçirin. |

**Örnek** — oluşturulduktan sonra şablonu değiştir

```json
{
  "post_id": 42,
  "page_template": "page-full-width.php"
}
```

**Döndürür** `{ "success": true, "post_id": 42 }`

---

### `batch_create_posts` {#batchcreateposts}

Tek bir yetenek çağrısında birden çok yazı oluşturur; site oluşturma veya toplu içerik içe aktarma sırasında gidiş-gelişleri azaltır. Yazılar sırayla oluşturulur; biri başarısız olursa diğerleri devam eder ve hata sonuç dizisinde raporlanır.

**Parametreler**

| Parametre | Tür | Gerekli | Açıklama |
|---|---|---|---|
| `posts` | array | Evet | Her biri `create_post` ile aynı parametreleri kabul eden yazı nesneleri dizisi |
| `stop_on_error` | boolean | Hayır | `true` ise ilk hatadan sonra işlemeyi durdur. Varsayılan `false` |

**Örnek**

```json
{
  "posts": [
    {
      "title": "About Us",
      "post_type": "page",
      "status": "publish",
      "page_template": "page-full-width.php"
    },
    {
      "title": "Services",
      "post_type": "page",
      "status": "publish"
    },
    {
      "title": "Contact",
      "post_type": "page",
      "status": "publish"
    }
  ]
}
```

**Döndürür**

```json
{
  "created": 3,
  "failed": 0,
  "results": [
    { "success": true, "post_id": 42, "title": "About Us" },
    { "success": true, "post_id": 43, "title": "Services" },
    { "success": true, "post_id": 44, "title": "Contact" }
  ]
}
```

---

### `set_featured_image` {#setfeaturedimage}

Mevcut bir yazıya veya sayfaya öne çıkan görsel (yazı küçük resmi) atar. Mevcut bir Media Library ek ID’sini veya uzak bir görsel URL’sini kabul eder; bir URL sağlandığında görsel otomatik olarak indirilir ve içe aktarılır.

**Parametreler**

| Parametre | Tür | Gerekli | Açıklama |
|---|---|---|---|
| `post_id` | integer | Evet | Güncellenecek yazının veya sayfanın ID’si |
| `attachment_id` | integer | Hayır | Mevcut bir Media Library ekinin ID’si |
| `url` | string | Hayır | İçe aktarılıp öne çıkan görsel olarak ayarlanacak uzak görsel URL’si |
| `alt_text` | string | Hayır | Bir URL’den içe aktarılırsa eke uygulanacak alt metin |

`attachment_id` veya `url` değerlerinden biri sağlanmalıdır.

**Döndürür** `{ "success": true, "post_id": 42, "attachment_id": 17 }`

---

### `create_contact_form` {#createcontactform}

Etkin form plugin’ini (kurulu olana bağlı olarak Contact Form 7, WPForms, Fluent Forms veya Gravity Forms) kullanarak bir iletişim formu oluşturur. Herhangi bir yazıya veya sayfaya gömülebilecek bir shortcode döndürür.

**Parametreler**

| Parametre | Tür | Gerekli | Açıklama |
|---|---|---|---|
| `title` | string | Evet | Form plugin yöneticisinde gösterilen form adı |
| `fields` | array | Evet | Form alanlarının sıralı listesi (aşağıdaki Field nesnesine bakın) |
| `recipient` | string | Hayır | Gönderimleri alacak e-posta adresi. Varsayılan olarak WordPress yönetici e-postası kullanılır |
| `subject` | string | Hayır | E-posta konu satırı. Contact Form 7 kullanırken `[your-name]` ve `[your-subject]` yer tutucularını destekler |
| `confirmation_message` | string | Hayır | Başarılı bir gönderimden sonra görüntülenen mesaj. Varsayılan: `"Thank you for your message. We'll be in touch soon."` |

**Field nesnesi**

| Anahtar | Tür | Gerekli | Açıklama |
|---|---|---|---|
| `name` | string | Evet | Dahili alan adı / makine anahtarı |
| `label` | string | Evet | Formda gösterilen, insanlar tarafından okunabilir etiket |
| `type` | string | Evet | `text`, `email`, `tel`, `textarea`, `select`, `checkbox`, `radio`, `file`, `date` |
| `required` | boolean | Hayır | Gönderimden önce alanın doldurulmasının gerekip gerekmediği. Varsayılan `false` |
| `options` | array | Hayır | `select`, `checkbox` ve `radio` alanları için seçenekler |
| `placeholder` | string | Hayır | Metin türü girdiler için yer tutucu metin |

**Örnek**

```json
{
  "title": "Restaurant Booking Enquiry",
  "fields": [
    { "name": "your-name",    "label": "Name",             "type": "text",     "required": true },
    { "name": "your-email",   "label": "Email",            "type": "email",    "required": true },
    { "name": "party-size",   "label": "Party size",       "type": "select",   "options": ["1–2", "3–5", "6–10", "10+"] },
    { "name": "your-message", "label": "Special requests", "type": "textarea", "required": false }
  ],
  "recipient": "bookings@example.com",
  "subject": "New booking enquiry from [your-name]"
}
```

**Döndürür**

```json
{
  "success": true,
  "form_id": 3,
  "shortcode": "[contact-form-7 id=\"3\" title=\"Restaurant Booking Enquiry\"]"
}
```

---

## Görsel İnceleme {#visual-review}

Görsel İnceleme yetenekleri, agent'ın canlı sayfaların ekran görüntülerini yakalayıp analiz etmesini sağlar; herhangi bir tarayıcı uzantısı gerektirmeden otonom tasarım incelemesi, öncesi/sonrası karşılaştırmaları ve görsel regresyon kontrolleri yapılmasına olanak tanır.

### `capture_screenshot` {#capturescreenshot}

Sunucu taraflı headless browser kullanarak belirtilen URL'deki bir WordPress sayfasının ekran görüntüsünü yakalar. Görsel Media Library'ye kaydedilir ve bir CDN URL'si döndürülür.

**Parametreler**

| Parametre | Tür | Gerekli | Açıklama |
|---|---|---|---|
| `url` | string | Evet | Ekran görüntüsü alınacak sayfanın tam URL'si, örn. `https://example.com/about/` |
| `width` | integer | Hayır | Piksel cinsinden viewport genişliği. Varsayılan `1280` |
| `height` | integer | Hayır | Piksel cinsinden viewport yüksekliği. Varsayılan `800` |
| `full_page` | boolean | Hayır | Yalnızca viewport yerine tüm kaydırılabilir sayfayı yakala. Varsayılan `false` |
| `delay_ms` | integer | Hayır | Yakalamadan önce sayfa yüklendikten sonra beklenilecek milisaniye; animasyonlu içerik için yararlıdır. Varsayılan `500` |
| `label` | string | Hayır | Media Library'de ekle birlikte saklanan, insanlar tarafından okunabilir etiket |

**Döndürür**

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

### `compare_screenshots` {#comparescreenshots}

İki ekran görüntüsü alır ve görsel fark skorunun yanı sıra değişen bölgeleri vurgulayan bir fark görseli döndürür. Bir tasarım değişikliğinin beklenen sonucu ürettiğini doğrulamak veya istenmeyen regresyonları tespit etmek için yararlıdır.

**Parametreler**

| Parametre | Tür | Gerekli | Açıklama |
|---|---|---|---|
| `before_url` | string | Evet | "Önce" durumu olarak yakalanacak sayfanın URL'si |
| `after_url` | string | Evet | "Sonra" durumu olarak yakalanacak sayfanın URL'si. Zaman içinde karşılaştırma yapılıyorsa aynı URL olabilir |
| `width` | integer | Hayır | Her iki yakalama için viewport genişliği. Varsayılan `1280` |
| `threshold` | float | Hayır | Piksel farkı eşiği (0.0–1.0). Bu tolerans içindeki pikseller değişmemiş kabul edilir. Varsayılan `0.1` |

**Döndürür**

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

`diff_score` değerinin `0.0` olması görünür değişiklik olmadığı anlamına gelir; `1.0` ise her pikselin değiştiği anlamına gelir.

---

### `review_page_design` {#reviewpagedesign}

Bir sayfanın ekran görüntüsünü yakalar ve görsel analiz için dil modeline gönderir. Düzen, tipografi, renk kullanımı ve erişilebilirlik endişelerini kapsayan yapılandırılmış bir değerlendirme döndürür.

**Parametreler**

| Parametre | Tür | Gerekli | Açıklama |
|---|---|---|---|
| `url` | string | Evet | İncelenecek sayfanın tam URL'si |
| `focus` | string | Hayır | Vurgulanacak inceleme alanlarının virgülle ayrılmış listesi: `layout`, `typography`, `colour`, `accessibility`, `mobile`. Varsayılan: tüm alanlar |
| `width` | integer | Hayır | Viewport genişliği. Varsayılan `1280` |

**Döndürür**

```json
{
  "success": true,
  "screenshot_url": "https://example.com/wp-content/uploads/2026/04/review-about.png",
  "assessment": {
    "overall": "The page structure is clean and readable. Two accessibility issues detected.",
    "layout": "Good visual hierarchy. Hero section is prominent.",
    "typography": "Body text is 15px — consider increasing to 16px for readability.",
    "colour": "Contrast ratio on the CTA button (#fff on #4a90e2) is 3.1:1 — below the WCAG AA threshold of 4.5:1.",
    "accessibility": ["Low contrast on CTA button", "Missing alt text on hero image"],
    "suggestions": ["Darken the CTA button to #1a5cb0 to pass WCAG AA", "Add descriptive alt text to the hero image"]
  }
}
```

---

## Kurulabilir Yetenekler {#installable-abilities}

Installable Abilities Registry, WordPress plugin'leri olarak dağıtılan ek yetenek paketleriyle agent'ı genişletmenizi sağlar. Her paket, standart yetenek API'sini kullanarak bir veya daha fazla yetenek kaydeder.

### `list_available_abilities` {#listavailableabilities}

Registry'den kurulum için mevcut yetenek paketlerinin kataloğunu döndürür.

**Parametreler**

| Parametre | Tür | Gerekli | Açıklama |
|---|---|---|---|
| `category` | string | Hayır | Kategoriye göre filtrele: `ecommerce`, `seo`, `media`, `social`, `developer` |

**Döndürür**

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

### `install_ability` {#installability}

Registry'den bir ability pack indirir ve etkinleştirir.

**Parametreler**

| Parametre | Tür | Gerekli | Açıklama |
|---|---|---|---|
| `slug` | string | Evet | Ability pack plugin slug'ı |

**Döndürür** `{ "success": true, "slug": "gratis-ai-agent-woocommerce", "abilities_added": 3 }`

---

### `recommend_plugin` {#recommendplugin}

Açıklanan bir kullanım durumu için en iyi plugin'i bulmak üzere ability registry'yi sorgular ve isteğe bağlı olarak yükler.

**Parametreler**

| Parametre | Tür | Gerekli | Açıklama |
|---|---|---|---|
| `description` | string | Evet | İstenen işlevselliğin doğal dilde açıklaması |
| `install` | boolean | Hayır | `true` ise önerilen plugin'i hemen yükler. Varsayılan `false` |

**Örnek**

```json
{
  "description": "I need a contact form with file upload support and spam protection",
  "install": false
}
```

**Döndürür**

```json
{
  "recommendation": {
    "slug": "contact-form-7",
    "name": "Contact Form 7",
    "reason": "Widely adopted, supports file uploads, and integrates with Akismet for spam filtering.",
    "alternatives": ["wpforms-lite", "fluent-forms"]
  }
}
```
