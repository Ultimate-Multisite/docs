---
title: चेकआउट फॉर्म्स
sidebar_position: 19
_i18n_hash: dfdf572ddbe8772e1d720be52eda83d3
---
# Checkout Forms

Checkout Forms हे नवीन ग्राहकांना आकर्षित करताना वेगवेगळ्या पद्धती वापरून पाहण्याचा एक सोपा आणि लवचिक मार्ग आहे.

Ultimate Multisite 2.0 मध्ये Checkout Form editor आहे ज्याच्या मदतीने तुम्ही हवे तितके forms तयार करू शकता - वेगवेगळी fields, वेगवेगळी products वगैरे.

हे feature वापरण्यासाठी, डाव्या बाजूच्या sidebar मधील Checkout Forms menu वर जा.

![Checkout Forms यादी](/img/config/checkout-forms-list.png)

या पेजवर तुम्ही तुमचे सर्व checkout forms पाहू शकता.

नवीन form तयार करायचा असेल, तर पेजच्या वर Add Checkout Form वर क्लिक करा.

सुरुवातीसाठी तुम्ही या तीन पर्यायांपैकी एक निवडू शकता: single step, multi-step किंवा blank. नंतर, Editor वर जाण्यासाठी Go to the Editor वर क्लिक करा.

![Checkout Form editor](/img/config/checkout-form-editor.png)

तसेच, तुमच्याकडे आधीपासून असलेले forms तुम्ही त्यांच्या नावाखालील options वर क्लिक करून edit किंवा duplicate करू शकता. तिथे form चा shortcode copy करण्याचा किंवा form delete करण्याचा पर्यायही मिळेल.

![Checkout form hover actions](/img/config/checkout-form-hover-actions.png)

### Checkout Form Edit करणे

तुम्ही वेगवेगळ्या उद्देशांसाठी checkout forms तयार करू शकता. या उदाहरणात आपण registration form वर काम करू.

Checkout form editor वर गेल्यावर, तुमच्या form ला एक नाव द्या (जे फक्त internal reference साठी वापरले जाईल) आणि एक slug द्या (shortcodes तयार करण्यासाठी वापरले जाते).

![Checkout Form editor](/img/config/checkout-form-editor.png)

Forms हे steps आणि fields चे बनलेले असतात. नवीन step add करण्यासाठी Add New Checkout Step वर क्लिक करा.

![Add New Checkout Step](/img/config/checkout-form-add-step.png)

Modal window च्या पहिल्या tab मध्ये, तुमच्या form च्या step चा content भरा. त्याला एक ID, नाव आणि description द्या. हे सर्व मुख्यत्वे internal वापरासाठी असतात.

![Checkout form step](/img/config/checkout-form-step.png)

पुढे, step ची visibility सेट करा. तुम्ही "Always show", "Only show for logged in users" किंवा "Only show for guests" यापैकी एक निवडू शकता.

![Checkout form step](/img/config/checkout-form-step.png)

शेवटी, step style configure करा. ही fields optional आहेत.

![Checkout form step](/img/config/checkout-form-step.png)

आता, आपल्या पहिल्या step मध्ये fields add करण्याची वेळ आली आहे. फक्त Add New Field वर क्लिक करा आणि तुम्हाला हवा असलेला section type निवडा.

![Checkout form step with fields](/img/config/checkout-form-step.png)

प्रत्येक field साठी वेगवेगळे parameters भरावे लागतात. या पहिल्या entry साठी, आपण "Username" field निवडू.

![Checkout form step](/img/config/checkout-form-step.png)

![Checkout form step](/img/config/checkout-form-step.png)

![Checkout form step](/img/config/checkout-form-step.png)

तुम्हाला हवे तितके steps आणि fields add करता येतात. तुमच्या ग्राहकांना products दाखवण्यासाठी आणि त्यांना एक निवडू देण्यासाठी, Pricing Table field वापरा. तुमच्या clients ना template निवडू द्यायचे असल्यास, Template Selection field add करा. असेच पुढे.

_**टीप:** checkout form तयार करण्यासाठी username, email, password, site title, site URL, order summary, payment, आणि submit button ही fields अनिवार्य आहेत._

तुम्ही checkout form वर काम करत असताना, तुमच्या clients ना form कसा दिसेल हे पाहण्यासाठी तुम्ही नेहमी Preview button वापरू शकता. तुम्ही existing user किंवा visitor म्हणून view मध्ये बदलही करू शकता.

![Checkout Form save](/img/config/checkout-form-save.png)

![Checkout Form editor](/img/config/checkout-form-editor.png)

शेवटी, Advanced Options मध्ये तुम्ही "Thank You" page साठी message configure करू शकता, conversions track करण्यासाठी snippets add करू शकता, तुमच्या checkout form मध्ये custom CSS add करू शकता किंवा ते विशिष्ट देशांपुरते मर्यादित करू शकता.

![Advanced Options](/img/config/checkout-form-advanced.png)

तुम्ही उजव्या column मधील हा option toggle करून तुमचा checkout form manually enable किंवा disable करू शकता, किंवा form कायमचा delete करू शकता.

![Active toggle](/img/config/checkout-form-active.png)

तुमचा checkout form save करायला विसरू नका!

![Save button](/img/config/checkout-form-save.png)

तुमच्या form चा shortcode मिळवण्यासाठी Generate Shortcode वर क्लिक करा आणि modal window मध्ये दिसणारा result copy करा.

![Save button with shortcode](/img/config/checkout-form-save.png)
