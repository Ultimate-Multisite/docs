---
id: wu_make_primary_domain_redirect_url
title: စစ်ထုတ်ခြင်း - wu_make_primary_domain_redirect_url
sidebar_label: wu_make_primary_domain_redirect_url
_i18n_hash: bda96824db400b25e97802e5567df22d
---
# Filter: wu_make_primary_domain_redirect_url {#filter-wumakeprimarydomainredirecturl}

ဒိုမိန်းတစ်ခုကို အဓိက (primary) အဖြစ် သတ်မှတ်ပြီးနောက် ပြန်လည်ညွှန်းပေးမည့် URL ကို စစ်ထုတ်ပေးသည်။

Developer များအနေဖြင့် ဒိုမိန်းတစ်ခုကို အဓိကအဖြစ် အောင်မြင်စွာ သတ်မှတ်ပြီးနောက် အသုံးပြုသူများကို မည်သည့်နေရာသို့ ပြန်လည်ညွှန်းပေးရမည်ကို စိတ်ကြိုက်ပြင်ဆင်နိုင်စေသည်။ ပုံမှန်အားဖြင့်၊ ၎င်းသည် အဓိကဝက်ဘ်ဆိုက်၏ လက်ရှိ URL သို့၊ သို့မဟုတ် ပြုပြင်နေသည့် ဝက်ဘ်ဆိုက်၏ အုပ်ချုပ်သူ (admin) URL သို့ ပြန်လည်ညွှန်းပေးသည်။

## ပါရာမီတာများ (Parameters) {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $redirect_url | `string` | ပုံမှန် ပြန်လည်ညွှန်းပေးမည့် URL။ အဓိကဝက်ဘ်ဆိုက်ဖြစ်ပါက လက်ရှိ URL ကို၊ သို့မဟုတ် လက်ရှိဝက်ဘ်ဆိုက်၏ အုပ်ချုပ်သူ (admin) URL ကို ရွေးချယ်နိုင်သည်။ |
| $current_site | `int` | ဒိုမိန်းကို အဓိကအဖြစ် သတ်မှတ်နေသည့် ဝက်ဘ်ဆိုက်၏ ID။ |
| $domain | `\Domain` | အဓိကအဖြစ် သတ်မှတ်ခံရသည့် ဒိုမိန်း အရာဝတ္ထု (domain object)။ |
| $old_primary_domains | `array` | ယခင်က အဓိကဖြစ်ခဲ့သော ဒိုမိန်းများ၏ ID များပါ အကွက် (array)။ |

### စတင်အသုံးပြုနိုင်သည့် Version {#since}

- 2.0.0
### ရင်းမြစ် (Source) {#source}

[inc/ui/class-domain-mapping-element.php](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/ui/class-domain-mapping-element.php#L639) တွင် ၆၃၉ လိုင်း၌ သတ်မှတ်ထားသည်။

## ပြန်ပေးသည့်အရာ (Returns) {#returns}
စစ်ထုတ်ထားသော ပြန်လည်ညွှန်းပေးမည့် URL။
