---
title: चेकआउट फॉर्म
sidebar_position: 19
_i18n_hash: dfdf572ddbe8772e1d720be52eda83d3
---
# Checkout Forms

Checkout Forms नए ग्राहकों को जोड़ने के लिए अलग-अलग तरीकों को आज़माने का एक आसान और लचीला तरीका है।

Ultimate Multisite 2.0 में एक Checkout Form editor है जिससे आप जितने चाहें उतने फ़ॉर्म बना सकते हैं, अलग-अलग फ़ील्ड्स, प्रोडक्ट्स वगैरह के साथ।

इस फ़ीचर को एक्सेस करने के लिए, बाएं साइडबार में Checkout Forms मेन्यू पर जाएं।

![Checkout Forms list](/img/config/checkout-forms-list.png)

इस पेज पर आप अपने सभी checkout forms देख सकते हैं।

अगर आप नया फ़ॉर्म बनाना चाहते हैं, तो बस पेज के ऊपर Add Checkout Form पर क्लिक करें।

आप शुरुआती पॉइंट के रूप में इन तीन विकल्पों में से एक चुन सकते हैं: single step, multi-step या blank। फिर, Go to the Editor पर क्लिक करें।

![Checkout Form editor](/img/config/checkout-form-editor.png)

इसके अलावा, आप पहले से बने फ़ॉर्म को edit या duplicate भी कर सकते हैं, उसके नाम के नीचे दिए गए options पर क्लिक करके। वहां आपको फ़ॉर्म का shortcode कॉपी करने या फ़ॉर्म डिलीट करने के विकल्प भी मिलेंगे।

![Checkout form hover actions](/img/config/checkout-form-hover-actions.png)

### Checkout Form को Edit करना

आप अलग-अलग उद्देश्यों के लिए checkout forms बना सकते हैं। इस उदाहरण में हम एक registration form पर काम करेंगे।

Checkout form editor पर जाने के बाद, अपने फ़ॉर्म को एक नाम दें (जो सिर्फ़ internal reference के लिए होगा) और एक slug (जिसका इस्तेमाल shortcodes वगैरह बनाने में होता है)।

![Checkout Form editor](/img/config/checkout-form-editor.png)

फ़ॉर्म steps और fields से बने होते हैं। नया step जोड़ने के लिए Add New Checkout Step पर क्लिक करें।

![Add New Checkout Step](/img/config/checkout-form-add-step.png)

Modal window के पहले टैब में, अपने फ़ॉर्म के step का content भरें। इसे एक ID, नाम और description दें। ये चीज़ें ज़्यादातर internal use के लिए होती हैं।

![Checkout form step](/img/config/checkout-form-step.png)

इसके बाद, step की visibility सेट करें। आप "Always show", "Only show for logged in users" या "Only show for guests" में से चुन सकते हैं।

![Checkout form step](/img/config/checkout-form-step.png)

अंत में, step की style configure करें। ये optional फ़ील्ड्स हैं।

![Checkout form step](/img/config/checkout-form-step.png)

अब हमारे पहले step में fields जोड़ने का समय है। बस Add New Field पर क्लिक करें और जो section type चाहिए वो चुनें।

![Checkout form step with fields](/img/config/checkout-form-step.png)

हर field में अलग-अलग parameters भरने होते हैं। इस पहली entry के लिए, हम "Username" field चुनेंगे।

![Checkout form step](/img/config/checkout-form-step.png)

![Checkout form step](/img/config/checkout-form-step.png)

![Checkout form step](/img/config/checkout-form-step.png)

आप जितने चाहें उतने steps और fields जोड़ सकते हैं। ग्राहकों को प्रोडक्ट्स दिखाने के लिए जहां से वो चुन सकें, Pricing Table field का इस्तेमाल करें। अगर आप clients को template चुनने देना चाहते हैं, तो Template Selection field जोड़ें। और इसी तरह आगे।

_**नोट:** checkout form बनाने के लिए username, email, password, site title, site URL, order summary, payment और submit button mandatory fields हैं।_

जब आप अपने checkout form पर काम कर रहे हों, तो आप कभी भी Preview बटन का इस्तेमाल करके देख सकते हैं कि आपके clients को फ़ॉर्म कैसा दिखेगा। आप existing user या visitor के रूप में देखने के बीच भी switch कर सकते हैं।

![Checkout Form save](/img/config/checkout-form-save.png)

![Checkout Form editor](/img/config/checkout-form-editor.png)

अंत में, Advanced Options में आप "Thank You" पेज का message configure कर सकते हैं, conversions track करने के लिए snippets जोड़ सकते हैं, अपने checkout form में custom CSS जोड़ सकते हैं या इसे कुछ खास देशों तक सीमित कर सकते हैं।

![Advanced Options](/img/config/checkout-form-advanced.png)

आप दाएं column में इस option को toggle करके अपने checkout form को manually enable या disable भी कर सकते हैं, या फ़ॉर्म को permanently delete कर सकते हैं।

![Active toggle](/img/config/checkout-form-active.png)

अपना checkout form save करना न भूलें!

![Save button](/img/config/checkout-form-save.png)

अपने फ़ॉर्म का shortcode पाने के लिए Generate Shortcode पर क्लिक करें और modal window में दिखाए गए result को कॉपी करें।

![Save button with shortcode](/img/config/checkout-form-save.png)
