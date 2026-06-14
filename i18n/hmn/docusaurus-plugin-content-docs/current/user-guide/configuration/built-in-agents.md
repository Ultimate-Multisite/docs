---
title: Agents uab tsim hauv
sidebar_position: 12
_i18n_hash: 4852fdc3ddd1a44a574c100846e84dc5
---
# Agents ທີ່ມາພ້ອມກັບລະບົບ

Gratis AI Agent v1.9.0 ມາພ້ອມກັບ agent 5 ຊື່, ແຕ່ແຕ່ລະ agent ຈະຖືກຕັ້ງຄ່າໄວ້ລ່ວງໜ້າດ້ວຍເຄື່ອງມືທີ່ເນັ້ນໃສ່, system prompt ທີ່ເໝາະສົມ, ແລະ ຄຳແນະນຳເລີ່ມຕົ້ນທີ່ກົງກັບວຽກທົ່ວໄປໃນຂÃຍນນັ້ນ. ການປ່ຽນລະຫວ່າງ agent ເຮັດໃຫ້ assistant ສາມາດເຮັດຫຍັງໄດ້ ແລະ ຕອບສະໜອງແນວໃດ — ໂດຍບໍ່ຕ້ອງມີການຕັ້ງຄ່າໃດໆຈາກເຈົ້າເລີຍ.

## Agent ແມ່ນຫຍັງ?

Agent ແຕ່ລະໂຕແມ່ນໂປຣໄຟລ໌ການຕັ້ງຄ່າທີ່ມີຊື່, ເຊິ່ງປະກອບດ້ວຍ:

- **Tools** — ແມ່ນຄວາມສາມາດທີ່ agent ອະນຸຍາດໃຫ້ໃຊ້ (ຕົວຢ່າງ: Content Writer ສາມາດເຂົ້າເຖິງຄວາມສາມາດໃນການສ້າງໂພສໄດ້; Design Studio ສາມາດເຂົ້າເຖິງ CSS ແລະ theme.json ໄດ້)
- **System prompt** — ຄຳແນະນຳທີ່ກຳນົດສຽງ, ຄວາມສຳຄັນ, ແລະ ຂອບເຂດຂອງ agent ນັ້ນໆ
- **Suggestions** — ແມ່ນ prompts ທີ່ຂຽນໄວ້ລ່ວງໜ້າທີ່ສະແດງຢູ່ໃນ giao diện chat ເພື່ອຊ່ວຍໃຫ້ເຈົ້າເລີ່ມຕົ້ນໄດ້ໄວ

## ການເຂົ້າເຖິງ Agent Picker

1. ເປີດແຜງ **Gratis AI Agent** ໃນ sidebar ຂອງ WordPress admin.
2. ກົດໃສ່ **agent icon** ຢູ່ເທິງຊ້າຍສຸດຂອງ header chat (icon ນີ້ຈະປ່ຽນໄປຕາມ agent ທີ່ກຳລັງໃຊ້).
3. **Agent Picker** ຈະເປີດຂຶ້ນມາເປັນ form-table overlay. ແຕ່ລະ agent ຈະຖືກລາຍຊື່ພ້ອມກັບ icon, ຊື່, ແລະ ຄຳອະທິບາຍສັ້ນໆໜຶ່ງແຖວ.
4. ກົດໃສ່ແຖວຂອງ agent ເພື່ອເປີດໃຊ້ງານມັນ. header chat ຈະອັບເດດທັນທີ.

ເຈົ້າສາມາດປ່ຽນ agent ກາງການສົນທະນາໄດ້ — system prompt ຂອງ agent ໃໝ່ຈະມີຜົນບັງຄັບໃຊ້ຕັ້ງແຕ່ຂໍ້ຄວາມຕໍ່ໄປ.

## Agent 5 ຊື່ທີ່ມາພ້ອມກັບລະບົບ

### Content Writer (ຜູ້ຂຽນເນື້ອຫາ)

**ຈຸດສຸມ:** ການສ້າງ ແລະ ແກ້ໄຂໂພສ, ໜ້າ, ແລະ contact forms.

**ເຄື່ອງມືທີ່ມີໃຫ້ໃຊ້:** `create_post`, `update_post`, `batch_create_posts`, `set_featured_image`, `create_contact_form`, `get_option`, `list_post_types`

**Kuv ia txhob chawm:**
- Tshawb thiab tshem blog posts los ntawm ib qho raws li hauv lub teeb meem lossis outline
- Tsim batch ntawm landing pages rau lub teeb uas tshiab
- Tsim forms rau kev pib tawm thiab kev thov hais ceenv
- Teeb xim featured images rau posts los ntawm URL lossis search

**Kev siv los mus rau hauv:**
- *Tshawb blog post 500 words txog txoj haujlwm ntawm WordPress multisite.*
- *Tsim About, Services, thiab Contact page thiab tshem lawm.*
- *Thawm forms thov hais ceenv rau lub Contact page.*

---

### Site Builder (Kev Tsim Teeb)

**Fokus:** Tsim teeb website los ntawm ib qho raws li hauv lub rooj.

**Txhua tool uas muaj:** `create_site_plan`, `execute_site_plan`, `get_plan_progress`, `handle_plan_error`, `create_post`, `batch_create_posts`, `register_post_type`, `create_menu`, `add_menu_item`, `inject_custom_css`, `apply_theme_json_preset`, `install_ability`, `recommend_plugin`, `create_contact_form`

**Kev siv los mus rau hauv:**
- Tsim site build plan uas muaj ntau qho chawm rau lub neej uas tshawb txog.
- Tshem txhua phase (chawm) los ntawm nws tus kheej — structure, content, navigation, design.
- Txhua yam uas muaj error hauv plan yuav tsis txhob tsim, thiab yuav tsis txhob txhawb rau hauv lub teeb meem.
- Tshem plugins uas muaj kev txiav tlay (recommended) los ntawm qho site build.
- Tsim contact forms los ntawm chat interface (Superdav AI Agent v1.10.0+)

**Kev siv los mus rau hauv:**
- *Tsim photography portfolio site loj ntxiv gallery post type, booking page, thiab contact form.*
- *Tsim restaurant website muaj online menu, opening hours, thiab table-booking enquiry form.*
- *Teeb tab tom (freelance consulting) site muaj service pages, portfolio section, thiab blog.*
- *Thawm contact form rau lub Contact page los ntawm site builder.*

---

### Design Studio (Kev Tsim Teeb Design)

**Fokus:** Kev tsim teeb hauv kev sib txawv — colors, typography, CSS, thiab block patterns.

**Plugin Manager**

**Focus:** 搵, ติดตั้ง, thiab thov txhawj co WordPress plugins.

**Available tools:** `list_available_abilities`, `install_ability`, `recommend_plugin`, `get_option`, `set_option`

**What it does well:**
- 推荐最适合你用嘅 plugin. (Recommending the best plugin for a described use case)
- 载入 registry sa ability packs. (Installing ability packs from the registry)
- 睇有咩 category sa available ability catalogue. (Browsing the available ability catalogue by category)

**Starter suggestions:**
- *Plugin zoo uas zoo tshaj haum rau membership directory yog qhov muag li cas?* (*What's the best plugin for a membership directory?*)
- *Install WooCommerce abilities pack.* (*Install the WooCommerce abilities pack.*)
- *Tso kuv pom lub ability packs ecommerce txhua yam.* (*Show me all available ecommerce ability packs.*)

---

**Support Assistant**

**Focus:** Tswv cov lus nug txog site content, settings, thiab WordPress configuration.

**Available tools:** `get_option`, `list_options`, `list_post_types`, `list_taxonomies`, `list_menus`, `list_available_abilities`

**ສິ່ງທີ່ເຮັດໄດ້ດີ:**
- ຊອກຫາການຕັ້ງຄ່າ ແລະ ຕົວເລືອກຂອງໄຊທ໌ໃນປັດຈຸບັນ
- ອະທິບາຍວ່າ post types, taxonomies, ແລະ menus ຖືກຕັ້ງຄ່າໄວ້ເທິງໄຊທ໌ແນວໃດ
- ຕອບຄຳຖາມ "ການຕັ້ງຄ່ານີ້ເຮັດຫຍັງ?" ໂດຍການອ່ານຄ່າທີ່ໃຊ້ຢູ່ຈິງ
- ເປັນຊັ້ນກວດສອບແບບອ່ານຢ່າງດຽວ ກ່ອນທີ່ຈະປ່ຽນແປງຫຍັງ

**ຂໍ້ສະເໜີເລີ່ມຕົ້ນ:**
- *ມີ plugin ແລະ ການຕັ້ງຄ່າໃດໃຊ້ຢູ່ໃນໄຊທ໌ນີ້ແດ່?*
- *ລາຍຊື່ custom post types ທັງໝົດທີ່ລົງທະບຽນໄວ້ເທິງໄຊທ໌ນີ້.*
- *ເມນູການນຳທາງມີຫຍັງແດ່ ແລະ ມັນຖືກຈັດວາງຢູ່ໃສ?*

---

## ການປັບແຕ່ງ Agents (ຕົວແທນ)

Agent ທຸກໂຕທີ່ມາຕິດຕັ້ງມາກ່ອນສາມາດຂະຫຍາຍ ຫຼື ແທນທີ່ໄດ້ໂດຍໃຊ້ filter ຊື່ວ່າ `gratis_ai_agent_agents`.

### ການເພີ່ມ system prompt ໃໝ່ໃຫ້ກັບ agent ທີ່ມີຢູ່ແລ້ວ

```php
add_filter( 'gratis_ai_agent_agents', function ( array $agents ): array {
    if ( isset( $agents['content-writer'] ) ) {
        $agents['content-writer']['system_prompt'] .= "\n\nAlways write in British English and use the Oxford comma.";
    }
    return $agents;
} );
```

### ການລົງທະບຽນ agent ໃໝ່

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

Agent tshiab tsim neeg ua raws hauv Agent Picker thaum filter thov.

### Txhob txhob agent uas yuav tsim los

```php
add_filter( 'gratis_ai_agent_agents', function ( array $agents ): array {
    unset( $agents['plugin-manager'] );
    return $agents;
} );
```
