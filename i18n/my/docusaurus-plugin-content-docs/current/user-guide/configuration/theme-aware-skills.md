---
title: Theme-Aware စွမ်းရည်
sidebar_position: 27
_i18n_hash: b61ebe1e7de0e5e8edb96c9bc21743cc
---
# Theme-Aware Skills (အပြင်အဆင်အလိုက် အသိရှိသော စွမ်းရည်များ)

Superdav AI Agent v1.10.0 တွင် သင့်လက်ရှိ WordPress theme နှင့် အလိုအလျောက် လိုက်လျောညီထွေဖြစ်သည့် theme-aware built-in skills လေးခုကို ထည့်သွင်းပေးထားပါသည်။ ဤစွမ်းရည်များသည် သင့် theme ၏ ဖွဲ့စည်းပုံနှင့် အင်္ဂါရပ်များအလိုက် အထူးပြု လမ်းညွှန်မှုများနှင့် စွမ်းဆောင်ရည်များကို ပေးစွမ်းပါသည်။

## What Are Theme-Aware Skills? (Theme-Aware Skills ဆိုသည်မှာ ဘာလဲ။) {#what-are-theme-aware-skills}

Theme-aware skills ဆိုသည်မှာ AI assistant မှ သင့် site တွင် လက်ရှိ အသုံးပြုနေသည့် WordPress theme အပေါ်မူတည်၍ အလိုအလျောက် ရွေးချယ်ပေးသည့် ကြိုတင်သတ်မှတ်ထားသော knowledge base (အသိပညာအခြေခံ) နှင့် tool set (ကိရိယာအစုံ) များ ဖြစ်ပါသည်။ သင် theme ပြောင်းလိုက်သည်နှင့် အလိုအလျောက် update ပေးသွားမှာဖြစ်ပြီး၊ manual configuration (လက်ဖြင့် စီစဉ်ပေးရန်) လိုအပ်ခြင်း မရှိပါ။

စွမ်းရည်တစ်ခုစီတွင် အောက်ပါအရာများ ပါဝင်သည်-

- **Theme-specific documentation** — theme ကို အသုံးပြုပုံနှင့် စိတ်ကြယ်မှုပြုလုပ်ပုံဆိုင်ရာ လမ်းညွှန်မှုများ
- **Block and pattern references** — ရရှိနိုင်သော blocks များ၊ patterns များ၊ နှင့် ဒီဇိုင်းရွေးချယ်မှုများ
- **Customization examples** — အဖြစ်များသော လုပ်ငန်းများအတွက် code snippets နှင့် configuration patterns များ
- **Best practices** — theme ၏ ဖွဲ့စည်းပုံနှင့် လုပ်ငန်းလည်ပတ်မှုအတွက် အကြံပြုချက်များ

## Available Theme-Aware Skills (ရရှိနိုင်သော Theme-Aware Skills များ) {#available-theme-aware-skills}

### Block Themes (Block Themes များ) {#block-themes}

**Applies to:** WordPress block-based (Full Site Editing) architecture ကို အသုံးပြုသည့် themes များ။

The Block Themes skill သည် အောက်ပါအရာများအတွက် လမ်းညွှန်မှုများ ပေးသည်-

- block editor ကို အသုံးပြု၍ templates များ ဖန်တီးခြင်းနှင့် တည်းဖြတ်ခြင်း
- block patterns နှင့် reusable blocks များဖြင့် အလုပ်လုပ်ခြင်း
- global styles နှင့် theme.json settings များကို စိတ်ကြယ်မှုပြုလုပ်ခြင်း
- theme blocks နှင့် variations များကို အသုံးပြုခြင်း
- သင့် site အတွက် custom block patterns များ တည်ဆောက်ခြင်း

**Automatically activated when:** သင့် active theme သည် block theme ဖြစ်သည့်အခါ ( `block-templates` feature ကို ပံ့ပိုးပေးသည်)။

### Classic Themes (Classic Themes များ) {#classic-themes}

**Applies to:** PHP templates နှင့် classic editor ကို အသုံးပြုသည့် ရိုးရာ WordPress themes များ။

The Classic Themes skill သည် အောက်ပါအရာများအတွက် လမ်းညွှန်မှုများ ပေးသည်-

- PHP template files နှင့် hooks များဖြင့် အလုပ်လုပ်ခြင်း
- Customizer မှတစ်ဆင့် theme အသွင်အပြင်ကို စိတ်ကြယ်မှုပြုလုပ်ခြင်း
- widget areas နှင့် sidebars များကို အသုံးပြုခြင်း
- CSS ကို ပြုပြင်ခြင်းနှင့် child theme development လုပ်ခြင်း
- theme hierarchy နှင့် template tags များကို နားလည်ခြင်း

**Automatically activated when:** သင့် active theme သည် classic (non-block) theme ဖြစ်သည့်အခါ။

### Kadence Blocks (Kadence Blocks များ) {#kadence-blocks}

**Applies to:** အဆင့်မြင့် block-based design အတွက် Kadence Blocks plugin ကို အသုံးပြုသည့် site များ။

The Kadence Blocks skill သည် အောက်ပါအရာများအတွက် လမ်းညွှန်မှုများ ပေးသည်-

- Kadence ၏ အဆင့်မြင့် block library (Hero, Testimonials, Pricing စသည်) ကို အသုံးပြုခြင်း
- Kadence block settings နှင့် responsive options များကို configure လုပ်ခြင်း
- Kadence ၏ grid နှင့် container blocks များဖြင့် custom layouts များ တည်ဆောက်ခြင်း
- Kadence blocks များကို သင့် theme နှင့် ပေါင်းစပ်အသုံးပြုခြင်း
- Kadence ၏ design system နှင့် presets များကို အကျိုးရှိစွာ အသုံးချခြင်း

**Automatically activated when:** Kadence Blocks plugin သည် သင့် site တွင် active ဖြစ်သည့်အခါ။

### Kadence Theme (Kadence Theme များ) {#kadence-theme}

**Applies to:** block-based design နှင့် customization အတွက် Kadence theme ကို အသုံးပြုသည့် site များ။

The Kadence Theme skill သည် အောက်ပါအရာများအတွက် လမ်းညွှန်မှုများ ပေးသည်-

- global styles နှင့် theme.json မှတစ်ဆင့် Kadence theme ကို စိတ်ကြယ်မှုပြုလုပ်ခြင်း
- Kadence ၏ built-in block patterns နှင့် templates များကို အသုံးပြုခြင်း
- Kadence theme settings နှင့် options များကို configure လုပ်ခြင်း
- Kadence ၏ design system ဖြင့် custom designs များ တည်ဆောက်ခြင်း
- Kadence ကို လူကြိုက်များသော plugins နှင့် tools များနှင့် ပေါင်းစပ်အသုံးပြုခြင်း

**Automatically activated when:** Kadence theme သည် သင့် active theme ဖြစ်သည့်အခါ။

## How Skills Are Selected (Skills များကို မည်သို့ ရွေးချယ်သနည်း) {#how-skills-are-selected}

Assistant သည် မက်ဆေ့ချ်တစ်ခုချင်းစီတိုင်းတွင် သင့် active theme နှင့် install လုပ်ထားသော plugins များကို အလိုအလျောက် သိရှိနားလည်ပါသည်။ ကိုက်ညီသော theme-aware skill တစ်ခုရှိပါက ၎င်းကို assistant ၏ context ထဲသို့ အလိုအလျောက် load ပေးသွားမှာ ဖြစ်ပါတယ်။ သင်သည် skill များကို manual အနေဖြင့် ဖွင့်ပေးရန် သို့မဟုတ် ပြောင်းလဲပေးရန် မလိုအပ်ပါ။

### Multiple Skills (စွမ်းရည်များစွာ) {#multiple-skills}

သင့် site တွင် skill များစွာ အကျုံးဝင်ပါက (ဥပမာ၊ Kadence Blocks နှင့် Kadence Theme နှစ်ခုလုံး active ဖြစ်ပါက)၊ assistant သည် အကျုံးဝင်သည့် skill အားလုံးကို အသုံးပြုနိုင်ပြီး အားလုံးမှ လမ်းညွှန်မှုများကို ကိုးကားနိုင်ပါသည်။

### Switching Themes (Theme များ ပြောင်းလဲခြင်း) {#switching-themes}

သင် active theme ကို ပြောင်းလိုက်သည့်အခါ၊ နောက်မက်ဆေ့ချ်တွင် assistant ၏ ရရှိနိုင်သော skills များသည် အလိုအလျောက် update ဖြစ်သွားမည်။ ဥပမာအားဖြင့်-

၁။ သင်သည် **Block Themes** skill active ဖြစ်သည့် block theme တစ်ခုကို အသုံးပြုနေပါသည်။
၂။ သင်သည် classic theme တစ်ခုသို့ ပြောင်းလိုက်ပါသည်။
၃။ သင့်နောက်မက်ဆေ့ချ်တွင် **Classic Themes** skill ကို အလိုအလျောက် load ပေးသွားမည်ဖြစ်ပြီး၊ **Block Themes** skill သည် မရရှိတော့ပါ။

## Using Theme-Aware Skills (Theme-Aware Skills များကို အသုံးပြုခြင်း) {#using-theme-aware-skills}

Theme-aware skill တစ်ခုကို အကျိုးရှိစွာ အသုံးပြုလိုပါက၊ chat interface တွင် သင်ဘာလုပ်လိုသည်ကို ရိုးရိုးရှင်းရှင်း ဖော်ပြရုံသာ လိုပါသည်။ assistant သည် သင့် active theme နှင့် plugins များအလိုက် သင့်လျော်သော skill ၏ လမ်းညွှန်မှုများကို အလိုအလျောက် ကိုးကားပေးပါလိမ့်မည်။

### Example Prompts (ဥပမာ မေးခွန်းများ) {#example-prompts}

**For Block Themes:**
> "Create a hero section with a background image and centered text using block patterns."

**For Classic Themes:**
> "Add a custom widget area to the sidebar using a child theme."

**For Kadence Blocks:**
> "Build a testimonials section using the Kadence Testimonials block."

**For Kadence Theme:**
> "Customize the header layout and navigation menu styling."

assistant သည် သင့် active theme နှင့် plugins များအလိုက် အထူးပြု လမ်းညွှန်မှုများနှင့် code ဥပမာများကို ပေးစွမ်းပါလိမ့်မည်။

:::note
Theme-aware skills များသည် Superdav AI Agent v1.10.0 နှင့် နောက်ပိုင်းဗားရှင်းများတွင် အလိုအလျောက် ရရှိနိုင်ပါသည်။ အပိုဆောင်း setup သို့မဟုတ် configuration မလိုအပ်ပါ။
:::
