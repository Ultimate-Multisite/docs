---
title: ការរួមបញ្ចូល Zapier
sidebar_position: 12
_i18n_hash: 7f23136e0e69417e244a9930f9620e95
---
# ការភ្ជាប់ Ultimate Multisite ជាមួយ Zapier

នៅក្នុងអត្ថបទមួយ យើងបានពិភាក្សាអំពី [Webhooks](webhooks.md) និងរបៀបដែលវាអាចត្រូវបានប្រើដើម្បីភ្ជាប់ជាមួយកម្មវិធីភាគីទីបី។

ការប្រើ webhooks គឺមានភាពស្មុគស្មាញបន្តិចព្រោះវាទាមទារចំណេះដឹងកម្រិតខ្ពស់ក្នុងការសរសេរកូដ និងចាប់យក payload (ទិន្នន័យ)។ ការប្រើ **Zapier** គឺជាវិធីមួយដែលអ្នកអាចជៀសវាងបញ្ហានេះបាន។

Zapier មានការភ្ជាប់ជាមួយកម្មវិធីជាង 5000+ ដែលធ្វើឱ្យការទំនាក់ទំនងរវាងកម្មវិធីផ្សេងៗកាន់តែងាយស្រួល។

អ្នកអាចបង្កើត **Triggers** (ភ្នាក់ងារបង្ក) ដែលនឹងដំណើរការនៅពេលមានព្រឹត្តិការណ៍កើតឡើងនៅលើបណ្តាញរបស់អ្នក (ឧទាហរណ៍ ការបង្កើតគណនី និងបង្កឱ្យមានព្រឹត្តិការណ៍ account_create) ឬបង្កើត **Actions** (សកម្មភាព) នៅលើបណ្តាញរបស់អ្នកដើម្បីឆ្លើយតបទៅនឹងព្រឹត្តិការណ៍ខាងក្រៅ (ឧទាហរណ៍ ការបង្កើតសមាជិកថ្មីនៅក្នុងបណ្តាញ Ultimate Multisite របស់អ្នក)។

នេះអាចធ្វើទៅបានដោយសារតែ **Ultimate Multisite Zapier's triggers** និង actions ត្រូវបានដំណើរការដោយ [REST API](https://developer.ultimatemultisite.com/api/docs/)។

## របៀបចាប់ផ្តើម {#how-to-start}

ដំបូង សូមស្វែងរក Ultimate Multisite នៅក្នុងបញ្ជីកម្មវិធីរបស់ Zapier។ ឬអ្នកអាចចុចលើ [តំណនេះ](https://zapier.com/apps/wp-ultimo/integrations)។

ចូលទៅកាន់ dashboard របស់អ្នក ហើយចុចប៊ូតុង **+** **Create Zap** នៅរបារចំហៀងខាងឆ្វេងដើម្បីរៀបចំ Zap ថ្មី។

![Zapier dashboard with Create Zap button](/img/admin/webhooks-list.png)

អ្នកនឹងត្រូវបានបញ្ជូនទៅកាន់ទំព័របង្កើត Zap។

នៅក្នុងប្រអប់ស្វែងរក សូមវាយ "wp ultimo"។ ចុចដើម្បីជ្រើសរើសជម្រើស **Beta**។

![Searching for WP Ultimo in Zapier app list](/img/admin/webhooks-list.png)

បន្ទាប់ពីជ្រើសរើសកម្មវិធីរបស់យើងហើយ សូមជ្រើសរើសព្រឹត្តិការណ៍ដែលមាន៖ **New Ultimate Multisite Event**។

![Selecting New Ultimate Multisite Event trigger](/img/admin/webhooks-list.png)

ឥឡូវនេះ យើងត្រូវផ្តល់ឱ្យ Zapier នូវការចូលប្រើទៅកាន់ **បណ្តាញរបស់អ្នក**។ ការចុចលើ **Sign in** (ចូល) នឹងបើកបង្អួចថ្មីដែលទាមទារ **API credentials** (ព័ត៌មានសម្ងាត់ API)។

![Prompt សម្រាប់ចូល Zapier ដោយប្រើ API credentials](/img/admin/webhooks-list.png)

ទៅកាន់ network admin panel (ផ្ទាំងគ្រប់គ្រងបណ្តាញ) របស់អ្នក ហើយចូលទៅកាន់ **Ultimate Multisite > Settings** > **API & Webhooks** រួចរកមើលផ្នែក API Settings។

ជ្រើសរើសជម្រើស **Enable API** (បើក API) ព្រោះវាត្រូវបានតម្រូវឱ្យមានដើម្បីឱ្យការតភ្ជាប់នេះដំណើរការបាន។

![ការកំណត់ API និង Webhooks រួមជាមួយជម្រើស Enable API](/img/admin/settings-api-webhooks.png)

ប្រើរូបតំណាង **Copy to Clipboard** (ចម្លងទៅ Clipboard) នៅលើវាល API Key និង API Secret ហើយបិទភ្ជាប់តម្លៃទាំងនោះនៅលើអេក្រង់ integration។

នៅក្នុងវាល URL សូមដាក់ full URL របស់ network របស់អ្នក រួមទាំង protocol (HTTP ឬ HTTPS)។

![អេក្រង់ integration របស់ Zapier ដែលមានវាល API Key, Secret និង URL](/img/admin/webhooks-list.png)

ចុចប៊ូតុង **Yes, Continue** (បាទ សូមបន្ត) ដើម្បីទៅជំហានបន្ទាប់។ ប្រសិនបើអ្វីៗដំណើរការបានល្អ អ្នកនឹងត្រូវបានស្វាគមន៍ដោយគណនីដែលអ្នកបានភ្ជាប់ថ្មី! ចុចលើ **Continue** (បន្ត) ដើម្បីបង្កើត trigger ថ្មី។

## របៀបបង្កើត Trigger ថ្មី {#how-to-create-a-new-trigger}

ឥឡូវនេះ នៅពេលដែលគណនីរបស់អ្នកត្រូវបានភ្ជាប់ហើយ អ្នកអាចមើលឃើញ events ដែលមាន។ សូមជ្រើសរើស event **payment_received** (ការទទួលប្រាក់) សម្រាប់ tutorial នេះ។

![ការជ្រើសរើស event payment_received នៅក្នុង Zapier trigger](/img/admin/webhooks-list.png)

នៅពេលដែលបានជ្រើសរើស event ហើយអ្នកចុច **continue** (បន្ត) ប្រតិបត្តិការ **test step** (ជំហានសាកល្បង) មួយនឹងបង្ហាញ។

![Zapier test step សម្រាប់ trigger](/img/admin/webhooks-list.png)

នៅក្នុងដំណាក់កាលនេះ Zapier នឹងធ្វើតេស្តថាតើ Zap របស់អ្នកអាច **fetch payload ជាក់លាក់ទៅកាន់ event នោះបាន**។ សម្រាប់ events ដូចគ្នានៅពេលអនាគត ព័ត៌មានដែលមានរចនាសម្ព័ន្ធដូចគ្នានឹងត្រូវបានបញ្ជូនមក។

![Zapier trigger test បញ្ចប់ដោយជោគជ័យជាមួយ payload](/img/admin/webhooks-list.png)

ក្នុងវគ្គបង្រៀនរបស់យើង ការធ្វើតេស្តបាន **បញ្ចប់ដោយជោគជ័យ** ហើយបានត្រឡប់មកវិញនូវព័ត៌មានឧទាហរណ៍នៃ payload។ ព័ត៌មានឧទាហរណ៍នេះនឹងមានប្រយោជន៍ណាស់ក្នុងការណែនាំយើងពេលបង្កើត actions (សកម្មភាព)។ Trigger របស់អ្នកត្រូវបានបង្កើតរួចហើយ និងត្រៀមខ្លួនដើម្បីភ្ជាប់ទៅកាន់កម្មវិធីផ្សេងៗទៀត។

## របៀបបង្កើត Actions {#how-to-create-actions}

Actions ប្រើព័ត៌មានពី triggers ផ្សេងទៀត ដើម្បីបង្កើតធាតុថ្មីនៅក្នុង network របស់អ្នក។

នៅក្នុងការ **បង្កើត action step** អ្នកនឹងជ្រើសរើស Ultimate Multisite **Beta** និងជម្រើស **Create Items on Ultimate Multisite** (បង្កើត Item នៅលើ Ultimate Multisite)។

![Creating an action with Create Items on Ultimate Multisite](/img/admin/webhooks-list.png)

នៅក្នុងជំហានបន្ទាប់ អ្នកនឹងជ្រើសរើសការផ្ទៀងផ្ទាត់អត្តសញ្ញាណ (authentication) របស់អ្នក ដូចដែលយើងបានធ្វើក្នុង **How to start** (របៀបចាប់ផ្តើម) ឬជ្រើសរើស authentication ដែលបានបង្កើតរួច។ នៅក្នុងវគ្គបង្រៀននេះ យើងនឹងជ្រើសរើស authentication ដែលបានបង្កើតរួចពីមុន។

![Selecting authentication for the Zapier action](/img/admin/webhooks-list.png)

### ការកំណត់រចនាសម្ព័ន្ធ Action (Setting up the Action) {#setting-up-the-action}

នេះគឺជា **ជំហានសំខាន់នៃ action** ហើយនៅទីនេះអ្វីៗគឺមានភាពខុសប្លែកបន្តិច។ ព័ត៌មានដំបូងដែលអ្នកនឹងជ្រើសរើសគឺ **Item**។ Item គឺជា **information model** (គំរូព័ត៌មាន) នៃ network របស់អ្នក ដូចជា **Customers, Payments, Sites, Emails** និងផ្សេងៗទៀត។

![Choosing Item type for the Zapier action](/img/admin/webhooks-list.png)

នៅពេលជ្រើសរើស item ទម្រង់នឹង **រៀបចំឡើងវិញដើម្បីបង្ហាញវាលដែលតម្រូវ និងជម្រើស (required and optional fields)** សម្រាប់ item ដែលបានជ្រើសរើស។

ឧទាហរណ៍ នៅពេលជ្រើសរើស item **Customer** (អតិថិជន) ប្រភេទនៃវាលនៅក្នុងទម្រង់នឹងបង្ហាញអ្វីគ្រប់យ៉ាងដែលចាំបាច់ដើម្បីបំពេញដើម្បីបង្កើត Customer ថ្មីនៅក្នុង network។

![Customer item fields in Zapier action setup](/img/admin/webhooks-list.png)

បន្ទាប់ពីបំពេញវាលទាំងអស់ដែលសម្គាល់ថា **required** (តម្រូវ) ហើយចុច continue (បន្ត) វានឹងបង្ហាញអេក្រង់ចុងក្រោយមួយដែលបង្ហាញវាលដែលបានបំពេញ និងវាលដែលនៅសល់មិនទាន់បានបំពេញ។

![ការសាកល្បងកម្មវិធី Zapier បង្ហាញវាលដែលបានបំពេញ និងមិនទាន់បានបំពេញ](/img/admin/webhooks-list.png)

ភ្លាមៗបន្ទាប់ពីការសាកល្បងរបស់អ្នកបញ្ចប់ដោយជោគជ័យ សកម្មភាព (action) របស់អ្នកនឹងត្រូវបានកំណត់រចនាសម្ព័ន្ធ។ វាពិតជាសំខាន់ណាស់ដែលត្រូវពិនិត្យមើលលើបណ្តាញអ៊ីនធឺណិតរបស់អ្នកថាតើធាតុនោះត្រូវបានបង្កើតឡើងជាមួយនឹងការសាកល្បងនៃកម្មវិធីរបស់អ្នកឬយ៉ាងណា។
