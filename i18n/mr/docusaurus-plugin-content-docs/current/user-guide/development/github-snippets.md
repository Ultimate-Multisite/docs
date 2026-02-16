---
title: GitHub स्निपेट्स
sidebar_position: 3
_i18n_hash: c643f3d76aace8c15fd224b984af6633
---
# आमच्या GitHub repository वर Ultimate Multisite snippets कसे वापरायचे

GitHub repository वर code snippets उपलब्ध आहेत जे Ultimate Multisite वापरकर्त्यांकडून वारंवार मागितले जातात. या वापरकर्त्यांना sign-up pages वर Google Analytics script जोडणे किंवा admin dashboard वरून meta box लपवणे यासारख्या छोट्या कार्यक्षमता जोडायच्या असतात.

हा लेख तुम्हाला हे codes कसे वापरायचे किंवा अधिक विशिष्टपणे कुठे ठेवायचे ते दाखवेल.

तुम्ही खालील लिंकवर snippets शोधू शकता.

https://github.com/next-press/wp-ultimo-snippets/

तुमच्यासाठी code जोडण्याचे २ मार्ग आहेत

  1. तुमच्या theme च्या functions.php फाइलमध्ये.

  2. Must-Use Plugins (mu-plugins)

# तुमच्या theme च्या functions.php फाइलमध्ये snippet कसे जोडायचे.

  1. तुमच्या WordPress Network admin dashboard मध्ये लॉग इन करा आणि Themes > Theme Editor वर जा (खालील screenshot पहा).

  2. "Edit Themes" पेजवर, तुमच्या स्क्रीनच्या वरच्या उजव्या बाजूला असलेल्या dropdown field मध्ये तुमची सक्रिय theme निवडलेली आहे याची खात्री करा (खालील screenshot मध्ये #3).

  3. फाइल लोड करण्यासाठी "Theme Files" विभागाखाली functions.php फाइलवर क्लिक करा. खाली scroll करा आणि GitHub repository वरून मिळवलेला Ultimate Multisite snippet paste करा.

<!-- Screenshot unavailable: WordPress Theme Editor showing functions.php file editing -->

# Must-Use Plugins (mu-plugins) कसे तयार करायचे

WordPress मध्ये एक वैशिष्ट्य आहे जे तुम्हाला "Must-Use Plugins" किंवा थोडक्यात "mu-plugins" नावाची custom कार्यक्षमता लोड करण्याची परवानगी देते.

हे विशेष mu-plugins इतर सर्व नियमित plugins पूर्वी लोड होतात आणि ते निष्क्रिय करता येत नाहीत. multisite network मध्ये, या mu-plugins मधील code तुमच्या installation मधील सर्व sites वर लोड होईल.

1\. तुमच्या WordPress install च्या filesystem मध्ये प्रवेश करण्यासाठी FTP किंवा SSH वापरा.

2\. तुमच्या WordPress install च्या wp-content directory मध्ये, mu-plugins नावाची नवीन directory तयार करा.

<!-- Screenshot unavailable: File manager showing wp-content directory with mu-plugins folder -->

3\. Notepad किंवा कोणताही code editor वापरून तुमच्या संगणकावर wu-snippet.php नावाची नवीन PHP फाइल तयार करा.

4\. GitHub repository वरून मिळवलेला Ultimate Multisite code snippet फाइलमध्ये ठेवा आणि सेव्ह करा. तुमच्या mu plugin ला लेबल करण्यासाठी तुम्ही code snippet च्या वर हा code देखील जोडू शकता.
