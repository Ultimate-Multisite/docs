---
title: Qobiliyatlar maʼlumotnomasi
sidebar_position: 2
_i18n_hash: 1a83460648ea789162af417c6b11eecc
---
# Imkoniyatlar ma'lumotnomasi

Imkoniyatlar — Gratis AI Agent sizning WordPress o‘rnatmangizda chaqira oladigan atomar amallardir. Har bir imkoniyat JSON sxemasini taqdim etadigan ro‘yxatdan o‘tgan PHP klassidir — agent ish vaqtida ushbu sxemani o‘qib, qanday parametrlar talab qilinishini va imkoniyat nima qaytarishini tushunadi.

Bu sahifada Gratis AI Agent v1.9.0 bilan birga keladigan barcha imkoniyatlar hujjatlashtirilgan.

---

## Maxsus post turlari

Bu imkoniyatlar agent orqali ro‘yxatdan o‘tkazilgan maxsus post turlarini (CPT) boshqaradi. Ro‘yxatga olishlar WordPress options jadvalida saqlanadi, shuning uchun ular plugin o‘chirib qo‘yilishi va qayta faollashtirilishidan keyin ham saqlanib qoladi.

### `register_post_type`

Yangi maxsus post turini ro‘yxatdan o‘tkazadi.

**Parametrlar**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `slug` | string | Yes | Post turi kaliti (ko‘pi bilan 20 ta belgi, bosh harflarsiz, bo‘shliqlarsiz) |
| `singular_label` | string | Yes | Inson o‘qiy oladigan birlik nom, masalan `Portfolio Item` |
| `plural_label` | string | Yes | Inson o‘qiy oladigan ko‘plik nom, masalan `Portfolio Items` |
| `public` | boolean | No | Post turi ommaga ochiq foydalanish mumkinmi. Standart `true` |
| `supports` | array | No | Qo‘llab-quvvatlanadigan funksiyalar: `title`, `editor`, `thumbnail`, `excerpt`, `comments`, `revisions`, `custom-fields`. Standart `["title","editor"]` |
| `has_archive` | boolean | No | Post turi arxiv sahifasi yoqilganmi. Standart `false` |
| `menu_icon` | string | No | Admin menyu belgisi uchun Dashicons klassi yoki URL. Standart `"dashicons-admin-post"` |
| `rewrite_slug` | string | No | Post turi uchun URL slug. Standart qiymat `slug` |

**Misol**

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

**Qaytaradi** `{ "success": true, "slug": "portfolio" }`

---

### `list_post_types`

Agent tomonidan ro‘yxatdan o‘tkazilgan barcha maxsus post turlarini qaytaradi.

**Parametrlar** — yo‘q

**Qaytaradi**

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

Agent tomonidan avval ro‘yxatdan o‘tkazilgan maxsus post turini ro‘yxatdan chiqaradi. Ushbu turdagi mavjud postlar ma'lumotlar bazasida qoladi, ammo endi post turi orqali ularga kirib bo‘lmaydi.

**Parametrlar**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `slug` | string | Yes | O‘chiriladigan post turi kaliti |

**Qaytaradi** `{ "success": true, "slug": "portfolio" }`

---

## Maxsus taksonomiyalar

Bu imkoniyatlar maxsus taksonomiyalarni boshqaradi. CPTlar kabi, taksonomiya ro‘yxatga olishlari ham saqlanadi.

### `register_taxonomy`

Yangi maxsus taksonomiyani ro‘yxatdan o‘tkazadi.

**Parametrlar**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `slug` | string | Yes | Taksonomiya kaliti (ko‘pi bilan 32 ta belgi) |
| `singular_label` | string | Yes | Inson o‘qiy oladigan birlik nom, masalan `Project Category` |
| `plural_label` | string | Yes | Inson o‘qiy oladigan ko‘plik nom, masalan `Project Categories` |
| `post_types` | array | Yes | Ushbu taksonomiya biriktirilishi kerak bo‘lgan post turi sluglari |
| `hierarchical` | boolean | No | Kategoriya uslubi uchun `true`, teg uslubi uchun `false`. Standart `true` |
| `public` | boolean | No | Terminlar ommaga ochiq foydalanish mumkinmi. Standart `true` |
| `rewrite_slug` | string | No | Taksonomiya uchun URL slug. Standart qiymat `slug` |

**Misol**

```json
{
  "slug": "project-category",
  "singular_label": "Project Category",
  "plural_label": "Project Categories",
  "post_types": ["portfolio"],
  "hierarchical": true
}
```

**Qaytaradi** `{ "success": true, "slug": "project-category" }`

---

### `list_taxonomies`

Agent tomonidan ro‘yxatdan o‘tkazilgan barcha maxsus taksonomiyalarni qaytaradi.

**Parametrlar** — yo‘q

**Qaytaradi**

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

Agent tomonidan avval ro‘yxatdan o‘tkazilgan maxsus taksonomiyani ro‘yxatdan chiqaradi.

**Parametrlar**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `slug` | string | Yes | O‘chiriladigan taksonomiya kaliti |

**Qaytaradi** `{ "success": true, "slug": "project-category" }`

---

## Dizayn tizimi

Dizayn tizimi imkoniyatlari WordPress saytining vizual ko‘rinishini o‘zgartiradi — maxsus CSSdan tortib blok andozalari va sayt logosigacha.

### `inject_custom_css`

`wp_add_inline_style` orqali saytning `<head>` qismiga CSS qo‘shadi. CSS `gratis_ai_agent_custom_css` optionida saqlanadi va imkoniyat reset qilinganda toza tarzda dequeued qilinadi.

**Parametrlar**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `css` | string | Yes | Kiritish uchun yaroqli CSS |
| `label` | string | No | Debug loglarida ishlatiladigan ushbu CSS bloki uchun inson o‘qiy oladigan yorliq. Standart `"agent-injected"` |
| `replace` | boolean | No | Agar `true` bo‘lsa, avval kiritilgan barcha CSSni almashtiradi. Standart `false` (qo‘shib boradi) |

**Misol**

```json
{
  "css": ":root { --primary: #1a1a2e; --accent: #e94560; } body { font-family: 'Inter', sans-serif; }",
  "label": "brand-colours",
  "replace": false
}
```

**Qaytaradi** `{ "success": true, "bytes": 96 }`

---

### `add_block_pattern`

WordPress andoza kutubxonasida qayta foydalaniladigan blok andozasini ro‘yxatdan o‘tkazadi.

**Parametrlar**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `slug` | string | Yes | Andoza identifikatori, masalan `gratis/hero-dark` |
| `title` | string | Yes | Muharrirda ko‘rsatiladigan inson o‘qiy oladigan andoza nomi |
| `content` | string | Yes | Andoza uchun serializatsiya qilingan blok markup (HTML) |
| `categories` | array | No | Andoza kategoriya sluglari, masalan `["featured", "hero"]` |
| `description` | string | No | Andoza tanlagichda ko‘rsatiladigan qisqa tavsif |
| `keywords` | array | No | Qidiruv kalit so‘zlari |

**Qaytaradi** `{ "success": true, "slug": "gratis/hero-dark" }`

---

### `list_block_patterns`

Agent tomonidan ro‘yxatdan o‘tkazilgan barcha blok andozalarini ro‘yxatlaydi.

**Parametrlar** — yo‘q

**Qaytaradi**

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

### `set_site_logo`

WordPress sayt logosini berilgan biriktirma IDsi yoki masofaviy rasm URLiga sozlaydi. URL taqdim etilganda, rasm yuklab olinadi va Media Libraryga import qilinadi.

**Parametrlar**

| Parametr | Tur | Majburiy | Tavsif |
|---|---|---|---|
| `attachment_id` | integer | Yo‘q | Mavjud Media Library biriktirmasining IDsi |
| `url` | string | Yo‘q | Import qilish va logo sifatida sozlash uchun masofaviy rasm URLi |

`attachment_id` yoki `url`dan biri taqdim etilishi kerak.

**Qaytaradi** `{ "success": true, "attachment_id": 42 }`

---

### `apply_theme_json_preset`

Nomlangan rang/tipografiya presetini faol themening `theme.json` (yoki `global-styles`)iga qo‘llaydi. Presetlar Gratis AI Agent jamoasi tomonidan yuritiladigan saralangan to‘plamlardir.

**Parametrlar**

| Parametr | Tur | Majburiy | Tavsif |
|---|---|---|---|
| `preset` | string | Ha | Preset nomi, masalan `minimal-dark`, `warm-editorial`, `corporate-blue` |
| `merge` | boolean | Yo‘q | Agar `true` bo‘lsa, almashtirish o‘rniga mavjud qiymatlar bilan birlashtiradi. Standart `false` |

**Mavjud presetlar**

| Preset | Tavsif |
|---|---|
| `minimal-dark` | Deyarli qora fon, oq matn, bitta urg‘u rangi |
| `warm-editorial` | Iliq oqsimon fon, serif sarlavhalar, tabiiy tusdagi urg‘u ranglari |
| `corporate-blue` | Professional tipografiyaga ega to‘q ko‘k va oq palitra |
| `vibrant-startup` | Yorqin gradientlar, yumaloq burchaklar, zamonaviy sans-serif shrift |
| `classic-blog` | Neytral kulranglar, qulay satr balandligi, an’anaviy maket oraliqlari |

**Qaytaradi** `{ "success": true, "preset": "minimal-dark" }`

---

## Global Styles

Global Styles imkoniyatlari WordPress Global Styles API orqali theme.json qiymatlarini o‘qiydi va yozadi, butun sayt bo‘ylab barcha bloklar va shablonlarga ta’sir qiladi.

### `get_global_styles`

Joriy global uslublar konfiguratsiyasini qaytaradi.

**Parametrlar**

| Parametr | Tur | Majburiy | Tavsif |
|---|---|---|---|
| `path` | string | Yo‘q | Muayyan qiymatga JSON pointer, masalan `/color/palette` yoki `/typography/fontSizes`. Kiritilmasa, butun obyektni qaytaradi. |

**Qaytaradi** to‘liq global uslublar obyekti yoki `path`dagi qiymat.

---

### `set_global_styles`

Global uslublar konfiguratsiyasidagi bir yoki bir nechta qiymatni yangilaydi.

**Parametrlar**

| Parametr | Tur | Majburiy | Tavsif |
|---|---|---|---|
| `path` | string | Ha | Sozlanadigan qiymatga JSON pointer, masalan `/color/palette` |
| `value` | any | Ha | Yangi qiymat |

**Misol** — palitraga rang qo‘shish

```json
{
  "path": "/color/palette",
  "value": [
    { "slug": "primary", "color": "#1a1a2e", "name": "Primary" },
    { "slug": "accent",  "color": "#e94560", "name": "Accent" }
  ]
}
```

**Qaytaradi** `{ "success": true, "path": "/color/palette" }`

---

### `reset_global_styles`

Agent tomonidan qo‘llangan barcha global uslublar o‘zgarishlarini qayta tiklaydi va themening standart qiymatlarini tiklaydi.

**Parametrlar** — yo‘q

**Qaytaradi** `{ "success": true }`

---

## Navigatsiya menyulari

Navigation Menu imkoniyatlari WordPress navigatsiya menyularini va ularning elementlarini yaratadi hamda boshqaradi.

### `create_menu`

Yangi WordPress navigatsiya menyusini yaratadi.

**Parametrlar**

| Parametr | Tur | Majburiy | Tavsif |
|---|---|---|---|
| `name` | string | Ha | Menyu nomi, masalan `Primary Navigation` |
| `location` | string | Yo‘q | Bu menyu tayinlanadigan theme joylashuvi, masalan `primary` |

**Qaytaradi** `{ "success": true, "menu_id": 7 }`

---

### `update_menu`

Menyu nomini o‘zgartiradi yoki uni theme joylashuviga qayta tayinlaydi.

**Parametrlar**

| Parametr | Tur | Majburiy | Tavsif |
|---|---|---|---|
| `menu_id` | integer | Ha | Yangilanadigan menyu IDsi |
| `name` | string | Yo‘q | Yangi menyu nomi |
| `location` | string | Yo‘q | Tayinlanadigan yoki qayta tayinlanadigan theme joylashuvi |

**Qaytaradi** `{ "success": true, "menu_id": 7 }`

---

### `add_menu_item`

Mavjud navigatsiya menyusiga element qo‘shadi.

**Parametrlar**

| Parametr | Tur | Majburiy | Tavsif |
|---|---|---|---|
| `menu_id` | integer | Ha | Maqsad menyu IDsi |
| `type` | string | Ha | Element turi: `custom`, `post_type` yoki `taxonomy` |
| `title` | string | Yo‘q | Menyu elementi uchun yorliq (`custom` turi uchun majburiy) |
| `url` | string | Yo‘q | `custom` elementlari uchun URL |
| `object_id` | integer | Yo‘q | `post_type`/`taxonomy` elementlari uchun post IDsi yoki termin IDsi |
| `parent_id` | integer | Yo‘q | Bu elementni ichiga joylashtirish uchun menyu elementi IDsi |
| `position` | integer | Yo‘q | Menyudagi noldan boshlanadigan pozitsiya |

**Qaytaradi** `{ "success": true, "item_id": 12 }`

---

### `remove_menu_item`

Navigatsiya menyusidan elementni olib tashlaydi.

**Parametrlar**

| Parametr | Tur | Majburiy | Tavsif |
|---|---|---|---|
| `item_id` | integer | Ha | Olib tashlanadigan menyu elementi IDsi |

**Qaytaradi** `{ "success": true, "item_id": 12 }`

---

### `list_menus`

Barcha WordPress navigatsiya menyularini, jumladan ularga tayinlangan theme joylashuvlarini ro‘yxatlaydi.

**Parametrlar** — yo‘q

**Qaytaradi**

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

## Options boshqaruvi

Options imkoniyatlari WordPress optionsni `get_option` / `update_option` orqali o‘qiydi va yozadi. Ichki xavfsizlik blok ro‘yxati muhim sozlamalarning tasodifiy o‘zgartirilishini oldini oladi.

### `get_option`

WordPress optionni o‘qiydi.

**Parametrlar**

| Parametr | Tur | Majburiy | Tavsif |
|---|---|---|---|
| `option_name` | string | Ha | Option kaliti, masalan `blogname` |

**Qaytaradi** `{ "option_name": "blogname", "value": "My Site" }`

Agar `option_name` xavfsizlik blok ro‘yxatida bo‘lsa, xatolik qaytaradi.

---

### `set_option`

WordPress optionni yozadi.

**Parametrlar**

| Parametr | Tur | Majburiy | Tavsif |
|---|---|---|---|
| `option_name` | string | Ha | Option kaliti |
| `value` | any | Ha | Yangi qiymat (massivlar/obyektlar uchun avtomatik serializatsiya qilinadi) |
| `autoload` | string | Yo‘q | `"yes"` yoki `"no"`. Standart mavjud autoload sozlamasini saqlab qoladi |

Agar `option_name` xavfsizlik blocklistida bo‘lsa, xato qaytaradi.

**Qaytaradi** `{ "success": true, "option_name": "blogname" }`

---

### `delete_option`

WordPress opsiyasini o‘chiradi.

**Parametrlar**

| Parametr | Tur | Majburiy | Tavsif |
|---|---|---|---|
| `option_name` | string | Ha | O‘chiriladigan opsiyning kaliti |

Agar `option_name` xavfsizlik blocklistida bo‘lsa, xato qaytaradi.

**Qaytaradi** `{ "success": true, "option_name": "my_custom_option" }`

---

### `list_options`

Andozaga mos keladigan WordPress opsiyalarini ro‘yxatlaydi.

**Parametrlar**

| Parametr | Tur | Majburiy | Tavsif |
|---|---|---|---|
| `pattern` | string | Yo‘q | Opsiya nomlarini filtrlash uchun SQL LIKE andozasi, masalan `gratis_%`. Tushirib qoldirilsa, barcha opsiyalarni qaytaradi (katta ma’lumotlar bazalarida ehtiyotkorlik bilan foydalaning). |
| `limit` | integer | Yo‘q | Natijalarning maksimal soni. Standart `50`, maksimal `500` |

**Qaytaradi**

```json
{
  "options": [
    { "option_name": "gratis_ai_agent_version", "autoload": "yes" }
  ],
  "total": 1
}
```

---

## Kontent boshqaruvi

Kontent boshqaruvi imkoniyatlari WordPress postlari va sahifalarini yaratadi hamda tahrirlaydi. Post IDlari qaytariladi, shunda ko‘p imkoniyatli rejalardagi keyingi qadamlar yaratilgan kontentga murojaat qila oladi.

### `create_post`

Yangi WordPress posti, sahifasi yoki maxsus post turi yozuvini yaratadi.

**Parametrlar**

| Parametr | Tur | Majburiy | Tavsif |
|---|---|---|---|
| `title` | string | Ha | Post sarlavhasi |
| `content` | string | Yo‘q | Post matni — oddiy matn, HTML yoki serializatsiya qilingan blok belgilashini qabul qiladi |
| `status` | string | Yo‘q | `draft`, `publish`, `pending`, `private`. Standart `draft` |
| `post_type` | string | Yo‘q | Post turi slugi, masalan `post`, `page` yoki ro‘yxatdan o‘tgan istalgan CPT. Standart `post` |
| `excerpt` | string | Yo‘q | Arxivlar va qidiruv natijalarida ko‘rsatiladigan qisqa xulosa |
| `categories` | array | Yo‘q | Tayinlash uchun kategoriya nomlari yoki IDlari massivi |
| `tags` | array | Yo‘q | Tayinlash uchun teg nomlari yoki IDlari massivi |
| `author` | integer | Yo‘q | Post muallifi sifatida belgilash uchun WordPress foydalanuvchi IDsi. Standart joriy foydalanuvchi |
| `date` | string | Yo‘q | ISO 8601 formatidagi chop etish sanasi, masalan `2026-05-01T09:00:00` |
| `page_template` | string | Yo‘q | Ushbu post yoki sahifaga tayinlanadigan shablon fayli, masalan `page-full-width.php`. Faqat `post_type` `page` bo‘lganda yoki sahifa shablonlarini qo‘llab-quvvatlaydigan CPT uchun ma’noli. |

**Misol**

```json
{
  "title": "Welcome to Our New Site",
  "content": "<!-- wp:paragraph --><p>Hello world!</p><!-- /wp:paragraph -->",
  "status": "publish",
  "post_type": "page",
  "page_template": "page-full-width.php"
}
```

**Qaytaradi** `{ "success": true, "post_id": 42, "permalink": "https://example.com/welcome/" }`

---

### `update_post`

Mavjud WordPress posti yoki sahifasini yangilaydi.

**Parametrlar**

| Parametr | Tur | Majburiy | Tavsif |
|---|---|---|---|
| `post_id` | integer | Ha | Yangilanadigan post IDsi |
| `title` | string | Yo‘q | Yangi post sarlavhasi |
| `content` | string | Yo‘q | Yangi post matni |
| `status` | string | Yo‘q | Yangi holat: `draft`, `publish`, `pending`, `private` |
| `excerpt` | string | Yo‘q | Yangi parcha |
| `categories` | array | Yo‘q | To‘liq kategoriya ro‘yxatini ushbu nomlar yoki IDlar massivi bilan almashtiradi |
| `tags` | array | Yo‘q | To‘liq teg ro‘yxatini ushbu nomlar yoki IDlar massivi bilan almashtiradi |
| `page_template` | string | Yo‘q | Ushbu post yoki sahifaga tayinlanadigan yangi shablon fayli, masalan `page-full-width.php`. Shablon tayinlovini olib tashlash va theme standartiga qaytish uchun bo‘sh satr yuboring. |

**Misol** — yaratilgandan keyin shablonni o‘zgartirish

```json
{
  "post_id": 42,
  "page_template": "page-full-width.php"
}
```

**Qaytaradi** `{ "success": true, "post_id": 42 }`

---

### `batch_create_posts`

Bitta imkoniyat chaqiruvida bir nechta post yaratadi, site qurish yoki ommaviy kontent importi vaqtida borib-kelishlarni kamaytiradi. Postlar ketma-ket yaratiladi; agar bittasi muvaffaqiyatsiz tugasa, boshqalari davom etadi va muvaffaqiyatsizlik natijalar massivida xabar qilinadi.

**Parametrlar**

| Parametr | Tur | Majburiy | Tavsif |
|---|---|---|---|
| `posts` | array | Ha | Post obyektlari massivi, har biri `create_post` bilan bir xil parametrlarni qabul qiladi |
| `stop_on_error` | boolean | Yo‘q | Agar `true` bo‘lsa, birinchi muvaffaqiyatsizlikdan keyin ishlov berishni to‘xtatadi. Standart `false` |

**Misol**

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

**Qaytaradi**

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

### `set_featured_image`

Mavjud post yoki sahifaga ajratilgan rasmni (post miniatyurasini) tayinlaydi. Mavjud Media Library biriktirma IDsi yoki masofaviy rasm URLini qabul qiladi; URL berilganda, rasm avtomatik yuklab olinadi va import qilinadi.

**Parametrlar**

| Parametr | Tur | Majburiy | Tavsif |
|---|---|---|---|
| `post_id` | integer | Ha | Yangilanadigan post yoki sahifa IDsi |
| `attachment_id` | integer | Yo‘q | Mavjud Media Library biriktirmasi IDsi |
| `url` | string | Yo‘q | Import qilish va ajratilgan rasm sifatida belgilash uchun masofaviy rasm URLi |
| `alt_text` | string | Yo‘q | Agar URLdan import qilinsa, biriktirmaga qo‘llanadigan alt matn |

`attachment_id` yoki `url` dan biri taqdim etilishi kerak.

**Qaytaradi** `{ "success": true, "post_id": 42, "attachment_id": 17 }`

---

### `create_contact_form`

Faol forma pluginidan (qaysi biri o‘rnatilganiga qarab Contact Form 7, WPForms, Fluent Forms yoki Gravity Forms) foydalanib kontakt formasini yaratadi. Istalgan post yoki sahifaga joylashtirilishi mumkin bo‘lgan shortcode qaytaradi.

**Parametrlar**

| Parametr | Tur | Majburiy | Tavsif |
|---|---|---|---|
| `title` | string | Ha | form plugin administratsiyasida ko‘rsatiladigan forma nomi |
| `fields` | array | Ha | forma maydonlarining tartiblangan ro‘yxati (quyidagi Field obyektiga qarang) |
| `recipient` | string | Yo‘q | yuborilgan ma’lumotlarni qabul qilish uchun email manzili. Standart qiymat WordPress admin email manziliga teng |
| `subject` | string | Yo‘q | email mavzu qatori. Contact Form 7 ishlatilganda `[your-name]` va `[your-subject]` placeholderlarini qo‘llab-quvvatlaydi |
| `confirmation_message` | string | Yo‘q | muvaffaqiyatli yuborishdan keyin ko‘rsatiladigan xabar. Standart: `"Thank you for your message. We'll be in touch soon."` |

**Field obyekti**

| Kalit | Tur | Majburiy | Tavsif |
|---|---|---|---|
| `name` | string | Ha | ichki maydon nomi / mashina kaliti |
| `label` | string | Ha | formada ko‘rsatiladigan inson o‘qiy oladigan yorliq |
| `type` | string | Ha | `text`, `email`, `tel`, `textarea`, `select`, `checkbox`, `radio`, `file`, `date` |
| `required` | boolean | Yo‘q | yuborishdan oldin maydon to‘ldirilishi shartmi. Standart `false` |
| `options` | array | Yo‘q | `select`, `checkbox` va `radio` maydonlari uchun variantlar |
| `placeholder` | string | Yo‘q | matn turidagi kiritishlar uchun placeholder matni |

**Misol**

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

**Qaytaradi**

```json
{
  "success": true,
  "form_id": 3,
  "shortcode": "[contact-form-7 id=\"3\" title=\"Restaurant Booking Enquiry\"]"
}
```

---

## Vizual ko‘rib chiqish

Visual Review imkoniyatlari agentga jonli sahifalarning skrinshotlarini olish va ularni tahlil qilish imkonini beradi, bu esa hech qanday brauzer kengaytmasini talab qilmasdan avtonom dizayn ko‘rib chiqishi, oldin/keyin taqqoslashlari va vizual regressiya tekshiruvlarini amalga oshirishga imkon yaratadi.

### `capture_screenshot`

Server tomonidagi headless brauzer yordamida berilgan URL manzilidagi WordPress sahifasining skrinshotini oladi. Rasm Media Libraryga saqlanadi va CDN URL qaytariladi.

**Parametrlar**

| Parametr | Tur | Majburiy | Tavsif |
|---|---|---|---|
| `url` | string | Ha | skrinshot olinadigan sahifaning to‘liq URL manzili, masalan `https://example.com/about/` |
| `width` | integer | Yo‘q | viewport kengligi pikselda. Standart `1280` |
| `height` | integer | Yo‘q | viewport balandligi pikselda. Standart `800` |
| `full_page` | boolean | Yo‘q | faqat viewport o‘rniga to‘liq aylantiriladigan sahifani olish. Standart `false` |
| `delay_ms` | integer | Yo‘q | sahifa yuklangandan keyin olishdan oldin kutiladigan millisekundlar, animatsiyali kontent uchun foydali. Standart `500` |
| `label` | string | Yo‘q | Media Librarydagi biriktirma bilan saqlanadigan inson o‘qiy oladigan yorliq |

**Qaytaradi**

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

Ikki skrinshotni oladi va vizual farq ballini hamda o‘zgargan hududlarni ajratib ko‘rsatadigan farq rasmini qaytaradi. Dizayn o‘zgarishi kutilgan natijani berganini tasdiqlash yoki kutilmagan regressiyalarni aniqlash uchun foydali.

**Parametrlar**

| Parametr | Tur | Majburiy | Tavsif |
|---|---|---|---|
| `before_url` | string | Ha | “oldin” holati sifatida olinadigan sahifaning URL manzili |
| `after_url` | string | Ha | “keyin” holati sifatida olinadigan sahifaning URL manzili. Vaqt bo‘yicha taqqoslanayotgan bo‘lsa, bir xil URL bo‘lishi mumkin |
| `width` | integer | Yo‘q | ikkala olish uchun viewport kengligi. Standart `1280` |
| `threshold` | float | Yo‘q | piksel farqi chegarasi (0.0–1.0). Ushbu bardoshlilik ichidagi piksellar o‘zgarmagan deb hisoblanadi. Standart `0.1` |

**Qaytaradi**

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

`0.0` qiymatidagi `diff_score` ko‘rinadigan o‘zgarish yo‘qligini anglatadi; `1.0` har bir piksel o‘zgarganini anglatadi.

---

### `review_page_design`

Sahifaning skrinshotini oladi va uni vizual tahlil uchun til modeliga yuboradi. Joylashuv, tipografiya, ranglardan foydalanish va accessibility muammolarini qamrab olgan tuzilmali baholashni qaytaradi.

**Parametrlar**

| Parametr | Tur | Majburiy | Tavsif |
|---|---|---|---|
| `url` | string | Ha | ko‘rib chiqiladigan sahifaning to‘liq URL manzili |
| `focus` | string | Yo‘q | urg‘u beriladigan ko‘rib chiqish sohalarining vergul bilan ajratilgan ro‘yxati: `layout`, `typography`, `colour`, `accessibility`, `mobile`. Standart: barcha sohalar |
| `width` | integer | Yo‘q | viewport kengligi. Standart `1280` |

**Qaytaradi**

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

## O‘rnatiladigan imkoniyatlar

O‘rnatiladigan imkoniyatlar Registry agentni WordPress pluginlari sifatida tarqatiladigan qo‘shimcha imkoniyat paketlari bilan kengaytirishga imkon beradi. Har bir paket standart imkoniyat API yordamida bir yoki bir nechta imkoniyatni ro‘yxatdan o‘tkazadi.

### `list_available_abilities`

Registrydan o‘rnatish uchun mavjud bo‘lgan imkoniyat paketlari katalogini qaytaradi.

**Parametrlar**

| Parametr | Tur | Majburiy | Tavsif |
|---|---|---|---|
| `category` | string | Yo‘q | Kategoriya bo‘yicha filtrlash: `ecommerce`, `seo`, `media`, `social`, `developer` |

**Qaytaradi**

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

Reyestrdan qobiliyat paketini yuklab oladi va faollashtiradi.

**Parametrlar**

| Parametr | Tur | Majburiy | Tavsif |
|---|---|---|---|
| `slug` | string | Ha | Qobiliyat paketi plugin slugi |

**Qaytaradi** `{ "success": true, "slug": "gratis-ai-agent-woocommerce", "abilities_added": 3 }`

---

### `recommend_plugin`

Ta’riflangan foydalanish holati uchun eng yaxshi pluginni topish maqsadida qobiliyatlar reyestriga so‘rov yuboradi va, ixtiyoriy ravishda, uni o‘rnatadi.

**Parametrlar**

| Parametr | Tur | Majburiy | Tavsif |
|---|---|---|---|
| `description` | string | Ha | Kerakli funksionallikning tabiiy tildagi tavsifi |
| `install` | boolean | Yo‘q | Agar `true` bo‘lsa, tavsiya etilgan pluginni darhol o‘rnatadi. Standart `false` |

**Misol**

```json
{
  "description": "I need a contact form with file upload support and spam protection",
  "install": false
}
```

**Qaytaradi**

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
