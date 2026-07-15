---
title: การควบคุมการทำงานของ Site Builder v2
sidebar_position: 4
_i18n_hash: 3a3d15844b4a0751fc59ac3a4e1fb0c0
---
# Site Builder Orchestration v2

Site Builder Orchestration v2 (เปิดตัวใน Gratis AI Agent v1.4.0) คือระบบหลักที่ขับเคลื่อนการสร้างเว็บไซต์แบบหลายขั้นตอน เมื่อคุณสั่งให้ agent "สร้างเว็บไซต์ร้านอาหาร" หรือ "สร้างพอร์ตโฟลิโอพร้อมบล็อก" ระบบจัดการขั้นตอน (orchestrator) จะทำการแยกเป้าหมายระดับสูงนั้นออกเป็น **แผนงาน (plan)** ที่มีโครงสร้าง, ค้นหา plugin ที่จำเป็นในการดำเนินการ, ดำเนินการในแต่ละขั้นตอนตามลำดับ, ติดตามความคืบหน้า, และกู้คืนระบบจากข้อผิดพลาดได้ด้วยตัวเอง

---

## วิธีการทำงาน {#how-it-works}

### 1. การสร้างแผนงาน (Plan Generation) {#1-plan-generation}

เมื่อ agent ได้รับคำสั่งให้สร้างเว็บไซต์ ระบบจะเรียกใช้ ability ที่ชื่อว่า `create_site_plan` เพื่อสร้าง **แผนงานเว็บไซต์ (site plan)** ในรูปแบบ JSON แผนงานนี้จะอธิบายถึง:

- **Goal** — เป้าหมายที่เว็บไซต์ที่สร้างเสร็จแล้วควรทำอะไรได้บ้าง
- **Phases** — กลุ่มของขั้นตอนที่เรียงลำดับไว้ (เช่น _Setup_, _Content Types_, _Design_, _Content_)
- **Steps** — การเรียกใช้ ability รายตัวที่อยู่ในแต่ละ phase
- **Plugin requirements** — plugin ที่ต้องเปิดใช้งานเพื่อให้ขั้นตอนบางอย่างทำงานได้
- **Fallbacks** — ขั้นตอนทางเลือก หากขั้นตอนหลักล้มเหลว

**ตัวอย่างแผนงาน (แบบย่อ)**

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

### 2. การค้นหา Plugin (Plugin Discovery) {#2-plugin-discovery}

ก่อนที่การดำเนินการจะเริ่มขึ้น ระบบจัดการขั้นตอนจะสแกน `plugin_requirements` ในแผนงาน และตรวจสอบว่า plugin ใดบ้างที่เปิดใช้งานอยู่แล้ว สำหรับ plugin ที่ขาดหายไป ระบบจะ:

1. ค้นหา plugin ที่เหมาะสมที่สุดผ่าน `recommend_plugin`
2. แจ้งให้ agent ยืนยันคำแนะนำนั้น
3. ทริกเกอร์การติดตั้งหากได้รับการอนุมัติ (หรือหากเปิดใช้งาน auto-install ในการตั้งค่า)

หากการค้นหา plugin ล้มเหลวจะไม่ทำให้ระบบหยุดทำงาน (non-fatal) — ระบบจัดการขั้นตอนจะทำเครื่องหมายขั้นตอนที่ได้รับผลกระทบเป็น `skipped` และดำเนินการต่อกับส่วนที่เหลือของแผนงาน

### 3. การดำเนินการแผนงาน (Plan Execution) {#3-plan-execution}

ระบบจัดการขั้นตอนจะเรียกใช้ `execute_site_plan` ด้วย plan ID การดำเนินการจะดำเนินไปทีละ phase และทีละ step:

- **Step references** (`__ref:` prefix) — ขั้นตอนสามารถอ้างอิงผลลัพธ์จากขั้นตอนก่อนหน้าได้ ในตัวอย่างข้างต้น `__ref:create_menu.menu_id` จะถูกแทนที่ด้วย `menu_id` ที่ส่งกลับมาจากขั้นตอน `create_menu`
- **Parallel steps** — ขั้นตอนที่อยู่ใน phase เดียวกันและไม่มีการพึ่งพาอาศัยกัน จะถูกส่งออกไปพร้อมกันเมื่อตั้งค่า flag `parallel`
- **Step timeout** — แต่ละ step มีการตั้งค่า timeout แยกกัน (ค่าเริ่มต้นคือการตั้งค่า `Ability Timeout`) หาก step หมดเวลา จะถูกทำเครื่องหมายเป็น `failed` และแผนงานจะดำเนินการต่อไป

### 4. การติดตามความคืบหน้า (Progress Tracking) {#4-progress-tracking}

เรียกใช้ `get_plan_progress` เมื่อใดก็ได้เพื่อตรวจสอบสถานะการดำเนินการ:

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

ผู้ใช้ WP-CLI สามารถตรวจสอบความคืบหน้าได้ด้วยคำสั่ง:

```bash
wp gratis-ai-agent plan status plan_restaurant_001
```

### 5. การกู้คืนข้อผิดพลาด (Error Recovery) {#5-error-recovery}

เมื่อ step ใด step หนึ่งล้มเหลว ระบบจัดการขั้นตอนจะตรวจสอบ **fallback** step ที่กำหนดไว้ในแผนงาน:

- **Fallback available** — ระบบจะพยายามทำ fallback step ทันที หากสำเร็จ การดำเนินการจะดำเนินต่อไป หากล้มเหลวอีกครั้ง step นั้นจะถูกทำเครื่องหมายเป็น `failed` และการดำเนินการจะดำเนินต่อไปยัง step ถัดไป
- **No fallback** — step นั้นจะถูกทำเครื่องหมายเป็น `failed` ขั้นตอนที่ไม่สำคัญ (non-critical) จะถูกข้ามไป ส่วนขั้นตอนที่สำคัญ (marked `required: true`) จะหยุด phase ปัจจุบัน และทริกเกอร์ความพยายามกู้คืนระดับ phase

agent จะรายงานข้อผิดพลาดทั้งหมดในสรุปแผนงานสุดท้าย และอาจแนะนำขั้นตอนการแก้ไขด้วยตนเองสำหรับข้อผิดพลาดที่ไม่สามารถกู้คืนได้

---

## Site Plan Abilities {#site-plan-abilities}

### `create_site_plan` {#createsiteplan}

สร้างแผนงานเว็บไซต์ที่มีโครงสร้างจากคำอธิบายเป้าหมายที่เป็นภาษาธรรมชาติ

**Parameters**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `goal` | string | Yes | คำอธิบายเป้าหมายของเว็บไซต์ที่ต้องการเป็นภาษาธรรมชาติ |
| `style` | string | No | ความชอบด้านสไตล์ภาพ: `minimal`, `bold`, `professional`, `playful` ค่าเริ่มต้น: agent จะเลือกตามเป้าหมาย |
| `plugins` | array | No | Slug ของ plugin ที่ต้องการรวมในแผนงาน ระบบจัดการขั้นตอนจะเพิ่ม plugin ที่จำเป็นให้โดยอัตโนมัติ |
| `dry_run` | boolean | No | หากเป็น `true` จะส่งคืน JSON แผนงานโดยไม่บันทึกหรือดำเนินการใดๆ ค่าเริ่มต้น `false` |

**Returns** `{ "plan_id": "plan_restaurant_001", "phases": 4, "steps": 14, "plugin_requirements": 1 }`

---

### `execute_site_plan` {#executesiteplan}

เริ่มดำเนินการตามแผนงานเว็บไซต์ที่สร้างไว้ก่อนหน้า

**Parameters**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `plan_id` | string | Yes | ID ของแผนงานที่ต้องการดำเนินการ |
| `auto_install_plugins` | boolean | No | หากเป็น `true` จะติดตั้ง plugin ที่จำเป็นโดยอัตโนมัติโดยไม่ต้องยืนยัน ค่าเริ่มต้น `false` |
| `max_retries` | integer | No | จำนวนครั้งที่ต้องการลองทำ step ที่ล้มเหลวก่อนที่จะดำเนินการต่อไป ค่าเริ่มต้น `1` |

**Returns** `{ "execution_id": "exec_001", "status": "started" }`

---

### `get_plan_progress` {#getplanprogress}

ส่งคืนสถานะการดำเนินการปัจจุบันของแผนงานเว็บไซต์

**Parameters**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `plan_id` | string | Yes | Plan ID ที่ต้องการสอบถาม |

**Returns** object ความคืบหน้าตามที่อธิบายไว้ใน [Progress Tracking](#4-progress-tracking) ข้างต้น

---

### `handle_plan_error` {#handleplanerror}

แก้ไข step ที่ล้มเหลวด้วยตนเอง และดำเนินการแผนงานต่อจาก step ถัดไป ใช้เมื่อการกู้คืนอัตโนมัติไม่สามารถทำได้และคุณต้องการเข้ามาจัดการด้วยตนเอง

**Parameters**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `plan_id` | string | Yes | Plan ID |
| `step_id` | string | Yes | ID ของ step ที่ล้มเหลว |
| `resolution` | string | Yes | หนึ่งใน `skip` (ข้ามและดำเนินการต่อ), `retry` (ลองทำ step นั้นอีกครั้งทันที), หรือ `mark_done` (ถือว่าสำเร็จโดยไม่ต้องรันซ้ำ) |

**Returns** `{ "success": true, "plan_id": "plan_restaurant_001", "resumed_from": "add_menu_item" }`

---

## การเปรียบเทียบ v1 และ v2 {#comparing-v1-and-v2}

| Feature | v1 | v2 |
|---|---|---|
| Multi-phase plans | No | Yes |
| Step output references (`__ref:`) | No | Yes |
| Plugin discovery | Manual | Automatic |
| Progress tracking API | No | Yes |
| Error recovery | Fail-and-stop | Fallback + continue |
| Parallel step execution | No | Yes (opt-in per phase) |
| WP-CLI plan commands | No | Yes |
| Benchmark integration | No | Yes (`q-restaurant-website`) |

---

## WP-CLI Plan Commands {#wp-cli-plan-commands}

### `wp gratis-ai-agent plan create` {#wp-gratis-ai-agent-plan-create}

สร้างแผนงานเว็บไซต์จากคำอธิบายเป้าหมาย

```bash
wp gratis-ai-agent plan create "Build a restaurant website with an online menu, booking form, and contact page" [--dry-run] [--output=json]
```

### `wp gratis-ai-agent plan execute` {#wp-gratis-ai-agent-plan-execute}

ดำเนินการตามแผนงานที่สร้างไว้ก่อนหน้า

```bash
wp gratis-ai-agent plan execute plan_restaurant_001 [--auto-install-plugins]
```

### `wp gratis-ai-agent plan status` {#wp-gratis-ai-agent-plan-status}

แสดงความคืบหน้าปัจจุบันสำหรับแผนงานที่กำลังดำเนินการหรือเสร็จสมบูรณ์แล้ว

```bash
wp gratis-ai-agent plan status plan_restaurant_001
```

### `wp gratis-ai-agent plan list` {#wp-gratis-ai-agent-plan-list}

แสดงรายการแผนงานเว็บไซต์ทั้งหมด (ที่รอดำเนินการ, กำลังดำเนินการ, และเสร็จสมบูรณ์)

```bash
wp gratis-ai-agent plan list [--status=<status>] [--format=table|json|csv]
```

### `wp gratis-ai-agent plan reset` {#wp-gratis-ai-agent-plan-reset}

รีเซ็ตแผนงานที่ล้มเหลวให้เป็นสถานะ `pending` เพื่อให้สามารถดำเนินการซ้ำตั้งแต่ต้นได้

```bash
wp gratis-ai-agent plan reset plan_restaurant_001
```
