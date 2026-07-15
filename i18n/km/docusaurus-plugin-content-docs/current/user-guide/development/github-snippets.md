---
title: បំណែក GitHub
sidebar_position: 3
_i18n_hash: c643f3d76aace8c15fd224b984af6633
---
# របៀបប្រើ Ultimate Multisite snippets នៅលើ GitHub repository របស់យើង

មាន code snippets ដែលមាននៅក្នុង GitHub repository ដែលអ្នកប្រើប្រាស់ Ultimate Multisite ស្នើសុំញឹកញាប់ ដែលចង់បន្ថែមមុខងារតូចៗដូចជាការបន្ថែម Google Analytics script នៅលើទំព័រចុះឈ្មោះ ឬការលាក់ meta box ចេញពី admin dashboard។

អត្ថបទនេះនឹងបង្ហាញអ្នកពីរបៀបប្រើ ឬនិយាយឱ្យជាក់លាក់ជាងនេះ ថាត្រូវដាក់ code ទាំងនេះនៅកន្លែងណា។

អ្នកអាចរកឃើញ snippets ទាំងនោះតាមរយៈតំណខាងក្រោម៖

https://github.com/next-press/wp-ultimo-snippets/

មានវិធី ២ យ៉ាងសម្រាប់អ្នកក្នុងការបន្ថែម code៖

  ១. នៅលើ file functions.php របស់ theme អ្នក។

  ២. Must-Use Plugins (mu-plugins)

# របៀបបន្ថែម snippet នៅលើ file functions.php របស់ theme អ្នក។

  ១. ចុចចូលទៅកាន់ WordPress Network admin dashboard ហើយចូលទៅកាន់ Themes > Theme Editor (សូមមើលរូបតំណាងខាងក្រោម)។

  ២. នៅលើទំព័រ "Edit Themes" សូមប្រាកដថាអ្នកបានជ្រើសរើស theme ដែលកំពុងដំណើរការរបស់អ្នកនៅក្នុង dropdown field ដែលស្ថិតនៅខាងស្តាំដៃផ្នែកខាងលើនៃអេក្រង់របស់អ្នក (#3 ក្នុងរូបតំណាងខាងក្រោម)។

  ៣. ចុចលើ file functions.php នៅក្រោមផ្នែក "Theme Files" ដើម្បីផ្ទុក file ។ រំកិលចុះទៅខាងក្រោម ហើយបិទភ្ជាប់ Ultimate Multisite snippet ដែលអ្នកទទួលបានពី GitHub repository។

<!-- រូបតំណាងមិនអាចបង្ហាញបានទេ: WordPress Theme Editor បង្ហាញការកែសម្រួល file functions.php -->

# របៀបបង្កើត Must-Use Plugins (mu-plugins)

WordPress មានមុខងារមួយដែលអនុញ្ញាតឱ្យអ្នកផ្ទុកមុខងារផ្ទាល់ខ្លួនដែលគេហៅថា "Must-Use Plugins" ឬ "mu-plugins"។

mu-plugins ពិសេសទាំងនេះនឹងត្រូវបានផ្ទុកមុន plugin ធម្មតាទាំងអស់ ហើយពួកវាមិនអាចបិទដំណើរការបានទេ។ នៅក្នុង network multisite, code នៅក្នុង mu-plugins ទាំងនេះនឹងត្រូវបានផ្ទុកនៅលើគ្រប់ site ទាំងអស់ក្នុងការដំឡើងរបស់អ្នក។

១. ប្រើ FTP ឬ SSH ដើម្បីចូលទៅកាន់ filesystem នៃ WordPress installation របស់អ្នក។

២។ នៅក្នុងថត wp-content នៃ WordPress installation របស់អ្នក សូមបង្កើតថតថ្មីមួយដែលមានឈ្មោះថា៖ mu-plugins។

<!-- រូបភាពមិនអាចបង្ហាញបានទេ: File manager បង្ហាញថត wp-content ជាមួយโฟลเดอร์ mu-plugins -->

៣។ បង្កើតឯកសារ PHP ថ្មីនៅលើកុំព្យូទ័ររបស់អ្នកដែលមានឈ្មោះថា wu-snippet.php ដោយប្រើ Notepad ឬកម្មវិធីកែសម្រួលកូដណាមួយ។

៤។ យក Ultimate Multisite code snippet ដែលអ្នកទទួលបានពី GitHub repository ដាក់ចូលក្នុងឯកសារនោះ ហើយរក្សាទុកវា។ អ្នកក៏អាចបន្ថែមកូដនេះនៅខាងលើ code snippet ដើម្បីដាក់ឈ្មោះ plugin mu របស់អ្នកបានដែរ។
