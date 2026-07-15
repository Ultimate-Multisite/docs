---
title: កម្មវិធីបង្កើត និងប្រអប់សាកល្បង
sidebar_position: 21
_i18n_hash: 74c409a36b52ea261922998822b286d0
---
# Plugin Builder & Sandbox

Gratis AI Agent v1.5.0 ណែនាំ **Plugin Builder & Sandbox System** ដែលអនុញ្ញាតឱ្យជំនួយការ AI បង្កើត បើកដំណើរការ និងគ្រប់គ្រង WordPress plugins នៅលើបណ្តាញរបស់អ្នក — ទាំងអស់នេះតាមរយៈបរិយាកាស sandbox ដែលមានសុវត្ថិភាព និងដាច់ដោយឡែក។

## ទិដ្ឋភាពទូទៅ (Overview) {#overview}

Plugin Builder អនុញ្ញាតឱ្យជំនួយការ AI សរសេរ custom WordPress plugins ជាការឆ្លើយតបនឹងសំណើជាភាសាធម្មជាតិ។ Plugins ដែលបង្កើតឡើងនឹងត្រូវបានផ្ទៀងផ្ទាត់ រក្សាទុក និងបើកដំណើរការនៅក្នុងស្រទាប់ sandbox មុនពេលវាប៉ះពាល់ដល់មុខងាររបស់គេហទំព័រពិត។

ករណីប្រើប្រាស់រួមមាន៖

- បង្កើត plugins ប្រភេទ utility ដែលមានទម្ងន់ស្រាលដោយមិនចាំបាច់ពាក់ព័ន្ធអ្នកអភិវឌ្ឍន៍។
- សាកល្បង (Prototyping) លក្ខណៈពិសេសដែលទាមទារ WordPress hooks ឬ custom post types។
- បង្កើត automation scripts ខ្លីៗសម្រាប់ប្រតិបត្តិការជាបាច់ (batch operations)។

## ការបង្កើត Plugin តាមរយៈ AI {#generating-a-plugin-via-ai}

ដើម្បីបង្កើត plugin សូមបើក chat interface របស់ Gratis AI Agent ហើយពិពណ៌នាអំពីអ្វីដែលអ្នកត្រូវការ។ ឧទាហរណ៍៖

> "Create a plugin that adds a custom admin notice on the dashboard." (បង្កើត plugin ដែលបន្ថែមការជូនដំណឹងសម្រាប់ admin នៅលើ dashboard)

AI នឹងធ្វើដូចខាងក្រោម៖

1. បង្កើត code PHP របស់ plugin ដោយប្រើ structured code generation។
2. ផ្ទៀងផ្ទាត់លទ្ធផលសម្រាប់ការកំហុស syntax និង pattern ដែលមិនមានសុវត្ថិភាព។
3. រក្សាទុក plugin ដែលបង្កើតរួចនៅក្នុង sandbox store។
4. បញ្ជូនការបញ្ជាក់ត្រឡប់មកវិញជាមួយនឹង slug របស់ plugin និងប៊ូតុង **Activate in Sandbox** (បើកដំណើរការក្នុង sandbox)។

អ្នកអាចកែលម្អលទ្ធផលដោយធ្វើការបន្តនៅក្នុងខ្សែសង្វាក់ការសន្ទនាដូចគ្នា មុនពេលបើកដំណើរការ។

## ការបើកដំណើរការក្នុង Sandbox (Sandbox Activation) {#sandbox-activation}

ការបើកដំណើរការ plugin ដែលបង្កើតរួចនៅក្នុង sandbox គឺខុសពីការបើកដំណើរការវាលើបណ្តាញពិត។ Sandbox៖

- រត់ plugin នៅក្នុងបរិយាកាស WordPress ដាច់ដោយឡែក (wp-env)។
- ចាប់យកកំហុស PHP, warnings ឬ hook conflicts ណាមួយ។
- រាយការណ៍លទ្ធផលនៃការបើកដំណើរការត្រឡប់ទៅកាន់ chat interface។

ដើម្បីបើកដំណើរការ plugin នៅក្នុង sandbox សូមចុចលើប៊ូតុង **Activate in Sandbox** (បើកដំណើរការក្នុង sandbox) នៅក្នុងការឆ្លើយតបរបស់ AI ឬប្រើ slash command៖

```
/activate-plugin <plugin-slug>
```

សារស្ថានភាពមួយនឹងបញ្ជាក់ថាការបិទដំណើរការ (activation) ជោគជ័យឬបរាជ័យ។ ប្រសិនបើមានបញ្ហា កំណត់ត្រាប្លុក (error log) នឹងបង្ហាញនៅក្នុងខ្សែមេ (chat thread)។

## ការគ្រប់គ្រង Plugin ដែលបង្កើតដោយស្វ័យប្រវត្តិ (Managing Generated Plugins) {#managing-generated-plugins}

Plugin ដែលបង្កើតដោយស្វ័យប្រវត្តិត្រូវបានរាយនាមនៅក្នុង **Gratis AI Agent → Plugin Builder → Manage Plugins**។ ចាប់ពីអេក្រង់នេះ អ្នកអាច៖

| សកម្មភាព (Action) | ការពិពណ៌នា (Description) |
|---|---|
| **View source** | មើលកូដ PHP ពេញលេញរបស់ plugin។ |
| **Re-activate in sandbox** | រត់ការត្រួតពិនិត្យបិទដំណើរការនៅក្នុង sandbox ឡើងវិញ។ |
| **Install on network** | ដំឡើង plugin ទៅក្នុងបណ្តាញពិត (live network) (តម្រូវឱ្យមានការបញ្ជាក់ដោយដៃ)។ |
| **Update** | ផ្តល់កំណែថ្មីតាមរយៈ AI ដោយជំនួសកូដដែលមានស្រាប់។ |
| **Delete** | លុប plugin ចេញពី sandbox store។ បិទដំណើរការវាចេញពីគ្រប់គេហទំព័រទាំងអស់ជាមុនសិន។ |

:::warning
**Install on network** នឹងដាក់ plugin ដែលបង្កើតដោយស្វ័យប្រវត្តិទៅក្នុង WordPress multisite ពិតរបស់អ្នក។ សូមពិនិត្យមើលកូដ plugin មុនពេលបន្ត។ Gratis AI Agent នឹងសួរដើម្បីបញ្ជាក់មុនពេលបញ្ចប់ការដំឡើងនៅលើ live site។
:::

## ការដំឡើង Plugin ដែលបង្កើតដោយស្វ័យប្រវត្តិនៅលើ Network (Installing a Generated Plugin on the Network) {#installing-a-generated-plugin-on-the-network}

នៅពេលអ្នកពេញចិត្តនឹង plugin ដែលស្ថិតនៅក្នុង sandbox អ្នកអាចដំឡើងវាទៅក្នុង network ពិតបាន៖

1. ចូលទៅកាន់ **Gratis AI Agent → Plugin Builder → Manage Plugins**។
2. ចុចលើ **Install on Network** នៅជាប់នឹង plugin ដែលអ្នកចង់ដាក់ដំណើរការ។
3. បញ្ជាក់ប្រអប់ dialog (dialog)។ plugin នឹងត្រូវបានដំឡើងនៅទីតាំង `wp-content/plugins/` និងបើកដំណើរការនៅលើ network។

ឬ អ្នកអាចប្រើ slash command នៅក្នុង chat interface៖

```
/install-plugin <plugin-slug>
```

## ការធ្វើបច្ចុប្បន្នភាព Plugin (Plugin Updates) {#plugin-updates}

ដើម្បីធ្វើបច្ចុប្បន្នភាព plugin ដែលបង្កើតដោយស្វ័យប្រវត្តិ សូមពិពណ៌នាអំពីការផ្លាស់ប្តូរទៅកាន់ជំនួយការ AI នៅក្នុងការសន្ទនាថ្មី៖

> "Update the dashboard-notice plugin to only show the notice to administrators." (ធ្វើបច្ចុប្បន្នភាព plugin dashboard-notice ដើម្បីបង្ហាញតែការជូនដំណឹងដល់អ្នកគ្រប់គ្រងប៉ុណ្ណោះ)

AI នឹងបង្កើតកំណែថ្មីមួយ ដែលនឹងបង្ហាញនៅក្នុង sandbox បន្ថែមលើកំណែបច្ចុប្បន្ន។ អ្នកពិនិត្យមើលប្រភពនៃការផ្លាស់ប្តូរ (diff) ហើយបញ្ជាក់មុនពេលអនុវត្តការធ្វើបច្ចុប្បន្នភាព។

## ការរួមបញ្ចូល HookScanner {#hookscanner-integration}

Plugin Builder ប្រើ **HookScanner** ដែលត្រូវបានរួមបញ្ចូល ដើម្បីវិភាគ hooks និង filters ដែលបានចុះបញ្ជីដោយ plugin ដែលបង្កើតឡើងនីមួយៗ។ លទ្ធផលរបស់ HookScanner នឹងបង្ហាញនៅក្នុងការឆ្លើយតបក្នុង chat ហើយរួមមាន៖

- action hooks ដែលបានចុះបញ្ជី (`add_action` calls)។
- filter hooks ដែលបានចុះបញ្ជី (`add_filter` calls)។
- រាល់ hooks ដែលរកឃើញនៅក្នុង dependencies របស់ plugin (វានឹងរំលង directories `vendor/` និង `node_modules/`)។

នេះជួយឱ្យអ្នកយល់ពីឥរិយាបថរបស់ plugin មុនពេលធ្វើការ activate វា។

## ការពិចារណាផ្នែកសុវត្ថិភាព {#security-considerations}

- plugins ដែលបង្កើតឡើងត្រូវបានរក្សាទុកដោយឡែកពី plugins ដែលអ្នកបានដំឡើងដោយដៃ ហើយមិនអាចចូលប្រើបានតាមរយៈអេក្រង់គ្រប់គ្រង plugin ធម្មតានៅទូទាំង network ទេ រហូតដល់អ្នកដំឡើងពួកវាដោយផ្ទាល់នៅលើ network។
- sandbox ប្រើ path validation ដើម្បីការពារការរុញច្រាន directory នៅពេលសរសេរ file plugin។
- plugins ដែលមានការហៅមុខងារគ្រោះថ្នាក់ (ដូចជា `eval`, `exec`, `system`) នឹងត្រូវបានសម្គាល់ក្នុងអំឡុងពេលត្រួតពិនិត្យ ហើយនឹងមិនត្រូវបាន activate ទេ។
