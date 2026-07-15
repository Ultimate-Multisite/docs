---
title: Theme Builder Onboarding Flow
sidebar_position: 17
_i18n_hash: 67d84d7e08c2ccfaa459bba0c40cb1ea
---
# Theme Builder စတင်အသုံးပြုမှု လမ်းညွှန်မှု

Superdav AI Agent v1.12.0 မှာ စတင်အသုံးပြုတဲ့အခါ စိတ်ကြိုက် block theme တစ်ခု ဖန်တီးနိုင်ဖို့ လမ်းညွှန်ပေးတဲ့ **Theme Builder စတင်အသုံးပြုမှု လမ်းညွှန်မှု (onboarding flow)** ကို မိတ်ဆက်ပေးထားပါတယ်။ ဒါဟာ ယခင် Site Builder ပုံစံကို ပိုပြီး ပြောင်းလွယ်ပြင်လွယ်ရှိတဲ့၊ agent အကူအညီနဲ့ လုပ်ဆောင်တဲ့ ပုံစံသစ်တစ်ခုနဲ့ အစားထိုးလိုက်တာ ဖြစ်ပါတယ်။

## Theme Builder စတင်အသုံးပြုမှု လမ်းညွှန်မှုဆိုတာ ဘာလဲ။ {#what-is-the-theme-builder-onboarding-flow}

Theme Builder စတင်အသုံးပြုမှု လမ်းညွှန်မှုဆိုတာ အသုံးပြုသူကို အဆင့်ဆင့် လမ်းညွှန်ပေးတဲ့ အပြန်အလှန်အကျိုးပြု စနစ်တကျ တည်ဆောက်ပေးသည့် ကိရိယာ (setup wizard) တစ်ခုဖြစ်ပြီး အောက်ပါအရာများကို လုပ်ဆောင်ပေးပါတယ်-

- ဒီဇိုင်းဆုံးဖြတ်ချက်များ (အရောင်များ၊ စာလုံးပုံစံ၊ ပုံစံဖွဲ့စည်းပုံ) ကို လမ်းညွှန်ပေးခြင်း
- သင့်ဝက်ဘ်ဆိုဒ်ရဲ့ မြင်ရတဲ့ ပုံရိပ်ဆိုင်ရာ နှစ်သက်မှုတွေကို မှတ်တမ်းတင်ပေးခြင်း
- သင့်လိုအပ်ချက်နဲ့ ကိုက်ညီတဲ့ စိတ်ကြိုက် block theme တစ်ခုကို ဖန်တီးပေးခြင်း
- လုပ်ငန်းစဉ် ပြီးဆုံးတာနဲ့ theme ကို အလိုအလျောက် အသက်သွင်းပေးခြင်း

ဒီလုပ်ငန်းစဉ်ဟာ **Setup Assistant agent** ရဲ့ အကူအညီနဲ့ လုပ်ဆောင်တာဖြစ်ပြီး၊ မေးခွန်းတွေ မေးမြန်းကာ theme ကို အဆင့်ဆင့် တည်ဆောက်ပေးပါတယ်။

## Theme Builder စတင်အသုံးပြုခြင်း {#starting-the-theme-builder-onboarding}

### ပထမဆုံးအကြိမ် စနစ်တကျ တည်ဆောက်ခြင်း (First-Run Setup) {#first-run-setup}

Superdav AI Agent ကို WordPress အသစ်တစ်ခုမှာ ပထမဆုံးအကြိမ် စတင်အသုံးပြုတဲ့အခါ အောက်ပါအတိုင်း မြင်ရပါလိမ့်မယ်-

```
Welcome to Superdav AI Agent!

What would you like to do?
1. Build a custom theme (Theme Builder)
2. Use an existing theme
3. Skip setup for now
```

Theme Builder စတင်အသုံးပြုမှု လမ်းညွှန်မှုထဲ ဝင်ဖို့ **"Build a custom theme"** ကို ရွေးချယ်ပါ။

### ကိုယ်တိုင် စတင်ခြင်း (Manual Activation) {#manual-activation}

ဘယ်အချိန်မဆို အောက်ပါအတိုင်း တောင်းဆိုခြင်းအားဖြင့် Theme Builder စတင်အသုံးပြုမှု လမ်းညွှန်မှုကို စတင်နိုင်ပါတယ်-

```
"Start the Theme Builder onboarding"
```

ဒါမှမဟုတ်

```
"Help me create a custom theme"
```

## စတင်အသုံးပြုမှု အဆင့်များ {#the-onboarding-steps}

### အဆင့် ၁- ပုံစံရွေးချယ်ခြင်း (Mode Selection) {#step-1-mode-selection}

Setup Assistant agent က သင့်ရဲ့ နှစ်သက်မှုအကြောင်း မေးမြန်းပါလိမ့်မယ်-

```
How would you like to build your theme?
- Guided (I'll ask questions and build it for you)
- Hands-on (I'll show you options and you decide)
```

**Guided mode** ကို အသုံးပြုသူအများစုအတွက် အကြံပြုလိုပါတယ်။ ဒီပုံစံမှာ agent က သင့်ရဲ့ လုပ်ငန်းနယ်ပယ်နဲ့ ရည်ရွယ်ချက်တွေအပေါ် အခြေခံပြီး ဒီဇိုင်း အကြံပြုချက်တွေ ပေးပေးမှာ ဖြစ်ပါတယ်။

### အဆင့် ၂- ဝက်ဘ်ဆိုဒ် အသေးစိတ်သတ်မှတ်ခြင်း (Site Specification) {#step-2-site-specification}

သင့်ဝက်ဘ်ဆိုဒ်အကြောင်း အောက်ပါအချက်တွေ မေးမြန်းပါလိမ့်မယ်-

- **Site purpose**: E-commerce, blog, portfolio, SaaS စသည်တို့။
- **Target audience**: သင့်ဝက်ဘ်ဆိုဒ်ကို ဘယ်သူတွေ လာရောက်ကြည့်ရှုမှာလဲ။
- **Brand colors**: အဓိကနဲ့ ဒုတိယ အရောင်များ (သို့မဟုတ် "မသေချာပါ")
- **Tone**: ပရော်ဖက်ရှင်နယ်၊ ဖန်တီးမှုရှိ၊ ပျော်ရွှင်စရာ၊ ရိုးရှင်း စသည်တို့။

ဒီအချက်အလက်တွေကို **site_brief** မှတ်ဉာဏ်ထဲမှာ သိမ်းဆည်းထားမှာဖြစ်ပြီး၊ agent တွေက နောက်အကြိမ် အသုံးပြုတဲ့အခါမှာ ဒီအချက်အလက်တွေကို ကိုးကားအသုံးပြုမှာ ဖြစ်ပါတယ်။

### အဆင့် ၃- ဒီဇိုင်းစနစ် ဆုံးဖြတ်ချက်များ (Design System Decisions) {#step-3-design-system-decisions}

agent က ဒီဇိုင်း အမှတ်အသား (design token) တွေကို ရွေးချယ်ရာမှာ လမ်းညွှန်ပေးပါလိမ့်မယ်-

- **Typography**: Font family (serif, sans-serif, monospace) နဲ့ size scale
- **Color palette**: အဓိက၊ ဒုတိယ၊ အထူးအသားပေးနဲ့ အနားခံ အရောင်များ
- **Spacing**: ကျစ်ကျစ်သိပ်သိပ်၊ ပုံမှန်၊ ဒါမှမဟုတ် ကျယ်ကျယ်ပြန့်ပြန့် ပုံစံဖွဲ့စည်းမှုများ
- **Motion**: Animation တွေနဲ့ transition တွေ (လိုချင်ရင်)

### အဆင့် ၄- Theme ဖန်တီးခြင်း (Theme Generation) {#step-4-theme-generation}

Setup Assistant agent က အောက်ပါအရာတွေနဲ့ သင့်ရဲ့ စိတ်ကြိုက် block theme ကို အခြေခံဖွဲ့စည်းပုံ (scaffold) ပေးပါလိမ့်မယ်-

- ဒီဇိုင်း အမှတ်အသားအားလုံး ပါဝင်တဲ့ `theme.json`
- အသုံးများတဲ့ ပုံစံဖွဲ့စည်းမှုတွေအတွက် block templates များ (homepage, blog, contact စသည်)
- သင့်ရဲ့ ဒီဇိုင်းစနစ်နဲ့ ကိုက်ညီတဲ့ စိတ်ကြိုက် block style များ
- Theme metadata နဲ့ WordPress support ကြေညာချက်များ

### အဆင့် ၅- အသက်သွင်းခြင်းနှင့် စစ်ဆေးခြင်း (Activation and Verification) {#step-5-activation-and-verification}

theme ကို အလိုအလျောက် အသက်သွင်းပေးမှာဖြစ်ပြီး အောက်ပါအတိုင်း မြင်ရပါလိမ့်မယ်-

```
✓ Your custom theme is now live!
  Theme name: [Your Site Name] Theme
  Colors: [Primary] / [Secondary]
  Typography: [Font Family]

  Visit your site to see the new design.
```

ပြီးရင် theme ဟာ မှန်ကန်စွာ ပြသနေမပြသကြောင်း စစ်ဆေးဖို့ သင့်ဝက်ဘ်ဆိုဒ်ကို ဝင်ကြည့်နိုင်ပါတယ်။

## Site Specification နှင့် site_brief မှတ်ဉာဏ် {#site-specification-and-sitebrief-memory}

စတင်အသုံးပြုမှု လုပ်ငန်းစဉ်အတွင်းမှာ agent က သင့်ဝက်ဘ်ဆိုဒ်ရဲ့ အသေးစိတ်သတ်မှတ်ချက်တွေကို **site_brief** မှတ်ဉာဏ် အမျိုးအစားမှာ သိမ်းဆည်းထားပါတယ်။ ဒီအရာတွေမှာ ပါဝင်တာကတော့-

- ဝက်ဘ်ဆိုဒ် ရည်ရွယ်ချက်နဲ့ ပန်းတိုင်များ
- ပစ်မှတ်ထား အသုံးပြုသူများ
- Brand အရောင်တွေနဲ့ Tone
- ဒီဇိုင်း နှစ်သက်မှုများ
- အကြောင်းအရာ ဖွဲ့စည်းပုံ

### site_brief ဘာကြောင့် အရေးပါသလဲ {#why-sitebrief-matters}

နောက်အကြိမ် အသုံးပြုတဲ့အခါမှာ agent တွေက site_brief ကို ကိုးကားအသုံးပြုတာကြောင့်-

- ပြောင်းလဲမှုတွေကြားမှာ ဒီဇိုင်းကို တသမတ်တည်းဖြစ်အောင် ထိန်းသိမ်းနိုင်ခြင်း
- သင့်ဝက်ဘ်ဆိုဒ် ရည်ရွယ်ချက်နဲ့ ကိုက်ညီတဲ့ အင်္ဂါရပ်တွေကို အကြံပြုနိုင်ခြင်း
- အခြေအနေနဲ့ ကိုက်ညီတဲ့ အကြံပြုချက်တွေ ပေးနိုင်ခြင်း
- စတင်အသုံးပြုမှု မေးခွန်းတွေကို ထပ်ခါထပ်ခါ မမေးရတော့ခြင်း

### သင့် site_brief ကို ကြည့်ရှုခြင်း {#viewing-your-sitebrief}

agent ကို အောက်ပါအတိုင်း မေးမြန်းနိုင်ပါတယ်-

```
"Show me my site brief"
```

ဒါမှမဟုတ်

```
"What do you know about my site?"
```

agent က သိမ်းဆည်းထားတဲ့ site specification ကို ပြသပေးပါလိမ့်မယ်။

## စတင်အသုံးပြုပြီးနောက် စိတ်ကြိုက်ပြင်ဆင်ခြင်း (Customizing After Onboarding) {#customizing-after-onboarding}

Theme Builder စတင်အသုံးပြုမှု လမ်းညွှန်မှု ပြီးဆုံးသွားပြီးနောက်မှာ သင်လုပ်နိုင်တာတွေကတော့-

### Design System Aesthetics Skill ကို အသုံးပြုခြင်း {#use-the-design-system-aesthetics-skill}

ဒီဇိုင်းကို ပိုမိုကောင်းမွန်အောင် ပြုပြင်ဖို့ တောင်းဆိုနိုင်ပါတယ်-

```
"Refine the typography to be more modern"
```

ဒါမှမဟုတ်

```
"Adjust the color palette to be warmer"
```

**Design System Aesthetics skill** က ပစ်မှတ်ထားတဲ့ ဒီဇိုင်း အဆင့်မြှင့်တင်မှုတွေအတွက် လမ်းညွှန်ပေးပါလိမ့်မယ်။

### theme.json ကို တိုက်ရိုက်တည်းဖြတ်ခြင်း (Edit theme.json Directly) {#edit-themejson-directly}

အဆင့်မြင့် အသုံးပြုသူတွေအတွက်၊ အောက်ပါအရာတွေကို ချိန်ညှင်ဖို့ `/wp-content/themes/[theme-name]/theme.json` ကို တည်းဖြတ်နိုင်ပါတယ်-

- Color tokens များ
- Typography scales များ
- Spacing values များ
- Border နဲ့ shadow အဓိပ္ပာယ်ဖွင့်ဆိုချက်များ

### စိတ်ကြိုက် Block Templates များ ဖန်တီးခြင်း (Create Custom Block Templates) {#create-custom-block-templates}

အောက်ပါအရာတွေအတွက် စိတ်ကြိုက် template တွေ ဖန်တီးဖို့ WordPress block editor ကို အသုံးပြုနိုင်ပါတယ်-

- Homepage layout များ
- Blog post pages များ
- Product pages များ
- Contact forms များ

## နှိုင်းယှဉ်ချက်- အရင်ပုံစံ vs. အသစ်ပုံစံ (Comparison: Old vs. New Onboarding) {#comparison-old-vs-new-onboarding}

| Feature | Site Builder (Legacy) | Theme Builder (New) |
|---------|----------------------|-------------------|
| Setup method | Wizard-based form | Agent-guided conversation |
| Theme generation | Limited templates | Custom scaffolding |
| Design tokens | Manual entry | Guided decisions |
| Flexibility | Fixed options | Customizable |
| Future updates | Not referenced | Stored in site_brief |

## ပြဿနာဖြေရှင်းခြင်း (Troubleshooting) {#troubleshooting}

**စတင်အသုံးပြုမှု လမ်းညွှန်မှု မပြီးဆုံးခဲ့ပါ**
- လုပ်ငန်းစဉ်ကို ပြန်စပါ- "Start the Theme Builder onboarding"
- သင့် WordPress installation က နောက်ဆုံးပေါ်ဖြစ်ကြောင်း စစ်ဆေးပါ
- Setup Assistant agent ကို ဖွင့်ထားကြောင်း အတည်ပြုပါ

**ကျွန်တော့် site_brief ကို အသုံးမပြုပါဘူး**
- agent က memory ကို ဝင်ရောက်ခွင့်ရှိကြောင်း အတည်ပြုပါ
- agent ကို "recall my site brief" လို့ မေးမြန်းပါ
- သင့် setting တွေမှာ memory ကို ဖွင့်ထားကြောင်း စစ်ဆေးပါ

**ဖန်တီးထားတဲ့ theme က ကျွန်တော့် နှစ်သက်မှုနဲ့ မကိုက်ညီပါ**
- ဒီဇိုင်းကို ပြင်ဆင်ဖို့ Design System Aesthetics skill ကို အသုံးပြုပါ
- agent ကို "regenerate the theme with [specific changes]" လို့ မေးမြန်းပါ
- တိကျတဲ့ ထိန်းချုပ်မှုအတွက် theme.json ကို တိုက်ရိုက်တည်းဖြတ်ပါ

## နောက်အဆင့်များ (Next Steps) {#next-steps}

Theme Builder စတင်အသုံးပြုမှု လမ်းညွှန်မှု ပြီးဆုံးပြီးနောက်မှာ-

1. **သင့်ဝက်ဘ်ဆိုဒ်ကို စစ်ဆေးပါ**: theme အသစ်ကို ကြည့်ဖို့ သင့်ဝက်ဘ်ဆိုဒ်ကို ဝင်ကြည့်ပါ။
2. **ဒီဇိုင်းကို ပိုမိုကောင်းမွန်အောင် ပြင်ဆင်ပါ**: ချိန်ညှင်မှုတွေအတွက် Design System Aesthetics skill ကို အသုံးပြုပါ။
3. **အကြောင်းအရာ ထည့်ပါ**: သင့်ဝက်ဘ်ဆိုဒ်ရဲ့ အကြောင်းအရာတွေကို စတင်တည်ဆောက်ပါ။
4. **စွမ်းရည်များကို လေ့လာပါ**: scaffold-block-theme နဲ့ activate-theme လို agent စွမ်းရည်အကြောင်းတွေကို လေ့လာပါ။
