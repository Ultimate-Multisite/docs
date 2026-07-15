---
title: ग्राहकों का प्रबंधन
sidebar_position: 20
_i18n_hash: c0bc4b0ca27b0712c226667cba59835c
---
# ग्राहक प्रबंधन

**Customers** पेज आपके network में registered सदस्यों की सूची दिखाता है। इस पेज पर उपयोगकर्ता की बुनियादी जानकारी जैसे नाम, ईमेल पता, last login, और एक **switch to** लिंक दिखाई देता है जिससे आप site administrator के रूप में उपयोगकर्ता की subsite में लॉगिन कर सकते हैं।

![Customers सूची पेज](/img/admin/customers-list.png)

किसी ग्राहक के card के नीचे **Manage** पर क्लिक करके उस ग्राहक की विस्तृत जानकारी देखें।

ग्राहक विवरण पेज पर, **At a Glance** ब्लॉक में customer ID, last login का समय, और इस ग्राहक द्वारा खर्च की गई कुल राशि दिखाई देती है।

**Customer Options** ब्लॉक में आप इस ग्राहक को **VIP** के रूप में सेट कर सकते हैं (यह एक टैग है जिससे उन्हें खोजना आसान हो जाता है)। **Billing Info** टैब में billing संबंधी जानकारी जैसे ईमेल, पता और देश दिखाई देती है।

**Fields** ब्लॉक में ग्राहक का username, ईमेल दिखता है, और आप **Email Verification** स्थिति बदल सकते हैं।

Customer Options ब्लॉक के नीचे आपको चार अतिरिक्त ब्लॉक मिलेंगे:

- **Memberships** — वर्तमान subscriptions जिनमें ग्राहक subscribed है
- **Payments** — ग्राहक का भुगतान इतिहास
- **Sites** — इस ग्राहक की स्वामित्व वाली साइटें
- **Events** — इस ग्राहक से संबंधित घटनाएं (email verification, billing में बदलाव, आदि)

किसी भी आइटम के विवरण पेज पर जाने के लिए उसके बगल में arrow icon (→) पर क्लिक करें। उदाहरण के लिए, किसी साइट के बगल में arrow पर क्लिक करने से आप site edit पेज पर पहुंच जाएंगे जहां आप membership association, site type, और active स्थिति में बदलाव कर सकते हैं।

यही बात memberships और payments पर भी लागू होती है — प्रत्येक का लिंक विवरण पेज पर जाता है जहां आप membership status, associated customer, products, payment gateway settings में बदलाव कर सकते हैं, और यहां तक कि refunds भी process कर सकते हैं।

ग्राहक पेज के दाईं ओर, आपको मिलेगा:

- **Last Login & IPs** — Last login का समय, IP address, और देश
- **Timestamps** — ग्राहक account कब बनाया गया और कब आखिरी बार संशोधित किया गया
- **Delete** — ग्राहक को स्थायी रूप से हटाने का विकल्प

:::warning
ग्राहक को हटाना स्थायी है और इसे वापस नहीं किया जा सकता।
:::
