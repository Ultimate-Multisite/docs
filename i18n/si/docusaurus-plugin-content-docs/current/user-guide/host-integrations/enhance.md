---
title: පාලන පැනලය ඒකාබද්ධ කිරීම වැඩිදියුණු කරන්න
sidebar_position: 2
_i18n_hash: 2b4047e6b7b32a1c96a0b562e251cbfb
---
# Control Panel එක සමඟ සම්බන්ධතාවය වැඩි දියුණු කිරීම

## දළ විශ්ලේෂණය (Overview)
Enhance කියන්නේ බලවත් hosting automation සහ management හැකියාවන් ලබා දෙන නවීන control panel එකක්. මේ සම්බන්ධතාවය නිසා Ultimate Multisite සහ Enhance Control Panel අතර automatic domain syncing සහ SSL certificate management පහසු වෙනවා.

**සම්බන්ධිත සාකච්ඡාව:** ප්‍රජා උපදෙස් සහ අමතර තොරතුරු සඳහා [GitHub Discussion #265](https://github.com/Multisite-Ultimate/ultimate-multisite/discussions/265) බලන්න.

## විශේෂාංග (Features)
- Ultimate Multisite එකේ domain mapping කර ඇති විට automatic domain syncing වීම.
- DNS resolve වූ විට LetsEncrypt හරහා automatic SSL certificate ලබා ගැනීම.
- subdomain mode වල ක්‍රියාත්මක වන ජාල සඳහා subdomain support ලැබීම.
- mappings මකා දැමූ විට domain ඉවත් කිරීම.
- API credentials තහවුරු කිරීමට connection testing කිරීම.

## අවශ්‍යතා (Requirements)

### පද්ධති අවශ්‍යතා (System Requirements)
- Enhance Control Panel ස්ථාපනය කර තිබිය යුතුය.
- WordPress Multisite එක Enhance සර්වර් එකේ හෝ එයට සම්බන්ධ කර ස්ථානගත කර තිබිය යුතුය.
- Apache web server (Enhance දැනට Apache configurations වලට සහාය දක්වයි; LiteSpeed Enterprise අඩු මිලකට ලබා ගත හැක).

### API ප්‍රවේශය (API Access)
API tokens නිර්මාණය කිරීමට Enhance Control Panel හි administrator access ඔබ සතු විය යුතුය.

## ඔබේ API Credentials ලබා ගැනීම (Getting Your API Credentials)

### 1. API Token එකක් නිර්මාණය කිරීම (Create an API Token)

1. Administrator ලෙස ඔබේ Enhance Control Panel එකට ලොග් වන්න.
2. navigation menu එකේ **Settings** මත ක්ලික් කරන්න.
3. **Access Tokens** වෙත යන්න.
4. **Create Token** මත ක්ලික් කරන්න.
5. ටෝකනයට විස්තරාත්මක නමක් දෙන්න (උදා: "Ultimate Multisite Integration").
6. **System Administrator** භූමිකාව (role) පවරන්න.
7. කාලය අවසන් වීමේ දිනය සඳහා:
   - ටෝකනය කිසිවිටෙක අවසන් නොවිය යුතු නම් හිස් තබා ගන්න.
   - නැතහොත් ආරක්ෂාව සඳහා නිශ්චිත කාලයක් නියම කරන්න.
8. **Create** මත ක්ලික් කරන්න.

உருவாக்கிய பிறகு, உங்கள் **Access Token** மற்றும் **Organization ID** காண்பிக்கப்படும். இந்த டோக்கனை உடனடியாக சேமித்து வைக்கவும், ஏனெனில் இது ஒருமுறை மட்டுமே காட்டப்படும்.

### 2. உங்கள் Organization ID ஐ பெறுதல்

Organization ID என்பது "Org ID: {your_id}" என்று பெயரிடப்பட்ட நீல தகவல் பெட்டியில் Access Tokens பக்கத்தில் காட்டப்படும்.

Organization ID என்பது பின்வரும் வடிவத்தில் உள்ள UUID ஆகும்: `d8554b6d-5d0d-6719-009b-fec1189aa8f3`

கணவர் Organization ID ஐ நீங்கள் பின்வருமாறு காணலாம்:
1. **Customers** பக்கத்திற்குச் செல்லவும்
2. தொடர்புடைய வாடிக்கையாளருக்கான **Manage customer** என்பதைக் கிளிக் செய்யவும்
3. URL-ஐப் பார்க்கவும் - `/customers/` க்குப் பிறகு உள்ள எழுத்துக்களே Organization ID ஆகும்.

### 3. உங்கள் Server ID ஐ பெறுதல்

உங்கள் Server ID (டொமைன் செயல்பாடுகளுக்குத் தேவை) ஐக் கண்டறிய:

1. Enhance Control Panel இல், **Servers** என்பதற்குச் செல்லவும்
2. உங்கள் WordPress நிறுவல் இயங்கும் சர்வரில் கிளிக் செய்யவும்
3. URL அல்லது சர்வர் விவரங்களில் Server ID (UUID வடிவம்) தெரியும்
4. மாற்று வழியாக, சர்வர்களைப் பட்டியலிட API ஐப் பயன்படுத்தலாம்:

```bash
curl -s -X GET https://your-enhance-panel.com/api/servers \
  -H "Accept: application/json" \
  -H "Authorization: Bearer YOUR_TOKEN" | jq
```

சர்வர் ID பின்வரும் UUID வடிவத்தைப் பின்பற்றுகிறது: `00000000-0000-0000-0000-000000000000`

### 4. உங்கள் API URL ஐப் பெறுதல்

உங்கள் API URL என்பது `/api/` உடன் இணைக்கப்பட்ட உங்கள் Enhance Control Panel URL ஆகும்:

```
https://your-enhance-panel.com/api/
```

**முக்கியமானது:** `/api/` பாதை தேவை. பொதுவான தவறுகள் பின்வருமாறு:
- `/api/` இல்லாமல் வெறும் டொமைனைப் பயன்படுத்துதல்
- பாதுகாப்பிற்காக HTTPS க்கு பதிலாக HTTP ஐப் பயன்படுத்துதல் (பாதுகாப்புக்கு HTTPS அவசியம்)

## உள்ளமைவு (Configuration)

### தேவையான மாறிலிகள் (Required Constants)

பின்வரும் மாறிலிகளை உங்கள் `wp-config.php` கோப்பில் சேர்க்கவும்:

// Control Panel එකේ ඒකාබද්ධතාව වැඩි දියුණු කිරීම සඳහා
define('WU_ENHANCE_API_TOKEN', 'ඔබේ-bearer-token-මෙහි-ඇතුළත් කරන්න');
define('WU_ENHANCE_API_URL', 'https://your-enhance-panel.com/api/');
define('WU_ENHANCE_SERVER_ID', 'ඔබේ-server-uuid-මෙහි-ඇතුළත් කරන්න');

### Integration Wizard හරහා සැකසීම

1. ඔබේ WordPress admin එකට ගොස් **Ultimate Multisite** > **Settings** වෙත යන්න.
2. **Integrations** ටැබයට යන්න.
3. **Enhance Control Panel Integration** සොයා **Configuration** ක්ලික් කරන්න.
4. විස්තරාත්මක මඟ පෙන්වීමක් (wizard) ඔබට සැකසීම සඳහා මග පෙන්වනු ඇත:
   - **පියවර 1:** හැඳින්වීම සහ විශේෂාංග පිළිබඳ දළ විශ්ලේෂණය.
   - **පියවර 2:** ඔබේ API විස්තර ඇතුළත් කරන්න (Token, API URL, Server ID).
   - **පියවර 3:** සම්බන්ධතාවය පරීක්ෂා කරන්න.
   - **පියවර 4:** සමාලෝචනය කර සක්‍රීය කරන්න.

ඔබට තෝරාගත හැක්කේ:
- විස්තරාත්මක මඟ පෙන්වීම (wizard) විසින් ස්වයංක්‍රීයව ඔබේ `wp-config.php` ගොනුව තුළ constant වලට ඇතුළත් කිරීමට ඉඩ දීම.
- constant නිර්වචන පිටපත් කර ඒවා අතින් එකතු කිරීම.

## අමතර WordPress සැකසුම්

සමාජ ප්‍රජාවෙන් ලැබුණු ප්‍රතිපෝෂණ ([Discussion #265](https://github.com/Multisite-Ultimate/ultimate-multisite/discussions/265)) මත පදනම්ව, ඔබට මෙම අමතර සැකසුම් වින්‍යාස කිරීමට අවශ්‍ය විය හැකිය:

### .htaccess වින්‍යාසය

ඔබට ડોමේන් මැප කිරීමේදී ගැටළු ඇති වුවහොත්:
1. මුල් Enhance `.htaccess` ගොනුව මකා දමන්න.
2. එය සම්මත WordPress Multisite `.htaccess` ගොනුව සමඟ ප්‍රතිස්ථාපනය කරන්න.

### Cookie Constants

මැප කරන ලද ડોමේන් හරහා නිසි cookie හැසිරවීම සහතික කිරීම සඳහා මෙම constant `wp-config.php` වෙත එක් කරන්න:

```php
define('COOKIE_DOMAIN', $_SERVER['HTTP_HOST']);
define('COOKIEPATH', '/');
define('ADMIN_COOKIE_PATH', '/');
```

## එය ක්‍රියා කරන ආකාරය

### ડોමේනයක් මැප කරන විට

1. Ultimate Multisite එකේ පරිශීලකයෙක් කස්ටම් ડોමේනයක් මගින් මැප් කරනවා (හෝ subdomain mode එකෙන් අලුත් වෙබ් අඩවියක් නිර්මාණය කරනවා)
2. ඒ ඒකාබද්ධතාවය Enhance API එකට POST request එකක් යවනවා: `/servers/{server_id}/domains`
3. Enhance ඔබේ සේවාදායකයේ (server configuration) එම ડોමේනය එකතු කරනවා
4. DNS එක ඔබේ සේවාදායකයට විසර්ජන වූ විට, Enhance ස්වයංක්‍රීයව LetsEncrypt හරහා SSL සහතිකයක් ලබා දෙනවා
5. එම ડોමේනය HTTPS සමඟ ක්‍රියාත්මක වෙනවා

### ડોමේනයක් ඉවත් කිරීමේදී (When a Domain is Removed)

1. Ultimate Multisite එකේ ડોමේන් මැප කිරීම මකා දැමීම සිදු කරනවා
2. ඒ ඒකාබද්ධතාවය Enhance වෙත විමසීම් කරලා එම ડોමේනයේ ID සොයා ගන්නවා
3. `/servers/{server_id}/domains/{domain_id}` වෙත DELETE request එකක් යවනවා
4. Enhance ඔබේ සේවාදායකයේ (server configuration) සිට එම ડોමේනය ඉවත් කරනවා

### DNS සහ SSL පරීක්ෂා කිරීම (DNS and SSL Checking)

Ultimate Multisite වලටම අන්තර්ගතව ඇති built-in DNS සහ SSL පරීක්ෂණ පහත දැක්වේ:
- **Domain Mapping Settings** තුළ පරීක්ෂණ කාලපරිච්ඡේදය (check interval) ඔබට සකස් කළ හැකියි (අවසාන සැකසුම: තත්පර 300 / මිනිත්තු 5).
- අඩවිය ක්‍රියාත්මක කිරීමට පෙර DNS ප්‍රචාරණය (propagation) නිවැරදි දැයි පද්ධතිය විසින් පරීක්ෂා කරයි.
- SSL සහතිකයේ වලංගුභාවය ස්වයංක්‍රීයව පරීක්ෂා කෙරේ.
- Enhance මගින් SSL සැපයුම ස්වයංක්‍රීයව සිදු කරන බැවින්, අතින් SSL වින්‍යාස කිරීම අවශ්‍ය නොවේ.

## සැකසුම තහවුරු කිරීම (Verifying Setup)

### සම්බන්ධතාවය පරීක්ෂා කිරීම (Test the Connection)

1. Integration Wizard එකේදී, **Test Connection** පියවර භාවිතා කරන්න
2. එම plugin මගින් ඔබේ සේවාදායකයේ ඇති ડોමේන් ලැයිස්තුවක් ගැනීමට උත්සාහ කරයි
3. සාර්ථක බව තහවුරු කරන පණිවිඩයක් ලැබෙනු ඇත:
   - API credentials නිවැරදි වේ
   - API URL වෙත ප්‍රවේශ විය හැකිය
   - Server ID වලංගු වේ
   - අවසරයන් (Permissions) නිසි ලෙස සකසා ඇත

### ડોමේනයක් මැප් කිරීමෙන් පසු (After Mapping a Domain)

1. Ultimate Multisite එකේ පරීක්ෂණ ડોමේනයක් (test domain) මැප් කරන්න
2. Ultimate Multisite logs බලන්න (**Ultimate Multisite** > **Logs** > **integration-enhance**)
3. Enhance Control Panel එකේ එම ડોමේනය එකතු වී ඇත්දැයි තහවුරු කරන්න:
   - **Servers** > **Your Server** > **Domains** වෙත යන්න
   - නව ડોමේනය ලැයිස්තුවේ දිස්විය යුතුය
4. DNS ප්‍රචාරණය වූ පසු, SSL ස්වයංක්‍රීයව සැපයුම සිදු වී ඇත්දැයි පරීක්ෂා කරන්න

## ගැටළු විසඳීම (Troubleshooting)

### API සම්බන්ධතා ගැටළු (API Connection Issues)

**දෝෂය: "Enhance API වෙත සම්බන්ධ වීමට අපොහොසන්" ("Failed to connect to Enhance API")**
- `WU_ENHANCE_API_URL` එකේ අවසානයේ `/api/` තිබේදැයි පරීක්ෂා කරන්න.
- HTTP වෙනුවට HTTPS භාවිතා කරන බව තහවුරු කර ගන්න.
- ඔබේ WordPress සර්වර් එකෙන් Enhance පැනලය වෙත ප්‍රවේශ විය හැකිදැයි බලන්න.
- සම්බන්ධතාවය අවහිර කරන firewall නීති (firewall rules) නොමැති බව තහවුරු කරන්න.

**දෝෂය: "Enhance API ටෝකනය සොයාගත නොහැක" ("Enhance API Token not found")**
- `wp-config.php` ගොනුවේ `WU_ENHANCE_API_TOKEN` නිවැරදිව නිර්වචනය කර ඇත්දැයි බලන්න.
- Enhance තුළ ටෝකනය මකා දැමූ එකක් හෝ කාලය අවසන් වූ එකක් නොමැති බව තහවුරු කරන්න.
- ටෝකනයේ අගයේ වචන වැරදි (typos) තිබේදැයි පරීක්ෂා කරන්න.

**දෝෂය: "සේවා ID සකසා නැත" ("Server ID is not configured")**
- `wp-config.php` ගොනුවේ `WU_ENHANCE_SERVER_ID` නිවැරදිව නිර්වචනය කර ඇත්දැයි බලන්න.
- Server ID එක වලංගු UUID ආකෘතියක් (format) බව තහවුරු කරන්න.
- ඔබේ Enhance පැනලයේ සර්වර් එක තිබේදැයි තහවුරු කරන්න.

### ડોමේන් එක නොඑන විට (Domain Not Added)

**Logs පරීක්ෂා කරන්න:**
1. **Ultimate Multisite** > **Logs** වෙත යන්න.
2. **integration-enhance** ලෙස පෙරහනය (Filter) කරන්න.
3. ගැටලුව පෙන්නුම් කරන දෝෂ පණිවිඩ සොයන්න.

**පොදු හේතු:**
- වලංගු නොවන ડોමේන් නාම ආකෘතියක් (Invalid domain name format).
- Enhance තුළ දැනටමත් එම ડોමේනය තිබීම.
- API අවසර ප්‍රමාණවත් නොවීම (token එකට System Administrator භූමිකාව ඇත්දැයි තහවුරු කරන්න).
- සර්වර් ID එක Enhance හි ඇති සැබෑ සර්වර් එකට ගැලපෙන්නේ නැති වීම.

### SSL සහතික ගැටළු (SSL Certificate Issues)

**SSL ලබා නොගැනීම:**
- DNS ඔබේ සර්වර් IP ලිපිනයට යොමු වී තිබේදැයි පරීක්ෂා කරන්න.
- ડોමේනය නිවැරදිව විසඳෙන්නේදැයි බලන්න: `nslookup yourdomain.com`
- SSL ලබා දීමට පෙර DNS විසඳා ගැනීමට Enhance අවශ්‍ය වේ.
- DNS ප්‍රචාරණය (propagation) අවසන් වූ පසු සාමාන්‍යයෙන් මිනිත්තු 5-10ක් ගතවේ.
- SSL සම්බන්ධ විශේෂිත දෝෂ සඳහා Enhance Control Panel logs පරීක්ෂා කරන්න.

**Enhance තුළ අතින් SSL ගැටළු විසඳීම:**
1. **Servers** > **Your Server** > **Domains** වෙත යන්න.
2. ඔබේ ડોමේනය සොයා එහි SSL තත්ත්වය (status) පරීක්ෂා කරන්න.
3. අවශ්‍ය නම් ඔබට SSL ලබා දීම අතින් ක්‍රියාත්මක කළ හැකිය.

### DNS පරීක්ෂණ කාලපරිච්ඡේදය (DNS Check Interval)

डोमेन বা SSL সার্টিফিকেট সক্রিয় হতে বেশি সময় নিলে:
১. **Ultimate Multisite** > **Settings** > **Domain Mapping** এ যান।
২. **DNS Check Interval** সেটিংসটি খুঁজুন।
৩. ডিফল্ট ৩০০ সেকেন্ড থেকে এটিকে একটি কম মান (ন্যূনতম: ১০ সেকেন্ড) এ পরিবর্তন করুন।
৪. **দ্রষ্টব্য:** কম ইন্টারভ্যাল মানে ঘন ঘন চেক হবে কিন্তু সার্ভারের লোড বেশি হতে পারে।

### প্রমাণীকরণ ত্রুটি (Authentication Errors)

**HTTP 401/403 ত্রুটি:**
- Enhance-এ আপনার API টোকেনটি পুনরায় তৈরি করুন।
- নিশ্চিত করুন যে টোকেনটিতে **System Administrator** ভূমিকা আছে।
- পরীক্ষা করুন যে টোকেনটি মেয়াদ উত্তীর্ণ হয়নি।
- সঠিক Organization ID ব্যবহার করছেন কিনা তা নিশ্চিত করুন (যদিও এটি সাধারণত URL-এ প্রয়োজন হয় না)।

### লগ বিশ্লেষণ (Log Analysis)

বিস্তারিত লগ চালু করুন:
```php
// উন্নত ডিবাগিংয়ের জন্য wp-config.php এ যোগ করুন
define('WP_DEBUG', true);
define('WP_DEBUG_LOG', true);
```

তারপর নিম্নলিখিত জায়গায় লগগুলো পরীক্ষা করুন:
- Ultimate Multisite লগ: **Ultimate Multisite** > **Logs**
- WordPress ডিবাগ লগ: `wp-content/debug.log`
- Enhance প্যানেল লগ: Enhanc-এর অ্যাডমিন ইন্টারফেসে উপলব্ধ।

## API রেফারেন্স (API Reference)

### প্রমাণীকরণ (Authentication)
সমস্ত API অনুরোধে Bearer টোকেন প্রমাণীকরণ ব্যবহার করা হয়:
```
Authorization: Bearer YOUR_TOKEN_HERE
```

### ব্যবহৃত সাধারণ এন্ডপয়েন্টসমূহ (Common Endpoints Used)

**সার্ভার তালিকাভুক্ত করা:**
```
GET /servers
```

**একটি সার্ভারে ডোমেইন তালিকাভুক্ত করা:**
```
GET /servers/{server_id}/domains
```

**একটি ডোমেইন যোগ করা:**
```
POST /servers/{server_id}/domains
Body: {"domain": "example.com"}
```

**একটি ডোমেইন মুছে ফেলা:**
```
DELETE /servers/{server_id}/domains/{domain_id}
```

### সম্পূর্ণ API ডকুমেন্টেশন (Full API Documentation)
সম্পূর্ণ API ডকুমেন্টেশন: [https://apidocs.enhance.com](https://apidocs.enhance.com)

## সেরা অনুশীলনসমূহ (Best Practices)

### ආරක්ෂාව (Security)
- **API ටෝකන් කිසිවිටෙක version control එකට commit කරන්න එපා**
- ටෝකන් දාන්නේ `wp-config.php` වල, ඒක Git එකෙන් අයින් කරලා තියන්න ඕනේ
- නිවැරදි අවසරයන් සහිත ටෝකන් භාවිතා කරන්න (සම්පූර්ණ ඒකාබද්ධ කිරීම සඳහා System Administrator)
- ප්‍රො덕션 පරිසරයන් සඳහා ටෝකන් වල කාලය අවසන් වීමේ දිනයන් සකසන්න
- ටෝකන් නිරන්තරයෙන් වෙනස් කරන්න

### කාර්ය සාධනය (Performance)
- API ඇමතුම් අධික වීම වැළැක්වීම සඳහා පෙරනිමි DNS පරීක්ෂණ කාලපරිච්ඡේදය (තත්පර 300) භාවිතා කරන්න
- විශාල පරිමාණයේ ડોමේන් මෙහෙයුම් සිදු කරන විට Enhance සේවාදායක සම්පත් නිරීක්ෂණය කරන්න
- එකවර බොහෝ ડોමේන් මූලික කිරීම ගැන සලකා බලන්න

### අධීක්ෂණය (Monitoring)
- ඒකාබද්ධ කිරීමේ දෝෂ සඳහා Ultimate Multisite logs නිතර පරීක්ෂා කරන්න
- අසාර්ථක වූ ડોමේන් එකතු කිරීම් සඳහා අධීක්ෂණයක් සකසන්න
- SSL සහතික නිවැරදිව සැපයෙමින් පවතින බව තහවුරු කරන්න
- Enhance සේවාදායක ධාරිතාව සහ ડોමේන් සීමාවන් නිරීක්ෂණය කරන්න

## අමතර සම්පත් (Additional Resources)

- **Enhance නිල ලේඛන:** [https://enhance.com/docs](https://enhance.com/docs)
- **Enhance API ලේඛන:** [https://apidocs.enhance.com](https://apidocs.enhance.com)
- **Enhance ප්‍රජා සංසදනය (Community Forum):** [https://community.enhance.com](https://community.enhance.com)
- **GitHub සාකච්ඡාව:** [Issue #265 - Enhance Integration Tips](https://github.com/Multisite-Ultimate/ultimate-multisite/discussions/265)
- **Ultimate Multisite ડોමේන් සිතියම් මාර්ගෝපදේශය:** "How to Configure Domain Mapping v2" යන wiki පිටුව බලන්න

## සහාය (Support)

ඔබට ගැටළු ඇති වුවහොත්:
1. ඉහත Troubleshooting කොටස පරීක්ෂා කරන්න
2. Ultimate Multisite logs සමාලෝචනය කරන්න
3. [GitHub Discussions](https://github.com/Multisite-Ultimate/ultimate-multisite/discussions) වෙත යොමු වන්න
4. පැනලය (panel) සම්බන්ධ ගැටළු සඳහා Enhance support අමතන්න
5. ප්‍රජා සහාය සඳහා විස්තරාත්මක දෝෂ ලොග් සමඟ නව සාකච්ඡාවක් ආරම්භ කරන්න

## සටහන් (Notes)

මෙම ඒකාබද්ධතාවය ડોමේන් ඇලීස් පමණක් හැසිරවයි; SSL ස්වයංක්‍රීයව කළමනාකරණය කරයි.
මෙම ඒකාබද්ධතාවය කස්ටම් ડોමේන් මැප් කිරීම් සහ උප-โดเมන් මත පදනම් වූ වෙබ් අඩවි දෙකම සඳහා සහාය වේ.
ස්වයංක්‍රීය www උප-โดเมන් නිර්මාණය කළ හැක්කේ Domain Mapping සැකසුම් තුළින් වින්‍යාස කළ හැකිය.
Enhance දැනට Apache වින්‍යාසයන් (LiteSpeed Enterprise ලබා ගත හැක) සඳහා සහාය දක්වයි.
Ultimate Multisite වෙතින් ડોමේනය ඉවත් කිරීමෙන් Enhance වෙතින් එම ડોමේනය ඉවත් කරනු ලැබේ, නමුත් අදාළ SSL සහතික ඉක්මනින් මකා දැමීමට නොහැකි විය හැකිය.
