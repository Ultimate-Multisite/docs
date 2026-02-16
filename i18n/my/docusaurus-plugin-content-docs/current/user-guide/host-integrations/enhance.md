---
title: ထိန်းချုပ်မှုပြားပေါင်းစပ်မှုကို မြှင့်တင်ပါ
sidebar_position: 2
_i18n_hash: 2b4047e6b7b32a1c96a0b562e251cbfb
---
# Enhance Control Panel ချိတ်ဆက်မှု

## အကျဉ်းချုပ်
Enhance ဟာ hosting automation နဲ့ စီမံခန့်ခွဲမှု စွမ်းရည်တွေ ပေးအပ်တဲ့ ခေတ်မီ control panel တစ်ခုဖြစ်ပါတယ်။ ဒီ integration က Ultimate Multisite နဲ့ Enhance Control Panel အကြား domain အလိုအလျောက် sync လုပ်ခြင်းနဲ့ SSL certificate စီမံခန့်ခွဲခြင်းကို လုပ်ဆောင်ပေးပါတယ်။

**ဆက်စပ် ဆွေးနွေးချက်များ:** community tips နဲ့ အပိုအချက်အလက်များအတွက် [GitHub Discussion #265](https://github.com/Multisite-Ultimate/ultimate-multisite/discussions/265) ကို ကြည့်ရှုပါ။

## အင်္ဂါရပ်များ
- Ultimate Multisite မှာ domain များ map လုပ်တဲ့အခါ အလိုအလျောက် domain sync လုပ်ခြင်း
- DNS resolve ဖြစ်တဲ့အခါ LetsEncrypt မှတဆင့် SSL certificate အလိုအလျောက် ထုတ်ပေးခြင်း
- Subdomain mode နဲ့ လည်ပတ်နေတဲ့ network များအတွက် subdomain ပံ့ပိုးမှု
- Mapping များ ဖျက်လိုက်တဲ့အခါ domain ဖယ်ရှားခြင်း
- API credentials စစ်ဆေးရန် connection testing

## လိုအပ်ချက်များ

### စနစ်ဆိုင်ရာ လိုအပ်ချက်များ
- Enhance Control Panel တပ်ဆင်ထားပြီး အသုံးပြုနိုင်ရမည်
- Enhance server ပေါ်တွင် host လုပ်ထားသော သို့မဟုတ် ချိတ်ဆက်ထားသော WordPress Multisite installation
- Apache web server (Enhance သည် လက်ရှိတွင် Apache configurations ကို ပံ့ပိုးပြီး LiteSpeed Enterprise ကို စျေးသက်သာစွာ ရရှိနိုင်ပါသည်)

### API Access
API token များ ဖန်တီးရန် Enhance Control Panel သို့ administrator access ရှိရမည်။

## သင့် API Credentials များ ရယူခြင်း

### ၁။ API Token ဖန်တီးခြင်း

1. သင့် Enhance Control Panel သို့ administrator အဖြစ် login ဝင်ပါ
2. Navigation menu ထဲက **Settings** ကို နှိပ်ပါ
3. **Access Tokens** သို့ သွားပါ
4. **Create Token** ကို နှိပ်ပါ
5. Token အတွက် ဖော်ပြချက်ပါသော နာမည်တစ်ခု ပေးပါ (ဥပမာ "Ultimate Multisite Integration")
6. **System Administrator** role ကို သတ်မှတ်ပါ
7. သက်တမ်းကုန်ဆုံးရက်အတွက်:
   - Token သက်တမ်းမကုန်ဆုံးစေလိုပါက ဗလာထားပါ
   - သို့မဟုတ် လုံခြုံရေးအတွက် သတ်သတ်မှတ်မှတ် ရက်စွဲတစ်ခု သတ်မှတ်ပါ
8. **Create** ကို နှိပ်ပါ

ဖန်တီးပြီးနောက်၊ သင့် **Access Token** နဲ့ **Organization ID** ကို ပြသပါလိမ့်မယ်။ Token ကို တစ်ကြိမ်သာ ပြသမှာဖြစ်တာကြောင့် **ချက်ချင်း သိမ်းဆည်းပါ**။

### ၂။ သင့် Organization ID ရယူခြင်း

Organization ID ကို Access Tokens စာမျက်နှာတွင် "Org ID: {your_id}" ဟု အညွှန်းတပ်ထားသော အပြာရောင် information box ထဲတွင် ပြသထားပါသည်။

Organization ID သည် UUID format ဖြစ်ပြီး ဤကဲ့သို့ ပုံစံရှိပါသည်: `d8554b6d-5d0d-6719-009b-fec1189aa8f3`

Customer တစ်ဦး၏ Organization ID ကိုလည်း ဤနည်းဖြင့် ရှာနိုင်ပါသည်:
1. **Customers** စာမျက်နှာသို့ သွားပါ
2. သက်ဆိုင်ရာ customer အတွက် **Manage customer** ကို နှိပ်ပါ
3. URL ကို ကြည့်ပါ - Organization ID သည် `/customers/` နောက်ရှိ alphanumeric characters ဖြစ်ပါသည်

### ၃။ သင့် Server ID ရယူခြင်း

သင့် Server ID ရှာရန် (domain operations အတွက် လိုအပ်ပါသည်):

1. Enhance Control Panel တွင် **Servers** သို့ သွားပါ
2. သင့် WordPress installation run နေသော server ကို နှိပ်ပါ
3. Server ID (UUID format) ကို URL သို့မဟုတ် server details တွင် မြင်ရပါလိမ့်မည်
4. တနည်းအားဖြင့်၊ servers စာရင်းကြည့်ရန် API ကို အသုံးပြုနိုင်ပါသည်:

```bash
curl -s -X GET https://your-enhance-panel.com/api/servers \
  -H "Accept: application/json" \
  -H "Authorization: Bearer YOUR_TOKEN" | jq
```

Server ID သည် UUID format ဖြစ်သည်: `00000000-0000-0000-0000-000000000000`

### ၄။ သင့် API URL ရယူခြင်း

သင့် API URL သည် သင့် Enhance Control Panel URL ဖြစ်ပြီး `/api/` ထပ်ဖြည့်ထားသည်:

```
https://your-enhance-panel.com/api/
```

**အရေးကြီး:** `/api/` path လိုအပ်ပါသည်။ အဖြစ်များသော အမှားများမှာ:
- `/api/` မပါဘဲ domain တစ်ခုတည်း အသုံးပြုခြင်း
- HTTPS အစား HTTP အသုံးပြုခြင်း (လုံခြုံရေးအတွက် HTTPS လိုအပ်ပါသည်)

## Configuration

### လိုအပ်သော Constants များ

အောက်ပါ constants များကို သင့် `wp-config.php` ဖိုင်တွင် ထည့်သွင်းပါ:

```php
// Enhance Control Panel Integration
define('WU_ENHANCE_API_TOKEN', 'your-bearer-token-here');
define('WU_ENHANCE_API_URL', 'https://your-enhance-panel.com/api/');
define('WU_ENHANCE_SERVER_ID', 'your-server-uuid-here');
```

### Integration Wizard မှတဆင့် Setup လုပ်ခြင်း

1. သင့် WordPress admin တွင် **Ultimate Multisite** > **Settings** သို့ သွားပါ
2. **Integrations** tab သို့ သွားပါ
3. **Enhance Control Panel Integration** ကို ရှာပြီး **Configuration** ကို နှိပ်ပါ
4. Wizard က setup ပြုလုပ်ရာတွင် လမ်းညွှန်ပေးပါလိမ့်မည်:
   - **အဆင့် ၁:** မိတ်ဆက်နှင့် feature အကျဉ်းချုပ်
   - **အဆင့် ၂:** သင့် API credentials များ ထည့်သွင်းခြင်း (Token, API URL, Server ID)
   - **အဆင့် ၃:** Connection စမ်းသပ်ခြင်း
   - **အဆင့် ၄:** ပြန်လည်စစ်ဆေးပြီး activate လုပ်ခြင်း

သင် ရွေးချယ်နိုင်သည်မှာ:
- Wizard က constants များကို သင့် `wp-config.php` ဖိုင်ထဲသို့ အလိုအလျောက် ထည့်သွင်းစေခြင်း
- Constant definitions များကို ကူးယူပြီး ကိုယ်တိုင် ထည့်သွင်းခြင်း

## နောက်ထပ် WordPress Configuration

Community feedback ([Discussion #265](https://github.com/Multisite-Ultimate/ultimate-multisite/discussions/265)) အရ၊ ဤနောက်ထပ် settings များကို configure လုပ်ရန် လိုအပ်နိုင်ပါသည်:

### .htaccess Configuration

Domain mapping နှင့် ပြဿနာများ ကြုံတွေ့ပါက:
1. မူရင်း Enhance `.htaccess` ဖိုင်ကို ဖျက်ပါ
2. Standard WordPress Multisite `.htaccess` ဖိုင်ဖြင့် အစားထိုးပါ

### Cookie Constants

Mapped domains များတွင် cookie handling မှန်ကန်စေရန် ဤ constants များကို `wp-config.php` သို့ ထည့်ပါ:

```php
define('COOKIE_DOMAIN', $_SERVER['HTTP_HOST']);
define('COOKIEPATH', '/');
define('ADMIN_COOKIE_PATH', '/');
```

## အလုပ်လုပ်ပုံ

### Domain Map လုပ်တဲ့အခါ

1. User က Ultimate Multisite တွင် custom domain တစ်ခု map လုပ်သည် (သို့မဟုတ် subdomain mode တွင် site အသစ်တစ်ခု ဖန်တီးသည်)
2. Integration က Enhance ၏ API သို့ POST request ပို့သည်: `/servers/{server_id}/domains`
3. Enhance က domain ကို သင့် server configuration သို့ ထည့်သည်
4. DNS က သင့် server သို့ resolve ဖြစ်သောအခါ၊ Enhance က LetsEncrypt မှတဆင့် SSL certificate ကို အလိုအလျောက် ထုတ်ပေးသည်
5. Domain သည် HTTPS ဖြင့် active ဖြစ်သွားသည်

### Domain ဖယ်ရှားတဲ့အခါ

1. Ultimate Multisite တွင် domain mapping တစ်ခုကို ဖျက်သည်
2. Integration က domain ၏ ID ရှာရန် Enhance ကို query လုပ်သည်
3. DELETE request ကို ပို့သည်: `/servers/{server_id}/domains/{domain_id}`
4. Enhance က domain ကို သင့် server configuration မှ ဖယ်ရှားသည်

### DNS နှင့် SSL စစ်ဆေးခြင်း

Ultimate Multisite တွင် built-in DNS နှင့် SSL checking ပါဝင်သည်:
- **Domain Mapping Settings** တွင် check interval ကို configure လုပ်နိုင်သည် (default: 300 seconds/5 minutes)
- System က domain ကို active အဖြစ် မှတ်သားမတိုင် DNS propagation ကို verify လုပ်မည်
- SSL certificate validity ကို အလိုအလျောက် စစ်ဆေးသည်
- Enhance က SSL provisioning ကို အလိုအလျောက် လုပ်ဆောင်သောကြောင့် manual SSL configuration မလိုအပ်ပါ

## Setup စစ်ဆေးခြင်း

### Connection စမ်းသပ်ခြင်း

1. Integration Wizard တွင် **Test Connection** အဆင့်ကို အသုံးပြုပါ
2. Plugin က သင့် server ရှိ domains များကို စာရင်းပြုစုရန် ကြိုးစားမည်
3. Success message က အောက်ပါတို့ကို အတည်ပြုသည်:
   - API credentials မှန်ကန်သည်
   - API URL ဝင်ရောက်နိုင်သည်
   - Server ID မှန်ကန်သည်
   - Permissions မှန်ကန်စွာ သတ်မှတ်ထားသည်

### Domain Map လုပ်ပြီးနောက်

1. Ultimate Multisite တွင် test domain တစ်ခု map လုပ်ပါ
2. Ultimate Multisite logs ကို စစ်ဆေးပါ (**Ultimate Multisite** > **Logs** > **integration-enhance**)
3. Enhance Control Panel တွင် domain ထည့်ပြီးကြောင်း verify လုပ်ပါ:
   - **Servers** > **Your Server** > **Domains** သို့ သွားပါ
   - Domain အသစ် စာရင်းထဲတွင် ပေါ်နေရမည်
4. DNS propagate ဖြစ်ပြီးသည်နှင့် SSL အလိုအလျောက် provision ဖြစ်ကြောင်း verify လုပ်ပါ

## ပြဿနာဖြေရှင်းခြင်း

### API Connection ပြဿနာများ

**Error: "Failed to connect to Enhance API"**
- `WU_ENHANCE_API_URL` တွင် အဆုံးမှာ `/api/` ပါကြောင်း verify လုပ်ပါ
- HTTP မဟုတ်ဘဲ HTTPS အသုံးပြုကြောင်း သေချာပါစေ
- Enhance panel ကို သင့် WordPress server မှ ဝင်ရောက်နိုင်ကြောင်း စစ်ဆေးပါ
- Connection ကို block လုပ်နေသော firewall rules မရှိကြောင်း verify လုပ်ပါ

**Error: "Enhance API Token not found"**
- `WU_ENHANCE_API_TOKEN` ကို `wp-config.php` တွင် define လုပ်ထားကြောင်း သေချာပါစေ
- Token ကို Enhance တွင် ဖျက်ထားခြင်း သို့မဟုတ် သက်တမ်းကုန်ထားခြင်း မရှိကြောင်း verify လုပ်ပါ
- Token value တွင် typos ရှိမရှိ စစ်ဆေးပါ

**Error: "Server ID is not configured"**
- `WU_ENHANCE_SERVER_ID` ကို `wp-config.php` တွင် define လုပ်ထားကြောင်း verify လုပ်ပါ
- Server ID သည် valid UUID format ဖြစ်ကြောင်း သေချာပါစေ
- Server သည် သင့် Enhance panel တွင် ရှိကြောင်း confirm လုပ်ပါ

### Domain မထည့်နိုင်ခြင်း

**Logs ကို စစ်ဆေးပါ:**
1. **Ultimate Multisite** > **Logs** သို့ သွားပါ
2. **integration-enhance** ဖြင့် filter လုပ်ပါ
3. ပြဿနာကို ညွှန်ပြသော error messages များ ရှာပါ

**ဖြစ်လေ့ဖြစ်ထ အကြောင်းရင်းများ:**
- မမှန်ကန်သော domain name format
- Domain သည် Enhance တွင် ရှိနှင့်ပြီးဖြစ်ခြင်း
- API permissions မလုံလောက်ခြင်း (token တွင် System Administrator role ရှိကြောင်း သေချာပါစေ)
- Server ID သည် Enhance ရှိ အစစ်အမှန် server နှင့် မကိုက်ညီခြင်း

### SSL Certificate ပြဿနာများ

**SSL provision မဖြစ်ခြင်း:**
- DNS က သင့် server ၏ IP address သို့ point လုပ်ထားကြောင်း verify လုပ်ပါ
- Domain မှန်ကန်စွာ resolve ဖြစ်ကြောင်း စစ်ဆေးပါ: `nslookup yourdomain.com`
- Enhance သည် SSL provision မလုပ်မီ DNS resolve ဖြစ်ရန် လိုအပ်သည်
- SSL provisioning သည် DNS propagation ပြီးနောက် ပုံမှန်အားဖြင့် 5-10 minutes ကြာသည်
- SSL-specific errors များအတွက် Enhance Control Panel logs ကို စစ်ဆေးပါ

**Enhance တွင် Manual SSL troubleshooting:**
1. **Servers** > **Your Server** > **Domains** သို့ သွားပါ
2. သင့် domain ကို ရှာပြီး ၎င်း၏ SSL status ကို စစ်ဆေးပါ
3. လိုအပ်ပါက SSL provisioning ကို manually trigger လုပ်နိုင်သည်

### DNS Check Interval

Domains သို့မဟုတ် SSL certificates များ active ဖြစ်ရန် အချိန်ကြာလွန်းပါက:
1. **Ultimate Multisite** > **Settings** > **Domain Mapping** သို့ သွားပါ
2. **DNS Check Interval** setting ကို ရှာပါ
3. Default 300 seconds မှ ပိုနည်းသော value သို့ ချိန်ညှိပါ (အနည်းဆုံး: 10 seconds)
4. **မှတ်ချက်:** Interval နည်းလေ စစ်ဆေးမှုများလေ ဖြစ်သော်လည်း server load ပိုများသည်

### Authentication Errors

**HTTP 401/403 errors:**
- Enhance တွင် သင့် API token ကို ပြန်လည်ထုတ်ပါ
- Token တွင် **System Administrator** role ရှိကြောင်း verify လုပ်ပါ
- Token သက်တမ်းမကုန်ကြောင်း စစ်ဆေးပါ
- မှန်ကန်သော Organization ID အသုံးပြုကြောင်း သေချာပါစေ (URL တွင် ပုံမှန်အားဖြင့် မလိုအပ်သော်လည်း)

### Log Analysis

Detailed logging ဖွင့်ခြင်း:
```php
// Enhanced debugging အတွက် wp-config.php သို့ ထည့်ပါ
define('WP_DEBUG', true);
define('WP_DEBUG_LOG', true);
```

ထို့နောက် logs များကို ဤနေရာတွင် စစ်ဆေးပါ:
- Ultimate Multisite logs: **Ultimate Multisite** > **Logs**
- WordPress debug log: `wp-content/debug.log`
- Enhance panel logs: Enhance ၏ admin interface တွင် ရရှိနိုင်သည်

## API Reference

### Authentication
API requests အားလုံးသည် Bearer token authentication အသုံးပြုသည်:
```
Authorization: Bearer YOUR_TOKEN_HERE
```

### အသုံးပြုသော Common Endpoints များ

**Servers စာရင်း:**
```
GET /servers
```

**Server တစ်ခုရှိ Domains စာရင်း:**
```
GET /servers/{server_id}/domains
```

**Domain ထည့်ခြင်း:**
```
POST /servers/{server_id}/domains
Body: {"domain": "example.com"}
```

**Domain ဖျက်ခြင်း:**
```
DELETE /servers/{server_id}/domains/{domain_id}
```

### API Documentation အပြည့်အစုံ
API documentation အပြည့်အစုံ: [https://apidocs.enhance.com](https://apidocs.enhance.com)

## အကောင်းဆုံး လုပ်ထုံးလုပ်နည်းများ

### လုံခြုံရေး
- **API tokens များကို version control သို့ commit မလုပ်ပါနှင့်**
- Tokens များကို Git မှ exclude ထားသင့်သော `wp-config.php` တွင် သိမ်းဆည်းပါ
- သင့်တော်သော permissions ရှိသော tokens အသုံးပြုပါ (full integration အတွက် System Administrator)
- Production environments များအတွက် token expiry dates သတ်မှတ်ပါ
- Tokens များကို ပုံမှန် rotate လုပ်ပါ

### Performance
- အလွန်အကျွံ API calls ရှောင်ရှားရန် default DNS check interval (300 seconds) အသုံးပြုပါ
- Large-scale domain operations လုပ်ဆောင်သောအခါ Enhance server resources ကို monitor လုပ်ပါ
- Domains အများအပြား တစ်ပြိုင်နက် map လုပ်ပါက stagger လုပ်ရန် စဉ်းစားပါ

### Monitoring
- Integration errors များအတွက် Ultimate Multisite logs ကို ပုံမှန် စစ်ဆေးပါ
- Failed domain additions များအတွက် monitoring setup လုပ်ပါ
- SSL certificates များ မှန်ကန်စွာ provision ဖြစ်ကြောင်း verify လုပ်ပါ
- Enhance server capacity နှင့် domain limits ကို စောင့်ကြည့်ပါ

## နောက်ထပ် အရင်းအမြစ်များ

- **Enhance Official Documentation:** [https://enhance.com/docs](https://enhance.com/docs)
- **Enhance API Documentation:** [https://apidocs.enhance.com](https://apidocs.enhance.com)
- **Enhance Community Forum:** [https://community.enhance.com](https://community.enhance.com)
- **GitHub Discussion:** [Issue #265 - Enhance Integration Tips](https://github.com/Multisite-Ultimate/ultimate-multisite/discussions/265)
- **Ultimate Multisite Domain Mapping Guide:** wiki page "How to Configure Domain Mapping v2" ကို ကြည့်ပါ

## Support

ပြဿနာများ ကြုံတွေ့ပါက:
1. အထက်ပါ Troubleshooting section ကို စစ်ဆေးပါ
2. Ultimate Multisite logs ကို ပြန်လည်သုံးသပ်ပါ
3. [GitHub Discussions](https://github.com/Multisite-Ultimate/ultimate-multisite/discussions) ကို ဆွေးနွေးပါ
4. Panel-specific ပြဿနာများအတွက် Enhance support ကို ဆက်သွယ်ပါ
5. Community အကူအညီအတွက် detailed error logs များနှင့်အတူ discussion အသစ် ဖန်တီးပါ

## မှတ်ချက်များ

- ဤ integration သည် domain aliases များကိုသာ handle လုပ်သည်; Enhance က SSL ကို အလိုအလျောက် စီမံခန့်ခွဲသည်
- Integration သည် custom domain mappings နှင့် subdomain-based sites နှစ်ခုလုံးကို ပံ့ပိုးသည်
- Automatic www subdomain creation ကို Domain Mapping settings တွင် configure လုပ်နိုင်သည်
- Enhance သည် လက်ရှိတွင် Apache configurations ကို ပံ့ပိုးသည် (LiteSpeed Enterprise ရရှိနိုင်သည်)
- Ultimate Multisite မှ Domain removal သည် Enhance မှ domain ကို ဖယ်ရှားမည်ဖြစ်သော်လည်း ဆက်စပ် SSL certificates များကို ချက်ချင်း ဖျက်မည် မဟုတ်ပါ
