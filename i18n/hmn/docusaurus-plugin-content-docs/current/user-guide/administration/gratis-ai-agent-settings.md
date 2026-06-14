---
title: Txhua yam txhua AI Agent Settings
sidebar_position: 22
_i18n_hash: 7b593387e5e7b44903bfd6f0a1ff42ee
---
# ការកំណត់ AI Agent ឥតគិតថ្លៃ

ໜ້າ **Settings → Advanced** ຂອງ Gratis AI Agent ໃຫ້ເຈົ້າສາມາດຕັ້ງຄ່າລະດັບຜູ້ບໍລິຫານສຳລັບການເຊື່ອມຕໍ່ໃນ backend ທີ່ເພີ່ມເຂົ້າມາໃນ v1.5.0. ໜ້າພ这 document ແກ່ field **Feedback Endpoint** ແລະ ຮູບແບບທີ່ມັນຄວນເປັນ.

## ການເຂົ້າເຖິງ Settings

1. ໃນ WordPress admin, ໄປທີ່ **Gratis AI Agent → Settings**.
2. ກົດ tab **Advanced**.

## ການຕັ້ງຄ່າ Feedback Endpoint

feedback endpoint ຈະໄດ້ຮັບ POST requests ຈາກ AI agent ທຸກຄັ້ງທີ່ມີຜູ້ໃຊ້ສົ່ງ feedback ຜ່ານປຸ່ມ thumbs-down, banner auto-prompt, ຫຼື ຄຳສັ່ງ `/report-issue`.

| Field | Description |
|---|---|
| **Feedback Endpoint URL** | URL ທີ່ຈະໄດ້ຮັບການສົ່ງ feedback ເປັນ HTTP POST request ໂດຍມີ JSON body. |
| **Feedback API Key** | bearer token ທີ່ຖືກສົ່ງໃນ header `Authorization` ຂອງທຸກ feedback request. ຖ້າ endpoint ຂອງເຈົ້າບໍ່ຕ້ອງການການຢັ້ງຢືນ (authentication), ໃຫ້ປ່ອຍຫວ່າງໄວ້. |

### JSON Payload ທີ່ຄາດຫວັງ

feedback endpoint ຂອງເຈົ້າຕ້ອງສາມາດຮັບ JSON body ທີ່ມີ field ຢ່າງໜ້ອຍດັ່ງນີ້:

```json
{
  "message_id": "msg_abc123",
  "conversation_id": "conv_xyz789",
  "feedback_text": "The answer was incorrect about pricing.",
  "triage_category": "factual_error"
}
```

field ອື່ນໆອາດຈະມີຢູ່ໃນ payload ຂຶ້ນກັບບໍລິບົດຂອງການສົນທະນາ.

### ຄ່າຂອງ `triage_category`

AI triage layer ຈະມອບຄ່າໜຶ່ງໃນລາຍການຕໍ່ໄປນີ້ໃຫ້ກັບ `triage_category` ກ່ອນທີ່ຈະສົ່ງ payload:

| Value | Meaning |
|---|---|
| `factual_error` | Assistant ໄດ້ໃຫ້ຂໍ້ມູນຄວາມຈິງທີ່ບໍ່ຖືກຕ້ອງ. |
| `unhelpful_answer` | ຄຳຕອບແມ່ນຖືກຕ້ອງທາງດ້ານເຕັກນິກ ແຕ່ບໍ່ເປັນປະໂຫຍດ. |
| `inappropriate_content` | ຄຳຕອບມີເນື້ອຫາທີ່ບໍ່ຄວນສະແດງໃຫ້ຜູ້ໃຊ້ເຫັນ. |
| `other` | feedback ບໍ່ກົງກັບ category ທີ່ຮູ້ຈັກ. |

### ການຢັ້ງຢືນ (Authentication)

ຖ້າ endpoint ຂອງເຈົ້າຕ້ອງການການກວດສອບຕົວຕົນ (authentication), ໃຫ້ຕັ້ງຄ່າຊ່ອງ **Feedback API Key** ເປັນ bearer token ຂອງເຈົ້າ. Agent ຈະສົ່ງ:

```
Authorization: Bearer <your-api-key>
```

ຖ້າຊ່ອງ **Feedback API Key** ຫວ່າງ, ມັນຈະບໍ່ມີ header `Authorization` ສົ່ງໄປ.

### ການປິດການເກັບ Feedback

ໃຫ້ປະໄວ້ທັງຊ່ອງ **Feedback Endpoint URL** ແລະ **Feedback API Key** ຫວ່າງ. ປຸ່ມ thumbs-down ແລະ UI feedback ຍັງເຫັນໄດ້ໂດຍຜູ້ໃຊ້, ແຕ່ການສົ່ງຂໍ້ມູນຈະບໍ່ຖືກສົ່ງຕໍ່ໄປຫາບໍລິການພາຍນອກໃດໆ.

## Brave Search API Key

ໃນ tab **Advanced** ນັ້ນ, ຊ່ອງ **Brave Search API Key** ກໍເຮັດໃຫ້ຄວາມສາມາດໃນການຄົ້ນຫາອິນເຕີເນັດ [Internet Search](../configuration/internet-search) ເປີດໃຊ້ໄດ້.

| Field | Description |
|---|---|
| **Brave Search API Key** | API key ຂອງເຈົ້າຈາກ developer dashboard ຂອງ Brave Search. ຈຳເປັນຕ້ອງມີເພື່ອເປີດໃຊ້ການຄົ້ນຫາອິນເຕີເນັດໃນ AI assistant. |

ປ້າຍຊື່ຊ່ອງນີ້ມີ link ສູ່ໜ້າລົງທະບຽນ Brave Search API. ຖ້າປະໄວ້ຫວ່າງ, ມັນຈະປິດການຄົ້ນຫາອິນເຕີເນັດ.

ເບິ່ງ [Internet Search](../configuration/internet-search) ເພື່ອເອກະສານຂອງຜູ້ໃຊ້ກ່ຽວກັບຟີເຈີນີ້.

## Feature Flags

ຖືກເພີ່ມເຂົ້າມາໃນ v1.9.0 ນີ້, tab **Settings → Feature Flags** ຈະມີ toggle switches ສຳລັບການເຮັດວຽກທາງເລືອກ (optional functionality). ແຕ່ລະ flag ຈະເປີດໃຊ້ ຫຼື ປິດທົ່ວເຄືອຂ່າຍ; ຕອນນີ້ຍັງບໍ່ມີການປ່ຽນແປງຕາມໄຊທ໌ (per-site override) ເພື່ອປິດມັນ.

### ການເຂົ້າເຖິງ Feature Flags

1. ໃນ WordPress admin, ໄປທີ່ **Gratis AI Agent → Settings**.
2. ກົດ tab **Feature Flags**.

### Access Control Flags

| Flag | Default | Description |
|---|---|---|
| **Restrict to Administrators** | Off | ຖ້າ bật, ຜູ້ໃຊ້ທີ່ມີតួនាទី `administrator` ប៉ុណ្ណោះអាចបើកផ្ទាំងឆាត AI Agent បាន។ អ្នកប្រើប្រាស់ផ្សេងទៀតនឹងឃើញសារ "សូមទាក់ទងអ្នកគ្រប់គ្រងរបស់អ្នក"។ |
| **Restrict to Network Admins** | Off | នៅលើបណ្តាញ multisite បើ bật, មានតែ Super Admins ប៉ុណ្ណោះដែលអាចប្រើ agent បាន។ site admins នីមួយៗត្រូវបានរារាំង។ វាមានអាទិភាពជាង "Restrict to Administrators" ប្រសិនបើទាំងពីរត្រូវបានបើក។ |
| **Allow Subscriber Access** | Off | នៅលើការបើក, អ្នកប្រើប្រាស់ដែលមានតួនាទី `subscriber` អាចប្រើ interface ឆាតបាន ប៉ុន្តែពួកគេនឹងត្រូវបានកំណត់ត្រឹមសមត្ថភាពអានតែប៉ុណ្ណោះ (មិនអាចបង្កើត post ឬផ្លាស់ប្តូរការកំណត់បានទេ)។ |
| **Disable for Non-Members** | Off | វាភ្ជាប់ជាមួយស្ថានភាពសមាជិក Ultimate Multisite។ នៅពេលបើក, ឆាតនឹងត្រូវបានលាក់សម្រាប់ site ដែលមិនមានសមាជិកសកម្ម។ |

### Branding Flags (ផ្ទាំងបណ្តុំម៉ាកយីហោ)

| Flag | Default | Description |
|---|---|---|
| **Hide "Powered by Gratis AI Agent" Footer** | Off | លុបបន្ទាត់បញ្ជាក់ម៉ាកយីហោដែលបង្ហាញនៅខាងក្រោម widget ឆាត។ វាត្រូវបានណែនាំសម្រាប់ការដាក់ពង្រាយបែប white-label (ប្រើម៉ាករបស់អ្នកផ្ទាល់)។ |
| **Custom Agent Name** | *(blank)* | ប្តូរឈ្មោះ agent ពី "Gratis AI Agent" ធម្មតា នៅក្នុង header ឆាត និង menu admin ទៅជាឈ្មោះផលិតផលរបស់អ្នក។ បន្សល់វាទុកទទេដើម្បីប្រើឈ្មោះលំនាំដើម។ |
| **Hide Agent Picker** | Off | នៅពេលបើក, អ្នកប្រើប្រាស់មិនអាចប្តូររវាង agent ចំនួនប្រាំដែលមានស្រាប់បានទេ។ agent ដែលកំពុងដំណើរការនឹងត្រូវបានកំណត់ទៅអ្វីដែលបានកំណត់ជាលំនាំដើមនៅក្នុង Settings → General។ |
| **Use Site Icon as Chat Avatar** | Off | ជំនួសរូបតំណាង AI ធម្មតា នៅក្នុង header widget ឆាត ដោយរូបតំណាង site របស់ WordPress (កំណត់នៅក្រោម Appearance → Customize → Site Identity)។ |

### Applying Changes (ការអនុវត្តការផ្លាស់ប្តូរ)

ចុច **Save Settings** បន្ទាប់ពីប្តូរ flag ណាមួយ។ ការផ្លាស់ប្តូរនឹងចូលជាធរ Bautistaភ្លាមៗ — មិនចាំបាច់លុប cache ឬធ្វើឱ្យ plugin ដំណើរការឡើងវិញទេ។
