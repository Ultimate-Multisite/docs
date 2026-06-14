---
title: ការកំណត់ AI Agent ដោយឥតគិតថ្លៃ
sidebar_position: 22
_i18n_hash: 7b593387e5e7b44903bfd6f0a1ff42ee
---
# ការកំណត់រចនាសម្ព័ន្ធ AI Agent ដោយឥតគិតថ្លៃ

អេក្រង់ **Settings → Advanced** នៅក្នុង Gratis AI Agent ផ្តល់នូវការកំណត់រចនាសម្ព័ន្ធកម្រិតអ្នកគ្រប់គ្រងសម្រាប់ផ្នែកដែលបានបញ្ចូលទៅក្នុង backend ដែលត្រូវបានណែនាំនៅក្នុង v1.5.0។ ទំព័រនេះនឹងពន្យល់អំពីវាល **Feedback Endpoint** និងទ្រង់ទ្រាយដែលរំពឹងទុករបស់វា។

## ការចូលប្រើការកំណត់ (Accessing Settings)

១។ នៅក្នុង WordPress admin សូមទៅកាន់ **Gratis AI Agent → Settings**។
២។ ចុចលើแท็บ **Advanced**។

## ការកំណត់រចនាសម្ព័ន្ធ Feedback Endpoint

Feedback endpoint នឹងទទួលបាន POST requests ពី AI agent នៅពេលដែលអ្នកប្រើប្រាស់ផ្ដល់មតិកែលម្អតាមរយៈប៊ូតុងចុចក្រោម (thumbs-down button) បារانات auto-prompt ឬពាក្យបញ្ជា `/report-issue`។

| Field | Description |
|---|---|
| **Feedback Endpoint URL** | URL ដែលទទួលការដាក់មតិកែលម្អជា HTTP POST requests ជាមួយនឹង body ជា JSON។ |
| **Feedback API Key** | bearer token ដែលត្រូវបានផ្ញើនៅក្នុង header `Authorization` នៃសំណើ Feedback រៀងៗខ្លួន។ សូមទុកវាឱ្យទទេ ប្រសិនបើ endpoint របស់អ្នកមិនតម្រូវឱ្យមានការផ្ទៀងផ្ទាត់ (authentication)។ |

### JSON Payload ដែលរំពឹងទុក

Feedback endpoint របស់អ្នកត្រូវតែទទួល body ជា JSON ដែលមានយ៉ាងហោចណាស់វាលដូចខាងក្រោម៖

```json
{
  "message_id": "msg_abc123",
  "conversation_id": "conv_xyz789",
  "feedback_text": "The answer was incorrect about pricing.",
  "triage_category": "factual_error"
}
```

វាលបន្ថែមអាចមាននៅក្នុង payload អាស្រ័យលើបរិបទនៃការសន្ទនា។

### តម្លៃនៃ `triage_category`

ស្រទាប់ triage របស់ AI នឹងកំណត់តម្លៃមួយក្នុងចំណោមតម្លៃខាងក្រោមទៅឱ្យ `triage_category` មុនពេលបញ្ជូន payload៖

| Value | Meaning (អត្ថន័យ) |
|---|---|
| `factual_error` | អ្នកជំនួយបានផ្តល់ព័ត៌មានការពិតដែលមិនត្រឹមត្រូវ។ |
| `unhelpful_answer` | ការឆ្លើយតបគឺត្រឹមត្រូវតាម technically ប៉ុន្តែមិនមានប្រយោជន៍ទេ។ |
| `inappropriate_content` | ការឆ្លើយតបនោះមានមាតិកាដែលមិនគួរបង្ហាញដល់អ្នកប្រើប្រាស់។ |
| `other` | មតិកែលម្អមិនត្រូវនឹងប្រភេទដែលគេស្គាល់នោះទេ។ |

### ការផ្ទៀងផ្ទាត់ (Authentication)

ប្រសិនបើ endpoint របស់អ្នកទាមទារការផ្ទៀងផ្ទាត់ (authentication) សូមកំណត់វាល **Feedback API Key** ទៅជា bearer token របស់អ្នក។ agent នឹងបញ្ជូន៖

```
Authorization: Bearer <your-api-key>
```

ប្រសិនបើវាល **Feedback API Key** ទំនេរទេ headers `Authorization` នឹងមិនត្រូវបានផ្ញើចេញទេ។

### ការបិទការប្រមូល Feedback

ទុកវាលទាំង **Feedback Endpoint URL** និង **Feedback API Key** ជាចន្លោះទំនេរ។ ប៊ូតុង thumbs-down និង UI feedback នៅតែអាចមើលឃើញសម្រាប់អ្នកប្រើប្រាស់ ប៉ុន្តែការដាក់ស្នើនឹងមិនត្រូវបានបញ្ជូនទៅកាន់ service ខាងក្រៅណាមួយឡើយ។

## Brave Search API Key

នៅឯแท็บ **Advanced** ក៏មានវាល **Brave Search API Key** ដែលបើកដំណើរការមុខងារ [Internet Search](../configuration/internet-search)។

| Field | Description |
|---|---|
| **Brave Search API Key** | API key របស់អ្នកពី developer dashboard របស់ Brave Search។ ចាំបាច់ដើម្បីបើកដំណើរការ internet search នៅក្នុង AI assistant។ |

ស្លាកវាលនេះមាន link ដែលអាចចុចបានទៅកាន់ trang បញ្ជាទិញ Brave Search API។ សូមទុកវាលទំនេរដើម្បីបិទ internet search។

សូមមើល [Internet Search](../configuration/internet-search) សម្រាប់ឯកសារអ្នកប្រើប្រាស់អំពីមុខងារនេះ។

## Feature Flags

ត្រូវបានណែនាំនៅក្នុង v1.9.0 ក៏ដោយ แท็บ **Settings → Feature Flags** ផ្តល់នូវ toggle switches (ប៊ូតុងបើក/បិទ) សម្រាប់មុខងារដែលជាជម្រើស។ រាល់ flag នីមួយៗគឺបើកដំណើរការ ឬបិទនៅទូទាំង network; មិនមានការកំណត់លើ site ជាក់លាក់ណាមួយនៅពេលនេះទេ។

### ការចូលប្រើ Feature Flags

1. នៅក្នុង WordPress admin សូមទៅកាន់ **Gratis AI Agent → Settings**។
2. ចុចលើแท็บ **Feature Flags**។

### Access Control Flags

| Flag | Default | Description |
|---|---|---|
| **Restrict to Administrators** | Off | នៅពេលបើក, មានតែអ្នកប្រើប្រាស់ដែលមានតួនាទី `administrator` ប៉ុណ្ណោះដែលអាចបើកផ្ទាំងជជែក AI Agent បាន។ អ្នកប្រើប្រាស់ផ្សេងទៀតនឹងឃើញសារ "សូមទាក់ទងអ្នកគ្រប់គ្រងរបស់អ្នក" ជំនួសវិញ។ |
| **Restrict to Network Admins** | Off | នៅពេលបើកលើបណ្តាញ multisite មានតែ Super Admins ប៉ុណ្ណោះដែលអាចប្រើ agent បាន។ អ្នកគ្រប់គ្រង সাইតនីមួយៗត្រូវបានរារាំង។ វាមានអាទិភាពជាង "Restrict to Administrators" ប្រសិនបើទាំងពីរត្រូវបានបើក។ |
| **Allow Subscriber Access** | Off | នៅពេលបើក, អ្នកប្រើប្រាស់ដែលមានតួនាទី `subscriber` អាចប្រើចំណុចប្រទាក់ជជែកបាន ប៉ុន្តែពួកគេនឹងមានដែនកំណត់ត្រឹមតែការអានប៉ុណ្ណោះ (មិនអាចបង្កើតការបង្ហោះ ឬផ្លាស់ប្តូរការកំណត់បាន)។ |
| **Disable for Non-Members** | Off | បញ្ចូលជាមួយស្ថានភាពសមាជិក Ultimate Multisite។ នៅពេលបើក, ជជែកនឹងត្រូវបានលាក់សម្រាប់ সাইតដែលមិនមានសមាជិកសកម្ម។ |

### Branding Flags

| Flag | Default | Description |
|---|---|---|
| **Hide "Powered by Gratis AI Agent" Footer** | Off | លុបបន្ទាត់បញ្ជាក់ម៉ាកយីហោដែលបង្ហាញនៅខាងក្រោម widget ជជែក។ វាត្រូវបានណែនាំសម្រាប់ការដាក់ពាណិជ្ជកម្មដោយខ្លួនឯង (white-label deployments)។ |
| **Custom Agent Name** | *(blank)* | ប្តូរឈ្មោះ agent ពី "Gratis AI Agent" ធម្មតា នៅក្នុង header ជជែក និងเมนู admin ទៅជាឈ្មោះផលិតផលរបស់អ្នក។ បន្សល់វាទុកទទេដើម្បីប្រើឈ្មោះលំនាំដើម។ |
| **Hide Agent Picker** | Off | នៅពេលបើក, អ្នកប្រើប្រាស់មិនអាចប្តូររវាង agent ចំនួនប្រាំដែលមានស្រាប់បានទេ។ agent ដែលកំពុងដំណើរការនឹងត្រូវបានកំណត់ទៅអ្វីដែលត្រូវបានកំណត់ជាលំនាំដើមនៅក្នុង Settings → General។ |
| **Use Site Icon as Chat Avatar** | Off | ប្តូររូបតំណាង AI ធម្មតា នៅក្នុង header widget ជជែក ទៅជា icon របស់ WordPress (កំណត់នៅក្រោម Appearance → Customize → Site Identity)។ |

### ការអនុវត្តការផ្លាស់ប្តូរ

ចុចលើ **Save Settings** បន្ទាប់ពីបិទ/បើក flag ណាមួយ។ ការផ្លាស់ប្តូរនឹងមានប្រសិទ្ធភាពភ្លាមៗ — មិនចាំបាច់លុប cache ឬធ្វើឱ្យ plugin ដំណើរការឡើងវិញទេ។
