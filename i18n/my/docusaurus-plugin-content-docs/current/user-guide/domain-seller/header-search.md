---
title: ခေါင်းစီး ဒိုမိန်း ရှာဖွေမှု
sidebar_position: 4
_i18n_hash: c8b44ed222646006fb33c195ca6ac7a1
---
# Header Domain Search

Ultimate Multisite checkout အတွင်းတွင် ရရှိနိုင်သော domain များမှ customer ကို ရွေးချယ်စေပြီး domain ရှာဖွေမှုကို စတင်ပေးသည့် header form သေးသေးလေးလိုအပ်သောအခါ ဤ setup ကို အသုံးပြုပါ။

## လိုအပ်ချက်များ

- Ultimate Multisite network-active ဖြစ်ရမည်။
- Multisite Ultimate Domain Seller network-active ဖြစ်ရမည်။
- အနည်းဆုံး active domain registration product တစ်ခုရှိရမည်။ ၎င်းတွင်-
  - `domain_provider` ကို configure လုပ်ထားသော provider တစ်ခုအဖြစ် သတ်မှတ်ထားရမည်။
  - Supported TLDs များကို configure လုပ်ထားရမည်။ ဥပမာ `com`, `net`, နှင့် `org`။
- **Domain Selection** field ပါဝင်သော မှန်ကန်သည့် checkout form တစ်ခု။

## Checkout form

1. registration page မှ အသုံးပြုသော checkout form ကို ဖန်တီးပါ သို့မဟုတ် တည်းဖြတ်ပါ။
2. **Username** အပါအဝင် ပုံမှန်လိုအပ်သော checkout/account field များကို ထည့်ပါ။ domain field တစ်ခုတည်းသာ ပါဝင်သော checkout form ကို Ultimate Multisite validation က ပယ်ချသည်။
3. **Domain Selection** field တစ်ခု ထည့်ပါ။
4. လုပ်ငန်းစဉ်သည် free subdomains သို့မဟုတ် ရှိပြီးသား domains များထက် registered domains များကို အဓိကထားသင့်ပါက Domain Selection mode ကို **Register Only** သို့ သတ်မှတ်ပါ။
5. domain registration product ကို ထို field သို့ သတ်မှတ်ပါ။

registration page သည် checkout form ကို ဖော်ပြသင့်သည်။ ဥပမာ-

```text
[wu_checkout slug="domain-form"]
```

## Header form

ထည့်သွင်းထားသော ရှာဖွေစကားလုံးကို `domain_name` အဖြစ် checkout page သို့ ပို့ပေးရန် site header တွင် `GET` form သေးသေးလေးတစ်ခု ထည့်ပါ။

```html
<form class="ums-header-domain-search" action="/register/" method="get">
  <label class="screen-reader-text" for="ums-header-domain-search-input">Search for a domain</label>
  <input id="ums-header-domain-search-input" name="domain_name" type="text" placeholder="Find your domain" autocomplete="off">
  <button type="submit">Search</button>
</form>
```

custom header JavaScript ထဲတွင် domain ကို ကြိုတင်မရွေးချယ်ပါနှင့်။ header သည် ရှာဖွေစကားလုံးကိုသာ ပို့သင့်သည်။ Domain Seller checkout script သည် `?domain_name=example` ကို ဖတ်ပြီး checkout search box ကို ဖြည့်ကာ availability search ကို လုပ်ဆောင်ပေးသည်။ ထို့ကြောင့် customer သည် ပြန်လာသော domains များမှ ရွေးချယ်နိုင်သည်။

## မျှော်လင့်ထားသော လုပ်ဆောင်ပုံ

header တွင် `example` ကို ရှာဖွေပါက အောက်ပါနေရာကို ဖွင့်သင့်သည်-

```text
/register/?domain_name=example
```

ထို့နောက် checkout သည် အောက်ပါကဲ့သို့ ရွေးချယ်နိုင်သော ရလဒ်များကို ပြသသင့်သည်-

- `example.com`
- `example.net`
- `example.org` မရရှိနိုင်ပါ
- provider က support လုပ်သော အခြား TLDs များ

ရရှိနိုင်သော ရလဒ်တစ်ခုကို ရွေးချယ်ပြီးနောက် order summary တွင် domain registration product နှင့် ရွေးချယ်ထားသော domain name ပါဝင်သင့်သည်။

## စစ်ဆေးအတည်ပြုခြင်း

1. home page ကို ဖွင့်ပါ။
2. bare name တစ်ခုကို ရှာဖွေပါ။ ဥပမာ `example`။
3. checkout URL တွင် `?domain_name=example` ပါဝင်ကြောင်း အတည်ပြုပါ။
4. checkout domain field တွင် `example` ပါဝင်ကြောင်း အတည်ပြုပါ။
5. domain ရွေးချယ်စရာစာရင်း ပေါ်လာကြောင်း အတည်ပြုပါ။
6. ရရှိနိုင်သော domain တစ်ခုအတွက် **Select** ကို နှိပ်ပါ။
7. order summary တွင် `Domain Registration - example.com` သို့မဟုတ် ရွေးချယ်ထားသော domain ပါဝင်ကြောင်း အတည်ပြုပါ။

## ပြဿနာဖြေရှင်းခြင်း

- စာရင်း မပေါ်လာပါက browser network tab တွင် `admin-ajax.php?action=wu_domain_search` ကို စစ်ဆေးပြီး ၎င်းသည် အလွတ်မဟုတ်သော `domains` သို့မဟုတ် `results` ကို ပြန်ပေးကြောင်း အတည်ပြုပါ။
- checkout form ကို save လုပ်နေစဉ် validation မအောင်မြင်ပါက **Username** ကဲ့သို့ လိုအပ်သော account field များကို ထည့်ပါ။
- domain ရွေးချယ်သော်လည်း cart မပြောင်းလဲပါက `window.wu_checkout_form` ရှိကြောင်းနှင့် Domain Seller checkout assets များကို checkout page ပေါ်တွင် load လုပ်ထားကြောင်း အတည်ပြုပါ။
