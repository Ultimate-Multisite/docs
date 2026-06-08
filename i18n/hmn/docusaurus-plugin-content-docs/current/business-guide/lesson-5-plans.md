---
title: 'Loj 5: Tsim Kev Tsim Kev Txais'
sidebar_position: 6
_i18n_hash: 8c58dfd0a186bd585f43342bc4ea4f43
---
# Lesson 5: ការរៀបចំផែនការរបស់អ្នក

កម្រិតផែនការរបស់អ្នកមិនមែនគ្រាន់តែជាកម្រិតតម្លៃទេ ប៉ុន្តែវាឆ្លុះបញ្ចាំងពីរបៀបដែលអតិថិជនក្នុងទីផ្សាររបស់អ្នកពិតជាដំណើរការ។ នៅក្នុងមេរៀននេះ អ្នកនឹងរចនាប្លង់ផលិតផលដែលត្រូវនឹងតម្រូវការជាក់ស្តែងរបស់អាជីវកម្មហាត់ប្រាណនៅដំណាក់កាលផ្សេងៗគ្នា។

## យើងបានឈប់នៅត្រង់ណា

FitSite មាន قالب (template) រួចហើយបីប្រភេទគឺ (Studio Essential, Gym Pro, Fitness Chain)។ ឥឡូវនេះ យើងនឹងបង្កើតផែនការដែលកំណត់ថាអតិថិជនទទួលបានអ្វីខ្លះ និងចំណាយប៉ុន្មាន។

## ការគិតតាមក្រុមអតិថិជន (Customer Segments)

កំហុសភាគច្រើនដែលមនុស្សធ្វើគឺរចនាប្លង់ដោយផ្អែកលើមុខងារបច្ចេកទេស (ការផ្ទុកទិន្នន័យ, បណ្តាញ, ចំនួនទំព័រ)។ អតិថិជនក្នុងទីផ្សាររបស់អ្នកមិនគិតតាមលក្ខខណ្ឌទាំងនោះទេ។ ម្ចាស់ហាត់ប្រាណគិតអំពីអ្វីដែលពួកគេត្រូវការដើម្បីដំណើរការអាជីវកម្មរបស់ពួកគេ។

សម្រាប់ស្ទូឌីយ៍ហាត់ប្រាណ មានក្រុមធម្មជាតិបីប្រភេទ៖

| Segment | តើនរណាខ្លះ | អ្វីដែលពួកគេត្រូវការ |
|---------|-------------|-------------------|
| **គ្រូបង្វឹកម្នាក់/ស្ទូឌីយ៍តូច** | បុគ្គលិក ១-៣ នាក់, មានទីតាំងតែមួយ, ទើបចាប់ផ្តើម | សایتវិជ្ជាជីវៈ, ព័ត៌មានថ្នាក់រៀន, ទម្រង់ទំនាក់ទំនង |
| **ក្លឹបហាត់ប្រាណដែលបានបង្កើតឡើង** | បុគ្គលិក ៥-២០ នាក់, មានទីតាំងតែមួយ, កំពុងរីកចម្រើន | អ្វីៗខាងលើទាំងអស់ រួមទាំងការប বুকពេលវេលា (booking), ប្លុកព័ត៌មាន (blog), ប្រភេទរូបភាព (gallery), ដែនផ្ទាល់ខ្លួន (custom domain) |
| **ខ្សែសង្វាក់ហាត់ប្រាណ** | មានទីតាំងច្រើន, ម៉ាកយីហោដែលបានបង្កើតឡើងហើយ | អ្វីៗខាងលើទាំងអស់ រួមទាំងការគ្រប់គ្រងច្រើនទីតាំង (multi-site), ទំព័រទីតាំង, បញ្ជីបុគ្គលិក |

ផែនការរបស់អ្នកគួរតែត្រូវនឹងក្រុមទាំងនេះ មិនមែនផ្អែកលើការប묶មុខងារតាមចិត្តទេ។

## ការបង្កើតផែនការ FitSite

ចូលទៅកាន់ **Ultimate Multisite > Products > Add Product** សម្រាប់ផែនការនីមួយៗ។

### ផែនការទី ១: FitSite Starter -- $49/month

**Plan 1: FitSite Starter**

**Target**: Solo trainers and small studios

**Description tab**:
- Name: FitSite Starter
- Description: "Everything a personal trainer or small studio needs to look professional online."

**General tab**:
- Product type: Plan
- Customer role: Administrator

**Site Templates tab**:
- Allow site templates: Enabled
- Available templates: Studio Essential only

**Limitations**:
- Sites: 1
- Disk space: 1 GB
- Custom domain: Disabled (uses `studioname.fitsite.com`)

**Plugins tab**:
- Contact form plugin: Force Activate
- SEO plugin: Force Activate
- Booking plugin: Not Available (upgrade incentive)

**Themes tab**:
- Your selected theme: Force Activate
- All other themes: Hidden

### Plan 2: FitSite Growth -- $99/month

**Target**: Established single-location gyms

**Description tab**:
- Name: FitSite Growth
- Description: "For established gyms ready to grow their online presence and attract new members."

**Site Templates tab**:
- Available templates: Studio Essential and Gym Pro

**Limitations**:
- Sites: 1
- Disk space: 5 GB
- Custom domain: Enabled

**Plugins tab**:
- Everything in Starter, plus:
- Booking plugin: Force Activate
- Gallery plugin: Force Activate
- Blog functionality: Available

**Up & Downgrades tab**:
- Plan group: FitSite Plans
- Product order: 2

### Plan 3: FitSite Pro -- $199/month

**Target**: Multi-location fitness chains

**Description tab**:
- Name: FitSite Pro
- Description: "The complete platform for fitness brands with multiple locations."

**Site Templates tab**:
- Available templates: All three templates

**Limitations**:
- Sites: 5 (one per location)
- Disk space: 20 GB
- Custom domain: Enabled

**Plugins tab**:
- Everything in Growth, plus:
- All premium plugins: Force Activate

**Up & Downgrades tab**:
- Plan group: FitSite Plans
- Product order: 3

## Setting Up the Plan Group

Plan group нь хэрэглэгчдийг зөвхөн FitSite төлөвлөгөөний гэр бүлийн дотор шинэчлэх эсвэл бууруулах боломжтой болгодог. Нэг төлөвлөгөөний **Up & Downgrades** таб дээр:

1. Бүх гурван төлөвлөгөөнд **Plan Group**-ыг "FitSite Plans" гэж тохируулна
2. **Product Order**-ыг 1 (Starter), 2 (Growth), 3 (Pro) болгоно

Энэ нь Starter → Growth → Pro гэсэн тодорхой шинэчлэх зам үүсгэнэ.

## Adding Order Bumps

Order bumps гэдэг нь төлбөрийг хийх үед санал болгогддог нэмэлт бүтээгдэхүүн юм. FitSite-ийн хувьд дараах зүйлсийг авч үзээрэй:

- **Extra Storage Pack** ($19/month) -- нэмэлт 5 GB дискний зай
- **Priority Support** ($29/month) -- илүү хурдан хариу үйлчилгээ
- **Additional Site** ($39/month) -- төлөвлөгөөнд зөвхөн тохирохгүй олон сайттай хэрэглэгчдийн хувьд

Эдгээр нь Ultimate Multisite дээр **Package** төрлийн бүтээгдэхүүн болгож, харгалзах төлөвлөгөөтэй холбоно.

## Why This Structure Works

- **Starter** ຖອນຄວາມຫຍຸ້ງຍາກເຂົ້າສູ່ຕະຫຼາດ -- ລາຄາຖືກ, ສະເໜີງ່າຍ, ເຮັດໃຫ້ຄູຝຶກສາມາດອອນລາຍໄດ້ໄວ
- **Growth** ເພີ່ມຟີເຈີທີ່ສະໝັກສະເພາະທີ່ສະໜາມກຳລັງຕ້ອງການ -- ການຈອງ, ແກລເລີ, ໂດເມນທີ່ປັບເຮັດเอง
- **Pro** ເປັນຄົນສຳລັບສ່ວນທີ່ມີມູນຄ່າສູງທີ່ຕ້ອງການຮອງຮັບຫຼາຍສະຖານທີ່
- **Order bumps** ຊ່ວຍໃຫ້ລູກຄ້າສາມາດປັບຕາມຄວາມຕ້ອງການໂດຍບໍ່ເຮັດໃຫ້ແຜນຫຼັກສັບສົນຂຶ້ນ
- **Clear upgrade path** ໝາຍຄວາມວ່າລູກຄ້າຈະເຕີບໂຕໄປກັບເຮົາ ແທນທີ່ຈະລາອອກ

## FitSite Network ຈົນຮອດດຽວນີ້

```
FitSite Network
├── WordPress Multisite (subdomain mode)
├── Ultimate Multisite (configured)
├── Hosting with wildcard SSL + domain mapping
├── Site Templates (Studio Essential, Gym Pro, Fitness Chain)
├── Products
│   ├── FitSite Starter ($49/mo) → Studio Essential template
│   ├── FitSite Growth ($99/mo) → Studio Essential + Gym Pro templates
│   ├── FitSite Pro ($199/mo) → ທຸກ Template
│   └── Order Bumps (Extra Storage, Priority Support, Additional Site)
└── ພ້ອມສຳລັບການຕັ້ງຄ່າ checkout (ບົດຮຽນຕໍ່ໄປ)
```

## ສິ່ງທີ່ເຮົາສ້າງໃນບົດຮຽນນີ້

- **ສາມລະດັບແຜນ** ທີ່ກົງກັບສ່ວນຂອງທຸລະກິດຟິດເນສທີ່ເປັນຈິງ
- **ການກັ້ນຟີເຈີ (Feature gating)** ໂດຍໃຊ້ plugin ແລະ ການຄວບຄຸມ template ຂອງ Ultimate Multisite
- **ກຸ່ມແຜນ (plan group)** ທີ່ມີເສັ້ນທາງການອັບເກຣດທີ່ຊັດເຈນ
- **ຜະລິດຕະພັນ order bump** ເພື່ອເພີ່ມລາຍຮັບ
- **ໂຄງສ້າງລາຄາ** ອີງຕາມມູນຄ່າຂອງລູກຄ້າ, ບໍ່ແມ່ນສະເພາະຂໍ້ສະເໜີດ້ານເຕັກນິກ

**Tua:** [Lees 6: Kws Tsim Phau (Signup Experience)](lesson-6-checkout) -- peb tsim phau checkout uas yuav ua rau muam txoj kev ua raub (fitness studio owners) ua tus neeg uas tsis txhob tso thiaj tsis tso (paying customers).
