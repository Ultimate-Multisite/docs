---
title: 멀티사이트 سیٹ اپ ویزارد
sidebar_position: 3
_i18n_hash: fd09dc94f24b0b37245b847380feea3f
---
# מערणाली ترتیب ڏيندڙ ویزارد (Multisite Setup Wizard)

Ultimate Multisite ۾ هڪ بيلٽ-ين (built-in) ویزارد شامل آهي جيڪو هڪ عام WordPress installation کي خود بخود WordPress Multisite network ۾ تبديل ڪري ڇڏي ٿو. هي توهان کي `wp-config.php` جو مانيو ڪارن يا ڊيٽابيز كومانديون چلائڻ جي ضرورت ختم ڪري ڇڏيندو آهي.

:::tip
جيڪڏهن توهان جو WordPress installation اڳ ۾ ئي Multisite network طور چور رهيو آهي، ته توهان هن قدم کي پوري سکه سكه ٿا. ویزارد صرف تڏهن ظاهر ٿئي ٿو جڏهن Multisite فعال نه هجي.
:::

## ویزارد ڪڏهن ظاهر ٿئي ٿو؟

جڏهن توهان هڪ عام (غير-Multisite) WordPress installation تي Ultimate Multisite کي فعال ڪريو ٿا، ته پليجن کي اهو محسوس ٿيندو آهي ته Multisite غير فعال آهي ۽ هي توهان کي عام setup wizard جي بجاء Multisite Setup Wizard ڏانهن خود بخود ريڊيڪٽ ڪري ڇڏيندو آهي.

توهان ان تک سڌي **WP Admin > Ultimate Multisite > Multisite Setup** تي به رسائي سگهو ٿا.

## ضروري شروعات (Prerequisites)

ویزارد شروع ڪرڻ کان اڳ، هي ٺهيل ڏيو ته:

- توهان جي WordPress installation جو **administrator access** هجي
- توهان جي سرور جي `wp-config.php` فائل ويب سرور طرفان **لائي سگهجي** (writable) هجي
- توهان جي فائلن ۽ ڊيٽابيز جو **تازہ بڪ اپ** موجود هجي

:::warning
ویزارد توهان جي `wp-config.php` فائل کي تبديل ڪري ٿو ۽ نيني ڊيٽابيز تيبلز کڻي ٿو. اڳتي وڌڻ کان سواءِ هميشه ڪا backup بنايو.
:::

## قدم 1: خوش آمديد (Welcome)

پهرين سڪرين کي وضاحت ڪئي ويندي آهي ته WordPress Multisite के آهي ۽ ویزارد جو ڪم ڪندو ڇا:

- توهان جي WordPress configuration ۾ Multisite جي خاصيت کي فعال ڪرڻ
- ضروري network database tables کي banaڻ
- `wp-config.php` ۾ ضرور مطلوبون multisite constants شامل ڪرڻ
- سڄي network تي Ultimate Multisite کي activate ڪرڻ

![Multisite Setup Wizard - Welcome step](/img/installation/multisite-wizard/wizard-welcome.png)

وڌيڪ لاءِ **Continue** ڇاڪاڻ ته وڌيڪ قدم کان اڳتي وڃڻ لاءِ ڪلڪ ڪريو.

## قدم 2: network configuration (Network Configuration)

هي قدم توهان کي پنهنجي network جي setings configure ڪرڻ جو پوءِ پڇندو آهي.

### Site Structure

توهان توهان جي نتيجا ڪيئن منظم ڪندا؟

- **Sub-domains** (ترقياتي) — هر سائي کي پنهنجو subdomain ملي ٿو، مثال طور: `site1.yourdomain.com`
- **Sub-directories** — سائي کي پٿرن (paths) جي صورت ۾ ٺاهيو ويندو آهي، مثال طور: `yourdomain.com/site1`

:::note
جيڪڏهن توهان sub-domains چئبو آهيو، ته توهان کي پنهنجي domain لاءِ **wildcard DNS** ۽ هڪ **wildcard SSL certificate** کان واقف ٿيڻ گهرجي. اڪثر مانيجڊ WordPress هاجس هن کي خود بخاري ڪري ڇڏيندي آهي. تفصيل سان مانيجڊ Ultimate Multisite 101 ڏسو ته [Ultimate Multisite 101](./ultimate-multisite-101).
:::

### Network Title (نٽ ورڪ جو عنوان)

پنهنجي نٽ ورڪ لاءِ هڪ نالو داخل ڪريو. اهو عام طور تي توهان جي موجوده سائي جا عنوان ٿيندو آهي جنهن "Network" شامل ڪيو وڃي. توهان هن کي بعد مانيجڊ سٽنگز کان بدل سگهو ٿا.

### Network Admin Email (نٽ ورڪ اديثيل اي ميل)

نٽ ورڪ اديثيل نوٽيفڪشن لاءِ استعمال ٿيندڙ اي ميل adhesion. اهو عام طور تي موجوده صارف جي اي ميل adhesion آهي.

![Multisite Setup Wizard - Network Configuration](/img/installation/multisite-wizard/wizard-network-configuration.png)

فيلڊن پورو ڪرڻ کان پوءِ، اڳتي وڌڻ لاءِ **Continue** ڇاڪاڻ ته ڪلڪ ڪريو.

## Step 3: Installation (مرحلو 3: تنصيب)

شروع ڪرڻ لاءِ **Install** بٽون تي ڪلڪ ڪريو. Wizard پنهنجي پنجن خود بخاري ڪيل قدمن کي ترتیب وارن انداز ۾ عمل ڪري ٿو، جنهن هر هڪ وقت سان گڏ پنهنجي ترقي ڏيکاري ٿو:

![Multisite Setup Wizard - Installation pending](/img/installation/multisite-wizard/wizard-installation-pending.png)

| Step | Description |
|------|-------------|
| **Multisite Enable Garnao** | `wp-config.php` ۾ `WP_ALLOW_MULTISITE` constant شامل ڪريو |
| **Network Banaio** | ميڊيوم سائٽ جي ڊيٽا بيس تيبلز (`wp_site`, `wp_sitemeta`, `wp_blogs`, etc.) کڻيو ۽ انهن کي توهان جي نٽويڪ (network) جو ڪيئن هيٺيون معلومات سان پورو ڪريو |
| **Configuration Update Garnao** | `wp-config.php` ۾ آخري ميڊيوم سائٽ constant شامل ڪريو (`MULTISITE`, `SUBDOMAIN_INSTALL`, `DOMAIN_CURRENT_SITE`, etc.) |
| **Cookies Theek Garnao** | هيٺ ڏنل نٽويڪ ميڊيٽا ۾ سائٽ URL صحيح آهي ان کي يقيني بڻايو ته عمل شروع کان پوءِ تصديق (authentication) جي مسئلن کان بچي سگهجي. |
| **Network Activate Plugin** | Ultimate Multisite کي نٽويڪ تي activate ڪريو ته اهو پوري نٽويڪ تي ڪم ڪري سگهي. |

هر قدم پر هيٺ ڏنل حالت ۾ ڏسيل ويندو:

- **Pending** — عمل ڪرڻ لاءِ انتظار آهي
- **Installing...** — موجوده طور تي چل رهيو آهي
- **Success!** — ڪامياب طور تي پورو ٿيو
- **Error message** — ڪا غلطي ٿي وئي (مساوڪاريءَ ۾ مسئلي بيان ڪندي)

جڏهن توهان سڀ قدم ڪاميابي سان پورو ڪري ويندا، تڏهن توهان هر شي لاءِ هتي هڪ هراجن "Success!" حالت ڏسڻ جڳهه ڏسندا:

![Multisite Setup Wizard - Installation complete](/img/installation/multisite-wizard/wizard-installation-complete.png)

پھر ويزر خود بخود پورو ٿي ويندو آهي.

## قدم 4: پورو ڪريو (Complete)

جڏهن توهان لاري عمل پورو ڪري ويندا، تڏهن توهان هڪ ڪاميابي جو موجوده ڏسڻ جڳهه ڏسندا ته WordPress Multisite کي فعال ڪري ڇڏيو آهي.

![Multisite Setup Wizard - Setup Complete](/img/installation/multisite-wizard/wizard-complete.png)

توهان اها ويزر استعمال ڪري سگهو ٿا توهان جي WaaS platform (ڪمپني جي تفصيل، डिफلت ڪنهن مواد، پياملٽ گيتواي، يا غير سمجهڻ وارن دروازWN) کي ترتیب ڏيارڻ لاءِ.

:::note
Multisite इन्स्टलेसन पूरा हो जाने بعد، तपाईंको ब्राउजर नयाँ नेटवर्क एडमिन मार्फत रिडायरेक्ट हुनेछ। तपाईंलाई फेरि लगइन गर्नुपर्ने हुन सक्छ किनभने मल्टीसाइट वातावरणका लागि प्रमाणीकरण कुकीहरू अपडेट हुन्छन्।
:::

## म्यानुअल सेटअपको विकल्प (Manual Setup Fallback)

यदि विजुअल गाइडले तपाईंको `wp-config.php` फाइलमा लेख्न सक्दैन (फाइल अनुमति वा सर्भरको रोकका कारण), भने यसले तपाईंलाई मैन्युअल रूपमा थप्नुपर्ने सही कोड देखाउनेछ:

१. **wp-config.php का constants** जुन `/* That's all, stop editing! */` लाइनभन्दा माथि थप्नुपर्छ
२. तपाईंले रोजेको साइट संरचना (सबडोमेन वा सबडायरेक्टरी) को लागि उपयुक्त **.htaccess rewrite rules**

मैन्युअल परिवर्तन गरेपछि, पेज रिफ्रेश गर्नुहोस् र विजुअल गाइडले मल्टीसाइट अब सक्रिय भएको पत्ता लगाउनेछ।

## समस्या समाधान (Troubleshooting)

### विजुअल गाइडले भन्छ कि wp-config.php लेख्न सकिँदैन

तपाईंको वेब सर्भर प्रोसेसलाई `wp-config.php` फाइलमा लेख्ने अनुमति चाहिन्छ। तपाईं निम्न मध्ये कुनै एक गर्न सक्नुहुन्छ:

- फाइल अनुमति अस्थायी रूपमा `644` वा `666` मा परिवर्तन गर्नुहोस्
- विजुअल गाइडले दिएका म्यानुअल सेटअपको विकल्पहरू प्रयोग गर्नुहोस्
- आफ्नो होस्टिङ प्रदायकलाई सहयोगको लागि सोध्नुहोस्

### सेटअप पछि साइटहरू पहुँच गर्न सकिँदैन (सबडोमेन)

यदि तपाईंले सबडोमेन संरचना रोज्नुभएको छ भने, तपाईंले आफ्नो डोमेनको लागि **wildcard DNS** कन्फिगर गर्नुपर्छ। एउटा DNS रेकर्ड थप्नुहोस्:

```
Type: A (or CNAME)
Host: *
Value: [your server IP]
```

यो कसरी कन्फिगर गर्ने भन्ने बारे तपाईंलाई शंका भएमा आफ्नो होस्टिङ प्रदायकसँग जाँच गर्नुहोस्।

### सेटअप पछि प्रमाणीकरण समस्याहरू

यदि तपाईं लॉग आउट हुनुहुन्छ वा मल्टीसाइट सेटअप पछि कुकी त्रुटिहरू अनुभव गर्नुहुन्छ भने:

१. साइटको लागि आफ्नो ब्राउजर कुकीहरू सफा गर्नुहोस्
२. `yourdomain.com/wp-login.php` मा फेरि लगइन गर्नुहोस्
३. यदि समस्या अझै छ भने, जाँच गर्नुहोस् कि तपाईंको `wp-config.php` मा `COOKIE_DOMAIN` लाई `false` सेट गरिएको छैन — यो सबडोमेन मल्टीसाइट इन्स्टलेसनमा एक ज्ञात समस्या हो।

### इन्स्टलेसनको क्रममा एउटा चरण असफल भयो

جيئن ڪا انٽالينگ سٽپ ۾ غلطي ڏئي ٿي ته:

1. ڏٺي وڃي ته غلطي جو ميساج ڇا آهي.
2. configuration سٽپ تي واپس وڃو ۽ फेرس ڪري ڏيو.
3. جيڪڏهن غلطي برقرار رهي، ته معلومات لاءِ پنهنجي server جي PHP error log کي چيڪ ڪريو.
4. جيڪي سٽپ اڳ ۾ ئي ٿي ويا، انهن کي بعد ان ڪارن تي کٽائي ڇڏيو ويندو (انٽالر idempotent آهي).
