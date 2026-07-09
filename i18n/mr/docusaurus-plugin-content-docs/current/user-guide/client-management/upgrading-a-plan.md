---
title: Plan अपग्रेड करणे
sidebar_position: 11
_i18n_hash: 292fe52b63762d11e65c720ada133d39
---
# Plan अपग्रेड करणे (v2)

_**महत्त्वाची टीप: हा लेख Ultimate Multisite आवृत्ती 2.x संदर्भित करतो.**_

तुमचे ग्राहक कोणत्याही वेळी त्यांचे plans अपग्रेड करू शकतात. ते दुसऱ्या plan वर अपग्रेड करू शकतात किंवा तुमच्या network वर तुम्ही देत असलेल्या कोणत्याही अतिरिक्त सेवा किंवा packages खरेदी करू शकतात.

या tutorial मध्ये ते त्यांचा plan कसा अपग्रेड करू शकतात आणि upgrade प्रक्रियेनंतर काय होते हे आपण पाहू.

त्यांचा plan अपग्रेड करण्यासाठी, तुमच्या ग्राहकांनी त्यांच्या dashboard मध्ये प्रवेश करून **Account** पृष्ठावर जावे.

![ग्राहकाच्या subsite dashboard मध्ये Account menu link दिसत आहे](/img/account-page/account-menu.png)

Account पृष्ठावर, त्यांना त्यांचे सध्याचे membership आणि त्याच्याशी संबंधित plan दाखवला जाईल. दुसऱ्या plan वर अपग्रेड करण्यासाठी, त्यांनी **Your Membership** विभागाच्या वरच्या-उजव्या कोपऱ्यातील **Change** वर क्लिक करणे आवश्यक आहे.

![Change button असलेले Account पृष्ठावरील Your Membership card](/img/account-page/membership-change-button.png)

त्यांना एका checkout form वर पुनर्निर्देशित केले जाईल जिथे सर्व उपलब्ध plans दाखवले जातील.

ते त्यांच्या सध्याच्या plan साठी उपलब्ध **सेवा आणि packages** देखील पाहू शकतील, जर त्यांना फक्त एखादी विशिष्ट सेवा किंवा package (जसे आमच्या येथील उदाहरणात अमर्याद भेटी किंवा disk space) खरेदी करायची असेल आणि plan अपग्रेड करायचा नसेल.

![ग्राहक बाजूला उपलब्ध plans आणि packages दाखवणारा upgrade picker](/img/account-page/upgrade-picker.png)

ते खरेदी करू इच्छित असलेले product निवडल्यानंतर, त्यांना आत्ताच किती रक्कम भरावी लागेल - कोणतेही विद्यमान credit वगळून - आणि पुढील billing तारखेला त्यांच्याकडून किती शुल्क आकारले जाईल हे दिसेल.

साधारणपणे, जर product दुसरा plan असेल आणि payment membership शुल्कांच्या दरम्यान केली जाणार असेल, तर त्यांना पहिल्या plan वर भरलेल्या रकमेचे credit मिळेल.

![credit लागू केलेले आणि पुढील billing रक्कम दाखवणारा upgrade payment summary](/img/account-page/upgrade-summary.png)

जर त्यांनी असा plan किंवा package निवडला ज्यामुळे सध्याच्या subscription मध्ये काहीही बदल होणार नाही, तर त्यांना ते स्पष्ट करणारा संदेश दिसेल.

![निवडलेला plan subscription बदलत नाही तेव्हा दिसणारी सूचना](/img/account-page/upgrade-no-change.png)

checkout पूर्ण झाल्यानंतर, नवीन product(s) तुमच्या ग्राहकांच्या account मध्ये जोडले जातील आणि नवीन product(s) च्या सर्व limits किंवा features त्वरित त्यात जोडल्या जातील: भेटी, disk space, posts, इत्यादी...

##

##

## Upgrade आणि Downgrade मार्ग

तुमच्या प्रत्येक product वर, तुमच्याकडे **Up & Downgrades** tab असेल. त्या tab वरील पहिला option **Plan Group** नावाचे field आहे.

**Plan groups** यामुळे तुम्ही Ultimate Multisite ला कळवू शकता की काही plans एकाच "family" मधील आहेत, आणि म्हणून upgrade/downgrade मार्गांचे options तयार करण्यासाठी त्यांचा वापर केला पाहिजे.

![Plan Group field असलेला product edit Up and Downgrades tab](/img/config/product-upgrades-plan-group.png)

उदाहरणार्थ, तुमच्याकडे **Free plan**, **Basic Plan** आणि **Premium Plan** उपलब्ध आहेत. **Free Plan** अंतर्गत subscribed असलेले users फक्त **Premium Plan** वर अपग्रेड करू शकावेत आणि त्यांनी "Basic Plan" upgrade option म्हणून पाहू नये, असे तुम्हाला हवे आहे. तुम्हाला फक्त खालील screenshots मध्ये दाखवल्याप्रमाणे Free आणि Premium plans साठी समान plan group नाव assign करायचे आहे.

![High End plan group assign केलेले Free Plan product page](/img/config/product-upgrades-free.png)

![High End plan group assign केलेले Premium Plan product page](/img/config/product-upgrades-premium.png)

यामुळे Ultimate Multisite ला असे कळवले जाईल की network मध्ये **High End** नावाची plans ची एक "family" आहे. Upgrades किंवा downgrades ऑफर करताना, फक्त त्याच family मधील plans user साठी option म्हणून सादर केले जातील.
