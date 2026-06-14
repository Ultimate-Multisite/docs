---
title: مُلٽي سائيٽ seves ویزرڊ
sidebar_position: 3
_i18n_hash: fd09dc94f24b0b37245b847380feea3f
---
# מערणाली ترتیب ڏيندڙ ویزارد (Multisite Setup Wizard)

Ultimate Multisite ۾ هڪ بيلٽ-ين (built-in) ویزارد شامل آهي جيڪو هڪ عام WordPress installation کي خود بخود WordPress Multisite network ۾ تبديل ڪري ڇڏي ٿو. ان سان توهان کي `wp-config.php` جو مانيو ڪرڻ يا ڊيٽابيز كومانديون چلائڻ جي ضرورت نه پوندي.

:::tip
جيڪڏهن توهان جو WordPress installation پر پہلے ئي Multisite network چوريو طور تي چل رهيو آهي، ته توهان هن قدم کي پوري طرح کٽي سگهو ٿا. ویزارد صرف تڏهن ظاهر ٿئي ٿو جڏهن Multisite فعال نه ڪيل هجي.
:::

## ویزارد ڪهڙي وقت ظاهر ٿئي ٿو؟

جڏهن توهان هڪ عام (غير-Multisite) WordPress installation تي Ultimate Multisite کي فعال ڪريو ٿا، ته پليجن کي اهو محسوس ٿيندو آهي ته Multisite غير فعال آهي ۽ اهو توهان کي عام setup wizard جي بجاء Multisite Setup Wizard ڏانهن خود بخود ريڊيڪٽ ڪري ڇڏي ٿو.

توهان ان تک سڌي **WP Admin > Ultimate Multisite > Multisite Setup** تي به رسائي سگهو ٿا.

## ضروري شروعات (Prerequisites)

ویزارد شروع ڪرڻ کان اڳ، هيٺيون कुرا ڏسو ته:

- توهان جي WordPress installation جو **administrator access** هجڻ گهرجي
- توهان جي سرور جي `wp-config.php` فائل ويب سرور طرفان **لائي جاڻي (writable)** honي ٿي
- توهان جي فائلن ۽ ڊيٽابيز جو **نئين بڪاپ (recent backup)** موجود هجڻ گهرجي

:::warning
ویزارد توهان جي `wp-config.php` فائل کي تبديل ڪري ٿو ۽ نيني ڊيٽابيز تيبلز (database tables) ٺاهي ٿو. اڳتي وڌڻ کان سواءِ، بڪاپ ضرور کڻو.
:::

## قدم 1: خوش آمديد (Welcome)

پهرين سڪرين کي وضاحت ڪئي ويندي آهي ته WordPress Multisite के آهي ۽ ویزارد ڪهڙا ڪم ڪندو:

- توهان جي WordPress configuration ۾ Multisite جو خاصيت فعال ڪريو
- ضروري network database tables ٺاهيو
- `wp-config.php` ۾ ضرور مطلوبون multisite constants شامل ڪريو
- سڄي network تي Ultimate Multisite کي activate ڪريو

![Multisite Setup Wizard - Welcome step](/img/installation/multisite-wizard/wizard-welcome.png)

اڳتي وڌڻ لاءِ **Continue** تي ڪلڪ ڪريو.

## قدم 2: network configuration (Network Configuration)

هي قدم توهان کي پنهنجي network جي ترتيبي (settings) ترتیب ڏيڻ جو سوال ڪندو آهي.

### Site Structure

توهان جي توهان جي نٽ ورڪ سائيٽس کي ڪيئن منظم ڪجي ٿو، اهو چنو:

- **Sub-domains** (ترقياتي) — هر سائيٽ کي پنهنجو subdomain ملي ويندو، مثال طور `site1.yourdomain.com`
- **Sub-directories** — سائيٽس پٿرن جي صورت ۾ بڻجديون هونديون، مثال طور `yourdomain.com/site1`

:::note
جيڪڏهن توهان sub-domains چنو ٿا ته توهان کي پنهنجي domain لاءِ **wildcard DNS** ۽ **wildcard SSL certificate** کان واقف ٿيڻ گهرجي. اڪثر مانيجڊ WordPress هاوسن (managed WordPress hosts) ان کي خود بخاري ڇڏين ٿيون. تفصيل سان مانيجڊ سائيٽ جي بابت [Ultimate Multisite 101](./ultimate-multisite-101) ڏسو.
:::

### Network Title

پنهنجي نٽ ورڪ لاءِ هڪ نالو داخل ڪريو. اهو عام طور تي توهان جي موجوده سائيٽ جو نالو "Network" لفظ سان ختم ٿيندو. توهان هن کي بعد مانيجڊ سائيٽ جي ترتي بيان (network settings) کان بدل سگهو ٿا.

### Network Admin Email

نٽ ورڪ جي انتظامي اطلاعن لاءِ استعمال ڪندڙ ايميل adhesion. اهو عام طور تي موجوده صارف جو ايميل adres هوندو.

![Multisite Setup Wizard - Network Configuration](/img/installation/multisite-wizard/wizard-network-configuration.png)

فيلڊون پورو ڪرڻ کان پوءِ، اڳتي وڌڻ لاءِ **Continue** تي ڪلڪ ڪريو.

## قدم 3: تنصيب (Installation)

شروع ڪرڻ لاءِ **Install** بٽڻ تي ڪلڪ ڪريو. اسڪيوزر پنجن خود بخاري قدمن کي ترتیب وارن انداز ۾ عمل ڪري ٿو، جنهن هر هڪ وقت جي سچائي ۾ پنهنجي ترقي ڏيکاري ٿو:

![Multisite Setup Wizard - Installation pending](/img/installation/multisite-wizard/wizard-installation-pending.png)

| قدم | وضاحت |
|------|-------------|
| **Multisite Enable کرنا** | `wp-config.php` فائل میں `WP_ALLOW_MULTISITE` کانسٹنٹ شامل کریں۔ |
| **Network بنانا** | ملٹی سائٹ ڈیٹا بیس ٹیبلز (`wp_site`, `wp_sitemeta`, `wp_blogs`, وغیرہ) بنائیے اور ان کي آپ کے نیٹ ورک کی ترتیب سے پُر ڪريو۔ |
| **Configuration اپ ڈیٹ کرنا** | `wp-config.php` ۾ آخری ملٹی سائٹ کانسٹنٽس شامل ڪريو (`MULTISITE`, `SUBDOMAIN_INSTALL`, `DOMAIN_CURRENT_SITE`, وغیرہ)۔ |
| **Cookies ٹھیک کرنا** | فعال کرنے کے بعد ہونے والی تصدیق (authentication) کی خرابیوں سے بچنے کے لیے نیٹ ورک میٹا ڈیٹا میں سائٹ کا URL درست ہونا یقینی بنائیں۔ |
| **Network Activate Plugin** | Ultimate Multisite کو نیٹ ورک پر ایکٹیویٹ کریں تاکہ یہ پورے نیٹ ورک پر چل سکے۔ |

ہر قدم پر آپ کو ان میں سے کوئی ایک اسٹیٹس نظر آئے گا:

- **Pending** — عمل کرنے کا انتظار کر رہا ہے۔
- **Installing...** — فی الحال چل رہا ہے۔
- **Success!** — کامیابی سے مکمل ہو گیا۔
- **Error message** — کوئی غلطی پیش آئی (پیغام مسئلہ بیان کرے گا۔)

جب تمام قدم کامیابی سے مکمل ہو جائیں گے، تو آپ کو ہر آئٹم کے لیے سبز رنگ کا "Success!" اسٹیٹس نظر آئے گا:

![Multisite Setup Wizard - Installation complete](/img/installation/multisite-wizard/wizard-installation-complete.png)

پھر ویزارڈ خود بخود مکمل ہونے کی سکرین پر چلا جائے گا۔

## قدم 4: مکمل کریں (Complete)

جب انسٹالیشن مکمل ہو جائے گی، تو آپ کو ایک کامیابی کا پیغام ملے گا جو تصدیق کرے گا کہ WordPress Multisite فعال کر دیا گیا ہے۔

![Multisite Setup Wizard - Setup Complete](/img/installation/multisite-wizard/wizard-complete.png)

اب آپ Ultimate Multisite سیٹ اپ ویزارڈ کے ساتھ اپنے WaaS پلیٹ فارم (کمپنی کی تفصیلات، ڈیفالٹ مواد، ادائیگی کے گیٹ وے وغیرہ) کو کنفیگر کرنا جاری رکھ سکتے ہیں۔

:::note
Multisite इन्स्टलेसन पूरा हो जाने के बाद, तपाईंको ब्राउजर नयाँ नेटवर्क एडमिन मार्फत रिडायरेक्ट हुनेछ। तपाईंलाई फेरि लगइन गर्नुपर्ने हुन सक्छ किनभने मल्टीसाइट वातावरणका लागि प्रमाणीकरण कुकीहरू अपडेट गरिएका हुन्छन्।
:::

## म्यानुअल सेटअपको विकल्प (Manual Setup Fallback)

यदि विज़ार्डले तपाईंको `wp-config.php` फाइलमा लेख्न सक्दैन (फाइल अनुमति वा सर्भरको अवरोधका कारण), भने यसले तपाईंलाई मैन्युअल रूपमा थप्नुपर्ने सही कोड देखाउनेछ:

१. **wp-config.php को कन्स्ट्यान्टहरू** जुन `/* That's all, stop editing! */` लाइनभन्दा माथि थप्नुपर्छ।
२. तपाईंको रोजेको साइट संरचना (सबडोमेन वा सबडायरेक्टरी) का लागि उपयुक्त **.htaccess रिराइट नियमहरू**।

मैन्युअल परिवर्तन गरेपछि, पेज रिफ्रेश गर्नुहोस् र विज़ार्डले पत्ता लगाउनेछ कि मल्टीसाइट अब सक्रिय छ।

## समस्या समाधान (Troubleshooting)

### विज़ार्डले भन्छ कि wp-config.php लेख्न सकिँदैन

तपाईंको वेब सर्भर प्रोसेसलाई `wp-config.php` फाइलमा लेख्ने अनुमति चाहिन्छ। तपाईं निम्न मध्ये कुनै एक गर्न सक्नुहुन्छ:

- फाइल अनुमति अस्थायी रूपमा `644` वा `666` मा परिवर्तन गर्नुहोस्
- विज़ार्डले प्रदान गरेका म्यानुअल सेटअपको विकल्पहरू प्रयोग गर्नुहोस्
- आफ्नो होस्टिङ प्रदायकलाई सहयोगको लागि सोध्नुहोस्

### सेटअप पछि साइटहरू पहुँच गर्न सकिँदैन (सबडोमेन)

यदि तपाईंले सबडोमेन संरचना रोज्नुभएको छ भने, तपाईंले आफ्नो डोमेनका लागि **वाइल्डकार्ड DNS** कन्फिगर गर्नुपर्छ। एउटा DNS रेकर्ड थप्नुहोस्:

```
Type: A (or CNAME)
Host: *
Value: [तपाईंको सर्भर IP]
```

यदि तपाईंलाई यो कसरी कन्फिगर गर्ने भन्ने बारे शंका छ भने आफ्नो होस्टिङ प्रदायकसँग जाँच गर्नुहोस्।

### सेटअप पछि प्रमाणीकरण समस्याहरू

यदि तपाईं लॉग आउट हुनुहुन्छ वा मल्टीसाइट सेटअप पछि कुकी त्रुटिहरू अनुभव गर्नुहुन्छ भने:

१. साइटको लागि आफ्नो ब्राउजर कुकीहरू सफा गर्नुहोस्
२. `yourdomain.com/wp-login.php` मा फेरि लगइन गर्नुहोस्
३. यदि समस्या अझै रहन्छ भने, जाँच गर्नुहोस् कि तपाईंको `wp-config.php` मा `COOKIE_DOMAIN` लाई `false` सेट गरिएको छैन — यो सबडोमेन मल्टीसाइट इन्स्टलेसनमा ज्ञात समस्या हो।

### इन्स्टलेसनको क्रममा एउटा चरण असफल भयो

جيئن ڪا انٽالينگ سٽپ تي غلطي ڏئي ٿي ته:

1. ڏٺل غلطي جو ميساج نوٽ ڪريو
2. configuration سٽپ تي واپس وڃو ۽ फेرس بار ڪريو
3. جيڪڏهن غلطي برقرار رهي، ته اضافي تفصيل لاءِ پنهنجي server جي PHP error log کي چيڪ ڪريو
4. جيڪي سٽپ اڳ ۾ hi مکمل ٿي ويا آهن انهن کان پوءِ ڪنهن به رنڊ تي کٽائي وينديون (انٽالر idempotent آهي)
