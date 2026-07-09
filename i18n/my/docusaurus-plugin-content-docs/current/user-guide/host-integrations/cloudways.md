---
title: Cloudways ပေါင်းစည်းမှု
sidebar_position: 3
_i18n_hash: 09425d90def2b755c27a698d78d7d4b0
---
# Cloudways ပေါင်းစည်းမှု

## အနှစ်ချုပ်
Cloudways သည် DigitalOcean, AWS, Google Cloud စသည့် cloud provider များအပါအဝင် အမျိုးမျိုးသော cloud provider များပေါ်တွင် WordPress ဆိုက်များကို ဖြန့်ချိနိုင်စေသည့် စီမံထားသော cloud hosting ပလက်ဖောင်းတစ်ခုဖြစ်သည်။ ဤပေါင်းစည်းမှုသည် Ultimate Multisite နှင့် Cloudways အကြား domain အလိုအလျောက် ချိန်ကိုက်ခြင်းနှင့် SSL certificate စီမံခန့်ခွဲခြင်းကို လုပ်ဆောင်နိုင်စေသည်။

## အင်္ဂါရပ်များ
- Domain အလိုအလျောက် ချိန်ကိုက်ခြင်း
- SSL certificate စီမံခန့်ခွဲခြင်း
- အပို domain များကို ထောက်ပံ့ခြင်း
- SSL certificate များအတွက် DNS အတည်ပြုခြင်း

## လိုအပ်ချက်များ
အောက်ပါ constant များကို သင့် `wp-config.php` ဖိုင်တွင် သတ်မှတ်ထားရမည်-

```php
define('WU_CLOUDWAYS_EMAIL', 'your_cloudways_email');
define('WU_CLOUDWAYS_API_KEY', 'your_api_key');
define('WU_CLOUDWAYS_SERVER_ID', 'your_server_id');
define('WU_CLOUDWAYS_APP_ID', 'your_app_id');
```

ရွေးချယ်နိုင်သည့်အနေဖြင့် အောက်ပါတို့ကိုလည်း သတ်မှတ်နိုင်သည်-

```php
define('WU_CLOUDWAYS_EXTRA_DOMAINS', 'comma,separated,list,of,domains');
```

## စနစ်တကျ ပြင်ဆင်ရန် လမ်းညွှန်ချက်များ

### 1. သင့် Cloudways API အချက်အလက်များကို ရယူပါ

1. သင့် Cloudways dashboard သို့ ဝင်ရောက်ပါ
2. "Account" > "API Keys" သို့ သွားပါ
3. API key မရှိသေးပါက တစ်ခု ဖန်တီးပါ
4. သင့် email နှင့် API key ကို ကူးယူပါ

### 2. သင့် Server နှင့် Application ID များကို ရယူပါ

1. သင့် Cloudways dashboard တွင် "Servers" သို့ သွားပါ
2. သင့် WordPress multisite လက်ခံထားသည့် server ကို ရွေးချယ်ပါ
3. Server ID ကို URL တွင် တွေ့နိုင်သည်- `https://platform.cloudways.com/server/{SERVER_ID}`
4. "Applications" သို့ သွားပြီး သင့် WordPress application ကို ရွေးချယ်ပါ
5. App ID ကို URL တွင် တွေ့နိုင်သည်- `https://platform.cloudways.com/server/{SERVER_ID}/application/{APP_ID}`

### 3. wp-config.php ထဲသို့ Constant များ ထည့်ပါ

အောက်ပါ constant များကို သင့် `wp-config.php` ဖိုင်ထဲသို့ ထည့်ပါ-

```php
define('WU_CLOUDWAYS_EMAIL', 'your_cloudways_email');
define('WU_CLOUDWAYS_API_KEY', 'your_api_key');
define('WU_CLOUDWAYS_SERVER_ID', 'your_server_id');
define('WU_CLOUDWAYS_APP_ID', 'your_app_id');
```

သင့်တွင် Cloudways aliases စာရင်းတွင် အမြဲထိန်းသိမ်းထားလိုသော အပို **ပြင်ပ** domain များ (သင့် multisite network အပြင်ဘက်) ရှိပါက-

```php
define('WU_CLOUDWAYS_EXTRA_DOMAINS', 'extradomain1.com,extradomain2.com');
```

:::warning သင့်ကိုယ်ပိုင် network ၏ wildcard ကို မထည့်ပါနှင့်
`WU_CLOUDWAYS_EXTRA_DOMAINS` ထဲသို့ `*.your-network.com` (သို့မဟုတ် သင့်ကိုယ်ပိုင် network ၏ subdomain pattern မည်သည့်အမျိုးအစားမဆို) ကို **မထည့်ပါနှင့်**။ ၎င်းကြောင့် tenant တစ်ခုချင်းစီအတွက် SSL certificate များ ထုတ်ပေးခြင်း မဖြစ်နိုင်အောင် ဘာကြောင့် တားဆီးသွားသည်ကို အောက်ရှိ [အရေးကြီး — wildcard SSL အမှားအယွင်း](#important--wildcard-ssl-pitfall) တွင် ကြည့်ပါ။
:::

### 4. ပေါင်းစည်းမှုကို ဖွင့်ပါ

1. သင့် WordPress admin တွင် Ultimate Multisite > Settings သို့ သွားပါ
2. "Domain Mapping" tab သို့ သွားပါ
3. "Host Integrations" အထိ အောက်သို့ ဆွဲပါ
4. Cloudways ပေါင်းစည်းမှုကို ဖွင့်ပါ
5. "Save Changes" ကို နှိပ်ပါ

## အလုပ်လုပ်ပုံ

### Domain ချိန်ကိုက်ခြင်း

Ultimate Multisite တွင် domain တစ်ခုကို map လုပ်သောအခါ-

1. ပေါင်းစည်းမှုသည် လက်ရှိ map လုပ်ထားသော domain အားလုံးကို ရယူသည်
2. domain အသစ်ကို စာရင်းထဲသို့ ထည့်သည် (သင့်လျော်ပါက www ဗားရှင်းနှင့်အတူ)
3. API မှတစ်ဆင့် ပြည့်စုံသော စာရင်းကို Cloudways သို့ ပို့သည်
4. Cloudways သည် သင့် application အတွက် domain alias များကို အပ်ဒိတ်လုပ်သည်

မှတ်ချက်- Cloudways API သည် domain တစ်ခုချင်းစီကိုသာ ထည့်ခြင်း သို့မဟုတ် ဖယ်ရှားခြင်းမဟုတ်ဘဲ အကြိမ်တိုင်း domain စာရင်းအပြည့်အစုံကို ပို့ရန် လိုအပ်သည်။

### SSL Certificate စီမံခန့်ခွဲခြင်း

Domain များ ချိန်ကိုက်ပြီးနောက်-

1. ပေါင်းစည်းမှုသည် သင့် server သို့ ညွှန်ပြနေသော မှန်ကန်သည့် DNS record များရှိသည့် domain များကို စစ်ဆေးသည်
2. ထို domain များအတွက် Let's Encrypt SSL certificate များ ထည့်သွင်းရန် Cloudways သို့ တောင်းဆိုမှု ပို့သည်
3. Cloudways သည် SSL certificate ထုတ်ပေးခြင်းနှင့် ထည့်သွင်းခြင်းကို ကိုင်တွယ်သည်

ပေါင်းစည်းမှုသည် Cloudways မှ **standard** (wildcard မဟုတ်သော) Let's Encrypt certificate များကိုသာ အမြဲတောင်းဆိုသည်။ `WU_CLOUDWAYS_EXTRA_DOMAINS` တွင် wildcard pattern ထည့်ထားပါက SSL တောင်းဆိုမှု မလုပ်မီ အစပိုင်းရှိ `*.` ကို ဖယ်ရှားသည် — wildcard ကိုယ်တိုင်ကို ဤပေါင်းစည်းမှုက ဘယ်တော့မှ မထည့်သွင်းပါ။ Cloudways တွင် wildcard certificate အသုံးပြုရန် ၎င်းကို ကိုယ်တိုင်ထည့်သွင်းရမည်။ သို့သော် ထိုသို့လုပ်ခြင်းသည် map လုပ်ထားသော custom domain များအတွက် domain တစ်ခုချင်းစီအလိုက် Let's Encrypt ထုတ်ပေးခြင်းကို ပိတ်ဆို့သည် (အောက်ပါ အမှားအယွင်းကို ကြည့်ပါ)။

## အပို Domain များ

`WU_CLOUDWAYS_EXTRA_DOMAINS` constant သည် Cloudways application ၏ aliases စာရင်းတွင် အမြဲထိန်းသိမ်းထားလိုသော အပို **ပြင်ပ** domain များကို သတ်မှတ်နိုင်စေသည်။ ၎င်းကို အောက်ပါတို့အတွက် အသုံးပြုပါ-

- Ultimate Multisite က မစီမံသော ပြင်ပ domain များ (ဥပမာ Cloudways application တူညီစွာ မျှဝေသုံးနေသည့် သီးခြား marketing ဆိုက်)
- application aliases စာရင်းတွင် ထိန်းသိမ်းထားလိုသော parked သို့မဟုတ် staging domain များ

ဤ constant ကို သင့်ကိုယ်ပိုင် network ၏ subdomain wildcard အတွက် **မသုံးပါနှင့်**
(ဥပမာ `*.your-network.com`)။ အောက်ရှိ wildcard SSL အမှားအယွင်းကို ကြည့်ပါ။

## အရေးကြီး — Wildcard SSL အမှားအယွင်း

Cloudways ၏ default setup ကို လိုက်နာရာတွင် တွေ့ရများသော အမှားတစ်ခုမှာ `WU_CLOUDWAYS_EXTRA_DOMAINS` ထဲသို့ `*.your-network.com` ကဲ့သို့ wildcard တစ်ခု ထည့်ခြင်း၊ သို့မဟုတ် ထို wildcard အတွက် Cloudways wildcard SSL certificate ကို ကိုယ်တိုင်ထည့်သွင်းခြင်း ဖြစ်သည်။

**ဤသို့လုပ်ပါက Ultimate Multisite က map လုပ်သော tenant တစ်ခုချင်းစီ၏ custom domain များအတွက် Let's Encrypt certificate များ ထုတ်ပေးရန် Cloudways က ငြင်းပယ်မည်။** Cloudways သည် application ပေါ်ရှိ လက်ရှိအသုံးပြုနေသော SSL certificate ကို အကြိမ်တိုင်း အစားထိုးသည်။ application ပေါ်တွင် ရှိပြီးသား wildcard certificate တစ်ခုရှိနေပါက ပေါင်းစည်းမှုက မှီခိုနေသော domain တစ်ခုချင်းစီအလိုက် Let's Encrypt ထုတ်ပေးမှုကို ပိတ်ဆို့သည်။

### Ultimate Multisite network အတွက် အကြံပြုထားသော Cloudways SSL setup

1. Cloudways application ၏ **SSL Certificate** tab တွင် `your-network.com` နှင့် `www.your-network.com` ကိုသာ အကျုံးဝင်သည့် **standard
   Let's Encrypt certificate** ကို ထည့်သွင်းပါ
   — wildcard **မဟုတ်ပါ**။
2. `WU_CLOUDWAYS_EXTRA_DOMAINS` ထဲသို့ `*.your-network.com` (သို့မဟုတ် သင့်ကိုယ်ပိုင် network ၏ subdomain pattern မည်သည့်အမျိုးအစားမဆို) ကို **မထည့်ပါနှင့်**။ ထို constant ကို **ပြင်ပ** domain များအတွက်သာ သီးသန့်ထားပါ။
3. tenant တစ်ခုချင်းစီ၏ subdomain wildcard ကို **DNS** အဆင့်တွင်သာ ဖန်တီးပါ (subsite များ resolve ဖြစ်စေရန် `*.your-network.com` ကို သင့် Cloudways server IP သို့ ညွှန်ပြသည့် `A` record တစ်ခု)။ ထို့နောက် map လုပ်ထားသော custom domain တစ်ခုချင်းစီအတွက် SSL ကို ပေါင်းစည်းမှုက Let's Encrypt မှတစ်ဆင့် အလိုအလျောက် ထုတ်ပေးမည်။

သင့် tenants များ၏ စိတ်ကြိုက် domains များ SSL မရှိဘဲ ရပ်နေပါက Cloudways SSL tab ကို စစ်ဆေးပါ။ ထိုနေရာတွင်
wildcard certificate တစ်ခု အလုပ်လုပ်နေပါက ၎င်းကို ဖယ်ရှားပြီး အဓိက network domain အတွက်သာ standard Let's Encrypt
certificate ကို ပြန်ထုတ်ပါ၊ ထို့နောက် `WU_CLOUDWAYS_EXTRA_DOMAINS` မှ wildcard entries များကို ဖယ်ရှားပါ။ ပြီးလျှင် domain mapping တစ်ခုကို ပြန်စတင်ပါ (သို့မဟုတ် နောက်တစ်ခုကို စောင့်ပါ)
ပြီး integration က per-domain certificates များကို ထပ်မံ ထုတ်ပေးမည်ဖြစ်သည်။

## ပြဿနာဖြေရှင်းခြင်း

### API ချိတ်ဆက်မှုပြဿနာများ
- သင့် email နှင့် API key မှန်ကန်ကြောင်း စစ်ဆေးပါ
- သင့် server နှင့် application IDs များ မှန်ကန်ကြောင်း စစ်ဆေးပါ
- သင့် Cloudways account တွင် လိုအပ်သော permissions များ ရှိကြောင်း သေချာပါစေ

### SSL Certificate ပြဿနာများ
- Cloudways သည် SSL certificates များ မထုတ်ပေးမီ domains များတွင် သင့် server ကို ညွှန်ပြသော မှန်ကန်သည့် DNS records များ ရှိရန် လိုအပ်သည်
- integration သည် SSL certificates များ မတောင်းဆိုမီ DNS records များကို စစ်ဆေးအတည်ပြုသည်
- SSL certificates များ မထုတ်ပေးပါက သင့် domains များသည် သင့် server ၏ IP address သို့ မှန်ကန်စွာ ညွှန်ပြနေကြောင်း စစ်ဆေးပါ
- **tenant တစ်ခုစီ၏ စိတ်ကြိုက် domains များ SSL မရှိဘဲ ရပ်နေပါသလား။** Cloudways application ၏ SSL Certificate tab ကို စစ်ဆေးပါ။ wildcard certificate တစ်ခု (ကိုယ်တိုင် ထည့်သွင်းထားသော၊ သို့မဟုတ် `*.your-network.com` ကို လွှမ်းခြုံသော) အလုပ်လုပ်နေပါက Cloudways သည် တစ်ခုချင်း mapping လုပ်ထားသော စိတ်ကြိုက် domains များအတွက် Let's Encrypt certificates များကို ထုတ်ပေးမည်မဟုတ်ပါ။ ၎င်းကို အဓိက network domain (`your-network.com`, `www.your-network.com`) ကိုသာ လွှမ်းခြုံသည့် standard Let's Encrypt certificate ဖြင့် အစားထိုးပြီး `WU_CLOUDWAYS_EXTRA_DOMAINS` မှ wildcard entries များကို ဖယ်ရှားပါ။ ပြီးလျှင် domain mapping တစ်ခုကို ပြန်စတင်ပါ (သို့မဟုတ် နောက်တစ်ခုကို စောင့်ပါ)၊ integration သည် per-domain certificates များကို တောင်းဆိုမည်ဖြစ်သည်။

### Domain မထည့်သွင်းနိုင်ခြင်း
- error messages ရှိမရှိ Ultimate Multisite logs များကို စစ်ဆေးပါ
- domain သည် Cloudways တွင် ထည့်သွင်းပြီးသား မဟုတ်ကြောင်း စစ်ဆေးပါ
- သင်ထည့်သွင်းနေသော domains အရေအတွက်ကို သင့် Cloudways plan က ပံ့ပိုးကြောင်း သေချာပါစေ
