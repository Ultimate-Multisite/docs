---
title: ការរៀបចំ PayPal
sidebar_position: 10
_i18n_hash: 894ca1f2ca4ca589f3ef49c131e330d5
---
# ការตั้งค่า PayPal Gateway (v2) {#setting-up-the-paypal-gateway-v2}

_**ចំណាំសំខាន់៖ អត្ថបទនេះសំដៅលើ Ultimate Multisite version 2.x។**_

អ្នកអាចបើកវិធីសាស្រ្តបង់ប្រាក់បានរហូតដល់បួនវិធីនៅលើទំព័រការកំណត់នៃការបង់ប្រាក់របស់យើង៖ Stripe, Stripe Checkout, PayPal និង Manual (ដោយដៃ)។ នៅក្នុងអត្ថបទនេះ យើងនឹងបង្ហាញពីរបៀបភ្ជាប់ជាមួយ **PayPal**។

ដូចជា Stripe ដែរ PayPal ត្រូវបានប្រើយ៉ាងទូលំទូលាយសម្រាប់ការបង់ប្រាក់តាមអ៊ីនធឺណិត ជាពិសេសនៅលើគេហទំព័រ WordPress។ អត្ថបទនេះនឹងណែនាំអ្នកអំពីរបៀបប្រើ PayPal ជាវិធីសាស្រ្តបង់ប្រាក់ដែលមាននៅក្នុងបណ្តាញរបស់អ្នក។

សូមចំណាំថា អ្នកត្រូវមាន **PayPal Business account** ដើម្បីទទួលបាន API credential ដែលចាំបាច់សម្រាប់ការរួមបញ្ចូលនេះ។

## ការបើកដំណើរការ PayPal នៅលើបណ្តាញរបស់អ្នក {#enabling-paypal-on-your-network}

ដើម្បីបើកដំណើរការ PayPal ជាវិធីសាស្រ្តបង់ប្រាក់ដែលអាចប្រើបាននៅលើបណ្តាញរបស់អ្នក សូមចូលទៅកាន់ **Ultimate Multisite > Settings > Payments** tab ហើយធីកប្រអប់នៅជាប់នឹង PayPal។

![Enabling PayPal in active payment gateways](/img/config/settings-payment-gateways.png)

## ការប្រើប្រាស់កម្មវិធីជួយដំឡើង (guided setup wizard) {#using-the-guided-setup-wizard}

Ultimate Multisite 2.10.0 បានបន្ថែមកម្មវិធីជួយដំឡើង PayPal ដែលមាននៅក្នុងការកំណត់ Payment gateway។ បន្ទាប់ពីអ្នកបើកដំណើរការ PayPal រួច សូមប្រើកម្មវិធីជួយដំឡើងនៅលើ **Ultimate Multisite > Settings > Payments** ដើម្បីជ្រើសរើសរបៀបដែលអ្នកចង់ភ្ជាប់ gateway និងបញ្ជាក់ថាព័ត៌មានណាខ្លះដែលនៅតែត្រូវការមុនពេលរក្សាទុក។

កម្មវិធីជួយដំឡើងនេះគាំទ្រផ្លូវនៃការកំណត់ពីរ៖

* **ការបញ្ចូលព័ត៌មានសម្ងាត់ដោយដៃ (Manual credential entry)**: ប្រើផ្លូវនេះនៅពេលអ្នកមានព័ត៌មាន API credentials របស់ PayPal រួចហើយ, នៅពេលដែលមិនមានការตั้งค่า OAuth សម្រាប់គណនីរបស់អ្នក, ឬនៅពេលដែលអ្នកចូលចិត្តចម្លងព័ត៌មានសម្ងាត់ពី PayPal ដោយខ្លួនឯង។ សូមបញ្ចូល API Username, API Password, និង API Signature ទៅក្នុងវាល PayPal បន្ទាប់មករក្សាទុកការកំណត់នៃការទូទាត់។
* **ច្រករបាំងការភ្ជាប់ OAuth (OAuth connection gate)**: ប្រើផ្លូវនេះតែនៅពេលដែលជម្រើស OAuth មាននៅក្នុងការដំឡើងរបស់អ្នក ហើយត្រូវបានបើកដំណើរការ។ wizard នឹងបង្ហាញពីលំហូរ OAuth ដែលស្ថិតនៅពីក្រោយ feature flag, ដូច្នេះបណ្តាញដែលគ្មាន flag នោះនៅតែអាចប្រើវាលបញ្ចូលព័ត៌មានសម្ងាត់ដោយដៃបាន។

ប្រសិនបើអ្នកមិនឃើញជម្រើស OAuth នៅក្នុង wizard សូមបំពេញដំណើរការការបញ្ចូលព័ត៌មានសម្ងាត់ដោយដៃខាងក្រោម។ gateway នេះដំណើរការជាមួយ API credentials របស់ PayPal Business ដូចកំណែ Ultimate Multisite 2.x កន្លងមកដែរ។

## ការទទួលបាន API credentials របស់ PayPal {#getting-the-paypal-api-credentials}

នៅពេលដែលអ្នកបានបើកដំណើរការ PayPal ជា payment gateway អ្នកនឹងត្រូវបំពេញវាលសម្រាប់ **Username** របស់ PayPal API, **Password** របស់ PayPal API និង **Signature** របស់ PayPal API។

អ្នកអាចទទួលបានព័ត៌មាននេះដោយចូលទៅក្នុងគណនី [Live](https://www.paypal.com/home) ឬ [Sandbox](https://www.sandbox.paypal.com/home) របស់អ្នក។

(សូមចងចាំថា អ្នកអាចប្រើ **sandbox mode** ដើម្បីសាកល្បងការទូទាត់ និងមើលថាតើ gateway ត្រូវបានตั้งค่าត្រឹមត្រូវឬអត់។ គ្រាន់តែបិទបើកផ្នែកដែលពាក់ព័ន្ធប៉ុណ្ណោះ)

![PayPal API credentials fields and sandbox mode toggle](/img/config/settings-payment-gateways.png)

ដើម្បីស្នើសុំ API Signature ឬ Certificate credentials សម្រាប់គណនី PayPal របស់អ្នក៖

  1. ចូលទៅកាន់ [Account Settings](https://www.paypal.com/businessmanage/account/accountAccess) របស់អ្នក។

  2. នៅក្នុងផ្នែក **API access**, ចុចលើ **Update**។
![PayPal Account Settings with API access section](/img/config/settings-payment-gateways.png)

៣. ภายใต้ **NVP/SOAP API integration (Classic)** ให้คลิกที่ **Manage API credentials**។
![PayPal NVP/SOAP API integration Manage API credentials](/img/config/settings-payment-gateways.png)

     * หากคุณได้สร้าง API Signature หรือ Certificate ไว้แล้ว คุณจะถูกนำไปยังหน้าซึ่งคุณสามารถค้นหาข้อมูลรับรอง (credentials) ของคุณได้ที่นั่น

     * _**หมายเหตุ:** หากระบบแจ้งให้คุณยืนยันบัญชี PayPal ให้ทำตามคำแนะนำบนหน้าจอ_

  ៤. เลือกตัวเลือกใดตัวเลือกหนึ่งต่อไปนี้ จากนั้นคลิก **Agree and Submit** (ตกลงและส่ง)

     * **Request API Signature** – เลือกสำหรับการยืนยันตัวตนด้วย API Signature
     * **Request API Certificate** – เลือกสำหรับการยืนยันตัวตนด้วย API Certificate

  ๕. PayPal จะสร้างข้อมูลรับรอง API ของคุณดังนี้:
![PayPal generated API credentials](/img/config/settings-payment-gateways.png)

     * ข้อมูลรับรอง **API Signature credentials** ประกอบด้วย API Username, API Password และ Signature ซึ่งไม่มีวันหมดอายุ ค่าเหล่านี้จะถูกซ่อนไว้โดยค่าเริ่มต้นเพื่อความปลอดภัยเพิ่มเติม ให้คลิกที่ **Show/Hide** เพื่อเปิดหรือปิดการแสดงผล เมื่อเสร็จแล้ว ให้คลิก **Done** (เสร็จสิ้น)

     * ข้อมูลรับรอง **API Certificate credentials** ประกอบด้วย API Username, API Password และ Certificate ซึ่งจะหมดอายุโดยอัตโนมัติหลังจากสามปี ให้คลิกที่ **Download Certificate** (ดาวน์โหลดใบรับรอง) เพื่อบันทึก API Certificate ลงในเดสก์ท็อปของคุณ

แค่นั้นก็เสร็จสิ้นแล้ว การเชื่อมต่อการชำระเงิน PayPal ของคุณสมบูรณ์แล้ว!

หากคุณมีคำถามเกี่ยวกับตั้งค่า PayPal คุณสามารถดูได้ที่ [Help Center](https://www.paypal.com/br/smarthelp/home) ของ PayPal
