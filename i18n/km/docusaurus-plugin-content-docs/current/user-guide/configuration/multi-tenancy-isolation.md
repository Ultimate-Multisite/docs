---
title: ការបែងចែក Multi-Tenancy
sidebar_position: 12
_i18n_hash: 5aaf1504c3022f94b9aec9faaa4eda22
---
# ការបែងចែក Tenant (Multi-Tenancy Isolation) {#multi-tenancy-isolation}

Ultimate Multisite: Multi-Tenancy 1.2.0 គាំទ្រការបែងចែក database និង filesystem សម្រាប់ subsite នីមួយៗ ដើម្បីរក្សាភាពឯករាជ្យរបស់ tenant។ វាធ្វើឱ្យទិន្នន័យរបស់ tenant នៅតែដាច់ពីគ្នា ខណៈពេលដែលនៅតែរក្សាបាននូវការផ្តល់សេវាលើបណ្តាញ (network-level provisioning) ការគិតថ្លៃ (billing) និងការគ្រប់គ្រង (administration)។

## យុទ្ធសាស្ត្រនៃការបែងចែក (Isolation strategy) {#isolation-strategy}

ប្រើប្រាស់ sovereign isolation សម្រាប់អតិថិជនដែលត្រូវការការបែងចែកទិន្នន័យកាន់តែខ្លាំង ការផ្ទុក filesystem ផ្ទាល់ខ្លួន ឬព្រំដែន host ដាច់ដោយឡែក។

Tenant sovereign នីមួយៗគួរមាន៖

- database ផ្ទាល់ខ្លួន ឬយុទ្ធសាស្ត្រ prefix សម្រាប់ database ដែលត្រូវបានអនុម័តសម្រាប់ host។
- root filesystem ផ្ទាល់ខ្លួនសម្រាប់ tenant។
- ការចុះបញ្ជី tenant registry ដែលភ្ជាប់ site ទៅនឹង database, root path, hostname និង isolation model។
- លទ្ធផលនៃការផ្ទៀងផ្ទាត់ការផ្លាស់ប្តូរ (migration verification result) មុនពេល tenant ត្រូវបានចាត់ទុកថាដំណើរការ live។

## ការភ្ជាប់ host សម្រាប់ database (Database host binding) {#database-host-binding}

កំណែ 1.2.0 បានផ្លាស់ប្តូរអាកប្បកិរិយា mặc địnhនៃការភ្ជាប់ host ក្នុងម៉ាស៊ីនតែមួយ (same-machine host binding) សម្រាប់ការដំឡើង sovereign។ តម្លៃដូចជា `localhost` ត្រូវបានធ្វើឱ្យមានលក្ខណៈធម្មតា (normalized) ដើម្បីឱ្យ Bedrock, FrankenPHP និងការដំឡើង WordPress ដែលប្រើ container អាចផ្តល់ និងផ្ទៀងផ្ទាត់สิทธิ์ប្រឆាំងនឹងខ្សែអត្ថបទ host ដែល MySQL ពិតជាមើលឃើញ។

នៅពេលកំណត់រចនាសម្ព័ន្ធ tenant sovereign៖

1. កំណត់ database host ទៅជាតម្លៃដែល runtime របស់ tenant ទាមទារ។
2. ប្រើ `localhost` សម្រាប់ការដំឡើង socket នៅលើម៉ាស៊ីនក្នុងស្រុក (local socket installs) នៅពេលដែល host រំពឹងការតភ្ជាប់ក្នុងស្រុក។
3. ប្រើ `127.0.0.1` ឬ hostname នៃ service ប៉ុណ្ណោះនៅពេលដែល server database អនុញ្ញាតសិទ្ធិដល់ host នោះ។
4. ដំណើរការ migration verification បន្ទាប់ពីផ្លាស់ប្តូរការភ្ជាប់ host។

ប្រសិនបើរបាយការណ៍នៃការផ្ទៀងផ្ទាត់បង្ហាញពីការបរាជ័យក្នុងការផ្តល់สิทธิ์ សូមប្រៀបធៀបការផ្តល់สิทธิ์អ្នកប្រើប្រាស់របស់ DB tenant ជាមួយនឹងការកំណត់រចនាសម្ព័ន្ធ host binding។ អ្នកប្រើប្រាស់ដែលត្រូវបានផ្តល់សិទ្ធិសម្រាប់ `user@localhost` គឺខុសពី `user@127.0.0.1` ឬ `user@%`។

## root filesystem {#filesystem-root}

ឫសនៃអ្នកเช่า (tenant root) គួរតែមានស្ថិរភាពเมื่อมีการចាប់ផ្តើមใหม่และการติดตั้งใช้งานซ้ำ หลีกเลี่ยงการใช้เส้นทาง mount ชั่วคราว สำหรับการติดตั้งแบบ Bedrock ให้แน่ใจว่า tenant root ชี้ไปยัง web root ของ WordPress ที่คาดหวังโดย tenant bootstrap ไม่ใช่แค่ project root เท่านั้น

## ลำดับการเตรียมระบบ (Provisioning order) {#provisioning-order}

สำหรับ tenant ใหม่ที่เป็นเอกเทศ (sovereign tenants) ให้ใช้ลำดับนี้:

1. สร้างรายการลงทะเบียน tenant (tenant registry entry).
2. สร้างฐานข้อมูลและผู้ใช้ฐานข้อมูลของ tenant.
3. Bootstrap โครงสร้าง schema ของ tenant.
4. เตรียมผู้ใช้ของ tenant.
5. กำหนดเส้นทาง filesystem ของ tenant.
6. รันการตรวจสอบการย้ายข้อมูล (migration verification).
7. เปลี่ยนเส้นทางการเข้าชม (routing) หรือ DNS หลังจากผ่านการตรวจสอบแล้ว.

ลำดับนี้จะป้องกันไม่ให้ tenant ที่ถูกแยกส่วนบางส่วนได้รับทราฟฟิกก่อนที่ตัวเขียนฐานข้อมูล (database writer), ผู้ใช้, และระบบไฟล์จะพร้อมใช้งาน.

## กระบวนการจัดการลูกค้าสำหรับลูกค้าที่เป็นเอกเทศ (Sovereign customer management flows) {#sovereign-customer-management-flows}

Ultimate Multisite v2.13.0 จะเก็บการดำเนินการจัดการลูกค้าไว้ที่เว็บไซต์หลักเมื่อเปิดใช้งานโหมด sovereign. Tenant ยังสามารถทำงานเป็น WordPress install ที่แยกออกมาได้ แต่การดำเนินการที่เกี่ยวข้องกับลูกค้าซึ่งขึ้นอยู่กับการเรียกเก็บเงินผ่านเครือข่าย (network billing), การเป็นสมาชิก (membership) หรือข้อมูลบัญชีร่วม ควรส่งลูกค้ากลับไปยังเว็บไซต์หลัก แทนที่จะพยายามทำรายการให้เสร็จสิ้นภายใน runtime ของ tenant.

กระบวนการของเว็บไซต์หลักนี้ใช้กับ:

- การชำระเงินและการเปลี่ยนแปลงแผน (Checkout and plan changes).
- ภาพรวมบัญชีและการดำเนินการโปรไฟล์ลูกค้า (Account overview and customer profile actions).
- การอัปเดตที่อยู่สำหรับเรียกเก็บเงินและหน้าจัดการการชำระเงิน (Billing address updates and payment-management screens).
- มุมมองใบแจ้งหนี้และประวัติการชำระเงิน (Invoice and payment-history views).
- การดำเนินการจัดการเว็บไซต์ เช่น การเพิ่มเว็บไซต์หรือการลบเว็บไซต์ (Site management actions such as adding sites or deleting a site).
- การสลับ Template.
- การแมปโดเมนและการเปลี่ยนแปลง primary-domain.

នៅពេលដែលអតិថិជនចាប់ផ្តើមធ្វើសកម្មភាពណាមួយពី tenant ឯករាជ្យ (sovereign tenant) មួយ Ultimate Multisite នឹងបង្កើត URL នៃ site មេ (main-site URL) ដែលត្រូវគ្នា ហើយរក្សាទុក source tenant ជាគោលដៅត្រឡប់វិញ ប្រសិនបើវាមានសុវត្ថិភាព។ ការធ្វើបែបនេះអនុញ្ញាតឱ្យអតិថិជនបញ្ចប់សកម្មភាពដែលបានគ្រប់គ្រងនោះដោយផ្អែកលើកំណត់ត្រានៅក្នុងបណ្តាញ (network records) បន្ទាប់មកត្រឡប់ទៅបរិបទ tenant ដោយមិនប duplicat ស្ថានភាពនៃការគិតថ្លៃ ឬសមាជិកនៅក្នុង database របស់ sovereign។

សម្រាប់អ្នកប្រតិបត្តិការ (operators) ច្បាប់ជាក់ស្តែងគឺ៖ សូមរក្សាទុកទំព័រដែលពាក់ព័ន្ធនឹងការគិតថ្លៃ (billing), ប្រវត្តិគណនី (account), ការបិទការបញ្ជាទិញ (checkout), ប័ណ្ណវិក្កយបត្រ (invoice),  قالب (template) និងការគ្រប់គ្រងដែន (domain-management) នៅលើ site មេសម្រាប់ network ដែលជា sovereign។ Tenant dashboards អាចភ្ជាប់ទៅកាន់ទំព័រទាំងនោះបាន ប៉ុន្តែ site មេនៅតែជាប្រភពនៃការពិត (source of truth) សម្រាប់សកម្មភាពនោះ។
