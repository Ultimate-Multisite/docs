---
title: سائبرپینل انٽيغريشن
sidebar_position: 21
_i18n_hash: d0607874b556c583dac2aaa33ba1dc1d
---
# CyberPanel Integration

هي اس گائیڈ بتاتا ہے کہ Ultimate Multisite CyberPanel integration کي ڪيئن configure ڪجي ته جيئن توهان جي network ۾ مپ ٿيل domains کي خود بخود (automatic) طور تي CyberPanel ۾ virtual hosts طور add (۽ remove) ٿين، ۽ Let's Encrypt جي ذريعي optional auto-SSL provisioning بجي.

## اهو ڇا ڪري ٿو

- جڏهن ڪنه domain کي Ultimate Multisite ۾ map ڪيو ويندو آهي، ته integration ان domain لاءِ هڪ virtual host banaڻ لاءِ CyberPanel API کي call ڪري ٿو.
- جڏهن domain mapping ختم ڪئي ويندي آهي، ته integration ان جو corresponding virtual host delete ڪرڻ لاءِ API کي call ڪري ٿو.
- جڏهن auto-SSL enabled هجي، ته integration virtual host banڻ کان فوراً Let's Encrypt certificate issuance شروع ڪري ڇڏي ٿو.
- Domain Mapping settings ۾ توهان جي "Auto-create www subdomain" setting جي لحاظ کان `www.` alias کي optional طور تي add/remove ڪندو آهي.

## Prerequisites (پہلا قدم)

- هڪ چلند CyberPanel instance (v2.3 يا ان کان وڌيڪ سفارش ٿيل آهي) جيڪو توهان جي WordPress server کان reachable هجي.
- CyberPanel ۾ موجود هڪ existing website جيڪا پريشان توهان جي WordPress network root کي serve ڪري رهي هجي. integration نئين virtual hosts کي هن server تي attach ڪندو آهي.
- CyberPanel API access enabled هجي. Authentication لاءِ توهان جو CyberPanel admin username ۽ password استعمال ٿيندا آهن.
- auto-SSL جاريڪو هڪ valid certificate issue ڪرڻ کان اڳ، مپ ٿيل domains جي توهان جي DNS records توهان جي server جي IP address تي point ڪراڻ گهرجن.

## Requirements (ضروري معلومات)

توهان جي `wp-config.php` فائل ۾ هي constants define ڪراڻ ضروري آهي:

```php
define('WU_CYBERPANEL_HOST', 'https://your-cyberpanel-host:8090');
define('WU_CYBERPANEL_USERNAME', 'your_admin_username');
define('WU_CYBERPANEL_PASSWORD', 'your_admin_password');
define('WU_CYBERPANEL_PACKAGE', 'Default');
```

Optional طور تي، توهان هي به define ڪري سگهو ٿا:

```php
define('WU_CYBERPANEL_AUTO_SSL', true);          // Default: true — مسئلہ Let's Encrypt SSL کو ڈومین بنانے کے بعد چیک کریں
define('WU_CYBERPANEL_PHP_VERSION', 'PHP 8.2');  // Default: PHP 8.2
define('WU_CYBERPANEL_EMAIL', 'admin@yourdomain.com'); // SSL سرٹیفکیٹ رابطہ کرنے کے لیے استعمال ہوتا ہے
```

## سیٹ اپ ہدایات (Setup Instructions)

### 1. CyberPanel API کو فعال کریں

1. ایڈمن کے طور پر اپنے CyberPanel ڈیش بورڈ میں لاگ ان کریں۔
2. **Security** > **SSL** پر جائیں اور تصدیق کریں کہ SSL خود CyberPanel انٹرفیس پر فعال ہے (محفوظ API کالز کے لیے ضروری)۔
3. CyberPanel API ڈیفالٹ طور پر `https://your-server-ip:8090/api/` پر دستیاب ہے۔ اسے فعال کرنے کے لیے کوئی اضافی اقدامات کی ضرورت نہیں — یہ ایڈمن صارفین کے لیے پہلے سے ہی آن ہوتا ہے۔

### 2. wp-config.php میں کنسٹنٹس شامل کریں

`/* That's all, stop editing! */` لائن سے پہلے اپنی `wp-config.php` فائل میں درج ذیل کنسٹنٹس شامل کریں۔

```php
define('WU_CYBERPANEL_HOST', 'https://your-cyberpanel-host:8090');
define('WU_CYBERPANEL_USERNAME', 'admin');
define('WU_CYBERPANEL_PASSWORD', 'your_secure_password');
define('WU_CYBERPANEL_PACKAGE', 'Default');
```

آٹو-SSL کو فعال کرنے کے لیے (موصوف):

```php
define('WU_CYBERPANEL_AUTO_SSL', true);
define('WU_CYBERPANEL_EMAIL', 'admin@yourdomain.com');
```

### 3. انٹیگریشن کو فعال کریں

1. اپنے WordPress نیٹ ورک ایڈمن میں، **Ultimate Multisite** > **Settings** پر جائیں۔
2. **Domain Mapping** ٹیب پر جائیں۔
3. نیچے **Host Integrations** تک اسکرول کریں۔
4. **CyberPanel** انٹیگریشن کو فعال (Enable) کریں۔
5. **Save Changes** پر کلک کریں۔

### 4. کنیکٹیویٹی کی تصدیق کریں

سیٹنگز ویزارد میں موجود اندرونی کنکشن ٹیسٹ کا استعمال کریں۔

1. **Ultimate Multisite** > **Settings** > **Domain Mapping** > **Host Integrations** > **CyberPanel** تي وڃو.
2. **Test Connection** تي ڪلڪ ڪريو.
3. هڪ ڪامياب ٿيڻ جو پيغام ڏسندو آهي ته ان plugin کي CyberPanel API تک رسائي رهيو آهي ۽ صحيح طور تي تصديق (authenticate) ڪري سگهي ٿو.

## اهو ڪيئن کام ڪري ٿو

### Domain Mapping

جڏهن Ultimate Multisite ۾ ڪا domain مپ ڪئي ويندي آهي:

1. ان integration طرفان توهان جي CyberPanel host تي `/api/createWebsite` تي هڪ `POST` request بھیجي ٿي.
2. CyberPanel توهان جي configure ڪيل package تحت ان domain لاءِ هڪ نئين virtual host banaوي ٿو.
3. document root کي توهان جي WordPress network root directory ڏانهن پوائنٽ ڪرڻ لاءِ set ڪيو ويندو آهي.
4. جڏهن domain mapping ختم ڪئي ويندي آهي، ته integration `/api/deleteWebsite` کي ڇتائي (clean up) لاءِ پيڇا ڪري ٿو.

### Auto-SSL

جڏهن `WU_CYBERPANEL_AUTO_SSL` `true` هجي:

1. virtual host banaڻ کان پوءِ، ان integration طرفان domain لاءِ `/api/issueSSL` کي ڇاڪل ڪندو آهي.
2. CyberPanel ACME HTTP-01 challenge استعمال ڪري Let's Encrypt جو سرٽيفڪيٽ درخواست ڪري ٿو.
3. expiry کان اڳ CyberPanel تنهن سرٽيفڪيٽ کي خود بخشود (renew) ڪري ڇڏيندو آهي.

> **Important:** DNS توهان جي server جي IP address تي پورو طور تي propagate ٿيڻ کان پوءِ hi Let's Encrypt domain کي validate ڪري سگهي ٿو. جيڪڏهن mapping کان فوراً SSL جو نڪال ڪرڻ ۾ ڪاميابي نه ٿئي، ته DNS propagation لاءِ انتظار ڪريو ۽ **SSL** > **Manage SSL** تحت CyberPanelแดش بورڊ تي SSL کي دوبارہ شروع ڪريو.

### www Subdomain

جيڪڏهن توهان جي Domain Mapping جي setings ۾ **Auto-create www subdomain** فعال آهي، ته ان integration طرفان `www.<domain>` لاءِ هڪ virtual host alias به banaوي ٿو ۽ جڏهن auto-SSL آن هجي، ته apex ۽ www ٻنهي variants کي ڪور ڪرڻ لاءِ سرٽيفڪيٽ نڪالندو.

### Email Forwarders

جڏهن [Ultimate Multisite: Emails](../../addons/ultimate-multisite-emails/) addon فعال هجي، ته CyberPanel هم ڪسائيدارن جي ايमेल فارورڊر (customer email forwarders) فراهم ڪري سگهي ٿو. فارورڊر هڪ ڊيمنه (domain address) کان ميساجز کي ٻئي انبوڪ ۾ روي ٿا جنه پورو ميڪس بوڪ (full mailbox) نٿي کڻي، جيڪو `info@customer-domain.test` يا `support@customer-domain.test` جهڙين الياز (aliases) لاءِ ڪارآمد آهي.

ڪسائيدارن لاءِ فارورڊر فعال ڪرڻ کان اڳ:

1. اوهمائي واري ماڻهن جي اوپر ڏنل CyberPanel constants کي configure ٿيڻ ۽ ڪنيڪشن ٽيسٽ پاس ٿيڻ جو تصديق ڪريو.
2. Emails addon جي setings ۾ CyberPanel email provider کي فعال ڪريو.
3. فارورڊر کڻڻ کان اڳ، confirm ڪريو ته ڪسائيدار جو domain CyberPanel ۾ پريشان موجود آهي.
4. هڪ test forwarder کڻو ۽ ان تاهه ميساج ڇڏيو پون ٿا ته جيئن production plans تي خاصيت ڏني وڃي.

جيڪڏهن فارورڊر کڻڻ ۾ غلطي ٿئي، ته پهريون Ultimate Multisite activity logs کي چيڪ ڪريو، پوءِ CyberPanel ۾ confirm ڪريو ته سورس domain موجود آهي ۽ API user تاهه ايمل مينيجمنٽ جي اجازت نالي آهي.

## Configuration Reference

| Constant | Required | Default | Description |
|---|---|---|---|
| `WU_CYBERPANEL_HOST` | Yes | — | توهان جي CyberPanel instance جو پورو URL، پورٽ شامل ڪريو، مثال طور: `https://cp.example.com:8090` |
| `WU_CYBERPANEL_USERNAME` | Yes | — | CyberPanel admin جو username |
| `WU_CYBERPANEL_PASSWORD` | Yes | — | CyberPanel admin جو password |
| `WU_CYBERPANEL_PACKAGE` | Yes | `Default` | نئين virtual hosts کي ڏيڻ لاءِ CyberPanel hosting package |
| `WU_CYBERPANEL_AUTO_SSL` | No | `true` | domain creation کان پوءِ Let's Encrypt SSL certificate ڇڏڻ |
| `WU_CYBERPANEL_PHP_VERSION` | No | `PHP 8.2` | نئين virtual hosts لاءِ PHP جو version (CyberPanel ۾ ان version سان match ٿيڻ گهرجي) |
| `WU_CYBERPANEL_EMAIL` | No | — | SSL certificate registration لاءِ رابطو ايمل |

## Important Notes

साइबरप्यानलको API सत्रमा आधारित टोकन प्रमाणीकरण (session-based token authentication) प्रयोग गर्छ। यो इन्टिग्रेशनले हरेक API कलमा टोकन स्वचालित रूपमा लिन्छ।
तपाईंको CyberPanel एडमिन खातामा वेबसाइटहरू बनाउने र मेटाउने अनुमति हुनुपर्छ।
CyberPanel डिफ्ल्ट रूपमा पोर्ट `8090` मा चल्छ। यदि तपाईंको सर्भरमा फायरवाल प्रयोग गरिएको छ भने, यो पोर्ट WordPress एप्लिकेशन सर्भरबाट पहुँचयोग्य (accessible) छ कि छैन भनी सुनिश्चित गर्नुहोस्।
यो इन्टिग्रेशनले DNS रेकर्डहरू व्यवस्थापन गर्दैन। Ultimate Multisite मा डोमेन नक्सा (mapping) गर्नुअघि तपाईंले आफ्नो डोमेनको DNS लाई आफ्नो सर्भरको IP ठेगानामा इंगित गर्नुपर्छ।
यदि तपाईं OpenLiteSpeed (OLS) प्रयोग गर्दै हुनुहुन्छ भने, भर्चुअल होस्ट परिवर्तन गरेपछि स्वचालित रूपमा एक सफा पुनःप्रारम्भ (graceful restart) ट्रिगर हुन्छ। कुनै पनि म्यानुअल हस्तक्षेप आवश्यक छैन।

## समस्या समाधान (Troubleshooting)

### API कनेक्शन अस्वीकृत (API Connection Refused)

- तपाईंको सर्भर फायरवालमा पोर्ट `8090` खुला छ कि छैन भनेर जाँच गर्नुहोस्।
- `WU_CYBERPANEL_HOST` को मानमा सही प्रोटोकल (`https://`) र पोर्ट समावेश छ वा छैन भनेर पुष्टि गर्नुहोस्।
- तपाईंको CyberPanel SSL प्रमाणपत्र वैध (valid) छ कि छैन भनेर जाँच गर्नुहोस्; सेल्फ-साइन गरिएका प्रमाणपत्रहरूले TLS प्रमाणीकरणमा समस्या ल्याउन सक्छन्। केवल विश्वसनीय निजी नेटवर्क वातावरणमा मात्र `WU_CYBERPANEL_VERIFY_SSL` लाई `false` सेट गर्नुहोस्।

### प्रमाणीकरण त्रुटिहरू (Authentication Errors)

- CyberPanel मा सिधै लगइन गरेर आफ्नो `WU_CYBERPANEL_USERNAME` र `WU_CYBERPANEL_PASSWORD` सही छन् कि छैनन् भनेर पुष्टि गर्नुहोस्।
- असफल लगइन प्रयासहरूको पुनरावृत्तिपछि CyberPanel ले खाताहरू लक गर्छ। यदि लकआउट हुन्छ भने CyberPanel मा **Security** > **Brute Force Monitor** जाँच गर्नुहोस्।

### डोमेन सिर्जना भएन (Domain Not Created)

- API त्रुटि सन्देशहरूको लागि Ultimate Multisite गतिविधि लग (Ultimate Multisite > Activity Logs) जाँच गर्नुहोस्।
- `WU_CYBERPANEL_PACKAGE` मा परिभाषित प्याकेज CyberPanel मा (`Packages` > `List Packages`) छ कि छैन भनेर पुष्टि गर्नुहोस्।
- सुनिश्चित गर्नुहोस् कि डोमेन पहिले नै वेबसाइटको रूपमा CyberPanel मा दर्ता गरिएको छैन — डुप्लिकेट वेबसाइट सिर्जना गर्दा त्रुटि आउँछ।

### SSL प्रमाणपत्र जारी भएन (SSL Certificate Not Issued)

DNS پوروپگیشن مکمل آهي ته `dig +short your-domain.com` توهان جي سرور جي IP واپس ڏئي بدلو.
Let's Encrypt ريٽ ليمٽس (rate limits) لاڳو ڪري ٿو. جيڪڏهن توهان تازو هتي سمجهڻ لاءِ هڪ ئي ڊومين لاءِ ڪيترائي سرٽيفڪيٽون ڇڏيو آهي، ته ٻيهر ڪوشش ڪرڻ کان اڳ انتظار ڪريو.
سرٽيفڪيٽ جا ڏيندڙ (issuance) فليئر تي ڪهڙا غلطيون آهن انهن جي تفصيل لاءِ **Logs** > **Error Logs** تحت CyberPanel جا SSL لاگز ضرور ڏسو.
ٻئي حل طور، توهان CyberPanel کان SSL مانيو ڪري سگهو ٿا: **SSL** > **Manage SSL** > ڊومين چونڊيو > **Issue SSL**.

## References

- CyberPanel API Documentation: https://docs.cyberpanel.net/docs/category/api
- CyberPanel SSL Management: https://docs.cyberpanel.net/docs/cyberpanel/SSL/manageSSL
- Let's Encrypt Rate Limits: https://letsencrypt.org/docs/rate-limits/
