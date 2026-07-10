---
title: အရောင်အသွေး ကွာခြားမှုကို စစ်ဆေးပါ
sidebar_position: 2
_i18n_hash: b1be22868f9257a232b89cc2a2c2768d
---
# အရောင်အစုံ ကွာခြားမှု စစ်ဆေးခြင်း {#validate-palette-contrast}

**Validate Palette Contrast** စွမ်းရည်သည် သင့်ဒီဇိုင်းအရောင်အစုံရှိ အရောင်အတွဲများကို သင့် theme ပေါ်တွင် အသုံးပြုမည့် အချိန်မတိုင်မီ WCAG (Web Content Accessibility Guidelines) စံနှုန်းများနှင့် ကိုက်ညီမှုရှိမရှိ စစ်ဆေးပေးပါသည်။

## အကျဉ်းချုပ် {#overview}

ဤစွမ်းရည်သည် စာသားနှင့် နောက်ခံအရောင်များကြား ကွာခြားမှု အချိုး (contrast ratios) များကို စစ်ဆေးခြင်းဖြင့် သင့်ဝဘ်ဆိုဒ်၏ အရောင်အသွေး စံနှုန်းများသည် အသုံးပြုရလွယ်ကူမှု စံနှုန်းများနှင့် ကိုက်ညီကြောင်း သေချာစေပါသည်။ အမြင်အာရုံ အားနည်းသူများအတွက် ဖတ်ရခက်ခဲစေနိုင်သည့် အရောင်ပေါင်းစပ်မှုများကို ကြိုတင်ကာကွယ်ပေးနိုင်ပါသည်။

## အချက်အလက် ပုံစံ (Input Format) {#input-format}

ဤစွမ်းရည်သည် အရောင်အစုံတစ်ခုကို အချက်အလက်အဖြစ် လက်ခံပါသည်။

```json
{
  "colors": [
    {
      "name": "primary",
      "hex": "#678233"
    },
    {
      "name": "text",
      "hex": "#ffffff"
    },
    {
      "name": "background",
      "hex": "#f5f5f5"
    }
  ],
  "wcag_level": "AA"
}
```

### Parameters (အချက်အလက်များ) {#parameters}

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `colors` | array | Yes | `name` နှင့် `hex` ဂုဏ်သတ္တိများပါရှိသော အရောင် object များ၏ array |
| `wcag_level` | string | No | WCAG ကိုက်ညီမှု အဆင့်: "A", "AA" (default) သို့မဟုတ် "AAA" |
| `pairs_to_check` | array | No | စစ်ဆေးလိုသည့် သီးသန့် အရောင်အတွဲများ (ဥပမာ- `["primary-text", "background-text"]`) |

## စစ်ဆေးသည့် WCAG အဆင့်များ {#wcag-levels-checked}

ဤစွမ်းရည်သည် WCAG စံနှုန်းများအရ ကွာခြားမှု အချိုးများကို စစ်ဆေးပေးသည်-

| Level | Normal Text | Large Text | Minimum Ratio |
|-------|-------------|------------|---------------|
| **A** | 3:1 | 3:1 | 3:1 |
| **AA** | 4.5:1 | 3:1 | 4.5:1 |
| **AAA** | 7:1 | 4.5:1 | 7:1 |

- **Normal Text** — ၁၈pt ထက် သေးငယ်သော စာသား (သို့မဟုတ် ၁၄pt bold)
- **Large Text** — ၁၈pt သို့မဟုတ် ထို့ထက်ကြီးသော စာသား (သို့မဟုတ် ၁၄pt bold သို့မဟုတ် ထို့ထက်ကြီးသော)

## Output Schema (ရလဒ် ပုံစံ) {#output-schema}

ဤစွမ်းရည်သည် အသေးစိတ် စစ်ဆေးမှု အစီရင်ခံစာကို ပြန်ပေးသည်-

```json
{
  "compliant": true,
  "wcag_level": "AA",
  "pairs": [
    {
      "pair": "primary-text",
      "color1": "#678233",
      "color2": "#ffffff",
      "contrast_ratio": 5.2,
      "wcag_a": true,
      "wcag_aa": true,
      "wcag_aaa": false,
      "status": "pass"
    },
    {
      "pair": "background-text",
      "color1": "#f5f5f5",
      "color2": "#333333",
      "contrast_ratio": 12.1,
      "wcag_a": true,
      "wcag_aa": true,
      "wcag_aaa": true,
      "status": "pass"
    }
  ],
  "summary": {
    "total_pairs": 2,
    "passing": 2,
    "failing": 0,
    "recommendations": []
  }
}
```

### Output Fields (ရလဒ် အကွက်များ) {#output-fields}

| Field | Type | Description |
|-------|------|-------------|
| `compliant` | boolean | အရောင်အစုံတစ်ခုလုံးသည် သတ်မှတ်ထားသော WCAG အဆင့်နှင့် ကိုက်ညီမှုရှိ၊ မရှိ |
| `wcag_level` | string | စစ်ဆေးခဲ့သည့် WCAG အဆင့် |
| `pairs` | array | အရောင်အတွဲတစ်ခုစီအတွက် အသေးစိတ် ရလဒ်များ |
| `contrast_ratio` | number | တွက်ချက်ထားသော ကွာခြားမှု အချိုး (1:1 မှ 21:1 အထိ) |
| `status` | string | အတွဲတစ်ခုစီအတွက် "pass" သို့မဟုတ် "fail" |
| `recommendations` | array | ကျရှုံးနေသည့် အတွဲများကို ပိုမိုကောင်းမွန်စေရန် အကြံပြုချက်များ |

## အသုံးပြုမှု နမူနာ (Usage Example) {#usage-example}

**Prompt:**
```
Check if my color palette meets WCAG AA standards. I have primary color #678233, text color #ffffff, and background #f5f5f5.
```

**Result:**
ဤစွမ်းရည်သည် အရောင်ပေါင်းစပ်မှုအားလုံးကို စစ်ဆေးပြီး အောက်ပါအတိုင်း ပြန်ပေးသည်-
- ✅ Primary + Text: 5.2:1 အချိုး (WCAG AA ကို ကျော်လွန်သည်)
- ✅ Background + Text: 12.1:1 အချိုး (WCAG AAA ကို ကျော်လွန်သည်)
- အလုံးစုံ: WCAG AA နှင့် ကိုက်ညီသည်

## Theme Builder နှင့် ပေါင်းစပ်အသုံးပြုခြင်း {#integration-with-theme-builder}

Theme Builder ၏ design-direction ရွေးချယ်မှုများကို အသုံးပြုသည့်အခါ၊ Validate Palette Contrast စွမ်းရည်သည်-

၁။ သင်ရွေးချယ်ထားသော အရောင်အစုံကို ခွဲခြမ်းစိတ်ဖြာသည်
၂။ စာသား-နောက်ခံ ပေါင်းစပ်မှုအားလုံးကို စစ်ဆေးသည်
၃။ သင်ရွေးချယ်ထားသော WCAG အဆင့်နှင့် ကိုက်ညီမှုရှိမရှိ စစ်ဆေးသည်
၄။ မကိုက်ညီသည့် အတွဲများအတွက် အကြံပြုချက်များ ပေးသည်
၅။ အသုံးပြုရခက်ခဲသည့် အရောင်အစုံများကို အသုံးပြုခြင်းမှ ကာကွယ်ပေးသည်

## အကောင်းဆုံး အလေ့အကျင့်များ (Best Practices) {#best-practices}

- **AA အဆင့်မှ စတင်ပါ** — WCAG AA သည် ဝဘ်ဆိုဒ်အများစုအတွက် စံနှုန်းဖြစ်သည်
- **အသုံးပြုမည့် အချိန်မတိုင်မီ စမ်းသပ်ပါ** — ဒီဇိုင်းတစ်ခုကို အတည်ပြုမပေးမီ သင့်အရောင်အစုံကို စစ်ဆေးပါ
- **ပေါင်းစပ်မှုအားလုံးကို စစ်ဆေးပါ** — စာသား၊ link များ၊ နှင့် UI အစိတ်အပိုင်းများအားလုံး စံနှုန်းများနှင့် ကိုက်ညီမှုရှိကြောင်း သေချာပါစေ
- **အသုံးပြုသူ နှစ်သက်မှုများကို ထည့်သွင်းစဉ်းစားပါ** — အချို့အသုံးပြုသူများတွင် အခြားအရောင် အာရုံခံစားမှုများ ရှိနိုင်သည်
- **Contrast checkers များကို အသုံးပြုပါ** — စစ်ဆေးမှုအတွက် ဤစွမ်းရည်ကို browser tools များနှင့် ပေါင်းစပ်အသုံးပြုပါ

## ကျရှုံးနေသည့် အတွဲများနှင့် အကြံပြုချက်များ {#failing-pairs-and-recommendations}

အရောင်အတွဲတစ်ခုသည် စစ်ဆေးမှုတွင် ကျရှုံးပါက၊ ဤစွမ်းရည်သည် အကြံပြုချက်များကို ပေးသည်-

```json
{
  "pair": "primary-text",
  "status": "fail",
  "contrast_ratio": 2.8,
  "wcag_aa": false,
  "recommendations": [
    "စာသားအရောင်ကို #ffffff အထိ ပိုမိုပေါ့စေရန် (အချိုးသည် 5.2:1 ဖြစ်မည်)",
    "နောက်ခံအရောင်ကို #556b2f အထိ ပိုမိုမှောင်စေရန် (အချိုးသည် 4.8:1 ဖြစ်မည်)",
    "အခြား primary အရောင်တစ်ခုဖြစ်သည့် #4a6b1f ကို အသုံးပြုရန် (အချိုးသည် 6.1:1 ဖြစ်မည်)"
  ]
}
```

## ဆက်စပ် စွမ်းရည်များ (Related Abilities) {#related-abilities}

- [Generate Logo SVG](./generate-logo-svg.md) — သင့်စစ်ဆေးထားသော အရောင်အစုံဖြင့် logo များ ဖန်တီးပါ
- [Create Menu](./create-menu.md) — အသုံးပြုရလွယ်ကူသော အရောင်များဖြင့် navigation တည်ဆောက်ပါ
