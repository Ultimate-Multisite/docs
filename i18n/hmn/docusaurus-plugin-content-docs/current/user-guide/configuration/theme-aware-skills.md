---
title: Kev txawv tsim neeg uas paub txog theme
sidebar_position: 27
_i18n_hash: b61ebe1e7de0e5e8edb96c9bc21743cc
---
# ជំនាញដែលយល់ពី Theme (Theme-Aware Skills)

Superdav AI Agent v1.10.0 មានជំនាញថ្មីបួនយ៉ាងដែលយល់ពី Theme ដែលនឹងមកជាមួយដោយស្វ័យប្រវត្តិ ហើយវាអាចសម្របខ្លួនទៅតាម WordPress theme ដែលអ្នកកំពុងប្រើ។ ជំនាញទាំងនេះផ្តល់នូវការណែនាំ និងសមត្ថភាពពិសេសៗដែលត្រូវបានរៀបចំឡើងសម្រាប់រចនាសម្ព័ន្ធ និងមុខងាររបស់ theme របស់អ្នក។

## តើ Theme-Aware Skills ជាអ្វី? {#what-are-theme-aware-skills}

Theme-aware skills គឺជាមូលដ្ឋានចំណេះដឹង (knowledge bases) និងសំណុំឧបករណ៍ (tool sets) ដែលត្រូវបានកំណត់ទុកជាមុន ហើយ AI assistant នឹងជ្រើសរើសដោយស្វ័យប្រវត្តិ ដោយផ្អែកលើ WordPress theme ដែលកំពុងដំណើរការនៅលើគេហទំព័ររបស់អ្នក។ នៅពេលអ្នកប្តូរ theme ជំនាញដែលមានសម្រាប់ assistant នឹងធ្វើបច្ចុប្បន្នដោយស្វ័យប្រវត្តិ — មិនចាំបាច់កំណត់រចនាសម្ព័ន្ធដោយដៃទេ។

ជំនាញនីមួយៗរួមមាន៖

- **ឯកសារជាក់លាក់សម្រាប់ Theme** — ការណែនាំអំពីរបៀបប្រើប្រាស់ និងកែសម្រួល theme
- **ការយោង Block និង pattern** — blocks ដែលអាចប្រើបាន, patterns, និងជម្រើសនៃការរចនា
- **ឧទាហរណ៍នៃការកែសម្រួល (Customization examples)** — code snippets និង pattern ការកំណត់រចនាសម្ព័ន្ធសម្រាប់ភារកិច្ចទូទៅៗ
- **ការអនុវត្តល្អបំផុត (Best practices)** — ការណែនាំអំពីស្ថាបត្យកម្ម និងលំហូរការងាររបស់ theme

## ជំនាញ Theme-Aware ដែលមាន {#available-theme-aware-skills}

### Block Themes {#block-themes}

**適用លើ:** Themes ដែលប្រើប្រាស់រចនាសម្ព័ន្ធ block-based (Full Site Editing) របស់ WordPress។

ជំនាញ Block Themes ផ្តល់នូវការណែនាំអំពី៖

- ការបង្កើត និងកែសម្រួល templates ដោយប្រើ block editor
- ការធ្វើការជាមួយ block patterns និង reusable blocks
- ការកែសម្រួល global styles និងការកំណត់រចនាសម្ព័ន្ធ theme.json
- ការប្រើប្រាស់ theme blocks និង variations
- ការបង្កើត custom block patterns សម្រាប់គេហទំព័ររបស់អ្នក

**ដំណើរការដោយស្វ័យប្រវត្តិនៅពេល:** Theme ដែលអ្នកកំពុងប្រើជា block theme (គាំទ្រមុខងារ `block-templates`)។

### Classic Themes {#classic-themes}

**適用លើ:** Traditional WordPress themes ដែលប្រើ PHP templates និង classic editor។

ជំនាញ Classic Themes ផ្តល់នូវការណែនាំអំពី៖

ការធ្វើការជាមួយ PHP template files និង hooks
ការកែសម្រួលរូបរាង theme តាមរយៈ Customizer
ការប្រើប្រាស់ widget areas និង sidebars
ការកែប្រែ CSS និងការអភិវឌ្ឍ child theme
ការយល់ដឹងពីឋានានុក្រម theme និង template tags

**នឹងដំណើរការដោយស្វ័យប្រវត្តិនៅពេល:** Theme ដែលអ្នកកំពុងប្រើជា classic (មិនមែន block)។

### Kadence Blocks {#kadence-blocks}

**適用លើ:** គេហទំព័រដែលប្រើ plugin Kadence Blocks ដើម្បីរចនាដោយផ្អែកលើ block កម្រិតខ្ពស់។

ជំនាញ Kadence Blocks ផ្តល់នូវការណែនាំអំពី៖

- ការប្រើប្រាស់ library ប្លុកទំនើបរបស់ Kadence (Hero, Testimonials, Pricing, ល)
- ការកំណត់ការตั้งค่า និងជម្រើស responsive របស់ kadence block
- ការបង្កើត layout ដែលអ្នកចង់បានដោយប្រើ grid និង container blocks របស់ Kadence
- ការបញ្ចូលkadence blocks ជាមួយ theme របស់អ្នក
- ការប្រើប្រាស់ design system និង presets របស់ Kadence

**នឹងដំណើរការដោយស្វ័យប្រវត្តិនៅពេល:** plugin Kadence Blocks កំពុងដំណើរការនៅលើគេហទំព័ររបស់អ្នក។

### Kadence Theme {#kadence-theme}

**適用លើ:** គេហទំព័រដែលប្រើ kadence theme ដើម្បីរចនា និងកែសម្រួលដោយផ្អែកលើ block។

ជំនាញ Kadence Theme ផ្តល់នូវការណែនាំអំពី៖

- ការកែសម្រួលkadence theme តាមរយៈ global styles និង theme.json
- ការប្រើប្រាស់ design patterns និង templates ដែលមានស្រាប់របស់ kadence
- ការកំណត់ការตั้งค่า និងជម្រើសនៃkadence theme
- ការបង្កើតការរចនាផ្ទាល់ខ្លួនដោយប្រើ design system របស់ kadence
- ការបញ្ចូលkadence ជាមួយ plugin និង tools ដែលពេញនិយម

**នឹងដំណើរការដោយស្វ័យប្រវត្តិនៅពេល:** kadence theme ជា theme ដែលអ្នកកំពុងប្រើ។

## តើជ្រើសរើស Skills ដោយរបៀបណា {#how-skills-are-selected}

Assistant នឹងរកឃើញ theme ដែលអ្នកកំពុងប្រើ និង plugins ដែលបានដំឡើងនៅលើ message នីមួយៗដោយស្វ័យប្រវត្តិ។ ប្រសិនបើមាន skill ដែលត្រូវគ្នាដែលទាក់ទងនឹង theme នោះ វាត្រូវបានផ្ទុកទៅក្នុង context របស់ assistant ដោយស្វ័យប្រវត្តិ។ អ្នកមិនចាំបាច់បើក ឬប្តូរ skills ដោយដៃទេ។

### Multiple Skills {#multiple-skills}

Хeev tsis muaj duab (for example, if you have both Kadence Blocks and Kadence Theme active), assistant yuav kawm txhua skills uav yuav av. Uav yuav sauj pawb ntawm txhua skill.

### Switching Themes {#switching-themes}

Thaum koj thmey theme uas koj qhia ua haujlwm (when you change your active theme), skills uas assistant muaj yuav khoj tsis txhawj uas nyob hauv mesej tshiab. Ua thiaj li, tsis tas yuav tswj pawb.

1. Koj qhia siv block theme thiab skill **Block Themes** ua haujlwm.
2. Koj tsam rau classic theme.
3. Hauv mesej tshiab uas koj qhia, skill **Classic Themes** yuav muaj los txais, thiab skill **Block Themes** yuav tsis muaj.

## Using Theme-Aware Skills {#using-theme-aware-skills}

Qhov uas koj tuaj yeem siv skill uas paub hauv theme (theme-aware skill), yog kawg qhia rau assistant hauv chat interface ti koj xav ua dab tsi. Assistant yuav hloov txhua guidance ntawm skill uas thiaj li muaj.

### Example Prompts {#example-prompts}

**For Block Themes:**
> "Create a hero section with a background image and centered text using block patterns." (Tsim hero section loj nrog image hauv lub plaw thiab text uas thev hauv lub siab siv block patterns.)

**For Classic Themes:**
> "Add a custom widget area to the sidebar using a child theme." (Thib lub widget area tshiab rau sidebar siv child theme.)

**For Kadence Blocks:**
> "Build a testimonials section using the Kadence Testimonials block." (Tsim testimonials section siv Kadence Testimonials block.)

**For Kadence Theme:**
> "Customize the header layout and navigation menu styling." (Tswj txhua yam ntawm lub header thiab styling ntawm navigation menu.)

Assistant yuav muaj guidance thiab code examples uas thiaj li hloov rau theme thiab plugins uas koj qhia ua haujlwm.

:::note
Theme-aware skills yuav muaj los txais uas paub hauv Superdav AI Agent v1.10.0 thiab tshiab heev. Tsis txhob xav txhua yam rau setup lossis configuration.
:::
