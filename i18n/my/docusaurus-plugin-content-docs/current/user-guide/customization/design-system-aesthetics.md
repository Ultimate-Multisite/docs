---
title: ဒီဇိုင်းစနစ်၏ အလှအပဆိုင်ရာ ကျွမ်းကျင်မှု
sidebar_position: 21
_i18n_hash: 3fef8415909ed14038f38e9eda3a4545
---
# Design System Aesthetics Skill

**Design System Aesthetics skill** ဆိုတာကတော့ သင့်ရဲ့ website ရုပ်ရည်အသွင်ကို ပိုမိုကောင်းမွန်အောင် ပြုပြင်ပေးနိုင်တဲ့ လမ်းညွှန်မှုတစ်ခုပါ။ ဒီစနစ်က သင့်ရဲ့ ဒီဇိုင်းစနစ်ကို ပုံဖော်ပေးတဲ့ စာလုံးပုံစံ (typography)၊ အရောင် (color)၊ နေရာခြားမှု (spacing) နဲ့ လှုပ်ရှားမှု (motion) tokens တွေနဲ့ ပတ်သက်ပြီး တသမတ်ကျတဲ့ ဆုံးဖြတ်ချက်တွေ ချမှတ်နိုင်အောင် ကူညီပေးပါတယ်။

## Design System Aesthetics ဆိုတာ ဘာလဲ။

Design System Aesthetics ဆိုတာက အောက်ပါအချက်တွေကို အကျုံးဝင်တဲ့ စနစ်တကျ လေ့လာမှုတစ်ခု ဖြစ်ပါတယ်။

- **Typography**: Font အမျိုးအစားများ၊ အရွယ်အစားများ၊ အလေးချိန်များ (weights) နဲ့ စာကြောင်းအကွာအဝေးများ (line heights)
- **Color**: အဓိက၊ ဒုတိယ၊ အသားပေးနဲ့ အနားခံ အရောင်အစုံများ (palettes)
- **Spacing**: Padding၊ Margin နဲ့ Gap အတိုင်းအတာများ
- **Borders**: Radius နဲ့ အနံ (width) tokens များ
- **Shadows**: အမြင့် (elevation) နဲ့ အနက် (depth) tokens များ
- **Motion**: Animation တွေနဲ့ Transition တွေ

ဒီဆုံးဖြတ်ချက်အားလုံးကို သင့်ရဲ့ theme ရဲ့ `theme.json` file ထဲမှာ သိမ်းဆည်းထားခြင်းအားဖြင့် စုစည်းညီညွတ်တဲ့ ရုပ်ရည်စနစ်တစ်ခုကို ဖန်တီးပေးနိုင်ပါတယ်။

## Design System Aesthetics ကို ဘာကြောင့် သုံးသင့်သလဲ။

### တသမတ်ကျမှု (Consistency)

ဒီဇိုင်းစနစ်တစ်ခုက အောက်ပါအချက်တွေကို အာမခံပေးပါတယ်-

- စာသားအားလုံးက တူညီတဲ့ typography scale ကို အသုံးပြုခြင်း
- အရောင်တွေကို သင့် website တစ်ခုလုံးမှာ တသမတ်ကျစွာ အသုံးပြုခြင်း
- နေရာခြားမှုတွေက ခန့်မှန်းနိုင်တဲ့ ပုံစံအတိုင်း လိုက်နာခြင်း
- Animation တွေက တစ်ခုတည်းလို ခံစားရခြင်း

### စွမ်းဆောင်ရည် (Efficiency)

စာမျက်နှာတစ်ခုချင်းစီမှာ ဒီဇိုင်းဆုံးဖြတ်ချက်တွေ ချမှတ်နေမယ့်အစား၊ သင်က-

- tokens တွေကို တစ်နေရာတည်းမှာ သတ်မှတ်လိုက်ရုံနဲ့
- နေရာတိုင်းမှာ အသုံးပြုနိုင်ပြီး
- တန်ဖိုးတစ်ခုကို ပြောင်းရုံနဲ့ တစ်နေရာလုံးကို အဆင့်မြှင့်နိုင်ပါတယ်။

### ပြောင်းလွယ်ပြင်လွယ်ရှိမှု (Flexibility)

သင်က-

- သင့်ရဲ့ ဒီဇိုင်းစနစ်တစ်ခုလုံးကို လျင်မြန်စွာ ချိန်ညှိနိုင်တယ်၊
- အလှအပအမျိုးမျိုးနဲ့ စမ်းသပ်နိုင်တယ်၊
- အဆင့်မြှင့်နေချိန်မှာလည်း brand ရဲ့ တသမတ်ကျမှုကို ထိန်းသိမ်းထားနိုင်ပါတယ်။

## Design System Aesthetics Skill ကို စတင်အသုံးပြုခြင်း

### ကိုယ်တိုင်စတင်ခြင်း (Manual Activation)

ဘယ်အချိန်မဆို ဒီ skill ကို စတင်နိုင်ပါတယ်-

```
"Help me refine my design system"
```

ဒါမှမဟုတ်

```
"Let's improve my site's aesthetics"
```

ဒါမှမဟုတ်

```
"Guide me through design system decisions"
```

### အလိုအလျောက် အကြံပြုချက်များ (Automatic Suggestions)

အောက်ပါအခြေအနေတွေမှာ Agents တွေက ဒီ skill ကို အသုံးပြုဖို့ အကြံပြုနိုင်ပါတယ်-

- ဒီဇိုင်းပြောင်းလဲမှုတွေ တောင်းဆိုတဲ့အခါ
- "ခေတ်မီတဲ့" ဒါမှမဟုတ် "ကျွမ်းကျင်တဲ့" ပြန်လည်ဒီဇိုင်းကို တောင်းဆိုတဲ့အခါ
- ရုပ်ရည်အသွင် တသမတ်ကျမှု ပိုကောင်းစေချင်တဲ့အခါ
- သင့် website ကို စတင်မိတ်ဆက်တော့မယ့် အချိန်မှာ

## The Design System Aesthetics လုပ်ငန်းစဉ်

### အဆင့် ၁: Typography

Agent က သင့်ရဲ့ font ရွေးချယ်မှုတွေအကြောင်း မေးမြန်းပါလိမ့်မယ်-

```
What's your preferred typography style?
- Serif (traditional, elegant)
- Sans-serif (modern, clean)
- Monospace (technical, code-focused)

For your heading font:
- Do you want a distinct heading font, or use the same as body text?
- Preference: bold, elegant, playful, minimal?

For your body font:
- Readability is key. Do you prefer:
  - Larger, more spacious text
  - Compact, efficient text
  - Standard sizing
```

ပြီးရင် Agent က အောက်ပါအရာတွေကို သတ်မှတ်ပေးပါလိမ့်မယ်-

- **Heading font**: ခေါင်းစဉ်တွေနဲ့ အဓိကခေါင်းစဉ်တွေအတွက် အဓိက font
- **Body font**: စာပိုဒ်တွေနဲ့ အဓိကစာသားတွေအတွက် font
- **Monospace font**: code နဲ့ နည်းပညာဆိုင်ရာ အကြောင်းအရာတွေအတွက် font
- **Size scale**: ကြိုသတ်မှတ်ထားတဲ့ အရွယ်အစားများ (small, base, large, XL စသည်)
- **Weight scale**: Font အလေးချိန်များ (regular, medium, bold စသည်)
- **Line height**: စာကြောင်းတွေကြား အကွာအဝေး (စာဖတ်ရလွယ်ကူစေရန်)

### အဆင့် ၂: Color Palette

```
Let's define your color palette.

Primary color (your brand color):
- Current: [shows existing color]
- Change to: [color picker or hex code]

Secondary color (supporting color):
- Current: [shows existing color]
- Change to: [color picker or hex code]

Accent color (highlights and CTAs):
- Current: [shows existing color]
- Change to: [color picker or hex code]

Neutral palette (grays for text, borders, backgrounds):
- Light: [color]
- Medium: [color]
- Dark: [color]
```

Agent က အောက်ပါအရာတွေ အပါအဝင် အပြည့်အစုံ palette တစ်ခုကို ဖန်တီးပေးပါလိမ့်မယ်-

- Primary, secondary, နဲ့ accent အရောင်များ
- Neutral gray အရောင်များ (light, medium, dark)
- Semantic အရောင်များ (success, warning, error)
- Hover နဲ့ active အခြေအနေများ

### အဆင့် ၃: Spacing

```
How much breathing room do you want?

Spacing scale preference:
- Compact (tight, efficient layouts)
- Normal (balanced spacing)
- Spacious (generous whitespace)

This affects:
- Padding inside buttons and cards
- Margins between sections
- Gap between grid items
```

Agent က spacing tokens တွေကို သတ်မှတ်ပေးပါလိမ့်မယ်-

- Base unit (ပုံမှန်အားဖြင့် 4px သို့မဟုတ် 8px)
- Scale: xs, sm, md, lg, xl, 2xl
- Padding, margin, gap အတွက် သီးသန့်တန်ဖိုးများ

### အဆင့် ၄: Borders and Shadows

```
Visual depth and definition:

Border radius preference:
- Sharp (no rounding)
- Subtle (small radius)
- Rounded (medium radius)
- Very rounded (large radius)

Shadow depth:
- Flat (no shadows)
- Subtle (light shadows)
- Pronounced (strong shadows)
```

Agent က အောက်ပါအရာတွေကို ဖန်တီးပေးပါလိမ့်မယ်-

- Border radius tokens များ (ခလုတ်များ၊ ကတ်များ၊ input များအတွက်)
- အမြင့်အဆင့်များအတွက် Shadow tokens များ
- Border width tokens များ

### အဆင့် ၅: Motion and Animation

```
How should your site feel when interactive?

Animation preference:
- Minimal (no animations)
- Subtle (gentle transitions)
- Playful (noticeable animations)

Specific animations:
- Page transitions: fade, slide, or none?
- Button hover: scale, color change, or both?
- Loading states: spinner, skeleton, or progress bar?
```

Agent က အောက်ပါအရာတွေကို သတ်မှတ်ပေးပါလိမ့်မယ်-

- Transition duration များ (fast, normal, slow)
- Easing functions များ (ease-in, ease-out, ease-in-out)
- အဖြစ်များတဲ့ interaction တွေအတွက် Animation keyframes များ

## Design System Aesthetics ကို အသုံးပြုခြင်း

### အလိုအလျောက် အသုံးပြုခြင်း (Automatic Application)

သင် skill ကို ပြီးမြောက်သွားတဲ့အခါ Agent က-

1. သင့်ရဲ့ theme ရဲ့ `theme.json` ထဲမှာ tokens အားလုံးကို update လုပ်ပေးပါလိမ့်မယ်
2. ဒီဇိုင်းစနစ်ကို သင့်ရဲ့ active theme ပေါ်မှာ အသုံးပြုပေးပါလိမ့်မယ်
3. block style တွေကို ဒီစနစ်အသစ်နဲ့ ကိုက်ညီအောင် ပြန်လည်ထုတ်ပေးပါလိမ့်မယ်
4. update လုပ်ထားတဲ့ theme ကို အသက်သွင်းပေးပါလိမ့်မယ်

### ကိုယ်တိုင်အသုံးပြုခြင်း (Manual Application)

သင်က `theme.json` ကို တိုက်ရိုက်လည်း တည်းဖြတ်နိုင်ပါတယ်-

```json
{
  "version": 3,
  "settings": {
    "color": {
      "palette": [
        {
          "color": "#0066CC",
          "name": "Primary",
          "slug": "primary"
        }
      ]
    },
    "typography": {
      "fontFamilies": [
        {
          "fontFamily": "Inter, sans-serif",
          "name": "Body",
          "slug": "body"
        }
      ]
    },
    "spacing": {
      "spacingSizes": [
        {
          "size": "0.5rem",
          "name": "Small",
          "slug": "sm"
        }
      ]
    }
  }
}
```

## သင့်ရဲ့ Design System ကို ကြည့်ရှုခြင်း

### Agent ကို မေးမြန်းခြင်း

```
"Show me my design system"
```

ဒါမှမဟုတ်

```
"What are my current design tokens?"
```

Agent က သင့်ရဲ့ typography၊ အရောင်များ၊ spacing နဲ့ တခြား tokens တွေကို ပြသပေးပါလိမ့်မယ်။

### theme.json ကို ကြည့်ရှုခြင်း

raw token အဓိပ္ပာယ်ဖွင့်ဆိုချက်တွေကို မြင်ရဖို့ `/wp-content/themes/[theme-name]/theme.json` ကို text editor တစ်ခုမှာ ဖွင့်ကြည့်နိုင်ပါတယ်။

## သင့်ရဲ့ Design System ကို Update လုပ်ခြင်း

### လျင်မြန်စွာ Update လုပ်ခြင်း (Quick Updates)

Agent ကို သီးသန့်ပြောင်းလဲမှုတွေအတွက် မေးမြန်းပါ-

```
"Make the primary color darker"
```

ဒါမှမဟုတ်

```
"Increase the spacing scale by 20%"
```

ဒါမှမဟုတ်

```
"Change the heading font to a serif"
```

### အပြည့်အဝ ပြန်လည်ဒီဇိုင်းဆွဲခြင်း (Full Redesign)

Design System Aesthetics skill ကို ပြန်လည် run ပါ-

```
"Let's redesign my entire design system"
```

ဒါက သင့်ရဲ့ လက်ရှိတန်ဖိုးတွေကနေ စပြီး ဆုံးဖြတ်ချက်အားလုံးကို ပြန်လည်လမ်းညွှန်ပေးပါလိမ့်မယ်။

### တစ်စိတ်တစ်ပိုင်း Update လုပ်ခြင်း (Partial Updates)

သီးသန့်အပိုင်းတွေကို update လုပ်နိုင်ပါတယ်-

```
"Just update the color palette, keep everything else"
```

## Design System အကောင်းဆုံး အလေ့အကျင့်များ (Best Practices)

### တသမတ်ကျမှု (Consistency)

- tokens တွေကို နေရာတိုင်းမှာ အသုံးပြုပါ
- တစ်ခါသုံး အရောင်တွေ ဒါမှမဟုတ် အရွယ်အစားတွေ မဖန်တီးပါနဲ့
- တန်ဖိုးတွေကို hardcoding လုပ်မယ့်အစား tokens တွေကို ကိုးကားအသုံးပြုပါ

### နာမည်ပေးခြင်း (Naming)

ရှင်းလင်းပြီး အဓိပ္ပာယ်ရှိတဲ့ နာမည်တွေကို အသုံးပြုပါ-

- ✓ `primary`, `secondary`, `accent`
- ✗ `blue`, `color-1`, `main`

- ✓ `heading-lg`, `body-sm`
- ✗ `font-size-24`, `text-large`

### ချဲ့ထွင်နိုင်မှု (Scalability)

သင့်စနစ်ကို ချဲ့ထွင်နိုင်ဖို့ ဒီဇိုင်းဆွဲပါ-

- pixels တွေအစား relative units (rem, em) တွေကို အသုံးပြုပါ
- စိတ်ကြိုက်တန်ဖိုးတွေအစား scales (xs, sm, md, lg, xl) တွေကို ဖန်တီးပါ
- အနာဂတ်မှာ ထပ်ပေါင်းထည့်မယ့် အရာတွေကို စီစဉ်ထားပါ

### စာရွက်စာတမ်းပြုစုခြင်း (Documentation)

သင့်ရဲ့ design system ကို စာရွက်စာတမ်းပြုစုပါ-

- ဘာကြောင့် ဒီအရောင်တွေကို ရွေးချယ်ခဲ့သလဲ
- ဘယ် token ကို ဘယ်အချိန်မှာ သုံးရမလဲ
- ချွင်းချက်တွေနဲ့ အခြေအနေအထူးတွေကို မှတ်တမ်းတင်ပါ

## အဖြစ်များတဲ့ Design System ပုံစံများ (Common Design System Patterns)

### ခေတ်မီ ရိုးရှင်းမှု (Modern Minimalist)

- Sans-serif typography (Inter, Helvetica)
- အရောင်အစုံ အကန့်အသတ်ရှိခြင်း (၂-၃ အရောင်)
- နေရာခြားမှု များပြားခြင်း
- အလင်းရောင် (subtle) အရိပ်များ
- ချောမွေ့ပြီး မြန်ဆန်တဲ့ animation များ

### နွေးထွေးပြီး ရင်းနှီးမှုရှိခြင်း (Warm and Friendly)

- Serif နဲ့ Sans-serif ရောနှောအသုံးပြုခြင်း
- နွေးထွေးတဲ့ အရောင်အစုံ (လိမ္မော်ရောင်၊ နွေးတဲ့ မီးခိုးရောင်)
- စкругထားတဲ့ ထောင့်များ (Rounded corners)
- ပျော့ပျောင်းတဲ့ အရိပ်များ
- ပျော်ရွှင်စရာ animation များ

### ကျွမ်းကျင်တဲ့ Corporate ပုံစံ (Professional Corporate)

- Clean sans-serif (Roboto, Open Sans)
- အသားပေးအရောင်ပါတဲ့ neutral palette
- စနစ်ကျတဲ့ spacing
- အနည်းဆုံး အရိပ်များ
- ပျော့ပျောင်းတဲ့ transitions များ

### တီထွင်ဖန်တီးမှုနဲ့ ရဲရင့်ခြင်း (Creative and Bold)

- ထူးခြားတဲ့ typography
- ရဲရင့်တဲ့ အရောင်အစုံ
- ကွဲပြားတဲ့ spacing
- ခိုင်မာတဲ့ အရိပ်များ
- သိသာထင်ရှားတဲ့ animation များ

## ပြဿနာဖြေရှင်းခြင်း (Troubleshooting)

**ကျွန်တော့်ရဲ့ design system ပြောင်းလဲမှုတွေ မပေါ်ဘူး**
- browser cache ကို ရှင်းလင်းပါ
- static generator သုံးနေရင် site ကို ပြန်လည်တည်ဆောက်ပါ (Rebuild)
- theme.json က valid JSON ဟုတ်မဟုတ် စစ်ဆေးပါ
- theme က active ဖြစ်နေကြောင်း အတည်ပြုပါ

**အရောင်တွေက စာမျက်နှာအလိုက် မတူညီဘူး**
- plugin တွေမှာ ပဋိပက္ခဖြစ်စေတဲ့ CSS တွေ ရှိမရှိ စစ်ဆေးပါ
- စာမျက်နှာအားလုံးက တူညီတဲ့ theme ကို သုံးထားကြောင်း အတည်ပြုပါ
- caching plugin တွေကို ရှင်းလင်းပေးပါ

**အရင်က design system ကို ပြန်လိုချင်တယ်**
- Agent ကို မေးပါ- "Show me my design system history"
- theme.json ကို ကိုယ်တိုင်တည်းဖြတ်ပြီး ယခင်တန်ဖိုးတွေ ပြန်ထည့်ပါ
- မတူညီတဲ့ ရွေးချယ်မှုတွေနဲ့ skill ကို ပြန် run ပါ

## နောက်အဆင့်များ (Next Steps)

သင့်ရဲ့ design system ကို သတ်မှတ်ပြီးတဲ့အခါ-

1. **သင့်ရဲ့ site ကို ပြန်စစ်ပါ**: ဒီဇိုင်းအသစ်ကို မြင်ရဖို့ သင့်ရဲ့ site ကို ဝင်ကြည့်ပါ
2. **ပိုမိုကောင်းမွန်အောင် ပြုပြင်ပါ**: skill ကို အသုံးပြုပြီး ပြန်လည်ချိန်ညှိပါ
3. **template များ ဖန်တီးပါ**: သင့်ရဲ့ design tokens တွေကို အသုံးပြုပြီး custom block template တွေ တည်ဆောက်ပါ
4. **စာရွက်စာတမ်းပြုစုပါ**: သင့်ရဲ့ design system ကို အဖွဲ့သားတွေနဲ့ မျှဝေပါ
