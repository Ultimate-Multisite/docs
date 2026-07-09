---
title: အငှားသုံးစွဲသူများစွာ ပေါင်းစည်းမှု
sidebar_position: 6
_i18n_hash: 3cf63ea3f0dba9dcf2a8fc74478aedbb
---
# Multi-Tenancy ပေါင်းစည်းမှု {#multi-tenancy-integration}

Ultimate Multisite: Multi-Tenancy 1.2.0 သည် ကိုယ်ပိုင်အုပ်ချုပ် tenant များ၊ migration အတည်ပြုစစ်ဆေးမှု၊ နှင့် tenant သက်တမ်းစက်ဝန်း အလိုအလျောက်လုပ်ဆောင်မှုများအတွက် ပေါင်းစည်းမှု touchpoint အချို့ကို ပြောင်းလဲထားသည်။

## Tenant စတင်တည်ဆောက်မှု စီးဆင်းပုံ {#tenant-bootstrap-flow}

tenant များကို ဖန်တီးခြင်း သို့မဟုတ် ပြင်ဆင်ခြင်းလုပ်သည့် ပေါင်းစည်းမှုများသည် ဤအစီအစဉ်အတိုင်း လိုက်နာသင့်သည်-

1. tenant registry record နှင့် isolation model ကို ရှာဖွေသတ်မှတ်ပါ။
2. tenant database writer ကို ဖန်တီးပါ သို့မဟုတ် အတည်ပြုပါ။
3. tenant schema ကို စတင်တည်ဆောက်ပါ။
4. tenant အသုံးပြုသူများကို ပြင်ဆင်ထည့်သွင်းပါ။
5. tenant routing နှင့် filesystem path များကို မှတ်ပုံတင်ပါ။
6. tenant ကို ထုတ်ဖော်အသုံးပြုခွင့်မပြုမီ migration အတည်ပြုစစ်ဆေးမှုကို လုပ်ဆောင်ပါ။

ကိုယ်ပိုင်အုပ်ချုပ် tenant တစ်ခုသည် network database connection ကို ပြန်လည်အသုံးပြုနိုင်မည်ဟု မယူဆပါနှင့်။ addon က ပေးထားသော tenant registry နှင့် writer abstraction များကို အသုံးပြုပါ။

## SSO နှင့် REST hook များ {#sso-and-rest-hooks}

State မထားသော tenant autologin သည် purpose claim၊ JTI replay ကာကွယ်မှု၊ expiry cap နှင့် origin pinning ပါသော သက်တမ်းတို token များကို အသုံးပြုသည်။ login ခလုတ်များ သို့မဟုတ် remote management link များ ထည့်သွင်းသော ပေါင်းစည်းမှုများသည် tenant login URL များကို တိုက်ရိုက်တည်ဆောက်မည့်အစား ထောက်ပံ့ထားသော SSO flow မှတစ်ဆင့် tenant visit များကို ဖန်တီးသင့်သည်။

Network-side API audit event များနှင့် နေ့စဉ် summary များကို ကိုယ်ပိုင်အုပ်ချုပ် tenant gateway များအတွက် ရနိုင်သည်။ tenant lifecycle endpoint များကို ခေါ်သော ပြင်ပ system များကို debug လုပ်သည့်အခါ ထို log များကို အသုံးပြုပါ။

## ကိုယ်ပိုင်အုပ်ချုပ် customer action URL များ {#sovereign-customer-action-urls}

Ultimate Multisite v2.13.0 သည် ကိုယ်ပိုင်အုပ်ချုပ် tenant customer action များကို account၊ checkout၊ billing၊ invoice၊ site၊ template-switching နှင့် domain-mapping flow များအတွက် main site သို့ ပြန်လည် route လုပ်သည်။ tenant-side management link များကို render လုပ်သော ပေါင်းစည်းမှုများသည် ထို action များကို main-site customer panel သို့ ညွှန်ပြသင့်ပြီး action ပြီးဆုံးပြီးနောက် အသုံးပြုသူသည် tenant သို့ ပြန်သွားနိုင်ရမည့်အခါ အတည်ပြုထားသော return target တစ်ခု ထည့်သွင်းသင့်သည်။

cross-domain management link များအတွက် core SSO wrapper ကို အသုံးပြုပါ-

```php
$url = wu_with_sso($main_site_customer_url);
```

ထုတ်လုပ်ထားသော URL ကို `wu_sso_url` မှတစ်ဆင့် filter လုပ်နိုင်ဆဲဖြစ်ပြီး ၎င်းသည် SSO URL၊ လက်ရှိအသုံးပြုသူ၊ target site ID နှင့် redirect context ကို လက်ခံသည်။ Add-on များသည် Ultimate Multisite ၏ token validation ကို ထိန်းသိမ်းထားလျက် provider-specific context ထည့်ရန် သို့မဟုတ် broker URL ကို အစားထိုးရန် ထို filter ကို အသုံးပြုနိုင်သည်။

membership၊ invoice၊ billing-address၊ template သို့မဟုတ် domain-management state များကို ကိုယ်ပိုင်အုပ်ချုပ် tenant အတွင်း မိတ္တူမလုပ်ပါနှင့်။ tenant dashboard ကို launcher အဖြစ်၊ main-site customer panel ကို managed action များအတွက် system of record အဖြစ် သဘောထားပါ။

## Migration အတည်ပြုစစ်ဆေးမှု {#migration-verification}

migration တစ်ခု သို့မဟုတ် lifecycle ပေါင်းစည်းမှုတစ်ခုက tenant data ကို ပြောင်းလဲပြီးနောက် verification gate များကို လုပ်ဆောင်ပါ-

- `wp tenant verify-no-legacy --site=<site-id>` သည် tenant သည် legacy network-side path များပေါ် မမှီခိုတော့ကြောင်း အတည်ပြုသည်။
- `wp tenant verify-sovereign-push --site=<site-id>` သည် sovereign push job များကို process လုပ်ပြီး drain လုပ်နိုင်ကြောင်း အတည်ပြုသည်။

ပေါင်းစည်းမှုများသည် verification မအောင်မြင်မှုကို deployment blocker အဖြစ် သဘောထားသင့်ပြီး ပြဿနာဖြေရှင်းပြီးသည်အထိ tenant ကို live အဖြစ် မသတ်မှတ်သင့်ပါ။

## Tenant ဖျက်ခြင်း {#tenant-deletion}

ဖျက်ခြင်း flow များသည် tenant database credential များကို ရှင်းလင်းနိုင်ရန် addon teardown path ကို ခေါ်သင့်သည်။ teardown အောင်မြင်ပြီးနောက် ပြင်ပပေါင်းစည်းမှုများသည် provider resource များကို ဖယ်ရှားနိုင်သော်လည်း verification သို့မဟုတ် async push job များ လည်ပတ်နေဆဲဖြစ်ပါက host database များ သို့မဟုတ် folder များကို မဖျက်သင့်ပါ။

## ရပ်ဆိုင်းထားသော database router {#deprecated-database-router}

အဟောင်း `Database_Router` ကို deprecation stub ဖြင့် အစားထိုးထားသည်။ ပေါင်းစည်းမှုအသစ်များသည် router class အဟောင်းပေါ် မှီခိုမည့်အစား လက်ရှိ site router နှင့် tenant registry API များမှတစ်ဆင့် tenant များကို ရှာဖွေသတ်မှတ်သင့်သည်။
