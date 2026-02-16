---
title: डैशबोर्ड को समझना
sidebar_position: 7
_i18n_hash: 4869a2f03eb529c49c821a22eb6b9647
---
# Ultimate Multisite Dashboard को समझना

इससे पहले कि हम Ultimate Multisite की advanced configuration options और operational aspects में गहराई से उतरें, आइए एक नज़र dashboard पर डालते हैं।

कई WordPress plugins की तरह, Ultimate Multisite भी network-level में **Ultimate Multisite** नाम की एक menu entry बनाता है, जिसके नीचे कई sub-menu entries होती हैं।

## Network Dashboard Widgets

Ultimate Multisite network-level dashboard में कुछ उपयोगी widgets जोड़ता है। यह dashboard **My Sites → Network Admin → Dashboard** पर जाकर मिलता है। ये widgets network administrator के लिए जानकारी और आम कार्यों तक आसान पहुँच प्रदान करने के लिए बनाए गए हैं।

![Ultimate Multisite widgets के साथ Network Dashboard](/img/admin/network-dashboard-full.png)

### First Steps

![First Steps widget](/img/admin/network-dashboard-first-steps.png)

यह widget Ultimate Multisite की नई installation पर दिखाई देता है और network administrator को payment method configure करने और test account बनाने जैसे अतिरिक्त कार्य पूरे करने की याद दिलाता है।

### Summary

![Summary widget](/img/admin/network-dashboard-summary.png)

Summary widget दिन भर के signups और उनसे हुई revenue की जानकारी देता है। MRR (Monthly Recurring Revenue) revenue-generating memberships वाले customers की कुल अनुमानित आय दर्शाता है।

### Activity Stream

![Activity Stream widget](/img/admin/network-dashboard-activity-stream.png)

यह widget Ultimate Multisite में होने वाली सभी events की जानकारी देता है। इन events में signups, cancellations, site creations, deletions, और अन्य गतिविधियाँ शामिल हैं।

अधिक विस्तृत जानकारी के लिए documentation के Events section को देखें।

### Right Now

![Right Now widget](/img/admin/network-dashboard-right-now.png)

यह utility widget network में users और sites का संक्षिप्त सारांश दिखाता है। ऊपर दिए गए आसान shortcuts से एक click में नई sites या users बनाए जा सकते हैं।

### News and Discussions

![News and Discussions widget](/img/admin/network-dashboard-news.png)

यह widget Ultimate Multisite की नवीनतम खबरें लाकर दिखाता है। Updates, critical bugs, और security fixes की जानकारी के लिए इस widget पर नज़र रखें।

## Ultimate Multisite Dashboard

जहाँ network-level dashboard पूरे network की समग्र जानकारी प्रस्तुत करता है, वहीं Ultimate Multisite dashboard (Ultimate Multisite menu के top-level पर स्थित) service से संबंधित जानकारी प्रस्तुत करता है।

![Ultimate Multisite Dashboard](/img/admin/um-dashboard-top.png)

### Monthly Recurring Revenue Growth

MRR (Monthly Recurring Revenue) chart 12 महीने की calendar अवधि में revenue का मासिक breakdown दिखाता है।

![MRR Growth chart](/img/admin/um-dashboard-mrr.png)

नई revenue नीले रंग में और cancellations लाल रंग में दिखाई जाती हैं।

### Date-range Support

Customers और activity की संख्या के आधार पर, statistics काफी भारी हो सकते हैं। Dashboard में built-in date-range support की मदद से network administrator केवल जरूरी जानकारी और समय अवधि पर ध्यान केंद्रित कर सकते हैं।

![Date range selector और stats](/img/admin/um-dashboard-date-range.png)

Date range नीचे दिए गए widgets द्वारा दिखाई जाने वाली जानकारी की अवधि को नियंत्रित करती है, जिसमें revenue, new memberships, signups by country, signups by form, और most visited sites शामिल हैं।

![Dashboard statistics widgets](/img/admin/um-dashboard-stats.png)

:::tip
**Most Visited Sites** widget को काम करने के लिए, **Ultimate Multisite → Settings → Sites → Enable Visits Limitation and Counting** पर visit counting enable करें।
:::
