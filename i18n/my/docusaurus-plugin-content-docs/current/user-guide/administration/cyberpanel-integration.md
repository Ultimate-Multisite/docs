---
title: CyberPanel ပေါင်းစပ်မှု
sidebar_position: 21
_i18n_hash: d0607874b556c583dac2aaa33ba1dc1d
---
# CyberPanel ပေါင်းစပ်မှု {#cyberpanel-integration}

ဤလမ်းညွှန်သည် Ultimate Multisite CyberPanel ပေါင်းစပ်မှုကို မည်သို့ဖွဲ့စည်းရမည်ကို ရှင်းပြထားပါသည်။ ၎င်းအားဖြင့် သင့် network အတွင်းရှိ domain များကို CyberPanel တွင် virtual hosts အဖြစ် အလိုအလျောက် ထည့်သွင်းခြင်း (နှင့် ဖယ်ရှားခြင်း) တို့ကို လုပ်ဆောင်နိုင်ပြီး၊ Let's Encrypt မှတစ်ဆင့် အလိုအလျောက် SSL စီစဉ်ပေးခြင်းကိုလည်း ရွေးချယ်နိုင်ပါသည်။

## ဘာတွေလုပ်ဆောင်ပေးသလဲ {#what-it-does}

- Ultimate Multisite တွင် domain တစ်ခုကို map လုပ်လိုက်သည့်အခါ၊ ဤပေါင်းစပ်မှုသည် CyberPanel API ကို ခေါ်ယူကာ ထို domain အတွက် virtual host တစ်ခုကို ဖန်တီးပေးပါသည်။
- Domain mapping ကို ဖယ်ရှားလိုက်သည့်အခါ၊ ဤပေါင်းစပ်မှုသည် သက်ဆိုင်ရာ virtual host ကို ဖျက်ပစ်ရန် API ကို ခေါ်ယူပါသည်။
- Auto-SSL ကို ဖွင့်ထားပါက၊ virtual host ကို ဖန်တီးပြီးသည်နှင့် ချက်ချင်း Let's Encrypt certificate ထုတ်ပေးခြင်းကို ဤပေါင်းစပ်မှုက စတင်ပေးပါသည်။
- Domain Mapping settings တွင်ရှိသော "Auto-create www subdomain" setting ပေါ်မူတည်၍ `www.` alias ကို ရွေးချယ်အလိုအလျောက် ထည့်ခြင်း/ဖယ်ရှားခြင်းတို့ကိုလည်း လုပ်ဆောင်ပေးနိုင်ပါသည်။

## ကြိုတင်လိုအပ်ချက်များ {#prerequisites}

- အလုပ်လုပ်နေသော CyberPanel instance တစ်ခု (v2.3 သို့မဟုတ် နောက်ပိုင်းကို အကြံပြုသည်) နှင့် ၎င်းသည် သင့် WordPress server မှ ချိတ်ဆက်နိုင်ရမည်။
- သင့် WordPress network root ကို နေရာပေးထားပြီးသား CyberPanel ရှိ website တစ်ခု ရှိရမည်။ ဤပေါင်းစပ်မှုသည် virtual hosts အသစ်များကို ဤ server တွင် ချိတ်ဆက်ပေးပါသည်။
- CyberPanel API အသုံးပြုခွင့်ကို ဖွင့်ထားရမည်။ အတည်ပြုခြင်း (Authentication) အတွက် သင့် CyberPanel admin username နှင့် password ကို အသုံးပြုရမည်။
- Auto-SSL သည် တရားဝင် certificate တစ်ခု ထုတ်ပေးနိုင်ရန်အတွက် map လုပ်ထားသော domain များ၏ DNS records များသည် သင့် server ၏ IP address ကို ကြိုတင်ညွှန်ပြထားရပါမည်။

## လိုအပ်ချက်များ {#requirements}

အောက်ပါ constant များကို သင့် `wp-config.php` file တွင် သတ်မှတ်ပေးရပါမည်။

```php
define('WU_CYBERPANEL_HOST', 'https://your-cyberpanel-host:8090');
define('WU_CYBERPANEL_USERNAME', 'your_admin_username');
define('WU_CYBERPANEL_PASSWORD', 'your_admin_password');
define('WU_CYBERPANEL_PACKAGE', 'Default');
```

ရွေးချယ်နိုင်သည်မှာ အောက်ပါ constant များကိုလည်း သတ်မှတ်ပေးနိုင်သည်-

```php
define('WU_CYBERPANEL_AUTO_SSL', true);          // Default: true — domain ဖန်တီးပြီးနောက် Let's Encrypt SSL ထုတ်ပေးမည်
define('WU_CYBERPANEL_PHP_VERSION', 'PHP 8.2');  // Default: PHP 8.2
define('WU_CYBERPANEL_EMAIL', 'admin@yourdomain.com'); // SSL certificate ဆက်သွယ်ရန် အီးမေးလ်
```

## ဖွဲ့စည်းတည်ဆောက်မှု ညွှန်ကြားချက်များ {#setup-instructions}

### ၁။ CyberPanel API ကို ဖွင့်ပါ {#1-enable-the-cyberpanel-api}

၁။ CyberPanel dashboard သို့ administrator အနေဖြင့် ဝင်ရောက်ပါ။
၂။ **Security** > **SSL** သို့ သွားပြီး CyberPanel interface ပေါ်တွင် SSL သည် အလုပ်လုပ်နေကြောင်း အတည်ပြုပါ။ (၎င်းသည် လုံခြုံသော API ခေါ်ဆိုမှုများအတွက် လိုအပ်ပါသည်။)
၃။ CyberPanel API သည် default အနေဖြင့် `https://your-server-ip:8090/api/` တွင် ရရှိနိုင်ပါသည်။ ၎င်းကို ဖွင့်ရန် အပိုအဆင့်များ မလိုအပ်ပါ — admin user များအတွက် default အနေဖြင့် ဖွင့်ထားပြီးသားဖြစ်သည်။

### ၂။ wp-config.php တွင် Constants များ ထည့်ပါ {#2-add-constants-to-wp-configphp}

အောက်ပါ constant များကို `/* That's all, stop editing! */` line မတိုင်မီ သင့် `wp-config.php` file တွင် ထည့်ပါ။

```php
define('WU_CYBERPANEL_HOST', 'https://your-cyberpanel-host:8090');
define('WU_CYBERPANEL_USERNAME', 'admin');
define('WU_CYBERPANEL_PASSWORD', 'your_secure_password');
define('WU_CYBERPANEL_PACKAGE', 'Default');
```

Auto-SSL ကို ဖွင့်ရန် (အကြံပြုသည်):

```php
define('WU_CYBERPANEL_AUTO_SSL', true);
define('WU_CYBERPANEL_EMAIL', 'admin@yourdomain.com');
```

### ၃။ ပေါင်းစပ်မှုကို ဖွင့်ပါ {#3-enable-the-integration}

၁။ သင့် WordPress network admin တွင် **Ultimate Multisite** > **Settings** သို့ သွားပါ။
၂။ **Domain Mapping** tab သို့ သွားပါ။
၃။ **Host Integrations** အထိ အောက်သို့ ဆင်းပါ။
၄။ **CyberPanel** ပေါင်းစပ်မှုကို ဖွင့်ပါ။
၅။ **Save Changes** ကို နှိပ်ပါ။

### ၄။ ချိတ်ဆက်မှု စစ်ဆေးပါ {#4-verify-connectivity}

settings wizard တွင် ပါရှိသော built-in connection test ကို အသုံးပြုပါ။

၁။ **Ultimate Multisite** > **Settings** > **Domain Mapping** > **Host Integrations** > **CyberPanel** သို့ သွားပါ။
၂။ **Test Connection** ကို နှိပ်ပါ။
၃။ အောင်မြင်ကြောင်း အကြောင်းကြားသည့် message သည် plugin အနေဖြင့် CyberPanel API သို့ ရောက်ရှိနိုင်ပြီး မှန်ကန်စွာ အတည်ပြုနိုင်ကြောင်း အတည်ပြုပါသည်။

## ဘယ်လိုအလုပ်လုပ်သလဲ {#how-it-works}

### Domain Mapping {#domain-mapping}

Ultimate Multisite တွင် domain တစ်ခုကို map လုပ်လိုက်သည့်အခါ:

၁။ ဤပေါင်းစပ်မှုသည် သင့် CyberPanel host ပေါ်ရှိ `/api/createWebsite` သို့ `POST` request တစ်ခု ပေးပို့ပါသည်။
၂။ CyberPanel သည် သတ်မှတ်ထားသော package အောက်တွင် ထို domain အတွက် virtual host အသစ်တစ်ခုကို ဖန်တီးပေးပါသည်။
၃။ document root ကို သင့် WordPress network root directory ကို ညွှန်ပြရန် သတ်မှတ်ပေးပါသည်။
၄။ domain mapping ကို ဖယ်ရှားလိုက်သည့်အခါ၊ ဤပေါင်းစပ်မှုသည် virtual host ကို ရှင်းလင်းရန် `/api/deleteWebsite` ကို ခေါ်ယူပါသည်။

### Auto-SSL {#auto-ssl}

`WU_CYBERPANEL_AUTO_SSL` သည် `true` ဖြစ်သည့်အခါ:

၁။ virtual host ကို ဖန်တီးပြီးနောက်၊ ဤပေါင်းစပ်မှုသည် domain အတွက် `/api/issueSSL` ကို ခေါ်ယူပါသည်။
၂။ CyberPanel သည် ACME HTTP-01 challenge ကို အသုံးပြု၍ Let's Encrypt certificate တစ်ခုကို တောင်းဆိုပါသည်။
၃။ certificate ကို သက်တမ်းကုန်ခါနီးမရောက်ခင် CyberPanel မှ အလိုအလျောက် သက်တမ်းတိုးပေးပါသည်။

> **အရေးကြီးသည်:** Let's Encrypt သည် domain ကို အတည်ပြုနိုင်ရန်အတွက် DNS သည် သင့် server ၏ IP address သို့ အပြည့်အဝ ပျံ့နှံ့နေရပါမည်။ mapping လုပ်ပြီးပြီးချင်း SSL ထုတ်ပေးမှု မအောင်မြင်ပါက၊ DNS ပျံ့နှံ့မှုအတွက် စောင့်ဆိုင်းပြီး CyberPanel dashboard ၏ **SSL** > **Manage SSL** အောက်မှ SSL ကို ပြန်လည်စတင်ပေးပါ။

### www Subdomain {#www-subdomain}

Domain Mapping settings တွင် **Auto-create www subdomain** ကို ဖွင့်ထားပါက၊ ဤပေါင်းစပ်မှုသည် `www.<domain>` အတွက် virtual host alias တစ်ခုကိုလည်း ဖန်တီးပေးပြီး၊ auto-SSL ဖွင့်ထားပါက apex နှင့် www နှစ်မျိုးလုံးကို အကျုံးဝင်သည့် certificate ကို ထုတ်ပေးပါသည်။

### Email Forwarders {#email-forwarders}

[Ultimate Multisite: Emails](../../addons/ultimate-multisite-emails/) addon ကို အသုံးပြုထားပါက၊ CyberPanel သည် ဖောက်သည် email forwarders များကိုလည်း ပံ့ပိုးပေးနိုင်ပါသည်။ Forwarders များသည် မေးလ်ဘောက်စ် အပြည့်အဝ ဖန်တီးစရာမလိုဘဲ domain address မှ မက်ဆေ့ချ်များကို အခြား inbox သို့ လမ်းကြောင်းပေးခြင်းဖြစ်ပြီး၊ `info@customer-domain.test` သို့မဟုတ် `support@customer-domain.test` ကဲ့သို့သော alias များအတွက် အသုံးဝင်ပါသည်။

ဖောက်သည်များအတွက် forwarders များကို ဖွင့်ခွင့်ပေးခြင်းမပြုမီ:

၁။ အထက်ပါ CyberPanel constants များ ဖွဲ့စည်းထားကြောင်းနှင့် connection test အောင်မြင်ကြောင်း အတည်ပြုပါ။
၂။ Emails addon settings တွင် CyberPanel email provider ကို ဖွင့်ပါ။
၃။ forwarder ကို ဖန်တီးခြင်းမပြုမီ ဖောက်သည် domain သည် CyberPanel တွင် ရှိပြီးသားဖြစ်ကြောင်း အတည်ပြုပါ။
၄။ စမ်းသပ် forwarder တစ်ခုကို ဖန်တီးပြီး၊ production plan များတွင် ပေးအပ်ခြင်းမပြုမီ ၎င်းမှတစ်ဆင့် မက်ဆေ့ချ်တစ်ခု ပေးပို့စမ်းသပ်ပါ။

Forwarder ဖန်တီးမှု မအောင်မြင်ပါက၊ ဦးစွာ Ultimate Multisite activity logs ကို စစ်ဆေးပြီး၊ ထို့နောက် CyberPanel တွင် source domain ရှိကြောင်းနှင့် API user အား email-management ခွင့်ပြုချက်များ ရှိကြောင်း အတည်ပြုပါ။

## ဖွဲ့စည်းမှု ကိုးကားချက် {#configuration-reference}

| Constant | လိုအပ်မှု | Default | ဖော်ပြချက် |
|---|---|---|---|
| `WU_CYBERPANEL_HOST` | Yes | — | သင့် CyberPanel instance သို့ အချိန်နှင့်အမျှ port အပါအဝင် အပြည့်အစုံ URL၊ ဥပမာ။ `https://cp.example.com:8090` |
| `WU_CYBERPANEL_USERNAME` | Yes | — | CyberPanel admin username |
| `WU_CYBERPANEL_PASSWORD` | Yes | — | CyberPanel admin password |
| `WU_CYBERPANEL_PACKAGE` | Yes | `Default` | virtual hosts အသစ်များအတွက် သတ်မှတ်မည့် CyberPanel hosting package |
| `WU_CYBERPANEL_AUTO_SSL` | No | `true` | domain ဖန်တီးပြီးနောက် Let's Encrypt SSL certificate ထုတ်ပေးမည် |
| `WU_CYBERPANEL_PHP_VERSION` | No | `PHP 8.2` | virtual hosts အသစ်များအတွက် PHP version (CyberPanel တွင် တပ်ဆင်ထားသော version နှင့် ကိုက်ညီရမည်) |
| `WU_CYBERPANEL_EMAIL` | No | — | SSL certificate မှတ်ပုံတင်ရန် ဆက်သွယ်ရန် အီးမေးလ် |

## အရေးကြီးသော မှတ်ချက်များ {#important-notes}

- CyberPanel ၏ API သည် session-based token authentication ကို အသုံးပြုသည်။ ဤပေါင်းစပ်မှုသည် API ခေါ်ဆိုမှုတိုင်းတွင် token ရယူခြင်းကို အလိုအလျောက် လုပ်ဆောင်ပေးပါသည်။
- သင့် CyberPanel admin account သည် website များ ဖန်တီးခြင်းနှင့် ဖျက်ခြင်း ခွင့်ပြုချက်များ ရှိရပါမည်။
- CyberPanel သည် default အနေဖြင့် port `8090` တွင် အလုပ်လုပ်သည်။ သင့် server သည် firewall ကို အသုံးပြုပါက၊ ဤ port သည် WordPress application server မှ ရောက်ရှိနိုင်ကြောင်း သေချာပါစေ။
- ဤပေါင်းစပ်မှုသည် DNS records များကို စီမံခန့်ခွဲခြင်း မပြုပါ။ Ultimate Multisite တွင် domain ကို map လုပ်ခြင်းမပြုမီ domain DNS ကို သင့် server ၏ IP address သို့ ညွှန်ပြရပါမည်။
- OpenLiteSpeed (OLS) ကို အသုံးပြုပါက၊ virtual host ပြောင်းလဲမှုများပြီးနောက် graceful restart ကို အလိုအလျောက် စတင်ပေးပါသည်။ လက်ဖြင့် ဘာမှလုပ်ရန် မလိုအပ်ပါ။

## ပြဿနာဖြေရှင်းခြင်း {#troubleshooting}

### API Connection Refused {#api-connection-refused}

- သင့် server firewall တွင် port `8090` သည် ဖွင့်ထားကြောင်း စစ်ဆေးပါ။
- `WU_CYBERPANEL_HOST` တန်ဖိုးတွင် မှန်ကန်သော protocol (`https://`) နှင့် port ပါဝင်ကြောင်း အတည်ပြုပါ။
- သင့် CyberPanel SSL certificate သည် တရားဝင်ကြောင်း စစ်ဆေးပါ။ self-signed certificates များသည် TLS verification အမှားများ ဖြစ်စေနိုင်သည်။ ယုံကြည်ရသော private network environment များတွင်သာ `WU_CYBERPANEL_VERIFY_SSL` ကို `false` သတ်မှတ်ပါ။

### Authentication Errors {#authentication-errors}

- သင့် `WU_CYBERPANEL_USERNAME` နှင့် `WU_CYBERPANEL_PASSWORD` တို့ မှန်ကန်ကြောင်း CyberPanel သို့ တိုက်ရိုက် login လုပ်ခြင်းဖြင့် အတည်ပြုပါ။
- CyberPanel သည် အကြိမ်ကြိမ် အမှား login ကြိုးစားမှုများ ပြုလုပ်ပါက account များကို lock လုပ်ပါသည်။ Lockout ဖြစ်ပါက CyberPanel ၏ **Security** > **Brute Force Monitor** ကို စစ်ဆေးပါ။

### Domain Not Created {#domain-not-created}

- API error messages များအတွက် Ultimate Multisite activity log (**Ultimate Multisite** > **Activity Logs**) ကို စစ်ဆေးပါ။
- `WU_CYBERPANEL_PACKAGE` တွင် သတ်မှတ်ထားသော package သည် CyberPanel တွင် တည်ရှိကြောင်း အတည်ပြုပါ (**Packages** > **List Packages**).
- domain သည် CyberPanel တွင် website အဖြစ် ရှိပြီးသား မဟုတ်ကြောင်း သေချာပါစေ — duplicate website ဖန်တီးခြင်းသည် error ကို ပြန်ပေးပါသည်။

### SSL Certificate Not Issued {#ssl-certificate-not-issued}

- DNS သည် အပြည့်အဝ ပျံ့နှံ့ပြီးကြောင်း အတည်ပြုပါ: `dig +short your-domain.com` သည် သင့် server ၏ IP ကို ပြန်ပေးသင့်သည်။
- Let's Encrypt သည် rate limits များကို အကန့်အသတ်သတ်မှတ်ထားသည်။ မကြာသေးမီက တူညီသော domain အတွက် certificate အများအပြား ထုတ်ပေးခဲ့ပါက၊ ပြန်ကြိုးစားခြင်းမပြုမီ စောင့်ဆိုင်းပါ။
- certificate ထုတ်ပေးမှု အမှားများအတွက် အသေးစိတ်အချက်အလက်များကို **Logs** > **Error Logs** အောက်ရှိ CyberPanel SSL logs များကို စစ်ဆေးပါ။
- အရန်အဖြစ်၊ CyberPanel မှ ကိုယ်တိုင် SSL ကို ထုတ်ပေးနိုင်သည်- **SSL** > **Manage SSL** > domain ကို ရွေးချယ်ပါ > **Issue SSL**။

## ကိုးကားချက်များ {#references}

- CyberPanel API Documentation: https://docs.cyberpanel.net/docs/category/api
- CyberPanel SSL Management: https://docs.cyberpanel.net/docs/cyberpanel/SSL/manageSSL
- Let's Encrypt Rate Limits: https://letsencrypt.org/docs/rate-limits/
