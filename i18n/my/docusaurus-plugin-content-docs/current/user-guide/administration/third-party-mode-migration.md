---
title: တတိယအဖွဲ့အစည်းပုံစံ ရွှေ့ပြောင်းခြင်း
sidebar_position: 17
_i18n_hash: 21e66c5c40d03011402c58addf6d96f3
---
# Third-Party Mode ပြောင်းရွှေ့ခြင်း {#third-party-mode-migration}

Superdav AI Agent v1.12.0 သည် third-party စွမ်းရည်များကို ကိုင်တွယ်ပုံကို ပြောင်းလဲထားပါသည်။ **Third-party mode သည် ယခုအခါ အလိုအလျောက် (auto) အဖြစ် သတ်မှတ်ထားပြီး**၊ WordPress 7.0+ တွင် manual configuration မလိုဘဲ native WordPress Abilities API integration ကို အသုံးပြုနိုင်ပြီ ဖြစ်ပါသည်။

## ဘာတွေ ပြောင်းလဲသွားလဲ။ {#what-changed}

### v1.12.0 မတိုင်မီက {#before-v1120}

Third-party စွမ်းရည်များအတွက် manual configuration လုပ်ရန် လိုအပ်သည်-

- "third-party mode" ကို ရှင်းရှင်းလင်းလင်း ဖွင့်ပေးရမည်။
- စွမ်းရည်များကို custom registry မှ တင်သွင်းရသည်။
- WordPress Abilities API နှင့် ပေါင်းစပ်မှုသည် ရွေးချယ်နိုင်သည် (optional)။
- Default အနေဖြင့် legacy mode ကို အသုံးပြုရသည်။

### v1.12.0 နောက်ပိုင်း {#after-v1120}

Third-party စွမ်းရည်များသည် အလိုအလျောက် အလုပ်လုပ်သည်-

- Third-party mode သည် "auto" အဖြစ် default သတ်မှတ်ထားသည်။
- စွမ်းရည်များသည် WordPress Abilities API နှင့် native အတိုင်း ပေါင်းစပ်သည်။
- WordPress 7.0+ တွင် manual configuration မလိုအပ်ပါ။
- ယခင် WordPress ဗားရှင်းများအတွက် legacy mode ကို ဆက်လက် အသုံးပြုနိုင်ပါသည်။

## ဘယ်သူတွေ ထိခိုက်သလဲ။ {#who-is-affected}

### အသစ် တင်သွင်းသူများ (WordPress 7.0+) {#new-installations-wordpress-70}

**ဘာမှ လုပ်စရာ မလိုပါ။** Third-party mode ကို အလိုအလျောက် "auto" အဖြစ် သတ်မှတ်ပေးထားပြီး စွမ်းရည်များသည် အသုံးပြုရန် အသင့်ဖြစ်နေပါပြီ။

### လက်ရှိ အသုံးပြုနေသူများ {#existing-installations}

**သင့်ရဲ့ settings များကို သိမ်းဆည်းထားပါတယ်။** အကယ်၍ သင်သည် အောက်ပါတို့ကို အသုံးပြုနေခဲ့ပါက-

- **Legacy mode**: သင်သည် legacy mode တွင်သာ ဆက်ရှိနေမည် (ပြောင်းလဲမှုမရှိ)
- **Manual third-party mode**: သင်သည် manual mode တွင်သာ ဆက်ရှိနေမည် (ပြောင်းလဲမှုမရှိ)
- **Auto mode**: သင်သည် auto mode ဖြင့် ဆက်လက် အသုံးပြုနိုင်မည် (ပြောင်းလဲမှုမရှိ)

### 7.0 မတိုင်မီ WordPress ဗားရှင်းများ {#wordpress-versions-before-70}

**Legacy mode ကို ဆက်လက် အသုံးပြုနိုင်ပါသည်။** WordPress 6.x သို့မဟုတ် ယခင် ဗားရှင်းများတွင် ရှိနေပါက-

- Third-party mode သည် "legacy" အဖြစ် default သတ်မှတ်ထားသည်။
- လိုအပ်ပါက third-party mode ကို manual အတိုင်း ဖွင့်ပေးနိုင်ပါသည်။
- Native Abilities API ကို အသုံးပြုရန် WordPress 7.0+ သို့ အဆင့်မြှင့်တင်ပါ။

## Mode များကို နားလည်ခြင်း {#understanding-the-modes}

### Auto Mode (အသစ် default) {#auto-mode-new-default}

**Auto mode** သည် native WordPress Abilities API integration ကို အသုံးပြုသည်-

- စွမ်းရည်များကို WordPress hooks မှတစ်ဆင့် မှတ်ပုံတင်သည်။
- WordPress 7.0+ Abilities API နှင့် အပြည့်အဝ တွဲဖက်အသုံးပြုနိုင်မှု။
- Third-party စွမ်းရည်များကို အလိုအလျောက် ရှာဖွေတွေ့ရှိသည်။
- manual configuration မလိုအပ်ပါ။

**ဘယ်အချိန်မှာ သုံးမလဲ**: Third-party စွမ်းရည်များပါသော WordPress 7.0+

### Manual Mode {#manual-mode}

**Manual mode** သည် ရှင်းရှင်းလင်းလင်း configuration လုပ်ရန် လိုအပ်သည်-

- မည်သည့် third-party စွမ်းရည်များကို တင်သွင်းရမည်ကို သတ်မှတ်ပေးရသည်။
- စမ်းသပ်မှုများ သို့မဟုတ် ရွေးချယ်ထားသော စွမ်းရည်များကို တင်သွင်းရန် အသုံးဝင်သည်။
- configuration files များကို တည်းဖြတ်ရန် လိုအပ်သည်။
- ထိန်းချုပ်မှု ပိုများသော်လည်း စနစ်ထည့်သွင်းမှု ပိုများသည်။

**ဘယ်အချိန်မှာ သုံးမလဲ**: စမ်းသပ်မှုများ၊ ရွေးချယ်ထားသော စွမ်းရည်များ တင်သွင်းခြင်း သို့မဟုတ် custom configuration များ လုပ်ဆောင်ခြင်း

### Legacy Mode {#legacy-mode}

**Legacy mode** သည် ယခင် third-party စွမ်းရည်စနစ်ကို အသုံးပြုသည်-

- Custom ability registry (WordPress Abilities API မဟုတ်)။
- ယခင် WordPress ဗားရှင်းများနှင့် နောက်ပြန်တွဲဖက်အသုံးပြုနိုင်မှု။
- native WordPress integration မရှိပါ။
- ခေတ်နောက်ကျပြီဖြစ်သော်လည်း ဆက်လက် ပံ့ပိုးပေးထားသည်။

**ဘယ်အချိန်မှာ သုံးမလဲ**: WordPress 6.x သို့မဟုတ် ယခင် ဗားရှင်းများ၊ သို့မဟုတ် legacy compatibility လိုအပ်သည့်အခါ

## သင့်ရဲ့ လက်ရှိ Mode ကို စစ်ဆေးခြင်း {#checking-your-current-mode}

### Admin Panel မှတစ်ဆင့် {#via-admin-panel}

1. **WordPress Admin** → **Superdav AI Agent** → **Settings** သို့ သွားပါ။
2. **Third-Party Mode** setting ကို ရှာပါ။
3. သင့်ရဲ့ လက်ရှိ mode နဲ့ ပြောင်းလဲနိုင်တဲ့ ရွေးချယ်စရာတွေကို မြင်ရပါလိမ့်မယ်။

### Code မှတစ်ဆင့် {#via-code}

```php
$mode = get_option( 'superdav_third_party_mode' );
echo $mode; // 'auto', 'manual', သို့မဟုတ် 'legacy'
```

## Mode ကို ပြောင်းလဲခြင်း {#changing-your-mode}

### Auto Mode သို့ ပြောင်းခြင်း {#switch-to-auto-mode}

WordPress 7.0+ တွင် ရှိနေပြီး auto mode ကို အသုံးပြုလိုပါက-

1. **Superdav AI Agent** → **Settings** သို့ သွားပါ။
2. **Third-Party Mode** ကို ရှာပါ။
3. **Auto (WordPress Abilities API)** ကို ရွေးချယ်ပါ။
4. **Save** ကို နှိပ်ပါ။

Superdav AI Agent သည် third-party စွမ်းရည်များကို အလိုအလျောက် ရှာဖွေပြီး မှတ်ပုံတင်ပေးပါလိမ့်မည်။

### Manual Mode သို့ ပြောင်းခြင်း {#switch-to-manual-mode}

မည်သည့် စွမ်းရည်များကို တင်သွင်းရမည်ကို manual အတိုင်း ထိန်းချုပ်လိုပါက-

1. **Superdav AI Agent** → **Settings** သို့ သွားပါ။
2. **Third-Party Mode** ကို ရှာပါ။
3. **Manual** ကို ရွေးချယ်ပါ။
4. **Save** ကို နှိပ်ပါ။
5. မည်သည့် စွမ်းရည်များကို တင်သွင်းရမည်ကို သတ်မှတ်ရန် သင့်ရဲ့ configuration file ကို တည်းဖြတ်ပါ။

### Legacy Mode သို့ ပြောင်းခြင်း {#switch-to-legacy-mode}

legacy compatibility လိုအပ်ပါက-

1. **Superdav AI Agent** → **Settings** သို့ သွားပါ။
2. **Third-Party Mode** ကို ရှာပါ။
3. **Legacy** ကို ရွေးချယ်ပါ။
4. **Save** ကို နှိပ်ပါ။

## Auto Mode ၏ အကျိုးကျေးဇူးများ {#benefits-of-auto-mode}

### အလိုအလျောက် ရှာဖွေတွေ့ရှိခြင်း (Automatic Discovery) {#automatic-discovery}

စွမ်းရည်များကို အောက်ပါနေရာများမှ အလိုအလျောက် ရှာဖွေတွေ့ရှိသည်-

- တင်ထားသော plugins များ
- အသုံးပြုနေသော theme
- Must-use plugins များ
- Drop-in plugins များ

manual မှတ်ပုံတင်ရန် မလိုအပ်ပါ။

### Native Integration {#native-integration}

စွမ်းရည်များသည် WordPress Abilities API နှင့် ပေါင်းစပ်သည်-

- WordPress core နှင့် ကိုက်ညီမှုရှိသည်။
- WordPress admin နှင့် အလုပ်လုပ်သည်။
- Abilities API ကို အသုံးပြုသည့် အခြား plugins များနှင့် တွဲဖက်အသုံးပြုနိုင်သည်။
- WordPress တိုးတက်လာသည်နှင့်အမျှ အနာဂတ်အတွက် အသင့်ဖြစ်သည်။

### စီမံခန့်ခွဲမှု ရိုးရှင်းခြင်း (Simplified Management) {#simplified-management}

- တည်းဖြတ်ရမည့် configuration files မရှိပါ။
- manual စွမ်းရည် မှတ်ပုံတင်မှု မရှိပါ။
- Ability Visibility controls များသည် အလိုအလျောက် အလုပ်လုပ်သည်။
- Admin notices များက အမျိုးအစားခွဲခြားရန် ကျန်ရှိနေသော စွမ်းရည်များကို သတိပေးသည်။

### ပိုမိုကောင်းမွန်သော စွမ်းဆောင်ရည် (Better Performance) {#better-performance}

- စွမ်းရည်များကို cache လုပ်ထားသည်။
- လိုအပ်သည့်အခါ အလိုအလျောက် တင်ပေးသည်။ (Lazy-loaded)
- WordPress 7.0+ အတွက် အကောင်းဆုံးဖြစ်အောင် လုပ်ထားသည်။

## Migration လမ်းကြောင်း {#migration-path}

### WordPress 6.x တွင် ရှိနေပါက {#if-youre-on-wordpress-6x}

1. **WordPress 7.0+ သို့ အဆင့်မြှင့်တင်ပါ** (အဆင်သင့်ဖြစ်သည့်အခါ)
2. **Superdav AI Agent ကို v1.12.0+ သို့ update လုပ်ပါ**
3. **third-party mode ကို Auto သို့ ပြောင်းပါ** (ရွေးချယ်နိုင်သည်၊ legacy mode သည် ဆက်လက် အလုပ်လုပ်သည်)
4. **စွမ်းရည် မြင်နိုင်မှု (ability visibility)** ကို ပြန်လည်စစ်ဆေးပြီး သင့်လျော်သော ဝင်ရောက်ခွင့် ထိန်းချုပ်မှုများ ရှိမရှိ သေချာပါစေ။

### WordPress 7.0+ တွင် ရှိနေပါက {#if-youre-on-wordpress-70}

1. **Superdav AI Agent ကို v1.12.0+ သို့ update လုပ်ပါ**
2. **third-party mode သည် Auto သို့ သတ်မှတ်ထားကြောင်း စစ်ဆေးပါ** (default အနေဖြင့် ဖြစ်သင့်သည်)
3. **စွမ်းရည် မြင်နိုင်မှု (ability visibility)** ကို ပြန်လည်စစ်ဆေးပြီး သင့်လျော်သော ဝင်ရောက်ခွင့် ထိန်းချုပ်မှုများ ရှိမရှိ သေချာပါစေ။
4. **third-party စွမ်းရည်များကို စမ်းသပ်ပါ** ၎င်းတို့ အလုပ်လုပ်ကြောင်း အတည်ပြုပါ။

## ပြဿနာဖြေရှင်းခြင်း (Troubleshooting) {#troubleshooting}

### Auto mode တွင် စွမ်းရည်များ မပေါ်ခြင်း {#abilities-arent-loading-in-auto-mode}

- WordPress 7.0+ တွင် ရှိမရှိ စစ်ဆေးပါ။
- third-party mode သည် "Auto" သတ်မှတ်ထားကြောင်း စစ်ဆေးပါ။
- စွမ်းရည် ပေးစွမ်းသည့် plugin သည် active ဖြစ်ကြောင်း စစ်ဆေးပါ။
- မှတ်ပုံတင်မှု အမှားများအတွက် WordPress error logs များကို စစ်ဆေးပါ။

### legacy mode ကို ဆက်လက် ထိန်းသိမ်းလိုပါက {#i-want-to-keep-legacy-mode}

- **Settings** → **Third-Party Mode** သို့ သွားပါ။
- **Legacy** ကို ရွေးချယ်ပါ။
- **Save** ကို နှိပ်ပါ။
- Legacy mode သည် ဆက်လက် အလုပ်လုပ်နေပါလိမ့်မည်။

### ကျွန်တော့်ရဲ့ custom စွမ်းရည်များ မပေါ်ခြင်း {#my-custom-abilities-arent-showing}

- ၎င်းတို့သည် WordPress hooks မှတစ်ဆင့် မှတ်ပုံတင်ထားကြောင်း စစ်ဆေးပါ။
- ၎င်းတို့သည် Abilities API ကို မှန်ကန်စွာ အကောင်အထည်ဖော်ထားကြောင်း စစ်ဆေးပါ။
- WordPress error logs များကို ပြန်လည်စစ်ဆေးပါ။
- မှတ်ပုံတင်ထားသော စွမ်းရည်အားလုံးကို ကြည့်ရန် **Ability Visibility** admin page ကို အသုံးပြုပါ။

### "unclassified ability" notice များ ရခြင်း {#im-getting-unclassified-ability-notices}

- ၎င်းသည် third-party စွမ်းရည်အသစ်များအတွက် ပုံမှန်ဖြစ်ပါသည်။
- admin notice တွင် ပြန်လည်စစ်ဆေးပြီး အမျိုးအစားခွဲခြားပေးပါ။
- အမျိုးအစားခွဲခြားခြင်းဆိုင်ရာ အသေးစိတ်အချက်အလက်များအတွက် **Ability Visibility** ကို ကြည့်ပါ။

## နောက်ပြန်တွဲဖက်အသုံးပြုနိုင်မှု (Backward Compatibility) {#backward-compatibility}

### ရှိပြီးသား Configuration များ {#existing-configurations}

သင့်တွင် ရှိပြီးသား third-party စွမ်းရည် configuration များရှိပါက-

- **Legacy mode**: သင့် configuration သည် ဆက်လက် အလုပ်လုပ်နေမည်။
- **Manual mode**: သင့် configuration သည် ဆက်လက် အလုပ်လုပ်နေမည်။
- **Auto mode**: သင့် configuration ကို ဂရုမစိုက်ဘဲ ကျော်သွားမည် (auto mode က အစားထိုးသည်)။

သင့်ရဲ့ custom configuration ကို ထိန်းသိမ်းထားလိုပါက Manual သို့မဟုတ် Legacy mode တွင်သာ နေပါ။

### Deprecation Timeline {#deprecation-timeline}

- **v1.12.0**: Legacy နှင့် Manual mode နှစ်ခုလုံး အပြည့်အဝ ပံ့ပိုးပေးထားဆဲ။
- **v1.13.0+**: Legacy mode တွင် ခေတ်နောက်ကျကြောင်း သတိပေးချက်များ ပေါ်လာနိုင်သည်။
- **v2.0.0**: Legacy mode ကို ဖယ်ရှားပစ်နိုင်သည် (TBD)။

## အကောင်းဆုံး အလေ့အကျင့်များ (Best Practices) {#best-practices}

### အသစ် တင်သွင်းသူများအတွက် {#for-new-installations}

- Auto mode ကို အသုံးပြုပါ (၎င်းသည် default ဖြစ်သည်)။
- Superdav AI Agent ကို စွမ်းရည်များကို အလိုအလျောက် ရှာဖွေခွင့်ပေးပါ။
- ဝင်ရောက်ခွင့် ထိန်းချုပ်ရန် Ability Visibility ကို အသုံးပြုပါ။

### ရှိပြီးသား အသုံးပြုသူများအတွက် {#for-existing-installations}

- ဖြစ်နိုင်သည့်အခါ WordPress 7.0+ သို့ အဆင့်မြှင့်တင်ပါ။
- စီမံခန့်ခွဲမှု ရိုးရှင်းစေရန် Auto mode သို့ ပြောင်းပါ။
- Ability Visibility ကို အသုံးပြု၍ စွမ်းရည်များကို ပြန်လည်စစ်ဆေးပြီး အမျိုးအစားခွဲခြားပေးပါ။

### Custom စွမ်းရည်များအတွက် {#for-custom-abilities}

- WordPress hooks (Abilities API) မှတစ်ဆင့် စွမ်းရည်များကို မှတ်ပုံတင်ပါ။
- custom ability registries များကို ရှောင်ရှားပါ။
- Auto mode ဖြင့် WordPress 7.0+ တွင် စမ်းသပ်ပါ။

## နောက်အဆင့်များ {#next-steps}

1. **သင့်ရဲ့ WordPress ဗားရှင်းကို စစ်ဆေးပါ**: Auto mode အတွက် 7.0+ တွင် ရှိမရှိ စစ်ဆေးပါ။
2. **သင့်ရဲ့ third-party mode ကို ပြန်လည်စစ်ဆေးပါ**: Settings သို့သွားပြီး လက်ရှိ mode ကို စစ်ဆေးပါ။
3. **လိုအပ်ပါက update လုပ်ပါ**: WordPress 7.0+ တွင် ရှိနေပါက Auto mode သို့ ပြောင်းပါ။
4. **စွမ်းရည်များကို အမျိုးအစားခွဲခြားပါ**: အမျိုးအစားခွဲခြားရန် ကျန်ရှိနေသော စွမ်းရည်များကို ပြန်လည်စစ်ဆေးပြီး အမျိုးအစားခွဲခြားပေးပါ။
5. **စမ်းသပ်ပါ**: သင့် third-party စွမ်းရည်များ မှန်ကန်စွာ အလုပ်လုပ်ကြောင်း အတည်ပြုပါ။

## ဆက်စပ် ခေါင်းစဉ်များ {#related-topics}

- **Ability Visibility**: မည်သည့် စွမ်းရည်များကို မည်သည့်နေရာတွင် ပြသမည်ကို ထိန်းချုပ်ခြင်း
- **WordPress Abilities API**: native WordPress ability registration အကြောင်း လေ့လာခြင်း
- **Third-Party Ability Development**: Auto mode နှင့် အလုပ်လုပ်သော စွမ်းရည်များ ဖန်တီးခြင်း
