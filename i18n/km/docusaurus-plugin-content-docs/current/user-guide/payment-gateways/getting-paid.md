---
title: ការទទួលបានប្រាក់
sidebar_position: 15
_i18n_hash: 0f45bd2eb659d27199ac9f9752e1a8ae
---
# ការទទួលប្រាក់ (v2)

_**ចំណាំសំខាន់៖ អត្ថបទនេះសំដៅលើ Ultimate Multisite វគ្គ ២.x។**_

Ultimate Multisite មានប្រព័ន្ធសមាជិកភាព និងការបង់ប្រាក់ភ្ជាប់មកជាមួយរួចហើយ។ ដើម្បីឱ្យប្រព័ន្ធបង់ប្រាក់របស់យើងដំណើរការបាន យើងបានបញ្ចូល Payment gateways ដែលគេប្រើញឹកញាប់បំផុតនៅក្នុង e-commerce។ Payment gateways តាមលំនាំដើមនៅក្នុង Ultimate Multisite គឺ _Stripe_ , _PayPal_ និង ការបង់ប្រាក់ដោយដៃ (Manual Payment)។ អ្នកក៏អាចប្រើ _WooCommerce_ , _GoCardless_ និង _Payfast_ ដើម្បីទទួលការទូទាត់បាន ដោយគ្រាន់តែដំឡើង add-ons រៀងៗខ្លួន។

## ការកំណត់រចនាសម្ព័ន្ធមូលដ្ឋាន (Basic Settings)

អ្នកអាចកំណត់រចនាសម្ព័ន្ធ Payment gateways ណាមួយក្រោមការកំណត់បង់ប្រាក់របស់ Ultimate Multisite បាន។ អ្នកអាចរកវាបានដោយចូលទៅកាន់ **Ultimate Multisite menu > Settings > Payments**។

![Payments settings page in Ultimate Multisite showing the Payments panel](/img/config/payments-settings-page.png)

មុននឹងអ្នករៀបចំ Payment gateway របស់អ្នក សូមពិនិត្យមើលការកំណត់បង់ប្រាក់មូលដ្ឋានដែលអ្នកអាចកំណត់បាន៖

**Force auto-renew w:** ការធ្វើបែបនេះនឹងធានាថាការបង់ប្រាក់នឹងកើតឡើងដោយស្វ័យប្រវត្តិនៅចុងបញ្ចប់នៃវដ្ដបង់ប្រាក់នីមួយៗ ទៅតាមភាពញឹកញាប់នៃការចេញវិក្កយបត្រដែលអ្នកប្រើបានជ្រើសរើស។

<!-- Screenshot unavailable: Force Auto-Renew toggle setting on the Payments settings page -->

Ultimate Multisite v2.13.0 នឹងពិនិត្យមើលថាតើ gateway ដែលកំពុងដំណើរការមាន credential សម្រាប់ការបន្តប្រើប្រាស់ (reusable renewal credential) ឬអត់ មុនពេលរក្សាទុកសមាជិកភាពដែលកំណត់ការបន្តដោយស្វ័យប្រវត្តិ។ Credential សម្រាប់ការបន្តអាចជាការជាវ subscription របស់ gateway, កិច្ចព្រមព្រៀងបង់ប្រាក់, vault token ដែលបានរក្សាទុក, ឬវិធីសាស្រ្តបង់ប្រាក់ដែលអាចប្រើឡើងវិញបានដែលមានលក្ខណៈដូចគ្នា។ ប្រសិនបើ gateway រាយការណ៍ថាគ្មាន credential ដែលអាចប្រើបានទេ Ultimate Multisite នឹងរក្សាទុកសមាជិកភាពនោះ ប៉ុន្តែនឹងបិទការបន្តដោយស្វ័យប្រវត្តិ ហើយកត់ត្រាស្ថានភាពដែលខ្វះ credential ដើម្បីឱ្យអ្នកគ្រប់គ្រង ឬដំណើរការ support អាចស្នើសុំឱ្យអតិថិជនធ្វើការផ្ទៀងផ្ទាត់ការបង់ប្រាក់ឡើងវិញមុនថ្ងៃបន្ត។

**អនុញ្ញាតឱ្យមានការសាកល្បងដោយគ្មានវិធីសាស្រ្តបង់ប្រាក់ (Allow trials without payment method)** **វិធីសាស្រ្ត:** នៅពេលបើកជម្រើសនេះ អតិថិជនរបស់អ្នកមិនចាំបាច់បន្ថែមព័ត៌មានហិរញ្ញវត្ថុណាមួយក្នុងដំណើរការចុះឈ្មោះឡើយ។ វានឹងត្រូវបានទាមទារតែម្តងគត់នៅពេលដែលរយៈពេលសាកល្បងផុតកំណត់ប៉ុណ្ណោះ។

<!-- Screenshot unavailable: Allow Trials Without Payment Method toggle on the Payments settings page -->

**ផ្ញើវិក្កយបត្រនៅពេលបញ្ជាក់ការទូទាត់ (Send invoice on payment confirmation)** នេះផ្តល់ឱ្យអ្នកនូវជម្រើសថាតើត្រូវផ្ញើវិក្កយបត្រឬអត់ បន្ទាប់ពីមានការទូទាត់។ សូមចំណាំថា អ្នកប្រើប្រាស់នឹងអាចចូលមើលប្រវត្តិការទូទាត់របស់ពួកគេបានក្រោម dashboard នៃ subsite របស់ពួកគេ។ ជម្រើសនេះមិនអនុវត្តចំពោះ Manual Gateway ទេ។

<!-- Screenshot unavailable: Send Invoice on Payment Confirmation toggle on the Payments settings page -->

**ស្មារតីលេខវិក្កយបត្រ (Invoice numbering scheme)** នៅទីនេះ អ្នកអាចជ្រើសរើសបាននូវលេខយោងការទូទាត់ (payment reference code) ឬលំនាំលេខជាប់គ្នា (sequential number scheme)។ ប្រសិនបើអ្នកជ្រើសរើសប្រើលេខយោងការទូទាត់សម្រាប់វិក្កយបត្ររបស់អ្នក អ្នកមិនចាំបាច់កំណត់អ្វីបន្ថែមទេ។ ប្រសិនបើអ្នកជ្រើសរើសប្រើលំនាំលេខជាប់គ្នា អ្នកនឹងត្រូវកំណត់ **លេខវិក្កយបត្របន្ទាប់ (next invoice number)** (លេខនេះនឹងត្រូវបានប្រើជាលេខវិក្កយបត្រសម្រាប់វិក្កយបត្របន្ទាប់ដែលបង្កើតនៅលើប្រព័ន្ធ។ វាត្រូវបានបង្កើនមួយរាល់ពេលដែលមានការបង្កើតវិក្កយបត្រថ្មី។ អ្នកអាចផ្លាស់ប្តូរវា និងរក្សាទុកវានៅទីនេះដើម្បីកំណត់លេខវិក្កយបត្រជាប់គ្នាឡើងវិញទៅជាតម្លៃជាក់លាក់) និង **តួអក្សរនាំមុខនៃលេខវិក្កយបត្រ (invoice number prefix)**។

<!-- Screenshot unavailable: Invoice numbering scheme dropdown with Payment Reference Code and Sequential Number options -->

<!-- Screenshot unavailable: Next invoice number and invoice number prefix fields shown when Sequential Number is selected -->

## ទីតាំងនៃ Payment Gateways (ច្រកទ្វារបង់ប្រាក់):

អ្នកអាចកំណត់រចនាសម្ព័ន្ធ payment gateways នៅលើទំព័រតែមួយ (**Ultimate Multisite > Settings > Payments**). នៅខាងក្រោម **active payment gateways** អ្នកនឹងអាចមើលឃើញ៖ _Stripe_ , _Stripe_ _Checkout_ , _PayPal_ និង _Manual_។

![Active Payment Gateways section listing Stripe, Stripe Checkout, PayPal and Manual](/img/config/payments-active-gateways.png)

យើងមានអត្ថបទពិសេសសម្រាប់ payment gateway នីមួយៗ ដែលនឹងណែនាំអ្នកអំពីជំហាននៃការកំណត់រចនាសម្ព័ន្ធវា ដែលអ្នកអាចរកបានតាមរយៈតំណភ្ជាប់ខាងក្រោម។

អ្នកអាចមើល និងកែសម្រួលព័ត៌មានលម្អិតនៃការបង់ប្រាក់៖

![Payment edit interface](/img/admin/payment-edit.png)

នេះគឺជាទិដ្ឋភាពពេញលេញនៃទំព័រកែសម្រួលការបង់ប្រាក់៖

![Payment edit full interface](/img/admin/payment-edit-full.png)

នេះក៏ជាទិដ្ឋភាពពេញលេញនៃការកំណត់រចនាសម្ព័ន្ធ payment gateways ផងដែរ៖

![Payment gateways settings full page](/img/config/settings-payments-gateways-full.png)

**ការកំណត់រចនាសម្ព័ន្ធ Stripe gateway**

**ការកំណត់រចនាសម្ព័ន្ធ PayPal gateway**** **

**ការកំណត់រចនាសម្ព័ន្ធការបង់ប្រាក់ដោយដៃ (manual payments)**

ឥឡូវនេះ ប្រសិនបើអ្នកចង់ប្រើ _WooCommerce_ , _GoCardless_ ឬ _Payfast_ ជា payment gateway របស់អ្នក អ្នកនឹងត្រូវ **ដំឡើង និងកំណត់រចនាសម្ព័ន្ធ add-ons** របស់ពួកវា។

### របៀបដំឡើង WooCommerce add-on៖

យើងយល់ថា _Stripe_ និង _PayPal_ មិនមាននៅក្នុងប្រទេសខ្លះ ដែលកំណត់ ឬរារាំងអ្នកប្រើប្រាស់ Ultimate Multisite ឱ្យប្រើប្រាស់ plugin របស់យើងបានយ៉ាងមានប្រសិទ្ធភាពទេ។ ដូច្នេះ យើងបានបង្កើត add-on ដើម្បីរួមបញ្ចូល _WooCommerce_ ដែលជា plugin e-commerce ដែលពេញនិយមបំផុត។ អ្នកអភិវឌ្ឍន៍ជុំវិញពិភពលោកបានបង្កើត add-ons ដើម្បីរួមបញ្ចូល payment gateways ផ្សេងៗជាមួយវា។ យើងបានទាញយកចំណុចនេះដើម្បីពង្រីក payment gateways ដែលអ្នកអាចប្រើជាមួយប្រព័ន្ធ billing របស់ Ultimate Multisite។

**_**សំខាន់៖ Ultimate Multisite: ការរួមបញ្ចូលជាមួយ WooCommerce ទាមទារឱ្យ WooCommerce ត្រូវបានបើកដំណើរការយ៉ាងហោចណាស់នៅលើគេហទំព័រមេរបស់អ្នក។_**

ដំបូង សូមចូលទៅកាន់ទំព័រ add-ons (កម្មវិធីបន្ថែម)។ អ្នកអាចរកវាបានដោយចូលទៅកាន់ **Ultimate Multisite > Settings**។ អ្នកនឹងឃើញតារាង **Add-ons**។ ចុចលើ **Check our Add-ons** (ពិនិត្យមើល Add-ons របស់យើង)។

<!-- Screenshot unavailable: Add-ons table on the Ultimate Multisite Settings sidebar with the Check our Add-ons link -->

បន្ទាប់ពីចុចលើ **Check our Add-ons** អ្នកនឹងត្រូវបានបញ្ជូនទៅកាន់ទំព័រ add-ons។ នៅទីនេះ អ្នកអាចរកឃើញ add-ons ទាំងអស់របស់ Ultimate Multisite។ ចុចលើ add-on **Ultimate Multisite: WooCommerce Integration** (ការរួមបញ្ចូល Ultimate Multisite: WooCommerce)។

![Add-ons page listing Ultimate Multisite add-ons including WooCommerce Integration](/img/addons/addons-page.png)

បង្អួចមួយនឹងលេចឡើងជាមួយព័ត៌មានលម្អិតនៃ add-on។ ចុចលើ **Install Now** (ដំឡើងឥឡូវនេះ)។

<!-- Screenshot unavailable: Ultimate Multisite WooCommerce Integration add-on details dialog with Install Now button -->

បន្ទាប់ពីការដំឡើងរួច អ្នកនឹងត្រូវបានបញ្ជូនទៅកាន់ទំព័រ plugins (ប្លុកបន្ថែម)។ នៅទីនេះ ចុចលើ **Network Activate** (បើកដំណើរការលើបណ្តាញ) ហើយadd-on WooCommerce នឹងត្រូវបានបើកដំណើរការនៅលើបណ្តាញរបស់អ្នក។

<!-- Screenshot unavailable: Plugins page with the Network Activate link for the WooCommerce Integration add-on -->

បន្ទាប់ពីបើកដំណើរការហើយ ប្រសិនបើអ្នកនៅតែមិនទាន់បានដំឡើង និងបើកដំណើរការ plugin WooCommerce នៅលើគេហទំព័ររបស់អ្នកទេ អ្នកនឹងទទួលបានការរំលឹក។

<!-- Screenshot unavailable: Admin notice reminding the administrator to install and activate the WooCommerce plugin -->

ដើម្បីអានបន្ថែមអំពី add-on WooCommerce Integration សូម **ចុចទីនេះ**។

### របៀបដំឡើង add-on GoCardless៖

ជំហាននៃការដំឡើង add-on _GoCardless_ គឺស្រដៀងនឹង add-on _WooCommerce_ ដូចគ្នា។ សូមចូលទៅកាន់ទំព័រ add-ons ហើយជ្រើសរើស add-on **Ultimate Multisite: GoCardless Gateway**។

<!-- Screenshot unavailable: Add-ons page with the Ultimate Multisite GoCardless Gateway add-on highlighted -->

បង្អួច add-on នឹងលេចឡើង។ ចុចលើ **Install Now** (ដំឡើងឥឡូវនេះ)។

<!-- Screenshot unavailable: Ultimate Multisite GoCardless Gateway add-on details dialog with Install Now button -->

បន្ទាប់ពីការដំឡើងរួច អ្នកនឹងត្រូវបានបញ្ជូនទៅកាន់ទំព័រ plugins។ នៅទីនោះ សូមចុចលើ **Network Activate** ហើយ add-on _GoCardless_ នឹងត្រូវបានបើកដំណើរការនៅលើ network របស់អ្នក។

<!-- Screenshot unavailable: Plugins page with the Network Activate link for the GoCardless Gateway add-on -->

ដើម្បីស្វែងយល់ពីរបៀបចាប់ផ្តើមជាមួយ gateway _GoCardless_ សូម **អានអត្ថបទនេះ**។

### របៀបដំឡើង add-on Payfast៖

ចូលទៅកាន់ទំព័រ add-ons ហើយជ្រើសរើស add-on **Ultimate Multisite: Payfast Gateway**។

<!-- Screenshot unavailable: Add-ons page with the Ultimate Multisite Payfast Gateway add-on highlighted -->

បង្អួច add-on នឹងលេចឡើង។ ចុចលើ **Install Now** (ដំឡើងឥឡូវនេះ)។

<!-- Screenshot unavailable: Ultimate Multisite Payfast Gateway add-on details dialog with Install Now button -->

បន្ទាប់ពីការដំឡើងរួច អ្នកនឹងត្រូវបានបញ្ជូនទៅកាន់ទំព័រ plugins។ នៅទីនោះ សូមចុចលើ **Network Activate** ហើយ add-on _Payfast_ នឹងត្រូវបានបើកដំណើរការនៅលើ network របស់អ្នក។

<!-- Screenshot unavailable: Plugins page with the Network Activate link for the Payfast Gateway add-on -->
