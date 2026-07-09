---
title: Qabiliyyətlər Referansı
sidebar_position: 2
_i18n_hash: 1a83460648ea789162af417c6b11eecc
---
# Yetenekler Referansı {#abilities-reference}

Yetenəkler, Gratis AI Agent tərəfindən WordPress quraşdırmanıza çağırla biləcək atomik əməliyyatlardır. Hər bir yetək, JSON sxemini göstərən qeydiyyatdan keçmiş PHP sinifidir — agent bu sxemi iş zamanı oxuyur və hansı parametrlərin tələb olunduğunu və yetəyin nə qaytardığını başa düşür.

Bu səhifə Gratis AI Agent v1.9.0 ilə gələn bütün yetəkləri sənədləşdirir.

---

## Custom Post Types (Xüsusi Post Tipləri) {#custom-post-types}

Bu yetəklər agent vasitəsilə qeydiyyatdan keçmiş custom post tiplərini (CPT) idarə edir. Qeydiyyatlar WordPress seçimləri cədvəlinə saxlanılır, beləliklə onlar pluginin deaktivasiya və yenidən aktivləşdirilməsindən sərbəst qalır.

### `register_post_type` {#registerposttype}

Yeni bir custom post tipi qeydiyyatdan keçirir.

**Parametrlər**

| Parametr | Tip | Tələb Olunurmu | Təsvir |
|---|---|---|---|
| `slug` | string | Bəli | Post tipi açarı (maksimum 20 simvol, böyük hərflər və boşluq yoxdur) |
| `singular_label` | string | Bəli | İnsan oxuna uyğun tək ad, məsələn: `Portfolio Item` |
| `plural_label` | string | Bəli | İnsan oxuna uyğun cəm ad, məsələn: `Portfolio Items` |
| `public` | boolean | Yoxdur | Post tipinin açıq olub-olmadığı. Varsayılan dəyər `true` |
| `supports` | array | Yoxdur | Dəstəklənilən xüsusiyyətlər: `title`, `editor`, `thumbnail`, `excerpt`, `comments`, `revisions`, `custom-fields`. Varsayılan dəyər `["title","editor"]` |
| `has_archive` | boolean | Yoxdur | Post tipi arxiv səhifəsinin aktiv olub-olmadığı. Varsayılan dəyər `false` |
| `menu_icon` | string | Yoxdur | Admin menyu ikonunun Dashicons sinifi və ya URL-i. Varsayılan dəyər `"dashicons-admin-post"` |
| `rewrite_slug` | string | Yoxdur | Post tipi üçün URL slug-i. Varsayılan dəyər `slug`-dir |

**Nümunə**

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

**Qaytarılan Dəyər** `{ "success": true, "slug": "portfolio" }`

---

### `list_post_types` {#listposttypes}

Agent tərəfindən qeydiyyatdan keçmiş bütün custom post tiplərini qaytarır.

**Parametrlər** — yoxdur

**Qaytarılan Dəyər**

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

Agent tərəfindən əvvəlcədən qeydiyyatdan keçmiş bir custom post tipini qeydiyyatdan çıxarır. O tiplərin mövcud postları verilənlər bazasında qalır, lakin post tipi vasitəsilə onların əlçatan olması dayanır.

**Parametrlər**

| Parametr | Tip | Tələb Olunurmu | Təsvir |
|---|---|---|---|
| `slug` | string | Bəli | Silinəcək post tipi açarı |

**Qaytarılan Dəyər** `{ "success": true, "slug": "portfolio" }`

---

## Custom Taxonomies (Xüsusi Taksonomiyalar) {#custom-taxonomies}

Bu yetəklər custom taksonomiyaları idarə edir. CPT-lərdən fərqli olıq, taksonomiya qeydiyyatları da saxlanılır.

### `register_taxonomy` {#registertaxonomy}

Yeni bir custom taksonomiya qeydiyyatdan keçirir.

**Parametrlər**

| Parametr | Tip | Tələb Olunurmu | Təsvir |
|---|---|---|---|
| `slug` | string | Bəli | Taksonomiya açarı (maksimum 32 simvol) |
| `singular_label` | string | Bəli | İnsan oxuna uyğun tək ad, məsələn: `Project Category` |
| `plural_label` | string | Bəli | İnsan oxuna uyğun cəm ad, məsələn: `Project Categories` |
| `post_types` | array | Bəli | Bu taksonomiyanın əlavə edilməsi lazım olan post tipi slug-ları |
| `hierarchical` | boolean | Yoxdur | Kateqoriya üslubunda `true`, etiket üslubunda `false`. Varsayılan dəyər `true` |
| `public` | boolean | Yoxdur | Terminlərin açıq olub-olmadığı. Varsayılan dəyər `true` |
| `rewrite_slug` | string | Yoxdur | Taksonomiya üçün URL slug-i. Varsayılan dəyər `slug`-dir |

**Nümunə**

```json
{
  "slug": "project-category",
  "singular_label": "Project Category",
  "plural_label": "Project Categories",
  "post_types": ["portfolio"],
  "hierarchical": true
}
```

**Qaytarılan Dəyər** `{ "success": true, "slug": "project-category" }`

---

### `list_taxonomies` {#listtaxonomies}

Agent tərəfindən qeydiyyatdan keçmiş bütün custom taksonomiyaları qaytarır.

**Parametrlər** — yoxdur

**Qaytarılan Dəyər**

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

Agent tərəfindən əvvəlcədən qeydiyyatdan keçmiş bir custom taksonomiyanı qeydiyyatdan çıxarır.

**Parametrlər**

| Parametr | Tip | Tələb Olunurmu | Təsvir |
|---|---|---|---|
| `slug` | string | Bəli | Silinəcək taksonomiya açarı |

**Qaytarılan Dəyər** `{ "success": true, "slug": "project-category" }`

---

## Design System (Dizayn Sistemi) {#design-system}

Design system yetəkləri WordPress saytının vizual təqdimatını dəyişir — custom CSS-dən blok nümunələrinə və sayt loqosuna qədər.

### `inject_custom_css` {#injectcustomcss}

CSS-i `wp_add_inline_style` vasitəsilə saytın `<head>` hissəsinə əlavə edir. CSS, `gratis_ai_agent_custom_css` seçimi daxilində saxlanılır və yetək sıfırlananda təmiz şəkildə çıxarılır (dequeued).

**Parametrlər**

| Parametr | Tip | Tələb Olunurmu | Təsvir |
|---|---|---|---|
| `css` | string | Bəli | Əlavə ediləcək valid CSS kodu |
| `label` | string | Yoxdur | Bu CSS bloku üçün insan oxuna uyğun etiket, debug loglarında istifadə olunur. Varsayılan dəyər `"agent-injected"` |
| `replace` | boolean | Yoxdur | Əgər `true` olarsa, əvvəlcədən əlavə edilmiş bütün CSS yerini dəyişir. Varsayılan dəyər `false` (əlavə etmək) |

**Nümunə**

```json
{
  "css": ":root { --primary: #1a1a2e; --accent: #e94560; } body { font-family: 'Inter', sans-serif; }",
  "label": "brand-colours",
  "replace": false
}
```

**Qaytarılan Dəyər** `{ "success": true, "bytes": 96 }`

---

### `add_block_pattern` {#addblockpattern}

WordPress pattern kitabxanasında yenidən istifadə edilə bilən blok nümunəsini qeydiyyatdan keçirir.

**Parametrlər**

| Parametr | Tip | Tələb Olunurmu | Təsvir |
|---|---|---|---|
| `slug` | string | Bəli | Nümunə identifikatoru, məsələn: `gratis/hero-dark` |
| `title` | string | Bəli | Redaktorun göstərdiyi insan oxuna uyğun nümunə adı |
| `content` | string | Bəli | Nümunə üçün serializə edilmiş blok markabı (HTML) |
| `categories` | array | Yoxdur | Nümunə kateqoriyası slug-ları, məsələn: `["featured", "hero"]` |
| `description` | string | Yoxdur | Nümunə seçicində göstərilən qısa təsvir |
| `keywords` | array | Yoxdur | Axtarış açarları |

**Qaytarılan Dəyər** `{ "success": true, "slug": "gratis/hero-dark" }`

---

### `list_block_patterns` {#listblockpatterns}

Agent tərəfindən qeydiyyatdan keçmiş bütün blok nümunələrini siyahıya salır.

**Parametrlər** — yoxdur

### `set_site_logo` {#setsitelogo}

WordPress saytının loqosunu mövcud bir Media Library əlavə ID-sinə və ya uzaq bir şəkil URL-inə təyin edir. URL təmin edilərsə, şəkil yüklənir və Media Kitabına (Media Library) import edilir.

**Parametrlər**

| Parametr | Tip | Lazımdır? | Təsvir |
|---|---|---|---|
| `attachment_id` | integer | Xeyr | Mövcud Media Library əlavəsinin ID-si |
| `url` | string | Xeyr | Import edilməli və loqo olaraq təyin ediləcək uzaq şəkil URL-i |

`attachment_id` və ya `url` içlerinden biri təmin edilməlidir.

**Dönüşü** `{ "success": true, "attachment_id": 42 }`

---

### `apply_theme_json_preset` {#applythemejsonpreset}

Aktiv tema üçün `theme.json` (və ya `global-styles`) üzərində adlandırılmış rəng/tipoqrafiya parametrlərini tətbiq edir. Presetlər Gratis AI Agent komandası tərəfindən idarə olunan dəstəklənmiş paketlərdir.

**Parametrlər**

| Parametr | Tip | Lazımdır? | Təsvir |
|---|---|---|---|
| `preset` | string | Bəli | Preset adı, məsələn: `minimal-dark`, `warm-editorial`, `corporate-blue` |
| `merge` | boolean | Xeyr | Əgər `true` olarsa, dəyişiklikləri əvəz etmək əvəzinə mövcud dəyirlərlə birləşdirir. Varsayılan dəyər `false`-dur |

**Mövcud presetlər**

| Preset | Təsvir |
|---|---|
| `minimal-dark` | Qara fon, ağ mətn, tək vurğu rəngi |
| `warm-editorial` | İsti ağ fon, serif başlıqlar, torpaq tonlu vurğu rənglər |
| `corporate-blue` | Naxışlı və ağ palitra, peşəkar tipoqrafiya |
| `vibrant-startup` | Parlak gradientlər, yuvarlaq künclər, müasir sans-serif tip |
| `classic-blog` | Neytral boz tonlar, rahat sətir hündürlüyü, ənənəvi yerləşdirmə aralığı |

**Dönüşü** `{ "success": true, "preset": "minimal-dark" }`

---

## Global Styles (Ümumi Stil) {#global-styles}

Global Styles funksiyaları WordPress Global Styles API vasitəsilə tema.json dəyirlərini oxuyur və yazır və bu da bütün bloklar və şablonlar üzrə sitenin bütün səhifələrində təsir göstərir.

### `get_global_styles` {#getglobalstyles}

Mövcud global stil konfiqurasiyasını qaytarır.

**Parametrlər**

| Parametr | Tip | Lazımdır? | Təsvir |
|---|---|---|---|
| `path` | string | Xeyr | Müəyyən bir dəyərə JSON işarəçisi, məsələn: `/color/palette` və ya `/typography/fontSizes`. Əgər bu boş buraxılsa, bütün obyekti qaytarır. |

**Dönüşü** tam global styles obyekti və ya `path`-dəki dəyər.

---

### `set_global_styles` {#setglobalstyles}

Global styles konfiqurasiyasındakı bir və ya daha çox dəyəri yeniləyir.

**Parametrlər**

| Parametr | Tip | Lazımdır? | Təsvir |
|---|---|---|---|
| `path` | string | Bəli | Təyin ediləcək dəyərə JSON işarəçisi, məsələn: `/color/palette` |
| `value` | any | Bəli | Yeni dəyər |

**Nümunə** — palitraya rəng əlavə etmək

```json
{
  "path": "/color/palette",
  "value": [
    { "slug": "primary", "color": "#1a1a2e", "name": "Primary" },
    { "slug": "accent",  "color": "#e94560", "name": "Accent" }
  ]
}
```

**Dönüşü** `{ "success": true, "path": "/color/palette" }`

---

### `reset_global_styles` {#resetglobalstyles}

Agent tərəfindən tətbiq edilmiş bütün global stil dəyişikliklərini sıfırlayır və temanın standart defaultlarını bərpa edir.

**Parametrlər** — yoxdur

**Dönüşü** `{ "success": true }`

---

## Navigation Menus (Naviqasiya Menyuları) {#navigation-menus}

Navigation Menu funksiyaları WordPress nav menyularını yaradır və idarə edir.

### `create_menu` {#createmenu}

Yeni bir WordPress nav menyusu yaradır.

**Parametrlər**

| Parametr | Tip | Lazımdır? | Təsvir |
|---|---|---|---|
| `name` | string | Bəli | Menyunun adı, məsələn: `Primary Navigation` |
| `location` | string | Xeyr | Bu menyunu təyin etmək üçün tema yeri, məsələn: `primary` |

**Dönüşü** `{ "success": true, "menu_id": 7 }`

---

### `update_menu` {#updatemenu}

Menyu adını dəyişir və ya onu bir tema yerinə yenidən təyin edir.

**Parametrlər**

| Parametr | Tip | Lazımdır? | Təsvir |
|---|---|---|---|
| `menu_id` | integer | Bəli | Yenilənəcək menyunun ID-si |
| `name` | string | Xeyr | Yeni menyu adı |
| `location` | string | Xeyr | Təyin ediləcək və ya yenidən təyin ediləcək tema yeri |

**Dönüşü** `{ "success": true, "menu_id": 7 }`

---

### `add_menu_item` {#addmenuitem}

Mövcud bir nav menyusuna bir əlavə (item) əlavə edir.

**Parametrlər**

| Parametr | Tip | Lazımdır? | Təsvir |
|---|---|---|---|
| `menu_id` | integer | Bəli | Hədəf menyunun ID-si |
| `type` | string | Bəli | Item tipi: `custom`, `post_type` və ya `taxonomy` |
| `title` | string | Xeyr | Menyular itemi üçün etiket (custom tip üçün tələb olunur) |
| `url` | string | Xeyr | `custom` itemlər üçün URL |
| `object_id` | integer | Xeyr | `post_type`/`taxonomy` itemləri üçün Post ID və ya termin ID-si |
| `parent_id` | integer | Xeyr | Bu itemi hansı menyu iteminin altına yerləşdirmək üçün parent ID-si |
| `position` | integer | Xeyr | Menyuda sıfırdan başlayaraq olan mövqey |

**Dönüşü** `{ "success": true, "item_id": 12 }`

---

### `remove_menu_item` {#removemenuitem}

Nav menyusundan bir itemi silir.

**Parametrlər**

| Parametr | Tip | Lazımdır? | Təsvir |
|---|---|---|---|
| `item_id` | integer | Bəli | Silinəcək menyu iteminin ID-si |

**Dönüşü** `{ "success": true, "item_id": 12 }`

---

### `list_menus` {#listmenus}

Tüm WordPress nav menyularını və onlara təyin edilmiş tema yerlərini siyahıya alır.

**Parametrlər** — yoxdur

**Dönüşü**

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

## Options Management (Parametrlərin İdarə Edilməsi) {#options-management}

Options funksiyaları `get_option` / `update_option` vasitəsilə WordPress parametrlərini oxuyur və yazır. Kritik ayarların qəsdən dəyişdirilməsini əngəlləyən daxili təhlükəsizlik bloklisti var.

### `get_option` {#getoption}

Bir WordPress parametrlərini oxuyur.

**Parametrlər**

| Parametr | Tip | Lazımdır? | Təsvir |
|---|---|---|---|
| `option_name` | string | Bəli | Parametr açarı, məsələn: `blogname` |

**Dönüşü** `{ "option_name": "blogname", "value": "My Site" }`

Əgər `option_name` təhlükəsizlik bloklistindədirsə, xəta qaytarılır.

---

### `set_option` {#setoption}

Bir WordPress parametrlərini yazır.

**Parametrlər**

| Parametr | Tip | Lazımdır? | Təsvir |
|---|---|---|---|
| `option_name` | string | Bəli | Parametr açarı |
| `value` | any | Bəli | Yeni dəyər (massivlər/obiyektlər üçün avtomatik serializasiya olunur) |
| `autoload` | string | Xeyr | `"yes"` və ya `"no"`. Varsayılan dəyər mövcud autoload ayarını qoruyur |

Bir `option_name` güvenlik siyah listesinde varsa hata döndürülür.

**Dönüş** `{ "success": true, "option_name": "blogname" }`

---

### `delete_option` {#deleteoption}

WordPress'teki bir seçeneği siler.

**Parametreler**

| Parametre | Tip | Gerekli | Açıklama |
|---|---|---|---|
| `option_name` | string | Evet | Silinecek seçenek anahtarı |

Eğer `option_name` güvenlik siyah listesinde ise hata döndürülür.

**Dönüş** `{ "success": true, "option_name": "my_custom_option" }`

---

### `list_options` {#listoptions}

Bir desene uyan WordPress seçeneklerini listeler.

**Parametreler**

| Parametre | Tip | Gerekli | Açıklama |
|---|---|---|---|
| `pattern` | string | Hayır | Seçenek adlarını filtrelemek için SQL LIKE deseni, örneğin `gratis_%`. Atlanırsa tüm seçenekler döner (büyük veritabanlarında dikkatli kullanın). |
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

## İçerik Yönetimi {#content-management}

İçerik Yönetimi yetenekleri WordPress gönderilerini ve sayfalarını oluşturur ve düzenler. Gönderi ID'leri döndürülür, böylece çoklu yetenek planlarının oluşturulan içeriğe göndermesi için sonraki adımlarda referans alabiliriz.

### `create_post` {#createpost}

Yeni bir WordPress gönderisi, sayfası veya özel gönderi türü girişi oluşturur.

**Parametreler**

| Parametre | Tip | Gerekli | Açıklama |
|---|---|---|---|
| `title` | string | Evet | Gönderi başlığı |
| `content` | string | Hayır | Gönderi içeriği — düz metin, HTML veya serileştirilmiş blok işaretlemesini kabul eder |
| `status` | string | Hayır | `draft`, `publish`, `pending`, `private`. Varsayılan `draft` |
| `post_type` | string | Hayır | Gönderi türü slug'ı, örneğin `post`, `page` veya herhangi bir kayıtlı CPT. Varsayılan `post` |
| `excerpt` | string | Hayır | Arşivlerde ve arama sonuçlarında gösterilecek kısa özet |
| `categories` | array | Hayır | Atanacak kategori adları veya ID'leri dizisi |
| `tags` | array | Hayır | Atanacak etiket adları veya ID'leri dizisi |
| `author` | integer | Hayır | Gönderi yazarı olarak ayarlanacak WordPress kullanıcı ID'si. Varsayılan mevcut kullanıcıdır |
| `date` | string | Hayır | ISO 8601 formatında yayın tarihi, örneğin `2026-05-01T09:00:00` |
| `page_template` | string | Hayır | Bu gönderiye veya sayfaya atanacak şablon dosyası, örneğin `page-full-width.php`. Sadece `post_type` `page` ise veya sayfa şablonlarını destekleyen bir CPT ise anlamlıdır. |

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

### `update_post` {#updatepost}

Mevcut bir WordPress gönderisini veya sayfasını günceller.

**Parametreler**

| Parametre | Tip | Gerekli | Açıklama |
|---|---|---|---|
| `post_id` | integer | Evet | Güncellenecek gönderinin ID'si |
| `title` | string | Hayır | Yeni gönderi başlığı |
| `content` | string | Hayır | Yeni gönderi içeriği |
| `status` | string | Hayır | Yeni durum: `draft`, `publish`, `pending`, `private` |
| `excerpt` | string | Hayır | Yeni özet |
| `categories` | array | Hayır | Tam kategori listesini bu isimler veya ID'ler dizisiyle değiştirin |
| `tags` | array | Hayır | Tam etiket listesini bu isimler veya ID'ler dizisiyle değiştirin |
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

### `batch_create_posts` {#batchcreateposts}

Tek bir yetenek çağrısında birden fazla gönderi oluşturur, site oluşturma veya toplu içerik aktarımı sırasında gidiş-dönüş sayısını azaltır. Gönderiler sırayla oluşturulur; biri başarısız olursa diğerleri devam eder ve başarısızlık sonuç dizisinde bildirilir.

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

### `set_featured_image` {#setfeaturedimage}

Mevcut bir gönderiye veya sayfaya öne çıkan görseli (gönderi küçük resmi) atar. Mevcut Bir Medya Kütüphanesi ek ID'sini veya uzak bir resim URL'sini kabul eder; bir URL sağlandığında, resim otomatik olarak indirilir ve içe aktarılır.

**Parametreler**

| Parametre | Tip | Gerekli | Açıklama |
|---|---|---|---|
| `post_id` | integer | Evet | Güncellenecek gönderi veya sayfanın ID'si |
| `attachment_id` | integer | Hayır | Mevcut bir Medya Kütüphanesi ek ID'si |
| `url` | string | Hayır | Öne çıkan görsel olarak içe aktarılacak ve ayarlanacak uzak resim URL'si |
| `alt_text` | string | Hayır | Bir URL'den içe aktarılırsa, eklenmesi gereken alternatif metin (alt text) |

`attachment_id` veya `url`'den biri sağlanmalıdır.

**Dönüş** `{ "success": true, "post_id": 42, "attachment_id": 17 }`

---

### `create_contact_form` {#createcontactform}

Aktif form eklentisini (Contact Form 7, WPForms, Fluent Forms veya kurulu olana bağlı olarak Gravity Forms) kullanarak bir iletişim formu oluşturur. Herhangi bir gönderiye veya sayfaya gömülebilen kısa kod döndürülür.

**Parametreler**

Görünüş İncelemesi

Visual Review yetenekleri, ajanın canlı sayfalardan ekran görüntüleri almasını ve bunları analiz etmesini sağlar. Bu sayede tarayıcı eklentisi kullanmaya gerek kalmadan otonom tasarım incelemesi, öncesi/sonrası karşılaştırmaları ve görsel regresyon kontrolleri yapabilirsiniz.

### `capture_screenshot` {#visual-review}

Verilən bir URL-dən WordPress səhifəsinin ekran görüntüsünü server-side headless brauzer vasitəsilə alır. Bu görüntü Media Library-yə saxlanılır və CDN URL-ü qaytarılır.

**Parametrlər**

| Parametr | Tip | Lazımdır | Təsvir |
|---|---|---|---|
| `url` | string | Bəli | Ekran görüntüsü alınacaq səhifənin tam URL-i, məsələn: `https://example.com/about/` |
| `width` | integer | Yoxdur | Pikseldə görünür sahə eni. Default `1280` |
| `height` | integer | Yoxdur | Pikseldə görünür sahə hündürlüyü. Default `800` |
| `full_page` | boolean | Yoxdur | Sadəcə görünür sahəni deyil, tam sürüşülən səhifəni əldə etmək üçün. Default `false` |
| `delay_ms` | integer | Yoxdur | Səhifə yükləndikdən sonra görüntünü almaq üçün gözləmə millisaniyələri, animasiya məzmunu üçün faydalıdır. Default `500` |
| `label` | string | Yoxdur | Media Library-də əlavə ilə saxlanılacaq insan oxunaqlı etiket. |

**Qaytarılan Dəy**

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

### `compare_screenshots` {#capturescreenshot}

İki ekran görüntüsünü alır və dəyişmiş bölgələri vurğulayan bir vizual fərq skoru ilə birlikdə fərqləri göstərir. Bir dizayn dəyişikliyin gözlənilən nəticəni verib-vermədiyini təsdiqləmək və ya qeyd edilməyən regresiyaları aşkar etmək üçün faydalıdır.

**Parametrlər**

| Parametr | Tip | Lazımdır | Təsvir |
|---|---|---|---|
| `before_url` | string | Bəli | "Əvvəl" vəziyyəti olaraq görüntülənəcək səhifənin URL-i |
| `after_url` | string | Bəli | "Sonra" vəziyyəti olaraq görüntülənəcək səhifənin URL-i. Vaxt ərzində müqayisə edilirsə eyni URL ola bilər |
| `width` | integer | Yoxdur | Hər iki görüntü üçün görünür sahə eni. Default `1280` |
| `threshold` | float | Yoxdur | Piksel fərqi eşikləri (0.0–1.0). Bu dərəcədə olan piksel ləngin dəyişməmiş hesab olunur. Default `0.1` |

**Qaytarılan Dəy**

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

`diff_score` `0.0` görünən heç bir dəyişiklik olmadığı deməkdir; `1.0` isə hər pikselin dəyişdiyi deməkdir.

---

### `review_page_design` {#comparescreenshots}

Səhifənin ekran görüntüsünü alır və onu vizual təhlil üçün dil modelinə göndərir. Bu, yerləşmə, tipografiya, rəng istifadəsi və əlçatanlıq məsələləri haqqında strukturlaşdırılmış qiymətləndirmə əhatə edən bir qiymətləndirmə qaytarır.

**Parametrlər**

| Parametr | Tip | Lazımdır | Təsvir |
|---|---|---|---|
| `url` | string | Bəli | İnceleyeceğiniz səhifənin tam URL-i |
| `focus` | string | Yoxdur | Vurğulanacaq inceleme sahələrinin virgulla ayrılmış siyahısı: `layout`, `typography`, `colour`, `accessibility`, `mobile`. Default: bütün sahələr |
| `width` | integer | Yoxdur | Görünür sahə eni. Default `1280` |

**Qaytarılan Dəy**

```json
{
  "success": true,
  "screenshot_url": "https://example.com/wp-content/uploads/2026/04/review-about.png",
  "assessment": {
    "overall": "Səhifə strukturu təmiz və oxunaqlıdır. İki əlçatanlıq problemi aşkar edildi.",
    "layout": "Yaxşı vizual hiyerarxi. Hero bölməsi ön plandadır.",
    "typography": "Mətni 15px — oxunma rahatlığı üçün 16px-ə artırmaq düşünülür.",
    "colour": "CTA düyməsi kontrast nisbəti (#4a90e2 üzərində #fff) 3.1:1 - WCAG AA eşiği olan 4.5:1-dən aşağıdır.",
    "accessibility": ["CTA düyməsində aşağı kontrast", "Hero görüntüsündə alt mətni çatışmaz"]
  }
}
```

---

## Quraşdırıla Bilən İmkanlar (Installable Abilities) {#reviewpagedesign}

Quraşdırıla Bilən İmkanlar Reyestrasiyası sizə WordPress pluginləri kimi paylaşılan əlavə imkan paketləri ilə ajanı genişləndirməyə imkan verir. Hər bir paket standart ability API-dən istifadə edərək bir və ya daha çox imkanı qeyd edir.

### `list_available_abilities` {#installable-abilities}

Reyestrasiyadakı quraşdırılmaya hazır olan imkan paketlərinin kataloqunu qaytarır.

**Parametrlər**

| Parametr | Tip | Lazimmi | Təsvir |
|---|---|---|---|
| `category` | string | Xeyr | Kateqoriyaya görə filtrləmə: `ecommerce`, `seo`, `media`, `social`, `developer` |

**Dönüş**

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

### `install_ability` {#listavailableabilities}

Qeydiyyatdan bir ability pack-i yükləyir və aktivləşdirir.

**Parametrler**

| Parametr | Tip | Lazimmi | Təsvir |
|---|---|---|---|
| `slug` | string | Bəli | Ability pack plugininin slug'u |

**Dönüş** `{ "success": true, "slug": "gratis-ai-agent-woocommerce", "abilities_added": 3 }`

---

### `recommend_plugin` {#installability}

Təsvir olunan istifadə məqsədi üçün ən yaxşı pluginləri tapmaq və ehtiyac olduqda onu quraşdırmaq üçün ability qeydiyyatından sorğu aparır.

**Parametrler**

| Parametr | Tip | Lazimmi | Təsvir |
|---|---|---|---|
| `description` | string | Bəli | İstənilən funksionallıq haqqında təbii dildə təsvir |
| `install` | boolean | Xeyr | Əgər `true` olarsa, tövsiyə olunan plugin dərhal quraşdırılır. Varsayılan dəyər `false`-dur |

**Nümunə**

```json
{
  "description": "Mən fayl yükləmə dəstəyi və spam mühafizəsi olan bir əlaqə forması lazımdam",
  "install": false
}
```

**Dönüş**

```json
{
  "recommendation": {
    "slug": "contact-form-7",
    "name": "Contact Form 7",
    "reason": "Ən geniş istifadə olunan, fayl yükləməni dəstəkləyir və spam filtrləməsi üçün Akismet ilə inteqrasiya olunur.",
    "alternatives": ["wpforms-lite", "fluent-forms"]
  }
}
```
