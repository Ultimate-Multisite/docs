---
title: ການປະສານງານຕົວສ້າງເວັບໄຊ v2
sidebar_position: 4
_i18n_hash: 3a3d15844b4a0751fc59ac3a4e1fb0c0
---
# ການປະສານງານຕົວສ້າງເວັບໄຊ v2

ການປະສານງານຕົວສ້າງເວັບໄຊ v2 (ເລີ່ມນຳໃຊ້ໃນ Gratis AI Agent v1.4.0) ແມ່ນເຄື່ອງຈັກທີ່ຂັບເຄື່ອນການສ້າງເວັບໄຊຫຼາຍຂັ້ນຕອນ. ເມື່ອທ່ານຂໍໃຫ້ agent "ສ້າງເວັບໄຊຮ້ານອາຫານ" ຫຼື "ສ້າງພອດໂຟລິໂອພ້ອມບລັອກ", ຕົວປະສານງານຈະແຍກເປົ້າໝາຍລະດັບສູງນັ້ນອອກເປັນ **ແຜນ** ທີ່ມີໂຄງສ້າງ, ຄົ້ນຫາປລັກອິນທີ່ຈຳເປັນເພື່ອໃຫ້ບັນລຸເປົ້າໝາຍ, ດຳເນີນແຕ່ລະຂັ້ນຕອນຕາມລຳດັບ, ຕິດຕາມຄວາມຄືບໜ້າ, ແລະຟື້ນຕົວຈາກຂໍ້ຜິດພາດໄດ້ເອງ.

---

## ມັນເຮັດວຽກແນວໃດ

### 1. ການສ້າງແຜນ

ເມື່ອ agent ໄດ້ຮັບຄຳສັ່ງສ້າງເວັບໄຊ, ມັນຈະເອີ້ນໃຊ້ຄວາມສາມາດ `create_site_plan` ເພື່ອຜະລິດ **ແຜນເວັບໄຊ** JSON. ແຜນນີ້ອະທິບາຍ:

- **ເປົ້າໝາຍ** — ເວັບໄຊທີ່ສຳເລັດແລ້ວຄວນເຮັດຫຍັງ
- **ໄລຍະ** — ກຸ່ມຂັ້ນຕອນທີ່ຈັດລຳດັບແລ້ວ (ເຊັ່ນ _ການຕັ້ງຄ່າ_, _ປະເພດເນື້ອຫາ_, _ການອອກແບບ_, _ເນື້ອຫາ_)
- **ຂັ້ນຕອນ** — ການເອີ້ນໃຊ້ຄວາມສາມາດແຕ່ລະອັນພາຍໃນແຕ່ລະໄລຍະ
- **ຂໍ້ກຳນົດຂອງປລັກອິນ** — ປລັກອິນທີ່ຕ້ອງເປີດໃຊ້ຢູ່ເພື່ອໃຫ້ຂັ້ນຕອນບາງຢ່າງເຮັດວຽກໄດ້
- **ທາງເລືອກສຳຮອງ** — ຂັ້ນຕອນທາງເລືອກຖ້າຂັ້ນຕອນຫຼັກລົ້ມເຫຼວ

**ຕົວຢ່າງແຜນ (ຫຍໍ້)**

```json
{
  "plan_id": "plan_restaurant_001",
  "goal": "Build a restaurant website with an online menu, booking form, and contact page",
  "phases": [
    {
      "id": "setup",
      "label": "Setup",
      "steps": [
        { "ability": "install_ability", "params": { "slug": "gratis-ai-agent-woocommerce" } },
        { "ability": "register_post_type", "params": { "slug": "menu-item", "singular_label": "Menu Item", "plural_label": "Menu Items" } },
        { "ability": "register_taxonomy", "params": { "slug": "menu-section", "singular_label": "Menu Section", "plural_label": "Menu Sections", "post_types": ["menu-item"] } }
      ]
    },
    {
      "id": "design",
      "label": "Design",
      "steps": [
        { "ability": "apply_theme_json_preset", "params": { "preset": "warm-editorial" } },
        { "ability": "inject_custom_css", "params": { "css": ".menu-item { border-radius: 8px; }", "label": "restaurant-ui" } }
      ]
    },
    {
      "id": "navigation",
      "label": "Navigation",
      "steps": [
        { "ability": "create_menu", "params": { "name": "Primary Navigation", "location": "primary" } },
        { "ability": "add_menu_item", "params": { "menu_id": "__ref:create_menu.menu_id", "type": "custom", "title": "Menu", "url": "/menu-items/" } },
        { "ability": "add_menu_item", "params": { "menu_id": "__ref:create_menu.menu_id", "type": "custom", "title": "Book a Table", "url": "/book/" } }
      ]
    }
  ],
  "plugin_requirements": [
    { "slug": "contact-form-7", "reason": "Required for the booking and contact forms" }
  ]
}
```

### 2. ການຄົ້ນຫາປລັກອິນ

ກ່ອນເລີ່ມການດຳເນີນການ, ຕົວປະສານງານຈະສະແກນ `plugin_requirements` ຂອງແຜນ ແລະກວດສອບວ່າປລັກອິນໃດເປີດໃຊ້ຢູ່ແລ້ວ. ສຳລັບປລັກອິນທີ່ຂາດ, ມັນຈະ:

1. ຄົ້ນຫາໃນທະບຽນຜ່ານ `recommend_plugin` ເພື່ອຫາຕົວເລືອກທີ່ເໝາະສົມທີ່ສຸດ
2. ແຈ້ງໃຫ້ agent ຢືນຢັນຄຳແນະນຳ
3. ກະຕຸ້ນການຕິດຕັ້ງຖ້າໄດ້ຮັບການອະນຸມັດ (ຫຼືຖ້າເປີດໃຊ້ການຕິດຕັ້ງອັດຕະໂນມັດໃນການຕັ້ງຄ່າ)

ຄວາມລົ້ມເຫຼວໃນການຄົ້ນຫາປລັກອິນບໍ່ເປັນເຫດຮ້າຍແຮງ — ຕົວປະສານງານຈະໝາຍຂັ້ນຕອນທີ່ໄດ້ຮັບຜົນກະທົບເປັນ `skipped` ແລະດຳເນີນການຕໍ່ກັບສ່ວນທີ່ເຫຼືອຂອງແຜນ.

### 3. ການດຳເນີນການແຜນ

ຕົວປະສານງານຈະເອີ້ນ `execute_site_plan` ພ້ອມ ID ຂອງແຜນ. ການດຳເນີນການຈະໄປຕາມໄລຍະແຕ່ລະໄລຍະ ແລະຂັ້ນຕອນແຕ່ລະຂັ້ນ:

- **ການອ້າງອີງຂັ້ນຕອນ** (`__ref:` prefix) — ຂັ້ນຕອນສາມາດອ້າງອີງຜົນລັບຈາກຂັ້ນຕອນກ່ອນໜ້າໄດ້. ໃນຕົວຢ່າງຂ້າງເທິງ, `__ref:create_menu.menu_id` ຖືກແປຄ່າເປັນ `menu_id` ທີ່ສົ່ງກັບໂດຍຂັ້ນຕອນ `create_menu`.
- **ຂັ້ນຕອນຄູ່ຂະໜານ** — ຂັ້ນຕອນພາຍໃນໄລຍະດຽວກັນທີ່ບໍ່ມີການພຶ່ງພາກັນຈະຖືກສົ່ງດຳເນີນພ້ອມກັນເມື່ອຕັ້ງຄ່າທຸງ `parallel`.
- **ເວລາໝົດກຳນົດຂອງຂັ້ນຕອນ** — ແຕ່ລະຂັ້ນຕອນມີເວລາໝົດກຳນົດສະເພາະ (ຄ່າເລີ່ມຕົ້ນ: ການຕັ້ງຄ່າ `Ability Timeout`). ຂັ້ນຕອນທີ່ໝົດເວລາຈະຖືກໝາຍເປັນ `failed` ແລະແຜນຈະດຳເນີນຕໍ່ໄປ.

### 4. ການຕິດຕາມຄວາມຄືບໜ້າ

ເອີ້ນ `get_plan_progress` ໄດ້ທຸກເວລາເພື່ອກວດສອບສະຖານະການດຳເນີນການ:

```json
{
  "plan_id": "plan_restaurant_001",
  "status": "in_progress",
  "phases_total": 4,
  "phases_complete": 2,
  "steps_total": 14,
  "steps_complete": 8,
  "steps_failed": 1,
  "steps_skipped": 0,
  "current_step": "add_menu_item",
  "elapsed_seconds": 42
}
```

ຜູ້ໃຊ້ WP-CLI ສາມາດຕິດຕາມຄວາມຄືບໜ້າໄດ້ດ້ວຍ:

```bash
wp gratis-ai-agent plan status plan_restaurant_001
```

### 5. ການຟື້ນຕົວຈາກຂໍ້ຜິດພາດ

ເມື່ອຂັ້ນຕອນໜຶ່ງລົ້ມເຫຼວ, ຕົວປະສານງານຈະກວດຫາຂັ້ນຕອນ **ສຳຮອງ** ທີ່ກຳນົດໄວ້ໃນແຜນ:

- **ມີທາງເລືອກສຳຮອງ** — ຂັ້ນຕອນສຳຮອງຈະຖືກລອງທັນທີ. ຖ້າສຳເລັດ, ການດຳເນີນການຈະສືບຕໍ່. ຖ້າມັນລົ້ມເຫຼວດ້ວຍ, ຂັ້ນຕອນນັ້ນຈະຖືກໝາຍເປັນ `failed` ແລະການດຳເນີນການຈະສືບຕໍ່ກັບຂັ້ນຕອນຖັດໄປ.
- **ບໍ່ມີທາງເລືອກສຳຮອງ** — ຂັ້ນຕອນນັ້ນຈະຖືກໝາຍເປັນ `failed`. ຂັ້ນຕອນທີ່ບໍ່ສຳຄັນຈະຖືກຂ້າມ; ຂັ້ນຕອນສຳຄັນ (ທີ່ໝາຍໄວ້ເປັນ `required: true`) ຈະຢຸດໄລຍະປັດຈຸບັນ ແລະກະຕຸ້ນຄວາມພະຍາຍາມຟື້ນຕົວລະດັບໄລຍະ.

agent ຈະລາຍງານຄວາມລົ້ມເຫຼວທັງໝົດໃນສະຫຼຸບແຜນສຸດທ້າຍ ແລະອາດແນະນຳຂັ້ນຕອນແກ້ໄຂແບບຄູ່ມືສຳລັບຂໍ້ຜິດພາດທີ່ຟື້ນຕົວບໍ່ໄດ້.

---

## ຄວາມສາມາດຂອງແຜນເວັບໄຊ

### `create_site_plan`

ສ້າງແຜນເວັບໄຊທີ່ມີໂຄງສ້າງຈາກຄຳອະທິບາຍເປົ້າໝາຍເປັນພາສາທຳມະຊາດ.

**ພາຣາມິເຕີ**

| ພາຣາມິເຕີ | ປະເພດ | ຈຳເປັນ | ຄຳອະທິບາຍ |
|---|---|---|---|
| `goal` | string | ແມ່ນ | ຄຳອະທິບາຍເປັນພາສາທຳມະຊາດຂອງເວັບໄຊທີ່ຕ້ອງການ |
| `style` | string | ບໍ່ | ຄວາມມັກດ້ານຮູບແບບພາບ: `minimal`, `bold`, `professional`, `playful`. ຄ່າເລີ່ມຕົ້ນ: agent ເລືອກຕາມເປົ້າໝາຍ |
| `plugins` | array | ບໍ່ | slug ຂອງປລັກອິນທີ່ຈະລວມໄວ້ໃນແຜນ. ຕົວປະສານງານຈະເພີ່ມປລັກອິນທີ່ຈຳເປັນໂດຍອັດຕະໂນມັດ. |
| `dry_run` | boolean | ບໍ່ | ຖ້າເປັນ `true`, ຈະສົ່ງກັບ JSON ຂອງແຜນໂດຍບໍ່ບັນທຶກ ຫຼືດຳເນີນການມັນ. ຄ່າເລີ່ມຕົ້ນ `false` |

**ສົ່ງກັບ** `{ "plan_id": "plan_restaurant_001", "phases": 4, "steps": 14, "plugin_requirements": 1 }`

---

### `execute_site_plan`

ເລີ່ມດຳເນີນການແຜນເວັບໄຊທີ່ສ້າງໄວ້ກ່ອນໜ້ານີ້.

**ພາຣາມິເຕີ**

| ພາຣາມິເຕີ | Type | ຈຳເປັນ | ຄຳອະທິບາຍ |
|---|---|---|---|
| `plan_id` | string | ແມ່ນ | ID ຂອງແຜນທີ່ຈະດຳເນີນການ |
| `auto_install_plugins` | boolean | ບໍ່ | ຖ້າເປັນ `true`, ຈະຕິດຕັ້ງ plugins ທີ່ຈຳເປັນໂດຍອັດຕະໂນມັດໂດຍບໍ່ຕ້ອງຢືນຢັນ. ຄ່າເລີ່ມຕົ້ນ `false` |
| `max_retries` | integer | ບໍ່ | ຈຳນວນເທື່ອທີ່ຈະລອງຂັ້ນຕອນທີ່ລົ້ມເຫຼວຄືນໃໝ່ກ່ອນຈະດຳເນີນຕໍ່. ຄ່າເລີ່ມຕົ້ນ `1` |

**ສົ່ງຄືນ** `{ "execution_id": "exec_001", "status": "started" }`

---

### `get_plan_progress`

ສົ່ງຄືນສະຖານະການດຳເນີນການປັດຈຸບັນຂອງແຜນ site.

**ພາຣາມິເຕີ**

| ພາຣາມິເຕີ | Type | ຈຳເປັນ | ຄຳອະທິບາຍ |
|---|---|---|---|
| `plan_id` | string | ແມ່ນ | ID ແຜນທີ່ຈະສອບຖາມ |

**ສົ່ງຄືນ** ອອບເຈັກຄວາມຄືບໜ້າທີ່ອະທິບາຍໄວ້ໃນ [ການຕິດຕາມຄວາມຄືບໜ້າ](#4-progress-tracking) ຂ້າງເທິງ.

---

### `handle_plan_error`

ແກ້ໄຂຂັ້ນຕອນທີ່ລົ້ມເຫຼວດ້ວຍຕົນເອງ ແລະດຳເນີນແຜນຕໍ່ຈາກຂັ້ນຕອນຖັດໄປ. ໃຊ້ອັນນີ້ເມື່ອການກູ້ຄືນອັດຕະໂນມັດເປັນໄປບໍ່ໄດ້ ແລະທ່ານຕ້ອງການແຊກແຊງ.

**ພາຣາມິເຕີ**

| ພາຣາມິເຕີ | Type | ຈຳເປັນ | ຄຳອະທິບາຍ |
|---|---|---|---|
| `plan_id` | string | ແມ່ນ | ID ແຜນ |
| `step_id` | string | ແມ່ນ | ID ຂອງຂັ້ນຕອນທີ່ລົ້ມເຫຼວ |
| `resolution` | string | ແມ່ນ | ໜຶ່ງໃນ `skip` (ຂ້າມ ແລະດຳເນີນຕໍ່), `retry` (ລອງຂັ້ນຕອນຄືນໃໝ່ທັນທີ), ຫຼື `mark_done` (ຖືວ່າສຳເລັດໂດຍບໍ່ແລ່ນຄືນໃໝ່) |

**ສົ່ງຄືນ** `{ "success": true, "plan_id": "plan_restaurant_001", "resumed_from": "add_menu_item" }`

---

## ການປຽບທຽບ v1 ແລະ v2

| ຄຸນສົມບັດ | v1 | v2 |
|---|---|---|
| ແຜນຫຼາຍໄລຍະ | ບໍ່ | ແມ່ນ |
| ການອ້າງອີງຜົນລັບຂອງຂັ້ນຕອນ (`__ref:`) | ບໍ່ | ແມ່ນ |
| ການຄົ້ນພົບ plugin | ເຮັດດ້ວຍຕົນເອງ | ອັດຕະໂນມັດ |
| API ຕິດຕາມຄວາມຄືບໜ້າ | ບໍ່ | ແມ່ນ |
| ການກູ້ຄືນຈາກຂໍ້ຜິດພາດ | ລົ້ມເຫຼວແລ້ວຢຸດ | ທາງເລືອກສຳຮອງ + ດຳເນີນຕໍ່ |
| ການດຳເນີນຂັ້ນຕອນແບບຂະໜານ | ບໍ່ | ແມ່ນ (ເລືອກເປີດໃຊ້ຕາມໄລຍະ) |
| ຄຳສັ່ງແຜນ WP-CLI | ບໍ່ | ແມ່ນ |
| ການຜະສານ Benchmark | ບໍ່ | ແມ່ນ (`q-restaurant-website`) |

---

## ຄຳສັ່ງແຜນ WP-CLI

### `wp gratis-ai-agent plan create`

ສ້າງແຜນ site ຈາກຄຳອະທິບາຍເປົ້າໝາຍ.

```bash
wp gratis-ai-agent plan create "Build a restaurant website with an online menu, booking form, and contact page" [--dry-run] [--output=json]
```

### `wp gratis-ai-agent plan execute`

ດຳເນີນການແຜນທີ່ສ້າງໄວ້ກ່ອນໜ້ານີ້.

```bash
wp gratis-ai-agent plan execute plan_restaurant_001 [--auto-install-plugins]
```

### `wp gratis-ai-agent plan status`

ສະແດງຄວາມຄືບໜ້າປັດຈຸບັນສຳລັບແຜນທີ່ກຳລັງດຳເນີນ ຫຼືສຳເລັດແລ້ວ.

```bash
wp gratis-ai-agent plan status plan_restaurant_001
```

### `wp gratis-ai-agent plan list`

ສະແດງລາຍຊື່ແຜນ site ທັງໝົດ (ລໍຖ້າ, ກຳລັງດຳເນີນ, ແລະສຳເລັດແລ້ວ).

```bash
wp gratis-ai-agent plan list [--status=<status>] [--format=table|json|csv]
```

### `wp gratis-ai-agent plan reset`

ຣີເຊັດແຜນທີ່ລົ້ມເຫຼວໃຫ້ເປັນ `pending` ເພື່ອໃຫ້ສາມາດດຳເນີນຄືນໃໝ່ຈາກຕົ້ນ.

```bash
wp gratis-ai-agent plan reset plan_restaurant_001
```
