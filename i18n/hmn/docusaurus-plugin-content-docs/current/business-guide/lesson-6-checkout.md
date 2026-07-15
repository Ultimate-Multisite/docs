---
title: 'Loj 6: Kws Tsim Hauv'
sidebar_position: 7
_i18n_hash: a5c16cdd9b4e53a69e138df7bb042411
---
# Lesson 6: 体验註冊流程 (The Signup Experience)

Checkout flow нь сонирхоллыг орлого болгодог хэсэг юм. төвөгтэй эсвэл ерөнхий бүтэцтэй signup процесс нь хэрэглэгчдийг алдагдуулдаг. Тэдний хэлээр ярьж, амархан мэт санагдах тусгайлан зориулсан flow нь тэднийг худалдан авагч болгодог.

## Бид хаана байсан бэ? (Where We Left Off) {#where-we-left-off}

FitSite-т загварууд болон төлөвлөгөө (plans) тохирсон байна. Одоо бид фитнес студийн эзэнүүдийг төлбөр төлөх хэрэглэгч болгодог бүртгэл ба checkout experience-ийг бүтээе.

## Бүртгэлийн Flow-г ойлгох (Understanding the Registration Flow) {#understanding-the-registration-flow}

Ultimate Multisite-ийн checkout forms нь бүрэн тохируулж болох олон алхамтай form юм. FitSite-д бид дараах flow-г хүсдэг:

1. Фитнес бизнест зориулж бүтээсэн мэт санагдах
2. Зөвхөн шаардлагатай зүйлсийг цуглуулах
3. Хэрэглэгчийг хамгийн хурдан боломжит байдлаар ажилладаг сайт руу хүргэх

Бүрэн техникийн мэдээллийн хувьд [The Registration Flow](/user-guide/configuration/the-registration-flow)-ыг үзнэ үү.

## FitSite Checkout-ийг загварчлах (Designing the FitSite Checkout) {#designing-the-fitsite-checkout}

**Ultimate Multisite > Checkout Forms** руу орж, шинэ form үүсгээрэй.

### Алхам 1: Төлөвлөгөө сонгох (Plan Selection) {#step-1-plan-selection}

Фитнес студийн эзэн харах анхны зүйл бол тэдний ойлгодог хэлбэрээр танилцуулсан төлөвлөгөөс байх ёстой.

- **Pricing Table** талбарыг нэмнэ
- Түүнд FitSite-ийн гурван төлөвлөгөө бүрийг харуулахыг тохируулна
- Бид Lesson 5-т бичсэн төлөвлөгөөний тайлгууд энд гарна -- тэдгээр нь техникийн онцлог биш, харин фитнес бизнесийн хэрэгцээнд хариулах ёстой.

:::tip Тусгайлан зориулсан хэл (Niche Language Matters)
"1 GB storage" гэдэг нь жимшигч эзэнэд юу ч утгагүй. "Профессионал студийн вэбсайтд танд шаардлагатай бүх зүйл" гэдэг нь бүх зүйлийг хэлнэ. Төлөвлөгөөний тайлбарыг өөрийн хэрэглэгчийн хэлээр бичээрэй.
:::

### ជំហានទី ២៖ ការជ្រើសរើស Template (Template Selection) {#step-2-template-selection}

បន្ទាប់ពីជ្រើសរើស plan រួច អ្នកប្រើប្រាស់នឹងជ្រើសរើស template ចាប់ផ្តើម។

- បន្ថែមវាល **Template Selection** (ការជ្រើសរើស Template)
- template ដែលមានគឺត្រូវបានច្រោះដោយផ្អែកលើ plan ដែលពួកគេបានជ្រើសរើសរួចហើយ (ដែលបានកំណត់នៅក្នុង Lesson 5)
- template នីមួយៗគួរតែមានរូបភាពមើលជាមុន (preview image) ដែលបង្ហាញពីការរចនាជាក់លាក់សម្រាប់ផ្នែកហាត់ប្រាណ។

### ជំហានទី ៣៖ ការបង្កើតគណនី (Account Creation) {#step-3-account-creation}

រក្សាវាឱ្យតិចបំផុត។ ប្រមូលតែ៖

- Email address
- Password
- Studio/business name (ឈ្មោះស្ទូឌីយោ ឬអាជីវកម្មនេះនឹងក្លាយជាឈ្មោះគេហទំព័ររបស់ពួកគេ)

កុំសួរព័ត៌មានដែលអ្នកមិនត្រូវការនៅពេលចុះឈ្មោះ។ ការបន្ថែមវាលលើសពីការចាំបាច់ នឹងធ្វើឱ្យអត្រាប្រែប្រួល (conversions) ថយចុះ។

### ជំហានទី ៤៖ ការរៀបចំគេហទំព័រ (Site Setup) {#step-4-site-setup}

- **Site title** (ចំណងជើងគេហទំព័រ): បំពេញដោយស្វ័យប្រវត្តិពីឈ្មោះស្ទូឌីយោដែលបានបញ្ចូលក្នុងជំហានទី ៣
- **Site URL** (អាសយដ្ឋានគេហទំព័រ): បង្កើតដោយស្វ័យប្រវត្តិពីឈ្មោះស្ទូឌីយោ (ឧទាហរណ៍៖ `ironworks.fitsite.com`)

### ជំហានទី ៥៖ ការបង់ប្រាក់ (Payment) {#step-5-payment}

- បន្ថែមវាល **Payment** (ការបង់ប្រាក់)
- កំណត់ payment gateway របស់អ្នក ([Stripe](/user-guide/payment-gateways/stripe) ត្រូវបានណែនាំសម្រាប់ការគិតថ្លៃជា subscription)
- ប្រសិនបើអ្នកបានបង្កើត order bumps នៅក្នុង Lesson 5 សូមបន្ថែមវាល **Order Bump** (ការលើកទឹកចិត្តបញ្ជាទិញ) មុនជំហានបង់ប្រាក់។

### ជំហានទី ៦៖ ការបញ្ជាក់ (Confirmation) {#step-6-confirmation}

- កែសម្រួលសារបញ្ជាក់ដោយប្រើភាសាដែលពាក់ព័ន្ធនឹងផ្នែកហាត់ប្រាណ
- ឧទាហរណ៍៖ "គេហទំព័រស្ទូឌីយោហាត់ប្រាណរបស់អ្នកកំពុងត្រូវបានបង្កើត។ អ្នកនឹងត្រូវបានបញ្ជូនទៅកាន់គេហទំព័រថ្មីរបស់អ្នកក្នុងរយៈពេលប៉ុន្មានវិនាទីទៀត។"

## ការបន្ថែម Toggle សម្រាប់ជ្រើសរើសរយៈពេល (Adding a Period Selection Toggle) {#adding-a-period-selection-toggle}

ຖ້າເຈົ້າໄດ້ຕັ້ງຄ່າ price variations ຢູ່ໃນ plan ຂອງເຈົ້າ (ປະຈຳເດືອນ vs. ປະຈຳປີ) ແລ້ວ, ເພີ່ມ field ຊື່ **Period Selection** ໃສ່ໃນ checkout form ເພື່ອໃຫ້ລູກຄ້າສາມາດເລືອກລະຫວ່າງຮອບການເກັບເງິນໄດ້. ເບິ່ງ [Checkout Forms](/user-guide/configuration/checkout-forms#adding-a-period-selection-toggle) ເພື່ອຂໍຄຳແນະນຳ.

## ການຕັ້ງຄ່າ Payment {#configuring-payment}

ຖ້າເຈົ້າຫຍັງເຮັດບໍ່ໄດ້ setup payment gateway ແລ້ວ:

1. ໄປທີ່ **Ultimate Multisite > Settings > Payment Gateways**
2. ປະຕິບັດຕາມ [Stripe setup guide](/user-guide/payment-gateways/stripe) ຫຼື gateway ທີ່ເຈົ້າຢາກໃຊ້
3. ທົດສອບ checkout flow ໃຫ້ສຳເລັດດ້ວຍການຈ່າຍເງິນແບບ test

ເບິ່ງ [Getting Paid](/user-guide/payment-gateways/getting-paid) ເພື່ອລາຍລະອຽດກ່ຽວກັບວິທີທີ່ເງິນຈະເຂົ້າບັນຊີຂອງເຈົ້າ.

## ການທົດສອບ Flow {#testing-the-flow}

ກ່ອນທີ່ຈະໄປຕໍ່, ໃຫ້ເຮັດການ signup ທົດສອບແບບເຕັມ:

1. ເປີດ checkout form ໃນ incognito/private browser window
2. ເລືອກ plan
3. ເລືອກ template
4. ສ້າງ account
5. ຈ່າຍເງິນ (ໃຊ້ test mode)
6. ກວດສອບວ່າ site ຖືກສ້າງຂຶ້ນດ້ວຍ template ທີ່ຖືກຕ້ອງ

ກວດສອບໃຫ້ແນ່:

- [ ] ຄຳອະທິບາຍ plan ຊັດເຈນ ແລະ ເໝາະກັບ niche ນັ້ນໆ
- [ ] Template previews ສະແດງ design ທີ່ເໝາະສົມກັບການອອກກຳລັງກາຍ
- [ ] URL ຂອງ site ສ້າງໄດ້ຖືກຕ້ອງຈາກຊື່ studio
- [ ] ຂັ້ນຕອນການຈ່າຍເງິນສຳເລັດໂດຍບໍ່ມີບັນຫາ
- [ ] ລູກຄ້າເຂົ້າໄປໃນ site ທີ່ເຮັດວຽກດ້ວຍ template ທີ່ເລືອກໄວ້
- [ ] email ຢືນຢັນໃຊ້ພາສາທີ່ເໝາະກັບການອອກກຳລັງກາຍ

## FitSite Network ຈົນຮອດດຽວນີ້ {#the-fitsite-network-so-far}

FitSite Network
├── WordPress Multisite (subdomain mode)
├── Ultimate Multisite (configured)
├── Hosting with wildcard SSL + domain mapping
├── Site Templates (Studio Essential, Gym Pro, Fitness Chain)
├── Products (Starter, Growth, Pro + Order Bumps)
├── Checkout Flow
│   ├── Plan selection with niche-specific descriptions
│   ├── Template selection with fitness previews
│   ├── Minimal account creation
│   ├── Payment via Stripe
│   └── Fitness-specific confirmation
└── Ready for branding (next lesson)

## ང་ཚོས་འདིར་བྱས་པ་རེད། (What We Built This Lesson) {#what-we-built-this-lesson}

- **Fitness studio owners-ལུ་བརྟེན་ပြုထားတဲ့ checkout form** (A multi-step checkout form tailored to fitness studio owners)
- **Signup flow ཧྲིལ་བའི་སྐད་ཆ་ཚུ་** (Niche-specific language throughout the signup flow)
- **Friction minimal** -- essential fields ལས་མེད་པ, site འགོ་བཙུགས་ནི་ལུ་ 速རིམ་ (Minimal friction -- only essential fields, fast path to a working site)
- **Stripe ກັບ Payment integration** (Payment integration with test verification)
- **Plan selection ནང་ལས་ site འགོ་བཙུགས་ནི་ཚུའི་ flow ཡོངས་སུ་འགྲིག** (A tested end-to-end flow from plan selection to working site)

---

**Next:** [Lesson 7: Making It Yours](lesson-7-branding) -- website 盘་ལུ་ brand བཟོ་ནི་དང་ FitSite 盘་ལུ་ brand བསྐྲུན་པ་ (we white-label the platform and establish FitSite as a brand.)
