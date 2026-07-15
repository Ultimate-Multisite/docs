---
title: ជំនាញដែលយល់ពីស្ទីល
sidebar_position: 27
_i18n_hash: b61ebe1e7de0e5e8edb96c9bc21743cc
---
# ทักษะที่คำนึงถึงธีม (Theme-Aware Skills)

Superdav AI Agent v1.10.0 มีทักษะใหม่แบบ built-in สี่อย่างที่ปรับเปลี่ยนตัวเองโดยอัตโนมัติให้เข้ากับ WordPress theme ที่คุณใช้งานอยู่ ทักษะเหล่านี้จะให้คำแนะนำและความสามารถเฉพาะทางที่ออกแบบมาเพื่อสถาปัตยกรรมและฟีเจอร์ของธีมของคุณ

## ทักษะที่คำนึงถึงธีมคืออะไร? {#what-are-theme-aware-skills}

ทักษะที่คำนึงถึงธีม คือฐานความรู้ (knowledge bases) และชุดเครื่องมือ (tool sets) ที่ถูกตั้งค่าไว้ล่วงหน้า ซึ่งผู้ช่วย AI จะเลือกโดยอัตโนมัติตาม WordPress theme ที่กำลังใช้งานอยู่บนเว็บไซต์ของคุณ เมื่อคุณเปลี่ยนธีม ทักษะที่มีให้ของผู้ช่วยจะอัปเดตโดยอัตโนมัติ ไม่ต้องตั้งค่าด้วยตนเอง

แต่ละทักษะประกอบด้วย:

- **เอกสารเฉพาะสำหรับธีม (Theme-specific documentation)** — คำแนะนำเกี่ยวกับการใช้งานและการปรับแต่งธีม
- **การอ้างอิงบล็อกและรูปแบบ (Block and pattern references)** — บล็อก, รูปแบบ และตัวเลือกการออกแบบที่มีให้ใช้
- **ตัวอย่างการปรับแต่ง (Customization examples)** — โค้ดสั้นๆ และรูปแบบการตั้งค่าสำหรับงานทั่วไป
- **แนวทางปฏิบัติที่ดีที่สุด (Best practices)** — คำแนะนำเกี่ยวกับสถาปัตยกรรมและขั้นตอนการทำงานของธีม

## ทักษะที่คำนึงถึงธีมที่มีให้ใช้ {#available-theme-aware-skills}

### ธีมแบบบล็อก (Block Themes) {#block-themes}

**ใช้กับ:** ธีมที่ใช้สถาปัตยกรรมแบบบล็อกของ WordPress (Full Site Editing)

ทักษะ Block Themes จะให้คำแนะนำเกี่ยวกับ:

- การสร้างและแก้ไข template โดยใช้ block editor
- การทำงานกับ block patterns และ reusable blocks
- การปรับแต่ง global styles และการตั้งค่า theme.json
- การใช้ theme blocks และ variations
- การสร้าง custom block patterns สำหรับเว็บไซต์ของคุณ

**จะถูกเปิดใช้งานโดยอัตโนมัติเมื่อ:** ธีมที่กำลังใช้งานอยู่เป็นธีมแบบบล็อก (รองรับฟีเจอร์ `block-templates`)

### ธีมแบบคลาสสิก (Classic Themes) {#classic-themes}

**ใช้กับ:** ธีม WordPress แบบดั้งเดิมที่ใช้ PHP templates และ classic editor

ทักษะ Classic Themes จะให้คำแนะนำเกี่ยวกับ:

ការធ្វើការជាមួយ file template PHP និង hooks
ការកែសម្រួលរូបរាង theme តាមរយៈ Customizer
ការប្រើប្រាស់ widget areas និង sidebars
ការកែសម្រួល CSS និងការអភិវឌ្ឍ child theme
ការយល់ដឹងពីឋានានុក្រម theme និង template tags

**ដំណើរការដោយស្វ័យប្រវត្តិនៅពេល:** Theme ដែលអ្នកកំពុងប្រើជាប្រភេទ classic (មិនមែន block)។

### Kadence Blocks {#kadence-blocks}

**適用លើ៖** គេហទំព័រដែលប្រើ plugin Kadence Blocks សម្រាប់ការរចនាផ្អែកលើ block កម្រិតខ្ពស់។

ជំនាញ Kadence Blocks ផ្តល់នូវការណែនាំអំពី៖

- ការប្រើប្រាស់ library ប្លុកขั้นสูงរបស់ Kadence (Hero, Testimonials, Pricing, ល)
- ការកំណត់ការตั้งค่า block និងជម្រើស responsive របស់ Kadence
- ការបង្កើត layout ដែលអ្នកចង់បានដោយប្រើ grid និង container blocks របស់ Kadence
- ការបញ្ចូល Kadence blocks ជាមួយ theme របស់អ្នក
- ការទាញយកប្រយោជន៍ពី design system និង presets របស់ Kadence

**ដំណើរការដោយស្វ័យប្រវត្តិនៅពេល:** plugin Kadence Blocks កំពុងដំណើរការនៅលើគេហទំព័ររបស់អ្នក។

### Kadence Theme {#kadence-theme}

**適用លើ៖** គេហទំព័រដែលប្រើ Kadence theme សម្រាប់ការរចនាផ្អែកលើ block និងការកែសម្រួល។

ជំនាញ Kadence Theme ផ្តល់នូវការណែនាំអំពី៖

- ការកែសម្រួល Kadence theme តាមរយៈ global styles និង theme.json
- ការប្រើប្រាស់ design patterns និង templates ដែលមានស្រាប់របស់ Kadence
- ការកំណត់ការตั้งค่า និងជម្រើសរបស់ Kadence theme
- ការបង្កើត design ដោយប្រើ design system របស់ Kadence
- ការបញ្ចូល Kadence ជាមួយ plugin និង tools ដែលពេញនិយម

**ដំណើរការដោយស្វ័យប្រវត្តិនៅពេល:** Kadence theme ជា theme ដែលអ្នកកំពុងប្រើ។

## តើ Skills ត្រូវបានជ្រើសរើសដោយរបៀបណា {#how-skills-are-selected}

Assistant នឹងរកឃើញ theme ដែលអ្នកកំពុងប្រើ និង plugins ដែលបានដំឡើងនៅលើ message នីមួយៗដោយស្វ័យប្រវត្តិ។ ប្រសិនបើមាន skill ដែលត្រូវគ្នាដែលទាក់ទងនឹង theme នោះ វាត្រូវបានផ្ទុកទៅក្នុង context របស់ assistant ដោយស្វ័យប្រវត្តិ។ អ្នកមិនចាំបាច់បើកដំណើរការ ឬប្តូរ skills ដោយដៃទេ។

### Multiple Skills {#multiple-skills}

ប្រសិនបើមានជំនាញច្រើនអាចប្រើបាននៅលើគេហទំព័ររបស់អ្នក (ឧទាហរណ៍ ប្រសិនបើអ្នកប្រើទាំង Kadence Blocks និង Kadence Theme) អ្នកជំនួយការនឹងអាចចូលប្រើជំនាញទាំងអស់ដែលអាចអនុវត្តបាន ហើយអាចយោងទៅលើការណែនាំពីជំនាញនីមួយៗ។

### ការប្តូរ Theme (ស្ទីលគេហទំព័រ) {#switching-themes}

នៅពេលអ្នកផ្លាស់ប្តូរ theme ដែលកំពុងដំណើរការរបស់អ្នក ជំនាញដែលមានសម្រាប់ជំនួយការនឹងធ្វើបច្ចុប្បន្នដោយស្វ័យប្រវត្តិនៅក្នុងសារបន្ទាប់។ ឧទាហរណ៍៖

1. អ្នកកំពុងប្រើ block theme (theme ប្លុក) ដោយមានជំនាញ **Block Themes** ត្រូវបានបើកដំណើរការ។
2. អ្នកផ្លាស់ប្តូរទៅជា classic theme (theme បែបបុរាណ)។
3. នៅសារបន្ទាប់របស់អ្នក ជំនាញ **Classic Themes** នឹងត្រូវបានផ្ទុកដោយស្វ័យប្រវត្តិ ហើយជំនាញ **Block Themes** នឹងមិនអាចប្រើបានទៀតទេ។

## ការប្រើប្រាស់ Theme-Aware Skills (ជំនាញដែលយល់ពី Theme) {#using-theme-aware-skills}

ដើម្បីទាញយកអត្ថប្រយោជន៍ពីជំនាញដែលយល់ពី theme អ្នកគ្រាន់តែពិពណ៌នាអំពីអ្វីដែលអ្នកចង់ធ្វើនៅក្នុង chat interface។ ជំនួយការនឹងយោងទៅលើការណែនាំនៃជំនាញសមស្របដោយស្វ័យប្រវត្តិ។

### ឧទាហរណ៍នៃការសួរ (Prompts) {#example-prompts}

**សម្រាប់ Block Themes:**
> "បង្កើត hero section ដែលមានរូបភាពផ្ទៃខាងក្រោយ និងអត្ថបទនៅចំកណ្តាល ដោយប្រើ block patterns។"

**សម្រាប់ Classic Themes:**
> "បន្ថែម custom widget area ទៅក្នុង sidebar ដោយប្រើ child theme។"

**សម្រាប់ Kadence Blocks:**
> "បង្កើតផ្នែក testimonal (ការបញ្ជាក់ពីអតិថិជន) ដោយប្រើ Kadence Testimonials block។"

**សម្រាប់ Kadence Theme:**
> "កែសម្រួល layout header និងការរចនា menu navigation។"

ជំនួយការនឹងផ្តល់នូវការណែនាំ និងឧទាហរណ៍ code ដែលផ្តោតលើ theme និង plugins ដែលអ្នកកំពុងប្រើប្រាស់។

:::note
ជំនាញដែលយល់ពី theme គឺមានដោយស្វ័យប្រវត្តិនៅក្នុង Superdav AI Agent v1.10.0 និងថ្មីជាងនេះ។ មិនត្រូវការការកំណត់រចនាសម្ព័ន្ធ ឬការរៀបចំបន្ថែមណាមួយទេ។
:::
