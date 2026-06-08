---
title: การตั้งค่า Agent AI ฟรี
sidebar_position: 22
_i18n_hash: 7b593387e5e7b44903bfd6f0a1ff42ee
---
# การตั้งค่า Gratis AI Agent

หน้า **Settings → Advanced** ใน Gratis AI Agent มีการตั้งค่าระดับผู้ดูแลระบบสำหรับการเชื่อมต่อส่วนหลังบ้าน (backend integrations) ที่เพิ่มเข้ามาในเวอร์ชัน v1.5.0 หน้านี้จะอธิบายเกี่ยวกับฟิลด์ของ **Feedback Endpoint** และรูปแบบข้อมูลที่คาดหวัง

## การเข้าถึงการตั้งค่า

1. ในหน้าแอดมินของ WordPress ให้ไปที่ **Gratis AI Agent → Settings**
2. คลิกที่แท็บ **Advanced**

## การตั้งค่า Feedback Endpoint

Feedback endpoint จะรับคำขอแบบ POST จาก AI agent ทุกครั้งที่ผู้ใช้ส่งข้อเสนอแนะผ่านปุ่มยกนิ้วลง (thumbs-down button), แบนเนอร์ auto-prompt, หรือคำสั่ง `/report-issue`

| Field | Description |
|---|---|
| **Feedback Endpoint URL** | URL ที่จะรับข้อเสนอแนะในรูปแบบคำขอ HTTP POST พร้อมข้อมูลในรูปแบบ JSON |
| **Feedback API Key** | Bearer token ที่จะถูกส่งในส่วน `Authorization` header ของทุกคำขอ feedback หาก endpoint ของคุณไม่จำเป็นต้องมีการยืนยันตัวตน ให้เว้นว่างไว้ |

### JSON Payload ที่คาดหวัง

Feedback endpoint ของคุณจะต้องรับข้อมูลในรูปแบบ JSON body ที่มีฟิลด์อย่างน้อยดังต่อไปนี้:

```json
{
  "message_id": "msg_abc123",
  "conversation_id": "conv_xyz789",
  "feedback_text": "คำตอบเกี่ยวกับราคาไม่ถูกต้อง",
  "triage_category": "factual_error"
}
```

อาจมีฟิลด์เพิ่มเติมใน payload ขึ้นอยู่กับบริบทของการสนทนา

### ค่าของ `triage_category`

ชั้นการคัดกรอง (triage layer) ของ AI จะกำหนดค่าใดค่าหนึ่งต่อไปนี้ให้กับ `triage_category` ก่อนที่จะส่งต่อ payload:

| Value | Meaning |
|---|---|
| `factual_error` | ผู้ช่วยให้ข้อมูลข้อเท็จจริงที่ไม่ถูกต้อง |
| `unhelpful_answer` | คำตอบนั้นถูกต้องตามหลักเทคนิค แต่ไม่มีประโยชน์ |
| `inappropriate_content` | คำตอบมีเนื้อหาที่ไม่ควรแสดงให้ผู้ใช้เห็น |
| `other` | ข้อเสนอแนะไม่ตรงกับหมวดหมู่ที่ทราบ |

### การยืนยันตัวตน (Authentication)

หาก endpoint ของคุณต้องการการยืนยันตัวตน ให้ตั้งค่าฟิลด์ **Feedback API Key** เป็น bearer token ของคุณ โดย agent จะส่ง:

```
Authorization: Bearer <your-api-key>
```

หากฟิลด์ **Feedback API Key** ว่างเปล่า จะไม่มีการส่ง `Authorization` header ใด ๆ

### การปิดการเก็บ Feedback

ให้เว้นว่างทั้งฟิลด์ **Feedback Endpoint URL** และ **Feedback API Key** ปุ่มยกนิ้วลงและส่วนติดต่อผู้ใช้ (UI) สำหรับ feedback จะยังคงแสดงให้ผู้ใช้เห็น แต่จะไม่ส่งข้อมูลไปยังบริการภายนอกใด ๆ

## Brave Search API Key

ในแท็บ **Advanced** ยังมีฟิลด์ **Brave Search API Key** ซึ่งช่วยเปิดใช้งานความสามารถในการค้นหาอินเทอร์เน็ต [Internet Search](../configuration/internet-search)

| Field | Description |
|---|---|
| **Brave Search API Key** | API key ของคุณจาก Brave Search developer dashboard จำเป็นต้องใช้เพื่อเปิดใช้งานการค้นหาอินเทอร์เน็ตใน AI assistant |

ป้ายกำกับฟิลด์นี้มีลิงก์ที่คลิกได้ไปยังหน้าลงทะเบียน Brave Search API เว้นว่างไว้เพื่อปิดใช้งานการค้นหาอินเทอร์เน็ต

ดู [Internet Search](../configuration/internet-search) สำหรับเอกสารสำหรับผู้ใช้ปลายทางเกี่ยวกับฟีเจอร์นี้

## Feature Flags

นอกจากนี้ ในเวอร์ชัน v1.9.0 ยังมีการเพิ่มแท็บ **Settings → Feature Flags** ซึ่งมีสวิตช์เปิด/ปิดสำหรับฟังก์ชันเสริม แต่ละ Flag จะถูกเปิดหรือปิดทั่วทั้งเครือข่าย ไม่มีตัวเลือกให้ยกเว้นสำหรับแต่ละไซต์ในขณะนี้

### การเข้าถึง Feature Flags

1. ในหน้าแอดมินของ WordPress ให้ไปที่ **Gratis AI Agent → Settings**
2. คลิกที่แท็บ **Feature Flags**

### Access Control Flags

| Flag | Default | Description |
|---|---|---|
| **Restrict to Administrators** | Off | เมื่อเปิดใช้งาน จะอนุญาตให้ผู้ใช้ที่มีบทบาท `administrator` เท่านั้นที่สามารถเปิดแผงแชท AI Agent ได้ บทบาทอื่น ๆ จะเห็นข้อความว่า "โปรดติดต่อผู้ดูแลระบบของคุณ" |
| **Restrict to Network Admins** | Off | เมื่อเปิดใช้งานในเครือข่ายแบบ multisite จะอนุญาตให้ Super Admins เท่านั้นที่ใช้ agent ได้ ผู้ดูแลไซต์รายบุคคลจะถูกบล็อก มีลำดับความสำคัญเหนือกว่า "Restrict to Administrators" หากเปิดใช้งานทั้งสองอย่าง |
| **Allow Subscriber Access** | Off | เมื่อเปิดใช้งาน ผู้ใช้ที่มีบทบาท `subscriber` สามารถใช้หน้าต่างแชทได้ แต่ถูกจำกัดให้ทำได้เพียงการอ่านเท่านั้น (ไม่สามารถสร้างโพสต์หรือเปลี่ยนการตั้งค่าได้) |
| **Disable for Non-Members** | Off | เชื่อมต่อกับสถานะสมาชิกของ Ultimate Multisite เมื่อเปิดใช้งาน แชทจะถูกซ่อนสำหรับไซต์ที่ไม่มีสมาชิกที่ใช้งานอยู่ |

### Branding Flags

| Flag | Default | Description |
|---|---|---|
| **Hide "Powered by Gratis AI Agent" Footer** | Off | ลบข้อความระบุแบรนด์ที่แสดงที่ด้านล่างของวิดเจ็ตแชท แนะนำสำหรับการใช้งานแบบติดแบรนด์ของตัวเอง (white-label deployments) |
| **Custom Agent Name** | *(blank)* | แทนที่ป้ายกำกับ "Gratis AI Agent" เริ่มต้นในส่วนหัวแชทและเมนูแอดมินด้วยชื่อผลิตภัณฑ์ของคุณเอง เว้นว่างไว้เพื่อใช้ค่าเริ่มต้น |
| **Hide Agent Picker** | Off | เมื่อเปิดใช้งาน ผู้ใช้จะไม่สามารถสลับระหว่าง agent ที่ติดตั้งมาให้ทั้งห้าตัวได้ agent ปัจจุบันจะถูกกำหนดให้เป็นค่าเริ่มต้นตามที่ตั้งค่าไว้ใน Settings → General |
| **Use Site Icon as Chat Avatar** | Off | แทนที่ไอคอน AI เริ่มต้นในส่วนหัวของวิดเจ็ตแชทด้วยไอคอนของเว็บไซต์ WordPress (ตั้งค่าภายใต้ Appearance → Customize → Site Identity) |

### การใช้การเปลี่ยนแปลง

คลิก **Save Settings** หลังจากสลับ Flag ใด ๆ การเปลี่ยนแปลงจะมีผลทันที ไม่จำเป็นต้องล้างแคชหรือเปิดใช้งาน plugin ใหม่
