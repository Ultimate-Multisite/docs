---
title: Tsim sijhawm Ultimate Multisite
sidebar_position: 12
_i18n_hash: dda8f0d2b67bc421c0a484c76c8eae6d
---
# ຕິດຕັ້ງ Ultimate Multisite

:::note
ᱱᱚᱣᱟ 튜토리얼​က WordPress Multisite ຕິດຕັ້ງ​ပြီး​ configurate လုပ်ထား​ཡོད་​လို့​ສົມუშ🇨️ ຖື​ວ່າ​ເລີ່ມຕົ້ນ​ပြီ။ ဘယ်လိုလုပ်ရမလဲ သိချင်ရင် WP Beginner ရဲ့ [ဒီ tutorial](https://www.wpbeginner.com/glossary/multisite/) ကို ကြည့်နိုင်ပါတယ်။
:::

## Plugin ຕິດຕັ້ງလုပ်နည်း

Ultimate Multisite ကို [WordPress.org](https://wordpress.org/plugins/ultimate-multisite/) မှာ အခမဲ့ ရရှိနိုင်ပါတယ်။

သင့်ရဲ့ **Network Admin Dashboard** ကနေ သွားပြီး **Plugins → Add New Plugin** ကို ရွေးပါ။

![Network Admin Add New Plugin page](/img/installation/add-new-plugin.png)

**"Ultimate Multisite"** လို့ ရှာလိုက်ရင် ပထမဆုံး ရလာမှာ ဖြစ်ပါတယ်။ **Install Now** ကို နှိပ်ပါ။

![Search results showing Ultimate Multisite](/img/installation/search-ultimate-multisite.png)

တပ်ဆင်ပြီးသွားရင် သင့်ရဲ့ network တစ်ခုလုံးမှာ plugin အလုပ်လုပ်ဖို့အတွက် **Network Activate** ကို နှိပ်လိုက်ပါ။

![Plugin installed with Network Activate button](/img/installation/plugin-installed.png)

Activate လုပ်ပြီးတာနဲ့ Setup Wizard ဆီကို အလိုအလျောက် ပြောင်းသွားပါလိမ့်မယ်။

![Plugin activated and redirected to wizard](/img/installation/plugin-activated.png)

## Setup Wizard

Setup Wizard က Ultimate Multisite ကို ဘယ်လို configure လုပ်ရမလဲဆိုတာ မိနစ် ၁၀ လောက်အတွင်း သင့်ကို လမ်းညွှန်ပေးပါလိမ့်မယ်။

### ကြိုဆိုခြင်း (Welcome)

စတင်ဖို့အတွက် **Get Started** ကို နှိပ်ပါ။

![Setup Wizard welcome screen](/img/installation/wizard-welcome.png)

### တပ်ဆင်မှု မလုပ်ခင် စစ်ဆေးမှုများ (Pre-install Checks)

ဒီအဆင့်က သင့်ရဲ့ system အချက်အလက်တွေနဲ့ WordPress installation ကို Ultimate Multisite လိုအပ်ချက်တွေနဲ့ ကိုက်ညီမှုရှိမရှိ စစ်ဆေးပေးပါလိမ့်မယ်။ အရာအားလုံး ကောင်းနေရင် **Go to the Next Step** ကို နှိပ်ပါ။

![Pre-install checks showing system requirements](/img/installation/wizard-pre-install-checks.png)

:::note ប៊ូតុង Network Activate (v2.6.1+)
ប្រសិនបើអ្នកបានដំឡើង Ultimate Multisite ប៉ុន្តែ**មិនទាន់បានបើកដំណើរការជាបណ្តាញទេ** — ឧទាហរណ៍ ប្រសិនបើអ្នកចុច **Activate** (single-site) ជំនួសឱ្យ **Network Activate** ពីអេក្រង់ plugin network — ជំហាន Pre-install Checks នឹងរកឃើញរឿងនេះ ហើយបង្ហាញប៊ូតុង **Network Activate**។

ការចុច **Network Activate** នឹងបើកដំណើរការ plugin នោះពេញបណ្តាញ multisite របស់អ្នកដោយស្វ័យប្រវត្តិ។ នៅពេលបានបើកហើយ wizard នឹងបន្តទៅជំហាន installation ជាធម្មតា។ អ្នកមិនចាំបាច់ចាកចេញពី wizard ដើម្បីជួសជុលស្ថានភាព activation ទេ។
:::

### ការដំឡើង (Installation)

Installer នឹងបង្កើត database tables ដែលចាំបាច់ និងដំឡើង file `sunrise.php` ដែល Ultimate Multisite ត្រូវការដើម្បីដំណើរការ។ ចុច **Install** ដើម្បីបន្ត។

![Installation step showing database tables and sunrise.php](/img/installation/wizard-installation.png)

### ក្រុមហ៊ុនរបស់អ្នក (Your Company)

បំពេញព័ត៌មានក្រុមហ៊ុនរបស់អ្នក និងកំណត់រូបិយប័ណ្ណលំនាំដើមរបស់អ្នក។ ព័ត៌មាននេះនឹងត្រូវបានប្រើពេញវេទិកា WaaS របស់អ្នក។ ចុច **Continue** នៅពេលរួចរាល់។

![Your Company configuration step](/img/installation/wizard-your-company.png)

### មាតិកាលំនាំដើម (Default Content)

ជំហាននេះអនុញ្ញាតឱ្យអ្នកដំឡើង template, products និងមាតិកាចាប់ផ្តើមផ្សេងទៀតដែលបានកំណត់ទុកជាមុន។ នេះគឺជាវិធីដ៏ល្អដើម្បីស្គាល់ពីមុខងាររបស់ Ultimate Multisite។ ចុច **Install** ដើម្បីបន្ថែមមាតិកាលំនាំដើម ឬលុបជំហាននេះ ប្រសិនបើអ្នកចង់ចាប់ផ្តើមពីការចាប់ផ្តើមថ្មី។

![Default content installation step](/img/installation/wizard-default-content.png)

### Plugin ដែលត្រូវបានណែនាំ (Recommended Plugins)

ជាជម្រើស ដំឡើង plugin គaccompaniers ដែលត្រូវបានណែនាំ។ ចុច **Install** ដើម្បីបន្ថែមពួកវា ឬលុបដើម្បីបន្ត។

![Recommended plugins step](/img/installation/wizard-recommended-plugins.png)

### រួចរាល់ហើយ! (Ready!)

Tsis txhob tsis txhob! Installation ntawm **Ultimate Multisite** cua koj zoo heev. Kuv yuav txhua tus tsim phoj (Website as a Service platform) los ntawm **Network Admin Dashboard**.

![Setup complete - Ready screen](/img/installation/wizard-ready.png)

![Network Admin Dashboard with Ultimate Multisite active](/img/installation/network-dashboard.png)

Tsis txhob tsis txhob, hais rau koj ua siab!
