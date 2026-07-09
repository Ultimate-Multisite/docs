---
title: Чадваруудын лавлагаа
sidebar_position: 2
_i18n_hash: 1a83460648ea789162af417c6b11eecc
---
# Чадваруудын лавлах {#abilities-reference}

Чадварууд нь Gratis AI Agent таны WordPress суулгац дээр дуудаж ажиллуулж болох атом үйлдлүүд юм. Чадвар бүр нь JSON схем ил гаргадаг бүртгэгдсэн PHP класс — agent нь ажиллах үедээ энэ схемийг уншиж ямар параметр шаардлагатай, мөн тухайн чадвар юу буцаахыг ойлгодог.

Энэ хуудас Gratis AI Agent v1.9.0-той хамт ирдэг бүх чадварыг баримтжуулсан.

---

## Захиалгат нийтлэлийн төрлүүд {#custom-post-types}

Эдгээр чадварууд нь agent-ээр дамжуулан бүртгэгдсэн захиалгат нийтлэлийн төрлүүдийг (CPT) удирдана. Бүртгэлүүд WordPress options хүснэгтэд хадгалагддаг тул plugin-ийг идэвхгүй болгож, дахин идэвхжүүлсний дараа ч хэвээр үлдэнэ.

### `register_post_type` {#registerposttype}

Шинэ захиалгат нийтлэлийн төрөл бүртгэнэ.

**Параметрүүд**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `slug` | string | Yes | Нийтлэлийн төрлийн түлхүүр (хамгийн ихдээ 20 тэмдэгт, том үсэггүй, зайгүй) |
| `singular_label` | string | Yes | Хүнд уншигдах ганц тооны нэр, жишээ нь `Portfolio Item` |
| `plural_label` | string | Yes | Хүнд уншигдах олон тооны нэр, жишээ нь `Portfolio Items` |
| `public` | boolean | No | Нийтлэлийн төрөл олон нийтэд хандах боломжтой эсэх. Анхдагч нь `true` |
| `supports` | array | No | Дэмжих боломжууд: `title`, `editor`, `thumbnail`, `excerpt`, `comments`, `revisions`, `custom-fields`. Анхдагч нь `["title","editor"]` |
| `has_archive` | boolean | No | Нийтлэлийн төрлийн архив хуудас идэвхжсэн эсэх. Анхдагч нь `false` |
| `menu_icon` | string | No | Админ цэсний icon-д зориулсан Dashicons класс эсвэл URL. Анхдагч нь `"dashicons-admin-post"` |
| `rewrite_slug` | string | No | Нийтлэлийн төрлийн URL slug. Анхдагчаар `slug` байна |

**Жишээ**

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

**Буцаана** `{ "success": true, "slug": "portfolio" }`

---

### `list_post_types` {#listposttypes}

Agent-ээр бүртгэгдсэн бүх захиалгат нийтлэлийн төрлийг буцаана.

**Параметрүүд** — байхгүй

**Буцаана**

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

Agent-ээр өмнө нь бүртгэгдсэн захиалгат нийтлэлийн төрлийг бүртгэлээс хасна. Тэр төрлийн одоо байгаа нийтлэлүүд өгөгдлийн санд үлдэх боловч нийтлэлийн төрлөөр дамжуулан хандах боломжгүй болно.

**Параметрүүд**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `slug` | string | Yes | Устгах нийтлэлийн төрлийн түлхүүр |

**Буцаана** `{ "success": true, "slug": "portfolio" }`

---

## Захиалгат таксономиуд {#custom-taxonomies}

Эдгээр чадварууд нь захиалгат таксономиудыг удирдана. CPT-үүдийн адил таксономийн бүртгэлүүд хадгалагдана.

### `register_taxonomy` {#registertaxonomy}

Шинэ захиалгат таксономи бүртгэнэ.

**Параметрүүд**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `slug` | string | Yes | Таксономийн түлхүүр (хамгийн ихдээ 32 тэмдэгт) |
| `singular_label` | string | Yes | Хүнд уншигдах ганц тооны нэр, жишээ нь `Project Category` |
| `plural_label` | string | Yes | Хүнд уншигдах олон тооны нэр, жишээ нь `Project Categories` |
| `post_types` | array | Yes | Энэ таксономийг холбох ёстой нийтлэлийн төрлийн slug-ууд |
| `hierarchical` | boolean | No | Ангилал маягийн бол `true`, tag маягийн бол `false`. Анхдагч нь `true` |
| `public` | boolean | No | Нэр томьёонууд олон нийтэд хандах боломжтой эсэх. Анхдагч нь `true` |
| `rewrite_slug` | string | No | Таксономийн URL slug. Анхдагчаар `slug` байна |

**Жишээ**

```json
{
  "slug": "project-category",
  "singular_label": "Project Category",
  "plural_label": "Project Categories",
  "post_types": ["portfolio"],
  "hierarchical": true
}
```

**Буцаана** `{ "success": true, "slug": "project-category" }`

---

### `list_taxonomies` {#listtaxonomies}

Agent-ээр бүртгэгдсэн бүх захиалгат таксономийг буцаана.

**Параметрүүд** — байхгүй

**Буцаана**

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

Agent-ээр өмнө нь бүртгэгдсэн захиалгат таксономийг бүртгэлээс хасна.

**Параметрүүд**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `slug` | string | Yes | Устгах таксономийн түлхүүр |

**Буцаана** `{ "success": true, "slug": "project-category" }`

---

## Дизайны систем {#design-system}

Дизайны системийн чадварууд WordPress сайтын харагдах байдлыг өөрчилнө — захиалгат CSS-ээс эхлээд блок pattern-ууд болон сайтын лого хүртэл.

### `inject_custom_css` {#injectcustomcss}

`wp_add_inline_style`-аар дамжуулан CSS-ийг сайтын `<head>` хэсэгт нэмнэ. CSS нь `gratis_ai_agent_custom_css` option-д хадгалагдаж, чадварыг дахин тохируулах үед цэвэрхэн дарааллаас гаргагдана.

**Параметрүүд**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `css` | string | Yes | Оруулах хүчинтэй CSS |
| `label` | string | No | Энэ CSS блокт зориулсан, debug log-д ашиглагдах хүнд уншигдах шошго. Анхдагч нь `"agent-injected"` |
| `replace` | boolean | No | Хэрэв `true` бол өмнө нь оруулсан бүх CSS-ийг орлоно. Анхдагч нь `false` (нэмж залгана) |

**Жишээ**

```json
{
  "css": ":root { --primary: #1a1a2e; --accent: #e94560; } body { font-family: 'Inter', sans-serif; }",
  "label": "brand-colours",
  "replace": false
}
```

**Буцаана** `{ "success": true, "bytes": 96 }`

---

### `add_block_pattern` {#addblockpattern}

WordPress pattern library-д дахин ашиглах боломжтой блок pattern бүртгэнэ.

**Параметрүүд**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `slug` | string | Yes | Pattern танигч, жишээ нь `gratis/hero-dark` |
| `title` | string | Yes | Editor-д харагдах хүнд уншигдах pattern нэр |
| `content` | string | Yes | Pattern-д зориулсан сериалчлагдсан блок markup (HTML) |
| `categories` | array | No | Pattern ангиллын slug-ууд, жишээ нь `["featured", "hero"]` |
| `description` | string | No | Pattern сонгогчид харагдах богино тайлбар |
| `keywords` | array | No | Хайлтын түлхүүр үгс |

**Буцаана** `{ "success": true, "slug": "gratis/hero-dark" }`

---

### `list_block_patterns` {#listblockpatterns}

Agent-ээр бүртгэгдсэн бүх блок pattern-ыг жагсаана.

**Параметрүүд** — байхгүй

**Буцаана**

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

WordPress сайтын логог өгөгдсөн хавсралтын ID эсвэл алсын зургийн URL болгож тохируулна. URL өгөгдвөл зургийг татаж Media Library руу импортлоно.

**Параметрүүд**

| Параметр | Төрөл | Шаардлагатай | Тайлбар |
|---|---|---|---|
| `attachment_id` | integer | Үгүй | Одоо байгаа Media Library хавсралтын ID |
| `url` | string | Үгүй | Импортлоод лого болгон тохируулах алсын зургийн URL |

`attachment_id` эсвэл `url`-ийн аль нэгийг заавал өгөх ёстой.

**Буцаана** `{ "success": true, "attachment_id": 42 }`

---

### `apply_theme_json_preset` {#applythemejsonpreset}

Идэвхтэй theme-ийн `theme.json` (эсвэл `global-styles`)-д нэрлэсэн өнгө/типографийн preset-ийг хэрэглэнэ. Preset-үүд нь Gratis AI Agent багийн хариуцан бэлтгэдэг багцууд юм.

**Параметрүүд**

| Параметр | Төрөл | Шаардлагатай | Тайлбар |
|---|---|---|---|
| `preset` | string | Тийм | Preset-ийн нэр, жишээ нь `minimal-dark`, `warm-editorial`, `corporate-blue` |
| `merge` | boolean | Үгүй | Хэрэв `true` бол орлуулахын оронд одоо байгаа утгуудтай нэгтгэнэ. Анхдагч нь `false` |

**Боломжтой preset-үүд**

| Preset | Тайлбар |
|---|---|
| `minimal-dark` | Бараг хар дэвсгэр, цагаан текст, ганц тодруулах өнгө |
| `warm-editorial` | Дулаан цагаавтар дэвсгэр, serif гарчгууд, газрын өнгө аяс бүхий тодруулах өнгөнүүд |
| `corporate-blue` | Мэргэжлийн типографитай хар хөх ба цагаан палитр |
| `vibrant-startup` | Тод градиентууд, дугуйрсан булангууд, орчин үеийн sans-serif үсгийн хэв |
| `classic-blog` | Саармаг саарал өнгөнүүд, уншихад тухтай мөрийн өндөр, уламжлалт байрлалын зай авалт |

**Буцаана** `{ "success": true, "preset": "minimal-dark" }`

---

## Global Styles {#global-styles}

Global Styles боломжууд нь WordPress Global Styles API-гаар дамжуулан theme.json утгуудыг уншиж, бичдэг бөгөөд сайтын хэмжээнд бүх блок болон template-д нөлөөлнө.

### `get_global_styles` {#getglobalstyles}

Одоогийн global styles тохиргоог буцаана.

**Параметрүүд**

| Параметр | Төрөл | Шаардлагатай | Тайлбар |
|---|---|---|---|
| `path` | string | Үгүй | Тодорхой утга руу заах JSON заагч, жишээ нь `/color/palette` эсвэл `/typography/fontSizes`. Орхисон бол бүх объектыг буцаана. |

**Буцаана** бүрэн global styles объект эсвэл `path` дахь утга.

---

### `set_global_styles` {#setglobalstyles}

Global styles тохиргоонд нэг эсвэл хэд хэдэн утгыг шинэчилнэ.

**Параметрүүд**

| Параметр | Төрөл | Шаардлагатай | Тайлбар |
|---|---|---|---|
| `path` | string | Тийм | Тохируулах утга руу заах JSON заагч, жишээ нь `/color/palette` |
| `value` | any | Тийм | Шинэ утга |

**Жишээ** — палитрт өнгө нэмэх

```json
{
  "path": "/color/palette",
  "value": [
    { "slug": "primary", "color": "#1a1a2e", "name": "Primary" },
    { "slug": "accent",  "color": "#e94560", "name": "Accent" }
  ]
}
```

**Буцаана** `{ "success": true, "path": "/color/palette" }`

---

### `reset_global_styles` {#resetglobalstyles}

Agent-аар хэрэглэсэн бүх global styles өөрчлөлтийг дахин тохируулж, theme-ийн анхдагч утгуудыг сэргээнэ.

**Параметрүүд** — байхгүй

**Буцаана** `{ "success": true }`

---

## Навигацийн цэсүүд {#navigation-menus}

Навигацийн цэсийн боломжууд нь WordPress nav menu болон тэдгээрийн item-уудыг үүсгэж, удирдана.

### `create_menu` {#createmenu}

Шинэ WordPress навигацийн цэс үүсгэнэ.

**Параметрүүд**

| Параметр | Төрөл | Шаардлагатай | Тайлбар |
|---|---|---|---|
| `name` | string | Тийм | Цэсийн нэр, жишээ нь `Primary Navigation` |
| `location` | string | Үгүй | Энэ цэсэнд оноох theme-ийн байрлал, жишээ нь `primary` |

**Буцаана** `{ "success": true, "menu_id": 7 }`

---

### `update_menu` {#updatemenu}

Цэсийн нэрийг өөрчлөх эсвэл theme-ийн байрлалд дахин онооно.

**Параметрүүд**

| Параметр | Төрөл | Шаардлагатай | Тайлбар |
|---|---|---|---|
| `menu_id` | integer | Тийм | Шинэчлэх цэсийн ID |
| `name` | string | Үгүй | Шинэ цэсийн нэр |
| `location` | string | Үгүй | Оноох эсвэл дахин оноох theme-ийн байрлал |

**Буцаана** `{ "success": true, "menu_id": 7 }`

---

### `add_menu_item` {#addmenuitem}

Одоо байгаа навигацийн цэсэнд item нэмнэ.

**Параметрүүд**

| Параметр | Төрөл | Шаардлагатай | Тайлбар |
|---|---|---|---|
| `menu_id` | integer | Тийм | Зорилтот цэсийн ID |
| `type` | string | Тийм | Item-ийн төрөл: `custom`, `post_type`, эсвэл `taxonomy` |
| `title` | string | Үгүй | Цэсийн item-ийн шошго (`custom` төрөлд шаардлагатай) |
| `url` | string | Үгүй | `custom` item-уудын URL |
| `object_id` | integer | Үгүй | `post_type`/`taxonomy` item-уудын нийтлэлийн ID эсвэл term ID |
| `parent_id` | integer | Үгүй | Энэ item-ийг дотор нь үүрлэх цэсийн item ID |
| `position` | integer | Үгүй | Цэс доторх тэгээс эхэлсэн байрлал |

**Буцаана** `{ "success": true, "item_id": 12 }`

---

### `remove_menu_item` {#removemenuitem}

Навигацийн цэсээс item устгана.

**Параметрүүд**

| Параметр | Төрөл | Шаардлагатай | Тайлбар |
|---|---|---|---|
| `item_id` | integer | Тийм | Устгах цэсийн item ID |

**Буцаана** `{ "success": true, "item_id": 12 }`

---

### `list_menus` {#listmenus}

Бүх WordPress навигацийн цэсийг, тэдгээрт оноосон theme-ийн байрлалуудын хамт жагсаана.

**Параметрүүд** — байхгүй

**Буцаана**

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

## Сонголтуудын удирдлага {#options-management}

Сонголтуудын боломжууд нь `get_option` / `update_option`-оор дамжуулан WordPress option-уудыг уншиж, бичдэг. Суурилуулсан аюулгүй байдлын blocklist нь чухал тохиргоог санамсаргүй өөрчлөхөөс сэргийлнэ.

### `get_option` {#getoption}

WordPress option уншина.

**Параметрүүд**

| Параметр | Төрөл | Шаардлагатай | Тайлбар |
|---|---|---|---|
| `option_name` | string | Тийм | Option-ийн түлхүүр, жишээ нь `blogname` |

**Буцаана** `{ "option_name": "blogname", "value": "My Site" }`

`option_name` нь аюулгүй байдлын blocklist-д байгаа бол алдаа буцаана.

---

### `set_option` {#setoption}

WordPress option бичнэ.

**Параметрүүд**

| Параметр | Төрөл | Шаардлагатай | Тайлбар |
|---|---|---|---|
| `option_name` | string | Тийм | Option-ийн түлхүүр |
| `value` | any | Тийм | Шинэ утга (массив/объектод автоматаар сериалчлагдана) |
| `autoload` | string | Үгүй | `"yes"` эсвэл `"no"`. Анхдагчаар одоо байгаа autoload тохиргоог хадгална |

`option_name` нь аюулгүй байдлын хориглох жагсаалтад байвал алдаа буцаана.

**Буцаалт** `{ "success": true, "option_name": "blogname" }`

---

### `delete_option` {#deleteoption}

WordPress тохиргоог устгана.

**Параметрүүд**

| Параметр | Төрөл | Шаардлагатай | Тайлбар |
|---|---|---|---|
| `option_name` | string | Тийм | Устгах тохиргооны түлхүүр |

`option_name` нь аюулгүй байдлын хориглох жагсаалтад байвал алдаа буцаана.

**Буцаалт** `{ "success": true, "option_name": "my_custom_option" }`

---

### `list_options` {#listoptions}

Загварт таарах WordPress тохиргоонуудыг жагсаана.

**Параметрүүд**

| Параметр | Төрөл | Шаардлагатай | Тайлбар |
|---|---|---|---|
| `pattern` | string | Үгүй | Тохиргооны нэрсийг шүүх SQL LIKE загвар, жишээ нь `gratis_%`. Орхисон бол бүх тохиргоог буцаана (том өгөгдлийн санд болгоомжтой ашиглана уу). |
| `limit` | integer | Үгүй | Үр дүнгийн хамгийн их тоо. Өгөгдмөл `50`, дээд хэмжээ `500` |

**Буцаалт**

```json
{
  "options": [
    { "option_name": "gratis_ai_agent_version", "autoload": "yes" }
  ],
  "total": 1
}
```

---

## Агуулгын удирдлага {#content-management}

Агуулгын удирдлагын боломжууд нь WordPress нийтлэл болон хуудсуудыг үүсгэж, засварлана. Нийтлэлийн ID-уудыг буцаадаг тул олон боломжит төлөвлөгөөний дараагийн алхмууд үүсгэсэн агуулгыг лавлаж ашиглаж болно.

### `create_post` {#createpost}

Шинэ WordPress нийтлэл, хуудас эсвэл custom post type бичлэг үүсгэнэ.

**Параметрүүд**

| Параметр | Төрөл | Шаардлагатай | Тайлбар |
|---|---|---|---|
| `title` | string | Тийм | Нийтлэлийн гарчиг |
| `content` | string | Үгүй | Нийтлэлийн үндсэн агуулга — энгийн текст, HTML эсвэл сериалчилсан блок тэмдэглэгээ хүлээн авна |
| `status` | string | Үгүй | `draft`, `publish`, `pending`, `private`. Өгөгдмөл `draft` |
| `post_type` | string | Үгүй | Нийтлэлийн төрлийн slug, жишээ нь `post`, `page` эсвэл бүртгэгдсэн дурын CPT. Өгөгдмөл `post` |
| `excerpt` | string | Үгүй | Архив болон хайлтын үр дүнд харагдах богино хураангуй |
| `categories` | array | Үгүй | Оноох категорийн нэрс эсвэл ID-уудын массив |
| `tags` | array | Үгүй | Оноох шошгын нэрс эсвэл ID-уудын массив |
| `author` | integer | Үгүй | Нийтлэлийн зохиогчоор тохируулах WordPress хэрэглэгчийн ID. Өгөгдмөл нь одоогийн хэрэглэгч |
| `date` | string | Үгүй | ISO 8601 формат дахь нийтлэх огноо, жишээ нь `2026-05-01T09:00:00` |
| `page_template` | string | Үгүй | Энэ нийтлэл эсвэл хуудсанд оноох загвар файл, жишээ нь `page-full-width.php`. Зөвхөн `post_type` нь `page` эсвэл хуудасны загварыг дэмждэг CPT байх үед утгатай. |

**Жишээ**

```json
{
  "title": "Welcome to Our New Site",
  "content": "<!-- wp:paragraph --><p>Hello world!</p><!-- /wp:paragraph -->",
  "status": "publish",
  "post_type": "page",
  "page_template": "page-full-width.php"
}
```

**Буцаалт** `{ "success": true, "post_id": 42, "permalink": "https://example.com/welcome/" }`

---

### `update_post` {#updatepost}

Одоо байгаа WordPress нийтлэл эсвэл хуудсыг шинэчилнэ.

**Параметрүүд**

| Параметр | Төрөл | Шаардлагатай | Тайлбар |
|---|---|---|---|
| `post_id` | integer | Тийм | Шинэчлэх нийтлэлийн ID |
| `title` | string | Үгүй | Шинэ нийтлэлийн гарчиг |
| `content` | string | Үгүй | Шинэ нийтлэлийн үндсэн агуулга |
| `status` | string | Үгүй | Шинэ төлөв: `draft`, `publish`, `pending`, `private` |
| `excerpt` | string | Үгүй | Шинэ хураангуй |
| `categories` | array | Үгүй | Бүтэн категорийн жагсаалтыг энэ нэрс эсвэл ID-уудын массиваар солино |
| `tags` | array | Үгүй | Бүтэн шошгын жагсаалтыг энэ нэрс эсвэл ID-уудын массиваар солино |
| `page_template` | string | Үгүй | Энэ нийтлэл эсвэл хуудсанд оноох шинэ загвар файл, жишээ нь `page-full-width.php`. Загварын оноолтыг арилгаж theme-ийн өгөгдмөл рүү буцаахын тулд хоосон мөр дамжуулна. |

**Жишээ** — үүсгэсний дараа загварыг өөрчлөх

```json
{
  "post_id": 42,
  "page_template": "page-full-width.php"
}
```

**Буцаалт** `{ "success": true, "post_id": 42 }`

---

### `batch_create_posts` {#batchcreateposts}

Нэг боломжийн дуудлагаар олон нийтлэл үүсгэж, сайт бүтээх эсвэл бөөн агуулга импортлох үед давтан хүсэлтийг багасгана. Нийтлэлүүдийг дарааллаар нь үүсгэнэ; нэг нь амжилтгүй болсон ч бусад нь үргэлжлэх бөгөөд алдааг үр дүнгийн массивт мэдээлнэ.

**Параметрүүд**

| Параметр | Төрөл | Шаардлагатай | Тайлбар |
|---|---|---|---|
| `posts` | array | Тийм | Нийтлэлийн объектуудын массив; тус бүр нь `create_post`-той адил параметрүүдийг хүлээн авна |
| `stop_on_error` | boolean | Үгүй | Хэрэв `true` бол эхний алдааны дараа боловсруулалтыг зогсооно. Өгөгдмөл `false` |

**Жишээ**

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

**Буцаалт**

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

Одоо байгаа нийтлэл эсвэл хуудсанд онцлох зураг (нийтлэлийн жижиг зураг) онооно. Одоо байгаа Media Library хавсралтын ID эсвэл алсын зургийн URL хүлээн авна; URL өгсөн үед зургийг автоматаар татаж импортолно.

**Параметрүүд**

| Параметр | Төрөл | Шаардлагатай | Тайлбар |
|---|---|---|---|
| `post_id` | integer | Тийм | Шинэчлэх нийтлэл эсвэл хуудсын ID |
| `attachment_id` | integer | Үгүй | Одоо байгаа Media Library хавсралтын ID |
| `url` | string | Үгүй | Импортлоод онцлох зураг болгон тохируулах алсын зургийн URL |
| `alt_text` | string | Үгүй | Хэрэв URL-аас импортолсон бол хавсралтад хэрэглэх alt текст |

`attachment_id` эсвэл `url`-ийн аль нэгийг заавал өгөх ёстой.

**Буцаалт** `{ "success": true, "post_id": 42, "attachment_id": 17 }`

---

### `create_contact_form` {#createcontactform}

Суулгасан байдлаас хамааран идэвхтэй маягтын plugin (Contact Form 7, WPForms, Fluent Forms эсвэл Gravity Forms) ашиглан холбоо барих маягт үүсгэнэ. Дурын нийтлэл эсвэл хуудсанд оруулах боломжтой shortcode буцаана.

**Параметрүүд**

| Параметр | Төрөл | Шаардлагатай | Тайлбар |
|---|---|---|---|
| `title` | string | Тийм | Form plugin-ий admin хэсэгт харагдах формын нэр |
| `fields` | array | Тийм | Формын талбаруудын эрэмбэлсэн жагсаалт (доорх талбарын объектыг үзнэ үү) |
| `recipient` | string | Үгүй | Илгээлтүүдийг хүлээн авах имэйл хаяг. Анхны утга нь WordPress admin имэйл |
| `subject` | string | Үгүй | Имэйлийн гарчгийн мөр. Contact Form 7 ашиглах үед `[your-name]` болон `[your-subject]` орлуулагчийг дэмжинэ |
| `confirmation_message` | string | Үгүй | Амжилттай илгээсний дараа харуулах мессеж. Анхны утга: `"Thank you for your message. We'll be in touch soon."` |

**Талбарын объект**

| Түлхүүр | Төрөл | Шаардлагатай | Тайлбар |
|---|---|---|---|
| `name` | string | Тийм | Дотоод талбарын нэр / машины түлхүүр |
| `label` | string | Тийм | Форм дээр харагдах, хүнд ойлгомжтой шошго |
| `type` | string | Тийм | `text`, `email`, `tel`, `textarea`, `select`, `checkbox`, `radio`, `file`, `date` |
| `required` | boolean | Үгүй | Илгээхээс өмнө талбарыг заавал бөглөх эсэх. Анхны утга `false` |
| `options` | array | Үгүй | `select`, `checkbox`, болон `radio` талбаруудын сонголтууд |
| `placeholder` | string | Үгүй | Текст төрлийн оруулалтын орлуулагч текст |

**Жишээ**

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

**Буцаах утга**

```json
{
  "success": true,
  "form_id": 3,
  "shortcode": "[contact-form-7 id=\"3\" title=\"Restaurant Booking Enquiry\"]"
}
```

---

## Визуал тойм {#visual-review}

Визуал тоймын чадварууд нь агентэд ажиллаж буй хуудсуудын дэлгэцийн зураг авч, тэдгээрийг шинжлэх боломж олгосноор ямар нэг browser extension шаардахгүйгээр бие даасан дизайны тойм, өмнө/дараах харьцуулалт, визуал регрессийн шалгалт хийх боломжийг бүрдүүлнэ.

### `capture_screenshot` {#capturescreenshot}

Өгөгдсөн URL дээрх WordPress хуудасны дэлгэцийн зургийг сервер талын headless browser ашиглан авна. Зургийг Media Library-д хадгалж, CDN URL буцаана.

**Параметрүүд**

| Параметр | Төрөл | Шаардлагатай | Тайлбар |
|---|---|---|---|
| `url` | string | Тийм | Дэлгэцийн зураг авах хуудасны бүтэн URL, жишээ нь `https://example.com/about/` |
| `width` | integer | Үгүй | Viewport-ийн өргөн пикселээр. Анхны утга `1280` |
| `height` | integer | Үгүй | Viewport-ийн өндөр пикселээр. Анхны утга `800` |
| `full_page` | boolean | Үгүй | Зөвхөн viewport бус, гүйлгэж болох бүтэн хуудсыг авах. Анхны утга `false` |
| `delay_ms` | integer | Үгүй | Хуудас ачаалсны дараа зураг авахаас өмнө хүлээх миллисекунд; хөдөлгөөнт контентод хэрэгтэй. Анхны утга `500` |
| `label` | string | Үгүй | Media Library дахь хавсралттай хамт хадгалагдах, хүнд ойлгомжтой шошго |

**Буцаах утга**

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

Хоёр дэлгэцийн зургийг авч, өөрчлөгдсөн хэсгүүдийг тодруулсан diff зурагтай хамт визуал diff оноо буцаана. Дизайны өөрчлөлт хүлээгдсэн үр дүнг өгсөн эсэхийг баталгаажуулах эсвэл санамсаргүй регрессийг илрүүлэхэд хэрэгтэй.

**Параметрүүд**

| Параметр | Төрөл | Шаардлагатай | Тайлбар |
|---|---|---|---|
| `before_url` | string | Тийм | "өмнө" төлөв болгон авах хуудасны URL |
| `after_url` | string | Тийм | "дараа" төлөв болгон авах хуудасны URL. Цаг хугацаагаар харьцуулж байгаа бол ижил URL байж болно |
| `width` | integer | Үгүй | Хоёр авах үйлдлийн viewport-ийн өргөн. Анхны утга `1280` |
| `threshold` | float | Үгүй | Пикселийн ялгааны босго (0.0–1.0). Энэ хүлцлийн доторх пикселүүдийг өөрчлөгдөөгүй гэж үзнэ. Анхны утга `0.1` |

**Буцаах утга**

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

`0.0` утгатай `diff_score` нь харагдах өөрчлөлт байхгүй гэсэн үг; `1.0` нь пиксел бүр өөрчлөгдсөн гэсэн үг.

---

### `review_page_design` {#reviewpagedesign}

Хуудасны дэлгэцийн зургийг авч, визуал шинжилгээнд зориулан хэлний загварт илгээнэ. Байрлал, typography, өнгөний хэрэглээ болон accessibility-тай холбоотой асуудлуудыг хамарсан бүтэцтэй үнэлгээ буцаана.

**Параметрүүд**

| Параметр | Төрөл | Шаардлагатай | Тайлбар |
|---|---|---|---|
| `url` | string | Тийм | Тойм хийх хуудасны бүтэн URL |
| `focus` | string | Үгүй | Онцлох тоймын чиглэлүүдийн таслалаар тусгаарласан жагсаалт: `layout`, `typography`, `colour`, `accessibility`, `mobile`. Анхны утга: бүх чиглэл |
| `width` | integer | Үгүй | Viewport-ийн өргөн. Анхны утга `1280` |

**Буцаах утга**

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

## Суулгаж болох чадварууд {#installable-abilities}

Суулгаж болох чадваруудын бүртгэл нь WordPress plugin хэлбэрээр түгээгддэг нэмэлт чадварын багцуудаар агентыг өргөтгөх боломж олгоно. Багц бүр стандарт чадварын API ашиглан нэг эсвэл хэд хэдэн чадвар бүртгэнэ.

### `list_available_abilities` {#listavailableabilities}

Бүртгэлээс суулгах боломжтой чадварын багцуудын каталогийг буцаана.

**Параметрүүд**

| Параметр | Төрөл | Шаардлагатай | Тайлбар |
|---|---|---|---|
| `category` | string | Үгүй | Ангиллаар шүүх: `ecommerce`, `seo`, `media`, `social`, `developer` |

**Буцаана**

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

Бүртгэлээс чадварын багцыг татаж авч идэвхжүүлнэ.

**Параметрүүд**

| Параметр | Төрөл | Шаардлагатай | Тайлбар |
|---|---|---|---|
| `slug` | string | Тийм | Чадварын багцын залгаасын slug |

**Буцаана** `{ "success": true, "slug": "gratis-ai-agent-woocommerce", "abilities_added": 3 }`

---

### `recommend_plugin` {#recommendplugin}

Тайлбарласан хэрэглээний тохиолдолд хамгийн тохиромжтой залгаасыг олохын тулд чадварын бүртгэлээс асууж, сонголтоор түүнийг суулгана.

**Параметрүүд**

| Параметр | Төрөл | Шаардлагатай | Тайлбар |
|---|---|---|---|
| `description` | string | Тийм | Хүссэн ажиллагааны энгийн хэлээр бичсэн тайлбар |
| `install` | boolean | Үгүй | Хэрэв `true` бол санал болгосон залгаасыг шууд суулгана. Анхдагч нь `false` |

**Жишээ**

```json
{
  "description": "I need a contact form with file upload support and spam protection",
  "install": false
}
```

**Буцаана**

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
