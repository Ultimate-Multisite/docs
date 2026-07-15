---
title: ការរួមបញ្ចូល Hestia Control Panel
sidebar_position: 7
_i18n_hash: 252519613f4d84d44875a5b2090e4bd6
---
# ការតភ្ជាប់ជាមួយ Hestia Control Panel

មគ្គុទ្ទេសក៍នេះនឹងពន្យល់ពីរបៀបកំណត់រចនាសម្ព័ន្ធការរួមបញ្ចូល Ultimate Multisite Hestia ដើម្បីឱ្យដែនដែលបានបិទភ្ជាប់នៅក្នុងបណ្តាញរបស់អ្នកត្រូវបានបន្ថែម (និងដកចេញ) ជា Web Domain Aliases នៅក្នុង Hestia ដោយស្វ័យប្រវត្តិ។

- សេចក្តីឯកសារ CLI របស់ Hestia: v-add-web-domain-alias / v-delete-web-domain-alias
- សេចក្តីឯកសារ REST API ផ្លូវការ: https://hestiacp.com/docs/server-administration/rest-api.html

## វាធ្វើអ្វីខ្លះ {#what-it-does}
- នៅពេលដែលដែនមួយត្រូវបានបិទភ្ជាប់នៅក្នុង Ultimate Multisite ការរួមបញ្ចូលនេះនឹងហៅ Hestia API ដើម្បីដំណើរការ៖
  - `v-add-web-domain-alias <USER> <DOMAIN> <ALIAS> [RESTART]`
- នៅពេលដែលការបិទភ្ជាប់ដែនត្រូវបានលុប វាដំណើរការ៖
  - `v-delete-web-domain-alias <USER> <DOMAIN> <ALIAS> [RESTART]`
- ជម្រើសបន្ថែម/ដកចេញនូវអាលីអាស `www.` ទៅតាមការកំណត់ "Auto-create www subdomain" របស់អ្នកនៅក្នុងការកំណត់ Domain Mapping។

## តម្រូវការជាមុន {#prerequisites}
- Web Domain របស់ Hestia ដែលមានស្រាប់ដែលបានចង្អុលទៅការដំឡើង WordPress របស់អ្នក។ ការរួមបញ្ចូលនេះនឹងភ្ជាប់អាលីអាសទៅលើដែនមូលដ្ឋាននេះ។
- បើកដំណើរការការចូលប្រើ API របស់ Hestia។ អ្នកអាចផ្ទៀងផ្ទាត់ខ្លួនដោយប្រើលេខសម្ងាត់ ឬ API hash/token។

សូមមើលឯកសារ REST API របស់ Hestia ដើម្បីបើកដំណើរការការចូលប្រើ API និងព័ត៌មានលម្អិតនៃការផ្ទៀងផ្ទាត់៖
https://hestiacp.com/docs/server-administration/rest-api.html

## ការកំណត់រចនាសម្ព័ន្ធ (Wizard → Integrations → Hestia) {#configuration-wizard--integrations--hestia}
ផ្តល់នូវតម្លៃដូចខាងក្រោម៖

- `WU_HESTIA_API_URL` (필수)
  - ចំណុចបញ្ចប់ API មូលដ្ឋាន ដែលជាធម្មតាគឺ `https://your-hestia-host:8083/api/`.
- `WU_HESTIA_API_USER` (필수)
  - អ្នកប្រើប្រាស់ Hestia ដែលប្រើសម្រាប់ពាក្យបញ្ជា API (ជាញឹកញាប់គឺ `admin`).
- `WU_HESTIA_API_PASSWORD` ឬ `WU_HESTIA_API_HASH` (យ៉ាងហោចណាស់មួយ)
  - ជ្រើសរើសវិធីផ្ទៀងផ្ទាត់មួយ៖ ពាក្យសម្ងាត់ ឬ API hash/token។
- `WU_HESTIA_ACCOUNT` (필수)
  - ប្រគល់ម្ចាស់ (owner) នៃ Web Domain នៅក្នុង Hestia; នេះគឺជាអំណះអំណាងទីមួយសម្រាប់ CLI។
- `WU_HESTIA_WEB_DOMAIN` (필수)
  - Web Domain ដែលមានស្រាប់នៅក្នុង Hestia ដែលបម្រើ WordPress របស់អ្នក (Aliases នឹងត្រូវបានភ្ជាប់នៅទីនេះ)។
- `WU_HESTIA_RESTART` (ជ tùy chọn; កំណត់លំនាំគឺ `yes`)
  - តើត្រូវចាប់ផ្តើម/ផ្ទុកឡើងវិញនូវសេវាកម្មដែរឬទេ បន្ទាប់ពីផ្លាស់ប្តូរ alias។

អ្នកអាចអនុញ្ញាតឱ្យ wizard បញ្ចូល constant ទាំងនេះទៅក្នុង `wp-config.php` ឬកំណត់វាដោយដៃ។

## ការផ្ទៀងផ្ទាត់ការរៀបចំ {#verifying-setup}
- នៅក្នុងជំហាន “Testing” នៃ wizard, plugin នឹងហៅ `v-list-web-domains <WU_HESTIA_ACCOUNT> json` តាមរយៈ API។ ចម្លើយជោគជ័យបញ្ជាក់ពីការតភ្ជាប់ និងការផ្ទៀងផ្ទាត់។
- បន្ទាប់ពីបំប្លែង domain រួច សូមពិនិត្យនៅក្នុង Hestia៖ Web > domain មូលដ្ឋាន > Aliases។ អ្នកគួរតែឃើញ alias ថ្មីត្រូវបានបន្ថែម។

## កំណត់សម្គាល់ និងគន្លឹះ {#notes--tips}
- ត្រូវប្រាកដថា `WU_HESTIA_WEB_DOMAIN` មានស្រាប់ហើយ ហើយត្រូវបានកាន់កាប់ដោយ `WU_HESTIA_ACCOUNT`។
- ប្រសិនបើ SSL ទាមទារ សូមគ្រប់គ្រងវិញ្ញាបនបត្រនៅ Hestia។ ការរួមបញ្ចូលនេះបច្ចុប្បន្នគ្រប់គ្រាន់តែសម្រាប់ alias ប៉ុណ្ណោះ។
- plugin ក៏អាចបន្ថែម/លុប `www.<domain>` ផងដែរ អាស្រ័យលើការកំណត់ "www subdomain" របស់អ្នកសម្រាប់ការបំប្លែង Domain ។

## ឧទាហរណ៍នៃការហៅ API (cURL) {#example-api-call-curl}
ខាងក្រោមនេះគឺជាឧទាហរណ៍គំនិតមួយ (សូមកែសម្រួលទៅតាមបរិយាកាសរបស់អ្នក)។ សូមមើលឯកសារផ្លូវការសម្រាប់ប៉ារ៉ាម៉ែត្រជាក់លាក់។

POST https://your-hestia-host:8083/api/
Content-Type: application/x-www-form-urlencoded

cmd=v-add-web-domain-alias
&user=admin
&password=YOUR_API_PASSWORD  (ឬ &hash=YOUR_API_HASH)
&arg1=admin                  (WU_HESTIA_ACCOUNT)
&arg2=network.example.com    (WU_HESTIA_WEB_DOMAIN)
&arg3=customer-domain.com    (alias ដើម្បីបន្ថែម)
&arg4=yes                    (WU_HESTIA_RESTART)
&returncode=yes

សម្រាប់ការលុប សូមប្រើ `cmd=v-delete-web-domain-alias` និងប៉ារ៉ាម៉ែត្រដូចគ្នា។

## ការដោះស្រាយបញ្ហា (Troubleshooting) {#troubleshooting}
- កំហុស HTTP ពី API: សូមពិនិត្យមើលថា `WU_HESTIA_API_URL` អាចទៅដល់បានទេ ហើយមាន `/api` រួមបញ្ចូលដែរឬទេ។
- កំហុសការផ្ទៀងផ្ទាត់អត្តសញ្ញាណ (Auth errors): សូមបញ្ជាក់ថា `WU_HESTIA_API_USER` និងទាំង `WU_HESTIA_API_PASSWORD` ឬ `WU_HESTIA_API_HASH`។
- "Missing account/base domain" នៅក្នុង logs: សូមប្រាកដថា `WU_HESTIA_ACCOUNT` និង `WU_HESTIA_WEB_DOMAIN` ត្រូវបានកំណត់ និងត្រឹមត្រូវនៅក្នុង Hestia។

## សំណុំឯកសារយោង (References) {#references}
- Hestia REST API: https://hestiacp.com/docs/server-administration/rest-api.html
- Hestia CLI Reference (Aliases): https://hestiacp.com/docs/reference/cli.html#v-add-web-domain-alias
