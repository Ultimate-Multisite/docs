---
title: cPanel انٽيغريشن
sidebar_position: 5
_i18n_hash: ba79fa3cffb0f29c4eda9bdf59244a2f
---
# cPanel Integration

## جائزہ (Overview)
cPanel هي धेरै شیئرڈ र डेडिकेटेड होस्टिङ प्रदायकहरूले प्रयोग गर्ने सबैभन्दा लोकप्रिय वेब होस्टिङ कन्ट्रोल प्यानल मध्ये एक हो। यो इन्टिग्रेशनले Ultimate Multisite र cPanel बीच डोमेन सिङ्किङलाई स्वचालित बनाउँछ, जसले गर्दा तपाईं आफ्नो cPanel खातामा डोमेन एलायस (aliases) र सबडोमेनहरू स्वतः थप्न सक्नुहुन्छ।

## सुविधाहरू (Features)
- cPanel मा स्वचालित एडऑन डोमेन निर्माण
- cPanel मा स्वचालित सबडोमेन निर्माण (सबडोमेन मल्टीसाइट इन्स्टलेसनका लागि)
- म्यापिङहरू मेटाउँदा डोमेन हटाउने

## आवश्यकताहरू (Requirements)
तपाईंको `wp-config.php` फाइलमा निम्न कन्स्टन्टहरू परिभाषित गर्नुपर्छ:

```php
define('WU_CPANEL_USERNAME', 'your_cpanel_username');
define('WU_CPANEL_PASSWORD', 'your_cpanel_password');
define('WU_CPANEL_HOST', 'your_cpanel_host');
```

वैकल्पिक रूपमा, तपाईं निम्न पनि परिभाषित गर्न सक्नुहुन्छ:

```php
define('WU_CPANEL_PORT', 2083); // डिफल्ट २0८३ हो
define('WU_CPANEL_ROOT_DIR', '/public_html'); // डिफल्ट /public_html हो
```

## सेटअप निर्देशनहरू (Setup Instructions)

### १. आफ्नो cPanel विवरण प्राप्त गर्नुहोस् (Get Your cPanel Credentials)

१. आफ्नो होस्टिङ प्रदायकबाट आफ्नो cPanel username र password लिनुहोस्।
२. आफ्नो cPanel host पत्ता लगाउनुहोस् (सामान्यतया `cpanel.yourdomain.com` वा `yourdomain.com:2083`)।

### २. wp-config.php मा कन्स्टन्टहरू थप्नुहोस् (Add Constants to wp-config.php)

निम्न कन्स्टन्टहरू आफ्नो `wp-config.php` फाइलमा थप्नुहोस्:

```php
define('WU_CPANEL_USERNAME', 'your_cpanel_username');
define('WU_CPANEL_PASSWORD', 'your_cpanel_password');
define('WU_CPANEL_HOST', 'your_cpanel_host');
```

वैकल्पिक रूपमा, तपाईं पोर्ट र रूट डाइरेक्टरीलाई अनुकूलित गर्न सक्नुहुन्छ:

```php
define('WU_CPANEL_PORT', 2083); // यदि तपाईंको cPanelले फरक पोर्ट प्रयोग गर्छ भने परिवर्तन गर्नुहोस्
define('WU_CPANEL_ROOT_DIR', '/public_html'); // यदि तपाईंको डकुमेन्ट रूट फरक छ भने परिवर्तन गर्नुहोस्
```

### ३. इन्टिग्रेशन सक्रिय गर्नुहोस् (Enable the Integration)

1. پنهنجي WordPress admin (ادمین) ۾، Ultimate Multisite > Settings تي وڃو
2. "Domain Mapping" ٽاب تي وينجو
3. "Host Integrations" تي لائي ڇڏيو
4. cPanel integration کي Enable ڪريو
5. "Save Changes" تي ڪلڪ ڪريو

## اهو ڪيئن کام ڪري ٿو

### Addon Domains (اضافي دومين)

جڏهن Ultimate Multisite ۾ ڪنه دومين کي map ڪيو ويندو آهي:

1. Integration cPanel جي API تائين درخواست پيحل نهجي add-on domain طور دومين کي شامل ڪرڻ لاءِ
2. Domain کي توهان جي root directory تي point ڪرڻ لاءِ configure ڪيو ويندو آهي
3. جڏهن ڪنه دومين جو mapping ختم ڪيو ويندو، ته integration cPanel کان addon domain کي ختم ڪري ڇڏي

### Subdomains (سڀ دومين)

Subdomain multisite installations لاءِ، جڏهن ڪا نون site banaوند:

1. Integration full domain کان subdomain جو حصو نکالندو آهي
2. هو subdomain شامل ڪرڻ لاءِ cPanel جي API تائين درخواست پيحل نهجي send ڪري ٿو
3. Subdomain کي توهان جي root directory تي point ڪرڻ لاءِ configure ڪيو ويندو آهي

## اهم نوٽس

- هي integration توهان جي cPanel account سان ڳالهائڻ لاءِ cPanel جي API2 جو استعمال ڪري ٿو
- توهان جي cPanel account ۾ addon domains ۽ subdomains شامل ڪرڻ جي اجازت honي رهڻ گهرجي
- ڪجهه hosting providers توهان کي جنهن addon domains يا subdomains کي bana سگهو ٿا ان تي حد مقرر ڪري سگهن ٿا
- هي integration DNS configuration نه ڪندو؛ توهان کي اڃا به پنهنجي domains کي توهان جي server جي IP address تائين point ڪرڻ گهرجي

## Troubleshooting (مسئلي حل)

### API Connection Issues (API جو ڳالهه ۾ مسئلا)
- تصديق ڪريو ته توهان جو cPanel username ۽ password صحيح آهن
- چیک ڪريو ته توهان جو cPanel host صحيح آهي ۽ وصول ٿي ويندو آهي
- ٺهيل شيءِ هو ته توهان جي cPanel account ۾ ضروري اجازتون hon
- Host لاءِ full URL استعمال ڪرڻ جو ڪوشش ڪريو (مثال: `https://cpanel.yourdomain.com`)

### Domain Not Added (Domain شامل نه ٿيو)
- ڪنهي غلطي جو ڳوله لاءِ Ultimate Multisite logs کي ڏسو
- تصديق ڪريو ته دومين cPanel ۾ پريشان نه آهي
- هي ڳالهه ڪريو ته توهان جي cPanel account جي addon domains يا subdomains جي حد ختم نه ٿي وڃي

### SSL Certificate جو مسئلا

- هيء (integration) SSL certificate जारी ڪرڻ کي سنڀالندي ناهي.
- توهان کي پنهنجي دومين لاءِ SSL certificates जारी ڪرڻ لاءِ cPanel جي SSL/TLS tools يا AutoSSL feature استعمال ڪرڻو پوندو.
- بد alternetive طور، توهان cPanel جا AutoSSL سان Let's Encrypt جيس ڪنهن سروس جو استعمال ڪري سگهو ٿا.
