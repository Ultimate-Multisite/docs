---
title: ការដំឡើង Ultimate Multisite
sidebar_position: 12
_i18n_hash: dda8f0d2b67bc421c0a484c76c8eae6d
---
# ការដំឡើង Ultimate Multisite {#installing-ultimate-multisite}

:::note
ការណែនាំនេះ គឺតម្រូវឱ្យអ្នកបានដំឡើង និងកំណត់រចនាសម្ព័ន្ធ WordPress Multisite រួចហើយ។ ដើម្បីស្វែងយល់ពីរបៀបធ្វើ សូមពិនិត្យមើល [ការណែនាំនេះ](https://www.wpbeginner.com/glossary/multisite/) ដោយ WP Beginner។
:::

## ការដំឡើង Plugin {#installing-the-plugin}

Ultimate Multisite អាចរកបានដោយឥតគិតថ្លៃនៅលើ [WordPress.org](https://wordpress.org/plugins/ultimate-multisite/)។

ពី **Network Admin Dashboard** របស់អ្នក សូមចូលទៅកាន់ **Plugins → Add New Plugin**។

![ទំព័រ Network Admin Add New Plugin](/img/installation/add-new-plugin.png)

ស្វែងរក **"Ultimate Multisite"** (ដាក់នៅក្នុង "" ដើម្បីទទួលបានលទ្ធផលដែលស៊ីគ្នា) ហើយវានឹងបង្ហាញជាលទ្ធផលដំបូង។ ចុច **Install Now**។

![លទ្ធផលការស្វែងរកដែលបង្ហាញ Ultimate Multisite](/img/installation/search-ultimate-multisite.png)

បន្ទាប់ពីបានដំឡើងរួច សូមចុច **Network Activate** ដើម្បីធ្វើឱ្យ plugin ដំណើរការពេញលេញនៅក្នុងបណ្តាញរបស់អ្នក។

![Plugin បានដំឡើងជាមួយនឹងប៊ូតុង Network Activate](/img/installation/plugin-installed.png)

បន្ទាប់ពីធ្វើឱ្យដំណើរការរួច អ្នកនឹងត្រូវបានបញ្ជូនទៅកាន់ Setup Wizard ដោយស្វ័យប្រវត្តិច្បាស់។

![Plugin បានធ្វើឱ្យដំណើរការ និងបញ្ជូនទៅកាន់ wizard](/img/installation/plugin-activated.png)

## Setup Wizard {#setup-wizard}

Setup Wizard នឹងជួយអ្នកក្នុងការកំណត់រចនាសម្ព័ន្ធ Ultimate Multisite ក្នុងរយៈពេលប្រមាណ ១០នាទី។

### ការស្វាគមន៍ {#welcome}

ចុច **Get Started** ដើម្បីចាប់ផ្តើម។

![អេក្រង់ស្វាគមន៍ Setup Wizard](/img/installation/wizard-welcome.png)

### ការត្រួតពិនិត្យមុនដំឡើង {#pre-install-checks}

ជំហាននេះ នឹងធ្វើការត្រួតពិនិត្យព័ត៌មានប្រព័ន្ធ និងការដំឡើង WordPress របស់អ្នក ដើម្បីឱ្យប្រាកដថា វាបំពេញតាមតម្រូវការរបស់ Ultimate Multisite។ ប្រសិនបើអ្វីៗគ្រប់យ៉ាងដំណើរការបានល្អ សូមចុច **Go to the Next Step**។

![ការត្រួតពិនិត្យមុនដំឡើងដែលបង្ហាញតម្រូវការប្រព័ន្ធ](/img/installation/wizard-pre-install-checks.png)

:::note ប៊ូតុង Network Activate (v2.6.1+)
ប្រសិនបើ Ultimate Multisite បានដំឡើងរួច ប៉ុន្តែ **មិនទាន់បានធ្វើឱ្យដំណើរការពេញបណ្តាញ** នោះទេ — ឧទាហរណ៍ ប្រសិនបើអ្នកចុច **Activate** (សម្រាប់តំបន់តែមួយ) ជំនួសឱ្យ **Network Activate** ពីអេក្រង់ plugin នៅក្នុងបណ្តាញ ការត្រួតពិនិត្យមុនដំឡើង នឹងរកឃើញបញ្ហានេះ ហើយបង្ហាញប៊ូតុង **Network Activate**។

ការចុច **Network Activate** នឹងធ្វើឱ្យ plugin ដំណើរការពេញលេញនៅក្នុងបណ្តាញ multisite របស់អ្នក ដោយស្វ័យប្រវត្តិច្បាស់។ នៅពេលដែលបានធ្វើឱ្យដំណើរការរួច ដំណើរការ wizard នឹងបន្តទៅជំហានដំឡើងតាមធម្មតា។ អ្នកមិនចាំបាច់ចេញពី wizard ដើម្បីដោះស្រាយបញ្ហាការធ្វើឱ្យដំណើរការនោះទេ។
:::

### ការដំឡើង {#installation}

កម្មវិធីដំឡើង នឹងបង្កើតតារាងទិន្នន័យដែលត្រូវការ និងដំឡើង `sunrise.php` ដែលជាឯកសារដែល Ultimate Multisite ត្រូវការដើម្បីដំណើរការ។ ចុច **Install** ដើម្បីបន្ត។

![ជំហានដំឡើងដែលបង្ហាញតារាងទិន្នន័យ និង sunrise.php](/img/installation/wizard-installation.png)

### ក្រុមហ៊ុនរបស់អ្នក {#your-company}

បំពេញព័ត៌មានអំពីក្រុមហ៊ុនរបស់អ្នក ហើយកំណត់រូបិយប័ណ្ណជាលំនាំដើម។ ព័ត៌មាននេះនឹងត្រូវបានប្រើប្រាស់នៅក្នុងវេទិកា WaaS របស់អ្នក។ ចុច **Continue** នៅពេលដែលបានបញ្ចប់។

![ជំហានការកំណត់រចនាសម្ព័ន្ធ Your Company](/img/installation/wizard-your-company.png)

### មាតិកាជាលំនាំដើម {#default-content}

ជំហាននេះ អនុញ្ញាតឱ្យអ្នកដំឡើងទម្រង់ ផលិតផល និងមាតិកាចាប់ផ្តើមផ្សេងទៀតដែលបានកំណត់ទុកមុន។ នេះគឺជាវិធីដ៏ល្អដើម្បីស្វែងយល់ពីមុខងាររបស់ Ultimate Multisite។ ចុច **Install** ដើម្បីបន្ថែមមាតិកាជាលំនាំដើម ឬរំលងជំហាននេះ ប្រសិនបើអ្នកចង់ចាប់ផ្តើមពីដំបូង។

![ជំហានការដំឡើងមាតិកាជាលំនាំដើម](/img/installation/wizard-default-content.png)

### Plugin ដែលបានណែនាំ {#recommended-plugins}

ដំឡើង plugin ជំនួយដែលបានណែនាំតាមតម្រូវការ។ ចុច **Install** ដើម្បីបន្ថែមពួកវា ឬរំលងដើម្បីបន្ត។

![ជំហាន plugin ដែលបានណែនាំ](/img/installation/wizard-recommended-plugins.png)

### រួចរាល់! {#ready}

ចប់ហើយ! ការដំឡើង Ultimate Multisite របស់អ្នក បានបញ្ចប់រួចហើយ។ អ្នកអាចចាប់ផ្តើមបង្កើតវេទិកា Website as a Service របស់អ្នកពី **Network Admin Dashboard** ។

![ការកំណត់រចនាសម្ព័ន្ធបានបញ្ចប់ - អេក្រង់ Ready](/img/installation/wizard-ready.png)

![Network Admin Dashboard ដែលមាន Ultimate Multisite បានធ្វើឱ្យដំណើរការ](/img/installation/network-dashboard.png)

សូមរីករាយ!
