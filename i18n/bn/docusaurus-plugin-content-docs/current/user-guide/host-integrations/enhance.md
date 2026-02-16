---
title: কন্ট্রোল প্যানেল ইন্টিগ্রেশন উন্নত করুন
sidebar_position: 2
_i18n_hash: 2b4047e6b7b32a1c96a0b562e251cbfb
---
# Enhance Control Panel ইন্টিগ্রেশন

## সংক্ষিপ্ত বিবরণ
Enhance হলো একটি আধুনিক control panel যা শক্তিশালী হোস্টিং অটোমেশন এবং ম্যানেজমেন্ট সুবিধা প্রদান করে। এই ইন্টিগ্রেশন Ultimate Multisite এবং Enhance Control Panel-এর মধ্যে স্বয়ংক্রিয় domain syncing এবং SSL certificate ব্যবস্থাপনা সক্ষম করে।

**সম্পর্কিত আলোচনা:** কমিউনিটি টিপস এবং অতিরিক্ত তথ্যের জন্য [GitHub Discussion #265](https://github.com/Multisite-Ultimate/ultimate-multisite/discussions/265) দেখুন।

## বৈশিষ্ট্যসমূহ
- Ultimate Multisite-এ domain map করার সময় স্বয়ংক্রিয় domain syncing
- DNS resolve হলে LetsEncrypt-এর মাধ্যমে স্বয়ংক্রিয় SSL certificate প্রভিশনিং
- Subdomain মোডে চলমান network-গুলোর জন্য subdomain সাপোর্ট
- Mapping মুছে ফেলার সময় domain সরানো
- API credentials যাচাই করতে connection testing

## প্রয়োজনীয়তা

### সিস্টেম প্রয়োজনীয়তা
- Enhance Control Panel ইনস্টল এবং অ্যাক্সেসযোগ্য থাকতে হবে
- WordPress Multisite ইনস্টলেশন Enhance server-এ হোস্ট করা বা সংযুক্ত থাকতে হবে
- Apache web server (Enhance বর্তমানে Apache configuration সাপোর্ট করে; LiteSpeed Enterprise কম খরচে পাওয়া যায়)

### API অ্যাক্সেস
API token তৈরি করতে আপনার Enhance Control Panel-এ administrator অ্যাক্সেস থাকতে হবে।

## আপনার API Credentials সংগ্রহ করা

### ১. একটি API Token তৈরি করুন

1. Administrator হিসেবে আপনার Enhance Control Panel-এ লগ ইন করুন
2. Navigation menu-তে **Settings**-এ ক্লিক করুন
3. **Access Tokens**-এ যান
4. **Create Token**-এ ক্লিক করুন
5. Token-টিকে একটি বর্ণনামূলক নাম দিন (যেমন, "Ultimate Multisite Integration")
6. **System Administrator** role নির্ধারণ করুন
7. মেয়াদ শেষের তারিখের জন্য:
   - Token-টি কখনো মেয়াদ শেষ না হোক চাইলে খালি রাখুন
   - অথবা নিরাপত্তার জন্য একটি নির্দিষ্ট মেয়াদ শেষের তারিখ সেট করুন
8. **Create**-এ ক্লিক করুন

তৈরির পরে, আপনার **Access Token** এবং **Organization ID** দেখানো হবে। **এগুলো এখনই সংরক্ষণ করুন** কারণ token শুধুমাত্র একবারই দেখানো হবে।

### ২. আপনার Organization ID পান

Organization ID টি Access Tokens পেজে "Org ID: {your_id}" লেবেলযুক্ত একটি নীল তথ্য বক্সে দেখানো হয়।

Organization ID এই ফরম্যাটে একটি UUID: `d8554b6d-5d0d-6719-009b-fec1189aa8f3`

আপনি একজন customer-এর Organization ID এভাবেও খুঁজে পেতে পারেন:
1. **Customers** পেজে যান
2. প্রাসঙ্গিক customer-এর জন্য **Manage customer**-এ ক্লিক করুন
3. URL দেখুন - `/customers/`-এর পরের alphanumeric অক্ষরগুলো হলো Organization ID

### ৩. আপনার Server ID পান

আপনার Server ID খুঁজতে (domain অপারেশনের জন্য প্রয়োজন):

1. Enhance Control Panel-এ, **Servers**-এ যান
2. যে server-এ আপনার WordPress ইনস্টলেশন চলছে সেটিতে ক্লিক করুন
3. Server ID (UUID ফরম্যাট) URL বা server details-এ দেখা যাবে
4. বিকল্পভাবে, আপনি server-এর তালিকা পেতে API ব্যবহার করতে পারেন:

```bash
curl -s -X GET https://your-enhance-panel.com/api/servers \
  -H "Accept: application/json" \
  -H "Authorization: Bearer YOUR_TOKEN" | jq
```

Server ID এই UUID ফরম্যাট অনুসরণ করে: `00000000-0000-0000-0000-000000000000`

### ৪. আপনার API URL পান

আপনার API URL হলো আপনার Enhance Control Panel URL-এর শেষে `/api/` যুক্ত:

```
https://your-enhance-panel.com/api/
```

**গুরুত্বপূর্ণ:** `/api/` path আবশ্যক। সাধারণ ভুলগুলোর মধ্যে আছে:
- `/api/` ছাড়া শুধু domain ব্যবহার করা
- HTTPS-এর বদলে HTTP ব্যবহার করা (নিরাপত্তার জন্য HTTPS আবশ্যক)

## কনফিগারেশন

### প্রয়োজনীয় Constants

আপনার `wp-config.php` ফাইলে নিম্নলিখিত constants যোগ করুন:

```php
// Enhance Control Panel Integration
define('WU_ENHANCE_API_TOKEN', 'your-bearer-token-here');
define('WU_ENHANCE_API_URL', 'https://your-enhance-panel.com/api/');
define('WU_ENHANCE_SERVER_ID', 'your-server-uuid-here');
```

### Integration Wizard-এর মাধ্যমে সেটআপ

1. আপনার WordPress admin-এ, **Ultimate Multisite** > **Settings**-এ যান
2. **Integrations** ট্যাবে যান
3. **Enhance Control Panel Integration** খুঁজুন এবং **Configuration**-এ ক্লিক করুন
4. Wizard আপনাকে সেটআপের মধ্য দিয়ে গাইড করবে:
   - **ধাপ ১:** ভূমিকা এবং বৈশিষ্ট্যের সংক্ষিপ্ত বিবরণ
   - **ধাপ ২:** আপনার API credentials দিন (Token, API URL, Server ID)
   - **ধাপ ৩:** Connection টেস্ট করুন
   - **ধাপ ৪:** পর্যালোচনা এবং সক্রিয় করুন

আপনি বেছে নিতে পারেন:
- Wizard-কে স্বয়ংক্রিয়ভাবে আপনার `wp-config.php` ফাইলে constants ইনজেক্ট করতে দিন
- Constant definitions কপি করে ম্যানুয়ালি যোগ করুন

## অতিরিক্ত WordPress কনফিগারেশন

কমিউনিটি ফিডব্যাকের ভিত্তিতে ([Discussion #265](https://github.com/Multisite-Ultimate/ultimate-multisite/discussions/265)), আপনাকে এই অতিরিক্ত সেটিংস কনফিগার করতে হতে পারে:

### .htaccess কনফিগারেশন

যদি domain mapping-এ সমস্যা হয়:
1. মূল Enhance `.htaccess` ফাইলটি মুছে ফেলুন
2. এটি স্ট্যান্ডার্ড WordPress Multisite `.htaccess` ফাইল দিয়ে প্রতিস্থাপন করুন

### Cookie Constants

Mapped domain-গুলোতে সঠিক cookie হ্যান্ডলিং নিশ্চিত করতে `wp-config.php`-এ এই constants যোগ করুন:

```php
define('COOKIE_DOMAIN', $_SERVER['HTTP_HOST']);
define('COOKIEPATH', '/');
define('ADMIN_COOKIE_PATH', '/');
```

## এটি কীভাবে কাজ করে

### যখন একটি Domain Map করা হয়

1. একজন ব্যবহারকারী Ultimate Multisite-এ একটি custom domain map করেন (অথবা subdomain মোডে একটি নতুন সাইট তৈরি হয়)
2. Integration টি Enhance-এর API-তে একটি POST request পাঠায়: `/servers/{server_id}/domains`
3. Enhance আপনার server configuration-এ domain যোগ করে
4. যখন DNS আপনার server-এ resolve হয়, Enhance স্বয়ংক্রিয়ভাবে LetsEncrypt-এর মাধ্যমে SSL certificate প্রভিশন করে
5. Domain টি HTTPS সহ সক্রিয় হয়ে যায়

### যখন একটি Domain সরানো হয়

1. Ultimate Multisite-এ একটি domain mapping মুছে ফেলা হয়
2. Integration টি domain-এর ID খুঁজতে Enhance-কে query করে
3. একটি DELETE request পাঠানো হয়: `/servers/{server_id}/domains/{domain_id}`
4. Enhance আপনার server configuration থেকে domain সরিয়ে দেয়

### DNS এবং SSL চেকিং

Ultimate Multisite-এ বিল্ট-ইন DNS এবং SSL চেকিং আছে:
- আপনি **Domain Mapping Settings**-এ check interval কনফিগার করতে পারেন (ডিফল্ট: ৩০০ সেকেন্ড/৫ মিনিট)
- সিস্টেম domain সক্রিয় হিসেবে চিহ্নিত করার আগে DNS propagation যাচাই করবে
- SSL certificate validity স্বয়ংক্রিয়ভাবে চেক করা হয়
- Enhance স্বয়ংক্রিয়ভাবে SSL প্রভিশনিং হ্যান্ডেল করে, তাই ম্যানুয়াল SSL কনফিগারেশন প্রয়োজন নেই

## সেটআপ যাচাই করা

### Connection টেস্ট করুন

1. Integration Wizard-এ, **Test Connection** ধাপ ব্যবহার করুন
2. Plugin আপনার server-এ domain-এর তালিকা দেখানোর চেষ্টা করবে
3. একটি success message নিশ্চিত করে:
   - API credentials সঠিক
   - API URL অ্যাক্সেসযোগ্য
   - Server ID বৈধ
   - Permissions সঠিকভাবে সেট করা আছে

### Domain Map করার পরে

1. Ultimate Multisite-এ একটি test domain map করুন
2. Ultimate Multisite logs চেক করুন (**Ultimate Multisite** > **Logs** > **integration-enhance**)
3. Enhance Control Panel-এ যাচাই করুন যে domain যোগ হয়েছে:
   - **Servers** > **Your Server** > **Domains**-এ যান
   - নতুন domain তালিকায় দেখা যাওয়া উচিত
4. DNS propagate হলে, যাচাই করুন SSL স্বয়ংক্রিয়ভাবে প্রভিশন হয়েছে

## সমস্যা সমাধান

### API Connection সমস্যা

**Error: "Failed to connect to Enhance API"**
- যাচাই করুন `WU_ENHANCE_API_URL`-এ শেষে `/api/` আছে
- নিশ্চিত করুন আপনি HTTP নয়, HTTPS ব্যবহার করছেন
- চেক করুন Enhance panel আপনার WordPress server থেকে অ্যাক্সেসযোগ্য কিনা
- যাচাই করুন কোনো firewall rule connection ব্লক করছে কিনা

**Error: "Enhance API Token not found"**
- নিশ্চিত করুন `WU_ENHANCE_API_TOKEN` `wp-config.php`-এ define করা আছে
- যাচাই করুন token Enhance-এ মুছে ফেলা হয়নি বা মেয়াদ শেষ হয়নি
- Token value-তে টাইপো আছে কিনা চেক করুন

**Error: "Server ID is not configured"**
- যাচাই করুন `WU_ENHANCE_SERVER_ID` `wp-config.php`-এ define করা আছে
- নিশ্চিত করুন Server ID একটি বৈধ UUID ফরম্যাটে আছে
- নিশ্চিত করুন server আপনার Enhance panel-এ বিদ্যমান

### Domain যোগ হচ্ছে না

**Logs চেক করুন:**
1. **Ultimate Multisite** > **Logs**-এ যান
2. **integration-enhance** দিয়ে ফিল্টার করুন
3. সমস্যা নির্দেশকারী error messages খুঁজুন

**সাধারণ কারণ:**
- অবৈধ domain name ফরম্যাট
- Domain ইতিমধ্যে Enhance-এ আছে
- অপর্যাপ্ত API permissions (নিশ্চিত করুন token-এ System Administrator role আছে)
- Server ID Enhance-এ প্রকৃত server-এর সাথে মিলছে না

### SSL Certificate সমস্যা

**SSL প্রভিশন হচ্ছে না:**
- যাচাই করুন DNS আপনার server-এর IP address-এ point করছে
- চেক করুন domain সঠিকভাবে resolve হচ্ছে: `nslookup yourdomain.com`
- Enhance-এ SSL প্রভিশন করার আগে DNS resolve হওয়া প্রয়োজন
- DNS propagation-এর পর SSL প্রভিশনিং সাধারণত ৫-১০ মিনিট সময় নেয়
- SSL-সম্পর্কিত errors-এর জন্য Enhance Control Panel logs চেক করুন

**Enhance-এ ম্যানুয়াল SSL সমস্যা সমাধান:**
1. **Servers** > **Your Server** > **Domains**-এ যান
2. আপনার domain খুঁজুন এবং এর SSL status চেক করুন
3. প্রয়োজনে আপনি ম্যানুয়ালি SSL প্রভিশনিং trigger করতে পারেন

### DNS Check Interval

যদি domain বা SSL certificate সক্রিয় হতে অনেক সময় লাগছে:
1. **Ultimate Multisite** > **Settings** > **Domain Mapping**-এ যান
2. **DNS Check Interval** সেটিং খুঁজুন
3. ডিফল্ট ৩০০ সেকেন্ড থেকে কম মানে পরিবর্তন করুন (সর্বনিম্ন: ১০ সেকেন্ড)
4. **নোট:** কম interval মানে বেশি ঘন ঘন চেক কিন্তু server-এ বেশি লোড

### Authentication Errors

**HTTP 401/403 errors:**
- Enhance-এ আপনার API token পুনরায় তৈরি করুন
- যাচাই করুন token-এ **System Administrator** role আছে
- চেক করুন token-এর মেয়াদ শেষ হয়নি
- নিশ্চিত করুন আপনি সঠিক Organization ID ব্যবহার করছেন (যদিও এটি সাধারণত URL-এ প্রয়োজন হয় না)

### Log বিশ্লেষণ

বিস্তারিত logging সক্রিয় করুন:
```php
// উন্নত debugging-এর জন্য wp-config.php-এ যোগ করুন
define('WP_DEBUG', true);
define('WP_DEBUG_LOG', true);
```

তারপর এখানে logs চেক করুন:
- Ultimate Multisite logs: **Ultimate Multisite** > **Logs**
- WordPress debug log: `wp-content/debug.log`
- Enhance panel logs: Enhance-এর admin interface-এ পাওয়া যায়

## API রেফারেন্স

### Authentication
সমস্ত API request Bearer token authentication ব্যবহার করে:
```
Authorization: Bearer YOUR_TOKEN_HERE
```

### সাধারণভাবে ব্যবহৃত Endpoints

**Server-এর তালিকা:**
```
GET /servers
```

**একটি Server-এ Domain-এর তালিকা:**
```
GET /servers/{server_id}/domains
```

**একটি Domain যোগ করা:**
```
POST /servers/{server_id}/domains
Body: {"domain": "example.com"}
```

**একটি Domain মুছে ফেলা:**
```
DELETE /servers/{server_id}/domains/{domain_id}
```

### সম্পূর্ণ API ডকুমেন্টেশন
সম্পূর্ণ API ডকুমেন্টেশন: [https://apidocs.enhance.com](https://apidocs.enhance.com)

## সেরা অনুশীলন

### নিরাপত্তা
- **কখনো API token version control-এ commit করবেন না**
- Token `wp-config.php`-এ সংরক্ষণ করুন যা Git থেকে বাদ রাখা উচিত
- উপযুক্ত permissions সহ token ব্যবহার করুন (সম্পূর্ণ integration-এর জন্য System Administrator)
- Production environment-এর জন্য token expiry dates সেট করুন
- নিয়মিত token rotate করুন

### পারফরম্যান্স
- অতিরিক্ত API call এড়াতে ডিফল্ট DNS check interval (৩০০ সেকেন্ড) ব্যবহার করুন
- বড় মাপের domain অপারেশন চালানোর সময় Enhance server resources মনিটর করুন
- একসাথে অনেক domain map করলে domain addition stagger করার কথা বিবেচনা করুন

### মনিটরিং
- Integration errors-এর জন্য নিয়মিত Ultimate Multisite logs চেক করুন
- ব্যর্থ domain addition-এর জন্য monitoring সেট আপ করুন
- SSL certificates সঠিকভাবে প্রভিশন হচ্ছে কিনা যাচাই করুন
- Enhance server capacity এবং domain limits-এর দিকে নজর রাখুন

## অতিরিক্ত রিসোর্স

- **Enhance অফিসিয়াল ডকুমেন্টেশন:** [https://enhance.com/docs](https://enhance.com/docs)
- **Enhance API ডকুমেন্টেশন:** [https://apidocs.enhance.com](https://apidocs.enhance.com)
- **Enhance Community Forum:** [https://community.enhance.com](https://community.enhance.com)
- **GitHub Discussion:** [Issue #265 - Enhance Integration Tips](https://github.com/Multisite-Ultimate/ultimate-multisite/discussions/265)
- **Ultimate Multisite Domain Mapping গাইড:** wiki পেজ "How to Configure Domain Mapping v2" দেখুন

## সাপোর্ট

সমস্যার সম্মুখীন হলে:
1. উপরের সমস্যা সমাধান বিভাগ চেক করুন
2. Ultimate Multisite logs পর্যালোচনা করুন
3. [GitHub Discussions](https://github.com/Multisite-Ultimate/ultimate-multisite/discussions) দেখুন
4. Panel-সম্পর্কিত সমস্যার জন্য Enhance support-এ যোগাযোগ করুন
5. কমিউনিটি সহায়তার জন্য বিস্তারিত error logs সহ একটি নতুন discussion তৈরি করুন

## নোট

- এই integration শুধুমাত্র domain aliases হ্যান্ডেল করে; Enhance স্বয়ংক্রিয়ভাবে SSL পরিচালনা করে
- Integration custom domain mapping এবং subdomain-ভিত্তিক site উভয়কে সাপোর্ট করে
- স্বয়ংক্রিয় www subdomain তৈরি Domain Mapping settings-এ কনফিগার করা যায়
- Enhance বর্তমানে Apache configuration সাপোর্ট করে (LiteSpeed Enterprise পাওয়া যায়)
- Ultimate Multisite থেকে domain সরানো হলে Enhance থেকে domain সরে যাবে কিন্তু সংশ্লিষ্ট SSL certificates সাথে সাথে মুছে নাও যেতে পারে
