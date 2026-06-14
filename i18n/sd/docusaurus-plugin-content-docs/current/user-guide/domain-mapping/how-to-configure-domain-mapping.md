---
title: ڊومين ميپنگ ڪيئن ڪريون
sidebar_position: 6
_i18n_hash: 53ce91dcbf4f1046b0f74271decfcb77
---
# ডোমেইন ম্যাপিং কিভাবে কনফিগার করবেন (v2)

_**গুরুত্বপূর্ণ নোট: এই নিবন্ধটি Ultimate Multisite ভার্সন ২.x এর জন্য প্রযোজ্য।**_

একটি প্রিমিয়াম নেটওয়ার্কের সবচেয়ে শক্তিশালী ফিচারগুলোর মধ্যে একটি হলো আমাদের ক্লায়েন্টদের তাদের সাইটগুলিতে একটি টপ-লেভেল ডোমেইন যুক্ত করার সুযোগ দেওয়া। কারণ, কোনটি বেশি পেশাদার দেখায়: [_**joesbikeshop.yournetwork.com**_](http://joesbikeshop.yournetwork.com) নাকি [_**joesbikeshop.com**_](http://joesbikeshop.com)? এই কারণেই Ultimate Multisite এই ফিচারটি সরাসরি যুক্ত করে দিয়েছে, তৃতীয় পক্ষের প্লাগইন ব্যবহার করার প্রয়োজন নেই।

## ডোমেইন ম্যাপিং কী?

নাম যেমন বোঝায়, ডোমেইন ম্যাপিং হলো Ultimate Multisite যে ক্ষমতা দেয়, তা হলো কাস্টম ডোমেইনের অনুরোধ গ্রহণ করা এবং সেই অনুরোধটিকে নেটওয়ার্কের সংশ্লিষ্ট সাইটের সাথে যুক্ত করে দেখানো যেখানে নির্দিষ্ট ডোমেইনটি সংযুক্ত থাকবে।

### আপনার Ultimate Multisite নেটওয়ার্কে ডোমেইন ম্যাপিং কিভাবে সেটআপ করবেন

ডোমেইন ম্যাপিং কাজ করার জন্য আপনার দিক থেকে কিছু সেটিং সেটআপ করতে হয়। সৌভাগ্যবশত, Ultimate Multisite আপনার কঠিন কাজটি স্বয়ংক্রিয়ভাবে করে দেয় যাতে আপনি সহজেই প্রয়োজনীয় শর্তগুলো পূরণ করতে পারেন।

Ultimate Multisite ইনস্টল করার সময়, উইজার্ডটি স্বয়ংক্রিয়ভাবে **sunrise.php** ফাইলটি নির্দিষ্ট ফোল্ডারে কপি এবং ইনস্টল করবে। এই ধাপটি সম্পন্ন না করা পর্যন্ত উইজার্ড আপনাকে এগিয়ে যেতে দেবে না।

<!-- Screenshot unavailable: Ultimate Multisite installation wizard with sunrise.php step -->

এর মানে হলো, একবার Ultimate Multisite ইনস্টলেশন উইজার্ড আপনার নেটওয়ার্ক সেটআপ শেষ করলে, আপনি সাথে সাথেই কাস্টম ডোমেইন ম্যাপিং শুরু করতে পারবেন।

মনে রাখবেন, Ultimate Multisite-এ ডোমেইন ম্যাপিং বাধ্যতামূলক নয়। আপনার কাছে WordPress Multisite এর নেটিভ ডোমেইন ম্যাপিং ফাংশন বা অন্য যেকোনো ডোমেইন ম্যাপিং সমাধান ব্যবহার করার বিকল্প রয়েছে।

جيڪڏهن توهان کي ٻين دومين ميپنگ حلن لاءِ Ultimate Multisite جو دومين ميپنگ بند ڪرڻو پوندو، ته توهان **Ultimate Multisite > Settings > Domain Mapping** اندر هيٺ ڏنل فيچر کي بند ڪري سگهو ٿا.

![Domain Mapping settings page showing admin redirect, mapping message and DNS options](/img/config/domain-mapping-settings.png)

هيٺ اسان هن آپشن جي نتيجي **Force Admin Redirect** (Admin Redirect کي زور ڏيڻ) جو آپشن به ڏس سگهو ٿا. هي آپشن توهان کي ڪنٽرول ڪرڻ جي اجازت ڏئي ٿو ته توهان جا گهڻا صارف پنهنجي ڪسٹم دومين ۽ سبڊومين ٻ both ان تي رسائي سگهن ٿا يا صرف ان ۾ هڪ تي.

جيڪڏهن توهان **Force redirect to mapped domain** (ميپ ٿيل دومين ڏانهن زور سان ريڊيڪٽ ڪريو) چونڊيو، ته توهان جا گهڻا صارف پنهنجي ڪسٹم دومين تي فقط پنهنجي ڊش بورڊ رسائي سگهن ٿا.

**Force redirect to network domain** (نڊ ورڪ نتيجي دومين ڏانهن زور سان ريڊيڪٽ ڪريو) آپشن جو عمل بالکل الڳ آهي - توهان جا گهڻا صارف پنهنجي سبڊومين تي فقط ڊش بورڊ رسائي سگهن ٿا، جيتوڻي تاهه انهن جي ڪسٹم دومين تي لاگ ڪرڻ جي ڪوشش ڪريون.

هيٺ **Allow access to the admin by both mapped domain domain and network domain** (ميپ ٿيل دومين ۽ نڊ ورڪ نتيجي دومين ٻنهي دومين تي ڊش بورڊ رسائي اجازت ڏيو) آپشن انهن کي پنهنجي سبڊومين ۽ ڪسٹم دومين ٻئي تي پنهنجي ڊش بورڊ رسائي ڪرڻ جي اجازت ڏئي ٿو.

![Admin Redirect dropdown expanded showing the three redirect options](/img/config/domain-mapping-redirect-options.png)

ڪسٹم دومين ميپ ڪرڻ جا دو سڀ کان طريقا آهن. هڪ ان سان آهي ته توهان پنهنجي نڊ ورڪ ڊش بورڊ کان سوپر اڊمن (super admin) جي طور تي دومين جو نام ميپ ڪيو، ۽ ٻيو حساب جي صفحو (account page) تحت سبسايت اڊمن (subsite admin) ڊش بورڊ جي ذريعي.

پر پنهنجي نڊ ورڪ ۾ هڪ سبسايت ۾ ڪسٹم دومين کي ميپ ڪرڻ شروع ڪرڻ کان اڳ، توهان کي يقيني بڻائڻو پوندو ته دومين جو **DNS settings** صحيح طرح ترتیب ڏنل آهي.

###

### DNS सेटين جي صحيح ترتيب کي يقيني بڻائڻ

Mapping काम गर्नको लागि, तपाईंले जुन डोमेनलाई नक्सा (map) गर्ने योजना बनाइरहनुभएको छ, त्यो आफ्नो नेटवर्कको IP address मा इंगित भएको सुनिश्चित गर्नुपर्छ। ध्यान दिनुहोस् कि तपाईंलाई नेटवर्कको IP address चाहिन्छ - अर्थात् Ultimate Multisite इन्स्टल गरिएको डोमेनको IP address, तपाईंले नक्सा गर्न चाहनुभएको कस्टम डोमेनको IP address होइन। कुनै विशेष डोमेनको IP address खोज्नका लागि, हामी सुझाव दिन्छौं [Site24x7](https://www.site24x7.com/find-ip-address-of-web-site.html) मा जान, उदाहरणका लागि।

डोमेनलाई सही तरिकाले नक्सा गर्नको लागि, तपाईंले आफ्नो **DNS** कन्फिगरेसनमा त्यो **IP address** मा इंगित गर्ने एउटा **A RECORD** थप्नुपर्छ। विभिन्न डोमेन रजिस्ट्रारहरूबीच DNS व्यवस्थापन धेरै फरक हुन्छ, तर यदि तपाईं " _Creating A Record on XXXX_ " खोज्नुभयो जहाँ XXXX तपाईंको डोमेन रजिस्ट्रार हो (जस्तै: " _Creating A Record on_ _GoDaddy_ ") भने त्यसका लागि धेरै ट्युटोरियल अनलाइन उपलब्ध छन्।

यदि तपाईंलाई यो काम गर्नमा समस्या भइरहेको छ भने, **तपाईंको डोमेन रजिस्ट्रार सपोर्टलाई सम्पर्क गर्नुहोस्** र उनीहरूले यस भागमा तपाईंलाई मद्दत गर्न सक्छन्।

यदि तपाईं आफ्ना ग्राहकहरूलाई आफ्नै डोमेन नक्सा गर्न अनुमति दिन योजना बनाउँदै हुनुहुन्छ भने, उनीहरूले यो काम आफैं गर्नुपर्नेछ। यदि उनीहरूले A Record बनाउन नसकेको पाए भने, उनीहरूलाई आफ्नो रजिस्ट्रार सपोर्ट प्रणालीतर्फ निर्देशित गर्नुहोस्।

### सुपर एडमिनको रूपमा कस्टम डोमेन नाम नक्सा गर्ने (Mapping custom domain name as Super Admin)

जब तपाईं आफ्नो नेटवर्कमा सुपर एडमिनको रूपमा लगइन गर्नुहुन्छ, तपाईंले **Ultimate Multisite > Domains** अन्तर्गत गएर सजिलै कस्टम डोमेनहरू थप्न र व्यवस्थापन गर्न सक्नुहुन्छ।

![Domains list page in Ultimate Multisite](/img/admin/domains-list.png)

ا اس صفحے تي، آپ اوپر موجود **Add Domain** بٹن پر کلک کر سکدے ہیں اور اس سے ایک موڈل ونڈ کھلے گا جہاں آپ اپنی **custom domain name**، وہ **subsite** جو آپ کو custom domain نام کے ساتھ لاگو کرنا ہے، اور یہ فیصلہ کریں کہ کیا آپ اسے **primary domain** کا نام رکھنا چاہتے ہیں یا نہیں۔ (نوٹ: آپ ایک ہی subsite پر **متعدد domain names** کو مپ کر سکتے ہیں۔)

![Add Domain modal with domain name, site picker and primary domain toggle](/img/admin/domain-add-modal.png)

تمام معلومات ڈالنے کے بعد، آپ نیچے دیے گئے **Add Existing Domain** بٹن پر کلک کر سکتے ہیں۔

یہ custom domain کی DNS معلومات کو چیک کرنے اور حاصل کرنے کا عمل شروع کرے گا۔ آپ اس پورے عمل کو دیکھنے کے لیے صفحے کے نیچے ایک لاگ بھی دیکھ سکیں گے۔ اس عمل میں مکمل ہونے میں چند منٹ لگ سکتے ہیں۔

Ultimate Multisite v2.13.0 نئے سائٹ بنانے پر خود بخود انٹروڈکٹو ڈومین ریکارڈ بھی بناتا ہے جب وہ ہوسٹ (host) ایسا ہو جسے ہر سائٹ کے لیے الگ ڈومین سمجھا جائے۔ اگر ہوسٹ نیٹ ورک کا بنیادی ڈومین ہو، یا **Site URL** فیلڈ میں ترتیب دی گئی شیئرڈ چیک آؤٹ فارم بیس ڈومینز میں سے کوئی ایک ہو، تو خود بخود مپ شدہ ڈومین ریکارڈ کو چھوڑ دیا جاتا ہے تاکہ مشترکہ بنیادی ڈومین ہر اس سائٹ کے لیے دستیاب رہے۔

اگر سب کچھ ٹھیک سیٹ ہو جائے تو **Stage** یا اسٹیٹس **Checking DNS** سے بدل کر **Ready** ہو جائے گا۔

<!-- Screenshot unavailable: Domain row showing the Checking DNS stage in the domains list -->

<!-- Screenshot unavailable: Domain row showing the Ready stage with the green status indicator -->

اگر آپ ڈومین کا نام پر کلک کرتے ہیں، تو آپ اس کے اندر کچھ آپشنز دیکھ سکیں گے۔ آئیے ان پر ایک نظر ڈالتے ہیں:

![Domain detail page with stage, site, active, primary and SSL toggles](/img/admin/domain-edit.png)

**Stage:** यो त्यो चरण हो जसमा डोमेन अस्ति। जब तपाईंले पहिलो पटक डोमेन थप्नुहुन्छ, यो सम्भवतः **Checking DNS** चरणमा हुनेछ। यस प्रक्रियाले DNS entries जाँच गर्छ र तिनी सही छन् वा छैनन् भनेर पुष्टि गर्छ। त्यसपछि, डोमेनलाई **Checking SSL** चरणमा राखिनेछ। Ultimate Multisite ले डोमेनमा SSL छ वा छैन भनेर जाँच गर्नेछ र तपाईंको डोमेनलाई **Ready** वा **Ready (without SSL)** को रूपमा वर्गीकरण गर्नेछ।

**Site:** यो त्यो सबडोमेन हो जुन यस डोमेनसँग जोडिएको हुन्छ। नक्सा गरिएको डोमेनले यो विशेष साइटको सामग्री देखाउनेछ।

**Active:** तपाईंले डोमेन सक्रिय गर्न वा निष्क्रिय गर्न यो विकल्प अन वा अफ गर्न सक्नुहुन्छ।

**Is Primary Domain?:** तपाईंको ग्राहकहरूले प्रत्येक साइटका लागि एउटै भन्दा बढी नक्सा गरिएका डोमेनहरू राख्न सक्छन्। यस विशेष साइटको लागि यो प्राथमिक डोमेन छ कि छैन भनेर चयन गर्न यो विकल्प प्रयोग गर्नुहोस्।

**Is Secure?:** यद्यपि Ultimate Multisite ले SSL प्रमाणपत्र छ वा छैन भनेर जाँच गर्छ, तपाईंले मैन्युअल रूपमा SSL प्रमाणपत्र सहित वा बिना SSL प्रमाणपत्रका साथ डोमेन लोड गर्न चयन गर्न सक्नुहुन्छ। ध्यान दिनुहोस् कि यदि वेबसाइटमा SSL प्रमाणपत्र छैन र तपाईंले यसलाई SSL सहित बलपूर्वक लोड गर्ने प्रयास गर्नुभयो भने, यसले त्रुटिहरू दिन सक्छ।

### Subsite प्रयोगकर्ताको लागि कस्टम डोमेन नाम नक्सा गर्ने

सबडोसाइट एडमिनहरूले आफ्नो सबसाइट एडमिन ड्यासबोर्डबाट कस्टम डोमेन नाम पनि नक्सा गर्न सक्छन्।

सबैभन्दा पहिले, तपाईंले **Domain mapping** सेटिङ अन्तर्गत यो विकल्प सक्षम गर्नुभएको छ कि छैन भनेर सुनिश्चित गर्नुपर्छ। तलको स्क्रिनशट हेर्नुहोस्।

<!-- Screenshot unavailable: Domain mapping settings allowing subsite users to map domains via Customer DNS Management toggle -->

तपाईंले **Ultimate Multisite > Products** मा **Plan** स्तर वा उत्पादन विकल्प अन्तर्गत यो विकल्प सेट वा कन्फिगर गर्न पनि सक्नुहुन्छ।

![Custom Domains section on the product edit page](/img/config/product-custom-domains.png)

جڏهن ڪا به ان خيارن مان فعال ٿئي ۽ ڪنه هميشه جي صارف کي ڪسٽم دومين نام (custom domain names) مپ ڪرڻ جي اجازت هجي، ته هميشه جي صارف کي **Account** صفحي تي **Domains** نالو واري هڪ ميٽابوڪس ڏسڻ گهرجي.

<!-- Screenshot unavailable: Subsite Account page with Domains metabox and Add Domain button -->

صارف **Add Domain** بٽون تي ڇڪي سگهي ٿو ۽ ان سان هڪ مودل ويندو اچي وڃي جتي ڪجهه تعليمات ڏنيون هونديون آهن.

<!-- Screenshot unavailable: Add Domain modal showing DNS A-record instructions for subsite users -->

پھر صارف **Next Step** تي ڇڪي سگهي ٿو ۽ ڪسٽم دومين جو نام شامل ڪرڻ لاءِ اڳتي وڌي سگهي ٿو. اهي اهو به چونڊي سگهن ٿا ته اهو پرائمري دومين هجي يا نه هجي.

<!-- Screenshot unavailable: Add Domain form with custom domain name field and primary domain toggle -->

<!-- Screenshot unavailable: Add Domain confirmation step that triggers DNS verification -->

**Add Domain** تي ڪلڪ ڪرڻ سان ڪسٽم دومين جي معلومات کي تصديق ڪرڻ ۽ حاصل ڪرڻ جو عمل شروع ٿيندو آهي.

### About Domain Syncing

Domain Syncing هڪ اهڙي عمل آهي جتي Ultimate Multisite ڪنه هميشه جي حساب ۾ ڪسٽم دومين جو نام توهان جي هاستنگ (hosting) حساب ۾ هڪ اضافي دومين طور شامل ڪري ٿو **تا ته دومين مپ ڪرڻ کا ڪم ڪجي**.

جڏهن ڪا به هميشه جي فراهمي (hosting provider) واري Ultimate Multisite دومين مپ ڪرڻ جي خاصيت سان جڙيل هجي، ته Domain syncing خود بخود ٿئي ٿو. موجوده وقت ۾، اهي هميشه جا فراهميون _Runcloud, Closte, WP Engine, Gridpane, WPMU Dev, Cloudways,_ ۽ _Cpanel._

جڏهن ڪا هاستنگ جي فراهمي جو انٽيغريشن فعال هجي، ته Ultimate Multisite نئين سائيٽن لاءِ هميشه طرف کان DNS يا ساب دومين (subdomain) جوٺ ڪرڻ جو ڪم به شروع ڪري سگهي ٿو. جيڪڏهن ڪنه به ڪم لاءِ ان کي ٻڌڻ وارو انٽيغريشن نه هجي، ته نو-اوب (no-op) ڪيو وڃي جيئن ڪيو ويندو آهي. مپ ڪيل دومينن لاءِ DNS ۽ SSL جا هيٺ ڏنل تصديقي عمل عام دومين مرحليء سان جاري ٿو.

توهان کي **Integration** ٽيپ تي Ultimate Multisite جي هيٺين setings ۾ activate ڪرڻ جي ضرورت پوندا.

![Integrations tab in Ultimate Multisite settings showing hosting providers](/img/config/integrations-tab.png)

<!-- Screenshot unavailable: Hosting provider Configuration links on the Integrations settings tab -->

_نوٽ اهو آهي ته جيڪڏهن توهان جو hosting provider ان اوترو ماڻهن مان ناهي، **توهان کي curs manually sync ڪرڻ يا domain name کي توهان جي hosting account ۾ add ڪرڻ جي ضرورت پوندي._
