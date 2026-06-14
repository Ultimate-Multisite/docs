---
title: ការគ្រប់គ្រងពហុអ្នកប្រើប្រាស់របស់ Hostinger
sidebar_position: 8
_i18n_hash: d7facb9c131877c2c834bd2184d9a073
---
# Hostinger Multi-Tenancy

Ultimate Multisite: Multi-Tenancy 1.2.0 បានបន្ថែមសមត្ថភាព multi-tenancy របស់ Hostinger ដែលអនុញ្ញាតឱ្យដែនដែលបានបង្ហោះ (hosted domains) ចូលរួមក្នុងការផ្តល់ tenant sovereign alongside integration ការបែងចែកឈ្មោះដែនដែលមានស្រាប់របស់ Hostinger។

សូមប្រើសមត្ថភាពនេះនៅពេលដែល tenant domains និង tenant infrastructure ដែលត្រូវបានបំបែកត្រូវបានគ្រប់គ្រងតាមរយៈ Hostinger hPanel។

## កំណត់ចំណាំនៃការរៀបចំ (Setup notes)

1. រៀបចំការរួមបញ្ចូល core របស់ Hostinger នៅក្រោម **Ultimate Multisite > Settings > Host Integrations**។
2. បញ្ជាក់ថា Hostinger API token អាចគ្រប់គ្រងដែនគោល ឬ subdomain គោលដៅបាន។
3. បើក addon Multi-Tenancy។
4. រៀបចំយុទ្ធសាស្ត្របំបែក tenant isolation មុនពេលបោះពុម្ព tenant។
5. ដំណើរការ workflow ការផ្ទៀងផ្ទាត់ការផ្លាស់ទី (migration verification) មុននឹងបញ្ជូន traffic ប្រភេទ production ទៅកាន់ tenant។

សមត្ថភាព Hostinger ប្រើប្រាស់ការតភ្ជាប់ Hostinger ដែលចែករំលែកសម្រាប់ការប្រតិបត្តិការនៅខាងម៉ាស៊ីនមេ (host-side operations)។ DNS នៅតែត្រូវតែចង្អុលទៅគណនី Hostinger ដែលត្រឹមត្រូវ ហើយដែនកំណត់គណនី hPanel ក៏នៅតែត្រូវបានអនុវត្តដែរ។

## ការផ្លាស់ប្តូរជាក់លាក់តាមសមត្ថភាព (Capability-specific changes)

- Tenant sovereign អាចត្រូវបានបង្កើតឡើងជាមួយនឹងប្រតិបត្តិការដែនដែលយល់ដឹងពីម៉ាស៊ីនមេ (host-aware domain operations)។
- chuỗi host database នៅលើម៉ាស៊ីនតែមួយនឹងត្រូវបានធ្វើឱ្យធម្មតា (normalized) មុនពេលផ្ដល់ការផ្ទៀងផ្ទាត់។
- Tenant ដែលគ្រប់គ្រងដោយ Hostinger គួរប្រើតម្លៃ host database ដែលបង្ហាញនៅក្នុង hPanel ប្រសិនបើ runtime របស់ WordPress ទាមទារការជំនួសក្នុងស្រុក (local override)។
- ការចូលតាម SSO គឺពឹងផ្អែកលើ tenant domain ក្នុងការដោះស្រាយទៅកាន់ tenant ដែលត្រូវបានបង្ហោះដោយ Hostinger។

## ការដោះស្រាយបញ្ហា Tenant របស់ Hostinger (Troubleshooting Hostinger tenants)

- ប្រសិនបើការដំឡើង tenant របរាជ័យ សូមផ្ទៀងផ្ទាត់ថាដែនត្រូវបានភ្ជាប់ទៅគណនី Hostinger រួចហើយឬនៅ។
- ប្រសិនបើការផ្ទៀងផ្ទាត់ database របរាជ័យ សូមប្រៀបធៀបឈ្មោះអ្នកប្រើប្រាស់ DB, ឈ្មោះ database និងការភ្ជាប់ host ជាមួយ hPanel។
- ប្រសិនបើ **Visit (SSO)** របរាជ័យ សូមបញ្ជាក់ថា DNS និង SSL ដំណើរការសម្រាប់ tenant domain។
- ប្រសិនបើការបិទ (teardown) បន្សល់ទុកនូវធនធានម៉ាស៊ីនមេណាមួយ សូមលុប database, users ឬ folders ដែលនៅសេសសល់ចេញពី hPanel បន្ទាប់ពីបានបញ្ជាក់ការสำรองទិន្នន័យរួច។
