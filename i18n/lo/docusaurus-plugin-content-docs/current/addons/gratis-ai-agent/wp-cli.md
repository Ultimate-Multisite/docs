---
title: ເອກະສານອ້າງອີງ WP-CLI
sidebar_position: 3
_i18n_hash: 365bd4ea4c1118b4258408f43a8020fc
---
# ອ້າງອີງ WP-CLI {#wp-cli-reference}

Gratis AI Agent ມາພ້ອມກັບຊຸດຄຳສັ່ງ `wp gratis-ai-agent` ສຳລັບທົດສອບປະສິດທິພາບເອເຈນ, ຈັດການຄວາມສາມາດ, ແລະສອບຖາມສະຖານະເອເຈນຈາກບັນທັດຄຳສັ່ງ. ຄຳສັ່ງທັງໝົດຕ້ອງການ WP-CLI 2.0 ຫຼືສູງກວ່າ.

## ການຕິດຕັ້ງ {#installation}

ຄຳສັ່ງ WP-CLI ຖືກລົງທະບຽນອັດຕະໂນມັດເມື່ອ plugin ເປີດໃຊ້ງານ. ກວດສອບດ້ວຍ:

```bash
wp gratis-ai-agent --info
```

---

## `wp gratis-ai-agent benchmark` {#wp-gratis-ai-agent-benchmark}

ເປີດໃຊ້ຊຸດທົດສອບປະສິດທິພາບຄວາມສາມາດຂອງເອເຈນ — ເປັນຊຸດ prompt ທີ່ຊັບຊ້ອນ ແລະມີຫຼາຍຂັ້ນຕອນ ເຊິ່ງທົດສອບພື້ນທີ່ຄວາມສາມາດທັງໝົດ. ໃຊ້ສິ່ງນີ້ເພື່ອປະເມີນປະສິດທິພາບໂມເດວ, ປຽບທຽບຜູ້ໃຫ້ບໍລິການ AI, ຫຼືກວດຢືນຢັນຊຸດຄວາມສາມາດກ່ອນນຳໄປໃຊ້ງານຈິງ.

### ຮູບແບບຄຳສັ່ງ {#synopsis}

```bash
wp gratis-ai-agent benchmark [--question=<id>] [--provider=<provider>] [--model=<model>] [--output=<format>] [--save]
```

### ຕົວເລືອກ {#options}

| ຕົວເລືອກ | ຄຳອະທິບາຍ |
|---|---|
| `--question=<id>` | ເປີດໃຊ້ຄຳຖາມທົດສອບດຽວໂດຍ ID ແທນຊຸດທັງໝົດ |
| `--provider=<provider>` | ແທນທີ່ຜູ້ໃຫ້ບໍລິການ AI ທີ່ກຳນົດໄວ້ສຳລັບການເປີດໃຊ້ຄັ້ງນີ້ (ເຊັ່ນ `anthropic`, `openai`) |
| `--model=<model>` | ແທນທີ່ໂມເດວທີ່ກຳນົດໄວ້ສຳລັບການເປີດໃຊ້ຄັ້ງນີ້ (ເຊັ່ນ `claude-opus-4-6`, `gpt-4o`) |
| `--output=<format>` | ຮູບແບບຜົນລັບ: `table` (ຄ່າເລີ່ມຕົ້ນ), `json`, `csv` |
| `--save` | ບັນທຶກຜົນທົດສອບໄປຍັງຖານຂໍ້ມູນເພື່ອການປຽບທຽບຍ້ອນຫຼັງ |

### ຕົວຢ່າງ {#examples}

ເປີດໃຊ້ຊຸດທົດສອບທັງໝົດດ້ວຍຜູ້ໃຫ້ບໍລິການ ແລະໂມເດວປັດຈຸບັນ:

```bash
wp gratis-ai-agent benchmark
```

ເປີດໃຊ້ຄຳຖາມດຽວ (`q-restaurant-website`) ແລະສົ່ງອອກເປັນ JSON:

```bash
wp gratis-ai-agent benchmark --question=q-restaurant-website --output=json
```

ເປີດໃຊ້ກັບໂມເດວສະເພາະ ແລະບັນທຶກຜົນ:

```bash
wp gratis-ai-agent benchmark --model=claude-opus-4-6 --save
```

### ຜົນລັບ {#output}

ຜົນທົດສອບຈະສົ່ງອອກໜຶ່ງແຖວຕໍ່ຄຳຖາມ ພ້ອມຄໍລຳຕໍ່ໄປນີ້:

| ຄໍລຳ | ຄຳອະທິບາຍ |
|---|---|
| `ID` | ຕົວລະບຸຄຳຖາມ |
| `Description` | ສະຫຼຸບສັ້ນຂອງສະຖານະການທົດສອບ |
| `Score` | ຜ່ານ/ບໍ່ຜ່ານ ຫຼືຄະແນນຕົວເລກ (0–100) |
| `Abilities Used` | ລາຍຊື່ຄວາມສາມາດທີ່ຖືກເອີ້ນໃຊ້ ແຍກດ້ວຍຈຸດຈ້ຳ |
| `Tokens` | ຈຳນວນ token ລວມທີ່ໃຊ້ |
| `Duration` | ເວລາຕາມໂມງຈິງເປັນວິນາທີ |

```
ID                       Description                         Score  Abilities Used               Tokens  Duration
q-portfolio-site         Create a portfolio CPT with tags    100    register_post_type, reg...   4821    18.3s
q-restaurant-website     Build a full restaurant website     92     create_site_plan, execut...  12430   54.1s
q-dark-mode-theme        Apply a dark theme preset           100    apply_theme_json_preset      986     4.2s
...
```

### ຄຳຖາມທົດສອບ {#benchmark-questions}

ຊຸດຄ່າເລີ່ມຕົ້ນປະກອບມີ:

| ID | ສະຖານະການ |
|---|---|
| `q-portfolio-site` | ສ້າງ Portfolio CPT ພ້ອມ taxonomy ໝວດໝູ່ໂຄງການ ແລະລົງທະບຽນ block pattern |
| `q-restaurant-website` | ສ້າງເວັບໄຊຮ້ານອາຫານເຕັມຮູບແບບພ້ອມ menu CPT, ແບບຟອມຈອງ, ແລະການນຳທາງ |
| `q-dark-mode-theme` | ນຳໃຊ້ຄ່າກຳນົດການອອກແບບ dark-mode ແລະໃສ່ສີແບຣນ |
| `q-nav-builder` | ສ້າງເມນູນຳທາງຫຼັກສີ່ລາຍການພ້ອມ dropdown ຊ້ອນກັນ |
| `q-options-roundtrip` | ອ່ານ, ແກ້ໄຂ, ແລະກູ້ຄືນຊຸດຕົວເລືອກ WordPress |
| `q-ability-install` | ຄົ້ນພົບ ແລະຕິດຕັ້ງຊຸດຄວາມສາມາດທີ່ເໝາະສົມທີ່ສຸດສຳລັບກໍລະນີການໃຊ້ງານທີ່ອະທິບາຍໄວ້ |

ສາມາດລົງທະບຽນຄຳຖາມເພີ່ມເຕີມຜ່ານ filter `gratis_ai_agent_benchmark_questions`.

---

## `wp gratis-ai-agent abilities` {#wp-gratis-ai-agent-abilities}

ຈັດການຄວາມສາມາດ ແລະຊຸດຄວາມສາມາດທີ່ຕິດຕັ້ງແລ້ວ.

### `wp gratis-ai-agent abilities list` {#wp-gratis-ai-agent-abilities-list}

ສະແດງລາຍຊື່ຄວາມສາມາດທັງໝົດທີ່ລົງທະບຽນແລ້ວ, ແຫຼ່ງທີ່ມາຂອງພວກມັນ (ແກນຫຼັກ ຫຼືຊຸດ), ແລະສະຖານະປັດຈຸບັນ.

```bash
wp gratis-ai-agent abilities list [--format=<format>]
```

**ຕົວເລືອກ**

| ຕົວເລືອກ | ຄຳອະທິບາຍ |
|---|---|
| `--format=<format>` | ຮູບແບບຜົນລັບ: `table` (ຄ່າເລີ່ມຕົ້ນ), `json`, `csv` |

**ຕົວຢ່າງຜົນລັບ**

```
Ability                   Source                          Status
register_post_type        gratis-ai-agent (core)          active
list_post_types           gratis-ai-agent (core)          active
delete_post_type          gratis-ai-agent (core)          active
register_taxonomy         gratis-ai-agent (core)          active
inject_custom_css         gratis-ai-agent (core)          active
apply_theme_json_preset   gratis-ai-agent (core)          active
create_product            gratis-ai-agent-woocommerce     active
```

---

### `wp gratis-ai-agent abilities install` {#wp-gratis-ai-agent-abilities-install}

ດາວໂຫຼດ ແລະເປີດໃຊ້ຊຸດຄວາມສາມາດຈາກທະບຽນ.

```bash
wp gratis-ai-agent abilities install <slug>
```

**ອາກິວເມັນ**

| ອາກິວເມັນ | ຄຳອະທິບາຍ |
|---|---|
| `<slug>` | slug plugin ຂອງຊຸດຄວາມສາມາດ, ເຊັ່ນ `gratis-ai-agent-woocommerce` |

**ຕົວຢ່າງ**

```bash
wp gratis-ai-agent abilities install gratis-ai-agent-woocommerce
Success: Installed gratis-ai-agent-woocommerce. Added 3 abilities: create_product, update_pricing, manage_inventory.
```

---

### `wp gratis-ai-agent abilities disable` {#wp-gratis-ai-agent-abilities-disable}

ປິດໃຊ້ຄວາມສາມາດສະເພາະໂດຍບໍ່ເອົາຊຸດອອກ. ມີປະໂຫຍດສຳລັບການຈຳກັດຂອບເຂດຂອງເອເຈນໃນເວັບໄຊໃດໜຶ່ງ.

```bash
wp gratis-ai-agent abilities disable <ability>
```

**ຕົວຢ່າງ**

```bash
wp gratis-ai-agent abilities disable delete_post_type
Success: Ability 'delete_post_type' disabled.
```

---

### `wp gratis-ai-agent abilities enable` {#wp-gratis-ai-agent-abilities-enable}

ເປີດໃຊ້ຄືນຄວາມສາມາດທີ່ເຄີຍຖືກປິດໄວ້.

```bash
wp gratis-ai-agent abilities enable <ability>
```

---

## `wp gratis-ai-agent status` {#wp-gratis-ai-agent-status}

ສະແດງການກຳນົດຄ່າເອເຈນປັດຈຸບັນ ແລະສະຖານະການເຊື່ອມຕໍ່.

```bash
wp gratis-ai-agent status
```

**ຕົວຢ່າງຜົນລັບ**

```
Plugin Version:    1.4.0
AI Provider:       Anthropic
Model:             claude-sonnet-4-6
Provider Status:   Connected
Abilities Loaded:  24
Benchmark Results: 3 saved runs (last: 2026-04-15)
Options Blocklist: 18 entries
```

---

## `wp gratis-ai-agent logs` {#wp-gratis-ai-agent-logs}

ສະແດງກິດຈະກຳເອເຈນຫຼ້າສຸດຈາກ debug log.

```bash
wp gratis-ai-agent logs [--last=<n>] [--level=<level>] [--ability=<ability>]
```

**ຕົວເລືອກ**

| ຕົວເລືອກ | ຄຳອະທິບາຍ |
|---|---|
| `--last=<n>` | ສະແດງລາຍການ log N ລາຍການສຸດທ້າຍ. ຄ່າເລີ່ມຕົ້ນ `50` |
| `--level=<level>` | ກັ່ນຕອງຕາມລະດັບ: `info`, `warning`, `error` |
| `--ability=<ability>` | ກັ່ນຕອງຕາມຊື່ຄວາມສາມາດ |

**ຕົວຢ່າງ**

```bash
wp gratis-ai-agent logs --last=20 --level=error
```

---

## `wp gratis-ai-agent reset` {#wp-gratis-ai-agent-reset}

ຣີເຊັດສະຖານະຂອງຕົວແທນ: ລຶບ CSS ທີ່ຖືກແຊກເຂົ້າ, ລຶບ CPTs ແລະ taxonomies ທີ່ຕົວແທນໄດ້ລົງທະບຽນ, ຣີເຊັດສະໄຕລ໌ສາກົນ, ແລະລ້າງແຄຊຕົວເລືອກຂອງຕົວແທນ. ບໍ່ໄດ້ລຶບປລັກອິນຫຼືການຕັ້ງຄ່າຂອງມັນ.

```bash
wp gratis-ai-agent reset [--yes]
```

ເພີ່ມ `--yes` ເພື່ອຂ້າມຄຳຖາມຢືນຢັນ.

```bash
wp gratis-ai-agent reset --yes
Success: Agent state reset. Cleared: 2 post types, 1 taxonomy, custom CSS, global styles overrides.
```

---

## ລະຫັດອອກ {#exit-codes}

ຄຳສັ່ງທັງໝົດອອກດ້ວຍ `0` ເມື່ອສຳເລັດ. ລະຫັດອອກທີ່ບໍ່ແມ່ນສູນ:

| ລະຫັດ | ຄວາມໝາຍ |
|---|---|
| `1` | ຂໍ້ຜິດພາດທົ່ວໄປ (ເບິ່ງຂໍ້ຄວາມຂໍ້ຜິດພາດ) |
| `2` | ການເຊື່ອມຕໍ່ຜູ້ໃຫ້ບໍລິການລົ້ມເຫຼວ |
| `3` | ບໍ່ພົບຄວາມສາມາດ |
| `4` | ບໍ່ພົບຄຳຖາມ Benchmark |
