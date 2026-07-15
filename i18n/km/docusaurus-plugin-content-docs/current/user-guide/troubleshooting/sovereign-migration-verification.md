---
title: ការផ្ទៀងផ្ទាត់ការផ្លាស់ប្តូរអធិបតេយ្យភាព
sidebar_position: 16
_i18n_hash: a19bc6263b278573f09cbba17581f632
---
# ការផ្ទៀងផ្ទាត់ការផ្លាស់ប្តូរអធិបតេយ្យភាព (Sovereign Migration Verification)

Ultimate Multisite: Multi-Tenancy 1.2.0 មានពាក្យបញ្ជាសម្រាប់ WP-CLI ដើម្បីផ្ទៀងផ្ទាត់ការផ្លាស់ប្តូរ tenant ដែលមានលក្ខណៈអធិបតេយ្យ។ សូមប្រើវា នៅពេលដែលការផ្លាស់ប្តូរ tenant, ការចូលមើល SSO ឬការដំឡើងដោយឡែក មិនដំណើរការដូចការរំពឹងទុកទេ។

## ពាក្យបញ្ជាសម្រាប់ដំណើរការ (Commands to run) {#commands-to-run}

ដំណើរការការផ្ទៀងផ្ទាត់ពីការដំឡើង WordPress លើបណ្តាញ៖

```bash
wp tenant verify-no-legacy --site=<site-id>
wp tenant verify-sovereign-push --site=<site-id>
```

ប្រើ site ID សម្រាប់ tenant ដែលអ្នកកំពុងផ្លាស់ប្តូរ។ ពាក្យបញ្ជាទីមួយនឹងពិនិត្យមើលថាតើតេនង់នោះមិនពឹងផ្អែកលើទិន្នន័យចាស់ៗនៅខាងបណ្តាញទៀតទេ។ ពាក្យបញ្ជាទីពីរនឹងផ្ទៀងផ្ទាត់ថា job សម្រាប់ sovereign push អាចដំណើរការ និងបង្ហូរចេញបាន។

## ការបរាជ័យទូទៅ (Common failures) {#common-failures}

### ការអនុញ្ញាតមូលដ្ឋានទិន្នន័យមិនត្រូវគ្នាជាមួយ host {#database-grants-do-not-match-the-host}

ប្រសិនបើការផ្ទៀងផ្ទាត់រាយការណ៍ពីបញ្ហា grant ឬ writer-user សូមពិនិត្យមើល database host ដែលបានកំណត់។ `localhost`, `127.0.0.1` និងឈ្មោះ service ក្នុង container គឺជា database host MySQL ផ្សេងៗគ្នា។ សូមធ្វើបច្ចុប្បន្នភាព binding host tenant ឬ database grants បន្ទាប់មកដំណើរការការផ្ទៀងផ្ទាត់ឡើងវិញ។

### ការដំឡើង Bedrock ឬ local socket មិនអាចភ្ជាប់បានទេ {#bedrock-or-local-installs-cannot-connect}

Bedrock និង local socket installs អាចរាយការណ៍ថា database ជា `localhost` ខណៈពេលដែល runtime ភ្ជាប់តាមរយៈអាសយដ្ឋានធម្មតា (normalized address)។ កំណែ 1.2.0 ធ្វើឱ្យ host string ក្នុងម៉ាស៊ីនតែមួយមានលក្ខណៈដូចគ្នា ប៉ុន្តែ override host ដែលអ្នកកំណត់ដោយខ្លួនឯងនៅតែអាចប៉ះទង្គិចជាមួយ database grants បាន។

### Async push queue មិនបានបង្ហូរចេញទេ (does not drain) {#async-push-queue-does-not-drain}

ប្រសិនបើ `verify-sovereign-push` មិនបញ្ចប់ សូមពិនិត្យមើល Action Scheduler ឬ async runner ដែលបានកំណត់។ សូមលុប job ដែលបរាជ័យ បន្ទាប់ពីបញ្ជាក់ថាវាមានសុវត្ថិភាពដើម្បីព្យាយាមម្តងទៀត ឬបោះបង់ចោល។

### ចំនួនអ្នកប្រើប្រាស់ tenant មិនត្រឹមត្រូវទេ (Tenant user count is wrong) {#tenant-user-count-is-wrong}

ការផ្លាស់ប្តូរគួរតែបង្កើតអ្នកប្រើប្រាស់សម្រាប់ tenant ដែលមានលក្ខណៈអធិបតេយ្យ។ ប្រសិនបើអ្នកដំឡើងដែលរំពឹងទុកនៅកន្លែង missing សូមដំណើរការជំហាននៃការផ្តល់អ្នកប្រើប្រាស់ឡើងវិញ មុននឹងព្យាយាម SSO ម្តងទៀត។

### ការចូលមើល SSO ត្រូវបានបដិសេធ (SSO visit is rejected) {#sso-visit-is-rejected}

ការចូលដោយស្វ័យប្រវត្តិ (autologin) សម្រាប់អ្នកជិះ (tenant) ដែលគ្មានស្ថានភាព (stateless) តម្រូវឱ្យឈ្មោះដែន (domain), កូនសោដើម (origin pin), គោលបំណងនៃ টোকেন (token purpose), nonce, និងថ្ងៃផុតកំណត់ (expiry) ត្រូវតែផ្គូផ្គងគ្នា។ សូមបញ្ជាក់ថា URL របស់អ្នកជិះគឺត្រឹមត្រូវ ហើយការចូលត្រូវបានព្យាយាមភ្លាមៗបន្ទាប់ពីបង្កើត SSO visit។

## នៅពេលណាដែលត្រូវព្យាយាមម្តងទៀត {#when-to-retry}

សូមធ្វើការផ្ទៀងផ្ទាត់ឡើងវិញបន្ទាប់ពីមានការផ្លាស់ប្តូរហេដ្ឋារចនាសម្ព័ន្ធនីមួយៗ។ កុំប្តូរចរាចរណ៍ផលិតកម្ម (production traffic), កុំលុបទិន្នន័យដើម (source data), ឬកុំដកយកព័ត៌មានសម្ងាត់សម្រាប់ការធ្វើ migrration រហូតដល់ការត្រួតពិនិត្យទាំងអស់បានឆ្លងកាត់។
