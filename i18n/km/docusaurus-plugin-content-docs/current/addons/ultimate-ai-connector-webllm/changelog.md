---
title: កំណត់ហេតុផ្លាស់ប្តូរ Ultimate AI Connector សម្រាប់ WebLLM
sidebar_position: 99
_i18n_hash: da117fc30b104eada947892d417a2899
---
# កំណត់ហេតុការផ្លាស់ប្តូរ Ultimate AI Connector for WebLLM

## កំណែ 1.1.0 — ចេញផ្សាយនៅ 2026-04-09

* ថ្មី៖ widget ជជែកអណ្តែត ជាមួយ​សូចនាករ​ស្ថានភាព​លើ​របារ admin — អ្នកប្រើ​ដែល​បាន​ចូល​ប្រព័ន្ធ​ណាមួយ​អាច​ផ្ញើ prompt ទៅ LLM ខាង browser ដោយផ្ទាល់​ពី​ផ្នែក​ខាង​មុខ។
* ថ្មី៖ runtime SharedWorker — MLC engine ឥឡូវ​ដំណើរការ​ក្នុង SharedWorker ដូច្នេះ​ផ្ទាំង​ច្រើន​អាច​ចែករំលែក​សម័យ GPU តែមួយ ជំនួស​ឱ្យ​ការ​ប្រជែង​គ្នា។
* ថ្មី៖ interceptor middleware apiFetch — សំណើ WordPress REST ដែល​ត្រូវ​នឹង​លំនាំ AI Client SDK នឹង​ត្រូវ​បាន​បញ្ជូន​ដោយ​ស្វ័យប្រវត្តិ​ទៅ WebLLM broker មូលដ្ឋាន មិន​ចាំបាច់​ធ្វើ​ដំណើរ HTTP loopback ទេ។
* ថ្មី៖ UI ការកំណត់ widget ក្នុង​ផ្ទាំង Connector សម្រាប់​បើក/បិទ widget ជជែក និង​កំណត់​រចនាសម្ព័ន្ធ​ឥរិយាបថ auto-prompt។
* ជួសជុល៖ បង្ខំ​ឱ្យ​ប្រើ backend cache IndexedDB ដើម្បី​ឱ្យ​ការ​ទាញយក​ទម្ងន់​ម៉ូដែល​នៅតែ​នៅ​មាន បន្ទាប់​ពី​ការ​បង្វែរ​ទិស HuggingFace xet CDN ដែល​ធ្វើ​ឱ្យ​ផ្លូវ Cache API លំនាំដើម​ខូច។
* ជួសជុល៖ រំលង​ការ override KV-cache `context_window` សម្រាប់​ម៉ូដែល embedding (វា​មិន​មាន decoder ហើយ​ការ override នេះ​បាន​បង្ក​ឱ្យ​មាន​កំហុស​ពេល​ដំណើរការ)។
* ជួសជុល៖ ផ្សព្វផ្សាយ​ម៉ូដែល​បេក្ខជន cold-start ក្នុង /webllm/v1/models មុន​ពេល​ផ្ទាំង worker បាន​ផ្ទុក ដូច្នេះ​អ្នកប្រើប្រាស់ SDK អាច​ឃើញ​ម៉ូដែល​ភ្លាមៗ។
* ជួសជុល៖ ភ្ជាប់ WebLLM ទៅ​ក្នុង filter `wpai_preferred_text_models` ដើម្បី​ឱ្យ​មុខងារ AI Experiments បញ្ជូន​ទៅ browser engine នៅ​ពេល​បាន​កំណត់​រចនាសម្ព័ន្ធ​ម៉ូដែល។
* កែលម្អ៖ ការ Cache-busting, ការ​ធ្វើ​ឱ្យ​មាតិកា​មាន​ស្តង់ដារ, និង​ការ​ជួសជុល​ឯកសារយោង​ផ្នែក hardware ដែល​បាន​លេចឡើង​ក្នុង​អំឡុង​ការ​សាកល្បង​ពី​ចុង​ដល់​ចុង។

## កំណែ 1.0.0 — ការ​ចេញផ្សាយ​ដំបូង
