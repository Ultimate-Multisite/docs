---
title: ຄູ່ມືການຕັ້ງຄ່າເວັບໄຊຫຼາຍບ່ອນ
sidebar_position: 3
_i18n_hash: fd09dc94f24b0b37245b847380feea3f
---
# မူလအခြေခံများ စနစ်တကျ တည်ဆောက်ခြင်း လမ်းညွှန် (Multisite Setup Wizard)

Ultimate Multisite မှာ WordPress ပုံမှန် install လုပ်ထားတာကို WordPress Multisite network တစ်ခုအဖြစ် အလိုအလျောက် ပြောင်းလဲပေးတဲ့ wizard တစ်ခု ပါဝင်ပါတယ်။ ဒါက `wp-config.php` ကို ကိုယ်တိုင်ပြင်ရတာ ဒါမှမဟုတ် database command တွေ run ဖို့ မလိုအပ်တော့ပါဘူး။

:::tip
သင့်ရဲ့ WordPress install က တကယ်ပဲ Multisite network အဖြစ် အလုပ်လုပ်နေပြီဆိုရင် ဒီအဆင့်ကို လုံးဝကျော်လွှားလို့ ရပါတယ်။ Wizard ဟာ Multisite ကို မဖွင့်ရသေးတဲ့အခါမှာပဲ ပေါ်လာတာပါ။
:::

## Wizard ဘယ်အချိန်မှာ ပေါ်လာသလဲ? {#when-does-the-wizard-appear}

ပုံမှန် (Multisite မဟုတ်တဲ့) WordPress install တစ်ခုပေါ်မှာ Ultimate Multisite ကို activate လုပ်လိုက်တဲ့အခါ၊ plugin က Multisite မဖွင့်ထားဘူးဆိုတာကို သိသွားပြီး ပုံမှန် setup wizard အစား Multisite Setup Wizard ကို အလိုအလျောက် ပြောင်းပေးပါလိမ့်မယ်။

ဒါကို **WP Admin > Ultimate Multisite > Multisite Setup** မှာ တိုက်ရိုက်လည်း ဝင်ကြည့်နိုင်ပါတယ်။

## ကြိုတင်ပြင်ဆင်မှုများ (Prerequisites) {#prerequisites}

wizard ကို run မလုပ်ခင် အောက်ပါအချက်တွေ ရှိ၊ မရှိ စစ်ဆေးဖို့ လိုအပ်ပါတယ်-

- သင့် WordPress install အတွက် **administrator access** ရှိရမယ်။
- သင့် server ရဲ့ `wp-config.php` ဖိုင်ကို web server က **ရေးလို့ရ (writable)** ဖြစ်နေရမယ်။
- သင့်ရဲ့ file တွေနဲ့ database ကို **မကြာသေးခင်က Backup** လုပ်ထားဖို့ လိုအပ်ပါတယ်။

:::warning
ဒီ wizard ဟာ သင့်ရဲ့ `wp-config.php` ဖိုင်ကို ပြောင်းလဲပြီး database table အသစ်တွေ ဖန်တီးပေးမှာ ဖြစ်တဲ့အတွက် ဆက်လုပ်ဆောင်တာ မစခင် အမြဲတမ်း backup တစ်ခု လုပ်ထားသင့်ပါတယ်။
:::

## အဆင့် ၁: ကြိုဆိုခြင်း (Welcome) {#step-1-welcome}

ပထမဆုံး screen က WordPress Multisite ဆိုတာ ဘာလဲ၊ wizard က ဘာတွေ လုပ်သွားမယ်ဆိုတာကို ရှင်းပြပေးပါလိမ့်မယ်-

- သင့် WordPress configuration ထဲမှာ Multisite feature ကို ဖွင့်ပေးပါ
- လိုအပ်တဲ့ network database tables တွေကို ဖန်တီးပေးပါ
- `wp-config.php` ထဲမှာ လိုအပ်တဲ့ multisite constants တွေကို ထည့်ပေးပါ
- Network တစ်ခုလုံးအတွက် Ultimate Multisite ကို activate လုပ်ပေးပါ

![Multisite Setup Wizard - Welcome step](/img/installation/multisite-wizard/wizard-welcome.png)

ဆက်လုပ်ဖို့ **Continue** ကို နှိပ်ပါ။

## အဆင့် ၂: Network Configuration (Network စနစ်ဖွဲ့စည်းမှု) {#step-2-network-configuration}

ဒီအဆင့်က သင့်ရဲ့ network settings တွေကို ဘယ်လို စီစဉ်မလဲဆိုတာ မေးပါလိမ့်မယ်။

### Site Structure (Site ဖွဲ့စည်းပုံ) {#site-structure}

ເລືອກວິທີຈັດລະບົບເວັບໄຊທ໌ໃນເຄືອຂ່າຍຂອງທ່ານ:

- **Sub-domains** (ແນະນຳທີ່ສຸດ) — ເວັບໄຊທ໌នីໜຶ່ງຈະໄດ້ subdomain ຂອງຕົນເອງ, ຕົວຢ່າງ: `site1.yourdomain.com`
- **Sub-directories** — ເຮັດໃຫ້ເວັບໄຊທ໌ເປັນໂຟລເດີ (path), ຕົວຢ່າງ: `yourdomain.com/site1`

:::note
ຖ້າທ່ານເລືອກໃຊ້ sub-domains, ທ່ານຈະຕ້ອງຕັ້ງຄ່າ **wildcard DNS** ແລະ **wildcard SSL certificate** ສຳລັບ domain ຂອງທ່ານ. ຜູ້ໃຫ້ບໍລິການ WordPress ທີ່ຈັດການໄວ້ສ່ວນໃຫຍ່ເຮັດສິ່ງນີ້ໃຫ້ໂດຍອັດຕະໂນມັດ. ເບິ່ງ [Ultimate Multisite 101](./ultimate-multisite-101) ເພື່ອປຽບທຽບລາຍລະອຽດ.
:::

### ຊື່ເຄືອຂ່າຍ (Network Title) {#network-title}

ໃສ່ຊື່ໃຫ້ກັບເຄືອຂ່າຍຂອງທ່ານ. ອັນນີ້ຈະໃຊ້ຊື່ເວັບໄຊທ໌ປັດຈຸບັນຂອງທ່ານພ້ອມດ້ວຍຄຳວ່າ "Network" ເປັນຕຳໜິຕິຕິເລີ່ມຕົ້ນ. ທ່ານສາມາດປ່ຽນໄດ້ໃນພາກການຕັ້ງຄ່າເຄືອຂ່າຍໃນພາຍຫຼັງ.

### ອີເມວຜູ້ບໍລິຫານເຄືອຂ່າຍ (Network Admin Email) {#network-admin-email}

ອີເມວທີ່ຈະໃຊ້ສຳລັບການແຈ້ງເຕືອນການບໍລິຫານເຄືອຂ່າຍ. ໂດຍປົກກະຕິມັນຈະເປັນອີເມວຂອງຜູ້ໃຊ້ໃນເວລານັ້ນ.

![Multisite Setup Wizard - Network Configuration](/img/installation/multisite-wizard/wizard-network-configuration.png)

ຫຼັງຈາກທີ່ຕື່ມຂໍ້ມູນໃນຊ່ອງຕ່າງໆແລ້ວ, ກົດ **Continue** ເພື່ອໄປຕໍ່.

## ຂັ້ນຕອນທີ 3: ການຕິດຕັ້ງ (Installation) {#step-3-installation}

ກົດປຸ່ມ **Install** ເພື່ອເລີ່ມຕົ້ນ. Wizard ນີ້ຈະເຮັດຂັ້ນຕອນອັດຕະໂນມັດ 5 ຂັ້ນຕອນຕິດຕໍ່ກັນ, ແຕ່ໃນແຕ່ລະຂັ້ນຕອນມັນຈະສະແດງຄວາມຄືບໜ້າໃຫ້ເຫັນແບບສົດໆ:

![Multisite Setup Wizard - Installation pending](/img/installation/multisite-wizard/wizard-installation-pending.png)

| Bước | Mô tả |
|------|-------------|
| **Bật Multisite** | Thêm hằng số `WP_ALLOW_MULTISITE` vào file `wp-config.php` |
| **Tạo Mạng (Network)** | Tạo các bảng cơ sở dữ liệu multisite (`wp_site`, `wp_sitemeta`, `wp_blogs`, v.v.) và điền cấu hình mạng của bạn vào đó |
| **Cập nhật Cấu hình** | Thêm các hằng số multisite cuối cùng vào `wp-config.php` (`MULTISITE`, `SUBDOMAIN_INSTALL`, `DOMAIN_CURRENT_SITE`, v.v.) |
| **Sửa Cookie** | Đảm bảo URL của trang web là chính xác trong metadata mạng để tránh lỗi xác thực sau khi kích hoạt |
| **Kích hoạt Plugin Mạng** | Kích hoạt Ultimate Multisite để nó chạy trên toàn bộ mạng |

Mỗi bước sẽ hiển thị một trong các trạng thái sau:

- **Pending (Đang chờ)** — Đang đợi được xử lý
- **Installing... (Đang cài đặt...)** — Đang chạy
- **Success! (Thành công!)** — Hoàn tất thành công
- **Error message (Thông báo lỗi)** — Đã xảy ra lỗi (thông báo sẽ mô tả vấn đề)

Sau khi tất cả các bước hoàn thành thành công, bạn sẽ thấy trạng thái "Success!" màu xanh lá cây cho từng mục:

![Multisite Setup Wizard - Installation complete](/img/installation/multisite-wizard/wizard-installation-complete.png)

Sau đó, trình hướng dẫn (wizard) sẽ tự động chuyển sang màn hình hoàn tất.

## Bước 4: Hoàn tất {#step-4-complete}

Khi quá trình cài đặt hoàn tất, bạn sẽ thấy thông báo thành công xác nhận rằng WordPress Multisite đã được bật.

![Multisite Setup Wizard - Setup Complete](/img/installation/multisite-wizard/wizard-complete.png)

Bây giờ bạn có thể tiếp tục với trình hướng dẫn thiết lập Ultimate Multisite để cấu hình nền tảng WaaS của mình (thông tin công ty, nội dung mặc định, cổng thanh toán, v.v.).

:::note
หลังจากติดตั้ง multisite เสร็จแล้ว เบราว์เซอร์ของคุณจะถูกเปลี่ยนเส้นทางผ่าน network admin ที่เปิดใช้งานใหม่ คุณอาจต้องล็อกอินอีกครั้งเนื่องจากคุกกี้การยืนยันตัวตนได้รับการอัปเดตสำหรับสภาพแวดล้อม multisite
:::

## การตั้งค่าสำรองด้วยตนเอง (Manual Setup Fallback) {#manual-setup-fallback}

ถ้า wizard ไม่สามารถเขียนไฟล์ลงใน `wp-config.php` ของคุณได้ (เนื่องจากสิทธิ์ของไฟล์หรือข้อจำกัดของเซิร์ฟเวอร์) มันจะแสดงโค้ดที่คุณต้องเพิ่มด้วยตัวเอง:

1. **wp-config.php constants** ที่ต้องเพิ่มไว้เหนือบรรทัด `/* นั่นคือทั้งหมด หยุดแก้ไข! */`
2. **.htaccess rewrite rules** ที่เหมาะสมกับโครงสร้างเว็บไซต์ที่คุณเลือก (subdomain หรือ subdirectory)

หลังจากทำการเปลี่ยนแปลงด้วยตนเองแล้ว ให้รีเฟรชหน้าเว็บ และ wizard จะตรวจพบว่า multisite เปิดใช้งานแล้ว

## การแก้ไขปัญหา (Troubleshooting) {#troubleshooting}

### wizard บอกว่า wp-config.php เขียนไม่ได้ (is not writable) {#the-wizard-says-wp-configphp-is-not-writable}

โปรเซสของ web server ของคุณจำเป็นต้องมีสิทธิ์ในการเขียนไฟล์ `wp-config.php` คุณสามารถทำได้โดย:

- เปลี่ยนสิทธิ์ของไฟล์ชั่วคราวเป็น `644` หรือ `666`
- ใช้คำแนะนำการตั้งค่าสำรองด้วยตนเองที่ wizard ให้มา
- ขอความช่วยเหลือจากผู้ให้บริการโฮสติ้งของคุณ

### เว็บไซต์เข้าไม่ได้หลังตั้งค่า (subdomains) {#sites-are-not-accessible-after-setup-subdomains}

ถ้าคุณเลือกโครงสร้าง subdomain คุณต้องกำหนดค่า **wildcard DNS** สำหรับโดเมนของคุณ เพิ่มเรคคอร์ด DNS ดังนี้:

```
Type: A (หรือ CNAME)
Host: *
Value: [IP เซิร์ฟเวอร์ของคุณ]
```

ตรวจสอบกับผู้ให้บริการโฮสติ้งของคุณหากไม่แน่ใจว่าจะตั้งค่าอย่างไร

### ปัญหาการยืนยันตัวตนหลังตั้งค่า {#authentication-issues-after-setup}

ถ้าคุณล็อกเอาท์ออก หรือพบข้อผิดพลาดเกี่ยวกับคุกกี้หลังจากตั้งค่า multisite:

1. ล้าง cookies ของเบราว์เซอร์สำหรับเว็บไซต์นั้น
2. ล็อกอินอีกครั้งที่ `yourdomain.com/wp-login.php`
3. หากปัญหายังคงอยู่ ให้ตรวจสอบว่า `wp-config.php` ของคุณไม่ได้ตั้งค่า `COOKIE_DOMAIN` เป็น `false` — นี่เป็นปัญหาที่ทราบกันดีในการติดตั้ง multisite บน subdomain

### ขั้นตอนใดขั้นตอนหนึ่งล้มเหลวระหว่างการติดตั้ง {#a-step-failed-during-installation}

ຖ້າขั้นตอนການຕິດຕັ້ງໃດໜຶ່ງສະແດງຂໍ້ຜິດພາດ:

1. ຈົດບັນທຶກຂໍ້ຄວາມຜິດພາດທີ່ສະແດງອອກມາ
2. ກັບໄປທີ່ຂັ້ນຕອນການຕັ້ງຄ່າ ແລະ ພະຍາຍາມເຮັດອີກເທື່ອໜຶ່ງ
3. ຖ້າຂໍ້ຜິດພາດຍັງຄົງຢູ່, ກວດສອບ error log ຂອງ server PHP ເພື່ອເບິ່ງລາຍລະອຽດເພີ່ມເຕີມ
4. ຂັ້ນຕອນທີ່ເຮັດສໍາເລັດແລ້ວຈະຖືກຂ້າມໃນການເຮັດຊ້ຳຕໍ່ໄປ (installer ແມ່ນ idempotant)
