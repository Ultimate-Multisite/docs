---
title: ទម្រង់ការបញ្ជាទិញ
sidebar_position: 19
_i18n_hash: 54516280441cfe5e123ab19bdfbd91af
---
# ទម្រង់ការបិទទូទាត់ (Checkout Forms)

ទម្រង់ការបិទទូទាត់ គឺជាវិធីងាយស្រួល និងបត់បែនមួយដើម្បីសាកល្បងវិធីសាស្រ្តផ្សេងៗ នៅពេលដែលអ្នកព្យាយាមបំប្លែងអតិថិជនថ្មី។

Ultimate Multisite 2.0 មានកម្មវិធីកែសម្រួល Checkout Form ដែលអនុញ្ញាតឱ្យអ្នកបង្កើតទម្រង់បានច្រើនតាមចិត្ត ដោយមានវាល (fields) ប្រភេទផ្សេងៗ ផលិតផលដែលផ្តល់ជូន និងអ្វីៗជាដើម។

ដើម្បីចូលប្រើមុខងារនេះ សូមទៅកាន់ម៉ឺនុយ Checkout Forms នៅលើរបារចំហៀងខាងឆ្វេង។

![Checkout Forms list](/img/config/checkout-forms-list.png)

នៅលើទំព័រនេះ អ្នកអាចមើលឃើញទម្រង់ការបិទទូទាត់ទាំងអស់ដែលអ្នកមាន។

តារាងបញ្ជីរួមបញ្ចូលនូវជួរឈរ **Status** (ស្ថានភាព) ដើម្បីឱ្យអ្នកអាចផ្ទៀងផ្ទាត់បានថា តើទម្រង់នីមួយៗអាចប្រើប្រាស់សម្រាប់អតិថិជនបានឬនៅ៖

| Status | អត្ថន័យ |
|---|---|
| **Active** (សកម្ម) | ទម្រង់នេះអាចប្រើបានគ្រប់ទីកន្លែងដែលអ្នកបានបោះពុម្ព shortcode ឬ trang ចុះឈ្មោះរបស់វា។ |
| **Inactive** (មិនសកម្ម) | ទម្រង់ត្រូវបានរក្សាទុក ប៉ុន្តែត្រូវបានបិទដំណើរការ។ អតិថិជនមិនអាចបញ្ចប់ការបិទទូទាត់ជាមួយវាបានទេ រហូតទាល់តែអ្នកបើកវាឡើងវិញ។ |

សូមប្រើជួរឈរ status នេះមុនពេលកែសម្រួលលំហូរការចុះឈ្មោះសាធារណៈ ជាពិសេសនៅពេលដែលអ្នករក្សាទុកទម្រង់បោះពុម្ព (draft) ឬទម្រង់បិទទូទាត់តាមរដូវកាល រួមជាមួយទម្រង់ដែលកំពុងដំណើរការ។

ប្រសិនបើអ្នកចង់បង្កើតថ្មី សូមចុច Add Checkout Form នៅផ្នែកខាងលើនៃទំព័រ។

អ្នកអាចជ្រើសរើសជម្រើសទាំងបីនេះជាចំណុចចាប់ផ្តើមរបស់អ្នក៖ single step (មួយជំហាន), multi-step (ច្រើនជំហាន) ឬ blank (ទទេ)។ បន្ទាប់មក ចុចដើម្បីទៅកាន់ Editor។

នៅពេលអ្នកជ្រើសរើស **single step** ឬ **multi-step** ជាចំណុចចាប់ផ្តើម ទម្រង់គំរូឥឡូវនេះរួមបញ្ចូលវាល **Template Selection** (ការជ្រើសរើសទម្រង់) ដោយស្វ័យប្រវត្តិ។ វាលនេះអនុញ្ញាតឱ្យអតិថិជនរបស់អ្នកជ្រើសរើស template នៃគេហទំព័រក្នុងអំឡុងពេលដំណើរការចុះឈ្មោះ។ អ្នកអាចទុកវាចោល ដកវាចេញ ឬដាក់វាឡើងវិញដូចវាលផ្សេងទៀតនៅក្នុង editor ដែរ។

![Checkout Form editor](/img/config/checkout-form-editor.png)

អ្នកក៏អាចកែសម្រួល ឬចម្លងទម្រង់ដែលអ្នកមានរួចហើយបាន ដោយចុចលើជម្រើសខាងក្រោមឈ្មោះរបស់វា។ នៅទីនោះ អ្នកនឹងឃើញជម្រើសសម្រាប់ចម្លង shortcode នៃទម្រង់ ឬលុបទម្រង់នោះ។

![Checkout form hover actions](/img/config/checkout-form-hover-actions.png)

#### ទិដ្ឋភាពទូទៅនៃ Checkout Form Editor

កម្មវិធីកែសម្រួល checkout form ផ្តល់នូវចំណុចប្រទាក់ដ៏ពេញលេញសម្រាប់ការបង្កើត registration forms របស់អ្នក។ នេះគឺជាទិដ្ឋភាពទូទៅនៃការរៀបចំ layout នៃ editor៖

![Checkout Form editor overview](/img/config/checkout-form-editor-overview.png)

### ការកែសម្រួល Checkout Form

អ្នកអាចបង្កើត checkout forms សម្រាប់គោលបំណងផ្សេងៗគ្នា។ ក្នុងឧទាហរណ៍នេះ យើងនឹងធ្វើការលើ registration form។

បន្ទាប់ពីចូលទៅកាន់ checkout form editor សូមដាក់ឈ្មោះ (ដែលនឹងត្រូវបានប្រើសម្រាប់ការយោងផ្ទៃក្នុងតែប៉ុណ្ណោះ) និង slug (ដែលប្រើដើម្បីបង្កើត shortcakes ជាដើម) ដល់ form របស់អ្នក។

![Checkout Form editor](/img/config/checkout-form-editor.png)

Forms ត្រូវបានបង្កើតឡើងពីជំហាន (steps) និងវាល (fields)។ អ្នកអាចបន្ថែមជំហានថ្មីដោយចុចលើ Add New Checkout Step។

![Add New Checkout Step](/img/config/checkout-form-add-step.png)

នៅលើแท็บទីមួយនៃ modal window សូមបំពេញខ្លឹមសារនៃជំហានរបស់ form របស់អ្នក។ ផ្តល់ ID, name និង description ដល់វា។ អង្គភាពទាំងនេះភាគច្រើនត្រូវបានប្រើសម្រាប់ផ្ទៃក្នុងប៉ុណ្ណោះ។

![Checkout form step content tab](/img/config/checkout-form-step-content.png)

បន្ទាប់មក កំណត់ការមើលឃើញ (visibility) នៃជំហាននោះ។ អ្នកអាចជ្រើសរើសរវាង "Always show" (បង្ហាញជានិច្ច), "Only show for logged in users" (បង្ហាញសម្រាប់អ្នកដែលបានចូលគណនីរួចហើយតែប៉ុណ្ណោះ) ឬ "Only show for guests" (បង្ហាញសម្រាប់ភ្ញៀវតែប៉ុណ្ណោះ)។

![Checkout form step visibility tab](/img/config/checkout-form-step-visibility.png)

ជាចុងក្រោយ កំណត់រចនាបថ (style) នៃជំហាននោះ។ អ្វីទាំងនេះគឺជាវាលដែលមិនចាំបាច់ (optional fields)។

![Checkout form step style tab](/img/config/checkout-form-step-style.png)

ឥឡូវនេះដល់ពេលបន្ថែមវាលទៅក្នុងជំហានទីមួយរបស់យើងហើយ។ គ្រាន់តែចុច Add New Field ហើយជ្រើសរើសប្រភេទផ្នែក (section type) ដែលអ្នកចង់បាន។

![Checkout form step with fields](/img/config/checkout-form-step-with-fields.png)

តារាងនីមួយៗមានប៉ារ៉ាម៉ែត្រខុសៗគ្នាដែលត្រូវបំពេញ។ សម្រាប់ការចូលប្រើដំបូងនេះ យើងនឹងជ្រើសរើសវាល "Username" (ឈ្មោះអ្នកប្រើប្រាស់)។

![Field type selection dropdown](/img/config/checkout-form-field-type-dropdown.png)

![Username field content settings](/img/config/checkout-form-username-content.png)

![Username field visibility settings](/img/config/checkout-form-username-visibility.png)

![Username field style settings](/img/config/checkout-form-username-style.png)

អ្នកអាចបន្ថែមជំហាន និងវាលបានច្រើនតាមតម្រូវការរបស់អ្នក។ ដើម្បីបង្ហាញផលិតផលរបស់អ្នកឱ្យអតិថិជនជ្រើសរើសមួយ សូមប្រើវាល Pricing Table (តារាងតម្លៃ)។ ប្រសិនបើអ្នកចង់ឱ្យអតិថិជនជ្រើសរើស قالب (template) អ្នកអាចបន្ថែមវាល Template Selection (ការជ្រើសរើស قالب)។ ហើយដូច្នេះទៅទៀត។

![Add New Field dialog](/img/config/checkout-form-add-field-dialog.png)

_**ចំណាំ:** username, email, password, site title, site URL, order summary, payment, និង submit button គឺជាវាលដែលត្រូវតែបំពេញដើម្បីបង្កើត checkout form។_

ខណៈពេលអ្នកកំពុងធ្វើការលើ checkout form របស់អ្នក អ្នកអាចប្រើปุ่ม Preview (មើលជាមុន) ដើម្បីមើលថាតើអតិថិជននឹងឃើញទម្រង់បែបបទដូចម្តេច។ អ្នកក៏អាចប្តូររវាងការមើលជាអ្នកប្រើប្រាស់ដែលមានស្រាប់ ឬអ្នកចូលមើលបានដែរ។

![Checkout Form preview button](/img/config/checkout-form-preview-button.png)

![Checkout Form preview modal](/img/config/checkout-form-preview-modal.png)

ចុងក្រោយ នៅលើ Advanced Options (ជម្រើសកម្រិតខ្ពស់) អ្នកអាចកំណត់សារសម្រាប់ទំព័រ "Thank You" (អរគុណ) បន្ថែមបំណែកកូដដើម្បីតាមដានការផ្លាស់ប្តូរ (conversions) បន្ថែម CSS ផ្ទាល់ខ្លួនទៅក្នុង checkout form របស់អ្នក ឬរឹតបន្តឹងវាសម្រាប់ប្រទេសជាក់លាក់មួយចំនួន។

![Advanced Options](/img/config/checkout-form-advanced.png)

អ្នកក៏អាចបើកឬបិទ checkout form របស់អ្នកដោយដៃតាមរយៈការប្តូរជម្រើសនេះនៅបង្អួចខាងស្តាំ ឬលុបវាចេញជាអចិន្ត្រៃយ៍។

![Active toggle](/img/config/checkout-form-active.png)

ដើម្បីលុបទម្រង់ (form) សូមចុចជម្រើសលុប (delete option) នៅក្នុងការកំណត់សកម្មភាពទម្រង់ (form actions):

![Checkout form delete option](/img/config/checkout-form-delete.png)

កុំភ្លេចរក្សាទុកទម្រង់ Checkout របស់អ្នក!

![Save button](/img/config/checkout-form-save.png)

ដើម្បីទទួលបាន shortcode នៃទម្រង់របស់អ្នក សូមចុចលើ Generate Shortcode ហើយចម្លងលទ្ធផលដែលបង្ហាញនៅក្នុង modal window។

![Save button with shortcode](/img/config/checkout-form-save.png)

### ប្រអប់ Pricing Table (តារាងតម្លៃ)

ប្រអប់ **Pricing Table** នឹងបង្ហាញផលិតផលរបស់អ្នកនៅលើទម្រង់ checkout ដើម្បីឱ្យអតិថិជនអាចជ្រើសរើសផែនការបាន។ នៅពេលអ្នកកែសម្រួលវា អ្នកអាចកំណត់ជម្រើសជាច្រើន៖

![Pricing Table field settings](/img/config/pricing-table-field-settings.png)

នេះគឺជារបៀបដែលតារាងតម្លៃបង្ហាញនៅលើទម្រង់ចុះឈ្មោះផ្នែកខាងមុខ (frontend registration form)៖

![Frontend checkout pricing table](/img/config/frontend-checkout-pricing-table.png)

  * **Products**: ជ្រើសរើសផលិតផលណាដែលត្រូវបង្ហាញ និងលំដាប់នៃការបង្ហាញរបស់វា។
  * **Force Different Durations**: នៅពេលបើកដំណើរការ (enabled) ផលិតផលទាំងអស់នឹងត្រូវបានបង្ហាញដោយមិនគិតថាពួកវាមានតម្លៃខុសគ្នាសម្រាប់រយៈពេលបង់ប្រាក់ដែលបានជ្រើសរើសនោះទេ។ នៅពេលបិទ (disabled - ជាលំនាំដើម) ផលិតផលដែលគ្មានភាពខុសគ្នានៃរយៈពេលសម្រាប់រយៈពេលដែលបានជ្រើសរើសនឹងត្រូវបានលាក់។
    ![Pricing table force durations option](/img/config/pricing-table-force-durations.png)
  * **Hide when Pre-Selected**: លាក់តារាងតម្លៃនៅពេលដែលផែនការមួយត្រូវបានជ្រើសរើសរួចហើយតាមរយៈ URL (ឧទាហរណ៍ `/register/premium`)។
  * **Pricing Table Template**: ជ្រើសរើស قالبរូបភាពសម្រាប់ Pricing Table (Simple List, Legacy, ជាដើម)។

ប្រសិនបើអ្នកបន្ថែមផលិតផលទៅក្នុង Pricing Table មុនពេលទម្រង់មានវាលដែលត្រូវការដើម្បីបញ្ចប់ដំណើរការ checkout របស់ផលិតផលនោះ អ្នកកែសម្រួលនឹងបង្ហាញការព្រមាន។ សូមប្រើការព្រមាននោះដើម្បីបន្ថែមវាលដែលត្រូវគ្នាដែលខ្វះខាត មុនពេលបោះពុម្ពផ្សាយ ឬរក្សាទុកការផ្លាស់ប្តូរសម្រាប់ទម្រង់ចុះឈ្មោះផ្ទាល់។

### ការបន្ថែមប៊ូតុងជ្រើសរើសរយៈពេល

ប្រសិនបើអ្នកបានកំណត់ [Price Variations](creating-your-first-subscription-product#price-variations) នៅលើផលិតផលរបស់អ្នក (ឧទាហរណ៍ តម្លៃប្រចាំខែ និងប្រចាំឆ្នាំ) អ្នកអាចបន្ថែមវាល **Period Selection** ទៅក្នុងទម្រង់ checkout របស់អ្នក។ វាបង្ហាញប៊ូតុងប្ដូរដែលអនុញ្ញាតឱ្យអតិថិជនផ្លាស់ប្តូររវាងរយៈពេលបង់ប្រាក់ ហើយតារាងតម្លៃនឹងធ្វើបច្ចុប្បន្នភាពដោយស្វ័យប្រវត្តិភ្លាមៗ។

#### ជំហានទី ១៖ កំណត់ Price Variations នៅលើផលិតផលរបស់អ្នក

មុនពេលបន្ថែមវាល Period Selection សូមប្រាកដថាផលិតផលរបស់អ្នកមានការកំណត់ Price variations រួចហើយ។ ចូលទៅកាន់ **Ultimate Multisite > Products** បង្កើតផលិតផលមួយ ចុចកែសម្រួល ហើយចូលទៅកាន់ផ្ទាំង **Price Variations** ដើម្បីបន្ថែមរយៈពេលបង់ប្រាក់ផ្សេងៗ (ឧទាហរណ៍ ប្រចាំឆ្នាំក្នុងតម្លៃបញ្ចុះ)។

![Price Variations tab on a product](/img/config/product-price-variations-tab.png)

#### ជំហានទី ២៖ បន្ថែមវាល Period Selection ទៅក្នុង Checkout Form របស់អ្នក

1. ចូលទៅកាន់ **Ultimate Multisite > Checkout Forms** ហើយកែសម្រួល checkout form របស់អ្នក។

2. រំលងចុះមកដល់ជំហានដែលមានវាល **Pricing Table** របស់អ្នក ហើយចុចលើ **Add new Field** (បន្ថែមវាលថ្មី)។

3. នៅក្នុងប្រអប់ជ្រើសរើសប្រភេទវាល សូមចុចលើ **Period Select**។

![Add New Field dialog showing Period Select](/img/config/checkout-form-add-field-dialog.png)

4. កំណត់ជម្រើសរយៈពេល។ រាល់ជម្រើសមួយត្រូវមាន៖
   * **Duration**: ចំនួន (ឧទាហរណ៍ `1`)
   * **Duration unit**: ប្រភេទនៃរយៈពេល (ថ្ងៃ, សប្តាហ៍, ខែ ឬឆ្នាំ)
   * **Label**: អត្ថបទដែលអតិថិជននឹងឃើញ (ឧទាហរណ៍ "Monthly", "Annual")

5. ចុចលើ **+ Add Option** ដើម្បីបន្ថែមជម្រើសរយៈពេលច្រើនទៀត។ ជម្រើសទាំងនេះត្រូវតែផ្គូផ្គងនឹង Price variations ដែលអ្នកបានកំណត់នៅលើផលិតផលរបស់អ្នក។

![Period Selection field settings](/img/config/period-selection-field-settings.png)

6. ជ្រើសរើស **Period Selector Template** (Clean គឺជាលំនាំដើម ដែលបង្ហាញពីឧបករណ៍ជ្រើសរើសដ៏សាមញ្ញដែលត្រៀមរួចសម្រាប់ CSS tùy chỉnh)។

7. ចុចលើ **Save Field**។

#### ជំហានទី 3៖ កំណត់ទីតាំងវាឱ្យនៅពីលើតារាងតម្លៃ (Pricing Table)

ដើម្បីទទួលបានបទពិសោធន៍អ្នកប្រើប្រាស់ល្អបំផុត សូមប្រាកដថាវាល Period Selection បង្ហាញ **មុន** វាល Pricing Table នៅក្នុងជំហាន checkout របស់អ្នក។ អ្នកអាចអូសវាលទៅរៀបចំលំដាប់ឡើងវិញនៅក្នុង checkout form editor។ តាមរបៀបនេះ អតិថិជននឹងជ្រើសរើសរយៈពេលបង់ប្រាក់ជាមុន ហើយបន្ទាប់មកមើលតម្លៃសម្រាប់រយៈពេលនោះ។

![Checkout form editor showing field order](/img/config/checkout-form-editor-with-fields.png)

#### វាដំណើរការយ៉ាងដូចម្តេចនៅលើ Frontend

នៅពេលកំណត់រួច អតិថិជនដែលចូលទៅកាន់ទំព័រចុះឈ្មោះរបស់អ្នកនឹងឃើញឧបករណ៍ជ្រើសរើសរយៈពេលនៅពីលើតារាងតម្លៃ។ នៅពេលពួកគេចុចលើរយៈពេលបង់ប្រាក់ផ្សេងទៀត៖

  * តារាងតម្លៃនឹងធ្វើបច្ចុប្បន្នភាពភ្លាមៗដើម្បីបង្ហាញតម្លៃសម្រាប់រយៈពេលដែលបានជ្រើសរើស (មិនចាំបាច់ផ្ទុកទំព័រឡើងវិញទេ)។
  * ប្រសិនបើ **Force Different Durations** ត្រូវបានបិទនៅលើវាល Pricing Table ផលិតផលដែលគ្មានការប្រែប្រួលតម្លៃសម្រាប់រយៈពេលដែលបានជ្រើសរើសនឹងត្រូវលាក់បាំង។
  * ប្រសិនបើ **Force Different Durations** ត្រូវបានបើក ផលិតផលទាំងអស់នៅតែអាចមើលឃើញ ទោះបីជាពួកវាមិនមានការប្រែប្រួលសម្រាប់រយៈពេលដែលបានជ្រើសរើសក៏ដោយ (ពួកវាបង្ហាញតម្លៃលំនាំដើមរបស់វា)។

#### ការជ្រើសរើសរយៈពេលបង់ប្រាក់ជាមុនតាមរយៈ URL

អ្នកក៏អាចជ្រើសរើសផលិតផល និងរយៈពេលបង់ប្រាក់ជាមុនតាមរយៈ URL ផងដែរ។ Ultimate Multisite គាំទ្រรูปแบบ URL ទាំងនេះ៖

  * `/register/premium` — ជ្រើសរើសតែផលិតផល "Premium" ប៉ុណ្ណោះ
  * `/register/premium/12` — ជ្រើសរើសផលិតផល និងរយៈពេល ១២ ខែ
  * `/register/premium/1/year` — ជ្រើសរើសផលិតផលដែលមានរយៈពេល ១ ឆ្នាំ

### វាល Template Selection (ការជ្រើសរើស قالب)

វាល **Template Selection** អនុញ្ញាតឱ្យអតិថិជនជ្រើសរើស template សម្រាប់គេហទំព័រក្នុងពេល checkout។ វាត្រូវបានបញ្ចូលដោយស្វ័យប្រវត្តិនៅក្នុង template checkout form ដែលមានជំហានតែមួយ (**single step**) និងច្រើនជំហាន (**multi-step**) ដែលបានបន្ថែមនៅក្នុង Ultimate Multisite v2.6.1។

#### ការបន្ថែមវាលដោយដៃ

ប្រសិនបើអ្នកកំពុងធ្វើការជាមួយ form ដែលត្រូវបានបង្កើតឡើងមុន v2.6.1 ឬចាប់ផ្តើមពី template ថ្មី:

១. ចូលទៅកាន់ **Ultimate Multisite > Checkout Forms** ហើយកែសម្រួល checkout form របស់អ្នក។
២. នៅជំហានដែលប្រមូលព័ត៌មានលម្អិតអំពីគេហទំព័រ សូមចុចលើ **Add new Field** (បន្ថែមវាលថ្មី)។
៣. ជ្រើសរើស **Template Selection** (ការជ្រើសរើស template) ពីប្រអប់ជម្រើសប្រភេទវាល (field type dialog)។
៤. កំណត់ការកំណត់នៃវាល៖
   - **Label** — ចំណងជើងដែលអតិថិជនមើលឃើញនៅខាងលើបណ្តុំ template (ឧទាហរណ៍ "ជ្រើសរើស template គេហទំព័រ")។
   - **Required** — តើអតិថិជនត្រូវតែជ្រើសរើស template មុននឹងបន្តដំណើរការឬយ៉ាងណា។

#### វាដំណើរការដូចម្តេច

នៅពេលដែលអតិថិជនជ្រើសរើស template ក្នុងអំឡុងពេល checkout, Ultimate Multisite នឹងប្រើវាដើម្បីបង្កើត (provision) គេហទំព័រថ្មីរបស់ពួកគេ។ Template ដែលបង្ហាញមកនេះគឺមកពីបញ្ជី **Site Templates** (Ultimate Multisite > Site Templates) របស់អ្នក។ មានតែ template ដែលត្រូវបានសម្គាល់ថាអាចប្រើបានសម្រាប់អតិថិជនប៉ុណ្ណោះដែលនឹងលេចឡើងនៅទីនេះ។

### checkout-form base domains

Ultimate Multisite v2.13.0 ព្យាបាល domain ដែលកំណត់នៅក្នុងវាល **Site URL** នៃ checkout form ជា network base domains (ដែនមូលដ្ឋានបណ្តាញ)។ សូមប្រើការកំណត់ available-domain របស់វាលនៅពេលដែលអ្នកចង់ឱ្យអតិថិជនបង្កើតគេហទំព័រក្រោម shared registration domains (ដែនចុះឈ្មោះរួម) មួយ ឬច្រើន ដូចជា `example.com` និង `sites.example.com`។

Shared checkout-form base domains មិនត្រូវបានចាត់ទុកថាជាការបំប្លែង custom domain សម្រាប់ per-site mapping ទេ។ នៅពេលដែលអតិថិជនបង្កើតគេហទំព័ររង (subdirectory site) នៅលើ base ណាមួយក្នុងចំណោមនោះ، Ultimate Multisite នឹងមិនបង្កើតកំណត់ត្រា mapped-domain ដែលធ្វើឱ្យ host រួមប្រើ (shared host) ជាកម្មសិទ្ធិរបស់គេហទំព័រតែមួយនោះទេ។ Host រួមនៅតែអាចប្រើបានសម្រាប់គេហទំព័របងប្អូនដែលប្រើ base checkout form ដូចគ្នា។

រក្សា custom domains ទុកសម្រាប់ hosts ដែលត្រូវបាន map ទៅតាមអតិថិជននីមួយៗ ដូចជា `customer-example.com`។ រក្សា checkout-form base domains ទុកសម្រាប់ hosts ចុះឈ្មោះរួមដែលគេហទំព័រជាច្រើនអាចប្រើបាន។

#### ការលុបវាលចេញ

ប្រសិនបើអ្នកមិនផ្តល់នូវ قالبគេហទំព័រទេ សូមលុបវាចេញពីទម្រង់របស់អ្នក។ អតិថិជននឹងទទួលបាន قالبលំនាំដើមណាមួយដែលបានកំណត់ក្រោម **Ultimate Multisite > Settings > Site Templates**។
