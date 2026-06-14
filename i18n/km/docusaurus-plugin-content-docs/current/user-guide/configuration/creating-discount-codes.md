---
title: ការបង្កើតលេខកូដបញ្ចុះតម្លៃ
sidebar_position: 19
_i18n_hash: d6adaf916f3e21b4fda2deeaa6672d00
---
# ការបង្កើត Discount Codes (v2)

_**ចំណាំសំខាន់៖ អត្ថបទនេះសំដៅលើ Ultimate Multisite version 2.x។**_

ជាមួយ Ultimate Multisite អ្នកអាចបង្កើត discount codes ដើម្បីផ្តល់ការបញ្ចុះតម្លៃដល់អតិថិជនរបស់អ្នកលើការជាវរបស់ពួកគេ។ ហើយការបង្កើតវាគឺងាយស្រួលណាស់!

## ការបង្កើត និងការកែសម្រួល Discount Codes

ដើម្បីបង្កើត ឬកែសម្រួល discount code សូមចូលទៅកាន់ **Ultimate Multisite > Discount Codes**។

![Discount codes list — empty state before any codes exist](/img/config/discount-codes-empty.png)

នៅទីនោះ អ្នកនឹងឃើញបញ្ជីនៃ discount codes ដែលអ្នកបានបង្កើតរួចហើយ។

អ្នកអាចចុចលើ **Add Discount Code** ដើម្បីបង្កើត coupon ថ្មី ឬអ្នកក៏អាចកែសម្រួលដែលមានស្រាប់ដោយការដាក់เមមិន (hover) ហើយចុច **Edit**។

![Discount codes list with hover actions showing Edit and Delete links](/img/config/discount-codes-list-hover.png)

![Add Discount Code button in the page header](/img/config/discount-codes-add-button.png)

អ្នកនឹងត្រូវបានបញ្ជូនទៅកាន់ទំព័រដែលអ្នកនឹងបង្កើត ឬកែសម្រួល coupon code របស់អ្នក។ ក្នុងឧទាហរណ៍នេះ យើងនឹងបង្កើតមួយថ្មី។

![Discount code edit page with all sections visible](/img/config/discount-code-edit.png)

សូមមើលការកំណត់ដែលមាននៅទីនេះ៖

**Enter Discount Code:** នេះគ្រាន់តែជាឈ្មោះ discount code របស់អ្នកប៉ុណ្ណោះ។ វាមិនមែនជាលេខកូដដែលអតិថិជនរបស់អ្នកនឹងត្រូវប្រើនៅលើទម្រង់ checkout នោះទេ។

**Description:** នៅទីនេះ អ្នកអាចពិពណ៌នាខ្លីៗបានថា coupon នេះសម្រាប់អ្វី។

![Discount code name and description fields at the top of the edit page](/img/config/discount-code-description.png)

អ្នកក៏អាចមើល discount code ជាស្ថានភាព active (កំពុងដំណើរការ) ឬ inactive (មិនដំណើរការ) បានដែរ៖

![Discount code active status](/img/config/discount-code-active.png)

**Coupon code:** នៅទីនេះគឺជាកន្លែងដែលអ្នកកំណត់លេខកូដដែលអតិថិជនរបស់អ្នកនឹងត្រូវបញ្ចូលក្នុងពេល checkout។

![Coupon code field where customers enter the code at checkout](/img/config/discount-code-coupon-field.png)

**ส่วนลด (Discount):** ตรงนี้ คุณสามารถตั้งค่าได้ว่าจะให้เป็น **เปอร์เซ็นต์ (%)** หรือ **จำนวนเงินคงที่** สำหรับโค้ดส่วนลดของคุณ

![Discount amount setting with percentage or fixed-amount dropdown](/img/config/discount-code-amount.png)

**ใช้กับใบต่ออายุ (Apply to renewals):** หากปิดตัวเลือกนี้ โค้ดส่วนลดนี้จะถูกนำไปใช้กับ **การชำระเงินครั้งแรกเท่านั้น** การชำระเงินอื่น ๆ จะไม่มีส่วนลดใด ๆ หากเปิดตัวเลือกนี้ โค้ดส่วนลดจะมีผลสำหรับทุกการชำระเงินในอนาคต

**ส่วนลดค่าธรรมเนียมการตั้งค่า (Setup fee discount):** หากปิดตัวเลือกนี้ โค้ดคูปองจะไม่ให้ส่วนลดสำหรับ **ค่าธรรมเนียมการตั้งค่า (setup fee)** ของคำสั่งซื้อ หากเปิดตัวเลือกนี้ คุณสามารถกำหนดส่วนลด (เป็นเปอร์เซ็นต์หรือจำนวนเงินคงที่) ที่โค้ดคูปองนี้จะใช้กับค่าธรรมเนียมการตั้งค่าของแผนของคุณได้

![Apply to renewals and setup fee discount toggle options](/img/config/discount-code-renewals.png)

**ใช้งานอยู่ (Active):** เปิดหรือปิดโค้ดส่วนลดนี้ด้วยตนเอง

![Active toggle to manually enable or disable the discount code](/img/config/discount-code-active.png)

ภายใต้ **ตัวเลือกขั้นสูง (Advanced Options)** เรามีการตั้งค่าดังต่อไปนี้:

![Discount code advanced options](/img/config/discount-code-advanced.png)

**จำกัดจำนวนการใช้งาน (Limit uses):**

  * **การใช้งาน (Uses):** ตรงนี้ คุณสามารถดูได้ว่าโค้ดส่วนลดถูกใช้ไปแล้วกี่ครั้ง

  * **จำนวนการใช้งานสูงสุด (Max uses):** สิ่งนี้จะจำกัดจำนวนครั้งที่ผู้ใช้สามารถใช้โค้ดส่วนลดนี้ได้ ตัวอย่างเช่น หากคุณใส่ 10 ที่นี่ คูปองนั้นจะสามารถใช้ได้เพียง 10 ครั้ง หลังจากถึงขีดจำกัดนี้ โค้ดส่วนลดจะไม่สามารถใช้งานได้อีกต่อไป

![Limit uses setting with current uses count and max uses field](/img/config/discount-code-limit-uses.png)

**កាលបរិច្ឆេទចាប់ផ្តើម និងផុតកំណត់:** នៅទីនេះ អ្នកនឹងមានជម្រើសក្នុងការបន្ថែមថ្ងៃចាប់ផ្តើម និង/ឬ ថ្ងៃផុតកំណត់សម្រាប់ប័ណ្ណបញ្ចុះតម្លៃ (coupon) របស់អ្នក។

![Start and expiration date fields for scheduling the discount code](/img/config/discount-code-dates.png)

**កំណត់ផលិតផល:** ប្រសិនបើអ្នកបើក **Select products** អ្នកនឹងឃើញផលិតផលទាំងអស់របស់អ្នក។ អ្នកនឹងមានជម្រើសក្នុងការជ្រើសរើសដោយដៃ (ដោយបិទ ឬបើក) ថាផលិតផលមួយណាអាចទទួលយកលេខកូដបញ្ចុះតម្លៃនេះ។ ផលិតផលដែលត្រូវបានបិទនៅទីនេះ នឹងមិនបង្ហាញការផ្លាស់ប្តូរណាមួយទេ ប្រសិនបើអតិថិជនរបស់អ្នកព្យាយាមប្រើលេខកូដបញ្ចុះតម្លៃនេះលើផលិតផលនោះទេ។

![Limit products section with per-product toggle switches](/img/config/discount-code-limit-products.png)

បន្ទាប់ពីបានកំណត់ជម្រើសទាំងអស់នេះហើយ សូមចុចលើ **Save Discount Code** ដើម្បីរក្សាទុកលេខកូដបញ្ចុះតម្លៃរបស់អ្នក ហើយរួចរាល់!

![Save Discount Code button at the bottom of the edit page](/img/config/discount-code-save.png)

ប័ណ្ណបញ្ចុះតម្លៃឥឡូវនេះស្ថិតនៅក្នុងបញ្ជីរបស់អ្នក ហើយពីទីនោះ អ្នកអាចចុចដើម្បី **edit ឬ delete** វាបាន។

![Discount code row in the list with Edit and Delete hover actions](/img/config/discount-codes-list-hover.png)

###

### ការប្រើប្រាស់ URL Parameters:

ប្រសិនបើអ្នកចង់កែសម្រួលតារាងតម្លៃរបស់អ្នក ឬបង្កើតទំព័រលេខកូដបញ្ចុះតម្លៃដ៏ស្រស់ស្អាតសម្រាប់គេហទំព័ររបស់អ្នក ហើយចង់អនុវត្តលេខកូដបញ្ចុះតម្លៃទៅក្នុងទម្រង់ checkout របស់អ្នកដោយស្វ័យប្រវត្តិ អ្នកអាចធ្វើបានតាមរយៈ URL parameters។

ទីមួយ អ្នកត្រូវទទួលបានតំណដែលអាចចែករំលែក (shareable link) សម្រាប់ផែនការរបស់អ្នក។ ដើម្បីធ្វើដូចនេះ សូមចូលទៅកាន់ **Ultimate Multisite > Products** ហើយជ្រើសរើសផែនការមួយ។

ចុចលើប៊ូតុង **Click to Copy Shareable Link**។ បន្ទាប់មក វាផ្ដល់តំណដែលអាចចែករំលែកសម្រាប់ផែនការជាក់លាក់នេះ។ ក្នុងករណីរបស់យើង តំណដែលអាចចែករំលែកដែលបានផ្តល់គឺ [_**mynetworkdomain.com/register/premium/**_](http://mynetworkdomain.com/register/premium/)។

![Product page with shareable link button](/img/config/products-list.png)

ដើម្បីប្រើប្រាស់លេខកូដបញ្ចុះតម្លៃរបស់អ្នកលើផែនការជាក់លាក់នេះ អ្នកគ្រាន់តែបន្ថែមប៉ារ៉ាម៉ែត្រ **?discount_code=XXX** ទៅក្នុង URL ប៉ុណ្ណោះ។ ដោយ **XXX** គឺជាលេខកូដបញ្ចុះតម្លៃរបស់អ្នក។

នៅក្នុងឧទាហរណ៍របស់យើងនេះ យើងនឹងយកលេខកូដបញ្ចុះតម្លៃ **50OFF** មកប្រើលើផលិតផលជាក់លាក់នេះ។

URL សម្រាប់ផែនការជាក់លាក់នេះ និងជាមួយនឹងលេខកូដបញ្ចុះតម្លៃ 50OFF ដែលបានអនុវត្តហើយ នឹងមើលទៅដូចជា៖ [_**mynetworkdomain.com/register/premium/**_](http://mynetworkdomain.com/register/premium/) _**?discount_code=50OFF**_។

###
