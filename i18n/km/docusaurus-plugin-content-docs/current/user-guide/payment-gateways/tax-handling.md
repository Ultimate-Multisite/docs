---
title: ការគ្រប់គ្រងពន្ធ
sidebar_position: 4
_i18n_hash: a331943b7d5764cc5f2277c08595b235
---
# ការគ្រប់គ្រងពន្ធ (Tax Handling)

Ultimate Multisite មាន module សម្រាប់ប្រមូលពន្ធភ្ជាប់មកជាមួយ plugin របស់យើងរួចហើយ។ ដូច្នេះ ប្រសិនបើអ្នកត្រូវការប្រមូលពន្ធលើការលក់សម្រាប់ plan, package និង service របស់អ្នក អ្នកអាចធ្វើវាបានយ៉ាងងាយស្រួលដោយមិនចាំបាច់ដំឡើង add-ons ណាមួយឡើយ។

សម្រាប់ក្រុមហ៊ុនដែលស្ថិតនៅក្នុងអឺរ៉ុប យើងមាន **add-on** ដែលបន្ថែមឧបករណ៍ និងមុខងារដើម្បីជួយ **គាំទ្រការអនុលោមតាម VAT** បានកាន់តែប្រសើរ។

Ultimate Multisite មិនបានដាក់ពន្ធ ឬបញ្ជូនពន្ធទៅរដ្ឋាភិបាលជំនួសអ្នកទេ យើងគ្រាន់តែជួយអ្នកប្រមូលពន្ធដែលសមស្របនៅពេលមានប្រតិបត្តិការប៉ុណ្ណោះ។ **អ្នកនៅតែត្រូវបង់ពន្ធដោយខ្លួនឯង។**

## ការបើកដំណើរការការប្រមូលពន្ធ (Enabling Tax Collection)

ការប្រមូលពន្ធមិនត្រូវបានបើកដំណើរការជាលំនាំដើមទេ។ ដើម្បីបើកវា អ្នកត្រូវចូលទៅកាន់ **Ultimate Multisite > Settings > Taxes** ហើយប្ដូរ toggle ទៅបើកការកំណត់ Enable Taxes។

![Enable Taxes toggle at the top of the Tax settings page](/img/config/settings-taxes-enable.png)

នេះគឺជាទិដ្ឋភាពពេញលេញនៃទំព័រការកំណត់ពន្ធ៖

![Tax settings full page](/img/config/settings-taxes-full.png)

អ្នកក៏អាចមើលការកំណត់ពន្ធសម្រាប់ផលិតផលនីមួយៗបានដែរ៖

![Tax settings for products](/img/config/settings-taxes.png)

### ពន្ធមិនរាប់បញ្ចូល vs. ពន្ធរាប់បញ្ចូល (Tax excluded vs. Tax included)

ជាលំនាំដើម តម្លៃផលិតផលទាំងអស់របស់អ្នកគឺមិនរាប់បញ្ចូលពន្ធទេ មានន័យថាពន្ធ **មិនត្រូវបានបញ្ចូល** នៅក្នុងតម្លៃផលិតផលនោះទេ។ ប្រសិនបើប្រព័ន្ធរបស់យើងកំណត់ថាអតិថិជនគួរតែបង់ពន្ធលើការទិញជាក់លាក់មួយ យើងនឹងបន្ថែមពន្ធ **បន្ថែមពីលើ** ចំនួនទឹកប្រាក់ក្រោម (subtotal)។

ប្រសិនបើអ្នកចង់ឱ្យពន្ធត្រូវបានបញ្ចូលនៅក្នុងតម្លៃផលិតផលរបស់អ្នក អ្នកអាចធ្វើបានដោយបើកដំណើរការការកំណត់ **Inclusive Tax**។

![Inclusive Tax toggle row below the Enable Taxes setting](/img/config/settings-taxes-inclusive.png)

កុំភ្លេច **រក្សាទុក (save)** ការផ្លាស់ប្តូរដែលអ្នកបានធ្វើ។

###

## ការបង្កើតអត្រាពន្ធ (Creating Tax Rates)

បន្ទាប់ពីអ្នកបើកដំណើរការការប្រមូលពន្ធហើយ អ្នកនឹងត្រូវបង្កើតអត្រាពន្ធសម្រាប់ទីតាំងជាក់លាក់មួយដោយប្រើ tax rates editor របស់យើង។

អ្នកអាចចូលទៅកាន់កម្មវិធីនិពន្ធ (editor) ដោយចុចលើប៊ូតុង **Manage Tax Rates** នៅលើរបារចំហៀងនៃទំព័រការកំណត់រចនាសម្ព័ន្ធពន្ធ។

![Manage Tax Rates link in the Tax Rates panel on the settings page](/img/config/settings-taxes-manage-rates.png)

នៅលើទំព័រកម្មវិធីនិពន្ធអត្រាពន្ធ អ្នកអាចបន្ថែមអត្រាពន្ធថ្មីដោយចុចលើប៊ូតុង **Add new Row**។

![Tax rates editor table with Add new Row button at the top](/img/config/tax-rates-editor.png)

អ្នកនឹងត្រូវផ្តល់ **ចំណងជើង (title)** ដល់អត្រាពន្ធនីមួយៗ (ដែលប្រើនៅលើវិក្កយបត្រ)។ បន្ទាប់មក អ្នកអាចជ្រើសរើស **ប្រទេស** (តម្រូវឱ្យមាន), **ខេត្ត**, និង **ទីក្រុង** (ទាំងពីរគឺជ tùy chọn) ដែលពន្ធនេះនឹងត្រូវគិតថ្លៃ។ ជាចុងក្រោយ សូមបន្ថែម **អត្រាពន្ធជាភាគរយ**។

### ប្រភេទពន្ធ (Tax Categories)

អ្នកក៏អាចបង្កើតប្រភេទពន្ធច្រើនបានដែរ ដើម្បីបន្ថែមអត្រាពន្ធផ្សេងៗគ្នាសម្រាប់ផលិតផលប្រភេទផ្សេងៗគ្នា។

ចុចលើ **Add new Tax Category** បន្ទាប់មកវាយឈ្មោះប្រភេទរបស់អ្នក ហើយចុច **Create**។

![Add new Tax Category button at the top of the tax rates editor](/img/config/tax-categories-add.png)

![Tax Category Name input field in the create category modal](/img/config/tax-categories-create-modal.png)

ដើម្បីស្វែងរកប្រភេទពន្ធ សូមចុច **Switch** ហើយជ្រើសរើសប្រភេទដែលអ្នកចង់បន្ថែមពន្ធថ្មី។

![Switch dropdown button to change between tax categories](/img/config/tax-categories-switch.png)

![Tax category selector dropdown showing available categories](/img/config/tax-categories-select.png)

អ្នកអាចកំណត់ប្រភេទពន្ធសម្រាប់ផលិតផលជាក់លាក់មួយបានដោយចូលទៅកាន់ **Product edit page** ហើយបន្ទាប់មកទៅកាន់ផ្ទាំង Taxes។

![Product taxes tab with tax category and taxable toggle](/img/config/product-taxes.png)

នៅលើអេក្រង់តែមួយនោះ អ្នកអាចបិទប៊ូតុង **Is Taxable?** ដើម្បីប្រាប់ Ultimate Multisite ថាវាមិនគួរប្រមូលពន្ធលើផលិតផលដែលបានកំណត់នោះទេ។

## ការគាំទ្រ VAT របស់អឺរ៉ុប (European VAT Support)

ដូចដែលបាន đề cập trước đó, chúng tôi có một add-on dành cho khách hàng ở EU có các yêu cầu bổ sung do quy định về VAT của Châu Âu.

Các công cụ VAT của chúng tôi giúp bạn thực hiện một vài việc quan trọng:

* Tải dễ dàng các mức thuế VAT của EU;
* Thu thập và xác thực Số VAT - và cơ chế tính lại (reverse charging) cho các đơn vị miễn VAT (như các công ty có số VAT hợp lệ);

Để cài đặt add-on đó, hãy vào **Ultimate Multisite > Settings** và sau đó nhấp vào liên kết ở thanh bên **Check our Add-ons**.

![Settings page sidebar with Check our Add-ons link](/img/config/settings-taxes-addons-link.png)

Bạn sẽ được chuyển hướng đến trang add-on của chúng tôi. Ở đó, bạn có thể tìm kiếm **Ultimate Multisite VAT add-on** và cài đặt nó.

<!-- Screenshot unavailable: VAT add-on tile on the Add-ons page -->

<!-- Screenshot unavailable: VAT add-on Install Now dialog -->

Sau đó, hãy đến **Network Admin > Plugins** và kích hoạt add-on đó trên toàn mạng.

<!-- Screenshot unavailable: Network Activate action for the VAT add-on on the Plugins page -->

Nếu bạn quay lại tab **Tax Settings**, bạn sẽ thấy các tùy chọn mới có sẵn. Bật tùy chọn **Enable VAT Support** để kích hoạt các công cụ VAT mới. Đừng quên **save** cài đặt của bạn nhé!

<!-- Screenshot unavailable: Enable VAT Support toggle in the Tax settings after add-on activation -->

### Tải các Mức Thuế VAT

Một trong những công cụ mà tích hợp của chúng tôi bổ sung là khả năng tải các mức thuế cho các quốc gia thành viên EU. Bạn có thể thực hiện điều này bằng cách truy cập trang chỉnh sửa mức thuế sau khi đã bật hỗ trợ VAT của EU.

នៅខាងក្រោមនៃទំព័រ អ្នកនឹងឃើញជម្រើសនៃការទាញយក VAT។ ការជ្រើសរើសប្រភេទអត្រា និងចុចលើប៊ូតុង **Update EU VAT Rates** នឹងបង្ហាញតារាងដោយស្វ័យប្រវត្តិជាមួយនឹងអត្រាពន្ធសម្រាប់ប្រទេសជាសមាជិក EU នីមួយៗ។ បន្ទាប់មក អ្នកគ្រាន់តែរក្សាទុកវាប៉ុណ្ណោះ។

![Update EU VAT Rates button at the bottom of the tax rates editor](/img/config/tax-rates-vat-pull.png)

អ្នកក៏អាចកែសម្រួលតម្លៃបន្ទាប់ពីទាញយកវាបានដែរ។ ដើម្បីធ្វើវាយ៉ាងងាយស្រួល សូមកែសម្រួលជួរតារាងដែលអ្នកត្រូវការ ហើយចុចដើម្បីរក្សាទុកតម្លៃថ្មី។

### VAT Validation (ការផ្ទៀងផ្ទាត់ VAT)

នៅពេលដែលគាំទ្រ VAT ត្រូវបានបើក Ultimate Multisite នឹងបន្ថែមវាលមួយទៅក្នុងទម្រង់ Checkout បន្ថែមពីខាងក្រោមវាលអាសយដ្ឋានបង់ប្រាក់។ វាបង្ហាញតែសម្រាប់អតិថិជនដែលមានទីតាំងនៅក្នុង EU ប៉ុណ្ណោះ។

<!-- Screenshot unavailable: VAT Number field on the frontend checkout form below the billing address -->

Ultimate Multisite នឹងធ្វើការផ្ទៀងផ្ទាត់លេខ VAT ហើយប្រសិនបើវាត្រឡប់មកវិញថាជាលេខដែលត្រឹមត្រូវ ប្រព័ន្ធ reverse charge នឹងត្រូវបានអនុវត្ត ហើយអត្រាពន្ធនឹងត្រូវបានកំណត់ត្រឹម 0% សម្រាប់បញ្ជាទិញនោះ។
