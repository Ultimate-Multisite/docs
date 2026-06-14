---
title: තේමා ගොඩනැගීමේ හැකියාවන්
sidebar_position: 20
_i18n_hash: 9289bf7c5f164c1b2052ea428e0e3898
---
# තේමාව ගොඩනැගීමේ හැකියාවන්: Scaffold සහ Activate Block Themes

Superdav AI Agent v1.12.0 මගින් ඔබට චැට් අතුරුමුහුණත (chat interface) හරහා කස්ටම් block themes සෘජුවම ජනනය කර ස්ථාපනය කිරීමට ඉඩ සලසන බලවත් හැකියාවන් දෙකක් හඳුන්වා දී ඇත.

## දළ විශ්ලේෂණය

**scaffold-block-theme** සහ **activate-theme** හැකියාවන් මගින් ඒජන්ට පහත දේ කළ හැකිය:
- ඔබේ අවශ්‍යතා මත පදනම්ව සම්පූර්ණ, නිෂ්පාදනයට සූදානම් block themes ජනනය කිරීම.
- අතින් මැදිහත්වීමකින් තොරව ඔබේ වෙබ් අඩවිය මත themes ස්වයංක්‍රීයව ක්‍රියාත්මක කිරීම.
- මඟ පෙන්වන නිර්මාණ තීරණ හරහා එකමුතු දෘශ්‍ය අනන්‍යතා (visual identities) නිර්මාණය කිරීම.

## Block Theme Scaffold කිරීම

**scaffold-block-theme** හැකියාව මගින් සම්පූර්ණ theme structure එකක් ඇතුළුව නව WordPress block theme එකක් ජනනය කරයි:

- design tokens සහිත `theme.json` සැකසුම්
- පොදු layouට් සඳහා Block template ගොනු
- කස්ටම් block styles සහ variations
- Theme metadata සහ support declarations

### ක්‍රියාත්මක කරන ආකාරය

Superdav AI Agent සමඟ ඔබේ චැට් එකේ, ඔබට theme ජනනය කිරීමට ඉල්ලීම් කළ හැකිය:

```
"Modern Agency" නමින් නිල් සහ සුදු වර්ණ සංකේතයක් සහිත, sans-serif අකුරු වර්ගයක් සහ වෘත්තීය layouට් එකක් සහිත block theme එකක් සාදන්න.
```

ඒජන්ට් එක කරනු ඇත:
1. සංවාදය හරහා ඔබේ නිර්මාණ කැමැත්ත රැස් කිරීම
2. සම්පූර්ණ theme structure එක ජනනය කිරීම
3. අවශ්‍ය සියලුම theme ගොනු නිර්මාණය කිරීම
4. activation සඳහා theme එක සූදානම් කිරීම

### අපේක්ෂිත ප්‍රතිදානය

මෙම හැකියාව සාර්ථකව ක්‍රියාත්මක වූ විට, ඔබට පහත දේ දැකගත හැක:

- theme එක scaffold කර ඇති බවට තහවුරු කිරීම
- theme නාමය සහ ස්ථානය
- යොදාගත් design tokens වල සාරාංශය (වර්ණ, අකුරු වර්ග, පරතරය)
- activate කිරීමට සූදානම් තත්ත්වය

උදාහරණ ප්‍රතිදානය:
```
✓ "Modern Agency" Theme සාර්ථකව scaffold කර ඇත
  ස්ථානය: /wp-content/themes/modern-agency/
  වර්ණ: ප්‍රාථමික #0066CC, ද්විතීයික #FFFFFF
  අකුරු වර්ග: Inter (sans-serif)
  තත්ත්වය: activate කිරීමට සූදානම්
```

## Theme Activate කිරීම

**activate-theme** හැකියාවෙන් သင့်ဆိုဒ်ကို အသစ်တည်ဆောက်ထားသော သို့မဟုတ် ရှိပြီးသား block theme တစ်ခုသို့ ပြောင်းလဲနိုင်ပါတယ်။

### ဘယ်လိုအသုံးပြုမလဲ (How to Invoke)

Theme တစ်ခုကို scaffold လုပ်ပြီးတဲ့အခါမှာ ချက်ချင်း activate လုပ်လို့ရပါတယ်-

```
"Modern Agency theme ကို Activate လုပ်ပါ"
```

ဒါမှမဟုတ် ရှိပြီးသား theme တစ်ခုကို activate လုပ်ချင်ရင်တော့:

```
"Twentytwentyfour theme သို့ ပြောင်းပါ"
```

### မျှော်လင့်ထားတဲ့ အကျိုးရလဒ် (Expected Output)

Activate လုပ်ရာမှာ အောင်မြင်တဲ့အခါ-

- လက်ရှိ active ဖြစ်နေတဲ့ theme ကို အတည်ပြုချက်ပေးပါမယ်။
- အရင်က သုံးခဲ့တဲ့ theme နာမည်ကို မှတ်တမ်းတင်ပေးပါမယ်။
- theme က ဘယ် URL မှာ live ရှိနေလဲဆိုတာ ပြသပါမယ်။
- theme နဲ့ ပတ်သက်ပြီး ထူးခြားတဲ့ စီစဉ်မှုတွေရှိရင် မှတ်ချက်ပေးပါမယ်။

ဥပမာ အကျိုးရလဒ်:
```
✓ Theme ကို အောင်မြင်စွာ activate လုပ်ပြီးပါပြီ
  Active theme: Modern Agency
  Previous theme: Twentytwentyfour
  Live at: https://yoursite.com
  Note: Layout ကို စစ်ဆေးဖို့ homepage ကို ကြည့်ပေးပါ
```

## လုပ်ငန်းစဉ် (Workflow): Scaffold လုပ်ပြီး Activate လုပ်ခြင်း

ပုံမှန်လုပ်ဆောင်ရတဲ့ အဆင့်တွေက ဒီနှစ်ခုကို ပေါင်းစပ်အသုံးပြုတာ ဖြစ်ပါတယ်-

၁။ **theme တစ်ခု တောင်းဆိုခြင်း**: "ကျွန်တော့်ရဲ့ SaaS landing page အတွက် block theme တစ်ခု ဖန်တီးပေးပါ"
၂။ **Agent က theme ကို scaffold လုပ်ပေးခြင်း**: file တွေနဲ့ design tokens တွေကို ထုတ်ပေးပါမယ်။
၃။ **ပြန်သုံးသပ်ပြီး ပြင်ဆင်ခြင်း**: လိုအပ်ရင် ဒီဇိုင်းပြောင်းလဲမှုတွေအကြောင်း ဆွေးနွေးနိုင်ပါတယ်။
၄။ **Activate လုပ်ခြင်း**: "theme ကို အခု activate လုပ်ပါ"
၅။ **စစ်ဆေးခြင်း**: homepage ကို သွားကြည့်ပြီး ဒီဇိုင်းအသစ် တည်ရှိနေပြီလား စစ်ဆေးပါ။

## Design Tokens နဲ့ Customization (ဒီဇိုင်းဆိုင်ရာ အစိတ်အပိုင်းတွေနဲ့ ပြုပြင်မှု)

Scaffold လုပ်ထားတဲ့ theme တွေက WordPress design tokens (`theme.json` ကနေတစ်ဆင့်) ကို အောက်ပါအချက်တွေအတွက် သုံးပါတယ်-

- **Colors**: Primary, secondary, accent, neutral palette
- **Typography**: Font families, sizes, weights, line heights
- **Spacing**: Padding, margin, gap scales
- **Borders**: Radius နဲ့ width tokens
- **Shadows**: Elevation levels

ဒီ tokens တွေဟာ `theme.json` ထဲမှာ စုစည်းထားတာမို့ file တစ်ခုတည်းကနေ သင့်ရဲ့ ဒီဇိုင်းစနစ်တစ်ခုလုံးကို လွယ်လွယ်ကူကူ ပြင်ဆင်နိုင်ပါတယ်။

## ကန့်သတ်ချက်များနှင့် မှတ်ချက်များ (Limitations and Notes)

- තේමා (Themes) `/wp-content/themes/` තුළ සැකසී තිබිය යුතු අතර, ඒවා WordPress නම් කිරීමේ සම්මතයන් අනුගමනය කළ යුතුය.
- සක්‍රීය කිරීමට ඔබේ WordPress වෙබ් අඩවියේ නිසි අවසරයන් අවශ්‍ය වේ.
- තේමා තුළ කස්ටම් PHP කේතය අවම වශයෙන් භාවිතා කරන්න; සංකීර්ණ ක්‍රියාකාරිත්වයන් සඳහා plugin (ප්ලග්ඉන්) භාවිතා කරන්න.
- Block themes හොඳින් වැඩ කරන්නේ WordPress 5.9 සහ ඉන් පසු අනුවාද සමඟයි.

## ගැටළු විසඳීම (Troubleshooting)

**සැකසීමෙන් පසු තේමාව පෙනෙන්නේ නැත**
- තේමාไดเรක්ටරි (directory) තිබේද සහ නිසි අවසරයන් තිබේදැයි පරීක්ෂා කරන්න.
- `theme.json` වල JSON නිවැරදිව තිබේදැයි බලන්න.
- තේමා නාමය දැනට පවතින තේමා සමඟ ගැටුමක් ඇති නොවන බව තහවුරු කර ගන්න.

**සක්‍රීය කිරීම අසාර්ථක වේ**
- ඔබට පරිපාලක (administrator) අවසරයන් තිබේදැයි තහවුරු කරන්න.
- WordPress විසින් තේමාไดเรක්ටරිය කියවිය හැකිදැයි පරීක්ෂා කරන්න.
- විස්තර සඳහා WordPress error logs සමාලෝචනය කරන්න.

**Design tokens යෙදුනේ නැත**
- `theme.json` වල වාක්‍ය ව්‍යුහය (syntax) නිවැරදි දැයි තහවුරු කරන්න.
- ඕනෑම caching plugin එකක් මකා දමන්න.
- ඔබ භාවිතා කරන tokens සඳහා ඔබේ WordPress අනුවාදය සහාය කරන බව පරීක්ෂා කරන්න.

## ඊළඟ පියවර (Next Steps)

ඔබේ තේමා සක්‍රීය කිරීමෙන් පසු, ඔබට කළ හැක්කේ:
- අකුරු සැකසුම් (typography), වර්ණ සහ අතරමැදි අවකාශයන් (spacing) නිවැරදි කිරීමට **Design System Aesthetics skill** එක භාවිතා කිරීම.
- WordPress block editor හරහා තනි block වල විලාසිතා (styles) වෙනස් කිරීම.
- තේමා `style.css` ගොනුවේ කස්ටම් CSS එකක් එක් කිරීම.
- නිශ්චිත පිටු වර්ග සඳහා කස්ටම් block templates නිර්මාණය කිරීම.
