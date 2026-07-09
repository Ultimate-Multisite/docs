---
title: Referenca sposobnosti
sidebar_position: 2
_i18n_hash: 1a83460648ea789162af417c6b11eecc
---
# Referenca sposobnosti {#abilities-reference}

Sposobnosti su atomski akcije koje Gratis AI Agent može pozvati na vaš WordPress instalaciji. Svaka sposobnost je registrovana PHP klasa koja prikazuje JSON šemu — agent čita tu šemu u toku rada kako bi razumio koje parametre su potrebni i što sposobnost vraća.

Ova stranica dokumentira sve sposobnosti koje se isporučuju sa Gratis AI Agent v1.9.0.

---

## Custom Post Types (Prilagođeni tipovi postova) {#custom-post-types}

Ove sposobnosti upravljaju prilagođenim tipovima postova (CPT-ovima) registrovanim putem agenta. Registracije se čuvaju u tabeli opcija WordPressa tako da przivode čak i ako plugin prestane raditi ili ponovo aktivira.

### `register_post_type` {#registerposttype}

Registruje novi prilagođeni tip postova.

**Parametri**

| Parametar | Tip | Obavezno | Opis |
|---|---|---|---|
| `slug` | string | Da | Ključ tipa postova (maksimalno 20 karaktera, bez velikih slova i razmaka) |
| `singular_label` | string | Da | Čitljiv naziv u jednine, npr. `Portfolio Item` |
| `plural_label` | string | Da | Čitljiv naziv u množini, npr. `Portfolio Items` |
| `public` | boolean | Ne | Da li je tip postova javno dostupan. Podrazumevano `true` |
| `supports` | array | Ne | Funkcionalnosti koje podržavaju: `title`, `editor`, `thumbnail`, `excerpt`, `comments`, `revisions`, `custom-fields`. Podrazumevano `["title","editor"]` |
| `has_archive` | boolean | Ne | Da li je omogućena stranica arhive tipa postova. Podrazumevano `false` |
| `menu_icon` | string | Ne | Klasa Dashicons-a ili URL za ikonu menija u admin panelu. Podrazumevano `"dashicons-admin-post"` |
| `rewrite_slug` | string | Ne | URL slug za tip postova. Podrazumevano je `slug` |

**Primjer**

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

**Vraća se** `{ "success": true, "slug": "portfolio" }`

---

### `list_post_types` {#listposttypes}

Vraća sve prilagođene tipove postova registrovane od strane agenta.

**Parametri** — nijedan

**Vraća se**

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

De-registruje prilagođeni tip postova koji je prethodno registrovao agent. Postovi tog tipa ostaju u bazi podataka, ali više nisu dostupni putem tipa postova.

**Parametri**

| Parametar | Tip | Obavezno | Opis |
|---|---|---|---|
| `slug` | string | Da | Ključ tipa postova koji treba ukloniti |

**Vraća se** `{ "success": true, "slug": "portfolio" }`

---

## Custom Taxonomies (Prilagođene taksonomije) {#custom-taxonomies}

Ove sposobnosti upravljaju prilagođenim taksonomijama. Kao i CPT-ovi, registracije taksonomija se čuvaju.

### `register_taxonomy` {#registertaxonomy}

Registruje novu prilagođenu taksonomiju.

**Parametri**

| Parametar | Tip | Obavezno | Opis |
|---|---|---|---|
| `slug` | string | Da | Ključ taksonomije (maksimalno 32 karaktera) |
| `singular_label` | string | Da | Čitljiv naziv u jednine, npr. `Project Category` |
| `plural_label` | string | Da | Čitljiv naziv u množini, npr. `Project Categories` |
| `post_types` | array | Da | Slugi tipova postova na koje treba pripomoćati ovu taksonomiju |
| `hierarchical` | boolean | Ne | `true` za stil kategorije, `false` za stil taga. Podrazumevano `true` |
| `public` | boolean | Ne | Da li su termini javno dostupni. Podrazumevano `true` |
| `rewrite_slug` | string | Ne | URL slug za taksonomiju. Podrazumevano je `slug` |

**Primjer**

```json
{
  "slug": "project-category",
  "singular_label": "Project Category",
  "plural_label": "Project Categories",
  "post_types": ["portfolio"],
  "hierarchical": true
}
```

**Vraća se** `{ "success": true, "slug": "project-category" }`

---

### `list_taxonomies` {#listtaxonomies}

Vraća sve prilagođene taksonomije registrovane od strane agenta.

**Parametri** — nijedan

**Vraća se**

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

De-registruje prilagođenu taksonomiju koja je prethodno registrovana od strane agenta.

**Parametri**

| Parametar | Tip | Obavezno | Opis |
|---|---|---|---|
| `slug` | string | Da | Ključ taksonomije koji treba ukloniti |

**Vraća se** `{ "success": true, "slug": "project-category" }`

---

## Design System (Dizajns sistem) {#design-system}

Sposobnosti dizajna sistema modifikuju vizuelni prikaz WordPress stranice — od prilagođenog CSS-a do obrazaca blokova i logotipa stranice.

### `inject_custom_css` {#injectcustomcss}

Dodaje CSS u `<head>` stranice putem funkcije `wp_add_inline_style`. CSS se čuva u opciji `gratis_ai_agent_custom_css` i čistije se uklanja kada se sposobnost resetuje.

**Parametri**

| Parametar | Tip | Obavezno | Opis |
|---|---|---|---|
| `css` | string | Da | Važan CSS koji treba ugraditi |
| `label` | string | Ne | Čitljiv naziv za ovaj blok CSS-a, koristi se u debug logovima. Podrazumevano `"agent-injected"` |
| `replace` | boolean | Ne | Ako je `true`, zamjenjuje sve prethodno ugrađeni CSS. Podrazumevano `false` (dodaje) |

**Primjer**

```json
{
  "css": ":root { --primary: #1a1a2e; --accent: #e94560; } body { font-family: 'Inter', sans-serif; }",
  "label": "brand-colours",
  "replace": false
}
```

**Vraća se** `{ "success": true, "bytes": 96 }`

---

### `add_block_pattern` {#addblockpattern}

Registruje ponovljiv obrazac blokova u biblioteci obrazaca WordPressa.

**Parametri**

| Parametar | Tip | Obavezno | Opis |
|---|---|---|---|
| `slug` | string | Da | Identifikator obrasca, npr. `gratis/hero-dark` |
| `title` | string | Da | Čitljiv naziv obrasca koji se prikazuje u editoru |
| `content` | string | Da | Serializovani blok markupa (HTML) za obrazac |
| `categories` | array | Ne | Slugi kategorija obrazaca, npr. `["featured", "hero"]` |
| `description` | string | Ne | Kratak opis koji se prikazuje u odabiru obrazaca |
| `keywords` | array | Ne | Ključne riječi za pretragu |

**Vraća se** `{ "success": true, "slug": "gratis/hero-dark" }`

---

### `list_block_patterns` {#listblockpatterns}

Lista sve obrasce blokova registrovane od strane agenta.

**Parametri** — nijedan

### `set_site_logo` {#setsitelogo}

WordPress sajt logotipini određenom attachment ID-u ili udaljenog URL-a za uvođenje. Kada se pruži URL, slika se preuzima i u Media Library uvozi.

**Parametri**

| Parameter | Tip | Obavezno | Opis |
|---|---|---|---|
| `attachment_id` | integer | Ne | ID postojećeg attachment-a u Media Libraryju |
| `url` | string | Ne | Udaljeni URL slike za uvođenje i postavljanje kao logotipa |

Morate priložiti jedan od `attachment_id` ili `url`.

**Vraća se** `{ "success": true, "attachment_id": 42 }`

---

### `apply_theme_json_preset` {#applythemejsonpreset}

Primjenjuje imenovani predložak boja/tipografije na `theme.json` (ili `global-styles`) aktivnog tema. Predlošci su grupisane pakete koje održava tim Gratis AI Agent tima.

**Parametri**

| Parameter | Tip | Obavezno | Opis |
|---|---|---|---|
| `preset` | string | Da | Naziv predložka, npr. `minimal-dark`, `warm-editorial`, `corporate-blue` |
| `merge` | boolean | Ne | Ako je `true`, spajanje sa postojećim vrijednostima umjesto zamjene. Podrazumevano `false` |

**Dostupni predlošci**

| Predložak | Opis |
|---|---|
| `minimal-dark` | Pozadina skoro crna, bijela tekst, jedna akcentna boja |
| `warm-editorial` | Topla svijetlo bež pozadina, serif naslovi, zemljane akcentne boje |
| `corporate-blue` | Tirkizna i bijela paleta sa profesionalnom tipografijom |
| `vibrant-startup` | Slike (gradienti) jarke boje, zaobljeni uglovi, moderni sans-serif fontovi |
| `classic-blog` | Neutralne sive nijanse, udoban linijski razmak, tradicionalni raspored prostora |

**Vraća se** `{ "success": true, "preset": "minimal-dark" }`

---

## Global Styles {#global-styles}

Global Styles sposobnosti čitaju i pišu vrijednosti `theme.json` putem WordPress Global Styles API-ja, utječući na sve blokove i šablone sita.

### `get_global_styles` {#getglobalstyles}

Vraća trenutnu konfiguraciju globalnih stilova.

**Parametri**

| Parameter | Tip | Obavezno | Opis |
|---|---|---|---|
| `path` | string | Ne | JSON pokazivač na specifičnu vrijednost, npr. `/color/palette` ili `/typography/fontSizes`. Vraća cijeli objekat ako se ne navede. |

**Vraća se** cijeli objekat globalnih stilova ili vrijednost na `path`-u.

---

### `set_global_styles` {#setglobalstyles}

Ažurira jednu ili više vrijednosti u konfiguraciji globalnih stilova.

**Parametri**

| Parameter | Tip | Obavezno | Opis |
|---|---|---|---|
| `path` | string | Da | JSON pokazivač na vrijednost koju želite postaviti, npr. `/color/palette` |
| `value` | any | Da | Nova vrijednost |

**Primjer** — dodavanje boje u paletu

```json
{
  "path": "/color/palette",
  "value": [
    { "slug": "primary", "color": "#1a1a2e", "name": "Primary" },
    { "slug": "accent",  "color": "#e94560", "name": "Accent" }
  ]
}
```

**Vraća se** `{ "success": true, "path": "/color/palette" }`

---

### `reset_global_styles` {#resetglobalstyles}

Resetira sve promjene globalnih stilova primijenjenih od strane agenta, vraćajući podrazumne postavke tema.

**Parametri** — nijedan

**Vraća se** `{ "success": true }`

---

## Navigation Menus {#navigation-menus}

Sposobnosti Navigacionih menija kreiraju i upravljaju WordPress nav menijima i njihovim stavkama.

### `create_menu` {#createmenu}

Kreira novi WordPress navigacijski meni.

**Parametri**

| Parameter | Tip | Obavezno | Opis |
|---|---|---|---|
| `name` | string | Da | Naziv menija, npr. `Primary Navigation` |
| `location` | string | Ne | Lokacija teme kojoj se dodjeljuje ovaj meni, npr. `primary` |

**Vraća se** `{ "success": true, "menu_id": 7 }`

---

### `update_menu` {#updatemenu}

Promjenjuje naziv menija ili ga ponovo dodjeljuje lokaciji u temi.

**Parametri**

| Parameter | Tip | Obavezno | Opis |
|---|---|---|---|
| `menu_id` | integer | Da | ID menija koje želite ažurirati |
| `name` | string | Ne | Novi naziv menija |
| `location` | string | Ne | Lokacija u temi kojoj se dodjeljuje ili ponovo dodjeljuje |

**Vraća se** `{ "success": true, "menu_id": 7 }`

---

### `add_menu_item` {#addmenuitem}

Dodaje stavku u postojeći navigacijski meni.

**Parametri**

| Parameter | Tip | Obavezno | Opis |
|---|---|---|---|
| `menu_id` | integer | Da | ID ciljnog menija |
| `type` | string | Da | Tip stavke: `custom`, `post_type` ili `taxonomy` |
| `title` | string | Ne | Naziv za stavku menija (obavezno za tip `custom`) |
| `url` | string | Ne | URL za stavke tipa `custom` |
| `object_id` | integer | Ne | Post ID ili termin ID za stavke tipa `post_type`/`taxonomy` |
| `parent_id` | integer | Ne | ID stavke menija pod kojom želite ugnježđivati ovu stavku |
| `position` | integer | Ne | Zero-bazna pozicija unutar menija |

**Vraća se** `{ "success": true, "item_id": 12 }`

---

### `remove_menu_item` {#removemenuitem}

Uklanja stavku iz navigacijskog menija.

**Parametri**

| Parameter | Tip | Obavezno | Opis |
|---|---|---|---|
| `item_id` | integer | Da | ID stavke menija koju želite ukloniti |

**Vraća se** `{ "success": true, "item_id": 12 }`

---

### `list_menus` {#listmenus}

Lista sve WordPress navigacijskih menija, uključujući imenovane lokacije u temi.

**Parametri** — nijedan

**Vraća se**

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

## Options Management {#options-management}

Sposobnosti Upravljanja opcijama čitaju i pišu WordPress opcije putem `get_option` / `update_option`. Ugrađena sigurnosna bloklista sprečava slučajnu izmjenu kritičnih postavki.

### `get_option` {#getoption}

Čita WordPress opciju.

**Parametri**

| Parameter | Tip | Obavezno | Opis |
|---|---|---|---|
| `option_name` | string | Da | Ključ opcije, npr. `blogname` |

**Vraća se** `{ "option_name": "blogname", "value": "My Site" }`

Vraća grešku ako je `option_name` na sigurnosnoj bloklisti.

---

### `set_option` {#setoption}

Piše WordPress opciju.

**Parametri**

| Parameter | Tip | Obavezno | Opis |
|---|---|---|---|
| `option_name` | string | Da | Ključ opcije |
| `value` | any | Da | Nova vrijednost (automatski se serializira za nizove/objekte) |
| `autoload` | string | Ne | `"yes"` ili `"no"`. Podrazumevano zadržava postojeće podešavanje autoloada |

Vraća grešku ako je `option_name` na blok listi sigurnosti.

**Vraća se** `{ "success": true, "option_name": "blogname" }`

---

### `delete_option` {#deleteoption}

Briše WordPress opciju.

**Parametri**

| Parameter | Tip | Obavezno | Opis |
|---|---|---|---|
| `option_name` | string | Da | Ključ opcije koji se briše |

Vraća grešku ako je `option_name` na blok listi sigurnosti.

**Vraća se** `{ "success": true, "option_name": "my_custom_option" }`

---

### `list_options` {#listoptions}

Lista WordPress opcija koje odgovaraju određenom obrascu.

**Parametri**

| Parameter | Tip | Obavezno | Opis |
|---|---|---|---|
| `pattern` | string | Ne | SQL LIKE obrazac za filtriranje imena opcija, npr. `gratis_%`. Vraća sve opcije ako se ne navede (koristite s oprezom na velikim bazama podataka). |
| `limit` | integer | Ne | Maksimalan broj rezultata. Podrazumevana vrijednost je `50`, maksimalna je `500` |

**Vraća se**

```json
{
  "options": [
    { "option_name": "gratis_ai_agent_version", "autoload": "yes" }
  ],
  "total": 1
}
```

---

## Upravljanje sadržajem (Content Management) {#content-management}

Sposobnosti upravljanja sadržajem omogućavaju kreiranje i uređivanje WordPress postova i stranica. Vraća se ID posta kako bi sljedeći koraci u planovima sa više sposobnosti mogli referencirati kreirani sadržaj.

### `create_post` {#createpost}

Kreira novi WordPress post, stranicu ili unos tipa prilagođenog postova (custom post type).

**Parametri**

| Parameter | Tip | Obavezno | Opis |
|---|---|---|---|
| `title` | string | Da | Naslov posta |
| `content` | string | Ne | Tekst posta — prihvata običan tekst, HTML ili serializovani mark up bloka (block markup) |
| `status` | string | Ne | Status: `draft`, `publish`, `pending`, `private`. Podrazumevani je `draft` |
| `post_type` | string | Ne | Slug tipa posta, npr. `post`, `page` ili bilo koji registrovani CPT. Podrazumevani je `post` |
| `excerpt` | string | Ne | Kratak sažetak koji se prikazuje u arhivama i rezultatima pretraživanja |
| `categories` | array | Ne | Niz imena kategorija ili ID-jeva za dodjeljivanje |
| `tags` | array | Ne | Niz imena ili ID-jeva tagova za dodjeljivanje |
| `author` | integer | Ne | WordPress korisnički ID koji se postavlja kao autor posta. Podrazumevani je trenutni korisnik |
| `date` | string | Ne | Datum objavljivanja u formatu ISO 8601, npr. `2026-05-01T09:00:00` |
| `page_template` | string | Ne | Šablon datoteke koji se dodjeljuje ovom postu ili stranici, npr. `page-full-width.php`. Znači kada je `post_type` `page` ili CPT koji podržava šablone za stranice. |

**Primjer**

```json
{
  "title": "Dobrodošli na naš novi sajt",
  "content": "<!-- wp:paragraph --><p>Zdravo svijete!</p><!-- /wp:paragraph -->",
  "status": "publish",
  "post_type": "page",
  "page_template": "page-full-width.php"
}
```

**Vraća se** `{ "success": true, "post_id": 42, "permalink": "https://example.com/welcome/" }`

---

### `update_post` {#updatepost}

Ažurira postojeći WordPress post ili stranicu.

**Parametri**

| Parameter | Tip | Obavezno | Opis |
|---|---|---|---|
| `post_id` | integer | Da | ID posta koji se ažurira |
| `title` | string | Ne | Novi naslov posta |
| `content` | string | Ne | Novo tijelo posta |
| `status` | string | Ne | Novi status: `draft`, `publish`, `pending`, `private` |
| `excerpt` | string | Ne | Novi sažetak |
| `categories` | array | Ne | Zamijenite cijeli popis kategorija ovom nizom imena ili ID-jeva |
| `tags` | array | Ne | Zamijenite cijeli popis tagova ovom nizom imena ili ID-jeva |
| `page_template` | string | Ne | Novi šablon datoteke koji se dodjeljuje ovom postu ili stranici, npr. `page-full-width.php`. Proslijedite prazan string da uklonite dodjeljivanje šablona i vratite na podrazmjevni temu. |

**Primjer** — promijenite šablon nakon kreiranja

```json
{
  "post_id": 42,
  "page_template": "page-full-width.php"
}
```

**Vraća se** `{ "success": true, "post_id": 42 }`

---

### `batch_create_posts` {#batchcreateposts}

Kreira više postova u jednoj pozivu sposobnosti (ability call), smanjujući broj zahtjeva tokom izgradnje sajta ili masovne uvoze sadržaja. Postovi se kreiraju sekvencijalno; ako jedan ne uspije, ostali nastavljaju rad i neuspjeh se izvještava u nizu rezultata.

**Parametri**

| Parameter | Tip | Obavezno | Opis |
|---|---|---|---|
| `posts` | array | Da | Niz objekata postova, svaki prihvata iste parametre kao `create_post` |
| `stop_on_error` | boolean | Ne | Ako je `true`, prestanite obradu nakon prvog neuspjeha. Podrazumevano je `false` |

**Primjer**

```json
{
  "posts": [
    {
      "title": "O nama",
      "post_type": "page",
      "status": "publish",
      "page_template": "page-full-width.php"
    },
    {
      "title": "Usluge",
      "post_type": "page",
      "status": "publish"
    },
    {
      "title": "Kontakt",
      "post_type": "page",
      "status": "publish"
    }
  ]
}
```

**Vraća se**

```json
{
  "created": 3,
  "failed": 0,
  "results": [
    { "success": true, "post_id": 42, "title": "O nama" },
    { "success": true, "post_id": 43, "title": "Usluge" },
    { "success": true, "post_id": 44, "title": "Kontakt" }
  ]
}
```

---

### `set_featured_image` {#setfeaturedimage}

Dodjeljuje vizualnu sliku (thumbnail posta) postojećem postu ili stranici. Prihvaća ID priloška iz Media Library-ja ili udaljenu URL sliku; kada se dostavi URL, slika se automatski preuzima i uvozi.

**Parametri**

| Parameter | Tip | Obavezno | Opis |
|---|---|---|---|
| `post_id` | integer | Da | ID posta ili stranice koji se ažurira |
| `attachment_id` | integer | Ne | ID postojećeg priloška iz Media Library-ja |
| `url` | string | Ne | Udaljena URL slika za uvoz i postavljanje kao vizualne slike |
| `alt_text` | string | Ne | Alt tekst koji se primjenjuje na priloš ako se uvozi iz URL-a |

Morate priložiti ili `attachment_id` ili `url`.

**Vraća se** `{ "success": true, "post_id": 42, "attachment_id": 17 }`

---

### `create_contact_form` {#createcontactform}

Kreira kontakt obrazac koristeći aktivni plugin za forme (Contact Form 7, WPForms, Fluent Forms ili Gravity Forms, ovisno o tome koji je instaliran). Vraća kratki kod (shortcode) koji se može ugraditi u bilo koji post ili stranicu.

**Parametri**

## Vizual Pregled {#visual-review}

Vizual Review yetenekleri, ajanın canlı sayfaların ekran görüntülerini almasını ve analiz etmesini sağlar; bu sayede herhangi bir tarayıcı eklentisine ihtiyaç duymadan otonom tasarım incelemesi, öncesi/sonrası karşılaştırmaları ve görsel regresyon kontrolleri yapabilirsiniz.

### `capture_screenshot` {#capturescreenshot}

Belirtilen bir URL'deki WordPress sayfasının ekran görüntüsünü sunucu tarafında çalışan başsız (headless) tarayıcı kullanarak alır. Görüntü Medya Kütüphanesine kaydedilir ve bir CDN URL'si döndürülür.

**Parametreler**

| Parametre | Tip | Zorunlu mu? | Açıklama |
|---|---|---|---|
| `url` | string | Evet | Ekran görüntüsü alınacak sayfanın tam URL'si, örneğin: `https://example.com/about/` |
| `width` | integer | Hayır | Görünüm penceresi genişliği piksel cinsinden. Varsayılan: `1280` |
| `height` | integer | Hayır | Görünüm penceresi yüksekliği piksel cinsinden. Varsayılan: `800` |
| `full_page` | boolean | Hayır | Sadece görünür alanı değil, tüm kaydırılabilir sayfayı yakalayın. Varsayılan: `false` |
| `delay_ms` | integer | Hayır | Sayfa yüklenmesinden sonra yakalama öncesi bekleyeceğiniz milisaniye. Animasyonlu içerikler için kullanışlıdır. Varsayılan: `500` |
| `label` | string | Hayır | Medya Kütüphanesindeki ekle birlikte saklanacak insan tarafından okunabilir etiket. |

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

### `compare_screenshots` {#comparescreenshots}

İki ekran görüntüsünü alır ve bir görsel fark puanı ile değiştirilen bölgeleri vurgulayan bir fark görüntüsü döndürür. Bir tasarım değişikliğinin beklenen sonucu üretip üretmediğini doğrulamak veya istenmeyen geri dönüşleri tespit etmek için kullanışlıdır.

**Parametreler**

| Parametre | Tip | Zorunlu mu? | Açıklama |
|---|---|---|---|
| `before_url` | string | Evet | "Önce" durumu olarak yakalanacak sayfanın URL'si |
| `after_url` | string | Evet | "Sonra" durumu olarak yakalanacak sayfanın URL'si. Zaman boyunca karşılaştırma yapılıyorsa aynı URL olabilir. |
| `width` | integer | Hayır | Her iki yakalama için görünüm penceresi genişliği. Varsayılan: `1280` |
| `threshold` | float | Hayır | Piksel fark eşiği (0.0–1.0). Bu tolerans içindeki pikseller değiştirilmemiş olarak kabul edilir. Varsayılan: `0.1` |

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

### `review_page_design` {#reviewpagedesign}

Bir sayfanın ekran görüntüsünü alır ve görsel analiz için dil modeline gönderir. Düzen, tipografi, renk kullanımı ve erişilebilirlik konularını kapsayan yapılandırılmış bir değerlendirme döndürür.

**Parametreler**

| Parametre | Tip | Zorunlu mu? | Açıklama |
|---|---|---|---|
| `url` | string | Evet | İncelemek için sayfanın tam URL'si |
| `focus` | string | Hayır | Vurgulanacak inceleme alanlarının virgülle ayrılmış listesi: `layout`, `typography`, `colour`, `accessibility`, `mobile`. Varsayılan: tüm alanlar |
| `width` | integer | Hayır | Görünüm penceresi genişliği. Varsayılan: `1280` |

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
    "suggestions": ["WCAG AA'yı geçmek için CTA düğmesini #1a5cb0 ile koyulaştırın", "Kahraman görseline açıklayıcı alt metin ekleyin"]
  }
}
```

---

## Kurulabilir Yetenekler {#installable-abilities}

Kurulabilir Yetenekler Kaydı, ajanı WordPress eklentileri olarak dağıtılan ek yetenek paketleriyle genişletmenize olanak tanır. Her paket, standart yetenek API'sini kullanarak bir veya daha fazla yeteneği kaydeder.

### `list_available_abilities` {#listavailableabilities}

Kayıttan kurulabilecek yetenek paketlerinin kataloğunu döndürür.

**Parametreler**

| Parametar | Tip | Obavezno | Opis |
|---|---|---|---|
| `category` | string | Ne | Filtriranje po kategoriji: `ecommerce`, `seo`, `media`, `social`, `developer` |

**Vraća se**

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

Preuzima i aktivira paket sposobnosti iz registara.

**Parametri**

| Parametar | Tip | Obavezno | Opis |
|---|---|---|---|
| `slug` | string | Da | Slug dodatka (plugin) paketa sposobnosti |

**Vraća se** `{ "success": true, "slug": "gratis-ai-agent-woocommerce", "abilities_added": 3 }`

---

### `recommend_plugin` {#recommendplugin}

Pretražuje registar sposobnosti da pronađe najbolji plugin za opisan slučaj upotrebe i, opciono, ga instalira.

**Parametri**

| Parametar | Tip | Obavezno | Opis |
|---|---|---|---|
| `description` | string | Da | Opis željene funkcionalnosti u prirodnom jeziku |
| `install` | boolean | Ne | Ako je `true`, preporučeni plugin se odmah instalira. Podrazumevana vrednost je `false` |

**Primer**

```json
{
  "description": "Treba mi kontakt forma sa podrškom za upload datoteka i zaštitom od spam-a",
  "install": false
}
```

**Vraća se**

```json
{
  "recommendation": {
    "slug": "contact-form-7",
    "name": "Contact Form 7",
    "reason": "Široko prihvaćen, podržava upload datoteka i integrisan je sa Akismetom za filtriranje spam-a.",
    "alternatives": ["wpforms-lite", "fluent-forms"]
  }
}
```
