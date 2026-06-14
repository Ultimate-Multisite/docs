---
title: ការផ្ញើអ៊ីមែល និងការផ្សព្វផ្សាយ
sidebar_position: 11
_i18n_hash: e9ddc461d32299505e4a7a5af491cff6
---
# ការផ្ញើអ៊ីមែល និងការផ្សព្វផ្សាយ (v2)

_**ចំណាំសំខាន់៖ អត្ថបទនេះសំដៅលើ Ultimate Multisite version 2.x។**_

Ultimate Multisite មានមុខងារមួយដែលអនុញ្ញាតឱ្យអ្នកទំនាក់ទំនងជាមួយអតិថិជនរបស់អ្នកដោយការផ្ញើអ៊ីមែលទៅកាន់អ្នកប្រើប្រាស់ជាក់លាក់ ឬក្រុមអ្នកប្រើប្រាស់ ហើយក៏អាចផ្ញើសារជូនដំណឹងនៅលើ admin dashboard របស់ពួកគេដើម្បីផ្សព្វផ្សាយព័ត៌មានផងដែរ។

## បន្ថែមការជូនដំណឹងសម្រាប់ Admin ទៅក្នុង dashboard របស់អតិថិជនរបស់អ្នកដោយប្រើ Broadcasts

ដោយប្រើមុខងារ broadcast feature របស់ Ultimate Multisite អ្នកអាចបន្ថែម **admin notices** (ការជូនដំណឹងសម្រាប់អ្នកគ្រប់គ្រង) ទៅក្នុង admin dashboard របស់ subsite របស់អ្នក។

នេះមានប្រយោជន៍ខ្លាំងណាស់ ប្រសិនបើអ្នកត្រូវការធ្វើការប្រកាសដូចជា ការថែទាំប្រព័ន្ធ ឬការផ្តល់ជូនផលិតផល ឬសេវាកម្មថ្មីៗដល់អ្នកប្រើប្រាស់ដែលមានស្រាប់របស់អ្នក។ នេះគឺជាលក្ខណៈនៃការបង្ហាញ admin notice នៅលើ dashboard របស់អតិថិជនរបស់អ្នក។

<!-- Screenshot unavailable: Admin notice broadcast shown on a customer's subsite dashboard -->

ដើម្បីចាប់ផ្តើមការជូនដំណឹងសម្រាប់ admin សូមចូលទៅកាន់ network admin dashboard របស់អ្នក ហើយក្រោមเมนู **Ultimate Multisite** អ្នកនឹងឃើញជម្រើស **Broadcasts**។

![Broadcasts list page in Ultimate Multisite admin](/img/admin/broadcasts-list.png)

អ្នកក៏អាចកែសម្រួល broadcast ដែលមានរួចហើយបានដែរ៖

![Broadcast edit interface](/img/admin/broadcast-edit.png)

ពីหน้านี้ សូមចុចលើប៊ូតុង **Add Broadcast** នៅខាងលើ។

វានឹងបង្ហាញ cửa sổ modal សម្រាប់បន្ថែម broadcast ដែលអ្នកអាចជ្រើសរើសប្រភេទ broadcast ដែលអ្នកចង់ផ្ញើបាន។

សូមជ្រើសរើស **Message** រួចចុចប៊ូតុង **Next Step**។

![Add broadcast modal with the Message option selected](/img/admin/broadcast-add-message.png)

បង្អួចបន្ទាប់នឹងសួរអ្នកអំពី **Target customer** (អតិថិជនគោលដៅ) ឬ **Target product** (ផលិតផលគោលដៅ)។ សូមចំណាំថា អ្នកអាចជ្រើសរើសច្រើនជាងមួយអ្នកប្រើប្រាស់ ឬច្រើនជាងមួយផលិតផលបាន។

ដើម្បីស្វែងរកគណនីអ្នកប្រើប្រាស់ ឬផលិតផល អ្នកត្រូវចាប់ផ្តើមវាយពាក្យគន្លឹះនៅក្នុងវាលនោះ។

នៅក្រោមវាល **Message type** (ប្រភេទសារ) អ្នកអាចជ្រើសរើសពណ៌នៃសេចក្តីជូនដំណឹង។ ការធ្វើបែបនេះនឹងបញ្ជាក់ពីភាពបន្ទាន់នៃសាររបស់អ្នក។

បន្ទាប់មក អ្នកអាចចុច **Next Step** (ជំហានបន្ទាប់)។

![Target customers, target product and message type fields for a Message broadcast](/img/admin/broadcast-message-targets.png)

បង្អួចបន្ទាប់គឺជាកន្លែងដែលអ្នកអាចចាប់ផ្តើមសរសេរសាររបស់អ្នកដោយបញ្ចូលប្រធានបទ និងខ្លឹមសារ/សារដែលអ្នកចង់បញ្ជូនទៅកាន់អ្នកប្រើប្រាស់។

![Broadcast message subject and content editor on the compose step](/img/admin/broadcast-edit.png)

បន្ទាប់ពីបង្កើតសាររបស់អ្នករួច អ្នកអាចចុចប៊ូតុង **Send** (ផ្ញើ)។

ហើយនោះគឺគ្រប់យ៉ាង។ សេចក្តីជូនដំណឹងរបស់ admin នឹងបង្ហាញភ្លាមៗនៅលើ dashboard របស់អ្នកប្រើប្រាស់។

## បញ្ជូនអ៊ីមែលទៅកាន់អតិថិជនរបស់អ្នក

ដោយប្រើមុខងារ broadcast របស់ Ultimate Multisite អ្នកអាចផ្ញើអ៊ីមែលទៅកាន់អ្នកប្រើប្រាស់របស់អ្នកបាន។ អ្នកមានជម្រើសក្នុងការផ្ញើអ៊ីមែលតែទៅកាន់អ្នកប្រើប្រាស់ជាក់លាក់ ឬកំណត់គោលដៅក្រុមអ្នកប្រើប្រាស់ជាក់លាក់មួយដោយផ្អែកលើផលិតផល ឬផែនការដែលពួកគេបានចុះឈ្មោះក្រោមនោះ។

ដើម្បីចាប់ផ្តើមការបញ្ជូនអ៊ីមែល សូមចូលទៅកាន់ network admin dashboard របស់អ្នក ហើយនៅក្រោមเมนู Ultimate Multisite អ្នកនឹងឃើញជម្រើស Broadcast (ផ្សព្វផ្សាយ)។

![Broadcasts list page used as the starting point for an email broadcast](/img/admin/broadcasts-list.png)

ពីหน้านày ចុចប៊ូតុង **Add broadcast** (បន្ថែមការផ្សព្វផ្សាយ) នៅខាងលើ។

វានឹងបង្ហាញបង្អួច Add broadcast ដែលអ្នកអាចជ្រើសរើសប្រភេទនៃការផ្សព្វផ្សាយដែលអ្នកចង់ផ្ញើ។ សូមជ្រើសរើស **Email** រួចចុចប៊ូតុង **Next Step** (ជំហានបន្ទាប់)។

![Add broadcast modal with the Email option selected](/img/admin/broadcast-add-email.png)

បង្អួចបន្ទាប់នឹងសួរអ្នកអំពី **Target customer** (អតិថិជនគោលដៅ) ឬ **Target product** (ផលិតផលគោលដៅ)។ សូមចំណាំថា អ្នកអាចជ្រើសរើសច្រើនជាងមួយអ្នកប្រើប្រាស់ ឬច្រើនជាងមួយផលិតផលបាន។

ដើម្បីស្វែងរកគណនីអ្នកប្រើប្រាស់ ឬផលិតផល អ្នកត្រូវចាប់ផ្តើមវាយពាក្យគន្លឹះនៅក្នុងវាលនោះ។

នៅពេលដែលអ្នកបានជ្រើសរើសទស្សនិកជនគោលដៅរបស់អ្នកហើយ អ្នកអាចចុច **Next Step** (ជំហានបន្ទាប់)។

![Target customers and target product selection for an Email broadcast](/img/admin/broadcast-email-targets.png)

បង្អួចបន្ទាប់គឺជាកន្លែងដែលអ្នកអាចចាប់ផ្តើមសរសេរអ៊ីមែលរបស់អ្នក ដោយបញ្ចូលប្រធានបទ និងខ្លឹមសារ/សារដែលអ្នកចង់ផ្ញើទៅកាន់អ្នកប្រើប្រាស់។

<!-- Screenshot unavailable: Email broadcast subject and content editor on the compose step -->

បន្ទាប់ពីបង្កើតសាររបស់អ្នករួច អ្នកអាចចុចប៊ូតុង **Send** (ផ្ញើ)។

ហើយនេះគឺជាភាពងាយស្រួលក្នុងការផ្ញើអ៊ីមែលទៅកាន់អ្នកប្រើប្រាស់របស់អ្នកដោយប្រើមុខងារ broadcast។

## System emails (អ៊ីមែលប្រព័ន្ធ)

System emails នៅក្នុង Ultimate Multisite គឺជា **ការជូនដំណឹងស្វ័យប្រវត្តិ** ដែលត្រូវបានផ្ញើដោយប្រព័ន្ធបន្ទាប់ពីមានសកម្មភាពជាក់លាក់មួយដូចជា ការចុះឈ្មោះ, ការបង់ប្រាក់, ការកំណត់ផែនទីដែន (domain mapping) ជាដើម។ អ៊ីមែលទាំងនេះអាចត្រូវបានកែសម្រួល ឬផ្លាស់ប្តូរពីការកំណត់រចនាសម្ព័ន្ធរបស់ Ultimate Multisite បាន។ វាថែមទាំងមានមុខងារមួយដែលអនុញ្ញាតឱ្យអ្នកកំណត់ឡើងវិញ និងនាំចូលការកំណត់រចនាសម្ព័ន្ធដែលមានស្រាប់ពីការដំឡើង Ultimate Multisite ផ្សេងទៀត។

### Resetting & Importing (ការកំណត់ឡើងវិញ និងការនាំចូល)

កំណែថ្មីនៃ Ultimate Multisite ក៏ដូចជា add-ons អាចនឹងចុះឈ្មោះអ៊ីមែលថ្មីម្តងម្កាលផងដែរ។

ដើម្បីការពារជម្លោះ និងបញ្ហាផ្សេងៗ យើង **នឹងមិនបន្ថែម قالبអ៊ីមែលថ្មីទាំងនេះជា System Emails នៅលើការដំឡើងរបស់អ្នកដោយស្វ័យប្រវត្តិទេ** លុះត្រាតែវាមានសារៈសំខាន់សម្រាប់ការដំណើរការត្រឹមត្រូវនៃមុខងារជាក់លាក់ណាមួយ។

ទោះជាយ៉ាងណាក៏ដោយ អ្នកគ្រប់គ្រងជាន់ខ្ពស់ (super admins) និងភ្នាក់ងារ (agents) អាចនាំចូលអ៊ីមែលដែលបានចុះឈ្មោះថ្មីនេះតាមរយៈឧបករណ៍ importer។ ដំណើរការនេះនឹងបង្កើត system email ថ្មីជាមួយនឹងខ្លឹមសារ និងការកំណត់រចនាសម្ព័ន្ធនៃ قالبអ៊ីមែលថ្មី ដែលអនុញ្ញាតឱ្យ super admin ធ្វើការកែប្រែណាមួយដែលពួកគេចង់ ឬរក្សាទុកវាដូចដើម។

#### How to import system emails (របៀបនាំចូល system emails)

ទៅកាន់หน้าร้านการตั้งค่า Ultimate Multisite ของคุณ แล้วไปที่แท็บ **Emails**។

![Emails tab in Ultimate Multisite settings showing the System Emails section](/img/config/settings-emails-tab.png)

จากนั้น ในแถบด้านข้าง ให้คลิกที่ปุ่ม **Customize System Emails** (ปรับแต่งอีเมลระบบ) 。

<!-- Screenshot unavailable: Customize System Emails button on the System Emails sidebar panel -->

ในหน้า System Emails คุณจะเห็นปุ่มการดำเนินการ **Reset & Import** (รีเซ็ตและนำเข้า) อยู่ด้านบน การคลิกปุ่มนั้นควรจะเปิดหน้าต่าง modal สำหรับการนำเข้าและการรีเซ็ตครับ

![Reset or Import action button on the System Emails admin page](/img/admin/system-emails-reset-import.png)

จากนั้น คุณสามารถสลับตัวเลือก Import Emails (นำเข้าอีเมล) เพื่อดูว่ามีอีเมลระบบใดบ้างที่พร้อมสำหรับการนำเข้า

<!-- Screenshot unavailable: Reset and Import modal with the Import Emails options expanded -->

#### การรีเซ็ต System Emails

บางครั้ง คุณอาจจะสังเกตเห็นว่าการเปลี่ยนแปลงที่คุณทำกับเทมเพลตอีเมลใดอีเมลหนึ่งนั้นใช้ไม่ได้ผลอีกต่อไป และคุณต้องการรีเซ็ตมันกลับไปเป็น **default state** (สถานะเริ่มต้น) ของมัน

ในกรณีเช่นนี้ คุณมีสองทางเลือก: คุณสามารถลบอีเมลระบบนั้นทิ้งแล้วนำเข้าใหม่ (ตามคำแนะนำข้างต้น) ซึ่งจะทำให้ข้อมูลการส่งและการวัดค่าอื่นๆ หายไป วิธีนี้จึงไม่ค่อยถูกแนะนำนัก

หรือคุณสามารถใช้ **Reset & Import tool** (เครื่องมือรีเซ็ตและนำเข้า) เพื่อรีเซ็ตเทมเพลตอีเมลนั้นได้

ในการรีเซ็ตเทมเพลตอีเมล คุณสามารถทำตามขั้นตอนข้างต้นจนกว่าจะไปถึง Reset & Import tool จากนั้น ให้สลับตัวเลือก **Reset** และเลือกอีเมลที่คุณต้องการรีเซ็ตกลับไปเป็นเนื้อหาเริ่มต้นของมันครับ

<!-- Screenshot unavailable: Reset and Import modal with the Reset Emails options expanded -->
