---
title: ปรับปรุงการเชื่อมต่อแผงควบคุม
sidebar_position: 2
_i18n_hash: 2b4047e6b7b32a1c96a0b562e251cbfb
---
# การผสานระบบ Enhance Control Panel

## ภาพรวม
Enhance เป็นแผงควบคุมสมัยใหม่ที่มีความสามารถในการจัดการและทำให้ระบบโฮสติ้งทำงานอัตโนมัติอย่างมีประสิทธิภาพ การผสานระบบนี้ช่วยให้สามารถซิงค์โดเมนและจัดการ SSL certificate โดยอัตโนมัติระหว่าง Ultimate Multisite และ Enhance Control Panel

**การสนทนาที่เกี่ยวข้อง:** ดู [GitHub Discussion #265](https://github.com/Multisite-Ultimate/ultimate-multisite/discussions/265) สำหรับเคล็ดลับจากชุมชนและข้อมูลเพิ่มเติม

## ฟีเจอร์
- ซิงค์โดเมนอัตโนมัติเมื่อมีการแมปโดเมนใน Ultimate Multisite
- ออก SSL certificate อัตโนมัติผ่าน LetsEncrypt เมื่อ DNS ชี้มาถูกต้อง
- รองรับ subdomain สำหรับเครือข่ายที่ทำงานในโหมด subdomain
- ลบโดเมนเมื่อมีการลบการแมป
- ทดสอบการเชื่อมต่อเพื่อตรวจสอบข้อมูลรับรอง API

## ข้อกำหนด

### ข้อกำหนดของระบบ
- ติดตั้ง Enhance Control Panel และสามารถเข้าถึงได้
- ติดตั้ง WordPress Multisite บนเซิร์ฟเวอร์ Enhance หรือเชื่อมต่อกับเซิร์ฟเวอร์ Enhance
- เว็บเซิร์ฟเวอร์ Apache (ปัจจุบัน Enhance รองรับการตั้งค่า Apache; LiteSpeed Enterprise มีให้ใช้งานในราคาประหยัด)

### การเข้าถึง API
คุณต้องมีสิทธิ์ผู้ดูแลระบบใน Enhance Control Panel เพื่อสร้าง API token

## การขอข้อมูลรับรอง API

### 1. สร้าง API Token

1. เข้าสู่ระบบ Enhance Control Panel ในฐานะผู้ดูแลระบบ
2. คลิกที่ **Settings** ในเมนูนำทาง
3. ไปที่ **Access Tokens**
4. คลิก **Create Token**
5. ตั้งชื่อ token ที่สื่อความหมาย (เช่น "Ultimate Multisite Integration")
6. กำหนดบทบาท **System Administrator**
7. สำหรับวันหมดอายุ:
   - เว้นว่างไว้หากต้องการให้ token ไม่มีวันหมดอายุ
   - หรือกำหนดวันหมดอายุเฉพาะเพื่อความปลอดภัย
8. คลิก **Create**

หลังจากสร้างแล้ว **Access Token** และ **Organization ID** จะแสดงขึ้นมา **บันทึกไว้ทันที** เพราะ token จะแสดงเพียงครั้งเดียวเท่านั้น

### 2. รับ Organization ID

Organization ID จะแสดงอยู่ในหน้า Access Tokens ในกล่องข้อมูลสีน้ำเงินที่มีข้อความว่า "Org ID: {your_id}"

Organization ID เป็นรูปแบบ UUID เช่น: `d8554b6d-5d0d-6719-009b-fec1189aa8f3`

คุณยังสามารถค้นหา Organization ID ของลูกค้าได้โดย:
1. ไปที่หน้า **Customers**
2. คลิก **Manage customer** สำหรับลูกค้าที่ต้องการ
3. ดูที่ URL - Organization ID คืออักขระตัวอักษรและตัวเลขหลัง `/customers/`

### 3. รับ Server ID

วิธีค้นหา Server ID (จำเป็นสำหรับการดำเนินการกับโดเมน):

1. ใน Enhance Control Panel ไปที่ **Servers**
2. คลิกที่เซิร์ฟเวอร์ที่ติดตั้ง WordPress ของคุณ
3. Server ID (รูปแบบ UUID) จะปรากฏใน URL หรือรายละเอียดเซิร์ฟเวอร์
4. หรือคุณสามารถใช้ API เพื่อแสดงรายการเซิร์ฟเวอร์:

```bash
curl -s -X GET https://your-enhance-panel.com/api/servers \
  -H "Accept: application/json" \
  -H "Authorization: Bearer YOUR_TOKEN" | jq
```

Server ID เป็นรูปแบบ UUID: `00000000-0000-0000-0000-000000000000`

### 4. รับ API URL

API URL ของคุณคือ URL ของ Enhance Control Panel พร้อมต่อท้ายด้วย `/api/`:

```
https://your-enhance-panel.com/api/
```

**สำคัญ:** ต้องมี path `/api/` ข้อผิดพลาดที่พบบ่อยได้แก่:
- ใช้เฉพาะโดเมนโดยไม่มี `/api/`
- ใช้ HTTP แทน HTTPS (จำเป็นต้องใช้ HTTPS เพื่อความปลอดภัย)

## การตั้งค่า

### ค่าคงที่ที่จำเป็น

เพิ่มค่าคงที่ต่อไปนี้ในไฟล์ `wp-config.php`:

```php
// Enhance Control Panel Integration
define('WU_ENHANCE_API_TOKEN', 'your-bearer-token-here');
define('WU_ENHANCE_API_URL', 'https://your-enhance-panel.com/api/');
define('WU_ENHANCE_SERVER_ID', 'your-server-uuid-here');
```

### ตั้งค่าผ่านตัวช่วยสร้างการผสานระบบ

1. ในหน้าผู้ดูแล WordPress ไปที่ **Ultimate Multisite** > **Settings**
2. ไปที่แท็บ **Integrations**
3. ค้นหา **Enhance Control Panel Integration** และคลิก **Configuration**
4. ตัวช่วยสร้างจะแนะนำคุณผ่านขั้นตอนการตั้งค่า:
   - **ขั้นตอนที่ 1:** แนะนำและภาพรวมฟีเจอร์
   - **ขั้นตอนที่ 2:** ป้อนข้อมูลรับรอง API (Token, API URL, Server ID)
   - **ขั้นตอนที่ 3:** ทดสอบการเชื่อมต่อ
   - **ขั้นตอนที่ 4:** ตรวจสอบและเปิดใช้งาน

คุณสามารถเลือก:
- ให้ตัวช่วยสร้างเพิ่มค่าคงที่ลงในไฟล์ `wp-config.php` โดยอัตโนมัติ
- คัดลอกนิยามค่าคงที่และเพิ่มเอง

## การตั้งค่า WordPress เพิ่มเติม

จากความคิดเห็นของชุมชน ([Discussion #265](https://github.com/Multisite-Ultimate/ultimate-multisite/discussions/265)) คุณอาจต้องกำหนดค่าเพิ่มเติมเหล่านี้:

### การตั้งค่า .htaccess

หากคุณพบปัญหากับการแมปโดเมน:
1. ลบไฟล์ `.htaccess` เดิมของ Enhance
2. แทนที่ด้วยไฟล์ `.htaccess` มาตรฐานของ WordPress Multisite

### ค่าคงที่ Cookie

เพิ่มค่าคงที่เหล่านี้ใน `wp-config.php` เพื่อให้แน่ใจว่าการจัดการ cookie ทำงานถูกต้องข้ามโดเมนที่แมป:

```php
define('COOKIE_DOMAIN', $_SERVER['HTTP_HOST']);
define('COOKIEPATH', '/');
define('ADMIN_COOKIE_PATH', '/');
```

## วิธีการทำงาน

### เมื่อมีการแมปโดเมน

1. ผู้ใช้แมปโดเมนที่กำหนดเองใน Ultimate Multisite (หรือสร้างไซต์ใหม่ในโหมด subdomain)
2. ระบบผสานส่ง POST request ไปยัง API ของ Enhance: `/servers/{server_id}/domains`
3. Enhance เพิ่มโดเมนในการตั้งค่าเซิร์ฟเวอร์ของคุณ
4. เมื่อ DNS ชี้มาที่เซิร์ฟเวอร์ของคุณ Enhance จะออก SSL certificate ผ่าน LetsEncrypt โดยอัตโนมัติ
5. โดเมนพร้อมใช้งานด้วย HTTPS

### เมื่อมีการลบโดเมน

1. การแมปโดเมนถูกลบใน Ultimate Multisite
2. ระบบผสานสอบถาม Enhance เพื่อค้นหา ID ของโดเมน
3. ส่ง DELETE request ไปที่: `/servers/{server_id}/domains/{domain_id}`
4. Enhance ลบโดเมนออกจากการตั้งค่าเซิร์ฟเวอร์ของคุณ

### การตรวจสอบ DNS และ SSL

Ultimate Multisite มีการตรวจสอบ DNS และ SSL ในตัว:
- คุณสามารถกำหนดช่วงเวลาตรวจสอบใน **Domain Mapping Settings** (ค่าเริ่มต้น: 300 วินาที/5 นาที)
- ระบบจะตรวจสอบการแพร่กระจาย DNS ก่อนทำเครื่องหมายโดเมนว่าใช้งานได้
- ความถูกต้องของ SSL certificate ถูกตรวจสอบโดยอัตโนมัติ
- Enhance จัดการการออก SSL โดยอัตโนมัติ ดังนั้นไม่จำเป็นต้องตั้งค่า SSL ด้วยตนเอง

## การตรวจสอบการตั้งค่า

### ทดสอบการเชื่อมต่อ

1. ในตัวช่วยสร้างการผสานระบบ ใช้ขั้นตอน **Test Connection**
2. ปลั๊กอินจะพยายามแสดงรายการโดเมนบนเซิร์ฟเวอร์ของคุณ
3. ข้อความสำเร็จยืนยันว่า:
   - ข้อมูลรับรอง API ถูกต้อง
   - API URL สามารถเข้าถึงได้
   - Server ID ถูกต้อง
   - สิทธิ์ถูกตั้งค่าอย่างถูกต้อง

### หลังจากแมปโดเมน

1. แมปโดเมนทดสอบใน Ultimate Multisite
2. ตรวจสอบ log ของ Ultimate Multisite (**Ultimate Multisite** > **Logs** > **integration-enhance**)
3. ตรวจสอบใน Enhance Control Panel ว่าโดเมนถูกเพิ่มแล้ว:
   - ไปที่ **Servers** > **Your Server** > **Domains**
   - โดเมนใหม่ควรปรากฏในรายการ
4. เมื่อ DNS แพร่กระจายแล้ว ตรวจสอบว่า SSL ถูกออกโดยอัตโนมัติ

## การแก้ไขปัญหา

### ปัญหาการเชื่อมต่อ API

**ข้อผิดพลาด: "Failed to connect to Enhance API"**
- ตรวจสอบว่า `WU_ENHANCE_API_URL` มี `/api/` ต่อท้าย
- ตรวจสอบว่าคุณใช้ HTTPS ไม่ใช่ HTTP
- ตรวจสอบว่าแผง Enhance สามารถเข้าถึงได้จากเซิร์ฟเวอร์ WordPress ของคุณ
- ตรวจสอบว่าไม่มีกฎ firewall ที่บล็อกการเชื่อมต่อ

**ข้อผิดพลาด: "Enhance API Token not found"**
- ตรวจสอบว่า `WU_ENHANCE_API_TOKEN` ถูกกำหนดใน `wp-config.php`
- ตรวจสอบว่า token ไม่ได้ถูกลบหรือหมดอายุใน Enhance
- ตรวจสอบว่าไม่มีการพิมพ์ผิดในค่า token

**ข้อผิดพลาด: "Server ID is not configured"**
- ตรวจสอบว่า `WU_ENHANCE_SERVER_ID` ถูกกำหนดใน `wp-config.php`
- ตรวจสอบว่า Server ID อยู่ในรูปแบบ UUID ที่ถูกต้อง
- ยืนยันว่าเซิร์ฟเวอร์มีอยู่ในแผง Enhance ของคุณ

### โดเมนไม่ถูกเพิ่ม

**ตรวจสอบ log:**
1. ไปที่ **Ultimate Multisite** > **Logs**
2. กรองโดย **integration-enhance**
3. ค้นหาข้อความแสดงข้อผิดพลาดที่ระบุปัญหา

**สาเหตุทั่วไป:**
- รูปแบบชื่อโดเมนไม่ถูกต้อง
- โดเมนมีอยู่แล้วใน Enhance
- สิทธิ์ API ไม่เพียงพอ (ตรวจสอบว่า token มีบทบาท System Administrator)
- Server ID ไม่ตรงกับเซิร์ฟเวอร์จริงใน Enhance

### ปัญหา SSL Certificate

**SSL ไม่ออก:**
- ตรวจสอบว่า DNS ชี้ไปที่ IP address ของเซิร์ฟเวอร์ของคุณ
- ตรวจสอบว่าโดเมนชี้ถูกต้อง: `nslookup yourdomain.com`
- Enhance ต้องการให้ DNS ชี้ถูกต้องก่อนจึงจะออก SSL ได้
- การออก SSL โดยทั่วไปใช้เวลา 5-10 นาทีหลังจาก DNS แพร่กระจาย
- ตรวจสอบ log ของ Enhance Control Panel สำหรับข้อผิดพลาดเกี่ยวกับ SSL

**การแก้ไขปัญหา SSL ด้วยตนเองใน Enhance:**
1. ไปที่ **Servers** > **Your Server** > **Domains**
2. ค้นหาโดเมนของคุณและตรวจสอบสถานะ SSL
3. คุณสามารถทริกเกอร์การออก SSL ด้วยตนเองหากจำเป็น

### ช่วงเวลาตรวจสอบ DNS

หากโดเมนหรือ SSL certificate ใช้เวลานานเกินไปในการเปิดใช้งาน:
1. ไปที่ **Ultimate Multisite** > **Settings** > **Domain Mapping**
2. ค้นหาการตั้งค่า **DNS Check Interval**
3. ปรับจากค่าเริ่มต้น 300 วินาทีเป็นค่าที่ต่ำกว่า (ต่ำสุด: 10 วินาที)
4. **หมายเหตุ:** ช่วงเวลาที่ต่ำกว่าหมายถึงการตรวจสอบบ่อยขึ้นแต่เซิร์ฟเวอร์ทำงานหนักขึ้น

### ข้อผิดพลาดการยืนยันตัวตน

**ข้อผิดพลาด HTTP 401/403:**
- สร้าง API token ใหม่ใน Enhance
- ตรวจสอบว่า token มีบทบาท **System Administrator**
- ตรวจสอบว่า token ไม่หมดอายุ
- ตรวจสอบว่าคุณใช้ Organization ID ที่ถูกต้อง (แม้ว่าโดยทั่วไปจะไม่จำเป็นต้องใส่ใน URL)

### การวิเคราะห์ Log

เปิดใช้งาน log แบบละเอียด:
```php
// เพิ่มใน wp-config.php เพื่อการดีบักที่ละเอียดขึ้น
define('WP_DEBUG', true);
define('WP_DEBUG_LOG', true);
```

จากนั้นตรวจสอบ log ที่:
- Log ของ Ultimate Multisite: **Ultimate Multisite** > **Logs**
- Debug log ของ WordPress: `wp-content/debug.log`
- Log ของแผง Enhance: มีให้ในอินเทอร์เฟซผู้ดูแลของ Enhance

## เอกสารอ้างอิง API

### การยืนยันตัวตน
คำขอ API ทั้งหมดใช้การยืนยันตัวตนแบบ Bearer token:
```
Authorization: Bearer YOUR_TOKEN_HERE
```

### Endpoint ที่ใช้บ่อย

**รายการเซิร์ฟเวอร์:**
```
GET /servers
```

**รายการโดเมนบนเซิร์ฟเวอร์:**
```
GET /servers/{server_id}/domains
```

**เพิ่มโดเมน:**
```
POST /servers/{server_id}/domains
Body: {"domain": "example.com"}
```

**ลบโดเมน:**
```
DELETE /servers/{server_id}/domains/{domain_id}
```

### เอกสาร API ฉบับเต็ม
เอกสาร API ฉบับสมบูรณ์: [https://apidocs.enhance.com](https://apidocs.enhance.com)

## แนวทางปฏิบัติที่ดีที่สุด

### ความปลอดภัย
- **อย่า commit API token ลงใน version control**
- เก็บ token ใน `wp-config.php` ซึ่งควรถูกแยกออกจาก Git
- ใช้ token ที่มีสิทธิ์ที่เหมาะสม (System Administrator สำหรับการผสานระบบเต็มรูปแบบ)
- ตั้งวันหมดอายุ token สำหรับสภาพแวดล้อม production
- เปลี่ยน token เป็นระยะ

### ประสิทธิภาพ
- ใช้ช่วงเวลาตรวจสอบ DNS เริ่มต้น (300 วินาที) เพื่อหลีกเลี่ยงการเรียก API มากเกินไป
- ติดตามทรัพยากรเซิร์ฟเวอร์ Enhance เมื่อทำการดำเนินการโดเมนขนาดใหญ่
- พิจารณาการเพิ่มโดเมนแบบเว้นระยะหากแมปหลายโดเมนพร้อมกัน

### การติดตาม
- ตรวจสอบ log ของ Ultimate Multisite สำหรับข้อผิดพลาดการผสานระบบเป็นประจำ
- ตั้งค่าการติดตามสำหรับการเพิ่มโดเมนที่ล้มเหลว
- ตรวจสอบว่า SSL certificate ถูกออกอย่างถูกต้อง
- ดูแลความจุเซิร์ฟเวอร์ Enhance และขีดจำกัดโดเมน

## แหล่งข้อมูลเพิ่มเติม

- **เอกสารทางการของ Enhance:** [https://enhance.com/docs](https://enhance.com/docs)
- **เอกสาร API ของ Enhance:** [https://apidocs.enhance.com](https://apidocs.enhance.com)
- **ฟอรัมชุมชน Enhance:** [https://community.enhance.com](https://community.enhance.com)
- **GitHub Discussion:** [Issue #265 - Enhance Integration Tips](https://github.com/Multisite-Ultimate/ultimate-multisite/discussions/265)
- **คู่มือการแมปโดเมน Ultimate Multisite:** ดูหน้า wiki "How to Configure Domain Mapping v2"

## การสนับสนุน

หากคุณพบปัญหา:
1. ตรวจสอบส่วนการแก้ไขปัญหาด้านบน
2. ดู log ของ Ultimate Multisite
3. ปรึกษา [GitHub Discussions](https://github.com/Multisite-Ultimate/ultimate-multisite/discussions)
4. ติดต่อฝ่ายสนับสนุน Enhance สำหรับปัญหาเฉพาะแผงควบคุม
5. สร้างการสนทนาใหม่พร้อม log ข้อผิดพลาดโดยละเอียดเพื่อขอความช่วยเหลือจากชุมชน

## หมายเหตุ

- การผสานระบบนี้จัดการเฉพาะโดเมนนามแฝง; Enhance จัดการ SSL โดยอัตโนมัติ
- การผสานระบบรองรับทั้งการแมปโดเมนที่กำหนดเองและไซต์แบบ subdomain
- การสร้าง subdomain www อัตโนมัติสามารถกำหนดค่าได้ในการตั้งค่าการแมปโดเมน
- ปัจจุบัน Enhance รองรับการตั้งค่า Apache (LiteSpeed Enterprise มีให้ใช้งาน)
- การลบโดเมนจาก Ultimate Multisite จะลบโดเมนจาก Enhance แต่อาจไม่ลบ SSL certificate ที่เกี่ยวข้องทันที
