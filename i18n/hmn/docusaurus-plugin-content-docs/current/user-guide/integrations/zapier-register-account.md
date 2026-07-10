---
title: Tsoom qhia khoom tsoom ntawv loog hais rau Zapier
sidebar_position: 1
_i18n_hash: f452b2407a1eee1d88505abe1cff8f9e
---
# ព្រឹត្តិការណ៍៖ ចុះឈ្មោះគណនីតាមរយៈ Zapier {#event-register-an-account-via-zapier}

នៅក្នុងអត្ថបទ [Integrating Ultimate Multisite with Zapier](zapier.md) យើងបានពិភាក្សាអំពីរបៀបប្រើ Zapier ដើម្បីធ្វើសកម្មភាពផ្សេងៗក្នុង Ultimate Multisite ដោយផ្អែកលើ trigger និង event។ នៅក្នុងអត្ថបទនេះ យើងនឹងបង្ហាញពីរបៀបដែលអ្នកអាចភ្ជាប់កម្មវិធីភាគីទីបី (3rd party applications)។ យើងនឹងប្រើ Google Sheets ជាប្រភពទិន្នន័យ ហើយបញ្ជូនព័ត៌មានទៅកាន់ Ultimate Multisite ដើម្បីចុះឈ្មោះគណនី។

មុនពេលភ្ជាប់ Zapier សូមចូលទៅកាន់ **Ultimate Multisite > Settings > API & Webhooks** ហើយបញ្ជាក់ថា API ត្រូវបានបើកដំណើរការហើយ។ ចម្លង API Key និង API Secret ពីអេក្រង់នេះ នៅពេលដែល Zapier សួររកព័ត៌មានគណនី Ultimate Multisite។

![API and Webhooks settings with API Key, API Secret, and Enable API options](/img/admin/settings-api-webhooks.png)

ដំបូង អ្នកត្រូវបង្កើត **Google Sheet** មួយនៅក្នុង Google Drive របស់អ្នក។ សូមប្រាកដថាអ្នកបានកំណត់នីតិវិធីនៃជួរឈរនីមួយៗឱ្យត្រឹមត្រូវ ដើម្បីងាយស្រួលក្នុងការបូកបញ្ចូលទិន្នន័យនៅពេលក្រោយ។

បន្ទាប់ពីបង្កើត Google sheet រួច អ្នកអាចចូលទៅក្នុងគណនី Zapier របស់អ្នក ហើយចាប់ផ្តើមបង្កើត zap (workflow)។

ក្រោមប្រអប់ស្វែងរកសម្រាប់ **"App event"** សូមជ្រើសរើស **"Google Sheets"**។

បន្ទាប់មក សម្រាប់វាល "**Event** " សូមជ្រើសរើស **"New spreadsheet row"** ហើយចុច **"Continue"**។

ជំហានបន្ទាប់នឹងសួរអ្នកឱ្យជ្រើសរើស **Google Account** ដែល Google Sheet ត្រូវបានរក្សាទុក។ ដូច្នេះគ្រាន់តែប្រាកដថាបានបញ្ជាក់គណនី Google ត្រឹមត្រូវប៉ុណ្ណោះ។

ក្រោម **"Set up trigger** " អ្នកនឹងត្រូវជ្រើសរើស និងបញ្ជាក់ Google spreadsheet និង worksheet ដែលអ្នកនឹងប្រើសម្រាប់ទិន្នន័យដែលនឹងមកពីនោះ។ គ្រាន់តែបំពេញវា ហើយចុច **"Continue"**។

បន្ទាប់មកគឺ "**test your trigger** " ដើម្បីប្រាកដថា Google sheet របស់អ្នកត្រូវបានភ្ជាប់ត្រឹមត្រូវហើយឬនៅ។

ប្រសិនបើការសាកល្បងរបស់អ្នកជោគជ័យ អ្នកនឹងឃើញលទ្ធផលបង្ហាញតម្លៃមួយចំនួនពី Google sheets របស់អ្នក។ ចុច **"Continue"** ដើម្បីបន្តដំណើរការ។

下一步是設定第二個動作，這個動作會要在 Ultimate Multisite 裡面建立或註冊帳號。在搜尋欄選 "**Ultimate Multisite(2.0.2)**"。

在 "**Event** " (事件) 欄位裡，選 "**Register an Account in Ultimate Multisite** " (在 Ultimate Multisite 中註冊帳號)，然後點擊 "**Continue** " (繼續) 按鈕。

在 "**Set up an action** " (設定動作) 下面，你會看到很多不同的欄位可以填入客戶資料、會員資格、產品等等。你可以把你的 Google Sheet 裡的值對應到正確的欄位，讓它們被填入正確的位置，就像下面的截圖那樣做。

對值進行對應後，你就可以測試這個動作了。
