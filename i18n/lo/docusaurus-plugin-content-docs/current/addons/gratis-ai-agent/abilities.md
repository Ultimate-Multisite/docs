---
title: ອ້າງອີງຄວາມສາມາດ
sidebar_position: 2
_i18n_hash: 1a83460648ea789162af417c6b11eecc
---
# ອ້າງອີງຄວາມສາມາດ {#abilities-reference}

ຄວາມສາມາດແມ່ນການກະທຳຍ່ອຍພື້ນຖານທີ່ Gratis AI Agent ສາມາດເອີ້ນໃຊ້ໃນການຕິດຕັ້ງ WordPress ຂອງທ່ານ. ແຕ່ລະຄວາມສາມາດແມ່ນ PHP class ທີ່ລົງທະບຽນໄວ້ ເຊິ່ງເປີດເຜີຍ JSON schema — ຕົວແທນຈະອ່ານ schema ນີ້ໃນຂະນະເຮັດວຽກ ເພື່ອເຂົ້າໃຈວ່າຕ້ອງການພາຣາມິເຕີໃດ ແລະຄວາມສາມາດນັ້ນສົ່ງຄືນຫຍັງ.

ໜ້ານີ້ບັນທຶກຄວາມສາມາດທັງໝົດທີ່ມາພ້ອມກັບ Gratis AI Agent v1.9.0.

---

## ປະເພດໂພສແບບກຳນົດເອງ {#custom-post-types}

ຄວາມສາມາດເຫຼົ່ານີ້ຈັດການປະເພດໂພສແບບກຳນົດເອງ (CPTs) ທີ່ລົງທະບຽນຜ່ານຕົວແທນ. ການລົງທະບຽນຈະຖືກເກັບໄວ້ໃນຕາຕະລາງ options ຂອງ WordPress ເພື່ອໃຫ້ຍັງຄົງຢູ່ຫຼັງຈາກປິດໃຊ້ແລະເປີດໃຊ້ plugin ຄືນໃໝ່.

### `register_post_type` {#registerposttype}

ລົງທະບຽນປະເພດໂພສແບບກຳນົດເອງໃໝ່.

**ພາຣາມິເຕີ**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `slug` | string | ແມ່ນ | ຄີຂອງປະເພດໂພສ (ສູງສຸດ 20 ຕົວອັກສອນ, ບໍ່ມີຕົວພິມໃຫຍ່, ບໍ່ມີຊ່ອງວ່າງ) |
| `singular_label` | string | ແມ່ນ | ຊື່ເອກະພົດທີ່ຄົນອ່ານເຂົ້າໃຈໄດ້, ເຊັ່ນ `Portfolio Item` |
| `plural_label` | string | ແມ່ນ | ຊື່ພະຫູພົດທີ່ຄົນອ່ານເຂົ້າໃຈໄດ້, ເຊັ່ນ `Portfolio Items` |
| `public` | boolean | ບໍ່ | ປະເພດໂພສນີ້ສາມາດເຂົ້າເຖິງແບບສາທາລະນະໄດ້ຫຼືບໍ່. ຄ່າເລີ່ມຕົ້ນ `true` |
| `supports` | array | ບໍ່ | ຄຸນລັກສະນະທີ່ຈະຮອງຮັບ: `title`, `editor`, `thumbnail`, `excerpt`, `comments`, `revisions`, `custom-fields`. ຄ່າເລີ່ມຕົ້ນ `["title","editor"]` |
| `has_archive` | boolean | ບໍ່ | ໜ້າຄັງເກັບຂອງປະເພດໂພສຖືກເປີດໃຊ້ຫຼືບໍ່. ຄ່າເລີ່ມຕົ້ນ `false` |
| `menu_icon` | string | ບໍ່ | Dashicons class ຫຼື URL ສຳລັບໄອຄອນເມນູ admin. ຄ່າເລີ່ມຕົ້ນ `"dashicons-admin-post"` |
| `rewrite_slug` | string | ບໍ່ | URL slug ສຳລັບປະເພດໂພສ. ຄ່າເລີ່ມຕົ້ນເປັນ `slug` |

**ຕົວຢ່າງ**

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

**ສົ່ງຄືນ** `{ "success": true, "slug": "portfolio" }`

---

### `list_post_types` {#listposttypes}

ສົ່ງຄືນປະເພດໂພສແບບກຳນົດເອງທັງໝົດທີ່ລົງທະບຽນໂດຍຕົວແທນ.

**ພາຣາມິເຕີ** — ບໍ່ມີ

**ສົ່ງຄືນ**

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

ຍົກເລີກການລົງທະບຽນປະເພດໂພສແບບກຳນົດເອງທີ່ເຄີຍລົງທະບຽນໂດຍຕົວແທນ. ໂພສທີ່ມີຢູ່ຂອງປະເພດນັ້ນຈະຍັງຄົງຢູ່ໃນຖານຂໍ້ມູນ ແຕ່ຈະບໍ່ສາມາດເຂົ້າເຖິງຜ່ານປະເພດໂພສນັ້ນໄດ້ອີກ.

**ພາຣາມິເຕີ**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `slug` | string | ແມ່ນ | ຄີຂອງປະເພດໂພສທີ່ຈະລຶບອອກ |

**ສົ່ງຄືນ** `{ "success": true, "slug": "portfolio" }`

---

## ການຈັດໝວດໝູ່ແບບກຳນົດເອງ {#custom-taxonomies}

ຄວາມສາມາດເຫຼົ່ານີ້ຈັດການການຈັດໝວດໝູ່ແບບກຳນົດເອງ. ເຊັ່ນດຽວກັບ CPTs, ການລົງທະບຽນ taxonomy ຈະຖືກເກັບໄວ້.

### `register_taxonomy` {#registertaxonomy}

ລົງທະບຽນການຈັດໝວດໝູ່ແບບກຳນົດເອງໃໝ່.

**ພາຣາມິເຕີ**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `slug` | string | ແມ່ນ | ຄີຂອງ taxonomy (ສູງສຸດ 32 ຕົວອັກສອນ) |
| `singular_label` | string | ແມ່ນ | ຊື່ເອກະພົດທີ່ຄົນອ່ານເຂົ້າໃຈໄດ້, ເຊັ່ນ `Project Category` |
| `plural_label` | string | ແມ່ນ | ຊື່ພະຫູພົດທີ່ຄົນອ່ານເຂົ້າໃຈໄດ້, ເຊັ່ນ `Project Categories` |
| `post_types` | array | ແມ່ນ | slug ຂອງປະເພດໂພສທີ່ taxonomy ນີ້ຄວນຖືກແນບເຂົ້າກັບ |
| `hierarchical` | boolean | ບໍ່ | `true` ສຳລັບແບບໝວດໝູ່, `false` ສຳລັບແບບປ້າຍກຳກັບ. ຄ່າເລີ່ມຕົ້ນ `true` |
| `public` | boolean | ບໍ່ | ຄຳສັບສາມາດເຂົ້າເຖິງແບບສາທາລະນະໄດ້ຫຼືບໍ່. ຄ່າເລີ່ມຕົ້ນ `true` |
| `rewrite_slug` | string | ບໍ່ | URL slug ສຳລັບ taxonomy. ຄ່າເລີ່ມຕົ້ນເປັນ `slug` |

**ຕົວຢ່າງ**

```json
{
  "slug": "project-category",
  "singular_label": "Project Category",
  "plural_label": "Project Categories",
  "post_types": ["portfolio"],
  "hierarchical": true
}
```

**ສົ່ງຄືນ** `{ "success": true, "slug": "project-category" }`

---

### `list_taxonomies` {#listtaxonomies}

ສົ່ງຄືນການຈັດໝວດໝູ່ແບບກຳນົດເອງທັງໝົດທີ່ລົງທະບຽນໂດຍຕົວແທນ.

**ພາຣາມິເຕີ** — ບໍ່ມີ

**ສົ່ງຄືນ**

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

ຍົກເລີກການລົງທະບຽນການຈັດໝວດໝູ່ແບບກຳນົດເອງທີ່ເຄີຍລົງທະບຽນໂດຍຕົວແທນ.

**ພາຣາມິເຕີ**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `slug` | string | ແມ່ນ | ຄີຂອງ taxonomy ທີ່ຈະລຶບອອກ |

**ສົ່ງຄືນ** `{ "success": true, "slug": "project-category" }`

---

## ລະບົບອອກແບບ {#design-system}

ຄວາມສາມາດຂອງລະບົບອອກແບບແກ້ໄຂການນຳສະເໜີດ້ານພາບຂອງເວັບໄຊ WordPress — ຕັ້ງແຕ່ CSS ແບບກຳນົດເອງ ໄປຈົນເຖິງຮູບແບບບລັອກແລະໂລໂກ້ຂອງເວັບໄຊ.

### `inject_custom_css` {#injectcustomcss}

ເພີ່ມ CSS ເຂົ້າໄປໃນ `<head>` ຂອງເວັບໄຊຜ່ານ `wp_add_inline_style`. CSS ຖືກເກັບໄວ້ໃນ option `gratis_ai_agent_custom_css` ແລະຖືກຖອນອອກຈາກຄິວຢ່າງສະອາດເມື່ອຄວາມສາມາດຖືກຣີເຊັດ.

**ພາຣາມິເຕີ**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `css` | string | ແມ່ນ | CSS ທີ່ຖືກຕ້ອງສຳລັບສອດແຊກ |
| `label` | string | ບໍ່ | ປ້າຍກຳກັບທີ່ຄົນອ່ານເຂົ້າໃຈໄດ້ສຳລັບ CSS block ນີ້, ໃຊ້ໃນ debug logs. ຄ່າເລີ່ມຕົ້ນ `"agent-injected"` |
| `replace` | boolean | ບໍ່ | ຖ້າ `true`, ແທນທີ່ CSS ທີ່ເຄີຍສອດແຊກໄວ້ທັງໝົດ. ຄ່າເລີ່ມຕົ້ນ `false` (ເພີ່ມຕໍ່ທ້າຍ) |

**ຕົວຢ່າງ**

```json
{
  "css": ":root { --primary: #1a1a2e; --accent: #e94560; } body { font-family: 'Inter', sans-serif; }",
  "label": "brand-colours",
  "replace": false
}
```

**ສົ່ງຄືນ** `{ "success": true, "bytes": 96 }`

---

### `add_block_pattern` {#addblockpattern}

ລົງທະບຽນຮູບແບບບລັອກທີ່ນຳກັບມາໃຊ້ຊ້ຳໄດ້ໃນຫ້ອງສະໝຸດຮູບແບບຂອງ WordPress.

**ພາຣາມິເຕີ**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `slug` | string | ແມ່ນ | ຕົວລະບຸຮູບແບບ, ເຊັ່ນ `gratis/hero-dark` |
| `title` | string | ແມ່ນ | ຊື່ຮູບແບບທີ່ຄົນອ່ານເຂົ້າໃຈໄດ້ ທີ່ສະແດງໃນຕົວແກ້ໄຂ |
| `content` | string | ແມ່ນ | markup ບລັອກແບບ serialised (HTML) ສຳລັບຮູບແບບ |
| `categories` | array | ບໍ່ | slug ຂອງໝວດຮູບແບບ, ເຊັ່ນ `["featured", "hero"]` |
| `description` | string | ບໍ່ | ຄຳອະທິບາຍສັ້ນທີ່ສະແດງໃນຕົວເລືອກຮູບແບບ |
| `keywords` | array | ບໍ່ | ຄຳຄົ້ນຫາ |

**ສົ່ງຄືນ** `{ "success": true, "slug": "gratis/hero-dark" }`

---

### `list_block_patterns` {#listblockpatterns}

ສະແດງລາຍການຮູບແບບບລັອກທັງໝົດທີ່ລົງທະບຽນໂດຍຕົວແທນ.

**ພາຣາມິເຕີ** — ບໍ່ມີ

**ສົ່ງຄືນ**

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

ຕັ້ງໂລໂກ້ site WordPress ໃຫ້ເປັນ ID ໄຟລ໌ແນບທີ່ກຳນົດ ຫຼື URL ຮູບພາບທາງໄກ. ເມື່ອມີການໃຫ້ URL, ຮູບພາບຈະຖືກດາວໂຫຼດ ແລະນຳເຂົ້າໄປໃນ Media Library.

**ພາຣາມິເຕີ**

| ພາຣາມິເຕີ | ປະເພດ | ຈຳເປັນ | ຄຳອະທິບາຍ |
|---|---|---|---|
| `attachment_id` | integer | ບໍ່ | ID ຂອງໄຟລ໌ແນບ Media Library ທີ່ມີຢູ່ |
| `url` | string | ບໍ່ | URL ຮູບພາບທາງໄກເພື່ອນຳເຂົ້າ ແລະຕັ້ງເປັນໂລໂກ້ |

ຕ້ອງໃຫ້ໜຶ່ງຢ່າງໃນ `attachment_id` ຫຼື `url`.

**ສົ່ງຄືນ** `{ "success": true, "attachment_id": 42 }`

---

### `apply_theme_json_preset` {#applythemejsonpreset}

ນຳໃຊ້ຄ່າສຳເລັດຮູບສີ/ຕົວພິມທີ່ມີຊື່ ໃສ່ `theme.json` (ຫຼື `global-styles`) ຂອງ theme ທີ່ກຳລັງໃຊ້ງານ. ຄ່າສຳເລັດຮູບແມ່ນຊຸດທີ່ຄັດສັນ ແລະດູແລໂດຍທີມ Gratis AI Agent.

**ພາຣາມິເຕີ**

| ພາຣາມິເຕີ | ປະເພດ | ຈຳເປັນ | ຄຳອະທິບາຍ |
|---|---|---|---|
| `preset` | string | ແມ່ນ | ຊື່ຄ່າສຳເລັດຮູບ, ເຊັ່ນ `minimal-dark`, `warm-editorial`, `corporate-blue` |
| `merge` | boolean | ບໍ່ | ຖ້າເປັນ `true`, ຈະຮວມກັບຄ່າທີ່ມີຢູ່ ແທນທີ່ຈະປ່ຽນແທນ. ຄ່າເລີ່ມຕົ້ນ `false` |

**ຄ່າສຳເລັດຮູບທີ່ມີໃຫ້**

| ຄ່າສຳເລັດຮູບ | ຄຳອະທິບາຍ |
|---|---|
| `minimal-dark` | ພື້ນຫຼັງເກືອບດຳ, ຂໍ້ຄວາມສີຂາວ, ສີເນັ້ນດຽວ |
| `warm-editorial` | ພື້ນຫຼັງສີຂາວອົບອຸ່ນ, ຫົວຂໍ້ແບບ serif, ສີເນັ້ນໂທນດິນ |
| `corporate-blue` | ຊຸດສີນ້ຳເງິນເຂັ້ມ ແລະຂາວ ພ້ອມຕົວພິມແບບມືອາຊີບ |
| `vibrant-startup` | ໄລ່ສີສົດໃສ, ມຸມໂຄ້ງ, ຕົວອັກສອນ sans-serif ທັນສະໄໝ |
| `classic-blog` | ສີເທົາກາງ, ຄວາມສູງແຖວອ່ານສະບາຍ, ລະຍະຫ່າງໂຄງຮ່າງແບບດັ້ງເດີມ |

**ສົ່ງຄືນ** `{ "success": true, "preset": "minimal-dark" }`

---

## ສະໄຕລ໌ທົ່ວໄປ {#global-styles}

ຄວາມສາມາດ Global Styles ອ່ານ ແລະຂຽນຄ່າ theme.json ຜ່ານ WordPress Global Styles API, ມີຜົນຕໍ່ບລັອກ ແລະແມ່ແບບທັງໝົດທົ່ວ site.

### `get_global_styles` {#getglobalstyles}

ສົ່ງຄືນການກຳນົດຄ່າສະໄຕລ໌ທົ່ວໄປປັດຈຸບັນ.

**ພາຣາມິເຕີ**

| ພາຣາມິເຕີ | ປະເພດ | ຈຳເປັນ | ຄຳອະທິບາຍ |
|---|---|---|---|
| `path` | string | ບໍ່ | JSON pointer ໄປຫາຄ່າສະເພາະ, ເຊັ່ນ `/color/palette` ຫຼື `/typography/fontSizes`. ຈະສົ່ງຄືນອອບເຈັກທັງໝົດຖ້າບໍ່ລະບຸ. |

**ສົ່ງຄືນ** ອອບເຈັກສະໄຕລ໌ທົ່ວໄປທັງໝົດ ຫຼືຄ່າທີ່ `path`.

---

### `set_global_styles` {#setglobalstyles}

ອັບເດດໜຶ່ງຄ່າ ຫຼືຫຼາຍຄ່າໃນການກຳນົດຄ່າສະໄຕລ໌ທົ່ວໄປ.

**ພາຣາມິເຕີ**

| ພາຣາມິເຕີ | ປະເພດ | ຈຳເປັນ | ຄຳອະທິບາຍ |
|---|---|---|---|
| `path` | string | ແມ່ນ | JSON pointer ໄປຫາຄ່າທີ່ຈະຕັ້ງ, ເຊັ່ນ `/color/palette` |
| `value` | any | ແມ່ນ | ຄ່າໃໝ່ |

**ຕົວຢ່າງ** — ເພີ່ມສີໃສ່ຊຸດສີ

```json
{
  "path": "/color/palette",
  "value": [
    { "slug": "primary", "color": "#1a1a2e", "name": "Primary" },
    { "slug": "accent",  "color": "#e94560", "name": "Accent" }
  ]
}
```

**ສົ່ງຄືນ** `{ "success": true, "path": "/color/palette" }`

---

### `reset_global_styles` {#resetglobalstyles}

ຣີເຊັດການປ່ຽນແປງສະໄຕລ໌ທົ່ວໄປທີ່ agent ໄດ້ນຳໃຊ້ທັງໝົດ, ຟື້ນຄືນຄ່າເລີ່ມຕົ້ນຂອງ theme.

**ພາຣາມິເຕີ** — ບໍ່ມີ

**ສົ່ງຄືນ** `{ "success": true }`

---

## ເມນູນຳທາງ {#navigation-menus}

ຄວາມສາມາດເມນູນຳທາງສ້າງ ແລະຈັດການເມນູນຳທາງ WordPress ແລະລາຍການຂອງມັນ.

### `create_menu` {#createmenu}

ສ້າງເມນູນຳທາງ WordPress ໃໝ່.

**ພາຣາມິເຕີ**

| ພາຣາມິເຕີ | ປະເພດ | ຈຳເປັນ | ຄຳອະທິບາຍ |
|---|---|---|---|
| `name` | string | ແມ່ນ | ຊື່ເມນູ, ເຊັ່ນ `Primary Navigation` |
| `location` | string | ບໍ່ | ຕຳແໜ່ງ theme ເພື່ອກຳນົດເມນູນີ້ໃຫ້, ເຊັ່ນ `primary` |

**ສົ່ງຄືນ** `{ "success": true, "menu_id": 7 }`

---

### `update_menu` {#updatemenu}

ປ່ຽນຊື່ເມນູ ຫຼືກຳນົດມັນໃໝ່ໃຫ້ກັບຕຳແໜ່ງ theme.

**ພາຣາມິເຕີ**

| ພາຣາມິເຕີ | ປະເພດ | ຈຳເປັນ | ຄຳອະທິບາຍ |
|---|---|---|---|
| `menu_id` | integer | ແມ່ນ | ID ຂອງເມນູທີ່ຈະອັບເດດ |
| `name` | string | ບໍ່ | ຊື່ເມນູໃໝ່ |
| `location` | string | ບໍ່ | ຕຳແໜ່ງ theme ເພື່ອກຳນົດ ຫຼືກຳນົດໃໝ່ |

**ສົ່ງຄືນ** `{ "success": true, "menu_id": 7 }`

---

### `add_menu_item` {#addmenuitem}

ເພີ່ມລາຍການໃສ່ເມນູນຳທາງທີ່ມີຢູ່.

**ພາຣາມິເຕີ**

| ພາຣາມິເຕີ | ປະເພດ | ຈຳເປັນ | ຄຳອະທິບາຍ |
|---|---|---|---|
| `menu_id` | integer | ແມ່ນ | ID ຂອງເມນູເປົ້າໝາຍ |
| `type` | string | ແມ່ນ | ປະເພດລາຍການ: `custom`, `post_type`, ຫຼື `taxonomy` |
| `title` | string | ບໍ່ | ປ້າຍຊື່ສຳລັບລາຍການເມນູ (ຈຳເປັນສຳລັບປະເພດ `custom`) |
| `url` | string | ບໍ່ | URL ສຳລັບລາຍການ `custom` |
| `object_id` | integer | ບໍ່ | ID ໂພສ ຫຼື ID ຄຳສັບສຳລັບລາຍການ `post_type`/`taxonomy` |
| `parent_id` | integer | ບໍ່ | ID ລາຍການເມນູທີ່ຈະຊ້ອນລາຍການນີ້ໄວ້ຂ້າງໃຕ້ |
| `position` | integer | ບໍ່ | ຕຳແໜ່ງແບບເລີ່ມຈາກສູນໃນເມນູ |

**ສົ່ງຄືນ** `{ "success": true, "item_id": 12 }`

---

### `remove_menu_item` {#removemenuitem}

ລຶບລາຍການອອກຈາກເມນູນຳທາງ.

**ພາຣາມິເຕີ**

| ພາຣາມິເຕີ | ປະເພດ | ຈຳເປັນ | ຄຳອະທິບາຍ |
|---|---|---|---|
| `item_id` | integer | ແມ່ນ | ID ລາຍການເມນູທີ່ຈະລຶບ |

**ສົ່ງຄືນ** `{ "success": true, "item_id": 12 }`

---

### `list_menus` {#listmenus}

ສະແດງລາຍການເມນູນຳທາງ WordPress ທັງໝົດ, ລວມທັງຕຳແໜ່ງ theme ທີ່ຖືກກຳນົດໃຫ້.

**ພາຣາມິເຕີ** — ບໍ່ມີ

**ສົ່ງຄືນ**

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

## ການຈັດການຕົວເລືອກ {#options-management}

ຄວາມສາມາດຕົວເລືອກອ່ານ ແລະຂຽນຕົວເລືອກ WordPress ຜ່ານ `get_option` / `update_option`. ບັນຊີບລັອກຄວາມປອດໄພໃນຕົວປ້ອງກັນການແກ້ໄຂການຕັ້ງຄ່າສຳຄັນໂດຍບັງເອີນ.

### `get_option` {#getoption}

ອ່ານຕົວເລືອກ WordPress.

**ພາຣາມິເຕີ**

| ພາຣາມິເຕີ | ປະເພດ | ຈຳເປັນ | ຄຳອະທິບາຍ |
|---|---|---|---|
| `option_name` | string | ແມ່ນ | ຄີຂອງຕົວເລືອກ, ເຊັ່ນ `blogname` |

**ສົ່ງຄືນ** `{ "option_name": "blogname", "value": "My Site" }`

ສົ່ງຄືນຂໍ້ຜິດພາດຖ້າ `option_name` ຢູ່ໃນບັນຊີບລັອກຄວາມປອດໄພ.

---

### `set_option` {#setoption}

ຂຽນຕົວເລືອກ WordPress.

**ພາຣາມິເຕີ**

| ພາຣາມິເຕີ | ປະເພດ | ຈຳເປັນ | ຄຳອະທິບາຍ |
|---|---|---|---|
| `option_name` | string | ແມ່ນ | ຄີຂອງຕົວເລືອກ |
| `value` | any | ແມ່ນ | ຄ່າໃໝ່ (ຈັດລຳດັບເປັນສະຕຣິງອັດຕະໂນມັດສຳລັບແຖວຂໍ້ມູນ/ອອບເຈັກ) |
| `autoload` | string | ບໍ່ | `"yes"` ຫຼື `"no"`. ຄ່າເລີ່ມຕົ້ນຮັກສາການຕັ້ງຄ່າ autoload ທີ່ມີຢູ່ |

ສົ່ງຄືນຂໍ້ຜິດພາດຖ້າ `option_name` ຢູ່ໃນລາຍຊື່ບລັອກເພື່ອຄວາມປອດໄພ.

**ສົ່ງຄືນ** `{ "success": true, "option_name": "blogname" }`

---

### `delete_option` {#deleteoption}

ລຶບຕົວເລືອກ WordPress.

**ພາຣາມິເຕີ**

| ພາຣາມິເຕີ | ປະເພດ | ຈຳເປັນ | ຄຳອະທິບາຍ |
|---|---|---|---|
| `option_name` | string | ແມ່ນ | ຄີຕົວເລືອກທີ່ຈະລຶບ |

ສົ່ງຄືນຂໍ້ຜິດພາດຖ້າ `option_name` ຢູ່ໃນລາຍຊື່ບລັອກເພື່ອຄວາມປອດໄພ.

**ສົ່ງຄືນ** `{ "success": true, "option_name": "my_custom_option" }`

---

### `list_options` {#listoptions}

ສະແດງລາຍການຕົວເລືອກ WordPress ທີ່ກົງກັບຮູບແບບ.

**ພາຣາມິເຕີ**

| ພາຣາມິເຕີ | ປະເພດ | ຈຳເປັນ | ຄຳອະທິບາຍ |
|---|---|---|---|
| `pattern` | string | ບໍ່ | ຮູບແບບ SQL LIKE ເພື່ອກັ່ນຕອງຊື່ຕົວເລືອກ, ເຊັ່ນ `gratis_%`. ສົ່ງຄືນຕົວເລືອກທັງໝົດຖ້າລະໄວ້ (ໃຊ້ດ້ວຍຄວາມລະມັດລະວັງໃນຖານຂໍ້ມູນຂະໜາດໃຫຍ່). |
| `limit` | integer | ບໍ່ | ຈຳນວນຜົນລັບສູງສຸດ. ຄ່າເລີ່ມຕົ້ນ `50`, ສູງສຸດ `500` |

**ສົ່ງຄືນ**

```json
{
  "options": [
    { "option_name": "gratis_ai_agent_version", "autoload": "yes" }
  ],
  "total": 1
}
```

---

## ການຈັດການເນື້ອຫາ {#content-management}

ຄວາມສາມາດການຈັດການເນື້ອຫາສ້າງ ແລະ ແກ້ໄຂໂພສ ແລະ ໜ້າ WordPress. ID ຂອງໂພສຈະຖືກສົ່ງຄືນ ເພື່ອໃຫ້ຂັ້ນຕອນຕໍ່ໄປໃນແຜນຫຼາຍຄວາມສາມາດສາມາດອ້າງອີງເນື້ອຫາທີ່ສ້າງໄດ້.

### `create_post` {#createpost}

ສ້າງໂພສ WordPress, ໜ້າ, ຫຼື ລາຍການປະເພດໂພສກຳນົດເອງໃໝ່.

**ພາຣາມິເຕີ**

| ພາຣາມິເຕີ | ປະເພດ | ຈຳເປັນ | ຄຳອະທິບາຍ |
|---|---|---|---|
| `title` | string | ແມ່ນ | ຫົວຂໍ້ໂພສ |
| `content` | string | ບໍ່ | ເນື້ອໃນໂພສ — ຮອງຮັບຂໍ້ຄວາມທຳມະດາ, HTML, ຫຼື ມາກອັບບລັອກທີ່ຖືກຈັດລຳດັບແລ້ວ |
| `status` | string | ບໍ່ | `draft`, `publish`, `pending`, `private`. ຄ່າເລີ່ມຕົ້ນ `draft` |
| `post_type` | string | ບໍ່ | slug ປະເພດໂພສ, ເຊັ່ນ `post`, `page`, ຫຼື CPT ທີ່ລົງທະບຽນໃດໆ. ຄ່າເລີ່ມຕົ້ນ `post` |
| `excerpt` | string | ບໍ່ | ສະຫຼຸບສັ້ນທີ່ສະແດງໃນຄັງເກັບ ແລະ ຜົນການຄົ້ນຫາ |
| `categories` | array | ບໍ່ | ອາເຣຂອງຊື່ໝວດໝູ່ ຫຼື ID ເພື່ອກຳນົດໃຫ້ |
| `tags` | array | ບໍ່ | ອາເຣຂອງຊື່ແທັກ ຫຼື ID ເພື່ອກຳນົດໃຫ້ |
| `author` | integer | ບໍ່ | ID ຜູ້ໃຊ້ WordPress ເພື່ອຕັ້ງເປັນຜູ້ຂຽນໂພສ. ຄ່າເລີ່ມຕົ້ນເປັນຜູ້ໃຊ້ປັດຈຸບັນ |
| `date` | string | ບໍ່ | ວັນທີເຜີຍແຜ່ໃນຮູບແບບ ISO 8601, ເຊັ່ນ `2026-05-01T09:00:00` |
| `page_template` | string | ບໍ່ | ໄຟລ໌ແມ່ແບບເພື່ອກຳນົດໃຫ້ໂພສ ຫຼື ໜ້ານີ້, ເຊັ່ນ `page-full-width.php`. ມີຄວາມໝາຍສະເພາະເມື່ອ `post_type` ເປັນ `page` ຫຼື CPT ທີ່ຮອງຮັບແມ່ແບບໜ້າເທົ່ານັ້ນ. |

**ຕົວຢ່າງ**

```json
{
  "title": "Welcome to Our New Site",
  "content": "<!-- wp:paragraph --><p>Hello world!</p><!-- /wp:paragraph -->",
  "status": "publish",
  "post_type": "page",
  "page_template": "page-full-width.php"
}
```

**ສົ່ງຄືນ** `{ "success": true, "post_id": 42, "permalink": "https://example.com/welcome/" }`

---

### `update_post` {#updatepost}

ອັບເດດໂພສ ຫຼື ໜ້າ WordPress ທີ່ມີຢູ່ແລ້ວ.

**ພາຣາມິເຕີ**

| ພາຣາມິເຕີ | ປະເພດ | ຈຳເປັນ | ຄຳອະທິບາຍ |
|---|---|---|---|
| `post_id` | integer | ແມ່ນ | ID ຂອງໂພສທີ່ຈະອັບເດດ |
| `title` | string | ບໍ່ | ຫົວຂໍ້ໂພສໃໝ່ |
| `content` | string | ບໍ່ | ເນື້ອໃນໂພສໃໝ່ |
| `status` | string | ບໍ່ | ສະຖານະໃໝ່: `draft`, `publish`, `pending`, `private` |
| `excerpt` | string | ບໍ່ | ຂໍ້ຄັດຫຍໍ້ໃໝ່ |
| `categories` | array | ບໍ່ | ແທນທີ່ລາຍການໝວດໝູ່ທັງໝົດດ້ວຍອາເຣຂອງຊື່ ຫຼື ID ນີ້ |
| `tags` | array | ບໍ່ | ແທນທີ່ລາຍການແທັກທັງໝົດດ້ວຍອາເຣຂອງຊື່ ຫຼື ID ນີ້ |
| `page_template` | string | ບໍ່ | ໄຟລ໌ແມ່ແບບໃໝ່ເພື່ອກຳນົດໃຫ້ໂພສ ຫຼື ໜ້ານີ້, ເຊັ່ນ `page-full-width.php`. ສົ່ງສະຕຣິງວ່າງເພື່ອລຶບການກຳນົດແມ່ແບບ ແລະ ກັບຄືນໄປໃຊ້ຄ່າເລີ່ມຕົ້ນຂອງທີມ. |

**ຕົວຢ່າງ** — ປ່ຽນແມ່ແບບຫຼັງຈາກສ້າງ

```json
{
  "post_id": 42,
  "page_template": "page-full-width.php"
}
```

**ສົ່ງຄືນ** `{ "success": true, "post_id": 42 }`

---

### `batch_create_posts` {#batchcreateposts}

ສ້າງໂພສຫຼາຍອັນໃນການເອີ້ນຄວາມສາມາດຄັ້ງດຽວ, ຫຼຸດການໄປກັບຫຼາຍຮອບລະຫວ່າງການສ້າງເວັບໄຊ ຫຼື ການນຳເຂົ້າເນື້ອຫາຈຳນວນຫຼາຍ. ໂພສຖືກສ້າງຕາມລຳດັບ; ຖ້າອັນໜຶ່ງລົ້ມເຫຼວ ອັນອື່ນໆຈະດຳເນີນຕໍ່ ແລະ ຄວາມລົ້ມເຫຼວຈະຖືກລາຍງານໃນອາເຣຜົນລັບ.

**ພາຣາມິເຕີ**

| ພາຣາມິເຕີ | ປະເພດ | ຈຳເປັນ | ຄຳອະທິບາຍ |
|---|---|---|---|
| `posts` | array | ແມ່ນ | ອາເຣຂອງວັດຖຸໂພສ, ແຕ່ລະອັນຮອງຮັບພາຣາມິເຕີດຽວກັນກັບ `create_post` |
| `stop_on_error` | boolean | ບໍ່ | ຖ້າເປັນ `true`, ຢຸດການປະມວນຜົນຫຼັງຈາກຄວາມລົ້ມເຫຼວຄັ້ງທຳອິດ. ຄ່າເລີ່ມຕົ້ນ `false` |

**ຕົວຢ່າງ**

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

**ສົ່ງຄືນ**

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

ກຳນົດຮູບເດັ່ນ (ຮູບຫຍໍ້ຂອງໂພສ) ໃຫ້ໂພສ ຫຼື ໜ້າທີ່ມີຢູ່ແລ້ວ. ຮອງຮັບ ID ໄຟລ໌ແນບຈາກ Media Library ທີ່ມີຢູ່ ຫຼື URL ຮູບພາບຈາກທາງໄກ; ເມື່ອສະໜອງ URL, ຮູບພາບຈະຖືກດາວໂຫຼດ ແລະ ນຳເຂົ້າໂດຍອັດຕະໂນມັດ.

**ພາຣາມິເຕີ**

| ພາຣາມິເຕີ | ປະເພດ | ຈຳເປັນ | ຄຳອະທິບາຍ |
|---|---|---|---|
| `post_id` | integer | ແມ່ນ | ID ຂອງໂພສ ຫຼື ໜ້າທີ່ຈະອັບເດດ |
| `attachment_id` | integer | ບໍ່ | ID ຂອງໄຟລ໌ແນບ Media Library ທີ່ມີຢູ່ |
| `url` | string | ບໍ່ | URL ຮູບພາບຈາກທາງໄກເພື່ອນຳເຂົ້າ ແລະ ຕັ້ງເປັນຮູບເດັ່ນ |
| `alt_text` | string | ບໍ່ | ຂໍ້ຄວາມ Alt ເພື່ອນຳໄປໃຊ້ກັບໄຟລ໌ແນບ ຖ້າມັນຖືກນຳເຂົ້າຈາກ URL |

ຕ້ອງສະໜອງຢ່າງໜຶ່ງລະຫວ່າງ `attachment_id` ຫຼື `url`.

**ສົ່ງຄືນ** `{ "success": true, "post_id": 42, "attachment_id": 17 }`

---

### `create_contact_form` {#createcontactform}

ສ້າງແບບຟອມຕິດຕໍ່ໂດຍໃຊ້ plugin ແບບຟອມທີ່ເປີດໃຊ້ຢູ່ (Contact Form 7, WPForms, Fluent Forms, ຫຼື Gravity Forms, ຂຶ້ນກັບວ່າອັນໃດຖືກຕິດຕັ້ງ). ສົ່ງຄືນ shortcode ທີ່ສາມາດຝັງໃນໂພສ ຫຼື ໜ້າໃດກໍໄດ້.

**ພາຣາມິເຕີ**

| ພາຣາມິເຕີ | ປະເພດ | ຈຳເປັນ | ຄຳອະທິບາຍ |
|---|---|---|---|
| `title` | string | Yes | ຊື່ແບບຟອມທີ່ສະແດງໃນຜູ້ດູແລ plugin ແບບຟອມ |
| `fields` | array | Yes | ລາຍຊື່ field ແບບຟອມຕາມລຳດັບ (ເບິ່ງວັດຖຸ Field ດ້ານລຸ່ມ) |
| `recipient` | string | No | ທີ່ຢູ່ Email ເພື່ອຮັບການສົ່ງ. ຄ່າເລີ່ມຕົ້ນແມ່ນ Email ຜູ້ດູແລ WordPress |
| `subject` | string | No | ແຖວຫົວຂໍ້ Email. ຮອງຮັບ placeholder `[your-name]` ແລະ `[your-subject]` ເມື່ອໃຊ້ Contact Form 7 |
| `confirmation_message` | string | No | ຂໍ້ຄວາມທີ່ສະແດງຫຼັງຈາກສົ່ງສຳເລັດ. ຄ່າເລີ່ມຕົ້ນ: `"Thank you for your message. We'll be in touch soon."` |

**ວັດຖຸ Field**

| ຄີ | ປະເພດ | ຈຳເປັນ | ຄຳອະທິບາຍ |
|---|---|---|---|
| `name` | string | Yes | ຊື່ field ພາຍໃນ / ຄີເຄື່ອງ |
| `label` | string | Yes | ປ້າຍກຳກັບທີ່ຄົນອ່ານເຂົ້າໃຈ ແລະສະແດງໃນແບບຟອມ |
| `type` | string | Yes | `text`, `email`, `tel`, `textarea`, `select`, `checkbox`, `radio`, `file`, `date` |
| `required` | boolean | No | ວ່າ field ນີ້ຕ້ອງຖືກຕື່ມກ່ອນການສົ່ງຫຼືບໍ່. ຄ່າເລີ່ມຕົ້ນ `false` |
| `options` | array | No | ຕົວເລືອກສຳລັບ field `select`, `checkbox`, ແລະ `radio` |
| `placeholder` | string | No | ຂໍ້ຄວາມ placeholder ສຳລັບ input ປະເພດຂໍ້ຄວາມ |

**ຕົວຢ່າງ**

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

**ສົ່ງກັບ**

```json
{
  "success": true,
  "form_id": 3,
  "shortcode": "[contact-form-7 id=\"3\" title=\"Restaurant Booking Enquiry\"]"
}
```

---

## ການກວດທານດ້ວຍພາບ {#visual-review}

ຄວາມສາມາດການກວດທານດ້ວຍພາບຊ່ວຍໃຫ້ agent ຈັບພາບໜ້າຈໍຂອງໜ້າທີ່ກຳລັງໃຊ້ງານຢູ່ ແລະວິເຄາະມັນ, ເຮັດໃຫ້ສາມາດກວດທານການອອກແບບແບບອັດຕະໂນມັດ, ປຽບທຽບກ່ອນ/ຫຼັງ, ແລະກວດກາການຖົດຖອຍທາງພາບ ໂດຍບໍ່ຕ້ອງມີ browser extension.

### `capture_screenshot` {#capturescreenshot}

ຈັບພາບໜ້າຈໍຂອງໜ້າ WordPress ທີ່ URL ທີ່ກຳນົດ ໂດຍໃຊ້ browser ໄຮ້ຫົວຝັ່ງ server. ຮູບພາບຖືກບັນທຶກໄປທີ່ Media Library ແລະສົ່ງກັບ URL CDN.

**ພາຣາມິເຕີ**

| ພາຣາມິເຕີ | ປະເພດ | ຈຳເປັນ | ຄຳອະທິບາຍ |
|---|---|---|---|
| `url` | string | Yes | URL ເຕັມຂອງໜ້າທີ່ຈະຈັບພາບໜ້າຈໍ, ຕົວຢ່າງ `https://example.com/about/` |
| `width` | integer | No | ຄວາມກວ້າງ viewport ເປັນພິກເຊວ. ຄ່າເລີ່ມຕົ້ນ `1280` |
| `height` | integer | No | ຄວາມສູງ viewport ເປັນພິກເຊວ. ຄ່າເລີ່ມຕົ້ນ `800` |
| `full_page` | boolean | No | ຈັບໜ້າທີ່ເລື່ອນໄດ້ທັງໝົດ ແທນທີ່ຈະແມ່ນສະເພາະ viewport. ຄ່າເລີ່ມຕົ້ນ `false` |
| `delay_ms` | integer | No | ມິນລິວິນາທີທີ່ຈະລໍຖ້າຫຼັງຈາກໜ້າໂຫຼດແລ້ວກ່ອນຈັບພາບ, ມີປະໂຫຍດສຳລັບເນື້ອຫາເຄື່ອນໄຫວ. ຄ່າເລີ່ມຕົ້ນ `500` |
| `label` | string | No | ປ້າຍກຳກັບທີ່ຄົນອ່ານເຂົ້າໃຈ ແລະຖືກເກັບພ້ອມກັບ attachment ໃນ Media Library |

**ສົ່ງກັບ**

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

ນຳພາບໜ້າຈໍສອງຮູບ ແລະສົ່ງກັບຄະແນນຄວາມແຕກຕ່າງທາງພາບ ພ້ອມຮູບພາບຄວາມແຕກຕ່າງທີ່ເນັ້ນບໍລິເວນທີ່ປ່ຽນແປງ. ມີປະໂຫຍດໃນການຢືນຢັນວ່າການປ່ຽນແປງການອອກແບບໄດ້ຜົນຕາມຄາດ ຫຼືເພື່ອກວດຫາການຖົດຖອຍທີ່ບໍ່ຕັ້ງໃຈ.

**ພາຣາມິເຕີ**

| ພາຣາມິເຕີ | ປະເພດ | ຈຳເປັນ | ຄຳອະທິບາຍ |
|---|---|---|---|
| `before_url` | string | Yes | URL ຂອງໜ້າທີ່ຈະຈັບເປັນສະຖານະ "ກ່ອນ" |
| `after_url` | string | Yes | URL ຂອງໜ້າທີ່ຈະຈັບເປັນສະຖານະ "ຫຼັງ". ອາດເປັນ URL ດຽວກັນຖ້າປຽບທຽບຂ້າມເວລາ |
| `width` | integer | No | ຄວາມກວ້າງ viewport ສຳລັບການຈັບທັງສອງ. ຄ່າເລີ່ມຕົ້ນ `1280` |
| `threshold` | float | No | ເກນຄວາມແຕກຕ່າງຂອງພິກເຊວ (0.0–1.0). ພິກເຊວພາຍໃນຄ່າຍອມຮັບນີ້ຖືກຖືວ່າບໍ່ປ່ຽນແປງ. ຄ່າເລີ່ມຕົ້ນ `0.1` |

**ສົ່ງກັບ**

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

`diff_score` ຂອງ `0.0` ໝາຍຄວາມວ່າບໍ່ມີການປ່ຽນແປງທີ່ເຫັນໄດ້; `1.0` ໝາຍຄວາມວ່າທຸກພິກເຊວປ່ຽນແປງ.

---

### `review_page_design` {#reviewpagedesign}

ຈັບພາບໜ້າຈໍຂອງໜ້າ ແລະສົ່ງມັນໄປທີ່ຕົວແບບພາສາເພື່ອວິເຄາະດ້ວຍພາບ. ສົ່ງກັບການປະເມີນທີ່ມີໂຄງສ້າງ ຄອບຄຸມເລື່ອງການຈັດວາງ, ການຈັດຕົວພິມ, ການໃຊ້ສີ, ແລະຂໍ້ກັງວົນດ້ານການເຂົ້າເຖິງ.

**ພາຣາມິເຕີ**

| ພາຣາມິເຕີ | ປະເພດ | ຈຳເປັນ | ຄຳອະທິບາຍ |
|---|---|---|---|
| `url` | string | Yes | URL ເຕັມຂອງໜ້າທີ່ຈະກວດທານ |
| `focus` | string | No | ລາຍຊື່ພື້ນທີ່ການກວດທານທີ່ແຍກດ້ວຍຈຸດຈ້ຳ ເພື່ອເນັ້ນ: `layout`, `typography`, `colour`, `accessibility`, `mobile`. ຄ່າເລີ່ມຕົ້ນ: ທຸກພື້ນທີ່ |
| `width` | integer | No | ຄວາມກວ້າງ viewport. ຄ່າເລີ່ມຕົ້ນ `1280` |

**ສົ່ງກັບ**

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

## ຄວາມສາມາດທີ່ຕິດຕັ້ງໄດ້ {#installable-abilities}

ທະບຽນຄວາມສາມາດທີ່ຕິດຕັ້ງໄດ້ ຊ່ວຍໃຫ້ທ່ານຂະຫຍາຍ agent ດ້ວຍຊຸດຄວາມສາມາດເພີ່ມເຕີມທີ່ແຈກຈ່າຍເປັນ WordPress plugins. ແຕ່ລະຊຸດລົງທະບຽນຄວາມສາມາດໜຶ່ງຫຼືຫຼາຍຢ່າງໂດຍໃຊ້ API ຄວາມສາມາດມາດຕະຖານ.

### `list_available_abilities` {#listavailableabilities}

ສົ່ງກັບລາຍການຊຸດຄວາມສາມາດທີ່ມີສຳລັບຕິດຕັ້ງຈາກທະບຽນ.

**ພາຣາມິເຕີ**

| ພາຣາມິເຕີ | ປະເພດ | ຈຳເປັນ | ຄຳອະທິບາຍ |
|---|---|---|---|
| `category` | string | ບໍ່ | ກັ່ນຕອງຕາມໝວດໝູ່: `ecommerce`, `seo`, `media`, `social`, `developer` |

**ສົ່ງຄືນ**

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

ດາວໂຫຼດ ແລະ ເປີດໃຊ້ຊຸດຄວາມສາມາດຈາກທະບຽນ.

**ພາຣາມິເຕີ**

| ພາຣາມິເຕີ | ປະເພດ | ຈຳເປັນ | ຄຳອະທິບາຍ |
|---|---|---|---|
| `slug` | string | ແມ່ນ | slug ຂອງປລັກອິນຊຸດຄວາມສາມາດ |

**ສົ່ງຄືນ** `{ "success": true, "slug": "gratis-ai-agent-woocommerce", "abilities_added": 3 }`

---

### `recommend_plugin` {#recommendplugin}

ສອບຖາມທະບຽນຄວາມສາມາດເພື່ອຊອກຫາປລັກອິນທີ່ດີທີ່ສຸດສຳລັບການນຳໃຊ້ທີ່ອະທິບາຍໄວ້ ແລະ ຖ້າຕ້ອງການ ກໍຕິດຕັ້ງມັນ.

**ພາຣາມິເຕີ**

| ພາຣາມິເຕີ | ປະເພດ | ຈຳເປັນ | ຄຳອະທິບາຍ |
|---|---|---|---|
| `description` | string | ແມ່ນ | ຄຳອະທິບາຍດ້ວຍພາສາທຳມະຊາດກ່ຽວກັບຟັງຊັນທີ່ຕ້ອງການ |
| `install` | boolean | ບໍ່ | ຖ້າເປັນ `true`, ຕິດຕັ້ງປລັກອິນທີ່ແນະນຳທັນທີ. ຄ່າເລີ່ມຕົ້ນແມ່ນ `false` |

**ຕົວຢ່າງ**

```json
{
  "description": "I need a contact form with file upload support and spam protection",
  "install": false
}
```

**ສົ່ງຄືນ**

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
