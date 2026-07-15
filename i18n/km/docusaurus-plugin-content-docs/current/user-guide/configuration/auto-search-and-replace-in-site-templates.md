---
title: ការស្វែងរក និងជំនួសដោយស្វ័យប្រវត្តិនៅក្នុងគំរូគេហទំព័រ
sidebar_position: 8
_i18n_hash: 0842f53505d24579010d91568e06ef68
---
# ការស្វែងរកដោយស្វ័យប្រវត្តិ និងការជំនួសនៅក្នុង Site Templates (v2)

_**មគ្គុទ្ទេសក៍នេះទាមទារ WP UItimo version 2.x។**_

មុខងារដ៏មានឥទ្ធិពលបំផុតមួយរបស់ Ultimate Multisite គឺសមត្ថភាពក្នុងការបន្ថែមអត្ថបទ រូបពណ៌ និងជ្រើសរើសវាលនានាទៅក្នុងទម្រង់ចុះឈ្មោះ (registration form)។ នៅពេលយើងបានចាប់យកទិន្នន័យនោះហើយ យើងអាចប្រើវាដើម្បីបំពេញខ្លឹមសារជាមុននៅក្នុងផ្នែកណាមួយនៃ site template ដែលត្រូវបានជ្រើសរើស។ បន្ទាប់មក នៅពេលដែល site ថ្មីត្រូវបានបោះពុម្ពផ្សាយ Ultimate Multisite នឹងជំនួស placeholders (កន្លែងដាក់ទិន្នន័យ) ដោយព័ត៌មានជាក់ស្តែងដែលបានបញ្ចូលក្នុងពេលចុះឈ្មោះ។

ឧទាហរណ៍ អ្នកអាចបង្កើត template sites របស់អ្នកដោយប្រើ placeholders។ Placeholders គួរតែត្រូវបានបន្ថែមដោយរុំព័ទ្ធដោយវង់ក្រចកពីរ - {{placeholder_name}}។

បន្ទាប់មក អ្នកគ្រាន់តែបន្ថែមវាលចុះឈ្មោះដែលត្រូវគ្នាដើម្បីចាប់យកទិន្នន័យនោះ។

អតិថិជនរបស់អ្នកនឹងអាចបំពេញវាលនោះបានក្នុងអំឡុងពេលចុះឈ្មោះ។

Ultimate Multisite នឹងជំនួស placeholders ដោយទិន្នន័យដែលផ្តល់ដោយអតិថិជនដោយស្វ័យប្រវត្តិ។

## **ការដោះស្រាយបញ្ហា "template ពោរពេញទៅដោយ placeholders"** {#solving-the-template-full-of-placeholders-problem}

ទាំងអស់នេះគឺល្អណាស់ ប៉ុន្តែយើងជួបបញ្ហាមួយដ៏គួរឱ្យមិនរីករាយ៖ ឥឡូវនេះ template site របស់យើង - ដែលអតិថិជនអាចចូលមើលបាន - ពោរពេញទៅដោយ placeholders ដ៏គួរឱ្យស្អប់ខ្ពើមដែលមិនផ្តល់ព័ត៌មានច្រើន។

ដើម្បីដោះស្រាយបញ្ហានេះ យើងផ្តល់ជម្រើសក្នុងការកំណត់តម្លៃក្លែងក្លាយ (fake values) សម្រាប់ placeholders ហើយយើងប្រើតម្លៃទាំងនោះដើម្បីស្វែងរក និងជំនួសខ្លឹមសាររបស់ពួកវាលើ template sites ខណៈពេលដែលអតិថិជនរបស់អ្នកកំពុងចូលមើល។

អ្នកអាចចូលទៅកាន់ editors នៃ template placeholders ដោយចូលទៅកាន់ **Ultimate Multisite > Settings > Sites** រំកិលចុះទៅតំបន់ Site Template Options ហើយបន្ទាប់មកចុចលើតំណភ្ជាប់ **Edit Placeholders**។

![Site Template Options area in the Sites settings page](/img/config/settings-sites-templates-section.png)

នោះនឹងនាំអ្នកទៅកាន់ content editor នៃ placeholders ដែលអ្នកអាចបន្ថែម placeholders និងខ្លឹមសារដែលទាក់ទងនឹងវាបាន។

![จุดเริ่มต้นของตัวแก้ไขเทมเพลตไซต์และค่าตั้งต้น](/img/config/settings-sites-templates-section.png)
