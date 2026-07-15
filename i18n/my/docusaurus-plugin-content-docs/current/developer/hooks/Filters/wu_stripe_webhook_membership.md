---
id: wu_stripe_webhook_membership
title: Filter - wu_stripe_webhook_membership
sidebar_label: wu_stripe_webhook_membership
_i18n_hash: b39da1f6b46f6ac7af6a5674c8b5d261
---
# Filter: wu_stripe_webhook_membership

ဤ webhook နှင့် ဆက်စပ်နေသော အဖွဲ့ဝင် မှတ်တမ်းကို စစ်ထုတ်ပေးသည်။

ဤ filter ကို တူညီသော Stripe customer တစ်ဦးကို မတူညီသော ဝက်ဘ်ဆိုက်များတွင် အသုံးပြုသည့်အခါ ပဋိပက္ခများ ဖြစ်ပေါ်နိုင်သောကြောင့် ထည့်သွင်းခဲ့ခြင်း ဖြစ်ပါသည်။

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $membership | `\WP_Ultimo\Models\Membership\|false` | အဖွဲ့ဝင် အရာဝတ္ထု (The membership object)။ |
| $event | `\Stripe\Event` | လက်ခံရရှိသော အဖြစ်အပျက် (The event received)။ |

### Source {#source}

line 2035 တွင် [`inc/gateways/class-base-stripe-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/gateways/class-base-stripe-gateway.php#L2035) ၌ သတ်မှတ်ထားသည်။
