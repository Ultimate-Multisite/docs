---
title: Webhook
sidebar_position: 15
_i18n_hash: f8456622538d07af8f5aa36c1ec19249
---
# ការមើលលើ Webhooks ជាលើកដំបូង (v2)

_**ចំណាំសំខាន់: សូមចំណាំថា ฟีเจอร์ ឬអត្ថបទនេះគឺសម្រាប់អ្នកប្រើប្រាស់ขั้นสูงเท่านั้น។**_

**Webhook** គឺជាវិធីមួយដែលកម្មវិធី ឬซอฟต์แวร์ដូចជា Ultimate Multisite អាចផ្ដល់ព័ត៌មានពេលវេលាជាក់ស្ដែងទៅកាន់កម្មវិធីផ្សេងទៀត។ Webhook នឹងបញ្ជូនទិន្នន័យ ឬ payload ទៅកាន់កម្មវិធីផ្សេងៗភ្លាមៗ នៅពេលដែលវាកើតឡើង ដែលមានន័យថាអ្នកនឹង**ទទួលបានទិន្នន័យភ្លាមៗ**។

នេះមានប្រយោជន៍ខ្លាំងណាស់ ប្រសិនបើអ្នកត្រូវការបញ្ចូល (integrate) ឬបញ្ជូនទិន្នន័យជាក់លាក់ពី Ultimate Multisite ទៅកាន់ CRM ឬប្រព័ន្ធផ្សេងទៀតរាល់ពេលដែលមានព្រឹត្តិការណ៍មួយត្រូវបានបង្កឡើង។ ឧទាហរណ៍ អ្នកត្រូវផ្ញើនាម និងអាសយដ្ឋានអ៊ីមែលរបស់អ្នកទៅកាន់ mailing list រាល់ពេលដែលគណនីអ្នកប្រើប្រាស់ថ្មីត្រូវបានបង្កើតឡើង។

## របៀបបង្កើត Webhook {#how-to-create-a-webhook}

ដើម្បីបង្កើត webhook សូមចូលទៅកាន់ network admin dashboard របស់អ្នក។ ចុចលើ **Ultimate Multisite > Webhooks > Add New Webhook**។

![Empty Webhooks list page with Add New Webhook button](/img/admin/webhooks-list-empty.png)

បន្ទាប់មក អ្នកអាចកែសម្រួលការកំណត់រចនាសម្ព័ន្ធ webhook បាន៖

![Add New Webhook form with Name, Event, and URL fields](/img/admin/webhook-add-modal.png)

នៅពេលបង្កើត webhook ថ្មី អ្នកនឹងត្រូវបានសួរព័ត៌មានដូចជា **Name (ឈ្មោះ), URL,** និង **Event (ព្រឹត្តិការណ៍)**។ អ្នកអាចប្រើឈ្មោះណាមួយដែលអ្នកចង់បានសម្រាប់ webhook របស់អ្នក។ កន្លែងសំខាន់បំផុតគឺ URL និង Event។

![Webhook edit interface showing the URL field and payload preview](/img/admin/webhook-url-field.png)

URL គឺជា **endpoint ឬគោលដៅ** ដែល Ultimate Multisite នឹងផ្ញើ **payload ឬទិន្នន័យ** ទៅកាន់វា។ វាគឺជាកម្មវិធីដែលនឹងទទួលបានទិន្នន័យនោះ។

Zapier គឺជាដំណោះស្រាយដែលគេប្រើច្រើនបំផុតដើម្បីធ្វើឱ្យការបញ្ចូល (integration) ជាមួយកម្មវិធីភាគីទីបីកាន់តែងាយស្រួល។ បើគ្មាន platform ដូចជា Zapier អ្នកនឹងត្រូវបង្កើតមុខងារផ្ទាល់ខ្លួនដោយដៃ ដែលអាចចាប់យកទិន្នន័យនោះ និងដំណើរការវា។ សូមមើលអត្ថបទនេះអំពី **របៀបប្រើ Ultimate Multisite webhook ជាមួយ Zapier**។

នៅក្នុងអត្ថបទនេះ យើងនឹងមកមើលគោលគំនិតមូលដ្ឋានអំពីរបៀបដែល webhook ដំណើរការ និងព្រឹត្តិការណ៍ (events) ដែលមាននៅក្នុង Ultimate Multisite។ យើងនឹងប្រើប្រាស់គេហទំព័រភាគីទីបីមួយឈ្មោះថា [requestbin.com](https://requestbin.com/)។ គេហទំព័រនេះនឹងអនុញ្ញាតឱ្យយើងបង្កើត endpoint ហើយចាប់យក payload ដោយមិនបាច់សរសេរកូដអ្វីទាំងអស់។ _**ការលើកឡើង៖ វាគ្រាន់តែបង្ហាញយើងថាទិន្នន័យត្រូវបានទទួលប៉ុណ្ណោះ។**_ នឹងមិនមានការដំណើរការ ឬការធ្វើសកម្មភាពណាមួយលើ payload នោះទេ។

ចូលទៅកាន់ [requestbin.com](https://requestbin.com/) ហើយចុច Create Request Bin (បង្កើត Request Bin)។

បន្ទាប់ពីចុចប៊ូតុងនោះ វាប្រហែលជាសួរឱ្យអ្នកចូលគណនី ប្រសិនបើអ្នកមានរួចហើយ ឬចុះឈ្មោះ។ ប្រសិនបើអ្នកមានគណនីរួចហើយ វានឹងនាំអ្នកទៅកាន់ dashboard របស់ពួកគេភ្លាមៗ។ នៅលើ dashboard របស់ពួកគេ អ្នកនឹងឃើញ endpoint ឬ URL ដែលអ្នកអាចប្រើក្នុងការបង្កើត Ultimate Multisite webhook បានភ្លាមៗ។

បន្តកូពី URL ហើយត្រឡប់ទៅ Ultimate Multisite។ បញ្ចូល endpoint នោះទៅក្នុងវាល URL ហើយជ្រើសរើសព្រឹត្តិការណ៍ (event) ពីបញ្ជីទម្លាក់ចុះ (dropdown)។ ក្នុងឧទាហរណ៍នេះ យើងនឹងជ្រើសរើស **Payment Received** (ទទួលបានការទូទាត់)។

ព្រឹត្តិការណ៍នេះនឹងត្រូវបានដំណើរការនៅពេលណាដែលអ្នកប្រើប្រាស់ធ្វើការទូទាត់។ ព្រឹត្តិការណ៍ទាំងអស់ដែលមាន ការពិពណ៌នា និង payload របស់វា ត្រូវបានរាយបញ្ជីនៅខាងក្រោមនៃទំព័រ។ ចុចប៊ូតុង **Add New Webhook** (បន្ថែម Webhook ថ្មី) ដើម្បីរក្សាទុក webhook។

![Webhook event dropdown with Payment Received selected](/img/admin/webhook-event-picker.png)

ឥឡូវនេះ យើងអាចផ្ញើព្រឹត្តិការណ៍សាកល្បងទៅ endpoint ដើម្បីមើលថាតើ webhook ដែលយើងបានបង្កើតដំណើរការឬអត់។ យើងអាចធ្វើរឿងនេះបានដោយចុច **Send Test Event** (ផ្ញើព្រឹត្តិការណ៍សាកល្បង) នៅក្រោម webhook ដែលយើងបានបង្កើត។

![Webhooks list showing one configured webhook and Send Test action](/img/admin/webhooks-list-populated.png)

នេះបង្ហាញបង្អួចបញ្ជាក់ថាការសាកល្បងទទួលបានជោគជ័យ។

![Webhook test event result after sending a test payload](/img/admin/webhook-test-result.png)

ឥឡូវនេះ បើអ្នកត្រលប់ទៅកាន់គេហទំព័រ _Requestbin_ អ្នកនឹងឃើញថា payload (ទិន្នន័យ) ត្រូវបានទទួលរួចហើយ ដែលមានទិន្នន័យសម្រាប់ធ្វើតេស្តខ្លះ។

នេះគឺជាគោលការណ៍ជាមូលដ្ឋានអំពីរបៀបដែល webhook និង endpoints ដំណើរការ។ ប្រសិនបើអ្នកចង់បង្កើត custom endpoint អ្នកនឹងត្រូវបង្កើត function បែប custom ដើម្បីដំណើរការទិន្នន័យដែលអ្នកទទួលបានពី Ultimate Multisite។
