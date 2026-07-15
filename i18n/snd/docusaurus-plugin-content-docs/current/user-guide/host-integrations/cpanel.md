---
title: cPanel انضمام
sidebar_position: 5
_i18n_hash: ba79fa3cffb0f29c4eda9bdf59244a2f
---
# cPanel Integration

## جائزہ (Overview) {#overview}
cPanel هي धेरै साझा र समर्पित होस्टिङ प्रदायकहरूले प्रयोग गर्ने सबैभन्दा लोकप्रिय वेब होस्टिङ कन्ट्रोल प्यानल मध्ये एक हो। यो इन्टिग्रेशनले Ultimate Multisite र cPanel बीच डोमेन सिंक गर्न स्वचालित सुविधा दिन्छ, जसले तपाईंलाई आफ्नो cPanel खातामा डोमेन एलायस (aliases) र सबडोमेनहरू स्वतः थबाउन अनुमति दिन्छ।

## सुविधाहरू (Features) {#features}
- cPanel मा स्वचालित एडऑन डोमेन निर्माण
- cPanel मा स्वचालित सबडोमेन निर्माण (सबडोमेन मल्टीसाइट इन्स्टलेसनका लागि)
- जब म्यापिङ्स डिलिट गरिन्छ, तब डोमेन हटाउने कार्य

## आवश्यकताहरू (Requirements) {#requirements}
तपाईंको `wp-config.php` फाइलमा निम्न कन्स्टन्टहरू परिभाषित गर्नुपर्छ:

```php
define('WU_CPANEL_USERNAME', 'your_cpanel_username');
define('WU_CPANEL_PASSWORD', 'your_cpanel_password');
define('WU_CPANEL_HOST', 'your_cpanel_host');
```

वैकल्पिक रूपमा, तपाईं निम्न पनि परिभाषित गर्न सक्नुहुन्छ:

```php
define('WU_CPANEL_PORT', 2083); // डिफल्ट 2083 हो
define('WU_CPANEL_ROOT_DIR', '/public_html'); // डिफल्ट /public_html हो
```

## सेटअप निर्देशनहरू (Setup Instructions) {#setup-instructions}

### १. आफ्नो cPanel विवरण प्राप्त गर्नुहोस् (Get Your cPanel Credentials) {#1-get-your-cpanel-credentials}

१. आफ्नो होस्टिङ प्रदायकबाट आफ्नो cPanel username र password लिनुहोस्।
२. आफ्नो cPanel host पत्ता लगाउनुहोस् (सामान्यतया `cpanel.yourdomain.com` वा `yourdomain.com:2083`)।

### २. wp-config.php मा कन्स्टन्टहरू थप्नुहोस् (Add Constants to wp-config.php) {#2-add-constants-to-wp-configphp}

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

### ३. इन्टिग्रेशन सक्रिय गर्नुहोस् (Enable the Integration) {#3-enable-the-integration}

1. توهان جي WordPress admin ۾، Ultimate Multisite > Settings تي وڃو
2. "Domain Mapping" 탭 تي وينو
3. "Host Integrations" تي لٺي ڏيو
4. cPanel integration کي Enable ڪريو
5. "Save Changes" تي ڪلڪ ڪريو

## اهو ڪيئن کام ڪري ٿو {#how-it-works}

### Addon Domains (اضافي حڪمات) {#addon-domains}

جڏهن Ultimate Multisite ۾ ڪنه ڊومين کي map ڪيو ويندو آهي:

1. Integration cPanel جي API تائين درخواست پيحل نهجي add-on domain طور ڊومين کي شامل ڪرڻ لاءِ هيٺ ڇاجهندي
2. ڊومين توهان جي root directory تي پوائنٽ ڪرڻ لاءِ configure ڪيل آهي
3. جڏهن ڪنه ڊومين جو mapping ختم ڪيو ويندو آهي، ته integration cPanel کان add-on domain کي ختم ڪري ڇڏي

### Subdomains (سوبڊومين) {#subdomains}

Subdomain multisite installations لاءِ، جڏهن هڪ نئين site کي banaيو ويندو آهي:

1. Integration پوري ڊومين کان subdomain جو حصو نکالندو
2. هي cPanel جي API تائين درخواست پيحل نهجي subdomain شامل ڪرڻ لاءِ ڇاجهندي
3. Subdomain توهان جي root directory تي پوائنٽ ڪرڻ لاءِ configure ڪيل آهي

## اهم نوٽس {#important-notes}

- Integration توهان جي cPanel account سان رابطو ڪرڻ لاءِ cPanel جي API2 جو استعمال ڪري ٿو
- توهان جي cPanel account کي add-on domains ۽ subdomains شامل ڪرڻ جي اجازت honي
- ڪجهه hosting providers توهان کي banaائي سگهڻ واري add-on domains يا subdomains جي تعداد محدود ڪري سگهن ٿا
- Integration DNS configuration کي سنڀاليندو ناهي؛ توهان کي اب به پنهنجي ڊومين کي توهان جي server جي IP address تي پوائنٽ ڪرڻو پوندو

## گلاپ حل (Troubleshooting) {#troubleshooting}

### API Connection Issues (API جو ڪنيڪشن خراب ٿيڻ) {#api-connection-issues}
- تصديق ڪريو ته توهان جو cPanel username ۽ password صحيح آهن
- چیک ڪريو ته توهان جو cPanel host صحيح آهي ۽ وصول ٿيڻ ۾ آهي
- ٺهيل شيءِ هيٺ ڪريو ته توهان جي cPanel account کي لازمي اجازتون hon
- host لاءِ پورو URL استعمال ڪرڻ جو ڪوشش ڪريو (مثال: `https://cpanel.yourdomain.com`)

### Domain Not Added (ڊومين شامل نه ٿيو) {#domain-not-added}
- ڪنه به غلطي جو پیغام ڏسڻ لاءِ Ultimate Multisite جي logs کي چيڪ ڪريو
- تصديق ڪريو ته ڊومين cPanel ۾ پہلے کان شامل نه آهي
- هيٺ سنڀاليو ته توهان جي cPanel account جي add-on domains يا subdomains لاءِ حد ختم نه ٿي وڃي

### SSL Certificate جي مسئلاات {#ssl-certificate-issues}

- هيءار (integration) SSL certificate ڏيڻ جو ڪم نه ڪري ٿو.
- توهان کي پنهنجي دوميني لاءِ SSL certificates ڏيڻ لاءِ cPanel جا SSL/TLS tools يا AutoSSL feature استعمال ڪرڻ گهرجي.
- ٻئي طور، توهان cPanel جي AutoSSL سان Let's Encrypt جهڙي سروس استعمال ڪري سگهو ٿا.
