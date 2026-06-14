---
title: سائبرپینل انٽيغريشن
sidebar_position: 21
_i18n_hash: d0607874b556c583dac2aaa33ba1dc1d
---
# CyberPanel Integration

هي اس گائیڈ بتاتا ہے کہ Ultimate Multisite CyberPanel integration کي ڪيئن configure ڪجي ته جيئن توهان جي network ۾ مپ ٿيل domains کي خود بخود (automatic) طور تي CyberPanel ۾ virtual hosts طور شامل (add) ۽ کين ختم (remove) ڪري سگهجي ٿو، جنهن سان Let's Encrypt جي ذريعي optional auto-SSL provisioning به ڪئي جا سگهجي ٿي.

## اهو ڇا ڪري ٿو

- جڏهن ڪنه domain کي Ultimate Multisite ۾ map ڪيو ويندو آهي، ته integration ان domain لاءِ virtual host پيدا ڪرڻ لاءِ CyberPanel API کي call ڪري ٿو.
- جڏهن ڪنه domain mapping کي ختم ڪيو ويندو آهي، ته integration ان جو corresponding virtual host delete ڪرڻ لاءِ API کي call ڪري ٿو.
- جڏهن auto-SSL enabled هجي، ته integration virtual host پيدا ٿيڻ کان فوراً Let's Encrypt certificate issuance شروع ڪري ڇڏيندو آهي.
- Domain Mapping settings ۾ توهان جي "Auto-create www subdomain" setting جي لحاظ کان `www.` alias کي optional طور تي شامل (add) يا ختم (remove) ڪري سگهجي ٿو.

## ضروري شروعاتيون (Prerequisites)

- هڪ چلند CyberPanel instance (v2.3 يا ان کان وڌيڪ سفارش ڪئي ويندي آهي) جيڪو توهان جي WordPress server کان رسائي (reachable) هجي.
- CyberPanel ۾ موجود هڪ existing website جيڪا پريشان ٿيل توهان جي WordPress network root کي خدمت ڪري رهي هجي. integration نئين virtual hosts کي هن server تي جوڙي ڇڏيندو آهي.
- CyberPanel API access enabled هجي. Authentication لاءِ توهان جو CyberPanel admin username ۽ password استعمال ڪيو ويندو.
- مپ ٿيل domains لاءِ توهان جي DNS records پنهنجي server جي IP address تي point ڪراڻ گهرجي تاهه auto-SSL هڪ valid certificate issue ڪري سگهي.

## ضرورتون (Requirements)

توهان کي `wp-config.php` فائل ۾ هي constants define ڪرڻ گهرجن:

```php
define('WU_CYBERPANEL_HOST', 'https://your-cyberpanel-host:8090');
define('WU_CYBERPANEL_USERNAME', 'your_admin_username');
define('WU_CYBERPANEL_PASSWORD', 'your_admin_password');
define('WU_CYBERPANEL_PACKAGE', 'Default');
```

اختياري طور تي، توهان هي به define ڪري سگهو ٿا:

```php
define('WU_CYBERPANEL_AUTO_SSL', true);          // Default: true — ڈومین بنانے کے بعد Let's Encrypt SSL کو فعال کریں
define('WU_CYBERPANEL_PHP_VERSION', 'PHP 8.2');  // Default: PHP 8.2
define('WU_CYBERPANEL_EMAIL', 'admin@yourdomain.com'); // SSL سرٹیفکیٹ کے رابطے کے لیے استعمال ہوتا ہے
```

## سیٹ اپ ہدایات (Setup Instructions)

### 1. CyberPanel API کو فعال کریں

1. ایڈمن کے طور پر اپنے CyberPanel ڈیش بورڈ میں لاگ ان کریں۔
2. **Security** > **SSL** پر جائیں اور تصدیق کریں کہ SSL خود CyberPanel انٹرفیس پر فعال ہے (محفوظ API کالز کے لیے ضروری)۔
3. CyberPanel API ڈیفالٹ طور پر `https://your-server-ip:8090/api/` پر دستیاب ہے۔ اسے فعال کرنے کے لیے کوئی اضافی اقدامات کی ضرورت نہیں — ایڈمن صارفین کے لیے یہ پہلے سے ہی آن ہوتا ہے۔

### 2. wp-config.php میں کنسٹنٹس شامل کریں

`/* That's all, stop editing! */` لائن سے پہلے اپنی `wp-config.php` فائل میں درج ذیل کنسٹنٹس شامل کریں۔

```php
define('WU_CYBERPANEL_HOST', 'https://your-cyberpanel-host:8090');
define('WU_CYBERPANEL_USERNAME', 'admin');
define('WU_CYBERPANEL_PASSWORD', 'your_secure_password');
define('WU_CYBERPANEL_PACKAGE', 'Default');
```

آٹو-SSL کو فعال کرنے کے لیے (تجاویز کردہ):

```php
define('WU_CYBERPANEL_AUTO_SSL', true);
define('WU_CYBERPANEL_EMAIL', 'admin@yourdomain.com');
```

### 3. انٹیگریشن کو فعال کریں

1. اپنے WordPress نیٹ ورک ایڈمن میں، **Ultimate Multisite** > **Settings** پر جائیں۔
2. **Domain Mapping** ٹیب پر جائیں۔
3. **Host Integrations** تک نیچے سکرول کریں۔
4. **CyberPanel** انٹیگریشن کو فعال (Enable) کریں۔
5. **Save Changes** پر کلک کریں۔

### 4. کنیکٹیویٹی کی تصدیق کریں

سیٹنگز ویزارد میں موجود اندرونی کنکشن ٹیسٹ کا استعمال کریں۔

1. **Ultimate Multisite** > **Settings** > **Domain Mapping** > **Host Integrations** > **CyberPanel** تي وڃو.
2. **Test Connection** تي ڪلڪ ڪريو.
3. هڪ ڪاميابجي جو پيغام ٿيندو ته ان plugin کي CyberPanel API تک رسائي ۽ صحيح طور تي تصديق (authenticate) ڪرڻ جي صلاحيت آهي.

## اهو ڪيئن کام ڪري ٿو

### Domain Mapping

جڏهن Ultimate Multisite ۾ ڪا domain مپ ڪئي ويندي آهي:

1. Integration توهان جي CyberPanel host تي `/api/createWebsite` تي هڪ `POST` request بھیجي ٿو.
2. CyberPanel ان domain لاءِ هڪ نئين virtual host کي configure ڪيل package تحت banaوندو.
3. Document root توهان جي WordPress network root directory تي پوائنٽ ڪرڻ لاءِ set ڪئي ويندي آهي.
4. جڏهن domain mapping ختم ڪئي ويندي آهي، ته integration virtual host کي صاف ڪرڻ لاءِ `/api/deleteWebsite` کي ڇاڇل ڪري ٿو.

### Auto-SSL

جڏهن `WU_CYBERPANEL_AUTO_SSL` `true` هجي:

1. Virtual host bana چون ٿيڻ کان پوءِ، integration ان domain لاءِ `/api/issueSSL` کي ڇاڇل ڪندو آهي.
2. CyberPanel ACME HTTP-01 challenge استعمال ڪري Let's Encrypt سرٽيفڪيٽ جو درخواست ڪندو آهي.
3. CyberPanel ختم ٿيڻ کان اڳ certificate کي خود بخشوده (renew) ڪري ويندو آهي.

> **Important:** DNS توهان جي server جي IP address تي پورو طور تي propagate ٿيڻ گهرجي تاهه Let's Encrypt domain کي validate ڪري سگهي. جيڪڏهن mapping کان فوراً SSL جو ڇاڇل ڪرڻ ۾ ڪاميابي نه ٿئي، ته DNS propagation لاءِ انتظار ڪريو ۽ **SSL** > **Manage SSL** تحت CyberPanel dashboard کان SSL کي دوبارہ شروع ڪريو.

### www Subdomain

جيڪڏهن توهان جي Domain Mapping جي setings ۾ **Auto-create www subdomain** فعال آهي، ته integration `www.<domain>` لاءِ هڪ virtual host alias به banaوندو ۽ جڏهن auto-SSL آن هجي، ته apex ۽ www dono variants کي ڪور ڪرڻ لاءِ certificate ڇاڇل ڪندو.

### Email Forwarders

جڏهن [Ultimate Multisite: Emails](../../addons/ultimate-multisite-emails/) addon فعال هجي، ڪيبرپینل (CyberPanel) هم کليان جي ايमेल فارورڊرين کي فراهم ڪري سگهي ٿو. فارورڊر هڪ دومين اڊريس کان ٻئي انبوڪس تائين ميساجز رويته ٿا، جنه پورو ميڪسٽ ميڪس (full mailbox) بدون ڪنه نئين ميڪسٽ ميڪس کي بنائڻ لاءِ ڪارآمد آهي، جيڪو `info@customer-domain.test` يا `support@customer-domain.test` جهڙين الياز لاءِ گهڻو فائديمند آهي.

ڪيوان کليان لاءِ فارورڊر فعال ڪرڻ کان اڳ:

1. اوهمائي واري ماخذ (CyberPanel) جي constant کي اوپر ڏنل طرح configure ٿيل آهي ۽ ڪنيڪشن ٽيسٽ پاس ٿئي ٿي، اهو تصديق ڪريو.
2. Emails addon جي settings ۾ CyberPanel ايمل پروائيڊر کي فعال ڪريو.
3. فارورڊر banaڻ کان اڳ کليان جو دومين CyberPanel ۾ موجود آهي يا نه، اهو تصديق ڪريو.
4. هڪ ٽيسٽ فارورڊر banaيو ۽ ان تاهه ميساج موڪليو پورو ڪرڻ کان اڳ، پر پروڊڪشن پلانن تي هي خاصيت ڏيڻ کان اڳ.

جيڪڏهن فارورڊر banaڻ ۾ غلطي ٿئي ته، سب تيه ڪري Ultimate Multisite activity logs کي چكهو، پوءِ CyberPanel ۾ تصديق ڪريو ته سورس دومين موجود آهي ۽ API user تاهه ايمل مينيجمينٽ اجازت رکي ٿو.

## Configuration Reference (تنظيمي مرڪزي معلومات)

| Constant | Required | Default | Description (وضاحت) |
|---|---|---|---|
| `WU_CYBERPANEL_HOST` | Yes | — | توهان جي CyberPanel instance جو پورو URL، پورٽ شامل ڪريو، مثال طور: `https://cp.example.com:8090` |
| `WU_CYBERPANEL_USERNAME` | Yes | — | CyberPanel admin جو username |
| `WU_CYBERPANEL_PASSWORD` | Yes | — | CyberPanel admin جو password |
| `WU_CYBERPANEL_PACKAGE` | Yes | `Default` | نئين virtual hosts کي تفويض ڪرڻ لاءِ CyberPanel hosting package |
| `WU_CYBERPANEL_AUTO_SSL` | No | `true` | دومين banaڻ کان پوءِ Let's Encrypt SSL certificate ڏيڻ |
| `WU_CYBERPANEL_PHP_VERSION` | No | `PHP 8.2` | نئين virtual hosts لاءِ PHP جو version (CyberPanel ۾ ان version سان مطابقت رکڻ ضروري آهي) |
| `WU_CYBERPANEL_EMAIL` | No | — | SSL certificate registration لاءِ رابطي ايمل |

## Important Notes (اهمائي نوٽس)

साइबरप्यानलको API सत्रमा आधारित टोकन प्रमाणीकरण (session-based token authentication) प्रयोग गर्छ। यो इन्टिग्रेशनले हरेक API कलमा स्वचालित रूपमा टोकन लिने काम गर्छ।
तपाईंको CyberPanel एडमिन खातामा वेबसाइटहरू बनाउने र मेटाउने अनुमति हुनुपर्छ।
CyberPanel डिफोल्ट रूपमा पोर्ट `8090` मा चल्छ। यदि तपाईंको सर्भरमा फायरवाल प्रयोग गरिएको छ भने, यो पोर्ट WordPress एप्लिकेशन सर्भरबाट पहुँचयोग्य (accessible) छ कि छैन भनी सुनिश्चित गर्नुहोस्।
यो इन्टिग्रेशनले DNS रेकर्डहरू व्यवस्थापन गर्दैन। डोमेनलाई Ultimate Multisite मा नक्सा (mapping) गर्नुअघि तपाईंले डोमेनको DNS लाई आफ्नो सर्भरको IP ठेगानामा इंगित गर्नुपर्छ।
यदि तपाईं OpenLiteSpeed (OLS) प्रयोग गर्दै हुनुहुन्छ भने, भर्चुअल होस्ट परिवर्तन गरेपछि स्वचालित रूपमा एक सफा पुनः सुरु (graceful restart) ट्रिगर हुन्छ। कुनै पनि म्यानुअल हस्तक्षेप आवश्यक छैन।

## समस्या समाधान (Troubleshooting)

### API Connection Refused (API कनेक्ट गर्न अस्वीकार गरियो)

- तपाईंको सर्भर फायरवालमा पोर्ट `8090` खुला छ कि छैन भने जाँच गर्नुहोस्।
- `WU_CYBERPANEL_HOST` को मानमा सही प्रोटोकल (`https://`) र पोर्ट समावेश छ वा छैन भनी पुष्टि गर्नुहोस्।
- तपाईंको CyberPanel SSL प्रमाणपत्र वैध (valid) छ कि छैन हेर्नुहोस्; सेल्फ-साइन गरिएका प्रमाणपत्रहरूले TLS प्रमाणीकरणमा समस्या ल्याउन सक्छन्। केवल विश्वसनीय निजी नेटवर्क वातावरणमा मात्र `WU_CYBERPANEL_VERIFY_SSL` लाई `false` सेट गर्नुहोस्।

### Authentication Errors (प्रमाणीकरण त्रुटिहरू)

- CyberPanel मा सिधै लगइन गरेर आफ्नो `WU_CYBERPANEL_USERNAME` र `WU_CYBERPANEL_PASSWORD` सही छन् कि छैनन् भने जाँच गर्नुहोस्।
- असफल लगइन प्रयासहरूको पुनरावृत्तिपछि CyberPanel ले खाता लक गर्छ। यदि लकआउटहरू भएमा CyberPanel मा **Security** > **Brute Force Monitor** हेर्नुहोस्।

### Domain Not Created (डोमेन सिर्जना गरिएको छैन)

- API त्रुटि सन्देशहरूका लागि Ultimate Multisite गतिविधि लग (**Ultimate Multisite** > **Activity Logs**) जाँच गर्नुहोस्।
- `WU_CYBERPANEL_PACKAGE` मा परिभाषित प्याकेज CyberPanel मा (`Packages` > **List Packages**) छ कि छैन भनेर पुष्टि गर्नुहोस्।
- सुनिश्चित गर्नुहोस् कि डोमेन पहिले नै वेबसाइटको रूपमा CyberPanel मा दर्ता गरिएको छैन — डुप्लिकेट वेबसाइट सिर्जना गर्दा त्रुटि आउँछ।

### SSL Certificate Not Issued (SSL प्रमाणपत्र जारी गरिएको छैन)

DNS پوروپگیشن مکمل ٿي ويو ته تصديق ڪريو: `dig +short your-domain.com` توهان جي سرور جي IP ڏيڻ گهرجي.
Let's Encrypt ريت ليمٽس (rate limits) لاڳو ڪري ٿو. جيڪڏهن توهان تازو هيٺ ڏنل هم نام لاءِ ڪيترائي سرٽيفڪيٽس जारी ڪيا آهن، ته ٻيهر ڪوشش ڪرڻ کان اڳ انتظار ڪريو.
سرٽيفڪيٽ جي ڇاڻين (certificate issuance failures) بابت تفصيل لاءِ **Logs** > **Error Logs** تحت CyberPanel جا SSL لاگن کي چيڪ ڪريو.
ٻئي حل طور، توهان CyberPanel کان SSL مانيو ڪري سگهو ٿا: **SSL** > **Manage SSL** > هم نام چونڊيو > **Issue SSL**.

## حوالا (References)

- CyberPanel API Documentation: https://docs.cyberpanel.net/docs/category/api
- CyberPanel SSL Management: https://docs.cyberpanel.net/docs/cyberpanel/SSL/manageSSL
- Let's Encrypt Rate Limits: https://letsencrypt.org/docs/rate-limits/
