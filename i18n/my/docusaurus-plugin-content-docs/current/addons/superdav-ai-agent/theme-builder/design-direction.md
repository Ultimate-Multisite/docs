---
title: ဒီဇိုင်းလမ်းကြောင်း
sidebar_position: 2
_i18n_hash: 0a55afffd66ffad6930c7794d4074971
---
# ဒီဇိုင်းလမ်းကြောင်း (Design Direction) {#design-direction}

**Design Direction** အဆင့်မှာ Theme Builder က စုပေါင်း theme တစ်ခုလုံးကို ဖန်တီးပေးနိုင်ခင်မှာ သင့် theme ရဲ့ မြင်ရတဲ့ ဒီဇိုင်းကို ပြန်လည်စစ်ဆေးခြင်း၊ ပိုမိုကောင်းမွန်အောင် ပြင်ဆင်ခြင်းနဲ့ အပြီးသတ်တာတွေကို လုပ်ဆောင်နိုင်ပါတယ်။

## အကျဉ်းချုပ် (Overview) {#overview}

Discovery Interview ကို ပြီးမြောက်ပြီးတဲ့အခါ Theme Builder က **desktop နဲ့ mobile preview rendering** နဲ့ သင့်ရဲ့ ဒီဇိုင်းလမ်းကြောင်းကို ပြသပေးမှာ ဖြစ်ပါတယ်။ ဒါက theme ကို အတည်ပြုခါနီးမှာ သင့်ဒီဇိုင်းဟာ စက်ပစ္စည်း အမျိုးမျိုးမှာ ဘယ်လိုပုံစံမျိုးနဲ့ ပေါ်လာမလဲဆိုတာကို အတိအကျ မြင်တွေ့နိုင်စေမှာပါ။

## Design Direction အစိတ်အပိုင်းများ (Design Direction Components) {#design-direction-components}

### ၁။ အရောင်အစုံ (Color Palette) {#1-color-palette}

သင့် theme ရဲ့ အရောင်အစီအစဉ်မှာ အောက်ပါအရာများ ပါဝင်ပါတယ်-

- **Primary color** — ခလုတ်များ၊ link များနဲ့ အထူးအသားပေးရမယ့် နေရာတွေမှာ အဓိကအသုံးပြုတဲ့ brand အရောင်
- **Secondary color** — ကွဲပြားခြားနားမှုအတွက် တွဲဖက်အသုံးပြုနိုင်တဲ့ အရောင်
- **Accent color** — အရေးကြီးတဲ့ အစိတ်အပိုင်းတွေကို မီးမောင်းထိုးပြတဲ့ အရောင်
- **Neutral colors** — နောက်ခံနဲ့ စာသားတွေအတွက် အသုံးပြုတဲ့ မီးခိုးရောင်နဲ့ အဖြူရောင်များ
- **Text color** — ဖတ်ရလွယ်ကူစေဖို့ အဓိကစာသားအရောင်

### ၂။ စာလုံးပုံစံ (Typography) {#2-typography}

အောက်ပါအရာများအတွက် font ရွေးချယ်မှုများ-

- **Heading font** — စာမျက်နှာခေါင်းစဉ်တွေနဲ့ အပိုင်းခေါင်းစဉ်တွေမှာ အသုံးပြုသည်
- **Body font** — စာပိုဒ်စာသားနဲ့ အကြောင်းအရာတွေမှာ အသုံးပြုသည်
- **Font sizes** — စက်ပစ္စည်းအမျိုးမျိုးအတွက် အကြောင်းအရာအလိုက် ပြောင်းလဲနိုင်တဲ့ အရွယ်အစားများ
- **Line height** — ဖတ်ရလွယ်ကူစေဖို့ စာကြောင်းတွေကြား အကွာအဝေး
- **Font weights** — bold၊ regular နဲ့ light စတဲ့ အလေးချိန်ကွဲပြားမှုများ

### ၃။ ပုံစံချခြင်းနဲ့ အကွာအဝေး (Layout and Spacing) {#3-layout-and-spacing}

- **Container width** — အကြောင်းအရာရဲ့ အများဆုံးကျယ်နိုင်တဲ့ အကျယ်
- **Padding and margins** — အစိတ်အပိုင်းတွေပတ်လည်က အကွာအဝေး
- **Grid system** — Responsive ဒီဇိုင်းအတွက် ကော်လံပုံစံချခြင်း
- **Component spacing** — UI အစိတ်အပိုင်းတွေကြား အကွာအဝေး

### ၄။ မြင်ရတဲ့ အစိတ်အပိုင်းများ (Visual Elements) {#4-visual-elements}

- **Button styles** — primary၊ secondary နဲ့ tertiary ခလုတ်ဒီဇိုင်းများ
- **Card designs** — အကြောင်းအရာ block တွေအတွက် ပုံစံချခြင်း
- **Icons** — icon ပုံစံနဲ့ အရွယ်အစား
- **Borders and shadows** — သိမ်မွေ့တဲ့ မြင်ရတဲ့ အနက်အ Depth
- **Hover effects** — အပြန်အလှန်အကျိုးသက်ရောက်မှုရှိတဲ့ ပုံစံပြောင်းလဲမှုများ

## Preview Rendering (ကြိုတင်ကြည့်ရှုခြင်း) {#preview-rendering}

### Desktop Preview (ကွန်ပျူတာမြင်ကွင်း) {#desktop-preview}

Desktop preview က သင့်ဒီဇိုင်းကို အပြည့်အကျယ် အကျယ် (ပုံမှန်အားဖြင့် 1200px သို့မဟုတ် ပိုကျယ်သည်) မှာ ပြသပေးမှာပါ-

- အပြည့်အဝ navigation menu
- ကော်လံအားလုံးပါဝင်တဲ့ အပြည့်အဝ layout
- ကြီးမားတဲ့ typography နဲ့ spacing
- မြင်ရတဲ့ အစိတ်အပိုင်းအားလုံးကို အပြည့်အဝ အရွယ်အစားနဲ့

### Mobile Preview (မိုဘိုင်းမြင်ကွင်း) {#mobile-preview}

Mobile preview က သင့်ဒီဇိုင်းကို မိုဘိုင်းအကျယ် (ပုံမှန်အားဖြင့် 375px) မှာ ပြသပေးမှာပါ-

- Responsive navigation (hamburger menu)
- Single-column layout
- ချိန်ညှိထားတဲ့ typography နဲ့ spacing
- ထိတွေ့ရလွယ်ကူတဲ့ ခလုတ်အရွယ်အစားများ

### Responsive Breakpoints (အကန့်အသတ်အမှတ်များ) {#responsive-breakpoints}

Theme Builder က ဒီ breakpoints တွေမှာ preview တွေကို ပြသပေးပါတယ်-

| Device | Width | Preview |
|--------|-------|---------|
| **Mobile** | 375px | Portrait phone |
| **Tablet** | 768px | Landscape tablet |
| **Desktop** | 1200px | Full-width desktop |
| **Large Desktop** | 1920px | Ultra-wide display |

## ဒီဇိုင်းကို ပိုမိုကောင်းမွန်အောင် ပြင်ဆင်ခြင်း (Refining Your Design) {#refining-your-design}

### ချိန်ညှိမှုများ ပြုလုပ်ခြင်း (Making Adjustments) {#making-adjustments}

အောက်ပါနည်းလမ်းများဖြင့် သင့်ဒီဇိုင်းလမ်းကြောင်းကို ပိုမိုကောင်းမွန်အောင် ပြင်ဆင်နိုင်ပါတယ်-

1. **အရောင်များ ချိန်ညှိခြင်း** — palette ထဲက အရောင်တစ်ခုခုကို ပြောင်းလဲနိုင်ပါတယ်
2. **Font များ ပြောင်းလဲခြင်း** — မတူညီတဲ့ typefaces တွေကို ရွေးချယ်နိုင်ပါတယ်
3. **အကွာအဝေး ပြင်ဆင်ခြင်း** — padding နဲ့ margins တွေကို ချိန်ညှိနိုင်ပါတယ်
4. **Layout အဆင့်မြှင့်တင်ခြင်း** — container အကျယ်အဝန်းတွေနဲ့ grid ကော်လံတွေကို ပြောင်းလဲနိုင်ပါတယ်
5. **အစိတ်အပိုင်းများ စိတ်ကြိုက်ပြင်ဆင်ခြင်း** — button styles, card designs စသည်တို့ကို ပြင်ဆင်နိုင်ပါတယ်

### Preview အပ်ဒိတ်များ (Preview Updates) {#preview-updates}

ပြောင်းလဲမှုတွေဟာ အချိန်နဲ့တပြေးညီ ပြသပေးမှာပါ-

- Desktop preview က ချက်ချင်း update လုပ်ပေးပါတယ်
- Mobile preview က ချက်ချင်း update လုပ်ပေးပါတယ်
- Responsive breakpoints အားလုံး update လုပ်ပေးပါတယ်
- ပြောင်းလဲမှုတွေကို စစ်ဆေးဖို့ preview တွေကြား ပြောင်းကြည့်နိုင်ပါတယ်

### နှိုင်းယှဉ်ကြည့်ရှုခြင်း (Comparison View) {#comparison-view}

သင့်ဒီဇိုင်းလမ်းကြောင်းကို အောက်ပါအရာတွေနဲ့ နှိုင်းယှဉ်ကြည့်နိုင်ပါတယ်-

- **Original design** — ဘာတွေပြောင်းလဲသွားလဲဆိုတာ ကြည့်နိုင်ပါတယ်
- **Competitor designs** — စိတ်ကူးရတဲ့ website တွေနဲ့ နှိုင်းယှဉ်ကြည့်နိုင်ပါတယ်
- **Previous versions** — အရင်က ဒီဇိုင်းလမ်းကြောင်းတွေဆီ ပြန်သွားနိုင်ပါတယ်

## Design Direction အတည်ပြုခြင်း (Design Direction Approval) {#design-direction-approval}

သင့်ဒီဇိုင်းနဲ့ ကျေနပ်ပြီဆိုရင်-

1. **Preview နှစ်ခုလုံးကို စစ်ဆေးပါ** — desktop နဲ့ mobile နှစ်ခုလုံး ကောင်းမကောင်း စစ်ဆေးပါ
2. **အရောင်အားလုံးကို စစ်ဆေးပါ** — contrast နဲ့ accessibility ကို သေချာစေပါ
3. **Typography ကို စမ်းသပ်ပါ** — အရွယ်အစားအားလုံးမှာ ဖတ်ရလွယ်ကူမှု ရှိမရှိ စစ်ဆေးပါ
4. **Layout ကို အတည်ပြုပါ** — spacing နဲ့ alignment ကို စစ်ဆေးပါ
5. **ဒီဇိုင်းကို အတည်ပြုပါ** — theme generate လုပ်ဖို့ ဆက်လုပ်ပါ

## နောက်အဆင့်များ (Next Steps) {#next-steps}

သင့်ဒီဇိုင်းလမ်းကြောင်းကို အတည်ပြုပြီးတဲ့အခါ-

1. Theme Builder က သင့်ရဲ့ complete theme ကို generate လုပ်ပေးပါလိမ့်မယ်
2. theme ကို သင့် WordPress site ပေါ်မှာ install လုပ်ပေးပါလိမ့်မယ်
3. WordPress customizer ကို အသုံးပြုပြီး ပိုမိုစိတ်ကြိုက်ပြင်ဆင်နိုင်ပါတယ်
4. [Hospitality Menus](./hospitality-menus.md) ဒါမှမဟုတ် တခြား features တွေဆီ ဆက်သွားနိုင်ပါတယ်

## အကောင်းဆုံး လုပ်ဆောင်မှုများ (Best Practices) {#best-practices}

- **အစစ်အမှန် စက်ပစ္စည်းများတွင် စမ်းသပ်ပါ** — ဖြစ်နိုင်ရင် အမှန်တကယ် ဖုန်းနဲ့ tablet တွေကို အသုံးပြုပါ
- **ဖတ်ရလွယ်ကူမှုကို စစ်ဆေးပါ** — စာသားတွေဟာ အရွယ်အစားအားလုံးမှာ ဖတ်ရလွယ်ကူမှု ရှိစေဖို့ သေချာပါစေ
- **Contrast ကို စစ်ဆေးပါ** — accessibility အတွက် [Validate Palette Contrast](../abilities/validate-palette-contrast.md) ကို အသုံးပြုပါ
- **စွမ်းဆောင်ရည်ကို စဉ်းစားပါ** — မြန်ဆန်မှုအတွက် image တွေနဲ့ font တွေကို optimize လုပ်ပါ
- **အကြောင်းအရာအတွက် စီစဉ်ပါ** — layout ဟာ သင့်ရဲ့ အမှန်တကယ် အကြောင်းအရာတွေနဲ့ အဆင်ပြေစေဖို့ သေချာပါစေ

## ပြဿနာဖြေရှင်းခြင်း (Troubleshooting) {#troubleshooting}

### Preview မအပ်ဒိတ်ဖြစ်ခြင်း (Preview Not Updating) {#preview-not-updating}

- စာမျက်နှာကို Refresh လုပ်ပါ
- Browser cache ကို ရှင်းလင်းပါ
- မတူညီတဲ့ browser တစ်ခုကို စမ်းကြည့်ပါ
- အင်တာနက် connection ကို စစ်ဆေးပါ

### အရောင်တွေ မတူဘဲ ပေါ်ခြင်း (Colors Look Different) {#colors-look-different}

- Monitor ရဲ့ အရောင်ဆက်တင်တွေကို စစ်ဆေးပါ
- မတူညီတဲ့ စက်ပစ္စည်းတွေမှာ စမ်းကြည့်ပါ
- accessibility tools တွေနဲ့ color contrast ကို စစ်ဆေးပါ
- color blindness simulators တွေကို စဉ်းစားပါ

### Typography ပြဿနာများ (Typography Issues) {#typography-issues}

- font files တွေ load ဖြစ်နေသလား စစ်ဆေးပါ
- မတူညီတဲ့ breakpoints တွေမှာ font size ကို စစ်ဆေးပါ
- အမှန်တကယ် အကြောင်းအရာတွေနဲ့ စမ်းသပ်ပါ
- ဖတ်ရလွယ်ကူမှုအတွက် စာကြောင်းအရှည်ကို စဉ်းစားပါ

## ဆက်စပ် Documentation များ (Related Documentation) {#related-documentation}

- [Discovery Interview](./discovery-interview.md) — ဒီဇိုင်းအချက်အလက်များ စုဆောင်းခြင်း
- [Hospitality Menus](./hospitality-menus.md) — စနစ်တကျ menu စာမျက်နှာများ ဖန်တီးခြင်း
- [Validate Palette Contrast](../abilities/validate-palette-contrast.md) — အရောင် accessibility ကို စစ်ဆေးခြင်း
- [Generate Logo SVG](../abilities/generate-logo-svg.md) — custom logo များ ဖန်တီးခြင်း
