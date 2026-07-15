---
title: เอกสารอ้างอิงความสามารถ
sidebar_position: 2
_i18n_hash: 1a83460648ea789162af417c6b11eecc
---
# อ้างอิงความสามารถ

ความสามารถคือการกระทำย่อยพื้นฐานที่ Gratis AI Agent สามารถเรียกใช้บนการติดตั้ง WordPress ของคุณได้ แต่ละความสามารถคือ PHP class ที่ลงทะเบียนไว้ซึ่งเปิดเผย JSON schema — agent จะอ่าน schema นี้ขณะรันไทม์เพื่อทำความเข้าใจว่าต้องใช้พารามิเตอร์ใดและความสามารถนั้นส่งคืนอะไร

หน้านี้บันทึกความสามารถทั้งหมดที่มาพร้อมกับ Gratis AI Agent v1.9.0

---

## ประเภทโพสต์แบบกำหนดเอง {#custom-post-types}

ความสามารถเหล่านี้จัดการประเภทโพสต์แบบกำหนดเอง (CPT) ที่ลงทะเบียนผ่าน agent การลงทะเบียนจะถูกบันทึกคงอยู่ในตารางตัวเลือกของ WordPress เพื่อให้ยังคงอยู่หลังการปิดใช้งานและเปิดใช้งาน plugin อีกครั้ง

### `register_post_type` {#registerposttype}

ลงทะเบียนประเภทโพสต์แบบกำหนดเองใหม่

**พารามิเตอร์**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `slug` | string | Yes | คีย์ของประเภทโพสต์ (สูงสุด 20 อักขระ ไม่มีตัวพิมพ์ใหญ่ ไม่มีช่องว่าง) |
| `singular_label` | string | Yes | ชื่อเอกพจน์ที่มนุษย์อ่านได้ เช่น `Portfolio Item` |
| `plural_label` | string | Yes | ชื่อพหูพจน์ที่มนุษย์อ่านได้ เช่น `Portfolio Items` |
| `public` | boolean | No | ประเภทโพสต์เข้าถึงได้แบบสาธารณะหรือไม่ ค่าเริ่มต้น `true` |
| `supports` | array | No | ฟีเจอร์ที่รองรับ: `title`, `editor`, `thumbnail`, `excerpt`, `comments`, `revisions`, `custom-fields` ค่าเริ่มต้น `["title","editor"]` |
| `has_archive` | boolean | No | เปิดใช้งานหน้าคลังของประเภทโพสต์หรือไม่ ค่าเริ่มต้น `false` |
| `menu_icon` | string | No | คลาส Dashicons หรือ URL สำหรับไอคอนเมนูผู้ดูแลระบบ ค่าเริ่มต้น `"dashicons-admin-post"` |
| `rewrite_slug` | string | No | slug ของ URL สำหรับประเภทโพสต์ ค่าเริ่มต้นคือ `slug` |

**ตัวอย่าง**

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

**ส่งคืน** `{ "success": true, "slug": "portfolio" }`

---

### `list_post_types` {#listposttypes}

ส่งคืนประเภทโพสต์แบบกำหนดเองทั้งหมดที่ลงทะเบียนโดย agent

**พารามิเตอร์** — ไม่มี

**ส่งคืน**

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

ยกเลิกการลงทะเบียนประเภทโพสต์แบบกำหนดเองที่เคยลงทะเบียนโดย agent โพสต์ที่มีอยู่ของประเภทนั้นยังคงอยู่ในฐานข้อมูล แต่จะไม่สามารถเข้าถึงผ่านประเภทโพสต์นั้นได้อีกต่อไป

**พารามิเตอร์**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `slug` | string | Yes | คีย์ของประเภทโพสต์ที่จะลบ |

**ส่งคืน** `{ "success": true, "slug": "portfolio" }`

---

## อนุกรมวิธานแบบกำหนดเอง {#custom-taxonomies}

ความสามารถเหล่านี้จัดการอนุกรมวิธานแบบกำหนดเอง เช่นเดียวกับ CPTs การลงทะเบียนอนุกรมวิธานจะถูกบันทึกคงอยู่

### `register_taxonomy` {#registertaxonomy}

ลงทะเบียนอนุกรมวิธานแบบกำหนดเองใหม่

**พารามิเตอร์**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `slug` | string | Yes | คีย์ของอนุกรมวิธาน (สูงสุด 32 อักขระ) |
| `singular_label` | string | Yes | ชื่อเอกพจน์ที่มนุษย์อ่านได้ เช่น `Project Category` |
| `plural_label` | string | Yes | ชื่อพหูพจน์ที่มนุษย์อ่านได้ เช่น `Project Categories` |
| `post_types` | array | Yes | slug ของประเภทโพสต์ที่อนุกรมวิธานนี้ควรแนบไปด้วย |
| `hierarchical` | boolean | No | `true` สำหรับรูปแบบหมวดหมู่, `false` สำหรับรูปแบบแท็ก ค่าเริ่มต้น `true` |
| `public` | boolean | No | term เข้าถึงได้แบบสาธารณะหรือไม่ ค่าเริ่มต้น `true` |
| `rewrite_slug` | string | No | slug ของ URL สำหรับอนุกรมวิธาน ค่าเริ่มต้นคือ `slug` |

**ตัวอย่าง**

```json
{
  "slug": "project-category",
  "singular_label": "Project Category",
  "plural_label": "Project Categories",
  "post_types": ["portfolio"],
  "hierarchical": true
}
```

**ส่งคืน** `{ "success": true, "slug": "project-category" }`

---

### `list_taxonomies` {#listtaxonomies}

ส่งคืนอนุกรมวิธานแบบกำหนดเองทั้งหมดที่ลงทะเบียนโดย agent

**พารามิเตอร์** — ไม่มี

**ส่งคืน**

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

ยกเลิกการลงทะเบียนอนุกรมวิธานแบบกำหนดเองที่เคยลงทะเบียนโดย agent

**พารามิเตอร์**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `slug` | string | Yes | คีย์ของอนุกรมวิธานที่จะลบ |

**ส่งคืน** `{ "success": true, "slug": "project-category" }`

---

## ระบบการออกแบบ {#design-system}

ความสามารถของระบบการออกแบบปรับเปลี่ยนการนำเสนอด้านภาพของ site WordPress — ตั้งแต่ CSS แบบกำหนดเองไปจนถึงรูปแบบบล็อกและโลโก้ของ site

### `inject_custom_css` {#injectcustomcss}

เพิ่ม CSS ต่อท้ายเข้าไปใน `<head>` ของ site ผ่าน `wp_add_inline_style` CSS จะถูกเก็บไว้ในตัวเลือก `gratis_ai_agent_custom_css` และถูกนำออกจากคิวอย่างสะอาดเมื่อรีเซ็ตความสามารถนี้

**พารามิเตอร์**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `css` | string | Yes | CSS ที่ถูกต้องสำหรับฉีดเข้าไป |
| `label` | string | No | ป้ายกำกับที่มนุษย์อ่านได้สำหรับบล็อก CSS นี้ ใช้ในบันทึกดีบัก ค่าเริ่มต้น `"agent-injected"` |
| `replace` | boolean | No | หากเป็น `true` จะแทนที่ CSS ที่เคยฉีดเข้าไปทั้งหมด ค่าเริ่มต้น `false` (เพิ่มต่อท้าย) |

**ตัวอย่าง**

```json
{
  "css": ":root { --primary: #1a1a2e; --accent: #e94560; } body { font-family: 'Inter', sans-serif; }",
  "label": "brand-colours",
  "replace": false
}
```

**ส่งคืน** `{ "success": true, "bytes": 96 }`

---

### `add_block_pattern` {#addblockpattern}

ลงทะเบียนรูปแบบบล็อกที่ใช้ซ้ำได้ในไลบรารีรูปแบบของ WordPress

**พารามิเตอร์**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `slug` | string | Yes | ตัวระบุรูปแบบ เช่น `gratis/hero-dark` |
| `title` | string | Yes | ชื่อรูปแบบที่มนุษย์อ่านได้ซึ่งแสดงในตัวแก้ไข |
| `content` | string | Yes | มาร์กอัปบล็อกแบบ serialised (HTML) สำหรับรูปแบบ |
| `categories` | array | No | slug ของหมวดหมู่รูปแบบ เช่น `["featured", "hero"]` |
| `description` | string | No | คำอธิบายสั้นที่แสดงในตัวเลือกรูปแบบ |
| `keywords` | array | No | คำสำคัญสำหรับการค้นหา |

**ส่งคืน** `{ "success": true, "slug": "gratis/hero-dark" }`

---

### `list_block_patterns` {#listblockpatterns}

แสดงรายการรูปแบบบล็อกทั้งหมดที่ลงทะเบียนโดย agent

**พารามิเตอร์** — ไม่มี

**ส่งคืน**

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

ตั้งค่าโลโก้ไซต์ WordPress เป็น ID ไฟล์แนบที่กำหนด หรือ URL รูปภาพระยะไกล เมื่อระบุ URL ระบบจะดาวน์โหลดรูปภาพและนำเข้าไปยังคลังสื่อ

**พารามิเตอร์**

| พารามิเตอร์ | ประเภท | จำเป็น | คำอธิบาย |
|---|---|---|---|
| `attachment_id` | integer | ไม่ | ID ของไฟล์แนบที่มีอยู่ในคลังสื่อ |
| `url` | string | ไม่ | URL รูปภาพระยะไกลที่จะนำเข้าและตั้งเป็นโลโก้ |

ต้องระบุอย่างใดอย่างหนึ่งระหว่าง `attachment_id` หรือ `url`

**ส่งคืน** `{ "success": true, "attachment_id": 42 }`

---

### `apply_theme_json_preset` {#applythemejsonpreset}

ใช้พรีเซ็ตสี/ตัวพิมพ์ที่มีชื่อกับ `theme.json` (หรือ `global-styles`) ของธีมที่ใช้งานอยู่ พรีเซ็ตเป็นชุดที่คัดสรรและดูแลโดยทีม Gratis AI Agent

**พารามิเตอร์**

| พารามิเตอร์ | ประเภท | จำเป็น | คำอธิบาย |
|---|---|---|---|
| `preset` | string | ใช่ | ชื่อพรีเซ็ต เช่น `minimal-dark`, `warm-editorial`, `corporate-blue` |
| `merge` | boolean | ไม่ | หากเป็น `true` ให้ผสานกับค่าที่มีอยู่แทนการแทนที่ ค่าเริ่มต้นคือ `false` |

**พรีเซ็ตที่มีให้ใช้**

| พรีเซ็ต | คำอธิบาย |
|---|---|
| `minimal-dark` | พื้นหลังเกือบดำ ข้อความสีขาว สีเน้นหนึ่งสี |
| `warm-editorial` | พื้นหลังสีขาวนวลอบอุ่น หัวข้อแบบเซอริฟ สีเน้นโทนธรรมชาติ |
| `corporate-blue` | ชุดสีกรมท่าและขาวพร้อมตัวพิมพ์แบบมืออาชีพ |
| `vibrant-startup` | เกรเดียนต์สดใส มุมโค้งมน แบบตัวอักษรซานส์เซอริฟสมัยใหม่ |
| `classic-blog` | สีเทากลาง ๆ ระยะบรรทัดอ่านสบาย ระยะห่างเลย์เอาต์แบบดั้งเดิม |

**ส่งคืน** `{ "success": true, "preset": "minimal-dark" }`

---

## สไตล์ส่วนกลาง {#global-styles}

ความสามารถของสไตล์ส่วนกลางอ่านและเขียนค่า theme.json ผ่าน WordPress Global Styles API ซึ่งส่งผลต่อบล็อกและเทมเพลตทั้งหมดทั่วทั้งไซต์

### `get_global_styles` {#getglobalstyles}

ส่งคืนการกำหนดค่าสไตล์ส่วนกลางปัจจุบัน

**พารามิเตอร์**

| พารามิเตอร์ | ประเภท | จำเป็น | คำอธิบาย |
|---|---|---|---|
| `path` | string | ไม่ | ตัวชี้ JSON ไปยังค่าเฉพาะ เช่น `/color/palette` หรือ `/typography/fontSizes` หากละไว้จะส่งคืนออบเจ็กต์ทั้งหมด |

**ส่งคืน** ออบเจ็กต์สไตล์ส่วนกลางทั้งหมด หรือค่าที่ `path`

---

### `set_global_styles` {#setglobalstyles}

อัปเดตค่าหนึ่งค่าหรือมากกว่าในการกำหนดค่าสไตล์ส่วนกลาง

**พารามิเตอร์**

| พารามิเตอร์ | ประเภท | จำเป็น | คำอธิบาย |
|---|---|---|---|
| `path` | string | ใช่ | ตัวชี้ JSON ไปยังค่าที่จะตั้ง เช่น `/color/palette` |
| `value` | any | ใช่ | ค่าใหม่ |

**ตัวอย่าง** — เพิ่มสีลงในพาเลตต์

```json
{
  "path": "/color/palette",
  "value": [
    { "slug": "primary", "color": "#1a1a2e", "name": "Primary" },
    { "slug": "accent",  "color": "#e94560", "name": "Accent" }
  ]
}
```

**ส่งคืน** `{ "success": true, "path": "/color/palette" }`

---

### `reset_global_styles` {#resetglobalstyles}

รีเซ็ตการเปลี่ยนแปลงสไตล์ส่วนกลางทั้งหมดที่เอเจนต์นำไปใช้ โดยกู้คืนค่าเริ่มต้นของธีม

**พารามิเตอร์** — ไม่มี

**ส่งคืน** `{ "success": true }`

---

## เมนูนำทาง {#navigation-menus}

ความสามารถของเมนูนำทางสร้างและจัดการเมนูนำทางของ WordPress และรายการต่าง ๆ ของเมนู

### `create_menu` {#createmenu}

สร้างเมนูนำทาง WordPress ใหม่

**พารามิเตอร์**

| พารามิเตอร์ | ประเภท | จำเป็น | คำอธิบาย |
|---|---|---|---|
| `name` | string | ใช่ | ชื่อเมนู เช่น `Primary Navigation` |
| `location` | string | ไม่ | ตำแหน่งธีมที่จะกำหนดเมนูนี้ให้ เช่น `primary` |

**ส่งคืน** `{ "success": true, "menu_id": 7 }`

---

### `update_menu` {#updatemenu}

เปลี่ยนชื่อเมนูหรือกำหนดเมนูใหม่ให้กับตำแหน่งธีม

**พารามิเตอร์**

| พารามิเตอร์ | ประเภท | จำเป็น | คำอธิบาย |
|---|---|---|---|
| `menu_id` | integer | ใช่ | ID ของเมนูที่จะอัปเดต |
| `name` | string | ไม่ | ชื่อเมนูใหม่ |
| `location` | string | ไม่ | ตำแหน่งธีมที่จะกำหนดหรือกำหนดใหม่ |

**ส่งคืน** `{ "success": true, "menu_id": 7 }`

---

### `add_menu_item` {#addmenuitem}

เพิ่มรายการลงในเมนูนำทางที่มีอยู่

**พารามิเตอร์**

| พารามิเตอร์ | ประเภท | จำเป็น | คำอธิบาย |
|---|---|---|---|
| `menu_id` | integer | ใช่ | ID ของเมนูเป้าหมาย |
| `type` | string | ใช่ | ประเภทรายการ: `custom`, `post_type` หรือ `taxonomy` |
| `title` | string | ไม่ | ป้ายกำกับสำหรับรายการเมนู (จำเป็นสำหรับประเภท `custom`) |
| `url` | string | ไม่ | URL สำหรับรายการ `custom` |
| `object_id` | integer | ไม่ | Post ID หรือ term ID สำหรับรายการ `post_type`/`taxonomy` |
| `parent_id` | integer | ไม่ | ID รายการเมนูที่จะซ้อนรายการนี้ไว้ภายใต้ |
| `position` | integer | ไม่ | ตำแหน่งแบบเริ่มนับจากศูนย์ในเมนู |

**ส่งคืน** `{ "success": true, "item_id": 12 }`

---

### `remove_menu_item` {#removemenuitem}

ลบรายการออกจากเมนูนำทาง

**พารามิเตอร์**

| พารามิเตอร์ | ประเภท | จำเป็น | คำอธิบาย |
|---|---|---|---|
| `item_id` | integer | ใช่ | ID รายการเมนูที่จะลบ |

**ส่งคืน** `{ "success": true, "item_id": 12 }`

---

### `list_menus` {#listmenus}

แสดงรายการเมนูนำทาง WordPress ทั้งหมด รวมถึงตำแหน่งธีมที่ถูกกำหนดให้

**พารามิเตอร์** — ไม่มี

**ส่งคืน**

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

## การจัดการตัวเลือก {#options-management}

ความสามารถของตัวเลือกอ่านและเขียนตัวเลือก WordPress ผ่าน `get_option` / `update_option` รายการบล็อกเพื่อความปลอดภัยในตัวช่วยป้องกันการแก้ไขการตั้งค่าสำคัญโดยไม่ตั้งใจ

### `get_option` {#getoption}

อ่านตัวเลือก WordPress

**พารามิเตอร์**

| พารามิเตอร์ | ประเภท | จำเป็น | คำอธิบาย |
|---|---|---|---|
| `option_name` | string | ใช่ | คีย์ตัวเลือก เช่น `blogname` |

**ส่งคืน** `{ "option_name": "blogname", "value": "My Site" }`

ส่งคืนข้อผิดพลาดหาก `option_name` อยู่ในรายการบล็อกเพื่อความปลอดภัย

---

### `set_option` {#setoption}

เขียนตัวเลือก WordPress

**พารามิเตอร์**

| พารามิเตอร์ | ประเภท | จำเป็น | คำอธิบาย |
|---|---|---|---|
| `option_name` | string | ใช่ | คีย์ตัวเลือก |
| `value` | any | ใช่ | ค่าใหม่ (ทำให้เป็นซีเรียลโดยอัตโนมัติสำหรับอาร์เรย์/ออบเจ็กต์) |
| `autoload` | string | ไม่ | `"yes"` หรือ `"no"` ค่าเริ่มต้นจะคงการตั้งค่า autoload ที่มีอยู่ |

ส่งคืนข้อผิดพลาดหาก `option_name` อยู่ในรายการบล็อกเพื่อความปลอดภัย

**ส่งคืน** `{ "success": true, "option_name": "blogname" }`

---

### `delete_option` {#deleteoption}

ลบตัวเลือก WordPress

**พารามิเตอร์**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `option_name` | string | Yes | คีย์ของตัวเลือกที่จะลบ |

ส่งคืนข้อผิดพลาดหาก `option_name` อยู่ในรายการบล็อกเพื่อความปลอดภัย

**ส่งคืน** `{ "success": true, "option_name": "my_custom_option" }`

---

### `list_options` {#listoptions}

แสดงรายการตัวเลือก WordPress ที่ตรงกับรูปแบบ

**พารามิเตอร์**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `pattern` | string | No | รูปแบบ SQL LIKE เพื่อกรองชื่อตัวเลือก เช่น `gratis_%` ส่งคืนตัวเลือกทั้งหมดหากละไว้ (ใช้ด้วยความระมัดระวังกับฐานข้อมูลขนาดใหญ่) |
| `limit` | integer | No | จำนวนผลลัพธ์สูงสุด ค่าเริ่มต้น `50` สูงสุด `500` |

**ส่งคืน**

```json
{
  "options": [
    { "option_name": "gratis_ai_agent_version", "autoload": "yes" }
  ],
  "total": 1
}
```

---

## การจัดการเนื้อหา {#content-management}

ความสามารถด้านการจัดการเนื้อหาสร้างและแก้ไขโพสต์และหน้า WordPress ระบบจะส่งคืน ID ของโพสต์เพื่อให้ขั้นตอนถัดไปในแผนหลายความสามารถสามารถอ้างอิงเนื้อหาที่สร้างขึ้นได้

### `create_post` {#createpost}

สร้างโพสต์ หน้า หรือรายการประเภทโพสต์แบบกำหนดเองใหม่ใน WordPress

**พารามิเตอร์**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `title` | string | Yes | ชื่อโพสต์ |
| `content` | string | No | เนื้อหาโพสต์ — รองรับข้อความธรรมดา HTML หรือมาร์กอัปบล็อกแบบซีเรียลไลซ์ |
| `status` | string | No | `draft`, `publish`, `pending`, `private` ค่าเริ่มต้น `draft` |
| `post_type` | string | No | สลักประเภทโพสต์ เช่น `post`, `page` หรือ CPT ที่ลงทะเบียนไว้ ค่าเริ่มต้น `post` |
| `excerpt` | string | No | สรุปสั้นที่แสดงในคลังเก็บและผลการค้นหา |
| `categories` | array | No | อาร์เรย์ของชื่อหรือ ID หมวดหมู่ที่จะกำหนด |
| `tags` | array | No | อาร์เรย์ของชื่อหรือ ID แท็กที่จะกำหนด |
| `author` | integer | No | ID ผู้ใช้ WordPress ที่จะตั้งเป็นผู้เขียนโพสต์ ค่าเริ่มต้นเป็นผู้ใช้ปัจจุบัน |
| `date` | string | No | วันที่เผยแพร่ในรูปแบบ ISO 8601 เช่น `2026-05-01T09:00:00` |
| `page_template` | string | No | ไฟล์เทมเพลตที่จะกำหนดให้โพสต์หรือหน้านี้ เช่น `page-full-width.php` มีความหมายเฉพาะเมื่อ `post_type` เป็น `page` หรือ CPT ที่รองรับเทมเพลตหน้า |

**ตัวอย่าง**

```json
{
  "title": "Welcome to Our New Site",
  "content": "<!-- wp:paragraph --><p>Hello world!</p><!-- /wp:paragraph -->",
  "status": "publish",
  "post_type": "page",
  "page_template": "page-full-width.php"
}
```

**ส่งคืน** `{ "success": true, "post_id": 42, "permalink": "https://example.com/welcome/" }`

---

### `update_post` {#updatepost}

อัปเดตโพสต์หรือหน้า WordPress ที่มีอยู่

**พารามิเตอร์**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `post_id` | integer | Yes | ID ของโพสต์ที่จะอัปเดต |
| `title` | string | No | ชื่อโพสต์ใหม่ |
| `content` | string | No | เนื้อหาโพสต์ใหม่ |
| `status` | string | No | สถานะใหม่: `draft`, `publish`, `pending`, `private` |
| `excerpt` | string | No | ข้อความตัดตอนใหม่ |
| `categories` | array | No | แทนที่รายการหมวดหมู่ทั้งหมดด้วยอาร์เรย์ของชื่อหรือ ID นี้ |
| `tags` | array | No | แทนที่รายการแท็กทั้งหมดด้วยอาร์เรย์ของชื่อหรือ ID นี้ |
| `page_template` | string | No | ไฟล์เทมเพลตใหม่ที่จะกำหนดให้โพสต์หรือหน้านี้ เช่น `page-full-width.php` ส่งสตริงว่างเพื่อลบการกำหนดเทมเพลตและย้อนกลับไปใช้ค่าเริ่มต้นของธีม |

**ตัวอย่าง** — เปลี่ยนเทมเพลตหลังจากสร้าง

```json
{
  "post_id": 42,
  "page_template": "page-full-width.php"
}
```

**ส่งคืน** `{ "success": true, "post_id": 42 }`

---

### `batch_create_posts` {#batchcreateposts}

สร้างโพสต์หลายรายการในการเรียกความสามารถครั้งเดียว ลดการไปกลับระหว่างการสร้างไซต์หรือการนำเข้าเนื้อหาจำนวนมาก โพสต์จะถูกสร้างตามลำดับ หากรายการหนึ่งล้มเหลว รายการอื่นจะดำเนินต่อไป และจะรายงานความล้มเหลวในอาร์เรย์ผลลัพธ์

**พารามิเตอร์**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `posts` | array | Yes | อาร์เรย์ของออบเจ็กต์โพสต์ โดยแต่ละรายการรองรับพารามิเตอร์เดียวกับ `create_post` |
| `stop_on_error` | boolean | No | หากเป็น `true` ให้หยุดประมวลผลหลังจากความล้มเหลวครั้งแรก ค่าเริ่มต้น `false` |

**ตัวอย่าง**

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

**ส่งคืน**

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

กำหนดรูปภาพเด่น (ภาพขนาดย่อของโพสต์) ให้โพสต์หรือหน้าที่มีอยู่ รองรับ ID ไฟล์แนบ Media Library ที่มีอยู่หรือ URL รูปภาพระยะไกล เมื่อระบุ URL รูปภาพจะถูกดาวน์โหลดและนำเข้าโดยอัตโนมัติ

**พารามิเตอร์**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `post_id` | integer | Yes | ID ของโพสต์หรือหน้าที่จะอัปเดต |
| `attachment_id` | integer | No | ID ของไฟล์แนบ Media Library ที่มีอยู่ |
| `url` | string | No | URL รูปภาพระยะไกลที่จะนำเข้าและตั้งเป็นรูปภาพเด่น |
| `alt_text` | string | No | ข้อความ Alt ที่จะใช้กับไฟล์แนบหากนำเข้าจาก URL |

ต้องระบุอย่างใดอย่างหนึ่งระหว่าง `attachment_id` หรือ `url`

**ส่งคืน** `{ "success": true, "post_id": 42, "attachment_id": 17 }`

---

### `create_contact_form` {#createcontactform}

สร้างแบบฟอร์มติดต่อโดยใช้ plugin แบบฟอร์มที่ใช้งานอยู่ (Contact Form 7, WPForms, Fluent Forms หรือ Gravity Forms ขึ้นอยู่กับว่าติดตั้งตัวใดอยู่) ส่งคืน shortcode ที่สามารถฝังในโพสต์หรือหน้าใดก็ได้

**พารามิเตอร์**

| พารามิเตอร์ | ประเภท | จำเป็น | คำอธิบาย |
|---|---|---|---|
| `title` | string | ใช่ | ชื่อแบบฟอร์มที่แสดงในส่วนผู้ดูแลของ plugin แบบฟอร์ม |
| `fields` | array | ใช่ | รายการที่เรียงลำดับของฟิลด์แบบฟอร์ม (ดูอ็อบเจ็กต์ฟิลด์ด้านล่าง) |
| `recipient` | string | ไม่ | ที่อยู่อีเมลสำหรับรับการส่งแบบฟอร์ม ค่าเริ่มต้นเป็นอีเมลผู้ดูแล WordPress |
| `subject` | string | ไม่ | บรรทัดหัวเรื่องอีเมล รองรับ placeholder `[your-name]` และ `[your-subject]` เมื่อใช้ Contact Form 7 |
| `confirmation_message` | string | ไม่ | ข้อความที่แสดงหลังจากส่งสำเร็จ ค่าเริ่มต้น: `"Thank you for your message. We'll be in touch soon."` |

**อ็อบเจ็กต์ฟิลด์**

| คีย์ | ประเภท | จำเป็น | คำอธิบาย |
|---|---|---|---|
| `name` | string | ใช่ | ชื่อฟิลด์ภายใน / คีย์เครื่อง |
| `label` | string | ใช่ | ป้ายกำกับที่อ่านเข้าใจได้ซึ่งแสดงบนแบบฟอร์ม |
| `type` | string | ใช่ | `text`, `email`, `tel`, `textarea`, `select`, `checkbox`, `radio`, `file`, `date` |
| `required` | boolean | ไม่ | ฟิลด์ต้องถูกกรอกก่อนส่งหรือไม่ ค่าเริ่มต้น `false` |
| `options` | array | ไม่ | ตัวเลือกสำหรับฟิลด์ `select`, `checkbox` และ `radio` |
| `placeholder` | string | ไม่ | ข้อความ placeholder สำหรับอินพุตชนิดข้อความ |

**ตัวอย่าง**

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

**ส่งคืน**

```json
{
  "success": true,
  "form_id": 3,
  "shortcode": "[contact-form-7 id=\"3\" title=\"Restaurant Booking Enquiry\"]"
}
```

---

## การตรวจสอบด้วยภาพ {#visual-review}

ความสามารถในการตรวจสอบด้วยภาพช่วยให้ agent จับภาพหน้าจอของหน้าที่เผยแพร่แล้วและวิเคราะห์ได้ ทำให้สามารถตรวจสอบการออกแบบโดยอัตโนมัติ เปรียบเทียบก่อน/หลัง และตรวจสอบ visual regression ได้โดยไม่ต้องใช้ส่วนขยายเบราว์เซอร์ใด ๆ

### `capture_screenshot` {#capturescreenshot}

จับภาพหน้าจอของหน้า WordPress ที่ URL ที่กำหนดโดยใช้เบราว์เซอร์ headless ฝั่งเซิร์ฟเวอร์ รูปภาพจะถูกบันทึกลงใน Media Library และส่งคืน URL ของ CDN

**พารามิเตอร์**

| พารามิเตอร์ | ประเภท | จำเป็น | คำอธิบาย |
|---|---|---|---|
| `url` | string | ใช่ | URL แบบเต็มของหน้าที่จะจับภาพหน้าจอ เช่น `https://example.com/about/` |
| `width` | integer | ไม่ | ความกว้างของ viewport เป็นพิกเซล ค่าเริ่มต้น `1280` |
| `height` | integer | ไม่ | ความสูงของ viewport เป็นพิกเซล ค่าเริ่มต้น `800` |
| `full_page` | boolean | ไม่ | จับภาพทั้งหน้าที่เลื่อนได้แทนที่จะจับเฉพาะ viewport ค่าเริ่มต้น `false` |
| `delay_ms` | integer | ไม่ | จำนวนมิลลิวินาทีที่รอหลังจากโหลดหน้าก่อนจับภาพ มีประโยชน์สำหรับเนื้อหาแบบเคลื่อนไหว ค่าเริ่มต้น `500` |
| `label` | string | ไม่ | ป้ายกำกับที่อ่านเข้าใจได้ซึ่งจัดเก็บพร้อมไฟล์แนบใน Media Library |

**ส่งคืน**

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

รับภาพหน้าจอสองภาพและส่งคืนคะแนนความแตกต่างทางภาพพร้อมรูปภาพแสดงความแตกต่างที่เน้นบริเวณที่เปลี่ยนแปลง มีประโยชน์สำหรับยืนยันว่าการเปลี่ยนแปลงการออกแบบให้ผลลัพธ์ตามที่คาดไว้ หรือสำหรับตรวจจับ regression ที่ไม่ตั้งใจ

**พารามิเตอร์**

| พารามิเตอร์ | ประเภท | จำเป็น | คำอธิบาย |
|---|---|---|---|
| `before_url` | string | ใช่ | URL ของหน้าที่จะจับภาพเป็นสถานะ "ก่อน" |
| `after_url` | string | ใช่ | URL ของหน้าที่จะจับภาพเป็นสถานะ "หลัง" อาจเป็น URL เดียวกันได้หากเปรียบเทียบข้ามเวลา |
| `width` | integer | ไม่ | ความกว้างของ viewport สำหรับการจับภาพทั้งสอง ค่าเริ่มต้น `1280` |
| `threshold` | float | ไม่ | เกณฑ์ความแตกต่างของพิกเซล (0.0–1.0) พิกเซลที่อยู่ภายในค่าความคลาดเคลื่อนนี้ถือว่าไม่เปลี่ยนแปลง ค่าเริ่มต้น `0.1` |

**ส่งคืน**

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

ค่า `diff_score` เท่ากับ `0.0` หมายถึงไม่มีการเปลี่ยนแปลงที่มองเห็นได้; `1.0` หมายถึงทุกพิกเซลเปลี่ยนแปลง

---

### `review_page_design` {#reviewpagedesign}

จับภาพหน้าจอของหน้าและส่งไปยังโมเดลภาษาเพื่อวิเคราะห์ด้วยภาพ ส่งคืนการประเมินแบบมีโครงสร้างที่ครอบคลุมเลย์เอาต์ ตัวอักษร การใช้สี และข้อกังวลด้านการเข้าถึง

**พารามิเตอร์**

| พารามิเตอร์ | ประเภท | จำเป็น | คำอธิบาย |
|---|---|---|---|
| `url` | string | ใช่ | URL แบบเต็มของหน้าที่จะตรวจสอบ |
| `focus` | string | ไม่ | รายการพื้นที่ตรวจสอบที่คั่นด้วยจุลภาคซึ่งต้องการเน้น: `layout`, `typography`, `colour`, `accessibility`, `mobile` ค่าเริ่มต้น: ทุกพื้นที่ |
| `width` | integer | ไม่ | ความกว้างของ viewport ค่าเริ่มต้น `1280` |

**ส่งคืน**

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

## ความสามารถที่ติดตั้งได้ {#installable-abilities}

รีจิสทรีความสามารถที่ติดตั้งได้ช่วยให้คุณขยาย agent ด้วยชุดความสามารถเพิ่มเติมที่แจกจ่ายเป็น WordPress plugins แต่ละชุดจะลงทะเบียนความสามารถหนึ่งอย่างหรือมากกว่าโดยใช้ API ความสามารถมาตรฐาน

### `list_available_abilities` {#listavailableabilities}

ส่งคืนแค็ตตาล็อกของชุดความสามารถที่พร้อมติดตั้งจากรีจิสทรี

**พารามิเตอร์**

| พารามิเตอร์ | ประเภท | จำเป็น | คำอธิบาย |
|---|---|---|---|
| `category` | string | ไม่ | กรองตามหมวดหมู่: `ecommerce`, `seo`, `media`, `social`, `developer` |

**ส่งคืน**

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

ดาวน์โหลดและเปิดใช้งานชุดความสามารถจากรีจิสทรี

**พารามิเตอร์**

| พารามิเตอร์ | ประเภท | จำเป็น | คำอธิบาย |
|---|---|---|---|
| `slug` | string | ใช่ | slug ของ plugin ชุดความสามารถ |

**ส่งคืน** `{ "success": true, "slug": "gratis-ai-agent-woocommerce", "abilities_added": 3 }`

---

### `recommend_plugin` {#recommendplugin}

สอบถามรีจิสทรีความสามารถเพื่อค้นหา plugin ที่ดีที่สุดสำหรับกรณีการใช้งานที่อธิบายไว้ และติดตั้งหากต้องการ

**พารามิเตอร์**

| พารามิเตอร์ | ประเภท | จำเป็น | คำอธิบาย |
|---|---|---|---|
| `description` | string | ใช่ | คำอธิบายภาษาธรรมชาติของฟังก์ชันที่ต้องการ |
| `install` | boolean | ไม่ | หากเป็น `true` จะติดตั้ง plugin ที่แนะนำทันที ค่าเริ่มต้นคือ `false` |

**ตัวอย่าง**

```json
{
  "description": "I need a contact form with file upload support and spam protection",
  "install": false
}
```

**ส่งคืน**

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
