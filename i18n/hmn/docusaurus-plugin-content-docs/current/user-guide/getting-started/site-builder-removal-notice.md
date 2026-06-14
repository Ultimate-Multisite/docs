---
title: Txhawm Hauv Tsim Website (Site Builder Mode) Txhawm
sidebar_position: 19
_i18n_hash: 3abf37d17f19e045e9d9da3ffe8e3179
---
# ការជូនដំណឹងអំពីការលុប Site Builder Mode

**Site Builder mode ត្រូវបានលុបចេញនៅក្នុង Superdav AI Agent v1.12.0។** បើអ្នកធ្លាប់ប្រើ Site Builder mode អ្នកគួរតែផ្លាស់ប្តូរទៅប្រើ **Setup Assistant agent** សម្រាប់ការបង្កើត theme និងការរៀបចំ site។

## មានអ្វីកើតឡើង?

### Site Builder Mode (ចាស់)

Site Builder mode គឺជាចំណុចប្រទាក់ដែលធ្វើតាមជំហាន (wizard-based interface) សម្រាប់៖

- បង្កើត site ពី template
- កំណត់ការកំណត់មូលដ្ឋាន
- ជ្រើសរើស theme
- រៀបចំខ្លឹមសារដំបូង

### អ្វីដែលបានមកជំនួសវា?

**Setup Assistant agent** ឥឡូវនេះគ្រប់គ្រងមុខងារទាំងអស់របស់ Site Builder ដោយមាន៖

- ការរៀបចំដែលអាចបត់បែនជាងមុន និងដឹកនាំដោយ agent
- ជម្រើសនៃការកែសម្រួល theme ដែលល្អជាងមុន
- ការរួមបញ្ចូលជាមួយ Theme Builder onboarding
- ការចងចាំ site_brief ដែលជាប់បានយូរសម្រាប់ការប្រើប្រាស់លើវគ្គក្រោយៗ

## ប្រសិនបើអ្នកធ្លាប់ប្រើ Site Builder Mode

### Site របស់អ្នកគឺមានសុវត្ថិភាព

- site ដែលបង្កើតដោយ Site Builder mode រួចហើយនៅតែដំណើរការធម្មតា
- គ្មានការបាត់បង់ទិន្នន័យ ឬការរំខានដល់ site ទេ។
- អ្នកអាចបន្តគ្រប់គ្រង site របស់អ្នកបានដូចធម្មតា។

### ផ្លាស់ប្តូរទៅ Setup Assistant Agent

សម្រាប់ការរៀបចំ site ថ្មី ឬការផ្លាស់ប្តូរ theme សូមប្រើ Setup Assistant agent៖

```
"Help me set up a new site"
```

ឬ

```
"Start the Theme Builder onboarding"
```

Setup Assistant agent ផ្តល់មុខងារដូចគ្នា ប៉ុន្តែមានភាពបត់បែនជាងមុន។

## ការប្រៀបធៀប: Site Builder vs. Setup Assistant

| លក្ខណៈពិសេស | Site Builder (លុបចេញ) | Setup Assistant (ថ្មី) |
|---------|----------------------|----------------------|
| វិធីរៀបចំ | ទម្រង់ wizard form | ការសន្ទនាជាមួយ agent |
| ការជ្រើសរើស theme | template ដែលបានកំណត់ទុកជាមុន | បង្កើតដោយខ្លួនឯង |
| ការកែសម្រួល | មានជម្រើសមានកំណត់ | ប្រព័ន្ធ design ពេញលេញ |
| site brief | មិនត្រូវបានរក្សាទុកទេ | ការចងចាំជាប់បានយូរ (Persistent memory) |
| វគ្គក្រោយៗ | រៀបចំឡើងវិញម្តងទៀត | ប្រើ site_brief ដែលបានរក្សាទុក |
| ភាពបត់បែន | Workflow ថេរ | ការសន្ទនាដែលសម្របខ្លួនបាន |

## ការផ្លាស់ប្តូរទៅ Setup Assistant Agent

### សម្រាប់ Site ថ្មី

ປ່ຽນແທນການໃຊ້ Site Builder mode:

1. ຂໍ້ຮ້ອງ: "ຊ່ວຍຂ້ອຍຕັ້ງຄ່າໄຊທ໌ໃໝ່"
2. Setup Assistant agent ຈະພາເຈົ້າຜ່ານ:
   - ຈຸດປະສົງ ແລະ ເປົ້າໝາຍຂອງໄຊທ໌
   - ກຸ່ມເປົ້າໝາຍ (Target audience)
   - ຮູບແບບແບຣນ (Brand identity)
   - ການສ້າງ Theme
   - ການຕັ້ງຄ່າເບື້ອງຕົ້ນ

### ສຳລັບໄຊທ໌ທີ່ມີຢູ່ແລ້ວ

ຖ້າເຈົ້າມີໄຊທ໌ທີ່ມີຢູ່ແລ້ວຈາກ Site Builder mode:

1. ເຈົ້າສາມາດໃຊ້ຕໍ່ໄປໄດ້ຕາມທີ່ມີຢູ່
2. ເພື່ອອັບເດດ Theme, ຂໍຂ້ອຍວ່າ: "ປ່ຽນຮູບແບບໄຊທ໌ຂອງຂ້ອຍ"
3. Setup Assistant agent ຈະຊ່ວຍເຈົ້າສ້າງ Theme ໃໝ່
4. ຂໍ້ມູນໄຊທ໌ຂອງເຈົ້າຈະບໍ່ປ່ຽນແປງ

### ສຳລັບການປ່ຽນແປງ Theme

ປ່ຽນແທນການເລືອກ Theme ໃນ Site Builder mode:

1. ຂໍຂ້ອຍວ່າ: "ປ່ຽນ Theme ຂອງຂ້ອຍ"
2. Setup Assistant agent ຈະເຮັດສິ່ງເຫຼົ່ານີ້:
   - ຖາມກ່ຽວກັບຄວາມມັກໃນການອອກແບບຂອງເຈົ້າ
   - ສ້າງ Theme ທີ່ເປັນແບບສະເພາະເຈາະຈົງໃຫ້ເຈົ້າ
   - ເປີດໃຊ້ງານມັນໃນໄຊທ໌ຂອງເຈົ້າ

## ຄວາມແຕກຕ່າງທີ່ສຳຄັນ

### Site Builder Mode

```
1. ເລືອກ template (ຮູບແບບ)
2. ເລືອກ theme
3. ຕັ້ງຄ່າການຕັ້ງຄ່າພື້ນຖານ
4. ສຳເລັດ
```

### Setup Assistant Agent

```
1. ອະທິບາຍຈຸດປະສົງຂອງໄຊທ໌ເຈົ້າ
2. ກໍານົດກຸ່ມເປົ້າໝາຍຂອງເຈົ້າ
3. ເລືອກຄວາມມັກໃນການອອກແບບ
4. Agent ສ້າງ theme ທີ່ເປັນແບບສະເພາະເຈາະຈົງໃຫ້ເຈົ້າ
5. Agent ເປີດໃຊ້ງານ theme
6. ສະຫຼຸບໄຊທ໌ຖືກເກັບໄວ້ສຳລັບການເຮັດວຽກໃນຄັ້ງຕໍ່ໄປ
```

## ປະໂຫຍດຂອງ Setup Assistant Agent

### ມີຄວາມຍືດຫຍຸ່ນຫຼາຍຂຶ້ນ

- ອະທິບາຍໄຊທ໌ຂອງເຈົ້າດ້ວຍພາສາທຳມະຊາດ
- ເອົາຂໍ້ແນະນຳທີ່ເປັນແບບສະເພາະເຈາະຈົງມາໃຫ້
- ປັບຕົວເຂົ້າກັບຄວາມຕ້ອງການສະເພາະຂອງເຈົ້າ

### ການປັບເຮັດໃຫ້ດີຂຶ້ນ

- ສ້າງ theme ທີ່ເປັນແບບສະເພາະເຈາະຈົງ
- ການຕັດສິນໃຈກ່ຽວກັບ design system
- Design tokens ທີ່ຄົງຢູ່ໄດ້ (Persistent)

### ຄວາມຈຳທີ່ຄົງຢູ່

- site_brief ຂອງເຈົ້າຖືກເກັບໄວ້ແລ້ວ
- Agent ໃນອະນາຄົດຈະເຂົ້າໃຈໄຊທ໌ຂອງເຈົ້າ
- ບໍ່ຕ້ອງເຮັດຂໍ້ມູນການຕັ້ງຄ່າເລືອກໃໝ່ອີກ

### ຂັ້ນຕອນການເຮັດວຽກທີ່ເຊື່ອມຕໍ່ກັນ

- ການສອນການສ້າງ Theme (Theme Builder onboarding)
- ທັກສະດ້ານ Aesthetics ຂອງ Design System
- ຄວາມສາມາດໃນການຄວບຄຸມ Visibility controls
- ທຸກຢ່າງເຮັດວຽກຮ່ວມກັນໄດ້ຢ່າງລຽບໄຫຼ

"Help me set up a new site"

### ང་གིས་ Site Builder ནས་བཟོ་མཚམས་དུ་ཡིག་ཆ་ໃໝ່བསྐྲུན་ཆོག་པ།

ເຈົ້າສາມາດ Setup Assistant agent (ལག་རྟགས་བཟོ་མཁན་) འདི་ལ་བེད་སྤྱོད་བྱས་ནས་ site ໃໝé བསྐྲུན་ཆོག:

1. **Request**: "Help me set up a new site" (ང་ལ་ site ໃໝé བསྐྲུན་རྒྱུ་ལམ་སྟོན་རོགས་)
2. **Describe your original site's purpose and design** (ཁྱེད་ཀྱི་ site དཔེ་གཅིག་གི་དམིགས་ཡུལ་དང་ རྣམ་པ་ཚབ་ བཤད་)
3. **The agent will generate a similar theme** (Agent འདིས་ theme ཞིག་བཟོ་ནས་བསྐྲུན་ཆོག)
4. **Your site_brief will be stored for future reference** (ཁྱེད་ཀྱི་ site_brief འདི་ མཐའ་མ་ལུ་ བལྟ་རྒྱུ་ཡིན།)

### Site Builder དང་པོ་ཚོས་བཟོ་མས་ལས་བྱེད་མི་ཆོག་པ་རེད།

Site Builder mode (Site Builder ལག་རྟགས་བཟོ་མའི་ཐབས་) བེད་སྤྱོད་བཏང་ཡོད་པའི་ site ཚུ་ འགྱུར་བ་མེད་པར་ལས་བྱེད་ཆོག. ཁྱེད་ཀྱིས་ ပြဿနာ တွေ့ရှိနေရင်:

1. **Check that your theme is still active** (ཁྱེད་ཀྱི་ theme དེ་ཡག་པོ་བཞུགས་ཡོད་པ་ གསལ་བཤད་)
2. **Verify your plugins are enabled** (plugins ཚུ་ འགོ་བཙུགས་ཡོད་པ་ གནས་ཚུལ་བལྟ་རྒྱུ་)
3. **Check WordPress error logs** (WordPress error logs ཚུ་ བལྟ་རྒྱུ་)
4. **Contact support if problems persist** (ပြဿနာ དེ་འཇིགས་མེད་པར་ཡོད་ན་ Support དང་འབྲེལ་བརྩོན་)

### Site Builder template ཚུ་ གཏམ་ཁ་ནས་བཟོ་མི་ཆོག་པ་རེད།

Site Builder templates ཚུ་ ད་ལྟའི་དུས་ བེད་སྤྱོད་བྱེད་རྒྱུ་མིན་. ཡང་ན་:

- **Your existing sites continue to work** (ཁྱེད་ཀྱི་ site ཚུ་ ད་ལྟར་ཡག་པོ་བཞུགས་ཡོད།)
- **You can recreate similar sites with the Setup Assistant agent** (Setup Assistant agent འདིས་ site བཟོ་མི་ཚུ་ བསྐྲུན་ཆོག)
- **The Setup Assistant agent provides more customization options** (Setup Assistant agent འདིས་ རང་ཉིད་ལུ་ སྒྲིག་བཅོས་བྱེད་ཐབས་ ཡར་རྒྱས་ཆེ་བ་)

## མཇུག་བསྡུར་ (Next Steps)

1. **For new sites**: Use the Setup Assistant agent (site ໃໝé བསྐྲུན་དགོས། Setup Assistant agent ལུ་ བེད་སྤྱོད་བྱེད།)
2. **For existing sites**: Continue using them as-is (site ཚུ་ ད་ལྟར་ཡོད་པ་ལྟར་ བཞག་ནི་རོགས།)
3. **For theme changes**: Request help from the Setup Assistant agent (theme བཅོས་ཆ་བྱེད་དགོས་ན་ Setup Assistant agent ལུ་ རོགས་འཚོལ་)
4. **For design refinement**: Use the Design System Aesthetics skill (design བཟོ་མའི་སྐྱོན་བརྗོད་བྱེད་དགོས་ན་ Design System Aesthetics skill ལུ་ བེད་སྤྱོད་བྱེད།)

## འབྲེལ་བའི་ཚོར་བ་ (Related Topics)

- **Theme Builder Onboarding**: Guided setup for custom themes (theme བཟོ་མའི་སྐབས་ ལམ་སྟོན་གནང་བའི་ Setup)
- **Setup Assistant Agent**: Agent-guided site setup (Agent འདིས་ site བསྐྲུན་རྒྱུ་ ལམ་སྟོན་བྱེད་ཀྱི་ཡོད།)
- **Site Specification Skill**: Define your site's goals and audience (ཁྱེད་ཀྱི་ site གི་ ལས་དོན་དང་ ལག་རྩལ་ཚུ་ བཀོད་ནིའི་ Site Specification skill)
- **Design System Aesthetics Skill**: Refine your site's visual identity (site གི་ སྐུལ་མོ་དང་ ལག་རྩལ་ཚུ་ བཟང་པོ་བྱེད་དགོས་ན་ Design System Aesthetics skill ལུ་ བེད་སྤྱོད་བྱེད།)
