---
title: WP-CLI เอกสารอ้างอิง
sidebar_position: 3
_i18n_hash: 365bd4ea4c1118b4258408f43a8020fc
---
# WP-CLI Reference

Gratis AI Agent มาพร้อมกับกลุ่มคำสั่ง `wp gratis-ai-agent` สำหรับการทดสอบประสิทธิภาพของ Agent, การจัดการความสามารถ (abilities), และการตรวจสอบสถานะของ Agent ผ่าน Command Line คำสั่งทั้งหมดจำเป็นต้องใช้ WP-CLI เวอร์ชัน 2.0 ขึ้นไป

## Installation {#installation}

คำสั่ง WP-CLI จะลงทะเบียนโดยอัตโนมัติเมื่อปลั๊กอินทำงานอยู่ คุณสามารถตรวจสอบได้โดยใช้:

```bash
wp gratis-ai-agent --info
```

---

## `wp gratis-ai-agent benchmark` {#wp-gratis-ai-agent-benchmark}

ใช้สำหรับรันชุดการทดสอบประสิทธิภาพของ Agent Capabilities ซึ่งเป็นชุดของ prompts ที่ซับซ้อนและมีหลายขั้นตอน เพื่อทดสอบขีดความสามารถทั้งหมด คุณสามารถใช้คำสั่งนี้เพื่อประเมินประสิทธิภาพของโมเดล, เปรียบเทียบผู้ให้บริการ AI ต่างๆ, หรือตรวจสอบชุดความสามารถก่อนนำไปใช้งานจริง (production)

### Synopsis {#synopsis}

```bash
wp gratis-ai-agent benchmark [--question=<id>] [--provider=<provider>] [--model=<model>] [--output=<format>] [--save]
```

### Options {#options}

| Option | Description |
|---|---|
| `--question=<id>` | รันคำถามทดสอบเพียงข้อเดียวโดยระบุ ID แทนการรันชุดทั้งหมด |
| `--provider=<provider>` | กำหนดผู้ให้บริการ AI ที่ต้องการใช้สำหรับการรันครั้งนี้ (เช่น `anthropic`, `openai`) |
| `--model=<model>` | กำหนดโมเดลที่ต้องการใช้สำหรับการรันครั้งนี้ (เช่น `claude-opus-4-6`, `gpt-4o`) |
| `--output=<format>` | รูปแบบผลลัพธ์: `table` (ค่าเริ่มต้น), `json`, `csv` |
| `--save` | บันทึกผลการทดสอบประสิทธิภาพลงในฐานข้อมูลเพื่อเปรียบเทียบในภายหลัง |

### Examples {#examples}

รันชุดการทดสอบประสิทธิภาพทั้งหมดโดยใช้ผู้ให้บริการและโมเดลปัจจุบัน:

```bash
wp gratis-ai-agent benchmark
```

รันคำถามเพียงข้อเดียว (`q-restaurant-website`) และแสดงผลเป็น JSON:

```bash
wp gratis-ai-agent benchmark --question=q-restaurant-website --output=json
```

รันโดยใช้โมเดลที่กำหนดและบันทึกผลลัพธ์:

```bash
wp gratis-ai-agent benchmark --model=claude-opus-4-6 --save
```

### Output {#output}

การทดสอบประสิทธิภาพจะแสดงผลลัพธ์หนึ่งแถวต่อหนึ่งคำถาม โดยมีคอลัมน์ดังนี้:

| Column | Description |
|---|---|
| `ID` | รหัสระบุคำถาม |
| `Description` | สรุปสั้นๆ ของสถานการณ์การทดสอบ |
| `Score` | คะแนนผ่าน/ไม่ผ่าน หรือคะแนนตัวเลข (0–100) |
| `Abilities Used` | รายการความสามารถที่ถูกเรียกใช้ คั่นด้วยเครื่องหมายจุลภาค |
| `Tokens` | จำนวนโทเคนทั้งหมดที่ใช้ไป |
| `Duration` | เวลาที่ใช้จริงเป็นวินาที |

```
ID                       Description                         Score  Abilities Used               Tokens  Duration
q-portfolio-site         Create a portfolio CPT with tags    100    register_post_type, reg...   4821    18.3s
q-restaurant-website     Build a full restaurant website     92     create_site_plan, execut...  12430   54.1s
q-dark-mode-theme        Apply a dark theme preset           100    apply_theme_json_preset      986     4.2s
...
```

### Benchmark Questions {#benchmark-questions}

ชุดค่าเริ่มต้นประกอบด้วย:

| ID | Scenario |
|---|---|
| `q-portfolio-site` | สร้าง CPT Portfolio พร้อม Taxonomy ประเภท Project Category และลงทะเบียน Block Pattern |
| `q-restaurant-website` | สร้างเว็บไซต์ร้านอาหารแบบเต็มรูปแบบ พร้อม CPT เมนู, แบบฟอร์มจอง, และระบบนำทาง |
| `q-dark-mode-theme` | ใช้ค่า Preset ธีมแบบ Dark Mode และแทรกสีแบรนด์ |
| `q-nav-builder` | สร้างเมนูนำทางหลัก 4 รายการ พร้อม Dropdown แบบซ้อนกัน |
| `q-options-roundtrip` | อ่าน, แก้ไข, และกู้คืนชุดค่า Option ของ WordPress |
| `q-ability-install` | ค้นหาและติดตั้งชุดความสามารถที่เหมาะสมที่สุดสำหรับกรณีการใช้งานที่กำหนด |

สามารถลงทะเบียนคำถามเพิ่มเติมได้ผ่าน filter `gratis_ai_agent_benchmark_questions`

---

## `wp gratis-ai-agent abilities` {#wp-gratis-ai-agent-abilities}

ใช้สำหรับจัดการความสามารถ (abilities) และชุดความสามารถ (ability packs) ที่ติดตั้งไว้

### `wp gratis-ai-agent abilities list` {#wp-gratis-ai-agent-abilities-list}

แสดงรายการความสามารถทั้งหมดที่ลงทะเบียน, แหล่งที่มา (core หรือ pack), และสถานะปัจจุบัน

```bash
wp gratis-ai-agent abilities list [--format=<format>]
```

**Options**

| Option | Description |
|---|---|
| `--format=<format>` | รูปแบบผลลัพธ์: `table` (ค่าเริ่มต้น), `json`, `csv` |

**Example output**

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

ดาวน์โหลดและเปิดใช้งานชุดความสามารถ (ability pack) จาก registry

```bash
wp gratis-ai-agent abilities install <slug>
```

**Arguments**

| Argument | Description |
|---|---|
| `<slug>` | Slug ของปลั๊กอินชุดความสามารถ เช่น `gratis-ai-agent-woocommerce` |

**Example**

```bash
wp gratis-ai-agent abilities install gratis-ai-agent-woocommerce
Success: Installed gratis-ai-agent-woocommerce. Added 3 abilities: create_product, update_pricing, manage_inventory.
```

---

### `wp gratis-ai-agent abilities disable` {#wp-gratis-ai-agent-abilities-disable}

ปิดใช้งานความสามารถเฉพาะตัวโดยไม่ลบชุดความสามารถนั้นออก มีประโยชน์ในการจำกัดขอบเขตการทำงานของ Agent ในเว็บไซต์ที่กำหนด

```bash
wp gratis-ai-agent abilities disable <ability>
```

**Example**

```bash
wp gratis-ai-agent abilities disable delete_post_type
Success: Ability 'delete_post_type' disabled.
```

---

### `wp gratis-ai-agent abilities enable` {#wp-gratis-ai-agent-abilities-enable}

เปิดใช้งานความสามารถที่เคยถูกปิดไว้

```bash
wp gratis-ai-agent abilities enable <ability>
```

---

## `wp gratis-ai-agent status` {#wp-gratis-ai-agent-status}

แสดงการตั้งค่า Agent ปัจจุบันและสถานะการเชื่อมต่อ

```bash
wp gratis-ai-agent status
```

**Example output**

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

แสดงกิจกรรมล่าสุดของ Agent จาก debug log

```bash
wp gratis-ai-agent logs [--last=<n>] [--level=<level>] [--ability=<ability>]
```

**Options**

| Option | Description |
|---|---|
| `--last=<n>` | แสดงรายการ log ล่าสุด N รายการ ค่าเริ่มต้นคือ `50` |
| `--level=<level>` | กรองตามระดับ: `info`, `warning`, `error` |
| `--ability=<ability>` | กรองตามชื่อความสามารถ |

**Example**

```bash
wp gratis-ai-agent logs --last=20 --level=error
```

---

## `wp gratis-ai-agent reset` {#wp-gratis-ai-agent-reset}

รีเซ็ตสถานะของ Agent: ล้าง CSS ที่ถูกแทรก, ลบ CPTs และ Taxonomies ที่ Agent ลงทะเบียน, รีเซ็ต global styles, และล้างแคช options ของ Agent จะไม่ลบปลั๊กอินหรือการตั้งค่าของมัน

```bash
wp gratis-ai-agent reset [--yes]
```

เพิ่ม `--yes` เพื่อข้ามการแจ้งเตือนยืนยัน

```bash
wp gratis-ai-agent reset --yes
Success: Agent state reset. Cleared: 2 post types, 1 taxonomy, custom CSS, global styles overrides.
```

---

## Exit Codes {#exit-codes}

คำสั่งทั้งหมดจะออกโค้ด `0` เมื่อสำเร็จ โค้ดที่ไม่ใช่ศูนย์:

| Code | Meaning |
|---|---|
| `1` | ข้อผิดพลาดทั่วไป (ดูข้อความแสดงข้อผิดพลาด) |
| `2` | การเชื่อมต่อผู้ให้บริการล้มเหลว |
| `3` | ไม่พบความสามารถ (Ability not found) |
| `4` | ไม่พบคำถามทดสอบ (Benchmark question not found) |
