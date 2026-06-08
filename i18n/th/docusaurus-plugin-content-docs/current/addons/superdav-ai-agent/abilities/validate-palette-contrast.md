---
title: ตรวจสอบความเปรียบต่างของสี
sidebar_position: 2
_i18n_hash: b1be22868f9257a232b89cc2a2c2768d
---
# ตรวจสอบความเปรียบต่างของสีในพาเลท (Validate Palette Contrast)

ความสามารถ **Validate Palette Contrast** จะช่วยตรวจสอบคู่สีในพาเลทดีไซน์ของคุณว่าสอดคล้องกับมาตรฐาน WCAG (Web Content Accessibility Guidelines) ก่อนนำไปใช้กับธีมของคุณ

## ภาพรวม (Overview)

ฟีเจอร์นี้ช่วยให้มั่นใจว่าชุดสีของเว็บไซต์คุณเป็นไปตามมาตรฐานการเข้าถึง (accessibility) โดยการตรวจสอบอัตราส่วนความเปรียบต่าง (contrast ratios) ระหว่างสีข้อความและสีพื้นหลัง ซึ่งช่วยป้องกันการใช้คู่สีที่อาจทำให้ผู้ที่มีความบกพร่องทางการมองเห็นอ่านได้ยาก

## รูปแบบข้อมูลนำเข้า (Input Format)

ความสามารถนี้รับพาเลทสีเป็นข้อมูลนำเข้า:

```json
{
  "colors": [
    {
      "name": "primary",
      "hex": "#678233"
    },
    {
      "name": "text",
      "hex": "#ffffff"
    },
    {
      "name": "background",
      "hex": "#f5f5f5"
    }
  ],
  "wcag_level": "AA"
}
```

### พารามิเตอร์ (Parameters)

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `colors` | array | Yes | อาร์เรย์ของอ็อบเจกต์สีที่มีคุณสมบัติ `name` และ `hex` |
| `wcag_level` | string | No | ระดับการปฏิบัติตาม WCAG: "A", "AA" (ค่าเริ่มต้น), หรือ "AAA" |
| `pairs_to_check` | array | No | คู่สีเฉพาะที่ต้องการตรวจสอบ (เช่น `["primary-text", "background-text"]`) |

## ระดับ WCAG ที่ตรวจสอบ (WCAG Levels Checked)

ความสามารถนี้จะตรวจสอบอัตราส่วนความเปรียบต่างตามมาตรฐาน WCAG:

| Level | Normal Text | Large Text | Minimum Ratio |
|-------|-------------|------------|---------------|
| **A** | 3:1 | 3:1 | 3:1 |
| **AA** | 4.5:1 | 3:1 | 4.5:1 |
| **AAA** | 7:1 | 4.5:1 | 7:1 |

- **Normal Text** — ข้อความที่มีขนาดเล็กกว่า 18pt (หรือ 14pt ตัวหนา)
- **Large Text** — ข้อความที่มีขนาด 18pt ขึ้นไป (หรือ 14pt ตัวหนาขึ้นไป)

## รูปแบบข้อมูลขาออก (Output Schema)

ความสามารถนี้จะส่งรายงานการตรวจสอบโดยละเอียดกลับมา:

```json
{
  "compliant": true,
  "wcag_level": "AA",
  "pairs": [
    {
      "pair": "primary-text",
      "color1": "#678233",
      "color2": "#ffffff",
      "contrast_ratio": 5.2,
      "wcag_a": true,
      "wcag_aa": true,
      "wcag_aaa": false,
      "status": "pass"
    },
    {
      "pair": "background-text",
      "color1": "#f5f5f5",
      "color2": "#333333",
      "contrast_ratio": 12.1,
      "wcag_a": true,
      "wcag_aa": true,
      "wcag_aaa": true,
      "status": "pass"
    }
  ],
  "summary": {
    "total_pairs": 2,
    "passing": 2,
    "failing": 0,
    "recommendations": []
  }
}
```

### ฟิลด์ข้อมูลขาออก (Output Fields)

| Field | Type | Description |
|-------|------|-------------|
| `compliant` | boolean | ระบุว่าพาเลททั้งหมดเป็นไปตามระดับ WCAG ที่กำหนดหรือไม่ |
| `wcag_level` | string | ระดับ WCAG ที่ทำการตรวจสอบ |
| `pairs` | array | ผลลัพธ์โดยละเอียดสำหรับคู่สีแต่ละคู่ |
| `contrast_ratio` | number | อัตราส่วนความเปรียบต่างที่คำนวณได้ (1:1 ถึง 21:1) |
| `status` | string | "pass" หรือ "fail" สำหรับแต่ละคู่ |
| `recommendations` | array | ข้อเสนอแนะสำหรับการปรับปรุงคู่สีที่ล้มเหลว |

## ตัวอย่างการใช้งาน (Usage Example)

**Prompt:**
```
Check if my color palette meets WCAG AA standards. I have primary color #678233, text color #ffffff, and background #f5f5f5.
```

**Result:**
ความสามารถนี้จะตรวจสอบการผสมสีทั้งหมดและส่งผลลัพธ์กลับมาดังนี้:
- ✅ Primary + Text: อัตราส่วน 5.2:1 (ผ่าน WCAG AA)
- ✅ Background + Text: อัตราส่วน 12.1:1 (ผ่าน WCAG AAA)
- โดยรวม: เป็นไปตาม WCAG AA

## การผสานรวมกับ Theme Builder (Integration with Theme Builder)

เมื่อใช้การเลือกทิศทางดีไซน์ (design-direction selection) ของ Theme Builder ความสามารถ Validate Palette Contrast จะ:

1. วิเคราะห์พาเลทสีที่คุณเลือก
2. ตรวจสอบการผสมสีข้อความกับพื้นหลังทั้งหมด
3. ตรวจสอบเทียบกับระดับ WCAG ที่คุณเลือก
4. ให้คำแนะนำสำหรับคู่สีที่ไม่เป็นไปตามข้อกำหนด
5. ป้องกันการใช้ชุดสีที่ไม่สามารถเข้าถึงได้

## แนวทางปฏิบัติที่ดีที่สุด (Best Practices)

- **เริ่มต้นที่ระดับ AA** — WCAG AA เป็นมาตรฐานสำหรับเว็บไซต์ส่วนใหญ่
- **ทดสอบก่อนนำไปใช้** — ควรตรวจสอบพาเลทของคุณก่อนที่จะยืนยันการออกแบบ
- **ตรวจสอบทุกการผสมสี** — ตรวจสอบให้แน่ใจว่าข้อความ ลิงก์ และองค์ประกอบ UI ทั้งหมดเป็นไปตามมาตรฐาน
- **พิจารณาความชอบของผู้ใช้** — ผู้ใช้บางรายอาจมีความไวต่อสีเพิ่มเติม
- **ใช้เครื่องมือตรวจสอบความเปรียบต่าง** — ใช้ความสามารถนี้ร่วมกับเครื่องมือของเบราว์เซอร์เพื่อยืนยันผล

## คู่สีที่ล้มเหลวและข้อเสนอแนะ (Failing Pairs and Recommendations)

หากคู่สีใดล้มเหลวในการตรวจสอบ ความสามารถนี้จะให้ข้อเสนอแนะ:

```json
{
  "pair": "primary-text",
  "status": "fail",
  "contrast_ratio": 2.8,
  "wcag_aa": false,
  "recommendations": [
    "ทำให้สีข้อความสว่างขึ้นเป็น #ffffff (อัตราส่วนจะเป็น 5.2:1)",
    "ทำให้สีพื้นหลังเข้มขึ้นเป็น #556b2f (อัตราส่วนจะเป็น 4.8:1)",
    "ใช้สีหลักอื่น เช่น #4a6b1f (อัตราส่วนจะเป็น 6.1:1)"
  ]
}
```

## ความสามารถที่เกี่ยวข้อง (Related Abilities)

- [Generate Logo SVG](./generate-logo-svg.md) — สร้างโลโก้ด้วยพาเลทสีที่คุณตรวจสอบแล้ว
- [Create Menu](./create-menu.md) — สร้างเมนูนำทางด้วยสีที่เข้าถึงได้
