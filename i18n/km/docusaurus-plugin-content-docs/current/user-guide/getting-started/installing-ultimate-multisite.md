---
title: ការដំឡើង Ultimate Multisite
sidebar_position: 12
_i18n_hash: dda8f0d2b67bc421c0a484c76c8eae6d
---
# ការដំឡើង Ultimate Multisite

:::note
ការណែនាំនេះសន្មត់ថាអ្នកបានដំឡើង និងកំណត់រចនាសម្ព័ន្ធ WordPress Multisite រួចហើយ។ ដើម្បីស្វែងយល់ពីរបៀបធ្វើបែបនោះ សូមមើល [ការណែនាំនេះ](https://www.wpbeginner.com/glossary/multisite/) ដោយ WP Beginner។
:::

## ការដំឡើង Plugin

Ultimate Multisite មានឥតគិតថ្លៃនៅលើ [WordPress.org](https://wordpress.org/plugins/ultimate-multisite/)។

ពី **Network Admin Dashboard** របស់អ្នក សូមចូលទៅកាន់ **Plugins → Add New Plugin**។

![Network Admin Add New Plugin page](/img/installation/add-new-plugin.png)

ស្វែងរក **"Ultimate Multisite"** (ដាក់ក្នុងវង់ក្រចកដើម្បីរកការផ្គូផ្គងត្រឹមត្រូវ) ហើយវាលេចឡើងជាលទ្ធផលដំបូង។ ចុចលើ **Install Now**។

![Search results showing Ultimate Multisite](/img/installation/search-ultimate-multisite.png)

បន្ទាប់ពីដំឡើងរួច សូមចុច **Network Activate** ដើម្បីបើកដំណើរការ plugin នេះទូទាំង network របស់អ្នក។

![Plugin installed with Network Activate button](/img/installation/plugin-installed.png)

បន្ទាប់ពីបើកដំណើរការហើយ អ្នកនឹងត្រូវបានបញ្ជូនដោយស្វ័យប្រវត្តិទៅ Setup Wizard។

![Plugin activated and redirected to wizard](/img/installation/plugin-activated.png)

## Setup Wizard

Setup Wizard នឹងណែនាំអ្នកតាមរយៈការកំណត់រចនាសម្ព័ន្ធ Ultimate Multisite ក្នុងរយៈពេលប្រហែល ១០ នាទី។

### Welcome

ចុចលើ **Get Started** ដើម្បីចាប់ផ្តើម។

![Setup Wizard welcome screen](/img/installation/wizard-welcome.png)

### Pre-install Checks

ជំហាននេះនឹងពិនិត្យព័ត៌មានប្រព័ន្ធ និងការដំឡើង WordPress របស់អ្នក ដើម្បីធានាថាវាបំពេញតាមតម្រូវការរបស់ Ultimate Multisite។ ប្រសិនបើអ្វីៗមើលទៅល្អ សូមចុច **Go to the Next Step**។

![Pre-install checks showing system requirements](/img/installation/wizard-pre-install-checks.png)

:::note ប៊ូតុង Network Activate (v2.6.1+)
ប្រសិនបើ Ultimate Multisite ត្រូវបានដំឡើងរួចហើយ ប៉ុន្តែ**មិនទាន់បានបើកដំណើរការជាបណ្តាញទេ** — ឧទាហរណ៍ ប្រសិនបើអ្នកចុច **Activate** (single-site) ជំនួសឱ្យ **Network Activate** ពីអេក្រង់ plugin បណ្តាញ — ជំហាន Pre-install Checks នឹងរកឃើញបញ្ហានេះ ហើយបង្ហាញប៊ូតុង **Network Activate**។

ការចុច **Network Activate** នឹងបើកដំណើរការ plugin នេះទូទាំងបណ្តាញ multisite របស់អ្នកដោយស្វ័យប្រវត្តិ។ នៅពេលបានបើកដំណើរការហើយ wizard នឹងបន្តទៅជំហាន installation ជាធម្មតា។ អ្នកមិនចាំបាច់ចាកចេញពី wizard ដើម្បីជួសជុលស្ថានភាព activation នោះទេ។
:::

### ការដំឡើង (Installation)

Installer នឹងបង្កើត database tables ដែលចាំបាច់ និងដំឡើង file `sunrise.php` ដែល Ultimate Multisite ត្រូវការដើម្បីដំណើរការ។ ចុច **Install** ដើម្បីបន្ត។

![Installation step showing database tables and sunrise.php](/img/installation/wizard-installation.png)

### ក្រុមហ៊ុនរបស់អ្នក (Your Company)

បំពេញព័ត៌មានក្រុមហ៊ុនរបស់អ្នក និងកំណត់រូបិយប័ណ្ណលំនាំដើមរបស់អ្នក។ ព័ត៌មាននេះនឹងត្រូវបានប្រើទូទាំង platform WaaS របស់អ្នក។ ចុច **Continue** នៅពេលធ្វើរួច។

![Your Company configuration step](/img/installation/wizard-your-company.png)

### មាតិកាលំនាំដើម (Default Content)

ជំហាននេះអនុញ្ញាតឱ្យអ្នកដំឡើង template, products និងមាតិកាចាប់ផ្តើមផ្សេងទៀតដែលបានកំណត់ទុកជាមុន។ នេះគឺជាវិធីដ៏ល្អដើម្បីធ្វើឱ្យអ្នកស្គាល់ពីមុខងាររបស់ Ultimate Multisite។ ចុច **Install** ដើម្បីបន្ថែមមាតិកាលំនាំដើម ឬលុបជំហាននេះ ប្រសិនបើអ្នកចង់ចាប់ផ្តើមពីការចាប់ផ្តើមថ្មី។

![Default content installation step](/img/installation/wizard-default-content.png)

### Plugin ដែលត្រូវបានណែនាំ (Recommended Plugins)

ជាជម្រើស សូមដំឡើង plugin គូដែលបានណែនាំ។ ចុច **Install** ដើម្បីបន្ថែមពួកវា ឬលុបជំហាននេះដើម្បីបន្ត។

![Recommended plugins step](/img/installation/wizard-recommended-plugins.png)

### រួចរាល់ហើយ! (Ready!)

រួចរាល់ហើយ! ការដំឡើង Ultimate Multisite របស់អ្នកបានបញ្ចប់។ អ្នកឥឡូវអាចចាប់ផ្តើមបង្កើតវេទិកា Website as a Service របស់អ្នកពី **Network Admin Dashboard** បានហើយ។

![Setup complete - Ready screen](/img/installation/wizard-ready.png)

![Network Admin Dashboard with Ultimate Multisite active](/img/installation/network-dashboard.png)

ចូលទៅលេងសប្បាយបានហើយ!
