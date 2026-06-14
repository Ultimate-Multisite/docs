---
title: ການເຊື່ອມຕໍ່ກັບ Hestia Control Panel
sidebar_position: 7
_i18n_hash: 252519613f4d84d44875a5b2090e4bd6
---
# ການເຊື່ອມຕໍ່ກັບ Hestia Control Panel

ຄູ່ມືນີ້ຈະອະທິບາຍວິທີການຕັ້ງຄ່າການເຊື່ອມຕໍ່ຂອງ Ultimate Multisite Hestia ເພື່ອໃຫ້ໂດເມນທີ່ຖືກแมપຢູ່ໃນເຄືອຂ່າຍຂອງທ່ານຖືກເພີ່ມ (ແລະ ລຶບ) ອັດຕະໂນມັດເປັນ Web Domain Aliases ໃນ Hestia.

- ອ້າງອີງ CLI ຂອງ Hestia: v-add-web-domain-alias / v-delete-web-domain-alias
- ຕຳລາ REST API ຢ່າງເປັນທາງການ: https://hestiacp.com/docs/server-administration/rest-api.html

## ສິ່ງທີ່ມັນເຮັດໄດ້
- ເມື່ອໂດເມນຖືກแมપໃນ Ultimate Multisite, ການເຊື່ອມຕໍ່ນີ້ຈະເອີ້ນໃຊ້ Hestia API ເພື່ອເຮັດສິ່ງເຫຼົ່ານີ້:
  - `v-add-web-domain-alias <USER> <DOMAIN> <ALIAS> [RESTART]`
- ເມື່ອການแมપໂດເມນຖືກລຶບ, ມັນຈະເຮັດສິ່ງນີ້:
  - `v-delete-web-domain-alias <USER> <DOMAIN> <ALIAS> [RESTART]`
- ສາມາດເພີ່ມ/ລຶບ alias `www.` ອີກດ້ວຍ ຂຶ້ນກັບການຕັ້ງຄ່າ “Auto-create www subdomain” ຂອງທ່ານໃນການตั้งค่า Domain Mapping.

## ເງື່ອນໄຂທີ່ຕ້ອງມີ (Prerequisites)
- Hestia Web Domain ທີ່ມີຢູ່ແລ້ວທີ່ຊີ້ໄປຫາ WordPress installation ຂອງທ່ານ. ການເຊື່ອມຕໍ່ນີ້ຈະຕິດ alias ເຂົ້າກັບໂດເມນພື້ນຖານນີ້.
- ການເຂົ້າເຖິງ Hestia API ໄດ້ຖືກເປີດໃຊ້ງານແລ້ວ. ທ່ານສາມາດຢັ້ງຢືນຕົວຕົນໂດຍໃຊ້ລະຫັດຜ່ານ ຫຼື API hash/token.

ເບິ່ງຕຳລາ REST API ຂອງ Hestia ເພື່ອເປີດໃຊ້ການເຂົ້າເຖິງ API ແລະ ລາຍລະອຽດການຢັ້ງຢືນ:
https://hestiacp.com/docs/server-administration/rest-api.html

## ການຕັ້ງຄ່າ (Wizard → Integrations → Hestia)
ໃຫ້ຂໍ້ມູນຄ່າຕໍ່ໄປນີ້:

- `WU_HESTIA_API_URL` (จำเป็นต้องมี)
  - จุดเชื่อมต่อ API พื้นฐาน ซึ่งโดยปกติจะเป็น `https://your-hestia-host:8083/api/`
- `WU_HESTIA_API_USER` (จำเป็นต้องมี)
  - ชื่อผู้ใช้ Hestia ที่ใช้สำหรับคำสั่ง API (ส่วนใหญ่มักเป็น `admin`)
- `WU_HESTIA_API_PASSWORD` หรือ `WU_HESTIA_API_HASH` (อย่างน้อยหนึ่งตัวเลือก)
  - เลือกวิธีการยืนยันตัวตนอย่างใดอย่างหนึ่ง: รหัสผ่าน หรือ API hash/token
- `WU_HESTIA_ACCOUNT` (จำเป็นต้องมี)
  - บัญชี (เจ้าของ) ของ Web Domain ใน Hestia ซึ่งเป็นอาร์กิวเมนต์แรกสำหรับ CLI
- `WU_HESTIA_WEB_DOMAIN` (จำเป็นต้องมี)
  - Web Domain ที่มีอยู่แล้วใน Hestia ที่ใช้สำหรับ WordPress ของคุณ (ชื่อย่อจะถูกเพิ่มที่นี่)
- `WU_HESTIA_RESTART` (ไม่บังคับ; ค่าเริ่มต้นคือ `yes`)
  - การว่าจะให้รีสตาร์ท/โหลดบริการใหม่หลังจากเปลี่ยน alias หรือไม่

คุณสามารถปล่อยให้ wizard ใส่ค่าคงที่เหล่านี้ลงในไฟล์ `wp-config.php` ได้เลย หรือจะกำหนดเองก็ได้ครับ

## การตรวจสอบการตั้งค่า
- ในขั้นตอน “Testing” ของ wizard, ปลั๊กอินจะเรียกใช้คำสั่ง `v-list-web-domains <WU_HESTIA_ACCOUNT> json` ผ่าน API การตอบกลับที่สำเร็จจะยืนยันว่ามีการเชื่อมต่อและการยืนยันตัวตนถูกต้อง

- หลังจากแมปโดเมนแล้ว ให้เข้าไปตรวจสอบใน Hestia: Web > โดเมนหลัก (base domain) > Aliases คุณควรจะเห็น alias ใหม่ถูกเพิ่มเข้ามา

## ข้อควรทราบและเคล็ดลับ
- ตรวจสอบให้แน่ใจว่า `WU_HESTIA_WEB_DOMAIN` มีอยู่แล้วและเป็นของ `WU_HESTIA_ACCOUNT`
- หากต้องการ SSL ให้จัดการใบรับรองที่ Hestia การผสานรวมนี้ในปัจจุบันจะจัดการเฉพาะ alias เท่านั้น
- ปลั๊กอินอาจเพิ่ม/ลบ `www.<domain>` ขึ้นอยู่กับการตั้งค่า Domain Mapping ของคุณว่าเลือกเป็น “www subdomain” หรือไม่

## ตัวอย่างการเรียก API (cURL)
นี่เป็นตัวอย่างแนวคิด (ปรับให้เข้ากับสภาพแวดล้อมของคุณ) โปรดดูเอกสารทางการสำหรับพารามิเตอร์ที่แน่นอน

POST https://your-hestia-host:8083/api/
Content-Type: application/x-www-form-urlencoded

cmd=v-add-web-domain-alias
&user=admin
&password=YOUR_API_PASSWORD  (or &hash=YOUR_API_HASH)
&arg1=admin                  (WU_HESTIA_ACCOUNT)
&arg2=network.example.com    (WU_HESTIA_WEB_DOMAIN)
&arg3=customer-domain.com    (alias to add)
&arg4=yes                    (WU_HESTIA_RESTART)
&returncode=yes

ສຳລັບການລຶບ (delete), ໃຫ້ໃຊ້ `cmd=v-delete-web-domain-alias` ແລະ ແທນຄ່າ argument ເຊັ່ນດຽວກັນ.

## ການແກ້ໄຂບັນຫາ (Troubleshooting)
- HTTP error ຈາກ API: ກວດສອບວ່າ `WU_HESTIA_API_URL` ສາມາດເຂົ້າເຖິງໄດ້ ແລະ ມີ `/api` ນຳໜ້າຢູ່ບໍ່.
- ຂໍ້ຜິດພາດການຢັ້ງຢືນຕົວຕົນ (Auth errors): ຢືນຢັນວ່າ `WU_HESTIA_API_USER` ແລະ ຄ່າໃດໜຶ່ງຂອງ `WU_HESTIA_API_PASSWORD` ຫຼື `WU_HESTIA_API_HASH` ແມ່ນຖືກຕ້ອງ.
- "Missing account/base domain" ໃນ logs: ໃຫ້ແນ່ໃຈວ່າ `WU_HESTIA_ACCOUNT` ແລະ `WU_HESTIA_WEB_DOMAIN` ໄດ້ຖືກຕັ້ງຄ່າໄວ້ ແລະ ມີຜົນໃນ Hestia ແລ້ວ.

## ເອກະສານອ້າງອີງ (References)
- Hestia REST API: https://hestiacp.com/docs/server-administration/rest-api.html
- Hestia CLI Reference (Aliases): https://hestiacp.com/docs/reference/cli.html#v-add-web-domain-alias
